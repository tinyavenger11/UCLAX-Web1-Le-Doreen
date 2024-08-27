import React from "react";
import styled from "styled-components";

/* Images ---------------------------*/
import logoUrl from "./reeny-logo-white.png";

const SiteLogo = () => {
    return (
        <SiteLogoStyled className="SiteLogo">
            <img src={logoUrl} alt="CrossFit Decimate Logo" />
        </SiteLogoStyled>
    );
};

export default SiteLogo;

const SiteLogoStyled = styled.div`
    color: #ffffff;
    width: 100%;
    height: 100%;

    img {
        width: 100%;
        height: auto;
    }
`;
