import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Feed from "./components/Feed";
import PostForm from "./components/PostForm";
import LogInForm from "./components/LogInForm";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Feed />

        <Routes>
          <Route path="/login" element={<LogInForm />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/" element={<Hero />} />
        </Routes>
        
        <Footer />
      </Router>

     
    </>
  );
}

export default App;
