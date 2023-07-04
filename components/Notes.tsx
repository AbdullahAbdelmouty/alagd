import { Card ,Button,ListGroup} from "react-bootstrap"

function Notes() {
    return (
    <>
        <Card.Title className="fs-3 text-center fw-bold">قبل البدء يجب تجهيز البيانات التالية:</Card.Title>
        <ListGroup variant="flush">
        <ListGroup.Item className="border-0 fs-4 fw-medium"><span>1- </span><span>رقم صك المبنى وتاريخه</span></ListGroup.Item>
        <ListGroup.Item className="border-0 fs-4 fw-medium"><span>2- </span><span>هوية المؤجر والمستأجر وارقام جوالاتهم المسجلة في ابشر</span></ListGroup.Item>
        <ListGroup.Item className="fs-4 fw-medium">
        <span>3- </span><span>العنوان الوطني للعقار المراد تأجيره</span>
        </ListGroup.Item>
      </ListGroup>
      <blockquote className="blockquote mb-0">
          <p className="fs-4 fw-semibold">
            {' '}
            علماً أن {' '}
          </p>
          <footer className="blockquote-footer text-danger">
          الموظف سوف يتواصل معك لمراجعة<cite title="Source Title"> البيانات والتعديل أن وجد</cite>
          </footer>
        </blockquote>
    </>
    )
}

export default Notes
