import { Button, Container, Dropdown, Nav, NavDropdown, Navbar, Table } from "react-bootstrap";
import { Header } from "../Component/Header";
import { AiOutlinePlus, AiOutlineArrowLeft, AiOutlineArrowDown } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { useEffect, useState } from "react";


export function HomePage() {
    const navigate = useNavigate()
    const [users, setUsers] = useState([])



    const fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUsers(data)
            })
    }

        console.log(users);
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <Header />

            <div className="mt-3 headerhome"  ><div>
                <h5>BLPG/ARB/NFR ITEMS PRICE MASTER</h5>
            </div>
                <div className="headerhome2">
                    <Link to='/addbutton'>
                        <Button variant="success"  ><AiOutlinePlus /> ADD</Button>&nbsp;&nbsp;
                    </Link>
                    <Button variant="info">CALCULATE</Button>&nbsp;&nbsp;
                    <Button variant="primary">SAVE</Button>&nbsp;&nbsp;
                    <Button variant="secondary"><AiOutlineArrowLeft /> BACK</Button>&nbsp;&nbsp;
                    <Button variant="secondary"><AiOutlineArrowDown />HELP</Button>
                </div></div>
            <div>
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
                            <td><AiFillDelete /></td>


                        </tr>


                    </tbody>
                </Table>
            </div>
            <div>
                {

                }
                <Table striped bordered hover className="mt-3">
                    <thead>
                        <tr className="theade">

                            <th className="theade" >PRODUCT</th>
                            <th className="theade" >MRP</th>
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
                        {
                            users.map((t)=>{
                                return(
                                    <tr>
                                    <td>{t.name}</td>
                                    <td>{t.username}</td>
                                    <td>{t.email}</td>
                                    <td>{t.address.street}</td>
                                    <td>{t.address.suite}</td>
                                    <td>{t.address.city}</td>
                                    <td>{t.address.zipcode}</td>
                                    <td>{t.address.suite}</td>
                                    <td>{t.address.suite}</td>

                                   
                                </tr>
                                )
                            })
                        }
                       

                    </tbody>
                </Table>
            </div>



        </>
    )

}