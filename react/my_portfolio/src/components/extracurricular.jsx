import { Award  } from 'lucide-react';
import Section from './section';
const Extracurricular=()=>{
    const activities=["Member of the university trading club","Organizer of a city Trading championship","Volunteer at local coding bootcamp for blind peoples"];
    return <Section icon={<Award />} section_name="Extracurricular Activities">
        <ol className='list-disc mx-4 font-thin'>
            {activities.map((activitie)=><li>{activitie}</li>)}
        </ol> 
    </Section>
    
}

export default Extracurricular 