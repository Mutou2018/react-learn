import Mock from 'mockjs';
const domain = '/api'

Mock.mock(domain+'getData',function(){
    let res = {
        code:'200',
        message:'ok',
        data:'test'
    }
    return res
})