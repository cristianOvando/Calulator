import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import LoginPage from '../pages/loginpage';
import Homecalculator from '../pages/calculatorpage';
import Protected from "./Protected";
import UserContext from "../Context/UserContext";

function App() {

  const [isLoged, setIsLoged] = useState(false);

  return (
    <BrowserRouter>
    <UserContext.Provider value={{isLoged, setIsLoged}}>
        <Routes>
            <Route path="/" element={<LoginPage />}/>
            <Route element={<Protected isLoged={isLoged}/>}>
              <Route path="/home" element={<Homecalculator />}/>
            </Route>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;