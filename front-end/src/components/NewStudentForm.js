import React from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

import axios from 'axios'

import { API_URL } from '../constants'

class NewStudentForm extends React.Component {
    state = {
        pk: 0,
        company_name: '',
        company_id: '',
        date_incorporation: '',
        address_1: '',
        address_2: '',
    }

    componentDidMount() {
        if (this.props.student) {
            const {
                pk,
                company_name,
                company_id,
                date_incorporation,
                address_1,
                address_2,
            } = this.props.student
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

    createStudent = (e) => {
        e.preventDefault()
        axios.post(API_URL, this.state).then(() => {
            this.props.resetState()
            this.props.toggle()
        })
    }

    editStudent = (e) => {
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
                    this.props.student ? this.editStudent : this.createStudent
                }
            >
                <FormGroup>
                    <Label for="company name">Name:</Label>
                    <Input
                        type="text"
                        name="company name"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.company_name)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="company id">ID:</Label>
                    <Input
                        type="text"
                        name="company id"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.company_id)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="date">Date of incorporation:</Label>
                    <Input
                        type="text"
                        name="date"
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
                        name="address 1"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.address_1)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="address 2">Address 2:</Label>
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

export default NewStudentForm
