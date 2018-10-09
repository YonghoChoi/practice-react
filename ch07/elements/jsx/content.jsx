class Content extends React.Component {
  constructor(props) {
    super(props)
    this.handleRadio = this.handleRadio.bind(this)
    this.handleCheckbox = this.handleCheckbox.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSelectChange = this.handleSelectChange.bind(this)
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
    this.state = {
      description: `With the right pattern, applications will be more scalable and easier to maintain.
If you aspire one day to become a Node.js architect (or maybe you're already one and want to extend your knowledge), this presentation is for you.`,
      radioGroup: {
        angular: false,
        react: true,    // 상태에서 기본으로 선택된 라디오 버튼을 설정
        polymer: false
      },
      checkboxGroup: {
        node: false,
        react: true,
        express: false,
        mongodb: false
      },
      selectedValue: 'node'
    }
  }
  handleRadio(event) {
    let obj = {}
    obj[event.target.value] = event.target.checked // true. target.checked 속성을 이용해서 라디오 버튼이 선택되었는지 여부 확인
    this.setState({radioGroup: obj})
  }
  handleCheckbox(event) {
    let obj = this.state.checkboxGroup
    obj[event.target.value] = event.target.checked // true or false
    this.setState({checkboxGroup: obj})
  }
  handleChange(event) {
    console.log('onChange event: ', event.target.value, event.target.checked)
  }
  handleInput(event){
    console.log('onInput event: ', event.target.value, event.target.checked)
  }
  handleFirstNameChange(event) {
    this.setState({firstName: event.target.value})
  }
  handleSubmit(event){
    console.log(event.target.value, event.target.checked)
    fetch(this.props['data-url'], {method: 'POST', body: JSON.stringify(this.state)})
      .then((response)=>{return response.json()})
      .then((data)=>{console.log('Submitted: ', data)})
  }
  handleSelectChange(event) {
    this.setState({selectedValue: event.target.value})
    console.log(event.target.value, event.target.selected)
  }
  render() {
    return <div className="container">
      <form  onSubmit={this.handleSubmit}>
        <h2>input: text</h2>
        <input type="text" name="new-book-title" defaultValue="Node: The Best Parts"/>
        <hr/>
        <h2>input: password</h2>
        <input type="password" defaultValue="123456" onChange={this.handleChange} onInput={this.handleInput}/>
        <hr/>
        <h2>input: radio</h2>
        <label>
          <input type="radio" 
          name="radioGroup" 
          value='angular'
          checked={this.state.radioGroup['angular']}  // 상태 객체 또는 상태 객체에 있는 한 값에서 필요한 값을 가져와서 사용할 수 있음
          onChange={this.handleRadio}/>   // target.value로 라디오 버튼의 value를 확인할 수 있으므로 동일한 onChange 이벤트 핸들러 사용
          Angular
        </label>
        <br/>
        <label>
          <input type="radio" name="radioGroup" value='react' checked={this.state.radioGroup['react']} onChange={this.handleRadio}/>
          React
        </label>
        <br/>
        <label>
          <input type="radio" name="radioGroup" value='polymer' checked={this.state.radioGroup['polymer']} onChange={this.handleRadio}/>
          Polymer
        </label>
        <hr/>
        <h2>input: checkbox</h2>
        <label>
          <input
            type="checkbox"
            name="checkboxGroup"
            value='node'
            checked={this.state.checkboxGroup['node']}
            onChange={this.handleCheckbox}/>
          Node
        </label>
        <br/>
        <label>
          <input
            type="checkbox"
            name="checkboxGroup"
            value='react'
            checked={this.state.checkboxGroup['react']}
            onChange={this.handleCheckbox}/>
          React
        </label>
        <br/>
        <label>
          <input
            type="checkbox"
            name="checkboxGroup"
            value='express'
            checked={this.state.checkboxGroup.express}  // 키가 유효한 자바스크립트 이름이면 점 표기법 사용할 수 있음
            onChange={this.handleCheckbox}/>
          Express
        </label>
        <br/>
        <label>
          <input
            type="checkbox"
            name="checkboxGroup"
            value='mongodb'
            checked={this.state.checkboxGroup['mongodb']}
            onChange={this.handleCheckbox}/>  // 생성자에 바인딩 했으므로 요소에서 바인딩하지 않음 (모든 체크박스에 적용)
          MongoDB
        </label>
        <hr/>
        <textarea
          name="description"
          defaultValue={this.state.description}
          onChange={this.handleChange}/>
        <hr/>
        <textarea
          name="description1"
          defaultValue={"Pro Express.js is for the reader\nwho wants to quickly get up-to-speed with Express.js, \nthe flexible Node.js framework"}
          onChange={this.handleChange}/>
        <hr/>
        <select value={this.state.selectedValue} onChange={this.handleSelectChange}>
          <option value="ruby">Ruby</option>
          <option value="node">Node</option>
          <option value="python">Python</option>
        </select>
        <hr/>
        <select multiple={true} defaultValue={['meteor', 'react']} readOnly>
          <option value="meteor">Meteor</option>
          <option value="react">React</option>
          <option value="jQuery">jQuery</option>
        </select>
        <hr/>
        <h2>input: first name [text]</h2>
        <input type="text" name="first-name" onChange={this.handleFirstNameChange}/>
        <hr/>
        <h2>input: button</h2>
        <input type="button" defaultValue="Send" onClick={this.handleSubmit}/>
        <hr/>
        <input type="text" name="title" value="Mr." />

      </form>
    </div>
  }
}