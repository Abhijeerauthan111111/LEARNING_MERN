const Links=({icon,link_name,link})=>{
    return <span className=' my-3 text-[#050dff]   ' >
            <a href={link} target="_blank" className=" flex pb-2 hover:underline">{icon}{link_name}</a>
         </span>
         
        
}

export default Links