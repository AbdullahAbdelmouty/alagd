import {Form} from 'react-bootstrap';
function Step_Six() {
  return (
    <>
         <h3 className='text-center fw-bold'>العنوان الوطني للعقار المأجر</h3>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" className='text-center' placeholder="المدينة" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" className='text-center' placeholder="الحي" />
      </Form.Group>
    </>
  )
}

export default Step_Six
