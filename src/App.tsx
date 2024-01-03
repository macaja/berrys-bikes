import React from 'react';
import { Box, Stepper, Step, StepLabel, Container } from '@mui/material';
// import emailjs from 'emailjs-com'
import '@react-pdf-viewer/core/lib/styles/index.css';
import UserForm from './StepperContent/UserForm';
import ContractView from './StepperContent/ContractView';
import { useStepperContext } from './StepperContext';
import PdfUploader from './StepperContent/PdfUploader';

const App = () => {
    const stepperContext = useStepperContext();
    const { stepNumber, isLoading } = stepperContext;
    const steps = ['Give us your information', 'Upload your documents', 'Revise the contract'];

    const renderStepContent = () => {
        switch (stepNumber) {
            case 0:
                return <UserForm />;
            case 1:
                return <PdfUploader />;
            case 2:
                return <ContractView />;
            default:
                return isLoading && <>Welcome to berrys bikes</>;
        }
    };

    return (
        <Box
            sx={{
                marginTop: '5%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <img
                src="/logo192.png"
                alt="Logo"
                style={{ width: '200px', height: '150px', display: 'flex' }}
            />
            <Stepper activeStep={stepNumber} alternativeLabel sx={{ width: '100%' }}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Container component="main" maxWidth="md" sx={{ marginTop: '2%' }}>
                {renderStepContent()}
            </Container>
        </Box>
    );
};

export default App;
