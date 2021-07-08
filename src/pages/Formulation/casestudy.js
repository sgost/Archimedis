import React from "react";
import "../../styles/Formulation/casestudy.css";
import arrow from "../../images/arow.svg";
import arrow2 from "../../images/blog_btn_blue.svg";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";

const Casestudy = () => {
  const data = useStaticQuery(graphql`
    query{
        Casestudy: file(relativePath: {eq: "Formulations/casestudy.md"}) {
            id
            childMarkdownRemark {
              frontmatter {
                Casestudy {
                  id
                  Casestudytitle
                  Casestudycards {
                    id
                    Casestudyname
                    Casestudydesc
                    Casestudyblockid
                    image {
                      childImageSharp {
                        fluid {
                          src
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
     `)
  return (
    <>
      {data.Casestudy.childMarkdownRemark.frontmatter.Casestudy.map(Casestudys =>
        <div id="casestudy">
          <h1>{Casestudys.Casestudytitle}</h1>
          <div id="casestudy_container">
            {Casestudys.Casestudycards.map(Casestudycardss =>
              <>
                <div className="casestudy_card" id={Casestudycardss.Casestudyblockid} key={Casestudycardss.id}>
                  <div id="casestudy_card_b1">
                    <img src={Casestudycardss.image.childImageSharp.fluid.src} alt="img" />
                  </div>
                  <div id="casestudy_card_b2">
                    <p>{Casestudycardss.Casestudyname}</p>
                    <p>{Casestudycardss.Casestudydesc}</p>
                    <Link to="../Formulation/Casecompo/"><button id="csbtn">View Case Study<img src={arrow} alt="img" id="blod_btn1" /><img src={arrow2} alt="img" id="blod_btn2" /></button></Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};
export default Casestudy;