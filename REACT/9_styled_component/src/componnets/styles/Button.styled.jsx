import styled from "styled-components"

const Button = styled.button`
background-color : ${({bg}) => bg || "#fff" } ;
color:  ${({color}) => color || "#fff" } ;
border : 1px solid #AF3953;
border-radius : 5px;
padding : 1rem 1.1rem;
font-size: 1.1rem;
/* margin-right: 0.5rem; */
margin: 2rem 0.5rem;
box-shadow : 5px 5px 10px rgba(0,0,0,0.9) ; 
cursor : pointer;
&:hover {
    opacity : 0.9;
    transform : scale(0.95)

}








`






export default Button ; 
