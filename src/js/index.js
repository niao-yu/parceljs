console.log("hello world!");

Promise.resolve('成功').then(data => {
  const constString = 'const 字符串'
  console.log('Promise实验', `${data} ${constString}`)
})