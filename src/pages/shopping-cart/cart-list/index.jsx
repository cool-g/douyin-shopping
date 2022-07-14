import React, { memo,useState } from 'react'
import MyImg from '@/components/common/MyImg';
import LazyLoad from 'react-lazyload'
import DefaultImg from '@/assets/images/default.webp'
import { List,ListItem } from './style'
import { Stepper } from 'antd-mobile'

export default memo(function CartList(props) {
  const { cartList } = props;
  const { onCheckedChange,changeAcount } = props;
  if(!cartList.length) return ;

  return (
    <List>
          {
            cartList.map(data  => (
            <ListItem key={data.id}>
              <div className="listhead">
                    <div>
                      <input type="checkbox" 
                        checked={data.checked} 
                        onChange={onCheckedChange.bind(null,data.id)}
                      />
                      <span>{data.shop} &gt;</span>
                    </div>  
                    <span>领券</span>
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
                    <div className="body_right">
                        <div className="row">
                            <div className="title">{data.title}</div>
                        </div>
                        <div className="row">
                            <span>{data.desc}</span>
                            {/* <div className='right'>x {data.acount}</div> */}
                        </div>
                        <div className="row">
                            <div className="price"><span>￥</span>{data.price}</div>
                              <Stepper
                                defaultValue={1}
                                onChange={value =>{
                                  changeAcount(data.id,value);
                                }}
                                min={1}
                            />
                        </div>
                    </div>
                </div>    
            </ListItem> 
        ))
      }
    </List>
  )
})
