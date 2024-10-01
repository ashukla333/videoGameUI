import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/common/Header";
import VideoGameList from "./components/homePage/VideoGameList";
import ContactPage from "./components/contact/ContactPage";

const App = () => {
  return (
    <Router>
      <div className="bg-custom-gradient min-h-screen">
        <NavBar />
        <main className="container mx-auto px-4">
          <Routes>
            <Route path="/" element={<VideoGameList />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
