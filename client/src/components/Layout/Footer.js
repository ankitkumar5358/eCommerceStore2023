import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-dark text-light text-center p-3'>
        <h4>
        All Rights Reserved &copy; Ankit
        </h4>
        <p className='text-center mt-3'>
            <Link to="/about">About</Link> |

            <Link to="/contact">Contact</Link> |

            <Link to="/policy">Privacy Policy</Link>
        </p>
    </div>
  )
}

export default Footer