<template>
  <div class="container animate__animated animate__fadeIn">
    <div class="row">
      <div class="col-md-6">
        <div class="about">
          <h1 class="line-after">Über mich</h1>
          <h4 class="mt-4">Hey 👋</h4>
          <p>
            Hallo! Ich bin <b>Lydia Rodriguez</b> und wohne in Lippstadt,
            Nordrhein-Westfalen. Ich bin seit <b>™ ZINApr 2019 Mitglied</b> und
            ich liebe es, <b>Zumba Kurse</b> zu geben. Der Grund ist klar: Jeder
            Kurs fühlt sich wie eine Party an! Derzeit habe ich Kurslizenzen für
            Zumba. Komm und mach mit, ich garantiere dir, du wirst einen
            Riesenspaß haben! Wenn du Fragen hast, schreib' mir doch einfach
            eine <u>Nachricht! </u> 💌.
          </p>
          <p>
            I habe <b>{{ currYear - startYear }}+ Jahre Erfarung</b> in Zumba
            Kurse. Plus Ich lerne neue cooler Lieder zum tanzen jede Woche.
          </p>
          <h4 class="mt-5">Zumba Lizenzen</h4>
          <p>Diese sind meine Zumba Lizenzen und Ausbildung soweit:</p>
          <div class="row animate__animated animate__fadeInUp">
            <div class="col">
              <ul style="list-style-type: circle">
                <li>ZUMBA® BASIC 1S</li>
                <li>ZUMBA® VIRTUAL PRO</li>
                <li>10-YEAR ZIN™ JAMVERSARY VIRTUAL SESSIONS</li>
              </ul>
            </div>
            <div class="col">
              <ul style="list-style-type: circle">
                <li>ZIN™ VIRTUAL CONVENTION</li>
                <li>ZUMBA® CUE LIKE A PRO</li>
                <li>1 YEAR ZIN™s</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <img
          src="@/assets/working.png"
          alt="About Illustration"
          class="abt-img"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      startYear: 2017,
      currYear: new Date().getFullYear(),
      stacks: [
        {
          language: "HTML",
          experience: "3+ Years",
          variant: "secondary",
          breif: "lorem...",
        },
        {
          language: "CSS",
          experience: "3+ Years",
          variant: "primary",
          breif: "lorem...",
        },
        {
          language: "Javascript",
          experience: "2+ Years",
          variant: "warning",
          breif: "lorem...",
        },
        {
          language: "VUE.JS",
          experience: "2+ Years",
          variant: "success",
          breif: "lorem...",
        },
        {
          language: "Node.js",
          experience: "2+ Years",
          variant: "dark",
          breif: "lorem...",
        },
      ],
    };
  },
  head: {
    title: "Über mich 💃 - Lydia Rodriguez",
    meta: [
      {
        hid: "description",
        name: "description",
        // currYear - startYear
        content: `Hey there 👋 My name Lydia Rodriguez is an awesome Zumba Instructor and Mum of four, passionate about giving zumba classes that works across multiple cultures with high respect approach. Lydia has vast knowledge in Zumba Dance with over 4+ years experience in giving Zumba Class.`,
      },
    ],
  },
};
</script>
<style scoped>
.container {
  margin-top: 140px;
  text-align: left;
}
.line-after {
  overflow: hidden;
}
.line-after::after {
  content: "";
  display: inline-block;
  height: 0.5em;
  vertical-align: bottom;
  width: 100%;
  margin-right: -100%;
  margin-left: 10px;
  border-top: 2px solid rgb(211, 46, 46);
}
.abt-img {
  width: inherit;
  height: inherit;
  border-radius: 5px;
}
/* .abt-img:hover {
  animation: swing;
  animation-duration: 2s;
} */
</style>
