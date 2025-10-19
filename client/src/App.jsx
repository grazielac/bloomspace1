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
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LogInForm />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </BrowserRouter>

      <Header />
      <PostForm />

      <Feed />
      <Hero />
      <Footer />
    </>
  );
}

export default App;
