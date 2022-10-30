import zuriLogo from "../assets/zuri-internship.png";
import i4gLogo from "../assets/i4g.png";

const Footer = () => {
  return (
    <footer>
      <a href="https://zuri.team">
        <img src={zuriLogo} alt="zuri logo" />
      </a>

      <p className="footer-text">HNG Internship 9 Frontend Task</p>

      <a href="#i4g">
        <img src={i4gLogo} alt="i4g logo" />
      </a>
    </footer>
  )
}

export default Footer