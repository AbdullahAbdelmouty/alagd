import {Form, Row,Col} from 'react-bootstrap';
import moment from 'moment-hijri';
import { ChangeEvent , useState } from 'react';
type Place ={
  city: string
  boycott: string
  street: string
  bulding_num: number
  postal_code: number
  addition_num: number
}
type UserFormProps = Place & {
  updateFields: (fields: Partial<Place>) => void
}
function Step_Five(
  {
    city,
    boycott,
    street,
    bulding_num,
    postal_code,
    addition_num,
    updateFields
  }:UserFormProps
) {

  return (
    <>
     <h3 className='text-center fw-bold mb-4'>العنوان الوطني للمحل</h3>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" className='text-center' value={city} onChange={e=>{
          updateFields({city: e.target.value})
        }} required placeholder="المدينة" />
        <Form.Control.Feedback type="invalid">
          المدينة مطلوبة
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" className='text-center' required value={boycott} onChange={e=>{
          updateFields({boycott: e.target.value})
        }} placeholder="الحي" />
        <Form.Control.Feedback type="invalid">
            الحي مطلوب
        </Form.Control.Feedback>
      </Form.Group>
      <Row>
        <Col>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" className='text-center'  required  value={street}  onChange={e=>{
          updateFields({street: e.target.value})
        }} placeholder="الشارع" />
        <Form.Control.Feedback type="invalid">
            الشارع مطلوب
        </Form.Control.Feedback>
      </Form.Group>
        </Col>
        <Col>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="number" className='text-center' min={1} value={bulding_num}  onChange={e=>{
          updateFields({bulding_num: parseInt(e.target.value)})
        }} required placeholder="رقم المبني" />
        <Form.Control.Feedback type="invalid">
            رقم المبني مطلوب
        </Form.Control.Feedback>
      </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="number" className='text-center' value={postal_code}  onChange={e=>{
          updateFields({postal_code: parseInt(e.target.value)})
        }}  required placeholder="الرمز البريدي" />
        <Form.Control.Feedback type="invalid">
            الرمز البريدي مطلوب
        </Form.Control.Feedback>
      </Form.Group>
        </Col>
        <Col>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="number" className='text-center' value={addition_num}  onChange={e=>{
          updateFields({addition_num: parseInt(e.target.value)})
        }} required placeholder="الرقم الاضافي" />
        <Form.Control.Feedback type="invalid">
            رقم الاضافي مطلوب
        </Form.Control.Feedback>
      </Form.Group>
        </Col>
      </Row>
    </>
  )
}

export default Step_Five
