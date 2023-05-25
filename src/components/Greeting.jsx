function Greeting(props) {
    const { message = "Je suis un prop defaut" } = props;
    /**
     * NOTEIMPORTANT: in this current version of React, defaultProps is not supported
     * this is the way to create default props
     * it is by destructuring the property
     * this can be done like this: const { message = "Je suis un prop defaut" } = props
     * where the whole props object is the argument of the function component like this: function Greeting(props) {}
     * or
     * we can do it the way it suggests in the documentation, destructuring right from the function argument, again, which is the props object:
     * function Greeting({ message = "Je suis un prop defaut" })
     */
    return <div>{message}</div>;
}

export default Greeting;
