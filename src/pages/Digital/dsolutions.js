import React from "react";
import "../../styles/Digital/dsolutions.css";
import { graphql, useStaticQuery } from "gatsby";

const Dsolutions = () => {
    const data = useStaticQuery(graphql`
    query{
        Dsolution:   file(relativePath: {eq: "Digital/dsolution.md"}) {
            id
            childMarkdownRemark {
              frontmatter {
                dsolution {
                  id
                  dsolutiontitle
                  dsolutiondesc
                  dsolutioncards {
                    id
                    dsolutioncardid
                    dsolutioncardtitle
                    dsolutioncarddesc
                    dsolutionminicardsmaintitle
                    dsolutionminicardsmaintitle2
                    Image {
                        publicURL
                    }
                    dsolutionminicards {
                      id
                      dsolutionminicardstitle
                      dsolutionminicardstitle2
                      dsolutionminicardsimg {
                        publicURL
                      }
                    }
                    dsolutionminicards2 {
                        id
                        minicardd
                        minicardd2
                        Image {
                          publicURL
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
            {data.Dsolution.childMarkdownRemark.frontmatter.dsolution.map(dsolutions =>
                <div id="dsolutions" key={dsolutions.id}>
                    <p>{dsolutions.dsolutiontitle}</p>
                    <p>{dsolutions.dsolutiondesc}</p>
                    {dsolutions.dsolutioncards.map(dsolutioncardss =>
                        <>
                            <div id="dsolutions_container_main" key={dsolutioncardss.id}>
                                <div id="dsolutions_container">
                                    <div className="dsolutions_container_cards" id={dsolutioncardss.dsolutioncardid}>
                                        <div id="dsolutions_container_cards_block1">
                                            <div id="dsolutions_container_cards_matter">
                                                <h1 id="c_c_title">{dsolutioncardss.dsolutioncardtitle}</h1>
                                                <p id="c_c_matter">{dsolutioncardss.dsolutioncarddesc}</p>
                                            </div>
                                        </div>
                                        <div id="dsolutions_container_cards_block2">
                                            <img src={dsolutioncardss.Image.publicURL} alt="img" />
                                        </div>
                                    </div>
                                </div>

                                <div id="dsolutionsassurance">

                                    <div id="dsolutions_matter">
                                        <p id="dsolutionsassurance_title">{dsolutioncardss.dsolutionminicardsmaintitle}</p>
                                        <div id="dsolutionsassurance_container">
                                            {dsolutioncardss.dsolutionminicards.map(dsolutionminicardss =>
                                                <>
                                                    <div id="dsolutionsassurance_container_card1" key={dsolutionminicardss.id}>
                                                        <img src={dsolutionminicardss.dsolutionminicardsimg.publicURL} alt="img" />
                                                        <p id="p4_c_dis">{dsolutionminicardss.dsolutionminicardstitle}<span>{dsolutionminicardss.dsolutionminicardstitle2}</span></p>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    <div id="dsolutions_matter2">
                                        <p id="dsolutionsassurance_title2">{dsolutioncardss.dsolutionminicardsmaintitle2}</p>
                                        <div id="dsolutionsassurance_container2">
                                            <div id="dash_container">
                                                {dsolutioncardss.dsolutionminicards2.map(dsolutionminicards2s =>
                                                    <>
                                                        <div id="dash_container_card1" key={dsolutionminicards2s.id}>
                                                            <img src={dsolutionminicards2s.Image.publicURL} alt="img" />
                                                            <p id="p4_c_dis">{dsolutionminicards2s.minicardd}<span>{dsolutionminicards2s.minicardd2}</span></p>
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            )}
        </>
    )
}

export default Dsolutions;