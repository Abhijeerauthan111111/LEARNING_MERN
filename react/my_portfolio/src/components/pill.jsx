

const Pill=({tech,bg_colour,bdr_rd,txt_clr})=>{
    return  <span className="flex flex-wrap">
        {tech.map((value)=> <span className={` ${bg_colour}  ${txt_clr} ${bdr_rd}  px-3 mb-2 py-1 mr-3`}>{value}</span> )}
    </span>
    
}
export default Pill