import React from "react";

import UseFetchData from "../../../hooks/UseFetch";
import Carousel from "../../../components/carousel/Carousel";

const Similar = ({ mediaType, id }) => {
    const { data, loading, error } = UseFetchData(`/${mediaType}/${id}/similar`);

    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

    return (
        <Carousel
            title={title}
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Similar;