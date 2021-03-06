import * as React from 'react';
import * as classNames from 'classnames';

import CameraService from './CameraService';

interface CameraState {
  label: string;
}

interface CameraPropoerties {
  label: string;
}

class Camera extends React.Component<CameraPropoerties, CameraState> {

  private cameraService: CameraService;

  constructor(props: CameraPropoerties) {
    super(props);
    this.state = {
      label: 'Câmera'
    };

    this.cameraService = new CameraService();
  }

  public getImage(): void {
    this.cameraService.loadImage('img-container');
  }

  render() {
    return (
      <div>
        <h1>Você está em  {this.state.label}!</h1>
        <div className="row">
          <button
            className={classNames('btn', 'blue')}
            onClick={e => this.getImage()}
            type="button"
          >
            Take photo
          </button>
        </div>
        <div className="row" id="img-container" />
      </div>
    );
  }
}
export default Camera;