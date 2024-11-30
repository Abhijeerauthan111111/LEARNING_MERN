
import './App.css'
import Aboutme from './components/aboutme'
import Contact from './components/contact'
import Education from './components/education'
import Extracurricular from './components/extracurricular'
import Header from './components/header'
import Hobbies from './components/hobby'
import Projects from './components/projects'
import Skills from './components/skills'

function App() {
 

  return (
    <div className='bg-slate-100 px-3 py-8'>
        <div className='bg-white max-w-3xl pb-2 mx-auto rounded-xl shadow-lg'>
          <Header />
          <Aboutme />
          <Projects />
          <Skills/>
          <Education/>
          <Hobbies/>
          <Extracurricular/>
          <Contact/>
         
        </div>
    </div>
  )
}

export default App
  