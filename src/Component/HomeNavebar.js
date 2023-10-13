import { Button, Container, Navbar } from "react-bootstrap";
import { AiOutlinePlus, AiOutlineArrowLeft, AiOutlineArrowDown } from "react-icons/ai";
import {  useNavigate } from "react-router-dom";

export function HomeNewbar() {
    const navigate = useNavigate()
    const pagechange = () => {
        navigate('/addbutton')

    }
    return (
        <>
            <div>

                <Navbar className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="#home"> <h5>BLPG/ARB/NFR ITEMS PRICE MASTER</h5></Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Button variant="success" onClick={pagechange}  ><AiOutlinePlus /> ADD</Button>&nbsp;&nbsp;
                            <Button variant="info">CALCULATE</Button>&nbsp;&nbsp;
                            <Button variant="primary">SAVE</Button>&nbsp;&nbsp;
                            <Button variant="secondary"><AiOutlineArrowLeft /> BACK</Button>&nbsp;&nbsp;
                            <Button variant="secondary">HELP <AiOutlineArrowDown /></Button>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}