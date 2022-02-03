function sleep(num) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve,num)
})}

sleep(1000)
  .then((result) => {
    console.log('foo')
  })


  
