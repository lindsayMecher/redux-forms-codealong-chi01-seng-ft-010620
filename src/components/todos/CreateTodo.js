import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { addTodo } from './actions';

class CreateTodo extends Component {
  // hook up local state
  constructor(){
    super()
    this.state = {
      text: ""
    }
  }

  handleOnSubmit = event => {
    event.preventDefault()
    console.log("submit", this.state)
    this.props.addTodo(this.state)
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    console.log(this.props)
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <p>
            <label>add todo</label>
            <input 
            type="text"
            name="text"
            onChange={(event) => this.handleOnChange(event)}
            value={this.state.text}
            />
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (formData) => dispatch({type: "ADD_TODO", payload: formData})
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
