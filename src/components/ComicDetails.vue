<template>
  <div class="container mt-5">
    <div class="row" v-if="edit">
      <div class="col-2">
       <img v-bind:src="comic.img" class="w-100">
      </div>
      <div class="col-md-10">
       <h2>{{comic.title}}</h2>
       <p>Ilustrador: <router-link :to="'/ilustrador/edit/'+comic.ilustrador_id">{{comic.ilustrador}}</router-link></p>
       <p>Personaje Principal: <router-link :to="'/personaje/edit/'+comic.personaje_id">{{comic.personaje}}</router-link></p>
      </div>
    </div>
    
    <form class="row g-3 mt-2">
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Título</label>
        <input type="text" class="form-control" v-model="comic.title">
      </div>
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">ISBN</label>
        <input type="text" class="form-control" v-model="comic.isbn">
      </div>
      <div class="col-6">
        <label for="inputAddress" class="form-label">Editorial</label>
        <input type="text" class="form-control" v-model="comic.editorial">
      </div>
      <div class="col-6">
        <label for="inputAddress2" class="form-label"># de Páginas</label>
        <input type="text" class="form-control" v-model="comic.pages">
      </div>
      <div class="col-md-6">
        <label for="inputCity" class="form-label">Género</label>
        <input type="text" class="form-control" v-model="comic.genero">
      </div>
      <div class="col-md-6">
        <label for="inputImg" class="form-label">Imagen</label>
        <input type="text" class="form-control" v-model="comic.img">
      </div>
      <div class="col-12 text-r mb-5">
        <router-link to="/comic" class="btn btn-secondary mr-20">Regresar</router-link>
        <button v-if="create" class="btn btn-primary" v-on:click="createComic()">Guardar Comic</button>
        <button v-if="edit" class="btn btn-primary" v-on:click="updateComic(comic.id)">Actualizar Comic</button>
      </div>
    </form>
  </div>
</template>

<script>

import { useRoute } from 'vue-router'

export default {
  name: 'Comic Details',
  props: ['create','edit'],
  data() {
    return {
      title: 'Comic Data',
      comic: {},
      num: {'num':0},
    }
  },
  mounted() {
    const route = useRoute()
    if (route.params.id != null)
      this.findComic(route.params.id);
    else {
      this.comic = {
          'title': '',
          'isbn':'',
          'editorial':'',
          'pages': 0,
          'genero': '',
          'img': '',
          'personaje_id': 0,
          'personaje': '',
          'ilustrador_id': 0,
          'ilustrador': ''
        }
        this.getComicN();
        console.log(this.comic);
        

    }
  },
  methods: {
    findComic: function(id) {
      fetch(this.url+'/.netlify/functions/comicFind/'+id,
      { headers: {'Accept': 'application/json'}})
      .then((response) => response.json())
      .then((items) => {
       this.comic = items[0];

      })
    },
    getComicN: function(){
      let num = 0;
      fetch(this.url+'/.netlify/functions/comicN',
      { headers: {'Accept': 'application/json'}})
      .then((response) => response.json())
      .then((items) => {
        num = parseInt(items);
        this.comic.id = "comic_"+ (num+1);
      });
    },
    updateComic: function(id) {
      fetch(this.url+'/.netlify/functions/comicUpdate/'+id,
        { headers: {'Content-Type':'application/json'},
          method: 'PUT',
          body: JSON.stringify(this.comic)});
      this.$router.push('/comic');

    },
    createComic: function() {
      fetch(this.url+'/.netlify/functions/comicInsert',
        { headers: {'Content-Type':'application/json'},
          method: 'POST',
          body: JSON.stringify(this.comic)});
      this.$router.push('/comic')
    }
  }
};
</script>