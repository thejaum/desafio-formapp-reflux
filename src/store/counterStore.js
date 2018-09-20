import Reflux from 'reflux';
import { Actions } from '../actions/counterActions'


export class CounterStore extends Reflux.Store
{
	constructor()
	{
		super();
		this.state = {count: 0};
		this.listenables = Actions;
	}

	onIncrement()
	{
        console.log("tst");
		this.setState({count: this.state.count+1});
	}
	
	onDecrement()
	{
		this.setState({count: this.state.count-1});
	}
	
	onChangeBy(amount)
	{
		this.setState({count: amount});
	}
}