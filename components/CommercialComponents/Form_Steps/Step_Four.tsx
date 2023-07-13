import {Form} from 'react-bootstrap';
import { ChangeEvent , useState } from 'react';
import moment from 'moment-hijri';
type Elsaq={
  elsaq_type: string
  elsaq_num: number
  elsaq_date: string
  floor_num: number
  apartment_num: number
  building_floors: number
  is_elevator: string
}
type UserFormProps = Elsaq & {
  updateFields: (fields: Partial<Elsaq>) => void
}
function Step_Four(
  {
    elsaq_type,
    elsaq_num,
    elsaq_date,
    floor_num,
    apartment_num,
    building_floors,
    is_elevator,
    updateFields
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
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Control type="number" className='text-center' placeholder="رقم الصك" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Control type="date" className='text-center' value={gregorianDate} onChange={handleDateChange}  placeholder="تاريخ الصك" />
        {gregorianDate && (
        <p>Hijri Date: {moment(gregorianDate).format('iYYYY/iM/iD')}</p>
      )}
      </Form.Group>
    </>
  )
}

export default Step_Four
