// jsdom under Jest 27 hides Node's built-in Fetch API classes, but the
// router's navigation creates Request objects. Pass Node's own through
// instead of adding a polyfill. Node's Request only accepts Node's
// AbortSignal, so the abort classes come from Node too.
const JSDOMEnvironment = require("jest-environment-jsdom");

module.exports = class JSDOMWithFetchEnvironment extends JSDOMEnvironment {
  constructor(...args) {
    super(...args);
    Object.assign(this.global, { Request, AbortController, AbortSignal });
  }
};
