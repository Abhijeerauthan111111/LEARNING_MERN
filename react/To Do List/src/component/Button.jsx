const Button=({btnType,btnText,handler})=>{
    if(btnType==='success'){
        return <button className="btn btn-success btn-lg w-100 " onClick={handler} >{btnText}</button>;

    }
    else if(btnType==='danger'){
        return <button className="btn btn-danger btn-lg w-100 " onClick={handler} >{btnText}</button>;
    }
    else{
        return <button className="btn btn-primary btn-lg w-100 " onClick={handler} >{btnText}</button>;
    }
}

export default Button;