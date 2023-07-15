import {Form} from 'react-bootstrap';
import DatePicker,{DateObject}  from "react-multi-date-picker"
import arabic from "react-date-object/calendars/arabic"
import arabic_en from "react-date-object/locales/arabic_en"
import { useState } from 'react';

type tanentData = {
  tanent_id: number
  tanent_phone: number
  tanent_br: string,
  owenr_name:string,
  tanent_check: boolean
}
type UserFormProps = tanentData & {
  updateFields: (fields: Partial<tanentData>) => void
}
function Step_One({
  tanent_id,
  tanent_phone,
  tanent_br,
  owenr_name,
  tanent_check,
  updateFields,
}: UserFormProps) {
  const [value, setValue] = useState('');
  const addIdValue = (id:number)=>{
    if(tanent_check){
      return id;
    }
  }
  const addBrValue = (br:string)=>{
    if(tanent_check){
      return br;
    }
  }

  const addPhoneValue = (phone:number)=>{
    if(tanent_check){
      return phone;
    }
  }
  return (

    <>
    <h3 className='text-center fw-bold mb-4'>معلومات المستأجر</h3>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" className='text-center'  placeholder="هوية المستأجر" required value={addIdValue(tanent_id)}  onChange={e => {
          updateFields({ tanent_id: parseInt(e.target.value,10) })
          }}/>
      </Form.Group>
         {tanent_check&&<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" className='text-center form-control' required value={owenr_name} disabled/>
      </Form.Group>}
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Control type="tel" className='text-center' required placeholder="رقم جوال المستأجر في أبشر05xxxxx"  value={addPhoneValue(tanent_phone)} onChange={e=> updateFields({tanent_phone: parseInt(e.target.value,10)})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <DatePicker
        onChange={()=>{
          setTimeout(()=>{
          const input = document.querySelector('.rmdp-input') as HTMLInputElement | null;
          const value = input?.value;
          console.log(value,typeof value);
          const valueConvert = value?.replaceAll('/','-');
          if(typeof value === "string"){
            updateFields({tanent_br: `${valueConvert}`});
          }
          
          },0)
        }}
        value={addBrValue(tanent_br)}
        placeholder="تاريخ ميلاد المستأجر"
        required
        calendar={arabic}
        locale={arabic_en}
        calendarPosition="bottom-right"
        
      />
      </Form.Group>
    </>
  )
}

export default Step_One
