type UserFieldProp = {
  field: string;
  error: boolean;
}
export type User = {
    firstName: UserFieldProp;
    middleName?: UserFieldProp;
    lastName: UserFieldProp;
    address: UserFieldProp;
    country: UserFieldProp;
    passport: UserFieldProp;
    visaGrantNumber: UserFieldProp;
    mobileNumber: UserFieldProp;
    email: UserFieldProp;
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
