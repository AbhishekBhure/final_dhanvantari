import React, { Fragment } from 'react'
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader'
import MetaData from '../MetaData'
import "./contact.css"

const Contact = () => {
    const { loading } = useSelector(
        (state) => state.user
    );
    return (
        <Fragment>
            <MetaData title="Dhanvantari --Contact Us" />
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    <div className="contact">
                        <div className="contact-details">
                            <h2>Contact Us</h2>
                            <p>We are trying our best to provide your order as soon as possible.</p>
                            <p> Feel free to email us at <a href="mailto:shridhanvantariayurvedic@gmail.com" title='mailto:shridhanvantariayurvedic@gmail.com'> <strong> shridhanvantariayurvedic@gmail.com</strong></a> for any questions or feedback.</p>
                            <p>Please note responses can be delayed.</p>
                            <h4>Contact Details</h4>

                            <p>SHRI DHANVANTARI AYURVEDIC CENTER<br></br>
                                Station Road, Tangakoot, Gadag 582 101,<br></br>
                                Karnataka - India.
                                <br></br>
                                <br></br>
                                <b>Telephone Number:</b> 08372 - 469637<br></br>
                                <b>Working Hours -</b>  (10AM - 7PM IST Monday to Saturday)</p>
                        </div>

                    </div>
                </Fragment>
            )}
        </Fragment>
    )
}

export default Contact