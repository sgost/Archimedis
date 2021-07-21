import React, { useState, useEffect } from "react";
import "../../styles/Products/foodsupplements.css";
import { graphql, useStaticQuery } from "gatsby";

export const Foodsupplements = ({ foodsupliments }) => {

  return (
    <>
      {foodsupliments && foodsupliments.map(foodsuplimentss =>
        <div id="foodsupplements" key={foodsuplimentss.id}>
          <p>{foodsuplimentss.title}</p>
          <p>{foodsuplimentss.description}</p>
          <div id="foodsupplements_container">
            {foodsuplimentss && foodsuplimentss.foodsuplimentscards.map(foodsuplimentscardss =>
              <>
                <div className="foodsupplements_container_cards" id={foodsuplimentscardss.foodsuplimentsid} key={foodsuplimentscardss.id}>
                  <div id="foodsupplements_container_cards_block1">
                    <div id="foodsupplements_container_cards_matter">
                      <h1 id="c_c_title">{foodsuplimentscardss.title}</h1>
                      <p id="c_c_matter">{foodsuplimentscardss.description}</p>
                    </div>
                  </div>
                  <div id="foodsupplements_container_cards_block2">
                    <img src={foodsuplimentscardss.Image.childImageSharp.fluid.src} alt="img" />
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
const FoodsupplementsPrev = props => {
  const [FoodsupplementsPre, setFoodsupplementsPre] = useState({});
  const data = useStaticQuery(graphql`
    query{
        file(relativePath: {eq: "Products/foodsuplements.md"}) {
            id
            childMarkdownRemark {
              frontmatter {
                foodsupliments {
                  id
                  title
                  description
                  foodsuplimentscards {
                    id
                    title
                    description
                    foodsuplimentsid
                    Image {
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
  useEffect(() => {
    if (data.file) {
      setFoodsupplementsPre(data.file.childMarkdownRemark.frontmatter);
    }
  }, [data.file]);
  return (
    <>
      {
        data.file &&
        <Foodsupplements
          foodsupliments={FoodsupplementsPre.foodsupliments}
        />
      }
    </>
  )
}
export default FoodsupplementsPrev;