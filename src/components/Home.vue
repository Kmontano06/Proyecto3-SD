<!-- Home.vue -->
<template>
   <div class="container mt-5">
      <div class="row">
        <div class="col-sm-4">
          <div class="card" style="width: 18rem;">
            <img src="https://educacion30.b-cdn.net/wp-content/uploads/2021/10/794-min-978x652.jpg" class="card-img-top" alt="Comics" height="200">
            <div class="card-body">
              <h5 class="card-title">Comics</h5>
              <p class="card-text">Los Cómics se basan en una narrativa gráfica presentada de forma secuencial.</p>
              <router-link to="/comic">Ver más</router-link>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card" style="width: 18rem;">
            <img src="https://www.terra.com.mx/u/fotografias/m/2021/10/1/f608x342-26301_56024_0.jpg" class="card-img-top" alt="Ilustradores" height="200">
            <div class="card-body">
              <h5 class="card-title">Ilustradores</h5>
              <p class="card-text">Se encarga de elaborar representaciones visuales fieles de la realidad de ideas</p>
              <router-link to="/ilustrador">Ver más</router-link>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card" style="width: 18rem;">
            <img src="https://i0.wp.com/collectible506.com/wp-content/uploads/2021/04/https___hypebeast.com_image_2021_03_dc-comics-nft-market-legal-affairs-company-letter-001.jpg?fit=1170%2C780&ssl=1" class="card-img-top" alt="Personajes" height="200">
            <div class="card-body">
              <h5 class="card-title">Personajes</h5>
              <p class="card-text">Es cada una de las personas o seres ya sean reales o imaginarios que aparecen en una narrativa</p>
              <router-link to="/personaje">Ver más</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>