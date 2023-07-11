import {Form} from 'react-bootstrap';
import { ChangeEvent , useState } from 'react';
import DatePicker,{DateObject}  from "react-multi-date-picker"
import arabic from "react-date-object/calendars/arabic"
import arabic_en from "react-date-object/locales/arabic_en";

type OwnerData = {
  contract_price: number
  contract_date: string
  payment_way: string
}
type UserFormProps = OwnerData & {
  updateFields: (fields: Partial<OwnerData>) => void
}
function Step_Three(
  {
    contract_price,
    contract_date,
    payment_way,
    updateFields
  }: UserFormProps
) {  

  return (
    <>
    <h3 className='text-center fw-bold'>معلومات العقد</h3>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Control type="number" className='text-center' value={contract_price} onChange={e=>{
        updateFields({contract_price: parseInt(e.target.value)})
      }} placeholder="مبلغ الإيجار السنوي" />
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
            updateFields({contract_date: `${valueConvert}`});
          }
          
          },0)
        }}
        value={contract_date}
        placeholder="تاريخ بداية العقد"
        calendar={arabic}
        locale={arabic_en}
        calendarPosition="bottom-right"
        
      />
    </Form.Group>
    <div className='d-flex justify-content-center align-items-center'>
    <Form.Label className='m-0'>طريقة الدفع</Form.Label>
    <Form.Select aria-label="Default select example" onChange={e=>{updateFields({payment_way: e.target.value})
    }}>
    <option value="شهري" >شهري</option>
    <option value="كل 3 شهور">كل 3 شهور</option>
    <option value="كل 6 شهور" selected>كل 6 شهور</option>
    <option value="سنوي">سنوي</option>
  </Form.Select>
    </div>

</>
  )
}

export default Step_Three
