import { useMultistepsForm } from "@/useMultiForm";
import { FormEvent, useState } from "react";
import { Button, Form ,InputGroup, Row ,Col} from "react-bootstrap";
import {DateObject}  from "react-multi-date-picker";
import arabic from "react-date-object/calendars/arabic"
import arabic_en from "react-date-object/locales/arabic_en"
import Step_One from "./Form_Steps/Step_One";
import Step_Two from "./Form_Steps/Step_Two";
import Step_Three from "./Form_Steps/Step_Three";
import Step_Four from "./Form_Steps/Step_Four";
import Step_Five from "./Form_Steps/Step_Five";
import Step_Six from "../ResidentialComponents/Form_Steps/Step_Six";
import Swal from 'sweetalert2'
import ProgressBar from 'react-bootstrap/ProgressBar';

function Resid_Owner_Form() {
  type FormData = {
    owner_id: number
    owner_phone: number
    owner_br: string
    owenr_name: string
    owner_city: string
    owner_boycott:string
    tanent_id: number
    tanent_name: string
    tanent_phone: number
    tanent_br: string
    tanent_city: string
    tanent_boycott:string
    contract_price: number
    place_area: number
    contract_date: string
    payment_way: string
    elsaq_type: string
    elsaq_num: number
    elsaq_date: string
    floor_num: number
    apartment_num: number
    building_floors: number
    is_elevator: string
    room_num: number
    city: string
    boycott: string,
    street: string,
    bulding_num: number,
    postal_code: number,
    addition_num: number,
    owner_check:boolean,
    tanent_check: boolean,
    owner: boolean
    tanent: boolean
  }
  
  const INITIAL_DATA: FormData = {
    owner_id: NaN,
    owner_phone: NaN,
    owner_br: "",
    owenr_name: "",
    owner_city: "",
    owner_boycott: "",
    tanent_id: NaN,
    tanent_name: "",
    tanent_phone: NaN,
    tanent_br: "",
    tanent_city: "",
    tanent_boycott: "",
    contract_price: NaN,
    place_area: NaN,
    contract_date: "",
    payment_way:"",
    elsaq_type: "",
    elsaq_num: NaN,
    elsaq_date: "",
    floor_num: NaN,
    apartment_num: NaN,
    building_floors: NaN,
    is_elevator: "",
    room_num : NaN,
    city: "",
    boycott: "",
    street: "",
    bulding_num: NaN,
    postal_code: NaN,
    addition_num: NaN,
    owner_check: false,
    tanent_check: false,
    owner: true,
    tanent: false
  }
  const [formData, setformData] = useState(INITIAL_DATA)
  function updateFields(fields: Partial<FormData>) {
    setformData(prev => {
      return { ...prev, ...fields }
    })
  }

  console.log(formData);
  
    const {next,back,step,steps,currentStepIndex,isFirstStep,isLastStep,isSecondStep,isBeforLastWithOneStep,goTo} = useMultistepsForm([
    <Step_One key="0" {...formData} updateFields={updateFields} />,
    <Step_Two key='1' {...formData} updateFields={updateFields}/>,
    <Step_Three key="2" {...formData} updateFields={updateFields}/>,
    <Step_Four key="3" {...formData} updateFields={updateFields}/>,
    <Step_Five key="4" {...formData} updateFields={updateFields}/>,
    <Step_Six key="5" {...formData} updateFields={updateFields}/>,
  ]);
    const postData = async () => {
      const url = 'https://stage.al3gd.com/order/check-nid'; // Replace with your API endpoint URL
    
      const data = {
        nid: formData.owner_id, // Replace with the actual national ID
        bdate: formData.owner_br, // Replace with the actual birth date
        _token: '(aTzF6tMJaWNg57ELZrm14EXnHsHKZyFWnh8pf9uX', // Replace with the actual token
      };
    
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      };
    
      try {
        const response = await fetch(url, requestOptions);
        const result = await response.json();
          if(isFirstStep){
            if(result.status ===  "success"&&result.data.date_of_birth_hijri === formData.owner_br){
              console.log(result);
              
              updateFields({owner_check: true});
              updateFields({owenr_name: result.data.full_name})}
          }
          if(isSecondStep){
            if(result.status ===  "success"&&result.data.date_of_birth_hijri === formData.tanent_br){
              console.log(result);
              
              updateFields({tanent_check: true});
              updateFields({tanent_name: result.data.full_name})
          }
          
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    ////////////////////////////////////////
    const submitDate = async () => {
      const url = 'https://stage.al3gd.com/ar/order/save'; // Replace with your API endpoint URL
    
      const data = {
        nid: formData.owner_id, // Replace with the actual national ID
        bdate: formData.owner_br, // Replace with the actual birth date
        _token: '(aTzF6tMJaWNg57ELZrm14EXnHsHKZyFWnh8pf9uX', // Replace with the actual token
      };
    
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      };

      try {
        const response = await fetch(url, requestOptions);
        const result = await response.json();
      } catch (error) {
        console.error('Error:', error);
      }
    }
    //////////////////////////////////////////    function onSubmit(e: FormEvent) {
 

    function onSubmit(e: FormEvent) {
      e.preventDefault()
      if(isFirstStep){
        postData();
        console.log(formData);
        if(!formData.owner_check){
          return goTo(currentStepIndex)
        }else{
          return next();
        }
      }
      if(isSecondStep){
        postData();
        console.log(formData);
        if(!formData.tanent_check){
          return goTo(currentStepIndex)
        }else{
          return next();
        }
      }
      if (!isBeforLastWithOneStep) return next()
      Swal.fire({
        title: 'بإرسالك للطلب ، انت متأكد من البيانات المرسلة وتفوض أميرال العقارية بإصدار عقد إيجار إلكتروني بناء على المعلومات التي قدمتها',
        icon: 'question',
        iconHtml: '؟',
        confirmButtonText: 'نعم',
        cancelButtonText: 'لا',
        showCancelButton: true,
        showCloseButton: true
      }).then((result) => {
        if (result.isConfirmed) {
          goTo(5)
          // submitDate();
        }
      })
    }
    
    const goToFourthStep = () => {
      if(formData.contract_date&&formData.contract_price&&formData.payment_way){
        goTo(3)
      }
        }
        const goToFifithStep = () => {
          if(formData.elsaq_date&&formData.elsaq_num&&formData.elsaq_type&&formData.floor_num&&formData.apartment_num&&formData.building_floors&&formData.room_num){
            goTo(4)
          }
            }
  return (
    <>
    {!isLastStep&&<div className="setpsContainer">
    <ProgressBar now={25*(currentStepIndex)} />
    <Row className="steps">
      <Col className="d-flex justify-content-center">
      <Button variant="primary" className='btnGreenSteps rounded-circle'  onClick={()=>{goTo(0)}}>{1}</Button>
      </Col>
      <Col>
      <Button variant="primary" className={`${currentStepIndex>=1? "btnGreenSteps":"btnGray"} rounded-circle`} onClick={()=>{formData.owner_check&&goTo(1)}}>{2}</Button>
      </Col>
      <Col className="d-flex justify-content-center">
      <Button variant="primary" className={`${currentStepIndex>=2? "btnGreenSteps":"btnGray"} rounded-circle`} onClick={()=>{(formData.owner_check&&formData.tanent_check)&&goTo(2)}}>{3}</Button>
      </Col>
      <Col className="d-flex justify-content-center">
      <Button variant="primary" className={`${currentStepIndex>=3? "btnGreenSteps":"btnGray"} rounded-circle`}  onClick={()=>{goToFourthStep()}}>{4}</Button>
      </Col>
      <Col className="d-flex justify-content-center">
      <Button variant="primary" className={`${currentStepIndex>=4? "btnGreenSteps":"btnGray"} rounded-circle`}   onClick={()=>{goToFifithStep()}}>{5}</Button>
      </Col>
      </Row>
    </div>}
    <Form onSubmit={onSubmit} className="p-2">
        {step}
        {!isLastStep&&<Button variant="primary" className='btnGreen'  type="submit" >{isLastStep ? "ارسال" : "التالي"}</Button>}
        {(currentStepIndex<5&&currentStepIndex>0)&&<Button variant="primary" className='btnGreen' onClick={back}>رجوع</Button>}
    </Form>
    </>
  )
}

export default Resid_Owner_Form
