import React from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

import axios from 'axios'

import { API_URL } from '../constants'

class NewAccountForm extends React.Component {
    state = {
        pk: 0,
        company_name: '',
        company_id: '',
        date_incorporation: '',
        address_1: '',
        address_2: '',
    }

    componentDidMount() {
        if (this.props.account) {
            const {
                pk,
                company_name,
                company_id,
                date_incorporation,
                address_1,
                address_2,
            } = this.props.account
            this.setState({
                pk,
                company_name,
                company_id,
                date_incorporation,
                address_1,
                address_2,
            })
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    createAccount = (e) => {
        e.preventDefault()
        axios.post(API_URL, this.state).then(() => {
            this.props.resetState()
            this.props.toggle()
        })
    }

    editAccount = (e) => {
        e.preventDefault()
        axios.put(API_URL + this.state.pk, this.state).then(() => {
            this.props.resetState()
            this.props.toggle()
        })
    }

    defaultIfEmpty = (value) => {
        return value === '' ? '' : value
    }

    render() {
        return (
            <Form
                onSubmit={
                    this.props.account ? this.editAccount : this.createAccount
                }
            >
                <FormGroup>
                    <Label for="company name">Name:</Label>
                    <Input
                        type="text"
                        name="company_name"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.company_name)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="company id">ID:</Label>
                    <Input
                        type="text"
                        name="company_id"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.company_id)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="date">Date of incorporation:</Label>
                    <Input
                        type="text"
                        name="date_incorporation"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(
                            this.state.date_incorporation,
                        )}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="address 1">Address 1:</Label>
                    <Input
                        type="text"
                        name="address_1"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.address_1)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="address_2">Address 2:</Label>
                    <Input
                        type="text"
                        name="address 2"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.address_2)}
                    />
                </FormGroup>
                <Button>Send</Button>
            </Form>
        )
    }
}

export default NewAccountForm
