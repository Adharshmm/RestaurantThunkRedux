import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Collapse from 'react-bootstrap/Collapse';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
function RestView() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [open, setOpen] = useState(false);
    const { id } = useParams();
    const restid = Number(id);
    console.log(id);
    const allRestaurant = useSelector((state) => state.restaurantSlice.allRestaurant.restaurants);
    console.log(allRestaurant)
    const selectedRestaurent = allRestaurant.find(items => items.id === restid);
    console.log(selectedRestaurent);




    return (
        <>
            <Row>
                <Col md={1}>
                </Col>
                <Col md={3}>
                    <img src={selectedRestaurent.photograph} width='100%' height='100%' alt="" className='rounded' />
                </Col>
                <Col md={7} className='px-5'>
                    <hr />
                    <h4 className='text-center'>Restaurant<span className='text-danger'>Details</span></h4>
                    <hr />
                    <ListGroup>
                        <ListGroup.Item className='text-center p-2 fs-5'>hello</ListGroup.Item>
                        <ListGroup.Item>Neighberhood:</ListGroup.Item>
                        <ListGroup.Item>Address :</ListGroup.Item>
                        <ListGroup.Item>CusineType:</ListGroup.Item>
                        <ListGroup.Item className='text-=center d-flex align-items-center justify-content-evenly  '>
                            <button className='btn btn-danger' onClick={handleShow}>Operating Hours</button>

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Operating Hours</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <ListGroup>
                                        <ListGroup.Item>Monday:</ListGroup.Item>
                                        <ListGroup.Item>Tuesday:</ListGroup.Item>
                                        <ListGroup.Item>Wednesday:</ListGroup.Item>
                                        <ListGroup.Item>Thursday:</ListGroup.Item>
                                        <ListGroup.Item>Friday:</ListGroup.Item>
                                        <ListGroup.Item>Saturday:</ListGroup.Item>
                                        <ListGroup.Item>Sunday:</ListGroup.Item>
                                    </ListGroup>
                                </Modal.Body>
                            </Modal>


                            <Button variant='outline-secondary' style={{ color: '#fff' }} onClick={() => setOpen(!open)}
                            >Click Here To See Reviews</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            <Row>
                <Col md={4}></Col>
                <Col md={7}>
                    <Collapse style={{ paddingLeft: '45px', paddingRight: '45px' }} in={open}>
                        <div>
                            <hr />
                            <div>
                                <h6>Name and Date :</h6>
                                <p>Rating :</p>
                                <p>Discription :</p>
                            </div>
                        </div>
                    </Collapse>
                </Col>
            </Row>
        </>
    )
}

export default RestView