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
        <form class="gform pure-form pure-form-stacked" method="POST" data-email="example@email.net"
          action="https://script.google.com/a/student.passerellesnumeriques.org/macros/s/AKfycbzHkfPJPZ0gKUfA1A9349i4fqykzL1Y5kg2cIQc/exec">
          <mdb-row>
            <mdb-col md="8">
              <mdb-row>
                <mdb-col for="name">
                  <mdb-input id="name" name="name" label="Name" />
                </mdb-col>
                <mdb-col for="email">
                  <mdb-input id="email" name="email" type="email" label="Your email" required />
                </mdb-col>
              </mdb-row>
              <!-- <mdb-row>
                <mdb-col>
                  <mdb-input label="Subject" v-model="fields.subject" required />
                </mdb-col>
              </mdb-row> -->
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
                  <p>San Francisco, CA 94126, USA</p>
                </mdb-col>
              </mdb-row>
              <mdb-row>
                <mdb-col class="mt-4">
                  <mdb-icon icon="phone" size="2x" />
                  <p>+ 01 234 567 89</p>
                </mdb-col>
              </mdb-row>
              <mdb-row>
                <mdb-col class="mt-4">
                  <mdb-icon icon="envelope" size="2x" />
                  <p>contact@mdbootstrap.com</p>
                </mdb-col>
              </mdb-row>
            </mdb-col>
          </mdb-row>
          <mdb-btn color="primary" class="float-left" @click="formSubmit">Send</mdb-btn>
          <div class="thankyou_message" style="display:none;">
            <h2><em>Thanks</em> for contacting us!
              We will get back to you soon!</h2>
          </div>
        </form>
      </mdb-card-body>
    </mdb-card>
  </mdb-container>
</template>
<style scoped>
  .container {
    text-align: center;
  }
</style>
<script>
import formSubmit from './form-submission-handler.js'
import ROUTER from "router";
  import {
    mdbContainer,
    mdbInput,
    mdbCard,
    mdbCardHeader,
    mdbCardTitle,
    mdbCardText,
    mdbCardBody,
    mdbIcon,
    mdbBtn,
    mdbRow,
    mdbCol
  } from "mdbvue";

  export default {
    name: "Contact",
    components: {
      mdbContainer,
      mdbInput,
      mdbCard,
      mdbCardHeader,
      mdbCardTitle,
      mdbCardBody,
      mdbCardText,
      mdbIcon,
      mdbBtn,
      mdbRow,
      mdbCol
    },
    data() {
      return {
      };
    },
    methods: {
      formSubmit,
      sendEmail(){
        console.log('nasulod')
        // formSubmit
        // ROUTER.push('/Contact');
      }
    }
  };
</script>
