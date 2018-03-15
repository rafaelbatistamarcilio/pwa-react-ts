
export default class ToastService {

  public static add(text: string): void {
    let toastContainer = document.getElementById('toast-container');

    if (toastContainer) {
      const toast = document.createElement('div');
      toast.innerText = text;
      toast.id = 'toast-' + toastContainer.children.length;
      toast.className = 'toast show';

      toastContainer.appendChild(toast);
      setTimeout(() => { toast.remove(); }, 3000);
    }
  }
}