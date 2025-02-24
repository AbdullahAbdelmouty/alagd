import {Form, Row,Col} from 'react-bootstrap';
import moment from 'moment-hijri';
import DatePicker,{DateObject}  from "react-multi-date-picker"
import arabic from "react-date-object/calendars/arabic"
import arabic_en from "react-date-object/locales/arabic_en"

type Elsaq={
  elsaq_type: string
  elsaq_num: number
  elsaq_date: string
  floor_num: number
  apartment_num: number
  building_floors: number
  is_elevator: string
  room_num : number
}
type UserFormProps = Elsaq & {
  updateFields: (fields: Partial<Elsaq>) => void
}
function Step_Four({
  elsaq_type,
  elsaq_num,
  elsaq_date,
  floor_num,
  apartment_num,
  building_floors,
  is_elevator,
  room_num ,
  updateFields
}: UserFormProps) {
  return (
    <>
     <h3 className='text-center fw-bold mb-4'>معلومات الصك</h3>
     <Form.Select aria-label="Default select example" value={elsaq_type}   onChange={e=>
        {updateFields({elsaq_type: e.target.value})
    }}>
      <option className='text-center'>نوع الصحك</option>
      <option value="1">صك ورقي</option>
      <option value="2">صك الكتروني</option>
      <option value="3">صك ورثة (المالك متوفي)</option>
      <option value="4">صك مرهون لبنك او شركة</option>
      <option value="5">لايوجد صك</option>
    </Form.Select>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="number" className='text-center' required min={0} value={elsaq_num} onChange={e=>{
          updateFields({elsaq_num: parseInt(e.target.value)})
        }} placeholder="رقم الصك" />
        <Form.Control.Feedback type="invalid">
        رقم الصك مطلوب        
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
      <DatePicker
        onChange={()=>{
          setTimeout(()=>{
          const input = document.querySelector('.rmdp-input') as HTMLInputElement | null;
          const value = input?.value;
          console.log(value,typeof value);
          const valueConvert = value?.replaceAll('/','-');
          if(typeof value === "string"){
            updateFields({elsaq_date: `${valueConvert}`});
          }
          
          },0)
        }}
        value={elsaq_date}
        placeholder="تاريخ الصك"
        required
        calendar={arabic}
        locale={arabic_en}
        calendarPosition="bottom-right"
        
      />
      </Form.Group>
      <Row>
        <Col>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="number" className='text-center' required value={floor_num} onChange={e=>{
          updateFields({floor_num: parseInt(e.target.value)})
        }} placeholder="الدور" />
        <Form.Control.Feedback type="invalid">
        رقم الدور مطلوب
        </Form.Control.Feedback>
        
      </Form.Group>
        </Col>
        <Col>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="number" className='text-center' required min={1} value={apartment_num} onChange={e=>{
          updateFields({apartment_num: parseInt(e.target.value)})
        }}  placeholder="رقم الشقة" />
        <Form.Control.Feedback type="invalid">
        رقم الشقة مطلوب
        </Form.Control.Feedback>
      </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="number" className='text-center' required value={building_floors} onChange={e=>{
          updateFields({building_floors: parseInt(e.target.value)})
        }}  placeholder="العمارة كم دور؟" />
      </Form.Group>
        </Col>
        <Col>
        <Form.Select aria-label="Default select example" required value={is_elevator} onChange={e=>
        {updateFields({is_elevator: e.target.value})
    }}>
      <option className='text-center'>هل يوجد مصعد؟</option>
      <option value="نعم يوجد">نعم يوجد</option>
      <option value="لايوجد">لايوجد</option>
      </Form.Select>
        </Col>
      </Row>
      <Col>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="number" className='text-center' required value={room_num} onChange={e=>{
          updateFields({room_num: parseInt(e.target.value)})
        }}  placeholder="عدد غرف الشقة" />
        <Form.Control.Feedback type="invalid">
        عدد الغرف مطلوب
        </Form.Control.Feedback>
      </Form.Group>
        </Col>
    </>
  )
}

export default Step_Four
