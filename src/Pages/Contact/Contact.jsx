import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

// components
import Inset from "@/Common/PagesLayout/Inset.jsx";
import SubmissionList from "./SubmissionList";
import Form from "./Form";

const Contact = () => {
    const [submissions, setSubmissions] = useState([]);

    const getSubmissions = async () => {
        const { data } = await axios.get("http://localhost:4059/submissions");
        setSubmissions(data);
    };

    useEffect(() => {
        getSubmissions();
    }, []);

    return (
        <ContactStyled>
            <Inset>
                <h1>Contact</h1>
                <h6>
                    Thanks for checking out my portfolio! I'd love to hear from
                    you. If you are interested in hiring me for a project or,
                    you know, just telling me how awesome my work is, feel free
                    to drop me a line!
                </h6>
                <Form getSubmissions={getSubmissions} />
                <SubmissionList submissions={submissions} />
            </Inset>
        </ContactStyled>
    );
};

export default Contact;

const ContactStyled = styled.div``;
