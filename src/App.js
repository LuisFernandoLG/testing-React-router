import { BrowserRouter as Router, Switch, Route, NavLink, Link, Redirect } from "react-router-dom";
import { HomePage } from "./routes/HomePage";
import { AboutPage } from "./routes/AboutPage";
import { ContactPage } from "./routes/ContactPage";
import { NotFoundPage } from "./routes/NotFoundPage";
import { ApplicationPage } from "./routes/ApplicationPage";
import { createGlobalStyle } from "styled-components";
import { NavBar } from "./components/NavBar";
import { DragAndDropPage } from "./routes/DragAndDropPage";
import { UsuarioPage } from "./routes/UsuarioPage";
import { Productos } from "./routes/Productos";


function App() {

   return (
      <>
      <
         <GlobalStyled />
         <Router>
            <div className="App">

               <NavBar>
                  <NavLink exact to="/" activeClassName="actived-link">Inicio</NavLink>

                  <NavLink exact to="/contact" activeClassName="actived-link">Contacto</NavLink>
                  <NavLink exact to="/about" activeClassName="actived-link">Nosotros</NavLink>
                  <NavLink exact to="/application" activeClassName="actived-link">Aplicación</NavLink>
                  <NavLink exact to="/drag" activeClassName="actived-link">DragAndDrop</NavLink>
                  
                  <NavLink exact to="/productos" activeClassName="actived-link">Productos</NavLink>

                  <Link to="/usuario/luis">Luis</Link>
                  
                  <Link to="/acerca">acerca</Link>
                  <Link to="/contacto">contacto</Link>


               </NavBar>
               
               <Switch>
                  <Route path="/contact" component={ContactPage} />

                  <Route path="/contacto" component={ContactPage}>
                     <Redirect to="contact"/>
                  </Route>
                  <Route path="/acerca" component={AboutPage}>
                     <Redirect to="about"/>
                  </Route>
                  
                  <Route path="/about" component={AboutPage} />
                  <Route path="/application" component={ApplicationPage} />
                  <Route path="/usuario/:username" component={UsuarioPage} />
                  
                  <Route path="/productos" component={Productos} />

                  <Route path="/drag" component={DragAndDropPage} />
                  <Route path="/" component={HomePage} exact />
                  <Route path="*" children={<NotFoundPage />} />
                  
               </Switch>
            </div>
         </Router>
      </>
   );
}

const GlobalStyled = createGlobalStyle`
   body{
font-family: 'Roboto', sans-serif;

   }

   .actived-link{
      color: blue;
      font-weight:800;
      background: #ffd369;
   }

   a{
      padding:10px;
      text-decoration:none;
   }


   nav{
      padding:10px;
   }

   
`;

export default App;
