## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

- getElementById takes only string ID and return a single element.
- getElementsByClassName takes class name(s) only and returns HTMLCollection.
- querySelector takes any CSS selector and returns a single Element.
- querySelectorAll takes any CSS selector and returns a NodeList.

### 2. How do you create and insert a new element into the DOM?
- Using document.createElement() i can create any HTML element.
- Using appendChild() i can add ceated HTML element.
- For Example 
  - const newElement = document.createElement('div');
  - newElement.textContent = "Hello, I'm new here!";
  - newElement.className = "my-new-class";
  - document.body.appendChild(newElement);

### 3. What is Event Bubbling? And how does it work?
- Event Bubbling is a DOM event propagation mechanism where an event starts from the target element and then propagates upward through its parent elements up to the root.

- ## How It Works 
- When we interact with an element (like clicking a button),
the event follows a specific propagation path consisting of three phases:
  - Capturing Phase: The event travels from the window down to the target element. 
  - Target Phase: The event reaches the specific element that was clicked.
  - Bubbling Phase: The event rises from the target element back up to the root.


### 4. What is Event Delegation in JavaScript? Why is it useful?
- Event Delegation is a technique in JavaScript where you attach a single event listener to a parent element instead of adding listeners to multiple child elements. It works because of event bubbling.

## Why it’s useful:
- Improves performance.
- Works for dynamically added elements.
- Makes code cleaner and easier to manage.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
 - preventDefault() Stops the browser’s default action.
- stopPropagation() Stops the event from bubbling to parent elements.
- Difference: 
  - preventDefault() stops the browser’s behavior, while stopPropagation() stops the event flow in the DOM.
