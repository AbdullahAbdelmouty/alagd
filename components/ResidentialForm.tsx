import { useMultistepsForm } from "@/useMultiForm";
import { FormEvent } from 'react';
import {Container ,Button,Row,Col,Card} from 'react-bootstrap';
import Image from 'next/image';


function ResidentialForm() {
    const {next,back,step,steps,currentStepIndex,isFirstStep,isLastStep,goTo} = useMultistepsForm([<div key="0">0</div>,<div  key="1">1</div>,<div key="3">3</div>,<div key="4">4</div>]);
    function onSubmit(e: FormEvent){
      e.preventDefault();
      if(!isLastStep) return next();
      alert("send")
    }
  return (
<>
<form onSubmit={onSubmit}>
            {step}
            <div>
            {!isFirstStep && <button type="button" onClick={back}>
                رجوع
            </button>}
            <button type='submit'>{isLastStep ? "ارسال":"التالي"}</button>
            </div>
            </form>
  </>
  )
}

export default ResidentialForm
