class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.launchClock();
        this.state = { currentTime: new Date().toLocaleString('en') };
    }

    launchClock() {
        setInterval(() => {
            this.setState({
                currentTime: new Date().toLocaleString('en')
            });
        });
    }

    render() {
        console.log('Rendering Clock...');
        return React.createElement(
            'div',
            null,
            this.state.currentTime
        );
    }
}

ReactDOM.render(React.createElement(Clock, null), document.getElementById('content'));