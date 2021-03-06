import React, { useState, useEffect } from "react";
import "../../styles/Home/Wedo.css";
import arrow from "../../images/arow.svg";
import { graphql, useStaticQuery, Link } from "gatsby";

export const Wedo = ({ wedotitle, wedo, html }) => {
  return (
    <>
      <div id="wedo">
        <h1>{wedotitle}</h1>
        <div id="wedo_container">
          {wedo && wedo.map((wedos, i) =>
            <div id="wedo_container_cards" key={i}>
              <div id="wedo_container_cards_block1">
                <div id="wedo_container_cards_matter">
                  <h1>{wedos.wedoname}</h1>
                  <p>{wedos.wedodesc}</p>
                  <Link to={wedos.link}><button>View More<img src={arrow} alt="img" /></button></Link>
                </div>
              </div>
              <div id="wedo_container_cards_block2">
                {(wedos.wedoimg.publicURL) ? (
                  <img src={wedos.wedoimg.publicURL} alt={wedos.alt_tag} />
                ) : (<img src={wedos.wedoimg} alt={wedos.alt_tag} />)}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
const WedoPrev = props => {
  const [statusPre, setStatusPre] = useState({});
  const data = useStaticQuery(graphql`
  query{
  file(relativePath: {eq: "wedo.md"}) {
          id
          childMarkdownRemark {
            frontmatter {
              wedotitle
              wedo {
                id
                wedoname
                wedodesc
                link
                alt_tag
                wedoimg {
                  publicURL
                }
              }
            }
          }
        }
  }`)
  useEffect(() => {
    if (data.file) {
      setStatusPre(data.file.childMarkdownRemark.frontmatter);
    }
  }, [data.file]);
  return (
    <>
      {
        data.file &&
        <Wedo
          wedotitle={statusPre.wedotitle}
          wedo={statusPre.wedo}
        />
      }
    </>
  )
}
export default WedoPrev;