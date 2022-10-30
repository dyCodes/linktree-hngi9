import profile from "../assets/profile.png";
import shareIcon from "../assets/share-button.png";

const Header = () => {
  return (
    <header>
      <img id="profile_img" src={profile} alt="Yusuf Daudu" />
      <h1 id="twitter" className="username">dyCodes</h1>
      <p id="slack" hidden>dyCodes</p>
    </header>
  )
}

export default Header