import { useState } from "react/cjs/react.development";


const From = ({nimu}) =>{


    const[text, setText] = useState("");

    const nem = (event) =>{
setText(event.target.value);
    }


    const[day, setDay] = useState("");

    const kol = (event) =>{
setDay(event.target.value);
    }



    const[reminder, setReminder] = useState(false);

    const adu = (e) =>{

        setReminder(e.currentTarget.checked);
    }



    const het = (event) =>{
        event.preventDefault();
        if(!text){
            alert("please enter text");
            return
        }
        
nimu({text, day, reminder});


        setText("")
        setDay("")
        setReminder(false)
    }


    return(
        <div className="from">
            <form onSubmit={het}>
                <div className="first">
                <label>Enter name</label>
                <input type="text" value={text} onChange={nem} />
                </div>

                <div className="second">
                <label>Enter date</label>
                <input type="text" value={day} onChange={kol}/>
                </div>

                <div className="third">
                <p>Remeber me</p>
                <input type="checkbox" checked={reminder} value={reminder } onChange={adu} />
                </div>

                <button type="submit" className="forbtn">submit</button>
            </form>

        </div>

    );
}
export default From;