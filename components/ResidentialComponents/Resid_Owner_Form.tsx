import { useMultistepsForm } from "@/useMultiForm";
import { FormEvent } from "react";
import { Button, Form ,InputGroup } from "react-bootstrap";
import Step_One from "./Form_Steps/Step_One";
import Step_Two from "./Form_Steps/Step_Two";
import Step_Three from "./Form_Steps/Step_Three";
import Step_Four from "./Form_Steps/Step_Four";
import Step_Five from "./Form_Steps/Step_Five";
import Step_Six from "./Form_Steps/Step_Six";
function Resid_Owner_Form() {
    const {next,back,step,steps,currentStepIndex,isFirstStep,isLastStep,goTo} = useMultistepsForm([<Step_One key="0"/>,<Step_Two key='1'/>,<Step_Three key="2"/>,<Step_Four key="3"/>,<Step_Five key="4"/>,<Step_Six key="4"/>]);
    const postData = async () => {
      const url = 'https://stage.al3gd.com/order/check-nid'; // Replace with your API endpoint URL
    
      const data = {
        nid: '1126474327', // Replace with the actual national ID
        bdate: '1420-07-25', // Replace with the actual birth date
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
        console.log(result); // Do something with the response
      } catch (error) {
        console.error('Error:', error);
      }
    };
    
   
    
    function onSubmit(e: FormEvent) {
        e.preventDefault()
        if(isFirstStep){
          postData();
        }
        if (!isLastStep) return next()
        alert("dddddddd");
        
      }
      
  return (
    <Form onSubmit={onSubmit}>
        <p>`${steps.length}`/`${currentStepIndex+1}`</p>
        {step}
        {<Button variant="primary" className='btnGreen' type="submit" >{isLastStep ? "ارسال" : "التالي"}</Button>}
        {!isFirstStep&&<Button variant="primary" className='btnGreen' onClick={back}>رجوع</Button>}
    </Form>
  )
}

export default Resid_Owner_Form
