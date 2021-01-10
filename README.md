# React官方给了一个基于脚手架的一个简单小效果的页面
    npm i create-react-app -g
# 消息订阅 发布消息
    pubsub-js
    PubSub.fa("dongxi",data)
    PubSub.ding("dongxi",hanshu(dongxi,data))
    缺点：
        1.乱
        得集中式管理
# 组件间通信
    方式1：props：共有的放到父组件
    2.PubSub
    3.redux
# 路由
    后端路由：key-value 请求方式-url
    前端路由：key-value   npm i react-router-dom value是组件 key是url
    spa应用：只有一个完整的页面  点击页面的链接不会刷新页面 也不会向服务器发送请求
    点击路由链接时 只做页面的局部更新
    数据都需要通过ajax请求 在前端异步展现
    pages 路由组件 不用一般组件
    模糊匹配  想要精准匹配需要 在route里面写上exact={true} 或者直接写上exact
    <Redirect to='/jian'/> 设置默认匹配 放到最后
    路由切换时 组件卸载
    hashrouter 和 浏览器router差别就是hashrouter多了一个# 表示这是前端的路由
    在修改路由时 会修改浏览器的历史记录 浏览器的历史记录为栈结构
    在浏览网页时压栈  点击后退按钮是弹栈 弹出去的数据有一个队列接受 点击前进时再进行队列弹出 同时压栈
    想要操作路由时没有历史记录就要在记录路由的 标签里面添加 replace={true} 或者replace
    路由组件 和 一般组件 的区别：
    路由组件的props刚开始有三个：
    history：goBack() goForward() push() replace()
    location：pathname:""
    match：params:{}
    {...this.props} 会默认把childern的东西展示到标签内
    ui组件库 antd 蚂蚁
## 采用%PUBLIC_URL%加到引入的css文件的前缀里就可以实现 当路由里面有多个/ / 导致的css等文件的失效的问题 或者删除了当前的相对路径的 "." 或者采用hashrouter