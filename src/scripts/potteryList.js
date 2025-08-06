import { sellThatPottery } from './main.js';

export const potteryList = () => {

    let potteryHTML = '';

    for (const pottery of sellThatPottery) {
        
        potteryHTML += `
        <section class="pottery" id=${pottery.id}>
            <h2 class="pottery__shape">${pottery.shape}</h2>
                <div class="pottery__properties">'Item weighs ${pottery.weight} grams and is ${pottery.height} cm in height'</div>
                <div class="pottery__price">'Price is ${pottery.price}'</div>
        </section>
        `
    }

    return potteryHTML

}

export const renderPotteryToDOM = (potteryHTML) => {
   const potteryList = document.getElementById('finalPottery');

   if (potteryList) {
       potteryList.innerHTML = potteryHTML;
   } else {
       console.error('Could not find element with id finalPottery');
   }
};

