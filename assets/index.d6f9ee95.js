import{s as F,h as x,a9 as T,V as M,Z as K,a as Q,r as N,j as c,b as d,_ as Y,D as R,c as ee,u as te,i as D,aa as ne,f as se,R as ae,L as re,B as ie,a7 as $,ab as oe,ac as le,ad as ce,ae as ue,af as pe}from"./index.f562d366.js";import{B as de,c as he}from"./actionCreators.620c0fcf.js";import{M as fe,E as me,e as ge,a as ve}from"./empty.cc7429fc.js";import{_ as Ee,S as xe,N as Ce,F as be}from"./style.c521bb77.js";const Ne=F.div`
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
`;function P(s,r){s.prototype=Object.create(r.prototype),s.prototype.constructor=s,Ee(s,r)}function Se(s,r){return s.classList?!!r&&s.classList.contains(r):(" "+(s.className.baseVal||s.className)+" ").indexOf(" "+r+" ")!==-1}function ke(s,r){s.classList?s.classList.add(r):Se(s,r)||(typeof s.className=="string"?s.className=s.className+" "+r:s.setAttribute("class",(s.className&&s.className.baseVal||"")+" "+r))}function B(s,r){return s.replace(new RegExp("(^|\\s)"+r+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function De(s,r){s.classList?s.classList.remove(r):typeof s.className=="string"?s.className=B(s.className,r):s.setAttribute("class",B(s.className&&s.className.baseVal||"",r))}var I={disabled:!1},j=x.createContext(null),S="unmounted",v="exited",E="entering",b="entered",w="exiting",m=function(s){P(r,s);function r(t,n){var e;e=s.call(this,t,n)||this;var i=n,a=i&&!i.isMounting?t.enter:t.appear,o;return e.appearStatus=null,t.in?a?(o=v,e.appearStatus=E):o=b:t.unmountOnExit||t.mountOnEnter?o=S:o=v,e.state={status:o},e.nextCallback=null,e}r.getDerivedStateFromProps=function(n,e){var i=n.in;return i&&e.status===S?{status:v}:null};var u=r.prototype;return u.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},u.componentDidUpdate=function(n){var e=null;if(n!==this.props){var i=this.state.status;this.props.in?i!==E&&i!==b&&(e=E):(i===E||i===b)&&(e=w)}this.updateStatus(!1,e)},u.componentWillUnmount=function(){this.cancelNextCallback()},u.getTimeouts=function(){var n=this.props.timeout,e,i,a;return e=i=a=n,n!=null&&typeof n!="number"&&(e=n.exit,i=n.enter,a=n.appear!==void 0?n.appear:i),{exit:e,enter:i,appear:a}},u.updateStatus=function(n,e){n===void 0&&(n=!1),e!==null?(this.cancelNextCallback(),e===E?this.performEnter(n):this.performExit()):this.props.unmountOnExit&&this.state.status===v&&this.setState({status:S})},u.performEnter=function(n){var e=this,i=this.props.enter,a=this.context?this.context.isMounting:n,o=this.props.nodeRef?[a]:[T.findDOMNode(this),a],l=o[0],p=o[1],h=this.getTimeouts(),f=a?h.appear:h.enter;if(!n&&!i||I.disabled){this.safeSetState({status:b},function(){e.props.onEntered(l)});return}this.props.onEnter(l,p),this.safeSetState({status:E},function(){e.props.onEntering(l,p),e.onTransitionEnd(f,function(){e.safeSetState({status:b},function(){e.props.onEntered(l,p)})})})},u.performExit=function(){var n=this,e=this.props.exit,i=this.getTimeouts(),a=this.props.nodeRef?void 0:T.findDOMNode(this);if(!e||I.disabled){this.safeSetState({status:v},function(){n.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:w},function(){n.props.onExiting(a),n.onTransitionEnd(i.exit,function(){n.safeSetState({status:v},function(){n.props.onExited(a)})})})},u.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},u.safeSetState=function(n,e){e=this.setNextCallback(e),this.setState(n,e)},u.setNextCallback=function(n){var e=this,i=!0;return this.nextCallback=function(a){i&&(i=!1,e.nextCallback=null,n(a))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},u.onTransitionEnd=function(n,e){this.setNextCallback(e);var i=this.props.nodeRef?this.props.nodeRef.current:T.findDOMNode(this),a=n==null&&!this.props.addEndListener;if(!i||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],l=o[0],p=o[1];this.props.addEndListener(l,p)}n!=null&&setTimeout(this.nextCallback,n)},u.render=function(){var n=this.state.status;if(n===S)return null;var e=this.props,i=e.children;e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef;var a=M(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return x.createElement(j.Provider,{value:null},typeof i=="function"?i(n,a):x.cloneElement(x.Children.only(i),a))},r}(x.Component);m.contextType=j;m.propTypes={};function C(){}m.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:C,onEntering:C,onEntered:C,onExit:C,onExiting:C,onExited:C};m.UNMOUNTED=S;m.EXITED=v;m.ENTERING=E;m.ENTERED=b;m.EXITING=w;var ye=m,Le=function(r,u){return r&&u&&u.split(" ").forEach(function(t){return ke(r,t)})},A=function(r,u){return r&&u&&u.split(" ").forEach(function(t){return De(r,t)})},O=function(s){P(r,s);function r(){for(var t,n=arguments.length,e=new Array(n),i=0;i<n;i++)e[i]=arguments[i];return t=s.call.apply(s,[this].concat(e))||this,t.appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(a,o){var l=t.resolveArguments(a,o),p=l[0],h=l[1];t.removeClasses(p,"exit"),t.addClass(p,h?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(a,o)},t.onEntering=function(a,o){var l=t.resolveArguments(a,o),p=l[0],h=l[1],f=h?"appear":"enter";t.addClass(p,f,"active"),t.props.onEntering&&t.props.onEntering(a,o)},t.onEntered=function(a,o){var l=t.resolveArguments(a,o),p=l[0],h=l[1],f=h?"appear":"enter";t.removeClasses(p,f),t.addClass(p,f,"done"),t.props.onEntered&&t.props.onEntered(a,o)},t.onExit=function(a){var o=t.resolveArguments(a),l=o[0];t.removeClasses(l,"appear"),t.removeClasses(l,"enter"),t.addClass(l,"exit","base"),t.props.onExit&&t.props.onExit(a)},t.onExiting=function(a){var o=t.resolveArguments(a),l=o[0];t.addClass(l,"exit","active"),t.props.onExiting&&t.props.onExiting(a)},t.onExited=function(a){var o=t.resolveArguments(a),l=o[0];t.removeClasses(l,"exit"),t.addClass(l,"exit","done"),t.props.onExited&&t.props.onExited(a)},t.resolveArguments=function(a,o){return t.props.nodeRef?[t.props.nodeRef.current,a]:[a,o]},t.getClassNames=function(a){var o=t.props.classNames,l=typeof o=="string",p=l&&o?o+"-":"",h=l?""+p+a:o[a],f=l?h+"-active":o[a+"Active"],y=l?h+"-done":o[a+"Done"];return{baseClassName:h,activeClassName:f,doneClassName:y}},t}var u=r.prototype;return u.addClass=function(n,e,i){var a=this.getClassNames(e)[i+"ClassName"],o=this.getClassNames("enter"),l=o.doneClassName;e==="appear"&&i==="done"&&l&&(a+=" "+l),i==="active"&&n&&n.scrollTop,a&&(this.appliedClasses[e][i]=a,Le(n,a))},u.removeClasses=function(n,e){var i=this.appliedClasses[e],a=i.base,o=i.active,l=i.done;this.appliedClasses[e]={},a&&A(n,a),o&&A(n,o),l&&A(n,l)},u.render=function(){var n=this.props;n.classNames;var e=M(n,["classNames"]);return x.createElement(ye,K({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},r}(x.Component);O.defaultProps={classNames:""};O.propTypes={};var Te=O;const Ae=F.div`
    margin-top:.3125rem;
    margin-bottom:.9375rem;
    width:95%;
    margin:auto;
`,we=F.div`
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
                    color:${Q["primary-colour"]};
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
`;var Fe=N.exports.memo(function(r){const{cartList:u}=r,{onCheckedChange:t,changeAcount:n}=r;if(!!u.length)return c(Ae,{children:u.map(e=>d(we,{children:[d("div",{className:"listhead",children:[d("div",{children:[c("input",{type:"checkbox",checked:e.checked,onChange:t.bind(null,e.id)}),d("span",{children:[e.shop," >"]})]}),c("span",{children:"\u9886\u5238"})]}),d("div",{className:"body",children:[c(Y,{placeholder:c("img",{className:"img",src:R}),children:c(fe,{src:e.img,defaultImg:R,className:"img"})}),d("div",{className:"body_right",children:[c("div",{className:"row",children:c("div",{className:"title",children:e.title})}),c("div",{className:"row",children:c("span",{children:e.desc})}),d("div",{className:"row",children:[d("div",{className:"price",children:[c("span",{children:"\uFFE5"}),e.price]}),c(xe,{defaultValue:1,onChange:i=>{n(e.id,i)},min:1})]})]})]})]},e.id))})});function Oe(s){const r=te(),[u,t]=N.exports.useState(!1),{cartList:n,selectAll:e,totle:i,recommendList:a,enterLoading:o}=s,{changeSelectAllDispatch:l,deleteGoodsDispatch:p,changeGoodsAcountDispatch:h,getRecommendListDispatch:f,changeSelectedGoodsDispatch:y,changeSubmitGoodsDispatch:z}=s,[k,_]=N.exports.useState(!1),U=d("div",{children:[c("button",{children:"\u964D\u4EF7"}),c("button",{onClick:()=>_(!1),className:D({notshow:!k}),children:"\u5B8C\u6210"}),c("button",{onClick:()=>_(!0),className:D({notshow:k}),children:"\u7BA1\u7406"})]}),V=N.exports.useCallback(()=>{t(!1)},[]),W=()=>{window.scrollTo(0,0)},X=g=>{y(g)},H=()=>{l(e)},G=()=>{p()},Z=(g,L)=>{h({id:g,value:L})},q=()=>{const g=n.filter(L=>L.checked==!0);z(g),G(),r("/buy")},J=()=>{n.every(g=>g.checked==!1)||ve.confirm({title:"\u786E\u8BA4\u5220\u9664\u5546\u54C1\uFF1F",closeOnMaskClick:!0,closeOnAction:!0,actions:[{key:"confirm",text:"\u786E\u8BA4",primary:!0},{key:"cancel",text:"\u53D6\u6D88"}],onConfirm:()=>{G()}})};return N.exports.useEffect(()=>{t(!0),f()},[]),c(Te,{in:u,timeout:300,appear:!0,classNames:"fly",unmountOnExit:!0,onExit:()=>{r(-1)},children:d(Ne,{children:[c(Ce,{onBack:V,className:"navbar",right:U,style:{"--height":"2.75rem","--border-bottom":"0.0625rem #bebaba solid"},children:" \u8D2D\u7269\u8F66"}),d(ne,{onScroll:se,children:[c(Fe,{cartList:n,onCheckedChange:X,changeAcount:Z}),n.length==0&&d(me,{children:[c("img",{src:ge}),c("p",{children:"\u8D2D\u7269\u8F66\u662F\u7A7A\u7684\uFF0C\u5FEB\u53BB\u6311\u9009\u597D\u8D27"})]}),c("h2",{className:"like",children:"\u4F60\u53EF\u80FD\u8FD8\u4F1A\u559C\u6B22"}),c(ae,{recommend:a})]}),o&&c(re,{}),c(ie,{backtop:W}),d(be,{children:[d("div",{children:[c("input",{checked:e,type:"checkbox",onChange:()=>H()}),"\u5168\u9009"]}),d("div",{className:D({notshow:k}),children:[c("span",{children:"\u5408\u8BA1\uFF1A"}),d("span",{className:"total_price",children:[c("i",{className:"fa fa-jpy"}),c("span",{children:$(i)[0]}),c("span",{className:"decimal",children:`.${$(i)[1]}`})]}),c("button",{onClick:()=>q(),children:"\u7ED3\u7B97"})]}),c("div",{className:D({notshow:!k}),children:c(de,{block:!0,onClick:()=>J(),children:"\u5220\u9664"})})]})]})})}const _e=s=>({cartList:s.shoppingcart.cartList,selectAll:s.shoppingcart.cartList.length&&s.shoppingcart.cartList.every(r=>r.checked==!0),totle:s.shoppingcart.cartList.reduce((r,u)=>u.checked?r+u.price*u.acount:r,0),recommendList:s.shoppingcart.recommendList,enterLoading:s.shoppingcart.enterLoading}),Ge=s=>({changeSelectedGoodsDispatch(r){s(oe(r))},changeSelectAllDispatch(r){s(le(r))},deleteGoodsDispatch(){s(ce())},changeGoodsAcountDispatch(r){s(ue(r))},getRecommendListDispatch(){s(pe())},changeSubmitGoodsDispatch(r){s(he(r))}});var Me=ee(_e,Ge)(N.exports.memo(Oe));export{Me as default};
