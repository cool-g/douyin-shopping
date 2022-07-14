import styled from "styled-components";
import style from '@/assets/styles/global-style'

export const Wrapper = styled.div`
    margin-top:2.8125rem;
    background-color:#ffffff;
    .address{
        width:100%;
        border-top:.0625rem solid #f2f2f2;
        border-bottom:.1875rem dashed #7fb4f9;
        display:flex;
        padding:1.25rem .9375rem;
        justify-content:space-between;
        align-items:center;
        .left {
            /* flex:7; */
            display:flex;
            color:${style["primary-colour"]};
            font-weight:550;
            padding-left:1.25rem;
            position:relative;
            i {
                position:absolute;
                top:.375rem;
                left:.1875rem;
                font-size:.9375rem;
            }
        }
        .center {
            flex:6;
            margin-left:.3125rem;
            p{
                margin:.3125rem 0;
            }
            .detail {
                font-size:1.125rem;
                font-weight:bold;
                color:black;
                overflow:hidden;
                text-overflow:ellipsis; 
                white-space:nowrap;
            }
            .name{
                font-weight:bold;
                color:gray;
                margin-right:.625rem;
            }
        }
        .right {
            /* flex:3; */
            text-align:right;
            button {
                background-color:transparent;
                padding:.125rem .3125rem;
                border:.0625rem solid gray;
                border-radius:.3125rem;
            }
            span::after {
                content:'';
                display:block;
                width:.5rem;
                height:.5rem;
                border-right:.0625rem solid black;
                border-bottom:.0625rem solid black;
                transform:rotate(320deg);
            }
        }
    }
`