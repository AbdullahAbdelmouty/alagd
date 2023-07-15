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
         <h3 className='text-center fw-bold mb-4'>العنوان الوطني للعقار المأجر</h3>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" className='text-center' required value={city} onChange={e=>{
          updateFields({city: e.target.value})
        }} placeholder="المدينة" />
        <Form.Control.Feedback type="invalid">
          المدينة مطلوبة
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" className='text-center'  required
        value={boycott}
         onChange={e=>{
          updateFields({boycott: e.target.value})
        }} placeholder="الحي" />
          <Form.Control.Feedback type="invalid">
            الحي مطلوب
        </Form.Control.Feedback>
      </Form.Group>
    </>
  )
}

export default Step_Five
