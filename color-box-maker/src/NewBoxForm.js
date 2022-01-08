import React, {useState} from 'react';

const NewBoxForm = () => {
  const initialFormData = {
    color: "",
    width: "",
    height: ""
  }
  const [formData, setFormData] = useState(initialFormData);
    
  const handleChange = (e) => {
    e.preventDefault();
    const target = {};
    for (const key in e.target) {
      target[key] = key === "width" || key === "height" ? `${e.target.key}px` : e.target[key]
    }
    setFormData(data => ({
      ...data,
      [target.name]: target.value
    }));
  };

  const handleSubmit = (e) => {

  }

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
            id="color"
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
            id="width"
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
            id="height"
            value={formData.height}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button type="submit">make new box</button>
        </div>
      </form>
    </div>
  )
}

export default NewBoxForm;
