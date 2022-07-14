import React,{ useState,useEffect,memo } from 'react'
import { Wrapper,Footer } from './style'
import { NavBar } from 'antd-mobile'
import { useNavigate,useParams } from 'react-router-dom'
import AddressSelect from './address-select';
import OrderCard from './order-card';
import { getBuy } from '@/api/request';
import PaymentSelect from './payment-select'
import Loading from '@/components/common/loading';
import { FormatPrice } from '@/utils'
import { connect } from 'react-redux'
import { actionCreators } from './store/index';

function PlaceOrder(props) {
  const { 
    addressList,
    enterloading,
    submitGoods
  } = props;
  const { getAddressListDispatch } = props;
  // console.log(submitGoods)
  const navigate = useNavigate();
  // const { id } = useParams();
  // if(!id) {
  //   navigate('/');
  //   return ;
  // }
  
  const [loading,setloading] = useState(false)
  const [goods,setGoods] = useState([]);
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
        <button  onClick={()=>alert('提交成功！后续功能正在开发中~敬请期待')} >提交订单</button>
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
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(memo(PlaceOrder))