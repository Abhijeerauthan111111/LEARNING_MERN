import { UserRound } from 'lucide-react';
const Section=({icon, children, section_name})=>{
    return(
       <div className='my-5 mx-5 pb-4'>
         <div className='flex items-center my-3' >
            {icon}
            <h1 className='font-bold mx-2'>{section_name}</h1>
         </div>
         <div >
         {children} 
         </div>
            
       </div>
    )
}

export default Section  