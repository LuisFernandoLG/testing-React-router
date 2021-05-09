import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { HomePage } from "./routes/HomePage";
import { AboutPage } from "./routes/AboutPage";
import { ContactPage } from "./routes/ContactPage";
import { NotFoundPage } from "./routes/NotFoundPage";
import { ApplicationPage } from "./routes/ApplicationPage";

function App() {
   return (
      <Router>
         <div className="App">
            <h2>___NavBar___</h2>
            <nav>
               <NavLink to="/">Inicio</NavLink>
               <NavLink to="contact">Contacto</NavLink>
               <NavLink to="about">Nosotros</NavLink>
               <NavLink to="application">Aplicación</NavLink>
            </nav>
            <hr />

            {/* 
                SIEMPRE IR DE LO MÁS ESPECIFICO A LO MÁS GENRERAL, SINO USAR eacxt
            */}

            <Switch>
               <Route path="/contact" component={ContactPage} />
               <Route path="/about" component={AboutPage} />
               <Route path="/application" component={ApplicationPage} />
               <Route path="/" component={HomePage} exact />
               <Route path="*" children={<NotFoundPage />} />
            </Switch>
         </div>
      </Router>
   );
}

export default App;
