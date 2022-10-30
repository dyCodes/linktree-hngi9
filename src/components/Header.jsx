import profile from "../assets/profile.png";
import shareIcon from "../assets/share-button.png";
import dotsIcon from "../assets/dot.png";

const Header = () => {
  return (
    <header>
      <img id="profile_img" src={profile} alt="Yusuf Daudu" />
      <h1 id="twitter" className="username">dyCodes</h1>
      <p id="slack" hidden>dyCodes</p>

      <div className="share-button">
        <img src={shareIcon} className="pc" alt="share" />
        <img src={dotsIcon} className="mobile" alt="share" />
      </div>
    </header>
  )
}

export default Header