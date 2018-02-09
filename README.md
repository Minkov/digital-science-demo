# Part 1

_Home page_

1. Explain what is HTML
2. Write the HTML progressively
  - Start without \<html>, \<body>, etc...
  - Write plain text, then upgrade to \<h1>, \<a>, \<strong>
3. Add CSS as late as possible
  - When the HTML is almost ready
  - Add 
4. Show CSS selectors progressively
  - Use only selectors by tag name, without nesting
4. Show CSS \<html>, \<body>, etc...
  - Show only basic selectors
    - i.e. only tags
  - Background, color, borders, etc.
  - Initially use color aliases: pink, black, white
  - Later show hex colors
5. Arrange the two elements one beside the other
  - Introduce .class selector

# Part 2

_Navigation_

1. Explain navigation
2. Use \<ul>
3. Show how to use .nav class to select concrete \<ul>s
4. Use display: inline-block, istead of float:left
5. Use position:absolute for the dropdown

# Part 3

_Many pages and extenal CSS_

1. Make friends page
  - Put only \<h1>
  - Point out the styles are not applied
  - Copy the \<style>
2. Create friends' table
  - Stripped table, with :nth-of-type()
  - Different between \<th> and \<td>
3. Create current nav item
  - .active class in each HTML page
  - Add style
  - Edit the CSS in all pages
    - Solution: external CSS
3. Make contacts page
  - Ask about the styles
4. Explain about forms
  - Show Registration Form in my.telerikacademy.com 
5. Tags - \<form>, \<label>, \<input>s, \<select>
  - Style the buttons
  - Difference between \<a> and \<button> buttons

# Part 4 

1. Make trailers page
2. Show \<iframe> from YouTube
3. Remaining time, complete you projects


# Part 5

1. Introduce some JS
  - console.log(), alert(), document.body
2. Introduce jQuery
  - Add click event on the button with the form
3. Extract the navigation into separate file
  - show $().load() method
  - Use window.location to set .active in the navigation

# Part 6

1. Introduce AJAX
  - Use a predefined RESTfull API with GET and POST
2. Remove the static content of the "Friends" page with result from GET
3. Make the click event of the form to POST to the API
4. Show async operations using a loader
  - Create the loader into separate files
    - ui/loader.hmtl
    - css/loader.css
    - js/loader.js
5. Make the loader to:
  - Appear before sending HTTP request
  - Disappear after the request has result
6. Animate the dots (...) of the loader

