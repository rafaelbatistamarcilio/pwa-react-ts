import * as React from 'react';

import IUser from '../IUser';

import './UserForm.css';

interface IFormProp {
    user: IUser;
    onFormInput(user: IUser): void;
    onFormSubmit(): void;
}

interface IFormState {
    label: string;
}

class UserForm extends React.Component<IFormProp, IFormState> {

    constructor(props: IFormProp) {
        super(props);
        this.state = {
            label: 'Form'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
        const input: HTMLInputElement = event.target;
        this.props.user[input.name] = input.value;
        this.props.onFormInput(this.props.user);
    }

    public handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        this.props.onFormSubmit();
        event.preventDefault();
    }

    render() {
        return (
            <div >
                UserFormComponent: <label> {this.props.user.name} </label>
                <form id="main-form" onSubmit={e => this.handleSubmit(e)}>
                    <label > Test Input</label>

                    <input
                        id="inp-name"
                        name="name"
                        type="text"
                        defaultValue={this.props.user.name}
                        onChange={(e) => this.handleChange(e)} 
                    />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
export default UserForm;