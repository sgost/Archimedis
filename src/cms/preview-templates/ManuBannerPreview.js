import React from "react";
import PropTypes from "prop-types";
import { MBanner } from "../../pages/Manfacturing/mbanner";

const MBannerPreview = ({ entry }) => {

    const data = entry.getIn(["data"]).toJS();

    return (
        <div>
            <MBanner
                description={data.description}
            />
        </div>
    );
};

MBannerPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
};

export default MBannerPreview;