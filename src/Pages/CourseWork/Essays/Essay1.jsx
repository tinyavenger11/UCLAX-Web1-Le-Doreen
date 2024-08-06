import SingleEssay from "./SingleEssay.jsx";

const Essay1 = () => {
    return (
        <SingleEssay
            question={`Explain the difference between HTML, CSS and JavaScript.`}
        >
            <p>
                <b>HTML</b> (Hyper Text Markup Language) is used to build the
                basic structure of the web page.
            </p>
            <p>
                <b>CSS</b> (Cascading Style Sheets) is used to paint (design)
                that structure. Makes it look pretty.
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
    );
};

export default Essay1;
