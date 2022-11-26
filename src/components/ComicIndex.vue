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
          <th scope="col">Título</th>
        </tr>
      </thead>
      <tbody class="scroll-area">
        <tr v-for='comic in comics'>
          <td>{{comic.title}}</td>
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
    this.allComics();
  },
  methods: {
    allComics() {
      fetch(this.url+'/.netlify/functions/comicFindAll',
        { headers: {'Accept': 'application/json'}})
        .then((response) => response.json())
        .then((items) => {
          console.log(items);
          //this.comics = items;
        })
     }
     /*deleteComic(id) {
       fetch(this.url+'/.netlify/functions/comicDelete/'+id,
         { headers: {'Content-Type': 'application/json'},
           method: 'DELETE'})
          .then((items) => {
            this.allComics();
          }
        )
     }*/
  }
};
</script>