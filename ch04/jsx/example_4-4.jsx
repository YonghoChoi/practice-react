class HelloWorld extends React.Component {
    render() {
        return <h1 {...this.props}>Hello {this.props.frameworkName} world!!!</h1>
    }
}

ReactDOM.render(
    <HelloWorld/>,
    document.getElementById('content')
);