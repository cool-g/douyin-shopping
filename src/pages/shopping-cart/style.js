import styled from "styled-components";
import style from '@/assets/styles/global-style'

export const Wrapper = styled.div`
    padding-top:2.75rem;
    padding-bottom:2.75rem;
    .navbar {
        background-color:#ffffff;
        position:fixed;
        z-index:10;
        top:0;
        left:0;
        right:0;
        button {
            background-color:transparent;
            margin-left:.9375rem;
            font-size:.9375rem;
            border:0;
        }
        .right {
            position:absolute;
            top:.625rem;
            right:1.25rem;
            
        }
    }
    .like {
        text-align:left;
        padding-left:.625rem;
        color:#010101;
        font-size:1.1875rem;
        font-weight:550;
        letter-spacing:.0625rem;
        margin:.625rem 0;
    }
    &.fly-enter,&.fly-appear {
        opacity:0;
        /* 启用gpu加速，显卡画出来的 */
        transform:translate3d(100%,0,0);
    }
    &.fly-enter-active,&.fly-apply-active {
        opacity:1;
        transition:all .3s;
        transform:translate3d(0,0,0);
    }
    &.fly-exit {
        opacity:1;
        transform:translate3d(0,0,0)
    }
    &.fly-exit-active {
        opacity:0;
        transition:all .3s;
        transform:translate3d(100%,0,0)
    }
`

