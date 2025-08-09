# The Hairy Potter

In this project, your task to build a workflow for making, and firing pottery, and then determining if it should be sold at a craft show. Then you will display the pottery to be sold in the DOM.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Setup

```sh
cd hairy-potter
cd src
code .
```

1. Run the `serve` command to start the web server.
1. Open the URL provided by `serve` in your browser.

## Requirements

### Making Pottery at the Wheel

1. Create a `scripts/PotteryWheel.js` module.
1. Define a variable in the module to have the value of the primary key for each piece of pottery. It should have an initial value of 1.
1. Define and export a function named `makePottery`.
1. The `makePottery` function must accept the following values as input _(i.e. it needs parameters)_, in the following order.
   1. Shape of the piece of pottery (e.g. "Mug", "Platter")
   1. Weight of the piece (e.g. 1, 5)
   1. Height of the piece (e.g. 3, 7)
1. The `makePottery` function must return an object with the following properties on it.
   1. `shape`
   1. `weight`
   1. `height`
   1. `id` _(increment this value each time the function is invoked)_

#### Checking Your Work

In the `main.js` module, invoke the `makePottery` function and provide the required values as arguments. Store the object that gets returned into a variable, and then use `console.log()` to view the object.

Once you have it working, make 5 pieces of pottery in `main.js`.

**THEN PUSH YOUR CODE TO GITHUB**

### Firing the Pottery in the Kiln

1. Define a `scripts/Kiln.js` module.
1. Define and export a function named `firePottery` that is responsible for acting as a kiln.
1. The function must accept the following values as input _(i.e. it needs parameters)_, in the following order. If you don't remember, you can easily [add new properties to objects in JavaScript](https://www.dyn-web.com/tutorials/object-literal/properties.php).
   1. An object representing a piece of pottery that was made at the wheel in the `makePottery` function.
   1. A number specifying the firing temperature of the kiln.
1. The function must add a new property of `fired` with the value of `true` to the object.
1. The function must add a new property of `cracked` to the object.
   1. If the temperature of the kiln is above 2200 degrees then `cracked` property must have a value of `true`.
   1. If the temperature of the kiln is at, or below, 2200 degrees then `cracked` property must have a value of `false`.
1. After both of the new properties have been added, return the augmented object.

#### Checking Your Work

In the `main.js` module, invoke the `firePottery` function for each of the 5 pieces of pottery you created. Ensure you provide the required values as arguments. Store the object that gets returned into a variable, and then use `console.log()` to view the objects and make sure it has the right properties on each.

To check your work, make sure that at least one of your pieces of pottery is fired at a temperature that is too high.

**THEN PUSH YOUR CODE TO GITHUB**

### Pricing Uncracked Pottery

1. Create a `scripts/PotteryCatalog.js` module.
1. Define a variable in the module with a value of an empty array. This array will store pottery that will be sold. Do not export this array.
1. Define and export a function named `toSellOrNotToSell` that is responsible for determining if a piece of pottery should be sold.
1. The `toSellOrNotToSell` function must accept a pottery object as input.
1. If the weight of the piece of pottery is greater than, or equal to, 6 then the function must add a `price` property with a value of 40.
1. If the weight of the piece of pottery is less than 6 then the function must add a `price` property with a value of 20.
1. If the piece of pottery is cracked, do not add a `price` property to it.
1. If the pottery is **not** cracked, add the object to the module-level array of items to be sold.
1. Return the augmented object.
1. Define and export a function named `usePottery` returns a copy of the array of items to be sold. Recall which global javascript function creates a deep copy of values.

#### Checking Your Work

In the `main.js` module, invoke the `toSellOrNotToSell` function for each of the 5 pieces of pottery you created. Ensure you provide the required value as an argument.

**THEN PUSH YOUR CODE TO GITHUB**

### Display the Catalog

Your next task is to create HTML representations of the pottery you want to sell at the craft fair and display them on the DOM. Then you will track which ones you sell.

#### Define DOM Target

1. Create an `<article>` element in the `index.html` file.
1. The article element must have a class of `potteryList`.

