<template>
  <div>
    <div v-for="(weather, index) in weathers" :key="index">
      <div v-if="weatherID === weather.location">
        <div class="header-section">
          <strong>
            <h3>{{ weather.location }} Weather</h3>
          </strong>
        </div>
        <div class="cities">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div>
                  <div class="card card-bg-default weather-card text-white">
                    <div class="location-icon">
                      <div>
                        <h3 class="d-inline-block">{{ weather.location }}</h3>
                        <img class="card-img" :src="require('../assets/'+weather.image)" alt="Weather Condition">
                      </div>
                      <div class="view-btn">
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                          width="30px" height="30px" fill="#FFFFFF" viewBox="0 0 408 408" style="enable-background:new 0 0 408 408;" xml:space="preserve">
                        <g>
                          <g id="more-vert">
                            <path d="M204,102c28.05,0,51-22.95,51-51S232.05,0,204,0s-51,22.95-51,51S175.95,102,204,102z M204,153c-28.05,0-51,22.95-51,51
                              s22.95,51,51,51s51-22.95,51-51S232.05,153,204,153z M204,306c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51
                              S232.05,306,204,306z"/>
                          </g>
                        </g>
                        </svg>

                      </div>
                    </div>
                    <div class="weather-info col-md-4 pl-0">
                      <p class="card-text">{{ weather.currentCondition }}</p>
                      <p class="card-text">{{ weather.weatherSummary }}</p>
                    </div>
                    <div class="temperature-readings">
                      <div class="row">
                        <div class="col-md-4 mb-3">
                          <strong>
                            <p class="mb-0">current temp</p>
                          </strong>
                          <span class="temperature">{{ weather.currentTemperature }}</span>&deg;F
                        </div>
                        <div class="col-md-4 mb-3">
                          <strong>
                            <p class="mb-0">max temp</p>
                          </strong>
                          <span class="temperature">{{ weather.maximumTemperature }}</span>&deg;F
                        </div>
                        <div class="col-md-4 mb-3">
                          <strong>
                            <p class="mb-0">min temp</p>
                          </strong>
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
        <div class="weekday">
          <div class="container">
            <div class="row">
              <div class="col-md-4 col-lg-4" v-for="(dailyWeather, index) in weather.days" :key="index">
                <div class="card-deck">
                  <div class="card days" v-background="`${dailyWeather.dayOfWeek}`">
                    <div class="card-body pb-0 text-center">
                      <h3>{{ dailyWeather.dayOfWeek }}</h3>
                      <img :src="require('../assets/'+dailyWeather.image)" alt="Weather Condition">
                      <div class="card-text d-flex">
                        <div class="today">
                          <span>{{ dailyWeather.day }}:</span>
                          {{ dailyWeather.weatherCondition }}
                        </div>
                        <div style="font-size: 16px;">
                          <span class="min-temperature">{{ dailyWeather.currentTemperature }}</span>&deg;F
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
    </div>
  </div>
</template>

<script>
import weatherJson from "../api/weather.json";

export default {
  name: "WeatherDetails",
  data() {
    return {
      weatherID: this.$route.params.location,
      weathers: weatherJson
    };
  }
};
</script>

<style>
.weather-card {
  margin-bottom: 0 !important;
}
.weekday {
  margin-bottom: 70px;
}
.days {
  background-color: #9fb7cf;
  border: initial;
  border-radius: 15px;
  cursor: pointer;
}
.days img {
  max-width: 100%;
  width: 150px;
}
.min-temperature {
  font-size: 36px;
}


/* ===========================
MEDIA QUERIES 
=============================*/

@media (min-width: 767px) {
  .days {
    margin-bottom: 0px !important;
  }
}
@media (min-width: 992px) {
  .weekday .container {
    padding:  0 100px;
  }
  .col-lg-4 {
    padding: 15px;
  }
}
</style>