import { Briefcase } from "lucide-react"
import Section from "./section"
import Projectcard from "./projectcard"

const Projects=()=>{

return <Section icon={<Briefcase/>} section_name="Projects">
      <Projectcard prj_name={"Calculator"} prj_info={"Developed a calculator"} techused={["react","Tailwind","Javascript","HTML"]} />
      <Projectcard prj_name={"Stone Paper Scissor"} prj_info={"Developed a fully working Stone paper scissor game in which we can play with computer and it also stores your winning and losing record in local database"} techused={["Javascript","Bottstrap","HTML"]} />
      <Projectcard prj_name={"Task Management System"} prj_info={"Developed a Task Management System which can be used in a office work to assign task to employees"} techused={["Php","Bootstrap","Jquery","HTML"]} />
      <Projectcard prj_name={"Quiz Game"} prj_info={"Developed a Quiz which Randomly give you 10 question"} techused={["C++"]} />
    </Section>

}
export default Projects