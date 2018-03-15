
export default class ToastService {

  private ERROR_TIME: number = 6000;
  private WARNIN_TIME: number = 5000;
  private INFO_TIME: number = 4000;
  private DEFAULT_TIME: number = 3000;

  public default(text: string): void {
    this.add(text, '', this.DEFAULT_TIME);
  }

  public error(text: string): void {
    this.add(text, 'error', this.ERROR_TIME);
  }

  public warning(text: string): void {
    this.add(text, 'warnig', this.WARNIN_TIME);
  }

  public info(text: string): void {
    this.add(text, 'info', this.INFO_TIME);
  }

  private add(text: string, style: string, time: number): void {
    let container: HTMLDivElement = this.getToastContainer();
    const toast: HTMLDivElement = this.createToast(text, style);
    container.appendChild(toast);
    setTimeout(() => { toast.remove(); }, time);
  }

  private getToastContainer(): HTMLDivElement {
    let container: HTMLDivElement = document.getElementById('toast-container') as HTMLDivElement;
    if (!container) {
      container = document.createElement('div') as HTMLDivElement;
      container.id = 'toast-container';
      document.body.appendChild(container);
    }
    return container;
  }

  private createToast(text: string, style?: string): HTMLDivElement {
    const toast: HTMLDivElement = document.createElement('div') as HTMLDivElement;
    toast.className = 'toast show ' + style;
    toast.innerText = text;
    toast.id = 'toast-' + new Date().getTime().toString();

    const close: HTMLElement = document.createElement('a');
    close.className = 'toast-close';
    close.onclick = () => { toast.remove(); };
    toast.appendChild(close);
    return toast;
  }

}