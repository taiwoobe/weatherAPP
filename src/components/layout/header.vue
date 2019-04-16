<template>
    <div class="container-fluid navigation-bar">
        <div class="">
            <nav class="navbar navbar-expand-lg navbar-light">
                <router-link :to="{ name: 'Home' }" class="navbar-brand">Weather APP</router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/" class="nav-link">Weather Reports</router-link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>


<script>
export default {
    name: "Header",
    data() {
        return {}
    }
}
</script>


<style>
.navigation-bar {
    background-color: #9fb7cf;
}
.navbar-light .navbar-brand, .navbar-light .navbar-nav .nav-link {
    color: #ffffff !important;
}
</style>
