import RouteConfig from "./Routes/RouteConfig";
import { BrowserRouter as Router } from "react-router-dom";
import AuthContext from "./Contexts/AuthContext";
function App() {
  return (
   
      <Router>
         <AuthContext>
        <RouteConfig />
        </AuthContext>
      </Router>
  

  );
}

export default App;
