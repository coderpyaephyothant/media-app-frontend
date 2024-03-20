<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12 myColor mt-5" >
                    <div align="center">
                        <img src="https://assets.codepen.io/1538474/404.svg" class="logo-404" />
                                <img src="https://assets.codepen.io/1538474/meteor.svg" class="meteor" />
                                <p class="subtitle myTextColor">
                                    Error Occured. . . 
                                </p>
                        <img src="https://assets.codepen.io/1538474/astronaut.svg" class="astronaut" />
                    <img src="https://assets.codepen.io/1538474/spaceship.svg" class="spaceship" />
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.meteor {
    animation: moveUpDown 4s infinite alternate;
}
.logo-404 {
    animation: moveUpDown 10s infinite alternate;
}
.astronaut {
  animation: moveUpDown 10s infinite alternate;
}

.spaceship {
  animation: moveUpDown 6s infinite alternate;
}

@keyframes moveUpDown {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>