import styled from "styled-components";

export const Wrapper = styled.div`
    background-color:#ffffff;
    margin-bottom:5rem;
    .radio-group{
        display:flex;
        justify-content:space-between;
        padding:0 .9375rem;
        height:3rem;
        line-height:3rem;
        /* position:relative; */
        i {
            margin-right:.625rem;
            font-size:1.4375rem;
            position:relative;
            top:.25rem;
            &.icon-douyin{
                color:black
            }
            &.icon-zhifubaozhifu{
                color:#1296db;
            }
            &.icon-wxpay{
                color:#09bb07;
            }
        }
        span {
            color:black;
        }
    }
`