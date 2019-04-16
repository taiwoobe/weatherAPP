<template>
  <div class>
    <div class="header-section">
      <strong>
        <h3>Weather Reports</h3>
      </strong>
    <search-component></search-component>
    </div>
    <div class="cities">
      <div class="container">
        <div class="row">
          <div class="col-md-12" v-for="(weather, index) in weathers" :key="index">
            <div v-if="weatherID === weather.location">
              <div class="card card-bg-default text-white">
                <div class="location-icon">
                  <div>
                    <h3 class="d-inline-block">{{ weather.location }}</h3>
                    <img class="card-img" :src="require('../assets/'+weather.image)" alt="Weather Condition">
                  </div>
                  <div class="view-btn">
                    <button class="btn btn-primary" @click="goToWeatherDetails(weather.location)" >View </button>
                  </div>
                </div>
                <div class="weather-info col-md-4 pl-0">
                  <p class="card-text">{{ weather.currentCondition }}</p>
                  <p class="card-text">{{ weather.weatherSummary }}</p>
                </div>
                <div class="temperature-readings">
                  <div class="row">
                    <div class="col-md-4 mb-3">
                      <strong><p class="mb-0">current temp</p></strong>
                      <span class="temperature">{{ weather.currentTemperature }}</span>&deg;F
                    </div>
                    <div class="col-md-4 mb-3">
                      <strong><p class="mb-0">max temp</p></strong>
                      <span class="temperature">{{ weather.maximumTemperature }}</span>&deg;F
                    </div>
                    <div class="col-md-4 mb-3">
                      <strong><p class="mb-0">min temp</p></strong>
                      <span class="temperature">{{ weather.minimumTemperature }}</span>&deg;F
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
import searchComponent from '../components/widgets/search'
import weatherJson from "../api/weather.json";

export default {
  name: "Weather",
  components: {
    'searchComponent': searchComponent
  },
  data() {
    return {
      weatherID: this.$route.params.location,
      weathers: weatherJson
    };
  },
  methods: {
    goToWeatherDetails(weatherLocation) {
      this.$router.push({
      name: "WeatherDetails",
      params: { location: weatherLocation }
      });
    }
  }
};
</script>

<style>
.card-bg-default {
  background-color: #9fb7cf;
  border: 1px solid #9fb7cf;
  border-radius: 15px;
  padding: 20px 60px;
  margin-bottom: 120px;
}
.location-icon {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-img {
  width: auto;
  max-height: 100px;
  margin-left: 30px;
}
.view-btn .btn {
  text-transform: none;
  padding: 6px 20px;
}
.weather-info .card-text, .weather-info .card-text:first-child {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
}
.weather-info .card-text:nth-child(2) {
  font-weight: normal;
  margin-bottom: 0;
}
.temperature-readings {
  margin-top: 40px;
  font-size: 20px;
}
.temperature-readings p {
  font-size: 18px;
}
.temperature {
  font-size: 48px;
}

/* ===========================
MEDIA QUERIES 
=============================*/

@media (max-width: 767px) {
  .location-icon h3 {
    font-size: 18px;
  }
  .card-img {
    width: auto;
    max-height: 60px;
    margin-left: 5px;
  }
  .card-bg-default {
    padding: 20px;
  }
  .view-btn .btn {
    padding: 6px 15px;
    font-size: 14px;
  }
  .temperature-readings {
    text-align: center;
  }
  .card-bg-default {
    margin-bottom: 30px;
  }
}
</style>