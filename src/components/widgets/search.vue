<template>
  <div class="col-sm-6 offset-sm-3 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
    <div class="form-field">
      <form v-on:submit.prevent="searchLocation">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search By Cities">
          <input type="submit" class="btn btn-primary" value="Search">
        </div>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  name: "Search",
  data() {
    return {};
  }
};
</script>


<style>
.form-field {
  padding: 20px 0;
}
.form-group {
  display: flex;
  margin: 0 auto;
}
.form-control {
  border-radius: 0;
  border: none;
  height: 40px;
}
.form-control:focus {
  color: #a6a6a6;
  border-color: transparent;
  box-shadow: none;
}
input::placeholder {
  color: #a6a6a6;
  font-size: 15px;
}
.btn {
  border-radius: 0;
  text-transform: uppercase;
}
.btn-primary,
.btn-primary:hover {
  color: #fff;
  background-color: #0c4370;
  border-color: #0c4370;
}
.btn-primary.focus,
.btn-primary:focus {
  box-shadow: none;
}
.btn-primary:not(:disabled):not(.disabled).active,
.btn-primary:not(:disabled):not(.disabled):active,
.show > .btn-primary.dropdown-toggle {
  background-color: #0c4370;
  border-color: #0c4370;
}
.btn-primary:not(:disabled):not(.disabled).active:focus,
.btn-primary:not(:disabled):not(.disabled):active:focus,
.show > .btn-primary.dropdown-toggle:focus {
  box-shadow: none;
}
</style>