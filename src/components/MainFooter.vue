<template>
  <div class="row col-12 q-px-lg q-py-sm">
    <div
      class="row col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 items-center"
      :class="$q.screen.gt.sm ? 'justify-start' : 'justify-center'"
    >
      <div>COPYRIGHT</div>
      <q-icon
        name="copyright"
        class="text-red"
        style="margin-left: 2px"
      ></q-icon>
      <div style="margin-left: 2px">2024</div>
      <div class="q-ml-sm">|</div>
      <div class="q-ml-sm">All Right Reserve</div>
    </div>

    <div
      class="row col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 items-center"
      :class="$q.screen.gt.sm ? 'justify-end' : 'justify-center'"
    >
      <div class="font-size-16 font-montserrat-regular">
        <div>
          <q-icon name="mail" class="q-mr-sm" /><span>
            ruchchanon.sirisan@gmail.com</span
          >
        </div>
      </div>
      <div class="font-size-16 font-montserrat-regular q-ml-md">
        <q-icon name="phone" class="q-mr-sm text-dark" />
        <span class="font-size-14">085-648-2951</span>
      </div>
    </div>
  </div>
</template>

<script></script>
