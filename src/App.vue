<template>
  <div id="app">
    <header-navigation></header-navigation>
    <router-view></router-view>        
    <footer-section></footer-section>
  </div>
</template>

<script>
import Header from './components/layout/header'
import Footer from './components/layout/footer'

export default {
  name: 'app',
  components: {
    'headerNavigation': Header,
    'footerSection': Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.header-section {
  background: url('assets/bg.jpg');
  background-size: cover;
  height: 430px;
  padding: 70px 0;
  text-align: center;
  color: #ffffff;
}

</style>
