<template>
    <div>
         <!-- Header Start -->
        <div class="header-area">
            <div class="main-header col-12">
                <div class="header-top  d-none d-md-block">
                </div>
                <div class="header-mid d-none d-md-block myColor">
                    <div class="">
                        <div class=" pl-5 d-flex justify-content-between">
                            <!-- Logo -->
                            <div>
                                <router-link :to="{ name: 'home' }" class="myTextColor">
                                    <h3 class="myTextColor myCursorPtr">Oppa News</h3>
                                </router-link>
                            </div>
                            <div class="pr-5">
                                <router-link v-if="!loggedIn" :to="{ name: 'userLogin' }" class="myTextColor">Login</router-link>
                                <p v-else class="myTextColor" @click="userLogout" style="cursor:pointer;"><i class="fas fa-lock mr-1"></i>Logout</p>
                                <router-link v-if="loggedIn" :to="{ name: 'userProfilePage' }" class="myTextColor" ><i class="fas fa-user mr-1"></i>Profile</router-link>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="header-bottom header-sticky myColor">
                    <div class="container" >
                        <div class="row align-items-center" style="padding: 0px !important; ">
                            <div class="col-xl-10 col-lg-10 col-md-12 header-flex" >
                                <!-- sticky -->
                                <div class="sticky-logo ">
                                    <router-link :to="{ name: 'home' }" class="myTextColor">
                                        <h3 class="myTextColor myCursorPtr">Oppa News</h3>
                                    </router-link>      
                                    <div>
                                        <router-link v-if="!loggedIn" :to="{ name: 'userLogin' }" >
                                            <h4 class="myTextColor ">Login</h4>
                                        </router-link>
                                            <p v-else @click="userLogout" class="myTextColor ">Logout</p>
                                        
                                    </div>
                                </div>
                                <!-- Main-menu -->
                                <div class="main-menu d-none d-md-block">
                                        <ul id="navigation">
                                            <li><router-link :to="{ name: 'home' }" class="myTextColor">Home</router-link></li>
                                            <li><router-link :to="{ name: 'home' }" class="myTextColor">About</router-link></li>
                                        </ul>
                                </div>
                            </div>
                            <!-- Mobile Menu -->
                            <div class="col-12">
                                <div class="mobile_menu d-block d-md-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Header End -->
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import axios from "axios"
export default{
    mounted(){
        // checkLoginOrNot
       this.$store.dispatch('checkTokenForLogIn')
    },
computed:{
        ...mapGetters(['validToken','userData','loggedIn']),
        },
data(){
    return{
        searchInput:'',
    }
},
methods:{
    // search Posts
      searchPost(){
        this.postData = []
        const searchUrl = 'http://localhost:8056/api/user/searchPosts'
        let searchData = { search: this.searchInput.toLowerCase()}
        axios.post(searchUrl, searchData)
        .then( (response)=> {
          let resData = response.data.posts;
          for (let i = 0; i < resData.length; i++) {
            if(resData[i].image){
              resData[i].image = 'http://localhost:8056/uploads/'+ resData[i].image
            }
          }
          this.$emit('searchedData',resData)
        })
        .catch(function (error) {
          console.log(error);
        });
      },
      userLogout(){
        this.$store.dispatch('setValidToken','')
        this.$store.dispatch('setUserData',{})
        this.$store.dispatch('setLoggedIn', false);
        this.$router.push({
            name:'userLogin'
        });
        localStorage.removeItem('token');
      }
}
}
</script>