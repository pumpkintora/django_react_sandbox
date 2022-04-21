import React, { Component } from 'react'
import { Table } from 'reactstrap'
import NewStudentModal from './NewStudentModal'

import ConfirmRemovalModal from './ConfirmRemovalModal'

class StudentList extends Component {
    render() {
        const students = this.props.students
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
                    {!students || students.length <= 0 ? (
                        <tr>
                            <td colSpan="6" align="center">
                                <b>Ops, no one here yet</b>
                            </td>
                        </tr>
                    ) : (
                        students.map((student) => (
                            <tr key={student.pk}>
                                <td>{student.company_name}</td>
                                <td>{student.company_id}</td>
                                <td>{student.date_incorporation}</td>
                                <td>{student.address_1}</td>
                                <td>{student.address_2}</td>
                                <td align="center">
                                    <NewStudentModal
                                        create={false}
                                        student={student}
                                        resetState={this.props.resetState}
                                    />
                                    &nbsp;&nbsp;
                                    <ConfirmRemovalModal
                                        pk={student.pk}
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

export default StudentList
