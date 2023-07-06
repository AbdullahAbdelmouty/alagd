import {Form} from 'react-bootstrap';
import { ChangeEvent , useState } from 'react';
import moment from 'moment-hijri';

function Step_Two() {
  const [gregorianDate, setGregorianDate] = useState('');
  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedDate = event.target.value;
    const hijriDate = moment(selectedDate, 'YYYY-MM-DD').format('iYYYY/iM/iD');
    setGregorianDate(selectedDate);
    console.log(hijriDate);
  };
  
  return (
    <>
    <h3 className='text-center fw-bold'>معلومات المالك</h3>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" className='text-center' placeholder="هوية المالك" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control placeholder="الاسم" className='text-center' disabled />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Control type="tel" className='text-center' placeholder="رقم جوال المالك في أبشر05xxxxx" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Control type="date" className='text-center' value={gregorianDate} onChange={handleDateChange}  placeholder="تاريخ ميلاد المالك" />
        {gregorianDate && (
        <p>Hijri Date: {moment(gregorianDate).format('iYYYY/iM/iD')}</p>
      )}
      </Form.Group>
    </>
  )
}

export default Step_Two
