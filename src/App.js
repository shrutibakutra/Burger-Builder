import React from 'react';
import Layout from './component/Layout/Layout';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//components
import BurgerBuilder from './containers/BurgerBilder/burgerBuilder'
import Payment from './component/Payment/Payment'
import Home from './component/Home/Home'
import Cart from './component/Cart/Cart'
import Map from './component/Map/Map'


function App() {
  return (
    <div>
      <BrowserRouter>      <Layout>
        
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/prepareBurger" component={BurgerBuilder} />
                    <Route exact path="/payment" component={Payment} />
                    <Route exact path="/cart" component={Cart} />
                    <Route exact path="/contactUs" component={Map} />

                </Switch>
      </Layout>
      </BrowserRouter>

    </div>
  );
}

export default App;
