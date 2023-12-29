import React from 'react'
import { Checkbox, Container, FormControlLabel } from '@mui/material'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import { Worker, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
// Import styles
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PDFViewerComponent = ({ pdfUrl }: { pdfUrl: string }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin()

  return (
		<Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js">
			<Viewer
				fileUrl={pdfUrl}
				plugins={[defaultLayoutPluginInstance]}
				defaultScale={SpecialZoomLevel.PageFit}
			/>
		</Worker>
  )
}

const ContractView = () => {
  return (
		<Container>
			<PDFViewerComponent pdfUrl="/bike-contract.pdf" />
			<FormControlLabel
				sx={{ marginTop: '5%' }}
				required
				control={<Checkbox />}
				label="I understand and accept the terms of the contract"
			/>
		</Container>
  )
}

export default ContractView
