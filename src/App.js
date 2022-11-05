import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App