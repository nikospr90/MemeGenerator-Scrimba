import trollFace from "../assets/icons/troll-face.png";
import "../Styles/Header/Header.css";

function Header(){
    return(
        <header className="header">
            <div className="header--left">
                <img src={trollFace} alt="" className="header--img" />
                <h1 className="header--title">Meme Generator</h1>
            </div>
            <div className="header--right">
                <p className="header--description">React Couse - Project 3</p>
            </div>
        </header>
    )

}

export default Header;