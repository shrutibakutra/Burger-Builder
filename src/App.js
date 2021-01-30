import React from 'react';
import Layout from './component/Layout/Layout';
import BurgerBuilder from './containers/BurgerBilder/burgerBuilder'

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder />
      </Layout>

    </div>
  );
}

export default App;
