import React, { useEffect, useState, useMemo } from 'react';
import './Feature.css';

function Features({ Current_Page }) {
  const [isLoading, setIsLoading] = useState(true);
  const [binaryData, setBinaryData] = useState({});
  const [categoricalData, setCategoricalData] = useState({});
  const [columns, setColumns] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [result, setResult] = useState(null);

  const Page = useMemo(() => ({
    'Heart_disease': 'Heart_disease_model',
    'Brain_stroke': 'Brain_stroke_model',
    'Diabetes': 'diabetes_disease_model',
    'Kidney_disease': 'Kidney_disease_model',
    'Cancer': 'Cancer_disease_model',
  }), []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://project-dr-backend.onrender.com/${Page[Current_Page]}`);
        const data = await response.json();
        setBinaryData(data['Binary_column']);
        setCategoricalData(data['categorical_columns']);
        setColumns(data['columns']);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [Current_Page, Page]);

  const handleNext = () => {
    if (validateCurrentStep()) {
      setCurrentStep(prevStep => prevStep + 1);
    } else {
      alert('Please provide the required data before proceeding.');
    }
  };

  const handleSubmit = () => {
    if (validateCurrentStep()) {
      fetch(`https://project-dr-backend.onrender.com/${Page[Current_Page]}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          setResult(data);
          document.querySelector('.Feature_child_2').style.display = 'none';
        })
        .catch(error => {
          console.error('Error:', error);
        });
    } else {
      alert('Please provide the required data before submitting.');
    }
  };

  const handleChange = (key, value) => {
    setFormData(prevData => ({
      ...prevData,
      [key]: value,
    }));
  };

  const validateCurrentStep = () => {
    const allData = [
      ...Object.keys(categoricalData).map(key => ({ type: 'categorical', key, options: categoricalData[key] })),
      ...Object.keys(binaryData).map(key => ({ type: 'binary', key, options: binaryData[key] })),
      ...columns.map(column => ({ type: 'column', key: column }))
    ];

    const currentData = allData[currentStep];
    return formData[currentData.key] !== undefined && formData[currentData.key] !== '';
  };

  const renderStep = () => {
    const allData = [
      ...Object.keys(categoricalData).map(key => ({ type: 'categorical', key, options: categoricalData[key] })),
      ...Object.keys(binaryData).map(key => ({ type: 'binary', key, options: binaryData[key] })),
      ...columns.map(column => ({ type: 'column', key: column }))
    ];

    const currentData = allData[currentStep];

    if (!currentData) return null;

    if (currentData.type === 'categorical' || currentData.type === 'binary') {
      return (
        <div className="form-section">
          <label>{currentData.key}</label>
          <select onChange={(e) => handleChange(currentData.key, e.target.value)}>
            <option value="">Select an option</option>
            {Array.isArray(currentData.options) && currentData.options.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      );
    }

    if (currentData.type === 'column') {
      return (
        <div className="form-section">
          <label>{currentData.key}</label>
          <input
            type='number'
            step='any'
            placeholder={`Enter ${currentData.key} value`}
            onChange={(e) => handleChange(currentData.key, e.target.value)}
          />
        </div>
      );
    }

    return null;
  };



  const DataTable = ({ data, header }) => {
    return (
      <table className="data-table">
        <thead className='Table-Header' >
          <tr className='Table-row'>
            <th className='Table-column'  style={{backgroundColor:'blueviolet'}}>{header}</th>
            <th className='Table-column'  style={{backgroundColor:'blueviolet'}}>Value</th>
          </tr>
        </thead>
        <tbody className="Table-body">
          {Object.entries(data).map(([key, value]) => (
            <tr className='Table-row' key={key}>
              <td className='Table-column' >{key}</td>
              <td className='Table-column' >{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className='Feature_main'>
      <div className='Feature_child_1'>
        To ensure the most accurate results, please provide all the details of your symptoms and features completely and correctly.
      </div>
      <div className='Feature_child_2'>
        {isLoading ? (
          <div className="loading">Loading data...</div>
        ) : (
          <>
            {renderStep()}
            {currentStep < (Object.keys(categoricalData).length + Object.keys(binaryData).length + columns.length - 1) ? (
              <button className='Feature_buttom' style={{ backgroundColor: '#a5d7ef', color: "#2a63d6" }} onClick={handleNext}>Next</button>
            ) : (
              <button className='Feature_buttom' onClick={handleSubmit}>Submit</button>
            )}
          </>
        )}
      </div>
      {result && (
        <div className='result'>
          <DataTable data={formData} header="Feature" />
          <DataTable data={result} header="Result" />
        </div>
      )}
    </div>
  );
}

export default Features;