import React from "react";
import { Route, Switch } from "react-router-dom";

import Sobre    from "../view/sobre/Sobre";
import Fotos    from '../view/fotos/Fotos';
import Centro   from "../view/home/Centro";
import Contato  from '../view/contato/Contato';
import Cadastro from '../view/cadastro/Cadastro';


export default function Routes() {
  return (
    <Switch>
      <Route exact path="/"         component={Centro}    />
      <Route exact path="/sobre"    component={Sobre}     />
      <Route exact path='/fotos'    component={Fotos}     />
      <Route exact path='/contato'   component={Contato}  />
      <Route exact path='/cadastro' component={Cadastro}  />
    </Switch>
  );
}