const now = new Date('January 21 2018 6:25:01')
const timestamp = now.getTime()

const myDate = new Date(timestamp)
console.log(myDate.getFullYear())

// const now = new Date()
// console.log(now.toString())
// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth()}`)
// console.log(`Day of the Month: ${now.getDate()}`)
// console.log(`Minutes: ${now.getMinutes()}`)
// console.log(`Seconds: ${now.getSeconds()}`)


// 1. create two dates in the past (use string for date)
// 2. get timestamps for both
// 3. figure out which is first and print its time(use tostring)

const dateOne = new Date('September 21 2020 09:15:00')
const dateTwo = new Date()
const dateOneTimeStamp = dateOne.getTime()
const dateTwoTimeStamp = dateTwo.getTime()

if (dateOneTimeStamp < dateTwoTimeStamp) {
    console.log(dateOne.toString())
} else if (dateTwoTimeStamp < dateOneTimeStamp) {
    console.log(dateTwo.toString())
}