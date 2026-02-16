import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import BookSession from "./Components/BookSession";
import ContactSupport from "./Components/ContactSupport";
import LearningMaterial from "./Components/LearningMaterial";
import HomePage from "./Components/HomePage";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        {/* Main content area */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/book-session" element={<BookSession />} />
            <Route path="/contact-support" element={<ContactSupport />} />
            <Route path="/learning-material" element={<LearningMaterial />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
