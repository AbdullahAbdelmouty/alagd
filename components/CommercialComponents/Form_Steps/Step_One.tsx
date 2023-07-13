import {Form} from 'react-bootstrap';
import { ChangeEvent , useState } from 'react';
import moment from 'moment-hijri';
type OwnerData = {
  owner_id: number
  owner_phone: number
  owner_br: string,
  owenr_name:string,
  owner_check: boolean
}
type UserFormProps = OwnerData & {
  updateFields: (fields: Partial<OwnerData>) => void
}
function Step_One(
  {
    owner_id,
    owner_phone,
    owner_br,
    owenr_name,
    owner_check,
    updateFields,
  }: UserFormProps
) {
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
        <Form.Control type="number" className='text-center' placeholder="رقم هوية المالك" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" className='text-center' placeholder="اسم المالك الثالثي" />
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
      <h3 className='text-center fw-bold'>العنوان الوطني للمالك</h3>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" className='text-center' placeholder="المدينة" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" className='text-center' placeholder="الحي" />
      </Form.Group>
    </>
  )
}

export default Step_One
