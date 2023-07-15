import {Form, Row,Col} from 'react-bootstrap';
import moment from 'moment-hijri';
import DatePicker,{DateObject}  from "react-multi-date-picker"
import arabic from "react-date-object/calendars/arabic"
import arabic_en from "react-date-object/locales/arabic_en"
type Elsaq={
  elsaq_num: number
  elsaq_date: string
}
type UserFormProps = Elsaq & {
  updateFields: (fields: Partial<Elsaq>) => void
}
function Step_Four(
  {
    elsaq_num,
    elsaq_date,
    updateFields
  }: UserFormProps
) {
  return (
    <>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="number" className='text-center' required value={elsaq_num} onChange={e=>{
          updateFields({elsaq_num: parseInt(e.target.value)})
        }} placeholder="رقم الصك" />
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
            updateFields({elsaq_date: `${valueConvert}`});
          }
          
          },0)
        }}
        value={elsaq_date}
        placeholder="تاريخ الصك"
        required
        calendar={arabic}
        locale={arabic_en}
        calendarPosition="bottom-right"
        
      />
      </Form.Group>
    </>
  )
}

export default Step_Four
