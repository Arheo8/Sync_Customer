import React, { useEffect } from "react";
import Button from "./components/button";

const authenticateUrl = "https://api.thecodemesh.online/api/v1/enable/user-workflow/614393c4179d450012f1b804/?hmac=b2a4123d90f8d4ed00c580a671bd2936fe9acf214ac0d54dea751040149c0f26&shop=arheo.myshopify.com&state=163181900538700&timestamp=1631819064";
const enableUrl = "https://api.thecodemesh.online/api/v1/enable/enable-user-workflow/614393c4179d450012f1b804/?username=arheo.myshopify.com"

function App() {
  useEffect(() => {
    authenticate();
  }, []);

  const authenticate = async () => {
    fetch(authenticateUrl)
  };
  const enableWorkflow = async () => {
    fetch(enableUrl)
  };

  return (
    <div className="App">
      <div>
        <h1>Sync_Customer_App</h1>
        <Button name="Sync" click={enableWorkflow} />        
      </div>
    </div>
  );
}

export default App;
