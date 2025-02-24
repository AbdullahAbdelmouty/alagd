import {Form} from 'react-bootstrap';
import DatePicker,{DateObject}  from "react-multi-date-picker"
import arabic from "react-date-object/calendars/arabic"
import arabic_en from "react-date-object/locales/arabic_en"
import { useState } from 'react';
type OwnerData = {
  owner_id: number
  owner_phone: number
  owner_br: string,
  owenr_name:string,
  owner_city: string
  owner_boycott:string,
  owner_check: boolean
}
type UserFormProps = OwnerData & {
  updateFields: (fields: Partial<OwnerData>) => void
}
function Step_One(
  {
    owner_id,
    owner_phone,
    owner_br,
    owenr_name,
    owner_city,
    owner_boycott,
    owner_check,
    updateFields,
  }: UserFormProps
) {

  const [value, setValue] = useState('');
  const addIdValue = (id:number)=>{
    if(owner_check){
      return id;
    }
  }
  const addBrValue = (br:string)=>{
    if(owner_check){
      return br;
    }
  }

  const addPhoneValue = (phone:number)=>{
    if(owner_check){
      return phone;
    }
  }
  return (
    <>
    <h3 className='text-center fw-bold mb-4'>معلومات المالك</h3>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="number" className='text-center'  placeholder="هوية المالك"  required minLength={10} maxLength={10} value={addIdValue(owner_id)}  onChange={e => {
          updateFields({ owner_id: parseInt(e.target.value,10) })
          }}/>
          {!owner_check&&<span className='owner_feedback text-danger'></span>}   
          <Form.Control.Feedback type="invalid">
          يجب أن يكون رقم الهوية مكون من 10 خانات
          </Form.Control.Feedback>
      </Form.Group>
         {owner_check&&<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" className='text-center form-control' value={owenr_name} disabled/>
      </Form.Group>}
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Control type="tel" className='text-center' placeholder="رقم جوال المالك في أبشر05xxxxx" required maxLength={10} minLength={10} value={addPhoneValue(owner_phone)} onChange={e=> updateFields({owner_phone: parseInt(e.target.value,10)})}/>
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
            updateFields({owner_br: `${valueConvert}`});
          }
          
          },0)
        }}
        value={addBrValue(owner_br)}
        required
        placeholder="تاريخ ميلاد المالك"
        calendar={arabic}
        locale={arabic_en}
        calendarPosition="bottom-right"
        
      />
      </Form.Group>
      <h3 className='text-center fw-bold'>العنوان الوطني للمالك</h3>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" className='text-center' required value={owner_city} onChange={e=>{
          console.log(e.target.value);
          
          updateFields({owner_city: e.target.value})
        }} placeholder="المدينة" />
        <Form.Control.Feedback type="invalid">
        المدينة مطلوبة         
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" className='text-center' 
        required
        value={owner_boycott}
         onChange={e=>{
          updateFields({owner_boycott: e.target.value})
        }} placeholder="الحي" />
        <Form.Control.Feedback type="invalid">
        الحي مطلوب
        </Form.Control.Feedback>
      </Form.Group>
    </>
  )
}

export default Step_One
