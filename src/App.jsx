import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header/Header";
import { List } from "./components/List";
import { Router } from "./Router";
import './global.css';

function App() {

  return (

    <BrowserRouter >
      <Header />
      <Router />
      <Footer />

    </BrowserRouter >
  )
}

export default App
