<template>
   <main>
    <MyHeader/>
        <router-view></router-view>
    </main>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
export default {
  name: 'App',
  components:{
    MyHeader
  },
  data: () => ({
    //
  }),
};
</script>
