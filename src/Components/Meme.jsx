import "../Styles/Meme/Meme.css";
import { useState } from "react";
import { useEffect } from "react";

function Meme(){
    const [meme, setMeme] = useState({topText: "", bottomText: "", randomImage:"https://i.imgflip.com/1g8my4.jpg"});
    const [allMemeImages, setAllMemeImages] = useState([]);
    
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(data => setAllMemeImages(data.data.memes))
    }, []);

    function getMeme(){
        const data = allMemeImages;
        let index = Math.floor(Math.random() * data.length);
        let url = data[index].url;
        setMeme(prevState => ({ 
            ...prevState,
            randomImage: url
        }));
    }

    function handleChange(event){
        const {name, value} = event.target;
        setMeme(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <div className="meme">
            <div className="meme--form">
                <div className="inputs">
                    <div className="input--left">
                        <label htmlFor="toptext" >Top Text</label>
                        <input 
                            type="text" 
                            id ="toptext" 
                            className="toptext" 
                            placeholder="Shut up"
                            name="topText"
                            value={meme.topText}
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="input--right">
                        <label htmlFor="bottomtext">Bottom Text</label>
                        <input 
                            type="text" 
                            id="bottomtext"
                            className="bottomtext" 
                            placeholder="And take my money" 
                            name="bottomText"
                            value={meme.bottomText}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <button onClick={getMeme} type="submit">Get a new memeImage image 🚮</button>
            </div>
            <div className="meme--container">
                <img className="meme--image" src={meme.randomImage} alt="meme image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}
export default Meme;

