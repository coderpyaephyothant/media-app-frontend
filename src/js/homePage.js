import axios from "axios"
import MyHeader from '../components/MyHeader'
export default {
  components:{
    MyHeader
  },
data(){
    return {
        postData: [],
        catData : [],
        
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
      }

  },



}
