
interface HTMLInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
}

export default class CameraService {

    public captureImage(callback: (base64Image: string) => void): void {
        let input: HTMLInputElement = document.getElementById('camera') as HTMLInputElement;

        if (!input) {
            input = this.createCamera();
        }

        input.click();

        input.onchange = (event: HTMLInputEvent) => {
            if (event.target && event.target.files) {
                const file: File = event.target.files[0];
                const fileReader: FileReader = new FileReader();

                fileReader.onloadend = (progressEvent: ProgressEvent) => {
                    callback(fileReader.result);
                };

                fileReader.readAsDataURL(file);
            }
        };
    }

    public loadImage(imageContainerId: string): void {
        let input: HTMLInputElement = document.getElementById('camera') as HTMLInputElement;

        if (!input) {
            input = this.createCamera();
        }

        input.click();

        input.onchange = (event: HTMLInputEvent) => {

            if (event.target && event.target.files) {

                const file: File = event.target.files[0];
                const fileReader: FileReader = new FileReader();

                fileReader.onloadend = (progressEvent: ProgressEvent) => {
                    this.setImage(fileReader.result, imageContainerId);
                };

                fileReader.readAsDataURL(file);
            }
        };
    }

    public setImage(imgBase64: string, containerId: string): void {
        let image: HTMLImageElement = document.getElementById('photo') as HTMLImageElement;

        if (!image) {
            image = document.createElement('img');
            image.id = 'photo';
            image.setAttribute('width', '100%');
        }

        image.src = imgBase64;

        const imageContainer = document.getElementById(containerId);
        if (imageContainer) {
            imageContainer.appendChild(image);
        } else {
            throw new Error('Element ID: ' + containerId + 'not found');
        }
    }

    private createCamera(): HTMLInputElement {
        const cameraInput = document.createElement('input');
        cameraInput.accept = 'image/*';
        cameraInput.setAttribute('capture', 'camera');
        cameraInput.setAttribute('style', 'display:none');
        cameraInput.type = 'file';
        cameraInput.id = 'camera';
        document.body.appendChild(cameraInput);
        return cameraInput;
    }
}