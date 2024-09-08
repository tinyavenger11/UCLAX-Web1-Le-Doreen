import SingleEssay from "./SingleEssay.jsx";

const Essay1 = () => {
    return (
        <SingleEssay
            question={`Explain the difference between HTML, CSS and JavaScript.`}
        >
            <b>HTML</b> (hyper text markup language) is used to build the basic
            structure of the web page. It is the content of the website, and is
            necessary for search engines to be able to locate what you're
            looking for.
            <br></br>
            <br></br>
            <b>CSS</b> (cascading style sheets) is used to paint (design) that
            structure. Essentially, it makes the website look pretty. It is not
            needed per se, but no one will be interested in visiting a webpage
            that is nothing but black text against a white background. Anytime
            you see text in a color other than black and a background other than
            white, that's CSS.
            <br></br>
            <br></br>
            <b>JavaScript</b> adds behavior to a web page. It provides action so
            you know that the page is reacting to what you are doing with your
            mouse and keyboard. Any response you see from the webpage when you
            click a button or hover over text is provided by JavaScript.
            <br></br>
            <br></br>
            To use a simple metaphor of the human body, HTML is like the
            skeleton, CSS is like the skin, and JavaScript is like the central
            nervous system.
        </SingleEssay>
    );
};

export default Essay1;
