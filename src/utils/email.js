import emailjs from "emailjs-com";
export default function () {
  const sendEmail = async (serviceId, templateId, templateParams, userId) => {
    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      userId
    );
    return response;
  };

  return { sendEmail };
}
