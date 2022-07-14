import React,{ useState,memo } from 'react'
import { Wrapper } from './style'

function PaymentSelect() {
    const [selectpay,setSelectpay] = useState([
        {name:'zhifubao',checked:true},
        {name:'douyin',checked:false},
        {name:'weixin',checked:false}
    ]);
    const payMethodChange = (name) => {
        const newselect = selectpay.map(item => {
            if(item.name == name){
                item.checked = true;
            }else {
                item.checked = false;
            }
            return item;
        })
        setSelectpay(newselect);
    }
    return (
        <Wrapper>
            <form>
                <div className='radio-group'>
                <div>
                    <i className='iconfont icon-zhifubaozhifu'/>
                    <span>支付宝</span>
                </div>
                <div>
                    <input 
                        className='radio'
                        type='radio' 
                        name='zhifubao'
                        checked={selectpay[0].checked}
                        onChange={event => payMethodChange(event.target.name)}
                    />
                </div>
            </div>
            <div className='radio-group'>
                <div>
                    <i className='iconfont icon-douyin'/>
                    <span>抖音支付</span>
                </div>
                <div>
                    <input 
                        className='radio'
                        type='radio' 
                        name='douyin'
                        checked={selectpay[1].checked}
                        onChange={event => payMethodChange(event.target.name)}
                    />
                </div>
            </div>
            <div className='radio-group'>
                <div>
                    <i className='iconfont icon-wxpay'/>
                    <span>微信支付</span>
                </div>
                <div>
                    <input 
                        className='radio'
                        type='radio' 
                        name='weixin'
                        checked={selectpay[2].checked}
                        onChange={event => payMethodChange(event.target.name)}
                    />
                </div>
            </div>
            </form>
        </Wrapper>
    )
}

export default memo(PaymentSelect)