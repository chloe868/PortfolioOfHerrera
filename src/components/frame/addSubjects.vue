<template>
  <div id="background">
    <div id="add">
    <center>
      <h1>Add Subjects & Course</h1>
    </center>
        <hr>
    <center>
      <b-card text-align  img-top tag="article" style="max-width: 30rem;" class="mb-2">
        <b-form-group label-size="lg" label-for="input-lg">
          <label id="Subject">Subject:</label>
          <b-form-input v-model="infos.subject" id="subject" size="lg"></b-form-input>
          <label id="teacher">Teacher:</label>
          <br>
          <b-form-input v-model="infos.teacher" id="teacher" size="lg"></b-form-input>
          <br>
          <label id="time">Time:</label>
          <b-form-input v-model="infos.time" id="time" size="lg"></b-form-input>
          <label id="time">Day:</label>
          <b-form-input v-model="infos.day" id="day" size="lg"></b-form-input>
          <label id="room">Room:</label>
          <b-form-input v-model="infos.room" id="room" size="lg"></b-form-input>
          <br>
          <b-button variant="primary" class="btn btn-primary btn-lg btn-block" @click="addItem"
           >Add Subject</b-button>
        </b-form-group>
      </b-card>
      <b-card text-align id="card1" img-top tag="article" style="max-width: 40rem;" class="mb-2">
        <table class="table">
          <thead>
            <tr >
              <th scope="col">SUBJECT</th>
              <th scope="col">TEACHER</th>
              <th scope="col">TIME</th>
              <th scope="col">DAY</th>
              <th scope="col">ROOM</th>
            </tr>
          </thead>
         <tbody v-for="(item, index) in this.rows" :key="index">
            <tr >
              <td>{{ item.subject }}</td>
              <td>{{ item.teacher }}</td>
              <td>{{ item.time }}</td>
              <td>{{ item.day }}</td>
              <td>{{ item.room }}</td>
            </tr>
          </tbody>
        </table>
      </b-card>
      </center>
    </div>
  </div>
</template>


<style>
#background {
  background-image: url("https://www.itseducation.asia/assets/images/bg-1005.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-size: 100%;
  padding-top: 5%;
  padding-bottom: 10%;
}
#add{
  width: 40%;
  position: relative;
  left: 35%;
  background-color: rgb(200, 207, 204);
  border-radius: 5%;
  padding: 2%;
}
#image {
  width: 150px;
  height: 150px;
}
</style>

<script>
export default {
   data() {
    return {
        rows:[],
      infos: {
        subject: "",
        teacher: "",
        time: "",
        day: "",
        room: "",
      }
    }
  },
  methods: {
    addItem() {
      var object = {
        subject: this.infos.subject,
        teacher: this.infos.teacher,
        time: this.infos.time,
        day: this.infos.day,
        room: this.infos.room
      };
      this.rows.push( object )
      this.infos.subject = ""
      this.infos.teacher = ""
      this.infos.time = ""
      this.infos.day= ""
      this.infos.room = ""
    }
  }
};
</script>