 import styled from "styled-components";

 const StyledFooter = styled.div`
    background-color: #4361ee;
    color: #fff;
    padding: 1rem;
    text-align: center;

    h2 {
        margin-bottom: 1rem;
    }
    
    p {
        margin-bottom: 1rem;
    }

    @media (min-widht: 768px) {
        background-color: #4cc9f0;
        color: darkgoldenrod;
    }

    @media (min-widht: 992px) {
        background-color: aqua;
        color: black;
    }
`;

export default StyledFooter;