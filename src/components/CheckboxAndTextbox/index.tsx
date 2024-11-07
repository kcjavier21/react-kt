import React, { useState } from 'react'

const CheckboxAndTextbox: React.FC  = () => {
    // State for checkbox
    const [isChecked, setIsChecked] = useState<boolean>(false);
  
    // State for textbox
    const [text, setText] = useState<string>('');
  
    // Handle checkbox toggle
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(e.target.checked);
    };
  
    // Handle text change in textbox
    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);
    };
  
    return (
      <div className="container mt-4">      
        <div className="form-check mb-3 text-start">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheckbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="exampleCheckbox">
            Check me
          </label>
        </div>
  
        <div className="mb-3 text-start">
          <label htmlFor="exampleTextbox" className="form-label">Type something:</label>
          <input
            type="text"
            className="form-control"
            id="exampleTextbox"
            value={text}
            onChange={handleTextChange}
            placeholder="Enter text here"
          />
        </div>
  
        <br />
  
        <div className="alert alert-secondary text-start">
          <p>Checkbox is <strong>{isChecked ? 'checked' : 'unchecked'}</strong></p>
          <p>Textbox says: <strong>{text}</strong></p>
        </div>
      </div>
    );
}

export default CheckboxAndTextbox