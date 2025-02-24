import { useMultistepsForm } from "@/useMultiForm";
import { FormEvent ,use,useEffect,useState} from 'react';
import {Container ,Button,Row,Col,Card} from 'react-bootstrap';
import Image from 'next/image';
import Fork from "./Fork";
import Owner from '../public/img/owner.png';
import Tanent from '../public/img/tanent.png'
import Resid_Owner_Form from "./ResidentialComponents/Resid_Owner_Form";
import Resid_Tanent_Form from "./ResidentialComponents/Resid_Tanent_Form";


function ResidentialForm({setBackBtn}: {setBackBtn:Function}) {
    // setBackBtn(true);
const [backToProperty,setBackToProperty] = useState(true);
// console.log(backToProperty);

    const {next,back,step,steps,currentStepIndex,isFirstStep,isLastStep,goTo,customeBackTwo} = useMultistepsForm([ <div key='0'>
        <h2 className="text-center p-3 fs-4 fw-bold mb-4">هل أنت المالك أو المستأجر</h2></div>,<Resid_Owner_Form setBackBtn2={setBackBtn} setBackToProperty={setBackToProperty}  key='1'/>,<Resid_Tanent_Form setBackBtn2={setBackBtn} setBackToProperty={setBackToProperty} key="3"/>]);
            useEffect(() => {setBackBtn(true);}, [isFirstStep]);
return (
    <>
        {step}
        {isFirstStep &&  <>
    <Row>
        <Col className="d-flex justify-content-center">
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
        <Col className="d-flex justify-content-center">
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
        {(!isFirstStep && backToProperty) && <Button type="button" variant="primary" className='btnPostion2' onClick={customeBackTwo}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
        </svg>   السابق        
        </Button>}
        </div>
    </>
    )
}

export default ResidentialForm