#### Create Pottery HTML

1. Create a `scripts/PotteryList.js` module.
1. Define and export a `PotteryList` function.
1. The `PotteryList` function must get the items to be sold from the `PotteryCatalog.js` module.
1. The `PotteryList` function must convert each object in the array to an HTML representation string. Use the following template to generate the representations.
   ```html
   <section class="pottery" id="pottery--1">
     <h2 class="pottery__shape">Mug</h2>
     <div class="pottery__properties">
       Item weighs 3 grams and is 6 cm in height
     </div>
     <div class="pottery__price">Price is $20</div>
   </section>
   ```
1. The `PotteryList` function must then return a single string that contains ALL of the pottery HTML representation.

#### Checking Your Work

In the `main.js` module, invoke the `PotteryList` component function. Take its return value and update the inner HTML of the article element you created above. When you start your web server, you should see your non-cracked pottery list appear (_example below_).

![example output](./src/images/pottery.png)

**THEN PUSH YOUR CODE TO GITHUB**


## Vocabulary and Understanding

> 🧨 Before you click the "Assessment Complete" button on the Learning Platform, add your answers below for each question and make a commit. It is your option to request a face-to-face meeting with a coach for a vocabulary review.

1. Explain how you got the HTML, with the correct data, displayed in the browser?

Displaying the HTML in browser with the correct data requires the use of two functions in the potteryList.js module. The first function, potteryList, uses a for..of loop to iterate over the array of objects stored in the variable 'sellThatPottery' that is imported from the main module. For each object in the array, the value for the keys: id, shape, weight, height, and price are placed within an html string that repeats itself for each of the objects until it finally returns a single string with all the html code.

The second function, renderPotteryToDOM, accepts the html string created by the 'potteryList' function as a parameter, targets the specific id container 'finalPottery' using the 'document.getElementById' method, and then finally updates the inner HTML of this element using the '.innerHTML' method. If for any reason, the function is unable to find an html element with an id of 'finalPottery' it will display an error message of: 'Could not find element with id finalPottery.'


2. In the **PotteryList** module, when you iterate your pottery, you need to show the evidence of what the **weight** property's value is for the 2nd piece of pottery.


https://www.loom.com/share/0855549ebbdd4a3b8ce9af5f7e24ba12?sid=3617bc32-3a95-4477-b456-7a6c76773b27


3. The **PotteryWheel** module has a single function named `makePottery`. Why doesn't that module have all of the other code in it?

The main reason for having only a single function in the 'potteryWheel' module is organization. If this project was shared with multiple people, and someone else needed to update the code in 'makePottery' it could easily be found and changed. 


4. The pottery shop has learned that there is a set of customers that are willing to buy cracked pottery at a discounted price of $2.50. That means that the cracked pottery should now be displayed in the catalog. Explain the changes that this new business strategy would cause to your algorithm.
   
This new change would require the code for the function 'toSellOrNotToSell()' in the potteryCatalog module to be updated and push the cracked pottery objects into the 'potteryToBeSold' array with a price value of $2.50. This could be done by adding the following lines of code into the function:

if (potteryObject.cracked === true)  {
        potteryObject.price = 2.50;
        potteryToBeSold.push(potteryObject);
    }

This will check each object's value for 'cracked' and if the value is "true" the function will now add a price key with a value of 2.50 to the object then push it into the 'potteryToBeSold' array. Now that the cracked pottery is in this array, it will be exported using the usePottery() function along with the un-cracked pottery. The cracked pottery objects will now be included in the next two steps in the algorithm which generate the html string then display it in the browser.


5. In the **Kiln** module, you have a `firePottery()` function. You need to demonstrate how to use the debugger to verify the values of the parameters for that function when your code runs. Use [Loom](https://www.loom.com/) to record your browser window with the developer tools open and show those values.
   
   
https://www.loom.com/share/4b1c355dc13c403f93c9ad2f6dbeebcf?sid=075aad97-ac53-4ae6-9fcd-499c0f03472c