import { BookOpen } from 'lucide-react';
import Section from './section';
import Educationdone from './educationdone';
const Education=()=>{
    return <Section  icon={<BookOpen/>} section_name="Education">
       <Educationdone year={"2020-22"} college={"Uttarakhand Board Of Technical University"}  educationtype={"Polytechnic in Computer Science"}/> 
       <Educationdone year={"2022-25"} college={"Hemwati Nandan Bahuguna Garhwal University"}  educationtype={"Bachelors in Computer Science"}/> 
       <Educationdone year={"2024"} college={"Complete Coding"}  educationtype={"MERN Full Stack Development"}/>  
    </Section>
    
}

export default Education  