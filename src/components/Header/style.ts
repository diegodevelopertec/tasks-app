
import { styled } from "styled-components";
import SystemDesign from "../../SystemDesign";

type Props={
    onMenu:boolean
}
export const HeaderBox=styled.header<Props>`
height: 90px;
background-color:${SystemDesign.primaryColor};
display: flex;
align-items: center;
justify-content: space-around;
box-shadow: 0 0 22px #000;
.left{
    color: #fff;
    font-size: 30px;
}

.right{
    .cx-close,.cx-on-mobile{
        display: none;
        .svg{
            height: 35px;
            stroke:${SystemDesign.secondaryColor};
          }
    }
    nav{
        a{
            font-size: 18px;
            transition: all ease .3s;
            color: #fff;
            margin:0 12px;
            &:hover{
                color: ${SystemDesign.secondaryColor};
                text-decoration: underline;
            }
        }
    }
}

@media screen and (max-width:950px){
    
    .right{
       .cx-on-mobile{
            display:${props=>props.onMenu === false ? 'flex' : 'none'};
        }
        nav{

            padding: 50px 12px;
            display:${props=>props.onMenu === true ? 'flex' : 'hidden'};
            position: fixed;
            top: 0;
            height: 100%;
            right: 0;
            transition: all ease .3s;
            left:${props=>props.onMenu === true ? 'auto' : '999px'};
            width: ${props=>props.onMenu === true ? '50vw' : '0'};
            bottom: 0;
            background-color: ${SystemDesign.primaryColor};
            box-shadow: 0 0 12px #000;
            .links{
                margin: 150px 0;
                display:${props=>props.onMenu === true ? 'flex' : 'none'};
                flex-direction: column;
                a{
                    margin: 8px 0;
                }

            }
            .cx-close{
             display:${props=>props.onMenu === true ? 'flex' : 'none'};
               justify-items: center;
                    .svg{
                        stroke: #fff;
                    }
            }
        }
    }
}

`