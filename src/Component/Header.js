
import { useState } from "react";
import { Button,  Nav, Navbar, Offcanvas } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { BsFillGrid3X3GapFill, BsFillDatabaseFill,BsJournalBookmarkFill, BsPercent, BsBook, BsAlarmFill,BsHeadphones,BsFillArrowUpRightSquareFill } from "react-icons/bs";
import { AiFillBank, AiOutlineFieldTime,AiOutlineTransaction, AiFillHome, AiFillFileExclamation,AiOutlineBook,AiFillYoutube,AiOutlineUsergroupDelete} from "react-icons/ai";





export function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>


            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Button variant="" onClick={handleShow}>
                    <BsFillGrid3X3GapFill />
                </Button>

                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Mylgpbook</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <LinkContainer to='/'>
                                <Nav.Link href="#pricing"><AiFillHome />&nbsp;Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/masterdata'>
                                <Nav.Link href="#pricing"><BsFillDatabaseFill />&nbsp;Master-Data</Nav.Link>
                            </LinkContainer>
                            <Nav.Link href="#pricing"><AiOutlineTransaction />&nbsp;Transaction</Nav.Link>
                            <Nav.Link href="#pricing"><AiFillBank /> &nbsp;&nbsp;Cash & Bank</Nav.Link>
                            <Nav.Link href="#pricing"><BsPercent /> &nbsp;GST Returns</Nav.Link>
                            <Nav.Link href="#pricing"><BsPercent />&nbsp;TDS/TCS</Nav.Link>
                            <Nav.Link href="#pricing"><BsBook />&nbsp;Transaction Reports</Nav.Link>
                            <Nav.Link href="#pricing"><AiOutlineBook/>&nbsp;Financial Reports</Nav.Link>
                            <Nav.Link href="#pricing"><BsJournalBookmarkFill/>&nbsp;Payroll</Nav.Link>
                            <Nav.Link href="#pricing"><AiOutlineFieldTime/>&nbsp;Day End</Nav.Link>

                        </Nav>

                    </Offcanvas.Body>
                </Offcanvas>
                <div className="headerrow">
                    <Nav.Link href="#pricing">CP</Nav.Link>
                    <Nav.Link href="#pricing">OP</Nav.Link>&nbsp;&nbsp;&nbsp;
                    <Nav.Link href="#pricing">CS</Nav.Link>&nbsp;&nbsp;&nbsp;
                    <Nav.Link href="#pricing">DS</Nav.Link>&nbsp;&nbsp;&nbsp;
                    <Nav.Link href="#pricing">DC</Nav.Link>&nbsp;&nbsp;&nbsp;
                    <Nav.Link href="#pricing">NC</Nav.Link>&nbsp;&nbsp;&nbsp;
                    <Nav.Link href="#pricing">RC</Nav.Link>&nbsp;&nbsp;&nbsp;
                    <Nav.Link href="#pricing">TV</Nav.Link>&nbsp;&nbsp;&nbsp;
                    <Nav.Link href="#pricing">RT</Nav.Link>&nbsp;&nbsp;&nbsp;
                    <Nav.Link href="#pricing">PT</Nav.Link>&nbsp;&nbsp;&nbsp;
                    <Nav.Link href="#pricing">BT</Nav.Link>&nbsp;&nbsp;&nbsp;
                    <Nav.Link href="#pricing">CVO</Nav.Link>&nbsp;&nbsp;&nbsp;
                </div>
                <div className="headerrow1">
                    <div><BsHeadphones/></div>&nbsp;&nbsp;&nbsp;
                    <div><AiFillFileExclamation /></div>&nbsp;&nbsp;&nbsp;
                    <div><BsAlarmFill /></div>&nbsp;&nbsp;&nbsp;
                    <div><BsFillArrowUpRightSquareFill/></div>&nbsp;&nbsp;&nbsp;
                    <div><AiOutlineBook/></div>&nbsp;&nbsp;&nbsp;
                    <div><AiFillYoutube/></div>&nbsp;&nbsp;&nbsp;
                    <div><AiOutlineUsergroupDelete/></div>

                </div>

            </Navbar>
        </>
    )

}