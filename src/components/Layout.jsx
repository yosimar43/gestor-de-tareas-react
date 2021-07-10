import Navigation from "./Navigation";

const Layout = ({ children }) => {
 return (
  <>
   <Navigation />
   {children}
   <footer>Hola soy un fototer</footer>
  </>
 );
};

export default Layout;
