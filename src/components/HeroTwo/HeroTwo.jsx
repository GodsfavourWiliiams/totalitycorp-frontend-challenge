import React from 'react'

const HeroTwo = ({heading, subHeading, className, imgClass}) => {
  return (
         <div className={`${className} home`}>
          <div className="container">
            <h1 className="heading">{heading}</h1>
            <h3 className="sub-heading">{subHeading}</h3>
            <div className="link">
              <p>
                <a href="/">
                  Learn more
                </a>
                <a href="/">
                  Buy
                </a>
              </p>
            </div>
          </div>
          <figure className={`${imgClass}`}></figure>
        </div>
  )
}

export default HeroTwo