import React, { useState } from 'react';
import { Button, Checkbox, Container, FormControlLabel } from '@mui/material';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { Worker, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
// Import styles
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { useStepperContext } from '../StepperContext';

const PDFViewerComponent = ({ pdfUrl }: { pdfUrl: string }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js">
            <Viewer
                fileUrl={pdfUrl}
                plugins={[defaultLayoutPluginInstance]}
                defaultScale={SpecialZoomLevel.PageFit}
            />
        </Worker>
    );
};

const ContractView = () => {
    const { handlePreviousStep } = useStepperContext();
    const [acceptTerms, setAcceptTerms] = useState(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTerms(e.target.checked)
    }
    return (
        <Container>
            <PDFViewerComponent pdfUrl="/bike-contract.pdf" />
            <FormControlLabel
                sx={{ marginTop: '5%' }}
                required
                control={<Checkbox onChange={handleChange} />}
                label="I understand and accept the terms of the contract"
            />
            <Container component="main" sx={{ marginTop: '5%', marginBottom: '10%' }}>
                <Button sx={{ float: 'left' }} onClick={handlePreviousStep}>
                    Previous
                </Button>
                <Button sx={{ float: 'right' }} type="submit" disabled={!acceptTerms}>
                    Submit
                </Button>
            </Container>
        </Container>
    );
};

export default ContractView;
