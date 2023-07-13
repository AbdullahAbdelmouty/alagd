import { useMultistepsForm } from "@/useMultiForm";
import { FormEvent } from 'react';
import {Container ,Button,Row,Col,Card} from 'react-bootstrap';
import Image from 'next/image';
import Fork from "./Fork";
import Owner from '../public/img/owner.png';
import Tanent from '../public/img/tanent.png'
import Resid_Owner_Form from "./CommercialComponents/Resid_Owner_Form";
import Resid_Tanent_Form from "./CommercialComponents/Resid_Tanent_Form";

function Commerical_Form() {
    const {next,back,step,steps,currentStepIndex,isFirstStep,isLastStep,goTo,customeBackTwo} = useMultistepsForm([ <div key='0'>
    <h2 className="text-center p-3 fs-4 fw-bold">هل أنت المالك أو المستأجر</h2></div>,<Resid_Owner_Form key='1'/>,<Resid_Tanent_Form key="3"/>]);
return (
<>
    {step}
    {isFirstStep &&  <>
<Row>
    <Col>
    <button className='btnImage' type='button' onClick={()=>{goTo(1)}}>
    <Image className='rounded-3'
        src={Owner}
        alt="Picture of the author"
        width={130}
        height={130}
    />
    <p className='mb-1 p-2 fs-5 fw-normal'>أنا المالك</p>
    </button>
    </Col>
    <Col>
    <button className='btnImage' type='button' onClick={()=>{goTo(2)}} >
    <Image className='rounded-3'
        src={Tanent}
        alt="Picture of the author"
        width={130}
        height={130}
    />
    <p className='mb-1 p-2 fs-5 fw-normal'>أنا المستأجر</p>
    </button>
    </Col>
</Row>
</>}
    <div className=" d-flex justify-content-center">
    {!isFirstStep && <Button type="button" variant="primary" className='btnGreen' onClick={customeBackTwo}>
        الرجوع لتحديد الملكية
    </Button>}
    </div>
</>
)
}

export default Commerical_Form
