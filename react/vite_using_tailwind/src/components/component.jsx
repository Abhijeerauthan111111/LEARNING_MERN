import React from 'react'
import './component.css'
let Component = (props)=>{
return (
    <div className="smallbox">
        this is from component
        {props.children}
    </div>
)
}
export default Component