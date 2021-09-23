import React, {Suspense} from "react";
import s from './App.module.css'
import Appbar from "./components/Appbar/Appbar";
import {Switch, Route} from "react-router-dom";
import Banks from "./components/Banks/Banks";
import Calculator from "./components/Calculator/Calculator";
import CreateBankForm from "./components/CreateBankForm/CreateBankForm";


const App = () => {

  return <div className={s.container}>
    <Appbar/>
    <h1>MORTAGE CALCULATOR APP</h1>
    <Suspense fallback={<p>...Loading</p>}>
      <Switch>
        <Route path={'/banks'} component={Banks}/>
        <Route path={'/add'} component={CreateBankForm}/>
        <Route path={'/calculator'} component={Calculator}/>
      </Switch>
    </Suspense>
  </div>
}

export default App;
