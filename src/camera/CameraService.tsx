
interface HTMLInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
}

export default class CameraService {

    public static captureImage(callback: (base64Image: string) => void): void {
        let input: HTMLInputElement = document.getElementById('camera') as HTMLInputElement;

        if (!input) {
            input = document.createElement('input');
            input.accept = 'image/*';
            input.setAttribute('capture', 'camera');
            input.setAttribute('style', 'display:none');
            input.type = 'file';
            input.id = 'camera';
            document.body.appendChild(input);
        }

        input.click();

        input.onchange = (event: HTMLInputEvent) => {
            if (event.target && event.target.files) {
                const file: File = event.target.files[0];
                const fileReader: FileReader = new FileReader();

                fileReader.onloadend = ( progressEvent: ProgressEvent ) => {
                    callback( fileReader.result );
                };

                fileReader.readAsDataURL(file);
            }
        };
    }

    public static loadImage( imageContainerId: string ): void {
        let input: HTMLInputElement = document.getElementById('camera') as HTMLInputElement;

        if (!input) {
            input = document.createElement('input');
            input.accept = 'image/*';
            input.setAttribute('capture', 'camera');
            input.setAttribute('style', 'display:none');
            input.type = 'file';
            input.id = 'camera';
            document.body.appendChild(input);
        }

        input.click();

        input.onchange = (event: HTMLInputEvent) => {

            if (event.target && event.target.files) {

                const file: File = event.target.files[0];
                const fileReader: FileReader = new FileReader();

                fileReader.onloadend = (progressEvent: ProgressEvent) => {
                    CameraService.setImage(fileReader.result, imageContainerId);
                };

                fileReader.readAsDataURL(file);
            }
        };
    }

    public static setImage(imgBase64: string, containerId: string): void {
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
}