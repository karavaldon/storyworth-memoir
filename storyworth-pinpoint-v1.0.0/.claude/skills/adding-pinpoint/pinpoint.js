/* Pinpoint v1.0.0 — built 2026-06-15 — kit: storyworth */
var Pinpoint = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/pinpoint.ts
  var pinpoint_exports = {};
  __export(pinpoint_exports, {
    PinpointFab: () => PinpointFab,
    PinpointHistoryPopover: () => PinpointHistoryPopover,
    PinpointOverlay: () => PinpointOverlay,
    PinpointPanel: () => PinpointPanel,
    PinpointPopover: () => PinpointPopover,
    formatTime: () => formatTime,
    store: () => store
  });

  // src/pinpoint.styles.ts
  var commentStyles = `
  .comment-entry {
    margin-bottom: var(--pinpoint-space-m);
  }

  .comment-entry:last-child {
    margin-bottom: 0;
  }

  .comment-meta {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 0;
  }

  .author-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    font-size: 11px;
    font-weight: 700;
    flex-shrink: 0;
  }

  .author-name {
    font-size: 12px;
    font-weight: 500;
    color: var(--pinpoint-text-secondary);
  }

  .comment-time {
    font-size: 11px;
    color: var(--pinpoint-text-faint);
  }

  .comment-text {
    margin: 3px 0 0;
    padding-left: 32px;
    font-size: 13px;
    line-height: 1.5;
    color: var(--pinpoint-text-secondary);
    white-space: pre-wrap;
  }

  .comment-kebab {
    opacity: 0;
    transition: opacity 0.15s;
    background: none;
    border: none;
    color: var(--pinpoint-text-faint);
    cursor: pointer;
    padding: 2px;
    border-radius: var(--pinpoint-radius-s);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .comment-entry:hover .comment-kebab,
  .comment-kebab.menu-open {
    opacity: 1;
  }

  .comment-kebab:hover {
    color: var(--pinpoint-text-secondary);
    background: var(--pinpoint-bg-hover);
  }

  .comment-edited-tag {
    font-size: 11px;
    color: var(--pinpoint-text-faint);
    margin-left: 4px;
  }

  .comment-edit-form {
    padding-left: 32px;
    margin-top: 3px;
  }

  .comment-edit-textarea {
    width: 100%;
    min-height: 48px;
    padding: var(--pinpoint-space-s);
    font-size: 13px;
    font-family: var(--pinpoint-font);
    line-height: 1.5;
    color: var(--pinpoint-text);
    background: var(--pinpoint-bg-raised);
    border: 1px solid var(--pinpoint-border-strong);
    border-radius: var(--pinpoint-radius-m);
    resize: none;
    box-sizing: border-box;
  }

  .comment-edit-textarea:focus {
    outline: none;
    border-color: var(--comment-author-color, var(--pinpoint-accent));
  }

  .comment-edit-actions {
    display: flex;
    gap: 6px;
    justify-content: flex-end;
    margin-top: var(--pinpoint-space-s);
  }

  .comment-edit-actions button {
    padding: 5px 12px;
    font-size: 12px;
    font-weight: 500;
    font-family: var(--pinpoint-font);
    border-radius: var(--pinpoint-radius-m);
    cursor: pointer;
    border: none;
  }

  .comment-save-btn {
    background: var(--comment-author-color, var(--pinpoint-accent));
    color: var(--pinpoint-on-accent);
  }

  .comment-save-btn:hover {
    filter: brightness(1.1);
  }

  .comment-cancel-btn {
    background: none;
    color: var(--pinpoint-text-faint);
    border: 1px solid var(--pinpoint-border-strong) !important;
    border-radius: var(--pinpoint-radius-m) !important;
  }

  .comment-cancel-btn:hover {
    color: var(--pinpoint-text-secondary);
    background: var(--pinpoint-bg-hover);
  }

  /* \u2500\u2500 Reactions \u2500\u2500 */

  .comment-reactions {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding-left: 32px;
    margin-top: 4px;
  }

  .reaction-pill {
    display: inline-flex;
    align-items: center;
    gap: 3px;
    padding: 2px 6px;
    border-radius: var(--pinpoint-radius-full);
    border: 1px solid var(--pinpoint-border-strong);
    background: var(--pinpoint-bg-raised);
    font-size: 12px;
    cursor: pointer;
    transition: background 0.12s ease, border-color 0.12s ease;
    user-select: none;
  }

  .reaction-pill:hover {
    background: var(--pinpoint-bg-hover);
    border-color: var(--pinpoint-border-hover);
  }

  .reaction-pill.own {
    border-color: var(--pinpoint-accent);
    background: var(--pinpoint-accent-bg);
  }

  .reaction-emoji {
    font-size: 14px;
    line-height: 1;
  }

  .reaction-count {
    font-size: 11px;
    color: var(--pinpoint-text-muted);
    font-weight: 500;
  }

  .comment-react-btn {
    opacity: 0;
    transition: opacity 0.15s;
    background: none;
    border: none;
    color: var(--pinpoint-text-faint);
    cursor: pointer;
    padding: 2px;
    border-radius: var(--pinpoint-radius-s);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-left: auto;
  }

  .comment-entry:hover .comment-react-btn {
    opacity: 1;
  }

  .comment-react-btn:hover {
    color: var(--pinpoint-text-secondary);
    background: var(--pinpoint-bg-hover);
  }



  .reaction-add-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 22px;
    border-radius: var(--pinpoint-radius-full);
    border: 1px dashed var(--pinpoint-border-strong);
    background: none;
    color: var(--pinpoint-text-faint);
    font-size: 14px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.15s;
    padding: 0;
  }

  .comment-entry:hover .reaction-add-btn {
    opacity: 1;
  }

  .reaction-add-btn:hover {
    border-color: var(--pinpoint-border-hover);
    color: var(--pinpoint-text-secondary);
    background: var(--pinpoint-bg-hover);
  }
`;
  var tokenStyles = `
  :host {
    /* Backgrounds */
    --pinpoint-bg: #1e1e1e;
    --pinpoint-bg-raised: #2a2a2a;
    --pinpoint-bg-hover: #333;

    /* Text */
    --pinpoint-text: #e0e0e0;
    --pinpoint-text-secondary: #d0d0d0;
    --pinpoint-text-muted: #a8a8a8;
    --pinpoint-text-faint: #9a9a9a;
    --pinpoint-text-label: #9a9a9a;

    /* Borders */
    --pinpoint-border: rgba(255, 255, 255, 0.08);
    --pinpoint-border-strong: #4a4a4a;
    --pinpoint-border-emphasis: #4f4f4f;
    --pinpoint-border-hover: #707070;
    --pinpoint-border-outer: rgba(255, 255, 255, 0.12);

    /* Accent (indigo) */
    --pinpoint-accent: #6366f1;
    --pinpoint-accent-hover: #5558e6;
    --pinpoint-accent-light: #818cf8;
    --pinpoint-accent-deep: #4338ca;
    --pinpoint-accent-active: #4f46e5;
    --pinpoint-accent-bg: rgba(99, 102, 241, 0.06);
    --pinpoint-on-accent: #fff;

    /* Status */
    --pinpoint-success: #4ade80;
    --pinpoint-success-bg: rgba(74, 222, 128, 0.12);
    --pinpoint-danger: #f87171;
    --pinpoint-danger-strong: #b91c1c;
    --pinpoint-pin-read: #6b7280;

    /* Overlay */
    --pinpoint-overlay-bg: rgba(0, 0, 0, 0.02);

    /* Shadows */
    --pinpoint-pin-shadow: 0 2px 8px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(0, 0, 0, 0.08);
    --pinpoint-pin-shadow-hover: 0 4px 16px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(0, 0, 0, 0.12);
    --pinpoint-popover-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
    --pinpoint-panel-shadow: 0 -4px 24px rgba(0, 0, 0, 0.4);
    --pinpoint-shortcut-bg: rgba(0, 0, 0, 0.25);

    /* Layout */
    --pinpoint-font: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    --pinpoint-radius-s: 4px;
    --pinpoint-radius-m: 8px;
    --pinpoint-radius-l: 12px;
    --pinpoint-radius-full: 9999px;
    --pinpoint-space-xs: 4px;
    --pinpoint-space-s: 8px;
    --pinpoint-space-m: 16px;
  }
`;

  // node_modules/tslib/tslib.es6.mjs
  function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  }
  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }

  // node_modules/@supabase/functions-js/dist/module/helper.js
  var resolveFetch = (customFetch) => {
    if (customFetch) {
      return (...args) => customFetch(...args);
    }
    return (...args) => fetch(...args);
  };

  // node_modules/@supabase/functions-js/dist/module/types.js
  var FunctionsError = class extends Error {
    constructor(message, name = "FunctionsError", context) {
      super(message);
      this.name = name;
      this.context = context;
    }
  };
  var FunctionsFetchError = class extends FunctionsError {
    constructor(context) {
      super("Failed to send a request to the Edge Function", "FunctionsFetchError", context);
    }
  };
  var FunctionsRelayError = class extends FunctionsError {
    constructor(context) {
      super("Relay Error invoking the Edge Function", "FunctionsRelayError", context);
    }
  };
  var FunctionsHttpError = class extends FunctionsError {
    constructor(context) {
      super("Edge Function returned a non-2xx status code", "FunctionsHttpError", context);
    }
  };
  var FunctionRegion;
  (function(FunctionRegion2) {
    FunctionRegion2["Any"] = "any";
    FunctionRegion2["ApNortheast1"] = "ap-northeast-1";
    FunctionRegion2["ApNortheast2"] = "ap-northeast-2";
    FunctionRegion2["ApSouth1"] = "ap-south-1";
    FunctionRegion2["ApSoutheast1"] = "ap-southeast-1";
    FunctionRegion2["ApSoutheast2"] = "ap-southeast-2";
    FunctionRegion2["CaCentral1"] = "ca-central-1";
    FunctionRegion2["EuCentral1"] = "eu-central-1";
    FunctionRegion2["EuWest1"] = "eu-west-1";
    FunctionRegion2["EuWest2"] = "eu-west-2";
    FunctionRegion2["EuWest3"] = "eu-west-3";
    FunctionRegion2["SaEast1"] = "sa-east-1";
    FunctionRegion2["UsEast1"] = "us-east-1";
    FunctionRegion2["UsWest1"] = "us-west-1";
    FunctionRegion2["UsWest2"] = "us-west-2";
  })(FunctionRegion || (FunctionRegion = {}));

  // node_modules/@supabase/functions-js/dist/module/FunctionsClient.js
  var FunctionsClient = class {
    /**
     * Creates a new Functions client bound to an Edge Functions URL.
     *
     * @example
     * ```ts
     * import { FunctionsClient, FunctionRegion } from '@supabase/functions-js'
     *
     * const functions = new FunctionsClient('https://xyzcompany.supabase.co/functions/v1', {
     *   headers: { apikey: 'public-anon-key' },
     *   region: FunctionRegion.UsEast1,
     * })
     * ```
     */
    constructor(url, { headers = {}, customFetch, region = FunctionRegion.Any } = {}) {
      this.url = url;
      this.headers = headers;
      this.region = region;
      this.fetch = resolveFetch(customFetch);
    }
    /**
     * Updates the authorization header
     * @param token - the new jwt token sent in the authorisation header
     * @example
     * ```ts
     * functions.setAuth(session.access_token)
     * ```
     */
    setAuth(token) {
      this.headers.Authorization = `Bearer ${token}`;
    }
    /**
     * Invokes a function
     * @param functionName - The name of the Function to invoke.
     * @param options - Options for invoking the Function.
     * @example
     * ```ts
     * const { data, error } = await functions.invoke('hello-world', {
     *   body: { name: 'Ada' },
     * })
     * ```
     */
    invoke(functionName_1) {
      return __awaiter(this, arguments, void 0, function* (functionName, options = {}) {
        var _a;
        let timeoutId;
        let timeoutController;
        try {
          const { headers, method, body: functionArgs, signal, timeout } = options;
          let _headers = {};
          let { region } = options;
          if (!region) {
            region = this.region;
          }
          const url = new URL(`${this.url}/${functionName}`);
          if (region && region !== "any") {
            _headers["x-region"] = region;
            url.searchParams.set("forceFunctionRegion", region);
          }
          let body;
          if (functionArgs && (headers && !Object.prototype.hasOwnProperty.call(headers, "Content-Type") || !headers)) {
            if (typeof Blob !== "undefined" && functionArgs instanceof Blob || functionArgs instanceof ArrayBuffer) {
              _headers["Content-Type"] = "application/octet-stream";
              body = functionArgs;
            } else if (typeof functionArgs === "string") {
              _headers["Content-Type"] = "text/plain";
              body = functionArgs;
            } else if (typeof FormData !== "undefined" && functionArgs instanceof FormData) {
              body = functionArgs;
            } else {
              _headers["Content-Type"] = "application/json";
              body = JSON.stringify(functionArgs);
            }
          } else {
            if (functionArgs && typeof functionArgs !== "string" && !(typeof Blob !== "undefined" && functionArgs instanceof Blob) && !(functionArgs instanceof ArrayBuffer) && !(typeof FormData !== "undefined" && functionArgs instanceof FormData)) {
              body = JSON.stringify(functionArgs);
            } else {
              body = functionArgs;
            }
          }
          let effectiveSignal = signal;
          if (timeout) {
            timeoutController = new AbortController();
            timeoutId = setTimeout(() => timeoutController.abort(), timeout);
            if (signal) {
              effectiveSignal = timeoutController.signal;
              signal.addEventListener("abort", () => timeoutController.abort());
            } else {
              effectiveSignal = timeoutController.signal;
            }
          }
          const response = yield this.fetch(url.toString(), {
            method: method || "POST",
            // headers priority is (high to low):
            // 1. invoke-level headers
            // 2. client-level headers
            // 3. default Content-Type header
            headers: Object.assign(Object.assign(Object.assign({}, _headers), this.headers), headers),
            body,
            signal: effectiveSignal
          }).catch((fetchError) => {
            throw new FunctionsFetchError(fetchError);
          });
          const isRelayError = response.headers.get("x-relay-error");
          if (isRelayError && isRelayError === "true") {
            throw new FunctionsRelayError(response);
          }
          if (!response.ok) {
            throw new FunctionsHttpError(response);
          }
          let responseType = ((_a = response.headers.get("Content-Type")) !== null && _a !== void 0 ? _a : "text/plain").split(";")[0].trim();
          let data;
          if (responseType === "application/json") {
            data = yield response.json();
          } else if (responseType === "application/octet-stream" || responseType === "application/pdf") {
            data = yield response.blob();
          } else if (responseType === "text/event-stream") {
            data = response;
          } else if (responseType === "multipart/form-data") {
            data = yield response.formData();
          } else {
            data = yield response.text();
          }
          return { data, error: null, response };
        } catch (error) {
          return {
            data: null,
            error,
            response: error instanceof FunctionsHttpError || error instanceof FunctionsRelayError ? error.context : void 0
          };
        } finally {
          if (timeoutId) {
            clearTimeout(timeoutId);
          }
        }
      });
    }
  };

  // node_modules/@supabase/postgrest-js/dist/index.mjs
  var PostgrestError = class extends Error {
    /**
    * @example
    * ```ts
    * import PostgrestError from '@supabase/postgrest-js'
    *
    * throw new PostgrestError({
    *   message: 'Row level security prevented the request',
    *   details: 'RLS denied the insert',
    *   hint: 'Check your policies',
    *   code: 'PGRST301',
    * })
    * ```
    */
    constructor(context) {
      super(context.message);
      this.name = "PostgrestError";
      this.details = context.details;
      this.hint = context.hint;
      this.code = context.code;
    }
  };
  var PostgrestBuilder = class {
    /**
    * Creates a builder configured for a specific PostgREST request.
    *
    * @example
    * ```ts
    * import PostgrestQueryBuilder from '@supabase/postgrest-js'
    *
    * const builder = new PostgrestQueryBuilder(
    *   new URL('https://xyzcompany.supabase.co/rest/v1/users'),
    *   { headers: new Headers({ apikey: 'public-anon-key' }) }
    * )
    * ```
    */
    constructor(builder) {
      var _builder$shouldThrowO, _builder$isMaybeSingl, _builder$urlLengthLim;
      this.shouldThrowOnError = false;
      this.method = builder.method;
      this.url = builder.url;
      this.headers = new Headers(builder.headers);
      this.schema = builder.schema;
      this.body = builder.body;
      this.shouldThrowOnError = (_builder$shouldThrowO = builder.shouldThrowOnError) !== null && _builder$shouldThrowO !== void 0 ? _builder$shouldThrowO : false;
      this.signal = builder.signal;
      this.isMaybeSingle = (_builder$isMaybeSingl = builder.isMaybeSingle) !== null && _builder$isMaybeSingl !== void 0 ? _builder$isMaybeSingl : false;
      this.urlLengthLimit = (_builder$urlLengthLim = builder.urlLengthLimit) !== null && _builder$urlLengthLim !== void 0 ? _builder$urlLengthLim : 8e3;
      if (builder.fetch) this.fetch = builder.fetch;
      else this.fetch = fetch;
    }
    /**
    * If there's an error with the query, throwOnError will reject the promise by
    * throwing the error instead of returning it as part of a successful response.
    *
    * {@link https://github.com/supabase/supabase-js/issues/92}
    */
    throwOnError() {
      this.shouldThrowOnError = true;
      return this;
    }
    /**
    * Set an HTTP header for the request.
    */
    setHeader(name, value) {
      this.headers = new Headers(this.headers);
      this.headers.set(name, value);
      return this;
    }
    then(onfulfilled, onrejected) {
      var _this = this;
      if (this.schema === void 0) {
      } else if (["GET", "HEAD"].includes(this.method)) this.headers.set("Accept-Profile", this.schema);
      else this.headers.set("Content-Profile", this.schema);
      if (this.method !== "GET" && this.method !== "HEAD") this.headers.set("Content-Type", "application/json");
      const _fetch = this.fetch;
      let res = _fetch(this.url.toString(), {
        method: this.method,
        headers: this.headers,
        body: JSON.stringify(this.body),
        signal: this.signal
      }).then(async (res$1) => {
        let error = null;
        let data = null;
        let count = null;
        let status = res$1.status;
        let statusText = res$1.statusText;
        if (res$1.ok) {
          var _this$headers$get2, _res$headers$get;
          if (_this.method !== "HEAD") {
            var _this$headers$get;
            const body = await res$1.text();
            if (body === "") {
            } else if (_this.headers.get("Accept") === "text/csv") data = body;
            else if (_this.headers.get("Accept") && ((_this$headers$get = _this.headers.get("Accept")) === null || _this$headers$get === void 0 ? void 0 : _this$headers$get.includes("application/vnd.pgrst.plan+text"))) data = body;
            else data = JSON.parse(body);
          }
          const countHeader = (_this$headers$get2 = _this.headers.get("Prefer")) === null || _this$headers$get2 === void 0 ? void 0 : _this$headers$get2.match(/count=(exact|planned|estimated)/);
          const contentRange = (_res$headers$get = res$1.headers.get("content-range")) === null || _res$headers$get === void 0 ? void 0 : _res$headers$get.split("/");
          if (countHeader && contentRange && contentRange.length > 1) count = parseInt(contentRange[1]);
          if (_this.isMaybeSingle && _this.method === "GET" && Array.isArray(data)) if (data.length > 1) {
            error = {
              code: "PGRST116",
              details: `Results contain ${data.length} rows, application/vnd.pgrst.object+json requires 1 row`,
              hint: null,
              message: "JSON object requested, multiple (or no) rows returned"
            };
            data = null;
            count = null;
            status = 406;
            statusText = "Not Acceptable";
          } else if (data.length === 1) data = data[0];
          else data = null;
        } else {
          var _error$details;
          const body = await res$1.text();
          try {
            error = JSON.parse(body);
            if (Array.isArray(error) && res$1.status === 404) {
              data = [];
              error = null;
              status = 200;
              statusText = "OK";
            }
          } catch (_unused) {
            if (res$1.status === 404 && body === "") {
              status = 204;
              statusText = "No Content";
            } else error = { message: body };
          }
          if (error && _this.isMaybeSingle && (error === null || error === void 0 || (_error$details = error.details) === null || _error$details === void 0 ? void 0 : _error$details.includes("0 rows"))) {
            error = null;
            status = 200;
            statusText = "OK";
          }
          if (error && _this.shouldThrowOnError) throw new PostgrestError(error);
        }
        return {
          error,
          data,
          count,
          status,
          statusText
        };
      });
      if (!this.shouldThrowOnError) res = res.catch((fetchError) => {
        var _fetchError$name2;
        let errorDetails = "";
        let hint = "";
        let code = "";
        const cause = fetchError === null || fetchError === void 0 ? void 0 : fetchError.cause;
        if (cause) {
          var _cause$message, _cause$code, _fetchError$name, _cause$name;
          const causeMessage = (_cause$message = cause === null || cause === void 0 ? void 0 : cause.message) !== null && _cause$message !== void 0 ? _cause$message : "";
          const causeCode = (_cause$code = cause === null || cause === void 0 ? void 0 : cause.code) !== null && _cause$code !== void 0 ? _cause$code : "";
          errorDetails = `${(_fetchError$name = fetchError === null || fetchError === void 0 ? void 0 : fetchError.name) !== null && _fetchError$name !== void 0 ? _fetchError$name : "FetchError"}: ${fetchError === null || fetchError === void 0 ? void 0 : fetchError.message}`;
          errorDetails += `

Caused by: ${(_cause$name = cause === null || cause === void 0 ? void 0 : cause.name) !== null && _cause$name !== void 0 ? _cause$name : "Error"}: ${causeMessage}`;
          if (causeCode) errorDetails += ` (${causeCode})`;
          if (cause === null || cause === void 0 ? void 0 : cause.stack) errorDetails += `
${cause.stack}`;
        } else {
          var _fetchError$stack;
          errorDetails = (_fetchError$stack = fetchError === null || fetchError === void 0 ? void 0 : fetchError.stack) !== null && _fetchError$stack !== void 0 ? _fetchError$stack : "";
        }
        const urlLength = this.url.toString().length;
        if ((fetchError === null || fetchError === void 0 ? void 0 : fetchError.name) === "AbortError" || (fetchError === null || fetchError === void 0 ? void 0 : fetchError.code) === "ABORT_ERR") {
          code = "";
          hint = "Request was aborted (timeout or manual cancellation)";
          if (urlLength > this.urlLengthLimit) hint += `. Note: Your request URL is ${urlLength} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`;
        } else if ((cause === null || cause === void 0 ? void 0 : cause.name) === "HeadersOverflowError" || (cause === null || cause === void 0 ? void 0 : cause.code) === "UND_ERR_HEADERS_OVERFLOW") {
          code = "";
          hint = "HTTP headers exceeded server limits (typically 16KB)";
          if (urlLength > this.urlLengthLimit) hint += `. Your request URL is ${urlLength} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`;
        }
        return {
          error: {
            message: `${(_fetchError$name2 = fetchError === null || fetchError === void 0 ? void 0 : fetchError.name) !== null && _fetchError$name2 !== void 0 ? _fetchError$name2 : "FetchError"}: ${fetchError === null || fetchError === void 0 ? void 0 : fetchError.message}`,
            details: errorDetails,
            hint,
            code
          },
          data: null,
          count: null,
          status: 0,
          statusText: ""
        };
      });
      return res.then(onfulfilled, onrejected);
    }
    /**
    * Override the type of the returned `data`.
    *
    * @typeParam NewResult - The new result type to override with
    * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
    */
    returns() {
      return this;
    }
    /**
    * Override the type of the returned `data` field in the response.
    *
    * @typeParam NewResult - The new type to cast the response data to
    * @typeParam Options - Optional type configuration (defaults to { merge: true })
    * @typeParam Options.merge - When true, merges the new type with existing return type. When false, replaces the existing types entirely (defaults to true)
    * @example
    * ```typescript
    * // Merge with existing types (default behavior)
    * const query = supabase
    *   .from('users')
    *   .select()
    *   .overrideTypes<{ custom_field: string }>()
    *
    * // Replace existing types completely
    * const replaceQuery = supabase
    *   .from('users')
    *   .select()
    *   .overrideTypes<{ id: number; name: string }, { merge: false }>()
    * ```
    * @returns A PostgrestBuilder instance with the new type
    */
    overrideTypes() {
      return this;
    }
  };
  var PostgrestTransformBuilder = class extends PostgrestBuilder {
    /**
    * Perform a SELECT on the query result.
    *
    * By default, `.insert()`, `.update()`, `.upsert()`, and `.delete()` do not
    * return modified rows. By calling this method, modified rows are returned in
    * `data`.
    *
    * @param columns - The columns to retrieve, separated by commas
    */
    select(columns) {
      let quoted = false;
      const cleanedColumns = (columns !== null && columns !== void 0 ? columns : "*").split("").map((c) => {
        if (/\s/.test(c) && !quoted) return "";
        if (c === '"') quoted = !quoted;
        return c;
      }).join("");
      this.url.searchParams.set("select", cleanedColumns);
      this.headers.append("Prefer", "return=representation");
      return this;
    }
    /**
    * Order the query result by `column`.
    *
    * You can call this method multiple times to order by multiple columns.
    *
    * You can order referenced tables, but it only affects the ordering of the
    * parent table if you use `!inner` in the query.
    *
    * @param column - The column to order by
    * @param options - Named parameters
    * @param options.ascending - If `true`, the result will be in ascending order
    * @param options.nullsFirst - If `true`, `null`s appear first. If `false`,
    * `null`s appear last.
    * @param options.referencedTable - Set this to order a referenced table by
    * its columns
    * @param options.foreignTable - Deprecated, use `options.referencedTable`
    * instead
    */
    order(column, { ascending = true, nullsFirst, foreignTable, referencedTable = foreignTable } = {}) {
      const key = referencedTable ? `${referencedTable}.order` : "order";
      const existingOrder = this.url.searchParams.get(key);
      this.url.searchParams.set(key, `${existingOrder ? `${existingOrder},` : ""}${column}.${ascending ? "asc" : "desc"}${nullsFirst === void 0 ? "" : nullsFirst ? ".nullsfirst" : ".nullslast"}`);
      return this;
    }
    /**
    * Limit the query result by `count`.
    *
    * @param count - The maximum number of rows to return
    * @param options - Named parameters
    * @param options.referencedTable - Set this to limit rows of referenced
    * tables instead of the parent table
    * @param options.foreignTable - Deprecated, use `options.referencedTable`
    * instead
    */
    limit(count, { foreignTable, referencedTable = foreignTable } = {}) {
      const key = typeof referencedTable === "undefined" ? "limit" : `${referencedTable}.limit`;
      this.url.searchParams.set(key, `${count}`);
      return this;
    }
    /**
    * Limit the query result by starting at an offset `from` and ending at the offset `to`.
    * Only records within this range are returned.
    * This respects the query order and if there is no order clause the range could behave unexpectedly.
    * The `from` and `to` values are 0-based and inclusive: `range(1, 3)` will include the second, third
    * and fourth rows of the query.
    *
    * @param from - The starting index from which to limit the result
    * @param to - The last index to which to limit the result
    * @param options - Named parameters
    * @param options.referencedTable - Set this to limit rows of referenced
    * tables instead of the parent table
    * @param options.foreignTable - Deprecated, use `options.referencedTable`
    * instead
    */
    range(from, to, { foreignTable, referencedTable = foreignTable } = {}) {
      const keyOffset = typeof referencedTable === "undefined" ? "offset" : `${referencedTable}.offset`;
      const keyLimit = typeof referencedTable === "undefined" ? "limit" : `${referencedTable}.limit`;
      this.url.searchParams.set(keyOffset, `${from}`);
      this.url.searchParams.set(keyLimit, `${to - from + 1}`);
      return this;
    }
    /**
    * Set the AbortSignal for the fetch request.
    *
    * @param signal - The AbortSignal to use for the fetch request
    */
    abortSignal(signal) {
      this.signal = signal;
      return this;
    }
    /**
    * Return `data` as a single object instead of an array of objects.
    *
    * Query result must be one row (e.g. using `.limit(1)`), otherwise this
    * returns an error.
    */
    single() {
      this.headers.set("Accept", "application/vnd.pgrst.object+json");
      return this;
    }
    /**
    * Return `data` as a single object instead of an array of objects.
    *
    * Query result must be zero or one row (e.g. using `.limit(1)`), otherwise
    * this returns an error.
    */
    maybeSingle() {
      if (this.method === "GET") this.headers.set("Accept", "application/json");
      else this.headers.set("Accept", "application/vnd.pgrst.object+json");
      this.isMaybeSingle = true;
      return this;
    }
    /**
    * Return `data` as a string in CSV format.
    */
    csv() {
      this.headers.set("Accept", "text/csv");
      return this;
    }
    /**
    * Return `data` as an object in [GeoJSON](https://geojson.org) format.
    */
    geojson() {
      this.headers.set("Accept", "application/geo+json");
      return this;
    }
    /**
    * Return `data` as the EXPLAIN plan for the query.
    *
    * You need to enable the
    * [db_plan_enabled](https://supabase.com/docs/guides/database/debugging-performance#enabling-explain)
    * setting before using this method.
    *
    * @param options - Named parameters
    *
    * @param options.analyze - If `true`, the query will be executed and the
    * actual run time will be returned
    *
    * @param options.verbose - If `true`, the query identifier will be returned
    * and `data` will include the output columns of the query
    *
    * @param options.settings - If `true`, include information on configuration
    * parameters that affect query planning
    *
    * @param options.buffers - If `true`, include information on buffer usage
    *
    * @param options.wal - If `true`, include information on WAL record generation
    *
    * @param options.format - The format of the output, can be `"text"` (default)
    * or `"json"`
    */
    explain({ analyze = false, verbose = false, settings = false, buffers = false, wal = false, format = "text" } = {}) {
      var _this$headers$get;
      const options = [
        analyze ? "analyze" : null,
        verbose ? "verbose" : null,
        settings ? "settings" : null,
        buffers ? "buffers" : null,
        wal ? "wal" : null
      ].filter(Boolean).join("|");
      const forMediatype = (_this$headers$get = this.headers.get("Accept")) !== null && _this$headers$get !== void 0 ? _this$headers$get : "application/json";
      this.headers.set("Accept", `application/vnd.pgrst.plan+${format}; for="${forMediatype}"; options=${options};`);
      if (format === "json") return this;
      else return this;
    }
    /**
    * Rollback the query.
    *
    * `data` will still be returned, but the query is not committed.
    */
    rollback() {
      this.headers.append("Prefer", "tx=rollback");
      return this;
    }
    /**
    * Override the type of the returned `data`.
    *
    * @typeParam NewResult - The new result type to override with
    * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
    */
    returns() {
      return this;
    }
    /**
    * Set the maximum number of rows that can be affected by the query.
    * Only available in PostgREST v13+ and only works with PATCH and DELETE methods.
    *
    * @param value - The maximum number of rows that can be affected
    */
    maxAffected(value) {
      this.headers.append("Prefer", "handling=strict");
      this.headers.append("Prefer", `max-affected=${value}`);
      return this;
    }
  };
  var PostgrestReservedCharsRegexp = /* @__PURE__ */ new RegExp("[,()]");
  var PostgrestFilterBuilder = class extends PostgrestTransformBuilder {
    /**
    * Match only rows where `column` is equal to `value`.
    *
    * To check if the value of `column` is NULL, you should use `.is()` instead.
    *
    * @param column - The column to filter on
    * @param value - The value to filter with
    */
    eq(column, value) {
      this.url.searchParams.append(column, `eq.${value}`);
      return this;
    }
    /**
    * Match only rows where `column` is not equal to `value`.
    *
    * @param column - The column to filter on
    * @param value - The value to filter with
    */
    neq(column, value) {
      this.url.searchParams.append(column, `neq.${value}`);
      return this;
    }
    /**
    * Match only rows where `column` is greater than `value`.
    *
    * @param column - The column to filter on
    * @param value - The value to filter with
    */
    gt(column, value) {
      this.url.searchParams.append(column, `gt.${value}`);
      return this;
    }
    /**
    * Match only rows where `column` is greater than or equal to `value`.
    *
    * @param column - The column to filter on
    * @param value - The value to filter with
    */
    gte(column, value) {
      this.url.searchParams.append(column, `gte.${value}`);
      return this;
    }
    /**
    * Match only rows where `column` is less than `value`.
    *
    * @param column - The column to filter on
    * @param value - The value to filter with
    */
    lt(column, value) {
      this.url.searchParams.append(column, `lt.${value}`);
      return this;
    }
    /**
    * Match only rows where `column` is less than or equal to `value`.
    *
    * @param column - The column to filter on
    * @param value - The value to filter with
    */
    lte(column, value) {
      this.url.searchParams.append(column, `lte.${value}`);
      return this;
    }
    /**
    * Match only rows where `column` matches `pattern` case-sensitively.
    *
    * @param column - The column to filter on
    * @param pattern - The pattern to match with
    */
    like(column, pattern) {
      this.url.searchParams.append(column, `like.${pattern}`);
      return this;
    }
    /**
    * Match only rows where `column` matches all of `patterns` case-sensitively.
    *
    * @param column - The column to filter on
    * @param patterns - The patterns to match with
    */
    likeAllOf(column, patterns) {
      this.url.searchParams.append(column, `like(all).{${patterns.join(",")}}`);
      return this;
    }
    /**
    * Match only rows where `column` matches any of `patterns` case-sensitively.
    *
    * @param column - The column to filter on
    * @param patterns - The patterns to match with
    */
    likeAnyOf(column, patterns) {
      this.url.searchParams.append(column, `like(any).{${patterns.join(",")}}`);
      return this;
    }
    /**
    * Match only rows where `column` matches `pattern` case-insensitively.
    *
    * @param column - The column to filter on
    * @param pattern - The pattern to match with
    */
    ilike(column, pattern) {
      this.url.searchParams.append(column, `ilike.${pattern}`);
      return this;
    }
    /**
    * Match only rows where `column` matches all of `patterns` case-insensitively.
    *
    * @param column - The column to filter on
    * @param patterns - The patterns to match with
    */
    ilikeAllOf(column, patterns) {
      this.url.searchParams.append(column, `ilike(all).{${patterns.join(",")}}`);
      return this;
    }
    /**
    * Match only rows where `column` matches any of `patterns` case-insensitively.
    *
    * @param column - The column to filter on
    * @param patterns - The patterns to match with
    */
    ilikeAnyOf(column, patterns) {
      this.url.searchParams.append(column, `ilike(any).{${patterns.join(",")}}`);
      return this;
    }
    /**
    * Match only rows where `column` matches the PostgreSQL regex `pattern`
    * case-sensitively (using the `~` operator).
    *
    * @param column - The column to filter on
    * @param pattern - The PostgreSQL regular expression pattern to match with
    */
    regexMatch(column, pattern) {
      this.url.searchParams.append(column, `match.${pattern}`);
      return this;
    }
    /**
    * Match only rows where `column` matches the PostgreSQL regex `pattern`
    * case-insensitively (using the `~*` operator).
    *
    * @param column - The column to filter on
    * @param pattern - The PostgreSQL regular expression pattern to match with
    */
    regexIMatch(column, pattern) {
      this.url.searchParams.append(column, `imatch.${pattern}`);
      return this;
    }
    /**
    * Match only rows where `column` IS `value`.
    *
    * For non-boolean columns, this is only relevant for checking if the value of
    * `column` is NULL by setting `value` to `null`.
    *
    * For boolean columns, you can also set `value` to `true` or `false` and it
    * will behave the same way as `.eq()`.
    *
    * @param column - The column to filter on
    * @param value - The value to filter with
    */
    is(column, value) {
      this.url.searchParams.append(column, `is.${value}`);
      return this;
    }
    /**
    * Match only rows where `column` IS DISTINCT FROM `value`.
    *
    * Unlike `.neq()`, this treats `NULL` as a comparable value. Two `NULL` values
    * are considered equal (not distinct), and comparing `NULL` with any non-NULL
    * value returns true (distinct).
    *
    * @param column - The column to filter on
    * @param value - The value to filter with
    */
    isDistinct(column, value) {
      this.url.searchParams.append(column, `isdistinct.${value}`);
      return this;
    }
    /**
    * Match only rows where `column` is included in the `values` array.
    *
    * @param column - The column to filter on
    * @param values - The values array to filter with
    */
    in(column, values) {
      const cleanedValues = Array.from(new Set(values)).map((s) => {
        if (typeof s === "string" && PostgrestReservedCharsRegexp.test(s)) return `"${s}"`;
        else return `${s}`;
      }).join(",");
      this.url.searchParams.append(column, `in.(${cleanedValues})`);
      return this;
    }
    /**
    * Match only rows where `column` is NOT included in the `values` array.
    *
    * @param column - The column to filter on
    * @param values - The values array to filter with
    */
    notIn(column, values) {
      const cleanedValues = Array.from(new Set(values)).map((s) => {
        if (typeof s === "string" && PostgrestReservedCharsRegexp.test(s)) return `"${s}"`;
        else return `${s}`;
      }).join(",");
      this.url.searchParams.append(column, `not.in.(${cleanedValues})`);
      return this;
    }
    /**
    * Only relevant for jsonb, array, and range columns. Match only rows where
    * `column` contains every element appearing in `value`.
    *
    * @param column - The jsonb, array, or range column to filter on
    * @param value - The jsonb, array, or range value to filter with
    */
    contains(column, value) {
      if (typeof value === "string") this.url.searchParams.append(column, `cs.${value}`);
      else if (Array.isArray(value)) this.url.searchParams.append(column, `cs.{${value.join(",")}}`);
      else this.url.searchParams.append(column, `cs.${JSON.stringify(value)}`);
      return this;
    }
    /**
    * Only relevant for jsonb, array, and range columns. Match only rows where
    * every element appearing in `column` is contained by `value`.
    *
    * @param column - The jsonb, array, or range column to filter on
    * @param value - The jsonb, array, or range value to filter with
    */
    containedBy(column, value) {
      if (typeof value === "string") this.url.searchParams.append(column, `cd.${value}`);
      else if (Array.isArray(value)) this.url.searchParams.append(column, `cd.{${value.join(",")}}`);
      else this.url.searchParams.append(column, `cd.${JSON.stringify(value)}`);
      return this;
    }
    /**
    * Only relevant for range columns. Match only rows where every element in
    * `column` is greater than any element in `range`.
    *
    * @param column - The range column to filter on
    * @param range - The range to filter with
    */
    rangeGt(column, range) {
      this.url.searchParams.append(column, `sr.${range}`);
      return this;
    }
    /**
    * Only relevant for range columns. Match only rows where every element in
    * `column` is either contained in `range` or greater than any element in
    * `range`.
    *
    * @param column - The range column to filter on
    * @param range - The range to filter with
    */
    rangeGte(column, range) {
      this.url.searchParams.append(column, `nxl.${range}`);
      return this;
    }
    /**
    * Only relevant for range columns. Match only rows where every element in
    * `column` is less than any element in `range`.
    *
    * @param column - The range column to filter on
    * @param range - The range to filter with
    */
    rangeLt(column, range) {
      this.url.searchParams.append(column, `sl.${range}`);
      return this;
    }
    /**
    * Only relevant for range columns. Match only rows where every element in
    * `column` is either contained in `range` or less than any element in
    * `range`.
    *
    * @param column - The range column to filter on
    * @param range - The range to filter with
    */
    rangeLte(column, range) {
      this.url.searchParams.append(column, `nxr.${range}`);
      return this;
    }
    /**
    * Only relevant for range columns. Match only rows where `column` is
    * mutually exclusive to `range` and there can be no element between the two
    * ranges.
    *
    * @param column - The range column to filter on
    * @param range - The range to filter with
    */
    rangeAdjacent(column, range) {
      this.url.searchParams.append(column, `adj.${range}`);
      return this;
    }
    /**
    * Only relevant for array and range columns. Match only rows where
    * `column` and `value` have an element in common.
    *
    * @param column - The array or range column to filter on
    * @param value - The array or range value to filter with
    */
    overlaps(column, value) {
      if (typeof value === "string") this.url.searchParams.append(column, `ov.${value}`);
      else this.url.searchParams.append(column, `ov.{${value.join(",")}}`);
      return this;
    }
    /**
    * Only relevant for text and tsvector columns. Match only rows where
    * `column` matches the query string in `query`.
    *
    * @param column - The text or tsvector column to filter on
    * @param query - The query text to match with
    * @param options - Named parameters
    * @param options.config - The text search configuration to use
    * @param options.type - Change how the `query` text is interpreted
    */
    textSearch(column, query, { config, type } = {}) {
      let typePart = "";
      if (type === "plain") typePart = "pl";
      else if (type === "phrase") typePart = "ph";
      else if (type === "websearch") typePart = "w";
      const configPart = config === void 0 ? "" : `(${config})`;
      this.url.searchParams.append(column, `${typePart}fts${configPart}.${query}`);
      return this;
    }
    /**
    * Match only rows where each column in `query` keys is equal to its
    * associated value. Shorthand for multiple `.eq()`s.
    *
    * @param query - The object to filter with, with column names as keys mapped
    * to their filter values
    */
    match(query) {
      Object.entries(query).forEach(([column, value]) => {
        this.url.searchParams.append(column, `eq.${value}`);
      });
      return this;
    }
    /**
    * Match only rows which doesn't satisfy the filter.
    *
    * Unlike most filters, `opearator` and `value` are used as-is and need to
    * follow [PostgREST
    * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
    * to make sure they are properly sanitized.
    *
    * @param column - The column to filter on
    * @param operator - The operator to be negated to filter with, following
    * PostgREST syntax
    * @param value - The value to filter with, following PostgREST syntax
    */
    not(column, operator, value) {
      this.url.searchParams.append(column, `not.${operator}.${value}`);
      return this;
    }
    /**
    * Match only rows which satisfy at least one of the filters.
    *
    * Unlike most filters, `filters` is used as-is and needs to follow [PostgREST
    * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
    * to make sure it's properly sanitized.
    *
    * It's currently not possible to do an `.or()` filter across multiple tables.
    *
    * @param filters - The filters to use, following PostgREST syntax
    * @param options - Named parameters
    * @param options.referencedTable - Set this to filter on referenced tables
    * instead of the parent table
    * @param options.foreignTable - Deprecated, use `referencedTable` instead
    */
    or(filters, { foreignTable, referencedTable = foreignTable } = {}) {
      const key = referencedTable ? `${referencedTable}.or` : "or";
      this.url.searchParams.append(key, `(${filters})`);
      return this;
    }
    /**
    * Match only rows which satisfy the filter. This is an escape hatch - you
    * should use the specific filter methods wherever possible.
    *
    * Unlike most filters, `opearator` and `value` are used as-is and need to
    * follow [PostgREST
    * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
    * to make sure they are properly sanitized.
    *
    * @param column - The column to filter on
    * @param operator - The operator to filter with, following PostgREST syntax
    * @param value - The value to filter with, following PostgREST syntax
    */
    filter(column, operator, value) {
      this.url.searchParams.append(column, `${operator}.${value}`);
      return this;
    }
  };
  var PostgrestQueryBuilder = class {
    /**
    * Creates a query builder scoped to a Postgres table or view.
    *
    * @example
    * ```ts
    * import PostgrestQueryBuilder from '@supabase/postgrest-js'
    *
    * const query = new PostgrestQueryBuilder(
    *   new URL('https://xyzcompany.supabase.co/rest/v1/users'),
    *   { headers: { apikey: 'public-anon-key' } }
    * )
    * ```
    */
    constructor(url, { headers = {}, schema, fetch: fetch$1, urlLengthLimit = 8e3 }) {
      this.url = url;
      this.headers = new Headers(headers);
      this.schema = schema;
      this.fetch = fetch$1;
      this.urlLengthLimit = urlLengthLimit;
    }
    /**
    * Clone URL and headers to prevent shared state between operations.
    */
    cloneRequestState() {
      return {
        url: new URL(this.url.toString()),
        headers: new Headers(this.headers)
      };
    }
    /**
    * Perform a SELECT query on the table or view.
    *
    * @param columns - The columns to retrieve, separated by commas. Columns can be renamed when returned with `customName:columnName`
    *
    * @param options - Named parameters
    *
    * @param options.head - When set to `true`, `data` will not be returned.
    * Useful if you only need the count.
    *
    * @param options.count - Count algorithm to use to count rows in the table or view.
    *
    * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
    * hood.
    *
    * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
    * statistics under the hood.
    *
    * `"estimated"`: Uses exact count for low numbers and planned count for high
    * numbers.
    *
    * @remarks
    * When using `count` with `.range()` or `.limit()`, the returned `count` is the total number of rows
    * that match your filters, not the number of rows in the current page. Use this to build pagination UI.
    */
    select(columns, options) {
      const { head: head2 = false, count } = options !== null && options !== void 0 ? options : {};
      const method = head2 ? "HEAD" : "GET";
      let quoted = false;
      const cleanedColumns = (columns !== null && columns !== void 0 ? columns : "*").split("").map((c) => {
        if (/\s/.test(c) && !quoted) return "";
        if (c === '"') quoted = !quoted;
        return c;
      }).join("");
      const { url, headers } = this.cloneRequestState();
      url.searchParams.set("select", cleanedColumns);
      if (count) headers.append("Prefer", `count=${count}`);
      return new PostgrestFilterBuilder({
        method,
        url,
        headers,
        schema: this.schema,
        fetch: this.fetch,
        urlLengthLimit: this.urlLengthLimit
      });
    }
    /**
    * Perform an INSERT into the table or view.
    *
    * By default, inserted rows are not returned. To return it, chain the call
    * with `.select()`.
    *
    * @param values - The values to insert. Pass an object to insert a single row
    * or an array to insert multiple rows.
    *
    * @param options - Named parameters
    *
    * @param options.count - Count algorithm to use to count inserted rows.
    *
    * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
    * hood.
    *
    * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
    * statistics under the hood.
    *
    * `"estimated"`: Uses exact count for low numbers and planned count for high
    * numbers.
    *
    * @param options.defaultToNull - Make missing fields default to `null`.
    * Otherwise, use the default value for the column. Only applies for bulk
    * inserts.
    */
    insert(values, { count, defaultToNull = true } = {}) {
      var _this$fetch;
      const method = "POST";
      const { url, headers } = this.cloneRequestState();
      if (count) headers.append("Prefer", `count=${count}`);
      if (!defaultToNull) headers.append("Prefer", `missing=default`);
      if (Array.isArray(values)) {
        const columns = values.reduce((acc, x) => acc.concat(Object.keys(x)), []);
        if (columns.length > 0) {
          const uniqueColumns = [...new Set(columns)].map((column) => `"${column}"`);
          url.searchParams.set("columns", uniqueColumns.join(","));
        }
      }
      return new PostgrestFilterBuilder({
        method,
        url,
        headers,
        schema: this.schema,
        body: values,
        fetch: (_this$fetch = this.fetch) !== null && _this$fetch !== void 0 ? _this$fetch : fetch,
        urlLengthLimit: this.urlLengthLimit
      });
    }
    /**
    * Perform an UPSERT on the table or view. Depending on the column(s) passed
    * to `onConflict`, `.upsert()` allows you to perform the equivalent of
    * `.insert()` if a row with the corresponding `onConflict` columns doesn't
    * exist, or if it does exist, perform an alternative action depending on
    * `ignoreDuplicates`.
    *
    * By default, upserted rows are not returned. To return it, chain the call
    * with `.select()`.
    *
    * @param values - The values to upsert with. Pass an object to upsert a
    * single row or an array to upsert multiple rows.
    *
    * @param options - Named parameters
    *
    * @param options.onConflict - Comma-separated UNIQUE column(s) to specify how
    * duplicate rows are determined. Two rows are duplicates if all the
    * `onConflict` columns are equal.
    *
    * @param options.ignoreDuplicates - If `true`, duplicate rows are ignored. If
    * `false`, duplicate rows are merged with existing rows.
    *
    * @param options.count - Count algorithm to use to count upserted rows.
    *
    * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
    * hood.
    *
    * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
    * statistics under the hood.
    *
    * `"estimated"`: Uses exact count for low numbers and planned count for high
    * numbers.
    *
    * @param options.defaultToNull - Make missing fields default to `null`.
    * Otherwise, use the default value for the column. This only applies when
    * inserting new rows, not when merging with existing rows under
    * `ignoreDuplicates: false`. This also only applies when doing bulk upserts.
    *
    * @example Upsert a single row using a unique key
    * ```ts
    * // Upserting a single row, overwriting based on the 'username' unique column
    * const { data, error } = await supabase
    *   .from('users')
    *   .upsert({ username: 'supabot' }, { onConflict: 'username' })
    *
    * // Example response:
    * // {
    * //   data: [
    * //     { id: 4, message: 'bar', username: 'supabot' }
    * //   ],
    * //   error: null
    * // }
    * ```
    *
    * @example Upsert with conflict resolution and exact row counting
    * ```ts
    * // Upserting and returning exact count
    * const { data, error, count } = await supabase
    *   .from('users')
    *   .upsert(
    *     {
    *       id: 3,
    *       message: 'foo',
    *       username: 'supabot'
    *     },
    *     {
    *       onConflict: 'username',
    *       count: 'exact'
    *     }
    *   )
    *
    * // Example response:
    * // {
    * //   data: [
    * //     {
    * //       id: 42,
    * //       handle: "saoirse",
    * //       display_name: "Saoirse"
    * //     }
    * //   ],
    * //   count: 1,
    * //   error: null
    * // }
    * ```
    */
    upsert(values, { onConflict, ignoreDuplicates = false, count, defaultToNull = true } = {}) {
      var _this$fetch2;
      const method = "POST";
      const { url, headers } = this.cloneRequestState();
      headers.append("Prefer", `resolution=${ignoreDuplicates ? "ignore" : "merge"}-duplicates`);
      if (onConflict !== void 0) url.searchParams.set("on_conflict", onConflict);
      if (count) headers.append("Prefer", `count=${count}`);
      if (!defaultToNull) headers.append("Prefer", "missing=default");
      if (Array.isArray(values)) {
        const columns = values.reduce((acc, x) => acc.concat(Object.keys(x)), []);
        if (columns.length > 0) {
          const uniqueColumns = [...new Set(columns)].map((column) => `"${column}"`);
          url.searchParams.set("columns", uniqueColumns.join(","));
        }
      }
      return new PostgrestFilterBuilder({
        method,
        url,
        headers,
        schema: this.schema,
        body: values,
        fetch: (_this$fetch2 = this.fetch) !== null && _this$fetch2 !== void 0 ? _this$fetch2 : fetch,
        urlLengthLimit: this.urlLengthLimit
      });
    }
    /**
    * Perform an UPDATE on the table or view.
    *
    * By default, updated rows are not returned. To return it, chain the call
    * with `.select()` after filters.
    *
    * @param values - The values to update with
    *
    * @param options - Named parameters
    *
    * @param options.count - Count algorithm to use to count updated rows.
    *
    * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
    * hood.
    *
    * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
    * statistics under the hood.
    *
    * `"estimated"`: Uses exact count for low numbers and planned count for high
    * numbers.
    */
    update(values, { count } = {}) {
      var _this$fetch3;
      const method = "PATCH";
      const { url, headers } = this.cloneRequestState();
      if (count) headers.append("Prefer", `count=${count}`);
      return new PostgrestFilterBuilder({
        method,
        url,
        headers,
        schema: this.schema,
        body: values,
        fetch: (_this$fetch3 = this.fetch) !== null && _this$fetch3 !== void 0 ? _this$fetch3 : fetch,
        urlLengthLimit: this.urlLengthLimit
      });
    }
    /**
    * Perform a DELETE on the table or view.
    *
    * By default, deleted rows are not returned. To return it, chain the call
    * with `.select()` after filters.
    *
    * @param options - Named parameters
    *
    * @param options.count - Count algorithm to use to count deleted rows.
    *
    * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
    * hood.
    *
    * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
    * statistics under the hood.
    *
    * `"estimated"`: Uses exact count for low numbers and planned count for high
    * numbers.
    */
    delete({ count } = {}) {
      var _this$fetch4;
      const method = "DELETE";
      const { url, headers } = this.cloneRequestState();
      if (count) headers.append("Prefer", `count=${count}`);
      return new PostgrestFilterBuilder({
        method,
        url,
        headers,
        schema: this.schema,
        fetch: (_this$fetch4 = this.fetch) !== null && _this$fetch4 !== void 0 ? _this$fetch4 : fetch,
        urlLengthLimit: this.urlLengthLimit
      });
    }
  };
  function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o$1) {
      return typeof o$1;
    } : function(o$1) {
      return o$1 && "function" == typeof Symbol && o$1.constructor === Symbol && o$1 !== Symbol.prototype ? "symbol" : typeof o$1;
    }, _typeof(o);
  }
  function toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != _typeof(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function toPropertyKey(t) {
    var i = toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
  }
  function _defineProperty(e, r, t) {
    return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e[r] = t, e;
  }
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function(r$1) {
        return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), true).forEach(function(r$1) {
        _defineProperty(e, r$1, t[r$1]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r$1) {
        Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
      });
    }
    return e;
  }
  var PostgrestClient = class PostgrestClient2 {
    /**
    * Creates a PostgREST client.
    *
    * @param url - URL of the PostgREST endpoint
    * @param options - Named parameters
    * @param options.headers - Custom headers
    * @param options.schema - Postgres schema to switch to
    * @param options.fetch - Custom fetch
    * @param options.timeout - Optional timeout in milliseconds for all requests. When set, requests will automatically abort after this duration to prevent indefinite hangs.
    * @param options.urlLengthLimit - Maximum URL length in characters before warnings/errors are triggered. Defaults to 8000.
    * @example
    * ```ts
    * import PostgrestClient from '@supabase/postgrest-js'
    *
    * const postgrest = new PostgrestClient('https://xyzcompany.supabase.co/rest/v1', {
    *   headers: { apikey: 'public-anon-key' },
    *   schema: 'public',
    *   timeout: 30000, // 30 second timeout
    * })
    * ```
    */
    constructor(url, { headers = {}, schema, fetch: fetch$1, timeout, urlLengthLimit = 8e3 } = {}) {
      this.url = url;
      this.headers = new Headers(headers);
      this.schemaName = schema;
      this.urlLengthLimit = urlLengthLimit;
      const originalFetch = fetch$1 !== null && fetch$1 !== void 0 ? fetch$1 : globalThis.fetch;
      if (timeout !== void 0 && timeout > 0) this.fetch = (input, init) => {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeout);
        const existingSignal = init === null || init === void 0 ? void 0 : init.signal;
        if (existingSignal) {
          if (existingSignal.aborted) {
            clearTimeout(timeoutId);
            return originalFetch(input, init);
          }
          const abortHandler = () => {
            clearTimeout(timeoutId);
            controller.abort();
          };
          existingSignal.addEventListener("abort", abortHandler, { once: true });
          return originalFetch(input, _objectSpread2(_objectSpread2({}, init), {}, { signal: controller.signal })).finally(() => {
            clearTimeout(timeoutId);
            existingSignal.removeEventListener("abort", abortHandler);
          });
        }
        return originalFetch(input, _objectSpread2(_objectSpread2({}, init), {}, { signal: controller.signal })).finally(() => clearTimeout(timeoutId));
      };
      else this.fetch = originalFetch;
    }
    /**
    * Perform a query on a table or a view.
    *
    * @param relation - The table or view name to query
    */
    from(relation) {
      if (!relation || typeof relation !== "string" || relation.trim() === "") throw new Error("Invalid relation name: relation must be a non-empty string.");
      return new PostgrestQueryBuilder(new URL(`${this.url}/${relation}`), {
        headers: new Headers(this.headers),
        schema: this.schemaName,
        fetch: this.fetch,
        urlLengthLimit: this.urlLengthLimit
      });
    }
    /**
    * Select a schema to query or perform an function (rpc) call.
    *
    * The schema needs to be on the list of exposed schemas inside Supabase.
    *
    * @param schema - The schema to query
    */
    schema(schema) {
      return new PostgrestClient2(this.url, {
        headers: this.headers,
        schema,
        fetch: this.fetch,
        urlLengthLimit: this.urlLengthLimit
      });
    }
    /**
    * Perform a function call.
    *
    * @param fn - The function name to call
    * @param args - The arguments to pass to the function call
    * @param options - Named parameters
    * @param options.head - When set to `true`, `data` will not be returned.
    * Useful if you only need the count.
    * @param options.get - When set to `true`, the function will be called with
    * read-only access mode.
    * @param options.count - Count algorithm to use to count rows returned by the
    * function. Only applicable for [set-returning
    * functions](https://www.postgresql.org/docs/current/functions-srf.html).
    *
    * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
    * hood.
    *
    * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
    * statistics under the hood.
    *
    * `"estimated"`: Uses exact count for low numbers and planned count for high
    * numbers.
    *
    * @example
    * ```ts
    * // For cross-schema functions where type inference fails, use overrideTypes:
    * const { data } = await supabase
    *   .schema('schema_b')
    *   .rpc('function_a', {})
    *   .overrideTypes<{ id: string; user_id: string }[]>()
    * ```
    */
    rpc(fn, args = {}, { head: head2 = false, get: get2 = false, count } = {}) {
      var _this$fetch;
      let method;
      const url = new URL(`${this.url}/rpc/${fn}`);
      let body;
      const _isObject = (v) => v !== null && typeof v === "object" && (!Array.isArray(v) || v.some(_isObject));
      const _hasObjectArg = head2 && Object.values(args).some(_isObject);
      if (_hasObjectArg) {
        method = "POST";
        body = args;
      } else if (head2 || get2) {
        method = head2 ? "HEAD" : "GET";
        Object.entries(args).filter(([_, value]) => value !== void 0).map(([name, value]) => [name, Array.isArray(value) ? `{${value.join(",")}}` : `${value}`]).forEach(([name, value]) => {
          url.searchParams.append(name, value);
        });
      } else {
        method = "POST";
        body = args;
      }
      const headers = new Headers(this.headers);
      if (_hasObjectArg) headers.set("Prefer", count ? `count=${count},return=minimal` : "return=minimal");
      else if (count) headers.set("Prefer", `count=${count}`);
      return new PostgrestFilterBuilder({
        method,
        url,
        headers,
        schema: this.schemaName,
        body,
        fetch: (_this$fetch = this.fetch) !== null && _this$fetch !== void 0 ? _this$fetch : fetch,
        urlLengthLimit: this.urlLengthLimit
      });
    }
  };

  // node_modules/@supabase/realtime-js/dist/module/lib/websocket-factory.js
  var WebSocketFactory = class {
    /**
     * Static-only utility – prevent instantiation.
     */
    constructor() {
    }
    static detectEnvironment() {
      var _a;
      if (typeof WebSocket !== "undefined") {
        return { type: "native", constructor: WebSocket };
      }
      if (typeof globalThis !== "undefined" && typeof globalThis.WebSocket !== "undefined") {
        return { type: "native", constructor: globalThis.WebSocket };
      }
      if (typeof global !== "undefined" && typeof global.WebSocket !== "undefined") {
        return { type: "native", constructor: global.WebSocket };
      }
      if (typeof globalThis !== "undefined" && typeof globalThis.WebSocketPair !== "undefined" && typeof globalThis.WebSocket === "undefined") {
        return {
          type: "cloudflare",
          error: "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
          workaround: "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."
        };
      }
      if (typeof globalThis !== "undefined" && globalThis.EdgeRuntime || typeof navigator !== "undefined" && ((_a = navigator.userAgent) === null || _a === void 0 ? void 0 : _a.includes("Vercel-Edge"))) {
        return {
          type: "unsupported",
          error: "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
          workaround: "Use serverless functions or a different deployment target for WebSocket functionality."
        };
      }
      const _process = globalThis["process"];
      if (_process) {
        const processVersions = _process["versions"];
        if (processVersions && processVersions["node"]) {
          const versionString = processVersions["node"];
          const nodeVersion = parseInt(versionString.replace(/^v/, "").split(".")[0]);
          if (nodeVersion >= 22) {
            if (typeof globalThis.WebSocket !== "undefined") {
              return { type: "native", constructor: globalThis.WebSocket };
            }
            return {
              type: "unsupported",
              error: `Node.js ${nodeVersion} detected but native WebSocket not found.`,
              workaround: "Provide a WebSocket implementation via the transport option."
            };
          }
          return {
            type: "unsupported",
            error: `Node.js ${nodeVersion} detected without native WebSocket support.`,
            workaround: 'For Node.js < 22, install "ws" package and provide it via the transport option:\nimport ws from "ws"\nnew RealtimeClient(url, { transport: ws })'
          };
        }
      }
      return {
        type: "unsupported",
        error: "Unknown JavaScript runtime without WebSocket support.",
        workaround: "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."
      };
    }
    /**
     * Returns the best available WebSocket constructor for the current runtime.
     *
     * @example
     * ```ts
     * const WS = WebSocketFactory.getWebSocketConstructor()
     * const socket = new WS('wss://realtime.supabase.co/socket')
     * ```
     */
    static getWebSocketConstructor() {
      const env = this.detectEnvironment();
      if (env.constructor) {
        return env.constructor;
      }
      let errorMessage = env.error || "WebSocket not supported in this environment.";
      if (env.workaround) {
        errorMessage += `

Suggested solution: ${env.workaround}`;
      }
      throw new Error(errorMessage);
    }
    /**
     * Creates a WebSocket using the detected constructor.
     *
     * @example
     * ```ts
     * const socket = WebSocketFactory.createWebSocket('wss://realtime.supabase.co/socket')
     * ```
     */
    static createWebSocket(url, protocols) {
      const WS = this.getWebSocketConstructor();
      return new WS(url, protocols);
    }
    /**
     * Detects whether the runtime can establish WebSocket connections.
     *
     * @example
     * ```ts
     * if (!WebSocketFactory.isWebSocketSupported()) {
     *   console.warn('Falling back to long polling')
     * }
     * ```
     */
    static isWebSocketSupported() {
      try {
        const env = this.detectEnvironment();
        return env.type === "native" || env.type === "ws";
      } catch (_a) {
        return false;
      }
    }
  };
  var websocket_factory_default = WebSocketFactory;

  // node_modules/@supabase/realtime-js/dist/module/lib/version.js
  var version = "2.98.0";

  // node_modules/@supabase/realtime-js/dist/module/lib/constants.js
  var DEFAULT_VERSION = `realtime-js/${version}`;
  var VSN_1_0_0 = "1.0.0";
  var VSN_2_0_0 = "2.0.0";
  var DEFAULT_VSN = VSN_2_0_0;
  var DEFAULT_TIMEOUT = 1e4;
  var WS_CLOSE_NORMAL = 1e3;
  var MAX_PUSH_BUFFER_SIZE = 100;
  var SOCKET_STATES;
  (function(SOCKET_STATES2) {
    SOCKET_STATES2[SOCKET_STATES2["connecting"] = 0] = "connecting";
    SOCKET_STATES2[SOCKET_STATES2["open"] = 1] = "open";
    SOCKET_STATES2[SOCKET_STATES2["closing"] = 2] = "closing";
    SOCKET_STATES2[SOCKET_STATES2["closed"] = 3] = "closed";
  })(SOCKET_STATES || (SOCKET_STATES = {}));
  var CHANNEL_STATES;
  (function(CHANNEL_STATES2) {
    CHANNEL_STATES2["closed"] = "closed";
    CHANNEL_STATES2["errored"] = "errored";
    CHANNEL_STATES2["joined"] = "joined";
    CHANNEL_STATES2["joining"] = "joining";
    CHANNEL_STATES2["leaving"] = "leaving";
  })(CHANNEL_STATES || (CHANNEL_STATES = {}));
  var CHANNEL_EVENTS;
  (function(CHANNEL_EVENTS2) {
    CHANNEL_EVENTS2["close"] = "phx_close";
    CHANNEL_EVENTS2["error"] = "phx_error";
    CHANNEL_EVENTS2["join"] = "phx_join";
    CHANNEL_EVENTS2["reply"] = "phx_reply";
    CHANNEL_EVENTS2["leave"] = "phx_leave";
    CHANNEL_EVENTS2["access_token"] = "access_token";
  })(CHANNEL_EVENTS || (CHANNEL_EVENTS = {}));
  var TRANSPORTS;
  (function(TRANSPORTS2) {
    TRANSPORTS2["websocket"] = "websocket";
  })(TRANSPORTS || (TRANSPORTS = {}));
  var CONNECTION_STATE;
  (function(CONNECTION_STATE2) {
    CONNECTION_STATE2["Connecting"] = "connecting";
    CONNECTION_STATE2["Open"] = "open";
    CONNECTION_STATE2["Closing"] = "closing";
    CONNECTION_STATE2["Closed"] = "closed";
  })(CONNECTION_STATE || (CONNECTION_STATE = {}));

  // node_modules/@supabase/realtime-js/dist/module/lib/serializer.js
  var Serializer = class {
    constructor(allowedMetadataKeys) {
      this.HEADER_LENGTH = 1;
      this.USER_BROADCAST_PUSH_META_LENGTH = 6;
      this.KINDS = { userBroadcastPush: 3, userBroadcast: 4 };
      this.BINARY_ENCODING = 0;
      this.JSON_ENCODING = 1;
      this.BROADCAST_EVENT = "broadcast";
      this.allowedMetadataKeys = [];
      this.allowedMetadataKeys = allowedMetadataKeys !== null && allowedMetadataKeys !== void 0 ? allowedMetadataKeys : [];
    }
    encode(msg, callback) {
      if (msg.event === this.BROADCAST_EVENT && !(msg.payload instanceof ArrayBuffer) && typeof msg.payload.event === "string") {
        return callback(this._binaryEncodeUserBroadcastPush(msg));
      }
      let payload = [msg.join_ref, msg.ref, msg.topic, msg.event, msg.payload];
      return callback(JSON.stringify(payload));
    }
    _binaryEncodeUserBroadcastPush(message) {
      var _a;
      if (this._isArrayBuffer((_a = message.payload) === null || _a === void 0 ? void 0 : _a.payload)) {
        return this._encodeBinaryUserBroadcastPush(message);
      } else {
        return this._encodeJsonUserBroadcastPush(message);
      }
    }
    _encodeBinaryUserBroadcastPush(message) {
      var _a, _b;
      const userPayload = (_b = (_a = message.payload) === null || _a === void 0 ? void 0 : _a.payload) !== null && _b !== void 0 ? _b : new ArrayBuffer(0);
      return this._encodeUserBroadcastPush(message, this.BINARY_ENCODING, userPayload);
    }
    _encodeJsonUserBroadcastPush(message) {
      var _a, _b;
      const userPayload = (_b = (_a = message.payload) === null || _a === void 0 ? void 0 : _a.payload) !== null && _b !== void 0 ? _b : {};
      const encoder = new TextEncoder();
      const encodedUserPayload = encoder.encode(JSON.stringify(userPayload)).buffer;
      return this._encodeUserBroadcastPush(message, this.JSON_ENCODING, encodedUserPayload);
    }
    _encodeUserBroadcastPush(message, encodingType, encodedPayload) {
      var _a, _b;
      const topic = message.topic;
      const ref = (_a = message.ref) !== null && _a !== void 0 ? _a : "";
      const joinRef = (_b = message.join_ref) !== null && _b !== void 0 ? _b : "";
      const userEvent = message.payload.event;
      const rest = this.allowedMetadataKeys ? this._pick(message.payload, this.allowedMetadataKeys) : {};
      const metadata = Object.keys(rest).length === 0 ? "" : JSON.stringify(rest);
      if (joinRef.length > 255) {
        throw new Error(`joinRef length ${joinRef.length} exceeds maximum of 255`);
      }
      if (ref.length > 255) {
        throw new Error(`ref length ${ref.length} exceeds maximum of 255`);
      }
      if (topic.length > 255) {
        throw new Error(`topic length ${topic.length} exceeds maximum of 255`);
      }
      if (userEvent.length > 255) {
        throw new Error(`userEvent length ${userEvent.length} exceeds maximum of 255`);
      }
      if (metadata.length > 255) {
        throw new Error(`metadata length ${metadata.length} exceeds maximum of 255`);
      }
      const metaLength = this.USER_BROADCAST_PUSH_META_LENGTH + joinRef.length + ref.length + topic.length + userEvent.length + metadata.length;
      const header = new ArrayBuffer(this.HEADER_LENGTH + metaLength);
      let view = new DataView(header);
      let offset = 0;
      view.setUint8(offset++, this.KINDS.userBroadcastPush);
      view.setUint8(offset++, joinRef.length);
      view.setUint8(offset++, ref.length);
      view.setUint8(offset++, topic.length);
      view.setUint8(offset++, userEvent.length);
      view.setUint8(offset++, metadata.length);
      view.setUint8(offset++, encodingType);
      Array.from(joinRef, (char) => view.setUint8(offset++, char.charCodeAt(0)));
      Array.from(ref, (char) => view.setUint8(offset++, char.charCodeAt(0)));
      Array.from(topic, (char) => view.setUint8(offset++, char.charCodeAt(0)));
      Array.from(userEvent, (char) => view.setUint8(offset++, char.charCodeAt(0)));
      Array.from(metadata, (char) => view.setUint8(offset++, char.charCodeAt(0)));
      var combined = new Uint8Array(header.byteLength + encodedPayload.byteLength);
      combined.set(new Uint8Array(header), 0);
      combined.set(new Uint8Array(encodedPayload), header.byteLength);
      return combined.buffer;
    }
    decode(rawPayload, callback) {
      if (this._isArrayBuffer(rawPayload)) {
        let result = this._binaryDecode(rawPayload);
        return callback(result);
      }
      if (typeof rawPayload === "string") {
        const jsonPayload = JSON.parse(rawPayload);
        const [join_ref, ref, topic, event, payload] = jsonPayload;
        return callback({ join_ref, ref, topic, event, payload });
      }
      return callback({});
    }
    _binaryDecode(buffer) {
      const view = new DataView(buffer);
      const kind = view.getUint8(0);
      const decoder = new TextDecoder();
      switch (kind) {
        case this.KINDS.userBroadcast:
          return this._decodeUserBroadcast(buffer, view, decoder);
      }
    }
    _decodeUserBroadcast(buffer, view, decoder) {
      const topicSize = view.getUint8(1);
      const userEventSize = view.getUint8(2);
      const metadataSize = view.getUint8(3);
      const payloadEncoding = view.getUint8(4);
      let offset = this.HEADER_LENGTH + 4;
      const topic = decoder.decode(buffer.slice(offset, offset + topicSize));
      offset = offset + topicSize;
      const userEvent = decoder.decode(buffer.slice(offset, offset + userEventSize));
      offset = offset + userEventSize;
      const metadata = decoder.decode(buffer.slice(offset, offset + metadataSize));
      offset = offset + metadataSize;
      const payload = buffer.slice(offset, buffer.byteLength);
      const parsedPayload = payloadEncoding === this.JSON_ENCODING ? JSON.parse(decoder.decode(payload)) : payload;
      const data = {
        type: this.BROADCAST_EVENT,
        event: userEvent,
        payload: parsedPayload
      };
      if (metadataSize > 0) {
        data["meta"] = JSON.parse(metadata);
      }
      return { join_ref: null, ref: null, topic, event: this.BROADCAST_EVENT, payload: data };
    }
    _isArrayBuffer(buffer) {
      var _a;
      return buffer instanceof ArrayBuffer || ((_a = buffer === null || buffer === void 0 ? void 0 : buffer.constructor) === null || _a === void 0 ? void 0 : _a.name) === "ArrayBuffer";
    }
    _pick(obj, keys) {
      if (!obj || typeof obj !== "object") {
        return {};
      }
      return Object.fromEntries(Object.entries(obj).filter(([key]) => keys.includes(key)));
    }
  };

  // node_modules/@supabase/realtime-js/dist/module/lib/timer.js
  var Timer = class {
    constructor(callback, timerCalc) {
      this.callback = callback;
      this.timerCalc = timerCalc;
      this.timer = void 0;
      this.tries = 0;
      this.callback = callback;
      this.timerCalc = timerCalc;
    }
    reset() {
      this.tries = 0;
      clearTimeout(this.timer);
      this.timer = void 0;
    }
    // Cancels any previous scheduleTimeout and schedules callback
    scheduleTimeout() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.tries = this.tries + 1;
        this.callback();
      }, this.timerCalc(this.tries + 1));
    }
  };

  // node_modules/@supabase/realtime-js/dist/module/lib/transformers.js
  var PostgresTypes;
  (function(PostgresTypes2) {
    PostgresTypes2["abstime"] = "abstime";
    PostgresTypes2["bool"] = "bool";
    PostgresTypes2["date"] = "date";
    PostgresTypes2["daterange"] = "daterange";
    PostgresTypes2["float4"] = "float4";
    PostgresTypes2["float8"] = "float8";
    PostgresTypes2["int2"] = "int2";
    PostgresTypes2["int4"] = "int4";
    PostgresTypes2["int4range"] = "int4range";
    PostgresTypes2["int8"] = "int8";
    PostgresTypes2["int8range"] = "int8range";
    PostgresTypes2["json"] = "json";
    PostgresTypes2["jsonb"] = "jsonb";
    PostgresTypes2["money"] = "money";
    PostgresTypes2["numeric"] = "numeric";
    PostgresTypes2["oid"] = "oid";
    PostgresTypes2["reltime"] = "reltime";
    PostgresTypes2["text"] = "text";
    PostgresTypes2["time"] = "time";
    PostgresTypes2["timestamp"] = "timestamp";
    PostgresTypes2["timestamptz"] = "timestamptz";
    PostgresTypes2["timetz"] = "timetz";
    PostgresTypes2["tsrange"] = "tsrange";
    PostgresTypes2["tstzrange"] = "tstzrange";
  })(PostgresTypes || (PostgresTypes = {}));
  var convertChangeData = (columns, record, options = {}) => {
    var _a;
    const skipTypes = (_a = options.skipTypes) !== null && _a !== void 0 ? _a : [];
    if (!record) {
      return {};
    }
    return Object.keys(record).reduce((acc, rec_key) => {
      acc[rec_key] = convertColumn(rec_key, columns, record, skipTypes);
      return acc;
    }, {});
  };
  var convertColumn = (columnName, columns, record, skipTypes) => {
    const column = columns.find((x) => x.name === columnName);
    const colType = column === null || column === void 0 ? void 0 : column.type;
    const value = record[columnName];
    if (colType && !skipTypes.includes(colType)) {
      return convertCell(colType, value);
    }
    return noop(value);
  };
  var convertCell = (type, value) => {
    if (type.charAt(0) === "_") {
      const dataType = type.slice(1, type.length);
      return toArray(value, dataType);
    }
    switch (type) {
      case PostgresTypes.bool:
        return toBoolean(value);
      case PostgresTypes.float4:
      case PostgresTypes.float8:
      case PostgresTypes.int2:
      case PostgresTypes.int4:
      case PostgresTypes.int8:
      case PostgresTypes.numeric:
      case PostgresTypes.oid:
        return toNumber(value);
      case PostgresTypes.json:
      case PostgresTypes.jsonb:
        return toJson(value);
      case PostgresTypes.timestamp:
        return toTimestampString(value);
      // Format to be consistent with PostgREST
      case PostgresTypes.abstime:
      // To allow users to cast it based on Timezone
      case PostgresTypes.date:
      // To allow users to cast it based on Timezone
      case PostgresTypes.daterange:
      case PostgresTypes.int4range:
      case PostgresTypes.int8range:
      case PostgresTypes.money:
      case PostgresTypes.reltime:
      // To allow users to cast it based on Timezone
      case PostgresTypes.text:
      case PostgresTypes.time:
      // To allow users to cast it based on Timezone
      case PostgresTypes.timestamptz:
      // To allow users to cast it based on Timezone
      case PostgresTypes.timetz:
      // To allow users to cast it based on Timezone
      case PostgresTypes.tsrange:
      case PostgresTypes.tstzrange:
        return noop(value);
      default:
        return noop(value);
    }
  };
  var noop = (value) => {
    return value;
  };
  var toBoolean = (value) => {
    switch (value) {
      case "t":
        return true;
      case "f":
        return false;
      default:
        return value;
    }
  };
  var toNumber = (value) => {
    if (typeof value === "string") {
      const parsedValue = parseFloat(value);
      if (!Number.isNaN(parsedValue)) {
        return parsedValue;
      }
    }
    return value;
  };
  var toJson = (value) => {
    if (typeof value === "string") {
      try {
        return JSON.parse(value);
      } catch (_a) {
        return value;
      }
    }
    return value;
  };
  var toArray = (value, type) => {
    if (typeof value !== "string") {
      return value;
    }
    const lastIdx = value.length - 1;
    const closeBrace = value[lastIdx];
    const openBrace = value[0];
    if (openBrace === "{" && closeBrace === "}") {
      let arr;
      const valTrim = value.slice(1, lastIdx);
      try {
        arr = JSON.parse("[" + valTrim + "]");
      } catch (_) {
        arr = valTrim ? valTrim.split(",") : [];
      }
      return arr.map((val) => convertCell(type, val));
    }
    return value;
  };
  var toTimestampString = (value) => {
    if (typeof value === "string") {
      return value.replace(" ", "T");
    }
    return value;
  };
  var httpEndpointURL = (socketUrl) => {
    const wsUrl = new URL(socketUrl);
    wsUrl.protocol = wsUrl.protocol.replace(/^ws/i, "http");
    wsUrl.pathname = wsUrl.pathname.replace(/\/+$/, "").replace(/\/socket\/websocket$/i, "").replace(/\/socket$/i, "").replace(/\/websocket$/i, "");
    if (wsUrl.pathname === "" || wsUrl.pathname === "/") {
      wsUrl.pathname = "/api/broadcast";
    } else {
      wsUrl.pathname = wsUrl.pathname + "/api/broadcast";
    }
    return wsUrl.href;
  };

  // node_modules/@supabase/realtime-js/dist/module/lib/push.js
  var Push = class {
    /**
     * Initializes the Push
     *
     * @param channel The Channel
     * @param event The event, for example `"phx_join"`
     * @param payload The payload, for example `{user_id: 123}`
     * @param timeout The push timeout in milliseconds
     */
    constructor(channel, event, payload = {}, timeout = DEFAULT_TIMEOUT) {
      this.channel = channel;
      this.event = event;
      this.payload = payload;
      this.timeout = timeout;
      this.sent = false;
      this.timeoutTimer = void 0;
      this.ref = "";
      this.receivedResp = null;
      this.recHooks = [];
      this.refEvent = null;
    }
    resend(timeout) {
      this.timeout = timeout;
      this._cancelRefEvent();
      this.ref = "";
      this.refEvent = null;
      this.receivedResp = null;
      this.sent = false;
      this.send();
    }
    send() {
      if (this._hasReceived("timeout")) {
        return;
      }
      this.startTimeout();
      this.sent = true;
      this.channel.socket.push({
        topic: this.channel.topic,
        event: this.event,
        payload: this.payload,
        ref: this.ref,
        join_ref: this.channel._joinRef()
      });
    }
    updatePayload(payload) {
      this.payload = Object.assign(Object.assign({}, this.payload), payload);
    }
    receive(status, callback) {
      var _a;
      if (this._hasReceived(status)) {
        callback((_a = this.receivedResp) === null || _a === void 0 ? void 0 : _a.response);
      }
      this.recHooks.push({ status, callback });
      return this;
    }
    startTimeout() {
      if (this.timeoutTimer) {
        return;
      }
      this.ref = this.channel.socket._makeRef();
      this.refEvent = this.channel._replyEventName(this.ref);
      const callback = (payload) => {
        this._cancelRefEvent();
        this._cancelTimeout();
        this.receivedResp = payload;
        this._matchReceive(payload);
      };
      this.channel._on(this.refEvent, {}, callback);
      this.timeoutTimer = setTimeout(() => {
        this.trigger("timeout", {});
      }, this.timeout);
    }
    trigger(status, response) {
      if (this.refEvent)
        this.channel._trigger(this.refEvent, { status, response });
    }
    destroy() {
      this._cancelRefEvent();
      this._cancelTimeout();
    }
    _cancelRefEvent() {
      if (!this.refEvent) {
        return;
      }
      this.channel._off(this.refEvent, {});
    }
    _cancelTimeout() {
      clearTimeout(this.timeoutTimer);
      this.timeoutTimer = void 0;
    }
    _matchReceive({ status, response }) {
      this.recHooks.filter((h) => h.status === status).forEach((h) => h.callback(response));
    }
    _hasReceived(status) {
      return this.receivedResp && this.receivedResp.status === status;
    }
  };

  // node_modules/@supabase/realtime-js/dist/module/RealtimePresence.js
  var REALTIME_PRESENCE_LISTEN_EVENTS;
  (function(REALTIME_PRESENCE_LISTEN_EVENTS2) {
    REALTIME_PRESENCE_LISTEN_EVENTS2["SYNC"] = "sync";
    REALTIME_PRESENCE_LISTEN_EVENTS2["JOIN"] = "join";
    REALTIME_PRESENCE_LISTEN_EVENTS2["LEAVE"] = "leave";
  })(REALTIME_PRESENCE_LISTEN_EVENTS || (REALTIME_PRESENCE_LISTEN_EVENTS = {}));
  var RealtimePresence = class _RealtimePresence {
    /**
     * Creates a Presence helper that keeps the local presence state in sync with the server.
     *
     * @param channel - The realtime channel to bind to.
     * @param opts - Optional custom event names, e.g. `{ events: { state: 'state', diff: 'diff' } }`.
     *
     * @example
     * ```ts
     * const presence = new RealtimePresence(channel)
     *
     * channel.on('presence', ({ event, key }) => {
     *   console.log(`Presence ${event} on ${key}`)
     * })
     * ```
     */
    constructor(channel, opts) {
      this.channel = channel;
      this.state = {};
      this.pendingDiffs = [];
      this.joinRef = null;
      this.enabled = false;
      this.caller = {
        onJoin: () => {
        },
        onLeave: () => {
        },
        onSync: () => {
        }
      };
      const events = (opts === null || opts === void 0 ? void 0 : opts.events) || {
        state: "presence_state",
        diff: "presence_diff"
      };
      this.channel._on(events.state, {}, (newState) => {
        const { onJoin, onLeave, onSync } = this.caller;
        this.joinRef = this.channel._joinRef();
        this.state = _RealtimePresence.syncState(this.state, newState, onJoin, onLeave);
        this.pendingDiffs.forEach((diff) => {
          this.state = _RealtimePresence.syncDiff(this.state, diff, onJoin, onLeave);
        });
        this.pendingDiffs = [];
        onSync();
      });
      this.channel._on(events.diff, {}, (diff) => {
        const { onJoin, onLeave, onSync } = this.caller;
        if (this.inPendingSyncState()) {
          this.pendingDiffs.push(diff);
        } else {
          this.state = _RealtimePresence.syncDiff(this.state, diff, onJoin, onLeave);
          onSync();
        }
      });
      this.onJoin((key, currentPresences, newPresences) => {
        this.channel._trigger("presence", {
          event: "join",
          key,
          currentPresences,
          newPresences
        });
      });
      this.onLeave((key, currentPresences, leftPresences) => {
        this.channel._trigger("presence", {
          event: "leave",
          key,
          currentPresences,
          leftPresences
        });
      });
      this.onSync(() => {
        this.channel._trigger("presence", { event: "sync" });
      });
    }
    /**
     * Used to sync the list of presences on the server with the
     * client's state.
     *
     * An optional `onJoin` and `onLeave` callback can be provided to
     * react to changes in the client's local presences across
     * disconnects and reconnects with the server.
     *
     * @internal
     */
    static syncState(currentState, newState, onJoin, onLeave) {
      const state = this.cloneDeep(currentState);
      const transformedState = this.transformState(newState);
      const joins = {};
      const leaves = {};
      this.map(state, (key, presences) => {
        if (!transformedState[key]) {
          leaves[key] = presences;
        }
      });
      this.map(transformedState, (key, newPresences) => {
        const currentPresences = state[key];
        if (currentPresences) {
          const newPresenceRefs = newPresences.map((m) => m.presence_ref);
          const curPresenceRefs = currentPresences.map((m) => m.presence_ref);
          const joinedPresences = newPresences.filter((m) => curPresenceRefs.indexOf(m.presence_ref) < 0);
          const leftPresences = currentPresences.filter((m) => newPresenceRefs.indexOf(m.presence_ref) < 0);
          if (joinedPresences.length > 0) {
            joins[key] = joinedPresences;
          }
          if (leftPresences.length > 0) {
            leaves[key] = leftPresences;
          }
        } else {
          joins[key] = newPresences;
        }
      });
      return this.syncDiff(state, { joins, leaves }, onJoin, onLeave);
    }
    /**
     * Used to sync a diff of presence join and leave events from the
     * server, as they happen.
     *
     * Like `syncState`, `syncDiff` accepts optional `onJoin` and
     * `onLeave` callbacks to react to a user joining or leaving from a
     * device.
     *
     * @internal
     */
    static syncDiff(state, diff, onJoin, onLeave) {
      const { joins, leaves } = {
        joins: this.transformState(diff.joins),
        leaves: this.transformState(diff.leaves)
      };
      if (!onJoin) {
        onJoin = () => {
        };
      }
      if (!onLeave) {
        onLeave = () => {
        };
      }
      this.map(joins, (key, newPresences) => {
        var _a;
        const currentPresences = (_a = state[key]) !== null && _a !== void 0 ? _a : [];
        state[key] = this.cloneDeep(newPresences);
        if (currentPresences.length > 0) {
          const joinedPresenceRefs = state[key].map((m) => m.presence_ref);
          const curPresences = currentPresences.filter((m) => joinedPresenceRefs.indexOf(m.presence_ref) < 0);
          state[key].unshift(...curPresences);
        }
        onJoin(key, currentPresences, newPresences);
      });
      this.map(leaves, (key, leftPresences) => {
        let currentPresences = state[key];
        if (!currentPresences)
          return;
        const presenceRefsToRemove = leftPresences.map((m) => m.presence_ref);
        currentPresences = currentPresences.filter((m) => presenceRefsToRemove.indexOf(m.presence_ref) < 0);
        state[key] = currentPresences;
        onLeave(key, currentPresences, leftPresences);
        if (currentPresences.length === 0)
          delete state[key];
      });
      return state;
    }
    /** @internal */
    static map(obj, func) {
      return Object.getOwnPropertyNames(obj).map((key) => func(key, obj[key]));
    }
    /**
     * Remove 'metas' key
     * Change 'phx_ref' to 'presence_ref'
     * Remove 'phx_ref' and 'phx_ref_prev'
     *
     * @example
     * // returns {
     *  abc123: [
     *    { presence_ref: '2', user_id: 1 },
     *    { presence_ref: '3', user_id: 2 }
     *  ]
     * }
     * RealtimePresence.transformState({
     *  abc123: {
     *    metas: [
     *      { phx_ref: '2', phx_ref_prev: '1' user_id: 1 },
     *      { phx_ref: '3', user_id: 2 }
     *    ]
     *  }
     * })
     *
     * @internal
     */
    static transformState(state) {
      state = this.cloneDeep(state);
      return Object.getOwnPropertyNames(state).reduce((newState, key) => {
        const presences = state[key];
        if ("metas" in presences) {
          newState[key] = presences.metas.map((presence) => {
            presence["presence_ref"] = presence["phx_ref"];
            delete presence["phx_ref"];
            delete presence["phx_ref_prev"];
            return presence;
          });
        } else {
          newState[key] = presences;
        }
        return newState;
      }, {});
    }
    /** @internal */
    static cloneDeep(obj) {
      return JSON.parse(JSON.stringify(obj));
    }
    /** @internal */
    onJoin(callback) {
      this.caller.onJoin = callback;
    }
    /** @internal */
    onLeave(callback) {
      this.caller.onLeave = callback;
    }
    /** @internal */
    onSync(callback) {
      this.caller.onSync = callback;
    }
    /** @internal */
    inPendingSyncState() {
      return !this.joinRef || this.joinRef !== this.channel._joinRef();
    }
  };

  // node_modules/@supabase/realtime-js/dist/module/RealtimeChannel.js
  var REALTIME_POSTGRES_CHANGES_LISTEN_EVENT;
  (function(REALTIME_POSTGRES_CHANGES_LISTEN_EVENT2) {
    REALTIME_POSTGRES_CHANGES_LISTEN_EVENT2["ALL"] = "*";
    REALTIME_POSTGRES_CHANGES_LISTEN_EVENT2["INSERT"] = "INSERT";
    REALTIME_POSTGRES_CHANGES_LISTEN_EVENT2["UPDATE"] = "UPDATE";
    REALTIME_POSTGRES_CHANGES_LISTEN_EVENT2["DELETE"] = "DELETE";
  })(REALTIME_POSTGRES_CHANGES_LISTEN_EVENT || (REALTIME_POSTGRES_CHANGES_LISTEN_EVENT = {}));
  var REALTIME_LISTEN_TYPES;
  (function(REALTIME_LISTEN_TYPES2) {
    REALTIME_LISTEN_TYPES2["BROADCAST"] = "broadcast";
    REALTIME_LISTEN_TYPES2["PRESENCE"] = "presence";
    REALTIME_LISTEN_TYPES2["POSTGRES_CHANGES"] = "postgres_changes";
    REALTIME_LISTEN_TYPES2["SYSTEM"] = "system";
  })(REALTIME_LISTEN_TYPES || (REALTIME_LISTEN_TYPES = {}));
  var REALTIME_SUBSCRIBE_STATES;
  (function(REALTIME_SUBSCRIBE_STATES2) {
    REALTIME_SUBSCRIBE_STATES2["SUBSCRIBED"] = "SUBSCRIBED";
    REALTIME_SUBSCRIBE_STATES2["TIMED_OUT"] = "TIMED_OUT";
    REALTIME_SUBSCRIBE_STATES2["CLOSED"] = "CLOSED";
    REALTIME_SUBSCRIBE_STATES2["CHANNEL_ERROR"] = "CHANNEL_ERROR";
  })(REALTIME_SUBSCRIBE_STATES || (REALTIME_SUBSCRIBE_STATES = {}));
  var RealtimeChannel = class _RealtimeChannel {
    /**
     * Creates a channel that can broadcast messages, sync presence, and listen to Postgres changes.
     *
     * The topic determines which realtime stream you are subscribing to. Config options let you
     * enable acknowledgement for broadcasts, presence tracking, or private channels.
     *
     * @example
     * ```ts
     * import RealtimeClient from '@supabase/realtime-js'
     *
     * const client = new RealtimeClient('https://xyzcompany.supabase.co/realtime/v1', {
     *   params: { apikey: 'public-anon-key' },
     * })
     * const channel = new RealtimeChannel('realtime:public:messages', { config: {} }, client)
     * ```
     */
    constructor(topic, params = { config: {} }, socket) {
      var _a, _b;
      this.topic = topic;
      this.params = params;
      this.socket = socket;
      this.bindings = {};
      this.state = CHANNEL_STATES.closed;
      this.joinedOnce = false;
      this.pushBuffer = [];
      this.subTopic = topic.replace(/^realtime:/i, "");
      this.params.config = Object.assign({
        broadcast: { ack: false, self: false },
        presence: { key: "", enabled: false },
        private: false
      }, params.config);
      this.timeout = this.socket.timeout;
      this.joinPush = new Push(this, CHANNEL_EVENTS.join, this.params, this.timeout);
      this.rejoinTimer = new Timer(() => this._rejoinUntilConnected(), this.socket.reconnectAfterMs);
      this.joinPush.receive("ok", () => {
        this.state = CHANNEL_STATES.joined;
        this.rejoinTimer.reset();
        this.pushBuffer.forEach((pushEvent) => pushEvent.send());
        this.pushBuffer = [];
      });
      this._onClose(() => {
        this.rejoinTimer.reset();
        this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`);
        this.state = CHANNEL_STATES.closed;
        this.socket._remove(this);
      });
      this._onError((reason) => {
        if (this._isLeaving() || this._isClosed()) {
          return;
        }
        this.socket.log("channel", `error ${this.topic}`, reason);
        this.state = CHANNEL_STATES.errored;
        this.rejoinTimer.scheduleTimeout();
      });
      this.joinPush.receive("timeout", () => {
        if (!this._isJoining()) {
          return;
        }
        this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout);
        this.state = CHANNEL_STATES.errored;
        this.rejoinTimer.scheduleTimeout();
      });
      this.joinPush.receive("error", (reason) => {
        if (this._isLeaving() || this._isClosed()) {
          return;
        }
        this.socket.log("channel", `error ${this.topic}`, reason);
        this.state = CHANNEL_STATES.errored;
        this.rejoinTimer.scheduleTimeout();
      });
      this._on(CHANNEL_EVENTS.reply, {}, (payload, ref) => {
        this._trigger(this._replyEventName(ref), payload);
      });
      this.presence = new RealtimePresence(this);
      this.broadcastEndpointURL = httpEndpointURL(this.socket.endPoint);
      this.private = this.params.config.private || false;
      if (!this.private && ((_b = (_a = this.params.config) === null || _a === void 0 ? void 0 : _a.broadcast) === null || _b === void 0 ? void 0 : _b.replay)) {
        throw `tried to use replay on public channel '${this.topic}'. It must be a private channel.`;
      }
    }
    /** Subscribe registers your client with the server */
    subscribe(callback, timeout = this.timeout) {
      var _a, _b, _c;
      if (!this.socket.isConnected()) {
        this.socket.connect();
      }
      if (this.state == CHANNEL_STATES.closed) {
        const { config: { broadcast, presence, private: isPrivate } } = this.params;
        const postgres_changes = (_b = (_a = this.bindings.postgres_changes) === null || _a === void 0 ? void 0 : _a.map((r) => r.filter)) !== null && _b !== void 0 ? _b : [];
        const presence_enabled = !!this.bindings[REALTIME_LISTEN_TYPES.PRESENCE] && this.bindings[REALTIME_LISTEN_TYPES.PRESENCE].length > 0 || ((_c = this.params.config.presence) === null || _c === void 0 ? void 0 : _c.enabled) === true;
        const accessTokenPayload = {};
        const config = {
          broadcast,
          presence: Object.assign(Object.assign({}, presence), { enabled: presence_enabled }),
          postgres_changes,
          private: isPrivate
        };
        if (this.socket.accessTokenValue) {
          accessTokenPayload.access_token = this.socket.accessTokenValue;
        }
        this._onError((e) => callback === null || callback === void 0 ? void 0 : callback(REALTIME_SUBSCRIBE_STATES.CHANNEL_ERROR, e));
        this._onClose(() => callback === null || callback === void 0 ? void 0 : callback(REALTIME_SUBSCRIBE_STATES.CLOSED));
        this.updateJoinPayload(Object.assign({ config }, accessTokenPayload));
        this.joinedOnce = true;
        this._rejoin(timeout);
        this.joinPush.receive("ok", async ({ postgres_changes: postgres_changes2 }) => {
          var _a2;
          if (!this.socket._isManualToken()) {
            this.socket.setAuth();
          }
          if (postgres_changes2 === void 0) {
            callback === null || callback === void 0 ? void 0 : callback(REALTIME_SUBSCRIBE_STATES.SUBSCRIBED);
            return;
          } else {
            const clientPostgresBindings = this.bindings.postgres_changes;
            const bindingsLen = (_a2 = clientPostgresBindings === null || clientPostgresBindings === void 0 ? void 0 : clientPostgresBindings.length) !== null && _a2 !== void 0 ? _a2 : 0;
            const newPostgresBindings = [];
            for (let i = 0; i < bindingsLen; i++) {
              const clientPostgresBinding = clientPostgresBindings[i];
              const { filter: { event, schema, table, filter } } = clientPostgresBinding;
              const serverPostgresFilter = postgres_changes2 && postgres_changes2[i];
              if (serverPostgresFilter && serverPostgresFilter.event === event && _RealtimeChannel.isFilterValueEqual(serverPostgresFilter.schema, schema) && _RealtimeChannel.isFilterValueEqual(serverPostgresFilter.table, table) && _RealtimeChannel.isFilterValueEqual(serverPostgresFilter.filter, filter)) {
                newPostgresBindings.push(Object.assign(Object.assign({}, clientPostgresBinding), { id: serverPostgresFilter.id }));
              } else {
                this.unsubscribe();
                this.state = CHANNEL_STATES.errored;
                callback === null || callback === void 0 ? void 0 : callback(REALTIME_SUBSCRIBE_STATES.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
                return;
              }
            }
            this.bindings.postgres_changes = newPostgresBindings;
            callback && callback(REALTIME_SUBSCRIBE_STATES.SUBSCRIBED);
            return;
          }
        }).receive("error", (error) => {
          this.state = CHANNEL_STATES.errored;
          callback === null || callback === void 0 ? void 0 : callback(REALTIME_SUBSCRIBE_STATES.CHANNEL_ERROR, new Error(JSON.stringify(Object.values(error).join(", ") || "error")));
          return;
        }).receive("timeout", () => {
          callback === null || callback === void 0 ? void 0 : callback(REALTIME_SUBSCRIBE_STATES.TIMED_OUT);
          return;
        });
      }
      return this;
    }
    /**
     * Returns the current presence state for this channel.
     *
     * The shape is a map keyed by presence key (for example a user id) where each entry contains the
     * tracked metadata for that user.
     */
    presenceState() {
      return this.presence.state;
    }
    /**
     * Sends the supplied payload to the presence tracker so other subscribers can see that this
     * client is online. Use `untrack` to stop broadcasting presence for the same key.
     */
    async track(payload, opts = {}) {
      return await this.send({
        type: "presence",
        event: "track",
        payload
      }, opts.timeout || this.timeout);
    }
    /**
     * Removes the current presence state for this client.
     */
    async untrack(opts = {}) {
      return await this.send({
        type: "presence",
        event: "untrack"
      }, opts);
    }
    on(type, filter, callback) {
      if (this.state === CHANNEL_STATES.joined && type === REALTIME_LISTEN_TYPES.PRESENCE) {
        this.socket.log("channel", `resubscribe to ${this.topic} due to change in presence callbacks on joined channel`);
        this.unsubscribe().then(async () => await this.subscribe());
      }
      return this._on(type, filter, callback);
    }
    /**
     * Sends a broadcast message explicitly via REST API.
     *
     * This method always uses the REST API endpoint regardless of WebSocket connection state.
     * Useful when you want to guarantee REST delivery or when gradually migrating from implicit REST fallback.
     *
     * @param event The name of the broadcast event
     * @param payload Payload to be sent (required)
     * @param opts Options including timeout
     * @returns Promise resolving to object with success status, and error details if failed
     */
    async httpSend(event, payload, opts = {}) {
      var _a;
      if (payload === void 0 || payload === null) {
        return Promise.reject("Payload is required for httpSend()");
      }
      const headers = {
        apikey: this.socket.apiKey ? this.socket.apiKey : "",
        "Content-Type": "application/json"
      };
      if (this.socket.accessTokenValue) {
        headers["Authorization"] = `Bearer ${this.socket.accessTokenValue}`;
      }
      const options = {
        method: "POST",
        headers,
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event,
              payload,
              private: this.private
            }
          ]
        })
      };
      const response = await this._fetchWithTimeout(this.broadcastEndpointURL, options, (_a = opts.timeout) !== null && _a !== void 0 ? _a : this.timeout);
      if (response.status === 202) {
        return { success: true };
      }
      let errorMessage = response.statusText;
      try {
        const errorBody = await response.json();
        errorMessage = errorBody.error || errorBody.message || errorMessage;
      } catch (_b) {
      }
      return Promise.reject(new Error(errorMessage));
    }
    /**
     * Sends a message into the channel.
     *
     * @param args Arguments to send to channel
     * @param args.type The type of event to send
     * @param args.event The name of the event being sent
     * @param args.payload Payload to be sent
     * @param opts Options to be used during the send process
     */
    async send(args, opts = {}) {
      var _a, _b;
      if (!this._canPush() && args.type === "broadcast") {
        console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");
        const { event, payload: endpoint_payload } = args;
        const headers = {
          apikey: this.socket.apiKey ? this.socket.apiKey : "",
          "Content-Type": "application/json"
        };
        if (this.socket.accessTokenValue) {
          headers["Authorization"] = `Bearer ${this.socket.accessTokenValue}`;
        }
        const options = {
          method: "POST",
          headers,
          body: JSON.stringify({
            messages: [
              {
                topic: this.subTopic,
                event,
                payload: endpoint_payload,
                private: this.private
              }
            ]
          })
        };
        try {
          const response = await this._fetchWithTimeout(this.broadcastEndpointURL, options, (_a = opts.timeout) !== null && _a !== void 0 ? _a : this.timeout);
          await ((_b = response.body) === null || _b === void 0 ? void 0 : _b.cancel());
          return response.ok ? "ok" : "error";
        } catch (error) {
          if (error.name === "AbortError") {
            return "timed out";
          } else {
            return "error";
          }
        }
      } else {
        return new Promise((resolve) => {
          var _a2, _b2, _c;
          const push = this._push(args.type, args, opts.timeout || this.timeout);
          if (args.type === "broadcast" && !((_c = (_b2 = (_a2 = this.params) === null || _a2 === void 0 ? void 0 : _a2.config) === null || _b2 === void 0 ? void 0 : _b2.broadcast) === null || _c === void 0 ? void 0 : _c.ack)) {
            resolve("ok");
          }
          push.receive("ok", () => resolve("ok"));
          push.receive("error", () => resolve("error"));
          push.receive("timeout", () => resolve("timed out"));
        });
      }
    }
    /**
     * Updates the payload that will be sent the next time the channel joins (reconnects).
     * Useful for rotating access tokens or updating config without re-creating the channel.
     */
    updateJoinPayload(payload) {
      this.joinPush.updatePayload(payload);
    }
    /**
     * Leaves the channel.
     *
     * Unsubscribes from server events, and instructs channel to terminate on server.
     * Triggers onClose() hooks.
     *
     * To receive leave acknowledgements, use the a `receive` hook to bind to the server ack, ie:
     * channel.unsubscribe().receive("ok", () => alert("left!") )
     */
    unsubscribe(timeout = this.timeout) {
      this.state = CHANNEL_STATES.leaving;
      const onClose = () => {
        this.socket.log("channel", `leave ${this.topic}`);
        this._trigger(CHANNEL_EVENTS.close, "leave", this._joinRef());
      };
      this.joinPush.destroy();
      let leavePush = null;
      return new Promise((resolve) => {
        leavePush = new Push(this, CHANNEL_EVENTS.leave, {}, timeout);
        leavePush.receive("ok", () => {
          onClose();
          resolve("ok");
        }).receive("timeout", () => {
          onClose();
          resolve("timed out");
        }).receive("error", () => {
          resolve("error");
        });
        leavePush.send();
        if (!this._canPush()) {
          leavePush.trigger("ok", {});
        }
      }).finally(() => {
        leavePush === null || leavePush === void 0 ? void 0 : leavePush.destroy();
      });
    }
    /**
     * Teardown the channel.
     *
     * Destroys and stops related timers.
     */
    teardown() {
      this.pushBuffer.forEach((push) => push.destroy());
      this.pushBuffer = [];
      this.rejoinTimer.reset();
      this.joinPush.destroy();
      this.state = CHANNEL_STATES.closed;
      this.bindings = {};
    }
    /** @internal */
    async _fetchWithTimeout(url, options, timeout) {
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), timeout);
      const response = await this.socket.fetch(url, Object.assign(Object.assign({}, options), { signal: controller.signal }));
      clearTimeout(id);
      return response;
    }
    /** @internal */
    _push(event, payload, timeout = this.timeout) {
      if (!this.joinedOnce) {
        throw `tried to push '${event}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
      }
      let pushEvent = new Push(this, event, payload, timeout);
      if (this._canPush()) {
        pushEvent.send();
      } else {
        this._addToPushBuffer(pushEvent);
      }
      return pushEvent;
    }
    /** @internal */
    _addToPushBuffer(pushEvent) {
      pushEvent.startTimeout();
      this.pushBuffer.push(pushEvent);
      if (this.pushBuffer.length > MAX_PUSH_BUFFER_SIZE) {
        const removedPush = this.pushBuffer.shift();
        if (removedPush) {
          removedPush.destroy();
          this.socket.log("channel", `discarded push due to buffer overflow: ${removedPush.event}`, removedPush.payload);
        }
      }
    }
    /**
     * Overridable message hook
     *
     * Receives all events for specialized message handling before dispatching to the channel callbacks.
     * Must return the payload, modified or unmodified.
     *
     * @internal
     */
    _onMessage(_event, payload, _ref) {
      return payload;
    }
    /** @internal */
    _isMember(topic) {
      return this.topic === topic;
    }
    /** @internal */
    _joinRef() {
      return this.joinPush.ref;
    }
    /** @internal */
    _trigger(type, payload, ref) {
      var _a, _b;
      const typeLower = type.toLocaleLowerCase();
      const { close, error, leave, join } = CHANNEL_EVENTS;
      const events = [close, error, leave, join];
      if (ref && events.indexOf(typeLower) >= 0 && ref !== this._joinRef()) {
        return;
      }
      let handledPayload = this._onMessage(typeLower, payload, ref);
      if (payload && !handledPayload) {
        throw "channel onMessage callbacks must return the payload, modified or unmodified";
      }
      if (["insert", "update", "delete"].includes(typeLower)) {
        (_a = this.bindings.postgres_changes) === null || _a === void 0 ? void 0 : _a.filter((bind) => {
          var _a2, _b2, _c;
          return ((_a2 = bind.filter) === null || _a2 === void 0 ? void 0 : _a2.event) === "*" || ((_c = (_b2 = bind.filter) === null || _b2 === void 0 ? void 0 : _b2.event) === null || _c === void 0 ? void 0 : _c.toLocaleLowerCase()) === typeLower;
        }).map((bind) => bind.callback(handledPayload, ref));
      } else {
        (_b = this.bindings[typeLower]) === null || _b === void 0 ? void 0 : _b.filter((bind) => {
          var _a2, _b2, _c, _d, _e, _f;
          if (["broadcast", "presence", "postgres_changes"].includes(typeLower)) {
            if ("id" in bind) {
              const bindId = bind.id;
              const bindEvent = (_a2 = bind.filter) === null || _a2 === void 0 ? void 0 : _a2.event;
              return bindId && ((_b2 = payload.ids) === null || _b2 === void 0 ? void 0 : _b2.includes(bindId)) && (bindEvent === "*" || (bindEvent === null || bindEvent === void 0 ? void 0 : bindEvent.toLocaleLowerCase()) === ((_c = payload.data) === null || _c === void 0 ? void 0 : _c.type.toLocaleLowerCase()));
            } else {
              const bindEvent = (_e = (_d = bind === null || bind === void 0 ? void 0 : bind.filter) === null || _d === void 0 ? void 0 : _d.event) === null || _e === void 0 ? void 0 : _e.toLocaleLowerCase();
              return bindEvent === "*" || bindEvent === ((_f = payload === null || payload === void 0 ? void 0 : payload.event) === null || _f === void 0 ? void 0 : _f.toLocaleLowerCase());
            }
          } else {
            return bind.type.toLocaleLowerCase() === typeLower;
          }
        }).map((bind) => {
          if (typeof handledPayload === "object" && "ids" in handledPayload) {
            const postgresChanges = handledPayload.data;
            const { schema, table, commit_timestamp, type: type2, errors } = postgresChanges;
            const enrichedPayload = {
              schema,
              table,
              commit_timestamp,
              eventType: type2,
              new: {},
              old: {},
              errors
            };
            handledPayload = Object.assign(Object.assign({}, enrichedPayload), this._getPayloadRecords(postgresChanges));
          }
          bind.callback(handledPayload, ref);
        });
      }
    }
    /** @internal */
    _isClosed() {
      return this.state === CHANNEL_STATES.closed;
    }
    /** @internal */
    _isJoined() {
      return this.state === CHANNEL_STATES.joined;
    }
    /** @internal */
    _isJoining() {
      return this.state === CHANNEL_STATES.joining;
    }
    /** @internal */
    _isLeaving() {
      return this.state === CHANNEL_STATES.leaving;
    }
    /** @internal */
    _replyEventName(ref) {
      return `chan_reply_${ref}`;
    }
    /** @internal */
    _on(type, filter, callback) {
      const typeLower = type.toLocaleLowerCase();
      const binding = {
        type: typeLower,
        filter,
        callback
      };
      if (this.bindings[typeLower]) {
        this.bindings[typeLower].push(binding);
      } else {
        this.bindings[typeLower] = [binding];
      }
      return this;
    }
    /** @internal */
    _off(type, filter) {
      const typeLower = type.toLocaleLowerCase();
      if (this.bindings[typeLower]) {
        this.bindings[typeLower] = this.bindings[typeLower].filter((bind) => {
          var _a;
          return !(((_a = bind.type) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase()) === typeLower && _RealtimeChannel.isEqual(bind.filter, filter));
        });
      }
      return this;
    }
    /** @internal */
    static isEqual(obj1, obj2) {
      if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
      }
      for (const k in obj1) {
        if (obj1[k] !== obj2[k]) {
          return false;
        }
      }
      return true;
    }
    /**
     * Compares two optional filter values for equality.
     * Treats undefined, null, and empty string as equivalent empty values.
     * @internal
     */
    static isFilterValueEqual(serverValue, clientValue) {
      const normalizedServer = serverValue !== null && serverValue !== void 0 ? serverValue : void 0;
      const normalizedClient = clientValue !== null && clientValue !== void 0 ? clientValue : void 0;
      return normalizedServer === normalizedClient;
    }
    /** @internal */
    _rejoinUntilConnected() {
      this.rejoinTimer.scheduleTimeout();
      if (this.socket.isConnected()) {
        this._rejoin();
      }
    }
    /**
     * Registers a callback that will be executed when the channel closes.
     *
     * @internal
     */
    _onClose(callback) {
      this._on(CHANNEL_EVENTS.close, {}, callback);
    }
    /**
     * Registers a callback that will be executed when the channel encounteres an error.
     *
     * @internal
     */
    _onError(callback) {
      this._on(CHANNEL_EVENTS.error, {}, (reason) => callback(reason));
    }
    /**
     * Returns `true` if the socket is connected and the channel has been joined.
     *
     * @internal
     */
    _canPush() {
      return this.socket.isConnected() && this._isJoined();
    }
    /** @internal */
    _rejoin(timeout = this.timeout) {
      if (this._isLeaving()) {
        return;
      }
      this.socket._leaveOpenTopic(this.topic);
      this.state = CHANNEL_STATES.joining;
      this.joinPush.resend(timeout);
    }
    /** @internal */
    _getPayloadRecords(payload) {
      const records = {
        new: {},
        old: {}
      };
      if (payload.type === "INSERT" || payload.type === "UPDATE") {
        records.new = convertChangeData(payload.columns, payload.record);
      }
      if (payload.type === "UPDATE" || payload.type === "DELETE") {
        records.old = convertChangeData(payload.columns, payload.old_record);
      }
      return records;
    }
  };

  // node_modules/@supabase/realtime-js/dist/module/RealtimeClient.js
  var noop2 = () => {
  };
  var CONNECTION_TIMEOUTS = {
    HEARTBEAT_INTERVAL: 25e3,
    RECONNECT_DELAY: 10,
    HEARTBEAT_TIMEOUT_FALLBACK: 100
  };
  var RECONNECT_INTERVALS = [1e3, 2e3, 5e3, 1e4];
  var DEFAULT_RECONNECT_FALLBACK = 1e4;
  var WORKER_SCRIPT = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
  var RealtimeClient = class {
    /**
     * Initializes the Socket.
     *
     * @param endPoint The string WebSocket endpoint, ie, "ws://example.com/socket", "wss://example.com", "/socket" (inherited host & protocol)
     * @param httpEndpoint The string HTTP endpoint, ie, "https://example.com", "/" (inherited host & protocol)
     * @param options.transport The Websocket Transport, for example WebSocket. This can be a custom implementation
     * @param options.timeout The default timeout in milliseconds to trigger push timeouts.
     * @param options.params The optional params to pass when connecting.
     * @param options.headers Deprecated: headers cannot be set on websocket connections and this option will be removed in the future.
     * @param options.heartbeatIntervalMs The millisec interval to send a heartbeat message.
     * @param options.heartbeatCallback The optional function to handle heartbeat status and latency.
     * @param options.logger The optional function for specialized logging, ie: logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data) }
     * @param options.logLevel Sets the log level for Realtime
     * @param options.encode The function to encode outgoing messages. Defaults to JSON: (payload, callback) => callback(JSON.stringify(payload))
     * @param options.decode The function to decode incoming messages. Defaults to Serializer's decode.
     * @param options.reconnectAfterMs he optional function that returns the millsec reconnect interval. Defaults to stepped backoff off.
     * @param options.worker Use Web Worker to set a side flow. Defaults to false.
     * @param options.workerUrl The URL of the worker script. Defaults to https://realtime.supabase.com/worker.js that includes a heartbeat event call to keep the connection alive.
     * @param options.vsn The protocol version to use when connecting. Supported versions are "1.0.0" and "2.0.0". Defaults to "2.0.0".
     * @example
     * ```ts
     * import RealtimeClient from '@supabase/realtime-js'
     *
     * const client = new RealtimeClient('https://xyzcompany.supabase.co/realtime/v1', {
     *   params: { apikey: 'public-anon-key' },
     * })
     * client.connect()
     * ```
     */
    constructor(endPoint, options) {
      var _a;
      this.accessTokenValue = null;
      this.apiKey = null;
      this._manuallySetToken = false;
      this.channels = new Array();
      this.endPoint = "";
      this.httpEndpoint = "";
      this.headers = {};
      this.params = {};
      this.timeout = DEFAULT_TIMEOUT;
      this.transport = null;
      this.heartbeatIntervalMs = CONNECTION_TIMEOUTS.HEARTBEAT_INTERVAL;
      this.heartbeatTimer = void 0;
      this.pendingHeartbeatRef = null;
      this.heartbeatCallback = noop2;
      this.ref = 0;
      this.reconnectTimer = null;
      this.vsn = DEFAULT_VSN;
      this.logger = noop2;
      this.conn = null;
      this.sendBuffer = [];
      this.serializer = new Serializer();
      this.stateChangeCallbacks = {
        open: [],
        close: [],
        error: [],
        message: []
      };
      this.accessToken = null;
      this._connectionState = "disconnected";
      this._wasManualDisconnect = false;
      this._authPromise = null;
      this._heartbeatSentAt = null;
      this._resolveFetch = (customFetch) => {
        if (customFetch) {
          return (...args) => customFetch(...args);
        }
        return (...args) => fetch(...args);
      };
      if (!((_a = options === null || options === void 0 ? void 0 : options.params) === null || _a === void 0 ? void 0 : _a.apikey)) {
        throw new Error("API key is required to connect to Realtime");
      }
      this.apiKey = options.params.apikey;
      this.endPoint = `${endPoint}/${TRANSPORTS.websocket}`;
      this.httpEndpoint = httpEndpointURL(endPoint);
      this._initializeOptions(options);
      this._setupReconnectionTimer();
      this.fetch = this._resolveFetch(options === null || options === void 0 ? void 0 : options.fetch);
    }
    /**
     * Connects the socket, unless already connected.
     */
    connect() {
      if (this.isConnecting() || this.isDisconnecting() || this.conn !== null && this.isConnected()) {
        return;
      }
      this._setConnectionState("connecting");
      if (this.accessToken && !this._authPromise) {
        this._setAuthSafely("connect");
      }
      if (this.transport) {
        this.conn = new this.transport(this.endpointURL());
      } else {
        try {
          this.conn = websocket_factory_default.createWebSocket(this.endpointURL());
        } catch (error) {
          this._setConnectionState("disconnected");
          const errorMessage = error.message;
          if (errorMessage.includes("Node.js")) {
            throw new Error(`${errorMessage}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`);
          }
          throw new Error(`WebSocket not available: ${errorMessage}`);
        }
      }
      this._setupConnectionHandlers();
    }
    /**
     * Returns the URL of the websocket.
     * @returns string The URL of the websocket.
     */
    endpointURL() {
      return this._appendParams(this.endPoint, Object.assign({}, this.params, { vsn: this.vsn }));
    }
    /**
     * Disconnects the socket.
     *
     * @param code A numeric status code to send on disconnect.
     * @param reason A custom reason for the disconnect.
     */
    disconnect(code, reason) {
      if (this.isDisconnecting()) {
        return;
      }
      this._setConnectionState("disconnecting", true);
      if (this.conn) {
        const fallbackTimer = setTimeout(() => {
          this._setConnectionState("disconnected");
        }, 100);
        this.conn.onclose = () => {
          clearTimeout(fallbackTimer);
          this._setConnectionState("disconnected");
        };
        if (typeof this.conn.close === "function") {
          if (code) {
            this.conn.close(code, reason !== null && reason !== void 0 ? reason : "");
          } else {
            this.conn.close();
          }
        }
        this._teardownConnection();
      } else {
        this._setConnectionState("disconnected");
      }
    }
    /**
     * Returns all created channels
     */
    getChannels() {
      return this.channels;
    }
    /**
     * Unsubscribes and removes a single channel
     * @param channel A RealtimeChannel instance
     */
    async removeChannel(channel) {
      const status = await channel.unsubscribe();
      if (this.channels.length === 0) {
        this.disconnect();
      }
      return status;
    }
    /**
     * Unsubscribes and removes all channels
     */
    async removeAllChannels() {
      const values_1 = await Promise.all(this.channels.map((channel) => channel.unsubscribe()));
      this.channels = [];
      this.disconnect();
      return values_1;
    }
    /**
     * Logs the message.
     *
     * For customized logging, `this.logger` can be overridden.
     */
    log(kind, msg, data) {
      this.logger(kind, msg, data);
    }
    /**
     * Returns the current state of the socket.
     */
    connectionState() {
      switch (this.conn && this.conn.readyState) {
        case SOCKET_STATES.connecting:
          return CONNECTION_STATE.Connecting;
        case SOCKET_STATES.open:
          return CONNECTION_STATE.Open;
        case SOCKET_STATES.closing:
          return CONNECTION_STATE.Closing;
        default:
          return CONNECTION_STATE.Closed;
      }
    }
    /**
     * Returns `true` is the connection is open.
     */
    isConnected() {
      return this.connectionState() === CONNECTION_STATE.Open;
    }
    /**
     * Returns `true` if the connection is currently connecting.
     */
    isConnecting() {
      return this._connectionState === "connecting";
    }
    /**
     * Returns `true` if the connection is currently disconnecting.
     */
    isDisconnecting() {
      return this._connectionState === "disconnecting";
    }
    /**
     * Creates (or reuses) a {@link RealtimeChannel} for the provided topic.
     *
     * Topics are automatically prefixed with `realtime:` to match the Realtime service.
     * If a channel with the same topic already exists it will be returned instead of creating
     * a duplicate connection.
     */
    channel(topic, params = { config: {} }) {
      const realtimeTopic = `realtime:${topic}`;
      const exists = this.getChannels().find((c) => c.topic === realtimeTopic);
      if (!exists) {
        const chan = new RealtimeChannel(`realtime:${topic}`, params, this);
        this.channels.push(chan);
        return chan;
      } else {
        return exists;
      }
    }
    /**
     * Push out a message if the socket is connected.
     *
     * If the socket is not connected, the message gets enqueued within a local buffer, and sent out when a connection is next established.
     */
    push(data) {
      const { topic, event, payload, ref } = data;
      const callback = () => {
        this.encode(data, (result) => {
          var _a;
          (_a = this.conn) === null || _a === void 0 ? void 0 : _a.send(result);
        });
      };
      this.log("push", `${topic} ${event} (${ref})`, payload);
      if (this.isConnected()) {
        callback();
      } else {
        this.sendBuffer.push(callback);
      }
    }
    /**
     * Sets the JWT access token used for channel subscription authorization and Realtime RLS.
     *
     * If param is null it will use the `accessToken` callback function or the token set on the client.
     *
     * On callback used, it will set the value of the token internal to the client.
     *
     * When a token is explicitly provided, it will be preserved across channel operations
     * (including removeChannel and resubscribe). The `accessToken` callback will not be
     * invoked until `setAuth()` is called without arguments.
     *
     * @param token A JWT string to override the token set on the client.
     *
     * @example
     * // Use a manual token (preserved across resubscribes, ignores accessToken callback)
     * client.realtime.setAuth('my-custom-jwt')
     *
     * // Switch back to using the accessToken callback
     * client.realtime.setAuth()
     */
    async setAuth(token = null) {
      this._authPromise = this._performAuth(token);
      try {
        await this._authPromise;
      } finally {
        this._authPromise = null;
      }
    }
    /**
     * Returns true if the current access token was explicitly set via setAuth(token),
     * false if it was obtained via the accessToken callback.
     * @internal
     */
    _isManualToken() {
      return this._manuallySetToken;
    }
    /**
     * Sends a heartbeat message if the socket is connected.
     */
    async sendHeartbeat() {
      var _a;
      if (!this.isConnected()) {
        try {
          this.heartbeatCallback("disconnected");
        } catch (e) {
          this.log("error", "error in heartbeat callback", e);
        }
        return;
      }
      if (this.pendingHeartbeatRef) {
        this.pendingHeartbeatRef = null;
        this._heartbeatSentAt = null;
        this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
        try {
          this.heartbeatCallback("timeout");
        } catch (e) {
          this.log("error", "error in heartbeat callback", e);
        }
        this._wasManualDisconnect = false;
        (_a = this.conn) === null || _a === void 0 ? void 0 : _a.close(WS_CLOSE_NORMAL, "heartbeat timeout");
        setTimeout(() => {
          var _a2;
          if (!this.isConnected()) {
            (_a2 = this.reconnectTimer) === null || _a2 === void 0 ? void 0 : _a2.scheduleTimeout();
          }
        }, CONNECTION_TIMEOUTS.HEARTBEAT_TIMEOUT_FALLBACK);
        return;
      }
      this._heartbeatSentAt = Date.now();
      this.pendingHeartbeatRef = this._makeRef();
      this.push({
        topic: "phoenix",
        event: "heartbeat",
        payload: {},
        ref: this.pendingHeartbeatRef
      });
      try {
        this.heartbeatCallback("sent");
      } catch (e) {
        this.log("error", "error in heartbeat callback", e);
      }
      this._setAuthSafely("heartbeat");
    }
    /**
     * Sets a callback that receives lifecycle events for internal heartbeat messages.
     * Useful for instrumenting connection health (e.g. sent/ok/timeout/disconnected).
     */
    onHeartbeat(callback) {
      this.heartbeatCallback = callback;
    }
    /**
     * Flushes send buffer
     */
    flushSendBuffer() {
      if (this.isConnected() && this.sendBuffer.length > 0) {
        this.sendBuffer.forEach((callback) => callback());
        this.sendBuffer = [];
      }
    }
    /**
     * Return the next message ref, accounting for overflows
     *
     * @internal
     */
    _makeRef() {
      let newRef = this.ref + 1;
      if (newRef === this.ref) {
        this.ref = 0;
      } else {
        this.ref = newRef;
      }
      return this.ref.toString();
    }
    /**
     * Unsubscribe from channels with the specified topic.
     *
     * @internal
     */
    _leaveOpenTopic(topic) {
      let dupChannel = this.channels.find((c) => c.topic === topic && (c._isJoined() || c._isJoining()));
      if (dupChannel) {
        this.log("transport", `leaving duplicate topic "${topic}"`);
        dupChannel.unsubscribe();
      }
    }
    /**
     * Removes a subscription from the socket.
     *
     * @param channel An open subscription.
     *
     * @internal
     */
    _remove(channel) {
      this.channels = this.channels.filter((c) => c.topic !== channel.topic);
    }
    /** @internal */
    _onConnMessage(rawMessage) {
      this.decode(rawMessage.data, (msg) => {
        if (msg.topic === "phoenix" && msg.event === "phx_reply" && msg.ref && msg.ref === this.pendingHeartbeatRef) {
          const latency = this._heartbeatSentAt ? Date.now() - this._heartbeatSentAt : void 0;
          try {
            this.heartbeatCallback(msg.payload.status === "ok" ? "ok" : "error", latency);
          } catch (e) {
            this.log("error", "error in heartbeat callback", e);
          }
          this._heartbeatSentAt = null;
          this.pendingHeartbeatRef = null;
        }
        const { topic, event, payload, ref } = msg;
        const refString = ref ? `(${ref})` : "";
        const status = payload.status || "";
        this.log("receive", `${status} ${topic} ${event} ${refString}`.trim(), payload);
        this.channels.filter((channel) => channel._isMember(topic)).forEach((channel) => channel._trigger(event, payload, ref));
        this._triggerStateCallbacks("message", msg);
      });
    }
    /**
     * Clear specific timer
     * @internal
     */
    _clearTimer(timer) {
      var _a;
      if (timer === "heartbeat" && this.heartbeatTimer) {
        clearInterval(this.heartbeatTimer);
        this.heartbeatTimer = void 0;
      } else if (timer === "reconnect") {
        (_a = this.reconnectTimer) === null || _a === void 0 ? void 0 : _a.reset();
      }
    }
    /**
     * Clear all timers
     * @internal
     */
    _clearAllTimers() {
      this._clearTimer("heartbeat");
      this._clearTimer("reconnect");
    }
    /**
     * Setup connection handlers for WebSocket events
     * @internal
     */
    _setupConnectionHandlers() {
      if (!this.conn)
        return;
      if ("binaryType" in this.conn) {
        ;
        this.conn.binaryType = "arraybuffer";
      }
      this.conn.onopen = () => this._onConnOpen();
      this.conn.onerror = (error) => this._onConnError(error);
      this.conn.onmessage = (event) => this._onConnMessage(event);
      this.conn.onclose = (event) => this._onConnClose(event);
      if (this.conn.readyState === SOCKET_STATES.open) {
        this._onConnOpen();
      }
    }
    /**
     * Teardown connection and cleanup resources
     * @internal
     */
    _teardownConnection() {
      if (this.conn) {
        if (this.conn.readyState === SOCKET_STATES.open || this.conn.readyState === SOCKET_STATES.connecting) {
          try {
            this.conn.close();
          } catch (e) {
            this.log("error", "Error closing connection", e);
          }
        }
        this.conn.onopen = null;
        this.conn.onerror = null;
        this.conn.onmessage = null;
        this.conn.onclose = null;
        this.conn = null;
      }
      this._clearAllTimers();
      this._terminateWorker();
      this.channels.forEach((channel) => channel.teardown());
    }
    /** @internal */
    _onConnOpen() {
      this._setConnectionState("connected");
      this.log("transport", `connected to ${this.endpointURL()}`);
      const authPromise = this._authPromise || (this.accessToken && !this.accessTokenValue ? this.setAuth() : Promise.resolve());
      authPromise.then(() => {
        if (this.accessTokenValue) {
          this.channels.forEach((channel) => {
            channel.updateJoinPayload({ access_token: this.accessTokenValue });
          });
          this.sendBuffer = [];
          this.channels.forEach((channel) => {
            if (channel._isJoining()) {
              channel.joinPush.sent = false;
              channel.joinPush.send();
            }
          });
        }
        this.flushSendBuffer();
      }).catch((e) => {
        this.log("error", "error waiting for auth on connect", e);
        this.flushSendBuffer();
      });
      this._clearTimer("reconnect");
      if (!this.worker) {
        this._startHeartbeat();
      } else {
        if (!this.workerRef) {
          this._startWorkerHeartbeat();
        }
      }
      this._triggerStateCallbacks("open");
    }
    /** @internal */
    _startHeartbeat() {
      this.heartbeatTimer && clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = setInterval(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
    }
    /** @internal */
    _startWorkerHeartbeat() {
      if (this.workerUrl) {
        this.log("worker", `starting worker for from ${this.workerUrl}`);
      } else {
        this.log("worker", `starting default worker`);
      }
      const objectUrl = this._workerObjectUrl(this.workerUrl);
      this.workerRef = new Worker(objectUrl);
      this.workerRef.onerror = (error) => {
        this.log("worker", "worker error", error.message);
        this._terminateWorker();
      };
      this.workerRef.onmessage = (event) => {
        if (event.data.event === "keepAlive") {
          this.sendHeartbeat();
        }
      };
      this.workerRef.postMessage({
        event: "start",
        interval: this.heartbeatIntervalMs
      });
    }
    /**
     * Terminate the Web Worker and clear the reference
     * @internal
     */
    _terminateWorker() {
      if (this.workerRef) {
        this.log("worker", "terminating worker");
        this.workerRef.terminate();
        this.workerRef = void 0;
      }
    }
    /** @internal */
    _onConnClose(event) {
      var _a;
      this._setConnectionState("disconnected");
      this.log("transport", "close", event);
      this._triggerChanError();
      this._clearTimer("heartbeat");
      if (!this._wasManualDisconnect) {
        (_a = this.reconnectTimer) === null || _a === void 0 ? void 0 : _a.scheduleTimeout();
      }
      this._triggerStateCallbacks("close", event);
    }
    /** @internal */
    _onConnError(error) {
      this._setConnectionState("disconnected");
      this.log("transport", `${error}`);
      this._triggerChanError();
      this._triggerStateCallbacks("error", error);
      try {
        this.heartbeatCallback("error");
      } catch (e) {
        this.log("error", "error in heartbeat callback", e);
      }
    }
    /** @internal */
    _triggerChanError() {
      this.channels.forEach((channel) => channel._trigger(CHANNEL_EVENTS.error));
    }
    /** @internal */
    _appendParams(url, params) {
      if (Object.keys(params).length === 0) {
        return url;
      }
      const prefix = url.match(/\?/) ? "&" : "?";
      const query = new URLSearchParams(params);
      return `${url}${prefix}${query}`;
    }
    _workerObjectUrl(url) {
      let result_url;
      if (url) {
        result_url = url;
      } else {
        const blob = new Blob([WORKER_SCRIPT], { type: "application/javascript" });
        result_url = URL.createObjectURL(blob);
      }
      return result_url;
    }
    /**
     * Set connection state with proper state management
     * @internal
     */
    _setConnectionState(state, manual = false) {
      this._connectionState = state;
      if (state === "connecting") {
        this._wasManualDisconnect = false;
      } else if (state === "disconnecting") {
        this._wasManualDisconnect = manual;
      }
    }
    /**
     * Perform the actual auth operation
     * @internal
     */
    async _performAuth(token = null) {
      let tokenToSend;
      let isManualToken = false;
      if (token) {
        tokenToSend = token;
        isManualToken = true;
      } else if (this.accessToken) {
        try {
          tokenToSend = await this.accessToken();
        } catch (e) {
          this.log("error", "Error fetching access token from callback", e);
          tokenToSend = this.accessTokenValue;
        }
      } else {
        tokenToSend = this.accessTokenValue;
      }
      if (isManualToken) {
        this._manuallySetToken = true;
      } else if (this.accessToken) {
        this._manuallySetToken = false;
      }
      if (this.accessTokenValue != tokenToSend) {
        this.accessTokenValue = tokenToSend;
        this.channels.forEach((channel) => {
          const payload = {
            access_token: tokenToSend,
            version: DEFAULT_VERSION
          };
          tokenToSend && channel.updateJoinPayload(payload);
          if (channel.joinedOnce && channel._isJoined()) {
            channel._push(CHANNEL_EVENTS.access_token, {
              access_token: tokenToSend
            });
          }
        });
      }
    }
    /**
     * Wait for any in-flight auth operations to complete
     * @internal
     */
    async _waitForAuthIfNeeded() {
      if (this._authPromise) {
        await this._authPromise;
      }
    }
    /**
     * Safely call setAuth with standardized error handling
     * @internal
     */
    _setAuthSafely(context = "general") {
      if (!this._isManualToken()) {
        this.setAuth().catch((e) => {
          this.log("error", `Error setting auth in ${context}`, e);
        });
      }
    }
    /**
     * Trigger state change callbacks with proper error handling
     * @internal
     */
    _triggerStateCallbacks(event, data) {
      try {
        this.stateChangeCallbacks[event].forEach((callback) => {
          try {
            callback(data);
          } catch (e) {
            this.log("error", `error in ${event} callback`, e);
          }
        });
      } catch (e) {
        this.log("error", `error triggering ${event} callbacks`, e);
      }
    }
    /**
     * Setup reconnection timer with proper configuration
     * @internal
     */
    _setupReconnectionTimer() {
      this.reconnectTimer = new Timer(async () => {
        setTimeout(async () => {
          await this._waitForAuthIfNeeded();
          if (!this.isConnected()) {
            this.connect();
          }
        }, CONNECTION_TIMEOUTS.RECONNECT_DELAY);
      }, this.reconnectAfterMs);
    }
    /**
     * Initialize client options with defaults
     * @internal
     */
    _initializeOptions(options) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
      this.transport = (_a = options === null || options === void 0 ? void 0 : options.transport) !== null && _a !== void 0 ? _a : null;
      this.timeout = (_b = options === null || options === void 0 ? void 0 : options.timeout) !== null && _b !== void 0 ? _b : DEFAULT_TIMEOUT;
      this.heartbeatIntervalMs = (_c = options === null || options === void 0 ? void 0 : options.heartbeatIntervalMs) !== null && _c !== void 0 ? _c : CONNECTION_TIMEOUTS.HEARTBEAT_INTERVAL;
      this.worker = (_d = options === null || options === void 0 ? void 0 : options.worker) !== null && _d !== void 0 ? _d : false;
      this.accessToken = (_e = options === null || options === void 0 ? void 0 : options.accessToken) !== null && _e !== void 0 ? _e : null;
      this.heartbeatCallback = (_f = options === null || options === void 0 ? void 0 : options.heartbeatCallback) !== null && _f !== void 0 ? _f : noop2;
      this.vsn = (_g = options === null || options === void 0 ? void 0 : options.vsn) !== null && _g !== void 0 ? _g : DEFAULT_VSN;
      if (options === null || options === void 0 ? void 0 : options.params)
        this.params = options.params;
      if (options === null || options === void 0 ? void 0 : options.logger)
        this.logger = options.logger;
      if ((options === null || options === void 0 ? void 0 : options.logLevel) || (options === null || options === void 0 ? void 0 : options.log_level)) {
        this.logLevel = options.logLevel || options.log_level;
        this.params = Object.assign(Object.assign({}, this.params), { log_level: this.logLevel });
      }
      this.reconnectAfterMs = (_h = options === null || options === void 0 ? void 0 : options.reconnectAfterMs) !== null && _h !== void 0 ? _h : ((tries) => {
        return RECONNECT_INTERVALS[tries - 1] || DEFAULT_RECONNECT_FALLBACK;
      });
      switch (this.vsn) {
        case VSN_1_0_0:
          this.encode = (_j = options === null || options === void 0 ? void 0 : options.encode) !== null && _j !== void 0 ? _j : ((payload, callback) => {
            return callback(JSON.stringify(payload));
          });
          this.decode = (_k = options === null || options === void 0 ? void 0 : options.decode) !== null && _k !== void 0 ? _k : ((payload, callback) => {
            return callback(JSON.parse(payload));
          });
          break;
        case VSN_2_0_0:
          this.encode = (_l = options === null || options === void 0 ? void 0 : options.encode) !== null && _l !== void 0 ? _l : this.serializer.encode.bind(this.serializer);
          this.decode = (_m = options === null || options === void 0 ? void 0 : options.decode) !== null && _m !== void 0 ? _m : this.serializer.decode.bind(this.serializer);
          break;
        default:
          throw new Error(`Unsupported serializer version: ${this.vsn}`);
      }
      if (this.worker) {
        if (typeof window !== "undefined" && !window.Worker) {
          throw new Error("Web Worker is not supported");
        }
        this.workerUrl = options === null || options === void 0 ? void 0 : options.workerUrl;
      }
    }
  };

  // node_modules/iceberg-js/dist/index.mjs
  var IcebergError = class extends Error {
    constructor(message, opts) {
      super(message);
      this.name = "IcebergError";
      this.status = opts.status;
      this.icebergType = opts.icebergType;
      this.icebergCode = opts.icebergCode;
      this.details = opts.details;
      this.isCommitStateUnknown = opts.icebergType === "CommitStateUnknownException" || [500, 502, 504].includes(opts.status) && opts.icebergType?.includes("CommitState") === true;
    }
    /**
     * Returns true if the error is a 404 Not Found error.
     */
    isNotFound() {
      return this.status === 404;
    }
    /**
     * Returns true if the error is a 409 Conflict error.
     */
    isConflict() {
      return this.status === 409;
    }
    /**
     * Returns true if the error is a 419 Authentication Timeout error.
     */
    isAuthenticationTimeout() {
      return this.status === 419;
    }
  };
  function buildUrl(baseUrl, path, query) {
    const url = new URL(path, baseUrl);
    if (query) {
      for (const [key, value] of Object.entries(query)) {
        if (value !== void 0) {
          url.searchParams.set(key, value);
        }
      }
    }
    return url.toString();
  }
  async function buildAuthHeaders(auth) {
    if (!auth || auth.type === "none") {
      return {};
    }
    if (auth.type === "bearer") {
      return { Authorization: `Bearer ${auth.token}` };
    }
    if (auth.type === "header") {
      return { [auth.name]: auth.value };
    }
    if (auth.type === "custom") {
      return await auth.getHeaders();
    }
    return {};
  }
  function createFetchClient(options) {
    const fetchFn = options.fetchImpl ?? globalThis.fetch;
    return {
      async request({
        method,
        path,
        query,
        body,
        headers
      }) {
        const url = buildUrl(options.baseUrl, path, query);
        const authHeaders = await buildAuthHeaders(options.auth);
        const res = await fetchFn(url, {
          method,
          headers: {
            ...body ? { "Content-Type": "application/json" } : {},
            ...authHeaders,
            ...headers
          },
          body: body ? JSON.stringify(body) : void 0
        });
        const text = await res.text();
        const isJson = (res.headers.get("content-type") || "").includes("application/json");
        const data = isJson && text ? JSON.parse(text) : text;
        if (!res.ok) {
          const errBody = isJson ? data : void 0;
          const errorDetail = errBody?.error;
          throw new IcebergError(
            errorDetail?.message ?? `Request failed with status ${res.status}`,
            {
              status: res.status,
              icebergType: errorDetail?.type,
              icebergCode: errorDetail?.code,
              details: errBody
            }
          );
        }
        return { status: res.status, headers: res.headers, data };
      }
    };
  }
  function namespaceToPath(namespace) {
    return namespace.join("");
  }
  var NamespaceOperations = class {
    constructor(client, prefix = "") {
      this.client = client;
      this.prefix = prefix;
    }
    async listNamespaces(parent) {
      const query = parent ? { parent: namespaceToPath(parent.namespace) } : void 0;
      const response = await this.client.request({
        method: "GET",
        path: `${this.prefix}/namespaces`,
        query
      });
      return response.data.namespaces.map((ns) => ({ namespace: ns }));
    }
    async createNamespace(id, metadata) {
      const request = {
        namespace: id.namespace,
        properties: metadata?.properties
      };
      const response = await this.client.request({
        method: "POST",
        path: `${this.prefix}/namespaces`,
        body: request
      });
      return response.data;
    }
    async dropNamespace(id) {
      await this.client.request({
        method: "DELETE",
        path: `${this.prefix}/namespaces/${namespaceToPath(id.namespace)}`
      });
    }
    async loadNamespaceMetadata(id) {
      const response = await this.client.request({
        method: "GET",
        path: `${this.prefix}/namespaces/${namespaceToPath(id.namespace)}`
      });
      return {
        properties: response.data.properties
      };
    }
    async namespaceExists(id) {
      try {
        await this.client.request({
          method: "HEAD",
          path: `${this.prefix}/namespaces/${namespaceToPath(id.namespace)}`
        });
        return true;
      } catch (error) {
        if (error instanceof IcebergError && error.status === 404) {
          return false;
        }
        throw error;
      }
    }
    async createNamespaceIfNotExists(id, metadata) {
      try {
        return await this.createNamespace(id, metadata);
      } catch (error) {
        if (error instanceof IcebergError && error.status === 409) {
          return;
        }
        throw error;
      }
    }
  };
  function namespaceToPath2(namespace) {
    return namespace.join("");
  }
  var TableOperations = class {
    constructor(client, prefix = "", accessDelegation) {
      this.client = client;
      this.prefix = prefix;
      this.accessDelegation = accessDelegation;
    }
    async listTables(namespace) {
      const response = await this.client.request({
        method: "GET",
        path: `${this.prefix}/namespaces/${namespaceToPath2(namespace.namespace)}/tables`
      });
      return response.data.identifiers;
    }
    async createTable(namespace, request) {
      const headers = {};
      if (this.accessDelegation) {
        headers["X-Iceberg-Access-Delegation"] = this.accessDelegation;
      }
      const response = await this.client.request({
        method: "POST",
        path: `${this.prefix}/namespaces/${namespaceToPath2(namespace.namespace)}/tables`,
        body: request,
        headers
      });
      return response.data.metadata;
    }
    async updateTable(id, request) {
      const response = await this.client.request({
        method: "POST",
        path: `${this.prefix}/namespaces/${namespaceToPath2(id.namespace)}/tables/${id.name}`,
        body: request
      });
      return {
        "metadata-location": response.data["metadata-location"],
        metadata: response.data.metadata
      };
    }
    async dropTable(id, options) {
      await this.client.request({
        method: "DELETE",
        path: `${this.prefix}/namespaces/${namespaceToPath2(id.namespace)}/tables/${id.name}`,
        query: { purgeRequested: String(options?.purge ?? false) }
      });
    }
    async loadTable(id) {
      const headers = {};
      if (this.accessDelegation) {
        headers["X-Iceberg-Access-Delegation"] = this.accessDelegation;
      }
      const response = await this.client.request({
        method: "GET",
        path: `${this.prefix}/namespaces/${namespaceToPath2(id.namespace)}/tables/${id.name}`,
        headers
      });
      return response.data.metadata;
    }
    async tableExists(id) {
      const headers = {};
      if (this.accessDelegation) {
        headers["X-Iceberg-Access-Delegation"] = this.accessDelegation;
      }
      try {
        await this.client.request({
          method: "HEAD",
          path: `${this.prefix}/namespaces/${namespaceToPath2(id.namespace)}/tables/${id.name}`,
          headers
        });
        return true;
      } catch (error) {
        if (error instanceof IcebergError && error.status === 404) {
          return false;
        }
        throw error;
      }
    }
    async createTableIfNotExists(namespace, request) {
      try {
        return await this.createTable(namespace, request);
      } catch (error) {
        if (error instanceof IcebergError && error.status === 409) {
          return await this.loadTable({ namespace: namespace.namespace, name: request.name });
        }
        throw error;
      }
    }
  };
  var IcebergRestCatalog = class {
    /**
     * Creates a new Iceberg REST Catalog client.
     *
     * @param options - Configuration options for the catalog client
     */
    constructor(options) {
      let prefix = "v1";
      if (options.catalogName) {
        prefix += `/${options.catalogName}`;
      }
      const baseUrl = options.baseUrl.endsWith("/") ? options.baseUrl : `${options.baseUrl}/`;
      this.client = createFetchClient({
        baseUrl,
        auth: options.auth,
        fetchImpl: options.fetch
      });
      this.accessDelegation = options.accessDelegation?.join(",");
      this.namespaceOps = new NamespaceOperations(this.client, prefix);
      this.tableOps = new TableOperations(this.client, prefix, this.accessDelegation);
    }
    /**
     * Lists all namespaces in the catalog.
     *
     * @param parent - Optional parent namespace to list children under
     * @returns Array of namespace identifiers
     *
     * @example
     * ```typescript
     * // List all top-level namespaces
     * const namespaces = await catalog.listNamespaces();
     *
     * // List namespaces under a parent
     * const children = await catalog.listNamespaces({ namespace: ['analytics'] });
     * ```
     */
    async listNamespaces(parent) {
      return this.namespaceOps.listNamespaces(parent);
    }
    /**
     * Creates a new namespace in the catalog.
     *
     * @param id - Namespace identifier to create
     * @param metadata - Optional metadata properties for the namespace
     * @returns Response containing the created namespace and its properties
     *
     * @example
     * ```typescript
     * const response = await catalog.createNamespace(
     *   { namespace: ['analytics'] },
     *   { properties: { owner: 'data-team' } }
     * );
     * console.log(response.namespace); // ['analytics']
     * console.log(response.properties); // { owner: 'data-team', ... }
     * ```
     */
    async createNamespace(id, metadata) {
      return this.namespaceOps.createNamespace(id, metadata);
    }
    /**
     * Drops a namespace from the catalog.
     *
     * The namespace must be empty (contain no tables) before it can be dropped.
     *
     * @param id - Namespace identifier to drop
     *
     * @example
     * ```typescript
     * await catalog.dropNamespace({ namespace: ['analytics'] });
     * ```
     */
    async dropNamespace(id) {
      await this.namespaceOps.dropNamespace(id);
    }
    /**
     * Loads metadata for a namespace.
     *
     * @param id - Namespace identifier to load
     * @returns Namespace metadata including properties
     *
     * @example
     * ```typescript
     * const metadata = await catalog.loadNamespaceMetadata({ namespace: ['analytics'] });
     * console.log(metadata.properties);
     * ```
     */
    async loadNamespaceMetadata(id) {
      return this.namespaceOps.loadNamespaceMetadata(id);
    }
    /**
     * Lists all tables in a namespace.
     *
     * @param namespace - Namespace identifier to list tables from
     * @returns Array of table identifiers
     *
     * @example
     * ```typescript
     * const tables = await catalog.listTables({ namespace: ['analytics'] });
     * console.log(tables); // [{ namespace: ['analytics'], name: 'events' }, ...]
     * ```
     */
    async listTables(namespace) {
      return this.tableOps.listTables(namespace);
    }
    /**
     * Creates a new table in the catalog.
     *
     * @param namespace - Namespace to create the table in
     * @param request - Table creation request including name, schema, partition spec, etc.
     * @returns Table metadata for the created table
     *
     * @example
     * ```typescript
     * const metadata = await catalog.createTable(
     *   { namespace: ['analytics'] },
     *   {
     *     name: 'events',
     *     schema: {
     *       type: 'struct',
     *       fields: [
     *         { id: 1, name: 'id', type: 'long', required: true },
     *         { id: 2, name: 'timestamp', type: 'timestamp', required: true }
     *       ],
     *       'schema-id': 0
     *     },
     *     'partition-spec': {
     *       'spec-id': 0,
     *       fields: [
     *         { source_id: 2, field_id: 1000, name: 'ts_day', transform: 'day' }
     *       ]
     *     }
     *   }
     * );
     * ```
     */
    async createTable(namespace, request) {
      return this.tableOps.createTable(namespace, request);
    }
    /**
     * Updates an existing table's metadata.
     *
     * Can update the schema, partition spec, or properties of a table.
     *
     * @param id - Table identifier to update
     * @param request - Update request with fields to modify
     * @returns Response containing the metadata location and updated table metadata
     *
     * @example
     * ```typescript
     * const response = await catalog.updateTable(
     *   { namespace: ['analytics'], name: 'events' },
     *   {
     *     properties: { 'read.split.target-size': '134217728' }
     *   }
     * );
     * console.log(response['metadata-location']); // s3://...
     * console.log(response.metadata); // TableMetadata object
     * ```
     */
    async updateTable(id, request) {
      return this.tableOps.updateTable(id, request);
    }
    /**
     * Drops a table from the catalog.
     *
     * @param id - Table identifier to drop
     *
     * @example
     * ```typescript
     * await catalog.dropTable({ namespace: ['analytics'], name: 'events' });
     * ```
     */
    async dropTable(id, options) {
      await this.tableOps.dropTable(id, options);
    }
    /**
     * Loads metadata for a table.
     *
     * @param id - Table identifier to load
     * @returns Table metadata including schema, partition spec, location, etc.
     *
     * @example
     * ```typescript
     * const metadata = await catalog.loadTable({ namespace: ['analytics'], name: 'events' });
     * console.log(metadata.schema);
     * console.log(metadata.location);
     * ```
     */
    async loadTable(id) {
      return this.tableOps.loadTable(id);
    }
    /**
     * Checks if a namespace exists in the catalog.
     *
     * @param id - Namespace identifier to check
     * @returns True if the namespace exists, false otherwise
     *
     * @example
     * ```typescript
     * const exists = await catalog.namespaceExists({ namespace: ['analytics'] });
     * console.log(exists); // true or false
     * ```
     */
    async namespaceExists(id) {
      return this.namespaceOps.namespaceExists(id);
    }
    /**
     * Checks if a table exists in the catalog.
     *
     * @param id - Table identifier to check
     * @returns True if the table exists, false otherwise
     *
     * @example
     * ```typescript
     * const exists = await catalog.tableExists({ namespace: ['analytics'], name: 'events' });
     * console.log(exists); // true or false
     * ```
     */
    async tableExists(id) {
      return this.tableOps.tableExists(id);
    }
    /**
     * Creates a namespace if it does not exist.
     *
     * If the namespace already exists, returns void. If created, returns the response.
     *
     * @param id - Namespace identifier to create
     * @param metadata - Optional metadata properties for the namespace
     * @returns Response containing the created namespace and its properties, or void if it already exists
     *
     * @example
     * ```typescript
     * const response = await catalog.createNamespaceIfNotExists(
     *   { namespace: ['analytics'] },
     *   { properties: { owner: 'data-team' } }
     * );
     * if (response) {
     *   console.log('Created:', response.namespace);
     * } else {
     *   console.log('Already exists');
     * }
     * ```
     */
    async createNamespaceIfNotExists(id, metadata) {
      return this.namespaceOps.createNamespaceIfNotExists(id, metadata);
    }
    /**
     * Creates a table if it does not exist.
     *
     * If the table already exists, returns its metadata instead.
     *
     * @param namespace - Namespace to create the table in
     * @param request - Table creation request including name, schema, partition spec, etc.
     * @returns Table metadata for the created or existing table
     *
     * @example
     * ```typescript
     * const metadata = await catalog.createTableIfNotExists(
     *   { namespace: ['analytics'] },
     *   {
     *     name: 'events',
     *     schema: {
     *       type: 'struct',
     *       fields: [
     *         { id: 1, name: 'id', type: 'long', required: true },
     *         { id: 2, name: 'timestamp', type: 'timestamp', required: true }
     *       ],
     *       'schema-id': 0
     *     }
     *   }
     * );
     * ```
     */
    async createTableIfNotExists(namespace, request) {
      return this.tableOps.createTableIfNotExists(namespace, request);
    }
  };

  // node_modules/@supabase/storage-js/dist/index.mjs
  var StorageError = class extends Error {
    constructor(message, namespace = "storage", status, statusCode) {
      super(message);
      this.__isStorageError = true;
      this.namespace = namespace;
      this.name = namespace === "vectors" ? "StorageVectorsError" : "StorageError";
      this.status = status;
      this.statusCode = statusCode;
    }
  };
  function isStorageError(error) {
    return typeof error === "object" && error !== null && "__isStorageError" in error;
  }
  var StorageApiError = class extends StorageError {
    constructor(message, status, statusCode, namespace = "storage") {
      super(message, namespace, status, statusCode);
      this.name = namespace === "vectors" ? "StorageVectorsApiError" : "StorageApiError";
      this.status = status;
      this.statusCode = statusCode;
    }
    toJSON() {
      return {
        name: this.name,
        message: this.message,
        status: this.status,
        statusCode: this.statusCode
      };
    }
  };
  var StorageUnknownError = class extends StorageError {
    constructor(message, originalError, namespace = "storage") {
      super(message, namespace);
      this.name = namespace === "vectors" ? "StorageVectorsUnknownError" : "StorageUnknownError";
      this.originalError = originalError;
    }
  };
  var resolveFetch2 = (customFetch) => {
    if (customFetch) return (...args) => customFetch(...args);
    return (...args) => fetch(...args);
  };
  var isPlainObject = (value) => {
    if (typeof value !== "object" || value === null) return false;
    const prototype = Object.getPrototypeOf(value);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in value) && !(Symbol.iterator in value);
  };
  var recursiveToCamel = (item) => {
    if (Array.isArray(item)) return item.map((el) => recursiveToCamel(el));
    else if (typeof item === "function" || item !== Object(item)) return item;
    const result = {};
    Object.entries(item).forEach(([key, value]) => {
      const newKey = key.replace(/([-_][a-z])/gi, (c) => c.toUpperCase().replace(/[-_]/g, ""));
      result[newKey] = recursiveToCamel(value);
    });
    return result;
  };
  var isValidBucketName = (bucketName) => {
    if (!bucketName || typeof bucketName !== "string") return false;
    if (bucketName.length === 0 || bucketName.length > 100) return false;
    if (bucketName.trim() !== bucketName) return false;
    if (bucketName.includes("/") || bucketName.includes("\\")) return false;
    return /^[\w!.\*'() &$@=;:+,?-]+$/.test(bucketName);
  };
  function _typeof2(o) {
    "@babel/helpers - typeof";
    return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o$1) {
      return typeof o$1;
    } : function(o$1) {
      return o$1 && "function" == typeof Symbol && o$1.constructor === Symbol && o$1 !== Symbol.prototype ? "symbol" : typeof o$1;
    }, _typeof2(o);
  }
  function toPrimitive2(t, r) {
    if ("object" != _typeof2(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != _typeof2(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function toPropertyKey2(t) {
    var i = toPrimitive2(t, "string");
    return "symbol" == _typeof2(i) ? i : i + "";
  }
  function _defineProperty2(e, r, t) {
    return (r = toPropertyKey2(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e[r] = t, e;
  }
  function ownKeys2(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function(r$1) {
        return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread22(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys2(Object(t), true).forEach(function(r$1) {
        _defineProperty2(e, r$1, t[r$1]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys2(Object(t)).forEach(function(r$1) {
        Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
      });
    }
    return e;
  }
  var _getErrorMessage = (err) => {
    var _err$error;
    return err.msg || err.message || err.error_description || (typeof err.error === "string" ? err.error : (_err$error = err.error) === null || _err$error === void 0 ? void 0 : _err$error.message) || JSON.stringify(err);
  };
  var handleError = async (error, reject, options, namespace) => {
    if (error && typeof error === "object" && "status" in error && "ok" in error && typeof error.status === "number" && !(options === null || options === void 0 ? void 0 : options.noResolveJson)) {
      const responseError = error;
      const status = responseError.status || 500;
      if (typeof responseError.json === "function") responseError.json().then((err) => {
        const statusCode = (err === null || err === void 0 ? void 0 : err.statusCode) || (err === null || err === void 0 ? void 0 : err.code) || status + "";
        reject(new StorageApiError(_getErrorMessage(err), status, statusCode, namespace));
      }).catch(() => {
        if (namespace === "vectors") {
          const statusCode = status + "";
          reject(new StorageApiError(responseError.statusText || `HTTP ${status} error`, status, statusCode, namespace));
        } else {
          const statusCode = status + "";
          reject(new StorageApiError(responseError.statusText || `HTTP ${status} error`, status, statusCode, namespace));
        }
      });
      else {
        const statusCode = status + "";
        reject(new StorageApiError(responseError.statusText || `HTTP ${status} error`, status, statusCode, namespace));
      }
    } else reject(new StorageUnknownError(_getErrorMessage(error), error, namespace));
  };
  var _getRequestParams = (method, options, parameters, body) => {
    const params = {
      method,
      headers: (options === null || options === void 0 ? void 0 : options.headers) || {}
    };
    if (method === "GET" || method === "HEAD" || !body) return _objectSpread22(_objectSpread22({}, params), parameters);
    if (isPlainObject(body)) {
      params.headers = _objectSpread22({ "Content-Type": "application/json" }, options === null || options === void 0 ? void 0 : options.headers);
      params.body = JSON.stringify(body);
    } else params.body = body;
    if (options === null || options === void 0 ? void 0 : options.duplex) params.duplex = options.duplex;
    return _objectSpread22(_objectSpread22({}, params), parameters);
  };
  async function _handleRequest(fetcher, method, url, options, parameters, body, namespace) {
    return new Promise((resolve, reject) => {
      fetcher(url, _getRequestParams(method, options, parameters, body)).then((result) => {
        if (!result.ok) throw result;
        if (options === null || options === void 0 ? void 0 : options.noResolveJson) return result;
        if (namespace === "vectors") {
          const contentType = result.headers.get("content-type");
          if (result.headers.get("content-length") === "0" || result.status === 204) return {};
          if (!contentType || !contentType.includes("application/json")) return {};
        }
        return result.json();
      }).then((data) => resolve(data)).catch((error) => handleError(error, reject, options, namespace));
    });
  }
  function createFetchApi(namespace = "storage") {
    return {
      get: async (fetcher, url, options, parameters) => {
        return _handleRequest(fetcher, "GET", url, options, parameters, void 0, namespace);
      },
      post: async (fetcher, url, body, options, parameters) => {
        return _handleRequest(fetcher, "POST", url, options, parameters, body, namespace);
      },
      put: async (fetcher, url, body, options, parameters) => {
        return _handleRequest(fetcher, "PUT", url, options, parameters, body, namespace);
      },
      head: async (fetcher, url, options, parameters) => {
        return _handleRequest(fetcher, "HEAD", url, _objectSpread22(_objectSpread22({}, options), {}, { noResolveJson: true }), parameters, void 0, namespace);
      },
      remove: async (fetcher, url, body, options, parameters) => {
        return _handleRequest(fetcher, "DELETE", url, options, parameters, body, namespace);
      }
    };
  }
  var defaultApi = createFetchApi("storage");
  var { get, post, put, head, remove } = defaultApi;
  var vectorsApi = createFetchApi("vectors");
  var BaseApiClient = class {
    /**
    * Creates a new BaseApiClient instance
    * @param url - Base URL for API requests
    * @param headers - Default headers for API requests
    * @param fetch - Optional custom fetch implementation
    * @param namespace - Error namespace ('storage' or 'vectors')
    */
    constructor(url, headers = {}, fetch$1, namespace = "storage") {
      this.shouldThrowOnError = false;
      this.url = url;
      this.headers = headers;
      this.fetch = resolveFetch2(fetch$1);
      this.namespace = namespace;
    }
    /**
    * Enable throwing errors instead of returning them.
    * When enabled, errors are thrown instead of returned in { data, error } format.
    *
    * @returns this - For method chaining
    */
    throwOnError() {
      this.shouldThrowOnError = true;
      return this;
    }
    /**
    * Set an HTTP header for the request.
    * Creates a shallow copy of headers to avoid mutating shared state.
    *
    * @param name - Header name
    * @param value - Header value
    * @returns this - For method chaining
    */
    setHeader(name, value) {
      this.headers = _objectSpread22(_objectSpread22({}, this.headers), {}, { [name]: value });
      return this;
    }
    /**
    * Handles API operation with standardized error handling
    * Eliminates repetitive try-catch blocks across all API methods
    *
    * This wrapper:
    * 1. Executes the operation
    * 2. Returns { data, error: null } on success
    * 3. Returns { data: null, error } on failure (if shouldThrowOnError is false)
    * 4. Throws error on failure (if shouldThrowOnError is true)
    *
    * @typeParam T - The expected data type from the operation
    * @param operation - Async function that performs the API call
    * @returns Promise with { data, error } tuple
    *
    * @example
    * ```typescript
    * async listBuckets() {
    *   return this.handleOperation(async () => {
    *     return await get(this.fetch, `${this.url}/bucket`, {
    *       headers: this.headers,
    *     })
    *   })
    * }
    * ```
    */
    async handleOperation(operation) {
      var _this = this;
      try {
        return {
          data: await operation(),
          error: null
        };
      } catch (error) {
        if (_this.shouldThrowOnError) throw error;
        if (isStorageError(error)) return {
          data: null,
          error
        };
        throw error;
      }
    }
  };
  var StreamDownloadBuilder = class {
    constructor(downloadFn, shouldThrowOnError) {
      this.downloadFn = downloadFn;
      this.shouldThrowOnError = shouldThrowOnError;
    }
    then(onfulfilled, onrejected) {
      return this.execute().then(onfulfilled, onrejected);
    }
    async execute() {
      var _this = this;
      try {
        return {
          data: (await _this.downloadFn()).body,
          error: null
        };
      } catch (error) {
        if (_this.shouldThrowOnError) throw error;
        if (isStorageError(error)) return {
          data: null,
          error
        };
        throw error;
      }
    }
  };
  var _Symbol$toStringTag;
  _Symbol$toStringTag = Symbol.toStringTag;
  var BlobDownloadBuilder = class {
    constructor(downloadFn, shouldThrowOnError) {
      this.downloadFn = downloadFn;
      this.shouldThrowOnError = shouldThrowOnError;
      this[_Symbol$toStringTag] = "BlobDownloadBuilder";
      this.promise = null;
    }
    asStream() {
      return new StreamDownloadBuilder(this.downloadFn, this.shouldThrowOnError);
    }
    then(onfulfilled, onrejected) {
      return this.getPromise().then(onfulfilled, onrejected);
    }
    catch(onrejected) {
      return this.getPromise().catch(onrejected);
    }
    finally(onfinally) {
      return this.getPromise().finally(onfinally);
    }
    getPromise() {
      if (!this.promise) this.promise = this.execute();
      return this.promise;
    }
    async execute() {
      var _this = this;
      try {
        return {
          data: await (await _this.downloadFn()).blob(),
          error: null
        };
      } catch (error) {
        if (_this.shouldThrowOnError) throw error;
        if (isStorageError(error)) return {
          data: null,
          error
        };
        throw error;
      }
    }
  };
  var DEFAULT_SEARCH_OPTIONS = {
    limit: 100,
    offset: 0,
    sortBy: {
      column: "name",
      order: "asc"
    }
  };
  var DEFAULT_FILE_OPTIONS = {
    cacheControl: "3600",
    contentType: "text/plain;charset=UTF-8",
    upsert: false
  };
  var StorageFileApi = class extends BaseApiClient {
    constructor(url, headers = {}, bucketId, fetch$1) {
      super(url, headers, fetch$1, "storage");
      this.bucketId = bucketId;
    }
    /**
    * Uploads a file to an existing bucket or replaces an existing file at the specified path with a new one.
    *
    * @param method HTTP method.
    * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
    * @param fileBody The body of the file to be stored in the bucket.
    */
    async uploadOrUpdate(method, path, fileBody, fileOptions) {
      var _this = this;
      return _this.handleOperation(async () => {
        let body;
        const options = _objectSpread22(_objectSpread22({}, DEFAULT_FILE_OPTIONS), fileOptions);
        let headers = _objectSpread22(_objectSpread22({}, _this.headers), method === "POST" && { "x-upsert": String(options.upsert) });
        const metadata = options.metadata;
        if (typeof Blob !== "undefined" && fileBody instanceof Blob) {
          body = new FormData();
          body.append("cacheControl", options.cacheControl);
          if (metadata) body.append("metadata", _this.encodeMetadata(metadata));
          body.append("", fileBody);
        } else if (typeof FormData !== "undefined" && fileBody instanceof FormData) {
          body = fileBody;
          if (!body.has("cacheControl")) body.append("cacheControl", options.cacheControl);
          if (metadata && !body.has("metadata")) body.append("metadata", _this.encodeMetadata(metadata));
        } else {
          body = fileBody;
          headers["cache-control"] = `max-age=${options.cacheControl}`;
          headers["content-type"] = options.contentType;
          if (metadata) headers["x-metadata"] = _this.toBase64(_this.encodeMetadata(metadata));
          if ((typeof ReadableStream !== "undefined" && body instanceof ReadableStream || body && typeof body === "object" && "pipe" in body && typeof body.pipe === "function") && !options.duplex) options.duplex = "half";
        }
        if (fileOptions === null || fileOptions === void 0 ? void 0 : fileOptions.headers) headers = _objectSpread22(_objectSpread22({}, headers), fileOptions.headers);
        const cleanPath = _this._removeEmptyFolders(path);
        const _path = _this._getFinalPath(cleanPath);
        const data = await (method == "PUT" ? put : post)(_this.fetch, `${_this.url}/object/${_path}`, body, _objectSpread22({ headers }, (options === null || options === void 0 ? void 0 : options.duplex) ? { duplex: options.duplex } : {}));
        return {
          path: cleanPath,
          id: data.Id,
          fullPath: data.Key
        };
      });
    }
    /**
    * Uploads a file to an existing bucket.
    *
    * @category File Buckets
    * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
    * @param fileBody The body of the file to be stored in the bucket.
    * @param fileOptions Optional file upload options including cacheControl, contentType, upsert, and metadata.
    * @returns Promise with response containing file path, id, and fullPath or error
    *
    * @example Upload file
    * ```js
    * const avatarFile = event.target.files[0]
    * const { data, error } = await supabase
    *   .storage
    *   .from('avatars')
    *   .upload('public/avatar1.png', avatarFile, {
    *     cacheControl: '3600',
    *     upsert: false
    *   })
    * ```
    *
    * Response:
    * ```json
    * {
    *   "data": {
    *     "path": "public/avatar1.png",
    *     "fullPath": "avatars/public/avatar1.png"
    *   },
    *   "error": null
    * }
    * ```
    *
    * @example Upload file using `ArrayBuffer` from base64 file data
    * ```js
    * import { decode } from 'base64-arraybuffer'
    *
    * const { data, error } = await supabase
    *   .storage
    *   .from('avatars')
    *   .upload('public/avatar1.png', decode('base64FileData'), {
    *     contentType: 'image/png'
    *   })
    * ```
    */
    async upload(path, fileBody, fileOptions) {
      return this.uploadOrUpdate("POST", path, fileBody, fileOptions);
    }
    /**
    * Upload a file with a token generated from `createSignedUploadUrl`.
    *
    * @category File Buckets
    * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
    * @param token The token generated from `createSignedUploadUrl`
    * @param fileBody The body of the file to be stored in the bucket.
    * @param fileOptions HTTP headers (cacheControl, contentType, etc.).
    * **Note:** The `upsert` option has no effect here. To enable upsert behavior,
    * pass `{ upsert: true }` when calling `createSignedUploadUrl()` instead.
    * @returns Promise with response containing file path and fullPath or error
    *
    * @example Upload to a signed URL
    * ```js
    * const { data, error } = await supabase
    *   .storage
    *   .from('avatars')
    *   .uploadToSignedUrl('folder/cat.jpg', 'token-from-createSignedUploadUrl', file)
    * ```
    *
    * Response:
    * ```json
    * {
    *   "data": {
    *     "path": "folder/cat.jpg",
    *     "fullPath": "avatars/folder/cat.jpg"
    *   },
    *   "error": null
    * }
    * ```
    */
    async uploadToSignedUrl(path, token, fileBody, fileOptions) {
      var _this3 = this;
      const cleanPath = _this3._removeEmptyFolders(path);
      const _path = _this3._getFinalPath(cleanPath);
      const url = new URL(_this3.url + `/object/upload/sign/${_path}`);
      url.searchParams.set("token", token);
      return _this3.handleOperation(async () => {
        let body;
        const options = _objectSpread22({ upsert: DEFAULT_FILE_OPTIONS.upsert }, fileOptions);
        const headers = _objectSpread22(_objectSpread22({}, _this3.headers), { "x-upsert": String(options.upsert) });
        if (typeof Blob !== "undefined" && fileBody instanceof Blob) {
          body = new FormData();
          body.append("cacheControl", options.cacheControl);
          body.append("", fileBody);
        } else if (typeof FormData !== "undefined" && fileBody instanceof FormData) {
          body = fileBody;
          body.append("cacheControl", options.cacheControl);
        } else {
          body = fileBody;
          headers["cache-control"] = `max-age=${options.cacheControl}`;
          headers["content-type"] = options.contentType;
        }
        return {
          path: cleanPath,
          fullPath: (await put(_this3.fetch, url.toString(), body, { headers })).Key
        };
      });
    }
    /**
    * Creates a signed upload URL.
    * Signed upload URLs can be used to upload files to the bucket without further authentication.
    * They are valid for 2 hours.
    *
    * @category File Buckets
    * @param path The file path, including the current file name. For example `folder/image.png`.
    * @param options.upsert If set to true, allows the file to be overwritten if it already exists.
    * @returns Promise with response containing signed upload URL, token, and path or error
    *
    * @example Create Signed Upload URL
    * ```js
    * const { data, error } = await supabase
    *   .storage
    *   .from('avatars')
    *   .createSignedUploadUrl('folder/cat.jpg')
    * ```
    *
    * Response:
    * ```json
    * {
    *   "data": {
    *     "signedUrl": "https://example.supabase.co/storage/v1/object/upload/sign/avatars/folder/cat.jpg?token=<TOKEN>",
    *     "path": "folder/cat.jpg",
    *     "token": "<TOKEN>"
    *   },
    *   "error": null
    * }
    * ```
    */
    async createSignedUploadUrl(path, options) {
      var _this4 = this;
      return _this4.handleOperation(async () => {
        let _path = _this4._getFinalPath(path);
        const headers = _objectSpread22({}, _this4.headers);
        if (options === null || options === void 0 ? void 0 : options.upsert) headers["x-upsert"] = "true";
        const data = await post(_this4.fetch, `${_this4.url}/object/upload/sign/${_path}`, {}, { headers });
        const url = new URL(_this4.url + data.url);
        const token = url.searchParams.get("token");
        if (!token) throw new StorageError("No token returned by API");
        return {
          signedUrl: url.toString(),
          path,
          token
        };
      });
    }
    /**
    * Replaces an existing file at the specified path with a new one.
    *
    * @category File Buckets
    * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to update.
    * @param fileBody The body of the file to be stored in the bucket.
    * @param fileOptions Optional file upload options including cacheControl, contentType, upsert, and metadata.
    * @returns Promise with response containing file path, id, and fullPath or error
    *
    * @example Update file
    * ```js
    * const avatarFile = event.target.files[0]
    * const { data, error } = await supabase
    *   .storage
    *   .from('avatars')
    *   .update('public/avatar1.png', avatarFile, {
    *     cacheControl: '3600',
    *     upsert: true
    *   })
    * ```
    *
    * Response:
    * ```json
    * {
    *   "data": {
    *     "path": "public/avatar1.png",
    *     "fullPath": "avatars/public/avatar1.png"
    *   },
    *   "error": null
    * }
    * ```
    *
    * @example Update file using `ArrayBuffer` from base64 file data
    * ```js
    * import {decode} from 'base64-arraybuffer'
    *
    * const { data, error } = await supabase
    *   .storage
    *   .from('avatars')
    *   .update('public/avatar1.png', decode('base64FileData'), {
    *     contentType: 'image/png'
    *   })
    * ```
    */
    async update(path, fileBody, fileOptions) {
      return this.uploadOrUpdate("PUT", path, fileBody, fileOptions);
    }
    /**
    * Moves an existing file to a new path in the same bucket.
    *
    * @category File Buckets
    * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
    * @param toPath The new file path, including the new file name. For example `folder/image-new.png`.
    * @param options The destination options.
    * @returns Promise with response containing success message or error
    *
    * @example Move file
    * ```js
    * const { data, error } = await supabase
    *   .storage
    *   .from('avatars')
    *   .move('public/avatar1.png', 'private/avatar2.png')
    * ```
    *
    * Response:
    * ```json
    * {
    *   "data": {
    *     "message": "Successfully moved"
    *   },
    *   "error": null
    * }
    * ```
    */
    async move(fromPath, toPath, options) {
      var _this6 = this;
      return _this6.handleOperation(async () => {
        return await post(_this6.fetch, `${_this6.url}/object/move`, {
          bucketId: _this6.bucketId,
          sourceKey: fromPath,
          destinationKey: toPath,
          destinationBucket: options === null || options === void 0 ? void 0 : options.destinationBucket
        }, { headers: _this6.headers });
      });
    }
    /**
    * Copies an existing file to a new path in the same bucket.
    *
    * @category File Buckets
    * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
    * @param toPath The new file path, including the new file name. For example `folder/image-copy.png`.
    * @param options The destination options.
    * @returns Promise with response containing copied file path or error
    *
    * @example Copy file
    * ```js
    * const { data, error } = await supabase
    *   .storage
    *   .from('avatars')
    *   .copy('public/avatar1.png', 'private/avatar2.png')
    * ```
    *
    * Response:
    * ```json
    * {
    *   "data": {
    *     "path": "avatars/private/avatar2.png"
    *   },
    *   "error": null
    * }
    * ```
    */
    async copy(fromPath, toPath, options) {
      var _this7 = this;
      return _this7.handleOperation(async () => {
        return { path: (await post(_this7.fetch, `${_this7.url}/object/copy`, {
          bucketId: _this7.bucketId,
          sourceKey: fromPath,
          destinationKey: toPath,
          destinationBucket: options === null || options === void 0 ? void 0 : options.destinationBucket
        }, { headers: _this7.headers })).Key };
      });
    }
    /**
    * Creates a signed URL. Use a signed URL to share a file for a fixed amount of time.
    *
    * @category File Buckets
    * @param path The file path, including the current file name. For example `folder/image.png`.
    * @param expiresIn The number of seconds until the signed URL expires. For example, `60` for a URL which is valid for one minute.
    * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
    * @param options.transform Transform the asset before serving it to the client.
    * @returns Promise with response containing signed URL or error
    *
    * @example Create Signed URL
    * ```js
    * const { data, error } = await supabase
    *   .storage
    *   .from('avatars')
    *   .createSignedUrl('folder/avatar1.png', 60)
    * ```
    *
    * Response:
    * ```json
    * {
    *   "data": {
    *     "signedUrl": "https://example.supabase.co/storage/v1/object/sign/avatars/folder/avatar1.png?token=<TOKEN>"
    *   },
    *   "error": null
    * }
    * ```
    *
    * @example Create a signed URL for an asset with transformations
    * ```js
    * const { data } = await supabase
    *   .storage
    *   .from('avatars')
    *   .createSignedUrl('folder/avatar1.png', 60, {
    *     transform: {
    *       width: 100,
    *       height: 100,
    *     }
    *   })
    * ```
    *
    * @example Create a signed URL which triggers the download of the asset
    * ```js
    * const { data } = await supabase
    *   .storage
    *   .from('avatars')
    *   .createSignedUrl('folder/avatar1.png', 60, {
    *     download: true,
    *   })
    * ```
    */
    async createSignedUrl(path, expiresIn, options) {
      var _this8 = this;
      return _this8.handleOperation(async () => {
        let _path = _this8._getFinalPath(path);
        let data = await post(_this8.fetch, `${_this8.url}/object/sign/${_path}`, _objectSpread22({ expiresIn }, (options === null || options === void 0 ? void 0 : options.transform) ? { transform: options.transform } : {}), { headers: _this8.headers });
        const downloadQueryParam = (options === null || options === void 0 ? void 0 : options.download) ? `&download=${options.download === true ? "" : options.download}` : "";
        return { signedUrl: encodeURI(`${_this8.url}${data.signedURL}${downloadQueryParam}`) };
      });
    }
    /**
    * Creates multiple signed URLs. Use a signed URL to share a file for a fixed amount of time.
    *
    * @category File Buckets
    * @param paths The file paths to be downloaded, including the current file names. For example `['folder/image.png', 'folder2/image2.png']`.
    * @param expiresIn The number of seconds until the signed URLs expire. For example, `60` for URLs which are valid for one minute.
    * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
    * @returns Promise with response containing array of objects with signedUrl, path, and error or error
    *
    * @example Create Signed URLs
    * ```js
    * const { data, error } = await supabase
    *   .storage
    *   .from('avatars')
    *   .createSignedUrls(['folder/avatar1.png', 'folder/avatar2.png'], 60)
    * ```
    *
    * Response:
    * ```json
    * {
    *   "data": [
    *     {
    *       "error": null,
    *       "path": "folder/avatar1.png",
    *       "signedURL": "/object/sign/avatars/folder/avatar1.png?token=<TOKEN>",
    *       "signedUrl": "https://example.supabase.co/storage/v1/object/sign/avatars/folder/avatar1.png?token=<TOKEN>"
    *     },
    *     {
    *       "error": null,
    *       "path": "folder/avatar2.png",
    *       "signedURL": "/object/sign/avatars/folder/avatar2.png?token=<TOKEN>",
    *       "signedUrl": "https://example.supabase.co/storage/v1/object/sign/avatars/folder/avatar2.png?token=<TOKEN>"
    *     }
    *   ],
    *   "error": null
    * }
    * ```
    */
    async createSignedUrls(paths, expiresIn, options) {
      var _this9 = this;
      return _this9.handleOperation(async () => {
        const data = await post(_this9.fetch, `${_this9.url}/object/sign/${_this9.bucketId}`, {
          expiresIn,
          paths
        }, { headers: _this9.headers });
        const downloadQueryParam = (options === null || options === void 0 ? void 0 : options.download) ? `&download=${options.download === true ? "" : options.download}` : "";
        return data.map((datum) => _objectSpread22(_objectSpread22({}, datum), {}, { signedUrl: datum.signedURL ? encodeURI(`${_this9.url}${datum.signedURL}${downloadQueryParam}`) : null }));
      });
    }
    /**
    * Downloads a file from a private bucket. For public buckets, make a request to the URL returned from `getPublicUrl` instead.
    *
    * @category File Buckets
    * @param path The full path and file name of the file to be downloaded. For example `folder/image.png`.
    * @param options.transform Transform the asset before serving it to the client.
    * @param parameters Additional fetch parameters like signal for cancellation. Supports standard fetch options including cache control.
    * @returns BlobDownloadBuilder instance for downloading the file
    *
    * @example Download file
    * ```js
    * const { data, error } = await supabase
    *   .storage
    *   .from('avatars')
    *   .download('folder/avatar1.png')
    * ```
    *
    * Response:
    * ```json
    * {
    *   "data": <BLOB>,
    *   "error": null
    * }
    * ```
    *
    * @example Download file with transformations
    * ```js
    * const { data, error } = await supabase
    *   .storage
    *   .from('avatars')
    *   .download('folder/avatar1.png', {
    *     transform: {
    *       width: 100,
    *       height: 100,
    *       quality: 80
    *     }
    *   })
    * ```
    *
    * @example Download with cache control (useful in Edge Functions)
    * ```js
    * const { data, error } = await supabase
    *   .storage
    *   .from('avatars')
    *   .download('folder/avatar1.png', {}, { cache: 'no-store' })
    * ```
    *
    * @example Download with abort signal
    * ```js
    * const controller = new AbortController()
    * setTimeout(() => controller.abort(), 5000)
    *
    * const { data, error } = await supabase
    *   .storage
    *   .from('avatars')
    *   .download('folder/avatar1.png', {}, { signal: controller.signal })
    * ```
    */
    download(path, options, parameters) {
      const renderPath = typeof (options === null || options === void 0 ? void 0 : options.transform) !== "undefined" ? "render/image/authenticated" : "object";
      const transformationQuery = this.transformOptsToQueryString((options === null || options === void 0 ? void 0 : options.transform) || {});
      const queryString = transformationQuery ? `?${transformationQuery}` : "";
      const _path = this._getFinalPath(path);
      const downloadFn = () => get(this.fetch, `${this.url}/${renderPath}/${_path}${queryString}`, {
        headers: this.headers,
        noResolveJson: true
      }, parameters);
      return new BlobDownloadBuilder(downloadFn, this.shouldThrowOnError);
    }
    /**
    * Retrieves the details of an existing file.
    *
    * @category File Buckets
    * @param path The file path, including the file name. For example `folder/image.png`.
    * @returns Promise with response containing file metadata or error
    *
    * @example Get file info
    * ```js
    * const { data, error } = await supabase
    *   .storage
    *   .from('avatars')
    *   .info('folder/avatar1.png')
    * ```
    */
    async info(path) {
      var _this10 = this;
      const _path = _this10._getFinalPath(path);
      return _this10.handleOperation(async () => {
        return recursiveToCamel(await get(_this10.fetch, `${_this10.url}/object/info/${_path}`, { headers: _this10.headers }));
      });
    }
    /**
    * Checks the existence of a file.
    *
    * @category File Buckets
    * @param path The file path, including the file name. For example `folder/image.png`.
    * @returns Promise with response containing boolean indicating file existence or error
    *
    * @example Check file existence
    * ```js
    * const { data, error } = await supabase
    *   .storage
    *   .from('avatars')
    *   .exists('folder/avatar1.png')
    * ```
    */
    async exists(path) {
      var _this11 = this;
      const _path = _this11._getFinalPath(path);
      try {
        await head(_this11.fetch, `${_this11.url}/object/${_path}`, { headers: _this11.headers });
        return {
          data: true,
          error: null
        };
      } catch (error) {
        if (_this11.shouldThrowOnError) throw error;
        if (isStorageError(error) && error instanceof StorageUnknownError) {
          const originalError = error.originalError;
          if ([400, 404].includes(originalError === null || originalError === void 0 ? void 0 : originalError.status)) return {
            data: false,
            error
          };
        }
        throw error;
      }
    }
    /**
    * A simple convenience function to get the URL for an asset in a public bucket. If you do not want to use this function, you can construct the public URL by concatenating the bucket URL with the path to the asset.
    * This function does not verify if the bucket is public. If a public URL is created for a bucket which is not public, you will not be able to download the asset.
    *
    * @category File Buckets
    * @param path The path and name of the file to generate the public URL for. For example `folder/image.png`.
    * @param options.download Triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
    * @param options.transform Transform the asset before serving it to the client.
    * @returns Object with public URL
    *
    * @example Returns the URL for an asset in a public bucket
    * ```js
    * const { data } = supabase
    *   .storage
    *   .from('public-bucket')
    *   .getPublicUrl('folder/avatar1.png')
    * ```
    *
    * Response:
    * ```json
    * {
    *   "data": {
    *     "publicUrl": "https://example.supabase.co/storage/v1/object/public/public-bucket/folder/avatar1.png"
    *   }
    * }
    * ```
    *
    * @example Returns the URL for an asset in a public bucket with transformations
    * ```js
    * const { data } = supabase
    *   .storage
    *   .from('public-bucket')
    *   .getPublicUrl('folder/avatar1.png', {
    *     transform: {
    *       width: 100,
    *       height: 100,
    *     }
    *   })
    * ```
    *
    * @example Returns the URL which triggers the download of an asset in a public bucket
    * ```js
    * const { data } = supabase
    *   .storage
    *   .from('public-bucket')
    *   .getPublicUrl('folder/avatar1.png', {
    *     download: true,
    *   })
    * ```
    */
    getPublicUrl(path, options) {
      const _path = this._getFinalPath(path);
      const _queryString = [];
      const downloadQueryParam = (options === null || options === void 0 ? void 0 : options.download) ? `download=${options.download === true ? "" : options.download}` : "";
      if (downloadQueryParam !== "") _queryString.push(downloadQueryParam);
      const renderPath = typeof (options === null || options === void 0 ? void 0 : options.transform) !== "undefined" ? "render/image" : "object";
      const transformationQuery = this.transformOptsToQueryString((options === null || options === void 0 ? void 0 : options.transform) || {});
      if (transformationQuery !== "") _queryString.push(transformationQuery);
      let queryString = _queryString.join("&");
      if (queryString !== "") queryString = `?${queryString}`;
      return { data: { publicUrl: encodeURI(`${this.url}/${renderPath}/public/${_path}${queryString}`) } };
    }
    /**
    * Deletes files within the same bucket
    *
    * @category File Buckets
    * @param paths An array of files to delete, including the path and file name. For example [`'folder/image.png'`].
    * @returns Promise with response containing array of deleted file objects or error
    *
    * @example Delete file
    * ```js
    * const { data, error } = await supabase
    *   .storage
    *   .from('avatars')
    *   .remove(['folder/avatar1.png'])
    * ```
    *
    * Response:
    * ```json
    * {
    *   "data": [],
    *   "error": null
    * }
    * ```
    */
    async remove(paths) {
      var _this12 = this;
      return _this12.handleOperation(async () => {
        return await remove(_this12.fetch, `${_this12.url}/object/${_this12.bucketId}`, { prefixes: paths }, { headers: _this12.headers });
      });
    }
    /**
    * Get file metadata
    * @param id the file id to retrieve metadata
    */
    /**
    * Update file metadata
    * @param id the file id to update metadata
    * @param meta the new file metadata
    */
    /**
    * Lists all the files and folders within a path of the bucket.
    *
    * @category File Buckets
    * @param path The folder path.
    * @param options Search options including limit (defaults to 100), offset, sortBy, and search
    * @param parameters Optional fetch parameters including signal for cancellation
    * @returns Promise with response containing array of files or error
    *
    * @example List files in a bucket
    * ```js
    * const { data, error } = await supabase
    *   .storage
    *   .from('avatars')
    *   .list('folder', {
    *     limit: 100,
    *     offset: 0,
    *     sortBy: { column: 'name', order: 'asc' },
    *   })
    * ```
    *
    * Response:
    * ```json
    * {
    *   "data": [
    *     {
    *       "name": "avatar1.png",
    *       "id": "e668cf7f-821b-4a2f-9dce-7dfa5dd1cfd2",
    *       "updated_at": "2024-05-22T23:06:05.580Z",
    *       "created_at": "2024-05-22T23:04:34.443Z",
    *       "last_accessed_at": "2024-05-22T23:04:34.443Z",
    *       "metadata": {
    *         "eTag": "\"c5e8c553235d9af30ef4f6e280790b92\"",
    *         "size": 32175,
    *         "mimetype": "image/png",
    *         "cacheControl": "max-age=3600",
    *         "lastModified": "2024-05-22T23:06:05.574Z",
    *         "contentLength": 32175,
    *         "httpStatusCode": 200
    *       }
    *     }
    *   ],
    *   "error": null
    * }
    * ```
    *
    * @example Search files in a bucket
    * ```js
    * const { data, error } = await supabase
    *   .storage
    *   .from('avatars')
    *   .list('folder', {
    *     limit: 100,
    *     offset: 0,
    *     sortBy: { column: 'name', order: 'asc' },
    *     search: 'jon'
    *   })
    * ```
    */
    async list(path, options, parameters) {
      var _this13 = this;
      return _this13.handleOperation(async () => {
        const body = _objectSpread22(_objectSpread22(_objectSpread22({}, DEFAULT_SEARCH_OPTIONS), options), {}, { prefix: path || "" });
        return await post(_this13.fetch, `${_this13.url}/object/list/${_this13.bucketId}`, body, { headers: _this13.headers }, parameters);
      });
    }
    /**
    * @experimental this method signature might change in the future
    *
    * @category File Buckets
    * @param options search options
    * @param parameters
    */
    async listV2(options, parameters) {
      var _this14 = this;
      return _this14.handleOperation(async () => {
        const body = _objectSpread22({}, options);
        return await post(_this14.fetch, `${_this14.url}/object/list-v2/${_this14.bucketId}`, body, { headers: _this14.headers }, parameters);
      });
    }
    encodeMetadata(metadata) {
      return JSON.stringify(metadata);
    }
    toBase64(data) {
      if (typeof Buffer !== "undefined") return Buffer.from(data).toString("base64");
      return btoa(data);
    }
    _getFinalPath(path) {
      return `${this.bucketId}/${path.replace(/^\/+/, "")}`;
    }
    _removeEmptyFolders(path) {
      return path.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
    }
    transformOptsToQueryString(transform) {
      const params = [];
      if (transform.width) params.push(`width=${transform.width}`);
      if (transform.height) params.push(`height=${transform.height}`);
      if (transform.resize) params.push(`resize=${transform.resize}`);
      if (transform.format) params.push(`format=${transform.format}`);
      if (transform.quality) params.push(`quality=${transform.quality}`);
      return params.join("&");
    }
  };
  var version2 = "2.98.0";
  var DEFAULT_HEADERS = { "X-Client-Info": `storage-js/${version2}` };
  var StorageBucketApi = class extends BaseApiClient {
    constructor(url, headers = {}, fetch$1, opts) {
      const baseUrl = new URL(url);
      if (opts === null || opts === void 0 ? void 0 : opts.useNewHostname) {
        if (/supabase\.(co|in|red)$/.test(baseUrl.hostname) && !baseUrl.hostname.includes("storage.supabase.")) baseUrl.hostname = baseUrl.hostname.replace("supabase.", "storage.supabase.");
      }
      const finalUrl = baseUrl.href.replace(/\/$/, "");
      const finalHeaders = _objectSpread22(_objectSpread22({}, DEFAULT_HEADERS), headers);
      super(finalUrl, finalHeaders, fetch$1, "storage");
    }
    /**
    * Retrieves the details of all Storage buckets within an existing project.
    *
    * @category File Buckets
    * @param options Query parameters for listing buckets
    * @param options.limit Maximum number of buckets to return
    * @param options.offset Number of buckets to skip
    * @param options.sortColumn Column to sort by ('id', 'name', 'created_at', 'updated_at')
    * @param options.sortOrder Sort order ('asc' or 'desc')
    * @param options.search Search term to filter bucket names
    * @returns Promise with response containing array of buckets or error
    *
    * @example List buckets
    * ```js
    * const { data, error } = await supabase
    *   .storage
    *   .listBuckets()
    * ```
    *
    * @example List buckets with options
    * ```js
    * const { data, error } = await supabase
    *   .storage
    *   .listBuckets({
    *     limit: 10,
    *     offset: 0,
    *     sortColumn: 'created_at',
    *     sortOrder: 'desc',
    *     search: 'prod'
    *   })
    * ```
    */
    async listBuckets(options) {
      var _this = this;
      return _this.handleOperation(async () => {
        const queryString = _this.listBucketOptionsToQueryString(options);
        return await get(_this.fetch, `${_this.url}/bucket${queryString}`, { headers: _this.headers });
      });
    }
    /**
    * Retrieves the details of an existing Storage bucket.
    *
    * @category File Buckets
    * @param id The unique identifier of the bucket you would like to retrieve.
    * @returns Promise with response containing bucket details or error
    *
    * @example Get bucket
    * ```js
    * const { data, error } = await supabase
    *   .storage
    *   .getBucket('avatars')
    * ```
    *
    * Response:
    * ```json
    * {
    *   "data": {
    *     "id": "avatars",
    *     "name": "avatars",
    *     "owner": "",
    *     "public": false,
    *     "file_size_limit": 1024,
    *     "allowed_mime_types": [
    *       "image/png"
    *     ],
    *     "created_at": "2024-05-22T22:26:05.100Z",
    *     "updated_at": "2024-05-22T22:26:05.100Z"
    *   },
    *   "error": null
    * }
    * ```
    */
    async getBucket(id) {
      var _this2 = this;
      return _this2.handleOperation(async () => {
        return await get(_this2.fetch, `${_this2.url}/bucket/${id}`, { headers: _this2.headers });
      });
    }
    /**
    * Creates a new Storage bucket
    *
    * @category File Buckets
    * @param id A unique identifier for the bucket you are creating.
    * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations. By default, buckets are private.
    * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
    * The global file size limit takes precedence over this value.
    * The default value is null, which doesn't set a per bucket file size limit.
    * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
    * The default value is null, which allows files with all mime types to be uploaded.
    * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
    * @param options.type (private-beta) specifies the bucket type. see `BucketType` for more details.
    *   - default bucket type is `STANDARD`
    * @returns Promise with response containing newly created bucket name or error
    *
    * @example Create bucket
    * ```js
    * const { data, error } = await supabase
    *   .storage
    *   .createBucket('avatars', {
    *     public: false,
    *     allowedMimeTypes: ['image/png'],
    *     fileSizeLimit: 1024
    *   })
    * ```
    *
    * Response:
    * ```json
    * {
    *   "data": {
    *     "name": "avatars"
    *   },
    *   "error": null
    * }
    * ```
    */
    async createBucket(id, options = { public: false }) {
      var _this3 = this;
      return _this3.handleOperation(async () => {
        return await post(_this3.fetch, `${_this3.url}/bucket`, {
          id,
          name: id,
          type: options.type,
          public: options.public,
          file_size_limit: options.fileSizeLimit,
          allowed_mime_types: options.allowedMimeTypes
        }, { headers: _this3.headers });
      });
    }
    /**
    * Updates a Storage bucket
    *
    * @category File Buckets
    * @param id A unique identifier for the bucket you are updating.
    * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations.
    * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
    * The global file size limit takes precedence over this value.
    * The default value is null, which doesn't set a per bucket file size limit.
    * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
    * The default value is null, which allows files with all mime types to be uploaded.
    * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
    * @returns Promise with response containing success message or error
    *
    * @example Update bucket
    * ```js
    * const { data, error } = await supabase
    *   .storage
    *   .updateBucket('avatars', {
    *     public: false,
    *     allowedMimeTypes: ['image/png'],
    *     fileSizeLimit: 1024
    *   })
    * ```
    *
    * Response:
    * ```json
    * {
    *   "data": {
    *     "message": "Successfully updated"
    *   },
    *   "error": null
    * }
    * ```
    */
    async updateBucket(id, options) {
      var _this4 = this;
      return _this4.handleOperation(async () => {
        return await put(_this4.fetch, `${_this4.url}/bucket/${id}`, {
          id,
          name: id,
          public: options.public,
          file_size_limit: options.fileSizeLimit,
          allowed_mime_types: options.allowedMimeTypes
        }, { headers: _this4.headers });
      });
    }
    /**
    * Removes all objects inside a single bucket.
    *
    * @category File Buckets
    * @param id The unique identifier of the bucket you would like to empty.
    * @returns Promise with success message or error
    *
    * @example Empty bucket
    * ```js
    * const { data, error } = await supabase
    *   .storage
    *   .emptyBucket('avatars')
    * ```
    *
    * Response:
    * ```json
    * {
    *   "data": {
    *     "message": "Successfully emptied"
    *   },
    *   "error": null
    * }
    * ```
    */
    async emptyBucket(id) {
      var _this5 = this;
      return _this5.handleOperation(async () => {
        return await post(_this5.fetch, `${_this5.url}/bucket/${id}/empty`, {}, { headers: _this5.headers });
      });
    }
    /**
    * Deletes an existing bucket. A bucket can't be deleted with existing objects inside it.
    * You must first `empty()` the bucket.
    *
    * @category File Buckets
    * @param id The unique identifier of the bucket you would like to delete.
    * @returns Promise with success message or error
    *
    * @example Delete bucket
    * ```js
    * const { data, error } = await supabase
    *   .storage
    *   .deleteBucket('avatars')
    * ```
    *
    * Response:
    * ```json
    * {
    *   "data": {
    *     "message": "Successfully deleted"
    *   },
    *   "error": null
    * }
    * ```
    */
    async deleteBucket(id) {
      var _this6 = this;
      return _this6.handleOperation(async () => {
        return await remove(_this6.fetch, `${_this6.url}/bucket/${id}`, {}, { headers: _this6.headers });
      });
    }
    listBucketOptionsToQueryString(options) {
      const params = {};
      if (options) {
        if ("limit" in options) params.limit = String(options.limit);
        if ("offset" in options) params.offset = String(options.offset);
        if (options.search) params.search = options.search;
        if (options.sortColumn) params.sortColumn = options.sortColumn;
        if (options.sortOrder) params.sortOrder = options.sortOrder;
      }
      return Object.keys(params).length > 0 ? "?" + new URLSearchParams(params).toString() : "";
    }
  };
  var StorageAnalyticsClient = class extends BaseApiClient {
    /**
    * @alpha
    *
    * Creates a new StorageAnalyticsClient instance
    *
    * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
    *
    * @category Analytics Buckets
    * @param url - The base URL for the storage API
    * @param headers - HTTP headers to include in requests
    * @param fetch - Optional custom fetch implementation
    *
    * @example
    * ```typescript
    * const client = new StorageAnalyticsClient(url, headers)
    * ```
    */
    constructor(url, headers = {}, fetch$1) {
      const finalUrl = url.replace(/\/$/, "");
      const finalHeaders = _objectSpread22(_objectSpread22({}, DEFAULT_HEADERS), headers);
      super(finalUrl, finalHeaders, fetch$1, "storage");
    }
    /**
    * @alpha
    *
    * Creates a new analytics bucket using Iceberg tables
    * Analytics buckets are optimized for analytical queries and data processing
    *
    * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
    *
    * @category Analytics Buckets
    * @param name A unique name for the bucket you are creating
    * @returns Promise with response containing newly created analytics bucket or error
    *
    * @example Create analytics bucket
    * ```js
    * const { data, error } = await supabase
    *   .storage
    *   .analytics
    *   .createBucket('analytics-data')
    * ```
    *
    * Response:
    * ```json
    * {
    *   "data": {
    *     "name": "analytics-data",
    *     "type": "ANALYTICS",
    *     "format": "iceberg",
    *     "created_at": "2024-05-22T22:26:05.100Z",
    *     "updated_at": "2024-05-22T22:26:05.100Z"
    *   },
    *   "error": null
    * }
    * ```
    */
    async createBucket(name) {
      var _this = this;
      return _this.handleOperation(async () => {
        return await post(_this.fetch, `${_this.url}/bucket`, { name }, { headers: _this.headers });
      });
    }
    /**
    * @alpha
    *
    * Retrieves the details of all Analytics Storage buckets within an existing project
    * Only returns buckets of type 'ANALYTICS'
    *
    * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
    *
    * @category Analytics Buckets
    * @param options Query parameters for listing buckets
    * @param options.limit Maximum number of buckets to return
    * @param options.offset Number of buckets to skip
    * @param options.sortColumn Column to sort by ('name', 'created_at', 'updated_at')
    * @param options.sortOrder Sort order ('asc' or 'desc')
    * @param options.search Search term to filter bucket names
    * @returns Promise with response containing array of analytics buckets or error
    *
    * @example List analytics buckets
    * ```js
    * const { data, error } = await supabase
    *   .storage
    *   .analytics
    *   .listBuckets({
    *     limit: 10,
    *     offset: 0,
    *     sortColumn: 'created_at',
    *     sortOrder: 'desc'
    *   })
    * ```
    *
    * Response:
    * ```json
    * {
    *   "data": [
    *     {
    *       "name": "analytics-data",
    *       "type": "ANALYTICS",
    *       "format": "iceberg",
    *       "created_at": "2024-05-22T22:26:05.100Z",
    *       "updated_at": "2024-05-22T22:26:05.100Z"
    *     }
    *   ],
    *   "error": null
    * }
    * ```
    */
    async listBuckets(options) {
      var _this2 = this;
      return _this2.handleOperation(async () => {
        const queryParams = new URLSearchParams();
        if ((options === null || options === void 0 ? void 0 : options.limit) !== void 0) queryParams.set("limit", options.limit.toString());
        if ((options === null || options === void 0 ? void 0 : options.offset) !== void 0) queryParams.set("offset", options.offset.toString());
        if (options === null || options === void 0 ? void 0 : options.sortColumn) queryParams.set("sortColumn", options.sortColumn);
        if (options === null || options === void 0 ? void 0 : options.sortOrder) queryParams.set("sortOrder", options.sortOrder);
        if (options === null || options === void 0 ? void 0 : options.search) queryParams.set("search", options.search);
        const queryString = queryParams.toString();
        const url = queryString ? `${_this2.url}/bucket?${queryString}` : `${_this2.url}/bucket`;
        return await get(_this2.fetch, url, { headers: _this2.headers });
      });
    }
    /**
    * @alpha
    *
    * Deletes an existing analytics bucket
    * A bucket can't be deleted with existing objects inside it
    * You must first empty the bucket before deletion
    *
    * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
    *
    * @category Analytics Buckets
    * @param bucketName The unique identifier of the bucket you would like to delete
    * @returns Promise with response containing success message or error
    *
    * @example Delete analytics bucket
    * ```js
    * const { data, error } = await supabase
    *   .storage
    *   .analytics
    *   .deleteBucket('analytics-data')
    * ```
    *
    * Response:
    * ```json
    * {
    *   "data": {
    *     "message": "Successfully deleted"
    *   },
    *   "error": null
    * }
    * ```
    */
    async deleteBucket(bucketName) {
      var _this3 = this;
      return _this3.handleOperation(async () => {
        return await remove(_this3.fetch, `${_this3.url}/bucket/${bucketName}`, {}, { headers: _this3.headers });
      });
    }
    /**
    * @alpha
    *
    * Get an Iceberg REST Catalog client configured for a specific analytics bucket
    * Use this to perform advanced table and namespace operations within the bucket
    * The returned client provides full access to the Apache Iceberg REST Catalog API
    * with the Supabase `{ data, error }` pattern for consistent error handling on all operations.
    *
    * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
    *
    * @category Analytics Buckets
    * @param bucketName - The name of the analytics bucket (warehouse) to connect to
    * @returns The wrapped Iceberg catalog client
    * @throws {StorageError} If the bucket name is invalid
    *
    * @example Get catalog and create table
    * ```js
    * // First, create an analytics bucket
    * const { data: bucket, error: bucketError } = await supabase
    *   .storage
    *   .analytics
    *   .createBucket('analytics-data')
    *
    * // Get the Iceberg catalog for that bucket
    * const catalog = supabase.storage.analytics.from('analytics-data')
    *
    * // Create a namespace
    * const { error: nsError } = await catalog.createNamespace({ namespace: ['default'] })
    *
    * // Create a table with schema
    * const { data: tableMetadata, error: tableError } = await catalog.createTable(
    *   { namespace: ['default'] },
    *   {
    *     name: 'events',
    *     schema: {
    *       type: 'struct',
    *       fields: [
    *         { id: 1, name: 'id', type: 'long', required: true },
    *         { id: 2, name: 'timestamp', type: 'timestamp', required: true },
    *         { id: 3, name: 'user_id', type: 'string', required: false }
    *       ],
    *       'schema-id': 0,
    *       'identifier-field-ids': [1]
    *     },
    *     'partition-spec': {
    *       'spec-id': 0,
    *       fields: []
    *     },
    *     'write-order': {
    *       'order-id': 0,
    *       fields: []
    *     },
    *     properties: {
    *       'write.format.default': 'parquet'
    *     }
    *   }
    * )
    * ```
    *
    * @example List tables in namespace
    * ```js
    * const catalog = supabase.storage.analytics.from('analytics-data')
    *
    * // List all tables in the default namespace
    * const { data: tables, error: listError } = await catalog.listTables({ namespace: ['default'] })
    * if (listError) {
    *   if (listError.isNotFound()) {
    *     console.log('Namespace not found')
    *   }
    *   return
    * }
    * console.log(tables) // [{ namespace: ['default'], name: 'events' }]
    * ```
    *
    * @example Working with namespaces
    * ```js
    * const catalog = supabase.storage.analytics.from('analytics-data')
    *
    * // List all namespaces
    * const { data: namespaces } = await catalog.listNamespaces()
    *
    * // Create namespace with properties
    * await catalog.createNamespace(
    *   { namespace: ['production'] },
    *   { properties: { owner: 'data-team', env: 'prod' } }
    * )
    * ```
    *
    * @example Cleanup operations
    * ```js
    * const catalog = supabase.storage.analytics.from('analytics-data')
    *
    * // Drop table with purge option (removes all data)
    * const { error: dropError } = await catalog.dropTable(
    *   { namespace: ['default'], name: 'events' },
    *   { purge: true }
    * )
    *
    * if (dropError?.isNotFound()) {
    *   console.log('Table does not exist')
    * }
    *
    * // Drop namespace (must be empty)
    * await catalog.dropNamespace({ namespace: ['default'] })
    * ```
    *
    * @remarks
    * This method provides a bridge between Supabase's bucket management and the standard
    * Apache Iceberg REST Catalog API. The bucket name maps to the Iceberg warehouse parameter.
    * All authentication and configuration is handled automatically using your Supabase credentials.
    *
    * **Error Handling**: Invalid bucket names throw immediately. All catalog
    * operations return `{ data, error }` where errors are `IcebergError` instances from iceberg-js.
    * Use helper methods like `error.isNotFound()` or check `error.status` for specific error handling.
    * Use `.throwOnError()` on the analytics client if you prefer exceptions for catalog operations.
    *
    * **Cleanup Operations**: When using `dropTable`, the `purge: true` option permanently
    * deletes all table data. Without it, the table is marked as deleted but data remains.
    *
    * **Library Dependency**: The returned catalog wraps `IcebergRestCatalog` from iceberg-js.
    * For complete API documentation and advanced usage, refer to the
    * [iceberg-js documentation](https://supabase.github.io/iceberg-js/).
    */
    from(bucketName) {
      var _this4 = this;
      if (!isValidBucketName(bucketName)) throw new StorageError("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");
      const catalog = new IcebergRestCatalog({
        baseUrl: this.url,
        catalogName: bucketName,
        auth: {
          type: "custom",
          getHeaders: async () => _this4.headers
        },
        fetch: this.fetch
      });
      const shouldThrowOnError = this.shouldThrowOnError;
      return new Proxy(catalog, { get(target, prop) {
        const value = target[prop];
        if (typeof value !== "function") return value;
        return async (...args) => {
          try {
            return {
              data: await value.apply(target, args),
              error: null
            };
          } catch (error) {
            if (shouldThrowOnError) throw error;
            return {
              data: null,
              error
            };
          }
        };
      } });
    }
  };
  var VectorIndexApi = class extends BaseApiClient {
    /** Creates a new VectorIndexApi instance */
    constructor(url, headers = {}, fetch$1) {
      const finalUrl = url.replace(/\/$/, "");
      const finalHeaders = _objectSpread22(_objectSpread22({}, DEFAULT_HEADERS), {}, { "Content-Type": "application/json" }, headers);
      super(finalUrl, finalHeaders, fetch$1, "vectors");
    }
    /** Creates a new vector index within a bucket */
    async createIndex(options) {
      var _this = this;
      return _this.handleOperation(async () => {
        return await vectorsApi.post(_this.fetch, `${_this.url}/CreateIndex`, options, { headers: _this.headers }) || {};
      });
    }
    /** Retrieves metadata for a specific vector index */
    async getIndex(vectorBucketName, indexName) {
      var _this2 = this;
      return _this2.handleOperation(async () => {
        return await vectorsApi.post(_this2.fetch, `${_this2.url}/GetIndex`, {
          vectorBucketName,
          indexName
        }, { headers: _this2.headers });
      });
    }
    /** Lists vector indexes within a bucket with optional filtering and pagination */
    async listIndexes(options) {
      var _this3 = this;
      return _this3.handleOperation(async () => {
        return await vectorsApi.post(_this3.fetch, `${_this3.url}/ListIndexes`, options, { headers: _this3.headers });
      });
    }
    /** Deletes a vector index and all its data */
    async deleteIndex(vectorBucketName, indexName) {
      var _this4 = this;
      return _this4.handleOperation(async () => {
        return await vectorsApi.post(_this4.fetch, `${_this4.url}/DeleteIndex`, {
          vectorBucketName,
          indexName
        }, { headers: _this4.headers }) || {};
      });
    }
  };
  var VectorDataApi = class extends BaseApiClient {
    /** Creates a new VectorDataApi instance */
    constructor(url, headers = {}, fetch$1) {
      const finalUrl = url.replace(/\/$/, "");
      const finalHeaders = _objectSpread22(_objectSpread22({}, DEFAULT_HEADERS), {}, { "Content-Type": "application/json" }, headers);
      super(finalUrl, finalHeaders, fetch$1, "vectors");
    }
    /** Inserts or updates vectors in batch (1-500 per request) */
    async putVectors(options) {
      var _this = this;
      if (options.vectors.length < 1 || options.vectors.length > 500) throw new Error("Vector batch size must be between 1 and 500 items");
      return _this.handleOperation(async () => {
        return await vectorsApi.post(_this.fetch, `${_this.url}/PutVectors`, options, { headers: _this.headers }) || {};
      });
    }
    /** Retrieves vectors by their keys in batch */
    async getVectors(options) {
      var _this2 = this;
      return _this2.handleOperation(async () => {
        return await vectorsApi.post(_this2.fetch, `${_this2.url}/GetVectors`, options, { headers: _this2.headers });
      });
    }
    /** Lists vectors in an index with pagination */
    async listVectors(options) {
      var _this3 = this;
      if (options.segmentCount !== void 0) {
        if (options.segmentCount < 1 || options.segmentCount > 16) throw new Error("segmentCount must be between 1 and 16");
        if (options.segmentIndex !== void 0) {
          if (options.segmentIndex < 0 || options.segmentIndex >= options.segmentCount) throw new Error(`segmentIndex must be between 0 and ${options.segmentCount - 1}`);
        }
      }
      return _this3.handleOperation(async () => {
        return await vectorsApi.post(_this3.fetch, `${_this3.url}/ListVectors`, options, { headers: _this3.headers });
      });
    }
    /** Queries for similar vectors using approximate nearest neighbor search */
    async queryVectors(options) {
      var _this4 = this;
      return _this4.handleOperation(async () => {
        return await vectorsApi.post(_this4.fetch, `${_this4.url}/QueryVectors`, options, { headers: _this4.headers });
      });
    }
    /** Deletes vectors by their keys in batch (1-500 per request) */
    async deleteVectors(options) {
      var _this5 = this;
      if (options.keys.length < 1 || options.keys.length > 500) throw new Error("Keys batch size must be between 1 and 500 items");
      return _this5.handleOperation(async () => {
        return await vectorsApi.post(_this5.fetch, `${_this5.url}/DeleteVectors`, options, { headers: _this5.headers }) || {};
      });
    }
  };
  var VectorBucketApi = class extends BaseApiClient {
    /** Creates a new VectorBucketApi instance */
    constructor(url, headers = {}, fetch$1) {
      const finalUrl = url.replace(/\/$/, "");
      const finalHeaders = _objectSpread22(_objectSpread22({}, DEFAULT_HEADERS), {}, { "Content-Type": "application/json" }, headers);
      super(finalUrl, finalHeaders, fetch$1, "vectors");
    }
    /** Creates a new vector bucket */
    async createBucket(vectorBucketName) {
      var _this = this;
      return _this.handleOperation(async () => {
        return await vectorsApi.post(_this.fetch, `${_this.url}/CreateVectorBucket`, { vectorBucketName }, { headers: _this.headers }) || {};
      });
    }
    /** Retrieves metadata for a specific vector bucket */
    async getBucket(vectorBucketName) {
      var _this2 = this;
      return _this2.handleOperation(async () => {
        return await vectorsApi.post(_this2.fetch, `${_this2.url}/GetVectorBucket`, { vectorBucketName }, { headers: _this2.headers });
      });
    }
    /** Lists vector buckets with optional filtering and pagination */
    async listBuckets(options = {}) {
      var _this3 = this;
      return _this3.handleOperation(async () => {
        return await vectorsApi.post(_this3.fetch, `${_this3.url}/ListVectorBuckets`, options, { headers: _this3.headers });
      });
    }
    /** Deletes a vector bucket (must be empty first) */
    async deleteBucket(vectorBucketName) {
      var _this4 = this;
      return _this4.handleOperation(async () => {
        return await vectorsApi.post(_this4.fetch, `${_this4.url}/DeleteVectorBucket`, { vectorBucketName }, { headers: _this4.headers }) || {};
      });
    }
  };
  var StorageVectorsClient = class extends VectorBucketApi {
    /**
    * @alpha
    *
    * Creates a StorageVectorsClient that can manage buckets, indexes, and vectors.
    *
    * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
    *
    * @category Vector Buckets
    * @param url - Base URL of the Storage Vectors REST API.
    * @param options.headers - Optional headers (for example `Authorization`) applied to every request.
    * @param options.fetch - Optional custom `fetch` implementation for non-browser runtimes.
    *
    * @example
    * ```typescript
    * const client = new StorageVectorsClient(url, options)
    * ```
    */
    constructor(url, options = {}) {
      super(url, options.headers || {}, options.fetch);
    }
    /**
    *
    * @alpha
    *
    * Access operations for a specific vector bucket
    * Returns a scoped client for index and vector operations within the bucket
    *
    * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
    *
    * @category Vector Buckets
    * @param vectorBucketName - Name of the vector bucket
    * @returns Bucket-scoped client with index and vector operations
    *
    * @example
    * ```typescript
    * const bucket = supabase.storage.vectors.from('embeddings-prod')
    * ```
    */
    from(vectorBucketName) {
      return new VectorBucketScope(this.url, this.headers, vectorBucketName, this.fetch);
    }
    /**
    *
    * @alpha
    *
    * Creates a new vector bucket
    * Vector buckets are containers for vector indexes and their data
    *
    * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
    *
    * @category Vector Buckets
    * @param vectorBucketName - Unique name for the vector bucket
    * @returns Promise with empty response on success or error
    *
    * @example
    * ```typescript
    * const { data, error } = await supabase
    *   .storage
    *   .vectors
    *   .createBucket('embeddings-prod')
    * ```
    */
    async createBucket(vectorBucketName) {
      var _superprop_getCreateBucket = () => super.createBucket, _this = this;
      return _superprop_getCreateBucket().call(_this, vectorBucketName);
    }
    /**
    *
    * @alpha
    *
    * Retrieves metadata for a specific vector bucket
    *
    * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
    *
    * @category Vector Buckets
    * @param vectorBucketName - Name of the vector bucket
    * @returns Promise with bucket metadata or error
    *
    * @example
    * ```typescript
    * const { data, error } = await supabase
    *   .storage
    *   .vectors
    *   .getBucket('embeddings-prod')
    *
    * console.log('Bucket created:', data?.vectorBucket.creationTime)
    * ```
    */
    async getBucket(vectorBucketName) {
      var _superprop_getGetBucket = () => super.getBucket, _this2 = this;
      return _superprop_getGetBucket().call(_this2, vectorBucketName);
    }
    /**
    *
    * @alpha
    *
    * Lists all vector buckets with optional filtering and pagination
    *
    * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
    *
    * @category Vector Buckets
    * @param options - Optional filters (prefix, maxResults, nextToken)
    * @returns Promise with list of buckets or error
    *
    * @example
    * ```typescript
    * const { data, error } = await supabase
    *   .storage
    *   .vectors
    *   .listBuckets({ prefix: 'embeddings-' })
    *
    * data?.vectorBuckets.forEach(bucket => {
    *   console.log(bucket.vectorBucketName)
    * })
    * ```
    */
    async listBuckets(options = {}) {
      var _superprop_getListBuckets = () => super.listBuckets, _this3 = this;
      return _superprop_getListBuckets().call(_this3, options);
    }
    /**
    *
    * @alpha
    *
    * Deletes a vector bucket (bucket must be empty)
    * All indexes must be deleted before deleting the bucket
    *
    * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
    *
    * @category Vector Buckets
    * @param vectorBucketName - Name of the vector bucket to delete
    * @returns Promise with empty response on success or error
    *
    * @example
    * ```typescript
    * const { data, error } = await supabase
    *   .storage
    *   .vectors
    *   .deleteBucket('embeddings-old')
    * ```
    */
    async deleteBucket(vectorBucketName) {
      var _superprop_getDeleteBucket = () => super.deleteBucket, _this4 = this;
      return _superprop_getDeleteBucket().call(_this4, vectorBucketName);
    }
  };
  var VectorBucketScope = class extends VectorIndexApi {
    /**
    * @alpha
    *
    * Creates a helper that automatically scopes all index operations to the provided bucket.
    *
    * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
    *
    * @category Vector Buckets
    * @example
    * ```typescript
    * const bucket = supabase.storage.vectors.from('embeddings-prod')
    * ```
    */
    constructor(url, headers, vectorBucketName, fetch$1) {
      super(url, headers, fetch$1);
      this.vectorBucketName = vectorBucketName;
    }
    /**
    *
    * @alpha
    *
    * Creates a new vector index in this bucket
    * Convenience method that automatically includes the bucket name
    *
    * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
    *
    * @category Vector Buckets
    * @param options - Index configuration (vectorBucketName is automatically set)
    * @returns Promise with empty response on success or error
    *
    * @example
    * ```typescript
    * const bucket = supabase.storage.vectors.from('embeddings-prod')
    * await bucket.createIndex({
    *   indexName: 'documents-openai',
    *   dataType: 'float32',
    *   dimension: 1536,
    *   distanceMetric: 'cosine',
    *   metadataConfiguration: {
    *     nonFilterableMetadataKeys: ['raw_text']
    *   }
    * })
    * ```
    */
    async createIndex(options) {
      var _superprop_getCreateIndex = () => super.createIndex, _this5 = this;
      return _superprop_getCreateIndex().call(_this5, _objectSpread22(_objectSpread22({}, options), {}, { vectorBucketName: _this5.vectorBucketName }));
    }
    /**
    *
    * @alpha
    *
    * Lists indexes in this bucket
    * Convenience method that automatically includes the bucket name
    *
    * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
    *
    * @category Vector Buckets
    * @param options - Listing options (vectorBucketName is automatically set)
    * @returns Promise with response containing indexes array and pagination token or error
    *
    * @example
    * ```typescript
    * const bucket = supabase.storage.vectors.from('embeddings-prod')
    * const { data } = await bucket.listIndexes({ prefix: 'documents-' })
    * ```
    */
    async listIndexes(options = {}) {
      var _superprop_getListIndexes = () => super.listIndexes, _this6 = this;
      return _superprop_getListIndexes().call(_this6, _objectSpread22(_objectSpread22({}, options), {}, { vectorBucketName: _this6.vectorBucketName }));
    }
    /**
    *
    * @alpha
    *
    * Retrieves metadata for a specific index in this bucket
    * Convenience method that automatically includes the bucket name
    *
    * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
    *
    * @category Vector Buckets
    * @param indexName - Name of the index to retrieve
    * @returns Promise with index metadata or error
    *
    * @example
    * ```typescript
    * const bucket = supabase.storage.vectors.from('embeddings-prod')
    * const { data } = await bucket.getIndex('documents-openai')
    * console.log('Dimension:', data?.index.dimension)
    * ```
    */
    async getIndex(indexName) {
      var _superprop_getGetIndex = () => super.getIndex, _this7 = this;
      return _superprop_getGetIndex().call(_this7, _this7.vectorBucketName, indexName);
    }
    /**
    *
    * @alpha
    *
    * Deletes an index from this bucket
    * Convenience method that automatically includes the bucket name
    *
    * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
    *
    * @category Vector Buckets
    * @param indexName - Name of the index to delete
    * @returns Promise with empty response on success or error
    *
    * @example
    * ```typescript
    * const bucket = supabase.storage.vectors.from('embeddings-prod')
    * await bucket.deleteIndex('old-index')
    * ```
    */
    async deleteIndex(indexName) {
      var _superprop_getDeleteIndex = () => super.deleteIndex, _this8 = this;
      return _superprop_getDeleteIndex().call(_this8, _this8.vectorBucketName, indexName);
    }
    /**
    *
    * @alpha
    *
    * Access operations for a specific index within this bucket
    * Returns a scoped client for vector data operations
    *
    * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
    *
    * @category Vector Buckets
    * @param indexName - Name of the index
    * @returns Index-scoped client with vector data operations
    *
    * @example
    * ```typescript
    * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
    *
    * // Insert vectors
    * await index.putVectors({
    *   vectors: [
    *     { key: 'doc-1', data: { float32: [...] }, metadata: { title: 'Intro' } }
    *   ]
    * })
    *
    * // Query similar vectors
    * const { data } = await index.queryVectors({
    *   queryVector: { float32: [...] },
    *   topK: 5
    * })
    * ```
    */
    index(indexName) {
      return new VectorIndexScope(this.url, this.headers, this.vectorBucketName, indexName, this.fetch);
    }
  };
  var VectorIndexScope = class extends VectorDataApi {
    /**
    *
    * @alpha
    *
    * Creates a helper that automatically scopes all vector operations to the provided bucket/index names.
    *
    * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
    *
    * @category Vector Buckets
    * @example
    * ```typescript
    * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
    * ```
    */
    constructor(url, headers, vectorBucketName, indexName, fetch$1) {
      super(url, headers, fetch$1);
      this.vectorBucketName = vectorBucketName;
      this.indexName = indexName;
    }
    /**
    *
    * @alpha
    *
    * Inserts or updates vectors in this index
    * Convenience method that automatically includes bucket and index names
    *
    * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
    *
    * @category Vector Buckets
    * @param options - Vector insertion options (bucket and index names automatically set)
    * @returns Promise with empty response on success or error
    *
    * @example
    * ```typescript
    * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
    * await index.putVectors({
    *   vectors: [
    *     {
    *       key: 'doc-1',
    *       data: { float32: [0.1, 0.2, ...] },
    *       metadata: { title: 'Introduction', page: 1 }
    *     }
    *   ]
    * })
    * ```
    */
    async putVectors(options) {
      var _superprop_getPutVectors = () => super.putVectors, _this9 = this;
      return _superprop_getPutVectors().call(_this9, _objectSpread22(_objectSpread22({}, options), {}, {
        vectorBucketName: _this9.vectorBucketName,
        indexName: _this9.indexName
      }));
    }
    /**
    *
    * @alpha
    *
    * Retrieves vectors by keys from this index
    * Convenience method that automatically includes bucket and index names
    *
    * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
    *
    * @category Vector Buckets
    * @param options - Vector retrieval options (bucket and index names automatically set)
    * @returns Promise with response containing vectors array or error
    *
    * @example
    * ```typescript
    * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
    * const { data } = await index.getVectors({
    *   keys: ['doc-1', 'doc-2'],
    *   returnMetadata: true
    * })
    * ```
    */
    async getVectors(options) {
      var _superprop_getGetVectors = () => super.getVectors, _this10 = this;
      return _superprop_getGetVectors().call(_this10, _objectSpread22(_objectSpread22({}, options), {}, {
        vectorBucketName: _this10.vectorBucketName,
        indexName: _this10.indexName
      }));
    }
    /**
    *
    * @alpha
    *
    * Lists vectors in this index with pagination
    * Convenience method that automatically includes bucket and index names
    *
    * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
    *
    * @category Vector Buckets
    * @param options - Listing options (bucket and index names automatically set)
    * @returns Promise with response containing vectors array and pagination token or error
    *
    * @example
    * ```typescript
    * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
    * const { data } = await index.listVectors({
    *   maxResults: 500,
    *   returnMetadata: true
    * })
    * ```
    */
    async listVectors(options = {}) {
      var _superprop_getListVectors = () => super.listVectors, _this11 = this;
      return _superprop_getListVectors().call(_this11, _objectSpread22(_objectSpread22({}, options), {}, {
        vectorBucketName: _this11.vectorBucketName,
        indexName: _this11.indexName
      }));
    }
    /**
    *
    * @alpha
    *
    * Queries for similar vectors in this index
    * Convenience method that automatically includes bucket and index names
    *
    * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
    *
    * @category Vector Buckets
    * @param options - Query options (bucket and index names automatically set)
    * @returns Promise with response containing matches array of similar vectors ordered by distance or error
    *
    * @example
    * ```typescript
    * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
    * const { data } = await index.queryVectors({
    *   queryVector: { float32: [0.1, 0.2, ...] },
    *   topK: 5,
    *   filter: { category: 'technical' },
    *   returnDistance: true,
    *   returnMetadata: true
    * })
    * ```
    */
    async queryVectors(options) {
      var _superprop_getQueryVectors = () => super.queryVectors, _this12 = this;
      return _superprop_getQueryVectors().call(_this12, _objectSpread22(_objectSpread22({}, options), {}, {
        vectorBucketName: _this12.vectorBucketName,
        indexName: _this12.indexName
      }));
    }
    /**
    *
    * @alpha
    *
    * Deletes vectors by keys from this index
    * Convenience method that automatically includes bucket and index names
    *
    * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
    *
    * @category Vector Buckets
    * @param options - Deletion options (bucket and index names automatically set)
    * @returns Promise with empty response on success or error
    *
    * @example
    * ```typescript
    * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
    * await index.deleteVectors({
    *   keys: ['doc-1', 'doc-2', 'doc-3']
    * })
    * ```
    */
    async deleteVectors(options) {
      var _superprop_getDeleteVectors = () => super.deleteVectors, _this13 = this;
      return _superprop_getDeleteVectors().call(_this13, _objectSpread22(_objectSpread22({}, options), {}, {
        vectorBucketName: _this13.vectorBucketName,
        indexName: _this13.indexName
      }));
    }
  };
  var StorageClient = class extends StorageBucketApi {
    /**
    * Creates a client for Storage buckets, files, analytics, and vectors.
    *
    * @category File Buckets
    * @example
    * ```ts
    * import { StorageClient } from '@supabase/storage-js'
    *
    * const storage = new StorageClient('https://xyzcompany.supabase.co/storage/v1', {
    *   apikey: 'public-anon-key',
    * })
    * const avatars = storage.from('avatars')
    * ```
    */
    constructor(url, headers = {}, fetch$1, opts) {
      super(url, headers, fetch$1, opts);
    }
    /**
    * Perform file operation in a bucket.
    *
    * @category File Buckets
    * @param id The bucket id to operate on.
    *
    * @example
    * ```typescript
    * const avatars = supabase.storage.from('avatars')
    * ```
    */
    from(id) {
      return new StorageFileApi(this.url, this.headers, id, this.fetch);
    }
    /**
    *
    * @alpha
    *
    * Access vector storage operations.
    *
    * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
    *
    * @category Vector Buckets
    * @returns A StorageVectorsClient instance configured with the current storage settings.
    */
    get vectors() {
      return new StorageVectorsClient(this.url + "/vector", {
        headers: this.headers,
        fetch: this.fetch
      });
    }
    /**
    *
    * @alpha
    *
    * Access analytics storage operations using Iceberg tables.
    *
    * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
    *
    * @category Analytics Buckets
    * @returns A StorageAnalyticsClient instance configured with the current storage settings.
    */
    get analytics() {
      return new StorageAnalyticsClient(this.url + "/iceberg", this.headers, this.fetch);
    }
  };

  // node_modules/@supabase/auth-js/dist/module/lib/version.js
  var version3 = "2.98.0";

  // node_modules/@supabase/auth-js/dist/module/lib/constants.js
  var AUTO_REFRESH_TICK_DURATION_MS = 30 * 1e3;
  var AUTO_REFRESH_TICK_THRESHOLD = 3;
  var EXPIRY_MARGIN_MS = AUTO_REFRESH_TICK_THRESHOLD * AUTO_REFRESH_TICK_DURATION_MS;
  var GOTRUE_URL = "http://localhost:9999";
  var STORAGE_KEY = "supabase.auth.token";
  var DEFAULT_HEADERS2 = { "X-Client-Info": `gotrue-js/${version3}` };
  var API_VERSION_HEADER_NAME = "X-Supabase-Api-Version";
  var API_VERSIONS = {
    "2024-01-01": {
      timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
      name: "2024-01-01"
    }
  };
  var BASE64URL_REGEX = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i;
  var JWKS_TTL = 10 * 60 * 1e3;

  // node_modules/@supabase/auth-js/dist/module/lib/errors.js
  var AuthError = class extends Error {
    constructor(message, status, code) {
      super(message);
      this.__isAuthError = true;
      this.name = "AuthError";
      this.status = status;
      this.code = code;
    }
  };
  function isAuthError(error) {
    return typeof error === "object" && error !== null && "__isAuthError" in error;
  }
  var AuthApiError = class extends AuthError {
    constructor(message, status, code) {
      super(message, status, code);
      this.name = "AuthApiError";
      this.status = status;
      this.code = code;
    }
  };
  function isAuthApiError(error) {
    return isAuthError(error) && error.name === "AuthApiError";
  }
  var AuthUnknownError = class extends AuthError {
    constructor(message, originalError) {
      super(message);
      this.name = "AuthUnknownError";
      this.originalError = originalError;
    }
  };
  var CustomAuthError = class extends AuthError {
    constructor(message, name, status, code) {
      super(message, status, code);
      this.name = name;
      this.status = status;
    }
  };
  var AuthSessionMissingError = class extends CustomAuthError {
    constructor() {
      super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
    }
  };
  function isAuthSessionMissingError(error) {
    return isAuthError(error) && error.name === "AuthSessionMissingError";
  }
  var AuthInvalidTokenResponseError = class extends CustomAuthError {
    constructor() {
      super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0);
    }
  };
  var AuthInvalidCredentialsError = class extends CustomAuthError {
    constructor(message) {
      super(message, "AuthInvalidCredentialsError", 400, void 0);
    }
  };
  var AuthImplicitGrantRedirectError = class extends CustomAuthError {
    constructor(message, details = null) {
      super(message, "AuthImplicitGrantRedirectError", 500, void 0);
      this.details = null;
      this.details = details;
    }
    toJSON() {
      return {
        name: this.name,
        message: this.message,
        status: this.status,
        details: this.details
      };
    }
  };
  function isAuthImplicitGrantRedirectError(error) {
    return isAuthError(error) && error.name === "AuthImplicitGrantRedirectError";
  }
  var AuthPKCEGrantCodeExchangeError = class extends CustomAuthError {
    constructor(message, details = null) {
      super(message, "AuthPKCEGrantCodeExchangeError", 500, void 0);
      this.details = null;
      this.details = details;
    }
    toJSON() {
      return {
        name: this.name,
        message: this.message,
        status: this.status,
        details: this.details
      };
    }
  };
  var AuthPKCECodeVerifierMissingError = class extends CustomAuthError {
    constructor() {
      super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.", "AuthPKCECodeVerifierMissingError", 400, "pkce_code_verifier_not_found");
    }
  };
  var AuthRetryableFetchError = class extends CustomAuthError {
    constructor(message, status) {
      super(message, "AuthRetryableFetchError", status, void 0);
    }
  };
  function isAuthRetryableFetchError(error) {
    return isAuthError(error) && error.name === "AuthRetryableFetchError";
  }
  var AuthWeakPasswordError = class extends CustomAuthError {
    constructor(message, status, reasons) {
      super(message, "AuthWeakPasswordError", status, "weak_password");
      this.reasons = reasons;
    }
  };
  var AuthInvalidJwtError = class extends CustomAuthError {
    constructor(message) {
      super(message, "AuthInvalidJwtError", 400, "invalid_jwt");
    }
  };

  // node_modules/@supabase/auth-js/dist/module/lib/base64url.js
  var TO_BASE64URL = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split("");
  var IGNORE_BASE64URL = " 	\n\r=".split("");
  var FROM_BASE64URL = (() => {
    const charMap = new Array(128);
    for (let i = 0; i < charMap.length; i += 1) {
      charMap[i] = -1;
    }
    for (let i = 0; i < IGNORE_BASE64URL.length; i += 1) {
      charMap[IGNORE_BASE64URL[i].charCodeAt(0)] = -2;
    }
    for (let i = 0; i < TO_BASE64URL.length; i += 1) {
      charMap[TO_BASE64URL[i].charCodeAt(0)] = i;
    }
    return charMap;
  })();
  function byteToBase64URL(byte, state, emit) {
    if (byte !== null) {
      state.queue = state.queue << 8 | byte;
      state.queuedBits += 8;
      while (state.queuedBits >= 6) {
        const pos = state.queue >> state.queuedBits - 6 & 63;
        emit(TO_BASE64URL[pos]);
        state.queuedBits -= 6;
      }
    } else if (state.queuedBits > 0) {
      state.queue = state.queue << 6 - state.queuedBits;
      state.queuedBits = 6;
      while (state.queuedBits >= 6) {
        const pos = state.queue >> state.queuedBits - 6 & 63;
        emit(TO_BASE64URL[pos]);
        state.queuedBits -= 6;
      }
    }
  }
  function byteFromBase64URL(charCode, state, emit) {
    const bits = FROM_BASE64URL[charCode];
    if (bits > -1) {
      state.queue = state.queue << 6 | bits;
      state.queuedBits += 6;
      while (state.queuedBits >= 8) {
        emit(state.queue >> state.queuedBits - 8 & 255);
        state.queuedBits -= 8;
      }
    } else if (bits === -2) {
      return;
    } else {
      throw new Error(`Invalid Base64-URL character "${String.fromCharCode(charCode)}"`);
    }
  }
  function stringFromBase64URL(str) {
    const conv = [];
    const utf8Emit = (codepoint) => {
      conv.push(String.fromCodePoint(codepoint));
    };
    const utf8State = {
      utf8seq: 0,
      codepoint: 0
    };
    const b64State = { queue: 0, queuedBits: 0 };
    const byteEmit = (byte) => {
      stringFromUTF8(byte, utf8State, utf8Emit);
    };
    for (let i = 0; i < str.length; i += 1) {
      byteFromBase64URL(str.charCodeAt(i), b64State, byteEmit);
    }
    return conv.join("");
  }
  function codepointToUTF8(codepoint, emit) {
    if (codepoint <= 127) {
      emit(codepoint);
      return;
    } else if (codepoint <= 2047) {
      emit(192 | codepoint >> 6);
      emit(128 | codepoint & 63);
      return;
    } else if (codepoint <= 65535) {
      emit(224 | codepoint >> 12);
      emit(128 | codepoint >> 6 & 63);
      emit(128 | codepoint & 63);
      return;
    } else if (codepoint <= 1114111) {
      emit(240 | codepoint >> 18);
      emit(128 | codepoint >> 12 & 63);
      emit(128 | codepoint >> 6 & 63);
      emit(128 | codepoint & 63);
      return;
    }
    throw new Error(`Unrecognized Unicode codepoint: ${codepoint.toString(16)}`);
  }
  function stringToUTF8(str, emit) {
    for (let i = 0; i < str.length; i += 1) {
      let codepoint = str.charCodeAt(i);
      if (codepoint > 55295 && codepoint <= 56319) {
        const highSurrogate = (codepoint - 55296) * 1024 & 65535;
        const lowSurrogate = str.charCodeAt(i + 1) - 56320 & 65535;
        codepoint = (lowSurrogate | highSurrogate) + 65536;
        i += 1;
      }
      codepointToUTF8(codepoint, emit);
    }
  }
  function stringFromUTF8(byte, state, emit) {
    if (state.utf8seq === 0) {
      if (byte <= 127) {
        emit(byte);
        return;
      }
      for (let leadingBit = 1; leadingBit < 6; leadingBit += 1) {
        if ((byte >> 7 - leadingBit & 1) === 0) {
          state.utf8seq = leadingBit;
          break;
        }
      }
      if (state.utf8seq === 2) {
        state.codepoint = byte & 31;
      } else if (state.utf8seq === 3) {
        state.codepoint = byte & 15;
      } else if (state.utf8seq === 4) {
        state.codepoint = byte & 7;
      } else {
        throw new Error("Invalid UTF-8 sequence");
      }
      state.utf8seq -= 1;
    } else if (state.utf8seq > 0) {
      if (byte <= 127) {
        throw new Error("Invalid UTF-8 sequence");
      }
      state.codepoint = state.codepoint << 6 | byte & 63;
      state.utf8seq -= 1;
      if (state.utf8seq === 0) {
        emit(state.codepoint);
      }
    }
  }
  function base64UrlToUint8Array(str) {
    const result = [];
    const state = { queue: 0, queuedBits: 0 };
    const onByte = (byte) => {
      result.push(byte);
    };
    for (let i = 0; i < str.length; i += 1) {
      byteFromBase64URL(str.charCodeAt(i), state, onByte);
    }
    return new Uint8Array(result);
  }
  function stringToUint8Array(str) {
    const result = [];
    stringToUTF8(str, (byte) => result.push(byte));
    return new Uint8Array(result);
  }
  function bytesToBase64URL(bytes) {
    const result = [];
    const state = { queue: 0, queuedBits: 0 };
    const onChar = (char) => {
      result.push(char);
    };
    bytes.forEach((byte) => byteToBase64URL(byte, state, onChar));
    byteToBase64URL(null, state, onChar);
    return result.join("");
  }

  // node_modules/@supabase/auth-js/dist/module/lib/helpers.js
  function expiresAt(expiresIn) {
    const timeNow = Math.round(Date.now() / 1e3);
    return timeNow + expiresIn;
  }
  function generateCallbackId() {
    return /* @__PURE__ */ Symbol("auth-callback");
  }
  var isBrowser = () => typeof window !== "undefined" && typeof document !== "undefined";
  var localStorageWriteTests = {
    tested: false,
    writable: false
  };
  var supportsLocalStorage = () => {
    if (!isBrowser()) {
      return false;
    }
    try {
      if (typeof globalThis.localStorage !== "object") {
        return false;
      }
    } catch (e) {
      return false;
    }
    if (localStorageWriteTests.tested) {
      return localStorageWriteTests.writable;
    }
    const randomKey = `lswt-${Math.random()}${Math.random()}`;
    try {
      globalThis.localStorage.setItem(randomKey, randomKey);
      globalThis.localStorage.removeItem(randomKey);
      localStorageWriteTests.tested = true;
      localStorageWriteTests.writable = true;
    } catch (e) {
      localStorageWriteTests.tested = true;
      localStorageWriteTests.writable = false;
    }
    return localStorageWriteTests.writable;
  };
  function parseParametersFromURL(href) {
    const result = {};
    const url = new URL(href);
    if (url.hash && url.hash[0] === "#") {
      try {
        const hashSearchParams = new URLSearchParams(url.hash.substring(1));
        hashSearchParams.forEach((value, key) => {
          result[key] = value;
        });
      } catch (e) {
      }
    }
    url.searchParams.forEach((value, key) => {
      result[key] = value;
    });
    return result;
  }
  var resolveFetch3 = (customFetch) => {
    if (customFetch) {
      return (...args) => customFetch(...args);
    }
    return (...args) => fetch(...args);
  };
  var looksLikeFetchResponse = (maybeResponse) => {
    return typeof maybeResponse === "object" && maybeResponse !== null && "status" in maybeResponse && "ok" in maybeResponse && "json" in maybeResponse && typeof maybeResponse.json === "function";
  };
  var setItemAsync = async (storage, key, data) => {
    await storage.setItem(key, JSON.stringify(data));
  };
  var getItemAsync = async (storage, key) => {
    const value = await storage.getItem(key);
    if (!value) {
      return null;
    }
    try {
      return JSON.parse(value);
    } catch (_a) {
      return value;
    }
  };
  var removeItemAsync = async (storage, key) => {
    await storage.removeItem(key);
  };
  var Deferred = class _Deferred {
    constructor() {
      ;
      this.promise = new _Deferred.promiseConstructor((res, rej) => {
        ;
        this.resolve = res;
        this.reject = rej;
      });
    }
  };
  Deferred.promiseConstructor = Promise;
  function decodeJWT(token) {
    const parts = token.split(".");
    if (parts.length !== 3) {
      throw new AuthInvalidJwtError("Invalid JWT structure");
    }
    for (let i = 0; i < parts.length; i++) {
      if (!BASE64URL_REGEX.test(parts[i])) {
        throw new AuthInvalidJwtError("JWT not in base64url format");
      }
    }
    const data = {
      // using base64url lib
      header: JSON.parse(stringFromBase64URL(parts[0])),
      payload: JSON.parse(stringFromBase64URL(parts[1])),
      signature: base64UrlToUint8Array(parts[2]),
      raw: {
        header: parts[0],
        payload: parts[1]
      }
    };
    return data;
  }
  async function sleep(time) {
    return await new Promise((accept) => {
      setTimeout(() => accept(null), time);
    });
  }
  function retryable(fn, isRetryable) {
    const promise = new Promise((accept, reject) => {
      ;
      (async () => {
        for (let attempt = 0; attempt < Infinity; attempt++) {
          try {
            const result = await fn(attempt);
            if (!isRetryable(attempt, null, result)) {
              accept(result);
              return;
            }
          } catch (e) {
            if (!isRetryable(attempt, e)) {
              reject(e);
              return;
            }
          }
        }
      })();
    });
    return promise;
  }
  function dec2hex(dec) {
    return ("0" + dec.toString(16)).substr(-2);
  }
  function generatePKCEVerifier() {
    const verifierLength = 56;
    const array = new Uint32Array(verifierLength);
    if (typeof crypto === "undefined") {
      const charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
      const charSetLen = charSet.length;
      let verifier = "";
      for (let i = 0; i < verifierLength; i++) {
        verifier += charSet.charAt(Math.floor(Math.random() * charSetLen));
      }
      return verifier;
    }
    crypto.getRandomValues(array);
    return Array.from(array, dec2hex).join("");
  }
  async function sha256(randomString) {
    const encoder = new TextEncoder();
    const encodedData = encoder.encode(randomString);
    const hash = await crypto.subtle.digest("SHA-256", encodedData);
    const bytes = new Uint8Array(hash);
    return Array.from(bytes).map((c) => String.fromCharCode(c)).join("");
  }
  async function generatePKCEChallenge(verifier) {
    const hasCryptoSupport = typeof crypto !== "undefined" && typeof crypto.subtle !== "undefined" && typeof TextEncoder !== "undefined";
    if (!hasCryptoSupport) {
      console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.");
      return verifier;
    }
    const hashed = await sha256(verifier);
    return btoa(hashed).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }
  async function getCodeChallengeAndMethod(storage, storageKey, isPasswordRecovery = false) {
    const codeVerifier = generatePKCEVerifier();
    let storedCodeVerifier = codeVerifier;
    if (isPasswordRecovery) {
      storedCodeVerifier += "/PASSWORD_RECOVERY";
    }
    await setItemAsync(storage, `${storageKey}-code-verifier`, storedCodeVerifier);
    const codeChallenge = await generatePKCEChallenge(codeVerifier);
    const codeChallengeMethod = codeVerifier === codeChallenge ? "plain" : "s256";
    return [codeChallenge, codeChallengeMethod];
  }
  var API_VERSION_REGEX = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
  function parseResponseAPIVersion(response) {
    const apiVersion = response.headers.get(API_VERSION_HEADER_NAME);
    if (!apiVersion) {
      return null;
    }
    if (!apiVersion.match(API_VERSION_REGEX)) {
      return null;
    }
    try {
      const date = /* @__PURE__ */ new Date(`${apiVersion}T00:00:00.0Z`);
      return date;
    } catch (e) {
      return null;
    }
  }
  function validateExp(exp) {
    if (!exp) {
      throw new Error("Missing exp claim");
    }
    const timeNow = Math.floor(Date.now() / 1e3);
    if (exp <= timeNow) {
      throw new Error("JWT has expired");
    }
  }
  function getAlgorithm(alg) {
    switch (alg) {
      case "RS256":
        return {
          name: "RSASSA-PKCS1-v1_5",
          hash: { name: "SHA-256" }
        };
      case "ES256":
        return {
          name: "ECDSA",
          namedCurve: "P-256",
          hash: { name: "SHA-256" }
        };
      default:
        throw new Error("Invalid alg claim");
    }
  }
  var UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
  function validateUUID(str) {
    if (!UUID_REGEX.test(str)) {
      throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not");
    }
  }
  function userNotAvailableProxy() {
    const proxyTarget = {};
    return new Proxy(proxyTarget, {
      get: (target, prop) => {
        if (prop === "__isUserNotAvailableProxy") {
          return true;
        }
        if (typeof prop === "symbol") {
          const sProp = prop.toString();
          if (sProp === "Symbol(Symbol.toPrimitive)" || sProp === "Symbol(Symbol.toStringTag)" || sProp === "Symbol(util.inspect.custom)") {
            return void 0;
          }
        }
        throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${prop}" property of the session object is not supported. Please use getUser() instead.`);
      },
      set: (_target, prop) => {
        throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${prop}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
      },
      deleteProperty: (_target, prop) => {
        throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${prop}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
      }
    });
  }
  function insecureUserWarningProxy(user, suppressWarningRef) {
    return new Proxy(user, {
      get: (target, prop, receiver) => {
        if (prop === "__isInsecureUserWarningProxy") {
          return true;
        }
        if (typeof prop === "symbol") {
          const sProp = prop.toString();
          if (sProp === "Symbol(Symbol.toPrimitive)" || sProp === "Symbol(Symbol.toStringTag)" || sProp === "Symbol(util.inspect.custom)" || sProp === "Symbol(nodejs.util.inspect.custom)") {
            return Reflect.get(target, prop, receiver);
          }
        }
        if (!suppressWarningRef.value && typeof prop === "string") {
          console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.");
          suppressWarningRef.value = true;
        }
        return Reflect.get(target, prop, receiver);
      }
    });
  }
  function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  // node_modules/@supabase/auth-js/dist/module/lib/fetch.js
  var _getErrorMessage2 = (err) => err.msg || err.message || err.error_description || err.error || JSON.stringify(err);
  var NETWORK_ERROR_CODES = [502, 503, 504];
  async function handleError2(error) {
    var _a;
    if (!looksLikeFetchResponse(error)) {
      throw new AuthRetryableFetchError(_getErrorMessage2(error), 0);
    }
    if (NETWORK_ERROR_CODES.includes(error.status)) {
      throw new AuthRetryableFetchError(_getErrorMessage2(error), error.status);
    }
    let data;
    try {
      data = await error.json();
    } catch (e) {
      throw new AuthUnknownError(_getErrorMessage2(e), e);
    }
    let errorCode = void 0;
    const responseAPIVersion = parseResponseAPIVersion(error);
    if (responseAPIVersion && responseAPIVersion.getTime() >= API_VERSIONS["2024-01-01"].timestamp && typeof data === "object" && data && typeof data.code === "string") {
      errorCode = data.code;
    } else if (typeof data === "object" && data && typeof data.error_code === "string") {
      errorCode = data.error_code;
    }
    if (!errorCode) {
      if (typeof data === "object" && data && typeof data.weak_password === "object" && data.weak_password && Array.isArray(data.weak_password.reasons) && data.weak_password.reasons.length && data.weak_password.reasons.reduce((a, i) => a && typeof i === "string", true)) {
        throw new AuthWeakPasswordError(_getErrorMessage2(data), error.status, data.weak_password.reasons);
      }
    } else if (errorCode === "weak_password") {
      throw new AuthWeakPasswordError(_getErrorMessage2(data), error.status, ((_a = data.weak_password) === null || _a === void 0 ? void 0 : _a.reasons) || []);
    } else if (errorCode === "session_not_found") {
      throw new AuthSessionMissingError();
    }
    throw new AuthApiError(_getErrorMessage2(data), error.status || 500, errorCode);
  }
  var _getRequestParams2 = (method, options, parameters, body) => {
    const params = { method, headers: (options === null || options === void 0 ? void 0 : options.headers) || {} };
    if (method === "GET") {
      return params;
    }
    params.headers = Object.assign({ "Content-Type": "application/json;charset=UTF-8" }, options === null || options === void 0 ? void 0 : options.headers);
    params.body = JSON.stringify(body);
    return Object.assign(Object.assign({}, params), parameters);
  };
  async function _request(fetcher, method, url, options) {
    var _a;
    const headers = Object.assign({}, options === null || options === void 0 ? void 0 : options.headers);
    if (!headers[API_VERSION_HEADER_NAME]) {
      headers[API_VERSION_HEADER_NAME] = API_VERSIONS["2024-01-01"].name;
    }
    if (options === null || options === void 0 ? void 0 : options.jwt) {
      headers["Authorization"] = `Bearer ${options.jwt}`;
    }
    const qs = (_a = options === null || options === void 0 ? void 0 : options.query) !== null && _a !== void 0 ? _a : {};
    if (options === null || options === void 0 ? void 0 : options.redirectTo) {
      qs["redirect_to"] = options.redirectTo;
    }
    const queryString = Object.keys(qs).length ? "?" + new URLSearchParams(qs).toString() : "";
    const data = await _handleRequest2(fetcher, method, url + queryString, {
      headers,
      noResolveJson: options === null || options === void 0 ? void 0 : options.noResolveJson
    }, {}, options === null || options === void 0 ? void 0 : options.body);
    return (options === null || options === void 0 ? void 0 : options.xform) ? options === null || options === void 0 ? void 0 : options.xform(data) : { data: Object.assign({}, data), error: null };
  }
  async function _handleRequest2(fetcher, method, url, options, parameters, body) {
    const requestParams = _getRequestParams2(method, options, parameters, body);
    let result;
    try {
      result = await fetcher(url, Object.assign({}, requestParams));
    } catch (e) {
      console.error(e);
      throw new AuthRetryableFetchError(_getErrorMessage2(e), 0);
    }
    if (!result.ok) {
      await handleError2(result);
    }
    if (options === null || options === void 0 ? void 0 : options.noResolveJson) {
      return result;
    }
    try {
      return await result.json();
    } catch (e) {
      await handleError2(e);
    }
  }
  function _sessionResponse(data) {
    var _a;
    let session = null;
    if (hasSession(data)) {
      session = Object.assign({}, data);
      if (!data.expires_at) {
        session.expires_at = expiresAt(data.expires_in);
      }
    }
    const user = (_a = data.user) !== null && _a !== void 0 ? _a : data;
    return { data: { session, user }, error: null };
  }
  function _sessionResponsePassword(data) {
    const response = _sessionResponse(data);
    if (!response.error && data.weak_password && typeof data.weak_password === "object" && Array.isArray(data.weak_password.reasons) && data.weak_password.reasons.length && data.weak_password.message && typeof data.weak_password.message === "string" && data.weak_password.reasons.reduce((a, i) => a && typeof i === "string", true)) {
      response.data.weak_password = data.weak_password;
    }
    return response;
  }
  function _userResponse(data) {
    var _a;
    const user = (_a = data.user) !== null && _a !== void 0 ? _a : data;
    return { data: { user }, error: null };
  }
  function _ssoResponse(data) {
    return { data, error: null };
  }
  function _generateLinkResponse(data) {
    const { action_link, email_otp, hashed_token, redirect_to, verification_type } = data, rest = __rest(data, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]);
    const properties = {
      action_link,
      email_otp,
      hashed_token,
      redirect_to,
      verification_type
    };
    const user = Object.assign({}, rest);
    return {
      data: {
        properties,
        user
      },
      error: null
    };
  }
  function _noResolveJsonResponse(data) {
    return data;
  }
  function hasSession(data) {
    return data.access_token && data.refresh_token && data.expires_in;
  }

  // node_modules/@supabase/auth-js/dist/module/lib/types.js
  var SIGN_OUT_SCOPES = ["global", "local", "others"];

  // node_modules/@supabase/auth-js/dist/module/GoTrueAdminApi.js
  var GoTrueAdminApi = class {
    /**
     * Creates an admin API client that can be used to manage users and OAuth clients.
     *
     * @example
     * ```ts
     * import { GoTrueAdminApi } from '@supabase/auth-js'
     *
     * const admin = new GoTrueAdminApi({
     *   url: 'https://xyzcompany.supabase.co/auth/v1',
     *   headers: { Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}` },
     * })
     * ```
     */
    constructor({ url = "", headers = {}, fetch: fetch2 }) {
      this.url = url;
      this.headers = headers;
      this.fetch = resolveFetch3(fetch2);
      this.mfa = {
        listFactors: this._listFactors.bind(this),
        deleteFactor: this._deleteFactor.bind(this)
      };
      this.oauth = {
        listClients: this._listOAuthClients.bind(this),
        createClient: this._createOAuthClient.bind(this),
        getClient: this._getOAuthClient.bind(this),
        updateClient: this._updateOAuthClient.bind(this),
        deleteClient: this._deleteOAuthClient.bind(this),
        regenerateClientSecret: this._regenerateOAuthClientSecret.bind(this)
      };
    }
    /**
     * Removes a logged-in session.
     * @param jwt A valid, logged-in JWT.
     * @param scope The logout sope.
     */
    async signOut(jwt, scope = SIGN_OUT_SCOPES[0]) {
      if (SIGN_OUT_SCOPES.indexOf(scope) < 0) {
        throw new Error(`@supabase/auth-js: Parameter scope must be one of ${SIGN_OUT_SCOPES.join(", ")}`);
      }
      try {
        await _request(this.fetch, "POST", `${this.url}/logout?scope=${scope}`, {
          headers: this.headers,
          jwt,
          noResolveJson: true
        });
        return { data: null, error: null };
      } catch (error) {
        if (isAuthError(error)) {
          return { data: null, error };
        }
        throw error;
      }
    }
    /**
     * Sends an invite link to an email address.
     * @param email The email address of the user.
     * @param options Additional options to be included when inviting.
     */
    async inviteUserByEmail(email, options = {}) {
      try {
        return await _request(this.fetch, "POST", `${this.url}/invite`, {
          body: { email, data: options.data },
          headers: this.headers,
          redirectTo: options.redirectTo,
          xform: _userResponse
        });
      } catch (error) {
        if (isAuthError(error)) {
          return { data: { user: null }, error };
        }
        throw error;
      }
    }
    /**
     * Generates email links and OTPs to be sent via a custom email provider.
     * @param email The user's email.
     * @param options.password User password. For signup only.
     * @param options.data Optional user metadata. For signup only.
     * @param options.redirectTo The redirect url which should be appended to the generated link
     */
    async generateLink(params) {
      try {
        const { options } = params, rest = __rest(params, ["options"]);
        const body = Object.assign(Object.assign({}, rest), options);
        if ("newEmail" in rest) {
          body.new_email = rest === null || rest === void 0 ? void 0 : rest.newEmail;
          delete body["newEmail"];
        }
        return await _request(this.fetch, "POST", `${this.url}/admin/generate_link`, {
          body,
          headers: this.headers,
          xform: _generateLinkResponse,
          redirectTo: options === null || options === void 0 ? void 0 : options.redirectTo
        });
      } catch (error) {
        if (isAuthError(error)) {
          return {
            data: {
              properties: null,
              user: null
            },
            error
          };
        }
        throw error;
      }
    }
    // User Admin API
    /**
     * Creates a new user.
     * This function should only be called on a server. Never expose your `service_role` key in the browser.
     */
    async createUser(attributes) {
      try {
        return await _request(this.fetch, "POST", `${this.url}/admin/users`, {
          body: attributes,
          headers: this.headers,
          xform: _userResponse
        });
      } catch (error) {
        if (isAuthError(error)) {
          return { data: { user: null }, error };
        }
        throw error;
      }
    }
    /**
     * Get a list of users.
     *
     * This function should only be called on a server. Never expose your `service_role` key in the browser.
     * @param params An object which supports `page` and `perPage` as numbers, to alter the paginated results.
     */
    async listUsers(params) {
      var _a, _b, _c, _d, _e, _f, _g;
      try {
        const pagination = { nextPage: null, lastPage: 0, total: 0 };
        const response = await _request(this.fetch, "GET", `${this.url}/admin/users`, {
          headers: this.headers,
          noResolveJson: true,
          query: {
            page: (_b = (_a = params === null || params === void 0 ? void 0 : params.page) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : "",
            per_page: (_d = (_c = params === null || params === void 0 ? void 0 : params.perPage) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : ""
          },
          xform: _noResolveJsonResponse
        });
        if (response.error)
          throw response.error;
        const users = await response.json();
        const total = (_e = response.headers.get("x-total-count")) !== null && _e !== void 0 ? _e : 0;
        const links = (_g = (_f = response.headers.get("link")) === null || _f === void 0 ? void 0 : _f.split(",")) !== null && _g !== void 0 ? _g : [];
        if (links.length > 0) {
          links.forEach((link) => {
            const page = parseInt(link.split(";")[0].split("=")[1].substring(0, 1));
            const rel = JSON.parse(link.split(";")[1].split("=")[1]);
            pagination[`${rel}Page`] = page;
          });
          pagination.total = parseInt(total);
        }
        return { data: Object.assign(Object.assign({}, users), pagination), error: null };
      } catch (error) {
        if (isAuthError(error)) {
          return { data: { users: [] }, error };
        }
        throw error;
      }
    }
    /**
     * Get user by id.
     *
     * @param uid The user's unique identifier
     *
     * This function should only be called on a server. Never expose your `service_role` key in the browser.
     */
    async getUserById(uid) {
      validateUUID(uid);
      try {
        return await _request(this.fetch, "GET", `${this.url}/admin/users/${uid}`, {
          headers: this.headers,
          xform: _userResponse
        });
      } catch (error) {
        if (isAuthError(error)) {
          return { data: { user: null }, error };
        }
        throw error;
      }
    }
    /**
     * Updates the user data. Changes are applied directly without confirmation flows.
     *
     * @param uid The user's unique identifier
     * @param attributes The data you want to update.
     *
     * This function should only be called on a server. Never expose your `service_role` key in the browser.
     *
     * @remarks
     * **Important:** This is a server-side operation and does **not** trigger client-side
     * `onAuthStateChange` listeners. The admin API has no connection to client state.
     *
     * To sync changes to the client after calling this method:
     * 1. On the client, call `supabase.auth.refreshSession()` to fetch the updated user data
     * 2. This will trigger the `TOKEN_REFRESHED` event and notify all listeners
     *
     * @example
     * ```typescript
     * // Server-side (Edge Function)
     * const { data, error } = await supabase.auth.admin.updateUserById(
     *   userId,
     *   { user_metadata: { preferences: { theme: 'dark' } } }
     * )
     *
     * // Client-side (to sync the changes)
     * const { data, error } = await supabase.auth.refreshSession()
     * // onAuthStateChange listeners will now be notified with updated user
     * ```
     *
     * @see {@link GoTrueClient.refreshSession} for syncing admin changes to the client
     * @see {@link GoTrueClient.updateUser} for client-side user updates (triggers listeners automatically)
     */
    async updateUserById(uid, attributes) {
      validateUUID(uid);
      try {
        return await _request(this.fetch, "PUT", `${this.url}/admin/users/${uid}`, {
          body: attributes,
          headers: this.headers,
          xform: _userResponse
        });
      } catch (error) {
        if (isAuthError(error)) {
          return { data: { user: null }, error };
        }
        throw error;
      }
    }
    /**
     * Delete a user. Requires a `service_role` key.
     *
     * @param id The user id you want to remove.
     * @param shouldSoftDelete If true, then the user will be soft-deleted from the auth schema. Soft deletion allows user identification from the hashed user ID but is not reversible.
     * Defaults to false for backward compatibility.
     *
     * This function should only be called on a server. Never expose your `service_role` key in the browser.
     */
    async deleteUser(id, shouldSoftDelete = false) {
      validateUUID(id);
      try {
        return await _request(this.fetch, "DELETE", `${this.url}/admin/users/${id}`, {
          headers: this.headers,
          body: {
            should_soft_delete: shouldSoftDelete
          },
          xform: _userResponse
        });
      } catch (error) {
        if (isAuthError(error)) {
          return { data: { user: null }, error };
        }
        throw error;
      }
    }
    async _listFactors(params) {
      validateUUID(params.userId);
      try {
        const { data, error } = await _request(this.fetch, "GET", `${this.url}/admin/users/${params.userId}/factors`, {
          headers: this.headers,
          xform: (factors) => {
            return { data: { factors }, error: null };
          }
        });
        return { data, error };
      } catch (error) {
        if (isAuthError(error)) {
          return { data: null, error };
        }
        throw error;
      }
    }
    async _deleteFactor(params) {
      validateUUID(params.userId);
      validateUUID(params.id);
      try {
        const data = await _request(this.fetch, "DELETE", `${this.url}/admin/users/${params.userId}/factors/${params.id}`, {
          headers: this.headers
        });
        return { data, error: null };
      } catch (error) {
        if (isAuthError(error)) {
          return { data: null, error };
        }
        throw error;
      }
    }
    /**
     * Lists all OAuth clients with optional pagination.
     * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
     *
     * This function should only be called on a server. Never expose your `service_role` key in the browser.
     */
    async _listOAuthClients(params) {
      var _a, _b, _c, _d, _e, _f, _g;
      try {
        const pagination = { nextPage: null, lastPage: 0, total: 0 };
        const response = await _request(this.fetch, "GET", `${this.url}/admin/oauth/clients`, {
          headers: this.headers,
          noResolveJson: true,
          query: {
            page: (_b = (_a = params === null || params === void 0 ? void 0 : params.page) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : "",
            per_page: (_d = (_c = params === null || params === void 0 ? void 0 : params.perPage) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : ""
          },
          xform: _noResolveJsonResponse
        });
        if (response.error)
          throw response.error;
        const clients = await response.json();
        const total = (_e = response.headers.get("x-total-count")) !== null && _e !== void 0 ? _e : 0;
        const links = (_g = (_f = response.headers.get("link")) === null || _f === void 0 ? void 0 : _f.split(",")) !== null && _g !== void 0 ? _g : [];
        if (links.length > 0) {
          links.forEach((link) => {
            const page = parseInt(link.split(";")[0].split("=")[1].substring(0, 1));
            const rel = JSON.parse(link.split(";")[1].split("=")[1]);
            pagination[`${rel}Page`] = page;
          });
          pagination.total = parseInt(total);
        }
        return { data: Object.assign(Object.assign({}, clients), pagination), error: null };
      } catch (error) {
        if (isAuthError(error)) {
          return { data: { clients: [] }, error };
        }
        throw error;
      }
    }
    /**
     * Creates a new OAuth client.
     * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
     *
     * This function should only be called on a server. Never expose your `service_role` key in the browser.
     */
    async _createOAuthClient(params) {
      try {
        return await _request(this.fetch, "POST", `${this.url}/admin/oauth/clients`, {
          body: params,
          headers: this.headers,
          xform: (client) => {
            return { data: client, error: null };
          }
        });
      } catch (error) {
        if (isAuthError(error)) {
          return { data: null, error };
        }
        throw error;
      }
    }
    /**
     * Gets details of a specific OAuth client.
     * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
     *
     * This function should only be called on a server. Never expose your `service_role` key in the browser.
     */
    async _getOAuthClient(clientId) {
      try {
        return await _request(this.fetch, "GET", `${this.url}/admin/oauth/clients/${clientId}`, {
          headers: this.headers,
          xform: (client) => {
            return { data: client, error: null };
          }
        });
      } catch (error) {
        if (isAuthError(error)) {
          return { data: null, error };
        }
        throw error;
      }
    }
    /**
     * Updates an existing OAuth client.
     * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
     *
     * This function should only be called on a server. Never expose your `service_role` key in the browser.
     */
    async _updateOAuthClient(clientId, params) {
      try {
        return await _request(this.fetch, "PUT", `${this.url}/admin/oauth/clients/${clientId}`, {
          body: params,
          headers: this.headers,
          xform: (client) => {
            return { data: client, error: null };
          }
        });
      } catch (error) {
        if (isAuthError(error)) {
          return { data: null, error };
        }
        throw error;
      }
    }
    /**
     * Deletes an OAuth client.
     * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
     *
     * This function should only be called on a server. Never expose your `service_role` key in the browser.
     */
    async _deleteOAuthClient(clientId) {
      try {
        await _request(this.fetch, "DELETE", `${this.url}/admin/oauth/clients/${clientId}`, {
          headers: this.headers,
          noResolveJson: true
        });
        return { data: null, error: null };
      } catch (error) {
        if (isAuthError(error)) {
          return { data: null, error };
        }
        throw error;
      }
    }
    /**
     * Regenerates the secret for an OAuth client.
     * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
     *
     * This function should only be called on a server. Never expose your `service_role` key in the browser.
     */
    async _regenerateOAuthClientSecret(clientId) {
      try {
        return await _request(this.fetch, "POST", `${this.url}/admin/oauth/clients/${clientId}/regenerate_secret`, {
          headers: this.headers,
          xform: (client) => {
            return { data: client, error: null };
          }
        });
      } catch (error) {
        if (isAuthError(error)) {
          return { data: null, error };
        }
        throw error;
      }
    }
  };

  // node_modules/@supabase/auth-js/dist/module/lib/local-storage.js
  function memoryLocalStorageAdapter(store2 = {}) {
    return {
      getItem: (key) => {
        return store2[key] || null;
      },
      setItem: (key, value) => {
        store2[key] = value;
      },
      removeItem: (key) => {
        delete store2[key];
      }
    };
  }

  // node_modules/@supabase/auth-js/dist/module/lib/locks.js
  var internals = {
    /**
     * @experimental
     */
    debug: !!(globalThis && supportsLocalStorage() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
  };
  var LockAcquireTimeoutError = class extends Error {
    constructor(message) {
      super(message);
      this.isAcquireTimeout = true;
    }
  };
  var NavigatorLockAcquireTimeoutError = class extends LockAcquireTimeoutError {
  };
  async function navigatorLock(name, acquireTimeout, fn) {
    if (internals.debug) {
      console.log("@supabase/gotrue-js: navigatorLock: acquire lock", name, acquireTimeout);
    }
    const abortController = new globalThis.AbortController();
    if (acquireTimeout > 0) {
      setTimeout(() => {
        abortController.abort();
        if (internals.debug) {
          console.log("@supabase/gotrue-js: navigatorLock acquire timed out", name);
        }
      }, acquireTimeout);
    }
    await Promise.resolve();
    try {
      return await globalThis.navigator.locks.request(name, acquireTimeout === 0 ? {
        mode: "exclusive",
        ifAvailable: true
      } : {
        mode: "exclusive",
        signal: abortController.signal
      }, async (lock) => {
        if (lock) {
          if (internals.debug) {
            console.log("@supabase/gotrue-js: navigatorLock: acquired", name, lock.name);
          }
          try {
            return await fn();
          } finally {
            if (internals.debug) {
              console.log("@supabase/gotrue-js: navigatorLock: released", name, lock.name);
            }
          }
        } else {
          if (acquireTimeout === 0) {
            if (internals.debug) {
              console.log("@supabase/gotrue-js: navigatorLock: not immediately available", name);
            }
            throw new NavigatorLockAcquireTimeoutError(`Acquiring an exclusive Navigator LockManager lock "${name}" immediately failed`);
          } else {
            if (internals.debug) {
              try {
                const result = await globalThis.navigator.locks.query();
                console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(result, null, "  "));
              } catch (e) {
                console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", e);
              }
            }
            console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request");
            return await fn();
          }
        }
      });
    } catch (e) {
      if ((e === null || e === void 0 ? void 0 : e.name) === "AbortError" && acquireTimeout > 0) {
        if (internals.debug) {
          console.log("@supabase/gotrue-js: navigatorLock: acquire timeout, recovering by stealing lock", name);
        }
        console.warn(`@supabase/gotrue-js: Lock "${name}" was not released within ${acquireTimeout}ms. This may indicate an orphaned lock from a component unmount (e.g., React Strict Mode). Forcefully acquiring the lock to recover.`);
        return await Promise.resolve().then(() => globalThis.navigator.locks.request(name, {
          mode: "exclusive",
          steal: true
        }, async (lock) => {
          if (lock) {
            if (internals.debug) {
              console.log("@supabase/gotrue-js: navigatorLock: recovered (stolen)", name, lock.name);
            }
            try {
              return await fn();
            } finally {
              if (internals.debug) {
                console.log("@supabase/gotrue-js: navigatorLock: released (stolen)", name, lock.name);
              }
            }
          } else {
            console.warn("@supabase/gotrue-js: Navigator LockManager returned null lock even with steal: true");
            return await fn();
          }
        }));
      }
      throw e;
    }
  }

  // node_modules/@supabase/auth-js/dist/module/lib/polyfills.js
  function polyfillGlobalThis() {
    if (typeof globalThis === "object")
      return;
    try {
      Object.defineProperty(Object.prototype, "__magic__", {
        get: function() {
          return this;
        },
        configurable: true
      });
      __magic__.globalThis = __magic__;
      delete Object.prototype.__magic__;
    } catch (e) {
      if (typeof self !== "undefined") {
        self.globalThis = self;
      }
    }
  }

  // node_modules/@supabase/auth-js/dist/module/lib/web3/ethereum.js
  function getAddress(address) {
    if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
      throw new Error(`@supabase/auth-js: Address "${address}" is invalid.`);
    }
    return address.toLowerCase();
  }
  function fromHex(hex) {
    return parseInt(hex, 16);
  }
  function toHex(value) {
    const bytes = new TextEncoder().encode(value);
    const hex = Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
    return "0x" + hex;
  }
  function createSiweMessage(parameters) {
    var _a;
    const { chainId, domain, expirationTime, issuedAt = /* @__PURE__ */ new Date(), nonce, notBefore, requestId, resources, scheme, uri, version: version5 } = parameters;
    {
      if (!Number.isInteger(chainId))
        throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${chainId}`);
      if (!domain)
        throw new Error(`@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.`);
      if (nonce && nonce.length < 8)
        throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${nonce}`);
      if (!uri)
        throw new Error(`@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.`);
      if (version5 !== "1")
        throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${version5}`);
      if ((_a = parameters.statement) === null || _a === void 0 ? void 0 : _a.includes("\n"))
        throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${parameters.statement}`);
    }
    const address = getAddress(parameters.address);
    const origin = scheme ? `${scheme}://${domain}` : domain;
    const statement = parameters.statement ? `${parameters.statement}
` : "";
    const prefix = `${origin} wants you to sign in with your Ethereum account:
${address}

${statement}`;
    let suffix = `URI: ${uri}
Version: ${version5}
Chain ID: ${chainId}${nonce ? `
Nonce: ${nonce}` : ""}
Issued At: ${issuedAt.toISOString()}`;
    if (expirationTime)
      suffix += `
Expiration Time: ${expirationTime.toISOString()}`;
    if (notBefore)
      suffix += `
Not Before: ${notBefore.toISOString()}`;
    if (requestId)
      suffix += `
Request ID: ${requestId}`;
    if (resources) {
      let content = "\nResources:";
      for (const resource of resources) {
        if (!resource || typeof resource !== "string")
          throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${resource}`);
        content += `
- ${resource}`;
      }
      suffix += content;
    }
    return `${prefix}
${suffix}`;
  }

  // node_modules/@supabase/auth-js/dist/module/lib/webauthn.errors.js
  var WebAuthnError = class extends Error {
    constructor({ message, code, cause, name }) {
      var _a;
      super(message, { cause });
      this.__isWebAuthnError = true;
      this.name = (_a = name !== null && name !== void 0 ? name : cause instanceof Error ? cause.name : void 0) !== null && _a !== void 0 ? _a : "Unknown Error";
      this.code = code;
    }
  };
  var WebAuthnUnknownError = class extends WebAuthnError {
    constructor(message, originalError) {
      super({
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: originalError,
        message
      });
      this.name = "WebAuthnUnknownError";
      this.originalError = originalError;
    }
  };
  function identifyRegistrationError({ error, options }) {
    var _a, _b, _c;
    const { publicKey } = options;
    if (!publicKey) {
      throw Error("options was missing required publicKey property");
    }
    if (error.name === "AbortError") {
      if (options.signal instanceof AbortSignal) {
        return new WebAuthnError({
          message: "Registration ceremony was sent an abort signal",
          code: "ERROR_CEREMONY_ABORTED",
          cause: error
        });
      }
    } else if (error.name === "ConstraintError") {
      if (((_a = publicKey.authenticatorSelection) === null || _a === void 0 ? void 0 : _a.requireResidentKey) === true) {
        return new WebAuthnError({
          message: "Discoverable credentials were required but no available authenticator supported it",
          code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
          cause: error
        });
      } else if (
        // @ts-ignore: `mediation` doesn't yet exist on CredentialCreationOptions but it's possible as of Sept 2024
        options.mediation === "conditional" && ((_b = publicKey.authenticatorSelection) === null || _b === void 0 ? void 0 : _b.userVerification) === "required"
      ) {
        return new WebAuthnError({
          message: "User verification was required during automatic registration but it could not be performed",
          code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
          cause: error
        });
      } else if (((_c = publicKey.authenticatorSelection) === null || _c === void 0 ? void 0 : _c.userVerification) === "required") {
        return new WebAuthnError({
          message: "User verification was required but no available authenticator supported it",
          code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
          cause: error
        });
      }
    } else if (error.name === "InvalidStateError") {
      return new WebAuthnError({
        message: "The authenticator was previously registered",
        code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
        cause: error
      });
    } else if (error.name === "NotAllowedError") {
      return new WebAuthnError({
        message: error.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: error
      });
    } else if (error.name === "NotSupportedError") {
      const validPubKeyCredParams = publicKey.pubKeyCredParams.filter((param) => param.type === "public-key");
      if (validPubKeyCredParams.length === 0) {
        return new WebAuthnError({
          message: 'No entry in pubKeyCredParams was of type "public-key"',
          code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
          cause: error
        });
      }
      return new WebAuthnError({
        message: "No available authenticator supported any of the specified pubKeyCredParams algorithms",
        code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
        cause: error
      });
    } else if (error.name === "SecurityError") {
      const effectiveDomain = window.location.hostname;
      if (!isValidDomain(effectiveDomain)) {
        return new WebAuthnError({
          message: `${window.location.hostname} is an invalid domain`,
          code: "ERROR_INVALID_DOMAIN",
          cause: error
        });
      } else if (publicKey.rp.id !== effectiveDomain) {
        return new WebAuthnError({
          message: `The RP ID "${publicKey.rp.id}" is invalid for this domain`,
          code: "ERROR_INVALID_RP_ID",
          cause: error
        });
      }
    } else if (error.name === "TypeError") {
      if (publicKey.user.id.byteLength < 1 || publicKey.user.id.byteLength > 64) {
        return new WebAuthnError({
          message: "User ID was not between 1 and 64 characters",
          code: "ERROR_INVALID_USER_ID_LENGTH",
          cause: error
        });
      }
    } else if (error.name === "UnknownError") {
      return new WebAuthnError({
        message: "The authenticator was unable to process the specified options, or could not create a new credential",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: error
      });
    }
    return new WebAuthnError({
      message: "a Non-Webauthn related error has occurred",
      code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
      cause: error
    });
  }
  function identifyAuthenticationError({ error, options }) {
    const { publicKey } = options;
    if (!publicKey) {
      throw Error("options was missing required publicKey property");
    }
    if (error.name === "AbortError") {
      if (options.signal instanceof AbortSignal) {
        return new WebAuthnError({
          message: "Authentication ceremony was sent an abort signal",
          code: "ERROR_CEREMONY_ABORTED",
          cause: error
        });
      }
    } else if (error.name === "NotAllowedError") {
      return new WebAuthnError({
        message: error.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: error
      });
    } else if (error.name === "SecurityError") {
      const effectiveDomain = window.location.hostname;
      if (!isValidDomain(effectiveDomain)) {
        return new WebAuthnError({
          message: `${window.location.hostname} is an invalid domain`,
          code: "ERROR_INVALID_DOMAIN",
          cause: error
        });
      } else if (publicKey.rpId !== effectiveDomain) {
        return new WebAuthnError({
          message: `The RP ID "${publicKey.rpId}" is invalid for this domain`,
          code: "ERROR_INVALID_RP_ID",
          cause: error
        });
      }
    } else if (error.name === "UnknownError") {
      return new WebAuthnError({
        message: "The authenticator was unable to process the specified options, or could not create a new assertion signature",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: error
      });
    }
    return new WebAuthnError({
      message: "a Non-Webauthn related error has occurred",
      code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
      cause: error
    });
  }

  // node_modules/@supabase/auth-js/dist/module/lib/webauthn.js
  var WebAuthnAbortService = class {
    /**
     * Create an abort signal for a new WebAuthn operation.
     * Automatically cancels any existing operation.
     *
     * @returns {AbortSignal} Signal to pass to navigator.credentials.create() or .get()
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal MDN - AbortSignal}
     */
    createNewAbortSignal() {
      if (this.controller) {
        const abortError = new Error("Cancelling existing WebAuthn API call for new one");
        abortError.name = "AbortError";
        this.controller.abort(abortError);
      }
      const newController = new AbortController();
      this.controller = newController;
      return newController.signal;
    }
    /**
     * Manually cancel the current WebAuthn operation.
     * Useful for cleaning up when user cancels or navigates away.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort MDN - AbortController.abort}
     */
    cancelCeremony() {
      if (this.controller) {
        const abortError = new Error("Manually cancelling existing WebAuthn API call");
        abortError.name = "AbortError";
        this.controller.abort(abortError);
        this.controller = void 0;
      }
    }
  };
  var webAuthnAbortService = new WebAuthnAbortService();
  function deserializeCredentialCreationOptions(options) {
    if (!options) {
      throw new Error("Credential creation options are required");
    }
    if (typeof PublicKeyCredential !== "undefined" && "parseCreationOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseCreationOptionsFromJSON === "function") {
      return PublicKeyCredential.parseCreationOptionsFromJSON(
        /** we assert the options here as typescript still doesn't know about future webauthn types */
        options
      );
    }
    const { challenge: challengeStr, user: userOpts, excludeCredentials } = options, restOptions = __rest(
      options,
      ["challenge", "user", "excludeCredentials"]
    );
    const challenge = base64UrlToUint8Array(challengeStr).buffer;
    const user = Object.assign(Object.assign({}, userOpts), { id: base64UrlToUint8Array(userOpts.id).buffer });
    const result = Object.assign(Object.assign({}, restOptions), {
      challenge,
      user
    });
    if (excludeCredentials && excludeCredentials.length > 0) {
      result.excludeCredentials = new Array(excludeCredentials.length);
      for (let i = 0; i < excludeCredentials.length; i++) {
        const cred = excludeCredentials[i];
        result.excludeCredentials[i] = Object.assign(Object.assign({}, cred), {
          id: base64UrlToUint8Array(cred.id).buffer,
          type: cred.type || "public-key",
          // Cast transports to handle future transport types like "cable"
          transports: cred.transports
        });
      }
    }
    return result;
  }
  function deserializeCredentialRequestOptions(options) {
    if (!options) {
      throw new Error("Credential request options are required");
    }
    if (typeof PublicKeyCredential !== "undefined" && "parseRequestOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseRequestOptionsFromJSON === "function") {
      return PublicKeyCredential.parseRequestOptionsFromJSON(options);
    }
    const { challenge: challengeStr, allowCredentials } = options, restOptions = __rest(
      options,
      ["challenge", "allowCredentials"]
    );
    const challenge = base64UrlToUint8Array(challengeStr).buffer;
    const result = Object.assign(Object.assign({}, restOptions), { challenge });
    if (allowCredentials && allowCredentials.length > 0) {
      result.allowCredentials = new Array(allowCredentials.length);
      for (let i = 0; i < allowCredentials.length; i++) {
        const cred = allowCredentials[i];
        result.allowCredentials[i] = Object.assign(Object.assign({}, cred), {
          id: base64UrlToUint8Array(cred.id).buffer,
          type: cred.type || "public-key",
          // Cast transports to handle future transport types like "cable"
          transports: cred.transports
        });
      }
    }
    return result;
  }
  function serializeCredentialCreationResponse(credential) {
    var _a;
    if ("toJSON" in credential && typeof credential.toJSON === "function") {
      return credential.toJSON();
    }
    const credentialWithAttachment = credential;
    return {
      id: credential.id,
      rawId: credential.id,
      response: {
        attestationObject: bytesToBase64URL(new Uint8Array(credential.response.attestationObject)),
        clientDataJSON: bytesToBase64URL(new Uint8Array(credential.response.clientDataJSON))
      },
      type: "public-key",
      clientExtensionResults: credential.getClientExtensionResults(),
      // Convert null to undefined and cast to AuthenticatorAttachment type
      authenticatorAttachment: (_a = credentialWithAttachment.authenticatorAttachment) !== null && _a !== void 0 ? _a : void 0
    };
  }
  function serializeCredentialRequestResponse(credential) {
    var _a;
    if ("toJSON" in credential && typeof credential.toJSON === "function") {
      return credential.toJSON();
    }
    const credentialWithAttachment = credential;
    const clientExtensionResults = credential.getClientExtensionResults();
    const assertionResponse = credential.response;
    return {
      id: credential.id,
      rawId: credential.id,
      // W3C spec expects rawId to match id for JSON format
      response: {
        authenticatorData: bytesToBase64URL(new Uint8Array(assertionResponse.authenticatorData)),
        clientDataJSON: bytesToBase64URL(new Uint8Array(assertionResponse.clientDataJSON)),
        signature: bytesToBase64URL(new Uint8Array(assertionResponse.signature)),
        userHandle: assertionResponse.userHandle ? bytesToBase64URL(new Uint8Array(assertionResponse.userHandle)) : void 0
      },
      type: "public-key",
      clientExtensionResults,
      // Convert null to undefined and cast to AuthenticatorAttachment type
      authenticatorAttachment: (_a = credentialWithAttachment.authenticatorAttachment) !== null && _a !== void 0 ? _a : void 0
    };
  }
  function isValidDomain(hostname) {
    return (
      // Consider localhost valid as well since it's okay wrt Secure Contexts
      hostname === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(hostname)
    );
  }
  function browserSupportsWebAuthn() {
    var _a, _b;
    return !!(isBrowser() && "PublicKeyCredential" in window && window.PublicKeyCredential && "credentials" in navigator && typeof ((_a = navigator === null || navigator === void 0 ? void 0 : navigator.credentials) === null || _a === void 0 ? void 0 : _a.create) === "function" && typeof ((_b = navigator === null || navigator === void 0 ? void 0 : navigator.credentials) === null || _b === void 0 ? void 0 : _b.get) === "function");
  }
  async function createCredential(options) {
    try {
      const response = await navigator.credentials.create(
        /** we assert the type here until typescript types are updated */
        options
      );
      if (!response) {
        return {
          data: null,
          error: new WebAuthnUnknownError("Empty credential response", response)
        };
      }
      if (!(response instanceof PublicKeyCredential)) {
        return {
          data: null,
          error: new WebAuthnUnknownError("Browser returned unexpected credential type", response)
        };
      }
      return { data: response, error: null };
    } catch (err) {
      return {
        data: null,
        error: identifyRegistrationError({
          error: err,
          options
        })
      };
    }
  }
  async function getCredential(options) {
    try {
      const response = await navigator.credentials.get(
        /** we assert the type here until typescript types are updated */
        options
      );
      if (!response) {
        return {
          data: null,
          error: new WebAuthnUnknownError("Empty credential response", response)
        };
      }
      if (!(response instanceof PublicKeyCredential)) {
        return {
          data: null,
          error: new WebAuthnUnknownError("Browser returned unexpected credential type", response)
        };
      }
      return { data: response, error: null };
    } catch (err) {
      return {
        data: null,
        error: identifyAuthenticationError({
          error: err,
          options
        })
      };
    }
  }
  var DEFAULT_CREATION_OPTIONS = {
    hints: ["security-key"],
    authenticatorSelection: {
      authenticatorAttachment: "cross-platform",
      requireResidentKey: false,
      /** set to preferred because older yubikeys don't have PIN/Biometric */
      userVerification: "preferred",
      residentKey: "discouraged"
    },
    attestation: "direct"
  };
  var DEFAULT_REQUEST_OPTIONS = {
    /** set to preferred because older yubikeys don't have PIN/Biometric */
    userVerification: "preferred",
    hints: ["security-key"],
    attestation: "direct"
  };
  function deepMerge(...sources) {
    const isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
    const isArrayBufferLike = (val) => val instanceof ArrayBuffer || ArrayBuffer.isView(val);
    const result = {};
    for (const source of sources) {
      if (!source)
        continue;
      for (const key in source) {
        const value = source[key];
        if (value === void 0)
          continue;
        if (Array.isArray(value)) {
          result[key] = value;
        } else if (isArrayBufferLike(value)) {
          result[key] = value;
        } else if (isObject(value)) {
          const existing = result[key];
          if (isObject(existing)) {
            result[key] = deepMerge(existing, value);
          } else {
            result[key] = deepMerge(value);
          }
        } else {
          result[key] = value;
        }
      }
    }
    return result;
  }
  function mergeCredentialCreationOptions(baseOptions, overrides) {
    return deepMerge(DEFAULT_CREATION_OPTIONS, baseOptions, overrides || {});
  }
  function mergeCredentialRequestOptions(baseOptions, overrides) {
    return deepMerge(DEFAULT_REQUEST_OPTIONS, baseOptions, overrides || {});
  }
  var WebAuthnApi = class {
    constructor(client) {
      this.client = client;
      this.enroll = this._enroll.bind(this);
      this.challenge = this._challenge.bind(this);
      this.verify = this._verify.bind(this);
      this.authenticate = this._authenticate.bind(this);
      this.register = this._register.bind(this);
    }
    /**
     * Enroll a new WebAuthn factor.
     * Creates an unverified WebAuthn factor that must be verified with a credential.
     *
     * @experimental This method is experimental and may change in future releases
     * @param {Omit<MFAEnrollWebauthnParams, 'factorType'>} params - Enrollment parameters (friendlyName required)
     * @returns {Promise<AuthMFAEnrollWebauthnResponse>} Enrolled factor details or error
     * @see {@link https://w3c.github.io/webauthn/#sctn-registering-a-new-credential W3C WebAuthn Spec - Registering a New Credential}
     */
    async _enroll(params) {
      return this.client.mfa.enroll(Object.assign(Object.assign({}, params), { factorType: "webauthn" }));
    }
    /**
     * Challenge for WebAuthn credential creation or authentication.
     * Combines server challenge with browser credential operations.
     * Handles both registration (create) and authentication (request) flows.
     *
     * @experimental This method is experimental and may change in future releases
     * @param {MFAChallengeWebauthnParams & { friendlyName?: string; signal?: AbortSignal }} params - Challenge parameters including factorId
     * @param {Object} overrides - Allows you to override the parameters passed to navigator.credentials
     * @param {PublicKeyCredentialCreationOptionsFuture} overrides.create - Override options for credential creation
     * @param {PublicKeyCredentialRequestOptionsFuture} overrides.request - Override options for credential request
     * @returns {Promise<RequestResult>} Challenge response with credential or error
     * @see {@link https://w3c.github.io/webauthn/#sctn-credential-creation W3C WebAuthn Spec - Credential Creation}
     * @see {@link https://w3c.github.io/webauthn/#sctn-verifying-assertion W3C WebAuthn Spec - Verifying Assertion}
     */
    async _challenge({ factorId, webauthn, friendlyName, signal }, overrides) {
      var _a;
      try {
        const { data: challengeResponse, error: challengeError } = await this.client.mfa.challenge({
          factorId,
          webauthn
        });
        if (!challengeResponse) {
          return { data: null, error: challengeError };
        }
        const abortSignal = signal !== null && signal !== void 0 ? signal : webAuthnAbortService.createNewAbortSignal();
        if (challengeResponse.webauthn.type === "create") {
          const { user } = challengeResponse.webauthn.credential_options.publicKey;
          if (!user.name) {
            const nameToUse = friendlyName;
            if (!nameToUse) {
              const currentUser = await this.client.getUser();
              const userData = currentUser.data.user;
              const fallbackName = ((_a = userData === null || userData === void 0 ? void 0 : userData.user_metadata) === null || _a === void 0 ? void 0 : _a.name) || (userData === null || userData === void 0 ? void 0 : userData.email) || (userData === null || userData === void 0 ? void 0 : userData.id) || "User";
              user.name = `${user.id}:${fallbackName}`;
            } else {
              user.name = `${user.id}:${nameToUse}`;
            }
          }
          if (!user.displayName) {
            user.displayName = user.name;
          }
        }
        switch (challengeResponse.webauthn.type) {
          case "create": {
            const options = mergeCredentialCreationOptions(challengeResponse.webauthn.credential_options.publicKey, overrides === null || overrides === void 0 ? void 0 : overrides.create);
            const { data, error } = await createCredential({
              publicKey: options,
              signal: abortSignal
            });
            if (data) {
              return {
                data: {
                  factorId,
                  challengeId: challengeResponse.id,
                  webauthn: {
                    type: challengeResponse.webauthn.type,
                    credential_response: data
                  }
                },
                error: null
              };
            }
            return { data: null, error };
          }
          case "request": {
            const options = mergeCredentialRequestOptions(challengeResponse.webauthn.credential_options.publicKey, overrides === null || overrides === void 0 ? void 0 : overrides.request);
            const { data, error } = await getCredential(Object.assign(Object.assign({}, challengeResponse.webauthn.credential_options), { publicKey: options, signal: abortSignal }));
            if (data) {
              return {
                data: {
                  factorId,
                  challengeId: challengeResponse.id,
                  webauthn: {
                    type: challengeResponse.webauthn.type,
                    credential_response: data
                  }
                },
                error: null
              };
            }
            return { data: null, error };
          }
        }
      } catch (error) {
        if (isAuthError(error)) {
          return { data: null, error };
        }
        return {
          data: null,
          error: new AuthUnknownError("Unexpected error in challenge", error)
        };
      }
    }
    /**
     * Verify a WebAuthn credential with the server.
     * Completes the WebAuthn ceremony by sending the credential to the server for verification.
     *
     * @experimental This method is experimental and may change in future releases
     * @param {Object} params - Verification parameters
     * @param {string} params.challengeId - ID of the challenge being verified
     * @param {string} params.factorId - ID of the WebAuthn factor
     * @param {MFAVerifyWebauthnParams<T>['webauthn']} params.webauthn - WebAuthn credential response
     * @returns {Promise<AuthMFAVerifyResponse>} Verification result with session or error
     * @see {@link https://w3c.github.io/webauthn/#sctn-verifying-assertion W3C WebAuthn Spec - Verifying an Authentication Assertion}
     * */
    async _verify({ challengeId, factorId, webauthn }) {
      return this.client.mfa.verify({
        factorId,
        challengeId,
        webauthn
      });
    }
    /**
     * Complete WebAuthn authentication flow.
     * Performs challenge and verification in a single operation for existing credentials.
     *
     * @experimental This method is experimental and may change in future releases
     * @param {Object} params - Authentication parameters
     * @param {string} params.factorId - ID of the WebAuthn factor to authenticate with
     * @param {Object} params.webauthn - WebAuthn configuration
     * @param {string} params.webauthn.rpId - Relying Party ID (defaults to current hostname)
     * @param {string[]} params.webauthn.rpOrigins - Allowed origins (defaults to current origin)
     * @param {AbortSignal} params.webauthn.signal - Optional abort signal
     * @param {PublicKeyCredentialRequestOptionsFuture} overrides - Override options for navigator.credentials.get
     * @returns {Promise<RequestResult<AuthMFAVerifyResponseData, WebAuthnError | AuthError>>} Authentication result
     * @see {@link https://w3c.github.io/webauthn/#sctn-authentication W3C WebAuthn Spec - Authentication Ceremony}
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialRequestOptions MDN - PublicKeyCredentialRequestOptions}
     */
    async _authenticate({ factorId, webauthn: { rpId = typeof window !== "undefined" ? window.location.hostname : void 0, rpOrigins = typeof window !== "undefined" ? [window.location.origin] : void 0, signal } = {} }, overrides) {
      if (!rpId) {
        return {
          data: null,
          error: new AuthError("rpId is required for WebAuthn authentication")
        };
      }
      try {
        if (!browserSupportsWebAuthn()) {
          return {
            data: null,
            error: new AuthUnknownError("Browser does not support WebAuthn", null)
          };
        }
        const { data: challengeResponse, error: challengeError } = await this.challenge({
          factorId,
          webauthn: { rpId, rpOrigins },
          signal
        }, { request: overrides });
        if (!challengeResponse) {
          return { data: null, error: challengeError };
        }
        const { webauthn } = challengeResponse;
        return this._verify({
          factorId,
          challengeId: challengeResponse.challengeId,
          webauthn: {
            type: webauthn.type,
            rpId,
            rpOrigins,
            credential_response: webauthn.credential_response
          }
        });
      } catch (error) {
        if (isAuthError(error)) {
          return { data: null, error };
        }
        return {
          data: null,
          error: new AuthUnknownError("Unexpected error in authenticate", error)
        };
      }
    }
    /**
     * Complete WebAuthn registration flow.
     * Performs enrollment, challenge, and verification in a single operation for new credentials.
     *
     * @experimental This method is experimental and may change in future releases
     * @param {Object} params - Registration parameters
     * @param {string} params.friendlyName - User-friendly name for the credential
     * @param {string} params.rpId - Relying Party ID (defaults to current hostname)
     * @param {string[]} params.rpOrigins - Allowed origins (defaults to current origin)
     * @param {AbortSignal} params.signal - Optional abort signal
     * @param {PublicKeyCredentialCreationOptionsFuture} overrides - Override options for navigator.credentials.create
     * @returns {Promise<RequestResult<AuthMFAVerifyResponseData, WebAuthnError | AuthError>>} Registration result
     * @see {@link https://w3c.github.io/webauthn/#sctn-registering-a-new-credential W3C WebAuthn Spec - Registration Ceremony}
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions MDN - PublicKeyCredentialCreationOptions}
     */
    async _register({ friendlyName, webauthn: { rpId = typeof window !== "undefined" ? window.location.hostname : void 0, rpOrigins = typeof window !== "undefined" ? [window.location.origin] : void 0, signal } = {} }, overrides) {
      if (!rpId) {
        return {
          data: null,
          error: new AuthError("rpId is required for WebAuthn registration")
        };
      }
      try {
        if (!browserSupportsWebAuthn()) {
          return {
            data: null,
            error: new AuthUnknownError("Browser does not support WebAuthn", null)
          };
        }
        const { data: factor, error: enrollError } = await this._enroll({
          friendlyName
        });
        if (!factor) {
          await this.client.mfa.listFactors().then((factors) => {
            var _a;
            return (_a = factors.data) === null || _a === void 0 ? void 0 : _a.all.find((v) => v.factor_type === "webauthn" && v.friendly_name === friendlyName && v.status !== "unverified");
          }).then((factor2) => factor2 ? this.client.mfa.unenroll({ factorId: factor2 === null || factor2 === void 0 ? void 0 : factor2.id }) : void 0);
          return { data: null, error: enrollError };
        }
        const { data: challengeResponse, error: challengeError } = await this._challenge({
          factorId: factor.id,
          friendlyName: factor.friendly_name,
          webauthn: { rpId, rpOrigins },
          signal
        }, {
          create: overrides
        });
        if (!challengeResponse) {
          return { data: null, error: challengeError };
        }
        return this._verify({
          factorId: factor.id,
          challengeId: challengeResponse.challengeId,
          webauthn: {
            rpId,
            rpOrigins,
            type: challengeResponse.webauthn.type,
            credential_response: challengeResponse.webauthn.credential_response
          }
        });
      } catch (error) {
        if (isAuthError(error)) {
          return { data: null, error };
        }
        return {
          data: null,
          error: new AuthUnknownError("Unexpected error in register", error)
        };
      }
    }
  };

  // node_modules/@supabase/auth-js/dist/module/GoTrueClient.js
  polyfillGlobalThis();
  var DEFAULT_OPTIONS = {
    url: GOTRUE_URL,
    storageKey: STORAGE_KEY,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    headers: DEFAULT_HEADERS2,
    flowType: "implicit",
    debug: false,
    hasCustomAuthorizationHeader: false,
    throwOnError: false,
    lockAcquireTimeout: 5e3,
    // 5 seconds
    skipAutoInitialize: false
  };
  async function lockNoOp(name, acquireTimeout, fn) {
    return await fn();
  }
  var GLOBAL_JWKS = {};
  var GoTrueClient = class _GoTrueClient {
    /**
     * The JWKS used for verifying asymmetric JWTs
     */
    get jwks() {
      var _a, _b;
      return (_b = (_a = GLOBAL_JWKS[this.storageKey]) === null || _a === void 0 ? void 0 : _a.jwks) !== null && _b !== void 0 ? _b : { keys: [] };
    }
    set jwks(value) {
      GLOBAL_JWKS[this.storageKey] = Object.assign(Object.assign({}, GLOBAL_JWKS[this.storageKey]), { jwks: value });
    }
    get jwks_cached_at() {
      var _a, _b;
      return (_b = (_a = GLOBAL_JWKS[this.storageKey]) === null || _a === void 0 ? void 0 : _a.cachedAt) !== null && _b !== void 0 ? _b : Number.MIN_SAFE_INTEGER;
    }
    set jwks_cached_at(value) {
      GLOBAL_JWKS[this.storageKey] = Object.assign(Object.assign({}, GLOBAL_JWKS[this.storageKey]), { cachedAt: value });
    }
    /**
     * Create a new client for use in the browser.
     *
     * @example
     * ```ts
     * import { GoTrueClient } from '@supabase/auth-js'
     *
     * const auth = new GoTrueClient({
     *   url: 'https://xyzcompany.supabase.co/auth/v1',
     *   headers: { apikey: 'public-anon-key' },
     *   storageKey: 'supabase-auth',
     * })
     * ```
     */
    constructor(options) {
      var _a, _b, _c;
      this.userStorage = null;
      this.memoryStorage = null;
      this.stateChangeEmitters = /* @__PURE__ */ new Map();
      this.autoRefreshTicker = null;
      this.autoRefreshTickTimeout = null;
      this.visibilityChangedCallback = null;
      this.refreshingDeferred = null;
      this.initializePromise = null;
      this.detectSessionInUrl = true;
      this.hasCustomAuthorizationHeader = false;
      this.suppressGetSessionWarning = false;
      this.lockAcquired = false;
      this.pendingInLock = [];
      this.broadcastChannel = null;
      this.logger = console.log;
      const settings = Object.assign(Object.assign({}, DEFAULT_OPTIONS), options);
      this.storageKey = settings.storageKey;
      this.instanceID = (_a = _GoTrueClient.nextInstanceID[this.storageKey]) !== null && _a !== void 0 ? _a : 0;
      _GoTrueClient.nextInstanceID[this.storageKey] = this.instanceID + 1;
      this.logDebugMessages = !!settings.debug;
      if (typeof settings.debug === "function") {
        this.logger = settings.debug;
      }
      if (this.instanceID > 0 && isBrowser()) {
        const message = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
        console.warn(message);
        if (this.logDebugMessages) {
          console.trace(message);
        }
      }
      this.persistSession = settings.persistSession;
      this.autoRefreshToken = settings.autoRefreshToken;
      this.admin = new GoTrueAdminApi({
        url: settings.url,
        headers: settings.headers,
        fetch: settings.fetch
      });
      this.url = settings.url;
      this.headers = settings.headers;
      this.fetch = resolveFetch3(settings.fetch);
      this.lock = settings.lock || lockNoOp;
      this.detectSessionInUrl = settings.detectSessionInUrl;
      this.flowType = settings.flowType;
      this.hasCustomAuthorizationHeader = settings.hasCustomAuthorizationHeader;
      this.throwOnError = settings.throwOnError;
      this.lockAcquireTimeout = settings.lockAcquireTimeout;
      if (settings.lock) {
        this.lock = settings.lock;
      } else if (this.persistSession && isBrowser() && ((_b = globalThis === null || globalThis === void 0 ? void 0 : globalThis.navigator) === null || _b === void 0 ? void 0 : _b.locks)) {
        this.lock = navigatorLock;
      } else {
        this.lock = lockNoOp;
      }
      if (!this.jwks) {
        this.jwks = { keys: [] };
        this.jwks_cached_at = Number.MIN_SAFE_INTEGER;
      }
      this.mfa = {
        verify: this._verify.bind(this),
        enroll: this._enroll.bind(this),
        unenroll: this._unenroll.bind(this),
        challenge: this._challenge.bind(this),
        listFactors: this._listFactors.bind(this),
        challengeAndVerify: this._challengeAndVerify.bind(this),
        getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this),
        webauthn: new WebAuthnApi(this)
      };
      this.oauth = {
        getAuthorizationDetails: this._getAuthorizationDetails.bind(this),
        approveAuthorization: this._approveAuthorization.bind(this),
        denyAuthorization: this._denyAuthorization.bind(this),
        listGrants: this._listOAuthGrants.bind(this),
        revokeGrant: this._revokeOAuthGrant.bind(this)
      };
      if (this.persistSession) {
        if (settings.storage) {
          this.storage = settings.storage;
        } else {
          if (supportsLocalStorage()) {
            this.storage = globalThis.localStorage;
          } else {
            this.memoryStorage = {};
            this.storage = memoryLocalStorageAdapter(this.memoryStorage);
          }
        }
        if (settings.userStorage) {
          this.userStorage = settings.userStorage;
        }
      } else {
        this.memoryStorage = {};
        this.storage = memoryLocalStorageAdapter(this.memoryStorage);
      }
      if (isBrowser() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
        try {
          this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
        } catch (e) {
          console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", e);
        }
        (_c = this.broadcastChannel) === null || _c === void 0 ? void 0 : _c.addEventListener("message", async (event) => {
          this._debug("received broadcast notification from other tab or client", event);
          try {
            await this._notifyAllSubscribers(event.data.event, event.data.session, false);
          } catch (error) {
            this._debug("#broadcastChannel", "error", error);
          }
        });
      }
      if (!settings.skipAutoInitialize) {
        this.initialize().catch((error) => {
          this._debug("#initialize()", "error", error);
        });
      }
    }
    /**
     * Returns whether error throwing mode is enabled for this client.
     */
    isThrowOnErrorEnabled() {
      return this.throwOnError;
    }
    /**
     * Centralizes return handling with optional error throwing. When `throwOnError` is enabled
     * and the provided result contains a non-nullish error, the error is thrown instead of
     * being returned. This ensures consistent behavior across all public API methods.
     */
    _returnResult(result) {
      if (this.throwOnError && result && result.error) {
        throw result.error;
      }
      return result;
    }
    _logPrefix() {
      return `GoTrueClient@${this.storageKey}:${this.instanceID} (${version3}) ${(/* @__PURE__ */ new Date()).toISOString()}`;
    }
    _debug(...args) {
      if (this.logDebugMessages) {
        this.logger(this._logPrefix(), ...args);
      }
      return this;
    }
    /**
     * Initializes the client session either from the url or from storage.
     * This method is automatically called when instantiating the client, but should also be called
     * manually when checking for an error from an auth redirect (oauth, magiclink, password recovery, etc).
     */
    async initialize() {
      if (this.initializePromise) {
        return await this.initializePromise;
      }
      this.initializePromise = (async () => {
        return await this._acquireLock(this.lockAcquireTimeout, async () => {
          return await this._initialize();
        });
      })();
      return await this.initializePromise;
    }
    /**
     * IMPORTANT:
     * 1. Never throw in this method, as it is called from the constructor
     * 2. Never return a session from this method as it would be cached over
     *    the whole lifetime of the client
     */
    async _initialize() {
      var _a;
      try {
        let params = {};
        let callbackUrlType = "none";
        if (isBrowser()) {
          params = parseParametersFromURL(window.location.href);
          if (this._isImplicitGrantCallback(params)) {
            callbackUrlType = "implicit";
          } else if (await this._isPKCECallback(params)) {
            callbackUrlType = "pkce";
          }
        }
        if (isBrowser() && this.detectSessionInUrl && callbackUrlType !== "none") {
          const { data, error } = await this._getSessionFromURL(params, callbackUrlType);
          if (error) {
            this._debug("#_initialize()", "error detecting session from URL", error);
            if (isAuthImplicitGrantRedirectError(error)) {
              const errorCode = (_a = error.details) === null || _a === void 0 ? void 0 : _a.code;
              if (errorCode === "identity_already_exists" || errorCode === "identity_not_found" || errorCode === "single_identity_not_deletable") {
                return { error };
              }
            }
            return { error };
          }
          const { session, redirectType } = data;
          this._debug("#_initialize()", "detected session in URL", session, "redirect type", redirectType);
          await this._saveSession(session);
          setTimeout(async () => {
            if (redirectType === "recovery") {
              await this._notifyAllSubscribers("PASSWORD_RECOVERY", session);
            } else {
              await this._notifyAllSubscribers("SIGNED_IN", session);
            }
          }, 0);
          return { error: null };
        }
        await this._recoverAndRefresh();
        return { error: null };
      } catch (error) {
        if (isAuthError(error)) {
          return this._returnResult({ error });
        }
        return this._returnResult({
          error: new AuthUnknownError("Unexpected error during initialization", error)
        });
      } finally {
        await this._handleVisibilityChange();
        this._debug("#_initialize()", "end");
      }
    }
    /**
     * Creates a new anonymous user.
     *
     * @returns A session where the is_anonymous claim in the access token JWT set to true
     */
    async signInAnonymously(credentials) {
      var _a, _b, _c;
      try {
        const res = await _request(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            data: (_b = (_a = credentials === null || credentials === void 0 ? void 0 : credentials.options) === null || _a === void 0 ? void 0 : _a.data) !== null && _b !== void 0 ? _b : {},
            gotrue_meta_security: { captcha_token: (_c = credentials === null || credentials === void 0 ? void 0 : credentials.options) === null || _c === void 0 ? void 0 : _c.captchaToken }
          },
          xform: _sessionResponse
        });
        const { data, error } = res;
        if (error || !data) {
          return this._returnResult({ data: { user: null, session: null }, error });
        }
        const session = data.session;
        const user = data.user;
        if (data.session) {
          await this._saveSession(data.session);
          await this._notifyAllSubscribers("SIGNED_IN", session);
        }
        return this._returnResult({ data: { user, session }, error: null });
      } catch (error) {
        if (isAuthError(error)) {
          return this._returnResult({ data: { user: null, session: null }, error });
        }
        throw error;
      }
    }
    /**
     * Creates a new user.
     *
     * Be aware that if a user account exists in the system you may get back an
     * error message that attempts to hide this information from the user.
     * This method has support for PKCE via email signups. The PKCE flow cannot be used when autoconfirm is enabled.
     *
     * @returns A logged-in session if the server has "autoconfirm" ON
     * @returns A user if the server has "autoconfirm" OFF
     */
    async signUp(credentials) {
      var _a, _b, _c;
      try {
        let res;
        if ("email" in credentials) {
          const { email, password, options } = credentials;
          let codeChallenge = null;
          let codeChallengeMethod = null;
          if (this.flowType === "pkce") {
            ;
            [codeChallenge, codeChallengeMethod] = await getCodeChallengeAndMethod(this.storage, this.storageKey);
          }
          res = await _request(this.fetch, "POST", `${this.url}/signup`, {
            headers: this.headers,
            redirectTo: options === null || options === void 0 ? void 0 : options.emailRedirectTo,
            body: {
              email,
              password,
              data: (_a = options === null || options === void 0 ? void 0 : options.data) !== null && _a !== void 0 ? _a : {},
              gotrue_meta_security: { captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken },
              code_challenge: codeChallenge,
              code_challenge_method: codeChallengeMethod
            },
            xform: _sessionResponse
          });
        } else if ("phone" in credentials) {
          const { phone, password, options } = credentials;
          res = await _request(this.fetch, "POST", `${this.url}/signup`, {
            headers: this.headers,
            body: {
              phone,
              password,
              data: (_b = options === null || options === void 0 ? void 0 : options.data) !== null && _b !== void 0 ? _b : {},
              channel: (_c = options === null || options === void 0 ? void 0 : options.channel) !== null && _c !== void 0 ? _c : "sms",
              gotrue_meta_security: { captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken }
            },
            xform: _sessionResponse
          });
        } else {
          throw new AuthInvalidCredentialsError("You must provide either an email or phone number and a password");
        }
        const { data, error } = res;
        if (error || !data) {
          await removeItemAsync(this.storage, `${this.storageKey}-code-verifier`);
          return this._returnResult({ data: { user: null, session: null }, error });
        }
        const session = data.session;
        const user = data.user;
        if (data.session) {
          await this._saveSession(data.session);
          await this._notifyAllSubscribers("SIGNED_IN", session);
        }
        return this._returnResult({ data: { user, session }, error: null });
      } catch (error) {
        await removeItemAsync(this.storage, `${this.storageKey}-code-verifier`);
        if (isAuthError(error)) {
          return this._returnResult({ data: { user: null, session: null }, error });
        }
        throw error;
      }
    }
    /**
     * Log in an existing user with an email and password or phone and password.
     *
     * Be aware that you may get back an error message that will not distinguish
     * between the cases where the account does not exist or that the
     * email/phone and password combination is wrong or that the account can only
     * be accessed via social login.
     */
    async signInWithPassword(credentials) {
      try {
        let res;
        if ("email" in credentials) {
          const { email, password, options } = credentials;
          res = await _request(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
            headers: this.headers,
            body: {
              email,
              password,
              gotrue_meta_security: { captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken }
            },
            xform: _sessionResponsePassword
          });
        } else if ("phone" in credentials) {
          const { phone, password, options } = credentials;
          res = await _request(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
            headers: this.headers,
            body: {
              phone,
              password,
              gotrue_meta_security: { captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken }
            },
            xform: _sessionResponsePassword
          });
        } else {
          throw new AuthInvalidCredentialsError("You must provide either an email or phone number and a password");
        }
        const { data, error } = res;
        if (error) {
          return this._returnResult({ data: { user: null, session: null }, error });
        } else if (!data || !data.session || !data.user) {
          const invalidTokenError = new AuthInvalidTokenResponseError();
          return this._returnResult({ data: { user: null, session: null }, error: invalidTokenError });
        }
        if (data.session) {
          await this._saveSession(data.session);
          await this._notifyAllSubscribers("SIGNED_IN", data.session);
        }
        return this._returnResult({
          data: Object.assign({ user: data.user, session: data.session }, data.weak_password ? { weakPassword: data.weak_password } : null),
          error
        });
      } catch (error) {
        if (isAuthError(error)) {
          return this._returnResult({ data: { user: null, session: null }, error });
        }
        throw error;
      }
    }
    /**
     * Log in an existing user via a third-party provider.
     * This method supports the PKCE flow.
     */
    async signInWithOAuth(credentials) {
      var _a, _b, _c, _d;
      return await this._handleProviderSignIn(credentials.provider, {
        redirectTo: (_a = credentials.options) === null || _a === void 0 ? void 0 : _a.redirectTo,
        scopes: (_b = credentials.options) === null || _b === void 0 ? void 0 : _b.scopes,
        queryParams: (_c = credentials.options) === null || _c === void 0 ? void 0 : _c.queryParams,
        skipBrowserRedirect: (_d = credentials.options) === null || _d === void 0 ? void 0 : _d.skipBrowserRedirect
      });
    }
    /**
     * Log in an existing user by exchanging an Auth Code issued during the PKCE flow.
     */
    async exchangeCodeForSession(authCode) {
      await this.initializePromise;
      return this._acquireLock(this.lockAcquireTimeout, async () => {
        return this._exchangeCodeForSession(authCode);
      });
    }
    /**
     * Signs in a user by verifying a message signed by the user's private key.
     * Supports Ethereum (via Sign-In-With-Ethereum) & Solana (Sign-In-With-Solana) standards,
     * both of which derive from the EIP-4361 standard
     * With slight variation on Solana's side.
     * @reference https://eips.ethereum.org/EIPS/eip-4361
     */
    async signInWithWeb3(credentials) {
      const { chain } = credentials;
      switch (chain) {
        case "ethereum":
          return await this.signInWithEthereum(credentials);
        case "solana":
          return await this.signInWithSolana(credentials);
        default:
          throw new Error(`@supabase/auth-js: Unsupported chain "${chain}"`);
      }
    }
    async signInWithEthereum(credentials) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
      let message;
      let signature;
      if ("message" in credentials) {
        message = credentials.message;
        signature = credentials.signature;
      } else {
        const { chain, wallet, statement, options } = credentials;
        let resolvedWallet;
        if (!isBrowser()) {
          if (typeof wallet !== "object" || !(options === null || options === void 0 ? void 0 : options.url)) {
            throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
          }
          resolvedWallet = wallet;
        } else if (typeof wallet === "object") {
          resolvedWallet = wallet;
        } else {
          const windowAny = window;
          if ("ethereum" in windowAny && typeof windowAny.ethereum === "object" && "request" in windowAny.ethereum && typeof windowAny.ethereum.request === "function") {
            resolvedWallet = windowAny.ethereum;
          } else {
            throw new Error(`@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.`);
          }
        }
        const url = new URL((_a = options === null || options === void 0 ? void 0 : options.url) !== null && _a !== void 0 ? _a : window.location.href);
        const accounts = await resolvedWallet.request({
          method: "eth_requestAccounts"
        }).then((accs) => accs).catch(() => {
          throw new Error(`@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid`);
        });
        if (!accounts || accounts.length === 0) {
          throw new Error(`@supabase/auth-js: No accounts available. Please ensure the wallet is connected.`);
        }
        const address = getAddress(accounts[0]);
        let chainId = (_b = options === null || options === void 0 ? void 0 : options.signInWithEthereum) === null || _b === void 0 ? void 0 : _b.chainId;
        if (!chainId) {
          const chainIdHex = await resolvedWallet.request({
            method: "eth_chainId"
          });
          chainId = fromHex(chainIdHex);
        }
        const siweMessage = {
          domain: url.host,
          address,
          statement,
          uri: url.href,
          version: "1",
          chainId,
          nonce: (_c = options === null || options === void 0 ? void 0 : options.signInWithEthereum) === null || _c === void 0 ? void 0 : _c.nonce,
          issuedAt: (_e = (_d = options === null || options === void 0 ? void 0 : options.signInWithEthereum) === null || _d === void 0 ? void 0 : _d.issuedAt) !== null && _e !== void 0 ? _e : /* @__PURE__ */ new Date(),
          expirationTime: (_f = options === null || options === void 0 ? void 0 : options.signInWithEthereum) === null || _f === void 0 ? void 0 : _f.expirationTime,
          notBefore: (_g = options === null || options === void 0 ? void 0 : options.signInWithEthereum) === null || _g === void 0 ? void 0 : _g.notBefore,
          requestId: (_h = options === null || options === void 0 ? void 0 : options.signInWithEthereum) === null || _h === void 0 ? void 0 : _h.requestId,
          resources: (_j = options === null || options === void 0 ? void 0 : options.signInWithEthereum) === null || _j === void 0 ? void 0 : _j.resources
        };
        message = createSiweMessage(siweMessage);
        signature = await resolvedWallet.request({
          method: "personal_sign",
          params: [toHex(message), address]
        });
      }
      try {
        const { data, error } = await _request(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
          headers: this.headers,
          body: Object.assign({
            chain: "ethereum",
            message,
            signature
          }, ((_k = credentials.options) === null || _k === void 0 ? void 0 : _k.captchaToken) ? { gotrue_meta_security: { captcha_token: (_l = credentials.options) === null || _l === void 0 ? void 0 : _l.captchaToken } } : null),
          xform: _sessionResponse
        });
        if (error) {
          throw error;
        }
        if (!data || !data.session || !data.user) {
          const invalidTokenError = new AuthInvalidTokenResponseError();
          return this._returnResult({ data: { user: null, session: null }, error: invalidTokenError });
        }
        if (data.session) {
          await this._saveSession(data.session);
          await this._notifyAllSubscribers("SIGNED_IN", data.session);
        }
        return this._returnResult({ data: Object.assign({}, data), error });
      } catch (error) {
        if (isAuthError(error)) {
          return this._returnResult({ data: { user: null, session: null }, error });
        }
        throw error;
      }
    }
    async signInWithSolana(credentials) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
      let message;
      let signature;
      if ("message" in credentials) {
        message = credentials.message;
        signature = credentials.signature;
      } else {
        const { chain, wallet, statement, options } = credentials;
        let resolvedWallet;
        if (!isBrowser()) {
          if (typeof wallet !== "object" || !(options === null || options === void 0 ? void 0 : options.url)) {
            throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
          }
          resolvedWallet = wallet;
        } else if (typeof wallet === "object") {
          resolvedWallet = wallet;
        } else {
          const windowAny = window;
          if ("solana" in windowAny && typeof windowAny.solana === "object" && ("signIn" in windowAny.solana && typeof windowAny.solana.signIn === "function" || "signMessage" in windowAny.solana && typeof windowAny.solana.signMessage === "function")) {
            resolvedWallet = windowAny.solana;
          } else {
            throw new Error(`@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.`);
          }
        }
        const url = new URL((_a = options === null || options === void 0 ? void 0 : options.url) !== null && _a !== void 0 ? _a : window.location.href);
        if ("signIn" in resolvedWallet && resolvedWallet.signIn) {
          const output = await resolvedWallet.signIn(Object.assign(Object.assign(Object.assign({ issuedAt: (/* @__PURE__ */ new Date()).toISOString() }, options === null || options === void 0 ? void 0 : options.signInWithSolana), {
            // non-overridable properties
            version: "1",
            domain: url.host,
            uri: url.href
          }), statement ? { statement } : null));
          let outputToProcess;
          if (Array.isArray(output) && output[0] && typeof output[0] === "object") {
            outputToProcess = output[0];
          } else if (output && typeof output === "object" && "signedMessage" in output && "signature" in output) {
            outputToProcess = output;
          } else {
            throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");
          }
          if ("signedMessage" in outputToProcess && "signature" in outputToProcess && (typeof outputToProcess.signedMessage === "string" || outputToProcess.signedMessage instanceof Uint8Array) && outputToProcess.signature instanceof Uint8Array) {
            message = typeof outputToProcess.signedMessage === "string" ? outputToProcess.signedMessage : new TextDecoder().decode(outputToProcess.signedMessage);
            signature = outputToProcess.signature;
          } else {
            throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields");
          }
        } else {
          if (!("signMessage" in resolvedWallet) || typeof resolvedWallet.signMessage !== "function" || !("publicKey" in resolvedWallet) || typeof resolvedWallet !== "object" || !resolvedWallet.publicKey || !("toBase58" in resolvedWallet.publicKey) || typeof resolvedWallet.publicKey.toBase58 !== "function") {
            throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");
          }
          message = [
            `${url.host} wants you to sign in with your Solana account:`,
            resolvedWallet.publicKey.toBase58(),
            ...statement ? ["", statement, ""] : [""],
            "Version: 1",
            `URI: ${url.href}`,
            `Issued At: ${(_c = (_b = options === null || options === void 0 ? void 0 : options.signInWithSolana) === null || _b === void 0 ? void 0 : _b.issuedAt) !== null && _c !== void 0 ? _c : (/* @__PURE__ */ new Date()).toISOString()}`,
            ...((_d = options === null || options === void 0 ? void 0 : options.signInWithSolana) === null || _d === void 0 ? void 0 : _d.notBefore) ? [`Not Before: ${options.signInWithSolana.notBefore}`] : [],
            ...((_e = options === null || options === void 0 ? void 0 : options.signInWithSolana) === null || _e === void 0 ? void 0 : _e.expirationTime) ? [`Expiration Time: ${options.signInWithSolana.expirationTime}`] : [],
            ...((_f = options === null || options === void 0 ? void 0 : options.signInWithSolana) === null || _f === void 0 ? void 0 : _f.chainId) ? [`Chain ID: ${options.signInWithSolana.chainId}`] : [],
            ...((_g = options === null || options === void 0 ? void 0 : options.signInWithSolana) === null || _g === void 0 ? void 0 : _g.nonce) ? [`Nonce: ${options.signInWithSolana.nonce}`] : [],
            ...((_h = options === null || options === void 0 ? void 0 : options.signInWithSolana) === null || _h === void 0 ? void 0 : _h.requestId) ? [`Request ID: ${options.signInWithSolana.requestId}`] : [],
            ...((_k = (_j = options === null || options === void 0 ? void 0 : options.signInWithSolana) === null || _j === void 0 ? void 0 : _j.resources) === null || _k === void 0 ? void 0 : _k.length) ? [
              "Resources",
              ...options.signInWithSolana.resources.map((resource) => `- ${resource}`)
            ] : []
          ].join("\n");
          const maybeSignature = await resolvedWallet.signMessage(new TextEncoder().encode(message), "utf8");
          if (!maybeSignature || !(maybeSignature instanceof Uint8Array)) {
            throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");
          }
          signature = maybeSignature;
        }
      }
      try {
        const { data, error } = await _request(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
          headers: this.headers,
          body: Object.assign({ chain: "solana", message, signature: bytesToBase64URL(signature) }, ((_l = credentials.options) === null || _l === void 0 ? void 0 : _l.captchaToken) ? { gotrue_meta_security: { captcha_token: (_m = credentials.options) === null || _m === void 0 ? void 0 : _m.captchaToken } } : null),
          xform: _sessionResponse
        });
        if (error) {
          throw error;
        }
        if (!data || !data.session || !data.user) {
          const invalidTokenError = new AuthInvalidTokenResponseError();
          return this._returnResult({ data: { user: null, session: null }, error: invalidTokenError });
        }
        if (data.session) {
          await this._saveSession(data.session);
          await this._notifyAllSubscribers("SIGNED_IN", data.session);
        }
        return this._returnResult({ data: Object.assign({}, data), error });
      } catch (error) {
        if (isAuthError(error)) {
          return this._returnResult({ data: { user: null, session: null }, error });
        }
        throw error;
      }
    }
    async _exchangeCodeForSession(authCode) {
      const storageItem = await getItemAsync(this.storage, `${this.storageKey}-code-verifier`);
      const [codeVerifier, redirectType] = (storageItem !== null && storageItem !== void 0 ? storageItem : "").split("/");
      try {
        if (!codeVerifier && this.flowType === "pkce") {
          throw new AuthPKCECodeVerifierMissingError();
        }
        const { data, error } = await _request(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
          headers: this.headers,
          body: {
            auth_code: authCode,
            code_verifier: codeVerifier
          },
          xform: _sessionResponse
        });
        await removeItemAsync(this.storage, `${this.storageKey}-code-verifier`);
        if (error) {
          throw error;
        }
        if (!data || !data.session || !data.user) {
          const invalidTokenError = new AuthInvalidTokenResponseError();
          return this._returnResult({
            data: { user: null, session: null, redirectType: null },
            error: invalidTokenError
          });
        }
        if (data.session) {
          await this._saveSession(data.session);
          await this._notifyAllSubscribers("SIGNED_IN", data.session);
        }
        return this._returnResult({ data: Object.assign(Object.assign({}, data), { redirectType: redirectType !== null && redirectType !== void 0 ? redirectType : null }), error });
      } catch (error) {
        await removeItemAsync(this.storage, `${this.storageKey}-code-verifier`);
        if (isAuthError(error)) {
          return this._returnResult({
            data: { user: null, session: null, redirectType: null },
            error
          });
        }
        throw error;
      }
    }
    /**
     * Allows signing in with an OIDC ID token. The authentication provider used
     * should be enabled and configured.
     */
    async signInWithIdToken(credentials) {
      try {
        const { options, provider, token, access_token, nonce } = credentials;
        const res = await _request(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
          headers: this.headers,
          body: {
            provider,
            id_token: token,
            access_token,
            nonce,
            gotrue_meta_security: { captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken }
          },
          xform: _sessionResponse
        });
        const { data, error } = res;
        if (error) {
          return this._returnResult({ data: { user: null, session: null }, error });
        } else if (!data || !data.session || !data.user) {
          const invalidTokenError = new AuthInvalidTokenResponseError();
          return this._returnResult({ data: { user: null, session: null }, error: invalidTokenError });
        }
        if (data.session) {
          await this._saveSession(data.session);
          await this._notifyAllSubscribers("SIGNED_IN", data.session);
        }
        return this._returnResult({ data, error });
      } catch (error) {
        if (isAuthError(error)) {
          return this._returnResult({ data: { user: null, session: null }, error });
        }
        throw error;
      }
    }
    /**
     * Log in a user using magiclink or a one-time password (OTP).
     *
     * If the `{{ .ConfirmationURL }}` variable is specified in the email template, a magiclink will be sent.
     * If the `{{ .Token }}` variable is specified in the email template, an OTP will be sent.
     * If you're using phone sign-ins, only an OTP will be sent. You won't be able to send a magiclink for phone sign-ins.
     *
     * Be aware that you may get back an error message that will not distinguish
     * between the cases where the account does not exist or, that the account
     * can only be accessed via social login.
     *
     * Do note that you will need to configure a Whatsapp sender on Twilio
     * if you are using phone sign in with the 'whatsapp' channel. The whatsapp
     * channel is not supported on other providers
     * at this time.
     * This method supports PKCE when an email is passed.
     */
    async signInWithOtp(credentials) {
      var _a, _b, _c, _d, _e;
      try {
        if ("email" in credentials) {
          const { email, options } = credentials;
          let codeChallenge = null;
          let codeChallengeMethod = null;
          if (this.flowType === "pkce") {
            ;
            [codeChallenge, codeChallengeMethod] = await getCodeChallengeAndMethod(this.storage, this.storageKey);
          }
          const { error } = await _request(this.fetch, "POST", `${this.url}/otp`, {
            headers: this.headers,
            body: {
              email,
              data: (_a = options === null || options === void 0 ? void 0 : options.data) !== null && _a !== void 0 ? _a : {},
              create_user: (_b = options === null || options === void 0 ? void 0 : options.shouldCreateUser) !== null && _b !== void 0 ? _b : true,
              gotrue_meta_security: { captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken },
              code_challenge: codeChallenge,
              code_challenge_method: codeChallengeMethod
            },
            redirectTo: options === null || options === void 0 ? void 0 : options.emailRedirectTo
          });
          return this._returnResult({ data: { user: null, session: null }, error });
        }
        if ("phone" in credentials) {
          const { phone, options } = credentials;
          const { data, error } = await _request(this.fetch, "POST", `${this.url}/otp`, {
            headers: this.headers,
            body: {
              phone,
              data: (_c = options === null || options === void 0 ? void 0 : options.data) !== null && _c !== void 0 ? _c : {},
              create_user: (_d = options === null || options === void 0 ? void 0 : options.shouldCreateUser) !== null && _d !== void 0 ? _d : true,
              gotrue_meta_security: { captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken },
              channel: (_e = options === null || options === void 0 ? void 0 : options.channel) !== null && _e !== void 0 ? _e : "sms"
            }
          });
          return this._returnResult({
            data: { user: null, session: null, messageId: data === null || data === void 0 ? void 0 : data.message_id },
            error
          });
        }
        throw new AuthInvalidCredentialsError("You must provide either an email or phone number.");
      } catch (error) {
        await removeItemAsync(this.storage, `${this.storageKey}-code-verifier`);
        if (isAuthError(error)) {
          return this._returnResult({ data: { user: null, session: null }, error });
        }
        throw error;
      }
    }
    /**
     * Log in a user given a User supplied OTP or TokenHash received through mobile or email.
     */
    async verifyOtp(params) {
      var _a, _b;
      try {
        let redirectTo = void 0;
        let captchaToken = void 0;
        if ("options" in params) {
          redirectTo = (_a = params.options) === null || _a === void 0 ? void 0 : _a.redirectTo;
          captchaToken = (_b = params.options) === null || _b === void 0 ? void 0 : _b.captchaToken;
        }
        const { data, error } = await _request(this.fetch, "POST", `${this.url}/verify`, {
          headers: this.headers,
          body: Object.assign(Object.assign({}, params), { gotrue_meta_security: { captcha_token: captchaToken } }),
          redirectTo,
          xform: _sessionResponse
        });
        if (error) {
          throw error;
        }
        if (!data) {
          const tokenVerificationError = new Error("An error occurred on token verification.");
          throw tokenVerificationError;
        }
        const session = data.session;
        const user = data.user;
        if (session === null || session === void 0 ? void 0 : session.access_token) {
          await this._saveSession(session);
          await this._notifyAllSubscribers(params.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", session);
        }
        return this._returnResult({ data: { user, session }, error: null });
      } catch (error) {
        if (isAuthError(error)) {
          return this._returnResult({ data: { user: null, session: null }, error });
        }
        throw error;
      }
    }
    /**
     * Attempts a single-sign on using an enterprise Identity Provider. A
     * successful SSO attempt will redirect the current page to the identity
     * provider authorization page. The redirect URL is implementation and SSO
     * protocol specific.
     *
     * You can use it by providing a SSO domain. Typically you can extract this
     * domain by asking users for their email address. If this domain is
     * registered on the Auth instance the redirect will use that organization's
     * currently active SSO Identity Provider for the login.
     *
     * If you have built an organization-specific login page, you can use the
     * organization's SSO Identity Provider UUID directly instead.
     */
    async signInWithSSO(params) {
      var _a, _b, _c, _d, _e;
      try {
        let codeChallenge = null;
        let codeChallengeMethod = null;
        if (this.flowType === "pkce") {
          ;
          [codeChallenge, codeChallengeMethod] = await getCodeChallengeAndMethod(this.storage, this.storageKey);
        }
        const result = await _request(this.fetch, "POST", `${this.url}/sso`, {
          body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in params ? { provider_id: params.providerId } : null), "domain" in params ? { domain: params.domain } : null), { redirect_to: (_b = (_a = params.options) === null || _a === void 0 ? void 0 : _a.redirectTo) !== null && _b !== void 0 ? _b : void 0 }), ((_c = params === null || params === void 0 ? void 0 : params.options) === null || _c === void 0 ? void 0 : _c.captchaToken) ? { gotrue_meta_security: { captcha_token: params.options.captchaToken } } : null), { skip_http_redirect: true, code_challenge: codeChallenge, code_challenge_method: codeChallengeMethod }),
          headers: this.headers,
          xform: _ssoResponse
        });
        if (((_d = result.data) === null || _d === void 0 ? void 0 : _d.url) && isBrowser() && !((_e = params.options) === null || _e === void 0 ? void 0 : _e.skipBrowserRedirect)) {
          window.location.assign(result.data.url);
        }
        return this._returnResult(result);
      } catch (error) {
        await removeItemAsync(this.storage, `${this.storageKey}-code-verifier`);
        if (isAuthError(error)) {
          return this._returnResult({ data: null, error });
        }
        throw error;
      }
    }
    /**
     * Sends a reauthentication OTP to the user's email or phone number.
     * Requires the user to be signed-in.
     */
    async reauthenticate() {
      await this.initializePromise;
      return await this._acquireLock(this.lockAcquireTimeout, async () => {
        return await this._reauthenticate();
      });
    }
    async _reauthenticate() {
      try {
        return await this._useSession(async (result) => {
          const { data: { session }, error: sessionError } = result;
          if (sessionError)
            throw sessionError;
          if (!session)
            throw new AuthSessionMissingError();
          const { error } = await _request(this.fetch, "GET", `${this.url}/reauthenticate`, {
            headers: this.headers,
            jwt: session.access_token
          });
          return this._returnResult({ data: { user: null, session: null }, error });
        });
      } catch (error) {
        if (isAuthError(error)) {
          return this._returnResult({ data: { user: null, session: null }, error });
        }
        throw error;
      }
    }
    /**
     * Resends an existing signup confirmation email, email change email, SMS OTP or phone change OTP.
     */
    async resend(credentials) {
      try {
        const endpoint = `${this.url}/resend`;
        if ("email" in credentials) {
          const { email, type, options } = credentials;
          const { error } = await _request(this.fetch, "POST", endpoint, {
            headers: this.headers,
            body: {
              email,
              type,
              gotrue_meta_security: { captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken }
            },
            redirectTo: options === null || options === void 0 ? void 0 : options.emailRedirectTo
          });
          return this._returnResult({ data: { user: null, session: null }, error });
        } else if ("phone" in credentials) {
          const { phone, type, options } = credentials;
          const { data, error } = await _request(this.fetch, "POST", endpoint, {
            headers: this.headers,
            body: {
              phone,
              type,
              gotrue_meta_security: { captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken }
            }
          });
          return this._returnResult({
            data: { user: null, session: null, messageId: data === null || data === void 0 ? void 0 : data.message_id },
            error
          });
        }
        throw new AuthInvalidCredentialsError("You must provide either an email or phone number and a type");
      } catch (error) {
        if (isAuthError(error)) {
          return this._returnResult({ data: { user: null, session: null }, error });
        }
        throw error;
      }
    }
    /**
     * Returns the session, refreshing it if necessary.
     *
     * The session returned can be null if the session is not detected which can happen in the event a user is not signed-in or has logged out.
     *
     * **IMPORTANT:** This method loads values directly from the storage attached
     * to the client. If that storage is based on request cookies for example,
     * the values in it may not be authentic and therefore it's strongly advised
     * against using this method and its results in such circumstances. A warning
     * will be emitted if this is detected. Use {@link #getUser()} instead.
     */
    async getSession() {
      await this.initializePromise;
      const result = await this._acquireLock(this.lockAcquireTimeout, async () => {
        return this._useSession(async (result2) => {
          return result2;
        });
      });
      return result;
    }
    /**
     * Acquires a global lock based on the storage key.
     */
    async _acquireLock(acquireTimeout, fn) {
      this._debug("#_acquireLock", "begin", acquireTimeout);
      try {
        if (this.lockAcquired) {
          const last = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve();
          const result = (async () => {
            await last;
            return await fn();
          })();
          this.pendingInLock.push((async () => {
            try {
              await result;
            } catch (e) {
            }
          })());
          return result;
        }
        return await this.lock(`lock:${this.storageKey}`, acquireTimeout, async () => {
          this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
          try {
            this.lockAcquired = true;
            const result = fn();
            this.pendingInLock.push((async () => {
              try {
                await result;
              } catch (e) {
              }
            })());
            await result;
            while (this.pendingInLock.length) {
              const waitOn = [...this.pendingInLock];
              await Promise.all(waitOn);
              this.pendingInLock.splice(0, waitOn.length);
            }
            return await result;
          } finally {
            this._debug("#_acquireLock", "lock released for storage key", this.storageKey);
            this.lockAcquired = false;
          }
        });
      } finally {
        this._debug("#_acquireLock", "end");
      }
    }
    /**
     * Use instead of {@link #getSession} inside the library. It is
     * semantically usually what you want, as getting a session involves some
     * processing afterwards that requires only one client operating on the
     * session at once across multiple tabs or processes.
     */
    async _useSession(fn) {
      this._debug("#_useSession", "begin");
      try {
        const result = await this.__loadSession();
        return await fn(result);
      } finally {
        this._debug("#_useSession", "end");
      }
    }
    /**
     * NEVER USE DIRECTLY!
     *
     * Always use {@link #_useSession}.
     */
    async __loadSession() {
      this._debug("#__loadSession()", "begin");
      if (!this.lockAcquired) {
        this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
      }
      try {
        let currentSession = null;
        const maybeSession = await getItemAsync(this.storage, this.storageKey);
        this._debug("#getSession()", "session from storage", maybeSession);
        if (maybeSession !== null) {
          if (this._isValidSession(maybeSession)) {
            currentSession = maybeSession;
          } else {
            this._debug("#getSession()", "session from storage is not valid");
            await this._removeSession();
          }
        }
        if (!currentSession) {
          return { data: { session: null }, error: null };
        }
        const hasExpired = currentSession.expires_at ? currentSession.expires_at * 1e3 - Date.now() < EXPIRY_MARGIN_MS : false;
        this._debug("#__loadSession()", `session has${hasExpired ? "" : " not"} expired`, "expires_at", currentSession.expires_at);
        if (!hasExpired) {
          if (this.userStorage) {
            const maybeUser = await getItemAsync(this.userStorage, this.storageKey + "-user");
            if (maybeUser === null || maybeUser === void 0 ? void 0 : maybeUser.user) {
              currentSession.user = maybeUser.user;
            } else {
              currentSession.user = userNotAvailableProxy();
            }
          }
          if (this.storage.isServer && currentSession.user && !currentSession.user.__isUserNotAvailableProxy) {
            const suppressWarningRef = { value: this.suppressGetSessionWarning };
            currentSession.user = insecureUserWarningProxy(currentSession.user, suppressWarningRef);
            if (suppressWarningRef.value) {
              this.suppressGetSessionWarning = true;
            }
          }
          return { data: { session: currentSession }, error: null };
        }
        const { data: session, error } = await this._callRefreshToken(currentSession.refresh_token);
        if (error) {
          return this._returnResult({ data: { session: null }, error });
        }
        return this._returnResult({ data: { session }, error: null });
      } finally {
        this._debug("#__loadSession()", "end");
      }
    }
    /**
     * Gets the current user details if there is an existing session. This method
     * performs a network request to the Supabase Auth server, so the returned
     * value is authentic and can be used to base authorization rules on.
     *
     * @param jwt Takes in an optional access token JWT. If no JWT is provided, the JWT from the current session is used.
     */
    async getUser(jwt) {
      if (jwt) {
        return await this._getUser(jwt);
      }
      await this.initializePromise;
      const result = await this._acquireLock(this.lockAcquireTimeout, async () => {
        return await this._getUser();
      });
      if (result.data.user) {
        this.suppressGetSessionWarning = true;
      }
      return result;
    }
    async _getUser(jwt) {
      try {
        if (jwt) {
          return await _request(this.fetch, "GET", `${this.url}/user`, {
            headers: this.headers,
            jwt,
            xform: _userResponse
          });
        }
        return await this._useSession(async (result) => {
          var _a, _b, _c;
          const { data, error } = result;
          if (error) {
            throw error;
          }
          if (!((_a = data.session) === null || _a === void 0 ? void 0 : _a.access_token) && !this.hasCustomAuthorizationHeader) {
            return { data: { user: null }, error: new AuthSessionMissingError() };
          }
          return await _request(this.fetch, "GET", `${this.url}/user`, {
            headers: this.headers,
            jwt: (_c = (_b = data.session) === null || _b === void 0 ? void 0 : _b.access_token) !== null && _c !== void 0 ? _c : void 0,
            xform: _userResponse
          });
        });
      } catch (error) {
        if (isAuthError(error)) {
          if (isAuthSessionMissingError(error)) {
            await this._removeSession();
            await removeItemAsync(this.storage, `${this.storageKey}-code-verifier`);
          }
          return this._returnResult({ data: { user: null }, error });
        }
        throw error;
      }
    }
    /**
     * Updates user data for a logged in user.
     */
    async updateUser(attributes, options = {}) {
      await this.initializePromise;
      return await this._acquireLock(this.lockAcquireTimeout, async () => {
        return await this._updateUser(attributes, options);
      });
    }
    async _updateUser(attributes, options = {}) {
      try {
        return await this._useSession(async (result) => {
          const { data: sessionData, error: sessionError } = result;
          if (sessionError) {
            throw sessionError;
          }
          if (!sessionData.session) {
            throw new AuthSessionMissingError();
          }
          const session = sessionData.session;
          let codeChallenge = null;
          let codeChallengeMethod = null;
          if (this.flowType === "pkce" && attributes.email != null) {
            ;
            [codeChallenge, codeChallengeMethod] = await getCodeChallengeAndMethod(this.storage, this.storageKey);
          }
          const { data, error: userError } = await _request(this.fetch, "PUT", `${this.url}/user`, {
            headers: this.headers,
            redirectTo: options === null || options === void 0 ? void 0 : options.emailRedirectTo,
            body: Object.assign(Object.assign({}, attributes), { code_challenge: codeChallenge, code_challenge_method: codeChallengeMethod }),
            jwt: session.access_token,
            xform: _userResponse
          });
          if (userError) {
            throw userError;
          }
          session.user = data.user;
          await this._saveSession(session);
          await this._notifyAllSubscribers("USER_UPDATED", session);
          return this._returnResult({ data: { user: session.user }, error: null });
        });
      } catch (error) {
        await removeItemAsync(this.storage, `${this.storageKey}-code-verifier`);
        if (isAuthError(error)) {
          return this._returnResult({ data: { user: null }, error });
        }
        throw error;
      }
    }
    /**
     * Sets the session data from the current session. If the current session is expired, setSession will take care of refreshing it to obtain a new session.
     * If the refresh token or access token in the current session is invalid, an error will be thrown.
     * @param currentSession The current session that minimally contains an access token and refresh token.
     */
    async setSession(currentSession) {
      await this.initializePromise;
      return await this._acquireLock(this.lockAcquireTimeout, async () => {
        return await this._setSession(currentSession);
      });
    }
    async _setSession(currentSession) {
      try {
        if (!currentSession.access_token || !currentSession.refresh_token) {
          throw new AuthSessionMissingError();
        }
        const timeNow = Date.now() / 1e3;
        let expiresAt2 = timeNow;
        let hasExpired = true;
        let session = null;
        const { payload } = decodeJWT(currentSession.access_token);
        if (payload.exp) {
          expiresAt2 = payload.exp;
          hasExpired = expiresAt2 <= timeNow;
        }
        if (hasExpired) {
          const { data: refreshedSession, error } = await this._callRefreshToken(currentSession.refresh_token);
          if (error) {
            return this._returnResult({ data: { user: null, session: null }, error });
          }
          if (!refreshedSession) {
            return { data: { user: null, session: null }, error: null };
          }
          session = refreshedSession;
        } else {
          const { data, error } = await this._getUser(currentSession.access_token);
          if (error) {
            return this._returnResult({ data: { user: null, session: null }, error });
          }
          session = {
            access_token: currentSession.access_token,
            refresh_token: currentSession.refresh_token,
            user: data.user,
            token_type: "bearer",
            expires_in: expiresAt2 - timeNow,
            expires_at: expiresAt2
          };
          await this._saveSession(session);
          await this._notifyAllSubscribers("SIGNED_IN", session);
        }
        return this._returnResult({ data: { user: session.user, session }, error: null });
      } catch (error) {
        if (isAuthError(error)) {
          return this._returnResult({ data: { session: null, user: null }, error });
        }
        throw error;
      }
    }
    /**
     * Returns a new session, regardless of expiry status.
     * Takes in an optional current session. If not passed in, then refreshSession() will attempt to retrieve it from getSession().
     * If the current session's refresh token is invalid, an error will be thrown.
     * @param currentSession The current session. If passed in, it must contain a refresh token.
     */
    async refreshSession(currentSession) {
      await this.initializePromise;
      return await this._acquireLock(this.lockAcquireTimeout, async () => {
        return await this._refreshSession(currentSession);
      });
    }
    async _refreshSession(currentSession) {
      try {
        return await this._useSession(async (result) => {
          var _a;
          if (!currentSession) {
            const { data, error: error2 } = result;
            if (error2) {
              throw error2;
            }
            currentSession = (_a = data.session) !== null && _a !== void 0 ? _a : void 0;
          }
          if (!(currentSession === null || currentSession === void 0 ? void 0 : currentSession.refresh_token)) {
            throw new AuthSessionMissingError();
          }
          const { data: session, error } = await this._callRefreshToken(currentSession.refresh_token);
          if (error) {
            return this._returnResult({ data: { user: null, session: null }, error });
          }
          if (!session) {
            return this._returnResult({ data: { user: null, session: null }, error: null });
          }
          return this._returnResult({ data: { user: session.user, session }, error: null });
        });
      } catch (error) {
        if (isAuthError(error)) {
          return this._returnResult({ data: { user: null, session: null }, error });
        }
        throw error;
      }
    }
    /**
     * Gets the session data from a URL string
     */
    async _getSessionFromURL(params, callbackUrlType) {
      try {
        if (!isBrowser())
          throw new AuthImplicitGrantRedirectError("No browser detected.");
        if (params.error || params.error_description || params.error_code) {
          throw new AuthImplicitGrantRedirectError(params.error_description || "Error in URL with unspecified error_description", {
            error: params.error || "unspecified_error",
            code: params.error_code || "unspecified_code"
          });
        }
        switch (callbackUrlType) {
          case "implicit":
            if (this.flowType === "pkce") {
              throw new AuthPKCEGrantCodeExchangeError("Not a valid PKCE flow url.");
            }
            break;
          case "pkce":
            if (this.flowType === "implicit") {
              throw new AuthImplicitGrantRedirectError("Not a valid implicit grant flow url.");
            }
            break;
          default:
        }
        if (callbackUrlType === "pkce") {
          this._debug("#_initialize()", "begin", "is PKCE flow", true);
          if (!params.code)
            throw new AuthPKCEGrantCodeExchangeError("No code detected.");
          const { data: data2, error: error2 } = await this._exchangeCodeForSession(params.code);
          if (error2)
            throw error2;
          const url = new URL(window.location.href);
          url.searchParams.delete("code");
          window.history.replaceState(window.history.state, "", url.toString());
          return { data: { session: data2.session, redirectType: null }, error: null };
        }
        const { provider_token, provider_refresh_token, access_token, refresh_token, expires_in, expires_at, token_type } = params;
        if (!access_token || !expires_in || !refresh_token || !token_type) {
          throw new AuthImplicitGrantRedirectError("No session defined in URL");
        }
        const timeNow = Math.round(Date.now() / 1e3);
        const expiresIn = parseInt(expires_in);
        let expiresAt2 = timeNow + expiresIn;
        if (expires_at) {
          expiresAt2 = parseInt(expires_at);
        }
        const actuallyExpiresIn = expiresAt2 - timeNow;
        if (actuallyExpiresIn * 1e3 <= AUTO_REFRESH_TICK_DURATION_MS) {
          console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${actuallyExpiresIn}s, should have been closer to ${expiresIn}s`);
        }
        const issuedAt = expiresAt2 - expiresIn;
        if (timeNow - issuedAt >= 120) {
          console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", issuedAt, expiresAt2, timeNow);
        } else if (timeNow - issuedAt < 0) {
          console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", issuedAt, expiresAt2, timeNow);
        }
        const { data, error } = await this._getUser(access_token);
        if (error)
          throw error;
        const session = {
          provider_token,
          provider_refresh_token,
          access_token,
          expires_in: expiresIn,
          expires_at: expiresAt2,
          refresh_token,
          token_type,
          user: data.user
        };
        window.location.hash = "";
        this._debug("#_getSessionFromURL()", "clearing window.location.hash");
        return this._returnResult({ data: { session, redirectType: params.type }, error: null });
      } catch (error) {
        if (isAuthError(error)) {
          return this._returnResult({ data: { session: null, redirectType: null }, error });
        }
        throw error;
      }
    }
    /**
     * Checks if the current URL contains parameters given by an implicit oauth grant flow (https://www.rfc-editor.org/rfc/rfc6749.html#section-4.2)
     *
     * If `detectSessionInUrl` is a function, it will be called with the URL and params to determine
     * if the URL should be processed as a Supabase auth callback. This allows users to exclude
     * URLs from other OAuth providers (e.g., Facebook Login) that also return access_token in the fragment.
     */
    _isImplicitGrantCallback(params) {
      if (typeof this.detectSessionInUrl === "function") {
        return this.detectSessionInUrl(new URL(window.location.href), params);
      }
      return Boolean(params.access_token || params.error_description);
    }
    /**
     * Checks if the current URL and backing storage contain parameters given by a PKCE flow
     */
    async _isPKCECallback(params) {
      const currentStorageContent = await getItemAsync(this.storage, `${this.storageKey}-code-verifier`);
      return !!(params.code && currentStorageContent);
    }
    /**
     * Inside a browser context, `signOut()` will remove the logged in user from the browser session and log them out - removing all items from localstorage and then trigger a `"SIGNED_OUT"` event.
     *
     * For server-side management, you can revoke all refresh tokens for a user by passing a user's JWT through to `auth.api.signOut(JWT: string)`.
     * There is no way to revoke a user's access token jwt until it expires. It is recommended to set a shorter expiry on the jwt for this reason.
     *
     * If using `others` scope, no `SIGNED_OUT` event is fired!
     */
    async signOut(options = { scope: "global" }) {
      await this.initializePromise;
      return await this._acquireLock(this.lockAcquireTimeout, async () => {
        return await this._signOut(options);
      });
    }
    async _signOut({ scope } = { scope: "global" }) {
      return await this._useSession(async (result) => {
        var _a;
        const { data, error: sessionError } = result;
        if (sessionError && !isAuthSessionMissingError(sessionError)) {
          return this._returnResult({ error: sessionError });
        }
        const accessToken = (_a = data.session) === null || _a === void 0 ? void 0 : _a.access_token;
        if (accessToken) {
          const { error } = await this.admin.signOut(accessToken, scope);
          if (error) {
            if (!(isAuthApiError(error) && (error.status === 404 || error.status === 401 || error.status === 403) || isAuthSessionMissingError(error))) {
              return this._returnResult({ error });
            }
          }
        }
        if (scope !== "others") {
          await this._removeSession();
          await removeItemAsync(this.storage, `${this.storageKey}-code-verifier`);
        }
        return this._returnResult({ error: null });
      });
    }
    onAuthStateChange(callback) {
      const id = generateCallbackId();
      const subscription = {
        id,
        callback,
        unsubscribe: () => {
          this._debug("#unsubscribe()", "state change callback with id removed", id);
          this.stateChangeEmitters.delete(id);
        }
      };
      this._debug("#onAuthStateChange()", "registered callback with id", id);
      this.stateChangeEmitters.set(id, subscription);
      (async () => {
        await this.initializePromise;
        await this._acquireLock(this.lockAcquireTimeout, async () => {
          this._emitInitialSession(id);
        });
      })();
      return { data: { subscription } };
    }
    async _emitInitialSession(id) {
      return await this._useSession(async (result) => {
        var _a, _b;
        try {
          const { data: { session }, error } = result;
          if (error)
            throw error;
          await ((_a = this.stateChangeEmitters.get(id)) === null || _a === void 0 ? void 0 : _a.callback("INITIAL_SESSION", session));
          this._debug("INITIAL_SESSION", "callback id", id, "session", session);
        } catch (err) {
          await ((_b = this.stateChangeEmitters.get(id)) === null || _b === void 0 ? void 0 : _b.callback("INITIAL_SESSION", null));
          this._debug("INITIAL_SESSION", "callback id", id, "error", err);
          console.error(err);
        }
      });
    }
    /**
     * Sends a password reset request to an email address. This method supports the PKCE flow.
     *
     * @param email The email address of the user.
     * @param options.redirectTo The URL to send the user to after they click the password reset link.
     * @param options.captchaToken Verification token received when the user completes the captcha on the site.
     */
    async resetPasswordForEmail(email, options = {}) {
      let codeChallenge = null;
      let codeChallengeMethod = null;
      if (this.flowType === "pkce") {
        ;
        [codeChallenge, codeChallengeMethod] = await getCodeChallengeAndMethod(
          this.storage,
          this.storageKey,
          true
          // isPasswordRecovery
        );
      }
      try {
        return await _request(this.fetch, "POST", `${this.url}/recover`, {
          body: {
            email,
            code_challenge: codeChallenge,
            code_challenge_method: codeChallengeMethod,
            gotrue_meta_security: { captcha_token: options.captchaToken }
          },
          headers: this.headers,
          redirectTo: options.redirectTo
        });
      } catch (error) {
        await removeItemAsync(this.storage, `${this.storageKey}-code-verifier`);
        if (isAuthError(error)) {
          return this._returnResult({ data: null, error });
        }
        throw error;
      }
    }
    /**
     * Gets all the identities linked to a user.
     */
    async getUserIdentities() {
      var _a;
      try {
        const { data, error } = await this.getUser();
        if (error)
          throw error;
        return this._returnResult({ data: { identities: (_a = data.user.identities) !== null && _a !== void 0 ? _a : [] }, error: null });
      } catch (error) {
        if (isAuthError(error)) {
          return this._returnResult({ data: null, error });
        }
        throw error;
      }
    }
    async linkIdentity(credentials) {
      if ("token" in credentials) {
        return this.linkIdentityIdToken(credentials);
      }
      return this.linkIdentityOAuth(credentials);
    }
    async linkIdentityOAuth(credentials) {
      var _a;
      try {
        const { data, error } = await this._useSession(async (result) => {
          var _a2, _b, _c, _d, _e;
          const { data: data2, error: error2 } = result;
          if (error2)
            throw error2;
          const url = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, credentials.provider, {
            redirectTo: (_a2 = credentials.options) === null || _a2 === void 0 ? void 0 : _a2.redirectTo,
            scopes: (_b = credentials.options) === null || _b === void 0 ? void 0 : _b.scopes,
            queryParams: (_c = credentials.options) === null || _c === void 0 ? void 0 : _c.queryParams,
            skipBrowserRedirect: true
          });
          return await _request(this.fetch, "GET", url, {
            headers: this.headers,
            jwt: (_e = (_d = data2.session) === null || _d === void 0 ? void 0 : _d.access_token) !== null && _e !== void 0 ? _e : void 0
          });
        });
        if (error)
          throw error;
        if (isBrowser() && !((_a = credentials.options) === null || _a === void 0 ? void 0 : _a.skipBrowserRedirect)) {
          window.location.assign(data === null || data === void 0 ? void 0 : data.url);
        }
        return this._returnResult({
          data: { provider: credentials.provider, url: data === null || data === void 0 ? void 0 : data.url },
          error: null
        });
      } catch (error) {
        if (isAuthError(error)) {
          return this._returnResult({ data: { provider: credentials.provider, url: null }, error });
        }
        throw error;
      }
    }
    async linkIdentityIdToken(credentials) {
      return await this._useSession(async (result) => {
        var _a;
        try {
          const { error: sessionError, data: { session } } = result;
          if (sessionError)
            throw sessionError;
          const { options, provider, token, access_token, nonce } = credentials;
          const res = await _request(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
            headers: this.headers,
            jwt: (_a = session === null || session === void 0 ? void 0 : session.access_token) !== null && _a !== void 0 ? _a : void 0,
            body: {
              provider,
              id_token: token,
              access_token,
              nonce,
              link_identity: true,
              gotrue_meta_security: { captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken }
            },
            xform: _sessionResponse
          });
          const { data, error } = res;
          if (error) {
            return this._returnResult({ data: { user: null, session: null }, error });
          } else if (!data || !data.session || !data.user) {
            return this._returnResult({
              data: { user: null, session: null },
              error: new AuthInvalidTokenResponseError()
            });
          }
          if (data.session) {
            await this._saveSession(data.session);
            await this._notifyAllSubscribers("USER_UPDATED", data.session);
          }
          return this._returnResult({ data, error });
        } catch (error) {
          await removeItemAsync(this.storage, `${this.storageKey}-code-verifier`);
          if (isAuthError(error)) {
            return this._returnResult({ data: { user: null, session: null }, error });
          }
          throw error;
        }
      });
    }
    /**
     * Unlinks an identity from a user by deleting it. The user will no longer be able to sign in with that identity once it's unlinked.
     */
    async unlinkIdentity(identity) {
      try {
        return await this._useSession(async (result) => {
          var _a, _b;
          const { data, error } = result;
          if (error) {
            throw error;
          }
          return await _request(this.fetch, "DELETE", `${this.url}/user/identities/${identity.identity_id}`, {
            headers: this.headers,
            jwt: (_b = (_a = data.session) === null || _a === void 0 ? void 0 : _a.access_token) !== null && _b !== void 0 ? _b : void 0
          });
        });
      } catch (error) {
        if (isAuthError(error)) {
          return this._returnResult({ data: null, error });
        }
        throw error;
      }
    }
    /**
     * Generates a new JWT.
     * @param refreshToken A valid refresh token that was returned on login.
     */
    async _refreshAccessToken(refreshToken) {
      const debugName = `#_refreshAccessToken(${refreshToken.substring(0, 5)}...)`;
      this._debug(debugName, "begin");
      try {
        const startedAt = Date.now();
        return await retryable(async (attempt) => {
          if (attempt > 0) {
            await sleep(200 * Math.pow(2, attempt - 1));
          }
          this._debug(debugName, "refreshing attempt", attempt);
          return await _request(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
            body: { refresh_token: refreshToken },
            headers: this.headers,
            xform: _sessionResponse
          });
        }, (attempt, error) => {
          const nextBackOffInterval = 200 * Math.pow(2, attempt);
          return error && isAuthRetryableFetchError(error) && // retryable only if the request can be sent before the backoff overflows the tick duration
          Date.now() + nextBackOffInterval - startedAt < AUTO_REFRESH_TICK_DURATION_MS;
        });
      } catch (error) {
        this._debug(debugName, "error", error);
        if (isAuthError(error)) {
          return this._returnResult({ data: { session: null, user: null }, error });
        }
        throw error;
      } finally {
        this._debug(debugName, "end");
      }
    }
    _isValidSession(maybeSession) {
      const isValidSession = typeof maybeSession === "object" && maybeSession !== null && "access_token" in maybeSession && "refresh_token" in maybeSession && "expires_at" in maybeSession;
      return isValidSession;
    }
    async _handleProviderSignIn(provider, options) {
      const url = await this._getUrlForProvider(`${this.url}/authorize`, provider, {
        redirectTo: options.redirectTo,
        scopes: options.scopes,
        queryParams: options.queryParams
      });
      this._debug("#_handleProviderSignIn()", "provider", provider, "options", options, "url", url);
      if (isBrowser() && !options.skipBrowserRedirect) {
        window.location.assign(url);
      }
      return { data: { provider, url }, error: null };
    }
    /**
     * Recovers the session from LocalStorage and refreshes the token
     * Note: this method is async to accommodate for AsyncStorage e.g. in React native.
     */
    async _recoverAndRefresh() {
      var _a, _b;
      const debugName = "#_recoverAndRefresh()";
      this._debug(debugName, "begin");
      try {
        const currentSession = await getItemAsync(this.storage, this.storageKey);
        if (currentSession && this.userStorage) {
          let maybeUser = await getItemAsync(this.userStorage, this.storageKey + "-user");
          if (!this.storage.isServer && Object.is(this.storage, this.userStorage) && !maybeUser) {
            maybeUser = { user: currentSession.user };
            await setItemAsync(this.userStorage, this.storageKey + "-user", maybeUser);
          }
          currentSession.user = (_a = maybeUser === null || maybeUser === void 0 ? void 0 : maybeUser.user) !== null && _a !== void 0 ? _a : userNotAvailableProxy();
        } else if (currentSession && !currentSession.user) {
          if (!currentSession.user) {
            const separateUser = await getItemAsync(this.storage, this.storageKey + "-user");
            if (separateUser && (separateUser === null || separateUser === void 0 ? void 0 : separateUser.user)) {
              currentSession.user = separateUser.user;
              await removeItemAsync(this.storage, this.storageKey + "-user");
              await setItemAsync(this.storage, this.storageKey, currentSession);
            } else {
              currentSession.user = userNotAvailableProxy();
            }
          }
        }
        this._debug(debugName, "session from storage", currentSession);
        if (!this._isValidSession(currentSession)) {
          this._debug(debugName, "session is not valid");
          if (currentSession !== null) {
            await this._removeSession();
          }
          return;
        }
        const expiresWithMargin = ((_b = currentSession.expires_at) !== null && _b !== void 0 ? _b : Infinity) * 1e3 - Date.now() < EXPIRY_MARGIN_MS;
        this._debug(debugName, `session has${expiresWithMargin ? "" : " not"} expired with margin of ${EXPIRY_MARGIN_MS}s`);
        if (expiresWithMargin) {
          if (this.autoRefreshToken && currentSession.refresh_token) {
            const { error } = await this._callRefreshToken(currentSession.refresh_token);
            if (error) {
              console.error(error);
              if (!isAuthRetryableFetchError(error)) {
                this._debug(debugName, "refresh failed with a non-retryable error, removing the session", error);
                await this._removeSession();
              }
            }
          }
        } else if (currentSession.user && currentSession.user.__isUserNotAvailableProxy === true) {
          try {
            const { data, error: userError } = await this._getUser(currentSession.access_token);
            if (!userError && (data === null || data === void 0 ? void 0 : data.user)) {
              currentSession.user = data.user;
              await this._saveSession(currentSession);
              await this._notifyAllSubscribers("SIGNED_IN", currentSession);
            } else {
              this._debug(debugName, "could not get user data, skipping SIGNED_IN notification");
            }
          } catch (getUserError) {
            console.error("Error getting user data:", getUserError);
            this._debug(debugName, "error getting user data, skipping SIGNED_IN notification", getUserError);
          }
        } else {
          await this._notifyAllSubscribers("SIGNED_IN", currentSession);
        }
      } catch (err) {
        this._debug(debugName, "error", err);
        console.error(err);
        return;
      } finally {
        this._debug(debugName, "end");
      }
    }
    async _callRefreshToken(refreshToken) {
      var _a, _b;
      if (!refreshToken) {
        throw new AuthSessionMissingError();
      }
      if (this.refreshingDeferred) {
        return this.refreshingDeferred.promise;
      }
      const debugName = `#_callRefreshToken(${refreshToken.substring(0, 5)}...)`;
      this._debug(debugName, "begin");
      try {
        this.refreshingDeferred = new Deferred();
        const { data, error } = await this._refreshAccessToken(refreshToken);
        if (error)
          throw error;
        if (!data.session)
          throw new AuthSessionMissingError();
        await this._saveSession(data.session);
        await this._notifyAllSubscribers("TOKEN_REFRESHED", data.session);
        const result = { data: data.session, error: null };
        this.refreshingDeferred.resolve(result);
        return result;
      } catch (error) {
        this._debug(debugName, "error", error);
        if (isAuthError(error)) {
          const result = { data: null, error };
          if (!isAuthRetryableFetchError(error)) {
            await this._removeSession();
          }
          (_a = this.refreshingDeferred) === null || _a === void 0 ? void 0 : _a.resolve(result);
          return result;
        }
        (_b = this.refreshingDeferred) === null || _b === void 0 ? void 0 : _b.reject(error);
        throw error;
      } finally {
        this.refreshingDeferred = null;
        this._debug(debugName, "end");
      }
    }
    async _notifyAllSubscribers(event, session, broadcast = true) {
      const debugName = `#_notifyAllSubscribers(${event})`;
      this._debug(debugName, "begin", session, `broadcast = ${broadcast}`);
      try {
        if (this.broadcastChannel && broadcast) {
          this.broadcastChannel.postMessage({ event, session });
        }
        const errors = [];
        const promises = Array.from(this.stateChangeEmitters.values()).map(async (x) => {
          try {
            await x.callback(event, session);
          } catch (e) {
            errors.push(e);
          }
        });
        await Promise.all(promises);
        if (errors.length > 0) {
          for (let i = 0; i < errors.length; i += 1) {
            console.error(errors[i]);
          }
          throw errors[0];
        }
      } finally {
        this._debug(debugName, "end");
      }
    }
    /**
     * set currentSession and currentUser
     * process to _startAutoRefreshToken if possible
     */
    async _saveSession(session) {
      this._debug("#_saveSession()", session);
      this.suppressGetSessionWarning = true;
      await removeItemAsync(this.storage, `${this.storageKey}-code-verifier`);
      const sessionToProcess = Object.assign({}, session);
      const userIsProxy = sessionToProcess.user && sessionToProcess.user.__isUserNotAvailableProxy === true;
      if (this.userStorage) {
        if (!userIsProxy && sessionToProcess.user) {
          await setItemAsync(this.userStorage, this.storageKey + "-user", {
            user: sessionToProcess.user
          });
        } else if (userIsProxy) {
        }
        const mainSessionData = Object.assign({}, sessionToProcess);
        delete mainSessionData.user;
        const clonedMainSessionData = deepClone(mainSessionData);
        await setItemAsync(this.storage, this.storageKey, clonedMainSessionData);
      } else {
        const clonedSession = deepClone(sessionToProcess);
        await setItemAsync(this.storage, this.storageKey, clonedSession);
      }
    }
    async _removeSession() {
      this._debug("#_removeSession()");
      this.suppressGetSessionWarning = false;
      await removeItemAsync(this.storage, this.storageKey);
      await removeItemAsync(this.storage, this.storageKey + "-code-verifier");
      await removeItemAsync(this.storage, this.storageKey + "-user");
      if (this.userStorage) {
        await removeItemAsync(this.userStorage, this.storageKey + "-user");
      }
      await this._notifyAllSubscribers("SIGNED_OUT", null);
    }
    /**
     * Removes any registered visibilitychange callback.
     *
     * {@see #startAutoRefresh}
     * {@see #stopAutoRefresh}
     */
    _removeVisibilityChangedCallback() {
      this._debug("#_removeVisibilityChangedCallback()");
      const callback = this.visibilityChangedCallback;
      this.visibilityChangedCallback = null;
      try {
        if (callback && isBrowser() && (window === null || window === void 0 ? void 0 : window.removeEventListener)) {
          window.removeEventListener("visibilitychange", callback);
        }
      } catch (e) {
        console.error("removing visibilitychange callback failed", e);
      }
    }
    /**
     * This is the private implementation of {@link #startAutoRefresh}. Use this
     * within the library.
     */
    async _startAutoRefresh() {
      await this._stopAutoRefresh();
      this._debug("#_startAutoRefresh()");
      const ticker = setInterval(() => this._autoRefreshTokenTick(), AUTO_REFRESH_TICK_DURATION_MS);
      this.autoRefreshTicker = ticker;
      if (ticker && typeof ticker === "object" && typeof ticker.unref === "function") {
        ticker.unref();
      } else if (typeof Deno !== "undefined" && typeof Deno.unrefTimer === "function") {
        Deno.unrefTimer(ticker);
      }
      const timeout = setTimeout(async () => {
        await this.initializePromise;
        await this._autoRefreshTokenTick();
      }, 0);
      this.autoRefreshTickTimeout = timeout;
      if (timeout && typeof timeout === "object" && typeof timeout.unref === "function") {
        timeout.unref();
      } else if (typeof Deno !== "undefined" && typeof Deno.unrefTimer === "function") {
        Deno.unrefTimer(timeout);
      }
    }
    /**
     * This is the private implementation of {@link #stopAutoRefresh}. Use this
     * within the library.
     */
    async _stopAutoRefresh() {
      this._debug("#_stopAutoRefresh()");
      const ticker = this.autoRefreshTicker;
      this.autoRefreshTicker = null;
      if (ticker) {
        clearInterval(ticker);
      }
      const timeout = this.autoRefreshTickTimeout;
      this.autoRefreshTickTimeout = null;
      if (timeout) {
        clearTimeout(timeout);
      }
    }
    /**
     * Starts an auto-refresh process in the background. The session is checked
     * every few seconds. Close to the time of expiration a process is started to
     * refresh the session. If refreshing fails it will be retried for as long as
     * necessary.
     *
     * If you set the {@link GoTrueClientOptions#autoRefreshToken} you don't need
     * to call this function, it will be called for you.
     *
     * On browsers the refresh process works only when the tab/window is in the
     * foreground to conserve resources as well as prevent race conditions and
     * flooding auth with requests. If you call this method any managed
     * visibility change callback will be removed and you must manage visibility
     * changes on your own.
     *
     * On non-browser platforms the refresh process works *continuously* in the
     * background, which may not be desirable. You should hook into your
     * platform's foreground indication mechanism and call these methods
     * appropriately to conserve resources.
     *
     * {@see #stopAutoRefresh}
     */
    async startAutoRefresh() {
      this._removeVisibilityChangedCallback();
      await this._startAutoRefresh();
    }
    /**
     * Stops an active auto refresh process running in the background (if any).
     *
     * If you call this method any managed visibility change callback will be
     * removed and you must manage visibility changes on your own.
     *
     * See {@link #startAutoRefresh} for more details.
     */
    async stopAutoRefresh() {
      this._removeVisibilityChangedCallback();
      await this._stopAutoRefresh();
    }
    /**
     * Runs the auto refresh token tick.
     */
    async _autoRefreshTokenTick() {
      this._debug("#_autoRefreshTokenTick()", "begin");
      try {
        await this._acquireLock(0, async () => {
          try {
            const now = Date.now();
            try {
              return await this._useSession(async (result) => {
                const { data: { session } } = result;
                if (!session || !session.refresh_token || !session.expires_at) {
                  this._debug("#_autoRefreshTokenTick()", "no session");
                  return;
                }
                const expiresInTicks = Math.floor((session.expires_at * 1e3 - now) / AUTO_REFRESH_TICK_DURATION_MS);
                this._debug("#_autoRefreshTokenTick()", `access token expires in ${expiresInTicks} ticks, a tick lasts ${AUTO_REFRESH_TICK_DURATION_MS}ms, refresh threshold is ${AUTO_REFRESH_TICK_THRESHOLD} ticks`);
                if (expiresInTicks <= AUTO_REFRESH_TICK_THRESHOLD) {
                  await this._callRefreshToken(session.refresh_token);
                }
              });
            } catch (e) {
              console.error("Auto refresh tick failed with error. This is likely a transient error.", e);
            }
          } finally {
            this._debug("#_autoRefreshTokenTick()", "end");
          }
        });
      } catch (e) {
        if (e.isAcquireTimeout || e instanceof LockAcquireTimeoutError) {
          this._debug("auto refresh token tick lock not available");
        } else {
          throw e;
        }
      }
    }
    /**
     * Registers callbacks on the browser / platform, which in-turn run
     * algorithms when the browser window/tab are in foreground. On non-browser
     * platforms it assumes always foreground.
     */
    async _handleVisibilityChange() {
      this._debug("#_handleVisibilityChange()");
      if (!isBrowser() || !(window === null || window === void 0 ? void 0 : window.addEventListener)) {
        if (this.autoRefreshToken) {
          this.startAutoRefresh();
        }
        return false;
      }
      try {
        this.visibilityChangedCallback = async () => {
          try {
            await this._onVisibilityChanged(false);
          } catch (error) {
            this._debug("#visibilityChangedCallback", "error", error);
          }
        };
        window === null || window === void 0 ? void 0 : window.addEventListener("visibilitychange", this.visibilityChangedCallback);
        await this._onVisibilityChanged(true);
      } catch (error) {
        console.error("_handleVisibilityChange", error);
      }
    }
    /**
     * Callback registered with `window.addEventListener('visibilitychange')`.
     */
    async _onVisibilityChanged(calledFromInitialize) {
      const methodName = `#_onVisibilityChanged(${calledFromInitialize})`;
      this._debug(methodName, "visibilityState", document.visibilityState);
      if (document.visibilityState === "visible") {
        if (this.autoRefreshToken) {
          this._startAutoRefresh();
        }
        if (!calledFromInitialize) {
          await this.initializePromise;
          await this._acquireLock(this.lockAcquireTimeout, async () => {
            if (document.visibilityState !== "visible") {
              this._debug(methodName, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
              return;
            }
            await this._recoverAndRefresh();
          });
        }
      } else if (document.visibilityState === "hidden") {
        if (this.autoRefreshToken) {
          this._stopAutoRefresh();
        }
      }
    }
    /**
     * Generates the relevant login URL for a third-party provider.
     * @param options.redirectTo A URL or mobile address to send the user to after they are confirmed.
     * @param options.scopes A space-separated list of scopes granted to the OAuth application.
     * @param options.queryParams An object of key-value pairs containing query parameters granted to the OAuth application.
     */
    async _getUrlForProvider(url, provider, options) {
      const urlParams = [`provider=${encodeURIComponent(provider)}`];
      if (options === null || options === void 0 ? void 0 : options.redirectTo) {
        urlParams.push(`redirect_to=${encodeURIComponent(options.redirectTo)}`);
      }
      if (options === null || options === void 0 ? void 0 : options.scopes) {
        urlParams.push(`scopes=${encodeURIComponent(options.scopes)}`);
      }
      if (this.flowType === "pkce") {
        const [codeChallenge, codeChallengeMethod] = await getCodeChallengeAndMethod(this.storage, this.storageKey);
        const flowParams = new URLSearchParams({
          code_challenge: `${encodeURIComponent(codeChallenge)}`,
          code_challenge_method: `${encodeURIComponent(codeChallengeMethod)}`
        });
        urlParams.push(flowParams.toString());
      }
      if (options === null || options === void 0 ? void 0 : options.queryParams) {
        const query = new URLSearchParams(options.queryParams);
        urlParams.push(query.toString());
      }
      if (options === null || options === void 0 ? void 0 : options.skipBrowserRedirect) {
        urlParams.push(`skip_http_redirect=${options.skipBrowserRedirect}`);
      }
      return `${url}?${urlParams.join("&")}`;
    }
    async _unenroll(params) {
      try {
        return await this._useSession(async (result) => {
          var _a;
          const { data: sessionData, error: sessionError } = result;
          if (sessionError) {
            return this._returnResult({ data: null, error: sessionError });
          }
          return await _request(this.fetch, "DELETE", `${this.url}/factors/${params.factorId}`, {
            headers: this.headers,
            jwt: (_a = sessionData === null || sessionData === void 0 ? void 0 : sessionData.session) === null || _a === void 0 ? void 0 : _a.access_token
          });
        });
      } catch (error) {
        if (isAuthError(error)) {
          return this._returnResult({ data: null, error });
        }
        throw error;
      }
    }
    async _enroll(params) {
      try {
        return await this._useSession(async (result) => {
          var _a, _b;
          const { data: sessionData, error: sessionError } = result;
          if (sessionError) {
            return this._returnResult({ data: null, error: sessionError });
          }
          const body = Object.assign({ friendly_name: params.friendlyName, factor_type: params.factorType }, params.factorType === "phone" ? { phone: params.phone } : params.factorType === "totp" ? { issuer: params.issuer } : {});
          const { data, error } = await _request(this.fetch, "POST", `${this.url}/factors`, {
            body,
            headers: this.headers,
            jwt: (_a = sessionData === null || sessionData === void 0 ? void 0 : sessionData.session) === null || _a === void 0 ? void 0 : _a.access_token
          });
          if (error) {
            return this._returnResult({ data: null, error });
          }
          if (params.factorType === "totp" && data.type === "totp" && ((_b = data === null || data === void 0 ? void 0 : data.totp) === null || _b === void 0 ? void 0 : _b.qr_code)) {
            data.totp.qr_code = `data:image/svg+xml;utf-8,${data.totp.qr_code}`;
          }
          return this._returnResult({ data, error: null });
        });
      } catch (error) {
        if (isAuthError(error)) {
          return this._returnResult({ data: null, error });
        }
        throw error;
      }
    }
    async _verify(params) {
      return this._acquireLock(this.lockAcquireTimeout, async () => {
        try {
          return await this._useSession(async (result) => {
            var _a;
            const { data: sessionData, error: sessionError } = result;
            if (sessionError) {
              return this._returnResult({ data: null, error: sessionError });
            }
            const body = Object.assign({ challenge_id: params.challengeId }, "webauthn" in params ? {
              webauthn: Object.assign(Object.assign({}, params.webauthn), { credential_response: params.webauthn.type === "create" ? serializeCredentialCreationResponse(params.webauthn.credential_response) : serializeCredentialRequestResponse(params.webauthn.credential_response) })
            } : { code: params.code });
            const { data, error } = await _request(this.fetch, "POST", `${this.url}/factors/${params.factorId}/verify`, {
              body,
              headers: this.headers,
              jwt: (_a = sessionData === null || sessionData === void 0 ? void 0 : sessionData.session) === null || _a === void 0 ? void 0 : _a.access_token
            });
            if (error) {
              return this._returnResult({ data: null, error });
            }
            await this._saveSession(Object.assign({ expires_at: Math.round(Date.now() / 1e3) + data.expires_in }, data));
            await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", data);
            return this._returnResult({ data, error });
          });
        } catch (error) {
          if (isAuthError(error)) {
            return this._returnResult({ data: null, error });
          }
          throw error;
        }
      });
    }
    async _challenge(params) {
      return this._acquireLock(this.lockAcquireTimeout, async () => {
        try {
          return await this._useSession(async (result) => {
            var _a;
            const { data: sessionData, error: sessionError } = result;
            if (sessionError) {
              return this._returnResult({ data: null, error: sessionError });
            }
            const response = await _request(this.fetch, "POST", `${this.url}/factors/${params.factorId}/challenge`, {
              body: params,
              headers: this.headers,
              jwt: (_a = sessionData === null || sessionData === void 0 ? void 0 : sessionData.session) === null || _a === void 0 ? void 0 : _a.access_token
            });
            if (response.error) {
              return response;
            }
            const { data } = response;
            if (data.type !== "webauthn") {
              return { data, error: null };
            }
            switch (data.webauthn.type) {
              case "create":
                return {
                  data: Object.assign(Object.assign({}, data), { webauthn: Object.assign(Object.assign({}, data.webauthn), { credential_options: Object.assign(Object.assign({}, data.webauthn.credential_options), { publicKey: deserializeCredentialCreationOptions(data.webauthn.credential_options.publicKey) }) }) }),
                  error: null
                };
              case "request":
                return {
                  data: Object.assign(Object.assign({}, data), { webauthn: Object.assign(Object.assign({}, data.webauthn), { credential_options: Object.assign(Object.assign({}, data.webauthn.credential_options), { publicKey: deserializeCredentialRequestOptions(data.webauthn.credential_options.publicKey) }) }) }),
                  error: null
                };
            }
          });
        } catch (error) {
          if (isAuthError(error)) {
            return this._returnResult({ data: null, error });
          }
          throw error;
        }
      });
    }
    /**
     * {@see GoTrueMFAApi#challengeAndVerify}
     */
    async _challengeAndVerify(params) {
      const { data: challengeData, error: challengeError } = await this._challenge({
        factorId: params.factorId
      });
      if (challengeError) {
        return this._returnResult({ data: null, error: challengeError });
      }
      return await this._verify({
        factorId: params.factorId,
        challengeId: challengeData.id,
        code: params.code
      });
    }
    /**
     * {@see GoTrueMFAApi#listFactors}
     */
    async _listFactors() {
      var _a;
      const { data: { user }, error: userError } = await this.getUser();
      if (userError) {
        return { data: null, error: userError };
      }
      const data = {
        all: [],
        phone: [],
        totp: [],
        webauthn: []
      };
      for (const factor of (_a = user === null || user === void 0 ? void 0 : user.factors) !== null && _a !== void 0 ? _a : []) {
        data.all.push(factor);
        if (factor.status === "verified") {
          ;
          data[factor.factor_type].push(factor);
        }
      }
      return {
        data,
        error: null
      };
    }
    /**
     * {@see GoTrueMFAApi#getAuthenticatorAssuranceLevel}
     */
    async _getAuthenticatorAssuranceLevel(jwt) {
      var _a, _b, _c, _d;
      if (jwt) {
        try {
          const { payload: payload2 } = decodeJWT(jwt);
          let currentLevel2 = null;
          if (payload2.aal) {
            currentLevel2 = payload2.aal;
          }
          let nextLevel2 = currentLevel2;
          const { data: { user }, error: userError } = await this.getUser(jwt);
          if (userError) {
            return this._returnResult({ data: null, error: userError });
          }
          const verifiedFactors2 = (_b = (_a = user === null || user === void 0 ? void 0 : user.factors) === null || _a === void 0 ? void 0 : _a.filter((factor) => factor.status === "verified")) !== null && _b !== void 0 ? _b : [];
          if (verifiedFactors2.length > 0) {
            nextLevel2 = "aal2";
          }
          const currentAuthenticationMethods2 = payload2.amr || [];
          return { data: { currentLevel: currentLevel2, nextLevel: nextLevel2, currentAuthenticationMethods: currentAuthenticationMethods2 }, error: null };
        } catch (error) {
          if (isAuthError(error)) {
            return this._returnResult({ data: null, error });
          }
          throw error;
        }
      }
      const { data: { session }, error: sessionError } = await this.getSession();
      if (sessionError) {
        return this._returnResult({ data: null, error: sessionError });
      }
      if (!session) {
        return {
          data: { currentLevel: null, nextLevel: null, currentAuthenticationMethods: [] },
          error: null
        };
      }
      const { payload } = decodeJWT(session.access_token);
      let currentLevel = null;
      if (payload.aal) {
        currentLevel = payload.aal;
      }
      let nextLevel = currentLevel;
      const verifiedFactors = (_d = (_c = session.user.factors) === null || _c === void 0 ? void 0 : _c.filter((factor) => factor.status === "verified")) !== null && _d !== void 0 ? _d : [];
      if (verifiedFactors.length > 0) {
        nextLevel = "aal2";
      }
      const currentAuthenticationMethods = payload.amr || [];
      return { data: { currentLevel, nextLevel, currentAuthenticationMethods }, error: null };
    }
    /**
     * Retrieves details about an OAuth authorization request.
     * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
     *
     * Returns authorization details including client info, scopes, and user information.
     * If the response includes only a redirect_url field, it means consent was already given - the caller
     * should handle the redirect manually if needed.
     */
    async _getAuthorizationDetails(authorizationId) {
      try {
        return await this._useSession(async (result) => {
          const { data: { session }, error: sessionError } = result;
          if (sessionError) {
            return this._returnResult({ data: null, error: sessionError });
          }
          if (!session) {
            return this._returnResult({ data: null, error: new AuthSessionMissingError() });
          }
          return await _request(this.fetch, "GET", `${this.url}/oauth/authorizations/${authorizationId}`, {
            headers: this.headers,
            jwt: session.access_token,
            xform: (data) => ({ data, error: null })
          });
        });
      } catch (error) {
        if (isAuthError(error)) {
          return this._returnResult({ data: null, error });
        }
        throw error;
      }
    }
    /**
     * Approves an OAuth authorization request.
     * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
     */
    async _approveAuthorization(authorizationId, options) {
      try {
        return await this._useSession(async (result) => {
          const { data: { session }, error: sessionError } = result;
          if (sessionError) {
            return this._returnResult({ data: null, error: sessionError });
          }
          if (!session) {
            return this._returnResult({ data: null, error: new AuthSessionMissingError() });
          }
          const response = await _request(this.fetch, "POST", `${this.url}/oauth/authorizations/${authorizationId}/consent`, {
            headers: this.headers,
            jwt: session.access_token,
            body: { action: "approve" },
            xform: (data) => ({ data, error: null })
          });
          if (response.data && response.data.redirect_url) {
            if (isBrowser() && !(options === null || options === void 0 ? void 0 : options.skipBrowserRedirect)) {
              window.location.assign(response.data.redirect_url);
            }
          }
          return response;
        });
      } catch (error) {
        if (isAuthError(error)) {
          return this._returnResult({ data: null, error });
        }
        throw error;
      }
    }
    /**
     * Denies an OAuth authorization request.
     * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
     */
    async _denyAuthorization(authorizationId, options) {
      try {
        return await this._useSession(async (result) => {
          const { data: { session }, error: sessionError } = result;
          if (sessionError) {
            return this._returnResult({ data: null, error: sessionError });
          }
          if (!session) {
            return this._returnResult({ data: null, error: new AuthSessionMissingError() });
          }
          const response = await _request(this.fetch, "POST", `${this.url}/oauth/authorizations/${authorizationId}/consent`, {
            headers: this.headers,
            jwt: session.access_token,
            body: { action: "deny" },
            xform: (data) => ({ data, error: null })
          });
          if (response.data && response.data.redirect_url) {
            if (isBrowser() && !(options === null || options === void 0 ? void 0 : options.skipBrowserRedirect)) {
              window.location.assign(response.data.redirect_url);
            }
          }
          return response;
        });
      } catch (error) {
        if (isAuthError(error)) {
          return this._returnResult({ data: null, error });
        }
        throw error;
      }
    }
    /**
     * Lists all OAuth grants that the authenticated user has authorized.
     * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
     */
    async _listOAuthGrants() {
      try {
        return await this._useSession(async (result) => {
          const { data: { session }, error: sessionError } = result;
          if (sessionError) {
            return this._returnResult({ data: null, error: sessionError });
          }
          if (!session) {
            return this._returnResult({ data: null, error: new AuthSessionMissingError() });
          }
          return await _request(this.fetch, "GET", `${this.url}/user/oauth/grants`, {
            headers: this.headers,
            jwt: session.access_token,
            xform: (data) => ({ data, error: null })
          });
        });
      } catch (error) {
        if (isAuthError(error)) {
          return this._returnResult({ data: null, error });
        }
        throw error;
      }
    }
    /**
     * Revokes a user's OAuth grant for a specific client.
     * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
     */
    async _revokeOAuthGrant(options) {
      try {
        return await this._useSession(async (result) => {
          const { data: { session }, error: sessionError } = result;
          if (sessionError) {
            return this._returnResult({ data: null, error: sessionError });
          }
          if (!session) {
            return this._returnResult({ data: null, error: new AuthSessionMissingError() });
          }
          await _request(this.fetch, "DELETE", `${this.url}/user/oauth/grants`, {
            headers: this.headers,
            jwt: session.access_token,
            query: { client_id: options.clientId },
            noResolveJson: true
          });
          return { data: {}, error: null };
        });
      } catch (error) {
        if (isAuthError(error)) {
          return this._returnResult({ data: null, error });
        }
        throw error;
      }
    }
    async fetchJwk(kid, jwks = { keys: [] }) {
      let jwk = jwks.keys.find((key) => key.kid === kid);
      if (jwk) {
        return jwk;
      }
      const now = Date.now();
      jwk = this.jwks.keys.find((key) => key.kid === kid);
      if (jwk && this.jwks_cached_at + JWKS_TTL > now) {
        return jwk;
      }
      const { data, error } = await _request(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
        headers: this.headers
      });
      if (error) {
        throw error;
      }
      if (!data.keys || data.keys.length === 0) {
        return null;
      }
      this.jwks = data;
      this.jwks_cached_at = now;
      jwk = data.keys.find((key) => key.kid === kid);
      if (!jwk) {
        return null;
      }
      return jwk;
    }
    /**
     * Extracts the JWT claims present in the access token by first verifying the
     * JWT against the server's JSON Web Key Set endpoint
     * `/.well-known/jwks.json` which is often cached, resulting in significantly
     * faster responses. Prefer this method over {@link #getUser} which always
     * sends a request to the Auth server for each JWT.
     *
     * If the project is not using an asymmetric JWT signing key (like ECC or
     * RSA) it always sends a request to the Auth server (similar to {@link
     * #getUser}) to verify the JWT.
     *
     * @param jwt An optional specific JWT you wish to verify, not the one you
     *            can obtain from {@link #getSession}.
     * @param options Various additional options that allow you to customize the
     *                behavior of this method.
     */
    async getClaims(jwt, options = {}) {
      try {
        let token = jwt;
        if (!token) {
          const { data, error } = await this.getSession();
          if (error || !data.session) {
            return this._returnResult({ data: null, error });
          }
          token = data.session.access_token;
        }
        const { header, payload, signature, raw: { header: rawHeader, payload: rawPayload } } = decodeJWT(token);
        if (!(options === null || options === void 0 ? void 0 : options.allowExpired)) {
          validateExp(payload.exp);
        }
        const signingKey = !header.alg || header.alg.startsWith("HS") || !header.kid || !("crypto" in globalThis && "subtle" in globalThis.crypto) ? null : await this.fetchJwk(header.kid, (options === null || options === void 0 ? void 0 : options.keys) ? { keys: options.keys } : options === null || options === void 0 ? void 0 : options.jwks);
        if (!signingKey) {
          const { error } = await this.getUser(token);
          if (error) {
            throw error;
          }
          return {
            data: {
              claims: payload,
              header,
              signature
            },
            error: null
          };
        }
        const algorithm = getAlgorithm(header.alg);
        const publicKey = await crypto.subtle.importKey("jwk", signingKey, algorithm, true, [
          "verify"
        ]);
        const isValid = await crypto.subtle.verify(algorithm, publicKey, signature, stringToUint8Array(`${rawHeader}.${rawPayload}`));
        if (!isValid) {
          throw new AuthInvalidJwtError("Invalid JWT signature");
        }
        return {
          data: {
            claims: payload,
            header,
            signature
          },
          error: null
        };
      } catch (error) {
        if (isAuthError(error)) {
          return this._returnResult({ data: null, error });
        }
        throw error;
      }
    }
  };
  GoTrueClient.nextInstanceID = {};
  var GoTrueClient_default = GoTrueClient;

  // node_modules/@supabase/auth-js/dist/module/AuthClient.js
  var AuthClient = GoTrueClient_default;
  var AuthClient_default = AuthClient;

  // node_modules/@supabase/supabase-js/dist/index.mjs
  var version4 = "2.98.0";
  var JS_ENV = "";
  if (typeof Deno !== "undefined") JS_ENV = "deno";
  else if (typeof document !== "undefined") JS_ENV = "web";
  else if (typeof navigator !== "undefined" && navigator.product === "ReactNative") JS_ENV = "react-native";
  else JS_ENV = "node";
  var DEFAULT_HEADERS3 = { "X-Client-Info": `supabase-js-${JS_ENV}/${version4}` };
  var DEFAULT_GLOBAL_OPTIONS = { headers: DEFAULT_HEADERS3 };
  var DEFAULT_DB_OPTIONS = { schema: "public" };
  var DEFAULT_AUTH_OPTIONS = {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    flowType: "implicit"
  };
  var DEFAULT_REALTIME_OPTIONS = {};
  function _typeof3(o) {
    "@babel/helpers - typeof";
    return _typeof3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o$1) {
      return typeof o$1;
    } : function(o$1) {
      return o$1 && "function" == typeof Symbol && o$1.constructor === Symbol && o$1 !== Symbol.prototype ? "symbol" : typeof o$1;
    }, _typeof3(o);
  }
  function toPrimitive3(t, r) {
    if ("object" != _typeof3(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != _typeof3(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function toPropertyKey3(t) {
    var i = toPrimitive3(t, "string");
    return "symbol" == _typeof3(i) ? i : i + "";
  }
  function _defineProperty3(e, r, t) {
    return (r = toPropertyKey3(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e[r] = t, e;
  }
  function ownKeys3(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function(r$1) {
        return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread23(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys3(Object(t), true).forEach(function(r$1) {
        _defineProperty3(e, r$1, t[r$1]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys3(Object(t)).forEach(function(r$1) {
        Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
      });
    }
    return e;
  }
  var resolveFetch4 = (customFetch) => {
    if (customFetch) return (...args) => customFetch(...args);
    return (...args) => fetch(...args);
  };
  var resolveHeadersConstructor = () => {
    return Headers;
  };
  var fetchWithAuth = (supabaseKey, getAccessToken, customFetch) => {
    const fetch$1 = resolveFetch4(customFetch);
    const HeadersConstructor = resolveHeadersConstructor();
    return async (input, init) => {
      var _await$getAccessToken;
      const accessToken = (_await$getAccessToken = await getAccessToken()) !== null && _await$getAccessToken !== void 0 ? _await$getAccessToken : supabaseKey;
      let headers = new HeadersConstructor(init === null || init === void 0 ? void 0 : init.headers);
      if (!headers.has("apikey")) headers.set("apikey", supabaseKey);
      if (!headers.has("Authorization")) headers.set("Authorization", `Bearer ${accessToken}`);
      return fetch$1(input, _objectSpread23(_objectSpread23({}, init), {}, { headers }));
    };
  };
  function ensureTrailingSlash(url) {
    return url.endsWith("/") ? url : url + "/";
  }
  function applySettingDefaults(options, defaults) {
    var _DEFAULT_GLOBAL_OPTIO, _globalOptions$header;
    const { db: dbOptions, auth: authOptions, realtime: realtimeOptions, global: globalOptions } = options;
    const { db: DEFAULT_DB_OPTIONS$1, auth: DEFAULT_AUTH_OPTIONS$1, realtime: DEFAULT_REALTIME_OPTIONS$1, global: DEFAULT_GLOBAL_OPTIONS$1 } = defaults;
    const result = {
      db: _objectSpread23(_objectSpread23({}, DEFAULT_DB_OPTIONS$1), dbOptions),
      auth: _objectSpread23(_objectSpread23({}, DEFAULT_AUTH_OPTIONS$1), authOptions),
      realtime: _objectSpread23(_objectSpread23({}, DEFAULT_REALTIME_OPTIONS$1), realtimeOptions),
      storage: {},
      global: _objectSpread23(_objectSpread23(_objectSpread23({}, DEFAULT_GLOBAL_OPTIONS$1), globalOptions), {}, { headers: _objectSpread23(_objectSpread23({}, (_DEFAULT_GLOBAL_OPTIO = DEFAULT_GLOBAL_OPTIONS$1 === null || DEFAULT_GLOBAL_OPTIONS$1 === void 0 ? void 0 : DEFAULT_GLOBAL_OPTIONS$1.headers) !== null && _DEFAULT_GLOBAL_OPTIO !== void 0 ? _DEFAULT_GLOBAL_OPTIO : {}), (_globalOptions$header = globalOptions === null || globalOptions === void 0 ? void 0 : globalOptions.headers) !== null && _globalOptions$header !== void 0 ? _globalOptions$header : {}) }),
      accessToken: async () => ""
    };
    if (options.accessToken) result.accessToken = options.accessToken;
    else delete result.accessToken;
    return result;
  }
  function validateSupabaseUrl(supabaseUrl) {
    const trimmedUrl = supabaseUrl === null || supabaseUrl === void 0 ? void 0 : supabaseUrl.trim();
    if (!trimmedUrl) throw new Error("supabaseUrl is required.");
    if (!trimmedUrl.match(/^https?:\/\//i)) throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
    try {
      return new URL(ensureTrailingSlash(trimmedUrl));
    } catch (_unused) {
      throw Error("Invalid supabaseUrl: Provided URL is malformed.");
    }
  }
  var SupabaseAuthClient = class extends AuthClient_default {
    constructor(options) {
      super(options);
    }
  };
  var SupabaseClient = class {
    /**
    * Create a new client for use in the browser.
    * @param supabaseUrl The unique Supabase URL which is supplied when you create a new project in your project dashboard.
    * @param supabaseKey The unique Supabase Key which is supplied when you create a new project in your project dashboard.
    * @param options.db.schema You can switch in between schemas. The schema needs to be on the list of exposed schemas inside Supabase.
    * @param options.auth.autoRefreshToken Set to "true" if you want to automatically refresh the token before expiring.
    * @param options.auth.persistSession Set to "true" if you want to automatically save the user session into local storage.
    * @param options.auth.detectSessionInUrl Set to "true" if you want to automatically detects OAuth grants in the URL and signs in the user.
    * @param options.realtime Options passed along to realtime-js constructor.
    * @param options.storage Options passed along to the storage-js constructor.
    * @param options.global.fetch A custom fetch implementation.
    * @param options.global.headers Any additional headers to send with each network request.
    * @example
    * ```ts
    * import { createClient } from '@supabase/supabase-js'
    *
    * const supabase = createClient('https://xyzcompany.supabase.co', 'public-anon-key')
    * const { data } = await supabase.from('profiles').select('*')
    * ```
    */
    constructor(supabaseUrl, supabaseKey, options) {
      var _settings$auth$storag, _settings$global$head;
      this.supabaseUrl = supabaseUrl;
      this.supabaseKey = supabaseKey;
      const baseUrl = validateSupabaseUrl(supabaseUrl);
      if (!supabaseKey) throw new Error("supabaseKey is required.");
      this.realtimeUrl = new URL("realtime/v1", baseUrl);
      this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws");
      this.authUrl = new URL("auth/v1", baseUrl);
      this.storageUrl = new URL("storage/v1", baseUrl);
      this.functionsUrl = new URL("functions/v1", baseUrl);
      const defaultStorageKey = `sb-${baseUrl.hostname.split(".")[0]}-auth-token`;
      const DEFAULTS = {
        db: DEFAULT_DB_OPTIONS,
        realtime: DEFAULT_REALTIME_OPTIONS,
        auth: _objectSpread23(_objectSpread23({}, DEFAULT_AUTH_OPTIONS), {}, { storageKey: defaultStorageKey }),
        global: DEFAULT_GLOBAL_OPTIONS
      };
      const settings = applySettingDefaults(options !== null && options !== void 0 ? options : {}, DEFAULTS);
      this.storageKey = (_settings$auth$storag = settings.auth.storageKey) !== null && _settings$auth$storag !== void 0 ? _settings$auth$storag : "";
      this.headers = (_settings$global$head = settings.global.headers) !== null && _settings$global$head !== void 0 ? _settings$global$head : {};
      if (!settings.accessToken) {
        var _settings$auth;
        this.auth = this._initSupabaseAuthClient((_settings$auth = settings.auth) !== null && _settings$auth !== void 0 ? _settings$auth : {}, this.headers, settings.global.fetch);
      } else {
        this.accessToken = settings.accessToken;
        this.auth = new Proxy({}, { get: (_, prop) => {
          throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(prop)} is not possible`);
        } });
      }
      this.fetch = fetchWithAuth(supabaseKey, this._getAccessToken.bind(this), settings.global.fetch);
      this.realtime = this._initRealtimeClient(_objectSpread23({
        headers: this.headers,
        accessToken: this._getAccessToken.bind(this)
      }, settings.realtime));
      if (this.accessToken) Promise.resolve(this.accessToken()).then((token) => this.realtime.setAuth(token)).catch((e) => console.warn("Failed to set initial Realtime auth token:", e));
      this.rest = new PostgrestClient(new URL("rest/v1", baseUrl).href, {
        headers: this.headers,
        schema: settings.db.schema,
        fetch: this.fetch,
        timeout: settings.db.timeout,
        urlLengthLimit: settings.db.urlLengthLimit
      });
      this.storage = new StorageClient(this.storageUrl.href, this.headers, this.fetch, options === null || options === void 0 ? void 0 : options.storage);
      if (!settings.accessToken) this._listenForAuthEvents();
    }
    /**
    * Supabase Functions allows you to deploy and invoke edge functions.
    */
    get functions() {
      return new FunctionsClient(this.functionsUrl.href, {
        headers: this.headers,
        customFetch: this.fetch
      });
    }
    /**
    * Perform a query on a table or a view.
    *
    * @param relation - The table or view name to query
    */
    from(relation) {
      return this.rest.from(relation);
    }
    /**
    * Select a schema to query or perform an function (rpc) call.
    *
    * The schema needs to be on the list of exposed schemas inside Supabase.
    *
    * @param schema - The schema to query
    */
    schema(schema) {
      return this.rest.schema(schema);
    }
    /**
    * Perform a function call.
    *
    * @param fn - The function name to call
    * @param args - The arguments to pass to the function call
    * @param options - Named parameters
    * @param options.head - When set to `true`, `data` will not be returned.
    * Useful if you only need the count.
    * @param options.get - When set to `true`, the function will be called with
    * read-only access mode.
    * @param options.count - Count algorithm to use to count rows returned by the
    * function. Only applicable for [set-returning
    * functions](https://www.postgresql.org/docs/current/functions-srf.html).
    *
    * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
    * hood.
    *
    * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
    * statistics under the hood.
    *
    * `"estimated"`: Uses exact count for low numbers and planned count for high
    * numbers.
    */
    rpc(fn, args = {}, options = {
      head: false,
      get: false,
      count: void 0
    }) {
      return this.rest.rpc(fn, args, options);
    }
    /**
    * Creates a Realtime channel with Broadcast, Presence, and Postgres Changes.
    *
    * @param {string} name - The name of the Realtime channel.
    * @param {Object} opts - The options to pass to the Realtime channel.
    *
    */
    channel(name, opts = { config: {} }) {
      return this.realtime.channel(name, opts);
    }
    /**
    * Returns all Realtime channels.
    */
    getChannels() {
      return this.realtime.getChannels();
    }
    /**
    * Unsubscribes and removes Realtime channel from Realtime client.
    *
    * @param {RealtimeChannel} channel - The name of the Realtime channel.
    *
    */
    removeChannel(channel) {
      return this.realtime.removeChannel(channel);
    }
    /**
    * Unsubscribes and removes all Realtime channels from Realtime client.
    */
    removeAllChannels() {
      return this.realtime.removeAllChannels();
    }
    async _getAccessToken() {
      var _this = this;
      var _data$session$access_, _data$session;
      if (_this.accessToken) return await _this.accessToken();
      const { data } = await _this.auth.getSession();
      return (_data$session$access_ = (_data$session = data.session) === null || _data$session === void 0 ? void 0 : _data$session.access_token) !== null && _data$session$access_ !== void 0 ? _data$session$access_ : _this.supabaseKey;
    }
    _initSupabaseAuthClient({ autoRefreshToken, persistSession, detectSessionInUrl, storage, userStorage, storageKey, flowType, lock, debug, throwOnError }, headers, fetch$1) {
      const authHeaders = {
        Authorization: `Bearer ${this.supabaseKey}`,
        apikey: `${this.supabaseKey}`
      };
      return new SupabaseAuthClient({
        url: this.authUrl.href,
        headers: _objectSpread23(_objectSpread23({}, authHeaders), headers),
        storageKey,
        autoRefreshToken,
        persistSession,
        detectSessionInUrl,
        storage,
        userStorage,
        flowType,
        lock,
        debug,
        throwOnError,
        fetch: fetch$1,
        hasCustomAuthorizationHeader: Object.keys(this.headers).some((key) => key.toLowerCase() === "authorization")
      });
    }
    _initRealtimeClient(options) {
      return new RealtimeClient(this.realtimeUrl.href, _objectSpread23(_objectSpread23({}, options), {}, { params: _objectSpread23(_objectSpread23({}, { apikey: this.supabaseKey }), options === null || options === void 0 ? void 0 : options.params) }));
    }
    _listenForAuthEvents() {
      return this.auth.onAuthStateChange((event, session) => {
        this._handleTokenChanged(event, "CLIENT", session === null || session === void 0 ? void 0 : session.access_token);
      });
    }
    _handleTokenChanged(event, source, token) {
      if ((event === "TOKEN_REFRESHED" || event === "SIGNED_IN") && this.changedAccessToken !== token) {
        this.changedAccessToken = token;
        this.realtime.setAuth(token);
      } else if (event === "SIGNED_OUT") {
        this.realtime.setAuth();
        if (source == "STORAGE") this.auth.signOut();
        this.changedAccessToken = void 0;
      }
    }
  };
  var createClient = (supabaseUrl, supabaseKey, options) => {
    return new SupabaseClient(supabaseUrl, supabaseKey, options);
  };
  function shouldShowDeprecationWarning() {
    if (typeof window !== "undefined") return false;
    const _process = globalThis["process"];
    if (!_process) return false;
    const processVersion = _process["version"];
    if (processVersion === void 0 || processVersion === null) return false;
    const versionMatch = processVersion.match(/^v(\d+)\./);
    if (!versionMatch) return false;
    return parseInt(versionMatch[1], 10) <= 18;
  }
  if (shouldShowDeprecationWarning()) console.warn("\u26A0\uFE0F  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");

  // src/pinpoint.persistence.ts
  function createSupabaseBackend() {
    if (false) return null;
    return new SupabasePersistence("https://sqdtcfctzsixlycwucmf.supabase.co", "sb_publishable_HcXsZzUCYbtqeG39LpFaCQ_4Vvcog1g");
  }
  var SupabasePersistence = class {
    client;
    constructor(url, anonKey) {
      this.client = createClient(url, anonKey);
    }
    async loadThreads(prototype) {
      const { data, error } = await this.client.from("comment_threads").select("*").eq("prototype", prototype);
      if (error) throw error;
      return (data ?? []).map(this.rowToThread);
    }
    async upsertThread(prototype, thread) {
      const { error } = await this.client.from("comment_threads").upsert(this.threadToRow(prototype, thread));
      if (error) throw error;
    }
    async deleteThread(prototype, threadId) {
      const { error } = await this.client.from("comment_threads").delete().eq("id", threadId).eq("prototype", prototype);
      if (error) throw error;
    }
    async saveAllThreads(prototype, threads) {
      await this.client.from("comment_threads").delete().eq("prototype", prototype);
      if (threads.length > 0) {
        const { error } = await this.client.from("comment_threads").upsert(threads.map((t) => this.threadToRow(prototype, t)));
        if (error) throw error;
      }
    }
    threadToRow(prototype, thread) {
      return {
        id: thread.id,
        prototype,
        target_id: thread.targetId,
        target_label: thread.targetLabel,
        target_fingerprint: thread.targetFingerprint ?? null,
        state_snapshot: thread.stateSnapshot ?? null,
        comments: thread.comments,
        status: thread.status,
        created_at: thread.createdAt,
        page: thread.page ?? null
      };
    }
    rowToThread(row) {
      return {
        id: row["id"],
        targetId: row["target_id"],
        targetLabel: row["target_label"],
        targetFingerprint: row["target_fingerprint"] ?? void 0,
        stateSnapshot: row["state_snapshot"] ?? void 0,
        comments: row["comments"],
        status: row["status"],
        createdAt: row["created_at"],
        page: row["page"] ?? null
      };
    }
  };
  var LocalStoragePersistence = class {
    storageKey(prototype) {
      return `planhub-comments::${prototype}`;
    }
    async loadThreads(prototype) {
      try {
        const raw = localStorage.getItem(this.storageKey(prototype));
        return raw ? JSON.parse(raw) : [];
      } catch {
        return [];
      }
    }
    async upsertThread(prototype, thread) {
      try {
        const raw = localStorage.getItem(this.storageKey(prototype));
        const threads = raw ? JSON.parse(raw) : [];
        const idx = threads.findIndex((t) => t.id === thread.id);
        if (idx >= 0) {
          threads[idx] = thread;
        } else {
          threads.push(thread);
        }
        localStorage.setItem(this.storageKey(prototype), JSON.stringify(threads));
      } catch {
      }
    }
    async deleteThread(prototype, threadId) {
      try {
        const raw = localStorage.getItem(this.storageKey(prototype));
        const threads = raw ? JSON.parse(raw) : [];
        localStorage.setItem(
          this.storageKey(prototype),
          JSON.stringify(threads.filter((t) => t.id !== threadId))
        );
      } catch {
      }
    }
    async saveAllThreads(prototype, threads) {
      try {
        localStorage.setItem(this.storageKey(prototype), JSON.stringify(threads));
      } catch {
      }
    }
  };

  // src/pinpoint.store.ts
  var PinpointStore = class {
    prototypeName = "default";
    _scopeId = "default";
    authorKey = "planhub-commenter-name";
    listeners = /* @__PURE__ */ new Set();
    backend = new LocalStoragePersistence();
    _threads = [];
    _commentModeActive = false;
    _commentPanelOpen = false;
    _activeThreadId = null;
    _authorName = this.loadAuthorName();
    _loading = false;
    _offlineMode = false;
    _readThreadIds = /* @__PURE__ */ new Set();
    _visibleThreadIds = [];
    get readKey() {
      return `pinpoint-read::${this._scopeId}`;
    }
    // ── Getters ──
    get threads() {
      return this._threads;
    }
    get visibleThreadIds() {
      return this._visibleThreadIds;
    }
    set visibleThreadIds(ids) {
      const prev = this._visibleThreadIds;
      if (prev.length === ids.length && prev.every((id, i) => id === ids[i])) return;
      this._visibleThreadIds = ids;
      this.notify();
    }
    get commentModeActive() {
      return this._commentModeActive;
    }
    get commentPanelOpen() {
      return this._commentPanelOpen;
    }
    get activeThreadId() {
      return this._activeThreadId;
    }
    get pinsVisible() {
      return this._commentPanelOpen || this._commentModeActive;
    }
    get authorName() {
      return this._authorName;
    }
    get threadCount() {
      return this._threads.length;
    }
    get loading() {
      return this._loading;
    }
    get offlineMode() {
      return this._offlineMode;
    }
    isThreadRead(threadId) {
      return this._readThreadIds.has(threadId);
    }
    get unreadCount() {
      return this._threads.filter((t) => !this._readThreadIds.has(t.id)).length;
    }
    get scope() {
      return this._scopeId;
    }
    get scopeId() {
      return this._scopeId;
    }
    get threadsByTarget() {
      const map = /* @__PURE__ */ new Map();
      for (const thread of this._threads) {
        map.set(thread.targetId, thread);
      }
      return map;
    }
    // ── Pub/sub ──
    subscribe(fn) {
      this.listeners.add(fn);
      return () => this.listeners.delete(fn);
    }
    notify() {
      for (const fn of this.listeners) fn();
    }
    // ── Actions ──
    initialize(prototypeName, scopeId) {
      this.prototypeName = prototypeName;
      this._scopeId = scopeId || prototypeName;
      this.loadReadState();
      const ls = new LocalStoragePersistence();
      ls.loadThreads(this._scopeId).then((threads) => {
        this._threads = threads;
        this.notify();
      });
      const supabase = createSupabaseBackend();
      if (!supabase) return;
      this._loading = true;
      this.notify();
      const timeout = new Promise(
        (_, reject) => setTimeout(() => reject(new Error("timeout")), 5e3)
      );
      Promise.race([supabase.loadThreads(this._scopeId), timeout]).then((threads) => {
        this.backend = supabase;
        this._threads = threads;
        ls.saveAllThreads(this._scopeId, threads);
      }).catch(() => {
        this._offlineMode = true;
      }).finally(() => {
        this._loading = false;
        this.notify();
      });
    }
    toggleCommentMode() {
      this._commentModeActive = !this._commentModeActive;
      this.notify();
    }
    setCommentModeActive(active) {
      this._commentModeActive = active;
      this.notify();
    }
    openPanel() {
      this._commentPanelOpen = true;
      this.notify();
    }
    closePanel() {
      this._commentPanelOpen = false;
      this._commentModeActive = false;
      this.notify();
    }
    togglePanel() {
      if (this._commentPanelOpen) {
        this.closePanel();
      } else {
        this.openPanel();
      }
    }
    openPanelInAnnotateMode() {
      this._commentPanelOpen = true;
      this._commentModeActive = true;
      this.notify();
    }
    setActiveThread(threadId) {
      this._activeThreadId = threadId;
      if (threadId) this.markThreadRead(threadId);
      else this.notify();
    }
    setAuthorName(name) {
      const oldName = this._authorName;
      this._authorName = name;
      try {
        localStorage.setItem(this.authorKey, name);
      } catch {
      }
      if (oldName && oldName !== name) {
        const updated = this._threads.map((t) => ({
          ...t,
          comments: t.comments.map(
            (c) => c.author === oldName ? { ...c, author: name } : c
          )
        }));
        this._threads = updated;
        this.backend.saveAllThreads(this._scopeId, updated);
      }
      this.notify();
    }
    clearAuthorName() {
      this._authorName = "";
      try {
        localStorage.removeItem(this.authorKey);
      } catch {
      }
      this.notify();
    }
    addComment(targetId, targetLabel, text, fingerprint, stateSnapshot) {
      const existing = this.threadsByTarget.get(targetId);
      if (existing) {
        const entry = {
          id: this.generateId(),
          author: this._authorName,
          text,
          createdAt: (/* @__PURE__ */ new Date()).toISOString()
        };
        const updated = this._threads.map(
          (t) => t.id === existing.id ? { ...t, comments: [...t.comments, entry] } : t
        );
        this._threads = updated;
        const thread2 = updated.find((t) => t.id === existing.id);
        this.backend.upsertThread(this._scopeId, thread2);
        this.notify();
        return thread2;
      }
      const thread = {
        id: this.generateId(),
        targetId,
        targetLabel,
        targetFingerprint: fingerprint,
        stateSnapshot,
        comments: [{
          id: this.generateId(),
          author: this._authorName,
          text,
          createdAt: (/* @__PURE__ */ new Date()).toISOString()
        }],
        status: "open",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        page: this.currentPage()
      };
      this._threads = [...this._threads, thread];
      this.backend.upsertThread(this._scopeId, thread);
      this._readThreadIds.add(thread.id);
      this.persistReadState();
      this.notify();
      return thread;
    }
    updateThreadFingerprint(threadId, fingerprint) {
      const updated = this._threads.map(
        (t) => t.id === threadId ? { ...t, targetFingerprint: fingerprint } : t
      );
      this._threads = updated;
      const thread = updated.find((t) => t.id === threadId);
      if (thread) this.backend.upsertThread(this._scopeId, thread);
      this.notify();
    }
    editComment(threadId, commentId, newText) {
      const updated = this._threads.map(
        (t) => t.id === threadId ? { ...t, comments: t.comments.map(
          (c) => c.id === commentId ? { ...c, text: newText, editedAt: (/* @__PURE__ */ new Date()).toISOString() } : c
        ) } : t
      );
      this._threads = updated;
      const thread = updated.find((t) => t.id === threadId);
      if (thread) this.backend.upsertThread(this._scopeId, thread);
      this.notify();
    }
    deleteComment(threadId, commentId) {
      const thread = this._threads.find((t) => t.id === threadId);
      if (!thread) return;
      if (thread.comments.length <= 1) {
        this.deleteThread(threadId);
        return;
      }
      const updated = this._threads.map(
        (t) => t.id === threadId ? { ...t, comments: t.comments.filter((c) => c.id !== commentId) } : t
      );
      this._threads = updated;
      const updatedThread = updated.find((t) => t.id === threadId);
      if (updatedThread) this.backend.upsertThread(this._scopeId, updatedThread);
      this.notify();
    }
    deleteThread(threadId) {
      this._threads = this._threads.filter((t) => t.id !== threadId);
      this.backend.deleteThread(this._scopeId, threadId);
      this.notify();
    }
    resolveThread(threadId) {
      const updated = this._threads.map(
        (t) => t.id === threadId ? { ...t, status: "resolved" } : t
      );
      this._threads = updated;
      const thread = updated.find((t) => t.id === threadId);
      if (thread) this.backend.upsertThread(this._scopeId, thread);
      this.notify();
    }
    unresolveThread(threadId) {
      const updated = this._threads.map(
        (t) => t.id === threadId ? { ...t, status: "open" } : t
      );
      this._threads = updated;
      const thread = updated.find((t) => t.id === threadId);
      if (thread) this.backend.upsertThread(this._scopeId, thread);
      this.notify();
    }
    exportThreads() {
      return JSON.stringify(this._threads, null, 2);
    }
    importThreads(json) {
      try {
        const imported = JSON.parse(json);
        const merged = [...this._threads, ...imported];
        this._threads = merged;
        this.backend.saveAllThreads(this._scopeId, merged);
        this.notify();
      } catch {
      }
    }
    // ── Reactions ──
    recentEmojiKey = "pinpoint-emoji-recents";
    toggleReaction(threadId, commentId, emoji) {
      const author = this._authorName;
      if (!author) return;
      const updated = this._threads.map((t) => {
        if (t.id !== threadId) return t;
        return {
          ...t,
          comments: t.comments.map((c) => {
            if (c.id !== commentId) return c;
            const reactions = { ...c.reactions || {} };
            const authors = reactions[emoji] ? [...reactions[emoji]] : [];
            const idx = authors.indexOf(author);
            if (idx >= 0) {
              authors.splice(idx, 1);
              if (authors.length === 0) delete reactions[emoji];
              else reactions[emoji] = authors;
            } else {
              reactions[emoji] = [...authors, author];
            }
            return { ...c, reactions: Object.keys(reactions).length > 0 ? reactions : void 0 };
          })
        };
      });
      this._threads = updated;
      const thread = updated.find((t) => t.id === threadId);
      if (thread) this.backend.upsertThread(this._scopeId, thread);
      this.notify();
    }
    getRecentEmoji() {
      try {
        return JSON.parse(localStorage.getItem(this.recentEmojiKey) ?? "[]");
      } catch {
        return [];
      }
    }
    addRecentEmoji(emoji) {
      const recents = this.getRecentEmoji().filter((e) => e !== emoji);
      recents.unshift(emoji);
      try {
        localStorage.setItem(this.recentEmojiKey, JSON.stringify(recents.slice(0, 7)));
      } catch {
      }
    }
    // ── Private ──
    setBackend(backend) {
      this.backend = backend;
    }
    setLoading(loading) {
      this._loading = loading;
      this.notify();
    }
    setOfflineMode(offline) {
      this._offlineMode = offline;
      this.notify();
    }
    loadReadState() {
      try {
        const ids = JSON.parse(localStorage.getItem(this.readKey) ?? "[]");
        this._readThreadIds = new Set(ids);
      } catch {
        this._readThreadIds = /* @__PURE__ */ new Set();
      }
    }
    persistReadState() {
      queueMicrotask(() => {
        try {
          localStorage.setItem(this.readKey, JSON.stringify([...this._readThreadIds]));
        } catch {
        }
      });
    }
    markThreadRead(threadId) {
      if (this._readThreadIds.has(threadId)) {
        this.notify();
        return;
      }
      this._readThreadIds.add(threadId);
      this.persistReadState();
      this.notify();
    }
    markThreadUnread(threadId) {
      if (!this._readThreadIds.has(threadId)) return;
      this._readThreadIds.delete(threadId);
      this.persistReadState();
      this.notify();
    }
    loadAuthorName() {
      try {
        return localStorage.getItem("planhub-commenter-name") || "";
      } catch {
        return "";
      }
    }
    generateId() {
      return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    }
    currentPage() {
      return location.pathname;
    }
    /** Does this thread belong to the page currently loaded? Legacy threads (no page) match everywhere. */
    isThreadOnCurrentPage(thread) {
      return thread.page == null || thread.page === this.currentPage();
    }
  };
  var store = new PinpointStore();

  // src/pinpoint.utils.ts
  var tooltipEl = null;
  var tooltipTimer = null;
  function ensureTooltipEl() {
    if (tooltipEl) return tooltipEl;
    const style = document.createElement("style");
    style.textContent = `
    .pp-tooltip {
      position: fixed;
      z-index: 10001;
      pointer-events: none;
      white-space: nowrap;
      padding: 4px 8px;
      border-radius: 4px;
      background: #2a2a2a;
      color: #e0e0e0;
      font-size: 12px;
      font-weight: 500;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      border: 1px solid #4a4a4a;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
      opacity: 0;
      transition: opacity 0.15s ease;
      top: 0;
      left: 0;
    }
  `;
    document.head.appendChild(style);
    tooltipEl = document.createElement("div");
    tooltipEl.className = "pp-tooltip";
    document.body.appendChild(tooltipEl);
    document.addEventListener("mousedown", hideTooltip);
    return tooltipEl;
  }
  function showTooltip(anchor, text) {
    const el = ensureTooltipEl();
    if (tooltipTimer) clearTimeout(tooltipTimer);
    tooltipTimer = setTimeout(() => {
      el.textContent = text;
      el.style.opacity = "0";
      el.style.display = "block";
      const rect = anchor.getBoundingClientRect();
      const tipRect = el.getBoundingClientRect();
      let top = rect.bottom + 6;
      let left = rect.left + rect.width / 2 - tipRect.width / 2;
      if (top + tipRect.height > window.innerHeight - 8) {
        top = rect.top - tipRect.height - 6;
      }
      left = Math.max(8, Math.min(left, window.innerWidth - tipRect.width - 8));
      el.style.top = `${top}px`;
      el.style.left = `${left}px`;
      el.style.opacity = "1";
    }, 400);
  }
  function hideTooltip() {
    if (tooltipTimer) {
      clearTimeout(tooltipTimer);
      tooltipTimer = null;
    }
    if (tooltipEl) tooltipEl.style.opacity = "0";
  }
  function setupTooltips(root) {
    const onOver = (e) => {
      const target = e.target.closest?.("[data-tooltip]");
      if (target) {
        const text = target.getAttribute("data-tooltip");
        if (text) showTooltip(target, text);
      }
    };
    const onOut = (e) => {
      const related = e.relatedTarget;
      const target = e.target.closest?.("[data-tooltip]");
      if (target && (!related || !target.contains(related))) {
        hideTooltip();
      }
    };
    root.addEventListener("mouseover", onOver);
    root.addEventListener("mouseout", onOut);
    return () => {
      root.removeEventListener("mouseover", onOver);
      root.removeEventListener("mouseout", onOut);
    };
  }
  var AUTHOR_COLORS = [
    ["#b93c3c", "#723333"],
    // red
    ["#b45f1e", "#6f4524"],
    // orange
    ["#7d6e14", "#544c1f"],
    // yellow
    ["#238250", "#27563d"],
    // green
    ["#1e6ebe", "#244c74"],
    // blue
    ["#5f50b9", "#453d72"],
    // purple
    ["#af3c6e", "#6d334c"],
    // pink
    ["#198282", "#225656"]
    // teal
  ];
  function authorIndex(name) {
    let h = 0;
    for (let i = 0; i < name.length; i++) h += name.charCodeAt(i);
    return h % AUTHOR_COLORS.length;
  }
  function authorColor(name) {
    return AUTHOR_COLORS[authorIndex(name)][0];
  }
  function authorColorMuted(name) {
    return AUTHOR_COLORS[authorIndex(name)][1];
  }
  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }
  function initials(name) {
    const words = name.trim().split(/\s+/);
    return (words.length > 1 ? words[0][0] + words[words.length - 1][0] : words[0][0]).toUpperCase();
  }
  var kebabDotsSvg = `<svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><circle cx="8" cy="3" r="1.5"/><circle cx="8" cy="8" r="1.5"/><circle cx="8" cy="13" r="1.5"/></svg>`;
  var reactSvg = `<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="8" cy="8" r="6.5"/><circle cx="5.8" cy="6.8" r="0.8" fill="currentColor" stroke="none"/><circle cx="10.2" cy="6.8" r="0.8" fill="currentColor" stroke="none"/><path d="M5.5 10Q8 12.5 10.5 10" stroke-linecap="round"/></svg>`;
  function renderCommentEntry(c) {
    const color = authorColor(c.author);
    const editedTag = c.editedAt ? `<span class="comment-edited-tag">(edited)</span>` : "";
    const kebabBtn = c.isOwn && !c.hideKebab ? `<button class="comment-kebab" data-comment-id="${c.id}" data-thread-id="${c.threadId}" aria-label="Comment actions">${kebabDotsSvg}</button>` : "";
    const reactBtn = `<button class="comment-react-btn" data-comment-id="${c.id}" data-thread-id="${c.threadId}" aria-label="Add reaction">${reactSvg}</button>`;
    const body = c.isEditing ? `<div class="comment-edit-form" style="--comment-author-color:${color}">
        <textarea class="comment-edit-textarea" data-comment-id="${c.id}" data-thread-id="${c.threadId}">${escapeHtml(c.text)}</textarea>
        <div class="comment-edit-actions">
          <button class="comment-cancel-btn" data-comment-id="${c.id}" data-thread-id="${c.threadId}">Cancel</button>
          <button class="comment-save-btn" data-comment-id="${c.id}" data-thread-id="${c.threadId}">Save</button>
        </div>
      </div>` : `<p class="comment-text">${escapeHtml(c.text)}</p>`;
    let reactionsHtml = "";
    if (c.reactions && Object.keys(c.reactions).length > 0) {
      const pills = Object.entries(c.reactions).filter(([, authors]) => authors.length > 0).map(([emoji, authors]) => {
        const isOwn = c.currentAuthor ? authors.includes(c.currentAuthor) : false;
        const tooltip = authors.join(", ");
        return `<button class="reaction-pill${isOwn ? " own" : ""}" data-emoji="${emoji}" data-comment-id="${c.id}" data-thread-id="${c.threadId}" title="${escapeHtml(tooltip)}"><span class="reaction-emoji">${emoji}</span><span class="reaction-count">${authors.length}</span></button>`;
      }).join("");
      const addBtn = `<button class="reaction-add-btn" data-comment-id="${c.id}" data-thread-id="${c.threadId}" title="Add reaction">+</button>`;
      reactionsHtml = `<div class="comment-reactions">${pills}${addBtn}</div>`;
    }
    return `
    <div class="comment-entry" data-comment-id="${c.id}">
      <div class="comment-meta">
        <span class="author-avatar" style="background:${color};color:#fff" aria-hidden="true">${escapeHtml(initials(c.author))}</span>
        <span class="author-name">${escapeHtml(c.author)}</span>
        <span class="comment-time">${formatTime(c.createdAt)}</span>
        ${editedTag}
        ${reactBtn}
        ${kebabBtn}
      </div>
      ${body}
      ${reactionsHtml}
    </div>
  `;
  }
  function formatTime(iso) {
    const date = new Date(iso);
    const now = /* @__PURE__ */ new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMin = Math.floor(diffMs / 6e4);
    if (diffMin < 1) return "just now";
    if (diffMin < 60) return `${diffMin}m ago`;
    const diffHr = Math.floor(diffMin / 60);
    if (diffHr < 24) return `${diffHr}h ago`;
    const diffDay = Math.floor(diffHr / 24);
    if (diffDay < 7) return `${diffDay}d ago`;
    return date.toLocaleDateString();
  }
  function canScrollAlongAxis(el, delta, axis) {
    const style = getComputedStyle(el);
    const overflow = axis === "y" ? style.overflowY : style.overflowX;
    const scrollSize = axis === "y" ? el.scrollHeight : el.scrollWidth;
    const clientSize = axis === "y" ? el.clientHeight : el.clientWidth;
    const scrollPos = axis === "y" ? el.scrollTop : el.scrollLeft;
    if (!["auto", "scroll", "overlay"].includes(overflow)) return false;
    if (scrollSize <= clientSize + 1) return false;
    if (delta < 0) return scrollPos > 0;
    if (delta > 0) return scrollPos + clientSize < scrollSize - 1;
    return false;
  }
  function shouldPreventWheelScroll(event, boundary) {
    if (!(event.target instanceof Node)) return true;
    const axis = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? "x" : "y";
    const delta = axis === "y" ? event.deltaY : event.deltaX;
    if (delta === 0) return false;
    let current = event.target instanceof HTMLElement ? event.target : event.target.parentElement;
    if (!current || !boundary.contains(current)) return true;
    while (current) {
      if (canScrollAlongAxis(current, delta, axis)) return false;
      if (current === boundary) break;
      const parent = current.parentNode;
      if (parent instanceof ShadowRoot) {
        current = parent.host instanceof HTMLElement ? parent.host : null;
        continue;
      }
      current = current.parentElement;
    }
    return true;
  }

  // src/pinpoint-overlay.ts
  var styles = `
  ${tokenStyles}

  :host {
    display: block;
  }

  .comment-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2147483489;
    pointer-events: none;
    cursor: crosshair;
  }

  .comment-overlay.active {
    pointer-events: all;
    background: var(--pinpoint-overlay-bg);
    z-index: 2147483505;
  }

  .element-highlight {
    position: fixed;
    border: 2px solid var(--pinpoint-accent);
    border-radius: var(--pinpoint-radius-s);
    background: var(--pinpoint-accent-bg);
    pointer-events: none;
    z-index: 2147483506;
    transition: all 0.1s ease;
  }

  @media (prefers-reduced-motion: reduce) {
    .element-highlight {
      transition: none;
    }
  }

  .comment-pin {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: var(--pinpoint-radius-full);
    background: var(--pinpoint-pin-read);
    border: 2.5px solid var(--pinpoint-on-accent);
    color: var(--pinpoint-on-accent);
    font-size: 12px;
    font-weight: 700;
    font-family: var(--pinpoint-font);
    cursor: pointer;
    z-index: 2147483507;
    box-shadow: var(--pinpoint-pin-shadow);
    transition: box-shadow 0.12s ease;
    padding: 0;
    line-height: 1;
  }

  .comment-pin.unread {
    background: var(--pinpoint-danger-strong);
  }

  .comment-pin:hover {
    box-shadow: var(--pinpoint-pin-shadow-hover);
  }

  .comment-pin.active {
    background: var(--pinpoint-accent-active);
    color: var(--pinpoint-on-accent);
    box-shadow: var(--pinpoint-pin-shadow-hover);
  }

  .comment-pin.dimmed {
    opacity: 0.35;
    pointer-events: none;
  }

  .comment-pin:focus-visible {
    outline: 2px solid var(--pinpoint-accent);
    outline-offset: 2px;
  }

  .pin-tooltip {
    position: fixed;
    z-index: 2147483508;
    pointer-events: none;
    background: var(--pinpoint-bg-raised);
    border: 1px solid var(--pinpoint-border-strong);
    border-radius: var(--pinpoint-radius-m);
    box-shadow: var(--pinpoint-popover-shadow);
    padding: 8px 10px;
    max-width: 220px;
    font-family: var(--pinpoint-font);
    font-size: 12px;
    line-height: 1.4;
    color: var(--pinpoint-text);
    white-space: normal;
    word-break: break-word;
  }

  .pin-tooltip-header {
    display: flex;
    align-items: baseline;
    gap: 6px;
    margin-bottom: 4px;
  }

  .pin-tooltip-author {
    font-weight: 600;
    color: var(--pinpoint-text-secondary);
    font-size: 12px;
  }

  .pin-tooltip-time {
    font-size: 11px;
    color: var(--pinpoint-text-faint);
    flex-shrink: 0;
  }

  .pin-tooltip-text {
    color: var(--pinpoint-text-muted);
  }

  .pin-tooltip-more {
    margin-top: 4px;
    font-size: 11px;
    color: var(--pinpoint-text-faint);
  }
`;
  var PinpointOverlay = class extends HTMLElement {
    animFrameId = null;
    hoveredElement = null;
    hoveredPinThreadId = null;
    targetElementCache = /* @__PURE__ */ new Map();
    pendingFingerprints = /* @__PURE__ */ new Map();
    unsubscribe = null;
    // Top-level elements appended directly to body so position:fixed works reliably
    fabEl = null;
    panelEl = null;
    popoverEl = null;
    historyPopoverEl = null;
    pendingThreadCleanup = null;
    highlightRect = null;
    highlightDebounce = null;
    pinPositions = [];
    lastRenderedPinKey = "";
    lastRenderedPopoverThreadId = null;
    popoverState = null;
    tooltipState = null;
    keydownHandler = (e) => this.onKeydown(e);
    static get observedAttributes() {
      return ["prototype-name", "label", "version", "updated", "changelog", "scope", "position"];
    }
    connectedCallback() {
      this.attachShadow({ mode: "open" });
      const prototypeName = this.getAttribute("prototype-name") || "default";
      const scope = this.getAttribute("scope") || prototypeName;
      store.initialize(prototypeName, scope);
      this.render();
      this.unsubscribe = store.subscribe(() => this.onStoreChange());
      this.startPinPositionLoop();
      document.addEventListener("keydown", this.keydownHandler);
      this.consumePendingThread();
    }
    disconnectedCallback() {
      this.stopPinPositionLoop();
      this.unsubscribe?.();
      this.pendingThreadCleanup?.();
      this.pendingThreadCleanup = null;
      document.removeEventListener("keydown", this.keydownHandler);
      this.fabEl?.remove();
      this.fabEl = null;
      this.panelEl?.remove();
      this.panelEl = null;
      this.historyPopoverEl?.remove();
      this.historyPopoverEl = null;
    }
    attributeChangedCallback(name, _old, value) {
      if ((name === "prototype-name" || name === "scope") && value) {
        const prototypeName = this.getAttribute("prototype-name") || "default";
        const scope = this.getAttribute("scope") || prototypeName;
        store.initialize(prototypeName, scope);
      }
      if (name === "label" || name === "version" || name === "updated") {
        if (this.panelEl) this.panelEl.setAttribute(name, value || "");
      }
      if (name === "position") {
        if (this.fabEl) this.fabEl.setAttribute("position", value || "");
      }
      if (name === "changelog") {
        this.updateHistoryChangelog();
      }
    }
    // After a cross-page panel navigation, reopen the target thread once it loads
    consumePendingThread() {
      let raw = null;
      try {
        raw = sessionStorage.getItem("pinpoint-pending-thread");
        if (raw) sessionStorage.removeItem("pinpoint-pending-thread");
      } catch {
        return;
      }
      if (!raw) return;
      let pending;
      try {
        pending = JSON.parse(raw);
      } catch {
        return;
      }
      if (!pending?.threadId || pending.scope !== store.scopeId) return;
      const tryOpen = () => {
        const thread = store.threads.find((t) => t.id === pending.threadId);
        if (!thread) return false;
        store.openPanel();
        this.onPanelThreadSelected(thread);
        return true;
      };
      if (tryOpen()) return;
      const timeout = setTimeout(() => {
        this.pendingThreadCleanup?.();
        this.pendingThreadCleanup = null;
      }, 1e4);
      const unsub = store.subscribe(() => {
        if (tryOpen()) {
          this.pendingThreadCleanup?.();
          this.pendingThreadCleanup = null;
        }
      });
      this.pendingThreadCleanup = () => {
        clearTimeout(timeout);
        unsub();
      };
    }
    onStoreChange() {
      if (!store.commentPanelOpen && this.popoverState?.thread) {
        this.closePopover();
      } else if (this.popoverState?.threadId && !store.threads.find((t) => t.id === this.popoverState.threadId)) {
        this.closePopover();
      } else if (this.popoverState?.threadId) {
        const fresh = store.threads.find((t) => t.id === this.popoverState.threadId);
        if (fresh) this.popoverState = { ...this.popoverState, thread: fresh };
      }
      this.updatePinPositions(store.threads);
      this.renderOverlayState();
    }
    render() {
      if (!this.shadowRoot) return;
      const label = this.getAttribute("label") || this.getAttribute("prototype-name") || "Prototype Review";
      const version5 = this.getAttribute("version") || "";
      const updated = this.getAttribute("updated") || "";
      const position = this.getAttribute("position") || "";
      this.shadowRoot.innerHTML = `
      <style>${styles}</style>
      <div class="comment-overlay"></div>
      <div class="highlight-container"></div>
      <div class="pins-container"></div>
      <div class="tooltip-container"></div>
    `;
      this.fabEl = document.createElement("pinpoint-fab");
      if (position) this.fabEl.setAttribute("position", position);
      document.body.appendChild(this.fabEl);
      this.historyPopoverEl = document.createElement("pinpoint-history-popover");
      this.historyPopoverEl.style.display = "none";
      this.historyPopoverEl.addEventListener("pinpoint-history-close", () => this.closeHistoryPopover());
      document.body.appendChild(this.historyPopoverEl);
      this.updateHistoryChangelog();
      this.panelEl = document.createElement("pinpoint-panel");
      this.panelEl.setAttribute("label", label);
      if (version5) this.panelEl.setAttribute("version", version5);
      if (updated) this.panelEl.setAttribute("updated", updated);
      this.panelEl.addEventListener("pinpoint-thread-selected", (e) => {
        this.onPanelThreadSelected(e.detail);
      });
      this.panelEl.addEventListener("pinpoint-thread-hovered", (e) => {
        const threadId = e.detail;
        this.hoveredPinThreadId = threadId;
        this.renderHighlight();
      });
      this.panelEl.addEventListener("pinpoint-history-toggle", () => this.toggleHistoryPopover());
      document.body.appendChild(this.panelEl);
      this.panelEl.anchorTo(this.fabEl);
      this.popoverEl = document.createElement("pinpoint-popover");
      this.popoverEl.style.display = "none";
      this.popoverEl.addEventListener("pinpoint-close", () => this.closePopover());
      this.popoverEl.addEventListener("pinpoint-comment", (e) => {
        this.onCommented(e.detail);
      });
      this.popoverEl.addEventListener("pinpoint-thread-selected", (e) => {
        this.onPanelThreadSelected(e.detail);
      });
      document.body.appendChild(this.popoverEl);
      const overlay = this.shadowRoot.querySelector(".comment-overlay");
      overlay.addEventListener("click", (e) => this.onOverlayClick(e));
      overlay.addEventListener("mousemove", (e) => this.onOverlayMouseMove(e));
      this.renderOverlayState();
    }
    renderOverlayState() {
      if (!this.shadowRoot) return;
      const overlay = this.shadowRoot.querySelector(".comment-overlay");
      if (overlay) {
        overlay.classList.toggle("active", store.commentModeActive);
      }
      this.renderHighlight();
      const pinsContainer = this.shadowRoot.querySelector(".pins-container");
      if (store.pinsVisible) {
        let newPinHtml = "";
        if (this.popoverState && !this.popoverState.thread) {
          const el = this.findTargetElement(this.popoverState.targetId);
          if (el) {
            const rect = el.getBoundingClientRect();
            const px = Math.min(Math.max(rect.right - 8, 0), window.innerWidth - 28);
            const py = Math.min(Math.max(rect.top - 8, 8), window.innerHeight - 28);
            const authorName = store.authorName;
            const initials2 = authorName ? authorName.trim().split(/\s+/).map((w) => w[0]).join("").toUpperCase().slice(0, 2) : "?";
            const newPinColor = authorName ? authorColor(authorName) : "var(--pinpoint-pin-read)";
            newPinHtml = `<div class="comment-pin active" style="left:${px}px;top:${py}px;pointer-events:none;background:${newPinColor};color:#fff"><span style="font-size:10px;font-weight:700;letter-spacing:-0.02em">${initials2}</span></div>`;
          }
        }
        const visibleIds = store.visibleThreadIds;
        pinsContainer.innerHTML = newPinHtml + this.pinPositions.map((pin) => {
          const isActive = this.popoverState?.threadId === pin.threadId;
          const isDimmed = !isActive && !!this.popoverState;
          const isUnread = !store.isThreadRead(pin.threadId);
          const isHidden = store.commentPanelOpen && !isActive && !visibleIds.includes(pin.threadId);
          const stateClass = isActive ? "active" : isDimmed ? "dimmed" : isUnread ? "unread" : "";
          let pinStyle = `left:${pin.x}px;top:${pin.y}px;`;
          if (!isDimmed && !pin.multiAuthor && pin.firstAuthor) {
            const bg = isActive || isUnread ? authorColor(pin.firstAuthor) : authorColorMuted(pin.firstAuthor);
            pinStyle += `background:${bg};color:#fff;`;
          }
          const pinInner = pin.multiAuthor ? '<svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true"><circle cx="9.5" cy="4" r="1.8" opacity="0.5"/><path d="M6.5 12c0-1.6 1.2-2.6 3-2.6s3 1 3 2.6H6.5z" opacity="0.5"/><circle cx="5" cy="4.5" r="2.5"/><path d="M0 12.5c0-2 1.8-3 5-3s5 1 5 3H0z"/></svg>' : `<span style="font-size:10px;font-weight:700;letter-spacing:-0.02em">${pin.initials}</span>`;
          if (isHidden) pinStyle += "display:none;";
          return `<button class="comment-pin${stateClass ? ` ${stateClass}` : ""}" style="${pinStyle}" data-thread-id="${pin.threadId}" aria-label="View comments (${pin.count})">${pinInner}</button>`;
        }).join("");
        pinsContainer.querySelectorAll(".comment-pin").forEach((btn) => {
          btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const threadId = btn.dataset.threadId;
            const thread = store.threads.find((t) => t.id === threadId);
            if (!thread) return;
            store.openPanel();
            this.onPanelThreadSelected(thread);
          });
          btn.addEventListener("mouseenter", (e) => {
            const threadId = btn.dataset.threadId || null;
            this.hoveredPinThreadId = threadId;
            this.renderHighlight();
            if (threadId) {
              const rect = btn.getBoundingClientRect();
              this.tooltipState = { threadId, x: rect.left, y: rect.top };
              this.renderTooltip();
            }
          });
          btn.addEventListener("mouseleave", () => {
            this.hoveredPinThreadId = null;
            this.tooltipState = null;
            this.renderHighlight();
            this.renderTooltip();
          });
        });
      } else {
        pinsContainer.innerHTML = "";
      }
      if (this.popoverEl) {
        if (this.popoverState) {
          this.popoverEl.style.display = "";
          this.popoverEl.setPosition(this.popoverState.x, this.popoverState.y);
          this.popoverEl.setTarget(this.popoverState.targetId, this.popoverState.targetLabel);
          this.popoverEl.setThread(this.popoverState.thread);
        } else {
          this.popoverEl.style.display = "none";
        }
      }
    }
    // ── Event handlers ──
    onKeydown(event) {
      if ((event.metaKey || event.ctrlKey) && event.shiftKey && event.key === "c") {
        event.preventDefault();
        store.toggleCommentMode();
        if (!store.commentModeActive) {
          this.closePopover();
          if (this.highlightDebounce) {
            clearTimeout(this.highlightDebounce);
            this.highlightDebounce = null;
          }
          this.highlightRect = null;
          this.renderOverlayState();
        }
      }
      if (event.key === "Escape") {
        if (this.historyPopoverEl && this.historyPopoverEl.style.display !== "none") {
          this.closeHistoryPopover();
        } else if (this.popoverState) {
          this.closePopover();
        } else if (store.commentModeActive) {
          store.setCommentModeActive(false);
          if (this.highlightDebounce) {
            clearTimeout(this.highlightDebounce);
            this.highlightDebounce = null;
          }
          this.highlightRect = null;
          this.renderOverlayState();
        } else if (store.commentPanelOpen) {
          store.closePanel();
        }
      }
    }
    toggleHistoryPopover() {
      if (!this.historyPopoverEl) return;
      if (this.historyPopoverEl.style.display === "none") {
        const POP_W = 320;
        const POP_H = 420;
        const GAP = 12;
        const MARGIN2 = 8;
        const panelRect = this.panelEl?.getBoundingClientRect();
        let left;
        let top;
        if (panelRect && panelRect.width > 0) {
          const spaceLeft = panelRect.left - MARGIN2;
          const spaceRight = window.innerWidth - panelRect.right - MARGIN2;
          left = spaceLeft >= POP_W + GAP || spaceLeft >= spaceRight ? panelRect.left - POP_W - GAP : panelRect.right + GAP;
          top = panelRect.top;
        } else {
          left = (window.innerWidth - POP_W) / 2;
          top = (window.innerHeight - POP_H) / 2;
        }
        left = Math.min(Math.max(left, MARGIN2), window.innerWidth - POP_W - MARGIN2);
        top = Math.min(Math.max(top, MARGIN2), window.innerHeight - POP_H - MARGIN2);
        this.historyPopoverEl.style.position = "fixed";
        this.historyPopoverEl.style.top = `${top}px`;
        this.historyPopoverEl.style.left = `${left}px`;
        this.historyPopoverEl.style.transform = "";
        this.historyPopoverEl.style.display = "block";
        setTimeout(() => this.historyPopoverEl?.focusSearch());
      } else {
        this.closeHistoryPopover();
      }
    }
    closeHistoryPopover() {
      if (this.historyPopoverEl) {
        this.historyPopoverEl.style.display = "none";
      }
    }
    updateHistoryChangelog() {
      if (!this.historyPopoverEl) return;
      const raw = this.getAttribute("changelog") || "[]";
      try {
        const entries = JSON.parse(raw);
        this.historyPopoverEl.setChangelog(entries);
      } catch {
        this.historyPopoverEl.setChangelog([]);
      }
    }
    onOverlayClick(event) {
      if (!store.commentModeActive) return;
      const target = this.getElementAtPoint(event.clientX, event.clientY);
      if (!target) return;
      const commentTarget = this.resolveCommentTarget(target);
      if (!commentTarget) return;
      const { id, label } = commentTarget;
      const existingThread = store.threadsByTarget.get(id) || null;
      const targetEl = this.findTargetElement(id);
      const rect = targetEl?.getBoundingClientRect();
      const pinX = rect ? Math.min(Math.max(rect.right - 8, 0), window.innerWidth - 28) : event.clientX;
      const pinY = rect ? Math.min(Math.max(rect.top - 8, 8), window.innerHeight - 28) : event.clientY;
      this.openPopover({
        x: this.popoverX(pinX),
        y: this.clampY(pinY - 8),
        targetId: id,
        targetLabel: label,
        thread: existingThread,
        threadId: existingThread?.id
      });
    }
    onOverlayMouseMove(event) {
      if (!store.commentModeActive) return;
      const target = this.getElementAtPoint(event.clientX, event.clientY);
      if (target && target !== this.hoveredElement) {
        this.hoveredElement = target;
        this.highlightRect = null;
        this.renderHighlight();
        if (this.highlightDebounce) clearTimeout(this.highlightDebounce);
        this.highlightDebounce = setTimeout(() => {
          this.highlightRect = target.getBoundingClientRect();
          this.renderHighlight();
        }, 120);
      }
    }
    renderHighlight() {
      if (!this.shadowRoot) return;
      const highlightContainer = this.shadowRoot.querySelector(".highlight-container");
      if (this.popoverState) {
        highlightContainer.innerHTML = "";
        return;
      }
      let highlightRect = store.commentModeActive ? this.highlightRect : null;
      let highlightAuthor = store.commentModeActive ? store.authorName : "";
      if (!highlightRect && this.hoveredPinThreadId) {
        const pin = this.pinPositions.find((p) => p.threadId === this.hoveredPinThreadId);
        if (pin) {
          const el = document.querySelector(`[data-comment-id="${pin.targetId}"]`);
          if (el) highlightRect = el.getBoundingClientRect();
          highlightAuthor = pin.firstAuthor;
        }
      }
      if (highlightRect) {
        const r = highlightRect;
        const hColor = highlightAuthor ? authorColor(highlightAuthor) : "var(--pinpoint-accent)";
        const hBg = highlightAuthor ? `${authorColorMuted(highlightAuthor)}66` : "var(--pinpoint-accent-bg)";
        highlightContainer.innerHTML = `
        <div class="element-highlight" style="left:${r.x}px;top:${r.y}px;width:${r.width}px;height:${r.height}px;border-color:${hColor};background:${hBg};"></div>
      `;
      } else {
        highlightContainer.innerHTML = "";
      }
    }
    renderTooltip() {
      if (!this.shadowRoot) return;
      const container = this.shadowRoot.querySelector(".tooltip-container");
      if (!this.tooltipState || this.popoverState) {
        container.innerHTML = "";
        return;
      }
      const { threadId, x, y } = this.tooltipState;
      const thread = store.threads.find((t) => t.id === threadId);
      if (!thread || thread.comments.length === 0) {
        container.innerHTML = "";
        return;
      }
      const first = thread.comments[0];
      const preview = first.text.length > 120 ? first.text.slice(0, 117) + "\u2026" : first.text;
      const moreCount = thread.comments.length - 1;
      const PIN_W = 28;
      const TOOLTIP_W = 220;
      const GAP = 6;
      const MARGIN2 = 8;
      let tx = x + PIN_W + GAP;
      if (tx + TOOLTIP_W > window.innerWidth - MARGIN2) {
        tx = x - TOOLTIP_W - GAP;
      }
      tx = Math.max(tx, MARGIN2);
      const ty = Math.min(y, window.innerHeight - MARGIN2 - 100);
      container.innerHTML = `
      <div class="pin-tooltip" style="left:${tx}px;top:${ty}px;">
        <div class="pin-tooltip-header">
          <span class="pin-tooltip-author">${this.escapeHtml(first.author || "Anonymous")}</span>
          <span class="pin-tooltip-time">${formatTime(first.createdAt)}</span>
        </div>
        <div class="pin-tooltip-text">${this.escapeHtml(preview)}</div>
        ${moreCount > 0 ? `<div class="pin-tooltip-more">+${moreCount} more repl${moreCount === 1 ? "y" : "ies"}</div>` : ""}
      </div>
    `;
    }
    escapeHtml(str) {
      return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    openPopover(state) {
      this.popoverState = state;
      this.tooltipState = null;
      store.setActiveThread(state?.threadId ?? null);
      this.renderOverlayState();
    }
    closePopover() {
      const threadId = this.popoverState?.threadId;
      this.popoverState = null;
      store.setActiveThread(null);
      this.renderOverlayState();
      if (threadId && this.shadowRoot) {
        const pin = this.shadowRoot.querySelector(`.comment-pin[data-thread-id="${threadId}"]`);
        pin?.focus();
      }
    }
    onPanelThreadSelected(thread) {
      const targetEl = this.findTargetElement(thread.targetId);
      const snapshot = thread.stateSnapshot;
      const actions = snapshot?.domActions;
      const savedHash = snapshot?.contentHash;
      const savedContainerId = snapshot?.contentContainerId;
      if (targetEl && this.isElementVisible(targetEl)) {
        if (savedHash === void 0) {
          this.navigateToThread(thread);
          return;
        }
        const container = savedContainerId ? document.getElementById(savedContainerId) : this.findContentContainer(targetEl);
        if (container && this.contentHashOf(container) === savedHash) {
          this.navigateToThread(thread);
          return;
        }
      }
      if (actions && actions.length > 0) {
        this.restoreDomState(actions).then(() => this.navigateToThread(thread));
      } else if (snapshot && !actions) {
        const legacyActions = this.convertLegacySnapshot(snapshot);
        if (legacyActions.length > 0) {
          this.restoreDomState(legacyActions).then(() => this.navigateToThread(thread));
        } else {
          this.navigateToThread(thread);
        }
      } else {
        this.navigateToThread(thread);
      }
    }
    async navigateToThread(thread) {
      const el = this.findTargetElement(thread.targetId);
      if (!el) return;
      el.scrollIntoView({ behavior: "instant", block: "nearest" });
      await this.waitForScrollSettle(el);
      const rect = el.getBoundingClientRect();
      const pinX = Math.min(Math.max(rect.right - 8, 0), window.innerWidth - 28);
      this.openPopover({
        x: this.popoverX(pinX),
        y: this.clampY(Math.max(rect.top - 8, 8)),
        targetId: thread.targetId,
        targetLabel: thread.targetLabel,
        thread,
        threadId: thread.id
      });
    }
    // Resolve when the element's rect is stable across 2 consecutive frames,
    // a scrollend fires, or 500ms passes — whichever comes first.
    waitForScrollSettle(el) {
      return new Promise((resolve) => {
        let lastTop = el.getBoundingClientRect().top;
        let lastLeft = el.getBoundingClientRect().left;
        let stableFrames = 0;
        let done = false;
        const finish = () => {
          if (done) return;
          done = true;
          clearTimeout(timeout);
          document.removeEventListener("scrollend", onScrollEnd, true);
          resolve();
        };
        const timeout = setTimeout(finish, 500);
        const onScrollEnd = () => finish();
        if ("onscrollend" in window) {
          document.addEventListener("scrollend", onScrollEnd, true);
        }
        const poll = () => {
          if (done) return;
          const rect = el.getBoundingClientRect();
          if (Math.abs(rect.top - lastTop) < 0.5 && Math.abs(rect.left - lastLeft) < 0.5) {
            stableFrames++;
            if (stableFrames >= 2) {
              finish();
              return;
            }
          } else {
            stableFrames = 0;
            lastTop = rect.top;
            lastLeft = rect.left;
          }
          requestAnimationFrame(poll);
        };
        requestAnimationFrame(poll);
      });
    }
    onCommented(event) {
      const el = this.findTargetElement(event.targetId);
      const fingerprint = el ? this.generateFingerprint(el) : void 0;
      const snapshot = this.captureDomState(el);
      const thread = store.addComment(event.targetId, event.targetLabel, event.text, fingerprint, snapshot);
      if (this.popoverState) {
        this.openPopover({
          ...this.popoverState,
          thread,
          threadId: thread.id
        });
      }
    }
    // ── Element targeting ──
    getElementAtPoint(x, y) {
      const overlay = this.shadowRoot.querySelector(".comment-overlay");
      const highlight = this.shadowRoot.querySelector(".element-highlight");
      if (overlay) overlay.style.pointerEvents = "none";
      if (highlight) highlight.style.pointerEvents = "none";
      const pins = this.shadowRoot.querySelectorAll(".comment-pin");
      pins.forEach((p) => p.style.pointerEvents = "none");
      const element = document.elementFromPoint(x, y);
      if (overlay) overlay.style.pointerEvents = "";
      if (highlight) highlight.style.pointerEvents = "";
      pins.forEach((p) => p.style.pointerEvents = "");
      if (element?.closest("pinpoint-overlay, pinpoint-fab, pinpoint-popover, pinpoint-panel")) {
        return null;
      }
      if (!element || element === document.body || element === document.documentElement) {
        return null;
      }
      return element;
    }
    findTargetElement(targetId) {
      const el = document.querySelector(`[data-comment-id="${targetId}"]`);
      if (el) return el;
      const cached = this.targetElementCache.get(targetId);
      if (cached && cached.isConnected) {
        cached.setAttribute("data-comment-id", targetId);
        return cached;
      }
      const thread = store.threads.find((t) => t.targetId === targetId);
      if (thread?.targetFingerprint) {
        const found = this.findByFingerprint(thread.targetFingerprint, thread);
        if (found) {
          found.setAttribute("data-comment-id", targetId);
          this.targetElementCache.set(targetId, found);
          return found;
        }
      }
      return null;
    }
    resolveCommentTarget(element) {
      const existingId = element.getAttribute("data-comment-id");
      if (existingId) {
        const existingThread = store.threadsByTarget.get(existingId);
        if (existingThread) {
          const currentLabel = this.getElementLabel(element, existingId);
          if (currentLabel !== existingThread.targetLabel) {
            element.removeAttribute("data-comment-id");
            return this.resolveCommentTarget(element);
          }
        }
        return {
          id: existingId,
          label: this.getElementLabel(element, existingId)
        };
      }
      const uniqueId = `comment-target-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
      element.setAttribute("data-comment-id", uniqueId);
      this.targetElementCache.set(uniqueId, element);
      return {
        id: uniqueId,
        label: this.getElementLabel(element, uniqueId)
      };
    }
    getElementLabel(element, _fallback) {
      const typeLabel = this.getElementTypeLabel(element);
      const directText = this.getDirectTextContent(element).trim();
      if (directText.length > 0) {
        return this.formatLabel(typeLabel, directText);
      }
      const ariaLabel = element.getAttribute("aria-label");
      if (ariaLabel) return this.formatLabel(typeLabel, ariaLabel);
      const alt = element.getAttribute("alt");
      if (alt && alt.trim()) return this.formatLabel(typeLabel, alt.trim());
      const placeholder = element.getAttribute("placeholder");
      if (placeholder && placeholder.trim()) return this.formatLabel(typeLabel, placeholder.trim());
      const title = element.getAttribute("title");
      if (title && title.trim()) return this.formatLabel(typeLabel, title.trim());
      const descendantText = this.getDescendantLabel(element);
      if (descendantText) {
        return this.formatLabel(typeLabel, descendantText);
      }
      if (typeLabel) {
        let ancestor2 = element.parentElement;
        for (let i = 0; i < 5 && ancestor2 && ancestor2 !== document.documentElement; i++) {
          const ancestorText = this.getDirectTextContent(ancestor2).trim();
          if (ancestorText.length > 0 && ancestorText.length <= 60) {
            return this.formatLabel(typeLabel, `in "${ancestorText}"`);
          }
          ancestor2 = ancestor2.parentElement;
        }
        return `Comment about ${typeLabel.toLowerCase()}`;
      }
      let ancestor = element.parentElement;
      for (let i = 0; i < 5 && ancestor && ancestor !== document.documentElement; i++) {
        const ancestorText = this.getDirectTextContent(ancestor).trim();
        if (ancestorText.length > 0 && ancestorText.length <= 60) {
          return `in "${ancestorText}"`;
        }
        ancestor = ancestor.parentElement;
      }
      return "General comment";
    }
    formatLabel(typeLabel, content) {
      if (typeLabel) {
        const full = `${typeLabel} \u2192 ${content}`;
        return full.length > 80 ? full.slice(0, 77) + "..." : full;
      }
      return content.length > 80 ? content.slice(0, 77) + "..." : content;
    }
    getElementTypeLabel(element) {
      const tag = element.tagName.toLowerCase();
      const tagLabel = this.semanticTagLabel(tag);
      if (tagLabel) return tagLabel;
      const role = element.getAttribute("role");
      if (role) {
        const roleMap = {
          button: "Button",
          tab: "Tab",
          tabpanel: "Tab Panel",
          dialog: "Dialog",
          alert: "Alert",
          navigation: "Navigation",
          menu: "Menu",
          menuitem: "Menu Item",
          toolbar: "Toolbar",
          tooltip: "Tooltip",
          banner: "Banner",
          search: "Search",
          switch: "Switch",
          slider: "Slider",
          progressbar: "Progress Bar",
          listbox: "List",
          option: "Option",
          checkbox: "Checkbox",
          radio: "Radio",
          link: "Link",
          textbox: "Input"
        };
        return roleMap[role] ?? null;
      }
      return null;
    }
    semanticTagLabel(tag) {
      const map = {
        nav: "Navigation",
        header: "Header",
        footer: "Footer",
        main: "Main content",
        aside: "Sidebar",
        section: "Section",
        form: "Form",
        table: "Table",
        figure: "Figure",
        dialog: "Dialog",
        details: "Details",
        summary: "Summary",
        ul: "List",
        ol: "List",
        li: "List item",
        img: "Image",
        video: "Video",
        audio: "Audio",
        svg: "Icon",
        canvas: "Canvas",
        input: "Input",
        textarea: "Text area",
        select: "Select",
        button: "Button",
        a: "Link",
        label: "Label",
        h1: "Heading",
        h2: "Heading",
        h3: "Heading",
        h4: "Heading",
        h5: "Heading",
        h6: "Heading",
        p: "Paragraph"
      };
      return map[tag] ?? null;
    }
    getDirectTextContent(element) {
      let text = "";
      for (let i = 0; i < element.childNodes.length; i++) {
        const node = element.childNodes[i];
        if (node.nodeType === Node.TEXT_NODE) {
          text += node.textContent || "";
        }
      }
      if (!text.trim() && element.children.length === 0) {
        text = element.textContent || "";
      }
      return text;
    }
    getDescendantLabel(element) {
      if (this.hasAmbiguousChildren(element)) return null;
      const headingTags = /* @__PURE__ */ new Set(["H1", "H2", "H3", "H4", "H5", "H6"]);
      const heading = element.querySelector("h1, h2, h3, h4, h5, h6");
      if (heading) {
        const text = (heading.textContent || "").trim();
        if (text.length > 0 && text.length <= 60) return text;
      }
      const stack = [];
      for (let i = 0; i < element.children.length; i++) {
        stack.push({ el: element.children[i], depth: 1 });
      }
      while (stack.length > 0) {
        const { el, depth } = stack.shift();
        if (headingTags.has(el.tagName)) continue;
        const text = this.getDirectTextContent(el).trim();
        if (text.length > 0 && text.length <= 60) return text;
        if (depth < 5) {
          if (this.hasAmbiguousChildren(el)) continue;
          for (let i = 0; i < el.children.length; i++) {
            stack.push({ el: el.children[i], depth: depth + 1 });
          }
        }
      }
      return null;
    }
    hasAmbiguousChildren(element) {
      const children = element.children;
      if (children.length <= 1) return false;
      const tagCounts = /* @__PURE__ */ new Map();
      for (let i = 0; i < children.length; i++) {
        const tag = children[i].tagName;
        const count = (tagCounts.get(tag) || 0) + 1;
        if (count > 1) return true;
        tagCounts.set(tag, count);
      }
      return false;
    }
    // ── Pin positioning ──
    updatePinPositions(threads) {
      const positions = [];
      for (const thread of threads) {
        if (!store.isThreadOnCurrentPage(thread)) continue;
        let foundBy = null;
        let el = document.querySelector(`[data-comment-id="${thread.targetId}"]`);
        if (el) {
          foundBy = "attr";
        }
        if (!el) {
          const cached = this.targetElementCache.get(thread.targetId);
          if (cached && cached.isConnected) {
            cached.setAttribute("data-comment-id", thread.targetId);
            el = cached;
            foundBy = "cache";
          }
        }
        if (!el && thread.targetFingerprint) {
          el = this.findByFingerprint(thread.targetFingerprint, thread);
          if (el) {
            el.setAttribute("data-comment-id", thread.targetId);
            this.targetElementCache.set(thread.targetId, el);
            foundBy = "fingerprint";
          }
        }
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.width === 0 && rect.height === 0) continue;
        if (rect.bottom < 0 || rect.top > window.innerHeight || rect.right < 0 || rect.left > window.innerWidth) continue;
        if (!this.isVisibleInAncestors(el)) continue;
        const currentLabel = this.getElementLabel(el, thread.targetId);
        if (currentLabel !== thread.targetLabel) {
          el.removeAttribute("data-comment-id");
          continue;
        }
        if (foundBy === "fingerprint") {
          const snapshot = thread.stateSnapshot;
          const savedHash = snapshot?.contentHash;
          const savedContainerId = snapshot?.contentContainerId;
          if (savedHash !== void 0) {
            const container = savedContainerId ? document.getElementById(savedContainerId) : this.findContentContainer(el);
            if (container && this.contentHashOf(container) !== savedHash) continue;
          }
        }
        if (!thread.targetFingerprint) {
          this.pendingFingerprints.set(thread.id, el);
        }
        const pinSize = 28;
        const authors = [...new Set(thread.comments.map((c) => c.author).filter(Boolean))];
        const multiAuthor = authors.length > 1;
        const initials2 = authors.length > 0 ? authors[0].trim().split(/\s+/).map((w) => w[0]).join("").toUpperCase().slice(0, 2) : "?";
        positions.push({
          threadId: thread.id,
          targetId: thread.targetId,
          x: Math.min(Math.max(rect.right - 8, 0), window.innerWidth - pinSize),
          y: Math.min(Math.max(rect.top - 8, 8), window.innerHeight - pinSize),
          count: thread.comments.length,
          initials: initials2,
          multiAuthor,
          firstAuthor: thread.comments[thread.comments.length - 1]?.author ?? authors[0] ?? ""
        });
      }
      this.pinPositions = positions;
    }
    pinPositionKey() {
      const popId = this.popoverState?.threadId ?? "";
      return this.pinPositions.map(
        (p) => `${p.threadId}:${Math.round(p.x)},${Math.round(p.y)}`
      ).join("|") + "!" + popId + "!" + (store.pinsVisible ? "1" : "0");
    }
    startPinPositionLoop() {
      const tick = () => {
        const threads = store.threads;
        if (threads.length > 0) {
          this.updatePinPositions(threads);
          const key = this.pinPositionKey();
          if (key !== this.lastRenderedPinKey) {
            this.lastRenderedPinKey = key;
            this.renderOverlayState();
          }
        } else if (store.pinsVisible !== (this.lastRenderedPinKey !== "")) {
          this.lastRenderedPinKey = "";
          this.renderOverlayState();
        }
        if (this.pendingFingerprints.size > 0) {
          for (const [threadId, el] of this.pendingFingerprints) {
            if (el.isConnected) {
              const fp = this.generateFingerprint(el);
              store.updateThreadFingerprint(threadId, fp);
            }
          }
          this.pendingFingerprints.clear();
        }
        this.animFrameId = requestAnimationFrame(tick);
      };
      this.animFrameId = requestAnimationFrame(tick);
    }
    isVisibleInAncestors(el) {
      const rect = el.getBoundingClientRect();
      let parent = el.parentElement;
      while (parent && parent !== document.documentElement) {
        const style = window.getComputedStyle(parent);
        const overflow = style.overflow + style.overflowX + style.overflowY;
        if (overflow.includes("hidden") || overflow.includes("scroll") || overflow.includes("auto")) {
          const parentRect = parent.getBoundingClientRect();
          if (rect.bottom <= parentRect.top || rect.top >= parentRect.bottom || rect.right <= parentRect.left || rect.left >= parentRect.right) {
            return false;
          }
        }
        parent = parent.parentElement;
      }
      return true;
    }
    stopPinPositionLoop() {
      if (this.animFrameId !== null) {
        cancelAnimationFrame(this.animFrameId);
        this.animFrameId = null;
      }
    }
    // ── Fingerprinting ──
    generateFingerprint(element) {
      const tag = element.tagName.toLowerCase();
      const classes = typeof element.className === "string" ? element.className.split(/\s+/).filter((c) => c && !c.startsWith("_ng") && !c.startsWith("ng-")) : [];
      const textSnippet = (element.textContent || "").trim().slice(0, 80);
      let nthOfType = 0;
      if (element.parentElement) {
        const siblings = element.parentElement.children;
        for (let i = 0; i < siblings.length; i++) {
          if (siblings[i].tagName === element.tagName) {
            nthOfType++;
            if (siblings[i] === element) break;
          }
        }
      }
      const parentPath = [];
      let ancestor = element.parentElement;
      for (let i = 0; i < 3 && ancestor && ancestor !== document.documentElement; i++) {
        const aTag = ancestor.tagName.toLowerCase();
        const aClasses = typeof ancestor.className === "string" ? ancestor.className.split(/\s+/).filter((c) => c && !c.startsWith("_ng") && !c.startsWith("ng-")).slice(0, 2) : [];
        parentPath.push(aClasses.length > 0 ? `${aTag}.${aClasses.join(".")}` : aTag);
        ancestor = ancestor.parentElement;
      }
      return { tag, classes, textSnippet, nthOfType, parentPath };
    }
    findByFingerprint(fp, thread) {
      let selector = fp.tag;
      for (const cls of fp.classes) {
        selector += `.${CSS.escape(cls)}`;
      }
      let candidates = Array.from(document.querySelectorAll(selector));
      if (candidates.length === 0) return null;
      if (candidates.length === 1) return candidates[0];
      if (fp.textSnippet) {
        const textMatches = candidates.filter((el) => {
          const text = (el.textContent || "").trim().slice(0, 80);
          return text === fp.textSnippet;
        });
        if (textMatches.length === 1) return textMatches[0];
        if (textMatches.length > 1) candidates = textMatches;
      }
      const scored = candidates.map((el) => {
        let score = 0;
        if (el.parentElement) {
          let nth = 0;
          const siblings = el.parentElement.children;
          for (let i = 0; i < siblings.length; i++) {
            if (siblings[i].tagName === el.tagName) {
              nth++;
              if (siblings[i] === el) break;
            }
          }
          if (nth === fp.nthOfType) score += 3;
        }
        if (fp.parentPath && fp.parentPath.length > 0) {
          let ancestor = el.parentElement;
          let depth = 0;
          for (let i = 0; i < fp.parentPath.length; i++) {
            if (!ancestor || ancestor === document.documentElement) break;
            const aTag = ancestor.tagName.toLowerCase();
            const aClasses = typeof ancestor.className === "string" ? ancestor.className.split(/\s+/).filter((c) => c && !c.startsWith("_ng") && !c.startsWith("ng-")).slice(0, 2) : [];
            const aSelector = aClasses.length > 0 ? `${aTag}.${aClasses.join(".")}` : aTag;
            if (aSelector !== fp.parentPath[i]) break;
            depth++;
            ancestor = ancestor.parentElement;
          }
          score += depth * 2;
        }
        const claimedId = el.getAttribute("data-comment-id");
        if (!claimedId) {
          score += 1;
        } else if (thread && claimedId === thread.targetId) {
          score += 4;
        } else if (claimedId) {
          score -= 4;
        }
        return { el, score };
      });
      scored.sort((a, b) => b.score - a.score);
      const best = scored[0];
      const ties = scored.filter((s) => s.score === best.score);
      if (ties.length > 1 && thread) {
        const snapshot = thread.stateSnapshot;
        const savedHash = snapshot?.contentHash;
        if (savedHash !== void 0) {
          for (const t of ties) {
            const container = this.findContentContainer(t.el);
            if (container && this.contentHashOf(container) === savedHash) {
              return t.el;
            }
          }
        }
      }
      return best.el;
    }
    // ── DOM state capture & restore ──
    captureDomState(targetEl) {
      const actions = [];
      if (targetEl) {
        this.captureVisibilityChain(targetEl, actions);
      }
      const ariaPressed = document.querySelectorAll('[aria-pressed="true"]');
      const itemsCaptured = /* @__PURE__ */ new Set();
      ariaPressed.forEach((el) => {
        if (this.isPinpointUi(el)) return;
        itemsCaptured.add(el);
        actions.push({
          type: "listItem",
          selector: '[aria-pressed="true"]',
          matchAriaLabel: el.getAttribute("aria-label") || void 0,
          matchTextSnippet: (el.textContent || "").trim().slice(0, 80)
        });
      });
      if (itemsCaptured.size === 0) {
        document.querySelectorAll("*").forEach((el) => {
          if (this.isPinpointUi(el)) return;
          const cls = typeof el.className === "string" ? el.className : "";
          if (/(?:^|\s)(?:[a-z][\w-]*--selected|active|selected|is-active|is-selected)(?:\s|$)/.test(cls) && this.hasSimilarSiblings(el)) {
            const tag = el.tagName.toLowerCase();
            const allClasses = cls.split(/\s+/).filter((c) => c);
            const activeClasses = /* @__PURE__ */ new Set(["active", "is-active", "is-selected", "selected"]);
            const isActiveClass = (c) => activeClasses.has(c) || c.includes("--selected");
            const selectedClass = allClasses.find(isActiveClass) || "";
            const stableClasses = allClasses.filter((c) => !isActiveClass(c) && !c.startsWith("_ng") && !c.startsWith("ng-"));
            const baseClassPart = stableClasses.length > 0 ? stableClasses.map((c) => `.${CSS.escape(c)}`).join("") : "";
            actions.push({
              type: "listItem",
              selector: `${tag}.${CSS.escape(selectedClass)}`,
              selectorBase: baseClassPart ? `${tag}${baseClassPart}` : tag,
              matchAriaLabel: el.getAttribute("aria-label") || void 0,
              matchTextSnippet: (el.textContent || "").trim().slice(0, 80)
            });
          }
        });
      }
      let contentHash;
      let contentContainerId;
      if (targetEl) {
        const container = this.findContentContainer(targetEl);
        if (container) {
          contentHash = this.contentHashOf(container);
          contentContainerId = container.id || void 0;
        }
      }
      if (actions.length > 0 || contentHash !== void 0) {
        return {
          ...actions.length > 0 ? { domActions: actions } : {},
          ...contentHash !== void 0 ? { contentHash } : {},
          ...contentContainerId ? { contentContainerId } : {}
        };
      }
      return void 0;
    }
    captureVisibilityChain(targetEl, actions) {
      let current = targetEl.parentElement;
      while (current && current !== document.body && current !== document.documentElement) {
        if (this.isPinpointUi(current)) {
          current = current.parentElement;
          continue;
        }
        const parent = current.parentElement;
        if (!parent) break;
        const sameSiblings = Array.from(parent.children).filter(
          (c) => c.tagName === current.tagName && c !== current && !this.isPinpointUi(c)
        );
        const hasHiddenSiblings = sameSiblings.some(
          (s) => getComputedStyle(s).display === "none"
        );
        if (hasHiddenSiblings) {
          const controller = this.findToggleController(current, parent);
          if (controller) {
            actions.push({
              type: "tab",
              selector: controller.selector,
              matchText: controller.text,
              matchTextSnippet: controller.text.slice(0, 80)
            });
          }
        } else if (this.isOverlayElement(current)) {
          const trigger = this.findOverlayTrigger(current);
          if (trigger) {
            actions.push({
              type: "modalTrigger",
              selector: trigger.selector,
              matchText: trigger.text,
              matchTextSnippet: trigger.text.slice(0, 80),
              triggerFingerprint: trigger.fingerprint
            });
          }
        }
        current = current.parentElement;
      }
    }
    isOverlayElement(el) {
      const style = getComputedStyle(el);
      const pos = style.position;
      if (pos === "fixed" || pos === "absolute") {
        const rect = el.getBoundingClientRect();
        const coversViewport = rect.width > window.innerWidth * 0.5 || rect.height > window.innerHeight * 0.5;
        if (coversViewport) return true;
      }
      if (el.getAttribute("role") === "dialog" || el.getAttribute("aria-modal") === "true") {
        return true;
      }
      const cls = typeof el.className === "string" ? el.className.toLowerCase() : "";
      if (/\b(modal|dialog|overlay|drawer|sheet|popup|lightbox)\b/.test(cls)) {
        return true;
      }
      return false;
    }
    findToggleController(panel, panelParent) {
      if (panel.id) {
        const ctrl = document.querySelector(`[aria-controls="${CSS.escape(panel.id)}"]`);
        if (ctrl && !this.isPinpointUi(ctrl)) {
          return { selector: this.buildClickableSelector(ctrl), text: (ctrl.textContent || "").trim() };
        }
      }
      const panelGroup = /* @__PURE__ */ new Set([panel]);
      const allSameTag = Array.from(panelParent.children).filter((c) => c.tagName === panel.tagName);
      for (const s of allSameTag) {
        if (s !== panel && getComputedStyle(s).display === "none") panelGroup.add(s);
      }
      const panelIndex = allSameTag.filter((c) => panelGroup.has(c)).indexOf(panel);
      for (const sibling of Array.from(panelParent.children)) {
        if (panelGroup.has(sibling)) continue;
        if (this.isPinpointUi(sibling)) continue;
        const clickables = this.getClickableChildren(sibling);
        if (clickables.length < 2) continue;
        const active = clickables.find(
          (el) => el.getAttribute("aria-selected") === "true" || el.getAttribute("aria-current") != null || typeof el.className === "string" && /\b(active|selected|current)\b/i.test(el.className)
        );
        if (active) {
          return { selector: this.buildClickableSelector(active), text: (active.textContent || "").trim() };
        }
        if (panelIndex >= 0 && panelIndex < clickables.length) {
          return {
            selector: this.buildClickableSelector(clickables[panelIndex]),
            text: (clickables[panelIndex].textContent || "").trim()
          };
        }
      }
      return null;
    }
    findOverlayTrigger(overlay) {
      if (overlay.id) {
        const ctrl = document.querySelector(
          `[aria-controls="${CSS.escape(overlay.id)}"]:not([role="tab"])`
        );
        if (ctrl && !this.isPinpointUi(ctrl) && !overlay.contains(ctrl)) {
          return {
            selector: this.buildClickableSelector(ctrl),
            text: (ctrl.textContent || "").trim(),
            fingerprint: this.buildTriggerFingerprint(ctrl)
          };
        }
      }
      const haspopup = document.querySelectorAll('[aria-haspopup="dialog"]');
      for (const btn of Array.from(haspopup)) {
        if (overlay.contains(btn) || this.isPinpointUi(btn)) continue;
        return {
          selector: this.buildClickableSelector(btn),
          text: (btn.textContent || "").trim(),
          fingerprint: this.buildTriggerFingerprint(btn)
        };
      }
      if (overlay.id) {
        const dataCtrl = document.querySelector(
          `[data-target="#${CSS.escape(overlay.id)}"], [data-toggle][data-target="#${CSS.escape(overlay.id)}"]`
        );
        if (dataCtrl && !this.isPinpointUi(dataCtrl) && !overlay.contains(dataCtrl)) {
          return {
            selector: this.buildClickableSelector(dataCtrl),
            text: (dataCtrl.textContent || "").trim(),
            fingerprint: this.buildTriggerFingerprint(dataCtrl)
          };
        }
      }
      const title = this.getModalTitle(overlay);
      if (title) {
        const titleLower = title.toLowerCase();
        const buttons = document.querySelectorAll('button, a, [role="button"]');
        for (const btn of Array.from(buttons)) {
          if (overlay.contains(btn) || this.isPinpointUi(btn)) continue;
          if (btn.getAttribute("role") === "tab" || btn.closest('[role="tablist"]')) continue;
          const btnText = (btn.textContent || "").trim().toLowerCase();
          if (btnText && btnText.length > 1 && (btnText.includes(titleLower) || titleLower.includes(btnText))) {
            return {
              selector: this.buildClickableSelector(btn),
              text: (btn.textContent || "").trim(),
              fingerprint: this.buildTriggerFingerprint(btn)
            };
          }
        }
      }
      return null;
    }
    getClickableChildren(container) {
      let clickables = Array.from(
        container.querySelectorAll('button, a, [role="tab"], [role="button"]')
      ).filter((el) => !this.isPinpointUi(el));
      if (clickables.length >= 2) return clickables;
      clickables = Array.from(container.children).filter((c) => {
        if (this.isPinpointUi(c)) return false;
        const tag = c.tagName;
        if (tag === "BUTTON" || tag === "A") return true;
        if (c.getAttribute("role") === "tab" || c.getAttribute("role") === "button") return true;
        try {
          return getComputedStyle(c).cursor === "pointer";
        } catch {
          return false;
        }
      });
      return clickables;
    }
    buildClickableSelector(el) {
      const tag = el.tagName.toLowerCase();
      if (el.getAttribute("role") === "tab") return `${tag}[role="tab"]`;
      if (el.getAttribute("role") === "button") return `${tag}[role="button"]`;
      const cls = typeof el.className === "string" ? el.className : "";
      const classes = cls.split(/\s+/).filter((c) => c && !c.startsWith("_ng") && !c.startsWith("ng-") && !/^(active|selected|current)$/i.test(c)).slice(0, 2);
      return classes.length > 0 ? `${tag}.${classes.map((c) => CSS.escape(c)).join(".")}` : tag;
    }
    pollForElement(finder, timeout) {
      return new Promise((resolve) => {
        const el = finder();
        if (el) {
          resolve(el);
          return;
        }
        const start = performance.now();
        const poll = () => {
          const el2 = finder();
          if (el2) {
            resolve(el2);
            return;
          }
          if (performance.now() - start >= timeout) {
            resolve(null);
            return;
          }
          requestAnimationFrame(poll);
        };
        requestAnimationFrame(poll);
      });
    }
    async restoreDomState(actions) {
      for (let i = 0; i < actions.length; i++) {
        const action = actions[i];
        const nextIsModal = i + 1 < actions.length && actions[i + 1].type === "modalTrigger";
        let el = this.findActionTarget(action);
        if (!el && action.type === "modalTrigger") {
          el = await this.pollForElement(() => this.findActionTarget(action), 400);
        }
        if (el) {
          if (action.type === "tab") {
            const isAlreadyActive = el.getAttribute("aria-selected") === "true" || el.getAttribute("aria-current") != null || typeof el.className === "string" && /\b(active|selected|current)\b/i.test(el.className);
            if (isAlreadyActive) continue;
          }
          el.click();
          await this.delay(nextIsModal ? 100 : 50);
        }
      }
      await this.delay(100);
    }
    findActionTarget(action) {
      if (action.type === "modalTrigger" && action.triggerFingerprint) {
        try {
          const fpCandidates = Array.from(document.querySelectorAll(action.triggerFingerprint)).filter((el) => !this.isPinpointUi(el));
          if (fpCandidates.length === 1) return fpCandidates[0];
          if (fpCandidates.length > 1 && action.matchText) {
            const match = fpCandidates.find((el) => (el.textContent || "").trim() === action.matchText);
            if (match) return match;
          }
          if (fpCandidates.length > 0) return fpCandidates[0];
        } catch {
        }
      }
      let candidates;
      if (action.type === "listItem" && action.selector === '[aria-pressed="true"]') {
        candidates = Array.from(document.querySelectorAll("[aria-pressed]"));
      } else if (action.type === "listItem") {
        const baseSelector = action.selectorBase || action.selector.replace(/\.(?:[^\s.]*selected[^\s.]*|active|is-active|is-selected)/g, "");
        candidates = baseSelector ? Array.from(document.querySelectorAll(baseSelector)) : [];
        if (candidates.length === 0) {
          candidates = Array.from(document.querySelectorAll(action.selector));
        }
      } else {
        candidates = Array.from(document.querySelectorAll(action.selector));
      }
      candidates = candidates.filter((el) => !this.isPinpointUi(el));
      if (candidates.length === 0) return null;
      if (candidates.length === 1) return candidates[0];
      if (action.matchAriaLabel) {
        const ariaMatch = candidates.find((el) => el.getAttribute("aria-label") === action.matchAriaLabel);
        if (ariaMatch) return ariaMatch;
      }
      if (action.matchText) {
        const textMatch = candidates.find((el) => (el.textContent || "").trim() === action.matchText);
        if (textMatch) return textMatch;
      }
      if (action.matchTextSnippet) {
        const snippetMatch = candidates.find(
          (el) => (el.textContent || "").trim().slice(0, 80) === action.matchTextSnippet
        );
        if (snippetMatch) return snippetMatch;
      }
      return candidates[0];
    }
    // ── Helpers ──
    isPinpointUi(el) {
      return !!el.closest("pinpoint-overlay, pinpoint-fab, pinpoint-popover, pinpoint-panel");
    }
    hasSimilarSiblings(el) {
      if (!el.parentElement) return false;
      const tag = el.tagName;
      let count = 0;
      for (let i = 0; i < el.parentElement.children.length; i++) {
        if (el.parentElement.children[i].tagName === tag) count++;
        if (count > 1) return true;
      }
      return false;
    }
    hashString(s) {
      let h = 5381;
      for (let i = 0; i < s.length; i++) {
        h = (h << 5) + h ^ s.charCodeAt(i);
        h = h >>> 0;
      }
      return h;
    }
    contentHashOf(el) {
      const raw = (el.textContent || "").replace(/\s+/g, " ").trim().slice(0, 2e3);
      return this.hashString(raw);
    }
    findContentContainer(targetEl) {
      let current = targetEl.parentElement;
      let steps = 0;
      let fallback = null;
      while (current && current !== document.body && steps < 15) {
        if (this.isPinpointUi(current)) {
          current = current.parentElement;
          continue;
        }
        const text = (current.textContent || "").trim();
        if (current.id && text.length > 50) {
          return current;
        }
        if (!fallback && text.length > 200) {
          fallback = current;
        }
        current = current.parentElement;
        steps++;
      }
      return fallback;
    }
    isElementVisible(el) {
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 && rect.height === 0) return false;
      const style = window.getComputedStyle(el);
      if (style.display === "none" || style.visibility === "hidden") return false;
      let ancestor = el.parentElement;
      while (ancestor && ancestor !== document.documentElement) {
        if (window.getComputedStyle(ancestor).display === "none") return false;
        ancestor = ancestor.parentElement;
      }
      return true;
    }
    getModalTitle(modal) {
      const labelledBy = modal.getAttribute("aria-labelledby");
      if (labelledBy) {
        const labelEl = document.getElementById(labelledBy);
        if (labelEl) return (labelEl.textContent || "").trim();
      }
      const heading = modal.querySelector('h1, h2, h3, h4, h5, h6, [class*="title"]');
      if (heading) return (heading.textContent || "").trim();
      return null;
    }
    buildTriggerFingerprint(el) {
      const parts = [];
      let current = el;
      for (let i = 0; i < 4 && current && current !== document.documentElement; i++) {
        const tag = current.tagName.toLowerCase();
        const cls = typeof current.className === "string" ? current.className.split(/\s+/).filter((c) => c && !c.startsWith("_ng") && !c.startsWith("ng-")).slice(0, 1) : [];
        parts.unshift(cls.length > 0 ? `${tag}.${CSS.escape(cls[0])}` : tag);
        current = current.parentElement;
      }
      return parts.join(" ");
    }
    convertLegacySnapshot(snapshot) {
      const actions = [];
      if (typeof snapshot["activeProjectTab"] === "string") {
        const tabLabel = snapshot["activeProjectTab"];
        const label = tabLabel.charAt(0).toUpperCase() + tabLabel.slice(1);
        actions.push({
          type: "tab",
          selector: 'button[role="tab"]',
          matchText: label
        });
      }
      return actions;
    }
    delay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    clampX(x) {
      return Math.min(Math.max(x, 8), window.innerWidth - 328);
    }
    clampY(y) {
      return Math.min(Math.max(y, 8), window.innerHeight - 400);
    }
    // Place popover to the right of the pin; flip left only if right overflows AND left fits better
    popoverX(pinX) {
      const POPOVER_W = 320;
      const PIN_W = 28;
      const GAP = 8;
      const MARGIN2 = 8;
      const rightX = pinX + PIN_W + GAP;
      const leftX = pinX - POPOVER_W - GAP;
      if (rightX + POPOVER_W <= window.innerWidth - MARGIN2) return rightX;
      if (leftX >= MARGIN2) return leftX;
      return Math.max(MARGIN2, window.innerWidth - POPOVER_W - MARGIN2);
    }
  };

  // src/pinpoint-fab.ts
  var MARGIN = 20;
  var DRAG_THRESHOLD = 4;
  var styles2 = `
  ${tokenStyles}

  :host {
    position: fixed;
    z-index: 2147483520;
    display: block;
    touch-action: none;
  }

  .fab {
    display: flex;
    align-items: stretch;
    height: 48px;
    border-radius: 14px;
    background: var(--pinpoint-bg);
    border: 1px solid var(--pinpoint-border-outer);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(0, 0, 0, 0.08);
    font-family: var(--pinpoint-font);
    user-select: none;
    overflow: hidden;
  }

  :host(.dragging) .fab {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(0, 0, 0, 0.12);
    cursor: grabbing;
  }

  .fab-segment {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    padding: 0 16px;
    border: none;
    background: none;
    color: var(--pinpoint-text-secondary);
    font-family: inherit;
    font-size: 13px;
    cursor: pointer;
    transition: background 0.12s ease, color 0.12s ease;
  }

  .fab-segment:hover {
    background: var(--pinpoint-bg-hover);
    color: var(--pinpoint-text);
  }

  .fab-segment:focus-visible {
    outline: 2px solid var(--pinpoint-accent);
    outline-offset: -3px;
  }

  .fab-segment.active {
    background: var(--pinpoint-accent);
    color: var(--pinpoint-on-accent);
  }

  .fab-segment.active:hover {
    background: var(--pinpoint-accent-hover);
  }

  .fab-grip {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 8px 0 10px;
    color: var(--pinpoint-text-faint);
    cursor: grab;
    transition: color 0.12s ease;
  }

  .fab-grip:hover {
    color: var(--pinpoint-text-muted);
  }

  :host(.dragging) .fab-grip {
    cursor: grabbing;
    color: var(--pinpoint-text-muted);
  }

  .fab-divider {
    width: 1px;
    background: var(--pinpoint-border-outer);
    flex-shrink: 0;
  }

  .count-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 20px;
    height: 20px;
    padding: 0 6px;
    border-radius: var(--pinpoint-radius-full);
    font-size: 11px;
    font-weight: 600;
    line-height: 1;
    background: var(--pinpoint-border-strong);
    color: var(--pinpoint-text);
    box-sizing: border-box;
  }

  .count-badge.has-unread {
    background: var(--pinpoint-danger-strong);
    color: #fff;
  }

  .view-segment.active .count-badge {
    background: rgba(255, 255, 255, 0.22);
    color: #fff;
  }

  .view-segment.active .count-badge.has-unread {
    background: var(--pinpoint-danger-strong);
  }

  @media (prefers-reduced-motion: reduce) {
    .fab-segment {
      transition: none;
    }
  }
`;
  var PinpointFab = class extends HTMLElement {
    unsubscribe = null;
    pos = { corner: "bottom-right", dx: MARGIN, dy: MARGIN };
    dragState = null;
    onResize = () => this.applyPosition();
    get storageKey() {
      return `pinpoint-fab-pos::${store.scopeId}`;
    }
    connectedCallback() {
      this.attachShadow({ mode: "open" });
      this.initDOM();
      this.loadPosition();
      this.applyPosition();
      this.unsubscribe = store.subscribe(() => this.update());
      window.addEventListener("resize", this.onResize);
      this.update();
    }
    disconnectedCallback() {
      this.unsubscribe?.();
      window.removeEventListener("resize", this.onResize);
    }
    initDOM() {
      this.shadowRoot.innerHTML = `
      <style>${styles2}</style>
      <div class="fab">
        <div class="fab-grip" aria-hidden="true" title="Drag to move">
          <svg width="7" height="16" viewBox="0 0 7 16" fill="currentColor">
            <circle cx="1.5" cy="3" r="1.1"/>
            <circle cx="5.5" cy="3" r="1.1"/>
            <circle cx="1.5" cy="8" r="1.1"/>
            <circle cx="5.5" cy="8" r="1.1"/>
            <circle cx="1.5" cy="13" r="1.1"/>
            <circle cx="5.5" cy="13" r="1.1"/>
          </svg>
        </div>
        <div class="fab-divider" aria-hidden="true"></div>
        <button class="fab-segment view-segment" aria-label="Toggle comments panel">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M2 3A1.5 1.5 0 0 1 3.5 1.5h9A1.5 1.5 0 0 1 14 3v7a1.5 1.5 0 0 1-1.5 1.5H7L4 14.5v-3H3.5A1.5 1.5 0 0 1 2 10V3Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" fill="none"/>
          </svg>
          <span class="count-badge" style="display:none"></span>
        </button>
        <div class="fab-divider" aria-hidden="true"></div>
        <button class="fab-segment add-segment" aria-label="Add a comment">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 2v12M2 8h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
    `;
      this.shadowRoot.querySelector(".view-segment").addEventListener("click", () => {
        if (this.dragState?.moved) return;
        store.togglePanel();
      });
      this.shadowRoot.querySelector(".add-segment").addEventListener("click", () => {
        if (this.dragState?.moved) return;
        store.setCommentModeActive(!store.commentModeActive);
      });
      this.addEventListener("pointerdown", (e) => this.onPointerDown(e));
      this.addEventListener("pointermove", (e) => this.onPointerMove(e));
      this.addEventListener("pointerup", (e) => this.onPointerUp(e));
      this.addEventListener("pointercancel", (e) => this.onPointerUp(e));
    }
    update() {
      if (!this.shadowRoot) return;
      const viewBtn = this.shadowRoot.querySelector(".view-segment");
      if (viewBtn) {
        viewBtn.classList.toggle("active", store.commentPanelOpen);
      }
      const addBtn = this.shadowRoot.querySelector(".add-segment");
      if (addBtn) {
        const active = store.commentModeActive;
        addBtn.classList.toggle("active", active);
        addBtn.setAttribute("aria-label", active ? "Stop commenting" : "Add a comment");
        addBtn.innerHTML = active ? `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
             <rect x="4" y="4" width="8" height="8" rx="1.5" fill="currentColor"/>
           </svg>` : `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
             <path d="M8 2v12M2 8h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
           </svg>`;
      }
      const activeThreads = store.threads.filter((t) => t.status !== "resolved");
      const activeCount = activeThreads.length;
      const activeUnread = activeThreads.filter((t) => !store.isThreadRead(t.id)).length;
      const countBadge = this.shadowRoot.querySelector(".count-badge");
      if (countBadge) {
        countBadge.style.display = activeCount > 0 ? "" : "none";
        countBadge.classList.toggle("has-unread", activeUnread > 0);
        countBadge.textContent = activeUnread > 0 ? String(activeUnread) : String(activeCount);
      }
    }
    // ── Positioning ──
    defaultCorner() {
      const attr = this.getAttribute("position");
      if (attr === "bottom-left" || attr === "top-right" || attr === "top-left" || attr === "bottom-right") {
        return attr;
      }
      return "bottom-right";
    }
    loadPosition() {
      this.pos = { corner: this.defaultCorner(), dx: MARGIN, dy: MARGIN };
      try {
        const raw = localStorage.getItem(this.storageKey);
        if (!raw) return;
        const saved = JSON.parse(raw);
        if (saved && typeof saved.dx === "number" && typeof saved.dy === "number" && ["bottom-right", "bottom-left", "top-right", "top-left"].includes(saved.corner)) {
          this.pos = saved;
        }
      } catch {
      }
    }
    savePosition() {
      try {
        localStorage.setItem(this.storageKey, JSON.stringify(this.pos));
      } catch {
      }
    }
    applyPosition() {
      const { width, height } = this.getOwnSize();
      const { corner, dx, dy } = this.pos;
      let left = corner.endsWith("left") ? dx : window.innerWidth - width - dx;
      let top = corner.startsWith("top") ? dy : window.innerHeight - height - dy;
      left = Math.min(Math.max(left, 8), Math.max(window.innerWidth - width - 8, 8));
      top = Math.min(Math.max(top, 8), Math.max(window.innerHeight - height - 8, 8));
      this.style.left = `${left}px`;
      this.style.top = `${top}px`;
      this.notifyMoved();
    }
    getOwnSize() {
      const rect = this.getBoundingClientRect();
      return {
        width: rect.width || 110,
        height: rect.height || 48
      };
    }
    notifyMoved() {
      this.dispatchEvent(new CustomEvent("pinpoint-fab-moved", { bubbles: true, composed: true }));
    }
    // ── Dragging ──
    onPointerDown(e) {
      if (e.button !== 0 && e.pointerType === "mouse") return;
      const rect = this.getBoundingClientRect();
      this.dragState = {
        pointerId: e.pointerId,
        startX: e.clientX,
        startY: e.clientY,
        originLeft: rect.left,
        originTop: rect.top,
        moved: false
      };
    }
    onPointerMove(e) {
      const drag = this.dragState;
      if (!drag || e.pointerId !== drag.pointerId) return;
      const dxTotal = e.clientX - drag.startX;
      const dyTotal = e.clientY - drag.startY;
      if (!drag.moved) {
        if (Math.abs(dxTotal) < DRAG_THRESHOLD && Math.abs(dyTotal) < DRAG_THRESHOLD) return;
        drag.moved = true;
        this.classList.add("dragging");
        this.setPointerCapture(e.pointerId);
      }
      const { width, height } = this.getOwnSize();
      const left = Math.min(Math.max(drag.originLeft + dxTotal, 8), window.innerWidth - width - 8);
      const top = Math.min(Math.max(drag.originTop + dyTotal, 8), window.innerHeight - height - 8);
      this.style.left = `${left}px`;
      this.style.top = `${top}px`;
      this.notifyMoved();
    }
    onPointerUp(e) {
      const drag = this.dragState;
      if (!drag || e.pointerId !== drag.pointerId) return;
      if (drag.moved) {
        this.classList.remove("dragging");
        if (this.hasPointerCapture(e.pointerId)) this.releasePointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const horiz = centerX < window.innerWidth / 2 ? "left" : "right";
        const vert = centerY < window.innerHeight / 2 ? "top" : "bottom";
        const corner = `${vert}-${horiz}`;
        const dx = horiz === "left" ? rect.left : window.innerWidth - rect.right;
        const dy = vert === "top" ? rect.top : window.innerHeight - rect.bottom;
        this.pos = { corner, dx: Math.max(dx, 8), dy: Math.max(dy, 8) };
        this.savePosition();
        this.notifyMoved();
        setTimeout(() => {
          this.dragState = null;
        });
      } else {
        this.dragState = null;
      }
    }
  };

  // src/pinpoint-emoji-data.ts
  var EMOJI_CATEGORIES = ["Smileys", "Gestures", "Hearts", "People", "Nature", "Objects", "Symbols"];
  var EMOJI_DATA = [
    // ── Smileys ──
    { emoji: "\u{1F600}", name: "grinning face", category: "Smileys" },
    { emoji: "\u{1F603}", name: "grinning face with big eyes", category: "Smileys" },
    { emoji: "\u{1F604}", name: "grinning face with smiling eyes", category: "Smileys" },
    { emoji: "\u{1F601}", name: "beaming face with smiling eyes", category: "Smileys" },
    { emoji: "\u{1F606}", name: "grinning squinting face", category: "Smileys" },
    { emoji: "\u{1F605}", name: "grinning face with sweat", category: "Smileys" },
    { emoji: "\u{1F923}", name: "rolling on the floor laughing", category: "Smileys" },
    { emoji: "\u{1F602}", name: "face with tears of joy", category: "Smileys" },
    { emoji: "\u{1F642}", name: "slightly smiling face", category: "Smileys" },
    { emoji: "\u{1F643}", name: "upside down face", category: "Smileys" },
    { emoji: "\u{1F609}", name: "winking face", category: "Smileys" },
    { emoji: "\u{1F60A}", name: "smiling face with smiling eyes", category: "Smileys" },
    { emoji: "\u{1F607}", name: "smiling face with halo", category: "Smileys" },
    { emoji: "\u{1F970}", name: "smiling face with hearts", category: "Smileys" },
    { emoji: "\u{1F60D}", name: "heart eyes", category: "Smileys" },
    { emoji: "\u{1F929}", name: "star struck", category: "Smileys" },
    { emoji: "\u{1F618}", name: "face blowing a kiss", category: "Smileys" },
    { emoji: "\u{1F60B}", name: "face savoring food", category: "Smileys" },
    { emoji: "\u{1F61B}", name: "face with tongue", category: "Smileys" },
    { emoji: "\u{1F61C}", name: "winking face with tongue", category: "Smileys" },
    { emoji: "\u{1F92A}", name: "zany face", category: "Smileys" },
    { emoji: "\u{1F61D}", name: "squinting face with tongue", category: "Smileys" },
    { emoji: "\u{1F911}", name: "money mouth face", category: "Smileys" },
    { emoji: "\u{1F917}", name: "hugging face", category: "Smileys" },
    { emoji: "\u{1F92D}", name: "face with hand over mouth", category: "Smileys" },
    { emoji: "\u{1F92B}", name: "shushing face", category: "Smileys" },
    { emoji: "\u{1F914}", name: "thinking face", category: "Smileys" },
    { emoji: "\u{1F910}", name: "zipper mouth face", category: "Smileys" },
    { emoji: "\u{1F928}", name: "face with raised eyebrow", category: "Smileys" },
    { emoji: "\u{1F610}", name: "neutral face", category: "Smileys" },
    { emoji: "\u{1F611}", name: "expressionless face", category: "Smileys" },
    { emoji: "\u{1F636}", name: "face without mouth", category: "Smileys" },
    { emoji: "\u{1F60F}", name: "smirking face", category: "Smileys" },
    { emoji: "\u{1F612}", name: "unamused face", category: "Smileys" },
    { emoji: "\u{1F644}", name: "face with rolling eyes", category: "Smileys" },
    { emoji: "\u{1F62C}", name: "grimacing face", category: "Smileys" },
    { emoji: "\u{1F925}", name: "lying face", category: "Smileys" },
    { emoji: "\u{1F60C}", name: "relieved face", category: "Smileys" },
    { emoji: "\u{1F614}", name: "pensive face", category: "Smileys" },
    { emoji: "\u{1F62A}", name: "sleepy face", category: "Smileys" },
    { emoji: "\u{1F924}", name: "drooling face", category: "Smileys" },
    { emoji: "\u{1F634}", name: "sleeping face", category: "Smileys" },
    { emoji: "\u{1F637}", name: "face with medical mask", category: "Smileys" },
    { emoji: "\u{1F912}", name: "face with thermometer", category: "Smileys" },
    { emoji: "\u{1F915}", name: "face with head bandage", category: "Smileys" },
    { emoji: "\u{1F922}", name: "nauseated face", category: "Smileys" },
    { emoji: "\u{1F92E}", name: "face vomiting", category: "Smileys" },
    { emoji: "\u{1F975}", name: "hot face", category: "Smileys" },
    { emoji: "\u{1F976}", name: "cold face", category: "Smileys" },
    { emoji: "\u{1F974}", name: "woozy face", category: "Smileys" },
    { emoji: "\u{1F635}", name: "face with crossed out eyes", category: "Smileys" },
    { emoji: "\u{1F92F}", name: "exploding head", category: "Smileys" },
    { emoji: "\u{1F60E}", name: "smiling face with sunglasses", category: "Smileys" },
    { emoji: "\u{1F913}", name: "nerd face", category: "Smileys" },
    { emoji: "\u{1F9D0}", name: "face with monocle", category: "Smileys" },
    { emoji: "\u{1F615}", name: "confused face", category: "Smileys" },
    { emoji: "\u{1F61F}", name: "worried face", category: "Smileys" },
    { emoji: "\u{1F641}", name: "slightly frowning face", category: "Smileys" },
    { emoji: "\u{1F62E}", name: "face with open mouth", category: "Smileys" },
    { emoji: "\u{1F62F}", name: "hushed face", category: "Smileys" },
    { emoji: "\u{1F632}", name: "astonished face", category: "Smileys" },
    { emoji: "\u{1F633}", name: "flushed face", category: "Smileys" },
    { emoji: "\u{1F97A}", name: "pleading face", category: "Smileys" },
    { emoji: "\u{1F626}", name: "frowning face with open mouth", category: "Smileys" },
    { emoji: "\u{1F627}", name: "anguished face", category: "Smileys" },
    { emoji: "\u{1F628}", name: "fearful face", category: "Smileys" },
    { emoji: "\u{1F630}", name: "anxious face with sweat", category: "Smileys" },
    { emoji: "\u{1F625}", name: "sad but relieved face", category: "Smileys" },
    { emoji: "\u{1F622}", name: "crying face", category: "Smileys" },
    { emoji: "\u{1F62D}", name: "loudly crying face", category: "Smileys" },
    { emoji: "\u{1F631}", name: "face screaming in fear", category: "Smileys" },
    { emoji: "\u{1F616}", name: "confounded face", category: "Smileys" },
    { emoji: "\u{1F623}", name: "persevering face", category: "Smileys" },
    { emoji: "\u{1F61E}", name: "disappointed face", category: "Smileys" },
    { emoji: "\u{1F613}", name: "downcast face with sweat", category: "Smileys" },
    { emoji: "\u{1F629}", name: "weary face", category: "Smileys" },
    { emoji: "\u{1F62B}", name: "tired face", category: "Smileys" },
    { emoji: "\u{1F971}", name: "yawning face", category: "Smileys" },
    { emoji: "\u{1F624}", name: "face with steam from nose", category: "Smileys" },
    { emoji: "\u{1F621}", name: "pouting face", category: "Smileys" },
    { emoji: "\u{1F620}", name: "angry face", category: "Smileys" },
    { emoji: "\u{1F92C}", name: "face with symbols on mouth", category: "Smileys" },
    // ── Gestures ──
    { emoji: "\u{1F44D}", name: "thumbs up", category: "Gestures" },
    { emoji: "\u{1F44E}", name: "thumbs down", category: "Gestures" },
    { emoji: "\u{1F44F}", name: "clapping hands", category: "Gestures" },
    { emoji: "\u{1F64C}", name: "raising hands", category: "Gestures" },
    { emoji: "\u{1F450}", name: "open hands", category: "Gestures" },
    { emoji: "\u{1F932}", name: "palms up together", category: "Gestures" },
    { emoji: "\u{1F91D}", name: "handshake", category: "Gestures" },
    { emoji: "\u{1F64F}", name: "folded hands pray", category: "Gestures" },
    { emoji: "\u270C\uFE0F", name: "victory hand peace", category: "Gestures" },
    { emoji: "\u{1F91E}", name: "crossed fingers", category: "Gestures" },
    { emoji: "\u{1F91F}", name: "love you gesture", category: "Gestures" },
    { emoji: "\u{1F918}", name: "sign of the horns rock", category: "Gestures" },
    { emoji: "\u{1F919}", name: "call me hand", category: "Gestures" },
    { emoji: "\u{1F448}", name: "backhand index pointing left", category: "Gestures" },
    { emoji: "\u{1F449}", name: "backhand index pointing right", category: "Gestures" },
    { emoji: "\u{1F446}", name: "backhand index pointing up", category: "Gestures" },
    { emoji: "\u{1F447}", name: "backhand index pointing down", category: "Gestures" },
    { emoji: "\u261D\uFE0F", name: "index pointing up", category: "Gestures" },
    { emoji: "\u270B", name: "raised hand", category: "Gestures" },
    { emoji: "\u{1F91A}", name: "raised back of hand", category: "Gestures" },
    { emoji: "\u{1F590}\uFE0F", name: "hand with fingers splayed", category: "Gestures" },
    { emoji: "\u{1F596}", name: "vulcan salute", category: "Gestures" },
    { emoji: "\u{1F44B}", name: "waving hand", category: "Gestures" },
    { emoji: "\u{1F90F}", name: "pinching hand", category: "Gestures" },
    { emoji: "\u270A", name: "raised fist", category: "Gestures" },
    { emoji: "\u{1F44A}", name: "oncoming fist bump", category: "Gestures" },
    { emoji: "\u{1F91B}", name: "left facing fist", category: "Gestures" },
    { emoji: "\u{1F91C}", name: "right facing fist", category: "Gestures" },
    { emoji: "\u{1F4AA}", name: "flexed biceps strong", category: "Gestures" },
    { emoji: "\u{1F9BE}", name: "mechanical arm", category: "Gestures" },
    { emoji: "\u{1F595}", name: "middle finger", category: "Gestures" },
    { emoji: "\u270D\uFE0F", name: "writing hand", category: "Gestures" },
    { emoji: "\u{1F933}", name: "selfie", category: "Gestures" },
    { emoji: "\u{1F485}", name: "nail polish", category: "Gestures" },
    // ── Hearts ──
    { emoji: "\u2764\uFE0F", name: "red heart", category: "Hearts" },
    { emoji: "\u{1F9E1}", name: "orange heart", category: "Hearts" },
    { emoji: "\u{1F49B}", name: "yellow heart", category: "Hearts" },
    { emoji: "\u{1F49A}", name: "green heart", category: "Hearts" },
    { emoji: "\u{1F499}", name: "blue heart", category: "Hearts" },
    { emoji: "\u{1F49C}", name: "purple heart", category: "Hearts" },
    { emoji: "\u{1F5A4}", name: "black heart", category: "Hearts" },
    { emoji: "\u{1F90D}", name: "white heart", category: "Hearts" },
    { emoji: "\u{1F90E}", name: "brown heart", category: "Hearts" },
    { emoji: "\u{1F494}", name: "broken heart", category: "Hearts" },
    { emoji: "\u2763\uFE0F", name: "heart exclamation", category: "Hearts" },
    { emoji: "\u{1F495}", name: "two hearts", category: "Hearts" },
    { emoji: "\u{1F49E}", name: "revolving hearts", category: "Hearts" },
    { emoji: "\u{1F493}", name: "beating heart", category: "Hearts" },
    { emoji: "\u{1F497}", name: "growing heart", category: "Hearts" },
    { emoji: "\u{1F496}", name: "sparkling heart", category: "Hearts" },
    { emoji: "\u{1F498}", name: "heart with arrow", category: "Hearts" },
    { emoji: "\u{1F49D}", name: "heart with ribbon", category: "Hearts" },
    // ── People ──
    { emoji: "\u{1F608}", name: "smiling face with horns", category: "People" },
    { emoji: "\u{1F47F}", name: "angry face with horns", category: "People" },
    { emoji: "\u{1F480}", name: "skull", category: "People" },
    { emoji: "\u2620\uFE0F", name: "skull and crossbones", category: "People" },
    { emoji: "\u{1F47B}", name: "ghost", category: "People" },
    { emoji: "\u{1F47D}", name: "alien", category: "People" },
    { emoji: "\u{1F47E}", name: "alien monster", category: "People" },
    { emoji: "\u{1F916}", name: "robot", category: "People" },
    { emoji: "\u{1F4A9}", name: "pile of poo", category: "People" },
    { emoji: "\u{1F921}", name: "clown face", category: "People" },
    { emoji: "\u{1F476}", name: "baby", category: "People" },
    { emoji: "\u{1F9D1}", name: "person", category: "People" },
    { emoji: "\u{1F468}", name: "man", category: "People" },
    { emoji: "\u{1F469}", name: "woman", category: "People" },
    { emoji: "\u{1F9D3}", name: "older person", category: "People" },
    { emoji: "\u{1F9D9}", name: "mage wizard", category: "People" },
    { emoji: "\u{1F9DB}", name: "vampire", category: "People" },
    { emoji: "\u{1F9DF}", name: "zombie", category: "People" },
    { emoji: "\u{1F9DE}", name: "genie", category: "People" },
    { emoji: "\u{1F9DC}", name: "merperson", category: "People" },
    { emoji: "\u{1F9B8}", name: "superhero", category: "People" },
    { emoji: "\u{1F9B9}", name: "supervillain", category: "People" },
    { emoji: "\u{1F9D1}\u200D\u{1F4BB}", name: "technologist coder developer", category: "People" },
    { emoji: "\u{1F9D1}\u200D\u{1F3A8}", name: "artist designer", category: "People" },
    { emoji: "\u{1F9D1}\u200D\u{1F680}", name: "astronaut", category: "People" },
    { emoji: "\u{1F575}\uFE0F", name: "detective", category: "People" },
    // ── Nature ──
    { emoji: "\u{1F436}", name: "dog face", category: "Nature" },
    { emoji: "\u{1F431}", name: "cat face", category: "Nature" },
    { emoji: "\u{1F42D}", name: "mouse face", category: "Nature" },
    { emoji: "\u{1F439}", name: "hamster", category: "Nature" },
    { emoji: "\u{1F430}", name: "rabbit face", category: "Nature" },
    { emoji: "\u{1F98A}", name: "fox", category: "Nature" },
    { emoji: "\u{1F43B}", name: "bear", category: "Nature" },
    { emoji: "\u{1F43C}", name: "panda", category: "Nature" },
    { emoji: "\u{1F428}", name: "koala", category: "Nature" },
    { emoji: "\u{1F42F}", name: "tiger face", category: "Nature" },
    { emoji: "\u{1F981}", name: "lion", category: "Nature" },
    { emoji: "\u{1F42E}", name: "cow face", category: "Nature" },
    { emoji: "\u{1F437}", name: "pig face", category: "Nature" },
    { emoji: "\u{1F438}", name: "frog", category: "Nature" },
    { emoji: "\u{1F435}", name: "monkey face", category: "Nature" },
    { emoji: "\u{1F414}", name: "chicken", category: "Nature" },
    { emoji: "\u{1F427}", name: "penguin", category: "Nature" },
    { emoji: "\u{1F426}", name: "bird", category: "Nature" },
    { emoji: "\u{1F985}", name: "eagle", category: "Nature" },
    { emoji: "\u{1F986}", name: "duck", category: "Nature" },
    { emoji: "\u{1F989}", name: "owl", category: "Nature" },
    { emoji: "\u{1F41D}", name: "honeybee bee", category: "Nature" },
    { emoji: "\u{1F41B}", name: "bug", category: "Nature" },
    { emoji: "\u{1F98B}", name: "butterfly", category: "Nature" },
    { emoji: "\u{1F40C}", name: "snail", category: "Nature" },
    { emoji: "\u{1F419}", name: "octopus", category: "Nature" },
    { emoji: "\u{1F988}", name: "shark", category: "Nature" },
    { emoji: "\u{1F433}", name: "whale", category: "Nature" },
    { emoji: "\u{1F42C}", name: "dolphin", category: "Nature" },
    { emoji: "\u{1F984}", name: "unicorn", category: "Nature" },
    { emoji: "\u{1F338}", name: "cherry blossom", category: "Nature" },
    { emoji: "\u{1F339}", name: "rose", category: "Nature" },
    { emoji: "\u{1F33B}", name: "sunflower", category: "Nature" },
    { emoji: "\u{1F33A}", name: "hibiscus", category: "Nature" },
    { emoji: "\u{1F308}", name: "rainbow", category: "Nature" },
    { emoji: "\u2600\uFE0F", name: "sun", category: "Nature" },
    { emoji: "\u{1F319}", name: "crescent moon", category: "Nature" },
    { emoji: "\u2B50", name: "star", category: "Nature" },
    { emoji: "\u{1F31F}", name: "glowing star", category: "Nature" },
    { emoji: "\u2728", name: "sparkles", category: "Nature" },
    { emoji: "\u26A1", name: "lightning bolt zap", category: "Nature" },
    { emoji: "\u{1F525}", name: "fire flame hot", category: "Nature" },
    { emoji: "\u{1F4A7}", name: "droplet water", category: "Nature" },
    { emoji: "\u{1F30A}", name: "water wave", category: "Nature" },
    // ── Objects ──
    { emoji: "\u{1F389}", name: "party popper tada", category: "Objects" },
    { emoji: "\u{1F38A}", name: "confetti ball", category: "Objects" },
    { emoji: "\u{1F388}", name: "balloon", category: "Objects" },
    { emoji: "\u{1F381}", name: "wrapped gift present", category: "Objects" },
    { emoji: "\u{1F380}", name: "ribbon", category: "Objects" },
    { emoji: "\u{1F3C6}", name: "trophy", category: "Objects" },
    { emoji: "\u{1F947}", name: "gold medal first", category: "Objects" },
    { emoji: "\u{1F948}", name: "silver medal second", category: "Objects" },
    { emoji: "\u{1F949}", name: "bronze medal third", category: "Objects" },
    { emoji: "\u26BD", name: "soccer ball", category: "Objects" },
    { emoji: "\u{1F3C0}", name: "basketball", category: "Objects" },
    { emoji: "\u{1F3AF}", name: "bullseye target", category: "Objects" },
    { emoji: "\u{1F3AE}", name: "video game controller", category: "Objects" },
    { emoji: "\u{1F3B2}", name: "game die dice", category: "Objects" },
    { emoji: "\u{1F9E9}", name: "puzzle piece", category: "Objects" },
    { emoji: "\u{1F3B5}", name: "musical note", category: "Objects" },
    { emoji: "\u{1F3B6}", name: "musical notes", category: "Objects" },
    { emoji: "\u{1F3A4}", name: "microphone", category: "Objects" },
    { emoji: "\u{1F3A7}", name: "headphone", category: "Objects" },
    { emoji: "\u{1F3AC}", name: "clapper board movie", category: "Objects" },
    { emoji: "\u{1F4F7}", name: "camera", category: "Objects" },
    { emoji: "\u{1F4BB}", name: "laptop computer", category: "Objects" },
    { emoji: "\u{1F4F1}", name: "mobile phone", category: "Objects" },
    { emoji: "\u2328\uFE0F", name: "keyboard", category: "Objects" },
    { emoji: "\u{1F4A1}", name: "light bulb idea", category: "Objects" },
    { emoji: "\u{1F527}", name: "wrench tool", category: "Objects" },
    { emoji: "\u{1F528}", name: "hammer", category: "Objects" },
    { emoji: "\u{1F6E0}\uFE0F", name: "hammer and wrench tools", category: "Objects" },
    { emoji: "\u2699\uFE0F", name: "gear settings", category: "Objects" },
    { emoji: "\u{1F517}", name: "link chain", category: "Objects" },
    { emoji: "\u{1F4CE}", name: "paperclip", category: "Objects" },
    { emoji: "\u{1F4CC}", name: "pushpin pin", category: "Objects" },
    { emoji: "\u{1F4DD}", name: "memo note", category: "Objects" },
    { emoji: "\u{1F4DA}", name: "books", category: "Objects" },
    { emoji: "\u{1F4D6}", name: "open book", category: "Objects" },
    { emoji: "\u270F\uFE0F", name: "pencil", category: "Objects" },
    { emoji: "\u{1F58A}\uFE0F", name: "pen", category: "Objects" },
    { emoji: "\u{1F4CA}", name: "bar chart", category: "Objects" },
    { emoji: "\u{1F4C8}", name: "chart increasing", category: "Objects" },
    { emoji: "\u{1F4C9}", name: "chart decreasing", category: "Objects" },
    { emoji: "\u{1F5D1}\uFE0F", name: "wastebasket trash", category: "Objects" },
    { emoji: "\u{1F4E6}", name: "package box", category: "Objects" },
    { emoji: "\u{1F511}", name: "key", category: "Objects" },
    { emoji: "\u{1F512}", name: "locked lock", category: "Objects" },
    { emoji: "\u{1F513}", name: "unlocked", category: "Objects" },
    { emoji: "\u{1F3E0}", name: "house home", category: "Objects" },
    { emoji: "\u{1F680}", name: "rocket launch ship", category: "Objects" },
    { emoji: "\u2708\uFE0F", name: "airplane", category: "Objects" },
    { emoji: "\u{1F697}", name: "car automobile", category: "Objects" },
    { emoji: "\u23F0", name: "alarm clock time", category: "Objects" },
    { emoji: "\u2615", name: "hot beverage coffee", category: "Objects" },
    { emoji: "\u{1F355}", name: "pizza", category: "Objects" },
    { emoji: "\u{1F354}", name: "hamburger burger", category: "Objects" },
    { emoji: "\u{1F369}", name: "doughnut donut", category: "Objects" },
    { emoji: "\u{1F370}", name: "shortcake cake", category: "Objects" },
    { emoji: "\u{1F37A}", name: "beer mug", category: "Objects" },
    { emoji: "\u{1F377}", name: "wine glass", category: "Objects" },
    { emoji: "\u{1F942}", name: "clinking glasses cheers", category: "Objects" },
    // ── Symbols ──
    { emoji: "\u2705", name: "check mark done yes", category: "Symbols" },
    { emoji: "\u274C", name: "cross mark no", category: "Symbols" },
    { emoji: "\u2B55", name: "hollow red circle", category: "Symbols" },
    { emoji: "\u2757", name: "exclamation mark", category: "Symbols" },
    { emoji: "\u2753", name: "question mark", category: "Symbols" },
    { emoji: "\u203C\uFE0F", name: "double exclamation mark", category: "Symbols" },
    { emoji: "\u2049\uFE0F", name: "exclamation question mark", category: "Symbols" },
    { emoji: "\u{1F4AF}", name: "hundred points perfect", category: "Symbols" },
    { emoji: "\u{1F534}", name: "red circle", category: "Symbols" },
    { emoji: "\u{1F7E0}", name: "orange circle", category: "Symbols" },
    { emoji: "\u{1F7E1}", name: "yellow circle", category: "Symbols" },
    { emoji: "\u{1F7E2}", name: "green circle", category: "Symbols" },
    { emoji: "\u{1F535}", name: "blue circle", category: "Symbols" },
    { emoji: "\u{1F7E3}", name: "purple circle", category: "Symbols" },
    { emoji: "\u2B06\uFE0F", name: "up arrow", category: "Symbols" },
    { emoji: "\u2B07\uFE0F", name: "down arrow", category: "Symbols" },
    { emoji: "\u27A1\uFE0F", name: "right arrow", category: "Symbols" },
    { emoji: "\u2B05\uFE0F", name: "left arrow", category: "Symbols" },
    { emoji: "\u{1F500}", name: "shuffle", category: "Symbols" },
    { emoji: "\u{1F501}", name: "repeat", category: "Symbols" },
    { emoji: "\u{1F504}", name: "counterclockwise arrows refresh", category: "Symbols" },
    { emoji: "\u2795", name: "plus", category: "Symbols" },
    { emoji: "\u2796", name: "minus", category: "Symbols" },
    { emoji: "\u2716\uFE0F", name: "multiply", category: "Symbols" },
    { emoji: "\u2797", name: "divide", category: "Symbols" },
    { emoji: "\u267B\uFE0F", name: "recycling symbol", category: "Symbols" },
    { emoji: "\u{1F4AC}", name: "speech balloon comment", category: "Symbols" },
    { emoji: "\u{1F4AD}", name: "thought balloon", category: "Symbols" },
    { emoji: "\u{1F441}\uFE0F\u200D\u{1F5E8}\uFE0F", name: "eye in speech bubble", category: "Symbols" },
    { emoji: "\u{1F3F3}\uFE0F", name: "white flag", category: "Symbols" },
    { emoji: "\u{1F6A9}", name: "red flag", category: "Symbols" },
    { emoji: "\u{1F3F4}", name: "black flag", category: "Symbols" },
    { emoji: "\u26A0\uFE0F", name: "warning", category: "Symbols" },
    { emoji: "\u{1F6AB}", name: "prohibited no entry", category: "Symbols" },
    { emoji: "\u267E\uFE0F", name: "infinity", category: "Symbols" },
    { emoji: "\u{1F4A4}", name: "zzz sleeping", category: "Symbols" },
    { emoji: "\u{1F4A2}", name: "anger symbol", category: "Symbols" },
    { emoji: "\u{1F4A5}", name: "collision boom", category: "Symbols" },
    { emoji: "\u{1F4AB}", name: "dizzy star", category: "Symbols" },
    { emoji: "\u{1F550}", name: "one o clock time", category: "Symbols" }
  ];
  function searchEmoji(query) {
    if (!query) return EMOJI_DATA;
    const q = query.toLowerCase();
    return EMOJI_DATA.filter((e) => e.name.includes(q) || e.emoji === q);
  }

  // src/pinpoint-emoji-picker.ts
  function openEmojiPicker(anchor, onSelect, onClose) {
    document.querySelector(".pinpoint-emoji-picker")?.remove();
    const picker = document.createElement("div");
    picker.className = "pinpoint-emoji-picker";
    const rect = anchor.getBoundingClientRect();
    const pickerWidth = 280;
    const pickerHeight = 320;
    const spaceBelow = window.innerHeight - rect.bottom - 8;
    const flipUp = spaceBelow < pickerHeight && rect.top > pickerHeight;
    const top = flipUp ? rect.top - pickerHeight - 4 : rect.bottom + 4;
    let left = rect.left;
    if (left + pickerWidth > window.innerWidth - 8) {
      left = window.innerWidth - pickerWidth - 8;
    }
    if (left < 8) left = 8;
    Object.assign(picker.style, {
      position: "fixed",
      top: `${top}px`,
      left: `${left}px`,
      width: `${pickerWidth}px`,
      height: `${pickerHeight}px`,
      zIndex: "2147483600",
      background: "#2a2a2a",
      border: "1px solid #4f4f4f",
      borderRadius: "12px",
      boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    });
    const searchWrap = document.createElement("div");
    Object.assign(searchWrap.style, {
      padding: "8px 8px 4px",
      flexShrink: "0"
    });
    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "Search emoji\u2026";
    searchInput.setAttribute("aria-label", "Search emoji");
    Object.assign(searchInput.style, {
      width: "100%",
      boxSizing: "border-box",
      padding: "6px 10px",
      border: "1px solid #4f4f4f",
      borderRadius: "9999px",
      background: "#1e1e1e",
      color: "#e0e0e0",
      fontSize: "12px",
      fontFamily: "inherit",
      outline: "none"
    });
    searchInput.addEventListener("focus", () => {
      searchInput.style.borderColor = "#6366f1";
    });
    searchInput.addEventListener("blur", () => {
      searchInput.style.borderColor = "#4f4f4f";
    });
    searchWrap.appendChild(searchInput);
    picker.appendChild(searchWrap);
    const body = document.createElement("div");
    Object.assign(body.style, {
      flex: "1",
      overflowY: "auto",
      padding: "0 8px 8px"
    });
    picker.appendChild(body);
    function renderGrid(emojis, label) {
      const frag = document.createElement("div");
      if (label) {
        const lbl = document.createElement("div");
        Object.assign(lbl.style, {
          fontSize: "10px",
          fontWeight: "600",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          color: "#9a9a9a",
          padding: "6px 2px 4px"
        });
        lbl.textContent = label;
        frag.appendChild(lbl);
      }
      const grid = document.createElement("div");
      Object.assign(grid.style, {
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        gap: "2px"
      });
      for (const item of emojis) {
        const btn = document.createElement("button");
        btn.textContent = item.emoji;
        btn.setAttribute("data-emoji", item.emoji);
        Object.assign(btn.style, {
          width: "34px",
          height: "34px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px",
          border: "none",
          background: "none",
          borderRadius: "6px",
          cursor: "pointer",
          padding: "0",
          lineHeight: "1"
        });
        btn.addEventListener("mouseenter", () => {
          btn.style.background = "#333";
        });
        btn.addEventListener("mouseleave", () => {
          btn.style.background = "none";
        });
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          onSelect(item.emoji);
          cleanup();
        });
        grid.appendChild(btn);
      }
      frag.appendChild(grid);
      return frag;
    }
    function renderBody(query) {
      body.innerHTML = "";
      if (query) {
        const results = searchEmoji(query);
        if (results.length === 0) {
          const msg = document.createElement("div");
          Object.assign(msg.style, { textAlign: "center", color: "#9a9a9a", fontSize: "12px", padding: "24px 0" });
          msg.textContent = "No emoji found";
          body.appendChild(msg);
        } else {
          body.appendChild(renderGrid(results));
        }
        return;
      }
      const recents = store.getRecentEmoji();
      if (recents.length > 0) {
        body.appendChild(renderGrid(recents.map((e) => ({ emoji: e })), "Recents"));
      }
      for (const cat of EMOJI_CATEGORIES) {
        const items = EMOJI_DATA.filter((e) => e.category === cat);
        if (items.length > 0) {
          body.appendChild(renderGrid(items, cat));
        }
      }
    }
    renderBody("");
    searchInput.addEventListener("input", () => {
      renderBody(searchInput.value.trim());
    });
    document.body.appendChild(picker);
    requestAnimationFrame(() => searchInput.focus());
    const onOutsideClick = (e) => {
      const path = e.composedPath();
      if (!path.includes(picker) && !path.includes(anchor)) {
        cleanup();
      }
    };
    const onKeydown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
        cleanup();
      }
    };
    document.addEventListener("click", onOutsideClick, true);
    document.addEventListener("keydown", onKeydown, true);
    function cleanup() {
      document.removeEventListener("click", onOutsideClick, true);
      document.removeEventListener("keydown", onKeydown, true);
      picker.remove();
      onClose();
    }
    return cleanup;
  }

  // src/pinpoint-popover.ts
  var styles3 = `
  ${tokenStyles}
  ${commentStyles}

  :host {
    display: block;
    position: fixed;
    z-index: 2147483511;
    width: 320px;
  }

  .popover-container {
    width: 100%;
    min-width: 240px;
    min-height: 160px;
    background: var(--pinpoint-bg);
    border: 1px solid var(--pinpoint-border-outer);
    border-radius: var(--pinpoint-radius-l);
    box-shadow: var(--pinpoint-popover-shadow);
    z-index: 2147483511;
    overflow: hidden;
    font-family: var(--pinpoint-font);
    display: flex;
    flex-direction: column;
    resize: both;
  }

  .popover-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--pinpoint-space-s) var(--pinpoint-space-m);
    border-bottom: 1px solid var(--pinpoint-bg-hover);
    cursor: grab;
    user-select: none;
  }

  :host(.dragging) .popover-header {
    cursor: grabbing;
  }

  .popover-label {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    font-weight: 500;
    color: var(--pinpoint-text-muted);
    min-width: 0;
    max-width: 240px;
  }

  .popover-label-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .popover-close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border: none;
    background: none;
    color: var(--pinpoint-text-muted);
    cursor: pointer;
    border-radius: 6px;
  }

  .popover-close:hover {
    background: var(--pinpoint-bg-hover);
    color: var(--pinpoint-on-accent);
  }

  .popover-close:focus-visible {
    outline: 2px solid var(--pinpoint-accent);
    outline-offset: 1px;
  }

  .popover-header-right {
    display: flex;
    align-items: center;
    gap: 2px;
  }

  .popover-nav-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border: none;
    background: none;
    color: var(--pinpoint-text-muted);
    cursor: pointer;
    border-radius: 6px;
    transition: background 0.12s ease, color 0.12s ease;
  }

  .popover-nav-btn:hover:not(:disabled) {
    background: var(--pinpoint-bg-hover);
    color: var(--pinpoint-text);
  }

  .popover-nav-btn:disabled {
    color: #666;
    cursor: not-allowed;
  }

  .popover-nav-btn:focus-visible {
    outline: 2px solid var(--pinpoint-accent);
    outline-offset: 1px;
  }

  .popover-thread {
    flex: 1;
    overflow-y: auto;
    overscroll-behavior: contain;
    padding: var(--pinpoint-space-m);
  }

  .author-avatar.small {
    width: 20px;
    height: 20px;
    font-size: 11px;
  }

  .author-prompt {
    padding: var(--pinpoint-space-m);
    display: flex;
    flex-direction: column;
    gap: var(--pinpoint-space-xs);
  }

  .author-prompt label {
    font-size: 12px;
    font-weight: 500;
    color: var(--pinpoint-text-muted);
  }

  .author-input {
    padding: var(--pinpoint-space-xs) var(--pinpoint-space-s);
    border: 1px solid var(--pinpoint-border-strong);
    border-radius: var(--pinpoint-radius-m);
    font-size: 12px;
    font-family: inherit;
    color: var(--pinpoint-text);
    background: var(--pinpoint-bg-raised);
    box-sizing: border-box;
  }

  .author-input:focus {
    outline: none;
    border-color: var(--pinpoint-accent);
  }

  .save-name-btn {
    align-self: flex-end;
    padding: 5px 12px;
    border: none;
    border-radius: var(--pinpoint-radius-m);
    background: var(--pinpoint-accent);
    color: var(--pinpoint-on-accent);
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
  }

  .save-name-btn:hover {
    background: var(--pinpoint-accent-hover);
  }

  .save-name-btn:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }

  .save-name-btn:focus-visible {
    outline: 2px solid var(--pinpoint-accent);
    outline-offset: 2px;
  }

  .reply-form {
    padding: var(--pinpoint-space-m);
    border-top: 1px solid var(--pinpoint-bg-hover);
  }

  .reply-author {
    margin-bottom: 0;
  }

  .reply-textarea {
    width: 100%;
    padding: var(--pinpoint-space-s);
    border: 1px solid var(--pinpoint-border-strong);
    border-radius: var(--pinpoint-radius-m);
    font-size: 13px;
    font-family: inherit;
    color: var(--pinpoint-text);
    background: var(--pinpoint-bg-raised);
    resize: none;
    min-height: 48px;
    max-height: 200px;
    overflow-y: auto;
    box-sizing: border-box;
    field-sizing: content;
  }

  .reply-textarea:focus {
    outline: none;
    border-color: var(--user-color, var(--pinpoint-accent));
  }

  .reply-textarea::placeholder {
    color: var(--pinpoint-text-faint);
  }

  .reply-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: var(--pinpoint-space-m);
  }

  .submit-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 12px;
    border: none;
    border-radius: var(--pinpoint-radius-m);
    background: var(--user-color, var(--pinpoint-accent));
    color: var(--pinpoint-on-accent);
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
  }

  .submit-btn:hover {
    background: var(--user-color, var(--pinpoint-accent-hover));
    filter: brightness(1.1);
  }

  .submit-btn:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }

  .submit-btn:focus-visible {
    outline: 2px solid var(--pinpoint-accent);
    outline-offset: 2px;
  }

  .shortcut-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 16px;
    padding: 0 5px;
    border-radius: 3px;
    background: rgba(0,0,0,0.25);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.03em;
    line-height: 1;
  }

  @media (prefers-reduced-motion: reduce) {
    .popover-nav-btn {
      transition: none;
    }
  }
`;
  var PinpointPopover = class extends HTMLElement {
    _thread = null;
    _x = 0;
    _y = 0;
    _targetId = "";
    _targetLabel = "";
    replyText = "";
    authorInput = "";
    editingCommentId = null;
    commentMenuCleanup = null;
    emojiPickerCleanup = null;
    unsubscribe = null;
    lastAuthorName = "";
    dragging = false;
    userDragged = false;
    dragOffsetX = 0;
    dragOffsetY = 0;
    onDragMove = (e) => {
      if (!this.dragging) return;
      this._x = e.clientX - this.dragOffsetX;
      this._y = e.clientY - this.dragOffsetY;
      this.style.left = `${this._x}px`;
      this.style.top = `${this._y}px`;
    };
    onDragEnd = () => {
      this.dragging = false;
      this.userDragged = true;
      this.classList.remove("dragging");
      document.body.style.cursor = "";
      document.removeEventListener("mousemove", this.onDragMove);
      document.removeEventListener("mouseup", this.onDragEnd);
    };
    tooltipCleanup = null;
    connectedCallback() {
      this.attachShadow({ mode: "open" });
      this.lastAuthorName = store.authorName;
      this.unsubscribe = store.subscribe(() => {
        if (store.authorName !== this.lastAuthorName) {
          this.lastAuthorName = store.authorName;
          this.render();
        }
      });
      this.render();
      this.tooltipCleanup = setupTooltips(this.shadowRoot);
    }
    disconnectedCallback() {
      this.tooltipCleanup?.();
      this.emojiPickerCleanup?.();
      this.unsubscribe?.();
      document.removeEventListener("mousemove", this.onDragMove);
      document.removeEventListener("mouseup", this.onDragEnd);
    }
    setPosition(x, y) {
      if (this.userDragged) return;
      this._x = x;
      this._y = y;
      this.style.left = `${x}px`;
      this.style.top = `${y}px`;
    }
    setTarget(targetId, targetLabel) {
      if (this._targetId === targetId && this._targetLabel === targetLabel) return;
      this._targetId = targetId;
      this._targetLabel = targetLabel;
      this.replyText = "";
      this.userDragged = false;
      this.render();
    }
    setThread(thread) {
      if (this._thread === thread) return;
      if (this._thread && thread && this._thread.id === thread.id && this._thread.comments.length === thread.comments.length && JSON.stringify(this._thread.comments) === JSON.stringify(thread.comments)) return;
      this._thread = thread;
      this.render();
    }
    render() {
      if (!this.shadowRoot) return;
      const authorName = store.authorName;
      const thread = this._thread;
      let threadHtml = "";
      if (thread) {
        const commentsHtml = thread.comments.map((c) => renderCommentEntry({
          ...c,
          threadId: thread.id,
          isOwn: c.author === store.authorName,
          isEditing: this.editingCommentId === c.id,
          reactions: c.reactions,
          currentAuthor: store.authorName
        })).join("");
        threadHtml = `<div class="popover-thread">${commentsHtml}</div>`;
      }
      let formHtml;
      if (!authorName) {
        formHtml = `
        <div class="author-prompt">
          <label for="author-name-input">Your name</label>
          <input
            id="author-name-input"
            type="text"
            value="${this.escapeAttr(this.authorInput)}"
            placeholder="Enter your name"
            class="author-input"
          />
          <button class="save-name-btn" ${!this.authorInput.trim() ? "disabled" : ""}>
            Continue
          </button>
        </div>
      `;
      } else {
        formHtml = `
        <div class="reply-form">
          <textarea
            placeholder="Add a comment..."
            rows="2"
            class="reply-textarea"
          >${escapeHtml(this.replyText)}</textarea>
          <div class="reply-actions">
            <div class="reply-author comment-meta">
              <span class="author-avatar" style="background:${authorColor(authorName)};color:#fff" aria-hidden="true">${escapeHtml(initials(authorName))}</span>
              <span class="author-name">${escapeHtml(authorName)}</span>
            </div>
            <button class="submit-btn" ${!this.replyText.trim() ? "disabled" : ""}>
              Comment
            </button>
          </div>
        </div>
      `;
      }
      const visibleIds = store.visibleThreadIds;
      const currentIndex = thread ? visibleIds.indexOf(thread.id) : -1;
      const hasPrev = currentIndex > 0;
      const hasNext = currentIndex >= 0 && currentIndex < visibleIds.length - 1;
      const prevScrollTop = this.shadowRoot.querySelector(".popover-thread")?.scrollTop ?? 0;
      const userColor = authorName ? authorColor(authorName) : "";
      this.shadowRoot.innerHTML = `
      <style>${styles3}</style>
      <div class="popover-container"${userColor ? ` style="--user-color:${userColor}"` : ""}>
        <div class="popover-header">
          <span class="popover-label">
            <span class="popover-label-text">${escapeHtml(this._targetLabel)}</span>
          </span>
          <div class="popover-header-right">
            <button class="popover-nav-btn prev-btn" aria-label="Previous comment" data-tooltip="Previous comment" ${hasPrev ? "" : "disabled"}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M8.5 3L4.5 7l4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button class="popover-nav-btn next-btn" aria-label="Next comment" data-tooltip="Next comment" ${hasNext ? "" : "disabled"}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M5.5 3L9.5 7l-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button class="popover-close" aria-label="Close comment popover" data-tooltip="Close">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </button>
          </div>
        </div>
        ${threadHtml}
        ${formHtml}
      </div>
    `;
      this.addEventListeners();
      if (prevScrollTop > 0) {
        const threadEl = this.shadowRoot.querySelector(".popover-thread");
        if (threadEl) threadEl.scrollTop = prevScrollTop;
      }
    }
    addEventListeners() {
      if (!this.shadowRoot) return;
      const container = this.shadowRoot.querySelector(".popover-container");
      container?.addEventListener("click", (e) => e.stopPropagation());
      container?.addEventListener("wheel", (e) => {
        const we = e;
        if (shouldPreventWheelScroll(we, container)) we.preventDefault();
      }, { passive: false });
      const header = this.shadowRoot.querySelector(".popover-header");
      header?.addEventListener("mousedown", (e) => this.handleDragStart(e));
      const closeBtn = this.shadowRoot.querySelector(".popover-close");
      closeBtn?.addEventListener("click", () => {
        this.dispatchEvent(new CustomEvent("pinpoint-close", { bubbles: true, composed: true }));
      });
      this.shadowRoot.querySelector(".prev-btn")?.addEventListener("click", (e) => {
        e.stopPropagation();
        const ids = store.visibleThreadIds;
        const idx = this._thread ? ids.indexOf(this._thread.id) : -1;
        if (idx > 0) this.navigateToThread(ids[idx - 1]);
      });
      this.shadowRoot.querySelector(".next-btn")?.addEventListener("click", (e) => {
        e.stopPropagation();
        const ids = store.visibleThreadIds;
        const idx = this._thread ? ids.indexOf(this._thread.id) : -1;
        if (idx >= 0 && idx < ids.length - 1) this.navigateToThread(ids[idx + 1]);
      });
      const authorInputEl = this.shadowRoot.querySelector(".author-input");
      if (authorInputEl) {
        authorInputEl.addEventListener("input", () => {
          this.authorInput = authorInputEl.value;
          const btn = this.shadowRoot.querySelector(".save-name-btn");
          if (btn) btn.disabled = !this.authorInput.trim();
        });
        authorInputEl.addEventListener("keydown", (e) => {
          if (e.key === "Enter") this.saveAuthorAndFocus();
        });
      }
      const saveNameBtn = this.shadowRoot.querySelector(".save-name-btn");
      saveNameBtn?.addEventListener("click", () => this.saveAuthorAndFocus());
      const textarea = this.shadowRoot.querySelector(".reply-textarea");
      if (textarea) {
        textarea.addEventListener("input", () => {
          this.replyText = textarea.value;
          const btn = this.shadowRoot.querySelector(".submit-btn");
          if (btn) btn.disabled = !this.replyText.trim();
          if (!CSS.supports("field-sizing", "content")) {
            textarea.style.height = "auto";
            textarea.style.height = Math.min(textarea.scrollHeight, 200) + "px";
          }
        });
        textarea.addEventListener("keydown", (e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            this.submitComment();
          }
        });
        requestAnimationFrame(() => textarea.focus());
      }
      const submitBtn = this.shadowRoot.querySelector(".submit-btn");
      submitBtn?.addEventListener("click", () => this.submitComment());
      this.shadowRoot.querySelectorAll(".comment-kebab").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          const el = btn;
          const commentId = el.dataset.commentId;
          const threadId = el.dataset.threadId;
          if (!commentId || !threadId) return;
          this.openCommentMenu(el, threadId, commentId);
        });
      });
      this.shadowRoot.querySelectorAll(".comment-save-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          const el = btn;
          const commentId = el.dataset.commentId;
          const threadId = el.dataset.threadId;
          if (!commentId || !threadId) return;
          const textarea2 = this.shadowRoot.querySelector(`.comment-edit-textarea[data-comment-id="${commentId}"]`);
          const newText = textarea2?.value.trim();
          if (newText) store.editComment(threadId, commentId, newText);
          this.editingCommentId = null;
        });
      });
      this.shadowRoot.querySelectorAll(".comment-cancel-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          this.editingCommentId = null;
          this.render();
        });
      });
      this.shadowRoot.querySelectorAll(".comment-edit-textarea").forEach((el) => {
        const textarea2 = el;
        textarea2.addEventListener("keydown", (e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            e.stopPropagation();
            const commentId = textarea2.dataset.commentId;
            const threadId = textarea2.dataset.threadId;
            const newText = textarea2.value.trim();
            if (commentId && threadId && newText) store.editComment(threadId, commentId, newText);
            this.editingCommentId = null;
          } else if (e.key === "Escape") {
            e.stopPropagation();
            this.editingCommentId = null;
            this.render();
          }
        });
        requestAnimationFrame(() => textarea2.focus());
      });
      this.shadowRoot.querySelectorAll(".comment-react-btn, .reaction-add-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          const el = btn;
          const commentId = el.dataset.commentId;
          const threadId = el.dataset.threadId;
          this.emojiPickerCleanup?.();
          this.emojiPickerCleanup = openEmojiPicker(el, (emoji) => {
            store.toggleReaction(threadId, commentId, emoji);
            store.addRecentEmoji(emoji);
          }, () => {
            this.emojiPickerCleanup = null;
          });
        });
      });
      this.shadowRoot.querySelectorAll(".reaction-pill").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          const el = btn;
          const emoji = el.dataset.emoji;
          const commentId = el.dataset.commentId;
          const threadId = el.dataset.threadId;
          store.toggleReaction(threadId, commentId, emoji);
        });
      });
    }
    handleDragStart(e) {
      if (e.target.closest(".popover-close, .popover-nav-btn")) return;
      e.preventDefault();
      this.dragging = true;
      this.classList.add("dragging");
      document.body.style.cursor = "grabbing";
      this.dragOffsetX = e.clientX - this._x;
      this.dragOffsetY = e.clientY - this._y;
      document.addEventListener("mousemove", this.onDragMove);
      document.addEventListener("mouseup", this.onDragEnd);
    }
    closeCommentMenu() {
      this.commentMenuCleanup?.();
      this.commentMenuCleanup = null;
      document.querySelectorAll(".pinpoint-comment-menu").forEach((m) => m.remove());
    }
    openCommentMenu(anchor, threadId, commentId) {
      this.closeCommentMenu();
      const rect = anchor.getBoundingClientRect();
      const menu = document.createElement("div");
      menu.className = "pinpoint-comment-menu";
      menu.setAttribute("role", "menu");
      menu.setAttribute("aria-label", "Comment options");
      Object.assign(menu.style, {
        position: "fixed",
        top: `${rect.bottom + 4}px`,
        right: `${window.innerWidth - rect.right}px`,
        background: "#2a2a2a",
        border: "1px solid #4f4f4f",
        borderRadius: "8px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
        zIndex: "2147483600",
        minWidth: "120px",
        padding: "4px",
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      });
      const itemBase = "display:flex;align-items:center;gap:8px;width:100%;padding:7px 10px;border:none;background:none;color:#d0d0d0;font-family:inherit;font-size:13px;cursor:pointer;border-radius:4px;text-align:left;box-sizing:border-box;";
      const dangerBase = "display:flex;align-items:center;gap:8px;width:100%;padding:7px 10px;border:none;background:none;color:#f87171;font-family:inherit;font-size:13px;cursor:pointer;border-radius:4px;text-align:left;box-sizing:border-box;";
      menu.innerHTML = `
      <button data-action="edit" role="menuitem" style="${itemBase}">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M8.5 2.5l3 3M1.5 9.5l6-6 3 3-6 6H1.5v-3z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        Edit
      </button>
      <button data-action="delete" role="menuitem" style="${dangerBase}">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 4h9M5 4V2.5h4V4M3.5 4v7.5h7V4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        Delete
      </button>
    `;
      const [editBtn, deleteBtn] = menu.querySelectorAll("button");
      editBtn.addEventListener("mouseenter", () => {
        editBtn.style.background = "#333";
        editBtn.style.color = "#e0e0e0";
      });
      editBtn.addEventListener("mouseleave", () => {
        editBtn.style.background = "none";
        editBtn.style.color = "#d0d0d0";
      });
      deleteBtn.addEventListener("mouseenter", () => {
        deleteBtn.style.background = "rgba(248,113,113,0.12)";
      });
      deleteBtn.addEventListener("mouseleave", () => {
        deleteBtn.style.background = "none";
      });
      document.body.appendChild(menu);
      anchor.classList.add("menu-open");
      editBtn.focus();
      editBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        this.editingCommentId = commentId;
        this.closeCommentMenu();
        this.render();
      });
      deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        this.closeCommentMenu();
        store.deleteComment(threadId, commentId);
      });
      const onOutside = (e) => {
        if (!menu.contains(e.target) && !e.composedPath().includes(anchor)) {
          this.closeCommentMenu();
        }
      };
      const menuItems = Array.from(menu.querySelectorAll('button[role="menuitem"]'));
      const onKeydown = (e) => {
        if (e.key === "Escape") {
          e.stopPropagation();
          this.closeCommentMenu();
        } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
          e.preventDefault();
          const focused = document.activeElement;
          const idx = menuItems.indexOf(focused);
          const next = e.key === "ArrowDown" ? menuItems[(idx + 1) % menuItems.length] : menuItems[(idx - 1 + menuItems.length) % menuItems.length];
          next.focus();
        } else if (e.key === "Tab") {
          e.preventDefault();
        }
      };
      this.commentMenuCleanup = () => {
        document.removeEventListener("click", onOutside, true);
        document.removeEventListener("keydown", onKeydown, true);
      };
      setTimeout(() => {
        document.addEventListener("click", onOutside, true);
        document.addEventListener("keydown", onKeydown, true);
      });
    }
    navigateToThread(threadId) {
      const thread = store.threads.find((t) => t.id === threadId);
      if (!thread) return;
      this.dispatchEvent(new CustomEvent("pinpoint-thread-selected", {
        bubbles: true,
        composed: true,
        detail: thread
      }));
    }
    saveAuthorAndFocus() {
      const name = this.authorInput.trim();
      if (!name) return;
      store.setAuthorName(name);
    }
    submitComment() {
      const text = this.replyText.trim();
      if (!text) return;
      this.dispatchEvent(new CustomEvent("pinpoint-comment", {
        bubbles: true,
        composed: true,
        detail: {
          targetId: this._targetId,
          targetLabel: this._targetLabel,
          text
        }
      }));
      this.replyText = "";
      this.render();
    }
    escapeAttr(str) {
      return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
  };

  // src/pinpoint-panel.ts
  var styles4 = `
  ${tokenStyles}
  ${commentStyles}

  :host {
    display: block;
    position: fixed;
    z-index: 2147483510;
    pointer-events: none;
    opacity: 0;
    transform: scale(0.96) translateY(8px);
    transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease;
    will-change: transform, opacity;
  }

  :host([data-open]) {
    pointer-events: auto;
    opacity: 1;
    transform: scale(1) translateY(0);
  }

  .panel {
    width: 100%;
    height: 100%;
    background: var(--pinpoint-bg);
    display: flex;
    flex-direction: column;
    box-shadow: var(--pinpoint-popover-shadow);
    font-family: var(--pinpoint-font);
    border: 1px solid var(--pinpoint-border-outer);
    border-radius: 16px;
    overflow: visible;
    position: relative;
    box-sizing: border-box;
  }

  /* Header */

  .panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 12px 12px 10px;
    border-bottom: 1px solid var(--pinpoint-bg-hover);
    flex-shrink: 0;
  }

  .panel-header-info {
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
  }

  .panel-title {
    font-size: 13px;
    font-weight: 600;
    color: var(--pinpoint-text);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .version-chip {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    height: 22px;
    padding: 0 8px;
    border: 1px solid var(--pinpoint-border-emphasis);
    border-radius: var(--pinpoint-radius-full);
    background: var(--pinpoint-bg-raised);
    color: var(--pinpoint-text-muted);
    font-family: inherit;
    font-size: 11px;
    font-weight: 500;
    cursor: pointer;
    flex-shrink: 0;
    transition: background 0.12s ease, color 0.12s ease, border-color 0.12s ease;
  }

  .version-chip:hover {
    background: var(--pinpoint-bg-hover);
    border-color: var(--pinpoint-border-hover);
    color: var(--pinpoint-text);
  }

  .version-chip:focus-visible {
    outline: 2px solid var(--pinpoint-accent);
    outline-offset: 1px;
  }

  .panel-header-actions {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
  }

  .author-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border: 1px solid var(--pinpoint-border);
    border-radius: 50%;
    background: var(--pinpoint-bg-raised);
    color: var(--pinpoint-text-secondary);
    font-size: 11px;
    font-weight: 700;
    font-family: inherit;
    letter-spacing: 0.02em;
    cursor: pointer;
    flex-shrink: 0;
    transition: all 0.12s ease;
    padding: 0;
  }

  .author-btn:hover {
    background: var(--pinpoint-bg-hover);
    border-color: var(--pinpoint-border-strong);
    color: var(--pinpoint-on-accent);
  }

  .author-btn:focus-visible {
    outline: 2px solid var(--pinpoint-accent);
    outline-offset: 1px;
  }

  .panel-close {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border: none;
    background: none;
    color: var(--pinpoint-text-faint);
    cursor: pointer;
    border-radius: var(--pinpoint-radius-m);
    transition: color 0.12s ease, background 0.12s ease;
    padding: 0;
  }

  .panel-close:hover {
    color: var(--pinpoint-text);
    background: var(--pinpoint-bg-hover);
  }

  .panel-close:focus-visible {
    outline: 2px solid var(--pinpoint-accent);
    outline-offset: 1px;
  }

  /* Page grouping */

  .page-section-header {
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--pinpoint-text-faint);
    padding: 2px 2px 0;
  }

  .thread-group {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .thread-card .thread-page-tag {
    font-size: 11px;
    color: var(--pinpoint-text-faint);
    margin-top: 6px;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  /* Search row */

  .panel-search {
    display: flex;
    align-items: center;
    padding: 12px;
    gap: 8px;
    border-bottom: 1px solid var(--pinpoint-bg-hover);
    flex-shrink: 0;
    position: relative;
    z-index: 1;
    transition: box-shadow 0.15s ease;
  }

  .panel-search.scrolled {
    box-shadow: 0 4px 8px -2px rgba(0, 0, 0, 0.25);
  }

  .panel-search-icon {
    color: var(--pinpoint-text-faint);
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 13px;
    margin-right: 4px;
  }

  .panel-search-wrap {
    flex: 1;
    min-width: 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    background: var(--pinpoint-bg-raised);
    border: 1px solid var(--pinpoint-border-emphasis);
    border-radius: var(--pinpoint-radius-full);
    height: 36px;
    padding: 3px 8px 3px 12px;
    transition: border-color 0.12s ease;
    cursor: text;
  }

  .panel-search-wrap:hover {
    border-color: var(--pinpoint-border-hover);
  }

  .panel-search-wrap:focus-within {
    border-color: var(--pinpoint-accent);
  }

  .panel-search-field {
    flex: 1;
    min-width: 0;
    display: flex;
    align-items: center;
    gap: 4px;
    line-height: 34px;
    font-family: var(--pinpoint-font);
    font-size: 13px;
    color: var(--pinpoint-text);
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: none;
    white-space: nowrap;
    outline: none;
  }

  .panel-search-field::-webkit-scrollbar {
    display: none;
  }

  .panel-search-field:empty::before {
    content: 'Search...';
    color: var(--pinpoint-text-faint);
    pointer-events: none;
  }

  /* Author capsule inside the search field */

  .author-capsule {
    display: inline-flex;
    align-items: center;
    flex-shrink: 0;
    background: var(--pinpoint-accent);
    color: var(--pinpoint-on-accent);
    border-radius: 999px;
    font-size: 13px;
    font-weight: 500;
    height: 24px;
    padding: 0 10px;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
    margin: 0 2px;
  }

  /* Filter/sort button */

  .filter-sort-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border: 1px solid var(--pinpoint-border-emphasis);
    background: var(--pinpoint-bg-raised);
    color: var(--pinpoint-text-muted);
    cursor: pointer;
    border-radius: 50%;
    flex-shrink: 0;
    transition: background 0.15s ease, color 0.15s ease, border-color 0.12s ease;
  }

  .filter-sort-btn:hover,
  .filter-sort-btn.menu-open {
    background: var(--pinpoint-bg-hover);
    border-color: var(--pinpoint-border-hover);
    color: var(--pinpoint-text);
  }

  .filter-sort-btn:focus-visible {
    outline: 2px solid var(--pinpoint-accent);
    outline-offset: 1px;
  }

  .filter-sort-btn.has-filter:hover,
  .filter-sort-btn.has-filter.menu-open {
    color: var(--pinpoint-text);
  }

  .panel-search-clear {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    min-width: 18px;
    height: 18px;
    border: none;
    background: var(--pinpoint-border-strong);
    color: var(--pinpoint-text-muted);
    border-radius: 50%;
    cursor: pointer;
    padding: 0;
    flex-shrink: 0;
    margin-left: 4px;
    transition: background 0.12s ease, color 0.12s ease;
  }

  .panel-search-clear:hover {
    background: var(--pinpoint-border-hover);
    color: var(--pinpoint-text);
  }

  .panel-search-clear[hidden] {
    display: none;
  }

  /* Author suggestions dropdown */

  .author-suggestions {
    position: absolute;
    left: 12px;
    right: 12px;
    top: calc(100% - 4px);
    background: var(--pinpoint-bg-raised);
    border: 1px solid var(--pinpoint-border-emphasis);
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.4);
    z-index: 200;
    overflow: hidden;
  }

  .author-suggestions[hidden] {
    display: none;
  }

  .author-suggestion-item {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    padding: 8px 12px;
    border: none;
    background: none;
    color: var(--pinpoint-text-secondary);
    font-family: var(--pinpoint-font);
    font-size: 13px;
    cursor: pointer;
    text-align: left;
    transition: background 0.1s ease;
  }

  .author-suggestion-item:hover,
  .author-suggestion-item[aria-selected="true"] {
    background: var(--pinpoint-bg-hover);
  }

  .author-suggestion-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: var(--pinpoint-accent);
    color: var(--pinpoint-on-accent);
    font-size: 11px;
    font-weight: 700;
    flex-shrink: 0;
  }

  .author-suggestion-match {
    color: var(--pinpoint-accent-light);
    font-weight: 600;
  }

  /* Body */

  .panel-body {
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    overscroll-behavior: contain;
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-content: start;
  }

  .panel-body.empty {
    overflow-y: hidden;
  }

  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 24px;
    color: var(--pinpoint-text-faint);
    height: 100%;
  }

  .empty-state svg {
    margin-bottom: 12px;
    opacity: 0.4;
  }

  .empty-state p {
    margin: 0;
    font-size: 13px;
    color: var(--pinpoint-text-label);
  }

  .empty-hint {
    margin-top: 4px !important;
    font-size: 12px !important;
    color: var(--pinpoint-text-faint) !important;
  }

  /* Thread cards */

  .thread-card {
    position: relative;
    flex-shrink: 0;
    background: var(--pinpoint-bg-raised);
    border: 1px solid var(--pinpoint-border-emphasis);
    border-radius: 16px;
    padding: 10px 12px 14px;
    cursor: pointer;
    transition: border-color 0.12s ease, opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1), padding 0.45s cubic-bezier(0.4, 0, 0.2, 1), border-width 0.45s cubic-bezier(0.4, 0, 0.2, 1);
    max-height: 600px;
    overflow: hidden;
  }

  .thread-card.pp-entering {
    opacity: 0;
    transform: translateY(-8px) scale(0.98);
  }

  .thread-card.pp-removing {
    opacity: 0;
    transform: translateY(-4px) scale(0.98);
    max-height: 0 !important;
    padding-top: 0;
    padding-bottom: 0;
    border-width: 0;
    pointer-events: none;
  }

  .thread-card:hover {
    border-color: var(--card-author-color, var(--pinpoint-border-hover));
  }

  .thread-card:focus-visible {
    outline: 2px solid var(--pinpoint-accent);
    outline-offset: -2px;
    border-color: var(--card-author-color, var(--pinpoint-accent));
  }

  .thread-card.resolved {
    opacity: 0.6;
  }

  .thread-card.active {
    border-color: var(--card-author-color, var(--pinpoint-accent));
    box-shadow: 0 0 0 1px var(--card-author-color, var(--pinpoint-accent));
    background: color-mix(in srgb, var(--card-author-color, var(--pinpoint-accent)) 12%, transparent);
  }

  @keyframes pp-card-pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  .thread-card.loading {
    animation: pp-card-pulse 1s ease-in-out infinite;
    pointer-events: none;
  }

  .thread-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .thread-target-wrapper {
    display: flex;
    align-items: center;
    gap: 6px;
    overflow: hidden;
    min-width: 0;
    flex: 1;
  }

  .thread-target {
    font-size: 12px;
    font-weight: 500;
    color: var(--pinpoint-text-muted);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 220px;
  }

  .thread-indicator {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
  }

  .thread-unread-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--pinpoint-danger);
  }

  .kebab-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border: none;
    background: none;
    color: var(--pinpoint-text-secondary);
    cursor: pointer;
    border-radius: 4px;
    transition: background 0.12s ease, color 0.12s ease;
  }

  .kebab-btn:hover,
  .kebab-btn.menu-open {
    background: var(--pinpoint-bg-hover);
    color: var(--pinpoint-text);
  }

  .thread-card.active .kebab-btn:hover,
  .thread-card.active .kebab-btn.menu-open {
    background: color-mix(in srgb, var(--card-author-color, var(--pinpoint-accent)) 20%, transparent);
  }

  .kebab-btn:focus-visible {
    outline: 2px solid var(--pinpoint-accent);
    outline-offset: 1px;
  }


  .thread-actions {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .thread-action-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border: none;
    background: none;
    color: var(--pinpoint-text-secondary);
    cursor: pointer;
    border-radius: 4px;
  }

  .thread-action-btn:hover {
    background: var(--pinpoint-bg-hover);
    color: var(--pinpoint-success);
  }

  .thread-card.active .thread-action-btn:hover {
    background: color-mix(in srgb, var(--card-author-color, var(--pinpoint-accent)) 20%, transparent);
  }

  .thread-action-btn.delete:hover {
    color: var(--pinpoint-danger);
  }

  .thread-action-btn:focus-visible {
    outline: 2px solid var(--pinpoint-accent);
    outline-offset: 1px;
  }

  @media (prefers-reduced-motion: reduce) {
    :host {
      transition: none;
    }
    .thread-card {
      transition: none;
    }
    .author-suggestion-item {
      transition: none;
    }
  }

  .resolved-badge {
    display: inline-block;
    flex-shrink: 0;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--pinpoint-success);
    background: var(--pinpoint-success-bg);
    padding: 1px 6px;
    border-radius: 4px;
    line-height: 1.4;
  }

`;
  var PinpointPanel = class _PinpointPanel extends HTMLElement {
    static CARET_ANCHOR = "\u200B";
    unsubscribe = null;
    searchQuery = "";
    authorFilters = /* @__PURE__ */ new Set();
    loadingThreadId = null;
    lastRenderedActiveId = null;
    lastRenderedThreadCount = 0;
    lastPanelOpen = false;
    suggestionIndex = -1;
    activeMenuAnchor = null;
    menuCleanup = null;
    showRead = true;
    showUnread = true;
    showResolved = false;
    sortMode = "newest";
    filterDirty = false;
    editingCommentId = null;
    editingThreadId = null;
    emojiPickerCleanup = null;
    anchorEl = null;
    onAnchorMoved = () => this.reposition();
    nameEditorCleanup = null;
    tooltipCleanup = null;
    static get observedAttributes() {
      return ["label", "version", "updated"];
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this.updateHeader();
    }
    get prefsKey() {
      return `pinpoint-prefs::${store.scope}`;
    }
    loadPrefs() {
      try {
        const raw = localStorage.getItem(this.prefsKey);
        if (!raw) return;
        const p = JSON.parse(raw);
        if (typeof p.showRead === "boolean") this.showRead = p.showRead;
        if (typeof p.showUnread === "boolean") this.showUnread = p.showUnread;
        if (typeof p.showResolved === "boolean") this.showResolved = p.showResolved;
        if (p.sortMode === "newest" || p.sortMode === "oldest") this.sortMode = p.sortMode;
      } catch {
      }
    }
    savePrefs() {
      queueMicrotask(() => {
        try {
          localStorage.setItem(this.prefsKey, JSON.stringify({
            showRead: this.showRead,
            showUnread: this.showUnread,
            showResolved: this.showResolved,
            sortMode: this.sortMode
          }));
        } catch {
        }
      });
    }
    connectedCallback() {
      this.attachShadow({ mode: "open" });
      this.loadPrefs();
      this.initDOM();
      this.tooltipCleanup = setupTooltips(this.shadowRoot);
      this.unsubscribe = store.subscribe(() => this.update());
      window.addEventListener("resize", this.onAnchorMoved);
      this.update();
    }
    disconnectedCallback() {
      this.tooltipCleanup?.();
      this.emojiPickerCleanup?.();
      this.nameEditorCleanup?.();
      this.unsubscribe?.();
      window.removeEventListener("resize", this.onAnchorMoved);
      this.anchorEl?.removeEventListener("pinpoint-fab-moved", this.onAnchorMoved);
    }
    /** Anchor the panel to the FAB pill \u2014 it expands from and follows the pill. */
    anchorTo(fab) {
      this.anchorEl?.removeEventListener("pinpoint-fab-moved", this.onAnchorMoved);
      this.anchorEl = fab;
      fab.addEventListener("pinpoint-fab-moved", this.onAnchorMoved);
      this.reposition();
    }
    reposition() {
      const MARGIN2 = 8;
      const GAP = 12;
      const width = Math.min(380, window.innerWidth - 2 * MARGIN2);
      const maxHeight = Math.min(Math.round(window.innerHeight * 0.7), window.innerHeight - 2 * MARGIN2);
      const fabRect = this.anchorEl?.getBoundingClientRect();
      let left;
      let top;
      let height;
      if (fabRect && fabRect.width > 0) {
        const spaceAbove = fabRect.top - GAP - MARGIN2;
        const spaceBelow = window.innerHeight - fabRect.bottom - GAP - MARGIN2;
        if (spaceAbove >= 280 || spaceAbove >= spaceBelow) {
          height = Math.min(maxHeight, Math.max(spaceAbove, 200));
          top = fabRect.top - GAP - height;
        } else {
          height = Math.min(maxHeight, Math.max(spaceBelow, 200));
          top = fabRect.bottom + GAP;
        }
        const fabCenterX = fabRect.left + fabRect.width / 2;
        left = fabCenterX > window.innerWidth / 2 ? fabRect.right - width : fabRect.left;
      } else {
        height = maxHeight;
        left = window.innerWidth - width - MARGIN2 - 12;
        top = window.innerHeight - height - MARGIN2 - 72;
      }
      left = Math.min(Math.max(left, MARGIN2), window.innerWidth - width - MARGIN2);
      top = Math.min(Math.max(top, MARGIN2), window.innerHeight - height - MARGIN2);
      this.style.left = `${left}px`;
      this.style.top = `${top}px`;
      this.style.width = `${width}px`;
      this.style.height = `${height}px`;
    }
    // Build the static shell once — the .panel element persists so CSS transitions work
    initDOM() {
      this.shadowRoot.innerHTML = `
      <style>${styles4}</style>
      <div class="panel">
        <div class="panel-header">
          <div class="panel-header-info">
            <span class="panel-title"></span>
            <button class="version-chip" style="display:none" aria-label="View version history"></button>
          </div>
          <div class="panel-header-actions">
            <button class="author-btn" aria-label="Set your name"></button>
            <button class="panel-close" aria-label="Close comments panel" data-tooltip="Close">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="panel-search">
          <div class="panel-search-wrap" role="combobox" aria-expanded="false" aria-haspopup="listbox">
            <span class="panel-search-icon" aria-hidden="true">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <circle cx="5.5" cy="5.5" r="4" stroke="currentColor" stroke-width="1.4"/>
                <line x1="8.5" y1="8.5" x2="11.5" y2="11.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
              </svg>
            </span>
            <div class="panel-search-field" contenteditable="true" role="textbox" aria-label="Search comments" aria-autocomplete="list" spellcheck="false"></div>
            <button class="panel-search-clear" aria-label="Clear search" hidden>
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                <path d="M1 1l6 6M7 1L1 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </button>
          </div>
          <button class="filter-sort-btn" aria-label="Filter and sort" data-tooltip="Filter & Sort">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 3.5h10M4 7h6M6 10.5h2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
            </svg>
          </button>
          <div class="author-suggestions" role="listbox" aria-label="Author suggestions" hidden></div>
        </div>
        <div class="panel-body"></div>
      </div>
    `;
      this.updateHeader();
      this.addEventListeners();
    }
    // ── Header ──
    updateHeader() {
      if (!this.shadowRoot) return;
      const title = this.shadowRoot.querySelector(".panel-title");
      if (title) title.textContent = this.getAttribute("label") || "Comments";
      const chip = this.shadowRoot.querySelector(".version-chip");
      if (chip) {
        const version5 = this.getAttribute("version") || "";
        const updated = this.getAttribute("updated") || "";
        chip.style.display = version5 ? "" : "none";
        chip.textContent = version5;
        if (updated) {
          const formatted = this.formatUpdated(updated);
          if (formatted) chip.setAttribute("data-tooltip", `Updated ${formatted} \u2014 view history`);
        } else {
          chip.setAttribute("data-tooltip", "View history");
        }
      }
      this.updateAuthorButton();
    }
    updateAuthorButton() {
      const authorBtn = this.shadowRoot?.querySelector(".author-btn");
      if (!authorBtn) return;
      const name = store.authorName;
      if (name) {
        authorBtn.textContent = initials(name);
        authorBtn.style.background = authorColor(name);
        authorBtn.style.color = "#fff";
        authorBtn.setAttribute("aria-label", `Your name: ${name}. Click to edit`);
        authorBtn.setAttribute("data-tooltip", name);
      } else {
        authorBtn.style.background = "";
        authorBtn.style.color = "";
        authorBtn.innerHTML = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <circle cx="7" cy="4.5" r="2.5" stroke="currentColor" stroke-width="1.4"/>
        <path d="M2 12c0-2.76 2.24-5 5-5s5 2.24 5 5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
      </svg>`;
        authorBtn.setAttribute("aria-label", "Set your name");
        authorBtn.setAttribute("data-tooltip", "Set your name");
      }
    }
    formatUpdated(iso) {
      const normalized = iso.match(/[Z+\-]\d|[Z]$/) ? iso : iso + "Z";
      const date = new Date(normalized);
      if (isNaN(date.getTime())) return "";
      const now = /* @__PURE__ */ new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const target = new Date(date.getFullYear(), date.getMonth(), date.getDate());
      const diffDays = Math.round((today.getTime() - target.getTime()) / 864e5);
      const h = date.getHours();
      const m = date.getMinutes();
      const ampm = h >= 12 ? "pm" : "am";
      const hour12 = h % 12 || 12;
      const time = `${hour12}:${String(m).padStart(2, "0")}${ampm}`;
      if (diffDays === 0) return `today at ${time}`;
      if (diffDays === 1) return `yesterday at ${time}`;
      if (diffDays > 1 && diffDays < 7) {
        const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][date.getDay()];
        return `${day} at ${time}`;
      }
      const mm = String(date.getMonth() + 1).padStart(2, "0");
      const dd = String(date.getDate()).padStart(2, "0");
      return `${mm}/${dd}/${date.getFullYear()} at ${time}`;
    }
    // Inline name editor anchored to the avatar (ported from the old toolbar prompt)
    openNameEditor(anchor) {
      this.closeNameEditor();
      const rect = anchor.getBoundingClientRect();
      const menu = document.createElement("div");
      menu.setAttribute("role", "dialog");
      menu.setAttribute("aria-label", "Set your name");
      const MENU_WIDTH = 200;
      const MARGIN2 = 8;
      const menuLeft = Math.min(rect.left, window.innerWidth - MENU_WIDTH - MARGIN2);
      Object.assign(menu.style, {
        position: "fixed",
        top: `${rect.bottom + 6}px`,
        left: `${Math.max(menuLeft, MARGIN2)}px`,
        background: "#2a2a2a",
        border: "1px solid #4f4f4f",
        borderRadius: "8px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
        zIndex: "2147483600",
        minWidth: "200px",
        padding: "10px",
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box"
      });
      menu.innerHTML = `
      <div style="font-size:11px;font-weight:600;color:#9a9a9a;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;">Your name</div>
      <input type="text" placeholder="Enter your name\u2026" aria-label="Your name" style="width:100%;box-sizing:border-box;padding:6px 8px;border:1px solid #4f4f4f;border-radius:5px;background:#1e1e1e;color:#e0e0e0;font-family:inherit;font-size:13px;outline:none;"/>
      <button style="margin-top:8px;width:100%;padding:6px 0;border:none;border-radius:5px;background:#6366f1;color:#fff;font-family:inherit;font-size:13px;font-weight:500;cursor:pointer;box-sizing:border-box;">Save</button>
    `;
      document.body.appendChild(menu);
      const input = menu.querySelector("input");
      const saveBtn = menu.querySelector("button");
      if (store.authorName) {
        input.value = store.authorName;
        input.select();
      }
      saveBtn.addEventListener("mouseenter", () => {
        saveBtn.style.background = "#5558e6";
      });
      saveBtn.addEventListener("mouseleave", () => {
        saveBtn.style.background = "#6366f1";
      });
      const save = () => {
        const name = input.value.trim();
        if (!name) {
          input.focus();
          return;
        }
        store.setAuthorName(name);
        this.closeNameEditor();
      };
      saveBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        save();
      });
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.stopPropagation();
          save();
        }
        if (e.key === "Escape") {
          e.stopPropagation();
          this.closeNameEditor();
        }
        if (e.key === "Tab") {
          e.preventDefault();
          saveBtn.focus();
        }
      });
      saveBtn.addEventListener("keydown", (e) => {
        if (e.key === "Tab") {
          e.preventDefault();
          input.focus();
        }
        if (e.key === "Escape") {
          e.stopPropagation();
          this.closeNameEditor();
        }
      });
      setTimeout(() => input.focus());
      const onOutside = (e) => {
        const path = e.composedPath();
        if (!menu.contains(e.target) && !path.includes(anchor)) {
          this.closeNameEditor();
        }
      };
      const onKeydown = (e) => {
        if (e.key === "Escape") {
          e.stopPropagation();
          this.closeNameEditor();
        }
      };
      this.nameEditorCleanup = () => {
        menu.remove();
        document.removeEventListener("click", onOutside, true);
        document.removeEventListener("keydown", onKeydown, true);
        anchor.focus();
      };
      setTimeout(() => {
        document.addEventListener("click", onOutside, true);
        document.addEventListener("keydown", onKeydown, true);
      });
    }
    closeNameEditor() {
      this.nameEditorCleanup?.();
      this.nameEditorCleanup = null;
    }
    // Update only the parts that change — never replace .panel so transitions animate
    update() {
      if (!this.shadowRoot) return;
      const panelOpen = store.commentPanelOpen;
      const threads = store.threads;
      const count = store.threadCount;
      const panel = this.shadowRoot.querySelector(".panel");
      if (!panel) return;
      if (store.activeThreadId) this.loadingThreadId = null;
      const activeId = store.activeThreadId;
      if (activeId !== this.lastRenderedActiveId && count === this.lastRenderedThreadCount && panelOpen && !this.filterDirty) {
        if (this.lastRenderedActiveId) {
          const prev = this.shadowRoot.querySelector(`.thread-card[data-thread-id="${this.lastRenderedActiveId}"]`);
          if (prev) {
            prev.classList.remove("active", "loading");
          }
        }
        if (activeId) {
          const next = this.shadowRoot.querySelector(`.thread-card[data-thread-id="${activeId}"]`);
          if (next) {
            next.classList.add("active");
            next.classList.remove("loading");
            const panelBody2 = this.shadowRoot.querySelector(".panel-body");
            if (panelBody2) {
              const cardTop = next.offsetTop;
              const cardBottom = cardTop + next.offsetHeight;
              const viewTop = panelBody2.scrollTop;
              const viewBottom = viewTop + panelBody2.clientHeight;
              if (cardTop < viewTop || cardBottom > viewBottom) {
                panelBody2.scrollTop = cardTop - 12;
              }
            }
          }
        }
        this.lastRenderedActiveId = activeId;
        return;
      }
      this.filterDirty = false;
      const wasOpened = panelOpen && !this.lastPanelOpen;
      this.lastPanelOpen = panelOpen;
      if (wasOpened) this.reposition();
      this.toggleAttribute("data-open", panelOpen);
      this.updateAuthorButton();
      if (wasOpened) {
        requestAnimationFrame(() => {
          const search = this.shadowRoot?.querySelector(".panel-search-field");
          search?.focus();
        });
      }
      const panelBody = this.shadowRoot.querySelector(".panel-body");
      if (panelBody) {
        const query = this.searchQuery.toLowerCase();
        const af = this.authorFilters;
        let visibleThreads = af.size > 0 ? threads.filter((t) => t.comments.some((c) => af.has(c.author.toLowerCase()))) : threads;
        if (query) {
          visibleThreads = visibleThreads.filter(
            (t) => t.targetLabel.toLowerCase().includes(query) || t.comments.some((c) => c.text.toLowerCase().includes(query) || c.author.toLowerCase().includes(query))
          );
        }
        visibleThreads = visibleThreads.filter((t) => {
          const isRead = store.isThreadRead(t.id);
          const isResolved = t.status === "resolved";
          if (isResolved && !this.showResolved) return false;
          if (!isResolved && isRead && !this.showRead) return false;
          if (!isResolved && !isRead && !this.showUnread) return false;
          return true;
        });
        if (this.sortMode === "newest") {
          visibleThreads = [...visibleThreads].reverse();
        }
        const currentThreads = visibleThreads.filter((t) => store.isThreadOnCurrentPage(t));
        const otherThreads = visibleThreads.filter((t) => !store.isThreadOnCurrentPage(t));
        store.visibleThreadIds = currentThreads.map((t) => t.id);
        const hasActiveFilter = !this.showRead || !this.showUnread || this.showResolved || this.sortMode !== "newest";
        const filterBtn = this.shadowRoot.querySelector(".filter-sort-btn");
        if (filterBtn) {
          filterBtn.classList.toggle("has-filter", hasActiveFilter);
        }
        if (threads.length === 0) {
          panelBody.classList.add("empty");
          panelBody.innerHTML = `
          <div class="empty-state">
            <svg width="32" height="32" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M3 3h14v10H7l-4 4V3z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round" fill="none"/>
            </svg>
            <p>No comments yet</p>
            <p class="empty-hint">Click the \u271B button to start annotating.</p>
          </div>
        `;
        } else if (visibleThreads.length === 0) {
          panelBody.classList.add("empty");
          const hasSearch = !!query;
          const hasAuthorFilter = af.size > 0;
          const emptyMsg = hasSearch || hasAuthorFilter ? "No comments match your search." : "No comments match your filters.";
          panelBody.innerHTML = `
          <div class="empty-state">
            <p>${emptyMsg}</p>
          </div>
        `;
        } else {
          panelBody.classList.remove("empty");
          this.renderThreadGroups(panelBody, currentThreads, otherThreads, af);
        }
        this.addThreadListeners();
        this.lastRenderedActiveId = store.activeThreadId;
        this.lastRenderedThreadCount = count;
        if (store.activeThreadId) {
          const activeCard = this.shadowRoot.querySelector(`.thread-card[data-thread-id="${store.activeThreadId}"]`);
          if (activeCard && panelBody) {
            const cardTop = activeCard.offsetTop;
            const cardBottom = cardTop + activeCard.offsetHeight;
            const viewTop = panelBody.scrollTop;
            const viewBottom = viewTop + panelBody.clientHeight;
            if (cardTop < viewTop || cardBottom > viewBottom) {
              panelBody.scrollTop = cardTop - 12;
            }
          }
        }
      }
    }
    // --- Contenteditable helpers ---
    getSearchText(field) {
      let text = "";
      field.childNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          text += (node.textContent || "").replaceAll(_PinpointPanel.CARET_ANCHOR, "");
        }
      });
      return text;
    }
    isWordBoundary(char) {
      return char === " " || char === _PinpointPanel.CARET_ANCHOR;
    }
    getCurrentWord(field) {
      const sel = this.shadowRoot.getSelection?.() ?? document.getSelection();
      if (!sel || sel.rangeCount === 0) return { word: "", textNode: null, startOffset: 0, endOffset: 0 };
      const range = sel.getRangeAt(0);
      if (!field.contains(range.startContainer)) return { word: "", textNode: null, startOffset: 0, endOffset: 0 };
      const node = range.startContainer;
      if (node.nodeType !== Node.TEXT_NODE) return { word: "", textNode: null, startOffset: 0, endOffset: 0 };
      const text = node.textContent || "";
      const offset = range.startOffset;
      let start = offset;
      while (start > 0 && !this.isWordBoundary(text[start - 1])) start--;
      const word = text.slice(start, offset).replaceAll(_PinpointPanel.CARET_ANCHOR, "");
      return { word, textNode: node, startOffset: start, endOffset: offset };
    }
    ensureEditableCaretAnchor(field, afterNode) {
      if (afterNode?.nextSibling?.nodeType === Node.TEXT_NODE) {
        const nextText = afterNode.nextSibling;
        if ((nextText.textContent || "") === "") nextText.textContent = _PinpointPanel.CARET_ANCHOR;
        return nextText;
      }
      if (!afterNode && field.lastChild?.nodeType === Node.TEXT_NODE) {
        const lastText = field.lastChild;
        if ((lastText.textContent || "") === "") lastText.textContent = _PinpointPanel.CARET_ANCHOR;
        return lastText;
      }
      const anchor = document.createTextNode(_PinpointPanel.CARET_ANCHOR);
      if (afterNode?.parentNode === field) {
        field.insertBefore(anchor, afterNode.nextSibling);
      } else {
        field.appendChild(anchor);
      }
      return anchor;
    }
    placeCaretAtEnd(el) {
      const sel = this.shadowRoot.getSelection?.() ?? document.getSelection();
      if (!sel) return;
      const endNode = this.ensureEditableCaretAnchor(el);
      const range = document.createRange();
      range.setStart(endNode, endNode.textContent?.length ?? 0);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
    }
    createCapsuleElement(author) {
      const capsule = document.createElement("span");
      capsule.className = "author-capsule";
      capsule.contentEditable = "false";
      capsule.dataset.author = author.toLowerCase();
      capsule.textContent = author;
      return capsule;
    }
    insertCapsuleAtCaret(author, field) {
      const capsule = this.createCapsuleElement(author);
      const sel = this.shadowRoot.getSelection?.() ?? document.getSelection();
      if (sel && sel.rangeCount > 0 && field.contains(sel.getRangeAt(0).startContainer)) {
        const range = sel.getRangeAt(0);
        range.insertNode(capsule);
        const caretAnchor = this.ensureEditableCaretAnchor(field, capsule);
        range.setStart(caretAnchor, caretAnchor.textContent?.length ?? 0);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
      } else {
        field.appendChild(capsule);
        this.placeCaretAtEnd(field);
      }
    }
    removeCapsule(capsule) {
      const author = capsule.dataset.author;
      if (author) this.authorFilters.delete(author);
      capsule.remove();
      const field = this.shadowRoot?.querySelector(".panel-search-field");
      const clearBtn = this.shadowRoot?.querySelector(".panel-search-clear");
      if (field) this.searchQuery = this.getSearchText(field);
      if (clearBtn) clearBtn.hidden = !this.searchQuery && this.authorFilters.size === 0;
      if (field) {
        field.focus();
        this.placeCaretAtEnd(field);
      }
      this.update();
    }
    // --- selectAuthor / clearAllCapsules ---
    selectAuthor(author) {
      const field = this.shadowRoot?.querySelector(".panel-search-field");
      const suggestions = this.shadowRoot?.querySelector(".author-suggestions");
      const searchWrap = this.shadowRoot?.querySelector(".panel-search-wrap");
      const clearBtn = this.shadowRoot?.querySelector(".panel-search-clear");
      if (!field) return;
      this.authorFilters.add(author.toLowerCase());
      const { textNode, startOffset, endOffset } = this.getCurrentWord(field);
      if (textNode) {
        textNode.deleteData(startOffset, endOffset - startOffset);
        if (textNode.length === 0) textNode.remove();
      }
      this.insertCapsuleAtCaret(author, field);
      this.searchQuery = this.getSearchText(field);
      this.suggestionIndex = -1;
      if (suggestions) suggestions.hidden = true;
      if (searchWrap) searchWrap.setAttribute("aria-expanded", "false");
      if (clearBtn) clearBtn.hidden = false;
      const selAfter = this.shadowRoot.getSelection?.() ?? document.getSelection();
      if (selAfter && selAfter.rangeCount > 0) {
        const r = selAfter.getRangeAt(0);
        const rect = r.getBoundingClientRect();
        const fieldRect = field.getBoundingClientRect();
        if (rect.right > fieldRect.right) field.scrollLeft += rect.right - fieldRect.right + 8;
      }
      this.update();
    }
    clearAllCapsules() {
      const field = this.shadowRoot?.querySelector(".panel-search-field");
      if (!field) return;
      field.querySelectorAll(".author-capsule").forEach((el) => el.remove());
      this.authorFilters.clear();
    }
    addEventListeners() {
      if (!this.shadowRoot) return;
      this.shadowRoot.querySelector(".panel")?.addEventListener("wheel", (ev) => {
        const e = ev;
        const panel = this.shadowRoot.querySelector(".panel");
        if (!panel || shouldPreventWheelScroll(e, panel)) e.preventDefault();
      }, { passive: false });
      this.shadowRoot.querySelector(".filter-sort-btn")?.addEventListener("click", (e) => {
        e.stopPropagation();
        this.openFilterSortMenu(e.currentTarget);
      });
      this.shadowRoot.querySelector(".panel-close")?.addEventListener("click", () => store.closePanel());
      this.shadowRoot.querySelector(".version-chip")?.addEventListener("click", () => {
        this.dispatchEvent(new CustomEvent("pinpoint-history-toggle", { bubbles: true, composed: true }));
      });
      this.shadowRoot.querySelector(".author-btn")?.addEventListener("click", (e) => {
        if (this.nameEditorCleanup) {
          this.closeNameEditor();
        } else {
          this.openNameEditor(e.currentTarget);
        }
      });
      const clearBtn = this.shadowRoot.querySelector(".panel-search-clear");
      const searchWrap = this.shadowRoot.querySelector(".panel-search-wrap");
      const searchField = this.shadowRoot.querySelector(".panel-search-field");
      const suggestions = this.shadowRoot.querySelector(".author-suggestions");
      const getAuthors = () => {
        const seen = /* @__PURE__ */ new Set();
        store.threads.forEach((t) => t.comments.forEach((c) => seen.add(c.author)));
        return Array.from(seen).sort();
      };
      const updateClearBtn = () => {
        if (clearBtn) clearBtn.hidden = !this.searchQuery && this.authorFilters.size === 0;
      };
      const hideSuggestions = () => {
        if (suggestions) suggestions.hidden = true;
        this.suggestionIndex = -1;
        if (searchWrap) searchWrap.setAttribute("aria-expanded", "false");
      };
      const showSuggestions = (matches, q) => {
        if (!suggestions) return;
        if (matches.length === 0) {
          hideSuggestions();
          return;
        }
        suggestions.innerHTML = matches.map((name, i) => {
          const lower = name.toLowerCase();
          const idx = lower.indexOf(q);
          let label = escapeHtml(name);
          if (idx !== -1 && q) {
            label = escapeHtml(name.slice(0, idx)) + `<span class="author-suggestion-match">${escapeHtml(name.slice(idx, idx + q.length))}</span>` + escapeHtml(name.slice(idx + q.length));
          }
          return `<button class="author-suggestion-item" role="option" aria-selected="${i === this.suggestionIndex}" data-author="${escapeHtml(name)}"><span class="author-suggestion-avatar" style="background:${authorColor(name)};color:#fff">${escapeHtml(name.charAt(0).toUpperCase())}</span><span>${label}</span></button>`;
        }).join("");
        suggestions.hidden = false;
        if (searchWrap) searchWrap.setAttribute("aria-expanded", "true");
        suggestions.querySelectorAll(".author-suggestion-item").forEach((btn) => {
          btn.addEventListener("mousedown", (e) => {
            e.preventDefault();
            const author = btn.dataset.author;
            this.selectAuthor(author);
          });
        });
      };
      const refreshSuggestions = () => {
        if (!searchField) return;
        const { word } = this.getCurrentWord(searchField);
        if (!word) {
          hideSuggestions();
          return;
        }
        const q = word.toLowerCase();
        const matches = getAuthors().filter((a) => a.toLowerCase().includes(q) && !this.authorFilters.has(a.toLowerCase()));
        showSuggestions(matches, q);
      };
      searchField?.addEventListener("input", () => {
        this.searchQuery = this.getSearchText(searchField);
        this.suggestionIndex = -1;
        if (!this.searchQuery && searchField.childNodes.length === 1 && searchField.firstChild?.tagName === "BR") {
          searchField.firstChild.remove();
        }
        updateClearBtn();
        refreshSuggestions();
        this.update();
      });
      searchField?.addEventListener("focus", () => {
        searchField.scrollLeft = searchField.scrollWidth;
      });
      searchField?.addEventListener("keydown", (e) => {
        if (suggestions && !suggestions.hidden) {
          const items = Array.from(suggestions.querySelectorAll(".author-suggestion-item"));
          if (e.key === "ArrowDown") {
            e.preventDefault();
            this.suggestionIndex = Math.min(this.suggestionIndex + 1, items.length - 1);
            items.forEach((el, i) => el.setAttribute("aria-selected", String(i === this.suggestionIndex)));
            return;
          }
          if (e.key === "ArrowUp") {
            e.preventDefault();
            this.suggestionIndex = Math.max(this.suggestionIndex - 1, 0);
            items.forEach((el, i) => el.setAttribute("aria-selected", String(i === this.suggestionIndex)));
            return;
          }
          if (e.key === "Enter" && this.suggestionIndex >= 0) {
            e.preventDefault();
            const author = items[this.suggestionIndex]?.dataset.author;
            if (author) this.selectAuthor(author);
            return;
          }
          if (e.key === "Escape") {
            e.preventDefault();
            hideSuggestions();
            return;
          }
        }
        if (e.key === "Backspace") {
          const sel = this.shadowRoot.getSelection?.() ?? document.getSelection();
          if (sel && sel.isCollapsed && sel.rangeCount > 0) {
            const range = sel.getRangeAt(0);
            const container = range.startContainer;
            const offset = range.startOffset;
            if (container === searchField && offset > 0) {
              const prev = searchField.childNodes[offset - 1];
              if (prev instanceof HTMLElement && prev.classList.contains("author-capsule")) {
                e.preventDefault();
                this.removeCapsule(prev);
                return;
              }
            }
            if (container.nodeType === Node.TEXT_NODE && offset === 0) {
              const prev = container.previousSibling;
              if (prev instanceof HTMLElement && prev.classList.contains("author-capsule")) {
                e.preventDefault();
                this.removeCapsule(prev);
                return;
              }
            }
            if (container.nodeType === Node.TEXT_NODE && offset <= 1) {
              const text = container.textContent || "";
              const prev = container.previousSibling;
              if ((text === _PinpointPanel.CARET_ANCHOR || text.startsWith(_PinpointPanel.CARET_ANCHOR)) && prev instanceof HTMLElement && prev.classList.contains("author-capsule")) {
                e.preventDefault();
                this.removeCapsule(prev);
                return;
              }
            }
          }
        }
        if (e.key === "Enter") {
          e.preventDefault();
        }
      });
      searchField?.addEventListener("beforeinput", (ev) => {
        const e = ev;
        if (e.inputType && (e.inputType.startsWith("format") || e.inputType === "insertParagraph" || e.inputType === "insertLineBreak")) {
          e.preventDefault();
        }
      });
      searchField?.addEventListener("paste", (ev) => {
        const e = ev;
        e.preventDefault();
        const text = e.clipboardData?.getData("text/plain") || "";
        const sel = this.shadowRoot.getSelection?.() ?? document.getSelection();
        if (sel && sel.rangeCount > 0) {
          const range = sel.getRangeAt(0);
          range.deleteContents();
          range.insertNode(document.createTextNode(text));
          range.collapse(false);
          sel.removeAllRanges();
          sel.addRange(range);
        }
        searchField.dispatchEvent(new Event("input", { bubbles: true }));
      });
      searchField?.addEventListener("blur", () => {
        setTimeout(() => hideSuggestions(), 150);
      });
      searchField?.addEventListener("compositionend", () => {
        this.searchQuery = this.getSearchText(searchField);
        refreshSuggestions();
        this.update();
      });
      searchWrap?.addEventListener("click", (e) => {
        if (searchField && (!searchField.contains(e.target) || e.target === searchWrap)) {
          searchField.focus();
          this.placeCaretAtEnd(searchField);
        }
      });
      clearBtn?.addEventListener("click", () => {
        this.searchQuery = "";
        this.clearAllCapsules();
        if (searchField) searchField.textContent = "";
        hideSuggestions();
        clearBtn.hidden = true;
        searchField?.focus();
        this.update();
      });
      const panelBody = this.shadowRoot.querySelector(".panel-body");
      const panelSearch = this.shadowRoot.querySelector(".panel-search");
      if (panelBody && panelSearch) {
        panelBody.addEventListener("scroll", () => {
          panelSearch.classList.toggle("scrolled", panelBody.scrollTop > 0);
        }, { passive: true });
      }
    }
    addThreadListeners() {
      if (!this.shadowRoot) return;
      this.shadowRoot.querySelectorAll(".thread-card").forEach((card) => {
        const activateCard = () => {
          const threadId = card.dataset.threadId;
          if (!threadId) return;
          const otherPage = card.dataset.otherPage;
          if (otherPage) {
            try {
              sessionStorage.setItem("pinpoint-pending-thread", JSON.stringify({
                threadId,
                scope: store.scopeId
              }));
            } catch {
            }
            location.href = otherPage;
            return;
          }
          const thread = store.threads.find((t) => t.id === threadId);
          if (thread) {
            if (this.loadingThreadId && this.loadingThreadId !== threadId) {
              const prev = this.shadowRoot?.querySelector(`.thread-card[data-thread-id="${this.loadingThreadId}"]`);
              if (prev) prev.classList.remove("loading");
            }
            store.markThreadRead(threadId);
            this.loadingThreadId = threadId;
            card.classList.add("loading");
            this.shadowRoot?.querySelectorAll(".thread-card.active").forEach((c) => c.classList.remove("active"));
            this.dispatchEvent(new CustomEvent("pinpoint-thread-selected", {
              bubbles: true,
              composed: true,
              detail: thread
            }));
          }
        };
        card.addEventListener("click", activateCard);
        card.addEventListener("keydown", (e) => {
          if (e.target?.closest("button")) return;
          const ke = e;
          if (ke.key === "Enter" || ke.key === " ") {
            ke.preventDefault();
            activateCard();
          }
        });
        card.addEventListener("mouseenter", () => {
          const threadId = card.dataset.threadId;
          if (!threadId) return;
          this.dispatchEvent(new CustomEvent("pinpoint-thread-hovered", {
            bubbles: true,
            composed: true,
            detail: threadId
          }));
        });
        card.addEventListener("mouseleave", () => {
          this.dispatchEvent(new CustomEvent("pinpoint-thread-hovered", {
            bubbles: true,
            composed: true,
            detail: null
          }));
        });
      });
      this.shadowRoot.querySelectorAll(".resolve-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          const threadId = btn.dataset.threadId;
          if (threadId) store.resolveThread(threadId);
        });
      });
      this.shadowRoot.querySelectorAll(".kebab-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          const threadId = btn.dataset.threadId;
          if (!threadId) return;
          if (this.activeMenuAnchor?.dataset.threadId === threadId) {
            this.closeThreadMenu();
            return;
          }
          this.openThreadMenu(btn, threadId);
        });
      });
      this.shadowRoot.querySelectorAll(".comment-kebab").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          const el = btn;
          const commentId = el.dataset.commentId;
          const threadId = el.dataset.threadId;
          if (!commentId || !threadId) return;
          if (this.activeMenuAnchor === el) {
            this.closeThreadMenu();
            return;
          }
          this.openCommentMenu(el, threadId, commentId);
        });
      });
      this.shadowRoot.querySelectorAll(".comment-save-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          const el = btn;
          const commentId = el.dataset.commentId;
          const threadId = el.dataset.threadId;
          if (!commentId || !threadId) return;
          const textarea = this.shadowRoot.querySelector(`.comment-edit-textarea[data-comment-id="${commentId}"]`);
          const newText = textarea?.value.trim();
          if (newText) store.editComment(threadId, commentId, newText);
          this.editingCommentId = null;
          this.editingThreadId = null;
        });
      });
      this.shadowRoot.querySelectorAll(".comment-cancel-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          this.editingCommentId = null;
          this.editingThreadId = null;
          this.update();
        });
      });
      this.shadowRoot.querySelectorAll(".comment-edit-textarea").forEach((el) => {
        el.addEventListener("keydown", (e) => {
          const ke = e;
          const textarea = el;
          if (ke.key === "Enter" && !ke.shiftKey) {
            ke.preventDefault();
            ke.stopPropagation();
            const commentId = textarea.dataset.commentId;
            const threadId = textarea.dataset.threadId;
            const newText = textarea.value.trim();
            if (commentId && threadId && newText) store.editComment(threadId, commentId, newText);
            this.editingCommentId = null;
            this.editingThreadId = null;
          } else if (ke.key === "Escape") {
            ke.stopPropagation();
            this.editingCommentId = null;
            this.editingThreadId = null;
            this.update();
          }
        });
      });
      this.shadowRoot.querySelectorAll(".comment-react-btn, .reaction-add-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          const el = btn;
          const commentId = el.dataset.commentId;
          const threadId = el.dataset.threadId;
          this.emojiPickerCleanup?.();
          this.emojiPickerCleanup = openEmojiPicker(el, (emoji) => {
            store.toggleReaction(threadId, commentId, emoji);
            store.addRecentEmoji(emoji);
          }, () => {
            this.emojiPickerCleanup = null;
          });
        });
      });
      this.shadowRoot.querySelectorAll(".reaction-pill").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          const el = btn;
          const emoji = el.dataset.emoji;
          const commentId = el.dataset.commentId;
          const threadId = el.dataset.threadId;
          store.toggleReaction(threadId, commentId, emoji);
        });
      });
    }
    openThreadMenu(anchor, threadId) {
      this.closeThreadMenu();
      const rect = anchor.getBoundingClientRect();
      const menu = document.createElement("div");
      menu.className = "pinpoint-thread-menu";
      menu.setAttribute("role", "menu");
      menu.setAttribute("aria-label", "Thread options");
      Object.assign(menu.style, {
        position: "fixed",
        top: `${rect.bottom + 4}px`,
        right: `${window.innerWidth - rect.right}px`,
        background: "#2a2a2a",
        border: "1px solid #4f4f4f",
        borderRadius: "8px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
        zIndex: "2147483600",
        minWidth: "160px",
        padding: "4px",
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      });
      const itemBase = "display:flex;align-items:center;gap:8px;width:100%;padding:7px 10px;border:none;background:none;color:#d0d0d0;font-family:inherit;font-size:13px;cursor:pointer;border-radius:4px;text-align:left;box-sizing:border-box;";
      const dangerBase = "display:flex;align-items:center;gap:8px;width:100%;padding:7px 10px;border:none;background:none;color:#f87171;font-family:inherit;font-size:13px;cursor:pointer;border-radius:4px;text-align:left;box-sizing:border-box;";
      const thread = store.threads.find((t) => t.id === threadId);
      const isResolved = thread?.status === "resolved";
      const singleOwnComment = thread && thread.comments.length === 1 && thread.comments[0].author === store.authorName;
      const editBtnHtml = singleOwnComment ? `<button data-action="edit" role="menuitem" style="${itemBase}">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M8.5 2.5l3 3M1.5 9.5l6-6 3 3-6 6H1.5v-3z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          Edit
        </button>` : "";
      menu.innerHTML = isResolved ? `
      <button data-action="restore" role="menuitem" style="${itemBase}">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 5.5h5a3 3 0 1 1 0 6H6.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.5 3L3 5.5 5.5 8" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        Restore
      </button>
      ${editBtnHtml}
      <button data-action="delete" role="menuitem" style="${dangerBase}">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 4h9M5 4V2.5h4V4M3.5 4v7.5h7V4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        Delete
      </button>
    ` : `
      <button data-action="mark-unread" role="menuitem" style="${itemBase}">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="3" fill="currentColor"/></svg>
        Mark as unread
      </button>
      ${editBtnHtml}
      <button data-action="delete" role="menuitem" style="${dangerBase}">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 4h9M5 4V2.5h4V4M3.5 4v7.5h7V4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        Delete
      </button>
    `;
      const menuButtons = Array.from(menu.querySelectorAll("button"));
      menuButtons.forEach((btn) => {
        const isDanger = btn.dataset.action === "delete";
        btn.addEventListener("mouseenter", () => {
          btn.style.background = isDanger ? "rgba(248,113,113,0.12)" : "#333";
          if (!isDanger) btn.style.color = "#e0e0e0";
        });
        btn.addEventListener("mouseleave", () => {
          btn.style.background = "none";
          if (!isDanger) btn.style.color = "#d0d0d0";
        });
      });
      document.body.appendChild(menu);
      this.activeMenuAnchor = anchor;
      anchor.classList.add("menu-open");
      menuButtons[0]?.focus();
      menu.addEventListener("click", (e) => {
        e.stopPropagation();
        const btn = e.target.closest("button[data-action]");
        if (!btn) return;
        const action = btn.dataset.action;
        if (action === "restore") {
          store.unresolveThread(threadId);
        } else if (action === "mark-unread") {
          store.markThreadUnread(threadId);
        } else if (action === "edit" && singleOwnComment) {
          this.editingCommentId = thread.comments[0].id;
          this.editingThreadId = threadId;
          this.closeThreadMenu();
          this.update();
          return;
        } else if (action === "delete") {
          store.deleteThread(threadId);
        }
        this.closeThreadMenu();
      });
      const onOutside = (e) => {
        const path = e.composedPath();
        if (!menu.contains(e.target) && !path.includes(anchor)) {
          this.closeThreadMenu();
        }
      };
      const menuItems = Array.from(menu.querySelectorAll('button[role="menuitem"]'));
      const onKeydown = (e) => {
        if (e.key === "Escape") {
          e.stopPropagation();
          this.closeThreadMenu();
        } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
          e.preventDefault();
          const focused = document.activeElement;
          const idx = menuItems.indexOf(focused);
          const next = e.key === "ArrowDown" ? menuItems[(idx + 1) % menuItems.length] : menuItems[(idx - 1 + menuItems.length) % menuItems.length];
          next.focus();
        } else if (e.key === "Tab") {
          e.preventDefault();
        }
      };
      this.menuCleanup = () => {
        document.removeEventListener("click", onOutside, true);
        document.removeEventListener("keydown", onKeydown, true);
      };
      setTimeout(() => {
        document.addEventListener("click", onOutside, true);
        document.addEventListener("keydown", onKeydown, true);
      });
    }
    openCommentMenu(anchor, threadId, commentId) {
      this.closeThreadMenu();
      const rect = anchor.getBoundingClientRect();
      const menu = document.createElement("div");
      menu.className = "pinpoint-thread-menu";
      menu.setAttribute("role", "menu");
      menu.setAttribute("aria-label", "Comment options");
      Object.assign(menu.style, {
        position: "fixed",
        top: `${rect.bottom + 4}px`,
        right: `${window.innerWidth - rect.right}px`,
        background: "#2a2a2a",
        border: "1px solid #4f4f4f",
        borderRadius: "8px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
        zIndex: "2147483600",
        minWidth: "120px",
        padding: "4px",
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      });
      const itemBase = "display:flex;align-items:center;gap:8px;width:100%;padding:7px 10px;border:none;background:none;color:#d0d0d0;font-family:inherit;font-size:13px;cursor:pointer;border-radius:4px;text-align:left;box-sizing:border-box;";
      const dangerBase = "display:flex;align-items:center;gap:8px;width:100%;padding:7px 10px;border:none;background:none;color:#f87171;font-family:inherit;font-size:13px;cursor:pointer;border-radius:4px;text-align:left;box-sizing:border-box;";
      menu.innerHTML = `
      <button data-action="edit" role="menuitem" style="${itemBase}">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M8.5 2.5l3 3M1.5 9.5l6-6 3 3-6 6H1.5v-3z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        Edit
      </button>
      <button data-action="delete" role="menuitem" style="${dangerBase}">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 4h9M5 4V2.5h4V4M3.5 4v7.5h7V4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        Delete
      </button>
    `;
      const [editBtn, deleteBtn] = menu.querySelectorAll("button");
      editBtn.addEventListener("mouseenter", () => {
        editBtn.style.background = "#333";
        editBtn.style.color = "#e0e0e0";
      });
      editBtn.addEventListener("mouseleave", () => {
        editBtn.style.background = "none";
        editBtn.style.color = "#d0d0d0";
      });
      deleteBtn.addEventListener("mouseenter", () => {
        deleteBtn.style.background = "rgba(248,113,113,0.12)";
      });
      deleteBtn.addEventListener("mouseleave", () => {
        deleteBtn.style.background = "none";
      });
      document.body.appendChild(menu);
      this.activeMenuAnchor = anchor;
      anchor.classList.add("menu-open");
      editBtn.focus();
      editBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        this.editingCommentId = commentId;
        this.editingThreadId = threadId;
        this.closeThreadMenu();
        this.update();
      });
      deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        store.deleteComment(threadId, commentId);
        this.closeThreadMenu();
      });
      const onOutside = (e) => {
        const path = e.composedPath();
        if (!menu.contains(e.target) && !path.includes(anchor)) {
          this.closeThreadMenu();
        }
      };
      const menuItems = Array.from(menu.querySelectorAll('button[role="menuitem"]'));
      const onKeydown = (e) => {
        if (e.key === "Escape") {
          e.stopPropagation();
          this.closeThreadMenu();
        } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
          e.preventDefault();
          const focused = document.activeElement;
          const idx = menuItems.indexOf(focused);
          const next = e.key === "ArrowDown" ? menuItems[(idx + 1) % menuItems.length] : menuItems[(idx - 1 + menuItems.length) % menuItems.length];
          next.focus();
        } else if (e.key === "Tab") {
          e.preventDefault();
        }
      };
      this.menuCleanup = () => {
        document.removeEventListener("click", onOutside, true);
        document.removeEventListener("keydown", onKeydown, true);
      };
      setTimeout(() => {
        document.addEventListener("click", onOutside, true);
        document.addEventListener("keydown", onKeydown, true);
      });
    }
    openFilterSortMenu(anchor) {
      if (this.activeMenuAnchor === anchor) {
        this.closeThreadMenu();
        return;
      }
      this.closeThreadMenu();
      const rect = anchor.getBoundingClientRect();
      const menu = document.createElement("div");
      menu.className = "pinpoint-thread-menu";
      menu.setAttribute("role", "menu");
      menu.setAttribute("aria-label", "Filter and sort");
      Object.assign(menu.style, {
        position: "fixed",
        top: `${rect.bottom + 4}px`,
        right: `${window.innerWidth - rect.right}px`,
        background: "#2a2a2a",
        border: "1px solid #4f4f4f",
        borderRadius: "8px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
        zIndex: "2147483600",
        minWidth: "180px",
        padding: "4px",
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      });
      const sectionStyle = "padding:4px 10px 2px;font-size:11px;font-weight:600;color:#9a9a9a;text-transform:uppercase;letter-spacing:0.05em;";
      const itemStyle = "display:flex;align-items:center;gap:8px;width:100%;padding:7px 10px;border:none;background:none;color:#d0d0d0;font-family:inherit;font-size:13px;cursor:pointer;border-radius:4px;text-align:left;box-sizing:border-box;";
      const checkboxOn = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="1" width="12" height="12" rx="3" fill="#818cf8" stroke="#818cf8" stroke-width="1.2"/><path d="M4 7l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
      const checkboxOff = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="1" width="12" height="12" rx="3" stroke="#666" stroke-width="1.2"/></svg>`;
      const radioOn = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="#818cf8" stroke-width="1.2"/><circle cx="7" cy="7" r="3.5" fill="#818cf8"/></svg>`;
      const radioOff = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="#666" stroke-width="1.2"/></svg>`;
      menu.innerHTML = `
      <div style="${sectionStyle}" role="presentation">Show</div>
      <button data-action="toggle-read" role="menuitemcheckbox" aria-checked="${this.showRead}" style="${itemStyle}">
        ${this.showRead ? checkboxOn : checkboxOff} Read
      </button>
      <button data-action="toggle-unread" role="menuitemcheckbox" aria-checked="${this.showUnread}" style="${itemStyle}">
        ${this.showUnread ? checkboxOn : checkboxOff} Unread
      </button>
      <button data-action="toggle-resolved" role="menuitemcheckbox" aria-checked="${this.showResolved}" style="${itemStyle}">
        ${this.showResolved ? checkboxOn : checkboxOff} Resolved
      </button>
      <div style="height:1px;background:#4f4f4f;margin:4px 6px;" role="separator"></div>
      <div style="${sectionStyle}" role="presentation">Sort by</div>
      <button data-action="sort-newest" role="menuitemradio" aria-checked="${this.sortMode === "newest"}" style="${itemStyle}">
        ${this.sortMode === "newest" ? radioOn : radioOff} Newest first
      </button>
      <button data-action="sort-oldest" role="menuitemradio" aria-checked="${this.sortMode === "oldest"}" style="${itemStyle}">
        ${this.sortMode === "oldest" ? radioOn : radioOff} Oldest first
      </button>
    `;
      document.body.appendChild(menu);
      this.activeMenuAnchor = anchor;
      anchor.classList.add("menu-open");
      const menuItems = Array.from(menu.querySelectorAll("button"));
      menuItems[0]?.focus();
      menu.querySelectorAll("button:not([disabled])").forEach((btn) => {
        btn.addEventListener("mouseenter", () => {
          btn.style.background = "rgba(99,102,241,0.15)";
          btn.style.color = "#818cf8";
        });
        btn.addEventListener("mouseleave", () => {
          btn.style.background = "none";
          btn.style.color = "#d0d0d0";
        });
      });
      menu.addEventListener("click", (e) => {
        const btn = e.target.closest("button");
        if (!btn || btn.hasAttribute("disabled")) return;
        e.stopPropagation();
        const action = btn.dataset.action;
        const isToggle = action?.startsWith("toggle-");
        if (action === "toggle-read") this.showRead = !this.showRead;
        else if (action === "toggle-unread") this.showUnread = !this.showUnread;
        else if (action === "toggle-resolved") this.showResolved = !this.showResolved;
        else if (action === "sort-newest") this.sortMode = "newest";
        else if (action === "sort-oldest") this.sortMode = "oldest";
        this.filterDirty = true;
        this.savePrefs();
        if (isToggle) {
          const svg = btn.querySelector("svg");
          if (svg) {
            const checked = action === "toggle-read" ? this.showRead : action === "toggle-unread" ? this.showUnread : this.showResolved;
            svg.outerHTML = checked ? checkboxOn : checkboxOff;
            btn.setAttribute("aria-checked", String(checked));
          }
          this.update();
        } else {
          menu.querySelectorAll('[role="menuitemradio"]').forEach((r) => {
            const a = r.dataset.action;
            r.setAttribute("aria-checked", String(a === action));
          });
          this.closeThreadMenu();
          this.update();
        }
      });
      const onOutside = (e) => {
        const path = e.composedPath();
        if (!menu.contains(e.target) && !path.includes(anchor)) {
          this.closeThreadMenu();
        }
      };
      const onKeydown = (e) => {
        if (e.key === "Escape") {
          e.stopPropagation();
          this.closeThreadMenu();
        } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
          e.preventDefault();
          const focused = document.activeElement;
          const idx = menuItems.indexOf(focused);
          const next = e.key === "ArrowDown" ? menuItems[(idx + 1) % menuItems.length] : menuItems[(idx - 1 + menuItems.length) % menuItems.length];
          next.focus();
        } else if (e.key === "Tab") {
          e.preventDefault();
        }
      };
      this.menuCleanup = () => {
        document.removeEventListener("click", onOutside, true);
        document.removeEventListener("keydown", onKeydown, true);
      };
      setTimeout(() => {
        document.addEventListener("click", onOutside, true);
        document.addEventListener("keydown", onKeydown, true);
      });
    }
    closeThreadMenu() {
      this.menuCleanup?.();
      this.menuCleanup = null;
      const anchor = this.activeMenuAnchor;
      anchor?.classList.remove("menu-open");
      this.activeMenuAnchor = null;
      document.querySelectorAll(".pinpoint-thread-menu").forEach((m) => m.remove());
      anchor?.focus();
    }
    renderThreadGroups(panelBody, currentThreads, otherThreads, af) {
      if (!panelBody.querySelector(".threads-current")) {
        panelBody.innerHTML = `
        <div class="page-section-header current-header" hidden>This page</div>
        <div class="thread-group threads-current"></div>
        <div class="page-section-header other-header" hidden>Other pages</div>
        <div class="thread-group threads-other"></div>
      `;
      }
      const currentHeader = panelBody.querySelector(".current-header");
      const otherHeader = panelBody.querySelector(".other-header");
      const currentGroup = panelBody.querySelector(".threads-current");
      const otherGroup = panelBody.querySelector(".threads-other");
      const showSections = otherThreads.length > 0;
      currentHeader.hidden = !showSections || currentThreads.length === 0;
      otherHeader.hidden = !showSections;
      this.diffThreadCards(currentGroup, currentThreads, af);
      otherGroup.innerHTML = otherThreads.map((t) => this.buildCardHtml(t, af, true)).join("");
    }
    buildCardHtml(thread, af, otherPage = false) {
      const visibleComments = af.size > 0 ? thread.comments.filter((c) => af.has(c.author.toLowerCase())) : thread.comments;
      const isSingleComment = thread.comments.length === 1;
      const commentsHtml = visibleComments.map((c) => renderCommentEntry({
        ...c,
        threadId: thread.id,
        isOwn: c.author === store.authorName,
        isEditing: this.editingCommentId === c.id && this.editingThreadId === thread.id,
        hideKebab: isSingleComment,
        reactions: c.reactions,
        currentAuthor: store.authorName
      })).join("");
      const resolveBtn = thread.status === "open" ? `<button class="thread-action-btn resolve-btn" data-thread-id="${thread.id}" aria-label="Resolve thread" data-tooltip="Resolve">
           <svg width="18" height="18" viewBox="0 0 14 14" fill="none" aria-hidden="true">
             <path d="M3 7l3 3 5-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
           </svg>
         </button>` : "";
      const resolvedBadge = thread.status === "resolved" ? '<span class="resolved-badge">Resolved</span>' : "";
      const isActive = store.activeThreadId === thread.id;
      const isLoading = !isActive && this.loadingThreadId === thread.id;
      const isRead = store.isThreadRead(thread.id);
      const rightControl = isRead ? `<button class="kebab-btn" data-thread-id="${thread.id}" aria-label="Thread options" data-tooltip="Options">
           <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
             <circle cx="8" cy="3.5" r="1.2" fill="currentColor"/>
             <circle cx="8" cy="8" r="1.2" fill="currentColor"/>
             <circle cx="8" cy="12.5" r="1.2" fill="currentColor"/>
           </svg>
         </button>` : `<div class="thread-indicator"><span class="thread-unread-dot"></span></div>`;
      const lastAuthor = thread.comments[thread.comments.length - 1]?.author ?? "";
      const cardColor = lastAuthor ? authorColor(lastAuthor) : "";
      const pageTag = otherPage && thread.page ? `<div class="thread-page-tag">
           <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
             <path d="M4.5 2H2.8a.8.8 0 0 0-.8.8v6.4c0 .44.36.8.8.8h6.4a.8.8 0 0 0 .8-.8V7.5M7 2h3v3M10 2 5.5 6.5" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
           </svg>
           ${escapeHtml(thread.page.split("/").pop() || thread.page)}
         </div>` : "";
      return `
      <div class="thread-card ${thread.status === "resolved" ? "resolved" : ""} ${isActive ? "active" : isLoading ? "loading" : ""}" data-thread-id="${thread.id}"${otherPage && thread.page ? ` data-other-page="${escapeHtml(thread.page)}"` : ""} tabindex="0" role="button" aria-label="${escapeHtml(thread.targetLabel)} \u2014 ${thread.comments.length} comment${thread.comments.length !== 1 ? "s" : ""}"${cardColor ? ` style="--card-author-color:${cardColor}"` : ""}>
        <div class="thread-header">
          <div class="thread-target-wrapper">
            <span class="thread-target">${escapeHtml(thread.targetLabel)}</span>
          </div>
          <div class="thread-actions">
            ${resolvedBadge}
            ${resolveBtn}
            ${rightControl}
          </div>
        </div>
        ${commentsHtml}
        ${pageTag}
      </div>
    `;
    }
    diffThreadCards(container, visibleThreads, af) {
      const newIds = new Set(visibleThreads.map((t) => t.id));
      const existingCards = /* @__PURE__ */ new Map();
      container.querySelectorAll(".thread-card[data-thread-id]").forEach((el) => {
        existingCards.set(el.dataset.threadId, el);
      });
      if (existingCards.size === 0) {
        container.innerHTML = visibleThreads.map((t) => this.buildCardHtml(t, af)).join("");
        return;
      }
      existingCards.forEach((el, id) => {
        if (!newIds.has(id)) {
          el.classList.add("pp-removing");
          el.addEventListener("transitionend", () => el.remove(), { once: true });
          setTimeout(() => {
            if (el.parentNode) el.remove();
          }, 500);
        }
      });
      visibleThreads.forEach((thread, i) => {
        const existing = existingCards.get(thread.id);
        if (existing) {
          const tmp = document.createElement("div");
          tmp.innerHTML = this.buildCardHtml(thread, af).trim();
          const updated = tmp.firstElementChild;
          if (existing.classList.contains("pp-entering")) {
            updated.classList.add("pp-entering");
            requestAnimationFrame(() => {
              requestAnimationFrame(() => updated.classList.remove("pp-entering"));
            });
          }
          existing.replaceWith(updated);
          existingCards.set(thread.id, updated);
        } else {
          const tmp = document.createElement("div");
          tmp.innerHTML = this.buildCardHtml(thread, af).trim();
          const newCard = tmp.firstElementChild;
          newCard.classList.add("pp-entering");
          const cards = Array.from(container.querySelectorAll(".thread-card:not(.pp-removing)"));
          if (i < cards.length) {
            container.insertBefore(newCard, cards[i]);
          } else {
            container.appendChild(newCard);
          }
          requestAnimationFrame(() => {
            requestAnimationFrame(() => newCard.classList.remove("pp-entering"));
          });
        }
      });
      const ordered = visibleThreads.map(
        (t) => container.querySelector(`.thread-card[data-thread-id="${t.id}"]`)
      ).filter(Boolean);
      const before = new Map(ordered.map((el) => [el, el.getBoundingClientRect().top]));
      for (const el of ordered) container.appendChild(el);
      for (const el of ordered) {
        const dy = before.get(el) - el.getBoundingClientRect().top;
        if (Math.abs(dy) < 1) continue;
        el.style.transition = "none";
        el.style.transform = `translateY(${dy}px)`;
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            el.style.transition = "";
            el.style.transform = "";
          });
        });
      }
    }
  };

  // src/pinpoint-history-popover.ts
  var styles5 = `
  ${tokenStyles}

  :host {
    display: block;
    position: fixed;
    z-index: 2147483530;
    width: 320px;
    height: 420px;
    min-width: 240px;
    min-height: 180px;
  }

  .history-popover {
    width: 100%;
    height: 100%;
    background: var(--pinpoint-bg);
    border: 1px solid var(--pinpoint-border-outer);
    border-radius: var(--pinpoint-radius-l);
    box-shadow: var(--pinpoint-popover-shadow);
    font-family: var(--pinpoint-font);
    font-size: 13px;
    color: var(--pinpoint-text);
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .history-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 12px 8px;
    border-bottom: 1px solid var(--pinpoint-border);
    cursor: grab;
    user-select: none;
  }

  .history-header:active {
    cursor: grabbing;
  }

  .history-title {
    font-weight: 600;
    font-size: 13px;
    color: var(--pinpoint-text);
  }

  /* Edge resize handles */
  .resize-edge {
    position: absolute;
    z-index: 1;
  }
  .resize-n { top: -4px; left: 8px; right: 8px; height: 8px; cursor: ns-resize; }
  .resize-s { bottom: -4px; left: 8px; right: 8px; height: 8px; cursor: ns-resize; }
  .resize-w { left: -4px; top: 8px; bottom: 8px; width: 8px; cursor: ew-resize; }
  .resize-e { right: -4px; top: 8px; bottom: 8px; width: 8px; cursor: ew-resize; }
  .resize-nw { top: -4px; left: -4px; width: 12px; height: 12px; cursor: nwse-resize; }
  .resize-ne { top: -4px; right: -4px; width: 12px; height: 12px; cursor: nesw-resize; }
  .resize-sw { bottom: -4px; left: -4px; width: 12px; height: 12px; cursor: nesw-resize; }
  .resize-se { bottom: -4px; right: -4px; width: 12px; height: 12px; cursor: nwse-resize; }

  .history-close {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    padding: 0;
    border: none;
    background: none;
    color: var(--pinpoint-text-faint);
    cursor: pointer;
    border-radius: var(--pinpoint-radius-m);
    transition: color 0.12s ease, background 0.12s ease;
  }

  .history-close:hover {
    color: var(--pinpoint-text);
    background: var(--pinpoint-bg-hover);
  }

  .history-close:focus-visible {
    outline: 2px solid var(--pinpoint-accent);
    outline-offset: 1px;
  }

  .history-search {
    position: sticky;
    top: 0;
    padding: 8px 12px;
    border-bottom: 1px solid var(--pinpoint-border);
    background: var(--pinpoint-bg);
  }

  .history-search-wrap {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 8px;
    border: 1px solid var(--pinpoint-border);
    border-radius: 999px;
    background: var(--pinpoint-bg-raised);
    transition: border-color 0.12s ease;
  }

  .history-search-wrap:focus-within {
    border-color: var(--pinpoint-border-strong);
  }

  .history-search-icon {
    flex-shrink: 0;
    color: var(--pinpoint-text-faint);
  }

  .history-search-input {
    flex: 1;
    border: none;
    background: none;
    color: var(--pinpoint-text);
    font-family: inherit;
    font-size: 12px;
    outline: none;
  }

  .history-search-input::placeholder {
    color: var(--pinpoint-text-faint);
  }

  .history-search-clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    padding: 0;
    border: none;
    background: none;
    color: var(--pinpoint-text-faint);
    cursor: pointer;
    border-radius: 50%;
    transition: color 0.12s ease;
  }

  .history-search-clear:hover {
    color: var(--pinpoint-text);
  }

  .history-body {
    flex: 1;
    overflow-y: auto;
    padding: 8px 12px 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .history-entry {
    background: var(--pinpoint-bg-raised);
    border: 1px solid var(--pinpoint-border-subtle, var(--pinpoint-border));
    border-radius: var(--pinpoint-radius-m);
    padding: 10px 12px;
  }

  .history-entry-header {
    display: flex;
    align-items: baseline;
    gap: 8px;
    margin-bottom: 6px;
  }

  .history-version {
    font-weight: 600;
    font-size: 13px;
    color: var(--pinpoint-text);
  }

  .history-date {
    font-size: 11px;
    color: var(--pinpoint-text-faint);
  }

  .history-changes {
    margin: 0;
    padding: 0 0 0 16px;
    list-style: disc;
  }

  .history-changes li {
    font-size: 12px;
    color: var(--pinpoint-text-secondary);
    line-height: 1.5;
  }

  .history-empty {
    text-align: center;
    padding: 24px 12px;
    font-size: 12px;
    color: var(--pinpoint-text-faint);
  }

  mark {
    background: rgb(250, 204, 21);
    color: #1a1a1a;
    border-radius: 2px;
    padding: 0 1px;
  }
`;
  var PinpointHistoryPopover = class extends HTMLElement {
    changelog = [];
    searchQuery = "";
    searchRaw = "";
    dragState = null;
    connectedCallback() {
      this.attachShadow({ mode: "open" });
      this.render();
    }
    setChangelog(entries) {
      this.changelog = entries;
      this.render();
    }
    focusSearch() {
      const input = this.shadowRoot?.querySelector(".history-search-input");
      if (input) input.focus();
    }
    render() {
      if (!this.shadowRoot) return;
      const filtered = this.searchQuery ? this.changelog.filter(
        (entry) => entry.version.toLowerCase().includes(this.searchQuery) || entry.date.toLowerCase().includes(this.searchQuery) || entry.changes.some((c) => c.toLowerCase().includes(this.searchQuery))
      ) : this.changelog;
      this.shadowRoot.innerHTML = `
      <style>${styles5}</style>
      <div class="resize-edge resize-n" data-resize="n"></div>
      <div class="resize-edge resize-s" data-resize="s"></div>
      <div class="resize-edge resize-w" data-resize="w"></div>
      <div class="resize-edge resize-e" data-resize="e"></div>
      <div class="resize-edge resize-nw" data-resize="nw"></div>
      <div class="resize-edge resize-ne" data-resize="ne"></div>
      <div class="resize-edge resize-sw" data-resize="sw"></div>
      <div class="resize-edge resize-se" data-resize="se"></div>
      <div class="history-popover">
        <div class="history-header" data-drag-handle>
          <span class="history-title">Version History</span>
          <button class="history-close" aria-label="Close">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
        <div class="history-search">
          <div class="history-search-wrap">
            <svg class="history-search-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <circle cx="6" cy="6" r="4.5" stroke="currentColor" stroke-width="1.3"/>
              <path d="M9.5 9.5L12.5 12.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
            </svg>
            <input class="history-search-input" type="text" placeholder="Search changes..." aria-label="Search version history" value="${this.escapeAttr(this.searchRaw)}" />
            ${this.searchRaw ? `<button class="history-search-clear" aria-label="Clear search">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                <path d="M1.5 1.5l7 7M8.5 1.5l-7 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </button>` : ""}
          </div>
        </div>
        <div class="history-body">
          ${filtered.length === 0 ? `<div class="history-empty">${this.changelog.length === 0 ? "No version history yet." : "No matching changes found."}</div>` : filtered.map((entry) => `
              <div class="history-entry">
                <div class="history-entry-header">
                  <span class="history-version">${this.highlight(entry.version)}</span>
                  <span class="history-date">${this.highlight(this.formatDate(entry.date))}</span>
                </div>
                <ul class="history-changes">
                  ${entry.changes.map((c) => `<li>${this.highlight(c)}</li>`).join("")}
                </ul>
              </div>
            `).join("")}
        </div>
      </div>
    `;
      this.addListeners();
    }
    addListeners() {
      if (!this.shadowRoot) return;
      this.shadowRoot.querySelector(".history-close")?.addEventListener("click", () => {
        this.dispatchEvent(new CustomEvent("pinpoint-history-close", { bubbles: true, composed: true }));
      });
      this.shadowRoot.querySelector(".history-search-clear")?.addEventListener("click", () => {
        this.searchRaw = "";
        this.searchQuery = "";
        this.render();
        const newInput = this.shadowRoot?.querySelector(".history-search-input");
        if (newInput) newInput.focus();
      });
      const input = this.shadowRoot.querySelector(".history-search-input");
      if (input) {
        input.addEventListener("input", () => {
          this.searchRaw = input.value;
          this.searchQuery = input.value.toLowerCase().trim();
          this.render();
          const newInput = this.shadowRoot?.querySelector(".history-search-input");
          if (newInput) {
            newInput.focus();
            newInput.setSelectionRange(newInput.value.length, newInput.value.length);
          }
        });
        input.addEventListener("keydown", (e) => {
          if (e.key === "Escape") {
            e.stopPropagation();
            this.dispatchEvent(new CustomEvent("pinpoint-history-close", { bubbles: true, composed: true }));
          }
        });
      }
      const header = this.shadowRoot.querySelector(".history-header");
      if (header) {
        header.addEventListener("mousedown", (e) => {
          if (e.target.closest("button")) return;
          e.preventDefault();
          const rect = this.getBoundingClientRect();
          this.dragState = { startX: e.clientX, startY: e.clientY, origLeft: rect.left, origTop: rect.top };
          const onMove = (ev) => {
            if (!this.dragState) return;
            const dx = ev.clientX - this.dragState.startX;
            const dy = ev.clientY - this.dragState.startY;
            this.style.left = `${this.dragState.origLeft + dx}px`;
            this.style.top = `${this.dragState.origTop + dy}px`;
            this.style.transform = "none";
          };
          const onUp = () => {
            this.dragState = null;
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseup", onUp);
          };
          window.addEventListener("mousemove", onMove);
          window.addEventListener("mouseup", onUp);
        });
      }
      this.shadowRoot.querySelectorAll("[data-resize]").forEach((handle) => {
        handle.addEventListener("mousedown", (e) => {
          const me = e;
          me.preventDefault();
          me.stopPropagation();
          const edge = handle.dataset.resize;
          const rect = this.getBoundingClientRect();
          const startX = me.clientX;
          const startY = me.clientY;
          const origW = rect.width;
          const origH = rect.height;
          const origL = rect.left;
          const origT = rect.top;
          const minW = 240;
          const minH = 180;
          const onMove = (ev) => {
            const dx = ev.clientX - startX;
            const dy = ev.clientY - startY;
            let newW = origW, newH = origH, newL = origL, newT = origT;
            if (edge.includes("e")) newW = Math.max(minW, origW + dx);
            if (edge.includes("s")) newH = Math.max(minH, origH + dy);
            if (edge.includes("w")) {
              newW = Math.max(minW, origW - dx);
              newL = origL + origW - newW;
            }
            if (edge.includes("n")) {
              newH = Math.max(minH, origH - dy);
              newT = origT + origH - newH;
            }
            this.style.width = `${newW}px`;
            this.style.height = `${newH}px`;
            this.style.left = `${newL}px`;
            this.style.top = `${newT}px`;
            this.style.transform = "none";
          };
          const onUp = () => {
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseup", onUp);
          };
          window.addEventListener("mousemove", onMove);
          window.addEventListener("mouseup", onUp);
        });
      });
    }
    formatDate(iso) {
      const normalized = iso.match(/[Z+\-]\d|[Z]$/) ? iso : iso + "Z";
      const date = new Date(normalized);
      if (isNaN(date.getTime())) return iso;
      const now = /* @__PURE__ */ new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const target = new Date(date.getFullYear(), date.getMonth(), date.getDate());
      const diffDays = Math.round((today.getTime() - target.getTime()) / 864e5);
      const h = date.getHours();
      const m = date.getMinutes();
      const ampm = h >= 12 ? "pm" : "am";
      const hour12 = h % 12 || 12;
      const time = `${hour12}:${String(m).padStart(2, "0")}${ampm}`;
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      if (diffDays === 0) return `Today at ${time}`;
      if (diffDays === 1) return `Yesterday at ${time}`;
      if (diffDays > 1 && diffDays < 7) return `${days[date.getDay()]} at ${time}`;
      return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} at ${time}`;
    }
    escapeHtml(str) {
      const div = document.createElement("div");
      div.textContent = str;
      return div.innerHTML;
    }
    highlight(str) {
      const escaped = this.escapeHtml(str);
      if (!this.searchQuery) return escaped;
      const pattern = this.searchQuery.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const regex = new RegExp(`(${pattern})`, "gi");
      return escaped.replace(regex, "<mark>$1</mark>");
    }
    escapeAttr(str) {
      return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
  };

  // src/pinpoint.ts
  if (!customElements.get("pinpoint-fab")) {
    customElements.define("pinpoint-fab", PinpointFab);
  }
  if (!customElements.get("pinpoint-popover")) {
    customElements.define("pinpoint-popover", PinpointPopover);
  }
  if (!customElements.get("pinpoint-panel")) {
    customElements.define("pinpoint-panel", PinpointPanel);
  }
  if (!customElements.get("pinpoint-history-popover")) {
    customElements.define("pinpoint-history-popover", PinpointHistoryPopover);
  }
  if (!customElements.get("pinpoint-overlay")) {
    customElements.define("pinpoint-overlay", PinpointOverlay);
  }
  var bootScript = document.currentScript ?? document.querySelector('script[src*="pinpoint"][data-prototype]');
  function bootstrap(script) {
    if (document.querySelector("pinpoint-overlay")) return;
    const prototype = script.dataset.prototype;
    if (!prototype) return;
    const overlay = document.createElement("pinpoint-overlay");
    overlay.setAttribute("prototype-name", prototype);
    overlay.setAttribute("label", script.dataset.label || prototype);
    if (script.dataset.scope) overlay.setAttribute("scope", script.dataset.scope);
    if (script.dataset.position) overlay.setAttribute("position", script.dataset.position);
    if (script.dataset.version) overlay.setAttribute("version", script.dataset.version);
    if (script.dataset.updated) overlay.setAttribute("updated", script.dataset.updated);
    if (script.dataset.changelog) overlay.setAttribute("changelog", script.dataset.changelog);
    document.body.appendChild(overlay);
  }
  if (bootScript?.dataset.prototype) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => bootstrap(bootScript), { once: true });
    } else {
      bootstrap(bootScript);
    }
  }
  return __toCommonJS(pinpoint_exports);
})();
try{Pinpoint.version="1.0.0";console.info("Pinpoint v"+"1.0.0");}catch(e){}
