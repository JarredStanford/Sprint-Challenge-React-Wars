# Answers

1.  What is React JS and what problems does it try and solve?

    React is a library that utilizes a vitrual DOM to update only the parts of the DOM that are required to achieve the current state. This reduces the overall number of DOM operations and reduces the amount of repetitive code in our app. We no longer have to querySelector for every single class we want to touch.

1.  What does it mean to _think_ in react?

    Thinking in React is all about dataflow. You must understand how data is flowing from one component to another within your App. Since we no longer need to focus on repetitive boilerplate code, we can spend more time visualizing how our app works.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

    A class component can hold state and pass it along to other functions. Class components can be interacted with and have their state updated. A functional component has no state and interaction will not allow it to change other components in your app.

    The other obvious difference is the class syntax vs normal const declaration. Functional components are simpler and Facebook even claims there may be a performance boost for functional components at some point.

1.  Describe state.

    State is used to store 'private' data in our component that can be updated overtime. We can pass state to other components in the form of props. State is a representation of the DOM for a given point in time.

1.  Describe props.

    Props are properties that can be passed into a child component similar to arguments in a function call. They cannot be updated.
