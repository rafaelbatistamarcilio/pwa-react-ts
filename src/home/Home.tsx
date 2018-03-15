import * as React from 'react';
import { Link } from 'react-router-dom';

interface HomeProps { }
interface HomeState {
    name: string;
}

class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);
        this.state = {
            name: 'componente home'
        };
    }

    render() {
        return (
            <div>
                <h1>Você está em  {this.state.name}!</h1>;
                <Link to={{ pathname: '/user' }} >User</Link>
                <img width="100%" src="apps.png" />
            </div>
        );
    }
}

export default Home;
