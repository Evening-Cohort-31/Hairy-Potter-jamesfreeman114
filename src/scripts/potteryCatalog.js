let potteryToBeSold = []

export const toSellOrNotToSell = (potteryObject) => {
    if (potteryObject.cracked === false && potteryObject.weight >= 6) {
        potteryObject.price = 40;
    } 
    
    if (potteryObject.cracked === false && potteryObject.weight < 6)  {
        potteryObject.price = 20;
    }

    if (potteryObject.cracked === false) {
        potteryToBeSold.push (potteryObject);
    }
    
return potteryObject
}

export function usePottery() { 
    return structuredClone(potteryToBeSold);
}


