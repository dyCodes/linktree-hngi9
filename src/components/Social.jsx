import slackIcon from "../assets/slack-icon.png";
import github from "../assets/github-icon.png";

const Social = () => {
  return (
    <section className="social">
      <a href="#dycodes" className="social-link">
        <img src={slackIcon} alt="slack" />
      </a>

      <a href="https://github.com/dycodes" className="social-link">
        <img src={github} alt="github" />
      </a>
    </section>
  )
}

export default Social