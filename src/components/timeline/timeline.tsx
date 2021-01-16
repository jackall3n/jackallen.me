import React from "react"
import TimelineItem from "./timeline-item"

import "./timeline.scss"

export interface Post {
  excerpt: string;
  fields: {
    slug: string;
  }
  frontmatter: {
    slug: string;
    start: string;
    startDate: string;
    end: string;
    title: string;
    description: string;
    keywords?: string[]
  }
}

interface Props {
  posts: Post[];
}

function Timeline({ posts }: Props) {
  return (
    <div className="timeline">
      {posts.map(post => (
        <TimelineItem key={post.fields.slug} post={post} />
      ))}
    </div>
  )
}

export default Timeline
