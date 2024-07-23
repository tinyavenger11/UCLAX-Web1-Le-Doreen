import styled from "styled-components";

import SingleEssay from "./SingleEssay.jsx";

const Essays = () => {
    return (
        <EssaysStyled>
            <h2>Essays</h2>

            <SingleEssay
                question={`Explain the difference between HTML, CSS and JavaScript.

`}
            >
                <p>
                    <b>HTML</b> (Hyper Text Markup Language) is used to build
                    the basic structure of the web page.
                </p>
                <p>
                    <b>CSS</b> (Cascading Style Sheets) is used to paint
                    (design) that structure. Makes it look pretty.
                </p>
                <p>
                    <b>JavaScript</b> adds the behavior to a web page. Provides
                    action.
                </p>
                <p>
                    To use a simple metaphor of the human body, HTML is like the
                    skeleton, CSS is like the skin, and JavaScript is like the
                    central nervous system.
                </p>
            </SingleEssay>
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
