const scores = [100, 90, 80, 70, 60];

    // for .. of 문으로 코드 작성
    let length = 0
    let sumOfScore = 0
    for (let score of scores) {
      length += 1
      sumOfScore += score
    }
    console.log(length)
    console.log(sumOfScore)
    console.log(sumOfScore/length)

    // whil문으로 코드 작성
    while (length > 0) {
      length--
      console.log(scores[length])
    }