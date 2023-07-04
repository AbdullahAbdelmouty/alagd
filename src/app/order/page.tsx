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
function Order() {
  const {next,back,step,steps,currentStepIndex,isFirstStep,isLastStep,goTo} = useMultistepsForm([<Notes key="0"/>,<Fork  key="1"/>,<ResidentialForm key='2'/>,<div key="4">4</div>]);
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
            <Image
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
            <Image
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
      <Card.Body className='d-flex justify-content-center align-items-center'>
      {isFirstStep&&<Button variant="primary" className='btnGreen' onClick={next}>التالي</Button>}
        {!isFirstStep&&<Button variant="primary" className='btnGreen' onClick={back}>رجوع</Button>}
      </Card.Body>
    </Card>
    </Container>
  </>
  )
}

export default Order
