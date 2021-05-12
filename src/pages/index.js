import * as React from "react"

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

import '../styles/index.scss'

// markup
const IndexPage = () => {
  return (
    <>
      <Hero />
      <Layout>
        <Projects />
        <Contact />
      </Layout>
    </>
  )
}

export default IndexPage
