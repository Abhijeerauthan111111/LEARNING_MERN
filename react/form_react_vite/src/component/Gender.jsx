const Gender = () => {
    return (
      <>
         <h5>Gender</h5> 
        <div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
  <label className="form-check-label" for="flexRadioDefault1">
    Male
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" ></input>
  <label className="form-check-label" for="flexRadioDefault2">
    Female
  </label>
  
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"></input>
  <label className="form-check-label" for="flexRadioDefault3">
    Other
  </label>
  
</div>
      </>
    );
  }
  
  export default Gender;
  