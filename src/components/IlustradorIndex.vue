<!-- ComicIndex.vue -->
<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <div class="container-fluid">
        <h1>{{title}}</h1>
        <div class="justify-content-end">
          <router-link class="btn btn-primary" to="/ilustrador/create">Crear Ilustrador</router-link>
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
      <tbody class="scroll-area" v-for='aux in ilustradores'>
        <tr v-if='aux != null'>
          <td><img v-bind:src="aux.img"  width="80" height="110"></td>
          <td>  <router-link :to="'/ilustrador/edit/'+aux.id">{{aux.name}}</router-link></td>
          <td><button class="btn btn-danger" v-on:click="deleteIlustrador(aux.id)"><img src="../assets/images/eliminar.png" alt="" width="15"/></button></td>
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
      title: 'Ilustradores List',
      ilustradores: []
    };
  },
  mounted() {
    this.allIlustradores()
  },
  methods: {
    allIlustradores() {
      fetch(this.url+'/.netlify/functions/ilustradorFindAll',
        { headers: {'Accept': 'application/json'}})
        .then((response) => response.json())
        .then((items) => {
          this.ilustradores = items;
        })
     },
     deleteIlustrador(id) {
       fetch(this.url+'/.netlify/functions/ilustradorDelete/'+id,
         { headers: {'Content-Type': 'application/json'},
           method: 'DELETE'})
          .then((items) => {
            this.allIlustradores();
          }
        )
     }
  }
};
</script>