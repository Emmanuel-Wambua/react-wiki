import React from 'react'

const FiltersBtn = () => {
  return (
    <div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault1" />
        <label className="form-check-label" for="radioDefault1">
            Default radio
        </label>
        </div>
        <div className="form-check">
        <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault2" checked/>
        <label className="form-check-label" for="radioDefault2">
            Default checked radio
        </label>
        </div>
    </div>
  )
}

export default FiltersBtn