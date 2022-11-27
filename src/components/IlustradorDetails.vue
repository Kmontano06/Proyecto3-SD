<template>
  <div class='container mt-5'>
    <div class='row' v-if='edit'>
      <div class='col-2'>
       <img v-bind:src='ilustrador.img' class='w-100'>
      </div>
      <div class='col-md-10'>
       <h2>{{ilustrador.name}}</h2>
       <p>Comics:</p> 
        <ul  v-for='com in ilustrador.comic'>
              <li><router-link  class="db" :to="'/comic/edit/'+com.comic_id">{{com.title}}</router-link></li>
        </ul>

      </div>
    </div>
    
    <form class='row g-3 mt-2'>
      <div class='col-md-6'>
        <label for='inputEmail4' class='form-label'>Nombre</label>
        <input type='text' class='form-control' v-model='ilustrador.name'>
      </div>
      <div class='col-md-6'>
        <label for='inputPassword4' class='form-label'>Nacionalidad</label>
        <input type='text' class='form-control' v-model='ilustrador.nationality'>
      </div>
      <div class='col-6'>
        <label for='inputAddress' class='form-label'>Nacimiento</label>
        <input type='text' class='form-control' v-model='ilustrador.birthday'>
      </div>
      <div class='col-6'>
        <label for='inputAddress2' class='form-label'>Ocupación</label>
        <input type='text' class='form-control' v-model='ilustrador.ocupation'>
      </div>
      <div class='col-md-12'>
        <label for='inputImg' class='form-label'>Imagen</label>
        <input type='text' class='form-control' v-model='ilustrador.img'>
      </div>
      <div class='col-12 text-r mb-5'>
        <router-link to='/ilustrador' class='btn btn-secondary mr-20'>Regresar</router-link>
        <button v-if='create' class='btn btn-primary' v-on:click='createIlustrador()'>Guardar Ilustrador</button>
        <button v-if='edit' class='btn btn-primary' v-on:click='updateIlustrador(ilustrador._id)'>Actualizar Ilustrador</button>
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
      ilustrador: {}
    }
  },
  mounted() {
    const route = useRoute()
    if (route.params.id != null)
      this.findIlustrador(route.params.id);
    else {
      this.ilustrador = {   
        '_id': Math.floor(Math.random()*100000000),
        'name': '',
        'nationality': '',
        'birthday': '',
        'ocupation': '',
        'img': '',
        'comic': []
      }
    }
  },
  methods: {
    findIlustrador: function(id) {
      fetch(this.url+'/.netlify/functions/ilustradorFind/'+id,
      { headers: {'Accept': 'application/json'}})
      .then((response) => response.json())
      .then((items) => {
       this.ilustrador = items[0];
      })
    },
    updateIlustrador: function(id) {
      fetch(this.url+'/.netlify/functions/ilustradorUpdate/'+id,
        { headers: {'Content-Type':'application/json'},
          method: 'PUT',
          body: JSON.stringify(this.ilustrador)});
      this.$router.push('/ilustrador');

    },
    createIlustrador: function() {
      fetch(this.url+'/.netlify/functions/ilustradorInsert',
        { headers: {'Content-Type':'application/json'},
          method: 'POST',
          body: JSON.stringify(this.ilustrador)});
      this.$router.push('/ilustrador')
    }
  }
};
</script>