import React from "react";
import Reflux from 'reflux';

import { Form } from 'antd';
import Grid from "./grid";

import { FormStore } from '../store/formStore'
import { Input, Button } from 'antd';
import { GridActions } from '../actions/gridActions'

const FormItem = Form.Item;
const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
};
const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 4 },
};

class FormApp extends Reflux.Component {
    constructor (props){
        super(props);
        this.store = FormStore;
    }

    check = () => {
        let fg = false;
        this.props.form.validateFields(this.state.columns.map(i => { return i.key}),(err) => {if (!err)fg=true;});
        return fg;
    }

    toAddrow(){
        if(this.check())GridActions.addrow(this.props.form.getFieldsValue());
        const { form } = this.props;
        form.setFieldsValue({
            name:"" ,
            nickname:""
        })
    }

    handleFields = () => {
        console.log('setInitialValues');
        const { form } = this.props;
        form.setFieldsValue({
            name:this.state.fields.nome ,
            nickname:this.state.fields.sobrenome 
        })
    }
    
    render(){
        const { getFieldDecorator } = this.props.form;

        return( 
            <div className="form-app">
                <FormItem {...formItemLayout} label="Nome">
                    {getFieldDecorator('name', {
                        rules: [{
                        required: true,
                        message: 'Por favor, preencha o nome.',
                        }],
                    })    
                    (
                        <Input placeholder="Nome"/>
                    )}    
                </FormItem>
                <FormItem {...formItemLayout} label="Sobrenome">
                    {getFieldDecorator('nickname', {
                        rules: [{
                        required: true,
                        message: 'Por favor, preencha o Sobrenome.',
                        }],
                    })
                    (
                        <Input  placeholder="Sobrenome"/>
                    )}
                </FormItem>
                {this.state.edit ? 
                    <FormItem {...formTailLayout}>
                        <Button
                            type="primary"
                            onClick={() => {this.toAddrow()}}
                            >Adicionar
                        </Button>
                    </FormItem> 
                :
                    <FormItem {...formTailLayout}>
                        <Button
                            type="default"
                            onClick={() => {this.toEditrow()}}
                            >Alterar
                        </Button>
                    </FormItem>                     
                }
                <Grid 
                    formProps = {this.props.form}
                    columns = {this.state.columns}
                />
                <button onClick={this.handleFields.bind(this)}>getStore</button>
            </div>      
        ) 
    }
}
const WrappedForm = Form.create()(FormApp)
export default WrappedForm;