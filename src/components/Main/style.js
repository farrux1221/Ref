import styled from "styled-components";

export const Container = styled.div`
width: 100%;
background-color: #ccc;
height: 100vh;
`
export const Content = styled.div`
background-color: #fff;
margin: 20px;
padding: 20px;
border-radius: 4px;
box-shadow: 0 0 5px #555;
max-height: calc(100vh - 90px);
min-height: calc(100vh - 90px);
overflow-y: auto;
`