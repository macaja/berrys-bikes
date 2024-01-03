import React from 'react';
import { Box, Button, Container, Grid, TextField } from '@mui/material';
import { useStepperContext } from '../StepperContext';

const UserForm = () => {
    const stepperContext = useStepperContext();
    const { user, handleNextStep, setUser } = stepperContext;

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        setUser({ ...user, [name]: { field: value } });
    };

    const handleSubmit = () => {
        const { firstName } = user;
        if (!firstName.field || !firstName.field.length) {
            setUser({ ...user, firstName: { ...user.firstName, error: true } });
        }
        handleNextStep();
    };

    return (
        <Box component="form" autoComplete="off" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        name="lastName"
                        label="Family name"
                        color="primary"
                        onChange={handleInputChange}
                        autoFocus
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField fullWidth name="middleName" label="Middle name" color="primary" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        name="firstName"
                        label="First name"
                        color="primary"
                        helperText={user.firstName.error && 'Field is required*'}
                        error={user.firstName.error && user.firstName.field.length ? true : false}
                        onChange={handleInputChange}
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField fullWidth name="address" label="Address" color="primary" required />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        name="country"
                        label="Passport country"
                        color="primary"
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        name="passport"
                        label="Passport number"
                        color="primary"
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        name="visaGrantNumber"
                        label="Visa grant number"
                        color="primary"
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        name="mobileNumber"
                        label="Mobile number"
                        color="primary"
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        name="email"
                        label="Email address"
                        color="primary"
                        inputProps={{ pattern: '' }}
                        required
                    />
                </Grid>
                <Container component="main" sx={{ marginTop: '5%', marginBottom: '10%' }}>
                    <Button sx={{ float: 'right' }} type="submit">
                        Next
                    </Button>
                </Container>
            </Grid>
        </Box>
    );
};

export default UserForm;
