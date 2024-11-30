import { Code, SpaceIcon  } from "lucide-react"
import Section from "./section"
import Pill from "./pill"

const Skills=()=>{
    let skill=["Javascript","React","html","Git","Node","Python", "java", "C++","Javascript","React","html","Git","Node","Python", "java", "C++",];

    return <Section icon={<Code/>}section_name="Skills" >
        <Pill tech={skill} txt_clr={"text-gray-700"} bdr_rd={"rounded-full"} bg_colour={"bg-gray-400"} className="flex flex-wrap"/>
    {/* {skill.map((values)=><Pill value={values} />)} */}
    </Section>
}
export default Skills