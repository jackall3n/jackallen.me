import React, { useMemo } from "react"
import Typed from "react-typed"

function Hobbies() {
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
    <>
      <span>A full-stack developer who </span>
      <Typed strings={typed} smartBackspace loop
             backDelay={3000} backSpeed={30}
             typeSpeed={40} />
    </>
  )
}

export default Hobbies
