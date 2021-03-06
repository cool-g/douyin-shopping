import React, { memo,useState,useEffect,useCallback } from 'react'
import { Wrapper } from './style'
import { NavBar } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import RecommendList from '@/components/recommend-list'
import Scroll from '@/components/common/scroll'
import { Footer } from '@/pages/place-order/style'
import { EmptyItem } from '@/pages/myorder/style'
import CartList from './cart-list'
import { actionCreators } from './store/index';
import classnames from 'classnames'
import { forceCheck } from 'react-lazyload'
import { FormatPrice } from '@/utils'
import empty from '@/assets/images/empty.png'
import Loading from '@/components/common/loading'
import BackTop from '@/components/common/backtop'
import { Button, Modal } from 'antd-mobile'
import { changeSubmitGoods } from '@/pages/place-order/store/actionCreators'


function ShoppingCart(props) {
  const navigate = useNavigate();
  const [show,setShow] = useState(false);
  const { 
    cartList,
    selectAll,
    totle,
    recommendList,
    enterLoading
   } = props;
  const { 
    changeSelectAllDispatch,
    // changeTotleDispatch,
    deleteGoodsDispatch,
    changeGoodsAcountDispatch,
    getRecommendListDispatch,
    changeSelectedGoodsDispatch,
    changeSubmitGoodsDispatch
  } = props;
  const [showDelete,setShowDelete] = useState(false);

  // 菜单栏右侧 动态显示
  const tabRight = (
    <div>
      <button>降价</button>
      <button onClick={()=>setShowDelete(false)} className={classnames({notshow:!showDelete})}>完成</button>
      <button onClick={()=>setShowDelete(true)} className={classnames({notshow:showDelete})}>管理</button>
    </div>
  )
  const onBack = useCallback(()=> {
    setShow(false);
  },[])
  // 返回顶部
  const backtop =() => {
    window.scrollTo(0,0);
  }
  // 选中/取消选中商品
  const onCheckedChange = (id) => {
    changeSelectedGoodsDispatch(id);
  }
  // 全选
  const doSelectAll = () => {
    changeSelectAllDispatch(selectAll);
  }
  // 删除购物车商品
  const deleteGoods = () => {
    deleteGoodsDispatch();
  }
  // 改变商品数量 逻辑部分
  const changeAcount = (id,value) => {
    changeGoodsAcountDispatch({id,value});
  }
  // 结算 /页面跳转
  const onSubmit = () => {
    const selectedList=cartList.filter(item => item.checked==true);
    changeSubmitGoodsDispatch(selectedList)
    deleteGoods();
    navigate('/buy')
  }
  // 删除商品 UI 显示部分
  const deleteproduce = () => {
    if(cartList.every(item => item.checked==false)) return ;
    Modal.confirm({
      title:'确认删除商品？',
      closeOnMaskClick: true,
      closeOnAction: true,
      actions: [
          {
            key: 'confirm',
            text: '确认',
            primary: true,
          },
          {
            key: 'cancel',
            text: '取消',
          }
      ],
        onConfirm:() => {deleteGoods()},
    })
  }

  useEffect(()=>{
    setShow(true);
    getRecommendListDispatch();
  },[])

  return (
    // CSS 进入/退出 动画
    <CSSTransition
    in={show}
    timeout={300}
    appear={true}
    classNames="fly"
    unmountOnExit
    onExit={() => {navigate(-1)}}
    >
      <Wrapper>
        {/* 导航栏 */}
        <NavBar 
          onBack={onBack}
          className='navbar'
          right={tabRight}
          style={{
            '--height': '2.75rem',
            '--border-bottom': '0.0625rem #bebaba solid',
          }}
        > 购物车
        </NavBar>

        <Scroll onScroll={forceCheck}>
          {/* 购物车商品列表 */}
          <CartList 
            cartList={cartList} 
            onCheckedChange={onCheckedChange}
            changeAcount={changeAcount}
          />
          {/* 空状态 */}
          {
            cartList.length==0 && 
            <EmptyItem>
              <img src={empty} />
              <p>购物车是空的，快去挑选好货</p>
            </EmptyItem>
          }
          {/* 推荐列表 */}
          <h2 className='like'>你可能还会喜欢</h2>
          <RecommendList recommend={recommendList} />
        </Scroll>
        {/* 显示加载中 */}
        {enterLoading&&<Loading/>}
        {/* 回顶 */}
        <BackTop backtop={backtop}/>
      
      <Footer>
          <div>
            <input checked={selectAll} type="checkbox" onChange={()=>doSelectAll()}/>全选
          </div>
          <div className={classnames({notshow:showDelete})}>
            <span>合计：</span>
            <span className='total_price'>
              <i className='fa fa-jpy'/>
              <span>{FormatPrice(totle)[0]}</span>
              <span className='decimal'>{`.${FormatPrice(totle)[1]}`}</span>
          </span>
            <button onClick={()=>onSubmit()}>结算</button>
          </div>
          <div className={classnames({notshow:!showDelete})}>
            {/* <button onClick={()=>deleteGoods()}>删除</button> */}
            <Button 
                block 
                onClick={()=>deleteproduce()} 
            >
            删除</Button> 
          </div>
      </Footer>
      </Wrapper>
    </CSSTransition>
  )
}

const mapStateToProps = (state) => {
  return {
    cartList:state.shoppingcart.cartList,
    // selectAll:state.shoppingcart.selectAll,
    selectAll:state.shoppingcart.cartList.length &&
      state.shoppingcart.cartList.every(item => 
      item.checked==true ),
    // totle:state.shoppingcart.totle,
    // 总价
    totle:state.shoppingcart.cartList.reduce((pre,item) => 
    item.checked?pre+item.price*item.acount:pre, 0),
    recommendList:state.shoppingcart.recommendList,
    enterLoading:state.shoppingcart.enterLoading
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeSelectedGoodsDispatch(data) {
      dispatch(actionCreators.changeSelectedGoods(data));
    },
    changeSelectAllDispatch(data){
      dispatch(actionCreators.changeSelectAll(data));
    },
    deleteGoodsDispatch() {
      dispatch(actionCreators.deleteGoods());
    },
    changeGoodsAcountDispatch(data) {
      dispatch(actionCreators.changeGoodsAcount(data));
    },
    getRecommendListDispatch() {
      dispatch(actionCreators.getRecommendList());
    },
    changeSubmitGoodsDispatch(data) {
      dispatch(changeSubmitGoods(data));
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(memo(ShoppingCart))