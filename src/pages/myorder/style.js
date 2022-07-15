import styled from 'styled-components'
import style from '@/assets/styles/global-style'

export const OrderWrapper = styled.div`
    background-color:#f6f6f6;
    padding-top:8.5rem;
    .like {
        text-align:left;
        padding-left:.625rem;
        color:#010101;
        font-size:1.1875rem;
        font-weight:550;
        letter-spacing:.0625rem;
        margin:.625rem 0;
    }
    .head{
        position:fixed;
        top:0;
        width:99%;
        background-color:#ffffff;
        border-radius:1.25rem;
        z-index:999;
         .searchOrder {
            /* width:100%; */
            height:4.8125rem;
            padding:1.25rem .625rem;
            display:flex;
            justify-content:space-around;
            .goback{
                width:2.5rem;
                position:relative;
                i {
                    position:absolute;
                    top:.375rem;
                    left:.1875rem;
                    font-size:1.4375rem;
                }
            }
            .searchgroup{
                width:100%;
                position:relative;
                input {
                    width:95%;
                    height:2.1875rem;
                    border:0;
                    background-color:#f4f4f4;
                    border-radius:.625rem;
                    padding:.125rem 0 .125rem 2.5rem;
                    font-size:1.125rem;
                }
                i{
                    font-size:1.1875rem;
                    position:absolute; 
                    left:.625rem;
                    top:.4375rem;
                }
            }
            
            img {
                width:1.875rem;
                height:1.875rem;
            }
         }
         ul{
            background-color:#ffffff;
            width:100%;
            display:flex;
            overflow-x:auto;
            -webkit-overflow-scrolling:touch;
            // 隐藏滚动条
            scrollbar-width: none; /* firefox */
            -ms-overflow-style: none; /* IE 10+ */
            &::-webkit-scrollbar { // chrome safari
            display: none;
            }
            li{
                height:1.875rem;
                line-height:1.875rem;
                margin:0 .9375rem;
                font-size:1.125rem;
                float:left;
                flex-shrink:0;
                margin-bottom:1.875rem;
                position:relative;
                &.active{
                    color:black;
                    font-weight:bold;
                }
                &.active::after{
                    content:"";
                    display:block;
                    width:50%;
                    height:.1875rem;
                    background-color:${style["primary-colour"]};
                    position:absolute;
                    top:2.25rem;
                    left:15%;
                }
                span{
                    display:inline-block;
                    width:.9375rem;
                    height:.9375rem;
                    text-align:center;
                    line-height:1.125rem;
                    font-size:.625rem;
                    font-weight:bold;
                    border-radius:50%;
                    color:white;
                    background-color:${style["primary-colour"]};
                    position:relative;
                    top:-0.375rem;
                    right:5%;
                }
            }
         }
    }
`
export const EmptyItem = styled.div`
    text-align:center;
    padding-bottom:1.875rem;
    margin-top:-0.125rem;
    h3 {
        letter-spacing:.1875rem;
        font-size:1rem;
    }
    .listhead {
        height:1.1875rem;
        line-height:1.1875rem;
        display:flex;
        justify-content:space-between;
        font-size:1rem;
        color:black;
        font-weight:500;
        letter-spacing:.0625rem;
    }
    img {
        margin:.625rem auto;
        width:12.5rem;
        height:12.5rem;
    }
    h2 {
        color:black;
    }
`