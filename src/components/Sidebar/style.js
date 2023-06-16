import styled from "styled-components";

export const Container = styled.div`
width: 100%;
max-width: 250px;
min-width: 250px;
background-color: #555;
height: 100vh;
text-align: center;
padding: 30px 10px;
`

export const Logo = styled.div`
font-size: 30px;
font-weight: bold;
color: green;
`

export const Menu = styled.div`
width: 100%;
display: flex;
flex-direction: column;
text-align: center;
margin-top: 50px;
a{
    margin-top: 20px;
    color: #fff;
    font-size: 20px;
}
.active{
    color: teal;
}
`