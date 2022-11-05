import Header from "../components/Header";
import Links from "../components/Links";
import Social from "../components/Social";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <Header />

      <main>
        <Links />
        <Social />
      </main>

      <Footer />
    </div>
  )
}

export default Home