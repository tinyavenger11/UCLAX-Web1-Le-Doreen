import styled from "styled-components";

import SingleEssay from "./SingleEssay.jsx";
import Essay1 from "./Essay1.jsx";

const Essays = () => {
    return (
        <EssaysStyled>
            <h2>Essays</h2>
            <Essay1 />
            <SingleEssay
                question={`What is the difference between Git and Github?

`}
            >
                The key difference between Git and GitHub is that Git is a free,
                open source version control tool that developers install locally
                on their personal computers, while GitHub is a pay-for-use
                online service built to run Git in the cloud. Git is a piece of
                software. GitHub is an online SaaS service. Git can be used
                without GitHub, but GitHub cannot be used without Git. In order
                to sign up for our GitHub accounts, we had to first install Git
                on our computers.
            </SingleEssay>
            <SingleEssay question={`Q3: Sample question...`}>
                Answer 3 goes here
            </SingleEssay>
            <SingleEssay question={`Q4: Sample question...`}>
                Answer 4 goes here
            </SingleEssay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
