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
    <h3 className='text-center fw-bold'>معلومات المستأجر</h3>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="number" className='text-center' placeholder="رقم هوية المستأجر" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" className='text-center' placeholder="اسم المستأجر الثالثي" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Control type="tel" className='text-center' placeholder="رقم جوال المستأجر في أبشر05xxxxx" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Control type="date" className='text-center' value={gregorianDate} onChange={handleDateChange}  placeholder="تاريخ ميلاد المستأجر" />
        {gregorianDate && (
        <p>Hijri Date: {moment(gregorianDate).format('iYYYY/iM/iD')}</p>
      )}
      </Form.Group>
      <h3 className='text-center fw-bold'>العنوان الوطني للمستأجر</h3>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" className='text-center' placeholder="المدينة" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" className='text-center' placeholder="الحي" />
      </Form.Group>
    </>
  )
}

export default Step_Two
