import React from 'react'
import './Reviews.css'

function Reviews() {
  return (
    <div className='review-container'>
      <h4>Reviewed by People</h4>
      <h1>Client's Testimonials</h1>
      <center><h6>Discover the positive impact we have made on the our clients by reading through their Testimonials.Our clients have experienced our service and results,and they are  eager to share their positive experience with you.</h6></center>
      <div className="review-cards">
        <div className="review-card1">
            <h3>"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable."</h3>
            <div className='cstmr-name'>
                <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg" alt="" />
                <h2>Karan Shastri</h2>
            </div>
        </div>  
        <div className="review-card2"><h3>"The car was in great condition and made our trip even better. Highly recommend for this car rental website!"</h3>
        <div className='cstmr-name'>
                <img src="https://img.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19636.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710979200&semt=ais" alt="" />
                <h2>Saksham Jain</h2>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews
