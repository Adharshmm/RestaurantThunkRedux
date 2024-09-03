import React, { useEffect } from 'react'
import RestCard from '../components/RestCard'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurant } from '../redux/restaurantSlice';

function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchRestaurant())
    }, [])
    const allRestaurant = useSelector((state) => state.restaurantSlice.allRestaurant.restaurants);
    console.log('whdiugdfiadw')
    console.log(allRestaurant);

    return (
        <>
            <Row>
                {
                    allRestaurant?.length > 0 ?
                        allRestaurant.map((item) => (

                            <Col sm={6} md={4} lg={3} xl={3} className='px-5 py-3' >
                                <RestCard item = {item} />
                            </Col>
                        ))
                        :
                        <p>Nothing to display</p>
                }
            </Row>
        </>
    )
}

export default Home