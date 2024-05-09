<template>
  <div class="row" style="width: 1000px">
    <div
      class="col-12 q-px-md"
      :class="$q.screen.gt.sm ? 'text-left' : 'text-center'"
    >
      <div class="text-black font-montserrat-bold font-size-28">Contact</div>
    </div>
    <div
      class="full-width q-pa-md"
      :class="$q.screen.gt.sm ? 'q-mt-lg' : 'q-mt-md'"
    >
      <form @submit.prevent.stop="onSubmit">
        <div class="row col-12">
          <div class="col-12">
            <span class="font-montserrat-regular font-size-16">Email</span>
          </div>
          <div class="col-12">
            <q-input
              outlined
              v-model="email"
              ref="emailRef"
              placeholder="Write your email"
              :rules="[
                (val) =>
                  (val?.length &&
                    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                      val
                    )) ||
                  'Invalid email format (e.g. test@gmail.com).',
              ]"
              lazy-rules="ondemand"
              hide-bottom-space
              color="dark"
              @focus="emailRef.resetValidation()"
            >
            </q-input>
          </div>
        </div>
        <div class="row col-12 q-mt-lg">
          <div class="col-12">
            <span class="font-montserrat-regular font-size-16">Name</span>
          </div>
          <div class="col-12">
            <q-input
              outlined
              v-model="fullName"
              ref="fullNameRef"
              placeholder="Write your full name"
              lazy-rules="ondemand"
              :rules="[(val) => val?.length || 'Please enter a fullname.']"
              hide-bottom-space
              color="dark"
              @focus="fullNameRef.resetValidation()"
            />
          </div>
        </div>

        <div class="row col-12 q-mt-lg">
          <div class="col-12">
            <span class="font-montserrat-regular font-size-16"
              >Company name</span
            >
          </div>
          <div class="col-12">
            <q-input
              outlined
              v-model="companyName"
              placeholder="Company name"
              hide-bottom-space
              color="dark"
            />
          </div>
        </div>

        <div class="row col-12 q-mt-lg">
          <div class="col-12">
            <span class="font-montserrat-regular font-size-16">Message</span>
          </div>
          <div class="col-12">
            <q-input
              outlined
              v-model="message"
              type="textarea"
              ref="messageRef"
              placeholder="Write your message"
              :rules="[(val) => val?.length || 'Please enter a message.']"
              hide-bottom-space
              color="dark"
              lazy-rules="ondemand"
              @focus="messageRef.resetValidation()"
            />
          </div>
        </div>

        <div class="text-center q-mt-lg">
          <q-btn
            label="Submit"
            type="submit"
            color="dark"
            size="18px"
            no-caps
            class="font-montserrat-bold"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
//import { useQuasar } from "quasar";
import { ref } from "vue";
import commonFunctions from "@/utils/commonFunction";
import emailApi from "@/utils/email";
export default {
  setup() {
    const {
      showNotification,
      showSpinnerFacebookLoading,
      hideSpinnerFacebookLoading,
      $q,
    } = commonFunctions();
    const { sendEmail } = emailApi();
    //const $q = useQuasar();

    const email = ref(null);
    const fullName = ref(null);
    const companyName = ref(null);
    const message = ref(null);

    const emailRef = ref();
    const fullNameRef = ref();
    // const companyNameRef = ref();
    const messageRef = ref();

    const onSubmit = async () => {
      emailRef.value.validate();
      fullNameRef.value.validate();
      messageRef.value.validate();
      if (
        emailRef.value.hasError ||
        fullNameRef.value.hasError ||
        messageRef.value.hasError
      ) {
        return;
      }
      $q.dialog({
        title: "Notification",
        message: "Confirm to send email?",
        ok: "confirm",
        cancel: "cancel",
        dark: true,
      }).onOk(async () => {
        showSpinnerFacebookLoading();
        const response = await sendEmail(
          "service_apwgf1u",
          "template_ejdx6nf",
          {
            subject: "ติดต่อสมัครงานจากเวบ Portfolio",
            to_email: "ruchchanon.sirisan@gmail.com",
            from_email: email.value,
            from_full_name: fullName.value,
            company_name: companyName.value ? companyName.value : "ไม่ระบุ",
            message: message.value,
          },
          "Bnzo6dG5nRlgeMOTH"
        );
        if (response && response.status == 200) {
          hideSpinnerFacebookLoading();
          showNotification("positive", "Email sent successfully");
        } else {
          hideSpinnerFacebookLoading();
          showNotification("negative", "Email failed to send");
        }

        email.value = null;
        fullName.value = null;
        companyName.value = null;
        message.value = null;
      });
    };

    return {
      email,
      fullName,
      companyName,
      message,

      emailRef,
      fullNameRef,
      messageRef,
      onSubmit,
    };
  },
};
</script>
