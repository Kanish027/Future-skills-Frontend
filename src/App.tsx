import CardDetails from "./components/CardDetails";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<CardDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
