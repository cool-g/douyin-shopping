import{g as C,U as _,C as S,D as I,a as G,b as M,c as P,s as f,d as g,P as j,r as c,j as t,e as a,_ as z,f as p,h as q,u as H,S as W,i as $,k as K,l as U,F as Q,R as J,L as V,B as X,m as Y}from"./index.dec9060b.js";import{M as Z,a as ee,O as te,E as re,e as ae}from"./empty.5f7f804e.js";import{B as se,c as ne}from"./actionCreators.b90d3ff4.js";const ie=e=>({type:M,data:e}),oe=({tab:e="",query:r=""})=>n=>{C().then(i=>{const o=ie(i);n(o),n(b({tab:e,query:r})),n(y(!1))})},b=e=>({type:_,data:e}),ce=e=>({type:I,id:e}),le=e=>({type:P,data:e}),de=()=>e=>{G().then(r=>{const n=le(r);e(n)})},y=e=>({type:S,data:e}),ue=f.div`
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
`,me=f.div`
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
`;function E(e){const{list:r}=e,{deleteOrder:n,gobuy:i}=e;return t(ue,{children:r.length>0&&r.map(o=>t(he,{data:o,deleteOrder:()=>n(o.id),gobuy:i},o.id))})}const he=e=>{const{data:r}=e,{deleteOrder:n,gobuy:i}=e;return a(me,{children:[a("div",{className:"listhead",children:[a("span",{children:[r.shop," >"]}),t("span",{className:"state",children:r.state})]}),a("div",{className:"body",children:[t(z,{placeholder:t("img",{className:"img",src:p}),children:t(Z,{src:r.img,defaultImg:p,className:"img"})}),a("div",{className:"body_right",children:[a("div",{className:"row",children:[t("div",{className:"left",children:r.title}),a("div",{className:"right",children:["\uFFE5 ",r.price]})]}),a("div",{className:"row",children:[t("div",{className:"left_",children:r.desc}),a("div",{className:"right",children:["x ",r.acount]})]})]})]}),a("div",{className:"foot",children:[a("div",{className:"totle",children:["\u5408\u8BA1\uFFE5",t("span",{children:r.price})]}),a("div",{className:"btngroup",children:[t("div",{children:t(se,{block:!0,onClick:()=>ee.confirm({title:"\u786E\u8BA4\u5220\u9664\u8BA2\u5355\uFF1F",content:"\u5220\u9664\u8BA2\u5355\u540E\u4E0D\u53EF\u6062\u590D",closeOnMaskClick:!0,closeOnAction:!0,actions:[{key:"confirm",text:"\u786E\u8BA4",primary:!0},{key:"cancel",text:"\u53D6\u6D88"}],onConfirm:()=>{n()}}),children:"\u5220\u9664\u8BA2\u5355"})}),t("div",{children:t("button",{className:"active",onClick:i.bind(null,r),children:"\u518D\u6B21\u8D2D\u4E70"})})]})]})]})};E.propTypes={list:j.array.isRequired};var ge=c.exports.memo(E),pe="./assets/gengduo.6b05f825.svg";function fe(e){const r=H(),{showOrderList:n,recommendList:i,enterloading:o=!0,tabList:v}=e,{getOrderListDispatch:u,updateOrderListDispatch:D,deleteOrderDispath:L,getRecommendListDispatch:m,changeEnterLoadingDispatch:N,changeSubmitGoodsDispatch:x}=e,[l,O]=c.exports.useState("\u5168\u90E8"),[d,w]=c.exports.useState(""),k=s=>{O(s)},F=s=>{s.nativeEvent.keyCode===13&&w(s.target.value)},A=s=>{L(s)};async function h(){await Y(1e3),u({tab:l,query:d}),m()}const B=()=>{window.scrollTo(0,0)},R=()=>v.map(s=>a("li",{className:l==s.name?"active":"",onClick:k.bind(null,s.name),children:[s.name,s.count>0&&t("span",{children:s.count})]},s.id)),T=s=>{x([s]),r("/buy")};return c.exports.useEffect(()=>{N(!0),m(),u({tab:l,query:d})},[]),c.exports.useEffect(()=>{D({tab:l,query:d})},[l,d]),a(te,{children:[a("div",{className:"head",children:[a("div",{className:"searchOrder",children:[t("div",{className:"goback",onClick:()=>r("/home"),children:t("i",{className:"fa fa-chevron-left "})}),a("div",{className:"searchgroup",children:[t("input",{placeholder:"\u641C\u7D22\u8BA2\u5355",onKeyPress:F}),t("i",{className:"fa fa-search"})]}),t("div",{className:"icon",children:t("img",{src:pe,alt:"\u66F4\u591A"})})]}),t("ul",{children:R()})]}),t(W,{onScroll:$,children:a(K,{onRefresh:h,refreshingText:t(U,{color:"#fe2d54"}),completeText:t("h3",{children:"\u7F8E\u597D\u751F\u6D3B\xA0\xA0\u89E6\u624B\u53EF\u5F97"}),children:[n.length==0&&!o&&a(re,{children:[t("img",{src:ae}),t("h2",{children:"\u6682\u65E0\u8BA2\u5355"}),t("p",{children:"\u4F60\u8FD8\u6CA1\u6709\u4EA7\u751F\u4EFB\u4F55\u8BA2\u5355"})]}),n.length>0&&t(ge,{list:n,deleteOrder:A,doRefresh:h,gobuy:T}),i.length>0&&a(Q,{children:[t("h2",{className:"like",children:"\u4F60\u53EF\u80FD\u8FD8\u4F1A\u559C\u6B22"}),t(J,{recommend:i})]})]})}),o&&t(V,{}),t(X,{backtop:B})]})}const be=e=>({showOrderList:e.order.showOrderList,recommendList:e.order.recommendList,enterloading:e.order.enterloading,tabList:e.order.tabList}),ye=e=>({getOrderListDispatch(r){e(oe(r))},updateOrderListDispatch(r){e(b(r))},deleteOrderDispath(r){e(ce(r))},getRecommendListDispatch(){e(de())},changeEnterLoadingDispatch(r){e(y(r))},changeSubmitGoodsDispatch(r){e(ne(r))}});var Le=q(be,ye)(c.exports.memo(fe));export{Le as default};
