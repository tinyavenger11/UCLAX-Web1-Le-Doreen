import styled from "styled-components";
import PropTypes from "prop-types";

import Accolades from "./Accolades/Accolades";

const StaffMember = ({ member }) => {
    const { name, image, yearStarted } = member;

    return (
        <StaffMemberStyled>
            <img src={image} alt={name} />
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

    .bottom {
        padding: 20px;
        text-align: center;
        color: #2064b2;
    }

    h6 {
        color: #5c5b5c;
        background-color: #cfced3;
        text-align: center;
        padding: 5px 10px;
        margin: 0px;
    }
`;
