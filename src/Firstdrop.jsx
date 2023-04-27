
import './App.css';
import React, { useState } from 'react';
function Drop() {
    const [selectedOption, setSelectedOption] = useState('option1');
  
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
    return (
      <div className='first'>
        <select value={selectedOption} onChange={handleOptionChange} >
          <option value="option1">Pakistan</option>
          <option value="option2">india</option>
          <option value="option3">afghanistan</option>
        </select>
        <br></br>
      </div>
    );
  }
  
  
  export default Drop;
  