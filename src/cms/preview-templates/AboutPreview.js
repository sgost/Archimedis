import React from "react";
import PropTypes from "prop-types";
import About from "../../pages/Home/about";

const AboutPreview = ({ entry, getAsset }) => {

  const data = entry.getIn(["data"]).toJS();
  var image = entry.getIn(['data', 'aboutImg']);
  var getImage = getAsset(image);

  if (getImage) {
    var aboutImage = getImage.toString();
  }

  return (
    <div>
      <About
        abouttitle={data.abouttitle}
        aboutdesc={data.aboutdesc}
        aboutImg={aboutImage}
      />
    </div>
  );

};

AboutPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default AboutPreview;