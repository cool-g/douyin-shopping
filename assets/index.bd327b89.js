import{s as p,a as g,P as T,r as c,j as e,b as a,_ as C,D as f,c as R,u as S,f as j,d as P,e as _,F as z,R as M,L as I,B as G,g as W}from"./index.f562d366.js";import{M as $,a as q,O as K,E as Q,e as H}from"./empty.cc7429fc.js";import{B as J,c as U}from"./actionCreators.620c0fcf.js";import{g as V,u as X,d as Y,a as Z,c as ee}from"./actionCreators.01fc07ce.js";const re=p.div`
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
`,te=p.div`
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
            color:${g["primary-colour"]};
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
                        background-color:${g["primary-colour"]};
                        color:white;
                        border:0rem;
                    }
                }
            }
            
        }
    }
`;function b(t){const{list:r}=t,{deleteOrder:s,gobuy:o}=t;return e(re,{children:r.length>0&&r.map(n=>e(ae,{data:n,deleteOrder:()=>s(n.id),gobuy:o},n.id+n.img))})}const ae=t=>{const{data:r}=t,{deleteOrder:s,gobuy:o}=t;return a(te,{children:[a("div",{className:"listhead",children:[a("span",{children:[r.shop," >"]}),e("span",{className:"state",children:r.state})]}),a("div",{className:"body",children:[e(C,{placeholder:e("img",{className:"img",src:f}),children:e($,{src:r.img,defaultImg:f,className:"img"})}),a("div",{className:"body_right",children:[a("div",{className:"row",children:[e("div",{className:"left",children:r.title}),a("div",{className:"right",children:["\uFFE5 ",r.price]})]}),a("div",{className:"row",children:[e("div",{className:"left_",children:r.desc}),a("div",{className:"right",children:["x ",r.acount]})]})]})]}),a("div",{className:"foot",children:[a("div",{className:"totle",children:["\u5408\u8BA1\uFFE5",e("span",{children:r.price})]}),a("div",{className:"btngroup",children:[e("div",{children:e(J,{block:!0,onClick:()=>q.confirm({title:"\u786E\u8BA4\u5220\u9664\u8BA2\u5355\uFF1F",content:"\u5220\u9664\u8BA2\u5355\u540E\u4E0D\u53EF\u6062\u590D",closeOnMaskClick:!0,closeOnAction:!0,actions:[{key:"confirm",text:"\u786E\u8BA4",primary:!0},{key:"cancel",text:"\u53D6\u6D88"}],onConfirm:()=>{s()}}),children:"\u5220\u9664\u8BA2\u5355"})}),e("div",{children:e("button",{className:"active",onClick:o.bind(null,r),children:"\u518D\u6B21\u8D2D\u4E70"})})]})]})]})};b.propTypes={list:T.array.isRequired};var ie=c.exports.memo(b),se="./assets/gengduo.6b05f825.svg";function ne(t){const r=S(),{showOrderList:s,recommendList:o,enterloading:n=!0,tabList:v}=t,{getOrderListDispatch:u,updateOrderListDispatch:y,deleteOrderDispath:x,getRecommendListDispatch:m,changeEnterLoadingDispatch:D,changeSubmitGoodsDispatch:L}=t,[l,w]=c.exports.useState("\u5168\u90E8"),[d,N]=c.exports.useState(""),k=i=>{w(i)},E=i=>{i.nativeEvent.keyCode===13&&N(i.target.value)},F=i=>{x(i)};async function h(){await W(1e3),u({tab:l,query:d}),m()}const O=()=>{window.scrollTo(0,0)},B=()=>v.map(i=>a("li",{className:l==i.name?"active":"",onClick:k.bind(null,i.name),children:[i.name,i.count>0&&e("span",{children:i.count})]},i.id)),A=i=>{L([i]),r("/buy")};return c.exports.useEffect(()=>{D(!0),m(),u({tab:l,query:d})},[]),c.exports.useEffect(()=>{y({tab:l,query:d})},[l,d]),a(K,{children:[a("div",{className:"head",children:[a("div",{className:"searchOrder",children:[e("div",{className:"goback",onClick:()=>r("/home"),children:e("i",{className:"fa fa-chevron-left "})}),a("div",{className:"searchgroup",children:[e("input",{placeholder:"\u641C\u7D22\u8BA2\u5355",onKeyPress:E}),e("i",{className:"fa fa-search"})]}),e("div",{className:"icon",children:e("img",{src:se,alt:"\u66F4\u591A"})})]}),e("ul",{children:B()})]}),e("div",{onScroll:j,children:a(P,{onRefresh:h,refreshingText:e(_,{color:"#fe2d54"}),completeText:e("h3",{children:"\u7F8E\u597D\u751F\u6D3B\xA0\xA0\u89E6\u624B\u53EF\u5F97"}),children:[s.length==0&&!n&&a(Q,{children:[e("img",{src:H}),e("h2",{children:"\u6682\u65E0\u8BA2\u5355"}),e("p",{children:"\u4F60\u8FD8\u6CA1\u6709\u4EA7\u751F\u4EFB\u4F55\u8BA2\u5355"})]}),s.length>0&&e(ie,{list:s,deleteOrder:F,doRefresh:h,gobuy:A}),o.length>0&&a(z,{children:[e("h2",{className:"like",children:"\u4F60\u53EF\u80FD\u8FD8\u4F1A\u559C\u6B22"}),e(M,{recommend:o})]})]})}),n&&e(I,{}),e(G,{backtop:O})]})}const oe=t=>({showOrderList:t.order.showOrderList,recommendList:t.order.recommendList,enterloading:t.order.enterloading,tabList:t.order.tabList}),ce=t=>({getOrderListDispatch(r){t(V(r))},updateOrderListDispatch(r){t(X(r))},deleteOrderDispath(r){t(Y(r))},getRecommendListDispatch(){t(Z())},changeEnterLoadingDispatch(r){t(ee(r))},changeSubmitGoodsDispatch(r){t(U(r))}});var he=R(oe,ce)(c.exports.memo(ne));export{he as default};
