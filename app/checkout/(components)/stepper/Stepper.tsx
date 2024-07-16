import { ReactNode, useEffect, useRef } from "react";
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
  const stepRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    stepRefs.current.forEach((step, index) => {
      if (step) {
        const focusableElements = step.querySelectorAll<HTMLElement>(
          'input, button, select, textarea, a[href], [tabindex]:not([tabindex="-1"])'
        );
        focusableElements.forEach((el) => {
          el.tabIndex = currentStep === index ? 0 : -1;
        });
      }
    });
  }, [currentStep, steps.length]);

  return (
    <div className="stepper">
      <div className="stepper__header">
        {steps.map((e, i) => (
          <div key={i} className={['stepper__label', currentStep === i ? 'stepper__label--active' : ''].join(' ')}
            /* style={{ translate: `0px -${currentStep * 40}px` }} */
          >
            <span className="stepper__label--text">
              {e.label}
            </span>

<div className="line">
</div>
          </div>
        ))}
      </div>
      <div className="stepper__body">
        {steps.map((e, i) => (
          <div key={i} className='stepper__step' 
            style={{ translate: `calc(-${currentStep * 100}% - ${currentStep}rem)` }}
            ref={((el: any) => (stepRefs.current[i] = el)) as any}
            aria-hidden={currentStep !== i}
          >
            {e.component}
          </div>
        ))}
      </div>
    </div>
  )
}