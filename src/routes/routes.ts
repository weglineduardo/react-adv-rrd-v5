import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
  id: string;
  path: string;
  component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  children?: Route[];
}
//usamos lazy de react, esto es la clave en la carga por demanda o peresosa
//es importane usar tambien suspense por que este se encarga de experar a que se carguen los componentes que son peresosos
const LazyPage1 = lazy(
  () =>
    import(/*webpackChunkName:"LazyPage1"*/ "../01-lazyload/pages/LazyPage1")
);
const LazyPage2 = lazy(
  () =>
    import(/*webpackChunkName:"LazyPage2"*/ "../01-lazyload/pages/LazyPage2")
);
const LazyPage3 = lazy(
  () =>
    import(/*webpackChunkName:"LazyPage3"*/ "../01-lazyload/pages/LazyPage3")
);
export const routes: Route[] = [
  {
    id: "1",
    path: "/lazy1",
    component: LazyPage1,
    name: "Lazy-Page-1",
  },
  {
    id: "2",
    path: "/lazy2",
    component: LazyPage2,
    name: "Lazy-Page-2",
  },
  {
    id: "3",
    path: "/lazy3",
    component: LazyPage3,
    name: "Lazy-Page-3",
  },
];
