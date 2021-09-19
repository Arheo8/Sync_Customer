import React, { useEffect } from "react";
import Button from "./components/button";

let authenticateUrl = "https://api.thecodemesh.online/api/v1/enable/user-workflow/614393c4179d450012f1b804/";
const enableUrl = "https://api.thecodemesh.online/api/v1/enable/enable-user-workflow/614393c4179d450012f1b804/?username=arheo.myshopify.com"

function App() {

  let message = "";
  
  useEffect(() => {
    console.log(window.location.search)
    authenticateUrl += window.location.search;
    const authenticate = async () => {
      fetch(authenticateUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data);
       if(data.message.authStatus.status===401)
       {
         window.location = (data.message.authStatus.value)
       }
       else 
       {
          message = "App Authorization Sucessfull."
       }
      });
  
    };
    authenticate();
  }, []);
   

  const enableWorkflow = async () => {
    fetch(enableUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
  };

  return (
    <div className="App">
      <div>
        <h1>Sync_Customer_App</h1>
        <h2>{message}</h2>
        <Button name="Sync" click={enableWorkflow} />      
      </div>
    </div>
  );
}

export default App;
