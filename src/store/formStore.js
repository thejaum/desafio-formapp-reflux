import React from 'react';
import Reflux from 'reflux';
import { FormActions } from '../actions/formActions'

export class FormStore extends Reflux.Store
{
	constructor()
	{
		super();
		this.state = {
            fields: {
				nome: '',
				sobrenome: '',
			},
			columns: [{
				title: 'Nome',
				dataIndex: 'name',
				key: 'name',
			},{
				title: 'Sobrenome',
				dataIndex: 'nickname',
				key: 'nickname',
			},{
				title: 'Ações',
				dataIndex: 'actions',
				key: 'actions',
			}],
			edit : true
        }
		this.listenables = FormActions;
	}
	onAltrow(row){
		console.log("Fields State 1 : "+this.state.fields.nome)
		this.setState({
			fields: {nome: row.name,sobrenome: row.nickname},
			edit : false
		})
		console.log("Fields State 2 : "+this.state.fields.nome)
	}
}