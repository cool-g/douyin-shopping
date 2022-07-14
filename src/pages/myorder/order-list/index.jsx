import React,{ memo } from 'react'
import { OrderListWrapper,NoteWrapper } from './style'
import { Button, Modal } from 'antd-mobile'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'
import MyImg from '@/components/common/MyImg';
import LazyLoad from 'react-lazyload'
import DefaultImg from '@/assets/images/default.webp'


function OrderList(props) {
  const { list } = props;
  const { deleteOrder,gobuy } =props;

  return (
    <OrderListWrapper>
        {
            list.length>0 &&
            list.map(item => (
                <OrderNote key={item.id} 
                    data={item} 
                    deleteOrder={()=>deleteOrder(item.id)}
                    gobuy={gobuy}
                />
            ))
        }
    </OrderListWrapper>
  )
}

const OrderNote = (props) => {
    const { data } =props;
    const { deleteOrder,gobuy } =props
    return (
        <NoteWrapper>
            <div className="listhead">
                <span>{data.shop} &gt;</span>
                <span className='state'>{data.state}</span>
            </div>
            <div className="body">
                <LazyLoad 
                  placeholder={<img className='img' src={DefaultImg}/>}>
                  <MyImg 
                    src={data.img} 
                    defaultImg={DefaultImg}
                    className="img"
                  />
                </LazyLoad>
                {/* <MyImg 
                    src={data.img} 
                    defaultImg={DefaultImg}
                    className="img"
                /> */}
                <div className="body_right">
                    <div className="row">
                        <div className="left">{data.title}</div>
                        <div className='right'>￥ {data.price}</div>
                    </div>
                    <div className="row">
                        <div className="left_">{data.desc}</div>
                        <div className='right'>x {data.acount}</div>
                    </div>
                </div>
            </div>
            <div className="foot">
                <div className="totle">合计￥<span>{data.price}</span></div>
                <div className="btngroup">
                    {/* <Button onClick={deleteOrder}>删除订单</Button> */}
                    <div>
                        <Button 
                            block 
                            onClick={()=>
                                Modal.confirm({
                                    title:'确认删除订单？',
                                    content:'删除订单后不可恢复',
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
                                    onConfirm:() => {deleteOrder()},
                                })
                        } 
                        >
                            删除订单</Button> 
                    </div>
                    <div><button className='active' onClick={gobuy.bind(null,data)}>再次购买</button></div>
                </div>
            </div>
        </NoteWrapper>
    )
}

 OrderList.propTypes = {
    list:propTypes.array.isRequired
 }

 export default memo(OrderList)