<template>
    <div>
         <!-- Header Start -->
        <div class="header-area">
            <div class="main-header ">
                <div class="header-top  d-none d-md-block">
                </div>
                <div class="header-mid d-none d-md-block myColor">
                    <div class="">
                        <div class="row pl-5">
                            <!-- Logo -->
                            <h3 class="myTextColor">Oppa News</h3>
                        </div>
                    </div>
                </div>
                <div class="header-bottom header-sticky myColor">
                    <div class="container" >
                        <div class="row align-items-center" style="padding: 0px !important; ">
                            <div class="col-xl-10 col-lg-10 col-md-12 header-flex" >
                                <!-- sticky -->
                                <div class="sticky-logo">
                                    <h3 class="myTextColor">Oppa News</h3>
                                </div>
                                <!-- Main-menu -->
                                <div class="main-menu d-none d-md-block">
                                        <ul id="navigation">
                                            <li ><a class="myTextColor" href="index.html">Home</a></li>
                                            <li ><a class="myTextColor" href="categori.html">Category</a></li>
                                            <li ><a class="myTextColor" href="about.html">About</a></li>
                                            <li ><a class="myTextColor" href="latest_news.html">Latest News</a></li>
                                            <li ><a class="myTextColor" href="contact.html">Contact</a></li>
                                            <li >
                                           <a class="myTextColor" href="details.html">Pages</a>
                                                <ul class="submenu">
                                                    <li><a href="elements.html">Element</a></li>
                                                    <li><a href="blog.html">Blog</a></li>
                                                    <li><a href="single-blog.html">Blog Details</a></li>
                                                    <li><a href="details.html">Categori Details</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                </div>
                            </div>
                            <div class="col-xl-2 col-lg-2 col-md-4">
                                <div class="header-right-btn f-right d-none d-lg-block">
                                    <i class="fas fa-search special-tag myTextColor"></i>
                                    <div class="search-box">
                                            <input @input="searchPost" v-model="searchInput" type="text" placeholder="Search"  />
                                    </div>
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
import axios from "axios"
export default{
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
          // this.postData = []
        //   this.postData = resData;
          // console.log(this.postData)
          
        })
        .catch(function (error) {
          console.log(error);
        });
      }
}
}
</script>