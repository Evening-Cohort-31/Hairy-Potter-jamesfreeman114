// Imports go first


import { makePottery } from './potteryWheel.js'
import { firePottery } from './kiln.js'
import { toSellOrNotToSell, usePottery } from './potteryCatalog.js'
import { potteryList, renderPotteryToDOM } from './potteryList.js'

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

let sellBowl = toSellOrNotToSell(firedBowl)
console.log(sellBowl)

let sellMug = toSellOrNotToSell(firedMug)
console.log(sellMug)

let sellVase = toSellOrNotToSell(firedVase)
console.log(sellVase)

let sellPlatter = toSellOrNotToSell(firedPlatter)
console.log(sellPlatter)

let sellPitcher = toSellOrNotToSell(firedPitcher)
console.log(sellPitcher)



// Invoke the component function that renders the HTML list

export const sellThatPottery = usePottery()
const potteryHTML = potteryList()
renderPotteryToDOM(potteryHTML)