var elapse=function(fn,time=3000){//立即执行，过3s后返回
    let action=new Promise((resolve)=>{
        fn()
        setTimeout(()=>{
            resolve()
        },time)
    })
    return action
}
var delay=function(fn,time=3000){//过3s后执行，返回
    let action=new Promise((resolve)=>{
        setTimeout(()=>{
            fn()
            resolve()
        },time)
    })
    return action
}