import {Form} from 'react-bootstrap';
import moment from 'moment-hijri';
import { ChangeEvent , useState } from 'react';

function Step_Three() {
    const [gregorianDate, setGregorianDate] = useState('');
    const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
      const selectedDate = event.target.value;
      const hijriDate = moment(selectedDate, 'YYYY-MM-DD').format('iYYYY/iM/iD');
      setGregorianDate(selectedDate);
      console.log(hijriDate);
    };
  return (
    <>
    <h3 className='text-center fw-bold'>معلومات العقد</h3>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Control type="number" className='text-center' placeholder="مبلغ الإيجار السنوي" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
      <Form.Control type="date" className='text-center' value={gregorianDate} onChange={handleDateChange}  placeholder="تاريخ بداية العقد" />
      {gregorianDate && (
      <p>Hijri Date: {moment(gregorianDate).format('iYYYY/iM/iD')}</p>
    )}
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Control type="number" className='text-center' placeholder="مساحة المحل بالمتر المربع" />
    </Form.Group>
    <div className='d-flex justify-content-center align-items-center'>
    <Form.Label className='m-0'>طريقة الدفع</Form.Label>
    <Form.Select aria-label="Default select example">
    <option value="1">شهري</option>
    <option value="2">كل 3 شهور</option>
    <option value="3">كل 6 شهور</option>
    <option value="4">سنوي</option>
  </Form.Select>
    </div>

</>
  )
}

export default Step_Three
