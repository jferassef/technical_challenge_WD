import phonesList from "./data/phones.json";
import { useEffect, useState } from "react";
import PhoneList from "./components/PhoneList";
import Navbar from "./components/Navbar";

function App() {
  const [phones, setPhones] = useState(phonesList);

  return (
    <div className="App">
      <Navbar />
      <PhoneList phones={phones} />
    </div>
  );
}

export default App;
