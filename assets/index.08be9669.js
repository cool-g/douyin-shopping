import{s as F,x,a9 as A,V as I,Z as Q,d as Y,r as N,j as c,e as d,_ as ee,f as G,h as te,u as ne,t as D,S as se,i as ae,R as re,L as ie,B as oe,a7 as R,aa as le,ab as ce,ac as ue,ad as pe,ae as de,af as he}from"./index.dec9060b.js";import{B as fe,c as me}from"./actionCreators.b90d3ff4.js";import{M as ge,E as ve,e as Ee,a as xe}from"./empty.5f7f804e.js";import{_ as Ce,S as be,N as Ne,F as Se}from"./style.1cbddee5.js";const ke=F.div`
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
`;function M(s,i){s.prototype=Object.create(i.prototype),s.prototype.constructor=s,Ce(s,i)}function De(s,i){return s.classList?!!i&&s.classList.contains(i):(" "+(s.className.baseVal||s.className)+" ").indexOf(" "+i+" ")!==-1}function ye(s,i){s.classList?s.classList.add(i):De(s,i)||(typeof s.className=="string"?s.className=s.className+" "+i:s.setAttribute("class",(s.className&&s.className.baseVal||"")+" "+i))}function $(s,i){return s.replace(new RegExp("(^|\\s)"+i+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function Te(s,i){s.classList?s.classList.remove(i):typeof s.className=="string"?s.className=$(s.className,i):s.setAttribute("class",$(s.className&&s.className.baseVal||"",i))}var B={disabled:!1},P=x.createContext(null),S="unmounted",v="exited",E="entering",b="entered",w="exiting",m=function(s){M(i,s);function i(t,n){var e;e=s.call(this,t,n)||this;var r=n,a=r&&!r.isMounting?t.enter:t.appear,o;return e.appearStatus=null,t.in?a?(o=v,e.appearStatus=E):o=b:t.unmountOnExit||t.mountOnEnter?o=S:o=v,e.state={status:o},e.nextCallback=null,e}i.getDerivedStateFromProps=function(n,e){var r=n.in;return r&&e.status===S?{status:v}:null};var u=i.prototype;return u.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},u.componentDidUpdate=function(n){var e=null;if(n!==this.props){var r=this.state.status;this.props.in?r!==E&&r!==b&&(e=E):(r===E||r===b)&&(e=w)}this.updateStatus(!1,e)},u.componentWillUnmount=function(){this.cancelNextCallback()},u.getTimeouts=function(){var n=this.props.timeout,e,r,a;return e=r=a=n,n!=null&&typeof n!="number"&&(e=n.exit,r=n.enter,a=n.appear!==void 0?n.appear:r),{exit:e,enter:r,appear:a}},u.updateStatus=function(n,e){n===void 0&&(n=!1),e!==null?(this.cancelNextCallback(),e===E?this.performEnter(n):this.performExit()):this.props.unmountOnExit&&this.state.status===v&&this.setState({status:S})},u.performEnter=function(n){var e=this,r=this.props.enter,a=this.context?this.context.isMounting:n,o=this.props.nodeRef?[a]:[A.findDOMNode(this),a],l=o[0],p=o[1],h=this.getTimeouts(),f=a?h.appear:h.enter;if(!n&&!r||B.disabled){this.safeSetState({status:b},function(){e.props.onEntered(l)});return}this.props.onEnter(l,p),this.safeSetState({status:E},function(){e.props.onEntering(l,p),e.onTransitionEnd(f,function(){e.safeSetState({status:b},function(){e.props.onEntered(l,p)})})})},u.performExit=function(){var n=this,e=this.props.exit,r=this.getTimeouts(),a=this.props.nodeRef?void 0:A.findDOMNode(this);if(!e||B.disabled){this.safeSetState({status:v},function(){n.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:w},function(){n.props.onExiting(a),n.onTransitionEnd(r.exit,function(){n.safeSetState({status:v},function(){n.props.onExited(a)})})})},u.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},u.safeSetState=function(n,e){e=this.setNextCallback(e),this.setState(n,e)},u.setNextCallback=function(n){var e=this,r=!0;return this.nextCallback=function(a){r&&(r=!1,e.nextCallback=null,n(a))},this.nextCallback.cancel=function(){r=!1},this.nextCallback},u.onTransitionEnd=function(n,e){this.setNextCallback(e);var r=this.props.nodeRef?this.props.nodeRef.current:A.findDOMNode(this),a=n==null&&!this.props.addEndListener;if(!r||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[r,this.nextCallback],l=o[0],p=o[1];this.props.addEndListener(l,p)}n!=null&&setTimeout(this.nextCallback,n)},u.render=function(){var n=this.state.status;if(n===S)return null;var e=this.props,r=e.children;e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef;var a=I(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return x.createElement(P.Provider,{value:null},typeof r=="function"?r(n,a):x.cloneElement(x.Children.only(r),a))},i}(x.Component);m.contextType=P;m.propTypes={};function C(){}m.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:C,onEntering:C,onEntered:C,onExit:C,onExiting:C,onExited:C};m.UNMOUNTED=S;m.EXITED=v;m.ENTERING=E;m.ENTERED=b;m.EXITING=w;var Ae=m,Le=function(i,u){return i&&u&&u.split(" ").forEach(function(t){return ye(i,t)})},L=function(i,u){return i&&u&&u.split(" ").forEach(function(t){return Te(i,t)})},O=function(s){M(i,s);function i(){for(var t,n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];return t=s.call.apply(s,[this].concat(e))||this,t.appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(a,o){var l=t.resolveArguments(a,o),p=l[0],h=l[1];t.removeClasses(p,"exit"),t.addClass(p,h?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(a,o)},t.onEntering=function(a,o){var l=t.resolveArguments(a,o),p=l[0],h=l[1],f=h?"appear":"enter";t.addClass(p,f,"active"),t.props.onEntering&&t.props.onEntering(a,o)},t.onEntered=function(a,o){var l=t.resolveArguments(a,o),p=l[0],h=l[1],f=h?"appear":"enter";t.removeClasses(p,f),t.addClass(p,f,"done"),t.props.onEntered&&t.props.onEntered(a,o)},t.onExit=function(a){var o=t.resolveArguments(a),l=o[0];t.removeClasses(l,"appear"),t.removeClasses(l,"enter"),t.addClass(l,"exit","base"),t.props.onExit&&t.props.onExit(a)},t.onExiting=function(a){var o=t.resolveArguments(a),l=o[0];t.addClass(l,"exit","active"),t.props.onExiting&&t.props.onExiting(a)},t.onExited=function(a){var o=t.resolveArguments(a),l=o[0];t.removeClasses(l,"exit"),t.addClass(l,"exit","done"),t.props.onExited&&t.props.onExited(a)},t.resolveArguments=function(a,o){return t.props.nodeRef?[t.props.nodeRef.current,a]:[a,o]},t.getClassNames=function(a){var o=t.props.classNames,l=typeof o=="string",p=l&&o?o+"-":"",h=l?""+p+a:o[a],f=l?h+"-active":o[a+"Active"],y=l?h+"-done":o[a+"Done"];return{baseClassName:h,activeClassName:f,doneClassName:y}},t}var u=i.prototype;return u.addClass=function(n,e,r){var a=this.getClassNames(e)[r+"ClassName"],o=this.getClassNames("enter"),l=o.doneClassName;e==="appear"&&r==="done"&&l&&(a+=" "+l),r==="active"&&n&&n.scrollTop,a&&(this.appliedClasses[e][r]=a,Le(n,a))},u.removeClasses=function(n,e){var r=this.appliedClasses[e],a=r.base,o=r.active,l=r.done;this.appliedClasses[e]={},a&&L(n,a),o&&L(n,o),l&&L(n,l)},u.render=function(){var n=this.props;n.classNames;var e=I(n,["classNames"]);return x.createElement(Ae,Q({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},i}(x.Component);O.defaultProps={classNames:""};O.propTypes={};var we=O;const Fe=F.div`
    margin-top:.3125rem;
    margin-bottom:.9375rem;
    width:95%;
    margin:auto;
`,Oe=F.div`
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
                    color:${Y["primary-colour"]};
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
`;var _e=N.exports.memo(function(i){const{cartList:u}=i,{onCheckedChange:t,changeAcount:n}=i;if(!!u.length)return c(Fe,{children:u.map(e=>d(Oe,{children:[d("div",{className:"listhead",children:[d("div",{children:[c("input",{type:"checkbox",checked:e.checked,onChange:t.bind(null,e.id)}),d("span",{children:[e.shop," >"]})]}),c("span",{children:"\u9886\u5238"})]}),d("div",{className:"body",children:[c(ee,{placeholder:c("img",{className:"img",src:G}),children:c(ge,{src:e.img,defaultImg:G,className:"img"})}),d("div",{className:"body_right",children:[c("div",{className:"row",children:c("div",{className:"title",children:e.title})}),c("div",{className:"row",children:c("span",{children:e.desc})}),d("div",{className:"row",children:[d("div",{className:"price",children:[c("span",{children:"\uFFE5"}),e.price]}),c(be,{defaultValue:1,onChange:r=>{n(e.id,r)},min:1})]})]})]})]},e.id))})});function Ge(s){const i=ne(),[u,t]=N.exports.useState(!1),{cartList:n,selectAll:e,totle:r,recommendList:a,enterLoading:o}=s,{changeSelectAllDispatch:l,changeTotleDispatch:p,deleteGoodsDispatch:h,changeGoodsAcountDispatch:f,getRecommendListDispatch:y,changeSelectedGoodsDispatch:j,changeSubmitGoodsDispatch:z}=s,[k,_]=N.exports.useState(!1),U=d("div",{children:[c("button",{children:"\u964D\u4EF7"}),c("button",{onClick:()=>_(!1),className:D({notshow:!k}),children:"\u5B8C\u6210"}),c("button",{onClick:()=>_(!0),className:D({notshow:k}),children:"\u7BA1\u7406"})]}),V=N.exports.useCallback(()=>{t(!1)},[]),W=()=>{window.scrollTo(0,0)},X=g=>{j(g),p()},H=()=>{l(),p()},Z=()=>{h(),p()},q=(g,T)=>{f({id:g,value:T}),p()},J=()=>{const g=n.filter(T=>T.checked==!0);z(g),i("/buy")},K=()=>{n.every(g=>g.checked==!1)||xe.confirm({title:"\u786E\u8BA4\u5220\u9664\u5546\u54C1\uFF1F",closeOnMaskClick:!0,closeOnAction:!0,actions:[{key:"confirm",text:"\u786E\u8BA4",primary:!0},{key:"cancel",text:"\u53D6\u6D88"}],onConfirm:()=>{Z()}})};return N.exports.useEffect(()=>{t(!0),y()},[]),c(we,{in:u,timeout:300,appear:!0,classNames:"fly",unmountOnExit:!0,onExit:()=>{i(-1)},children:d(ke,{children:[c(Ne,{onBack:V,className:"navbar",right:U,style:{"--height":"2.75rem","--border-bottom":"0.0625rem #bebaba solid"},children:" \u8D2D\u7269\u8F66"}),d(se,{onScroll:ae,children:[c(_e,{cartList:n,onCheckedChange:X,changeAcount:q}),n.length==0&&d(ve,{children:[c("img",{src:Ee}),c("p",{children:"\u8D2D\u7269\u8F66\u662F\u7A7A\u7684\uFF0C\u5FEB\u53BB\u6311\u9009\u597D\u8D27"})]}),c("h2",{className:"like",children:"\u4F60\u53EF\u80FD\u8FD8\u4F1A\u559C\u6B22"}),c(re,{recommend:a})]}),o&&c(ie,{}),c(oe,{backtop:W}),d(Se,{children:[d("div",{children:[c("input",{checked:e,type:"checkbox",onChange:()=>H()}),"\u5168\u9009"]}),d("div",{className:D({notshow:k}),children:[c("span",{children:"\u5408\u8BA1\uFF1A"}),d("span",{className:"total_price",children:[c("i",{className:"fa fa-jpy"}),c("span",{children:R(r)[0]}),c("span",{className:"decimal",children:`.${R(r)[1]}`})]}),c("button",{onClick:()=>J(),children:"\u7ED3\u7B97"})]}),c("div",{className:D({notshow:!k}),children:c(fe,{block:!0,onClick:()=>K(),children:"\u5220\u9664"})})]})]})})}const Re=s=>({cartList:s.shoppingcart.cartList,selectAll:s.shoppingcart.selectAll,totle:s.shoppingcart.totle,recommendList:s.shoppingcart.recommendList,enterLoading:s.shoppingcart.enterLoading}),$e=s=>({changeSelectedGoodsDispatch(i){s(le(i))},changeSelectAllDispatch(){s(ce())},changeTotleDispatch(){s(ue())},deleteGoodsDispatch(){s(pe())},changeGoodsAcountDispatch(i){s(de(i))},getRecommendListDispatch(){s(he())},changeSubmitGoodsDispatch(i){s(me(i))}});var je=te(Re,$e)(N.exports.memo(Ge));export{je as default};
