import './App.css';
import React, { useState } from 'react';
import { Navbar, HomePage, Page, About, Feature } from './Components_list';
function App() {
  const [page_visit, set_page_visit] = useState('')
  const [click_page, set_click_page] = useState('Home')
  const [Current_Page, set_Current_Page] = useState('')

  return (
    <div className="App">
      <Navbar set_page_visit={set_page_visit} set_click_page={set_click_page} />
      {click_page === 'Home' && <HomePage   />}
      {click_page === 'Page' && <Page page_name={page_visit} Current_Page={set_Current_Page} clickPage={set_click_page} />}
      {click_page === 'About' && <About />}
      {click_page === 'Feature' && < Feature Current_Page={Current_Page} />}
    </div>
  );
}

export default App;
