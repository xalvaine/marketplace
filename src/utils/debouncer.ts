export class Debouncer {
  private timeout?: number

  public debounce = (func: () => void, timeout: number) => {
    window.clearTimeout(this.timeout)
    this.timeout = window.setTimeout(func, timeout)
  }
}
