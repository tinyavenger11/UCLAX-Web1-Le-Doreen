import styled from "styled-components";
import PropTypes from "prop-types";
import ModalImage from "react-modal-image";

import Accolades from "./Accolades/Accolades";

const StaffMember = ({ member }) => {
    const { name, imageSmall, imageLarge, yearStarted } = member;

    return (
        <StaffMemberStyled>
            {/* <img src={image} alt={name} /> */}
            <ModalImage
                small={imageSmall}
                medium={imageLarge}
                // alt="Hello World!"
            />
            <h6>{name}</h6>

            <div className="bottom">
                <p>
                    <br></br>
                    <b>Project Type:</b> <br></br>
                    {yearStarted}
                </p>

                {/* <Accolades accolades={accolades} /> */}
            </div>
        </StaffMemberStyled>
    );
};

export default StaffMember;

// prop-types
StaffMember.propTypes = {
    member: PropTypes.object.isRequired,
};

const StaffMemberStyled = styled.div`
    background-color: #efefef;
    color: black;

    img {
        width: 100%;
        display: block;
    }
    img.__react_modal_image__medium_img {
        max-height: none;
        max-width: 75%;
    }

    .bottom {
        padding: 20px;
        text-align: center;
        color: #2064b2;
    }

    h6 {
        color: #011744;
        background-color: #cfced3;
        text-align: center;
        padding: 5px 10px;
        margin: 0px;
    }
`;
