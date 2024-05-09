import emailjs from "emailjs-com";
export default function () {
  const sendEmail = async (serviceId, templateId, templateParams, userId) => {
    await emailjs.send(serviceId, templateId, templateParams, userId);
  };

  return { sendEmail };
}
