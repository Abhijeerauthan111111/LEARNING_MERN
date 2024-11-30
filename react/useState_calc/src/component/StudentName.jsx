import React from 'react'

const StudentName = () => {
    const name =["Ravi","Nikhil","Sunil","Shuham"]

  return (
    <>
    <ol>
        
     {name.map(stname => <li>{stname}</li> )}
        
    </ol>
    <input type="text"  />
    <button></button>
    </>
  )
}

export default StudentName