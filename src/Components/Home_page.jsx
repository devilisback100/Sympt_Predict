import React from 'react'
import './Home_page.css'
import { img0 } from '../Components_list'
import {img1} from '../Components_list'
function Home_page() {
  return (
    <div className='Home_page_main'>
      <div className='Home_page_child_1'>
        <span className='Home_page_child_1_part_1'>
          Your health, our priority</span>
        <span className='Home_page_child_1_part_2'>
          Analyzing your symptoms for better care </span>
          
      </div>
      <div className='Home_page_child_2'>
        <img src={img0} alt='img' />
      </div>
      <span className='Home_Page_child_3'>
        <img style={{height:'inherit'}} src={img1} alt='img' />
      </span>
    </div>
  )
}

export default Home_page
