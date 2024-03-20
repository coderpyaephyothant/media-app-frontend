import axios from "axios"
import {mapGetters} from 'vuex';
export default {
  computed:{
    ...mapGetters(['loggedIn','userData','viewCount','userId']),
    },
data(){
    return {
        postData: [],
        catData : [],
        searchInput:'',
        needToLogIn:false,
        postViews:0
    }
},
mounted(){
    this.fetchData();
},

methods: {
    fetchData() {
      const postUrl = 'http://localhost:8056/api/user/new-posts';
      const categoryUrl = 'http://localhost:8056/api/user/all-categories';
// Get Posts
      axios.get(postUrl)
        .then(response => {
          let resData = response.data.posts
          for (let i = 0; i < resData.length; i++) {
             if(resData[i].image){
               resData[i].image = 'http://localhost:8056/uploads/'+ resData[i].image
             }
          }
          this.postData = resData;
          if(this.postData){
             this.fetchViewCounts()
             
          }
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });    

        
// Get Categories
        axios.get(categoryUrl)
             .then(res => {
              this.catData = res.data.categories
             })
             .catch(error => {
              console.error('Error fetching data:', error);
            });
      },

      updateData(data){
        this.postData = data
      },
      // filtered post by category

      filteredPostByCat(catId){
        this.postData = []
        const filterByCatUrl = 'http://localhost:8056/api/user/filtered-by-category'
        let filteredData = { filteredByCategory: catId}
        axios.post(filterByCatUrl, filteredData)
        .then( (response)=> {
          let resData = response.data.post;
          for (let i = 0; i < resData.length; i++) {
            if(resData[i].image){
              resData[i].image = 'http://localhost:8056/uploads/'+ resData[i].image
            }
          }
          this.postData = resData;
        })
      },
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
          this.postData = resData;
          
        })
        .catch(function (error) {
          console.log(error);
        });
      },

      postDetail(id){
        if(this.loggedIn){
          // increase post view ActivityLog
          let data = {
            postId : id,
            userId : this.userId
          }
          console.log('data',data)
          this.$store.dispatch('fetchPostViewCount',{ params: data })
            this.$router.push(
              {name:"postDetail", 
              params:{
                id : id,
               }
              }
              )
          }else{
            this.needToLogIn = true
        }
      },
      closeAlert() {
        this.needToLogIn = false; 
      },
      fetchViewCounts(){
        // Fetch view counts for each post
        this.postData.forEach(post => {
          axios.get(`http://localhost:8056/api/user/post/${post.post_id}/views`).then((response)=>{
            post.views = response.data.views
          })
        });
      }


  },



}
