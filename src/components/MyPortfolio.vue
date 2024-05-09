<template>
  <div class="row" style="width: 1000px">
    <div
      class="col-12 q-px-md"
      :class="$q.screen.gt.sm ? 'text-left' : 'text-center'"
    >
      <div class="font-size-28 font-montserrat-bold">Project</div>
    </div>
    <div
      class="row col-12"
      :style="$q.screen.gt.sm ? 'margin-top: 80px' : 'margin-top: 40px'"
    >
      <div
        class="flex flex-center col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12"
        :class="$q.screen.gt.sm ? 'q-px-md' : 'q-px-xl'"
      >
        <q-img
          src="../assets/images/kongsak-img-for-portfolio.png"
          style="border-radius: 10px"
        ></q-img>
      </div>
      <div
        class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-px-md"
        :class="$q.screen.gt.sm ? '' : 'q-mt-xl'"
      >
        <div class="text-center font-montserrat-bold font-size-20">
          CCTV Sales
        </div>
        <div
          class="font-montserrat-bold font-size-16 text-grey q-py-xl q-px-xl"
          :class="$q.screen.gt.sm ? '' : 'text-left'"
        >
          <span v-if="$q.screen.gt.sm"
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
          >It is an e-commerce website about CCTV cameras, Voice recorder and
          other equipment. The website is divided into 2 parts. Part 1 is for
          customers to purchase products. There is Products are displayed in
          categories, search for products, add products to cart, add a shipping
          address, pay and attach t he slip right away and part 2 for admins,
          Order history is kept and Customer product warranty history.
        </div>
        <div>
          <div class="justify-center row col-12 font-montserrat-bold q-pb-lg">
            <div>Vue</div>
            <div class="q-ml-lg">Quasar</div>
            <div class="q-ml-lg">NodeJS</div>
            <div class="q-ml-lg">MongoDB</div>
          </div>

          <div class="justify-center row col-12 font-montserrat-bold q-py-md">
            <q-btn-dropdown label="Code" no-caps>
              <q-list>
                <q-item
                  clickable
                  v-close-popup
                  href="https://github.com/MineThatDev/kongsak-frontend"
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

                <q-item
                  clickable
                  v-close-popup
                  href="https://github.com/MineThatDev/kongsak-backend"
                  target="_blank"
                >
                  <q-item-section>
                    <q-item-label class="font-montserrat-bold"
                      ><q-img
                        src="../assets/images/github.png"
                        width="16px"
                        height="16px"
                        style="margin-right: 11px"
                      />Back-End</q-item-label
                    >
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
            <q-btn
              size="12px"
              href="https://kongsak-shop.onrender.com/"
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
