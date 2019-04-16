import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Weather from '@/components/weather' 
import WeatherDetails from '@/components/weather-details' 

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
      path: '/weather/:location',
      name: 'Weather',
      component: Weather
    },
    {
      path: '/weather-details/:location',
      name: 'WeatherDetails',
      component: WeatherDetails
    }
  ]
})