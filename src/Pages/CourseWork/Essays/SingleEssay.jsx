import styled from "styled-components";
import PropTypes from "prop-types";

const SingleEssay = ({ question, children }) => {
    return (
        <SingleEssayStyled>
            <h3>{question}</h3>
            <div className="content">{children}</div>
        </SingleEssayStyled>
    );
};

export default SingleEssay;

// prop types
SingleEssay.propTypes = {
    question: PropTypes.string.isRequired,
    children: PropTypes.any,
};

const SingleEssayStyled = styled.div`
    margin: 20px 0px;
    border: solid 2px #2064b2;

    h3 {
        background-color: #2064b2;
        color: white;
        font-size: 20px;
        padding: 10px 20px;
        margin: 0px;
    }

    .content {
        background-color: white;
        /* color: #2064b2; */
        padding: 20px;
    }
`;
