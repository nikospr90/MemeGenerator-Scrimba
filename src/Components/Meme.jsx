import "../Styles/Meme/Meme.css";
import file from "../memesData";
import { useState } from "react";

function Meme(){

    const [meme, setMeme] = useState([])

    function getMeme(){
        const data = file.data.memes
        let response = data[Math.floor(Math.random() * data.length)]['url'];
        setMeme(response);
    }

    return (
        <div className="meme">
            <div className="meme--form">
                <div className="inputs">
                    <div className="input--left">
                        <label htmlFor="toptext" >Top Text</label>
                        <input type="text" id ="toptext" className="toptext" placeholder="Shut up" />
                    </div>
                    <div className="input--right">
                        <label htmlFor="bottomtext">Bottom Text</label>
                        <input type="text" id="bottomtext" className="bottomtext" placeholder="And take my money" />
                    </div>
                </div>
                <button onClick={getMeme} type="submit">Get a new meme image 🚮</button>
            </div>
            <img className="meme--container" src={meme} alt="meme image"/>
        </div>
    )
}
export default Meme;

