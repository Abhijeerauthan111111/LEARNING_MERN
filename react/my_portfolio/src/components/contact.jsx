import { Globe  } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
import { Twitter } from 'lucide-react';

import Section from './section';
import Links from './links';
const Contact=()=>{
    return <Section icon={<Globe />} section_name="Contact & Social Media " >
        <div >
        <p className="font-thin mb-2">Email: abhijeetrauthan0@gmail.com</p>
        <p className="font-thin mb-2">Phone: +91 90680-27449 </p>
        <Links icon={<Linkedin />} link_name={"Linkedin"} link={"https://lucide.dev/icons/github"} />
        <Links icon={<Github />} link_name={"Github"} link={"https://lucide.dev/icons/github"} />
        <Links icon={<Twitter />} link_name={"Twitter"} link={"https://lucide.dev/icons/github"} />
        </div>
        
    </Section>
    
}

export default Contact 
