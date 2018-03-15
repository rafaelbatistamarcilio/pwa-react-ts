import * as React from 'react';
import './Toast.css';

interface HeaderProps { }
interface HeaderState {
  name: string;
}

class Toast extends React.Component<HeaderProps, HeaderState> {

  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      name: 'Componente usuário'
    };
  }

  render() {
    return (
      <div id="toast-container" />
    );
  }
}
export default Toast;