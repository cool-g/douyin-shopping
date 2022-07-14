import styled from "styled-components";
import style from '@/assets/styles/global-style'

export const Wrapper = styled.div`
    width:95%;
    margin:auto;
    display:flex;
    padding:5px 5px;
    background-color:#ffffff;
    border-radius:10px;
    margin-bottom:15px;
`

export const Lives = styled.div`
    flex:1;
    margin-right:5px;
    /* border-right:1px solid  */
    position: relative;
    &:after {
        content:"";
        display:block;
        width: 2px;
        height:91px;
        background-color:#f3f3f3;
        position:absolute;
        top:13px;
        left:169px;
    }
    .title{
        font-size:18px;
        color:black;
        font-weight:bold;
        margin-bottom:5px;
        span {
            font-size:13px;
            color:white;
            background-color:${style["primary-colour"]};
            padding:2px 8px;
            margin-left:8px;
            font-weight:200;
            border-radius:10px 10px 10px 0;
        }
    }
    .lives{
        display:flex;
        justify-content:space-around;
        img{
            width:65px;
            height:65px;
            border-radius:50%;
            border:2px solid ${style["primary-colour"]};
            padding:2px;
        }
        span{
            display:inline-block;
            width:65px;
            color:white;
            padding:1px 5px;
            height:20px;
            background-color:${style["primary-colour"]};
            overflow:hidden;
            text-overflow:ellipsis; 
            white-space:nowrap;
            position:relative;
            top:-12px;
            border-radius:5px;
        }
    }
`

export const Brands = styled.div`
   flex:1;
    .title{
        font-size:18px;
        color:black;
        font-weight:bold;
        margin-bottom:5px;
        span {
            font-size:13px;
            color:white;
            background-color:black;
            padding:2px 8px;
            margin-left:8px;
            font-weight:200;
            border-radius:10px 10px 10px 0;
        }
    }
    .brands{
    display:flex;
    justify-content:space-around;
    img{
        width:65px;
        height:70px;
        border-radius:10px;
    }
    span{
        color:black;
        padding:1px 5px;
        height:20px;
        background-color:#f6f6f6;
        position: relative;
        top:-15px;
        left:-5px;
        border-radius:5px;
    }
}
`
