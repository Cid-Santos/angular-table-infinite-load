export class ScrollableModel {
  limit: number;
  start: number;
  end: number;

  constructor(limit: number, start: number) {
    this.limit = limit;
    this.start = start;
    this.end = limit + start;
  }

  updateIndex() {
    this.start = this.end;
    this.end = this.limit + this.start;
  }

  setScrollLimit(target: any, buffer: number): boolean {
    const limit = target.scrollHeight - target.offsetHeight - buffer;
    return (target.scrollTop > limit)
  }

}
