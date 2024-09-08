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
                software. GitHub is an online SaaS service. Git is used for
                version control, helps you track changes over time, and allows
                you to roll things back, essentially providing you with the
                ultimate undo. GitHub is a community platform that provides
                collaboration tools, and is a space to share copies of Git
                repositories. Git can be used without GitHub, but GitHub cannot
                be used without Git. In order to sign up for our GitHub
                accounts, we had to first install Git on our computers.
            </SingleEssay>
            <SingleEssay
                question={`What is the difference between JQuery and React?
`}
            >
                jQuery and React are both popular JavaScript libraries used for
                building web applications, but they serve different purposes and
                have different approaches to building user interfaces. jQuery is
                the older library and is used for simpler tasks, such as
                interactivity on a static web page. React is used for more
                complicated tasks, like the user interface of a website.
                <br></br>
                <br></br>
                Changes made in jQuery traverse the entire tree, so it can
                potentially take much longer to render these changes. React, on
                the other hand, only re-renders the parts of the page that
                changed, avoiding unnecessary rendering of the unchanged DOM
                elements. jQuery is used for simple interaction with HTML
                elements. React is used for building more complicated user
                interfaces. All of our classwork has been in React.
            </SingleEssay>
            <SingleEssay
                question={`What is the difference between a Front-End and Back-End Developer?
`}
            >
                The short way of putting it is that front end is user interface,
                and back end is user experience.<br></br>
                <br></br>
                Front end developers design the physical appearance of website:
                fonts, colors, graphics, buttons, layout. This is more of a
                designer-type job.
                <br></br>
                <br></br>
                Back end developers create the structure and/or logic needed to
                make the website work. This is more of an engineer-type job.
                <br></br>
                <br></br>
                Basically, the front end developer's job is to make sure the
                website looks pretty, and the back end developer's job is to
                make sure the website works.
            </SingleEssay>
            <SingleEssay
                question={`In React, what are the different ways we can link to resources (e.g. Root Relative vs Document Relative)?
`}
            >
                <b>
                    When referring to root relative links, we start by typing @/
                </b>
                <br></br>
                <br></br>
                This link shows the location of the file in relation to the root
                folder - the home of all your files and documents. This is from
                a high level looking down.
                <br></br>
                <br></br>
                <b>
                    When referring to document relative links, we start by
                    typing ./ or ../
                </b>
                <br></br>
                <br></br>
                This link shows the location of the file in relation to the
                current document. Generally, we'd use these files if they were
                in the same folder or one above. This is from a lower level
                looking around or up.
                <br></br>
                <br></br>
                If you work on the 4th floor of an office building, how your
                mail is addressed to you depends on where the mail originates.
                If the sender is located outside your building, they will need
                to include your name and the full address of your office in
                order to send you anything. This is similar to a root relative
                link: all the information is needed since the documents are in
                different folders. On the other hand, if the sender is located
                in the same building, they would just need your name and floor
                number to get the mail successfully delivered to you. This is
                similar to a document relative link: only some information is
                needed since the two documents are essentially in the same
                folder.
            </SingleEssay>
            <SingleEssay
                question={`What is the difference between jpg, gif, png and svg images?
`}
            >
                When dealing with web images, the overall goal is efficiency. We
                want the website to look as good as possible and be as fast as
                possible. To that effect, we use different types of images to
                maximize the speed and quality of a website.
                <br></br>
                <br></br>
                <b>JPG:</b> joint photo experts group. This file type uses lossy
                compression for lighter files and supports millions of colors.
                It does not support transparency or animation. JPGs are ideal
                for uploading photography or digital presentations.
                <br></br>
                <br></br>
                <b>PNG:</b> portable network graphic. This file type is higher
                quality than a JPG but comes at a larger file size, so there is
                less speed. A PNG can support millions of colors, plus an
                additional channel for alpha (true) transparency. It uses
                lossless compression, similar to a zip file. It also supports
                256 colors (single channel).
                <br></br>
                <br></br>
                <b>GIF:</b> graphic interchange format. This file type supports
                animation and up to 256 bitmap colors. GIFs can support
                transparency, but not alpha (true) transparency, and can make
                images look flat due to the color limit.
                <br></br>
                <br></br>
                <b>SVG:</b> scalable vector graphic. This file type is best for
                images that are mathematically designed in a tool such as
                Illustrator. Resampling an SVG up or down does not cause it to
                lose quality, and it is ideal for logos, icons and symbols. SVG
                is a form of XML, so you can speak to it with JavaScript or CSS.
            </SingleEssay>
            <SingleEssay
                question={`Define the following Agile roles: Product Manager, Scrum Master, UX Designer, Developer/Engineer, QA/SDET, and DevOps.
`}
            >
                A product manager is responsible for the entire life cycle of a
                product or service, from initial idea to launch, and anything
                that might come after. They guide the development of the
                product, and act as a go-between for the business, technology,
                and design teams.
                <br></br>
                <br></br>A Scrum master is a leader who guides a development
                team through a project using the Scrum framework. Scrum masters
                act as team coaches during sprints to help continuously improve
                a product or service.
                <br></br>
                <br></br>A user experience (UX) designer combines research,
                strategy, and development to create digital products that are
                enjoyable, accessible, and easy to use. UX designers understand
                users' needs and use this information to come up with scenarios,
                develop personas, create prototypes, identify flaws in designs,
                and propose improvements.
                <br></br>
                <br></br>A developer or engineer is a professional who designs
                and builds products for organizations. This person can be a
                software developer, who designs and writes code, a development
                engineer, who designs and tests products, or a software
                engineer, who applies engineering principles to software.
                <br></br>
                <br></br>
                QA/SDET is a collaboration between Quality Assurance (QA) and
                Software Development Engineer in Test (SDET). They work together
                to ensure a product performs as expected, to find and eliminate
                bugs, and to make any improvements necessary before and after
                product launch.
                <br></br>
                <br></br>
                DevOps is a methodology that integrates the work of development
                and operations teams. The goal is to shorten the development
                life cycle and improve the quality and speed of software
                delivery. DevOps encourages collaboration between teams, which
                helps them respond better to customer needs, build better apps,
                and achieve goals faster.
            </SingleEssay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
