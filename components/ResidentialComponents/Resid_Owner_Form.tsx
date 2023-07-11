import { useMultistepsForm } from "@/useMultiForm";
import { FormEvent, useState } from "react";
import { Button, Form ,InputGroup } from "react-bootstrap";
import {DateObject}  from "react-multi-date-picker";
import arabic from "react-date-object/calendars/arabic"
import arabic_en from "react-date-object/locales/arabic_en"
import Step_One from "./Form_Steps/Step_One";
import Step_Two from "./Form_Steps/Step_Two";
import Step_Three from "./Form_Steps/Step_Three";
import Step_Four from "./Form_Steps/Step_Four";
import Step_Five from "./Form_Steps/Step_Five";
import Step_Six from "./Form_Steps/Step_Six";
function Resid_Owner_Form() {
  type FormData = {
    owner_id: number
    owner_phone: number
    owner_br: string
    owenr_name: string
    tanent_id: number
    tanent_name: string
    tanent_phone: number
    tanent_br: string
    contract_price: number
    contract_date: string
    payment_way: string
    elsaq_type: string
    elsaq_num: number
    elsaq_date: string
    floor_num: number
    apartment_num: number
    building_floors: number
    is_elevator: string
    city: string
    boycott: string,
    owner_check:boolean,
    tanent_check: boolean
  }
  
  const INITIAL_DATA: FormData = {
    owner_id: NaN,
    owner_phone: NaN,
    owner_br: "",
    owenr_name: "",
    tanent_id: NaN,
    tanent_name: "",
    tanent_phone: NaN,
    tanent_br: "",
    contract_price: NaN,
    contract_date: "",
    payment_way:"",
    elsaq_type: "",
    elsaq_num: NaN,
    elsaq_date: "",
    floor_num: NaN,
    apartment_num: NaN,
    building_floors: NaN,
    is_elevator: "",
    city: "",
    boycott: "",
    owner_check: false,
    tanent_check: false
  }
  const [formData, setformData] = useState(INITIAL_DATA)
  function updateFields(fields: Partial<FormData>) {
    setformData(prev => {
      return { ...prev, ...fields }
    })
  }

  console.log(formData);
  
    const {next,back,step,steps,currentStepIndex,isFirstStep,isLastStep,isSecondStep,goTo} = useMultistepsForm([
    <Step_One key="0" {...formData} updateFields={updateFields} />,
    <Step_Two key='1' {...formData} updateFields={updateFields}/>,
    <Step_Three key="2" {...formData} updateFields={updateFields}/>,
    <Step_Four key="3" {...formData} updateFields={updateFields}/>,
    <Step_Five key="4" {...formData} updateFields={updateFields}/>,
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
    //////////////////////////////////////////
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
        if (!isLastStep) return next()
        alert("dddddddd");
      }
      
  return (
    <Form onSubmit={onSubmit}>
        <p>`{steps.length}`/`{currentStepIndex+1}`</p>
        {step}
        {<Button variant="primary" className='btnGreen' type="submit" >{isLastStep ? "ارسال" : "التالي"}</Button>}
        {!isFirstStep&&<Button variant="primary" className='btnGreen' onClick={back}>رجوع</Button>}
    </Form>
  )
}

export default Resid_Owner_Form
