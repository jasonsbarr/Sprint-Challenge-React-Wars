# Answers

1. What is React JS and what problems does it try and solve?

React is a UI library you use to compose views for a web application. It solves the problem of providing a consistent, simple, performant way to manipulate the DOM, with event handling, updating the DOM based on the current application data state, and providing a smooth UX without forcing the developer to manage all the complexities that come with vanilla DOM scripting.

2. What does it mean to _think_ in react?

Instead of thinking of elements and the process of implementing DOM states and updates, thinking in React means visualizing the flow of data through an application and how to structure components in ways that most appropriately apply data to the visual elements of a design.

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

First, a class component is not inherently stateful. Both class and functional components can be stateless, though it's certainly more common to use functions for stateless components.

A stateful component holds its own state and passes changes in its state down to its subcomponents as needed.

A stateless component receives data in the form of props and renders a piece of UI based on its props. A stateless component should be pure, meaning it always renders the same output for the same given input and its output is a direct function of its input.

4. Describe state.

State is the current form of the data in an application or component. It can change over time based on user interactions, fetch operations, and other factors.

5. Describe props.

Props are values received by a component that are then used by the component to render a piece of UI.

If a prop is a function to handle an event, that prop is a pipeline to allow information to pass through the UI from the subcomponent to one that manages state so the stateful component can handle any changes and pass down a new set of props to the subcomponent as needed.
