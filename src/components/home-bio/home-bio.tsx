import React from "react"

import "./home-bio.scss"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import Hobbies from "../hobbies/hobbies"

function HomeBio() {
  const data = useStaticQuery(graphql`
      query HomeBioQuery {
          avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
              childImageSharp {
                  fixed(width: 150, height: 150, quality: 100) {
                      ...GatsbyImageSharpFixed
                  }
              }
          }
      }
  `)

  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div className="home-bio">
      <Image
        fixed={avatar}
        alt={`Jack`}
        className="home-bio-avatar"
        imgStyle={{
          borderRadius: `50%`
        }}
      />
      <div className="home-bio-hi">Hi, I'm Jack 👋</div>
      <div className="home-bio-summary">Building <span className="highlight">digital<br /> products</span>, brands,
        and<br /> experiences.
      </div>
      <div className="home-bio-description">
        <Hobbies />
      </div>
      <button onClick={() => window.open('mailto:me@jackallen.me?subject=Hey!')}>SAY HELLO <span>🤙</span></button>
    </div>
  )
}

export default HomeBio
