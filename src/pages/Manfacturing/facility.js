import React from "react";
import "../../styles/Manfacture/Facility.css";
import { graphql, useStaticQuery } from "gatsby";

export const Facility = ({ Facility }) => {

  return (
    <>
      {Facility && Facility.map(Facilitys =>
        <div id="facility" key={Facilitys.id}>
          <h1>{Facilitys.title}</h1>
          <h2>{Facilitys.description}</h2>
          <div id="facility_container">
            {Facilitys.Facilitycards.map((Facilitycardss, i) =>
              <div className="facility_container_cards" id={Facilitycardss.facilityid} key={i}>
                <div id="facility_container_cards_block1">
                  <div id="facility_container_cards_matter">
                    <h1 id="c_c_title">{Facilitycardss.title}</h1>
                    <p id="c_c_matter">{Facilitycardss.description}</p>
                    <div id="facility_container_cards_block">
                      {(Facilitycardss.description1 === "") ? (<></>) : (<li>{Facilitycardss.description1} <span style={{ fontWeight: `lighter` }}>{Facilitycardss.descriptionSpan1}</span></li>)}
                      {(Facilitycardss.description2 === "") ? (<></>) : (<li>{Facilitycardss.description2} <span style={{ fontWeight: `lighter` }}>{Facilitycardss.descriptionSpan2}</span></li>)}
                      {(Facilitycardss.description3 === "") ? (<></>) : (<li>{Facilitycardss.description3} <span style={{ fontWeight: `lighter` }}>{Facilitycardss.descriptionSpan3}</span></li>)}
                      {(Facilitycardss.description4 === "") ? (<></>) : (<li>{Facilitycardss.description4} <span style={{ fontWeight: `lighter` }}>{Facilitycardss.descriptionSpan4}</span></li>)}
                      {(Facilitycardss.description5 === "") ? (<></>) : (<li>{Facilitycardss.description5} <span style={{ fontWeight: `lighter` }}>{Facilitycardss.descriptionSpan5}</span></li>)}
                      {(Facilitycardss.description6 === "") ? (<></>) : (<li>{Facilitycardss.description6} <span style={{ fontWeight: `lighter` }}>{Facilitycardss.descriptionSpan6}</span></li>)}
                      {(Facilitycardss.description7 === "") ? (<></>) : (<li>{Facilitycardss.description7} <span style={{ fontWeight: `lighter` }}>{Facilitycardss.descriptionSpan7}</span></li>)}
                      {(Facilitycardss.description8 === "") ? (<></>) : (<li>{Facilitycardss.description8} <span style={{ fontWeight: `lighter` }}>{Facilitycardss.descriptionSpan8}</span></li>)}
                    </div>
                    <div id="fnblock">
                      {Facilitycardss && Facilitycardss.fnblock.map((fnblocks, i) =>
                        <div id="fnblock1" key={i}>
                          <p>{fnblocks.fnblocknme}</p>
                          <p1>{fnblocks.fnblockmtr}</p1>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div id="facility_container_cards_block2">
                  {(Facilitycardss.fimage.publicURL) ?
                    <img src={Facilitycardss.fimage.publicURL} alt="img" />
                    :
                    <img src={Facilitycardss.fimage} alt="img" />
                  }
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
const FacilityPrev = props => {
  
  const data = useStaticQuery(graphql`
    query {
        file(relativePath: {eq: "Manfacturing/facility.md"}) {
            id
            childMarkdownRemark {
              frontmatter {
                Facility {
                  id
                  title
                  description
                  Facilitycards {
                    id
                    facilityid
                    title
                    description
                    description1
                    description2
                    description3
                    description4
                    description5
                    description6
                    description7
                    description8
                    descriptionSpan1
                    descriptionSpan2
                    descriptionSpan3
                    descriptionSpan4
                    descriptionSpan5
                    descriptionSpan6
                    descriptionSpan7
                    descriptionSpan8
                    fnblock{
                      id
                      fnblocknme
                      fnblockmtr
                    }
                    fimage {
                      publicURL
                    }
                  }
                }
              }
            }
          }
    }
  `)

      const facilityPre = data.file.childMarkdownRemark.frontmatter;

  return (
    <>
      {
        data.file &&
        <Facility
          Facility={facilityPre.Facility}
        />
      }
    </>
  )
}
export default FacilityPrev;