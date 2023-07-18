function lr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ue = { exports: {} }, We = function(r, t) {
  return function() {
    for (var n = new Array(arguments.length), a = 0; a < n.length; a++)
      n[a] = arguments[a];
    return r.apply(t, n);
  };
}, dr = We, fe = Object.prototype.toString, ce = function(e) {
  return function(r) {
    var t = fe.call(r);
    return e[t] || (e[t] = t.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function O(e) {
  return e = e.toLowerCase(), function(t) {
    return ce(t) === e;
  };
}
function le(e) {
  return Array.isArray(e);
}
function $(e) {
  return typeof e > "u";
}
function hr(e) {
  return e !== null && !$(e) && e.constructor !== null && !$(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
var ze = O("ArrayBuffer");
function pr(e) {
  var r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(e) : r = e && e.buffer && ze(e.buffer), r;
}
function vr(e) {
  return typeof e == "string";
}
function mr(e) {
  return typeof e == "number";
}
function Je(e) {
  return e !== null && typeof e == "object";
}
function L(e) {
  if (ce(e) !== "object")
    return !1;
  var r = Object.getPrototypeOf(e);
  return r === null || r === Object.prototype;
}
var Er = O("Date"), yr = O("File"), Rr = O("Blob"), wr = O("FileList");
function de(e) {
  return fe.call(e) === "[object Function]";
}
function br(e) {
  return Je(e) && de(e.pipe);
}
function Ar(e) {
  var r = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || fe.call(e) === r || de(e.toString) && e.toString() === r);
}
var Or = O("URLSearchParams");
function Sr(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function Cr() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function he(e, r) {
  if (!(e === null || typeof e > "u"))
    if (typeof e != "object" && (e = [e]), le(e))
      for (var t = 0, i = e.length; t < i; t++)
        r.call(null, e[t], t, e);
    else
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && r.call(null, e[n], n, e);
}
function oe() {
  var e = {};
  function r(n, a) {
    L(e[a]) && L(n) ? e[a] = oe(e[a], n) : L(n) ? e[a] = oe({}, n) : le(n) ? e[a] = n.slice() : e[a] = n;
  }
  for (var t = 0, i = arguments.length; t < i; t++)
    he(arguments[t], r);
  return e;
}
function Tr(e, r, t) {
  return he(r, function(n, a) {
    t && typeof n == "function" ? e[a] = dr(n, t) : e[a] = n;
  }), e;
}
function xr(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function Pr(e, r, t, i) {
  e.prototype = Object.create(r.prototype, i), e.prototype.constructor = e, t && Object.assign(e.prototype, t);
}
function _r(e, r, t) {
  var i, n, a, s = {};
  r = r || {};
  do {
    for (i = Object.getOwnPropertyNames(e), n = i.length; n-- > 0; )
      a = i[n], s[a] || (r[a] = e[a], s[a] = !0);
    e = Object.getPrototypeOf(e);
  } while (e && (!t || t(e, r)) && e !== Object.prototype);
  return r;
}
function gr(e, r, t) {
  e = String(e), (t === void 0 || t > e.length) && (t = e.length), t -= r.length;
  var i = e.indexOf(r, t);
  return i !== -1 && i === t;
}
function Nr(e) {
  if (!e)
    return null;
  var r = e.length;
  if ($(r))
    return null;
  for (var t = new Array(r); r-- > 0; )
    t[r] = e[r];
  return t;
}
var Br = function(e) {
  return function(r) {
    return e && r instanceof e;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), v = {
  isArray: le,
  isArrayBuffer: ze,
  isBuffer: hr,
  isFormData: Ar,
  isArrayBufferView: pr,
  isString: vr,
  isNumber: mr,
  isObject: Je,
  isPlainObject: L,
  isUndefined: $,
  isDate: Er,
  isFile: yr,
  isBlob: Rr,
  isFunction: de,
  isStream: br,
  isURLSearchParams: Or,
  isStandardBrowserEnv: Cr,
  forEach: he,
  merge: oe,
  extend: Tr,
  trim: Sr,
  stripBOM: xr,
  inherits: Pr,
  toFlatObject: _r,
  kindOf: ce,
  kindOfTest: O,
  endsWith: gr,
  toArray: Nr,
  isTypedArray: Br,
  isFileList: wr
}, x = v;
function we(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var Ve = function(r, t, i) {
  if (!t)
    return r;
  var n;
  if (i)
    n = i(t);
  else if (x.isURLSearchParams(t))
    n = t.toString();
  else {
    var a = [];
    x.forEach(t, function(f, d) {
      f === null || typeof f > "u" || (x.isArray(f) ? d = d + "[]" : f = [f], x.forEach(f, function(h) {
        x.isDate(h) ? h = h.toISOString() : x.isObject(h) && (h = JSON.stringify(h)), a.push(we(d) + "=" + we(h));
      }));
    }), n = a.join("&");
  }
  if (n) {
    var s = r.indexOf("#");
    s !== -1 && (r = r.slice(0, s)), r += (r.indexOf("?") === -1 ? "?" : "&") + n;
  }
  return r;
}, Dr = v;
function I() {
  this.handlers = [];
}
I.prototype.use = function(r, t, i) {
  return this.handlers.push({
    fulfilled: r,
    rejected: t,
    synchronous: i ? i.synchronous : !1,
    runWhen: i ? i.runWhen : null
  }), this.handlers.length - 1;
};
I.prototype.eject = function(r) {
  this.handlers[r] && (this.handlers[r] = null);
};
I.prototype.forEach = function(r) {
  Dr.forEach(this.handlers, function(i) {
    i !== null && r(i);
  });
};
var Ur = I, qr = v, Lr = function(r, t) {
  qr.forEach(r, function(n, a) {
    a !== t && a.toUpperCase() === t.toUpperCase() && (r[t] = n, delete r[a]);
  });
}, Xe = v;
function g(e, r, t, i, n) {
  Error.call(this), this.message = e, this.name = "AxiosError", r && (this.code = r), t && (this.config = t), i && (this.request = i), n && (this.response = n);
}
Xe.inherits(g, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
var Ke = g.prototype, Ge = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED"
  // eslint-disable-next-line func-names
].forEach(function(e) {
  Ge[e] = { value: e };
});
Object.defineProperties(g, Ge);
Object.defineProperty(Ke, "isAxiosError", { value: !0 });
g.from = function(e, r, t, i, n, a) {
  var s = Object.create(Ke);
  return Xe.toFlatObject(e, s, function(f) {
    return f !== Error.prototype;
  }), g.call(s, e.message, r, t, i, n), s.name = e.name, a && Object.assign(s, a), s;
};
var B = g, Qe = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, w = v;
function Fr(e, r) {
  r = r || new FormData();
  var t = [];
  function i(a) {
    return a === null ? "" : w.isDate(a) ? a.toISOString() : w.isArrayBuffer(a) || w.isTypedArray(a) ? typeof Blob == "function" ? new Blob([a]) : Buffer.from(a) : a;
  }
  function n(a, s) {
    if (w.isPlainObject(a) || w.isArray(a)) {
      if (t.indexOf(a) !== -1)
        throw Error("Circular reference detected in " + s);
      t.push(a), w.forEach(a, function(f, d) {
        if (!w.isUndefined(f)) {
          var l = s ? s + "." + d : d, h;
          if (f && !s && typeof f == "object") {
            if (w.endsWith(d, "{}"))
              f = JSON.stringify(f);
            else if (w.endsWith(d, "[]") && (h = w.toArray(f))) {
              h.forEach(function(u) {
                !w.isUndefined(u) && r.append(l, i(u));
              });
              return;
            }
          }
          n(f, l);
        }
      }), t.pop();
    } else
      r.append(s, i(a));
  }
  return n(e), r;
}
var Ye = Fr, J, be;
function $r() {
  if (be)
    return J;
  be = 1;
  var e = B;
  return J = function(t, i, n) {
    var a = n.config.validateStatus;
    !n.status || !a || a(n.status) ? t(n) : i(new e(
      "Request failed with status code " + n.status,
      [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
      n.config,
      n.request,
      n
    ));
  }, J;
}
var V, Ae;
function Ir() {
  if (Ae)
    return V;
  Ae = 1;
  var e = v;
  return V = e.isStandardBrowserEnv() ? (
    // Standard browser envs support document.cookie
    function() {
      return {
        write: function(i, n, a, s, o, f) {
          var d = [];
          d.push(i + "=" + encodeURIComponent(n)), e.isNumber(a) && d.push("expires=" + new Date(a).toGMTString()), e.isString(s) && d.push("path=" + s), e.isString(o) && d.push("domain=" + o), f === !0 && d.push("secure"), document.cookie = d.join("; ");
        },
        read: function(i) {
          var n = document.cookie.match(new RegExp("(^|;\\s*)(" + i + ")=([^;]*)"));
          return n ? decodeURIComponent(n[3]) : null;
        },
        remove: function(i) {
          this.write(i, "", Date.now() - 864e5);
        }
      };
    }()
  ) : (
    // Non standard browser env (web workers, react-native) lack needed support.
    function() {
      return {
        write: function() {
        },
        read: function() {
          return null;
        },
        remove: function() {
        }
      };
    }()
  ), V;
}
var jr = function(r) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(r);
}, kr = function(r, t) {
  return t ? r.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : r;
}, Mr = jr, Hr = kr, Ze = function(r, t) {
  return r && !Mr(t) ? Hr(r, t) : t;
}, X, Oe;
function Wr() {
  if (Oe)
    return X;
  Oe = 1;
  var e = v, r = [
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ];
  return X = function(i) {
    var n = {}, a, s, o;
    return i && e.forEach(i.split(`
`), function(d) {
      if (o = d.indexOf(":"), a = e.trim(d.substr(0, o)).toLowerCase(), s = e.trim(d.substr(o + 1)), a) {
        if (n[a] && r.indexOf(a) >= 0)
          return;
        a === "set-cookie" ? n[a] = (n[a] ? n[a] : []).concat([s]) : n[a] = n[a] ? n[a] + ", " + s : s;
      }
    }), n;
  }, X;
}
var K, Se;
function zr() {
  if (Se)
    return K;
  Se = 1;
  var e = v;
  return K = e.isStandardBrowserEnv() ? (
    // Standard browser envs have full support of the APIs needed to test
    // whether the request URL is of the same origin as current location.
    function() {
      var t = /(msie|trident)/i.test(navigator.userAgent), i = document.createElement("a"), n;
      function a(s) {
        var o = s;
        return t && (i.setAttribute("href", o), o = i.href), i.setAttribute("href", o), {
          href: i.href,
          protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
          host: i.host,
          search: i.search ? i.search.replace(/^\?/, "") : "",
          hash: i.hash ? i.hash.replace(/^#/, "") : "",
          hostname: i.hostname,
          port: i.port,
          pathname: i.pathname.charAt(0) === "/" ? i.pathname : "/" + i.pathname
        };
      }
      return n = a(window.location.href), function(o) {
        var f = e.isString(o) ? a(o) : o;
        return f.protocol === n.protocol && f.host === n.host;
      };
    }()
  ) : (
    // Non standard browser envs (web workers, react-native) lack needed support.
    function() {
      return function() {
        return !0;
      };
    }()
  ), K;
}
var G, Ce;
function j() {
  if (Ce)
    return G;
  Ce = 1;
  var e = B, r = v;
  function t(i) {
    e.call(this, i ?? "canceled", e.ERR_CANCELED), this.name = "CanceledError";
  }
  return r.inherits(t, e, {
    __CANCEL__: !0
  }), G = t, G;
}
var Q, Te;
function Jr() {
  return Te || (Te = 1, Q = function(r) {
    var t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(r);
    return t && t[1] || "";
  }), Q;
}
var Y, xe;
function Pe() {
  if (xe)
    return Y;
  xe = 1;
  var e = v, r = $r(), t = Ir(), i = Ve, n = Ze, a = Wr(), s = zr(), o = Qe, f = B, d = j(), l = Jr();
  return Y = function(u) {
    return new Promise(function(or, S) {
      var D = u.data, U = u.headers, q = u.responseType, C;
      function Ee() {
        u.cancelToken && u.cancelToken.unsubscribe(C), u.signal && u.signal.removeEventListener("abort", C);
      }
      e.isFormData(D) && e.isStandardBrowserEnv() && delete U["Content-Type"];
      var c = new XMLHttpRequest();
      if (u.auth) {
        var ur = u.auth.username || "", fr = u.auth.password ? unescape(encodeURIComponent(u.auth.password)) : "";
        U.Authorization = "Basic " + btoa(ur + ":" + fr);
      }
      var H = n(u.baseURL, u.url);
      c.open(u.method.toUpperCase(), i(H, u.params, u.paramsSerializer), !0), c.timeout = u.timeout;
      function ye() {
        if (c) {
          var R = "getAllResponseHeaders" in c ? a(c.getAllResponseHeaders()) : null, T = !q || q === "text" || q === "json" ? c.responseText : c.response, A = {
            data: T,
            status: c.status,
            statusText: c.statusText,
            headers: R,
            config: u,
            request: c
          };
          r(function(z) {
            or(z), Ee();
          }, function(z) {
            S(z), Ee();
          }, A), c = null;
        }
      }
      if ("onloadend" in c ? c.onloadend = ye : c.onreadystatechange = function() {
        !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(ye);
      }, c.onabort = function() {
        c && (S(new f("Request aborted", f.ECONNABORTED, u, c)), c = null);
      }, c.onerror = function() {
        S(new f("Network Error", f.ERR_NETWORK, u, c, c)), c = null;
      }, c.ontimeout = function() {
        var T = u.timeout ? "timeout of " + u.timeout + "ms exceeded" : "timeout exceeded", A = u.transitional || o;
        u.timeoutErrorMessage && (T = u.timeoutErrorMessage), S(new f(
          T,
          A.clarifyTimeoutError ? f.ETIMEDOUT : f.ECONNABORTED,
          u,
          c
        )), c = null;
      }, e.isStandardBrowserEnv()) {
        var Re = (u.withCredentials || s(H)) && u.xsrfCookieName ? t.read(u.xsrfCookieName) : void 0;
        Re && (U[u.xsrfHeaderName] = Re);
      }
      "setRequestHeader" in c && e.forEach(U, function(T, A) {
        typeof D > "u" && A.toLowerCase() === "content-type" ? delete U[A] : c.setRequestHeader(A, T);
      }), e.isUndefined(u.withCredentials) || (c.withCredentials = !!u.withCredentials), q && q !== "json" && (c.responseType = u.responseType), typeof u.onDownloadProgress == "function" && c.addEventListener("progress", u.onDownloadProgress), typeof u.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", u.onUploadProgress), (u.cancelToken || u.signal) && (C = function(R) {
        c && (S(!R || R && R.type ? new d() : R), c.abort(), c = null);
      }, u.cancelToken && u.cancelToken.subscribe(C), u.signal && (u.signal.aborted ? C() : u.signal.addEventListener("abort", C))), D || (D = null);
      var W = l(H);
      if (W && ["http", "https", "file"].indexOf(W) === -1) {
        S(new f("Unsupported protocol " + W + ":", f.ERR_BAD_REQUEST, u));
        return;
      }
      c.send(D);
    });
  }, Y;
}
var Z, _e;
function Vr() {
  return _e || (_e = 1, Z = null), Z;
}
var p = v, ge = Lr, Ne = B, Xr = Qe, Kr = Ye, Gr = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function Be(e, r) {
  !p.isUndefined(e) && p.isUndefined(e["Content-Type"]) && (e["Content-Type"] = r);
}
function Qr() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = Pe()), e;
}
function Yr(e, r, t) {
  if (p.isString(e))
    try {
      return (r || JSON.parse)(e), p.trim(e);
    } catch (i) {
      if (i.name !== "SyntaxError")
        throw i;
    }
  return (t || JSON.stringify)(e);
}
var k = {
  transitional: Xr,
  adapter: Qr(),
  transformRequest: [function(r, t) {
    if (ge(t, "Accept"), ge(t, "Content-Type"), p.isFormData(r) || p.isArrayBuffer(r) || p.isBuffer(r) || p.isStream(r) || p.isFile(r) || p.isBlob(r))
      return r;
    if (p.isArrayBufferView(r))
      return r.buffer;
    if (p.isURLSearchParams(r))
      return Be(t, "application/x-www-form-urlencoded;charset=utf-8"), r.toString();
    var i = p.isObject(r), n = t && t["Content-Type"], a;
    if ((a = p.isFileList(r)) || i && n === "multipart/form-data") {
      var s = this.env && this.env.FormData;
      return Kr(a ? { "files[]": r } : r, s && new s());
    } else if (i || n === "application/json")
      return Be(t, "application/json"), Yr(r);
    return r;
  }],
  transformResponse: [function(r) {
    var t = this.transitional || k.transitional, i = t && t.silentJSONParsing, n = t && t.forcedJSONParsing, a = !i && this.responseType === "json";
    if (a || n && p.isString(r) && r.length)
      try {
        return JSON.parse(r);
      } catch (s) {
        if (a)
          throw s.name === "SyntaxError" ? Ne.from(s, Ne.ERR_BAD_RESPONSE, this, null, this.response) : s;
      }
    return r;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Vr()
  },
  validateStatus: function(r) {
    return r >= 200 && r < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
p.forEach(["delete", "get", "head"], function(r) {
  k.headers[r] = {};
});
p.forEach(["post", "put", "patch"], function(r) {
  k.headers[r] = p.merge(Gr);
});
var pe = k, Zr = v, et = pe, rt = function(r, t, i) {
  var n = this || et;
  return Zr.forEach(i, function(s) {
    r = s.call(n, r, t);
  }), r;
}, ee, De;
function er() {
  return De || (De = 1, ee = function(r) {
    return !!(r && r.__CANCEL__);
  }), ee;
}
var Ue = v, re = rt, tt = er(), nt = pe, it = j();
function te(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new it();
}
var at = function(r) {
  te(r), r.headers = r.headers || {}, r.data = re.call(
    r,
    r.data,
    r.headers,
    r.transformRequest
  ), r.headers = Ue.merge(
    r.headers.common || {},
    r.headers[r.method] || {},
    r.headers
  ), Ue.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(n) {
      delete r.headers[n];
    }
  );
  var t = r.adapter || nt.adapter;
  return t(r).then(function(n) {
    return te(r), n.data = re.call(
      r,
      n.data,
      n.headers,
      r.transformResponse
    ), n;
  }, function(n) {
    return tt(n) || (te(r), n && n.response && (n.response.data = re.call(
      r,
      n.response.data,
      n.response.headers,
      r.transformResponse
    ))), Promise.reject(n);
  });
}, E = v, rr = function(r, t) {
  t = t || {};
  var i = {};
  function n(l, h) {
    return E.isPlainObject(l) && E.isPlainObject(h) ? E.merge(l, h) : E.isPlainObject(h) ? E.merge({}, h) : E.isArray(h) ? h.slice() : h;
  }
  function a(l) {
    if (E.isUndefined(t[l])) {
      if (!E.isUndefined(r[l]))
        return n(void 0, r[l]);
    } else
      return n(r[l], t[l]);
  }
  function s(l) {
    if (!E.isUndefined(t[l]))
      return n(void 0, t[l]);
  }
  function o(l) {
    if (E.isUndefined(t[l])) {
      if (!E.isUndefined(r[l]))
        return n(void 0, r[l]);
    } else
      return n(void 0, t[l]);
  }
  function f(l) {
    if (l in t)
      return n(r[l], t[l]);
    if (l in r)
      return n(void 0, r[l]);
  }
  var d = {
    url: s,
    method: s,
    data: s,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: f
  };
  return E.forEach(Object.keys(r).concat(Object.keys(t)), function(h) {
    var u = d[h] || a, y = u(h);
    E.isUndefined(y) && u !== f || (i[h] = y);
  }), i;
}, ne, qe;
function tr() {
  return qe || (qe = 1, ne = {
    version: "0.27.2"
  }), ne;
}
var st = tr().version, b = B, ve = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, r) {
  ve[e] = function(i) {
    return typeof i === e || "a" + (r < 1 ? "n " : " ") + e;
  };
});
var Le = {};
ve.transitional = function(r, t, i) {
  function n(a, s) {
    return "[Axios v" + st + "] Transitional option '" + a + "'" + s + (i ? ". " + i : "");
  }
  return function(a, s, o) {
    if (r === !1)
      throw new b(
        n(s, " has been removed" + (t ? " in " + t : "")),
        b.ERR_DEPRECATED
      );
    return t && !Le[s] && (Le[s] = !0, console.warn(
      n(
        s,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), r ? r(a, s, o) : !0;
  };
};
function ot(e, r, t) {
  if (typeof e != "object")
    throw new b("options must be an object", b.ERR_BAD_OPTION_VALUE);
  for (var i = Object.keys(e), n = i.length; n-- > 0; ) {
    var a = i[n], s = r[a];
    if (s) {
      var o = e[a], f = o === void 0 || s(o, a, e);
      if (f !== !0)
        throw new b("option " + a + " must be " + f, b.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new b("Unknown option " + a, b.ERR_BAD_OPTION);
  }
}
var ut = {
  assertOptions: ot,
  validators: ve
}, nr = v, ft = Ve, Fe = Ur, $e = at, M = rr, ct = Ze, ir = ut, P = ir.validators;
function N(e) {
  this.defaults = e, this.interceptors = {
    request: new Fe(),
    response: new Fe()
  };
}
N.prototype.request = function(r, t) {
  typeof r == "string" ? (t = t || {}, t.url = r) : t = r || {}, t = M(this.defaults, t), t.method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get";
  var i = t.transitional;
  i !== void 0 && ir.assertOptions(i, {
    silentJSONParsing: P.transitional(P.boolean),
    forcedJSONParsing: P.transitional(P.boolean),
    clarifyTimeoutError: P.transitional(P.boolean)
  }, !1);
  var n = [], a = !0;
  this.interceptors.request.forEach(function(y) {
    typeof y.runWhen == "function" && y.runWhen(t) === !1 || (a = a && y.synchronous, n.unshift(y.fulfilled, y.rejected));
  });
  var s = [];
  this.interceptors.response.forEach(function(y) {
    s.push(y.fulfilled, y.rejected);
  });
  var o;
  if (!a) {
    var f = [$e, void 0];
    for (Array.prototype.unshift.apply(f, n), f = f.concat(s), o = Promise.resolve(t); f.length; )
      o = o.then(f.shift(), f.shift());
    return o;
  }
  for (var d = t; n.length; ) {
    var l = n.shift(), h = n.shift();
    try {
      d = l(d);
    } catch (u) {
      h(u);
      break;
    }
  }
  try {
    o = $e(d);
  } catch (u) {
    return Promise.reject(u);
  }
  for (; s.length; )
    o = o.then(s.shift(), s.shift());
  return o;
};
N.prototype.getUri = function(r) {
  r = M(this.defaults, r);
  var t = ct(r.baseURL, r.url);
  return ft(t, r.params, r.paramsSerializer);
};
nr.forEach(["delete", "get", "head", "options"], function(r) {
  N.prototype[r] = function(t, i) {
    return this.request(M(i || {}, {
      method: r,
      url: t,
      data: (i || {}).data
    }));
  };
});
nr.forEach(["post", "put", "patch"], function(r) {
  function t(i) {
    return function(a, s, o) {
      return this.request(M(o || {}, {
        method: r,
        headers: i ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: s
      }));
    };
  }
  N.prototype[r] = t(), N.prototype[r + "Form"] = t(!0);
});
var lt = N, ie, Ie;
function dt() {
  if (Ie)
    return ie;
  Ie = 1;
  var e = j();
  function r(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    var i;
    this.promise = new Promise(function(s) {
      i = s;
    });
    var n = this;
    this.promise.then(function(a) {
      if (n._listeners) {
        var s, o = n._listeners.length;
        for (s = 0; s < o; s++)
          n._listeners[s](a);
        n._listeners = null;
      }
    }), this.promise.then = function(a) {
      var s, o = new Promise(function(f) {
        n.subscribe(f), s = f;
      }).then(a);
      return o.cancel = function() {
        n.unsubscribe(s);
      }, o;
    }, t(function(s) {
      n.reason || (n.reason = new e(s), i(n.reason));
    });
  }
  return r.prototype.throwIfRequested = function() {
    if (this.reason)
      throw this.reason;
  }, r.prototype.subscribe = function(i) {
    if (this.reason) {
      i(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(i) : this._listeners = [i];
  }, r.prototype.unsubscribe = function(i) {
    if (this._listeners) {
      var n = this._listeners.indexOf(i);
      n !== -1 && this._listeners.splice(n, 1);
    }
  }, r.source = function() {
    var i, n = new r(function(s) {
      i = s;
    });
    return {
      token: n,
      cancel: i
    };
  }, ie = r, ie;
}
var ae, je;
function ht() {
  return je || (je = 1, ae = function(r) {
    return function(i) {
      return r.apply(null, i);
    };
  }), ae;
}
var se, ke;
function pt() {
  if (ke)
    return se;
  ke = 1;
  var e = v;
  return se = function(t) {
    return e.isObject(t) && t.isAxiosError === !0;
  }, se;
}
var Me = v, vt = We, F = lt, mt = rr, Et = pe;
function ar(e) {
  var r = new F(e), t = vt(F.prototype.request, r);
  return Me.extend(t, F.prototype, r), Me.extend(t, r), t.create = function(n) {
    return ar(mt(e, n));
  }, t;
}
var m = ar(Et);
m.Axios = F;
m.CanceledError = j();
m.CancelToken = dt();
m.isCancel = er();
m.VERSION = tr().version;
m.toFormData = Ye;
m.AxiosError = B;
m.Cancel = m.CanceledError;
m.all = function(r) {
  return Promise.all(r);
};
m.spread = ht();
m.isAxiosError = pt();
ue.exports = m;
ue.exports.default = m;
var yt = ue.exports, Rt = yt;
const me = /* @__PURE__ */ lr(Rt), wt = "https://arweave.net/", _ = 256 * 1024, He = {
  KB: _ / _,
  // rounded to min storage size
  MB: 1048576 / _,
  GB: 1073741824 / _,
  TB: 1099511627776 / _,
  PT: 1125899906842624 / _
};
async function bt() {
  try {
    const e = (await me.get("https://api.redstone.finance/prices?symbol=AR&provider=redstone&limit=1")).data[0].value;
    return e || await Ot();
  } catch (e) {
    console.log(`${e.name} : ${e.description}`);
  }
}
async function sr(e) {
  try {
    return (await me.get(`${wt}/price/${e}`)).data;
  } catch (r) {
    console.log(r);
  }
}
async function At(e) {
  try {
    const r = [
      "format",
      "id",
      "last_tx",
      "owner",
      "tags",
      "target",
      "quantity",
      "data_size",
      "data",
      "data_root",
      "reward",
      "signature",
      "chunks"
    ];
    for (const t in e)
      if (!r.includes(t))
        throw new Error(
          "ERROR: invalid Arweave Transaction Object Has Been Passed"
        );
    return !0;
  } catch (r) {
    return console.log(r), !1;
  }
}
async function Ot() {
  try {
    const e = (await me.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=arweave&vs_currencies=usd"
    )).data;
    if (e.arweave)
      return e.arweave.usd;
    throw new Error("Error fetching AR price from coingecko");
  } catch (e) {
    console.log(e);
  }
}
async function Ct({ txObj: e = { data_size: 0, reward: 0 }, feeMultiplier: r = 1 }) {
  try {
    await At(e);
    const t = Number(e.data_size), i = Number(e.reward), n = await sr(t);
    return {
      txByteSize: t,
      theoreticalWinstonReward: n,
      actualWinstonReward: i,
      actualFeeMultiplier: i / n,
      testedAgainstMultiplier: r,
      isEqual: i / n === r
    };
  } catch (t) {
    console.log(t);
  }
  return e;
}
async function St() {
  const e = { winston: 0, ar: 0, usd: 0 }, r = { KB: e, MB: e, GB: e, TB: e, PT: e };
  try {
    const t = await sr(262144), i = await bt();
    for (const n in He) {
      const a = t * He[n];
      r[n] = {
        winston: a,
        ar: a * 1e-12,
        usd: a * 1e-12 * i
      };
    }
  } catch (t) {
    console.log(t);
  }
  return r;
}
async function Tt() {
  try {
    return {};
  } catch (e) {
    return console.log(e), {};
  }
}
async function xt(e) {
  try {
    if (!e || !Number.isInteger(e) || e <= 0)
      return 0;
    const t = (await St()).MB.winston;
    return e / t;
  } catch {
    return 0;
  }
}
export {
  xt as canUploadUpTo,
  Tt as canUserUpload,
  Ct as checkFeeMultiplier,
  St as storageCostTable
};
