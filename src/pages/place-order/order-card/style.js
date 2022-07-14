import styled from "styled-components"; 
import style from '@/assets/styles/global-style'

export const Wrapper = styled.div`
   margin:.9375rem 0;
   /* border-top:.9375rem solid #f6f6f6;
   border-bottom:.9375rem solid #f6f6f6; */
   padding:.9375rem .625rem;
   background-color:#ffffff;
  .head {
        height:1.1875rem;
        line-height:1.1875rem;
        display:flex;
        justify-content:space-between;
        font-size:.9rem;
        color:black;
        font-weight:500;
        letter-spacing:.0625rem;
    }
    .body{
        margin-top:.9375rem;
        display:flex;
        margin-bottom:.625rem;
        img{
            display:block;
            width:6.25rem;
            height:6.25rem;
        }
        .body_right {
            flex:1;
            text-align:left;
            margin-left:1.25rem;
            .title{
                color:black;
                font-size:1.0625rem;                 
                overflow:hidden;
                text-overflow:ellipsis;
                -webkit-line-clamp:2;
                display:-webkit-box;
                line-clamp:2;
                -webkit-box-orient:vertical;
            }
            .desc {
                display:inline-block;
                font-size:.8125rem;
                background-color:#fafafa;
                color:#a3a3a3;
                margin:.3125rem .125rem;
                padding:.125rem .25rem;
            }
            .ensure {
                height:1.875rem;
                line-height:1.875rem;
                color:#d17245;
                font-size:1rem;
                letter-spacing:.0625rem;
            }
            .price {
                font-size:1rem;
                width:90%;
                display:flex;
                justify-content:space-between;
                font-weight:bold;
                margin-top:.375rem;
            }
        }  
    }
    .foot {
        .row{
            display:flex;
            justify-content:space-between;
            height:2.5rem;
            line-height:2.5rem;
            padding:0 .9375rem;
            .row_right{
                letter-spacing:.0625rem;
                color:#4b4e4e;
                font-weight:bold;
                padding-right:1.1875rem; 
                position:relative
            }
            span {
                &.row_right::after{
                content:'';
                display:block;
                width:.5rem;
                height:.5rem;
                border-right:.0625rem solid black;
                border-bottom:.0625rem solid black;
                transform:rotate(320deg);
                position:absolute;
                top:.9375rem;
                right:.125rem;
            }
            }
            .coupon {
                color:${style["primary-colour"]};
            }
            input {
                width:10.875rem;
                border:0;
            }
        } 
        
    }
`