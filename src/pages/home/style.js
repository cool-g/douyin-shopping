import styled from 'styled-components'
import style from '@/assets/styles/global-style'
export const Wrapper = styled.div`
    background-color:#f6f6f6;
    padding-top:3.4375rem;
`

export const SearchHeader = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    background-color:#ffffff;
    display:flex;
    padding:.3125rem 0;
    justify-content:space-between;
    height:2.8125rem;
    z-index:10;
    .icon{
        flex:1;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:1.25rem;
        position:relative;
        span{
            display:inline-block;
            width:1.125rem;
            height:1.125rem;
            text-align:center;
            line-height:1.125rem;
            font-size:.625rem;
            font-weight:bold;
            border-radius:50%;
            color:white;
            background-color:${style["primary-colour"]};
            position:absolute;
            top:-0.125rem;
            right:1%;
            opacity:0.8;
        }
    }
    .searchgroup{
        flex:7;
        position:relative;
        border-radius:1.25rem;
        border:.0625rem solid ${style["primary-colour"]};
        input {
            border:0;
            background-color:transparent;
            padding:.3125rem 0 0 2.5rem;
            font-size:1.125rem;
            font-size:1.0625rem;
        }
        i{
            color:${style["primary-colour"]};
            font-size:1.1875rem;
            position:absolute; 
            left:.625rem;
            top:.4375rem;
        }
        button {
            position:absolute;
            top:.125rem;
            right:.125rem;
            background-color:${style["primary-colour"]};
            padding:.3125rem .9375rem;
            color:white;
            border-radius:1.25rem;
            border:0;
            font-size:.875rem;
        }
    }
    
`

export const NavBar = styled.div`
    width:95%;
    margin:auto;
    .list1{
        background-color:transparent;
    }
    .list2 {
        background-color:#ffffff;
        padding:.625rem 0;
        border-radius:.625rem;
    }
    ul {
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
        a {
            color:black;
            margin:0 .75rem;
            height:3.75rem;
            li{
                height:3.125rem;
                float:left;
                flex-shrink:0;
                margin-bottom:1.875rem;
                display:flex;
                flex-direction:column;
                justify-content:space-around;
                align-items:center;
                /* position:relative; */
                i {
                    display:inline-block;
                    font-size:1.125rem;
                }
                span{
                    display:inline-block;
                    color:gray;
                    white-space:nowrap;
                }
                .iconfont {
                    font-size:1.875rem;
                }
            }
        }
    }
`