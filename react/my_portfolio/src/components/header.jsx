import passphoto from '../assets/download.png'
const Header=()=>{
    return(
    <header className='bg-blue-600 text-white rounded-xl p-5' >
        <div className='flex items-center justify-between '>
         <div>
         <h1 className='font-bold text-3xl'>Abhijeet Rauthan</h1>
         <h1 className='text-l' >Full Stack Developer</h1>
         </div>
        
        <img src={passphoto} alt="" className='rounded-full size-16'/>
        </div>
    </header>

    )
}

export default Header