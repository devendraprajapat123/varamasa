import { Container, NavDropdown, Table } from "react-bootstrap";
import { Header } from "../../Component/Header";
import {AiFillDelete} from "react-icons/ai";

export function AddButton() {
    return (
        <>
            <Header />
            <Container>

                <Table striped bordered hover className="mt-3">
                    <thead>
                        <tr className="theade">
                            <th className="theade" >PRODUCT</th>
                            <th className="theade" >RSP</th>
                            <th className="theade" >BASIC PRICE</th>
                            <th className="theade" >CGST AMOUNT</th>
                            <th className="theade" >SGST AMOUNT</th>
                            <th className="theade" >OFFER PRICE</th>
                            <th className="theade" >MONTH</th>
                            <th className="theade" >YEAR</th>
                            <th className="theade" >ACTIONS</th>

                        </tr>
                    </thead>

                    <tbody>
                        <tr>

                            <td><NavDropdown title="SELECT" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>


                            </NavDropdown></td>
                            <td>MRP</td>
                            <td>BASIC PRICE</td>
                            <td>SGST</td>
                            <td>CGST</td>
                            <td>OFFER PRI</td>
                            <td><NavDropdown title="SELECT" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            </NavDropdown></td>
                            <td><NavDropdown title="SELECT" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            </NavDropdown></td>
                            <td><AiFillDelete/></td>


                        </tr>


                    </tbody>
                </Table>
            </Container>

        </>
    )
}