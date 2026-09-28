import "@testing-library/jest-dom";
// jsdom doesn't implement these browser APIs. (Request comes from Node; see
// jest-environment.js.)

// Report every observed element as visible right away, so Reveal content
// renders in tests
class ImmediateIntersectionObserver {
  constructor(private callback: IntersectionObserverCallback) {}
  observe(target: Element) {
    this.callback(
      [{ isIntersecting: true, target } as IntersectionObserverEntry],
      this as unknown as IntersectionObserver,
    );
  }
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}
window.IntersectionObserver =
  ImmediateIntersectionObserver as unknown as typeof IntersectionObserver;

window.scrollTo = jest.fn() as unknown as typeof window.scrollTo;
