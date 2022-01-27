function sleep(num){
  return new Promise((resolve,reject)=>{
   setTimeout(()=>{

   },num)
  })
}

sleep(5000).then((resolve)=>{
  console.log('foo')
})
