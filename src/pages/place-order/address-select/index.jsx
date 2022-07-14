import React,{useState,memo} from 'react'
import { Wrapper } from './style'
import { Popup } from 'antd-mobile';
import AddressForm from '@/components/address-form';
import { useEffect } from 'react';
import propTypes from 'prop-types'

 function AddressSelect(props) {
  const { alladdress } = props;
  const { addAddress } = props;
  const [visibleAdd,setVisibleAdd] = useState(false);
  // const [visibleSelect,setVisibleSelect] = useState(false);
  const onFinish =(values)=> {
    setVisibleAdd(false);
    addAddress(values);
  }
  useEffect(()=>{
    setTimeout(()=>{
      if(!alladdress.length){
      setVisibleAdd(true);
      }
    },2000)
  },[])
  return (
    <Wrapper>
      
        {
          alladdress==0 ?
          <div className='address' onClick={()=>{setVisibleAdd(true)}}>
              <div className='left'>
                  <i className='fa fa-map-marker'></i>
                  <p>请先填写地址，用于商品配送</p>
              </div>
              <div className='right'><button>填写地址 &gt;</button></div>
          </div>
           :
          <div className='address' onClick={()=>{setVisibleAdd(true)}}>
              <div className='left'>
                  <i className='fa fa-map-marker'></i>
              </div>
              <div className='center'>
                  <p className='region'>{alladdress[alladdress.length-1].address}</p>
                  <p className='detail'>{alladdress[alladdress.length-1].detail}</p>
                  <p>
                    <span className='name'>{alladdress[alladdress.length-1].name}</span>
                    <span>{alladdress[alladdress.length-1].number}</span>
                  </p>
              </div>
              <div className='right'><span/></div>
          </div>
        }

      {/* 新增地址弹窗 */}
      <Popup
              visible={visibleAdd}
              onMaskClick={() => {
                setVisibleAdd(false)
              }}
              bodyStyle={{
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
                minHeight: '80vh',
              }}
              showCloseButton
              onClose={() => {
                setVisibleAdd(false)
              }}
            >
              <AddressForm onFinish={onFinish}/>
      </Popup>
      
    </Wrapper>
  )
}

AddressSelect.propTypes = {
  alladdress:propTypes.array
}

export default memo(AddressSelect)