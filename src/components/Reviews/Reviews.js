import React from "react"
import "./Reviews.scss"

const Reviews = () => {
  return (
    <section className="section reviewSection">
      <div className="black"></div>
      <div className="left">
        <h1 className="title">Our Customers love what we do</h1>
        <p className="content">What our customers have to say about us</p>
        <div className="shows">
          <div className="show">
            <h2 className="amount">+15K</h2>
            <p className="content">SATISFIED <br /> CUSTOMERS</p>
          </div>

          <div className="show">
            <h2 className="amount">+3500</h2>
            <p className="content">PIERCINGS</p>
          </div>
        </div>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div className="right">
        <div className="review">
            <p className="content">I recently got my first piercing at this shop and I couldn't be happier with my experience! The staff were friendly and knowledgeable, and they made sure I was comfortable throughout the entire process. The shop was clean and well-maintained, and I appreciated their commitment to hygiene and safety. I would highly recommend this shop to anyone looking for a great piercing experience.</p>
            <h3 className="name">Rahul T</h3>
        </div>

        <div className="review">
            <p className="content">I've been going to this piercing shop for years and I've always been extremely satisfied with their services. The piercers are professional and skilled, and they always take the time to explain the piercing process and aftercare instructions. I appreciate the high-quality jewelry they use and the wide selection they offer. Overall, this is a great place to get pierced and I would recommend it to anyone.</p>
            <h3 className="name">Surya V R</h3>
        </div>

        <div className="review">
            <p className="content">I recently had my belly button pierced at this shop and I'm absolutely in love with my new piercing! The staff were friendly and welcoming, and they made sure I was comfortable throughout the process. The shop was clean and the equipment was well-maintained. I was impressed with their attention to detail and commitment to providing the best possible experience. I would definitely recommend this shop to anyone looking for a great piercing experience.</p>
            <h3 className="name">Surya V R</h3>
        </div>
       
      </div>

    </section>
  )
}

export default Reviews
