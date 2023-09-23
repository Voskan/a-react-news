import { useState } from "react";
import RergisterPage from "../RegisterPage";
import UserPage from "../UserPage";
import './app.css'
// import FTest from "../ForTest/FTest";

function App() {
  const [isRegistred, setIsRegistred] = useState(false)
  const [userData, setUserData] = useState(null)

  const handleRegistration = (uData) => {
    setUserData(uData)
    setIsRegistred(true)
  }
  
  return (
    <div className="app">
      {/* <FTest /> */}
      {
        isRegistred ?
          <UserPage userData={userData} /> :
            <RergisterPage handleRegistration={handleRegistration } />
      }
    </div>
  )
}

export default App;