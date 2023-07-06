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
     <h3 className='text-center fw-bold'>معلومات المستأجر</h3>
     <Form.Select aria-label="Default select example">
      <option className='text-center'>نوع الصحك</option>
      <option value="1">صك ورقي</option>
      <option value="2">صك الكتروني</option>
      <option value="3">صك ورثة (المالك متوفي)</option>
      <option value="4">صك مرهون لبنك او شركة</option>
      <option value="5">لايوجد صك</option>
    </Form.Select>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="number" className='text-center' placeholder="مبلغ الإيجار السنوي" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Control type="date" className='text-center' value={gregorianDate} onChange={handleDateChange}  placeholder="تاريخ الصك" />
        {gregorianDate && (
        <p>Hijri Date: {moment(gregorianDate).format('iYYYY/iM/iD')}</p>
      )}
      </Form.Group>
      <Row>
        <Col>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="number" className='text-center' placeholder="الدور" />
      </Form.Group>
        </Col>
        <Col>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="number" className='text-center' placeholder="رقم الشقة" />
      </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="number" className='text-center' placeholder="العمارة كم دور؟" />
      </Form.Group>
        </Col>
        <Col>
        <Form.Select aria-label="Default select example">
      <option className='text-center'>هل يوجد مصعد؟</option>
      <option value="1">نعم يوجد</option>
      <option value="2">لايوجد</option>
    </Form.Select>
        </Col>
      </Row>
    </>
  )
}

export default Step_Five
