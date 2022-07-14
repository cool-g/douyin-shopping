import styled from "styled-components";
import style from '@/assets/styles/global-style'

export const List = styled.div`
    margin-top:.3125rem;
    margin-bottom:.9375rem;
    width:95%;
    margin:auto;
`
export const ListItem = styled.div`
    margin-bottom:.75rem;
    background-color:white;
    border-radius:.5rem;
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
        input {
            margin-right:.625rem;
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
                margin-bottom:.625rem;
                display:flex;
                justify-content:space-between;
                .title {
                    font-size:1.0625rem;
                    color:black;
                    font-weight:600;
                    white-space:nowrap;                    
                    width:10rem;
                    overflow:hidden;
                    text-overflow:ellipsis;
                    -webkit-line-clamp:1;
                }
                >span{
                    padding:.125rem .5rem;
                    background-color:#f6f6f6;
                }
                .right {
                    text-align:right;
                    flex:3;
                }
                .price {
                    font-size:1.25rem;
                    color:${style["primary-colour"]};
                    font-weight:700;
                    span{
                        font-size:.9375rem;
                    }
                }
                /* .count {
                    background-color:transparent;
                    border:.0625rem #e1e1e1 solid;
                    padding:.3125rem .75rem;
                    color:black;
                    font-size:1rem;
                    border-radius:.3125rem;
                } */
            }
        }  
    }
`