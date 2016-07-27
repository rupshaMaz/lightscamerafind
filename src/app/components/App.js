import React from 'react'
import { browserHistory } from 'react-router'
export default class App extends React.Component {
constructor() {
super();
}
handleChange(value) {
this.value = value;
browserHistory.push(value);
}
render() {
return (
<div>
{this.props.children}
</div>
)
}
}