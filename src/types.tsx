export interface User {
  firstName: string
  middleName?: string
  lastName: string
  address: string
  country: string
  passport: string
  visaGrantNumber: string
  mobileNumber: string
  email: string
}

// import emailjs from 'emailjs-com';

// const sendEmail = (e: Event) => {
// e.preventDefault();
// emailjs.init("1jzGyUTxfjMZcjL51");
// emailjs.sendForm('service_tq4kyuq', 'template_fpllxnq', e.target)
// .then(function(response) {
//    console.log('SUCCESS!', response.status, response.text);
//    setStepNumber(1);
//    setIsLoading(false);
// }, function(error) {
//     setIsLoading(false);
//    console.log('FAILED...', error);
// });
// };
