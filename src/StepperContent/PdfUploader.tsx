import { Button, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useStepperContext } from '../StepperContext';

const PdfUploader = () => {
    const { files, handleNextStep, handlePreviousStep, setFiles } = useStepperContext();
    const [error, setError] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const allowedTypes = [
            'image/jpeg',
            'image/gif',
            'image/png',
            'image/x-eps',
            'application/pdf',
        ];

        const file = e.target.files && e.target.files.length ? e.target.files[0] : null;
        const fileName = e.target.name;

        if (file && allowedTypes.includes(file.type)) {
            setFiles({ ...files, [fileName]: file });
            setError(null);
        } else {
            setError('Please upload a valid PDF file.');
        }
    };

    return (
        <Container component="main">
            <div>
                <form onSubmit={handleNextStep}>
                    <div style={{ marginBottom: '16px' }}>
                        <input
                            type="file"
                            id="passportFile"
                            name="passportFile"
                            accept="image/jpeg,image/gif,image/png,application/pdf,image/x-eps"
                            onChange={handleFileChange}
                            style={{ display: 'none' }}
                        />
                        <label htmlFor="passportFile">
                            <Button variant="contained" color="primary" component="span">
                                Upload Passport
                            </Button>
                        </label>
                        {files.passportFile && files.passportFile.name}
                    </div>
                    <div style={{ marginBottom: '16px' }}>
                        <input
                            type="file"
                            id="visaFile"
                            name="visaFile"
                            accept="image/jpeg,image/gif,image/png,application/pdf,image/x-eps"
                            onChange={handleFileChange}
                            style={{ display: 'none' }}
                        />
                        <label htmlFor="visaFile">
                            <Button variant="contained" color="primary" component="span">
                                Upload Visa
                            </Button>
                        </label>
                        {files.visaFile && files.visaFile.name}
                    </div>
                </form>
                {error && <Typography color="error">{error}</Typography>}
            </div>
            <Container component="main" sx={{ marginTop: '5%', marginBottom: '10%' }}>
                <Button sx={{ float: 'left' }} onClick={handlePreviousStep}>
                    Previous
                </Button>
                <Button
                    sx={{ float: 'right' }}
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={!files.passportFile || !files.visaFile}
                    onClick={handleNextStep}
                >
                    Next
                </Button>
            </Container>
        </Container>
    );
};

export default PdfUploader;
