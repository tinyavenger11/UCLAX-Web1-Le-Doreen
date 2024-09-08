import styled from "styled-components";

// Scripts
import "./scripts/index.js";

// React Components
import ReactComponent from "./ReactComponent";

const Fundamentals = () => {
    return (
        <FundamentalsStyled>
            <h2>JavaScript Fundamentals</h2>

            <ReactComponent title="Foundation" showDisc={true} />
            <ReactComponent title="Foundation and Empire" />
            <ReactComponent title="Second Foundation" />
        </FundamentalsStyled>
    );
};

export default Fundamentals;

const FundamentalsStyled = styled.div``;
