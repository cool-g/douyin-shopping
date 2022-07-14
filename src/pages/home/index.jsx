import React, { memo,useState,useEffect } from 'react'
import { Wrapper,SearchHeader,NavBar } from './style'
import { Link,useNavigate } from 'react-router-dom'
import RecommendStore from '@/components/recommend-store'
import RecommendList from '@/components/recommend-list'
import Loading from '@/components/common/loading'
import { PullToRefresh,DotLoading,Toast } from 'antd-mobile'
import { sleep } from 'antd-mobile/es/utils/sleep'
import { connect } from 'react-redux'
import { actionCreators } from './store/index'
import BackTop from '@/components/common/backtop'
import Scroll from '@/components/common/scroll'
import { forceCheck } from 'react-lazyload'
import { changeCartList } from '@/pages/shopping-cart/store/actionCreators'

function Home(props) {
  const navigate = useNavigate();
  const { 
    goodsList,
    livelist,
    brandlist,
    enterloading,
    cartlength
  } = props;
  const { 
    getGoodsListDispatch,
    changeEnterLoadngDispatch,
    changeCartListDispatch
   } = props;

  async function doRefresh() {
    await sleep(1000);
    getGoodsListDispatch()  
  }

  const backtop =() => {
    window.scrollTo(0,0);
  }

  const putinCart = (item) => {
    changeCartListDispatch(item);
    Toast.show({
      content: '加入购物车成功'
    })
  }
  
  useEffect(()=> {
    changeEnterLoadngDispatch(true);
    getGoodsListDispatch();
  },[])

    return (
      <Wrapper>
        <SearchHeader>
            <div className='icon' onClick={()=>alert('项目中心正在开发中，敬请期待')}>
                <i className='fa fa-chevron-left '/>
            </div> 
            <div className='searchgroup'>
                <input placeholder="搜索商品" />
                <i className='fa fa-search'/>
                <button>搜索</button>
            </div>
              <div className='icon' onClick={()=>navigate('/shoppingcart')}>
                  <i className='fa fa-shopping-cart'/>
                  {cartlength>0 && <span>{cartlength}</span>}
              </div>
        </SearchHeader>
        <PullToRefresh
            onRefresh={doRefresh}
            refreshingText={<DotLoading color='#fe2d54'/>}
            completeText={ <h3>美好生活&nbsp;&nbsp;触手可得</h3>}
        >
        <NavBar>
            <ul className='list1'>
              <Link to="/myorder">
                <li><i className='fa fa-book'></i><span>我的订单</span></li>
              </Link>
              <Link to="">
                <li><i className='fa fa-envelope-open'></i><span>评价中心</span></li>
              </Link>
              <Link to="">
                <li><i className='fa fa-money'></i><span>退款/售后</span></li>
              </Link>
              <Link to="">
                <li><i className='fa fa-commenting-o'></i><span>客服消息</span></li>
              </Link>
              <Link to="">
                <li><i className='fa fa-archive'></i><span>券红包</span></li>
              </Link>
              <Link to="">
                <li><i className='fa fa-map-marker'></i><span>地址</span></li>
              </Link>
              <Link to="">
                <li><i className='fa fa-eye'></i><span>足迹</span></li>
              </Link>
              <Link to="">
                <li><i className='fa fa-star-o'></i><span>收藏</span></li>
              </Link>
              <Link to="">
                <li><i className='fa fa-check-square-o'></i><span>DOU分期</span></li>
              </Link>
              <Link to="">
                <li><i className='fa fa-university'></i><span>抖音小店</span></li>
              </Link>
              <Link to="">
                <li><i className='fa fa-address-card-o'></i><span>平台资质</span></li>
              </Link>
            </ul>
        </NavBar>
        <NavBar>
            <ul className='list2'>
              <Link to="">
                <li><i className='iconfont icon-gangweibutie'></i><span>百亿补贴</span></li>
              </Link>
              <Link to="">
                <li><i className='iconfont icon-gouwu-2'></i><span>百货超市</span></li>
              </Link>
              <Link to="">
                <li><i className='iconfont icon-fushi--chenshan'></i><span>潮品服饰</span></li>
              </Link>
              <Link to="">
                <li><i className='iconfont icon-shuma'></i><span>手机数码</span></li>
              </Link>
              <Link to="">
                <li><i className='iconfont icon-bao'></i><span>二手好物</span></li>
              </Link>
              <Link to="">
                <li><i className='iconfont icon-meizhuang'></i><span>抖in美妆</span></li>
              </Link>
              <Link to="">
                <li><i className='iconfont icon-fangdajing'></i><span>鉴真IN货</span></li>
              </Link>
              <Link to="">
                <li><i className='iconfont icon-chongzhi'></i><span>充值中心</span></li>
              </Link>
              <Link to="">
                <li><i className='iconfont icon-bao'></i><span>源头优选</span></li>
              </Link>
              <Link to="">
                <li><i className='iconfont icon-jiezhix'></i><span>珠宝美饰</span></li>
              </Link>
              <Link to="">
                <li><i className='iconfont icon-fenlei'></i><span>全部分类</span></li>
              </Link>
            </ul>
        </NavBar>
        {/* 推荐商家 */}
        <RecommendStore livelist={livelist} brandlist={brandlist}/>

        {/* 推荐列表 应用图片懒加载 */}
        <Scroll onScroll={forceCheck}>
            <RecommendList recommend={goodsList} putinCart={putinCart}/>
        </Scroll>
        </PullToRefresh>

        <BackTop backtop={backtop}/>
        {enterloading&&<Loading/>}
      </Wrapper>
    )
}

const mapStateToProps = (state) => {
  return {
    goodsList:state.home.goodsList,
    livelist:state.home.livelist,
    brandlist:state.home.brandlist,
    enterloading:state.home.enterloading,
    cartlength:state.shoppingcart.cartList.length
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getGoodsListDispatch(){
      dispatch(actionCreators.getGoodsList())
    },
    changeEnterLoadngDispatch(data){
      dispatch(actionCreators.changeEnterLoadng(data))
    },
    changeCartListDispatch(data){
      dispatch(changeCartList(data));
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(memo(Home))
