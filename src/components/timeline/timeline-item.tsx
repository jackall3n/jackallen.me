import React from "react"
import { Link } from "gatsby"
import { Post } from "./timeline"
import WhiteHatMedia from "../../../content/assets/white-hat-media.svg"
import RunThings from "../../../content/assets/run-things.svg"
import Inshur from "../../../content/assets/inshur.svg"
import CreativeTechnologies from "../../../content/assets/creative-technologies.svg"
import Fidelity from "../../../content/assets/fidelity.svg"
import Schoolcomms from "../../../content/assets/schoolcomms.svg"
import Travelling from "../../../content/assets/travelling.svg"
import AdventIT from "../../../content/assets/advent-it.svg"

export interface Event {
  title: string;
  date: string;
}

interface Props {
  post: Post;
}

const ICONS: Record<string, any> = {
  "/white-hat-media/": <WhiteHatMedia />,
  "/creative-technologies/": <CreativeTechnologies />,
  "/run-things/": <RunThings />,
  "/inshur/": <Inshur />,
  "/fidelity/": <Fidelity />,
  "/schoolcomms/": <Schoolcomms />,
  "/travelling/": <Travelling />,
  "/advent-it/": <AdventIT />,
}

function TimelineItem({ post }: Props) {
  const { frontmatter, fields } = post
  const { title, keywords } = frontmatter

  return (
    <Link to={frontmatter.slug || fields.slug} className="timeline-item">
      <div>
        <div className="timeline-item-icon">
          {ICONS[frontmatter.slug || fields.slug]}
        </div>
        <div className="timeline-item-title">{title}</div>
        <div className="timeline-item-keywords">
          {keywords?.map(k => <div key={k}>{k}</div>)}
        </div>
      </div>
    </Link>
  )
}

export default TimelineItem
