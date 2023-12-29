import React, { useState } from 'react'
import {
  Button,
  Box,
  Stepper,
  Step,
  StepLabel,
  Container,
} from '@mui/material'
// import emailjs from 'emailjs-com'
import '@react-pdf-viewer/core/lib/styles/index.css'
import UserForm from './StepperContent/UserForm'
import ContractView from './StepperContent/ContractView'

const App = () => {
  const [stepNumber, setStepNumber] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const steps = ['Give us your information', 'Upload your documents', 'Revise the contract']

  const handleNext = () => {
    setIsLoading(true)
    setStepNumber(stepNumber + 1)
    setIsLoading(false)
  }
  const handlePrevious = () => {
    setIsLoading(true)
    setStepNumber(stepNumber - 1)
    setIsLoading(false)
  }

  const renderStepContent = () => {
    switch (stepNumber) {
      case 0:
        return <UserForm />
      case 1:
        return <>Upload your documents</>
      case 2:
        return <ContractView />
      default:
        return isLoading && <>Welcome to berrys bikes</>
    }
  }

  return (
		<Box sx={{ marginTop: '5%' }}>
			<img src="/logo192.png" alt="Logo" style={{ marginLeft: '44%' }} />
			<Stepper activeStep={stepNumber} alternativeLabel>
				{steps.map((label) => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
			<Container component="main" maxWidth="md" sx={{ marginTop: '5%' }}>
				{renderStepContent()}
			</Container>
			<Container
				component="main"
				sx={{ marginTop: '5%', marginBottom: '10%', backgroundColor: 'black' }}
			>
				<Button sx={{ float: 'left' }} onClick={handlePrevious} disabled={stepNumber === 0}>
          Previous
				</Button>
				<Button sx={{ float: 'right' }} onClick={handleNext}>
          Next
				</Button>
			</Container>
		</Box>
  )
}

export default App
