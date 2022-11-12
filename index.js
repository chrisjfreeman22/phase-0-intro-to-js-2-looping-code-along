function writeCards(nameArray, eventName){
    let newArrayOfMessages = []
    for (let i=0;i<nameArray.length;i++){
        console.log(i)
        newArrayOfMessages.push(`Thank you, ${nameArray[i]}, for the wonderful ${eventName} gift!`)
        console.log(newArrayOfMessages)
    }
  return newArrayOfMessages
}
function countDown(CountDownStartNumber){
    let x = CountDownStartNumber
    while (x != -1){
        console.log(x)
        x--
    }
}
writeCards(["tony","zaret"],"monday girlfriend")
countDown(20)
