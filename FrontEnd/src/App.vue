<template>
  <div id="app">
    <div class="container">
    <div class="row">
      <div class="col-sm-12 text-center">
        <h1 class="title text-center mt-5">{{ Title }}</h1>
        <div>
          <img class="w-200" :src="listenImg" @loadingevent="LoadingFunc">
        </div>
        <router-link to="/view1">
          <button class="button-50" role="button" @click="changeTitle1">Fixing Grammar Mistakes</button>
        </router-link>
        <router-link to="/view2">
          <button class="button-50" role="button" @click="changeTitle2">Synonymous Sentence</button>
        </router-link>
        <router-link to="/view3">
          <button class="button-50" role="button" @click="changeTitle3">Write An Essay</button>
        </router-link>
      </div>
    </div>
  </div>
  <keep-alive>
    <router-view  @loadingevent="LoadingFunc"></router-view>
  </keep-alive>
    
    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <!-- <img src="..." class="rounded me-2" alt="..."> -->
        <strong class="me-auto">Notification</strong>
        <small>Just finished</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        {{message}}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import store from '@/store'
export default {
  name: 'App',
  components: {

  },
  data() {
    return {
      message: null,
      listenImg: require('@/assets/images/listen.png'),
      Title :"Fixing Grammar Mistakes Tool",
      loading: false,
    }
  },
  methods:{
    changeTitle1(){
      this.Title = "Fixing Grammar Mistakes Tool"
    },
    changeTitle2(){
      this.Title = "Synonymous Sentence Tool"
    },
    changeTitle3(){
      this.Title = "Write An Essay Tool"
    },
    LoadingFunc(){
      this.loading = !this.loading
      if(this.loading){
        this.listenImg = require('@/assets/images/Loading.gif')
      }
      else this.listenImg = require('@/assets/images/listen.png')
    }
  }
}
</script>

<style>
 .button-50 {
  width: 20%;
  appearance: button;
  background-color: #000;
  background-image: none;
  border: 1px solid #000;
  border-radius: 4px;
  box-shadow: #fff 4px 4px 0 0,#000 4px 4px 0 1px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: ITCAvantGardeStd-Bk,Arial,sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 0 5px 10px 0;
  overflow: visible;
  padding: 12px 40px;
  text-align: center;
  text-transform: none;
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  margin: 0px 25px 50px 25px;
}

.button-50:focus {
  text-decoration: none;
}

.button-50:hover {
  text-decoration: none;
}

.button-50:active {
  box-shadow: rgba(0, 0, 0, .125) 0 3px 5px inset;
  outline: 0;
}

.button-50:not([disabled]):active {
  box-shadow: #fff 2px 2px 0 0, #000 2px 2px 0 1px;
  transform: translate(2px, 2px);
}

@media (min-width: 768px) {
  .button-50 {
    padding: 12px 50px;
  }
}

@import'~bootstrap/dist/css/bootstrap.css'
</style>

<style>
  @media (prefers-reduced-motion: no-preference) {
    :root {
      scroll-behavior: inherit;
    }
  }
</style>
