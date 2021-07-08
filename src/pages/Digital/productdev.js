import React from "react";
import "../../styles/Digital/productdev.css";
import { graphql, useStaticQuery } from "gatsby";

const Productdev = () => {
    const data = useStaticQuery(graphql`
    query{
        Prodev:  file(relativePath: {eq: "Digital/productdev.md"}) {
            id
            childMarkdownRemark {
              frontmatter {
                prodev {
                  id
                  pdid
                  pdclass
                  title
                  description
                  prodevminicontainer {
                    id
                    pdcontid
                    title
                    Image {
                      publicURL
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

            <div id="productdev">
                {data.Prodev.childMarkdownRemark.frontmatter.prodev.map(prodevs =>
                    <>
                        <div id="quality_matter">
                            <p className={prodevs.pdclass} id={prodevs.pdid}>{prodevs.title}</p>
                            <p id="productdev_desc">{prodevs.description}</p>
                            <div id="productdev_container">
                                {prodevs.prodevminicontainer.map(prodevminicontainers =>
                                    <>
                                        <div className="productdev_container_card1" id={prodevminicontainers.pdcontid} key={prodevminicontainers.id}>
                                            <img src={prodevminicontainers.Image.publicURL} alt="img" />
                                            <p id="p4_c_dis">{prodevminicontainers.title}</p>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>

        </>
    );
};
export default Productdev;