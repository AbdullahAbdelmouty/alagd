import { Card ,Button,ListGroup} from "react-bootstrap"

function Notes() {
    return (
    <>
        <Card.Title className="fs-2 text-center fw-bold">قبل البدء يجب تجهيز البيانات التالية:</Card.Title>
        <ListGroup variant="flush">
        <ListGroup.Item className="border-0 fs-4 ps-0 fw-medium"><span>*</span><span>رقم صك المبنى وتاريخه</span></ListGroup.Item>
        <ListGroup.Item className="border-0 fs-4 ps-0 fw-medium"><span>*</span><span>هوية المؤجر والمستأجر وارقام جوالاتهم المسجلة في ابشر</span></ListGroup.Item>
        <ListGroup.Item className="border-0  fs-4 ps-0 fw-medium">
        <span>*</span><span>العنوان الوطني للعقار المراد تأجيره</span>
        </ListGroup.Item>
        <ListGroup.Item className="fs-5 ps-0 fw-medium text-danger">
        <span> علماً أن الموظف سوف يتواصل معك لمراجعة البيانات والتعديل أن وجد</span>
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>

      </Card.Body>

    </>
    )
}

export default Notes
