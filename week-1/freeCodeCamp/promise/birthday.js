//это задачка из статьи, для повторения
// link :    https://www.freecodecamp.org/news/learn-promise-async-await-in-20-minutes/

function onMyBirthday(isFriendSick) {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(isFriendSick){
        reject(new Error('Сорри,бро, я болен'));
      } else {
        resolve(2)
      }

    },1000)
  })
}

onMyBirthday(true) //менять буль
  .then((result) =>{
    console.log(`я испек ${result} торта, с др!`)
  })
  .catch((error) =>{
    console.log(error)
  })
  .finally(() =>{
    console.log(' ну и собственно др')
  }
  )

