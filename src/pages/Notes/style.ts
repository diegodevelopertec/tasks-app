import { styled } from "styled-components";
import SystemDesign from '../../SystemDesign';

type Props={
  activeFormNote:boolean
  bgThemeForm:'light' | 'dark'
}

export const Page=styled.div`
  padding: 100px 0;
  height: auto;
h2{
    font-size: 25px;
    color: grey;
}

.cx-top{
  display: flex;
  padding: 0 50px;
  justify-content: space-around;
    button{
        border: none;
        background-color: transparent;
        color: grey;
        font-family: 'Lato', sans-serif;
        cursor: pointer;
        display: flex;
        align-items: center;
        transition: all ease 0.3s;
        .svg{
          stroke: grey;
          height: 25px;
          margin-right: 7px;
        }

      &:hover{
        color: ${SystemDesign.primaryColor};
        .svg{
          stroke:${SystemDesign.primaryColor}
        }
      }
    }
}

.notes-box{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 20px;
    margin: 50px 0;
}


@media screen and (max-width:750px){
  .notes-box{
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}

@media screen and (min-width:750px) and (max-width:950px){
  .notes-box{
   grid-template-columns: repeat(3,1fr);
  }
}
`

export const FormNote=styled.div<Props>`
position:fixed;
z-index: 1;
display: ${props=>props.activeFormNote ? 'block':'hidden'};
width:  ${props=>props.activeFormNote ? '30vw':'0'};
left:  ${props=>props.activeFormNote ? 'auto':'auto'};
right: 0;
transition:all ease 0.3s;
background-color:${props=>props.bgThemeForm === 'light' ? '#fff':'#222'};
top: 12.34vh;
top: 0;
bottom: 0;
box-shadow: 0 0 20px #000;


.content{
  padding:  22px;
    .header{
      display:auto;
      justify-content: end;
        span{
          cursor: pointer;
          .svg{
            height: 35px;
            stroke:${SystemDesign.primaryColor};
          }
        }
  }
  .cx-in{
    margin: 9px 0;
    display:flex;
    flex-direction: column;
        label{
          color:${props=>props.bgThemeForm === 'dark' ? '#fff':'#222'};
          font-size: 18px;
        }
        input,textarea{
          padding: 12px 22px;
          width: 100%;
          margin: 5px 0;
          border: none;
          background-color: #DEDEDE;
          border-radius: 5px;
          &:focus{
              outline:2px solid ${SystemDesign.primaryColor}
          }
        }
        textarea{
          resize: none;
          height: 400px;
        }
   
    }
    .cx-btn{
      margin: 12px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      button{
        transition: all ease .3s;
        border: none;
        border-radius: 20px;
        background-color:#6895D2;
        padding: 9px 33px;
        width: 40%;
        cursor: pointer;
        color: #fff;
        &:hover{
          background-color: #0B60B0;
        }
      }
    }
}


@media screen and (max-width:690px){
  width:  ${props=>props.activeFormNote ? '100vw':'0'};
  top:${props=>props.activeFormNote ? '0':'100vh'};
  .header{
   margin: 14px 0;
  }
}
@media screen and (min-width:750px){
  width:  ${props=>props.activeFormNote ? '38vw':'0'};
  top: 0vh;

}
`

export const ButtoNewNote=styled.button`
height: 55px;
position: fixed;
right: 12px;
border: none;
width: 55px;
background-color: ${SystemDesign.primaryColor};
box-shadow:0 0 22px #000;
bottom: 70px;
display: flex;
justify-content: center;
cursor: pointer;
align-items: center;
border-radius: 100%;
span{
  color: #fff;
  font-size: 45px;
}
`