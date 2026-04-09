import { BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">

        <header>
          <Navbar />
        </header>
        <main className="bg-gray-100 min-h-screen flex-1 flex flex-col">
          <Routes>
            
          </Routes>
        </main>

        <Footer/>

      </div>
    </BrowserRouter>
    </>
  );
};