import React from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeBio from "../components/home-bio/home-bio"
import Timeline from "../components/timeline/timeline"

interface DataProps {
  site: {
    siteMetadata: {
      title: string;
    },
  }

  allMarkdownRemark: {
    nodes: {
      excerpt: string;
      fields: {
        slug: string;
      }
      frontmatter: {
        slug: string;
        start: string;
        end: string;
        title: string;
        description: string;
        keywords?: string[]
      }
    }[]
  }
}

function BlogIndex({ data, location }: PageProps<DataProps>) {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <>
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <section className="global-wrapper">
          <HomeBio />
        </section>
        <section>
          <h2 className="section-header global-wrapper">Experience</h2>
          <Timeline posts={posts} />
        </section>
      </Layout>
    </>

  )
}

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___start], order: DESC }) {
            nodes {
                excerpt
                fields {
                    slug
                }
                frontmatter {
                    slug
                    position
                    start(formatString: "MMMM, YYYY")
                    startDate: start
                    end(formatString: "MMMM, YYYY")
                    title
                    description
                    keywords
                }
            }
        }
    }
`

export default BlogIndex
