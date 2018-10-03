class HelloWorld extends React.Component {
    render() {
        return React.createElement(
            'h1',
            this.props,
            'Hello ',
            this.props.frameworkName,
            ' world!!!'
        );
    }
}

ReactDOM.render(React.createElement(HelloWorld, null), document.getElementById('content'));