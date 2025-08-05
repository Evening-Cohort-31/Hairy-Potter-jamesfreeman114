let potteryId = 1

export const makePottery = (shape, weight, height) => {
    const pottery = {
        shape: shape,
        weight: weight,
        height: height,
        id: potteryId ++,
    }

    return pottery 

}