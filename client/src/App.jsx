import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

import Feed from "./components/Feed";
import PostForm from "./components/PostForm";

function App() {
  return (
    <>
      <Header />
      <PostForm />

      <Feed />
      <Hero />
      <Footer />
    </>
  );
}

export default App;
