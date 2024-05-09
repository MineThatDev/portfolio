<template>
  <div class="row" style="width: 1000px">
    <div class="row col-12">
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm">
        <div class="font-montserrat-bold font-size-44">Web Developer</div>
        <div class="font-montserrat-bold font-size-20 text-grey q-my-lg">
          Hi, I'm Ruchchanon Sirisan, A passionate Web Developer based in Pathum
          Thani, Thailand.
        </div>
        <div>
          <q-img
            src="../assets/images/github.png"
            width="32px"
            height="32px"
            class="cursor-pointer"
            @click="redirectToGit()"
          ></q-img>
          <!-- <q-img
            class="q-ml-sm"
            src="../assets/images/github.png"
            width="24px"
            height="24px"
          ></q-img> -->
        </div>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 text-right">
        <q-img
          style="border-radius: 28px"
          src="../assets/images/studentphoto.jpg"
          width="220px"
          height="300px"
        />
      </div>
    </div>
    <div class="row col-12 items-center" style="margin-top: 76px">
      <div class="q-mx-xl font-montserrat-bold font-size-20">Tech Stack</div>
      <q-separator vertical inset />
      <q-img
        class="q-ml-xl"
        src="../assets/images/html.jpg"
        width="36px"
        height="36px"
      ></q-img>
      <q-img
        class="q-ml-xl"
        src="../assets/images/css.png"
        width="31px"
        height="31px"
      ></q-img>
      <q-img
        class="q-ml-xl"
        src="../assets/images/javascript.png"
        width="37px"
        height="37px"
      ></q-img>
      <q-img
        class="q-ml-xl"
        src="../assets/images/vue.png"
        width="34px"
        height="34px"
      ></q-img>
      <q-img
        class="q-ml-xl"
        src="../assets/images/nodejs.png"
        width="40px"
        height="40px"
      ></q-img>
      <q-img
        class="q-ml-xl"
        src="../assets/images/mongodb.png"
        width="30px"
        height="30px"
      ></q-img>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      redirectToGit: () => {
        return window.open("https://github.com/MineThatDev/");
      },
    };
  },
};
</script>
