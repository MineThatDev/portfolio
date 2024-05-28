<template>
  <div class="row" style="width: 1000px">
    <div
      class="row col-12"
      :style="$q.screen.gt.sm ? 'margin-top: 80px' : 'margin-top: 40px'"
    >
      <div
        class="flex flex-center col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12"
        :class="$q.screen.gt.sm ? 'q-px-md' : 'q-px-xl'"
      >
        <q-img
          src="../assets/images/social-app.png"
          style="border-radius: 4px"
        ></q-img>
      </div>
      <div
        class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-px-md"
        :class="$q.screen.gt.sm ? '' : 'q-mt-xl'"
      >
        <div class="text-center font-montserrat-bold font-size-20">
          Social Application
        </div>
        <div
          class="font-montserrat-semi-bold font-size-16 text-grey q-py-xl q-px-xl"
          :class="$q.screen.gt.sm ? '' : 'text-left'"
        >
          It's a social media application that focus on communication,
          community-based input, interaction, content-sharing and collaboration.
          People use social media to stay in touch and interact with friends,
          family and various communities.
        </div>
        <div>
          <div class="justify-center row col-12 font-montserrat-bold q-pb-lg">
            <div>Vue</div>
            <div class="q-ml-lg">Quasar</div>
          </div>

          <div class="justify-center row col-12 font-montserrat-bold q-py-md">
            <q-btn-dropdown label="Code" no-caps>
              <q-list>
                <q-item
                  clickable
                  v-close-popup
                  href="https://github.com/MineThatDev/social-app-frontend"
                  target="_blank"
                >
                  <q-item-section>
                    <q-item-label class="font-montserrat-bold"
                      ><q-img
                        src="../assets/images/github.png"
                        width="16px"
                        height="16px"
                        class="q-mr-sm"
                      />
                      Front-End</q-item-label
                    >
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
            <q-btn
              size="12px"
              href="https://social-app-ruchchanon.onrender.com/"
              target="_blank"
              no-caps
              class="q-ml-lg"
              icon-right="logout"
              label="Live Demo"
            ></q-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
