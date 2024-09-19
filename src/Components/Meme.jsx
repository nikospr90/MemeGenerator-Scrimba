import "../Styles/Meme/Meme.css";
import file from "../memesData";
import { useState } from "react";

function Meme(){
    
    // setAllMemeImages(prevState => prevState = file.data.memes);
    
    
    // console.log(allMemeImages);
    
    
    const [meme, setMeme] = useState({topText: "", bottomText: "", randomImage:"https://i.imgflip.com/1g8my4.jpg"});
    const [allMemeImages, setAllMemeImages] = useState(file);
    
    function getMeme(){
        const data = allMemeImages.data.memes
        let index = Math.floor(Math.random() * data.length);
        let url = data[index].url;
        let topText = document.getElementById("toptext").value;
        let bottomText = document.getElementById("bottomtext").value;
        setMeme(prevState => ({ 
            ...prevState,
            randomImage: url
        }));
        console.log(memeImage);
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
                <button onClick={getMeme} type="submit">Get a new memeImage image 🚮</button>
            </div>
            <img className="meme--container" src={meme.randomImage} alt="meme image"/>
        </div>
    )
}
export default Meme;

