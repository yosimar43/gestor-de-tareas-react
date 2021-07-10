import AppRouter from "./routers/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from "./context/AuthProvider";

function App() {
 return (
  <div>
   <AuthProvider>
    <AppRouter />
   </AuthProvider>
  </div>
 );
}

export default App;
