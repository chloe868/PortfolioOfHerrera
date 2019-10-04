<template>
  <div id="background">
    <div id="add">
      <center>
        <h1>Add Subjects & Course</h1>
      </center>
      <hr>
      <div class="input-group form-group">
        <div class="input-group-prepend"><span class="input-group-text"><i class="fas fa-book"></i></span></div>
        <input type="text" class="form-control" placeholder="Subject" name="subject" v-model="infos.subject" required/>
      </div>
      <div class="input-group form-group">
        <div class="input-group-prepend"><span class="input-group-text"><i class="fas fa-user"></i></span></div>
        <input type="text" class="form-control" placeholder="Teacher" name="teacher" v-model="infos.teacher" required/>
      </div>
      <div class="input-group form-group">
        <div class="input-group-prepend"><span class="input-group-text"><i class="fas fa-clock"></i></span></div>
        <input type="text" class="form-control" placeholder="Time" name="time" v-model="infos.time" required/>
      </div>
      <div class="input-group form-group">
        <div class="input-group-prepend"><span class="input-group-text"><i class="fas fa-calendar-alt"></i></span></div>
        <input type="text" class="form-control" placeholder="Day" name="day" v-model="infos.day" required/>
      </div>
      <div class="input-group form-group">
        <div class="input-group-prepend"><span class="input-group-text"><i class="fas fa-map-marker-alt"></i></span></div>
        <input type="text" class="form-control" placeholder="Room" name="room" v-model="infos.room" required/>
      </div>
        <b-button variant="primary" class="btn btn-primary btn-lg btn-block" @click="addOn">Add Subject</b-button><br>
      <div class="input-group form-group">
        <div class="input-group-prepend"><span class="input-group-text"><i class="fas fa-trash"></i></span></div>
        <input type="text" class="form-control" placeholder="Delete Subject" name="delete" v-model="del" required/>
      </div>
        <b-button variant="primary" class="btn btn-primary btn-lg btn-block" @click="deleteOn">Delete Subject</b-button>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">SUBJECT</th>
            <th scope="col">TEACHER</th>
            <th scope="col">TIME</th>
            <th scope="col">DAY</th>
            <th scope="col">ROOM</th>
          </tr>
        </thead>
        <tbody v-for="(item, index) in this.rows" :key="index">
          <tr>
            <td>{{ item.subject }}</td>
            <td>{{ item.teacher }}</td>
            <td>{{ item.time }}</td>
            <td>{{ item.day }}</td>
            <td>{{ item.room }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
#background {
  background-image: url("https://www.itseducation.asia/assets/images/bg-1005.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-size: 100%;
  padding-top: 1.5%;
  padding-bottom: 3.5%;
}
#add {
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
      rows: [],
      infos: {
        subject: "",
        teacher: "",
        time: "",
        day: "",
        room: ""
      }
    };
  },
  methods: {
    deleteOn() {
      for(let i = 0; i < this.rows.length; i++){
        if(this.rows[i].subject === this.del){
          if(this.rows.splice(this.rows.indexOf(this.rows[i]), 1));
      }
    }
    this.del = "";
  },
    addOn() {
      var object = {
        subject: this.infos.subject,
        teacher: this.infos.teacher,
        time: this.infos.time,
        day: this.infos.day,
        room: this.infos.room
      };
      this.rows.push(object);
      this.infos.subject = "";
      this.infos.teacher = "";
      this.infos.time = "";
      this.infos.day = "";
      this.infos.room = "";
    }
  }
};
</script>