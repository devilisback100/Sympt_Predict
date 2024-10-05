import React from 'react'
import './Page.css'
import { img2, img3, img4, img5, img6 } from '../Components_list'

function Page({page_name,Current_Page,clickPage}) {
    let page_data = {
        'Heart_disease': ["Empowering you with early detection: Our app analyzes your symptoms to predict Heart disease, helping you take proactive steps towards a healthier future.", img2],
        'Kidney_disease': ["Empowering you with early detection: Our app analyzes your symptoms to predict Kidney disease, helping you take proactive steps towards a healthier future.", img3],
        'Diabetes': ["Empowering you with early detection: Our app analyzes your symptoms to predict Diabetes, helping you take proactive steps towards a healthier future.", img4],
        'Cancer': ["Empowering you with early detection: Our app analyzes your symptoms to predict Cancer disease, helping you take proactive steps towards a healthier future.", img5],
        'Brain_stroke': ["Empowering you with early detection: Our app analyzes your symptoms to predict Brain stroke, helping you take proactive steps towards a healthier future.", img6]
    }

    return (
        <div className='Page_main' >
           <div className='Page_child_1'>
                {page_data[page_name][0]}
                <span onClick={()=>{Current_Page(page_name);clickPage('Feature')}}>Check out...</span>
           </div>
           <div className='Page_child_2'>
            <img src={page_data[page_name][1] } alt={page_name}/>
           </div>
            
        </div>
    )
}

export default Page
