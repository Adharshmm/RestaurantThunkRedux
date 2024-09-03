import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function RestCard({item}) {
    return (
        <>
        <Link to={`/restaurant_view/${item.id}`} style={{textDecoration:'none'}}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.photograph} />
                <Card.Body>
                    <Card.Title className='text-center text-warning'>{item.name}</Card.Title>
                    <Card.Text className='text-center'> <span className='text-warning ' > Neighborhood : </span>{item.neighborhood}</Card.Text>
                </Card.Body>
            </Card>
        </Link>
        </>
    )
}

export default RestCard