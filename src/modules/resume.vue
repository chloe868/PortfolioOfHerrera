<template>
  <div>
    dafasdf
  </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
<script>
import AUTH from 'services/auth'
import jquery from 'jquery'
export default {
    name: 'Login',
    auth: AUTH,   
    data() {
        return {

        }
    },
    methods: {
        Signup() {
            window.location.href = '/Register';
        },
        onsubmit(e) {
            e.preventDefault();
            AUTH.login(this.input.username, this.input.password)
        },
        logins() {            
            let link= 'http://localhost:3000/user'
                jquery.ajax({
                    url: link,
                    method: 'POST',
                    headers: {
                        'Access-Control-Allow-Origin': '*'
                    }
                }).then(response => {
                    alert(response.username)
                })
        }
    }   
};
</script>


