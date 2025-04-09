import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Footer from "./Components/Footer/Footer";
import Ticket from "./Pages/Ticket/Ticket";
import Detail from "./Pages/Ticket/Detail/Detail";
import CheckOut from "./Pages/Ticket/CheckOut/CheckOut";
import Invoice from "./Pages/Ticket/Invoice/Invoice";
import Services from "./Pages/Home/Services/Services";

function App() {
  return (
    <>
      <Router>
        <main className="w-full flex flex-col bg-neutral-50 min-h-screen">
          <Navbar />

          {/*Routing */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/bus-tickets" element={<Ticket />} />
            <Route path="/bus-tickets/Checkout" element={<CheckOut />} />
            <Route path="/bus-tickets/detail" element={<Detail />}></Route>
            <Route path="/bus-tickets/Payment" element={<Invoice />}></Route>
          </Routes>
          <Footer />
        </main>
      </Router>
    </>
  );
}

export default App;
