import Homepage from "./components/Homepage";
import NotFound from "./components/NotFound";
import Shop from "./components/pages/shop/Shop";
import "./App.scss";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
