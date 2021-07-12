import AppRouter from "./routers/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from "./context/AuthProvider";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
 return (
  <div>
   <Router>
    <AuthProvider>
     <AppRouter />
    </AuthProvider>
   </Router>
  </div>
 );
}

export default App;
