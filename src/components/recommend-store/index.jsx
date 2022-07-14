import React, { memo } from 'react'
import { Wrapper,Lives,Brands } from './style'

export default memo(function RecommendStore(props) {
    const { livelist,brandlist } = props
    const showlive = () => {
        return (livelist.map(item => (
            <div key={item.id}>
                <img src={item.img}/>
                <span>{item.name}</span>
            </div>
            ))
        )
    }
    const showbrand = () => {
        return (brandlist.map(item => (
            <div key={item.id}>
                <img src={item.img}/>
                <span>{item.name}</span>
            </div>
            ))
        )
    }
    return (
        <Wrapper>
            <Lives>
                <div className='title'>直播精选<span>好逛</span></div>
                <div className='lives'>
                    { showlive() }
                </div>
            </Lives>
            <Brands>
                <div className='title'>品牌馆<span>旗舰</span></div>
                <div className='brands'>
                    { showbrand() }
                </div>
            </Brands>
        </Wrapper>
    )
})
