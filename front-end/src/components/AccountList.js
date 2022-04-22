import React, { Component } from 'react'
import { Table } from 'reactstrap'
import NewAccountModal from './NewAccountModal'

import ConfirmRemovalModal from './ConfirmRemovalModal'

class AccountList extends Component {
    render() {
        const accounts = this.props.accounts
        return (
            <Table dark>
                <thead>
                    <tr>
                        <th>Company name</th>
                        <th>Company id</th>
                        <th>Date of incorporation</th>
                        <th>Address 1</th>
                        <th>Address 2</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {!accounts || accounts.length <= 0 ? (
                        <tr>
                            <td colSpan="6" align="center">
                                <b>Ops, no one here yet</b>
                            </td>
                        </tr>
                    ) : (
                        accounts.map((account) => (
                            <tr key={account.pk}>
                                <td>{account.company_name}</td>
                                <td>{account.company_id}</td>
                                <td>{account.date_incorporation}</td>
                                <td>{account.address_1}</td>
                                <td>{account.address_2}</td>
                                <td align="center">
                                    <NewAccountModal
                                        create={false}
                                        account={account}
                                        resetState={this.props.resetState}
                                    />
                                    &nbsp;&nbsp;
                                    <ConfirmRemovalModal
                                        pk={account.pk}
                                        resetState={this.props.resetState}
                                    />
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>
        )
    }
}

export default AccountList
