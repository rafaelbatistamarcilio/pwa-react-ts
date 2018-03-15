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
        // tslint:disable-next-line:no-console
        console.log('whatchClicks');
        document.documentElement.onclick = (event) => {
            // tslint:disable-next-line:no-console
            console.log('whatchClicks onclick');
            if (event.target === document.documentElement) {
                document.documentElement.classList.remove('menu-ativo');
            }
        };
    }

    render() {
        return (
            <header>
                <div className="container">
                    <button className="menu-abrir" onClick={e => this.openMenu()}>
                        Abre Menu
                    </button>
                    <h1 className="logo">
                        Logo
                    </h1>

                    <nav className="barra-nav">
                        <button id="openMenuBtn" className="menu-fechar" onClick={e => this.closeMenu()}>
                            Fecha Menu
                        </button>
                        <ul className="menu-principal">
                            <li><Link to={{ pathname: '/home' }} >Home</Link></li>
                            <li><Link to={{ pathname: '/user' }} >User</Link></li>
                            <li><Link to={{ pathname: '/camera' }} >Câmera</Link></li>
                            <li><Link to={{ pathname: '/toast' }} >Toast</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}
export default Header;