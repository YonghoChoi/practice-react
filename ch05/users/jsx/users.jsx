class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []   // 상태의 users에 빈 배열로 초기화
        }
    }

    componentDidMount() {
        fetch(this.props['data-url'])   // 속성으로 전달받은 URL로 GET XHR 요청을 보내 사용자 데이터를 가져옴
            .then((response) => response.json())
            .then((users) => this.setState({users: users}));    // 응답 결과에서 사용자 정보를 상태에 할당
    }

    render() {
        return <div className="container">
            <h1>List of Users</h1>
            <table className="table-striped table-condensed table table-bordered table-hover">
                <tbody>{this.state.users.map((user) =>
                    <tr key={user.id}>
                        <td>{user.first_name} {user.last_name}</td>
                        <td>{user.email}</td>
                        <td>{user.ip_address}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    }
}