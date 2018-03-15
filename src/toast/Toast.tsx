import * as React from 'react';
import * as classNames from 'classnames';

import ToastService from './ToastService';
import './Toast.css';

interface IToastProps {

}

interface IToastState {
  name: string;
}

class Toast extends React.Component<IToastProps, IToastState> {

  private toastService: ToastService;
  constructor(props: IToastProps) {
    super(props);
    this.state = {
      name: 'Componente usuário'
    };
    this.toastService = new ToastService();
  }

  render() {
    return (
      <div >
        <button
          className={classNames('btn', 'blue')}
          type="button"
          onClick={e => this.toastService.default('Test default toast ')}
        >
          Default
        </button>
        
        <button
          className={classNames('btn')}
          type="button"
          onClick={e => this.toastService.error('Test error toast')}
        >
          Error
        </button>

        <button
          className={classNames('btn')}
          type="button"
          onClick={e => this.toastService.warning('Test warning toast')}
        >
          Warning
        </button>

        <button
          className={classNames('btn')}
          type="button"
          onClick={e => this.toastService.info('Test info toast')}
        >
          Info
        </button>
      </div>
    );
  }
}
export default Toast;