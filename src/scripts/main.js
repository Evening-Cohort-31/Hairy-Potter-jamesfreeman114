// Imports go first


import { makePottery } from './potteryWheel.js'
import { firePottery } from './kiln.js'

// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 7, 5)
console.log(mug)

let vase = makePottery("Vase", 9, 6)
console.log(vase)

let bowl = makePottery("Bowl", 5, 2)
console.log(bowl)

let platter = makePottery("Platter", 4, 1)
console.log(platter)

let pitcher = makePottery("Pitcher", 8, 6)
console.log(pitcher)



// Fire each piece of pottery in the kiln

let firedMug = firePottery(mug, 2500)
console.log(firedMug)

let firedVase = firePottery(vase, 2000)
console.log(firedVase)

let firedBowl = firePottery(bowl, 2100)
console.log(firedBowl)

let firedPlatter = firePottery(platter, 1800)
console.log(firedPlatter)

let firedPitcher = firePottery(pitcher, 2199)
console.log(firedPitcher)



// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

