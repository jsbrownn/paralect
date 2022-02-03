//задачка из статьи
//link: https://www.freecodecamp.org/news/learn-promise-async-await-in-20-minutes/


// The requirements:

// User story: A user can enter a number
// User story: The system picks a random number from 1 to 6
// User story: If the user's number is equal to a random number, give the user 2 points
// User story: If the user's number is different than the random number by 1,
// give the user 1 point. Otherwise, give the user 0 points
// User story: The user can play the game as long as they want to


const enterNumber = () => {
  return new Promise((resolve, reject) => {
    const userNumber = + prompt('Введите число от 1 до 6')
    const randomNumber = Math.floor(Math.random() * 6 + 1) //рандомное число от 1 до 6
    if (isNaN(userNumber)) {
      reject(new Error('Введите ЧИСЛО'))
    }

    if (userNumber > 6 || userNumber < 1) {
      reject(new Error('Ваше число должно находится в диапазоне от 1 до 6'))
    }

    if (userNumber === randomNumber) {
      resolve({
        points: 2,
        randomNumber
      })
    }
    else if (
      userNumber + 1 === randomNumber ||
      userNumber - 1 === randomNumber
    ) {
      resolve({
        points: 1,
        randomNumber
      })

    }
    else {
      resolve({
        points: 0,
        randomNumber
      })
    }

  })
}

const continueGame = () => {
  return new Promise((resolve, reject) => {
    if (confirm('Хотите продолжить?')) {
      resolve(true);
    } else {
      resolve(false);
    }
  })
}


const handleGuess = () => {
  enterNumber()
    .then((result) => {
      alert(`загаданное число: ${result.randomNumber}:вы получили ${result.points} очка(ов)!`)
      continueGame()
        .then((result) => {
          if (result) {
            handleGuess()
          } else {
            alert('Игра окончена')
          }
        })
    })
    .catch((error) => {
      alert(error)
      handleGuess()
    })


}

handleGuess()
