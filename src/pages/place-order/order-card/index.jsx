import React,{useState,memo} from 'react'
import { Wrapper } from './style'
import { Stepper } from 'antd-mobile'
import { Popup } from 'antd-mobile';
import { FormatPrice } from '@/utils';

function OrderCard(props) {
    const { data } = props;
    const { changeGoodsNumber } = props;
    const [visible1,setVisible1] = useState(false);
    const [visible2,setVisible2] = useState(false);
    const [visible3,setVisible3] = useState(false);
    return (
    <Wrapper>
        <div className="head">
                <span>{data.shop}</span>
        </div>
        <div className="body">
            <img src={data.img}/>
            <div className="body_right">
               <div className='title'>{data.title}</div>
               <div className='desc'>{data.desc}</div>
               <div>{data.deliverytime}</div>
               <div className='ensure'>
                    <span className='strong'>安心购 </span>
                    品质保障 售后无忧
                </div>
                <div className='price'>
                    <div>￥ {data.price}</div>
                    <div>
                        <Stepper
                            defaultValue={data.acount}
                            onChange={value =>{
                              changeGoodsNumber(value,data.id)
                            }}
                            min={1}
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className='foot'>
            <div className='row'>
                <span>订单运费</span>
                <div className='row_right'>{data.freight==0?'包邮':`邮费：￥${data.freight}`}</div>
            </div>
            <div className='row' onClick={()=>{setVisible2(true)}}>
                <span>运费险</span>
                <span className='row_right'>商家赠送，退换货可赔付</span>
            </div>
            <div className='row' onClick={()=>{setVisible3(true)}}>
                <span>优惠券</span>
                {data.coupon>0?
                  <span className='row_right coupon'>{`-￥${FormatPrice(data.coupon).join('.')}`}</span>
                  :<span className='row_right'>暂无优惠</span>
                }
            </div>
            <div className='row'>
                <span>订单留言</span>
                <input type='text' placeholder='选填，建议先与商家协商一致'/>
            </div>
        </div>

        {/* 订单运费弹窗 */}
        <Popup
              visible={visible1}
              onMaskClick={() => {
                setVisible1(false)
              }}
              bodyStyle={{
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
                minHeight: '60vh',
              }}
              showCloseButton
              onClose={() => {
                setVisible1(false)
              }}
            >
              订单运费详情
      </Popup>
      {/* 运费险弹窗 */}
      <Popup
              visible={visible2}
              onMaskClick={() => {
                setVisible2(false)
              }}
              bodyStyle={{
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
                minHeight: '60vh',
              }}
              showCloseButton
              onClose={() => {
                setVisible2(false)
              }}
            >
              运费险详情
      </Popup>
      {/* 优惠券弹窗 */}
      <Popup
              visible={visible3}
              onMaskClick={() => {
                setVisible3(false)
              }}
              bodyStyle={{
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
                minHeight: '60vh',
              }}
              showCloseButton
              onClose={() => {
                setVisible3(false)
              }}
            >
              优惠券详情
      </Popup>
    </Wrapper>
  )
}

export default memo(OrderCard)