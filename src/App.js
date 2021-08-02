import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Men from "./pages/Men";
import Women from "./pages/Women";
import MyAccount from "./pages/MyAccount";
import Panier from "./pages/Panier";
import DisplayProduct from "./components/DisplayProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/homme" exact component={Men} />
          <Route path="/femme" exact component={Women} />
          <Route path="/moncompte" exact component={MyAccount} />
          <Route path="/panier" exact component={Panier} />
          <Route path="/t/:slug" exact component={DisplayProduct} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
