import React from 'react'
import './About.css'
function About() {
    return (
        <div className='About_main'>
            <div className='About_child_1'>
                <div className='About_heading'>Model Overview</div>
                <div className='About_text'>Our AI-driven model analyzes key features and symptoms to predict the likelihood of  disease.</div>
                <div className='About_text'>Using advanced machine learning, this model provides a binary prediction for heart disease risk.</div>
            </div>
            <div className='About_child_2'>
                <div className='About_heading'>How It Works</div>
                <div className='About_text'>Input your symptoms and features to get a quick prediction of heart disease risk.</div>
                <div className='About_text'>Our model evaluates your data to provide an instant risk assessment</div>
            </div>
            <div className='About_child_3'>
                <div className='About_heading'>Accuracy and Reliability</div>
                <div className='About_text'>While our model is trained on extensive data, it is not a substitute for professional medical advice</div>
                <div className='About_text'>The model’s predictions are based on patterns in the data, but individual results may vary</div>
            </div>
            <div className='About_child_4'>
                <span>This prediction is not a diagnosis. Always consult a healthcare professional for medical advice</span>
                <span>
                    Predictions are for informational purposes only. Consult your doctor for a comprehensive evaluation.
                </span>
            </div>
        </div>
    )
}

export default About
