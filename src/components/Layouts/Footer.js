import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
    return (
        <div className="prefooter pt-5">
            <div className="footer-menu col-xl-10 mx-auto">
                <div className="footer-menu1 bcr">
                    <Link className="nav-item text-center" to="#men">Home</Link>
                    <Link className="nav-item text-center" to="#men">Quizes</Link>
                    <Link className="nav-item text-center" to="#men">About</Link>
                    <Link className="nav-item text-center" to="#men">More</Link>
                    <Link className="nav-item text-center" to="#men">Contact</Link>
                    <Link className="nav-item text-center" to="#men">Users</Link>
                </div>

                <div className="footer-menu1 bcr">
                    <Link className="nav-item text-center" to="#men">Home</Link>
                    <Link className="nav-item text-center" to="#men">Quizes</Link>
                    <Link className="nav-item text-center" to="#men">About</Link>
                    <Link className="nav-item text-center" to="#men">More</Link>
                    <Link className="nav-item text-center" to="#men">Contact</Link>
                    <Link className="nav-item text-center" to="#men">Users</Link>
                </div>

                <div className="footer-menu1">
                    <Link className="nav-item text-center" to="#men">Home</Link>
                    <Link className="nav-item text-center" to="#men">Quizes</Link>
                    <Link className="nav-item text-center" to="#men">About</Link>
                    <Link className="nav-item text-center" to="#men">More</Link>
                    <Link className="nav-item text-center" to="#men">Contact</Link>
                    <Link className="nav-item text-center" to="#men">Users</Link>
                </div>
            </div>
            <footer className="footer col-xl-10 mx-auto">
                <p className="footer-brand">AfrikaQuiz &copy; 2021</p>
            </footer>
        </div>
    )
}

export default Footer
