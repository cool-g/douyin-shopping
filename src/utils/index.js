/**
 * @auther wsq
 * @func 把价格格式化成保留两位小数的价格
 * @param {String} Number 
 * @param {String} newPrice
 */
export const FormatPrice = (price) => {
    // if(!price) return [0,00];
    // price有小数部分
    let newPrice =[];
    // Number类型转为String类型
    price=price+'';
    if(price.indexOf('.') !== -1){
        let nums = price.split('.');
        newPrice[0]=nums[0];
        if(nums[1].length<2){
            newPrice[1] = `${nums[1].slice(0,1)}0`
        }else {
            newPrice[1] = `${nums[1].slice(0,2)}`
        }
    } else { // price为整数 没有小数部分
        newPrice[0] = price;
        newPrice[1] = '00'
    }
    return newPrice;
}


/**
 * 防抖
 * @param {Object} func 
 * @param {Number} delay 
 * @returns 
 */
const debounce = (func, delay) => {
    let timer;
    return function (...args) {
      if(timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        func.apply(this, args);
        clearTimeout(timer);
      }, delay);
    };
  };
  
  export { debounce };
