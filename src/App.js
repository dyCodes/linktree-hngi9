import profile from "./assets/profile.png";
import shareIcon from "./assets/share-button.png";
// import dots from "./assets/dots.svg";
import slackIcon from "./assets/slack-icon.png";
import github from "./assets/github-icon.png";
import zuriLogo from "./assets/zuri-internship.png";
import i4gLogo from "./assets/i4g.png";

const App = () => {
  return (
    <div className="App">
      <header>
        <img id="profile_img" src={profile} alt="Yusuf Daudu" />

        <h1 id="profile_name">Yusuf Daudu</h1>
      </header>

      <main>

        <section className="links">
          <a href="eeeee" id="bbbb" className="btn link">
            Twitter Link
          </a>

          <a href="eeeee" id="bbbb" className="btn link">
            Zuri Team
          </a>

          <a href="eeeee" id="bbbb" className="btn link">
            Zuri Books
          </a>

          <a href="eeeee" id="bbbb" className="btn link">
            Python Books
          </a>

          <a href="eeeee" id="bbbb" className="btn link">
            Background Check for Coders
          </a>
          <a href="eeeee" id="bbbb" className="btn link">
            Design Books
          </a>
        </section>

        <section className="social">

        </section>
      </main>

      <footer>
        <a href="https://zuri.team">
          <img src={zuriLogo} alt="zuri logo" />
        </a>

        <p className="footer-text">HNG Internship 9 Frontend Task</p>

        <a href="#i4g">
          <img src={i4gLogo} alt="i4g logo" />
        </a>
      </footer>
    </div>
  )
}

export default App