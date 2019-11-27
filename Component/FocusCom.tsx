import React,{Component} from 'react';
export default class FocusCom extends Component{
  constructor(props)
  {
      super(props)
    this.state={
      data: ''
    }
    this.getvalue = this.getvalue.bind(this);
    
  };


getvalue(event)
{
  this.setState({
  data : event.target.value
  })

}

render()
{
  return (
    <div>
        <input type = "text" id="testValue" onChange={this.getvalue}/>
        <button>Click Me </button>
        <div id="textval">{this.state.data}</div>
    </div>
  )
}

}