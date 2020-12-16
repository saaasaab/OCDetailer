# OCDetailer README

This is the README for the "OCDetailer" extension. OCDetailer will format a selection of code based on given delimiters.

Creating beautifully spaced code.

OCDetailer is language agnostic, works for every single programming language.

![OCDetail Examples](https://i.imgur.com/fJrZukE.gif)

## To run the extension,

1. Select the lines of code you want to format,
1. Click on the extension
1. A prompt will appear so you can enter the order of delimiters
1. Hit enter and you'll be left with amazing code that's easy to read.

Note: You can use entire words as a delimiter. Wrap the word between two @ symbols. For example,

## Features

### **Example 1: Routes**

Type in the following to line up the code to the first ','

> ENTER: ' , ' (without the quotation marks)

![Routes pre OCDetail](https://imgur.com/cuZZeUH.png)

To this:

![Routes post OCDetail](https://imgur.com/FQjqmlb.png)

### **Example 2: States**

or even better, type in

> ENTER: ' ,]= ' :
> to line up the code at the comma, then close square bracket, then equal sign.

![States pre OCDetail](https://imgur.com/cuBZc1M.png)

To this:
![States post OCDetail](https://imgur.com/UCLosds.png)

### **Example 3: Imports**

type in @from@ to use 'from' as the delimiter. You can use any string as a delimiter as long as you place the string between the @ signs.

> @from@

![Imports pre OCDetail](https://imgur.com/GtU3JnU.png)

To this:
![Imports post OCDetail](https://imgur.com/9HK86Eq.png)

### **Example 4: Variables**

> ENTER: ' = '

![Variables pre OCDetail](https://imgur.com/AEyJh2h.png)

To this:
![Variables post OCDetail](https://imgur.com/FE1iYZq.png)

### **Example 5: Objects**

> ENTER: ' :, '

![Variables pre OCDetail](https://imgur.com/bUKQNb7.png)

To this:
![Variables post OCDetail](https://imgur.com/jYa1Ajt.png)

### **Example 6: Arrays**

> ENTER: ' ,,,] '

![Variables pre OCDetail](https://imgur.com/2uNVQUL.png)

To this:
![Variables post OCDetail](https://imgur.com/HWWyiqM.png)

## Known Issues

- You can't use @ as a delimiter because it is the special character reserved for word delimiters
- If you are using a list that has commas at the end, make sure the last element has a comma. Otherwise the sort fuction will place the rows out of place.
