import React, { Fragment } from "react"
import { graphql, Link } from "gatsby"
import SEO from "../seo"
import {
  BlogContainer,
  AuthorInfo,
  BlogContent,
  TagsList
} from '../Blog/styles';
import Nav from "../../pages/nav";
import Contact from "../../pages/Home/contact";
import Footer from "../../pages/Home/footer";
import right from "../../images/next.svg";
import left from "../../images/prev.svg";

export const CasePost = ({
  fields,
  author_image,
  author,
  bio,
  Link_preview,
  Link_next,
  date,
  title,
  html,
  tags,
  preview
}) => {

  // const content = data.markdownRemark;

  return (
    <Fragment>
      <Nav/>
      <BlogContainer>
      <div id="Link_arrows">
          <Link to={Link_preview} id="arrow"><img src={right} id="left_arrow" className="arrow" alt="img"/></Link>
          <Link to={Link_next} id="arrow"><img src={left} id="left_arrow" className="arrow" alt="img"/></Link>
        </div>
        <AuthorInfo>
          <div className="author_image">
            <img src={author_image} alt={author} />
          </div>
          <div className="author_info">
            <h4>{author}</h4>
            <span>{bio}</span>
            <div>
              {
                fields && <span>{fields.readingTime.text} &middot; </span>
              }
              <span>{date}</span>
            </div>
          </div>
        </AuthorInfo>
        <BlogContent>
          <h2 className="blogTitle">{title}</h2>
          {
            preview ? <div>{html}</div> : <div dangerouslySetInnerHTML={{ __html: html }} />
          }
        </BlogContent>
        {
          tags &&
          <TagsList>
            Tagged with
            {
              tags.map((type, i, arr) => {
                let divider = i<arr.length-1 && <>, </>;
                return (
                  <span key={type}>{type}{divider}</span>
                )
              })
            }
            {/* {
              content.frontmatter.tags.map(tag => <span>{tag}</span>)
            } */}
          </TagsList>
        }
      </BlogContainer>
      <Contact/>
      <Footer/>
    </Fragment>
  )
}

const Case = ({ data }) => {

  const { Casepost: post } = data;

  const seoData = post.frontmatter.seo;

    const authorImage = post.frontmatter.author_image.publicURL;
    const preview_Image = post.frontmatter.previewImage.publicURL;

  return (
    <Fragment>
      <SEO title={seoData.title} description={seoData.description} keywords={seoData.keywords} />
      <CasePost
        fields={post.fields}
        author_image={authorImage}
        previewImage={preview_Image}
        author={post.frontmatter.author}
        bio={post.frontmatter.bio}
        Link_preview={post.frontmatter.Link_preview}
        Link_next={post.frontmatter.Link_next}
        date={post.frontmatter.date}
        title={post.frontmatter.title}
        html={post.html}
        tags={post.frontmatter.tags}
        preview={false}
      />
    </Fragment>
    )
}

export default Case

export const query = graphql`
  query($slug: String!) {
    Casepost: markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
        readingTime {
          text
        }
      }
      frontmatter {
        author
        author_image {
          publicURL
        }
        previewImage {
          publicURL
        }
        bio
        Link_preview
        Link_next
        date(formatString: "MMMM DD, YYYY")
        title
        tags
        seo {
          title
          description
          keywords
        }
      }
      html
    }
    seoData: file(relativePath: {eq: "seoBlog.md"}) {
      childMarkdownRemark {
        frontmatter {
          title
          description
          keywords
        }
      }
    }
  }
`
