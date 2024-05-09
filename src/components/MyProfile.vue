<template>
  <div class="row" style="width: 1000px">
    <div class="row col-12">
      <div
        class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm row justify-center"
      >
        <div
          style="width: 80%"
          :class="$q.screen.gt.sm ? 'text-left' : 'text-center q-py-md'"
        >
          <div
            class="font-montserrat-bold"
            :class="$q.screen.gt.sm ? 'font-size-44' : 'font-size-28'"
          >
            Web Developer
          </div>
          <div class="font-montserrat-bold font-size-20 text-grey q-my-lg">
            Hi, I'm Ruchchanon Sirisan, A passionate Web Developer based in
            Pathum Thani, Thailand.
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
      </div>
      <div
        class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 row justify-center"
      >
        <div
          style="width: 80%"
          class="text-center"
          :class="$q.screen.gt.sm ? '' : 'q-py-md'"
        >
          <q-img
            style="
              outline: 4px solid black;
              border-radius: 47% 53% 57% 43% / 40% 44% 56% 60%;
            "
            src="../assets/images/my-profile.jpg"
            :width="$q.screen.gt.sm ? '300px' : '200px'"
            :height="$q.screen.gt.sm ? '300px' : '200px'"
          />
        </div>
      </div>
    </div>
    <div
      class="row col-12 items-center"
      style="margin-top: 76px"
      v-if="$q.screen.gt.sm"
    >
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
        width="32px"
        height="32px"
      ></q-img>
    </div>
    <div class="row col-12 items-center" style="margin-top: 76px" v-else>
      <div class="col-12 text-center">
        <div class="q-mx-xl font-montserrat-bold font-size-20">Tech Stack</div>
      </div>
      <div class="row col-12 q-mt-xl">
        <div
          class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center q-pr-xl"
        >
          <q-img
            style="margin-left: 49px"
            src="../assets/images/html.jpg"
            width="38px"
            height="38px"
          ></q-img>
          <q-img
            style="margin-left: 50px"
            src="../assets/images/css.png"
            width="31px"
            height="31px"
          ></q-img>
          <q-img
            style="margin-left: 50px"
            src="../assets/images/javascript.png"
            width="40px"
            height="40px"
          ></q-img>
        </div>
        <div
          class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center q-pr-xl q-mt-md"
        >
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
            width="32px"
            height="32px"
          ></q-img>
        </div>
      </div>
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
