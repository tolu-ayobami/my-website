import React  from "react";
import Tasks from "./task";
import Header from "./header";
import Button from "./button";
import data from "./data";
import From from "./form";

import "./App.css";
import { useState } from "react/cjs/react.development";

function App() {

const yinu = (Task)=>{
const id = Math.floor(Math.random() * 1000) + 1

    const inu = { id, ...Task } 
    setTour([...tour, inu])
    

}



    const [tour, setTour] = useState(data);

    const Teg = (id) => {
        setTour(tour.filter((tours) => tours.id !== id))
    }

    const[Fat, setFat] = useState(true);

    const toh = () => {
        setFat(!Fat);

    }





return(

<div className="all">
   
    <div className="head-btn">
    <Header />
    <Button  git={toh} color={Fat? "red" : "green"}  gut={Fat}/>
    </div>
    <From nimu={yinu} />

<div className="tas">
    {Fat && <Tasks tour={tour}  brown={Teg} />}
    
    </div>

    
</div>



);


}
export default App; 