import { Link } from "react-router-dom"

const PageNotFound = () => {
  return (
    <div className="App" style={{ marginTop: "35vh" }}>
      <h1>404</h1>
      <p>Page not found</p>

      <br /> <br />

      <Link to="/">Back to Home</Link>
    </div>
  )
}

export default PageNotFound