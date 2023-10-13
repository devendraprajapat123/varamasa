import {  NavDropdown, Table } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { Layout } from "../../Component/Layout";
import { HomeNewbar } from "../../Component/HomeNavebar";
import { useEffect, useState } from "react";

export function AddButton() {
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
        <Layout>
            <HomeNewbar />
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
                            users.map((t) => {
                                return (
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

        </Layout>
    )
}