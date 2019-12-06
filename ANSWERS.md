- [ ] Why would you use class component over function components (removing hooks from the question)?
    To have more control over the lifecycle component, cDM, cDU, cWU, etc.

- [ ] Name three lifecycle methods and their purposes.
    1) render() - render is a required method in every react class component. It handles the rendering of your component to the UI. You should not nidify state in render.

    2) ComponentDidMount() - cDM happens after component mount. It should hold initial API calls and browser interaction.
    
    3) ComponentDidUpdate() - cDU is invoked after an update. It does not fire on the initial render. You are able to access state and props prior to update.

- [ ] What is the purpose of a custom hook?
    With custom hooks you are able to make reusable components.

- [ ] Why is it important to test our apps?
    Simply put, so you can encounter, and fix, bugs in your app before a customer sees them. Preferably, focusing on case coverage as opposed to full code coverage. Which can be costly and time consuming.
