## Routing

### EX
- split your todo app to different page
- list page will display the TodoList and a search component above the list to filter the list with a search term
  * the server can accept search query https://nztodo.herokuapp.com/api/task/?format=json&search=search-term
  * make sure that when you search the url is added with the query param
- clicking an item from the todo list will bring us to the todo item page /todo/:id
  * the server can get a request for a single item https://nztodo.herokuapp.com/api/task/:id/?format=json
- There is also a page with a form to add a new task which you can get to from a navigation bar
- The todo item page contain a form like the new task with the items filled with the item details, there is also an update button on that page to update with new values