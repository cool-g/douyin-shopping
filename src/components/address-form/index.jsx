import React,{ memo } from 'react'
import './style.css'
import { Form,Input,Button,Toast } from 'antd-mobile'

function AddressForm(props) {
    const { onFinish } = props;
  return (
    <div>
      <Form
        layout='horizontal'
        onFinish={onFinish}
        footer={
            <Button block type='submit' size='large' className='button'
                onClick={() =>
                    Toast.show({
                    icon: 'success',
                    content: '保存成功',
                    })
                }
            >
                保存
            </Button>
        }
      >
        <Form.Header>新增收货地址</Form.Header>
        <Form.Item
            name='name'
            label='收货人'
            rules={[{message:'请填写收货人'}]}
        >
            <Input placeholder='请输入收货人姓名'/>
        </Form.Item>
        <Form.Item
            name='number'
            label='手机号'
        >
            <Input placeholder='请输入手机号'/>
        </Form.Item>
        <Form.Item
            name='address'
            label='所在地区'
        >
            <Input placeholder='请输入地区'/>
        </Form.Item>
        <Form.Item
            name='detail'
            label='详细地址'
        >
            <Input placeholder='小区楼栋、门牌号、村等'/>
        </Form.Item>
      </Form>
    </div>
  )
}

export default memo(AddressForm)