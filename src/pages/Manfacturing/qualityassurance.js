import React from "react";
import "../../styles/Manfacture/Qualityassurance.css";
import { graphql, useStaticQuery } from "gatsby";

export const Qualityassurance = ({ qualityassurance }) => {
  return (
    <>
      <div id="Qualityassurance">
        {qualityassurance && qualityassurance.map((qualityassurances, i) =>
          <div className="quality_matter" id={qualityassurances.QualityId} key={i}>
            <h1 id="Qualityassurance_title">{qualityassurances.title}</h1>
            <h2 id="Qualityassurance_desc">{qualityassurances.description}</h2>
            <div id="Qualityassurance_container">
              {qualityassurances.qualityassuranceminicontainer.map((qualityassuranceminicontainers, i) =>
                <div id="Qualityassurance_container_card1" key={i}>
                  <div id="Qualityassurance_container_card1_block1">
                    {(qualityassuranceminicontainers.image.publicURL) ?
                      <img src={qualityassuranceminicontainers.image.publicURL} alt="img" />
                      :
                      <img src={qualityassuranceminicontainers.image} alt="img" />
                    }
                    <p id="p4_c_dis">{qualityassuranceminicontainers.title}</p>
                  </div>
                  <div id="Qualityassurance_container_card1_block2">
                    <p id="p4_c_dis2">{qualityassuranceminicontainers.description}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
const QualityassurancePrev = props => {

  const data = useStaticQuery(graphql`
  query {
      file(relativePath: {eq: "Manfacturing/qualityassurance.md"}) {
          id
          childMarkdownRemark {
            frontmatter {
              qualityassurance {
                id
                title
                QualityId
                description
                qualityassuranceminicontainer {
                  id
                  title
                  description
                  image {
                    publicURL
                  }
                }
              }
            }
          }
        }
  }
`)

      const QualityassurancePre = data.file.childMarkdownRemark.frontmatter;

  return (
    <>
      {
        data.file &&
        <Qualityassurance
          qualityassurance={QualityassurancePre.qualityassurance}
        />
      }
    </>
  )
}
export default QualityassurancePrev;