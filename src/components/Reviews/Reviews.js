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
            <p className="content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam obcaecati doloribus vero, nisi eum adipisci! Laudantium, repellat. Ducimus repellendus excepturi omnis perspiciatis vel nisi optio. Dignissimos esse beatae modi delectus.</p>
            <h3 className="name">Rahul T</h3>
        </div>

        <div className="review">
            <p className="content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam obcaecati doloribus vero, nisi eum adipisci! Laudantium, repellat. Ducimus repellendus excepturi omnis perspiciatis vel nisi optio. Dignissimos esse beatae modi delectus.</p>
            <h3 className="name">Surya V R</h3>
        </div>

        <div className="review">
            <p className="content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam obcaecati doloribus vero, nisi eum adipisci! Laudantium, repellat. Ducimus repellendus excepturi omnis perspiciatis vel nisi optio. Dignissimos esse beatae modi delectus.</p>
            <h3 className="name">Surya V R</h3>
        </div>
       
      </div>

    </section>
  )
}

export default Reviews
