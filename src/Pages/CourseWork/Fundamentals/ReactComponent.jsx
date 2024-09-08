import styled from "styled-components";

const ReactComponent = ({ title, showDisc = true }) => {
    return (
        <ReactComponentStyled>
            <h4>{title}</h4>
            {showDisc && (
                <div>
                    Disclaimer: There's not a lot of action in this book. It's
                    mostly talking.
                </div>
            )}
        </ReactComponentStyled>
    );
};

export default ReactComponent;

const ReactComponentStyled = styled.div`
    border: solid 3px #2064b2;
    padding: 20px;
    margin: 30px 0px;
`;

const DisclaimerStyled = styled.p`
  color: blue
  margin: 20px 0px;
`;

/*---------------------------
JSX = JavaScript XML.
It allows us to write HTML elements.
It converts it to actual HTML.
---------------------------*/
