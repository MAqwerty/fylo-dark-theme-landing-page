import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout-NAV/Layout";
import Home from "./components/Home.jsx";
import Features from "./components/Features.jsx";
import Team from "./components/Team.jsx"
import SignIn from "./components/SignIn.jsx";
import NoPage from "./components/NoPage.jsx";

function App() {

  return (
    <> 
        <Layout />

          <Routes>
            <Route index element={<Home />} />              <Route path="Features" element={<Features />} />
            <Route path="Team" element={<Team />} />
            <Route path="SignIn" element={<SignIn />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
    </>
  );
}

export default App;

