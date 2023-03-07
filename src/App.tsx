import "./App.css";
import { HomePage } from "./pages/homePage";
import { ColorProvider } from "./providers/colorProvider";

function App() {
  return (
    <ColorProvider>
      <div className="App">
        <HomePage />
      </div>
    </ColorProvider>
  );
}

export default App;
