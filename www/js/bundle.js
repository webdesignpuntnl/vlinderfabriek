!function(e) {
    function t(o) {
        if (n[o]) return n[o].exports;
        var r = n[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, t), r.l = !0, r.exports;
    }
    var n = {};
    t.m = e, t.c = n, t.d = function(e, n, o) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: o
        });
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return t.d(n, "a", n), n;
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, t.p = "", t(t.s = 0);
}([ function(e, t, n) {
    "use strict";
    n(1), n(3), n(4), n(5);
}, function(e, t, n) {
    "use strict";
    n(2), window.noat || (window.noat = {}), window.noat.cookieConsent = {
        text: "Deze site maakt gebruik van Cookies!",
        privacyPolicyText: "Lees hier onze privacy verklaring",
        privacyPolicyUrl: "../pages/privacy.html",
        denyText: "Weigeren",
        allowText: "Accepteren"
    };
}, function(e, t) {
    !function(e) {
        function t(o) {
            if (n[o]) return n[o].exports;
            var r = n[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return e[o].call(r.exports, r, r.exports, t), r.l = !0, r.exports;
        }
        var n = {};
        t.m = e, t.c = n, t.d = function(e, n, o) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: o
            });
        }, t.r = function(e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default;
            } : function() {
                return e;
            };
            return t.d(n, "a", n), n;
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }, t.p = "", t(t.s = 3);
    }([ function(e, t, n) {
        "use strict";
        function o(e, t) {
            var n, o, r, i, a = T;
            for (i = arguments.length; i-- > 2; ) N.push(arguments[i]);
            for (t && null != t.children && (N.length || N.push(t.children), delete t.children); N.length; ) if ((o = N.pop()) && void 0 !== o.pop) for (i = o.length; i--; ) N.push(o[i]); else "boolean" == typeof o && (o = null), 
            (r = "function" != typeof e) && (null == o ? o = "" : "number" == typeof o ? o = String(o) : "string" != typeof o && (r = !1)), 
            r && n ? a[a.length - 1] += o : a === T ? a = [ o ] : a.push(o), n = r;
            var l = new function() {}();
            return l.nodeName = e, l.children = a, l.attributes = null == t ? void 0 : t, l.key = null == t ? void 0 : t.key, 
            void 0 !== S.vnode && S.vnode(l), l;
        }
        function r(e, t) {
            for (var n in t) e[n] = t[n];
            return e;
        }
        function i(e, t) {
            return o(e.nodeName, r(r({}, e.attributes), t), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children);
        }
        function a(e) {
            !e._dirty && (e._dirty = !0) && 1 == U.push(e) && (S.debounceRendering || E)(l);
        }
        function l() {
            var e, t = U;
            for (U = []; e = t.pop(); ) e._dirty && g(e);
        }
        function s(e, t) {
            return e.normalizedNodeName === t || e.nodeName.toLowerCase() === t.toLowerCase();
        }
        function c(e) {
            var t = r({}, e.attributes);
            t.children = e.children;
            var n = e.nodeName.defaultProps;
            if (void 0 !== n) for (var o in n) void 0 === t[o] && (t[o] = n[o]);
            return t;
        }
        function u(e) {
            var t = e.parentNode;
            t && t.removeChild(e);
        }
        function p(e, t, n, o, r) {
            if ("className" === t && (t = "class"), "key" === t) ; else if ("ref" === t) n && n(null), 
            o && o(e); else if ("class" !== t || r) if ("style" === t) {
                if (o && "string" != typeof o && "string" != typeof n || (e.style.cssText = o || ""), 
                o && "object" == typeof o) {
                    if ("string" != typeof n) for (var i in n) i in o || (e.style[i] = "");
                    for (var i in o) e.style[i] = "number" == typeof o[i] && !1 === P.test(i) ? o[i] + "px" : o[i];
                }
            } else if ("dangerouslySetInnerHTML" === t) o && (e.innerHTML = o.__html || ""); else if ("o" == t[0] && "n" == t[1]) {
                var a = t !== (t = t.replace(/Capture$/, ""));
                t = t.toLowerCase().substring(2), o ? n || e.addEventListener(t, f, a) : e.removeEventListener(t, f, a), 
                (e._listeners || (e._listeners = {}))[t] = o;
            } else if ("list" !== t && "type" !== t && !r && t in e) !function(e, t, n) {
                try {
                    e[t] = n;
                } catch (e) {}
            }(e, t, null == o ? "" : o), null != o && !1 !== o || e.removeAttribute(t); else {
                var l = r && t !== (t = t.replace(/^xlink:?/, ""));
                null == o || !1 === o ? l ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof o && (l ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), o) : e.setAttribute(t, o));
            } else e.className = o || "";
        }
        function f(e) {
            return this._listeners[e.type](S.event && S.event(e) || e);
        }
        function d() {
            for (var e; e = L.pop(); ) S.afterMount && S.afterMount(e), e.componentDidMount && e.componentDidMount();
        }
        function m(e, t, n, o, r, i) {
            A++ || (O = null != r && void 0 !== r.ownerSVGElement, j = null != e && !("__preactattr_" in e));
            var a = v(e, t, n, o, i);
            return r && a.parentNode !== r && r.appendChild(a), --A || (j = !1, i || d()), a;
        }
        function v(e, t, n, o, r) {
            var i = e, a = O;
            if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), 
            e && (e.parentNode && e.parentNode.replaceChild(i, e), h(e, !0))), i.__preactattr_ = !0, 
            i;
            var l, f, d = t.nodeName;
            if ("function" == typeof d) return function(e, t, n, o) {
                for (var r = e && e._component, i = r, a = e, l = r && e._componentConstructor === t.nodeName, s = l, u = c(t); r && !s && (r = r._parentComponent); ) s = r.constructor === t.nodeName;
                return r && s && (!o || r._component) ? (b(r, u, 3, n, o), e = r.base) : (i && !l && (x(i), 
                e = a = null), r = _(t.nodeName, u, n), e && !r.nextBase && (r.nextBase = e, a = null), 
                b(r, u, 1, n, o), e = r.base, a && e !== a && (a._component = null, h(a, !1))), 
                e;
            }(e, t, n, o);
            if (O = "svg" === d || "foreignObject" !== d && O, d = String(d), (!e || !s(e, d)) && (l = d, 
            (f = O ? document.createElementNS("http://www.w3.org/2000/svg", l) : document.createElement(l)).normalizedNodeName = l, 
            i = f, e)) {
                for (;e.firstChild; ) i.appendChild(e.firstChild);
                e.parentNode && e.parentNode.replaceChild(i, e), h(e, !0);
            }
            var m = i.firstChild, y = i.__preactattr_, w = t.children;
            if (null == y) {
                y = i.__preactattr_ = {};
                for (var g = i.attributes, k = g.length; k--; ) y[g[k].name] = g[k].value;
            }
            return !j && w && 1 === w.length && "string" == typeof w[0] && null != m && void 0 !== m.splitText && null == m.nextSibling ? m.nodeValue != w[0] && (m.nodeValue = w[0]) : (w && w.length || null != m) && function(e, t, n, o, r) {
                var i, a, l, c, p, f = e.childNodes, d = [], m = {}, y = 0, _ = 0, w = f.length, b = 0, g = t ? t.length : 0;
                if (0 !== w) for (var x = 0; x < w; x++) {
                    var k = f[x], C = k.__preactattr_, S = g && C ? k._component ? k._component.__key : C.key : null;
                    null != S ? (y++, m[S] = k) : (C || (void 0 !== k.splitText ? !r || k.nodeValue.trim() : r)) && (d[b++] = k);
                }
                if (0 !== g) for (var x = 0; x < g; x++) {
                    c = t[x], p = null;
                    var S = c.key;
                    if (null != S) y && void 0 !== m[S] && (p = m[S], m[S] = void 0, y--); else if (!p && _ < b) for (i = _; i < b; i++) if (void 0 !== d[i] && (N = a = d[i], 
                    E = r, "string" == typeof (T = c) || "number" == typeof T ? void 0 !== N.splitText : "string" == typeof T.nodeName ? !N._componentConstructor && s(N, T.nodeName) : E || N._componentConstructor === T.nodeName)) {
                        p = a, d[i] = void 0, i === b - 1 && b--, i === _ && _++;
                        break;
                    }
                    p = v(p, c, n, o), l = f[x], p && p !== e && p !== l && (null == l ? e.appendChild(p) : p === l.nextSibling ? u(l) : e.insertBefore(p, l));
                }
                var N, T, E;
                if (y) for (var x in m) void 0 !== m[x] && h(m[x], !1);
                for (;_ <= b; ) void 0 !== (p = d[b--]) && h(p, !1);
            }(i, w, n, o, j || null != y.dangerouslySetInnerHTML), function(e, t, n) {
                var o;
                for (o in n) t && null != t[o] || null == n[o] || p(e, o, n[o], n[o] = void 0, O);
                for (o in t) "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || p(e, o, n[o], n[o] = t[o], O);
            }(i, t.attributes, y), O = a, i;
        }
        function h(e, t) {
            var n = e._component;
            n ? x(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), 
            !1 !== t && null != e.__preactattr_ || u(e), y(e));
        }
        function y(e) {
            for (e = e.lastChild; e; ) {
                var t = e.previousSibling;
                h(e, !0), e = t;
            }
        }
        function _(e, t, n) {
            var o, r = M[e.name];
            if (e.prototype && e.prototype.render ? (o = new e(t, n), k.call(o, t, n)) : ((o = new k(t, n)).constructor = e, 
            o.render = w), r) for (var i = r.length; i--; ) if (r[i].constructor === e) {
                o.nextBase = r[i].nextBase, r.splice(i, 1);
                break;
            }
            return o;
        }
        function w(e, t, n) {
            return this.constructor(e, n);
        }
        function b(e, t, n, o, r) {
            e._disable || (e._disable = !0, (e.__ref = t.ref) && delete t.ref, (e.__key = t.key) && delete t.key, 
            !e.base || r ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, o), 
            o && o !== e.context && (e.prevContext || (e.prevContext = e.context), e.context = o), 
            e.prevProps || (e.prevProps = e.props), e.props = t, e._disable = !1, 0 !== n && (1 !== n && !1 === S.syncComponentUpdates && e.base ? a(e) : g(e, 1, r)), 
            e.__ref && e.__ref(e));
        }
        function g(e, t, n, o) {
            if (!e._disable) {
                var i, a, l, s = e.props, u = e.state, p = e.context, f = e.prevProps || s, v = e.prevState || u, y = e.prevContext || p, w = e.base, k = e.nextBase, C = w || k, N = e._component, T = !1;
                if (w && (e.props = f, e.state = v, e.context = y, 2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(s, u, p) ? T = !0 : e.componentWillUpdate && e.componentWillUpdate(s, u, p), 
                e.props = s, e.state = u, e.context = p), e.prevProps = e.prevState = e.prevContext = e.nextBase = null, 
                e._dirty = !1, !T) {
                    i = e.render(s, u, p), e.getChildContext && (p = r(r({}, p), e.getChildContext()));
                    var E, P, U = i && i.nodeName;
                    if ("function" == typeof U) {
                        var O = c(i);
                        (a = N) && a.constructor === U && O.key == a.__key ? b(a, O, 1, p, !1) : (E = a, 
                        e._component = a = _(U, O, p), a.nextBase = a.nextBase || k, a._parentComponent = e, 
                        b(a, O, 0, p, !1), g(a, 1, n, !0)), P = a.base;
                    } else l = C, (E = N) && (l = e._component = null), (C || 1 === t) && (l && (l._component = null), 
                    P = m(l, i, p, n || !w, C && C.parentNode, !0));
                    if (C && P !== C && a !== N) {
                        var j = C.parentNode;
                        j && P !== j && (j.replaceChild(P, C), E || (C._component = null, h(C, !1)));
                    }
                    if (E && x(E), e.base = P, P && !o) {
                        for (var M = e, D = e; D = D._parentComponent; ) (M = D).base = P;
                        P._component = M, P._componentConstructor = M.constructor;
                    }
                }
                if (!w || n ? L.unshift(e) : T || (e.componentDidUpdate && e.componentDidUpdate(f, v, y), 
                S.afterUpdate && S.afterUpdate(e)), null != e._renderCallbacks) for (;e._renderCallbacks.length; ) e._renderCallbacks.pop().call(e);
                A || o || d();
            }
        }
        function x(e) {
            S.beforeUnmount && S.beforeUnmount(e);
            var t = e.base;
            e._disable = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;
            var n = e._component;
            n ? x(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), 
            e.nextBase = t, u(t), function(e) {
                var t = e.constructor.name;
                (M[t] || (M[t] = [])).push(e);
            }(e), y(t)), e.__ref && e.__ref(null);
        }
        function k(e, t) {
            this._dirty = !0, this.context = t, this.props = e, this.state = this.state || {};
        }
        function C(e, t, n) {
            return m(n, e, {}, !1, t, !1);
        }
        n.r(t), n.d(t, "h", function() {
            return o;
        }), n.d(t, "createElement", function() {
            return o;
        }), n.d(t, "cloneElement", function() {
            return i;
        }), n.d(t, "Component", function() {
            return k;
        }), n.d(t, "render", function() {
            return C;
        }), n.d(t, "rerender", function() {
            return l;
        }), n.d(t, "options", function() {
            return S;
        });
        var S = {}, N = [], T = [], E = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout, P = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i, U = [], L = [], A = 0, O = !1, j = !1, M = {};
        r(k.prototype, {
            setState: function(e, t) {
                var n = this.state;
                this.prevState || (this.prevState = r({}, n)), r(n, "function" == typeof e ? e(n, this.props) : e), 
                t && (this._renderCallbacks = this._renderCallbacks || []).push(t), a(this);
            },
            forceUpdate: function(e) {
                e && (this._renderCallbacks = this._renderCallbacks || []).push(e), g(this, 2);
            },
            render: function() {}
        });
        var D = {
            h: o,
            createElement: o,
            cloneElement: i,
            Component: k,
            render: C,
            rerender: l,
            options: S
        };
        t.default = D;
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var o = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
        }, r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                    Object.defineProperty(e, o.key, o);
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t;
            };
        }(), i = n(0), a = function(e) {
            function t() {
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, t);
                var n = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t;
                }(this, e.call(this, window));
                return n.state = {
                    answered: !1
                }, n.handleAllow = n.handleAllow.bind(n), n.handleDeny = n.handleDeny.bind(n), n;
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
            }(t, e), t.prototype.handleAllow = function() {
                var e = new Date();
                e.setDate(e.getDate() + 30), document.cookie = "cookieconsent_status=allow; expires=" + e.toUTCString(), 
                this.setState({
                    answered: !0
                });
            }, t.prototype.handleDeny = function() {
                document.cookie = "cookieconsent_status=deny", this.setState({
                    answered: !0
                });
            }, t.prototype.render = function() {
                var e = window.noat && window.noat.cookieConsent && window.noat.cookieConsent.useCustomCSS ? {} : null, t = window.innerWidth < 640;
                return (0, i.h)("div", {
                    className: "noat-cookie__consent",
                    style: e || o({
                        position: "fixed",
                        zIndex: 2147483647,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        transition: "transform .3s ease-out",
                        transform: "translateY(" + (this.state.answered ? "100%" : "0") + ")"
                    }, {})
                }, (0, i.h)("div", {
                    className: "noat-cookie-consent__banner",
                    style: e || o({
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "1em",
                        fontFamily: "Sans-Serif",
                        background: "rgba(0,0,0,.8)",
                        color: " #fafafa"
                    }, t ? {
                        flexFlow: "column"
                    } : {})
                }, (0, i.h)("span", {
                    className: "noat-cookie-consent-banner__text",
                    style: e || o({
                        alignSelf: "center"
                    }, {})
                }, this.text), (0, i.h)("span", {
                    className: "noat-cookie-consent-banner__other-actions",
                    style: e || o({
                        flexGrow: 1,
                        padding: "0 2em",
                        display: "flex",
                        flexFlow: "column",
                        justifyContent: "center",
                        whiteSpace: "nowrap",
                        opacity: .8,
                        fontSize: "75%"
                    }, t ? {
                        padding: "1em 0"
                    } : {})
                }, (0, i.h)("a", {
                    className: "noat-cookie-consent-banner-other-actions__privacy-policy",
                    style: e || o({
                        color: "inherit"
                    }, {}),
                    target: "newPricayPolicy",
                    href: this.privacyPolicyUrl
                }, this.privacyPolicyText), (0, i.h)("a", {
                    className: "noat-cookie-consent-banner-other-actions__deny",
                    style: e || o({
                        color: "inherit"
                    }, {}),
                    href: "#",
                    onClick: this.handleDeny
                }, this.denyText)), (0, i.h)("span", {
                    className: "noat-cookie-consent-banner__allow",
                    style: e || o({
                        display: "flex",
                        alignItems: "center",
                        alignSelf: "center",
                        maxHeight: "5em",
                        minHeight: "5em",
                        padding: "0 2em",
                        background: "#38e",
                        borderRadius: "4px",
                        textTransform: "uppercase",
                        cursor: "pointer"
                    }, t ? {
                        justifyContent: "center",
                        alignSelf: "auto"
                    } : {}),
                    onClick: this.handleAllow
                }, this.allowText)));
            }, r(t, [ {
                key: "text",
                get: function() {
                    return window.noat && window.noat.cookieConsent && window.noat.cookieConsent.text || "This website is using Cookies to improve your browsing experience.";
                }
            }, {
                key: "privacyPolicyText",
                get: function() {
                    return window.noat && window.noat.cookieConsent && window.noat.cookieConsent.privacyPolicyText || "Cookie Policy";
                }
            }, {
                key: "privacyPolicyUrl",
                get: function() {
                    return window.noat && window.noat.cookieConsent && window.noat.cookieConsent.privacyPolicyUrl || "/disclaimer";
                }
            }, {
                key: "denyText",
                get: function() {
                    return window.noat && window.noat.cookieConsent && window.noat.cookieConsent.denyText || "Disable Cookies";
                }
            }, {
                key: "allowText",
                get: function() {
                    return window.noat && window.noat.cookieConsent && window.noat.cookieConsent.allowText || "Accept";
                }
            } ]), t;
        }(i.Component);
        t.default = a;
    }, function(e, t, n) {
        "use strict";
        function o(e, t) {
            try {
                return t(e);
            } catch (t) {
                return e;
            }
        }
        t.parse = function(e, t) {
            if ("string" != typeof e) throw new TypeError("argument str must be a string");
            for (var n = {}, i = t || {}, l = e.split(a), s = i.decode || r, c = 0; c < l.length; c++) {
                var u = l[c], p = u.indexOf("=");
                if (!(p < 0)) {
                    var f = u.substr(0, p).trim(), d = u.substr(++p, u.length).trim();
                    '"' == d[0] && (d = d.slice(1, -1)), void 0 == n[f] && (n[f] = o(d, s));
                }
            }
            return n;
        }, t.serialize = function(e, t, n) {
            var o = n || {}, r = o.encode || i;
            if ("function" != typeof r) throw new TypeError("option encode is invalid");
            if (!l.test(e)) throw new TypeError("argument name is invalid");
            var a = r(t);
            if (a && !l.test(a)) throw new TypeError("argument val is invalid");
            var s = e + "=" + a;
            if (null != o.maxAge) {
                var c = o.maxAge - 0;
                if (isNaN(c)) throw new Error("maxAge should be a Number");
                s += "; Max-Age=" + Math.floor(c);
            }
            if (o.domain) {
                if (!l.test(o.domain)) throw new TypeError("option domain is invalid");
                s += "; Domain=" + o.domain;
            }
            if (o.path) {
                if (!l.test(o.path)) throw new TypeError("option path is invalid");
                s += "; Path=" + o.path;
            }
            if (o.expires) {
                if ("function" != typeof o.expires.toUTCString) throw new TypeError("option expires is invalid");
                s += "; Expires=" + o.expires.toUTCString();
            }
            if (o.httpOnly && (s += "; HttpOnly"), o.secure && (s += "; Secure"), o.sameSite) {
                switch ("string" == typeof o.sameSite ? o.sameSite.toLowerCase() : o.sameSite) {
                  case !0:
                    s += "; SameSite=Strict";
                    break;

                  case "lax":
                    s += "; SameSite=Lax";
                    break;

                  case "strict":
                    s += "; SameSite=Strict";
                    break;

                  default:
                    throw new TypeError("option sameSite is invalid");
                }
            }
            return s;
        };
        var r = decodeURIComponent, i = encodeURIComponent, a = /; */, l = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    }, function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        var r = n(0), i = o(n(2)), a = o(n(1));
        window.addEventListener("load", function() {
            var e = i.default.parse(document.cookie), t = window.document.getElementById("noat-cookie-consent__setup") || window.document.querySelector(".noat-cookie-consent__setup");
            t && t.addEventListener("click", function(e) {
                e.stopPropagation(), (0, r.render)((0, r.h)(a.default, null), document.body);
            }), e.cookieconsent_status || (0, r.render)((0, r.h)(a.default, null), document.body);
        });
    } ]);
}, function(e, t, n) {
    "use strict";
    window.onload = function() {
        var e = [], t = document.querySelector("#index"), n = [ "vlinder-blauw.png", "vlinder-groen.png", "vlinder-oranje.png", "vlinder-rood.png", "fabriek-oranje.svg", "fabriek-groen.svg", "fabriek-rood.svg", "logo-facebook-normal.svg", "logo-facebook-state.svg" ];
        n.map(function(o, r) {
            t ? (e[r] = new Image(), e[r].src = "media/images/" + n[r]) : (e[r] = new Image(), 
            e[r].src = "../media/images/" + n[r]);
        });
    };
}, function(e, t, n) {
    "use strict";
    function o(e) {
        var t = this.querySelector("img"), n = this.querySelector("a"), o = t.src;
        if (!n.hasAttribute("class")) if ("mouseover" === e.type) {
            var r = o.replace("-outline", "");
            t.src = r;
        } else {
            var i = o.replace(".png", "-outline.png");
            t.src = i;
        }
    }
    function r(e) {
        if ("mouseover" === e.type) {
            var t = l.replace("-normal", "-state");
            a.src = t;
        } else {
            var n = l.replace("-state", "-normal");
            a.src = n;
        }
    }
    var i = Array.from(document.querySelectorAll(".butterflys li")), a = document.querySelector(".footer__link__facebookLogo"), l = a.src;
    i.forEach(function(e) {
        return e.addEventListener("mouseover", o);
    }), i.forEach(function(e) {
        return e.addEventListener("mouseout", o);
    }), a.addEventListener("mouseover", r), a.addEventListener("mouseout", r);
}, function(e, t, n) {
    "use strict";
    function o(e) {
        i.setAttribute("class", "openSubmenu");
    }
    var r = document.querySelectorAll(".buttons"), i = document.querySelectorAll(".buttons__second-level");
    console.log(i), r.forEach(function(e) {
        return e.addEventListener("click", o);
    });
} ]);
//# sourceMappingURL=bundle.js.map