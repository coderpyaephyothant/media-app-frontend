<template>
  <!-- Whats New Start -->
        <section class="whats-news-area">
            <div class="container">
                <div class="row" >
                    <div class="col-lg-12" style="padding:30px">
                        <div class="row d-flex justify-content-between">
                            <div class="col-lg-9 col-md-9">
                                <div class="properties__button">
                                    <!--Nav Button  -->
                                      <div class=" nav-tabs myColor"  id="nav-tab" role="tablist">
                                          <div
                                          class="nav-item nav-link myTextColor myCursorPtr"
                                          id="nav-profile-tab"
                                          role="tab"
                                          @click="fetchData"
                                          >
                                          All
                                          </div>
                                          <div
                                            class="nav-item nav-link myTextColor myCursorPtr"
                                            id="nav-profile-tab"
                                            role="tab"
                                            v-for="(cat,index) in catData"
                                            :key="index"
                                            @click="filteredPostByCat(cat.Category_id)"
                                            >
                                            {{cat.Title}}
                                            </div>
                                      </div>
                                    <!--End Nav Button  -->
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
                        </div>
              <div class="row">
                <div class="col-12">
                  <!-- Nav Card -->
                  <div class="tab-content" id="nav-tabContent">
                    <!-- card one -->
                    <div
                      class="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <div class="whats-news-caption">
                            <div v-if="needToLogIn">
                            <div class="alert alert-success alert-dismissible fade show alert-wrapper py-4 alertBg" role="alert">
                            <strong>For More Post Details,</strong> You need to
                            <router-link v-if="!loggedIn" :to="{ name: 'userLogin' }"> <strong class="text-primary" style="text-decoration: underline;">Login.</strong></router-link>
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close"  @click="closeAlert">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          </div>
                        <div class="row" v-if="postData">
                          <!-- simple card bootsrap -->
                          <div class="d-flex flex-wrap"> 
                            <div class="card bshadow" style="width:280px; height:380px; margin:5px" v-for="(post,index) in postData" :key="index" @click="postDetail(post.post_id)" >
                              <div class="" style="height:50%">
                                <img class="" :src="post.image" alt="img" style="width:100%;height:100%">
                                  </div>
                              <div class="card-body" style="height:50%;overflow: hidden;padding:5px !important;">
                                <div class="d-flex justify-content-between">
                                  <div class="bg-white" style="width:80%">
                                    <h5 class="card-title">{{post.title}}</h5>
                                  </div>
                                  <div>
                                <span><i class="fas fa-eye"></i>{{post.views}}</span>
                                  </div>
                                </div>
                                <p class="card-text" style="">{{post.description}}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div v-else class="my-5">
                          <div class="d-flex justify-content-center">
                            <h3 class="myTextColor py-5">
                            There is no data right now . . . . . 
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- End Nav Card -->
                </div>
              </div>
            </div>
                </div>
            </div>
        </section>
        <!-- Whats New End -->

        <!--Start pagination -->
        <div class="pagination-area pb-45 text-center">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="single-wrap d-flex justify-content-center">
                            <nav aria-label="Page navigation example">
                                <ul class="pagination justify-content-start">
                                    <li class="page-item">
                                        <a class="page-link" href="details.html"><span class="flaticon-arrow roted"></span
                      ></a>
                                            </li>
                                            <li class="page-item active">
                                                <a class="page-link" href="details.html">01</a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" href="details.html">02</a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" href="details.html">03</a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" href="details.html"><span class="flaticon-arrow right-arrow"></span
                      ></a>
                                            </li>
                                            </ul>
                                    </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        <!-- End pagination  -->
</template>

<script src="../js/homePage.js"></script>

<style scoped>
.truncate-text {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 4; /* Number of lines to show */
    }
.bshadow{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.myColor{
        background-color: #014f86 !important;
      }

  .header-right-btn {
      position: relative;
      cursor: pointer;
  }
  .search-box {
      position: absolute;
      right: 0;
      opacity: 0;
      visibility: hidden;
      transition: .3s;
  }
  .search-box input {
      position: relative;
      border: 1px solid#ddd;
      padding-left: 10px;
      color:#000;
      width: 189px;
      padding-right: 34px;
      box-shadow: 0px 0px 36px 0pxrgba(142,142,142,0.1);
      @include transition(.4s);
      right: 24px;

      top: -26px;
  }
  .search-box form button {
      position: absolute;
      right: 0px;
      background: none;
      border: none;
      color: rgb(100, 99, 99);
      cursor: pointer;
      top: 2px;
  }
  .header-right-btn:hover .search-box {
      visibility: visible;
      opacity: 1;
      transition: .3s;
  }
  .alert-wrapper {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000; /* Ensure the alert is above other content */
}
.alertBg{
  background-color: #014f86 !important;
  color: #a9d6e5 !important;
}
</style>