import React from 'react';
import Reflux from 'reflux';
import { CounterStore } from '../store/counterStore'
import { Actions } from '../actions/counterActions'

class Counter extends Reflux.Component
{
	constructor(props)
	{
		super(props);
		this.store = CounterStore;
    }

    toIncremente(){
        Actions.increment();
    }
    toDecrement(){
        Actions.decrement();
    }
    toChangeBy(){
        Actions.changeBy(Number(document.getElementById("val").value));
    }

    render(){
		return (
            <div>
                {this.state.count}
                <button onClick={this.toIncremente.bind(this)} >Increment</button>
                <button onClick={this.toDecrement.bind(this)} >Decremente</button>
                <button onClick={this.toChangeBy.bind(this)} >Change to</button>
                <input type="TEXT" id="val"/>
            </div>
        );
	}
}

export default Counter;