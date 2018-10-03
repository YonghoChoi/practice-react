class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentTime: new Date().toLocaleString('en') };
    }

    render() {
        return React.createElement(
            'div',
            null,
            this.state.currentTime
        );
    }
}

ReactDOM.render(React.createElement(Clock, null), document.getElementById('content'));