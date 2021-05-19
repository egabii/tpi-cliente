import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Catalogo from './pages/Catalogo';
import Homepage from './pages/Homepage';
import Propiedad from './pages/Propiedad';
import Acerca  from './pages/Acerca';
import Layout from './layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/catalogo">
          <Catalogo />
        </Route>
        <Route exact path="/catalogo/:id">
          <Propiedad />
        </Route>
        <Route exact path="/nosotros">
          <Acerca />
        </Route>
      </Switch>
      </Layout>
    </Router>
  );
};

export default App;
