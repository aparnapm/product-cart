import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { IStep } from '../../interfaces/IStep';
import CustomButton from './CustomButton';
import { toast } from 'react-toastify';

interface IProps{
  steps: IStep[];
  completedResponse?: string;

}
export default function DynamicStepper(props:IProps) : JSX.Element{
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    if(props.steps[activeStep].nextDisabled){
        toast.error(props.steps[activeStep].error);
    }else{
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };


  return (
    <div>
    <Box >
      <Stepper activeStep={activeStep}>
        {props.steps.map((step:IStep) => {
          return (
            <Step key={step.title}>
              <StepLabel >{step.title}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === props.steps.length ? (
        <div>
        <div style={{height:"70vh", display:"flex", justifyContent:"center"}}>
         <h1> {props.completedResponse}</h1>
        </div>
          <div style={{width: "100%",display:"flex",justifyContent:"space-between"}}>
           <div/>
            <CustomButton
              onClick={handleReset}
              text={"Order Again"}
            />
          </div>
          </div>
      ) : (
        <div>
        <div style={{height:"70vh"}}>
        {props.steps[activeStep].children}
        </div>
          <div style={{width: "100%",display:"flex",justifyContent:"space-between"}}>
            
            <CustomButton
              disabled={activeStep === 0}
              onClick={handleBack}
              text='Previous'
            />
            <CustomButton
              onClick={handleNext}
              disabled={props.steps[activeStep].nextDisabled}
              text={activeStep === props.steps.length - 1 ? 'Finish' : 'Continue'}
            />
          </div>
          </div>
      )}
    </Box>
    </div>
  );
}