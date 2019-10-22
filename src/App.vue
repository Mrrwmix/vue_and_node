<template>
  <div>
    <app-header></app-header>
    <nav class="nav d-flex justify-content-center">
      <button class="nav-item" @click="compToRender = 'compHome'">Home</button>
      <button class="nav-item" @click="compToRender = 'compContact'">Contact</button>
      <button class="nav-item" @click="compToRender = 'compPage'">Page</button>
    </nav>
    <div class="container">
      <compUserProfile
        :userName="name"
        :userLastname="lastname"
        :userAge="age"
        :userParents="parents"
        @updateName="name = $event"
        :updateLastname="updateLastname"
      />
      <compFriends />
      <compAbilities>
        <ul slot="main_ab">
          <li v-for="(ab, index) in abilities" :key="index">{{ab}}</li>
        </ul>
        <div slot="notes">
          <p>The user also knows PHP</p>
        </div>
        <div>
          <a href="#">See more about this user</a>
        </div>
        <div :slot="slotName">Other content</div>
      </compAbilities>
      <form>
        <div class="row">
          <div class="col-xs-12">
            <h1>Contact Us</h1>
            <hr />

            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" class="form-control" v-model.lazy="formdata.name" />
            </div>
            <div class="form-group">
              <label for="lastname">Last name</label>
              <input
                type="text"
                id="lastname"
                class="form-control"
                v-model.lazy="formdata.lastname"
              />
            </div>
            <div class="form-group">
              <label for="subject">Subject</label>
              <input type="text" id="subject" class="form-control" v-model.lazy="formdata.subject" />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea class="form-control" rows="3" id="message" v-model="formdata.message"></textarea>
            </div>
            <div class="form-group">
              <label for="newsletter">Newsletter</label>
              <input type="checkbox" id="newsletter" value="newsletter" v-model="formdata.extras" />
              <label for="promotions">Promotions</label>
              <input type="checkbox" id="promotions" value="promotions" v-model="formdata.extras" />
            </div>
            <div class="form-group">
              <label for="human">
                <input type="radio" id="human" value="human" v-model="formdata.race" /> Human
              </label>

              <label for="alien">
                <input type="radio" id="alien" value="alien" v-model="formdata.race" /> Alien
              </label>
            </div>
            <div class="form-group">
              <label for="country">Country</label>
              <select class="form-control" id="country" name="country" v-model="formdata.country">
                <option v-for="(country, index) in countries" :key="index">{{country}}</option>
              </select>
            </div>
            <button class="btn btn-primary" @click.prevent="submitForm">Submit</button>
          </div>
        </div>
      </form>
      <keep-alive>
        <component :is="compToRender"></component>
      </keep-alive>
      <div v-awesome.red.big="'text as value'"></div>
      <div v-awesome.blue.small="'text as value'"></div>

      <hr />
      <div v-user-lastname="userLastname"></div>
      <transition name="slideup">
        <div class="p-2 mb-2 bg-success text-white" v-if="display">Oi oi!</div>
      </transition>
      <transition name="appear">
        <div class="p-2 mb-2 bg-success text-white" v-if="display">Hello</div>
      </transition>
      <button class="btn btn-primary" @click="display = !display">Toggle animation</button>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Footer from "./components/Header_footer/Footer";
import compUserProfile from "./components/User/Profile";
import compFriends from "./components/User/Friends";
import compAbilities from "./components/User/Abilities";
import compHome from "./components/Home";
import compContact from "./components/Contact";
import compPage from "./components/Page";

export default {
  data() {
    return {
      name: "Francis",
      lastname: "Jones",
      age: 25,
      parents: {
        mother: "Martha",
        father: "Mario"
      },
      abilities: ["JS", "CSS", "HTML"],
      slotName: "",
      formdata: {
        name: "",
        lastname: "",
        subject: "",
        message: "",
        extras: [],
        race: "",
        country: "India"
      },
      countries: ["USA", "India", "UK", "Russia"],
      compToRender: "compContact",
      userLastname: "Jones",
      display: false
    };
  },
  methods: {
    updateLastname(val) {
      this.lastname = val;
    },
    submitForm() {
      console.log(this.formdata);
    }
  },
  components: {
    "app-footer": Footer,
    compUserProfile,
    compFriends,
    compAbilities,
    compContact,
    compHome,
    compPage
  },
  created() {
    setTimeout(() => {
      this.slotName = "other";
    }, 3000);
  },
  directives: {
    "user-lastname": {
      bind(el, binding) {
        el.innerHTML = binding.value;
      }
    }
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
}

.container {
  min-height: 84vh;
  box-sizing: border-box;
  padding: 20px;
}

.appear-enter {
  transform: translateX(30px);
  opacity: 0;
}
.appear-enter-active {
  transition: all 0.3s ease;
}

.appear-leave-active {
  transform: translateX(30px);
  transition: all 0.3s ease;
}

.slideup-enter-active {
  transition: opacity 1s;
  animation: slideUp 1s ease-out;
}

.slideup-leave-active {
  opacity: 0;
  transition: opacity 1s;
  animation: slideDown 1s ease-out;
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slideDown {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(20px);
  }
}
</style>