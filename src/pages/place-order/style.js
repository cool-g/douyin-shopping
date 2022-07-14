import styled from "styled-components";
import style from '@/assets/styles/global-style'

export const Wrapper = styled.div`
    position:relative;
    background-color:#f5f5f5;
    .navbar {
        width: 100%;
        position:fixed;
        top:0rem;
        background-color:#ffffff;
        z-index: 100;
    }
`

export const Footer = styled.div`
    height:3.75rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 1.25rem;
    background-color:#ffffff;
    position:fixed;
    bottom: 0;
    left:0;
    right:0;
    .total_price {
        color:${style["primary-colour"]};
        font-size:1.375rem;
        font-weight:bold;
        margin-right:.625rem;
        i {
            font-size:1.1875rem;
        }
        .decimal{
            font-size:1.125rem;
        }
    }
    button {
        padding:.8125rem 1.375rem;
        background-color:${style["primary-colour"]};
        color:white;
        border:0;
        font-size:.9375rem;
        border-radius:.5rem;
    }
`