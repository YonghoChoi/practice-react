class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.launchClock();
        this.state = {
            counter: 0,
            currentTime: (new Date()).toLocaleString('en')
        }
    }

    launchClock() {
        setInterval(() => {
            this.setState({
                counter: ++this.state.counter,
                currentTime: (new Date()).toLocaleString('en')
            })
        }, 1000)
    }

    render() {
        if(this.state.counter > 2) return;
        return <Logger time="{this.state.currentTime}"/>;
    }
}

class Logger extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor');
    }

    componentWillMount() {
        console.log('componentWillMount 실행');
    }

    componentDidMount(e) {
        console.log('componentDidMount 실행');
        console.log('DOM node: ', ReactDOM.findDOMNode(this));
    }

    componentWillReceiveProps(newProps) {
        console.log('componentWillReceiveProps 실행');
        console.log('새로운 속성 ', newProps);
    }

    shouldComponentUpdate(newProps, newState) {
        console.log('shouldComponentUpdate 실행');
        console.log('새로운 속성: ', newProps);
        console.log('새로운 상태: ', newState);
        return true;
    }

    componentWillUpdate(newProps, newState) {
        console.log('componentWillUpdate 실행');
        console.log('새로운 속성: ', newProps);
        console.log('새로운 상태 ', newState);
    }

    componentDidUpdate(oldProps, oldState) {
        console.log('componentDidUpdate 실행');
        console.log('이전 속성: ', oldProps);
        console.log('이전 상태 ', oldState);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        return (
            <div>{this.props.time}</div>
        )
    }
}

ReactDOM.render(
    <Clock/>,
    document.getElementById('content')
);