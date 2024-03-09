import axios from "axios"
export default {
data(){
    return {
        apiData: [],
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
          this.apiData = response.data;
          console.log('apiData',this.apiData)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
  },

}
