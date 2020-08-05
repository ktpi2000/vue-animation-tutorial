<template>
  <div id="helloworld">
    <div class="section1">
      <div class="fadeIn">
        テステステスト
      </div>
        <img src="@/assets/tokyo.png" width="200px" v-inview:class="{'fadeInLeft': true}" class="image">
        <img src="@/assets/tokyo.png" width="200px" v-inview:class="{'fadeInTop': true}" class="image">
        <img src="@/assets/tokyo.png" width="200px" v-inview:class="{'fadeInRight': true}" class="image">
    </div>
    <div class="scroll">scroll down</div>
    <div class="section2">
        <img src="@/assets/tokyo.png" width="200px" v-inview:class="{'fadeInLeft': true}" class="image">
        <img src="@/assets/tokyo.png" width="200px" v-inview:class="{'fadeInTop': true}" class="image">
        <img src="@/assets/tokyo.png" width="200px" v-inview:class="{'fadeInRight': true}" class="image">
    </div>
    <div class="scroll">scroll down</div>
    <div class="section3">
      <div class="fadeIn">
        テステステスト
      </div>
        <img src="@/assets/tokyo.png" width="200px" v-inview:class="{'fadeInLeft': true}" class="image">
        <img src="@/assets/tokyo.png" width="200px" v-inview:class="{'fadeInTop': true}" class="image">
        <img src="@/assets/tokyo.png" width="200px" v-inview:class="{'fadeInRight': true}" class="image">
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.scroll {
  height: 2000px;
}

.image {
  float: left;
  opacity: 0;
}

.fadeIn {
  /* 省略できる*/
  animation-name: fadein;
  animation-duration: 1.5s;
  animation-timing-function: ease;
  animation-delay: 0.2s;
  animation-iteration-count: 1;
  animation-direction: none;
  animation-fill-mode: forwards;

  /*
  animation: 0.3s fade $easeInOut 0s 1 normal forwards;
  */
}

@keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.fadeInTop {
  animation: fadein-top 1.5s 0.2s ease forwards;
}

@keyframes fadein-top {
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fadeInLeft {
  animation: fadein-left 1.5s 0.2s ease forwards;
}

@keyframes fadein-left {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadeInRight {
  animation: fadein-right 1.5s 0.2s ease forwards;
}

@keyframes fadein-right {
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
