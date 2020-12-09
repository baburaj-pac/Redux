import React, { Component } from 'react'
import { connect } from 'react-redux'

class Counter extends Component {

      showCntr=()=> this.props.counterState.counter;

      viewStore1=()=> {
        let s= this.props.counterResult;
        console.log(s);
      }
    render () {
        return (
            <div>
            <button onClick={()=>this.props.Add()}>Add</button>
            <button  onClick={()=>this.props.Sub()}>Subtract</button>
            <button  onClick={()=>this.props.AddStore(this.props.counterState.counter)}>Add to Store</button>
            <button onClick={()=>this.viewStore1()}>View Store</button>
            
            
            <div> <span> Counter Value : {this.showCntr()}</span></div>
            <div> <span> Store Value :</span></div>
        </div>
     );
    }
}
const mapStateToProps = state => {
return {
    counterState:state.cntrReducer,
    counterResult:state.resReducer.results
}
}

const mapDispatchToProps = dispatch => {
    return {
        Add: ()=>dispatch({ type: 'add', value: 1 }),
        Sub:()=> dispatch({ type: 'sub', value: 1 }),
        AddStore:(val)=> dispatch({ type: 'addStore', value: val }),
        ViewStore:()=> dispatch({ type: 'viewStore' }),
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);
