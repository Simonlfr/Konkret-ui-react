import "./App.css";
import { HomePage } from "./pages/homePage";
import { useColorPalette } from "./providers/colorProvider";
import { DesignTokenProvider } from "./providers/designTokenProvider";

function App() {
  const colorPalette = useColorPalette();
  return (
    <DesignTokenProvider colorPalette={colorPalette}>
      <HomePage />
    </DesignTokenProvider>
  );
}

export default App;
