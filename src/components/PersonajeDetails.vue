<template>
  <div class='container mt-5'>
    <div class='row' v-if='edit'>
      <div class='col-2'>
       <img v-bind:src='personaje.img' class='w-100'>
      </div>
      <div class='col-md-10'>
       <h2>{{personaje.name}}</h2>
       <p>Comics:</p> 
        <ul  v-for='com in personaje.comic'>
              <li><router-link  class="db" :to="'/comic/edit/'+com.comic_id">{{com.title}}</router-link></li>
        </ul>

      </div>
    </div>
    
    <form class='row g-3 mt-2'>
      <div class='col-md-6'>
        <label for='inputEmail4' class='form-label'>Nombre</label>
        <input type='text' class='form-control' v-model='personaje.name'>
      </div>
      <div class='col-md-6'>
        <label for='inputPassword4' class='form-label'>Nacionalidad</label>
        <input type='text' class='form-control' v-model='personaje.nationality'>
      </div>
      <div class='col-6'>
        <label for='inputAddress' class='form-label'>Nacimiento</label>
        <input type='text' class='form-control' v-model='personaje.birthday'>
      </div>
      <div class='col-6'>
        <label for='inputAddress2' class='form-label'>Descripcion</label>
        <textarea v-model="personaje.desc" class='form-control' style="resize:none;"></textarea>
      </div>
      <div class='col-md-12'>
        <label for='inputImg' class='form-label'>Imagen</label>
        <input type='text' class='form-control' v-model='personaje.img'>
      </div>
      <div class='col-12 text-r mb-5'>
        <router-link to='/personaje' class='btn btn-secondary mr-20'>Regresar</router-link>
        <button v-if='create' class='btn btn-primary' v-on:click='createPersonaje()'>Guardar Personaje</button>
        <button v-if='edit' class='btn btn-primary' v-on:click='updatePersonaje(personaje._id)'>Actualizar Personaje</button>
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
      personaje: {}
    }
  },
  mounted() {
    const route = useRoute()
    if (route.params.id != null)
      this.findPersonaje(route.params.id);
    else {
      this.personaje = {   
        '_id': Math.floor(Math.random()*100000000),
        'name': '',
        'nationality': '',
        'birthday': '',
        'desc': '',
        'img': '',
        'comic': []
      }
    }
  },
  methods: {
    findPersonaje: function(id) {
      fetch(this.url+'/.netlify/functions/personajeFind/'+id,
      { headers: {'Accept': 'application/json'}})
      .then((response) => response.json())
      .then((items) => {
       this.personaje = items[0];
      })
    },
    updatePersonaje: function(id) {
      fetch(this.url+'/.netlify/functions/personajeUpdate/'+id,
        { headers: {'Content-Type':'application/json'},
          method: 'PUT',
          body: JSON.stringify(this.personaje)});
      this.$router.push('/personaje');

    },
    createPersonaje: function() {
      fetch(this.url+'/.netlify/functions/personajeInsert',
        { headers: {'Content-Type':'application/json'},
          method: 'POST',
          body: JSON.stringify(this.personaje)});
      this.$router.push('/personaje')
    }
  }
};
</script>