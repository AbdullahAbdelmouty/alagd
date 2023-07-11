import {Form, Row,Col} from 'react-bootstrap';
import DatePicker,{DateObject}  from "react-multi-date-picker"
import arabic from "react-date-object/calendars/arabic"
import arabic_en from "react-date-object/locales/arabic_en";

type Place ={
  city: string
  boycott: string
}
type UserFormProps = Place & {
  updateFields: (fields: Partial<Place>) => void
}
function Step_Five({
  city,
  boycott,
  updateFields
}:UserFormProps) {
  return (
    <>
         <h3 className='text-center fw-bold'>العنوان الوطني للعقار المأجر</h3>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" className='text-center' value={city} onChange={e=>{
          console.log(e.target.value);
          
          updateFields({city: e.target.value})
        }} placeholder="المدينة" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" className='text-center' 
        value={boycott}
         onChange={e=>{
          updateFields({boycott: e.target.value})
        }} placeholder="الحي" />
      </Form.Group>
    </>
  )
}

export default Step_Five
