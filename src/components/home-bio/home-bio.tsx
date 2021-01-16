import React, { useMemo } from "react"

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

  const typed = useMemo(() => {
    const languages = ["Javascript", "C#", "Swift", "Java", "Python", "CSS", "SASS", "Objective-C", "React Native", "SQL", "Angular"].map(h => `writes ${h}.`)
    const loves = ["React", "Typescript", "Kubernetes", "Docker", "GraphQL", "JetBrains"].map(h => `loves ${h}!`)
    const uses = ["PostgreSQL", "Terraform", "Node"].map(h => `uses ${h}.`)
    const builds = ["with Raspberry Pis", "Mobile Apps"].map(h => `builds ${h}.`)
    const avoids = ["PHP"].map(h => `avoids ${h}.`)
    const prefers = ["Spaces ⌨️"].map(h => `prefers ${h}.`)
    const eats = ["anything 🥑"].map(h => `eats ${h}.`)

    const typed = [...languages, ...loves, ...avoids, ...prefers, ...eats, ...uses, ...builds]

    typed.sort(() => .5 - Math.random())

    return typed
  }, [])


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
      <div className="home-bio-summary">Building <span className="highlight">digital<br /> products</span>, brands
        and<br /> experience.
      </div>
      <div className="home-bio-description">
        <Hobbies />
      </div>
      <button>SAY HELLO <span>🤙</span></button>
    </div>
  )
}

export default HomeBio
