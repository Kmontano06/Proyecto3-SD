<template>
<nav class="navbar navbar-expand-sm navbar-light">
      <div class="container-fluid">
        <div class="navbar-header ">
          <router-link to="/"><img src="./assets/images/logo.png" alt="" width="150"/></router-link>
        </div>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav" >
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
               <router-link to="/comic" class="nav-link">Comics</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/ilustrador" class="nav-link">Ilustradores</router-link>
            </li>
            <li class="nav-item">
               <router-link to="/personaje" class="nav-link">Personajes</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>
