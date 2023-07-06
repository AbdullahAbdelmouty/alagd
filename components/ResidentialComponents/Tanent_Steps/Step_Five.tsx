import {Form, Row,Col} from 'react-bootstrap';
import moment from 'moment-hijri';
import { ChangeEvent , useState } from 'react';
function Step_Five() {
    const [gregorianDate, setGregorianDate] = useState('');
    const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
      const selectedDate = event.target.value;
      const hijriDate = moment(selectedDate, 'YYYY-MM-DD').format('iYYYY/iM/iD');
      setGregorianDate(selectedDate);
      console.log(hijriDate);
    };
  return (
    <>
     <h3 className='text-center fw-bold'>العنوان الوطني للمحل</h3>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" className='text-center' placeholder="المدينة" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" className='text-center' placeholder="الحي" />
      </Form.Group>
      <Row>
        <Col>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" className='text-center' placeholder="الشارع" />
      </Form.Group>
        </Col>
        <Col>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="number" className='text-center' placeholder="رقم المبني" />
      </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="number" className='text-center' placeholder="الرمز البريدي" />
      </Form.Group>
        </Col>
        <Col>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="number" className='text-center' placeholder="الرقم الاضافي" />
      </Form.Group>
        </Col>
      </Row>
    </>
  )
}

export default Step_Five
