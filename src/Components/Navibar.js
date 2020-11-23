import React from "react";
import {Button, Nav, Navbar} from "react-bootstrap";

export default function Navibar(){
    return(
    <>
       <Navbar collapseOnSelect expand="lg" bg="dark" varian="dark">
           <Navbar.Brand>Todo List</Navbar.Brand>
           <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
           <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="mr-auto">
                   <Nav.Link>Home</Nav.Link>
                   <Nav.Link>Deleted</Nav.Link>
               </Nav>
               <Nav>
                   <Button variant="primary">Log in</Button>
                   <Button variant="primary">Sign out</Button>
               </Nav>
           </Navbar.Collapse>
       </Navbar>
    </>    )
}
