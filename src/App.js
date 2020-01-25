import React from 'react';
import Layout from "./component/Layout/Layout";
import {Route, Switch} from "react-router";
import MainPage from "./containers/MainPage/MainPage";
import AddContactPage from "./containers/AddContactPage/AddContactPage";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact component={MainPage}/>
        <Route path='/contacts/add' exact component={AddContactPage}/>
        <Route path='/contacts/edit/:id' exact component={AddContactPage}/>
        <Route render={() => <h2>PAGE NOT FOUND</h2>} />
      </Switch>
    </Layout>
  );
};

export default App;