import React,{memo, useEffect, useState} from 'react'
import { OrderWrapper,EmptyItem } from './style'
import OrderList from './order-list'
import RecommendList from '@/components/recommend-list'
import Loading from '@/components/common/loading'
import Scroll from '@/components/common/scroll'
import { forceCheck } from 'react-lazyload'
import { PullToRefresh,DotLoading } from 'antd-mobile'
import BackTop from '@/components/common/backtop'
import gengduo from '@/assets/images/gengduo.svg'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreators } from './store/index'
import { changeSubmitGoods } from '@/pages/place-order/store/actionCreators'
import { sleep } from 'antd-mobile/es/utils/sleep'
import empty from '@/assets/images/empty.png'


function Myorder(props) {
  const navigate = useNavigate();
  const { 
    showOrderList,
    recommendList,
    enterloading=true,
    tabList 
  } = props;
  const { 
    getOrderListDispatch,
    updateOrderListDispatch,
    deleteOrderDispath,
    getRecommendListDispatch,
    changeEnterLoadingDispatch,
    changeSubmitGoodsDispatch
  } = props;
  const [tab,setTab] = useState('全部');
  const [query,setQuery] = useState('');

  // tab切换
  const changeTab= (target) => {
    setTab(target);
  }
  // input 监听 enter
  const handleEnterKey = (e) => {
    if(e.nativeEvent.keyCode === 13){
      setQuery(e.target.value);
    }
  }
  // 删除订单函数
  const deleteOrder = (id) => {
      deleteOrderDispath(id);
  }
  // 刷新
  async function doRefresh() {
    await sleep(1000);
    getOrderListDispatch({tab,query});
    getRecommendListDispatch();
  }
  // 返回顶部
  const backtop =() => {
    window.scrollTo(0,0);
  }
  // tab列表结构
  const showTabList = () => {
    return (
      tabList.map(item => (
        <li key={item.id} 
          className={tab==item.name?'active':''} 
          onClick={changeTab.bind(null,item.name)} >
            {item.name}
            {item.count>0 && <span>{item.count}</span>}
        </li>
      ))
    )
  } 
  // 再次购买
  const gobuy = (item) => {
    changeSubmitGoodsDispatch([item]);
    navigate('/buy')
  }
  // 请求推荐商品数据
    useEffect(()=> {
      changeEnterLoadingDispatch(true);
      getRecommendListDispatch();
      getOrderListDispatch({tab,query});
    },[])
  // 请求订单数据
    useEffect(()=>{
      updateOrderListDispatch({tab,query});
    },[tab,query])
 
    return (
    <OrderWrapper>
      <div className="head">

        <div className="searchOrder">
          <div className='goback' onClick={() => navigate('/home')}>
            <i className='fa fa-chevron-left '/>
          </div> 
          <div className='searchgroup'>
            <input 
              placeholder="搜索订单" 
              onKeyPress={handleEnterKey}
            />
            <i className='fa fa-search'/>
          </div>
          <div className='icon'>
          <img src={gengduo} alt="更多"/>
          </div>
        </div>

        {/* tab列表 */}
        <ul>
          { showTabList() }
        </ul> 
      </div>

    <div onScroll={forceCheck}>
      {/* 列表 */}
      <PullToRefresh
            onRefresh={doRefresh}
            refreshingText={<DotLoading color='#fe2d54'/>}
            completeText={ <h3>美好生活&nbsp;&nbsp;触手可得</h3>}
        >
         
              { showOrderList.length==0 && !enterloading &&
                  <EmptyItem>
                    <img src={empty} />
                    <h2>暂无订单</h2>
                    <p>你还没有产生任何订单</p>
                  </EmptyItem>
              }
              {showOrderList.length>0 && 
                <OrderList list={showOrderList} 
                  deleteOrder={deleteOrder} 
                  doRefresh={doRefresh}
                  gobuy={gobuy}
                />
              }  
              {recommendList.length>0 && 
                <>
                  <h2 className='like'>你可能还会喜欢</h2>
                  <RecommendList recommend={recommendList} />
                </>
              }
         
      </PullToRefresh>
    </div>

      {/* 显示加载中 */}
      {enterloading&&<Loading/>}
      {/* 回到顶部 */}
      <BackTop backtop={backtop}/>
    </OrderWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    showOrderList:state.order.showOrderList,
    recommendList:state.order.recommendList,
    enterloading:state.order.enterloading,
    tabList:state.order.tabList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getOrderListDispatch(data){
      dispatch(actionCreators.getOrderList(data))
    },
    updateOrderListDispatch(data){
      dispatch(actionCreators.updateOrderList(data))
    },
    deleteOrderDispath(id){
      dispatch(actionCreators.deleteOrder(id))
    },
    getRecommendListDispatch(){
      dispatch(actionCreators.getRecommendList())
    },
    changeEnterLoadingDispatch(data) {
      dispatch(actionCreators.changeEnterLoading(data))
    },
    changeSubmitGoodsDispatch(data) {
      dispatch(changeSubmitGoods(data));
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(memo(Myorder))
