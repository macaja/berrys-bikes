type UserFieldProp = {
    field: string;
    error: boolean;
};
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
};

export type Files = { passportFile: File | null; visaFile: File | null };

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

import { PDFDocument } from 'pdf-lib';

const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
};

export const fillPdfForm = async (user: User) => {
    const response = await fetch('/bike-contract-to-be-filled.pdf');

    const formPdfBytes = await response.arrayBuffer();

    const pdfDoc = await PDFDocument.load(formPdfBytes);

    const form = pdfDoc.getForm();

    const fullNameField = form.getTextField('Full name');
    const addressField = form.getTextField('Address');
    const countryField = form.getTextField('Passport country');
    const passportField = form.getTextField('Passport');
    const visaGrantNumberField = form.getTextField('Visa grant number');
    const mobileNumberField = form.getTextField('Mobile number');
    const dateField = form.getTextField('Date');

    fullNameField.setText(
        `${user.firstName.field} ${user.middleName?.field} ${user.lastName.field}`,
    );
    addressField.setText(`${user.address.field}`);
    countryField.setText(`${user.country.field}`);
    passportField.setText(`${user.passport.field}`);
    visaGrantNumberField.setText(`${user.visaGrantNumber.field}`);
    mobileNumberField.setText(`${user.mobileNumber.field}`);
    dateField.setText(formatDate(new Date()));

    const pdfBytes = await pdfDoc.save();

    const blob = new Blob([pdfBytes], { type: 'application/pdf' });

    const pdfFile = new File([blob], 'filename.pdf', { type: 'application/pdf' });

    const url = URL.createObjectURL(pdfFile);

    window.open(url, '_blank');

    return pdfBytes;
};
