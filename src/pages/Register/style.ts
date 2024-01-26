import styled from "styled-components";
import SystemDesign from "../../SystemDesign";


export const Page=styled.div`
display: flex;
justify-content: center;
padding: 200px 0;
form{
    width: 500px;
    padding: 22px;
    border: 1px solid grey;
    h3{
        font-size: 29px;
        margin: 12px 0;
    }
    p{
        margin-bottom: 30px;
    }
    .cx-input{
        margin: 12px 0;
        display: flex;
        align-items: center;
        label{
            width: 60px;
            margin-right: 8px;
            font-weight: grey;
        }
        input{
            flex: 1;
            padding: 12px 22px;
            &:focus{
                border: 2px solid ${SystemDesign.primaryColor};
            }
        }

    }
    .cx-btn{
        margin: 30px 0;
        display: flex;
        justify-content: center;
        button{
            width: 50%;
            background-color:#6895D2;
            color: #fff;
            padding: 20px 0;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: all ease .3s;
            &:hover{
                background-color: #0B60B0;
            }
        }
    }
}
@media screen and (max-width:700px) {
    form{
        .cx-input{
            flex-direction: column;
            label{
                width: auto;
                display: flex;
                align-self: self-start;
                margin-bottom:8px;
            }
            input{
                width: 100%;
            }
        }
    }
}  
`