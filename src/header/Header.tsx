import * as React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

interface HeaderProps { }
interface HeaderState {
    name: string;
}

class Header extends React.Component<HeaderProps, HeaderState> {

    constructor(props: HeaderProps) {
        super(props);
        this.state = {
            name: 'Header'
        };
    }

    public openMenu(): void {      
        this.getClassList().add('menu-ativo');
    }

    public closeMenu(): void {    
        this.getClassList().remove('menu-ativo');
    }

    public getClassList(): DOMTokenList {
        return document.documentElement.classList;
    }

    public whatchClicks(): void {
        document.documentElement.onclick = (event) => {
            if (event.target === document.documentElement) {
                document.documentElement.classList.remove('menu-ativo');
            }
        };
    }

    render() {
        this.whatchClicks();
        return (
            <header>
                <div className="container">
                    <h1 className="logo">
                        Logo
                    </h1>
                    <nav className="barra-nav">
                        <button  className="menu-fechar" onClick={e => this.closeMenu()} >
                            <i className="fas fa-times-circle fa-2x" />
                        </button>
                        <ul className="menu-principal">
                            <li><Link to={{ pathname: '/home' }}   onClick={e => this.closeMenu()}> Home</Link></li>
                            <li><Link to={{ pathname: '/user' }}   onClick={e => this.closeMenu()}> User</Link></li>
                            <li><Link to={{ pathname: '/camera' }} onClick={e => this.closeMenu()}> Câmera</Link></li>
                            <li><Link to={{ pathname: '/toast' }}  onClick={e => this.closeMenu()}> Toast</Link></li>
                        </ul>
                    </nav>

                    <button className="menu-abrir" onClick={e => this.openMenu()} />
                </div>
            </header>
        );
    }
}
export default Header;