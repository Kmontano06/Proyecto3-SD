<!-- ComicIndex.vue -->
<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <div class="container-fluid">
        <h1>{{title}}</h1>
        <div class="justify-content-end">
          <router-link class="btn btn-primary" to="/comic/create">Crear Comic</router-link>
        </div>
      </div>
    </nav>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Imagen</th>
          <th scope="col">Título</th>
          <th scope="col">Personaje</th>
          <th scope="col">Ilustrador</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody class="scroll-area">
        <tr v-for='comic in comics'>
          <td><img v-bind:src="comic.img"  width="80" height="110"></td>
          <td>  <router-link :to="'/comic/edit/'+comic._id">{{comic.title}}</router-link></td>
          <td><router-link :to="'/personaje/edit/'+comic.personaje.personaje_id">{{comic.personaje.name}}</router-link></td>
          <td><router-link :to="'/ilustrador/edit/'+comic.ilustrador.ilustrador_id">{{comic.ilustrador.name}}</router-link></td>
          <td><button class="btn btn-danger" v-on:click="deleteComic(comic._id)"><img src="../assets/images/eliminar.png" alt="" width="15"/></button></td>
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
      title: 'Comics List',
      comics: []
    };
  },
  mounted() {
    this.allComics()
  },
  methods: {
    allComics() {
      fetch(this.url+'/.netlify/functions/comicFindAll',
        { headers: {'Accept': 'application/json'}})
        .then((response) => response.json())
        .then((items) => {
          this.comics = items;
        })
     },
     deleteComic(id) {
       fetch(this.url+'/.netlify/functions/comicDelete/'+id,
         { headers: {'Content-Type': 'application/json'},
           method: 'DELETE'})
          .then((items) => {
            this.allComics();
          }
        )
     }
  }
};
</script>