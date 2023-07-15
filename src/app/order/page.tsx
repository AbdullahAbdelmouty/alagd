"use client"
import {Container ,Button,Row,Col} from 'react-bootstrap';
import {useMultistepsForm} from '../../useMultiForm'
import { FormEvent } from 'react';
import Notes from '../../../components/Notes';
import { Card } from "react-bootstrap"
import Fork from '../../../components/Fork';
import Image from 'next/image';
import Residential from '../../../public/img/residential_contract.png';
import Commercial from '../../../public/img/commercial_contract.png'
import ResidentialForm from '../../../components/ResidentialForm';
import Commerical_Form from '../../../components/Commerical_Form';


function Order() {
  const {next,back,step,steps,currentStepIndex,isFirstStep,isLastStep,goTo,customeBack} = useMultistepsForm([<Notes key="0"/>,<Fork  key="1"/>,<ResidentialForm key='2'/>,<Commerical_Form key={3}/>]);
  return (
<>
    <Container fluid className='d-flex justify-content-center align-items-center orderPage' >
      {/* card container that container all the steps of form */}
      <Card style={{ width: '26rem' }} className=' border border-0 rounded-4 p-3'>
      <Card.Body>
        {/*varible contain the current component of the form*/}
        {step}
        {/*two buttons that represent the choice of commercial or Residential*/}
        {currentStepIndex ===1 && <Row>
            <Col>
            <button className='btnImage' type='button' onClick={()=>{goTo(2)}}>
            <Image className='rounded-3'
              src={Residential}
              alt="Picture of the author"
              width={130}
              height={130}
            />
            <p className='mb-1'>سكني</p>
            <span>شقة/عمارة</span>
            </button>
            </Col>
            <Col>
            <button className='btnImage' type='button' onClick={()=>{goTo(3)}}>
            <Image className='rounded-3'
              src={Commercial}
              alt="Picture of the author"
              width={130}
              height={130}
            />
            <p className='mb-1'>تجاري</p>
            <span>مكتب/محل</span>
            </button>
            </Col>
        </Row>}
      </Card.Body>
      <Card.Body className='d-flex justify-content-center align-items-center p-0'>
      {isFirstStep&&<Button variant="primary" className='btnGreen' onClick={next}>التالي</Button>}
        {!isFirstStep&&<Button variant="primary" className='btnGreen ps-3 pe-3' onClick={customeBack}>{currentStepIndex>1? "الرجوع لتحديد العقار":"رجوع"}</Button>}
      </Card.Body>
    </Card>
    </Container>
  </>
  )
}

export default Order
