import styled from "styled-components";

type props={
    globalTheme:'dark' | 'light'
}
export const Container=styled.div<props>`
height: 100%;
transition: all eas .3s;
background-color:${props=>props.globalTheme === 'light' ? '#fff' : '#000'};
main{
    color: ${props=>props.globalTheme === 'light' ? 'auto' : 'grey'};
   }

`

export const Main=styled.main`
padding:40px 22px;
min-height: 100vh;
color: auto;


`