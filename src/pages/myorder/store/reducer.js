import * as actionTypes from './constants'

const defaultState = {
    // 所有订单列表
    orderList:[],
    // 展示的订单列表
    showOrderList:[],
    // 推荐列表
    recommendList:[],
    // 显示加载中
    enterloading:true,
    // tab 列表
    tabList:[
        {id:1,name:'全部',count:0},
        {id:2,name:'待支付',count:0},
        {id:3,name:'待发货',count:0},
        {id:4,name:'待收货/使用',count:0},
        {id:5,name:'评价',count:0},
        {id:6,name:'退款',count:0}
    ],
    addList:[]
}

/**
 * 统计每个tab下的订单数
 * @param {Array} data 
 * @param {Array} tabList 
 * @returns 
 */
const getTabCount = (data,tabList) => {
    let tab;
    tabList[0].count=data.length;
    for(tab of tabList){
      if(tab.name=='全部') continue;
      let count = data.filter(item => item.state==tab.name).length;
      tab.count=count;
    }
    return tabList;
  }

const showList = (list,tab,query) => {
    let resultList=list;
        if(tab&&tab!=='全部'){
            resultList=resultList.filter(item => 
                item.state==tab);
        }
        if(query){
            resultList=resultList.filter(item => 
                item.title.includes(query));
        }
    return resultList;
}

const deleteOrder = (list,id) => {
    return list.filter(item => item.id!==id);
}

export default (state = defaultState,action) => {
    switch(action.type){
        case actionTypes.CHANGE_ORDER_LIST:
            let neworderlist = [
                ...state.addList,
                ...action.data
            ];
            return {
                ...state,
                orderList:neworderlist,
                tabList:getTabCount(neworderlist,state.tabList)
            }
        case actionTypes.UPDATE_ORDER_LIST:
            
            return {
                ...state,
                showOrderList:showList(state.orderList,action.data.tab,action.data.query)
            }
        case actionTypes.DELETE_ORDER:
            let newlist = deleteOrder(Object.assign([],state.orderList),action.id);
            return {
                ...state,
                orderList:newlist,
                showOrderList:deleteOrder(Object.assign([],state.showOrderList),action.id),
                tabList:getTabCount(newlist,state.tabList)
            }
        case actionTypes.CHANGE_RECOMMEND_LIST:
            return {
                ...state,
                recommendList:action.data
            }
        case actionTypes.CHANGE_ENTER_LOADING:
            return {
                ...state,
                enterloading:action.data
            }
        case actionTypes.ADD_ORDER:
            return {
                ...state,
                addList:[ 
                    ...action.data,
                    ...state.addList
                ]
            }
        default:
            return state;
    }
}