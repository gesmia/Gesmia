import { ReactNode } from "react";
import './stepper.css';

interface Props {
  currentStep: number;
  setCurrentStep?: number;
  steps: Array<{
    component: ReactNode;
    label: string;
  }>;
}
export default function Stepper({
  currentStep, 
  steps,
}: Props) {
  return (
    <div className="stepper">
      <div className="stepper__header">
        {steps.map((e, i) => (
          <div key={i} className={['stepper__label', currentStep === i ? 'stepper__label--active' : ''].join(' ')}>
            <span className="stepper__label--indicator">
              {i + 1}
            </span>
            <span className="stepper__label--text">
              {e.label}
            </span>
          </div>
        ))}
      </div>
      <div className="stepper__body">
        {steps.map((e, i) => (
          <div key={i} className='stepper__step' style={{ translate: `calc(-${currentStep * 100}% - ${currentStep}rem)` }}>
            {e.component}
          </div>
        ))}
      </div>
    </div>
  )
}