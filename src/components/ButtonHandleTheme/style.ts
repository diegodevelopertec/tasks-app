import SystemDesign from "../../SystemDesign";
import styled from "styled-components";



type Props={
    activeTheme:boolean,
    
}
export const Box=styled.span`
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 10px;
    top: 20vw;


    @media screen and (max-width:690px) {
       top: 90vw;
       right: 0;
      } 

`

export const Button=styled.button<Props>`
        box-shadow:  0 0 5px #000;
        height: 45px;
        background-color: ${props=>props.activeTheme ?`${SystemDesign.primaryColor}` :  '#EDEDEE'};
        width: 45px;
        padding: 6px;
        border: none;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        .svg{
          height: 25px;
          width: 25px;
        }

        &:nth-child(1){
           border-bottom: 1px solid  #aaa;
           border-top-right-radius: 55%;
           border-top-left-radius: 55%;
        }
        &:nth-child(2){
           border-bottom-right-radius: 55%;
          border-bottom-left-radius: 55%;
        }

        @media screen and (max-width:690px) {
         padding-right: 12px;
         width: auto;
         justify-content:end;
         align-items: center;
         &:nth-child(1){
           border-top-left-radius: 70%;
           border-top-right-radius: 0%;
          
        }
        &:nth-child(2){
           border-bottom-left-radius: 70%;
           border-bottom-right-radius: 0%;
          
        }
         .svg{
           height: 20px;
         }
      
        } 

`
