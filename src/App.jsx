import './App.css'
import "./components/Header";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <div className="cards-container">
        <ProfileCard
          src="/2b638b81907bc629b77b410034bacd7b.jpg"
          name="noa benshabat"
          descr="Web developer and designer."
          buttonType="student"
        />
        <ProfileCard
          src="/2b638b81907bc629b77b410034bacd7b.jpg"
          name="talya cohen"
          descr="Web developer and designer."
          buttonType="friend"
        />
        <ProfileCard
          src="/2b638b81907bc629b77b410034bacd7b.jpg"
          name="someone"
          descr="math teacher."
          buttonType="teacher"
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
