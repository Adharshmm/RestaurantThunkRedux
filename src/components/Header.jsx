import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { searchRestaurant } from '../redux/restaurantSlice';
import { useDispatch } from 'react-redux';

function Header() {
    const dispatch = useDispatch();
    return (
        <>
            <Navbar className="bg-body-dark p-2 d-flex justify-content-between w-100">
                <Navbar.Brand href="#home" className='d-flex '>
                    <Link style={{ textDecoration: 'none' }} to={'/'}>
                        <img
                            alt=""
                            src="https://m.media-amazon.com/images/I/51SdVVc+rBL._h1_.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        <span className='colorImp fw-bold'>Food</span><span className='text-danger fw-bold'>Circle</span>
                    </Link>
                    <input onChange={(e)=>dispatch(searchRestaurant(e.target.value))} type="text" className=' form-control rounded text-center ms-5' placeholder='search by Neighbourhood' />
                </Navbar.Brand>
            </Navbar>
        </>
    )
}

export default Header