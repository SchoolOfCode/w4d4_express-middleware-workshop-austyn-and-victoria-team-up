# Express Middleware Workshop

Today, you've been hired by a small bookshop to expand their API to add some useful functionality.

## Task 1: What Is Being Requested?

What the owner wants here is every time a request comes into the API, they can have a log in the console of what is being requested.  

Create a piece of [middleware](https://expressjs.com/en/guide/using-middleware.html) in `index.js`. 

- First, structure your middleware so that it console.logs "Request received!" each time your server recieves a request. Run your server and test this to make sure that the console.log appears when a request comes in, and the request is still handled correctly.
- Once your middleware is working, refactor it so that it also logs the body of the request in the console.

<details>
 <summary>Click here for a hint!</summary>
 - Remember that the request is an object, and body is a property on that object. You can console.log your request object to investigate further!
 - Don't forget to use your next() function so that the request continues through the middleware chain to your request handlers.
</details>

## Task 2: Can We Get A Time On That?

When a new book is added to the API, the owner wants to have a timestamp added to the record.  Create a piece of middleware that adds a date and time to POST requests.

- Create another piece of middleware. In it, use JavaScript's built in [Date object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) to generate a timestamp (a string with the current date and time). Start by console.logging this with each request to ensure it's working.
- Now use your middleware to add a property `timestamp` to your request body. 

<details>
 <summary>Click here for a hint!</summary>
 - Remember that the request is an object, and method is a property on that object.
 - If you need a refresher, use the docs to review how to work with objects: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
 - Don't forget to use console.log (such as console.logging your request body) to check if it's working!
</details>

## Bonus tasks:

Once you have your middleware above up and running, if you have extra time, try out the challenges below.

### Can We Check We Have It?

Whenever the API tries to change something that doesn't exist, there's a problem - it seems to break.  At the moment, it's ok as the owner is the only person doing this - but we need to make sure others can do this in future. Create a piece of middleware that will help to protect against books that don't exist.

- Check if the book exists.
- If the book doesn't exist, add a property of `error` with the value `true` to the request body.

### Can We Stop People Seeing Without It Being Deleted From Our Records?

The owner wants to keep historic records with this API via a "soft delete" - if a book is deleted, instead of being removed, we want it to stay in the data but not be available through GET requests. 

- Modify the DELETE route to only add `deleted: true` to the book instead of fully deleting the book from the data.
- Then, create a piece of middleware for GET requests that returns a response of "book not found" if the book has the value `deleted: true`.

## Resources

- [Express docs on using middleware](https://expressjs.com/en/guide/using-middleware.html)
- [Rithm School article on Express middleware with examples](https://www.rithmschool.com/courses/node-express-fundamentals/helpful-express-middleware)




  
