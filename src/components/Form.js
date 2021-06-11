import React from "react";

function Form({handleFirstNameChange,handleLastNameChange,firstName,lastName}){
    return(
<form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    )
}

export default Form