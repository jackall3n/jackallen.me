import React from "react"
import { graphql, Link } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { format, intervalToDuration, parseISO } from "date-fns"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  const start = parseISO(post.frontmatter.start)
  const end = post.frontmatter.end ? parseISO(post.frontmatter.end) : new Date()

  const duration = intervalToDuration({
    start,
    end
  })

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <div className="duration">
            <strong className="duration-start">{format(start, "MMMM, yyyy")}</strong>
            <div className="duration-length">
              {duration.years ? `${duration.years} years ` : undefined}
              {duration.months ? `${duration.months} months ` : undefined}
            </div>
            <strong className="duration-end">{post.frontmatter.end ? format(end, "MMMM, yyyy") : "Present"}</strong>
          </div>
          <div className="blog-keywords">
            {post.frontmatter.keywords.map(k => <div key={k}>{k}</div>)}
          </div>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0
          }}
        >
          <li>
            {previous && (
              <Link to={previous.frontmatter.slug || previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.frontmatter.slug || next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
    query BlogPostBySlug(
        $id: String!
        $previousPostId: String
        $nextPostId: String
    ) {
        site {
            siteMetadata {
                title
            }
        }
        markdownRemark(id: { eq: $id }) {
            id
            excerpt(pruneLength: 160)
            html
            frontmatter {
                title
                start
                end
                description
                keywords
            }
        }
        previous: markdownRemark(id: { eq: $previousPostId }) {
            fields {
                slug
            }
            frontmatter {
                title
                slug
            }
        }
        next: markdownRemark(id: { eq: $nextPostId }) {
            fields {
                slug
            }
            frontmatter {
                title
                slug
            }
        }
    }
`
