<template>
    <div>
        <div class="container">
                    
                <div v-if="unSuccessLogIn">
                <div class="alert alert-success alert-dismissible fade show alert-wrapper py-4 alertBg" role="alert">
                <strong>Incorrect Credentials</strong> You need to {{loggedIn}}
                <router-link v-if="!loggedIn" :to="{ name: 'userLogin' }"> <strong class="text-primary" style="text-decoration: underline;">Login.</strong></router-link>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close"  @click="closeAlert">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
            </div>
            <div class="row d-flex justify-content-center">
                <div class="col-6 mt-5 mb-5 p-5">
                    <h3 class="myTextColor">Log in</h3>
                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-2 col-form-label myTextColor mr-1" >Email</label>
                        <div class="col-sm-10">
                        <input type="email" class="form-control" id="inputEmail3" placeholder="Email" v-model="userInput.email">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPassword3" class="col-sm-2 col-form-label myTextColor mr-1" >Password</label>
                        <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword3" placeholder="Password" v-model="userInput.password">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-10">
                        <button type="submit" class="button-modified" @click="loginAccount">Sign in</button>
                        </div>
  </div>
                </div>
            </div>
        </div>
  
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import axios from "axios"
    export default {
        computed:{
            ...mapGetters(['validToken','userData','loggedIn']),
            },
        data(){
            return {
                userInput:{
                    email:'',
                    password:'',
                },
                    unSuccessLogIn:false
            }
        },
        methods:{
            loginAccount(){
            let loginUrl = 'http://localhost:8056/api/user/login'
                axios.post(loginUrl, this.userInput)
                .then((response)=>{
                    if(response.data.accessToken != null){
                        this.$store.dispatch('setValidToken',response.data.accessToken)
                        this.$store.dispatch('setUserData',response.data.userData)
                        this.$store.dispatch('setLoggedIn', true);
                        this.$router.push({
                            name:'home'
                        })
                        console.log(this.validToken,this.userData,this.loggedIn)
                    }else{
                        console.log('error')
                    this.unSuccessLogIn = true
                    }
                }).catch(function(err){
                    console.log(err)
                    this.unSuccessLogIn = true
                })
            },
            closeAlert() {
            this.unSuccessLogIn = false; 
      }
        }
    }
</script>

<style scoped>

/* CSS */
.button-modified{
  align-items: center;
  appearance: none;
  background-image: radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%);
  border: 0;
  border-radius: 6px;
  box-shadow: rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  height: 30px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s,transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow,transform;
  font-size: 18px;
}

.button-modified:focus {
  box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
}

.button-modified:hover {
  box-shadow: rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
  transform: translateY(-2px);
}

.button-modified:active {
  box-shadow: #3c4fe0 0 3px 7px inset;
  transform: translateY(2px);
}
.myTextColor{
        color: #a9d6e5 !important;
      }

.alertBg{
  background-color: #014f86 !important;
  color: #a9d6e5 !important;
}
</style>