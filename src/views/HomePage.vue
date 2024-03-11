<template>
  <!-- Whats New Start -->
        <section class="whats-news-area px-0 py-0 mx-0 my-0">
        <MyHeader @searchedData="updateData"/>
            <div class="container">
                <div class="row" >
                    <div class="col-lg-12" style="padding:30px">
                        <div class="row d-flex justify-content-between">
                            <div class="col-lg-3 col-md-3">
                            </div>
                            <div class="col-lg-9 col-md-9">
                                <div class="properties__button">
                                    <!--Nav Button  -->
                                        <div class=" nav-tabs myColor"  id="nav-tab" role="tablist">
                        <a
                          class="nav-item nav-link myTextColor"
                          id="nav-profile-tab"
                          data-toggle="tab"
                          href="details.htmlnav-profile"
                          role="tab"
                          aria-controls="nav-profile"
                          aria-selected="false"
                          v-for="(cat,index) in catData"
                          :key="index"
                          >{{cat}}</a
                        >
                      </div>
                    <!--End Nav Button  -->
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
                        <div class="row">

                          <!-- simple card bootsrap -->
                          <div class="d-flex flex-wrap"> 
                            <div class="card bshadow" style="width:280px; height:380px; margin:5px" v-for="(post,index) in postData" :key="index" >
                              <div class="bg-success" style="height:50%">
                                <img class="" :src="post.image" alt="img" style="width:100%;height:100%">
                                  </div>
                              <div class="card-body" style="height:50%;overflow: hidden;">
                                <h5 class="card-title">{{post.title}}</h5>
                                <p class="card-text" style="">{{post.description}}</p>
                              </div>
                            </div>
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
</style>