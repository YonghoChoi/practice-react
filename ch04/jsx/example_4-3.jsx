class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.launchClock();
        this.state = {currentTime: (new Date()).toLocaleString('en')}
    }

    launchClock() {
        setInterval(() => {
            this.setState({
                currentTime: (new Date()).toLocaleString('en')
            })
        })
    }

    render() {
        console.log('Rendering Clock...');
        return <div>{this.state.currentTime}</div>
    }
}

ReactDOM.render(
    <Clock/>,
    document.getElementById('content')
);