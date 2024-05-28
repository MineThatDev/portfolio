import { scroll } from "quasar";
import { useQuasar, QSpinnerFacebook } from "quasar";
const { getScrollTarget, setVerticalScrollPosition } = scroll;
export default function commonFunction() {
  const $q = useQuasar();
  const scrollToElementById = (id) => {
    console.log("id", id);
    let ele = document.getElementById(id);
    let target = getScrollTarget(ele);
    let offset = ele.offsetTop;
    let duration = 500;
    if ($q.screen.gt.sm && id === "portfolio") offset += 150;
    if ($q.screen.gt.sm && id === "about") offset += 130;
    if ($q.screen.gt.sm && id === "contact") offset += 150;
    setVerticalScrollPosition(target, offset, duration);
  };
  const showNotification = (type, message, position) => {
    $q.notify({
      message: message,
      position: position ? position : "top",
      type: type,
    });
  };
  const showSpinnerFacebookLoading = () => {
    $q.loading.show({
      spinner: QSpinnerFacebook,
      spinnerColor: "dark",
      spinnerSize: 70,
    });
  };
  const hideSpinnerFacebookLoading = () => {
    $q.loading.hide();
  };
  return {
    scrollToElementById,
    showSpinnerFacebookLoading,
    hideSpinnerFacebookLoading,
    showNotification,
    $q,
  };
}
