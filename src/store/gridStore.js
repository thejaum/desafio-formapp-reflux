import React from 'react';
import { Icon } from 'antd';
import Reflux from 'reflux';
import { GridActions } from '../actions/gridActions'
import { FormActions } from '../actions/formActions'

export class GridStore extends Reflux.Store
{
	constructor()
	{
		super();
		this.state = {
			dataRows: [{
				name: 'Joao',
				nickname: 'Castro',
			}],
			edit : true
		};
		this.listenables = [GridActions,FormActions];
		this.state.dataRows = this.buildIdxAndActions(this.state.dataRows);
	}

	buildIdxAndActions(dataRows){
		console.log('buildIdxAndActions')
		dataRows.forEach((i,index) => {
            dataRows[index].key = index
            dataRows[index].actions = 
            <div className="actions-container">
                <div className="actions-edit">
                    <span onClick={() => this.toEditrow(index)}>
                        <Icon type= "edit" theme="outlined" />
                    </span>
                </div>
                <div className="actions-remove"> 
                    <span onClick={() => this.toRemoverow(index)}>   
                        <Icon type="close" theme="outlined"/>
                    </span>
                </div> 
            </div>
		})
		return dataRows;
	}

	toRemoverow(index){
		const newDataRows = [];
		this.state.dataRows.map(i =>{
			return i.key !== index ? newDataRows.push(i) : null;
		});
		console.log(newDataRows);
		this.setState({dataRows : this.buildIdxAndActions(newDataRows)})
	}

	toEditrow(index){
		console.log("toEditrow "+index);
		const row = this.state.dataRows.find(i => (i.key === index))
		console.log(row);
		FormActions.altrow(row);
	}

	onAddrow(row,f)
	{
		console.log("onAddrow");
		const newDataRows = Object.assign([],this.state.dataRows)
		newDataRows.push(row);
		this.setState({
			dataRows : this.buildIdxAndActions(newDataRows),
		});
	}
}