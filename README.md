# Express Code Challenge

This code challenge has a large amount of the functionality stubbed out for you:

* The entire front end has already been written!
* Some parts of the server code have been filled in for you!

## TODO
Your goal is to add functionality to the server to be able to **add** and **retrieve** cats.

### Adding cats

Adding new cats should be accomplished by sending a POST request to the route `/cats`. The parameters for the body of the request are the cat's `name` and `age`.

### Retrieving cats

The server should also support retrieving a list of all of the cats that have been created: Make GET requests to the `/cats` route. The response should return a JSON object with a property of `cats`. The value of `cats` should be a list of the cat objects that have been created. For example:

```JSON
{
	"cats": [{
		"name": "Simone de Beauvoir",
		"age": "2"
	}, {
		"name": "Minnie",
		"age": "3"
	}]
}
```

## Remember
You can check your work by visiting `localhost:3000` in a browser and using the form to add new cats. Each time you submit a new cat, a new entry should appear in the list.

**IMPORTANT:** All of your changes should take place inside the `server.js` file *OR* a corresponding route file. You don't need to mess with any of the other files that are included in this challenge.

Good luck!
