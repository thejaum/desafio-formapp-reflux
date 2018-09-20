import React from 'react';
import Reflux from 'reflux';
import { GridStore } from '../store/gridStore'
import { Table } from 'antd';

//CSS
import 'antd/dist/antd.css';
  
class Grid extends Reflux.Component{
	constructor(props){
        super(props);
        this.store = GridStore;
        
    }
    render(){
		return (
            <div>
                <Table dataSource={this.state.dataRows} columns={this.props.columns} />
            </div>
        );
	}
}

export default Grid;