# Bank Tech Test

## Project Setup
In order to run this project and the relevant jest tests, please begin by cloning this repository. 
Once you have done so, please ensure you have the latest version of Node.js running on your device.

You can install Node.js by visiting their website: https://nodejs.org/en/

Once you have followed their instructions and installed node, you can install jest using 'npm install jest'.

To run jest, simply type 'jest' in the terminal.
If you'd like to test a specific file, type 'jest' followed by the name of any of the spec files (though be aware you need to either be in the spec 
folder or use the correct path to the file when running your test).
Alternatively, if you'd like to test the coverage of this project, please run 'jest --coverage' in the terminal.

Finally, please also be aware that this project uses ESLint, a tool that helps identify problematic code.
If you'd like to run this, please run 'npx eslint lib/{file_name}.js' in the terminal.

## Project Approach
I decided to approach this project, by first mapping out what classes I would need, and how those classes would interact with each other.
I did this using Excalidraw, and then I began to think about how the code would actually function; what functions each class would need, and how
those functions would operate, and also how I would go about testing those functions.

I decided to begin really simply by building out the deposit and withdraw classes. As far as I was concerned, those classes would be kept really short and
sweet, so were a perfect place to begin writing my tests and relevant code. I tried to think about all the possible ways I could test these single
function classes and, in the case of the withdraw class, realised quite early on I'd need to catch an error should the user try to withdraw more money
than they have in their account balance.

Once I was satisfied with how my withdraw and deposit classes looked, and that I had written enough tests for each of these classes, I moved on to
the account class, where I started out just by implementing and testing the deposit and withdraw functions that are in the final account.js file.

Originally, I had attempted to have the deposit and withdraw classes store all the information themselves, but this proved to be quite unwieldy,
so I decided to use these account functions to write out the functionality of storing all the transaction information.

Then, in the final phase of the project, I wrote out the statement class and the displayStatement function within the account class, which proved
to be fairly challenging as it made me re-evaluate and re-write other areas of my code to ensure everything functioned well together.

## Code Structure
Originally, I had planned for this project to have 3 classes. I knew I would need the withdraw and deposit classes right away, but I had assumed I
would only need the statement class on top of those. But when it came to actually writing for the 3rd class, I had real difficulties getting the 
code to function while trying to maintain the single responsibility principle.

After trying a few different ideas, I eventually landed on the idea of having 4 classes, which is what you can see in this version of the project.
I tried to ensure the deposit, withdraw and statement classes were as short as I could possibly write them; while the account class would be how the 
end user would interact with the app through Node, and also how the classes would generally interact with each other.


