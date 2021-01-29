<template>
  <div class="about page animate__animated animate__fadeIn">
    <h2>⚡ Zumba® Class ⚡</h2>
    <div class="container">
      <div class="row" v-for="(project, index) in projects" :key="index">
        <div class="col-md-5">
          <img
            :src="project.image_cover"
            :alt="project.title"
            class="project-cover"
          />
        </div>
        <div class="col-md-5">
          <h2 class="mt-3" style="text-align: left">
            {{ project.title }}
            <hr class="dope" />
          </h2>
          <b-card class="mt-3 mb-3 text-left text-dark">
            <p>{{ project.description }}</p>
            <b-link :href="project.link"
              >Link Zumba Class! <LinkIcon style="color: #000"
            /></b-link>
            <hr />
            <b-link :href="project.github_url"
              >Paypal <GithubIcon style="color: #000"
            /></b-link>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LinkIcon from "vue-ionicons/dist/md-link.vue";
import GithubIcon from "vue-ionicons/dist/logo-github.vue";

export default {
  components: {
    GithubIcon,
    LinkIcon,
  },
  data() {
    return {
      projects: [
        {
          title: "Zumba Online bequem von zu Hause aus. ",
          tag: "Progressive Web App",
          description:
            "Eine Indoor-Masterclass zu machen, so eine schöne Idee! Die Location zuhause, das Wetter toll und die Stimmung großartig. Im Corona-Zeit fand die Zumba ® Zuhause Masterclass mit den Lydia Rodriguez statt.",
          image_cover: require("@/assets/speak.jpg"),
          github_url: "https://www.facebook.com/ZINLydiaRodriguez/",
          link: "https://www.facebook.com/ZINLydiaRodriguez/",
        },
        {
          title: "Step into Happy",
          tag: "Chrome-Extention, Coming Soon!",
          description:
            "Wir sind zu dem Open Air eingeladen. Highlights und natürlich gute Zumba! Trotz Corona, Super Stimmung auf Tanz.",
          image_cover: require("@/assets/illustration.jpg"),
          github_url: "",
          link: "",
        },
        {
          title: "Zumba Family",
          tag: "Progressive Web App",
          description:
            "Easily share your Zumba Dance with friends during Pandemic.",
          image_cover: require("@/assets/qr-1.png"),
          github_url: "https://www.facebook.com/ZINLydiaRodriguez/",
          link: "https://www.facebook.com/ZINLydiaRodriguez/",
        },
      ],
    };
  },
  methods: {
    isEven(n) {
      if (n % 2 == 0) {
        return true;
      } else {
        return false;
      }
    },
  },
  head: {
    title: "Projekte 💃 - Lydia Rodriguez",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "View all the recents Zumba Projects created with ♥ by Lydia Rodriguez, open-minded means this Zumba Class is available for everyone.",
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "Projekte 💃 - Lydia Rodriguez",
      },
      {
        property: "og:description",
        content:
          "View all the recents Zumba Projects created with ♥ by Lydia Rodriguez, open-minded means this Zumba Class is available for everyone.",
      },
      {
        hid: "og:image",
        name: "og:image",
        content: require("@/assets/man-computer.png"),
      },
    ],
  },
};
</script>
<style scoped>
.row {
  margin-top: 70px;
}
.project-cover {
  width: inherit;
  border-radius: 3px;
}
hr.dope {
  border: 0;
  width: 90px;
  border-top: 2px solid #dc3545;
  text-align: left;
  margin: initial;
  margin-top: 7px;
  margin-left: 5px;
}
</style>
