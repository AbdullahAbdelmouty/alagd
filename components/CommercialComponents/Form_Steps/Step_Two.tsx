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
  tanent_city: string
  tanent_boycott:string,
  tanent_check: boolean
}
type UserFormProps = tanentData & {
  updateFields: (fields: Partial<tanentData>) => void
}
function Step_Two(
  {
    tanent_id,
    tanent_phone,
    tanent_br,
    owenr_name,
    tanent_city,
    tanent_boycott,
    tanent_check,
    updateFields,
  }: UserFormProps
) {
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
    <h3 className='text-center fw-bold'>معلومات المستأجر</h3>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="number" className='text-center' placeholder="هوية المستأجر" required maxLength={10} minLength={10} value={addIdValue(tanent_id)}  onChange={e => {
          updateFields({ tanent_id: parseInt(e.target.value,10) })
          }}/>
          {!tanent_check&&<span className='owner_feedback text-danger'></span>}   
          <Form.Control.Feedback type="invalid">
          يجب أن يكون رقم الهوية مكون من 10 خانات
          </Form.Control.Feedback>
      </Form.Group>
         {tanent_check&&<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" className='text-center form-control' value={owenr_name} disabled/>
      </Form.Group>}
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Control type="tel" className='text-center' placeholder="رقم جوال المستأجر في أبشر05xxxxx" required maxLength={10} minLength={10} value={addPhoneValue(tanent_phone)} onChange={e=> updateFields({tanent_phone: parseInt(e.target.value,10)})}/>
        <Form.Control.Feedback type="invalid">
        يجب أن يكون رقم الجوال مكون من 10 خانات
        </Form.Control.Feedback>
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
      <h3 className='text-center fw-bold mb-4'>العنوان الوطني للمستأجر</h3>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" className='text-center' required value={tanent_city} onChange={e=>{
          console.log(e.target.value);
          
          updateFields({tanent_city: e.target.value})
        }} placeholder="المدينة" />
        <Form.Control.Feedback type="invalid">
        المدينة مطلوبة         
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" className='text-center' required
        value={tanent_boycott}
         onChange={e=>{
          updateFields({tanent_boycott: e.target.value})
        }} placeholder="الحي" />
        <Form.Control.Feedback type="invalid">
        الحي مطلوب
        </Form.Control.Feedback>
      </Form.Group>
    </>
  )
}

export default Step_Two
