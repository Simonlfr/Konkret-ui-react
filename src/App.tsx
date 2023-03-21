import React from "react";
import "./App.css";
import { HomePage } from "./pages/homePage";
import { DesignTokenProvider } from "./providers/designTokenProvider";

function App() {
  return (
    <DesignTokenProvider
      refColors={{
        primary: "#4e4bfb",
        secondary: "#3E737B",
        error: "#D7335C",
        neutral: "#5D7398",
      }}
    >
      <HomePage />
    </DesignTokenProvider>
  );
}

export default App;
