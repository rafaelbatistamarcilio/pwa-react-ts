import * as React from 'react';

import UserForm from './user-fom/UserForm';
import IUser from './IUser';

interface UserProps { }

interface UserState {
    name: string;
    user: IUser;
}

export default class User extends React.Component<UserProps, UserState> {

    constructor(props: UserProps) {
        super(props);
        this.state = {
            name: 'Componente usuário',
            user: {
                name: '',
                email: ''
            }
        };
    }

    public handleChange(userUpdate: IUser): void {
        this.setState({user: userUpdate});
    }

    public handleSubmit() {
        console.log('USER COMPONENT');
        console.log(this.state.user);
    }

    render() {
        return (
            <div>
                <h1>Você está em  {this.state.name}!</h1>;
                UserComponent <label > {this.state.user.name} </label>

                <UserForm 
                   user={this.state.user}
                   onFormInput={event => this.handleChange(event)} 
                   onFormSubmit={() => this.handleSubmit()}
                />

            </div>
        );
    }
}