import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";

import logo from "../logo.svg";
import { routes } from "./routes";

//usamos lazy de react, esto es la clave en la carga por demanda o peresosa
//es importane usar tambien suspense por que este se encarga de experar a que se carguen los componentes que son peresosos

export const Navigation = () => {
  return (
    <Suspense fallback={null}>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {/* desestructuramos props de ruotes*/}
              {routes.map(({ id, name, path }) => (
                <li key={id}>
                  <NavLink to={path} activeClassName="nav-active" exact>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            {routes.map(({ id, path, component: Component }) => (
              <Route
                key={id}
                path={path}
                //aca usamos render sino entiendo mal por que estamos en la version v5 de react router dom. En la vesion v6 creo que se hace otra cosa.
                render={() => <Component />}
              />
            ))}
            <Redirect to={routes[0].path} />
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
};
