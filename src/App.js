import React from 'react';
import './App.css';
import {Container} from "reactstrap";
import Navigation from "./components/navigation/navigation";
import {Route, Switch} from "react-router";
import News from "./components/news/news";
import New from "./components/new/new";
import addForm from "./components/addForm/addForm";

function App() {
  return (
    <div>
        <Navigation/>
      <Container>
          <Switch>
              <Route path='/' exact component={News}/>
              <Route path='/news/add' component={addForm}/>
              <Route path='/news/:id' component={New}/>
          </Switch>
      </Container>
    </div>
  );
}

export default App;
