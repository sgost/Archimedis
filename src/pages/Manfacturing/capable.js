import React from "react";
import "../../styles/Manfacture/Capable.css";
import { graphql, useStaticQuery } from "gatsby";

const Capable = () => {
    const data = useStaticQuery(graphql`
    query {
      Capables: file(relativePath: {eq: "Manfacturing/capabilities.md"}) {
        id
        childMarkdownRemark {
          frontmatter {
            Capabilities {
              id
              capabilitiestitle
              capabilitiesdesc
              capabilitiescards {
                id
                capabilitiescardtitle
                capabilitiescardid
                capabilitiescarddesc
                image {
                  childImageSharp {
                    fluid {
                      src
                    }
                  }
                }
                capabilitiesminicards {
                  id
                  capabilitiesminicardstitle
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
    }
  `)
    return (
        <>
            {data.Capables.childMarkdownRemark.frontmatter.Capabilities.map(Capabilitiess =>
                <div id="capable">
                    <p>{Capabilitiess.capabilitiestitle}</p>
                    <p>{Capabilitiess.capabilitiesdesc}</p>
                    <div id="capable_container">
                        {Capabilitiess.capabilitiescards.map(capabilitiescardss =>
                            <>
                                <div className="capable_container_cards" id={capabilitiescardss.capabilitiescardid}>
                                    <div id="capable_container_cards_block1">
                                        <div id="capable_container_cards_matter">
                                            <h1 id="c_c_title">{capabilitiescardss.capabilitiescardtitle}</h1>
                                            <p id="c_c_matter">{capabilitiescardss.capabilitiescarddesc}</p>
                                            <div id="capable_container_cards_block">
                                                <p id="block_title">Available as</p>
                                                <div id="capable_container_cards_block_card_container">
                                                    {capabilitiescardss.capabilitiesminicards.map(capabilitiesminicardss =>
                                                        <>
                                                            <div id="capable_container_cards_block_card_container_blocks">
                                                                <img src={capabilitiesminicardss.image.childImageSharp.fluid.src} alt="img" />
                                                                <p>{capabilitiesminicardss.capabilitiesminicardstitle}</p>
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="capable_container_cards_block2">
                                        <img src={capabilitiescardss.image.childImageSharp.fluid.src} alt="img" />
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
export default Capable;