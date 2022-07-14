import styled from 'styled-components'
import style from '@/assets/styles/global-style'

export const RecommendWrapper = styled.div`

    .list {
        margin:0 .3125rem;
        column-count:2;
        div {
            background-color:#fff;
            break-inside:avoid;
            margin-bottom:.625rem;
            text-align:left;
            /* padding:0 .3125rem; */
            border-radius:.3125rem;
            position:relative;
            .img {
                width:100%;
                border-radius:.3125rem .3125rem 0 0;
            }
            .title{
                width:95%;
                overflow:hidden;
                text-overflow:ellipsis;
                -webkit-line-clamp:2;
                display:-webkit-box;
                line-clamp:2;
                -webkit-box-orient:vertical;
                color:black;
                font-size:1.0625rem;
                font-weight:520;
                padding-left:.3125rem;
                margin-bottom:.3125rem;
            }
            .coupon{
                padding:.125rem .3125rem;
                border:.0625rem ${style["primary-colour"]} solid;
                color:${style["primary-colour"]};
                background-color:#fff;
                font-size:.75rem;
                margin-left:.625rem;
                margin-bottom:.625rem;
            }
            .price {
                padding-left:.5rem;
                font-size:1.125rem;
                color:#f23562;
                font-weight:bold;
            }
            .cart-icon {
                position:absolute;
                bottom:-7px;
                right:15px;
                color:${style["primary-colour"]};
                font-size:20px;
            }
        }
        
    }
`