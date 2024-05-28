<template>
  <div class="row" style="width: 1000px">
    <div
      class="col-12 q-px-md"
      :class="$q.screen.gt.sm ? 'text-left' : 'text-center'"
    >
      <div class="text-black font-montserrat-bold font-size-28">About Me</div>
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
          The name's Ruchchanon Sirisan, I've been graduated in Bachelor of
          computer science at Khonkaen University, (2018-2022). I'm a worked as
          a Web Developer, with 2 years of experiences (Front-End).
        </div>
      </div>
    </div>
    <div class="q-px-xl q-py-lg">
      <div class="q-mb-lg font-size-20 font-montserrat-bold text-center">
        Work Experience
      </div>
      <q-timeline color="grey">
        <q-timeline-entry subtitle="August, 2022 - March, 2024" icon="work">
          <template v-slot:title>
            <div class="font-montserrat-regular">Front-End Developer</div>
            <div class="q-mt-sm font-size-16">
              <span class="font-montserrat-regular">Procurement System</span>
              <span class="font-montserrat-italic">
                , Zeus Consulting Co.,Ltd. (outsourcing of Central Pattana Co.,
                Ltd.)
              </span>
            </div>
          </template>
          <div class="font-montserrat-regular">
            The requester can search or select products from the catalog
            (catalog type), if there is no desired product, The requester can
            specify product information (become non-catalog type). When the
            requester completes the document information, The document is sent
            to multiple processes in the system (every process involves
            approval, validation, and calculation). The document goes through
            the PR PO GR processes sequentially. Finally, end the processes by
            making a billing document for payment.<br />
            <br />
            - Frontend Development (Vue, Quasar)
            <br />
            - Responsive Website
            <br />
            - Authentication
            <br />
            - RESTful API, SOAP
            <br />
            - Web Performance Optimization
          </div>
        </q-timeline-entry>

        <q-timeline-entry subtitle="May, 2022 - June, 2022" icon="work">
          <template v-slot:title>
            <div class="font-montserrat-regular">Internship</div>
            <div class="q-mt-sm font-size-16">
              <span class="font-montserrat-regular"
                >Clothing Sales Website</span
              >
              <span class="font-montserrat-italic">
                , Electronic Shell Co.,Ltd.
              </span>
            </div>
          </template>
          <div class="font-montserrat-regular">
            - Learn & Practice development tools (Vue, Nuxt, Vite, Tailwind)
            <br />
            - UX/UI Design
            <br />
            - Frontend & Backend Development (Basic)
          </div>
        </q-timeline-entry>
      </q-timeline>
    </div>
  </div>
</template>
