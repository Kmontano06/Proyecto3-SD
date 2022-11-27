<!-- ComicIndex.vue -->
<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <div class="container-fluid">
        <h1>{{title}}</h1>
        <div class="justify-content-end">
          <router-link class="btn btn-primary" to="/personaje/create">Crear Personaje</router-link>
        </div>
      </div>
    </nav>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Imagen</th>
          <th scope="col">Nombre</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody class="scroll-area">
        <tr v-for='aux in personajes'>
          <td><img v-bind:src="aux.img"  width="80" height="110"></td>
          <td>  <router-link :to="'/personaje/edit/'+aux.id">{{aux.name}}</router-link></td>
          <td><button class="btn btn-danger" v-on:click="deletePersonaje(aux.id)"><img src="../assets/images/eliminar.png" alt="" width="15"/></button></td>
        </tr>
      </tbody>
    </table>
  </div>

</template>



<script>
  
export default {
  name: "Comics Index",
  data() {
    return {
      title: 'Personajes List',
      personajes: []
    };
  },
  mounted() {
    this.allPersonajes()
  },
  methods: {
    allPersonajes() {
      fetch(this.url+'/.netlify/functions/personajeFindAll',
        { headers: {'Accept': 'application/json'}})
        .then((response) => response.json())
        .then((items) => {
          this.personajes = items;
        })
     },
     deletePersonaje(id) {
       fetch(this.url+'/.netlify/functions/personajeDelete/'+id,
         { headers: {'Content-Type': 'application/json'},
           method: 'DELETE'})
          .then((items) => {
            this.allPersonajes();
          }
        )
     }
  }
};
</script>