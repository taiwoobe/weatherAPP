<template>
  <div class>
    <div class="header-section">
      <strong>
        <h3>The Weather Today</h3>
      </strong>
      <search-component></search-component>
    </div>
    <div class="cities">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-lg-4" @click="goToWeather(weather.location)" v-for="(weather, index) in weathers" :key="index">
            <div class="card-deck">
              <div class="card city">
                <div class="card-body pb-0 text-center">
                  <h3>{{ weather.location }}</h3>
                  <img :src="require('../assets/'+weather.image)" alt="Weather Condition">
                  <div class="card-text d-flex">
                    <div class="today">
                      <span>{{ weather.day }}:</span>
                      {{ weather.weatherCondition }}
                    </div>
                    <div style="font-size: 20px;">
                      <span class="temperature">{{ weather.currentTemperature }}</span>&deg;F
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import searchComponent from "../components/widgets/search";
import weatherJson from '../api/weather.json';
// import axios from "axios";

export default {
  name: "Home",
  components: {
    searchComponent: searchComponent
  },
  data() {
    return {
      errors: [],
      weathers: weatherJson,
    };
  },
  // created() {
  //   axios.get(`API_URL`)
  //   .then(response => {
  //     this.weathers = response.data
  //   })
  //   .catch(e => {
  //     this.errors.push(e)
  //   })
  // },
  methods: {
    goToWeather(weatherLocation) {
      this.$router.push({
        name: "Weather",
        params: { location: weatherLocation }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.cities {
  margin-top: -170px;
  margin-bottom: 30px;
}
.city {
  background-color: #9fb7cf !important;
  border: 1px solid #9fb7cf;
  border-radius: 15px;
  cursor: pointer;
}
.city img {
  max-width: 100%;
  width: 150px;
}
h3 {
  color: #ffffff;
  font-weight: bold;
}
.card-text {
  justify-content: space-between;
  color: #ffffff;
  align-items: center;
}
.today span {
  text-transform: uppercase;
}
.today-temp {
  font-size: 30px;
}

/* ===========================
MEDIA QUERIES 
=============================*/

@media (min-width: 767px) {
  .city {
    margin-bottom: 40px !important;
  }
  .cities {
    margin-bottom: 60px;
  }
}
</style>

