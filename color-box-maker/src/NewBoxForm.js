import React, {cloneElement, useState} from 'react';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';

const NewBoxForm = ({makeNewBox}) => {
  const initialFormData = {
    color: "",
    width: "",
    height: ""
  }
  const [formData, setFormData] = useState(initialFormData);
    
  const handleChange = (e) => {
    setFormData(data => ({
      ...data,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    makeNewBox(formData);
    setFormData(initialFormData);
  };

  return (
    <div className="NewBoxForm">
      <form className="form">
        <div className="form-group">
          <label 
            htmlFor="color"
          >
            Color: 
          </label>
          <input
            type="text"
            placeholder="color"
            id="color"            name="color"
            value={formData.color}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label 
            htmlFor="width"
          >
            Width: 
          </label>
          <input
            type="text"
            placeholder="width"
            id="width"            name="width"
            value={formData.width}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label 
            htmlFor="height"
          >
              Height: 
          </label>
          <input
            type="text"
            placeholder="height"
            id="height"            name="height"
            value={formData.height}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button 
            onClick={handleSubmit}
          >
            make new box
          </button>
        </div>
      </form>
    </div>
  )
}

export default NewBoxForm;
