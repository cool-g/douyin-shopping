import React,{ useState,memo } from 'react'
import { RecommendWrapper } from './style'
import propTypes from 'prop-types'
// import MyImg from '@/components/common/MyImg';
import LazyLoad from 'react-lazyload'
import DefaultImg from '@/assets/images/default.webp'


function RecommendList(props) {
  const { recommend } = props;
  const { putinCart =()=>{} } = props;

  return (
    <RecommendWrapper>

      <div className='list'>
        {
          recommend.map((item,index) => 
            <div key={index}>
               <LazyLoad 
                  height={100}
                  placeholder={<img className='img' src={DefaultImg}/>}>
                  <img className='img'
                    src={item.img} alt="" />
                </LazyLoad>
              <p className='title'>{item.title}</p>
              {item.coupon>0 && <button className='coupon'>券 立减{item.coupon}</button>}
              <p className='price'>
                {item.coupon>0 && <span style={{fontSize:'16px',fontWeight:'normal'}}>券后 </span>}
                ￥{item.price}
              </p>
              {/* 简化版加入购物车 */}
              <div className='cart-icon' onClick={putinCart.bind(null,item)}>
                <i className='fa fa-shopping-cart'/>
              </div>
            </div>
          )
        }
      </div>
      
    </RecommendWrapper>
  )
}
RecommendList.propTypes = {
  recommend:propTypes.array.isRequired
}
export default memo (RecommendList)