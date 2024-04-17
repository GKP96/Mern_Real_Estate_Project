import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import About from "./pages/About";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}



export default App;

