<template>
  <div>
    <!-- About US Start -->
        <div class="about-area">
            <div class="container">
                    <!-- Hot Aimated News Tittle-->
                    <div class="row">
                        <div class="col-lg-12">
                          <router-link :to="{ name: 'home' }" class="myTextColor">
                            <div class="trending-tittle" >
                                <strong>Back</strong>
                            </div>
                          </router-link>
                        </div>
                    </div>
                   <div class="row d-flex justify-content-center" v-if="Object.keys(postData).length > 0">
                        <div class="col-lg-8">
                            <!-- Trending Tittle -->
                            <div class="about-right mb-90">
                                <div class="about-img">
                                    <img :src="postData?.image" class="rounded w-50" alt="image" >
                                </div>
                                <div class="section-tittle mb-30 pt-30">
                                  <div class="d-flex justify-content-between w-50">
                                    <div>
                                      <h3 class="myTextColor2">{{postData?.title}}</h3>
                                    </div>
                                    <div>
                                      <span class="myTextColor2"><i class="fas fa-eye "></i > {{viewCount}}</span>
                                    </div>
                                  </div>
                                </div>
                                <div class="about-prea ">
                                    <p class="about-pera1 mb-25 myTextColor">
                                    {{postData?.description}}
                                    </p>
                                </div> 
                                <div class="social-share pt-30">
                                    <div class="section-tittle">
                                        <h3 class="mr-20 myTextColor2">Share:</h3>
                                        <ul>
                                            <li><a href="#"><img src="/assets/img/news/icon-ins.png" alt=""></a></li>
                                            <li><a href="#"><img src="/assets/img/news/icon-fb.png" alt=""></a></li>
                                            <li><a href="#"><img src="/assets/img/news/icon-tw.png" alt=""></a></li>
                                            <li><a href="#"><img src="/assets/img/news/icon-yo.png" alt=""></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                   </div>                 
            </div>
        </div>
        <!-- About US End -->
  </div>
</template>
<script>
import axios from "axios"
import {mapGetters} from 'vuex';
export default {
  computed:{
    ...mapGetters(['userData','viewCount','loggedIn']),
    },
  components:{
  },
  data(){
    return{
        detailId : null,
        postViews : 0,
        postData : {}
    }
  },
  mounted(){
    if(this.loggedIn){
      this.fetchDetail()
    }else{
      this.$router.push({
        name:'home'
      })
    }
  },
  methods:{
    fetchDetail(){
        this.detailId = this.$route.params.id
        if (this.$route.params.views !== undefined) {
        this.postViews = this.$route.params.views;
        console.log(this.postViews,'kkkk')
    }
        const postUrl = `http://localhost:8056/api/user/post-detail/${this.detailId}`;
        if(this.detailId){
            axios.get(postUrl)
        .then(response => {
        
          let resData = response.data['post'][0]
             if(resData.image){
               resData.image = 'http://localhost:8056/uploads/'+ resData.image
             }
          this.postData = resData;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
        }
    }
  }
}
</script>
<style scoped>
.myTextColor{
        color: #a9d6e5 !important;
      }
.myTextColor2{
color: #00bfff !important;
}
</style>

