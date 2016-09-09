import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SocialBar from './components/SocialBar';

var menuValues = {
  AllowVertical: true,
  AlignRight: true
}
class App extends Component {
  constructor(props){
    super(props);
  }
  generateComponent(dataSet){
    var list = [];
    switch(dataSet.type){
      case 'social-bar':
        if(dataSet.urllist && dataSet.styledetails){
          return <SocialBar urlList = {(JSON.parse(dataSet.urllist))} styleDetails = {(JSON.parse(dataSet.styledetails))}/>;
        }
        else if(dataSet.urllist){
          return <SocialBar urlList = {(JSON.parse(dataSet.urllist))} />;
        }
        else {
          console.log(new Error("'social-bar' component: urlList - " + (dataSet.urllist ? "valid" : "invalid") + " " + (dataSet.styleDetails ? "styleDetails - valid." : "styledetails - invalid.")));
          return (<div></div>)
        }
      case 'navigation-menu':
        return (<div>Navigation Menu</div>);
      default:
        return (<div></div>);
    }
  }
  buildStateItem(){
    var dataSet = this.props.element.dataset;
    var result = this.generateComponent(dataSet);

    //erase data from tag to protect it.
    Object.keys(dataSet).forEach(function(attr){
      this.props.element.removeAttribute("data-" + attr);
    }.bind(this));

    return result;
  }

  render() {
    return (
      <div>
        {this.buildStateItem()}
      </div>
    );
  }
}


function mapStateToProps(state)
{
  return state;
}

function mapDispatchToProps(dispatch)
{
  return bindActionCreators({},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
