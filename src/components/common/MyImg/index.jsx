import React, {useState, useEffect,memo} from 'react';
import classnames from 'classnames'
import './style.css'
/**
 * 图片加载失败就显示默认图片
 * @param {*} src  图片路径
 * @param {*} style  图片样式
 * @param {*} defaultImg  默认显示的图片路径
 */
const MyImg = ({src, defaultImg, className}) => {
    const [imgSrc, handleImageErrored] = useState(src);
    return (
        <img className={classnames({className:true},'img')}
            onError={() => handleImageErrored(defaultImg)}
            src={imgSrc}
        />
    );
}
export default memo(MyImg);