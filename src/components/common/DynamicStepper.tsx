import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { IStep } from "../../interfaces/IStep";
import CustomButton from "./CustomButton";
import { toast } from "react-toastify";

interface IProps {
  steps: IStep[];
  completedResponse?: string;
  onComplete: ()=>void;
}
export default function DynamicStepper(props: IProps): JSX.Element {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    if(activeStep==props.steps.length-1){
      props.onComplete();
    }
    if (props.steps[activeStep].nextDisabled) {
      toast.error(props.steps[activeStep].error);
    } else {
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
      <Box>
        <Stepper activeStep={activeStep}>
          {props.steps.map((step: IStep) => {
            return (
              <Step key={step.title}>
                <StepLabel>{step.title}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === props.steps.length ? (
          <div>
            <div className="flexCenter"
              style={{
                height: "75vh",
              }}
            >
              <h1> {props.completedResponse}</h1>
            </div>
            <div className="flexSpaceBetween">
              <div />
              <CustomButton onClick={handleReset} text={"Order Again"} />
            </div>
          </div>
        ) : (
          <div>
            <div style={{ height: "75vh" }}>
              {props.steps[activeStep].children}
            </div>
            <div className="flexSpaceBetween">
              <CustomButton
                disabled={activeStep === 0}
                onClick={handleBack}
                text="Previous"
              />
              <CustomButton
                onClick={handleNext}
                disabled={props.steps[activeStep].nextDisabled}
                text={
                  activeStep === props.steps.length - 1 ? "Finish" : "Continue"
                }
              />
            </div>
          </div>
        )}
      </Box>
    </div>
  );
}
