import SzovegKezeloFuggvenyek from "./components/SzovegKezeloFuggvenyek";
import { Fejlec } from "./components/Fejlec";
import { Lablec } from "./components/Lablec";

function App() {
  return (
    <div className="App">
      <Fejlec />
      <SzovegKezeloFuggvenyek />
      <Lablec />
    </div>
  );
}

export default App;