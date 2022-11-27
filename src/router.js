import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import ComicIndex from "./components/ComicIndex.vue";
import ComicDetails from "./components/ComicDetails.vue"
import PersonajeIndex from "./components/PersonajeIndex.vue";
import PersonajeDetails from "./components/PersonajeDetails.vue"
import IlustradorIndex from "./components/IlustradorIndex.vue";
import IlustradorDetails from "./components/IlustradorDetails.vue"

const routes = [
  { path: "/", component: Home },
  { path: "/comic", component: ComicIndex },
  { path: "/comic/edit/:id", 
    component: ComicDetails, props: {edit:true} },
  { path: "/comic/create", 
    component: ComicDetails, props: {create:true} },
  { path: "/comic/delete/:id", 
    component: ComicIndex, props: {delete:true} },
    //Ilustrador
  { path: "/ilustrador", component: IlustradorIndex },
  { path: "/ilustrador/edit/:id", 
    component: IlustradorDetails, props: {edit:true} },
  { path: "/ilustrador/create", 
    component: IlustradorDetails, props: {create:true} },
  { path: "/ilustrador/delete/:id", 
    component: IlustradorIndex, props: {delete:true} },
    //Personaje
  { path: "/personaje", component: PersonajeIndex },
  { path: "/personaje/edit/:id", 
    component: PersonajeDetails, props: {edit:true} },
  { path: "/personaje/create", 
    component: PersonajeDetails, props: {create:true} },
  { path: "/personaje/delete/:id", 
    component: PersonajeIndex, props: {delete:true} }
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;