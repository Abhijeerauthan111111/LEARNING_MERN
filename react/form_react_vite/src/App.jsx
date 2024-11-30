
import './App.css'
import AppName from './component/appname'
import Button from './component/button';
import Gender from './component/Gender';
import Grade from './component/Grade';
import Terms from './component/Terms';
import UserDetail from './component/userdetails';

function App() {

  return (
    <>
      <AppName />
      <UserDetail infotype={"Name"} phholder={"Enter Your Name"}/>
      <UserDetail infotype={"Email Address"} phholder={"Enter Your Email Adddress"}/>
      <UserDetail infotype={"Age"} phholder={"Enter Your Age"}/>
      <Grade/>
      <Gender/>
      <Terms/>
      <Button/>

    </>
  )
}

export default App;
 