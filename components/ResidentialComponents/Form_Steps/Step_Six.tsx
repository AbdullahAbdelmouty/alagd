import {Form,Card, Row,Col} from 'react-bootstrap';
import Image from 'next/image';
import Done from '../../../public/img/done.png'
type PhoneNumber ={
  owner_phone: number
  owner: boolean
  tanent: boolean
  tanent_phone: number
}
type UserFormProps = PhoneNumber & {
  updateFields: (fields: Partial<PhoneNumber>) => void
}
function Step_Six(
  {
    owner_phone,
    tanent_phone,
    tanent,
    owner,
    updateFields
  }:UserFormProps
) {
  return (
    <>
    <Row className='flex-column'>
      <Col className='d-flex justify-content-center'>
      <Image className='rounded-3'
        src={Done}
        alt="Picture of the author"
        width={150}
        height={150}
      />
      </Col>
      <Col>
      <Card.Text className='text-center fs-4'>
      تم استلام طلبك بنجاح سوف يتم ارسال رساله نصيه الى جوالك المسجل في الطلب : {owner? owner_phone : tanent_phone}
        </Card.Text>
        <Card.Text className='text-center mb-3'>
        <Card.Link className='text-center' href="/">العودة للرئسية</Card.Link>
        </Card.Text>
      </Col>
    </Row>

 
    </>
  )
}

export default Step_Six
