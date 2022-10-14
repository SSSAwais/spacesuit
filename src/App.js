import "./App.css";
import Header from "./layouts/header/Header";
import Routing from "./routes/Routing";
import Footer from "./layouts/footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
