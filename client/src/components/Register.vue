<template>
  
  <div>
    
    <h1> Register</h1>

    <input type="email" name="email" v-model="email" placeholder="email"/>
    <br>
    <input type="password" name="password" v-model="password" placeholder="password"/>
    <br>
    <!-- means that anyone who clicks this button is going to call the register from methods -->
    <button @click="register">Register</button>
  
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register(){
      console.log('register function')
      //this will check to wait for a response back from AuthenticationService before proceeding to give the response data
      await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>
