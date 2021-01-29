<template>
  <b-row style="margin-left: 0; margin-right: 0">
    <b-col md="4">
      <b-img
        :src="avatar"
        id="avatar-img"
        alt="Lydia Rodriguez Memoji"
        @mouseenter="changeAvatar"
        @mouseleave="changeAvatar"
      />
    </b-col>
    <b-col md="8">
      <h2 class="intro animate__animated animate__fadeInUp animate__fast">
        Hi 👋,
        <br />Ich bin <span>Lydia&nbsp;Rodriguez</span> 💃.
      </h2>
      <div class="col-md-10 info">
        Dein <b>Zumba® Instructor</b> und <b>Personal Trainer</b> für Anfänger
        bis Fortgeschrittene. Ich bin ZIN Mitglied und ich liebe es, Zumba Kurse
        zu geben. Probier es aus, komm vorbei oder schreib mir eine
        Nachricht.<br />
        Es geht darum, sich besser zu bewegen und besser zu leben.
        <br />
        <b-button
          class="action-btn animate__animated animate__wobble animate__delay-4s animate__fast"
          to="/projects"
          >Link Zumba Class ></b-button
        >
        <b-button class="action-btn" to="/contact" variant="primary"
          >Buy me a coffee</b-button
        >
        <div
          class="social-icons animate__animated animate__fadeInUp animate__delay-1s"
        >
          <a
            href="https://www.zumba.com/de-DE/profile/Lydia_Rodriguez/1739458"
            target="_blank"
            rel="noopener"
          >
            <GithubIcon />
          </a>

          <a
            href="https://www.instagram.com/lydia_rodriguez_corcoba/?igshid=1t8tw9acoabou"
            target="_blank"
            rel="noopener"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://www.facebook.com/ZINLydiaRodriguez/"
            target="_blank"
            rel="noopener"
          >
            <FacebookIcon />
          </a>
          <a
            href="mailto:lydiacorcoba@gmail.com"
            target="_blank"
            rel="noopener"
          >
            <MailIcon />
          </a>
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import GithubIcon from "vue-ionicons/dist/logo-github.vue";
import LinkedinIcon from "vue-ionicons/dist/logo-linkedin.vue";
import TwitterIcon from "vue-ionicons/dist/logo-instagram.vue";
import FacebookIcon from "vue-ionicons/dist/logo-facebook.vue";
import MailIcon from "vue-ionicons/dist/md-mail.vue";
export default {
  name: "Home",
  components: { GithubIcon, LinkedinIcon, TwitterIcon, FacebookIcon, MailIcon },
  data() {
    return {
      avatar: require("@/assets/avatar-1.webp"),
    };
  },
  head: {
    title: "Lydia Rodriguez - Zumba Trainer",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Lydia Rodriguez is an awesome Zumba Instructor and Mum of four, passionate about giving zumba classes that works across multiple cultures with high respect approach. Lydia has vast knowledge in Zumba Dance with over 4+ years experience in giving Zumba Class",
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "Zumba ⚡- Lydia Rodriguez",
      },
      {
        property: "og:description",
        content:
          "Lydia Rodriguez is an awesome Zumba Instructor and Mum of four, passionate about giving zumba classes that works across multiple cultures with high respect approach. Lydia has vast knowledge in Zumba Dance with over 4+ years experience in giving Zumba Class",
      },
      {
        hid: "og:image",
        name: "og:image",
        content: require("@/assets/coding.png"),
      },
    ],
  },
  methods: {
    changeAvatar() {
      if (this.avatar == require("@/assets/avatar-2.webp")) {
        this.avatar = require("@/assets/avatar-1.webp");
      } else {
        this.avatar = require("@/assets/avatar-2.webp");
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();

      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
};
</script>

<style scoped>
.row {
  margin-top: 170px;
}
.action-btn {
  display: inline-table;
  margin: 7px;
}
.info {
  margin-top: 10px;
  text-align: left;
  line-height: 2em;
  font-size: 18px;
  font-weight: normal;
  margin-left: 7px;
}
img {
  background-color: rgb(46, 42, 42);
  border-radius: 100%;
  width: 200px;
  height: 200px;
  cursor: pointer;
}
.social-icons {
  margin-top: 25px;
}
.social-icons a {
  font-size: 25px;
  margin: 15px;
  color: rgba(0, 0, 0, 0.712);
}
.social-icons a:hover {
  color: #000;
}
.intro {
  font-size: 45px;
  font-weight: bolder;
  text-align: left;
  margin-left: 20px;
  margin-top: 20px;
  /* color: #000; */
}
/* for mobile devices */
@media screen and (max-width: 420px) {
  .row {
    margin-top: 0px;
  }
  img {
    width: 150px;
    height: 150px;
  }
  .intro {
    font-size: 30px;
    font-weight: bold;
  }
}
.btn-primary {
  background-color: #f00;
  border-color: #f00;
}
.btn-primary:hover {
  background-color: rgb(240, 0, 0);
  border-color: rgb(240, 0, 0);
}
</style>
