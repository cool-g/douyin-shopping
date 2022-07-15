import React,{ useState,useEffect,memo } from 'react'
import { Wrapper,Footer } from './style'
import { NavBar,Dialog,Toast } from 'antd-mobile'
import { sleep } from 'antd-mobile/es/utils/sleep'
import { useNavigate } from 'react-router-dom'
import AddressSelect from './address-select';
import OrderCard from './order-card';
import PaymentSelect from './payment-select'
// import Loading from '@/components/common/loading';
import { FormatPrice } from '@/utils'
import { connect } from 'react-redux'
import { actionCreators } from './store/index';
import { addOrder } from '@/pages/myorder/store/actionCreators';

function PlaceOrder(props) {
  const { 
    addressList,
    // enterloading,
    submitGoods
  } = props;
  const { 
    getAddressListDispatch,
    getAddOrderDispatch
  } = props;
  // console.log(submitGoods)
  const navigate = useNavigate();
  
  const [total,settotal] = useState(['0','00']);

  const changeGoodsNumber = (value,id) => {
    const list = submitGoods.map(item => {
      if(item.id==id){
        item.acount=value;
      }
      return item;
    })
    const count = submitGoods.reduce((pre,item) =>{
      return pre+item.acount*item.price-item.coupon+item.freight;
    },0)
    settotal(FormatPrice(count));
  }

  const addAddress  = (values) => {
    getAddressListDispatch(values)
  }

    // 提交订单 到 我的订单页面
    const submitOrder = () => {
      // 判断地址是否填写
      if(!addressList.length){
        Toast.show({content:'请填写地址'});  
        return ;
      } 
  
      // 显示效果部分
        Dialog.confirm({
          content: '是否提交订单',
          onConfirm: async () => {
            await sleep(2000);
            changeorder();
            Toast.show({
              icon: 'success',
              content: '提交成功',
              position: 'bottom',
            })
            navigate('/myorder')
          },
        })
    }
  
    const changeorder = () => {
      // 将订单数据state改为 待支付
      let goods = submitGoods.map(item => 
        {
          item.state='待支付';
          return item;
        })
        getAddOrderDispatch(submitGoods)
    }

    
  useEffect(()=> {    
    // 计算总价
    const count = submitGoods.reduce((pre,item) =>
    (pre+item.price*item.acount-item.coupon+item.freight) ,0)
    settotal(FormatPrice(count));
  },[])
  
  return (
    <Wrapper>
      <NavBar 
        back={<span className='title'>确认订单</span>}
        onBack={() => navigate(-1)}
        className='navbar'
        style={{
          '--height': '2.75rem',
          '--border-bottom': '0.0625rem #bebaba solid',
        }}
        >
      </NavBar>
      {/* 收货地址 */}
      <AddressSelect alladdress={addressList} addAddress={addAddress}/>
      {/* 订单详情 */}
      { 
        submitGoods.length>0 &&
        submitGoods.map(data => (
            <OrderCard 
              key={data.id} 
              data={data} 
              changeGoodsNumber={changeGoodsNumber}
            />
          ))
      }
      <PaymentSelect/>
      {/* 计算金额 */}
      <Footer>
        <span className='total_price'>
          <i className='fa fa-jpy'/>
          <span>{total[0]}</span>
          <span className='decimal'>{`.${total[1]}`}</span>
        </span>
        <button  onClick={()=>submitOrder()}>提交订单</button>
      </Footer>
      {/* {enterloading && <Loading/>} */}
    </Wrapper>
  )
}
const mapStateToProps = (state) => {
  return {
    submitGoods:state.placeorder.submitGoods,
    addressList:state.placeorder.addressList,
    enterloading:state.placeorder.enterloading,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getAddressListDispatch(data){
      dispatch(actionCreators.changeAddressList(data))
    },
    getAddOrderDispatch(data){
      dispatch(addOrder(data))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(memo(PlaceOrder))