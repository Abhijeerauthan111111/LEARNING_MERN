import Pill from "./pill"

const Projectcard=({prj_name,prj_info,techused})=>{
    return<div className="shadow-lg rounded-xl bg-[#f2f5fa]  p-2 mb-3">
    <h1 className="font-bold pb-1  ">{prj_name}</h1>
    <p className="mb-2 font-thin">{prj_info}</p>
   {/* <span className="bg-blue-400 text-blue-700 rounded-md">react</span> */}
   <Pill tech={techused} bdr_rd={"rounded-xl"} txt_clr={"text-blue-700"} bg_colour={"bg-blue-400"} />

</div>
}

export default Projectcard