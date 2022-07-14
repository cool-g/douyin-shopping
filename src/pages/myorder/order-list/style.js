import styled from "styled-components";
import style from '@/assets/styles/global-style'

export const OrderListWrapper = styled.div`
    width:95%;
    margin:auto;
    background-color:#f6f6f6;
    margin-bottom:.625rem;
    /* margin-top:8.5rem; */
    h3 {
        text-align:center;
        letter-spacing:.1875rem;
        font-size:1rem;
    }
`

export const NoteWrapper = styled.div`
    margin:.5rem;
    background-color:white;
    border-radius:1.25rem;
    padding:.9375rem;
    .listhead {
        height:1.1875rem;
        line-height:1.1875rem;
        display:flex;
        justify-content:space-between;
        font-size:1rem;
        color:black;
        font-weight:500;
        letter-spacing:.0625rem;
        .state {
            color:${style["primary-colour"]};
        }
    }
    .body{
        margin-top:.9375rem;
        display:flex;
        .img{
            display:block;
            width:6.25rem;
            height:6.25rem;
        }
        .body_right {
            flex:1;
            text-align:left;
            margin-left:1.25rem;
            .row {
                /* width:100%; */
                display:flex;
                justify-content:space-between;
                margin-bottom:.625rem;
                div{
                    flex-shrink:0;
                }
                .left {
                    flex:7;
                    font-size:1.0625rem;
                    color:black;
                    font-weight:600;
                    white-space:nowrap;                    
                    width:10rem;
                    overflow:hidden;
                    text-overflow:ellipsis;
                    -webkit-line-clamp:1;
                }
                .left_ {
                    flex:7;
                }
                .right {
                    text-align:right;
                    flex:3;
                }
            }
        }  
    }
    .foot {
        font-size:1.0625rem;
        color:black;
        font-weight:500;
        text-align:right;
        .totle {
            margin-bottom:.9375rem;
            span{
                font-weight:bolder;
            }
        }
        .btngroup{
            text-align:right;
            /* width:12.5rem; */
            display:flex;
            justify-content:flex-end;
            div{
                margin-left:.3125rem;
                button {
                    background-color: #ffffff;
                    border:.0625rem #666 solid;
                    padding:.3125rem .5rem;
                    border-radius:.3125rem;
                    font-size:.875rem;
                    &.active {
                        background-color:${style["primary-colour"]};
                        color:white;
                        border:0rem;
                    }
                }
            }
            
        }
    }
`

