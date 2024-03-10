import axios from "axios"
export default {
data(){
    return {
        postData: [],
    }
},
mounted(){
    this.fetchData();
},
methods: {
    fetchData() {
      const apiUrl = 'http://localhost:8056/api/user/new-posts';

      axios.get(apiUrl)
        .then(response => {
          console.log(response.data.posts)
          let resData = response.data.posts
          for (let i = 0; i < resData.length; i++) {
             console.log(resData[i].image)
             if(resData[i].image){
               resData[i].image = 'http://localhost:8056/uploads/'+ resData[i].image
             }
          }
          this.postData = response.data.posts;
          console.log('postData',this.postData)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
  },

}
