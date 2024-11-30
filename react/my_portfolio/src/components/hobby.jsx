import { Heart  } from 'lucide-react';
import Section from './section';
const Hobbies=()=>{
    const myhobby=["Photography","Editing","Hiking","Trading"]
    return <Section icon={<Heart />} section_name="Hobbies & Interests">
        <ol className='list-disc mx-4 font-thin'>
            {myhobby.map((hobbies)=><li>{hobbies}</li>)}
        </ol>
    </Section>
    
}

export default Hobbies 