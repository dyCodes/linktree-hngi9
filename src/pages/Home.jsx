import Header from "../components/Header";
import Links from "../components/Links";
import Social from "../components/Social";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="App">
      <Header />

      <section className="container">
        <Links />
        <Social />
      </section>

      <Footer />
    </div>
  )
}

export default Home