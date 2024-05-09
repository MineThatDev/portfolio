<template>
  <div class="row" style="width: 1000px">
    <div
      class="col-12 q-px-md"
      :class="$q.screen.gt.sm ? 'text-left' : 'text-center'"
    >
      <div class="text-black font-montserrat-bold font-size-28">About</div>
    </div>
    <div class="row col-12" :class="$q.screen.gt.sm ? 'q-mt-xl' : 'q-mt-sm'">
      <div
        class="flex flex-center col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-sm"
        :class="$q.screen.gt.sm ? '' : 'q-py-lg'"
      >
        <q-img
          style="
            border-radius: 47% 53% 57% 43% / 40% 44% 56% 60%;
            outline: 3px solid black;
          "
          src="../assets/images/graduated.jpg"
          :width="$q.screen.gt.sm ? '300px' : '200px'"
          :height="$q.screen.gt.sm ? '300px' : '200px'"
        ></q-img>
      </div>
      <div
        class="flex flex-center col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 q-pa-sm"
      >
        <div
          class="font-montserrat-regular font-size-14 text-black q-px-xl font-size-20"
        >
          My name is Ruchchanon Sirisan. I've been graduated in Bachelor of
          computer science at Khonkaen University, (2018-2021). I'm a worked as
          a Web Developer, with 2 years of experiences (Front-End) at Zeus
          Consulting Co.,Ltd (collaborated with Central Pattana Plc.)
        </div>
      </div>
    </div>
  </div>
</template>
