import React, { useRef, useState } from 'react';
import './App.css';
import { TextField, Button, Stack, CircularProgress, Box, Stepper, Step, StepLabel, Container } from '@mui/material';
import emailjs from 'emailjs-com';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// Import styles
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import bikeContract from './bike-contract.pdf'

const App = () => {
  const [stepNumber, setStepNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  const steps = [
    'Give us your information',
    'Revise the contract',
    'Upload and sign',
  ];

  const sendEmail = (e) => {
    setIsLoading(true);
    e.preventDefault();
    setStepNumber(1);
    setIsLoading(false);
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
  }

  const PDFViewerComponent = ({ pdfUrl }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
      <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js">
        <Viewer
          fileUrl={pdfUrl}
          plugins={[defaultLayoutPluginInstance]}
        />
      </Worker>
    );
  };

  const renderStepContent = () => {
    switch(stepNumber){
      case 0:
        return <form ref={form} onSubmit={sendEmail}>
          <Stack spacing={2}>
          <TextField id="outlined-basic" label="Family name" variant="outlined" />
          <TextField id="outlined-basic" label="Name" variant="outlined" />
          <TextField id="outlined-basic" label="Address" variant="outlined" />
          <TextField id="outlined-basic" label="Passport country" variant="outlined" />
          <TextField id="outlined-basic" label="Passport number" variant="outlined" />
          <TextField id="outlined-basic" label="Visa grant number" variant="outlined" />
          <TextField id="outlined-basic" label="Mobile number" variant="outlined" />
          <TextField id="outlined-basic" label="Email address" variant="outlined" />
          <Button type="submit" variant="contained">{isLoading ? <CircularProgress/> : 'Next'}</Button>
          </Stack>
        </form>
      case 1: 
        return <PDFViewerComponent pdfUrl={bikeContract} />
      case 2: 
        return <>Step 3</>
      default:
        return <>Welcome to berrys bikes</>
    }
  }

  return (
    <>
    <Box sx={{ marginTop: '5%'}}>
      <Stepper activeStep={stepNumber} alternativeLabel>
        {steps.map((label) => ( 
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Container component='main' maxWidth="md" sx={{ marginTop: '5%'}}>
          {renderStepContent()}
      </Container>
    </Box>
    </>
  )
}

export default App;
