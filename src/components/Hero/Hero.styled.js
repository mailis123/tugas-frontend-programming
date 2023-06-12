import styled from "styled-components";

const Container = styled.div`
    margin: 5rem auto;
    padding: 1rem;

    @media screen and (min-width: 768px){
        margin: 2rem auto;
    }

    @media screen and (min-width: 992px) {
        max-width: 1200px;
    }
`
// styled component Hero
const StyledHero= styled.section`
    article {
        margin-bottom: 1rem;
    }

    h2 {
        color: #4361ee;
        margin-bottom: 1rem;
        font-size: 2.44;
    }

    h3 {
        color: #b5179e;
        margin-bottom: 1rem;
        font-size: 1.59rem;
    }

    p {
        color: #64748b;
        margin-bottom: 1rem
    }

    img {
        max-width: 100%;
        height: auto;
        border-radius: 25px;
    }

    @media (min-width: 768px) {
        margin: 2rem auto;

        section {
            align-items: center;
        }

        article {
            padding: 2.7rem;
            flex-basis: 50%;
        }

        aside {
            flex-basis: 50%;
        }

        h3 {
            color: cadetblue;
        }
    }

    @media (min-width: 992px) {
        max-width: 1200px;
        
        section {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            text-align: left;
        }

        article {
            flex-basis: 40%;
        }

        aside {
            flex-basis: 60%;
        }
    }
`;

export default StyledHero;
export {Container};