import React, { Component } from 'react'; export default class StudentItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            hello: ""
        }
        this.editStudent = this.editStudent.bind(this);
        this.editStudentSubmit = this.editStudentSubmit.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
    }
    deleteStudent() {
        console.log('2')
        const { id } = this.props.student;
        this.props.deleteStudent(id);
    }
    editStudent() {
        this.setState((prevState, props) => ({
            isEdit: !prevState.isEdit
        }))
    }
    editStudentSubmit() {
        
        const { id } = this.props.student;
        this.setState((prevState, props) => ({
            
            isEdit: !prevState.isEdit,
            hello: prevState
        }));

        console.log(this.state.isEdit);
        

        this.props.editStudentSubmit(
            id,
            this.nameInput.value,
            this.gradeInput.value,
            this.schoolInput.value
        );

    }

    render() {

        const { name, grade, school } = this.props.student;

        return (
            this.state.isEdit === true ? (
                <tr className="bg-warning" key={this.props.index}>
                    <td>
                        <input ref={nameInput => this.nameInput = nameInput} defaultValue={name} />
                    </td>
                    <td>
                        <input  ref={gradeInput => this.gradeInput = gradeInput} defaultValue={grade} />
                    </td>
                    <td>
                        <input ref={schoolInput => this.schoolInput = schoolInput} defaultValue={school} />
                    </td>
                    <td>
                        <i className="far fa-save" onClick={this.editStudentSubmit}>save</i>
                    </td>
                    <td>
                        <i className="fas fa-trash">trash</i>
                    </td>
                </tr>
            ) : (
                    <tr key={this.props.index}>
                        <td>{name}</td>
                        <td>{grade}</td>
                        <td>{school}</td>
                        <td><i className="far fa-edit" onClick={this.editStudent}>Edit</i></td>
                        <td><i className="fas fa-trash" onClick={this.deleteStudent}>Delete</i></td>
                    </tr>
                )
        );
    }
}