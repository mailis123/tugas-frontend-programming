import styled, {css} from "styled-components";


const Button = styled.button`
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    color: #fff;
    baground-color: #4361ee;
    cursor: pointer;

    baground-color: ${(props) => 
       props.theme.colors[props.variant] || props.theme.colors["primary"]};
   
       ${({ size, theme }) =>
    theme.size[size] || theme.size.md};

    //props full
    ${ (props) =>
            props.full &&
            css`
            display: block;
            widt: 100%;
            `}
`;

export default Button;