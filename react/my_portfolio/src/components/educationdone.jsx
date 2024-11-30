const Educationdone=({year,educationtype,college})=>{
return(
    
    <div>
        <h1 className="font-bold pt-1 pb-1 ">{educationtype}</h1>
        <div className="flex pb-2 font-thin">
            <p  >{college},</p>
            <p className="mx-1 font-thin">{year}</p>
        </div>
    </div>
    
)
}

export default Educationdone