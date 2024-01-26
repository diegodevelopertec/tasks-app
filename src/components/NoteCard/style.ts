import styled from "styled-components";

type Props={
    bgTheme:'dark' | 'light'
}

export const Box=styled.div<Props>`
border: 1px soid #aaa;
background-color:${props=>props.bgTheme === 'light' ? '#DEDEDE' : '#222'};
padding: 40px;
border-radius: 5px;
.top{
    .btns{
        display: flex;
        justify-content: end;
       span{
        margin: 0 6px;
        cursor: pointer;
         .svg{
           height: 30px;
          stroke: grey;
         }
       }
    }
}
h3{
    margin: 12px 0;
}
span{
    font-size: 12px;
    
}

@media screen and (max-width:750px){
  width: 100%;
}
`