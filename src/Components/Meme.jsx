import "../Styles/Meme/Meme.css";

function Meme(){
    return (
        <div className="meme">
            <form  action="">
                <div className="meme--form">
                    <div className="inputs">
                        <div className="input--left">
                            <label htmlFor="">Top Text</label>
                            <input type="text" id ="toptext" className="toptext" placeholder="Shut up" />
                        </div>
                        <div className="input--right">
                            <label htmlFor="">Bottom Text</label>
                            <input type="text" id="bottomtext" className="bottomtext" placeholder="And take my money" />
                        </div>
                    </div>
                    <button type="submit">Get a new meme image 🚮</button>
                </div>
            </form>
        </div>
    )
}
export default Meme;
