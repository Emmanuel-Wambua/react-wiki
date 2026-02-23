import React from 'react'
import Gender from './Category/Gender'
import Species from './Category/Species'
import Status from './Category/Status'

const Filters = ({setStatus, setPageNumber, setGender, setSpecies}) => {
  let clear = () => {
    setStatus("");
    setGender("");
    setSpecies("");
    setPageNumber(1);
    window.location.reload(false);
  }
  return (
    <div className='col-3'>
      <div className='text-center fs-4 mb-4 fw-bold'>Filter</div>
      <div 
        onClick={clear}
        style={{cursor: "pointer"}} 
        className="text-center text-decoration-underline text-primary mb-4">
        Clear Filters
      </div>

      <div className="accordion" id="accordionExample">
        <Status setPageNumber={setPageNumber} setStatus={setStatus} />
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber}/>
        <Gender setGender={setGender} setPageNumber={setPageNumber} />
      </div>


    </div>
  )
}

export default Filters
