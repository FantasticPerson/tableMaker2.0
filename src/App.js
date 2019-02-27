import React, { Component } from 'react'
import { connect, Provider } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect'
import * as toolActions from './redux/actions/tool'
import Router from './router'
import Toolbar from './components/toolbar/index'
import {OverLayMap} from './utils/registerModal'
import './styles/index.css'

class App extends Component {
  renderOverLay() {
    let _overLayMap = OverLayMap()
    let overLayList = this.props.overLayList || []
    
    return overLayList.map((item, index) => {
      let cp = _overLayMap[item.name];
      if (cp) {
        return React.createElement(cp, { key: index, data: item.data, ...this.props })
      } else {
        console.error('the overLay name ' + item.name + ' may be not defined');
      }
    });
  }
  render() {
    const { updateComponentEdit, updateEditTool, updateSubEdit, updateFormTool, updateSetStyle } = this.props
    let toolProps = {
      showTool: this.props.showTool,
      showFormTool: this.props.showFormTool,
      showSetStyle: this.props.showSetStyle,
      toolProps: {
        showSubEdit: this.props.showSubEdit,
        showComponentEdit: this.props.showComponentEdit
      },
      actions: {
        updateComponentEdit,
        updateEditTool,
        updateSubEdit,
        updateFormTool,
        updateSetStyle
      }
    }
    return (
      <div className="App">
        <Toolbar data={toolProps}></Toolbar>
        <Router />
        {this.renderOverLay()}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(toolActions, dispatch)
  }
}

const selector = createSelector(
  state => state.tool.show,
  state => state.tool.showSubEdit,
  state => state.tool.showComponentEdit,
  state => state.tool.showFormTool,
  state => state.tool.showSetStyle,
  (showTool, showSubEdit, showComponentEdit, showFormTool, showSetStyle) => {
    return {
      showTool: showTool,
      showSubEdit: showSubEdit,
      showComponentEdit: showComponentEdit,
      showFormTool: showFormTool,
      showSetStyle: showSetStyle
    }
  }
)

export default connect(selector, mapDispatchToProps)(App)