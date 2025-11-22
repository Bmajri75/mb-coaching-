// src/App.jsx
import Header from "./components/Header";
import Hero from "./components/Hero";
import Disciplines from "./components/Disciplines";
import Tarif from "./components/Tarif";
import APropos from "./components/APropos";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Reservation from "./components/Reservation";

function App() {
  return (
    <div className="min-h-screen bg-secondary">
      <Header />
      <Hero />
      <Disciplines />
      <Tarif />
      <APropos />
      <Reservation />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
