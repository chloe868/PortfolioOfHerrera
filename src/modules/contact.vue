<template>
  <mdb-container class="mt-5">
    <mdb-card>
      <mdb-card-title class="mt-4 h2">Contact Information</mdb-card-title>
      <mdb-card-body>
        <mdb-card-text
          class="pr-5 pl-5"
          mr-4
          ml-4
        >I'd love to hear something from you</mdb-card-text>
        <form class="gform pure-form pure-form-stacked contact-form" @submit.prevent="sendEmail">
          <mdb-row>
            <mdb-col md="8">
              <mdb-row>
                <mdb-col for="name">
                  <mdb-input id="name" name="from_name" label="Name" />
                </mdb-col>
                <mdb-col for="email">
                  <mdb-input id="email" name="user_email" type="email" label="Your email" required />
                </mdb-col>
              </mdb-row>
              <mdb-row>
                <mdb-col for="message">
                  <mdb-input
                    id="message" 
                    name="message"
                    type="textarea"
                    label="Your message"
                    required
                  />
                </mdb-col>
              </mdb-row>
            </mdb-col>
            <mdb-col md="4">
              <mdb-row>
                <mdb-col class="mt-4">
                  <mdb-icon icon="map-marker-alt" size="2x" />
                  <p>San Alberto Formation Center, Nasipit Talamban, Cebu</p>
                </mdb-col>
              </mdb-row>
              <mdb-row>
                <mdb-col class="mt-4">
                  <mdb-icon icon="phone" size="2x" />
                  <p>+63 926 975 3710</p>
                </mdb-col>
              </mdb-row>
              <mdb-row>
                <mdb-col class="mt-4">
                  <mdb-icon icon="envelope" size="2x" />
                  <p>cherrymae.herrera@student.passerellesnumeriques.org</p>
                </mdb-col>
              </mdb-row>
            </mdb-col>
          </mdb-row>
          <mdb-btn color="primary" class="float-left" type="submit" value="Send">Send</mdb-btn>
        </form>
      </mdb-card-body>
    </mdb-card>
  </mdb-container>
</template>
<style scoped>
  .container {
    text-align: center;
    height: 100%;
  }
</style>
<script>
import emailjs from 'emailjs-com';

export default {
  data() {
        return {
        }
    },
  methods: {
    sendEmail: (e) => {
      emailjs.sendForm('default_service', 'sendemail', e.target, 'user_Uv3DtCzQH0TyeRg0kvU9M')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
    }
  }
}
</script>
