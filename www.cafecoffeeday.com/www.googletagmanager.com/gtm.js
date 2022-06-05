// Copyright 2012 Google Inc. All rights reserved.
(function() {

    var data = {
        "resource": {
            "version": "1",

            "macros": [{
                "function": "__u",
                "vtp_component": "URL",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "HOST",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "PATH",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__f",
                "vtp_component": "URL"
            }, {
                "function": "__e"
            }],
            "tags": [],
            "predicates": [],
            "rules": []
        },
        "runtime": []




    };


    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var h, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ba = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ca;
    if ("function" == typeof Object.setPrototypeOf) ca = Object.setPrototypeOf;
    else {
        var da;
        a: {
            var ea = {
                    a: !0
                },
                fa = {};
            try {
                fa.__proto__ = ea;
                da = fa.a;
                break a
            } catch (a) {}
            da = !1
        }
        ca = da ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ha = ca,
        ja = function(a, b) {
            a.prototype = ba(b.prototype);
            a.prototype.constructor = a;
            if (ha) ha(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.lk = b.prototype
        },
        la = this || self,
        ma = function(a) {
            return a
        };
    var na = function() {},
        pa = function(a) {
            return "function" === typeof a
        },
        l = function(a) {
            return "string" === typeof a
        },
        qa = function(a) {
            return "number" === typeof a && !isNaN(a)
        },
        ra = Array.isArray,
        sa = function(a, b) {
            if (a && ra(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        ta = function(a, b) {
            if (!qa(a) || !qa(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        va = function(a, b) {
            for (var c = new ua, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        A = function(a,
            b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        wa = function(a) {
            return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        },
        xa = function(a) {
            return Math.round(Number(a)) || 0
        },
        za = function(a) {
            return "false" === String(a).toLowerCase() ? !1 : !!a
        },
        Aa = function(a) {
            var b = [];
            if (ra(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Ba = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        Ca = function() {
            return new Date(Date.now())
        },
        Da = function() {
            return Ca().getTime()
        },
        ua = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    ua.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    ua.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    var Ea = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        Fa = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c()
                    } catch (d) {}
                }
            }
        },
        Ga = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        Ha = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        Ia = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        },
        Ja = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        La = /^\w{1,9}$/,
        Ma = function(a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            A(a, function(d, e) {
                La.test(d) && e && c.push(d)
            });
            return c.join(b)
        };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var Na, Oa = function() {
        if (void 0 === Na) {
            var a = null,
                b = la.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: ma,
                        createScript: ma,
                        createScriptURL: ma
                    })
                } catch (c) {
                    la.console && la.console.error(c.message)
                }
                Na = a
            } else Na = a
        }
        return Na
    };
    var Qa = function(a, b) {
        this.g = b === Pa ? a : ""
    };
    Qa.prototype.toString = function() {
        return this.g + ""
    };
    var Pa = {};
    var Ra = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function Sa() {
        var a = la.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }

    function Ta(a) {
        return -1 != Sa().indexOf(a)
    };
    var Ua = {},
        Va = function(a, b, c) {
            this.g = c === Ua ? a : ""
        };
    Va.prototype.toString = function() {
        return this.g.toString()
    };
    var Wa = function(a) {
            return a instanceof Va && a.constructor === Va ? a.g : "type_error:SafeHtml"
        },
        Xa = function(a) {
            var b = a,
                c = Oa(),
                d = c ? c.createHTML(b) : b;
            return new Va(d, null, Ua)
        };

    function Ya(a) {
        if ("script" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeScript.");
        if ("style" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeStyleSheet.");
    };
    var G = window,
        H = document,
        Za = navigator,
        $a = H.currentScript && H.currentScript.src,
        ab = function(a, b) {
            var c = G[a];
            G[a] = void 0 === c ? b : c;
            return G[a]
        },
        bb = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        cb = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        db = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function eb(a, b, c) {
        b && A(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var fb = function(a, b, c, d) {
            var e = H.createElement("script");
            eb(e, d, cb);
            e.type = "text/javascript";
            e.async = !0;
            var f, g = a,
                k = Oa(),
                m = k ? k.createScriptURL(g) : g;
            f = new Qa(m, Pa);
            e.src = f instanceof Qa && f.constructor === Qa ? f.g : "type_error:TrustedResourceUrl";
            var n, p, q, r = null == (q = (p = (e.ownerDocument && e.ownerDocument.defaultView || window).document).querySelector) ? void 0 : q.call(p, "script[nonce]");
            (n = r ? r.nonce || r.getAttribute("nonce") || "" : "") && e.setAttribute("nonce", n);
            bb(e, b);
            c && (e.onerror = c);
            var t = H.getElementsByTagName("script")[0] ||
                H.body || H.head;
            t.parentNode.insertBefore(e, t);
            return e
        },
        gb = function() {
            if ($a) {
                var a = $a.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        hb = function(a, b, c, d, e) {
            var f = e,
                g = !1;
            f || (f = H.createElement("iframe"), g = !0);
            eb(f, c, db);
            d && A(d, function(m, n) {
                f.dataset[m] = n
            });
            f.height = "0";
            f.width = "0";
            f.style.display = "none";
            f.style.visibility = "hidden";
            if (g) {
                var k = H.body && H.body.lastChild || H.body || H.head;
                k.parentNode.insertBefore(f, k)
            }
            bb(f, b);
            void 0 !== a && (f.src = a);
            return f
        },
        ib = function(a, b, c) {
            var d = new Image(1, 1);
            d.onload = function() {
                d.onload = null;
                b && b()
            };
            d.onerror = function() {
                d.onerror = null;
                c && c()
            };
            d.src = a;
            return d
        },
        jb = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        kb = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        J = function(a) {
            G.setTimeout(a, 0)
        },
        lb = function(a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        mb = function(a) {
            var b =
                a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        nb = function(a) {
            var b = H.createElement("div"),
                c = b,
                d = Xa("A<div>" + a + "</div>");
            void 0 !== c.tagName && Ya(c);
            c.innerHTML = Wa(d);
            b = b.lastChild;
            for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
            return e
        },
        ob = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, g = 0; f && g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        pb = function(a) {
            var b;
            try {
                b = Za.sendBeacon && Za.sendBeacon(a)
            } catch (c) {}
            b || ib(a)
        },
        qb = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var rb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        sb = function(a) {
            if (null == a) return String(a);
            var b = rb.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        tb = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        ub = function(a) {
            if (!a || "object" != sb(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !tb(a, "constructor") && !tb(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || tb(a, b)
        },
        N = function(a, b) {
            var c = b || ("array" == sb(a) ? [] : {}),
                d;
            for (d in a)
                if (tb(a, d)) {
                    var e = a[d];
                    "array" == sb(e) ? ("array" != sb(c[d]) && (c[d] = []), c[d] = N(e, c[d])) : ub(e) ? (ub(c[d]) || (c[d] = {}), c[d] = N(e, c[d])) : c[d] = e
                }
            return c
        };
    var vb = function(a) {
        if (void 0 === a || ra(a) || ub(a)) return !0;
        switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "function":
                return !0
        }
        return !1
    };
    var wb = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            yh: a("consent"),
            zh: a("consent_always_fire"),
            Cf: a("convert_case_to"),
            Df: a("convert_false_to"),
            Ef: a("convert_null_to"),
            Ff: a("convert_true_to"),
            Gf: a("convert_undefined_to"),
            Uj: a("debug_mode_metadata"),
            ub: a("function"),
            Le: a("instance_name"),
            ji: a("live_only"),
            ki: a("malware_disabled"),
            li: a("metadata"),
            si: a("original_activity_id"),
            bk: a("original_vendor_template_id"),
            Zj: a("once_on_load"),
            ri: a("once_per_event"),
            kg: a("once_per_load"),
            ck: a("priority_override"),
            dk: a("respected_consent_types"),
            qg: a("setup_tags"),
            sg: a("tag_id"),
            ug: a("teardown_tags")
        }
    }();
    var Ub;
    var Vb = [],
        Wb = [],
        Xb = [],
        Yb = [],
        Zb = [],
        $b = {},
        ac, bc, cc, dc = function(a, b) {
            var c = a["function"],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = $b[c],
                f = {},
                g;
            for (g in a)
                if (a.hasOwnProperty(g))
                    if (0 === g.indexOf("vtp_")) e && d && d.Gg && d.Gg(a[g]), f[void 0 !== e ? g : g.substr(4)] = a[g];
                    else if (g === wb.zh.toString() && a[g]) {}
            e && d && d.Fg && (f.vtp_gtmCachedValues = d.Fg);
            if (b) {
                if (null == b.name) {
                    var k;
                    a: {
                        var m = b.index;
                        if (null == m) k = "";
                        else {
                            var n;
                            switch (b.type) {
                                case 2:
                                    n = Vb[m];
                                    break;
                                case 1:
                                    n = Yb[m];
                                    break;
                                default:
                                    k = "";
                                    break a
                            }
                            var p = n && n[wb.Le];
                            k = p ? String(p) : ""
                        }
                    }
                    b.name = k
                }
                e && (f.vtp_gtmEntityIndex = b.index, f.vtp_gtmEntityName = b.name)
            }
            return void 0 !== e ? e(f) : Ub(c, f, b)
        },
        fc = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = ec(a[e], b, c));
            return d
        },
        ec = function(a, b, c) {
            if (ra(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e <
                            a.length; e++) d.push(ec(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = Vb[f];
                        if (!g || b.cf(g)) return;
                        c[f] = !0;
                        var k = String(g[wb.Le]);
                        try {
                            var m = fc(g, b, c);
                            m.vtp_gtmEventId = b.id;
                            b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
                            d = dc(m, {
                                event: b,
                                index: f,
                                type: 2,
                                name: k
                            });
                            cc && (d = cc.Ei(d, m))
                        } catch (w) {
                            b.Yg && b.Yg(w, Number(f), k), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var n = 1; n < a.length; n += 2) d[ec(a[n], b, c)] = ec(a[n + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var p = !1, q = 1; q < a.length; q++) {
                            var r = ec(a[q],
                                b, c);
                            bc && (p = p || r === bc.Ad);
                            d.push(r)
                        }
                        return bc && p ? bc.Ii(d) : d.join("");
                    case "escape":
                        d = ec(a[1], b, c);
                        if (bc && ra(a[1]) && "macro" === a[1][0] && bc.bj(a)) return bc.tj(d);
                        d = String(d);
                        for (var t = 2; t < a.length; t++) xb[a[t]] && (d = xb[a[t]](d));
                        return d;
                    case "tag":
                        var u = a[1];
                        if (!Yb[u]) throw Error("Unable to resolve tag reference " + u + ".");
                        return d = {
                            Ng: a[2],
                            index: u
                        };
                    case "zb":
                        var v = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        v["function"] = a[1];
                        var x = gc(v, b, c),
                            y = !!a[4];
                        return y || 2 !== x ? y !== (1 === x) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " +
                            a[0] + ".");
                }
            }
            return a
        },
        gc = function(a, b, c) {
            try {
                return ac(fc(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return 2
        };
    var lc = function(a) {
            function b(r) {
                for (var t = 0; t < r.length; t++) d[r[t]] = !0
            }
            for (var c = [], d = [], e = jc(a), f = 0; f < Wb.length; f++) {
                var g = Wb[f],
                    k = kc(g, e);
                if (k) {
                    for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
                    b(g.block || [])
                } else null === k && b(g.block || []);
            }
            for (var p = [], q = 0; q < Yb.length; q++) c[q] && !d[q] && (p[q] = !0);
            return p
        },
        kc = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (0 === e) return !1;
                if (2 === e) return null
            }
            for (var f =
                    a.unless || [], g = 0; g < f.length; g++) {
                var k = b(f[g]);
                if (2 === k) return null;
                if (1 === k) return !1
            }
            return !0
        },
        jc = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = gc(Xb[c], a));
                return b[c]
            }
        };
    var mc = {
        Ei: function(a, b) {
            b[wb.Cf] && "string" === typeof a && (a = 1 == b[wb.Cf] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(wb.Ef) && null === a && (a = b[wb.Ef]);
            b.hasOwnProperty(wb.Gf) && void 0 === a && (a = b[wb.Gf]);
            b.hasOwnProperty(wb.Ff) && !0 === a && (a = b[wb.Ff]);
            b.hasOwnProperty(wb.Df) && !1 === a && (a = b[wb.Df]);
            return a
        }
    };

    var Lc = function(a) {
            return Kc ? H.querySelectorAll(a) : null
        },
        Mc = function(a, b) {
            if (!Kc) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!H.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        Nc = !1;
    if (H.querySelectorAll) try {
        var Oc = H.querySelectorAll(":root");
        Oc && 1 == Oc.length && Oc[0] == H.documentElement && (Nc = !0)
    } catch (a) {}
    var Kc = Nc;
    var Pc = {},
        Qc = function(a, b) {
            Pc[a] = Pc[a] || [];
            Pc[a][b] = !0
        },
        Rc = function(a) {
            for (var b = [], c = Pc[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
            for (var e = 0; e < b.length; e++) b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
            return b.join("")
        },
        Sc = function() {
            for (var a = [], b = Pc.GA4_EVENT || [], c = 0; c < b.length; c++) b[c] && a.push(c);
            return 0 < a.length ? a : void 0
        };
    var Q = function(a) {
        Qc("GTM", a)
    };
    var S = {
        Vb: "_ee",
        Ub: "_eu",
        jg: "_is_passthrough_cid",
        ig: "_is_linker_valid",
        Cc: "_ipe",
        Qb: "event_callback",
        nd: "event_timeout",
        za: "gtag.config",
        Ga: "gtag.get",
        xa: "purchase",
        Mb: "refund",
        ob: "begin_checkout",
        Jb: "add_to_cart",
        Kb: "remove_from_cart",
        Ih: "view_cart",
        If: "add_to_wishlist",
        ya: "view_item",
        Lb: "view_promotion",
        ie: "select_promotion",
        he: "select_item",
        pb: "view_item_list",
        Hf: "add_payment_info",
        Hh: "add_shipping_info",
        Ia: "value_key",
        Qa: "value_callback",
        U: "allow_ad_personalization_signals",
        yc: "restricted_data_processing",
        qc: "allow_google_signals",
        na: "cookie_expires",
        rb: "cookie_update",
        zc: "session_duration",
        vd: "session_engaged_time",
        ld: "engagement_time_msec",
        Ka: "user_properties",
        V: "transport_url",
        aa: "ads_data_redaction",
        qa: "user_data",
        vc: "first_party_collection",
        D: "ad_storage",
        M: "analytics_storage",
        Af: "region",
        Bf: "wait_for_update",
        ia: "conversion_linker",
        Aa: "conversion_cookie_prefix",
        da: "value",
        oa: "currency",
        dg: "trip_type",
        W: "items",
        Vf: "passengers",
        cd: "allow_custom_scripts",
        hb: "session_id",
        De: "quantity",
        Sa: "transaction_id",
        Ra: "language",
        Ob: "country",
        dd: "allow_enhanced_conversions",
        qe: "aw_merchant_id",
        oe: "aw_feed_country",
        pe: "aw_feed_language",
        ne: "discount",
        P: "developer_id",
        Sf: "global_developer_id_string",
        Qf: "event_developer_id_string",
        wd: "delivery_postal_code",
        xe: "estimated_delivery_date",
        ve: "shipping",
        Be: "new_customer",
        se: "customer_lifetime_value",
        we: "enhanced_conversions",
        oc: "page_view",
        ka: "linker",
        N: "domains",
        Sb: "decorate_forms",
        Pf: "enhanced_conversions_automatic_settings",
        Ph: "auto_detection_enabled",
        ze: "ga_temp_client_id",
        je: "user_engagement",
        Ch: "app_remove",
        Dh: "app_store_refund",
        Eh: "app_store_subscription_cancel",
        Fh: "app_store_subscription_convert",
        Gh: "app_store_subscription_renew",
        Jh: "first_open",
        Kh: "first_visit",
        Lh: "in_app_purchase",
        Mh: "session_start",
        Nh: "allow_display_features",
        sc: "campaign",
        ed: "campaign_content",
        fd: "campaign_id",
        gd: "campaign_medium",
        hd: "campaign_name",
        jd: "campaign_source",
        kd: "campaign_term",
        ma: "client_id",
        ja: "cookie_domain",
        Nb: "cookie_name",
        Za: "cookie_path",
        Ha: "cookie_flags",
        Pb: "custom_map",
        qd: "groups",
        Uf: "non_interaction",
        eb: "page_location",
        Ce: "page_path",
        fb: "page_referrer",
        sd: "page_title",
        Ca: "send_page_view",
        tb: "send_to",
        Ac: "session_engaged",
        uc: "euid_logged_in_state",
        Bc: "session_number",
        di: "tracking_id",
        Ta: "url_passthrough",
        Rb: "accept_incoming",
        xc: "url_position",
        Yf: "phone_conversion_number",
        Wf: "phone_conversion_callback",
        Xf: "phone_conversion_css_class",
        Zf: "phone_conversion_options",
        Yh: "phone_conversion_ids",
        Xh: "phone_conversion_country_code",
        qb: "aw_remarketing",
        me: "aw_remarketing_only",
        ke: "gclid",
        Oh: "auid",
        Sh: "affiliation",
        Of: "tax",
        ue: "list_name",
        Nf: "checkout_step",
        Mf: "checkout_option",
        Th: "coupon",
        Uh: "promotions",
        Ja: "user_id",
        bi: "retoken",
        Ba: "cookie_prefix",
        Jf: "disable_merchant_reported_purchases",
        Lf: "dc_natural_search",
        Kf: "dc_custom_params",
        Tf: "method",
        ci: "search_term",
        Rh: "content_type",
        Wh: "optimize_id",
        Vh: "experiments",
        cb: "google_signals"
    };
    S.pd = "google_tld";
    S.xd = "update";
    S.ye = "firebase_id";
    S.wc = "ga_restrict_domain";
    S.md = "event_settings";
    S.te = "dynamic_event_settings";
    S.Tb = "user_data_settings";
    S.bg = "screen_name";
    S.Fe = "screen_resolution";
    S.sb = "_x_19";
    S.ab = "enhanced_client_id";
    S.od = "_x_20";
    S.Ae = "internal_traffic_results";
    S.Ge = "traffic_type";
    S.ud = "referral_exclusion_definition";
    S.rd = "ignore_referrer";
    S.Qh = "content_group";
    S.la = "allow_interest_groups";
    S.Vj = "debug_mode";
    S.Ee = "redact_device_info", S.Rf = "geo_granularity";
    var od = {};
    S.gg = Object.freeze((od[S.Hf] = 1, od[S.Hh] = 1, od[S.Jb] = 1, od[S.Kb] = 1, od[S.Ih] = 1, od[S.ob] = 1, od[S.he] = 1, od[S.pb] = 1, od[S.ie] = 1, od[S.Lb] = 1, od[S.xa] = 1, od[S.Mb] = 1, od[S.ya] = 1, od[S.If] = 1, od));
    S.Ie = Object.freeze([S.U, S.qc, S.rb]);
    S.ni = Object.freeze([].concat(S.Ie));
    S.Je = Object.freeze([S.na, S.nd, S.zc, S.vd, S.ld]);
    S.oi = Object.freeze([].concat(S.Je));
    var pd = {};
    S.ee = (pd[S.D] = "1", pd[S.M] = "2", pd);
    var rd = {},
        U = G.google_tag_manager = G.google_tag_manager || {},
        sd = Math.random();
    rd.Gd = "610";
    rd.Z = "dataLayer";
    rd.Bh = "ChEI8KjxlAYQx7SWkqKu1ZHWARIkABJzlGY+zVeslDGmCx5VL2SJyznseLkbjsHlJoqm0Ug4TQShGgLKnA\x3d\x3d";
    var td = {
            __cl: !0,
            __ecl: !0,
            __ehl: !0,
            __evl: !0,
            __fal: !0,
            __fil: !0,
            __fsl: !0,
            __hl: !0,
            __jel: !0,
            __lcl: !0,
            __sdl: !0,
            __tl: !0,
            __ytl: !0
        },
        ud = {
            __paused: !0,
            __tg: !0
        },
        vd;
    for (vd in td) td.hasOwnProperty(vd) && (ud[vd] = !0);
    rd.nc = "www.googletagmanager.com";
    var wd, xd = rd.nc + "/gtm.js";
    wd = xd;
    var yd = za(""),
        zd = za(""),
        Ad = null,
        Bd = null,
        Cd = {},
        Dd = {},
        Ed = function() {
            var a = U.sequence || 1;
            U.sequence = a + 1;
            return a
        };
    rd.Ah = "true";
    var Fd = "";
    rd.Hd = Fd;
    var Hd = new ua,
        Id = {},
        Jd = {},
        Md = {
            name: rd.Z,
            set: function(a, b) {
                N(Ja(a, b), Id);
                Kd()
            },
            get: function(a) {
                return Ld(a, 2)
            },
            reset: function() {
                Hd = new ua;
                Id = {};
                Kd()
            }
        },
        Ld = function(a, b) {
            return 2 != b ? Hd.get(a) : Nd(a)
        },
        Nd = function(a) {
            var b, c = a.split(".");
            b = b || [];
            for (var d = Id, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== b.indexOf(d)) return
            }
            return d
        },
        Od = function(a, b) {
            Jd.hasOwnProperty(a) || (Hd.set(a, b), N(Ja(a, b), Id), Kd())
        },
        Pd = function() {
            delete Id.eventModel;
            Kd()
        },
        Qd = function() {
            for (var a = ["gtm.allowlist",
                    "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"
                ], b = 0; b < a.length; b++) {
                var c = a[b],
                    d = Ld(c, 1);
                if (ra(d) || ub(d)) d = N(d);
                Jd[c] = d
            }
        },
        Kd = function(a) {
            A(Jd, function(b, c) {
                Hd.set(b, c);
                N(Ja(b), Id);
                N(Ja(b, c), Id);
                a && delete Jd[b]
            })
        },
        Rd = function(a, b) {
            var c, d = 1 !== (void 0 === b ? 2 : b) ? Nd(a) : Hd.get(a);
            "array" === sb(d) || "object" === sb(d) ? c = N(d) : c = d;
            return c
        };
    var Sd, Td = !1,
        Ud = function(a) {
            if (!Td) {
                Td = !0;
                Sd = Sd || {}
            }
            return Sd[a]
        };
    var Vd = function(a) {
        if (H.hidden) return !0;
        var b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !G.getComputedStyle) return !0;
        var c = G.getComputedStyle(a, null);
        if ("hidden" === c.visibility) return !0;
        for (var d = a, e = c; d;) {
            if ("none" === e.display) return !0;
            var f = e.opacity,
                g = e.filter;
            if (g) {
                var k = g.indexOf("opacity(");
                0 <= k && (g = g.substring(k + 8, g.indexOf(")", k)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g, f))
            }
            if (void 0 !== f && 0 >= f) return !0;
            (d = d.parentElement) && (e = G.getComputedStyle(d,
                null))
        }
        return !1
    };
    var de = /:[0-9]+$/,
        ee = function(a, b, c) {
            for (var d = a.split("&"), e = 0; e < d.length; e++) {
                var f = d[e].split("=");
                if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
                    var g = f.slice(1).join("=");
                    return c ? g : decodeURIComponent(g).replace(/\+/g, " ")
                }
            }
        },
        he = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = fe(a.protocol) || fe(G.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port : G.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" ===
                b && (a.hostname = (a.hostname || G.location.hostname).replace(de, "").toLowerCase());
            return ge(a, b, c, d, e)
        },
        ge = function(a, b, c, d, e) {
            var f, g = fe(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = ie(a);
                    break;
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = a.hostname.replace(de, "").toLowerCase();
                    if (c) {
                        var k = /^www\d*\./.exec(f);
                        k && k[0] && (f = f.substr(k[0].length))
                    }
                    break;
                case "port":
                    f = String(Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || Qc("TAGGING",
                        1);
                    f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var m = f.split("/");
                    0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
                    f = m.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = ee(f, e));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        fe = function(a) {
            return a ? a.replace(":", "").toLowerCase() : ""
        },
        ie = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        je = function(a) {
            var b = H.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || Qc("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(de, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        },
        ke = function(a) {
            function b(n) {
                var p = n.split("=")[0];
                return 0 > d.indexOf(p) ? n : p + "=0"
            }

            function c(n) {
                return n.split("&").map(b).filter(function(p) {
                    return void 0 !== p
                }).join("&")
            }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = je(a),
                f = a.split(/[?#]/)[0],
                g = e.search,
                k = e.hash;
            "?" === g[0] && (g = g.substring(1));
            "#" === k[0] && (k = k.substring(1));
            g = c(g);
            k = c(k);
            "" !== g && (g = "?" + g);
            "" !== k && (k = "#" + k);
            var m = "" + f + g + k;
            "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
            return m
        };
    var le = {};
    var Ne = {},
        Oe = function(a, b) {
            if (G._gtmexpgrp && G._gtmexpgrp.hasOwnProperty(a)) return G._gtmexpgrp[a];
            void 0 === Ne[a] && (Ne[a] = Math.floor(Math.random() * b));
            return Ne[a]
        };
    var Qe = {
        Hi: "IN",
        Aj: "IN-TG"
    };
    var Re = new function(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);
    var Te = function() {
        var a = Se,
            b = "af";
        if (a.af && a.hasOwnProperty(b)) return a.af;
        var c = new a;
        a.af = c;
        a.hasOwnProperty(b);
        return c
    };
    var Se = function() {
        var a = {};
        this.g = function() {
            var b = Re.g,
                c = Re.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.o = function() {
            a[Re.g] = !0
        }
    };
    var Ue = [];

    function Ve() {
        var a = ab("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            set: We,
            update: Xe,
            addListener: Ye,
            notifyListeners: Ze,
            active: !1,
            usedDefault: !1,
            usedUpdate: !1,
            accessedDefault: !1,
            accessedAny: !1,
            wasSetLate: !1
        });
        return a.ics
    }

    function We(a, b, c, d, e, f) {
        var g = Ve();
        g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var k = g.entries,
                m = k[a] || {},
                n = m.region,
                p = c && l(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var q = !!(f && 0 < f && void 0 === m.update),
                    r = {
                        region: p,
                        initial: "granted" === b,
                        update: m.update,
                        quiet: q
                    };
                if ("" !== d || !1 !== m.initial) k[a] = r;
                q && G.setTimeout(function() {
                    k[a] === r && r.quiet && (r.quiet = !1, $e(a), Ze(), Qc("TAGGING",
                        2))
                }, f)
            }
        }
    }

    function Xe(a, b) {
        var c = Ve();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0;
        if (void 0 != b) {
            var d = af(c, a),
                e = c.entries,
                f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = af(c, a);
            f.quiet ? (f.quiet = !1, $e(a)) : g !== d && $e(a)
        }
    }

    function Ye(a, b) {
        Ue.push({
            Ue: a,
            Pi: b
        })
    }

    function $e(a) {
        for (var b = 0; b < Ue.length; ++b) {
            var c = Ue[b];
            ra(c.Ue) && -1 !== c.Ue.indexOf(a) && (c.eh = !0)
        }
    }

    function Ze(a, b) {
        for (var c = 0; c < Ue.length; ++c) {
            var d = Ue[c];
            if (d.eh) {
                d.eh = !1;
                try {
                    d.Pi({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    }

    function af(a, b) {
        var c = a.entries[b] || {};
        return void 0 !== c.update ? c.update : c.initial
    }
    var bf = function(a) {
            var b = Ve();
            b.accessedAny = !0;
            return af(b, a)
        },
        cf = function(a) {
            var b = Ve();
            b.accessedDefault = !0;
            return (b.entries[a] || {}).initial
        },
        df = function(a) {
            var b = Ve();
            b.accessedAny = !0;
            return !(b.entries[a] || {}).quiet
        },
        ef = function() {
            if (!Te().g()) return !1;
            var a = Ve();
            a.accessedAny = !0;
            return a.active
        },
        ff = function() {
            var a = Ve();
            a.accessedDefault = !0;
            return a.usedDefault
        },
        gf = function(a, b) {
            Ve().addListener(a, b)
        },
        hf = function(a, b) {
            Ve().notifyListeners(a, b)
        },
        jf = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!df(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                gf(b, function(e) {
                    d || c() || (d = !0, a(e))
                })
            } else a({})
        },
        kf = function(a, b) {
            function c() {
                for (var f = [], g = 0; g < d.length; g++) {
                    var k = d[g];
                    !1 === bf(k) || e[k] || (f.push(k), e[k] = !0)
                }
                return f
            }
            var d = l(b) ? [b] : b,
                e = {};
            c().length !== d.length && gf(d, function(f) {
                var g = c();
                0 < g.length && (f.Ue = g, a(f))
            })
        };

    function lf() {}

    function mf() {};

    function nf(a) {
        for (var b = [], c = 0; c < of .length; c++) {
            var d = a( of [c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
        }
        return b.join("")
    }
    var of = [S.D, S.M], pf = function(a) {
            var b = a[S.Af];
            b && Q(40);
            var c = a[S.Bf];
            c && Q(41);
            for (var d = ra(b) ? b : [b], e = {
                    ic: 0
                }; e.ic < d.length; e = {
                    ic: e.ic
                }, ++e.ic) A(a, function(f) {
                return function(g, k) {
                    if (g !== S.Af && g !== S.Bf) {
                        var m = d[f.ic],
                            n = Qe.Hi,
                            p = Qe.Aj;
                        Ve().set(g, k, m, n, p, c)
                    }
                }
            }(e))
        }, qf = 0, rf = function(a, b) {
            A(a, function(e, f) {
                Ve().update(e, f)
            });
            hf(b.eventId, b.priorityId);
            var c = Da(),
                d = c - qf;
            qf && 0 <= d && 1E3 > d && Q(66);
            qf = c
        }, sf = function(a) {
            var b = bf(a);
            return void 0 != b ? b : !0
        }, tf = function() {
            return "G1" + nf(bf)
        }, uf = function(a, b) {
            kf(a, b)
        },
        vf = function(a, b) {
            jf(a, b)
        };
    var wf = function(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b;
        return b
    };
    var xf = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="),
                k = g[0].replace(/^\s*|\s*$/g, "");
            if (k && k == a) {
                var m = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                m && c && (m = decodeURIComponent(m));
                d.push(m)
            }
        }
        return d
    };
    var yf = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        zf = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };

    function Af(a) {
        return "null" !== a.origin
    };
    var Df = function(a, b, c, d) {
            return Bf(d) ? xf(a, String(b || Cf()), c) : []
        },
        Gf = function(a, b, c, d, e) {
            if (Bf(e)) {
                var f = Ef(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = Ff(f, function(g) {
                        return g.Pd
                    }, b);
                    if (1 === f.length) return f[0].id;
                    f = Ff(f, function(g) {
                        return g.Pc
                    }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };

    function Hf(a, b, c, d) {
        var e = Cf(),
            f = window;
        Af(f) && (f.document.cookie = a);
        var g = Cf();
        return e != g || void 0 != c && 0 <= Df(b, g, !1, d).indexOf(c)
    }
    var Lf = function(a, b, c) {
            function d(t, u, v) {
                if (null == v) return delete g[u], t;
                g[u] = v;
                return t + "; " + u + "=" + v
            }

            function e(t, u) {
                if (null == u) return delete g[u], t;
                g[u] = !0;
                return t + "; " + u
            }
            if (!Bf(c.Va)) return 2;
            var f;
            void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = If(b), f = a + "=" + b);
            var g = {};
            f = d(f, "path", c.path);
            var k;
            c.expires instanceof Date ? k = c.expires.toUTCString() : null != c.expires && (k = "" + c.expires);
            f = d(f, "expires", k);
            f = d(f, "max-age", c.hk);
            f = d(f, "samesite",
                c.jk);
            c.kk && (f = e(f, "secure"));
            var m = c.domain;
            if (m && "auto" === m.toLowerCase()) {
                for (var n = Jf(), p = 0; p < n.length; ++p) {
                    var q = "none" !== n[p] ? n[p] : void 0,
                        r = d(f, "domain", q);
                    r = e(r, c.flags);
                    if (!Kf(q, c.path) && Hf(r, a, b, c.Va)) return 0
                }
                return 1
            }
            m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
            f = e(f, c.flags);
            return Kf(m, c.path) ? 1 : Hf(f, a, b, c.Va) ? 0 : 1
        },
        Mf = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return Lf(a, b, c)
        };

    function Ff(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var k = a[g],
                m = b(k);
            m === c ? d.push(k) : void 0 === f || m < f ? (e = [k], f = m) : m === f && e.push(k)
        }
        return 0 < d.length ? d : e
    }

    function Ef(a, b, c) {
        for (var d = [], e = Df(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                k = g.shift();
            if (!b || -1 !== b.indexOf(k)) {
                var m = g.shift();
                m && (m = m.split("-"), d.push({
                    id: g.join("."),
                    Pd: 1 * m[0] || 1,
                    Pc: 1 * m[1] || 1
                }))
            }
        }
        return d
    }
    var If = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a
        },
        Nf = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Of = /(^|\.)doubleclick\.net$/i,
        Kf = function(a, b) {
            return Of.test(window.document.location.hostname) || "/" === b && Nf.test(a)
        },
        Cf = function() {
            return Af(window) ? window.document.cookie : ""
        },
        Jf = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            Of.test(e) || Nf.test(e) || a.push("none");
            return a
        },
        Bf = function(a) {
            if (!Te().g() || !a || !ef()) return !0;
            if (!df(a)) return !1;
            var b = bf(a);
            return null == b ? !0 : !!b
        };
    var Pf = function(a) {
            var b = Math.round(2147483647 * Math.random());
            return a ? String(b ^ wf(a) & 2147483647) : String(b)
        },
        Qf = function(a) {
            return [Pf(a), Math.round(Da() / 1E3)].join(".")
        },
        Tf = function(a, b, c, d, e) {
            var f = Rf(b);
            return Gf(a, f, Sf(c), d, e)
        },
        Uf = function(a, b, c, d) {
            var e = "" + Rf(c),
                f = Sf(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        },
        Rf = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        Sf = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length -
                1
        };

    function Vf(a, b, c) {
        var d, e = Number(null != a.lb ? a.lb : void 0);
        0 !== e && (d = new Date((b || Da()) + 1E3 * (e || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: d
        }
    };
    var Wf = ["1"],
        Xf = {},
        Yf = {},
        $f = function(a) {
            return Xf[Zf(a)]
        },
        cg = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = Zf(a.prefix);
            if (!Xf[c] && !ag(c, a.path, a.domain) && b) {
                var d = Zf(a.prefix),
                    e = Qf();
                if (0 === bg(d, e, a)) {
                    var f = ab("google_tag_data", {});
                    f._gcl_au ? Qc("GTM", 57) : f._gcl_au = e
                }
                ag(c, a.path, a.domain)
            }
        };

    function bg(a, b, c, d) {
        var e = Uf(b, "1", c.domain, c.path),
            f = Vf(c, d);
        f.Va = "ad_storage";
        return Mf(a, e, f)
    }

    function ag(a, b, c) {
        var d = Tf(a, b, c, Wf, "ad_storage");
        if (!d) return !1;
        var e = d.split(".");
        5 === e.length ? (Xf[a] = e.slice(0, 2).join("."), Yf[a] = {
            id: e.slice(2, 4).join("."),
            Xg: Number(e[4]) || 0
        }) : 3 === e.length ? Yf[a] = {
            id: e.slice(0, 2).join("."),
            Xg: Number(e[2]) || 0
        } : Xf[a] = d;
        return !0
    }

    function Zf(a) {
        return (a || "_gcl") + "_au"
    };
    var dg = function(a) {
        for (var b = [], c = H.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                vf: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, k) {
            return k.timestamp - g.timestamp
        });
        return b
    };

    function eg(a, b) {
        var c = dg(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].vf] || (d[c[e].vf] = []);
                var g = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    Da: f[2]
                };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].vf].push(g)
            }
        }
        return d
    };

    function fg() {
        for (var a = gg, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function hg() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var gg, ig;

    function jg(a) {
        function b(m) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = ig[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return m
        }
        gg = gg || hg();
        ig = ig || fg();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                k = b(64);
            if (64 === k && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != k && (c += String.fromCharCode(g << 6 & 192 | k)))
        }
    };
    var kg;
    var og = function() {
            var a = lg,
                b = mg,
                c = ng(),
                d = function(g) {
                    a(g.target || g.srcElement || {})
                },
                e = function(g) {
                    b(g.target || g.srcElement || {})
                };
            if (!c.init) {
                jb(H, "mousedown", d);
                jb(H, "keyup", d);
                jb(H, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        pg = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            ng().decorators.push(f)
        },
        qg = function(a, b, c) {
            for (var d = ng().decorators, e = {}, f = 0; f < d.length; ++f) {
                var g =
                    d[f],
                    k;
                if (k = !c || g.forms) a: {
                    var m = g.domains,
                        n = a,
                        p = !!g.sameHost;
                    if (m && (p || n !== H.location.hostname))
                        for (var q = 0; q < m.length; q++)
                            if (m[q] instanceof RegExp) {
                                if (m[q].test(n)) {
                                    k = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(m[q]) || p && 0 <= m[q].indexOf(n)) {
                        k = !0;
                        break a
                    }
                    k = !1
                }
                if (k) {
                    var r = g.placement;
                    void 0 == r && (r = g.fragment ? 2 : 1);
                    r === b && Ga(e, g.callback())
                }
            }
            return e
        };

    function ng() {
        var a = ab("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var rg = /(.*?)\*(.*?)\*(.*)/,
        sg = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        tg = /^(?:www\.|m\.|amp\.)+/,
        ug = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function vg(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var xg = function(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                if (void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString()) {
                    b.push(c);
                    var e = b,
                        f = e.push,
                        g, k = String(d);
                    gg = gg || hg();
                    ig = ig || fg();
                    for (var m = [], n = 0; n < k.length; n += 3) {
                        var p = n + 1 < k.length,
                            q = n + 2 < k.length,
                            r = k.charCodeAt(n),
                            t = p ? k.charCodeAt(n + 1) : 0,
                            u = q ? k.charCodeAt(n + 2) : 0,
                            v = r >> 2,
                            x = (r & 3) << 4 | t >> 4,
                            y = (t & 15) << 2 | u >> 6,
                            w = u & 63;
                        q || (w = 64, p || (y = 64));
                        m.push(gg[v], gg[x], gg[y], gg[w])
                    }
                    g = m.join("");
                    f.call(e, g)
                }
            }
        var B = b.join("*");
        return ["1", wg(B),
            B
        ].join("*")
    };

    function wg(a, b) {
        var c = [G.navigator.userAgent, (new Date).getTimezoneOffset(), Za.userLanguage || Za.language, Math.floor(Da() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
            d;
        if (!(d = kg)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var g = f, k = 0; 8 > k; k++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        kg = d;
        for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ kg[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36)
    }

    function yg() {
        return function(a) {
            var b = je(G.location.href),
                c = b.search.replace("?", ""),
                d = ee(c, "_gl", !0) || "";
            a.query = zg(d) || {};
            var e = he(b, "fragment").match(vg("_gl"));
            a.fragment = zg(e && e[3] || "") || {}
        }
    }

    function Ag(a, b) {
        var c = vg(a).exec(b),
            d = b;
        if (c) {
            var e = c[2],
                f = c[4];
            d = c[1];
            f && (d = d + e + f)
        }
        return d
    }
    var Kg = function(a, b) {
            b || (b = "_gl");
            var c = ug.exec(a);
            if (!c) return "";
            var d = c[1],
                e = Ag(b, (c[2] || "").slice(1)),
                f = Ag(b, (c[3] || "").slice(1));
            e.length && (e = "?" + e);
            f.length && (f = "#" + f);
            return "" + d + e + f
        },
        Lg = function(a) {
            var b = yg(),
                c = ng();
            c.data || (c.data = {
                query: {},
                fragment: {}
            }, b(c.data));
            var d = {},
                e = c.data;
            e && (Ga(d, e.query), a && Ga(d, e.fragment));
            return d
        },
        zg = function(a) {
            try {
                var b = Mg(a, 3);
                if (void 0 !== b) {
                    for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                        var f = d[e],
                            g = jg(d[e + 1]);
                        c[f] = g
                    }
                    Qc("TAGGING", 6);
                    return c
                }
            } catch (k) {
                Qc("TAGGING",
                    8)
            }
        };

    function Mg(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = rg.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var g = c;
            if (g && "1" === g[1]) {
                var k = g[3],
                    m;
                a: {
                    for (var n = g[2], p = 0; p < b; ++p)
                        if (n === wg(k, p)) {
                            m = !0;
                            break a
                        }
                    m = !1
                }
                if (m) return k;
                Qc("TAGGING", 7)
            }
        }
    }

    function Ng(a, b, c, d) {
        function e(p) {
            p = Ag(a, p);
            var q = p.charAt(p.length - 1);
            p && "&" !== q && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = ug.exec(c);
        if (!f) return "";
        var g = f[1],
            k = f[2] || "",
            m = f[3] || "",
            n = a + "=" + b;
        d ? m = "#" + e(m.substring(1)) : k = "?" + e(k.substring(1));
        return "" + g + k + m
    }

    function Og(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = qg(b, 1, c),
            e = qg(b, 2, c),
            f = qg(b, 3, c);
        if (Ha(d)) {
            var g = xg(d);
            c ? Pg("_gl", g, a) : Qg("_gl", g, a, !1)
        }
        if (!c && Ha(e)) {
            var k = xg(e);
            Qg("_gl", k, a, !0)
        }
        for (var m in f)
            if (f.hasOwnProperty(m)) a: {
                var n = m,
                    p = f[m],
                    q = a;
                if (q.tagName) {
                    if ("a" === q.tagName.toLowerCase()) {
                        Qg(n, p, q);
                        break a
                    }
                    if ("form" === q.tagName.toLowerCase()) {
                        Pg(n, p, q);
                        break a
                    }
                }
                "string" == typeof q && Ng(n, p, q)
            }
    }

    function Qg(a, b, c, d) {
        if (c.href) {
            var e = Ng(a, b, c.href, void 0 === d ? !1 : d);
            Ra.test(e) && (c.href = e)
        }
    }

    function Pg(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var k = e[g];
                    if (k.name === a) {
                        k.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var m = H.createElement("input");
                    m.setAttribute("type", "hidden");
                    m.setAttribute("name", a);
                    m.setAttribute("value", b);
                    c.appendChild(m)
                }
            } else if ("post" === d) {
                var n = Ng(a, b, c.action);
                Ra.test(n) && (c.action = n)
            }
        }
    }

    function lg(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || Og(e, e.hostname)
            }
        } catch (g) {}
    }

    function mg(a) {
        try {
            if (a.action) {
                var b = he(je(a.action), "host");
                Og(a, b)
            }
        } catch (c) {}
    }
    var Rg = function(a, b, c, d) {
            og();
            pg(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        Sg = function(a, b) {
            og();
            pg(a, [ge(G.location, "host", !0)], b, !0, !0)
        },
        Tg = function() {
            var a = H.location.hostname,
                b = sg.exec(H.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    g = f[1];
                e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var k = a.replace(tg, ""),
                m = e.replace(tg, ""),
                n;
            if (!(n = k === m)) {
                var p = "." + m;
                n = k.substring(k.length - p.length,
                    k.length) === p
            }
            return n
        },
        Ug = function(a, b) {
            return !1 === a ? !1 : a || b || Tg()
        };
    var Vg = {};
    var Wg = /^\w+$/,
        Xg = /^[\w-]+$/,
        Yg = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        },
        Zg = function() {
            if (!Te().g() || !ef()) return !0;
            var a = bf("ad_storage");
            return null == a ? !0 : !!a
        },
        $g = function(a, b) {
            df("ad_storage") ? Zg() ? a() : kf(a, "ad_storage") : b ? Qc("TAGGING", 3) : jf(function() {
                $g(a, !0)
            }, ["ad_storage"])
        },
        bh = function(a) {
            return ah(a).map(function(b) {
                return b.Da
            })
        },
        ah = function(a) {
            var b = [];
            if (!Af(G) || !H.cookie) return b;
            var c = Df(a, H.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = {
                    Yc: d.Yc
                }, e++) {
                var f = ch(c[e]);
                if (null != f) {
                    var g = f,
                        k = g.version;
                    d.Yc = g.Da;
                    var m = g.timestamp,
                        n = g.labels,
                        p = sa(b, function(q) {
                            return function(r) {
                                return r.Da === q.Yc
                            }
                        }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, m), p.labels = dh(p.labels, n || [])) : b.push({
                        version: k,
                        Da: d.Yc,
                        timestamp: m,
                        labels: n
                    })
                }
            }
            b.sort(function(q, r) {
                return r.timestamp - q.timestamp
            });
            return eh(b)
        };

    function dh(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d
    }

    function fh(a) {
        return a && "string" == typeof a && a.match(Wg) ? a : "_gcl"
    }
    var hh = function() {
            var a = je(G.location.href),
                b = he(a, "query", !1, void 0, "gclid"),
                c = he(a, "query", !1, void 0, "gclsrc"),
                d = he(a, "query", !1, void 0, "wbraid"),
                e = he(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || ee(f, "gclid");
                c = c || ee(f, "gclsrc");
                d = d || ee(f, "wbraid")
            }
            return gh(b, c, e, d)
        },
        gh = function(a, b, c, d) {
            var e = {},
                f = function(g, k) {
                    e[k] || (e[k] = []);
                    e[k].push(g)
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && Xg.test(d) && (e.gbraid = d, f(d, "gb"));
            if (void 0 !== a && a.match(Xg)) switch (b) {
                case void 0:
                    f(a,
                        "aw");
                    break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc");
                    break;
                case "ds":
                    f(a, "dc");
                    break;
                case "3p.ds":
                    f(a, "dc");
                    break;
                case "gf":
                    f(a, "gf");
                    break;
                case "ha":
                    f(a, "ha")
            }
            c && f(c, "dc");
            return e
        },
        jh = function(a) {
            var b = hh();
            $g(function() {
                ih(b, !1, a)
            })
        };

    function ih(a, b, c, d, e) {
        function f(x, y) {
            var w = kh(x, g);
            w && (Mf(w, y, k), m = !0)
        }
        c = c || {};
        e = e || [];
        var g = fh(c.prefix);
        d = d || Da();
        var k = Vf(c, d, !0);
        k.Va = "ad_storage";
        var m = !1,
            n = Math.round(d / 1E3),
            p = function(x) {
                var y = ["GCL", n, x];
                0 < e.length && y.push(e.join("."));
                return y.join(".")
            };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if ((void 0 == Vg.enable_gbraid_cookie_write ? 0 : Vg.enable_gbraid_cookie_write) && !m && a.gb) {
            var q = a.gb[0],
                r = kh("gb",
                    g),
                t = !1;
            if (!b)
                for (var u = ah(r), v = 0; v < u.length; v++) u[v].Da === q && u[v].labels && 0 < u[v].labels.length && (t = !0);
            t || f("gb", p(q))
        }
    }
    var mh = function(a, b) {
            var c = Lg(!0);
            $g(function() {
                for (var d = fh(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== Yg[f]) {
                        var g = kh(f, d),
                            k = c[g];
                        if (k) {
                            var m = Math.min(lh(k), Da()),
                                n;
                            b: {
                                var p = m;
                                if (Af(G))
                                    for (var q = Df(g, H.cookie, void 0, "ad_storage"), r = 0; r < q.length; ++r)
                                        if (lh(q[r]) > p) {
                                            n = !0;
                                            break b
                                        }
                                n = !1
                            }
                            if (!n) {
                                var t = Vf(b, m, !0);
                                t.Va = "ad_storage";
                                Mf(g, k, t)
                            }
                        }
                    }
                }
                ih(gh(c.gclid, c.gclsrc), !1, b)
            })
        },
        kh = function(a, b) {
            var c = Yg[a];
            if (void 0 !== c) return b + c
        },
        lh = function(a) {
            return 0 !== nh(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
                0) : 0
        };

    function ch(a) {
        var b = nh(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            Da: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }

    function nh(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !Xg.test(a[2]) ? [] : a
    }
    var oh = function(a, b, c, d, e) {
            if (ra(b) && Af(G)) {
                var f = fh(e),
                    g = function() {
                        for (var k = {}, m = 0; m < a.length; ++m) {
                            var n = kh(a[m], f);
                            if (n) {
                                var p = Df(n, H.cookie, void 0, "ad_storage");
                                p.length && (k[n] = p.sort()[p.length - 1])
                            }
                        }
                        return k
                    };
                $g(function() {
                    Rg(g, b, c, d)
                })
            }
        },
        eh = function(a) {
            return a.filter(function(b) {
                return Xg.test(b.Da)
            })
        },
        ph = function(a, b) {
            if (Af(G)) {
                for (var c = fh(b.prefix), d = {}, e = 0; e < a.length; e++) Yg[a[e]] && (d[a[e]] = Yg[a[e]]);
                $g(function() {
                    A(d, function(f, g) {
                        var k = Df(c + g, H.cookie, void 0, "ad_storage");
                        k.sort(function(t,
                            u) {
                            return lh(u) - lh(t)
                        });
                        if (k.length) {
                            var m = k[0],
                                n = lh(m),
                                p = 0 !== nh(m.split(".")).length ? m.split(".").slice(3) : [],
                                q = {},
                                r;
                            r = 0 !== nh(m.split(".")).length ? m.split(".")[2] : void 0;
                            q[f] = [r];
                            ih(q, !0, b, n, p)
                        }
                    })
                })
            }
        };

    function qh(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }
    var rh = function(a) {
        function b(e, f, g) {
            g && (e[f] = g)
        }
        if (ef()) {
            var c = hh();
            if (qh(c, a)) {
                var d = {};
                b(d, "gclid", c.gclid);
                b(d, "dclid", c.dclid);
                b(d, "gclsrc", c.gclsrc);
                b(d, "wbraid", c.gbraid);
                Sg(function() {
                    return d
                }, 3);
                Sg(function() {
                    var e = {};
                    return e._up = "1", e
                }, 1)
            }
        }
    };

    function sh(a, b) {
        var c = fh(b),
            d = kh(a, c);
        if (!d) return 0;
        for (var e = ah(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function th(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    };
    var Ih = function() {
        var a = !1;
        return a
    };
    var Jh = {
            H: "GTM-W8KNLGB",
            mc: ""
        },
        Kh = {
            bh: "GTM-W8KNLGB",
            dh: "GTM-W8KNLGB"
        },
        Lh = function() {
            var a = [Jh.H];
            return a
        },
        Mh = function() {
            var a = [Jh.H];
            return a
        },
        Nh = function() {
            this.container = {};
            this.destination = {};
            this.canonical = {}
        },
        Ph = function(a) {
            return Oh().container.hasOwnProperty(a)
        };

    function Oh() {
        var a = U.tidr;
        a || (a = new Nh, U.tidr = a);
        return a
    }
    var Qh;
    if (3 === rd.Gd.length) Qh = "g";
    else {
        var Rh = "G";
        Qh = Rh
    }
    var Sh = {
            "": "n",
            UA: "u",
            AW: "a",
            DC: "d",
            G: "e",
            GF: "f",
            HA: "h",
            GTM: Qh,
            OPT: "o"
        },
        Th = function(a) {
            var b = Jh.H.split("-"),
                c = b[0].toUpperCase(),
                d = Sh[c] || "i",
                e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
                f;
            if (3 === rd.Gd.length) {
                var g = "w";
                f = "2" + g
            } else f = "";
            return f + d + rd.Gd + e
        };
    var Uh = !1;
    var Vh = function() {
            this.g = {}
        },
        Wh = function(a, b, c) {
            null != c && (a.g[b] = c)
        },
        Xh = function(a) {
            return Object.keys(a.g).map(function(b) {
                return encodeURIComponent(b) + "=" + encodeURIComponent(a.g[b])
            }).join("&")
        },
        Zh = function(a, b, c, d, e) {};
    var ai = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        bi = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        ci = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        di = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var ei = function() {
            var a = !1;
            return a
        },
        gi = function(a) {
            var b = Ld("gtm.allowlist") || Ld("gtm.whitelist");
            b && Q(9);
            ei() && (b = ["google", "gtagfl", "lcl", "zone"]);
            var c = b && Ia(Aa(b), bi),
                d = Ld("gtm.blocklist") ||
                Ld("gtm.blacklist");
            d || (d = Ld("tagTypeBlacklist")) && Q(3);
            d ? Q(8) : d = [];
            fi() && (d = Aa(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Aa(d).indexOf("google") && Q(2);
            var e = d && Ia(Aa(d), ci),
                f = {};
            return function(g) {
                var k = g && g[wb.ub];
                if (!k || "string" != typeof k) return !0;
                k = k.replace(/^_*/, "");
                if (void 0 !== f[k]) return f[k];
                var m = Dd[k] || [],
                    n = a(k, m);
                if (b) {
                    var p;
                    if (p = n) a: {
                        if (0 > c.indexOf(k))
                            if (m && 0 < m.length)
                                for (var q = 0; q < m.length; q++) {
                                    if (0 > c.indexOf(m[q])) {
                                        Q(11);
                                        p = !1;
                                        break a
                                    }
                                } else {
                                    p = !1;
                                    break a
                                }
                        p = !0
                    }
                    n = p
                }
                var r = !1;
                if (d) {
                    var t = 0 <= e.indexOf(k);
                    if (t) r = t;
                    else {
                        var u = va(e, m || []);
                        u && Q(10);
                        r = u
                    }
                }
                var v = !n || r;
                v || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = va(e, di));
                return f[k] = v
            }
        },
        fi = function() {
            return ai.test(G.location && G.location.hostname)
        };
    var ji = function(a) {},
        ni = function(a) {},
        oi =
        function() {
            return "&tc=" + Yb.filter(function(a) {
                return a
            }).length
        },
        ri = function() {
            2022 <= pi().length && qi()
        },
        si = function(a) {
            return 0 === a.indexOf("gtm.") ? encodeURIComponent(a) : "*"
        },
        ui = function() {
            ti || (ti = G.setTimeout(qi, 500))
        },
        qi = function() {
            ti && (G.clearTimeout(ti), ti = void 0);
            if (void 0 !== vi && (!wi[vi] || xi || yi))
                if (zi[vi] || Ai.cj() || 0 >= Bi--) Q(1), zi[vi] = !0;
                else {
                    Ai.Bj();
                    var a = pi(!0);
                    ib(a);
                    wi[vi] = !0;
                    Di = Ci = Fi = Gi = Hi = yi = xi = "";
                    Ei = []
                }
        },
        pi = function(a) {
            var b = vi;
            if (void 0 === b) return "";
            var c = Rc("GTM"),
                d = Rc("TAGGING");
            return [Ii, wi[b] ? "" : "&es=1", Ji[b], ji(b), c ? "&u=" + c : "", d ? "&ut=" + d : "", oi(), xi, yi, Hi, Gi, ni(a), Fi, Ci, Di ? "&dl=" + encodeURIComponent(Di) : "", 0 < Ei.length ? "&tdp=" + Ei.join(".") : "", "&z=0"].join("")
        },
        Li = function() {
            Ii = Ki()
        },
        Ki = function() {
            return [Mi, "&v=3&t=t", "&pid=" +
                ta(), "&rv=" + rd.Gd
            ].join("")
        },
        mi = ["L", "S", "Y"],
        ii = ["S", "E"],
        Ni = {
            sampleRate: "0.005000",
            uh: "",
            th: Number("5")
        },
        Oi = 0 <= H.location.search.indexOf("?gtm_latency=") || 0 <= H.location.search.indexOf("&gtm_latency="),
        Pi;
    if (!(Pi = Oi)) {
        var Qi = Math.random(),
            Ri = Ni.sampleRate;
        Pi = Qi < Ri
    }
    var Si =
        Pi,
        Mi = "https://www.googletagmanager.com/a?id=" + Jh.H + "&cv=1",
        Ti = {
            label: Jh.H + " Container",
            children: [{
                label: "Initialization",
                children: []
            }]
        },
        Ii = Ki(),
        wi = {},
        xi = "",
        yi = "",
        Fi = "",
        Gi = "",
        Ci = "",
        Ei = [],
        Di = "",
        li = {},
        ki = !1,
        hi = {},
        Ui = {},
        Hi = "",
        vi = void 0,
        Ji = {},
        zi = {},
        ti = void 0,
        Vi = 5;
    0 < Ni.th && (Vi = Ni.th);
    var Ai = function(a, b) {
            for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
            return {
                cj: function() {
                    return c < a ? !1 : Da() - d[c % a] < b
                },
                Bj: function() {
                    var f = c++ % a;
                    d[f] = Da()
                }
            }
        }(Vi, 1E3),
        Bi = 1E3,
        Xi = function(a, b) {
            if (Si && !zi[a] && vi !== a) {
                qi();
                vi =
                    a;
                Fi = xi = "";
                Ji[a] = "&e=" + si(b) + "&eid=" + a;
                ui();
            }
        },
        Yi = function(a, b, c, d) {
            if (Si && b) {
                var e, f = String(b[wb.ub] || "").replace(/_/g, "");
                0 === f.indexOf("cvt") && (f = "cvt");
                e = f;
                var g = c + e;
                if (!zi[a]) {
                    a !== vi && (qi(), vi = a);
                    xi = xi ? xi + "." + g : "&tr=" + g;
                    var k = b["function"];
                    if (!k) throw Error("Error: No function name given for function call.");
                    var m = ($b[k] ? "1" : "2") + e;
                    Fi = Fi ? Fi + "." + m : "&ti=" + m;
                    ui();
                    ri()
                }
            }
        };
    var ej = function(a, b, c) {
            if (Si && !zi[a]) {
                a !== vi && (qi(), vi = a);
                var d = c + b;
                yi = yi ? yi + "." + d : "&epr=" + d;
                ui();
                ri()
            }
        },
        fj = function(a, b, c) {};
    var gj = {
            initialized: 11,
            complete: 12,
            interactive: 13
        },
        hj = {},
        ij = Object.freeze((hj[S.Vb] = !0, hj)),
        jj = {},
        kj = Object.freeze((jj[S.Ca] = !0, jj)),
        lj = 0 <= H.location.search.indexOf("?gtm_diagnostics=") || 0 <= H.location.search.indexOf("&gtm_diagnostics="),
        nj = function(a, b, c) {},
        oj = function() {
            var a = Jh.H;
        };

    function pj(a, b) {
        var c = {},
            d;
        for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }

    function mj(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d;
        if (a === b) return [];
        var e = function(q, r) {
                var t = r[q];
                return void 0 === t ? kj[q] : t
            },
            f;
        for (f in pj(a, b))
            if (!ij[f]) {
                var g = (d ? d + "." : "") + f,
                    k = e(f, a),
                    m = e(f, b),
                    n = "object" === sb(k) || "array" === sb(k),
                    p = "object" === sb(m) || "array" === sb(m);
                if (n && p) mj(k, m, c, g);
                else if (n || p || k !== m) c[g] = !0
            }
        return Object.keys(c)
    };
    var qj = !1,
        rj = 0,
        sj = [];

    function tj(a) {
        if (!qj) {
            var b = H.createEventObject,
                c = "complete" == H.readyState,
                d = "interactive" == H.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                qj = !0;
                for (var e = 0; e < sj.length; e++) J(sj[e])
            }
            sj.push = function() {
                for (var f = 0; f < arguments.length; f++) J(arguments[f]);
                return 0
            }
        }
    }

    function uj() {
        if (!qj && 140 > rj) {
            rj++;
            try {
                H.documentElement.doScroll("left"), tj()
            } catch (a) {
                G.setTimeout(uj, 50)
            }
        }
    }
    var vj = function(a) {
        qj ? a() : sj.push(a)
    };
    var wj = function(a, b) {
        return {
            entityType: 1,
            indexInOriginContainer: a,
            nameInOriginContainer: b,
            originContainerId: Jh.H
        }
    };
    var yj = function(a, b) {
            this.g = !1;
            this.C = [];
            this.I = {
                tags: []
            };
            this.X = !1;
            this.o = this.s = 0;
            xj(this, a, b)
        },
        zj = function(a, b, c, d) {
            if (ud.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            ub(d) && (e = N(d, e));
            e.id = c;
            e.status = "timeout";
            return a.I.tags.push(e) - 1
        },
        Aj = function(a, b, c, d) {
            var e = a.I.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        Bj = function(a) {
            if (!a.g) {
                for (var b = a.C, c = 0; c < b.length; c++) b[c]();
                a.g = !0;
                a.C.length = 0
            }
        },
        xj = function(a, b, c) {
            void 0 !== b && Cj(a, b);
            c && G.setTimeout(function() {
                return Bj(a)
            }, Number(c))
        },
        Cj =
        function(a, b) {
            var c = Fa(function() {
                return J(function() {
                    b(Jh.H, a.I)
                })
            });
            a.g ? c() : a.C.push(c)
        },
        Dj = function(a) {
            a.s++;
            return Fa(function() {
                a.o++;
                a.X && a.o >= a.s && Bj(a)
            })
        },
        Ej = function(a) {
            a.X = !0;
            a.o >= a.s && Bj(a)
        };
    var Fj = function() {
            function a(d) {
                return !qa(d) || 0 > d ? 0 : d
            }
            if (!U._li && G.performance && G.performance.timing) {
                var b = G.performance.timing.navigationStart,
                    c = qa(Md.get("gtm.start")) ? Md.get("gtm.start") : 0;
                U._li = {
                    cst: a(c - b),
                    cbt: a(Bd - b)
                }
            }
        },
        Gj = function(a) {
            G.performance && G.performance.mark(Jh.H + "_" + a + "_start")
        },
        Hj = function(a) {
            if (G.performance) {
                var b = Jh.H + "_" + a + "_start",
                    c = Jh.H + "_" + a + "_duration";
                G.performance.measure(c, b);
                var d = G.performance.getEntriesByName(c)[0];
                G.performance.clearMarks(b);
                G.performance.clearMeasures(c);
                var e = U._p || {};
                void 0 === e[a] && (e[a] = d.duration, U._p = e);
                return d.duration
            }
        },
        Ij = function() {
            if (G.performance && G.performance.now) {
                var a = U._p || {};
                a.PAGEVIEW = G.performance.now();
                U._p = a
            }
        };
    var Jj = {},
        ck = function() {
            return G.GoogleAnalyticsObject && G[G.GoogleAnalyticsObject]
        },
        dk = !1;

    function gk() {
        return G.GoogleAnalyticsObject || "ga"
    }
    var hk = function(a) {},
        ik = function(a, b) {
            return function() {
                var c = ck(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var g = f.get("hitPayload"),
                            k = f.get("hitCallback"),
                            m = 0 > g.indexOf("&tid=" + b);
                        m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        m && (f.set("hitPayload",
                            g, !0), f.set("hitCallback", k, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };

    function nk(a, b, c, d) {
        var e = Yb[a],
            f = ok(a, b, c, d);
        if (!f) return null;
        var g = ec(e[wb.qg], c, []);
        if (g && g.length) {
            var k = g[0];
            f = nk(k.index, {
                onSuccess: f,
                onFailure: 1 === k.Ng ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function ok(a, b, c, d) {
        function e() {
            if (f[wb.ki]) k();
            else {
                var x = fc(f, c, []);
                var y = x[wb.yh];
                if (null != y)
                    for (var w = 0; w < y.length; w++)
                        if (!sf(y[w])) {
                            k();
                            return
                        }
                var B = zj(c.xb, String(f[wb.ub]), Number(f[wb.sg]), x[wb.li]),
                    z = !1;
                x.vtp_gtmOnSuccess = function() {
                    if (!z) {
                        z = !0;
                        var F = Da() - E;
                        Yi(c.id, Yb[a], "5", F);
                        Aj(c.xb, B, "success",
                            F);
                        g()
                    }
                };
                x.vtp_gtmOnFailure = function() {
                    if (!z) {
                        z = !0;
                        var F = Da() - E;
                        Yi(c.id, Yb[a], "6", F);
                        Aj(c.xb, B, "failure", F);
                        k()
                    }
                };
                x.vtp_gtmTagId = f.tag_id;
                x.vtp_gtmEventId = c.id;
                c.priorityId && (x.vtp_gtmPriorityId = c.priorityId);
                Yi(c.id, f, "1");
                var C = function() {
                    var F = Da() - E;
                    Yi(c.id, f, "7", F);
                    Aj(c.xb, B, "exception",
                        F);
                    z || (z = !0, k())
                };
                var E = Da();
                try {
                    dc(x, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (F) {
                    C(F)
                }
            }
        }
        var f = Yb[a],
            g = b.onSuccess,
            k = b.onFailure,
            m = b.terminate;
        if (c.cf(f)) return null;
        var n = ec(f[wb.ug], c, []);
        if (n && n.length) {
            var p = n[0],
                q = nk(p.index, {
                    onSuccess: g,
                    onFailure: k,
                    terminate: m
                }, c, d);
            if (!q) return null;
            g = q;
            k = 2 === p.Ng ? m : q
        }
        if (f[wb.kg] || f[wb.ri]) {
            var r = f[wb.kg] ? Zb : c.Oj,
                t = g,
                u = k;
            if (!r[a]) {
                e = Fa(e);
                var v = pk(a, r, e);
                g = v.onSuccess;
                k = v.onFailure
            }
            return function() {
                r[a](t, u)
            }
        }
        return e
    }

    function pk(a, b, c) {
        var d = [],
            e = [];
        b[a] = qk(d, e, c);
        return {
            onSuccess: function() {
                b[a] = rk;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            onFailure: function() {
                b[a] = sk;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function qk(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function rk(a) {
        a()
    }

    function sk(a, b) {
        b()
    };

    function tk(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return je("" + c + b).href
        }
    }

    function uk(a, b) {
        return vk() ? tk(a, b) : void 0
    }

    function vk() {
        var a = !1;
        return a
    }

    function wk() {
        return !!rd.Hd && "SGTM_TOKEN" !== rd.Hd.split("@@").join("")
    };
    var yk = function(a, b, c, d) {
            return (2 === xk() || d || "http:" != G.location.protocol ? a : b) + c
        },
        xk = function() {
            var a = gb(),
                b;
            if (1 === a) a: {
                var c = wd;c = c.toLowerCase();
                for (var d = "https://" + c, e = "http://" + c, f = 1, g = H.getElementsByTagName("script"), k = 0; k < g.length && 100 > k; k++) {
                    var m = g[k].src;
                    if (m) {
                        m = m.toLowerCase();
                        if (0 === m.indexOf(e)) {
                            b = 3;
                            break a
                        }
                        1 === f && 0 === m.indexOf(d) && (f = 2)
                    }
                }
                b = f
            }
            else b = a;
            return b
        };
    var zk = !1;
    var Bk = function(a, b, c) {
            if (!Ak() && !Ph(a)) {
                var d = c ? "/gtag/js" : "/gtm.js",
                    e = "?id=" + encodeURIComponent(a) + "&l=" + rd.Z,
                    f = 0 === a.indexOf("GTM-");
                f || (e += "&cx=c");
                var g = wk();
                g && (e += "&sign=" + rd.Hd);
                var k = uk(b, d + e);
                if (!k) {
                    var m = rd.nc + d;
                    g && $a && f && (m = $a.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                    k = yk("https://", "http://", m + e)
                }
                Oh().container[a] = !0;
                fb(k)
            }
        },
        Ck = function(a, b) {
            if (zk) {
                var c;
                if (c = !Ak()) c = !Oh().destination.hasOwnProperty(a);
                if (c) {
                    var d = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + rd.Z + "&cx=c";
                    wk() && (d += "&sign=" + rd.Hd);
                    var e = uk(b, d);
                    e || (e = yk("https://", "http://", rd.nc + d));
                    Oh().destination[a] = !0;
                    fb(e)
                }
            } else Bk(a, b, !0)
        };

    function Ak() {
        if (Ih()) {
            return !0
        }
        return !1
    }
    var Dk = [S.Ub],
        Fk = function(a, b) {
            return 1 === arguments.length ? Ek("config", a) : Ek("config", a, b)
        },
        Gk = function(a, b, c) {
            c = c || {};
            c[S.tb] = a;
            if ("G" === a.split("-")[0])
                for (var d in c) "_" === d[0] && -1 === Dk.indexOf(d) && delete c[d];
            return Ek("event", b, c)
        };

    function Ek(a) {
        return arguments
    }
    var Hk = function() {
        this.g = [];
        this.o = []
    };
    Hk.prototype.enqueue = function(a, b, c) {
        var d = this.g.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        c.eventId = b;
        c.fromContainerExecution = !0;
        c.fromMessageBus = !0;
        c.priorityId = d;
        var e = {
            message: a,
            notBeforeEventId: b,
            priorityId: d,
            messageContext: c
        };
        this.g.push(e);
        for (var f = 0; f < this.o.length; f++) try {
            this.o[f](e)
        } catch (g) {}
    };
    Hk.prototype.listen = function(a) {
        this.o.push(a)
    };
    Hk.prototype.get = function() {
        for (var a = {}, b = 0; b < this.g.length; b++) {
            var c = this.g[b],
                d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };
    var Jk = function(a, b, c) {
            Ik().enqueue(a, b, c)
        },
        Lk = function() {
            var a = Kk;
            Ik().listen(a)
        };

    function Ik() {
        var a = U.mb;
        a || (a = new Hk, U.mb = a);
        return a
    }
    var Tk = function(a) {
            var b = U.zones;
            return b ? b.getIsAllowedFn(Lh(), a) : function() {
                return !0
            }
        },
        Uk = function(a) {
            var b = U.zones;
            return b ? b.isActive(Lh(), a) : !0
        };
    var Xk = function(a, b) {
        for (var c = [], d = 0; d < Yb.length; d++)
            if (a[d]) {
                var e = Yb[d];
                var f = Dj(b.xb);
                try {
                    var g = nk(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var k = c,
                            m = k.push,
                            n = d,
                            p = e["function"];
                        if (!p) throw "Error: No function name given for function call.";
                        var q = $b[p];
                        m.call(k, {
                            oh: n,
                            fh: q ? q.priorityOverride || 0 : 0,
                            execute: g
                        })
                    } else Vk(d, b), f()
                } catch (t) {
                    f()
                }
            }
        c.sort(Wk);
        for (var r = 0; r < c.length; r++) c[r].execute();
        return 0 <
            c.length
    };

    function Wk(a, b) {
        var c, d = b.fh,
            e = a.fh;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var g = a.oh,
                k = b.oh;
            f = g > k ? 1 : g < k ? -1 : 0
        }
        return f
    }

    function Vk(a, b) {
        if (!Si) return;
        var c = function(d) {
            var e = b.cf(Yb[d]) ? "3" : "4",
                f = ec(Yb[d][wb.qg], b, []);
            f && f.length && c(f[0].index);
            Yi(b.id, Yb[d], e);
            var g = ec(Yb[d][wb.ug], b, []);
            g && g.length && c(g[0].index)
        };
        c(a);
    }
    var $k = !1,
        Yk;
    var el = function(a) {
        var b = Da(),
            c = a["gtm.uniqueEventId"],
            d = a["gtm.priorityId"],
            e = a.event;
        if ("gtm.js" === e) {
            if ($k) return !1;
            $k = !0;
        }
        var k, m = !1;
        if (Uk(c)) k = Tk(c);
        else {
            if ("gtm.js" !== e && "gtm.init" !== e && "gtm.init_consent" !== e) return !1;
            m = !0;
            k = Tk(Number.MAX_SAFE_INTEGER)
        }
        Xi(c, e);
        var n = a.eventCallback,
            p = a.eventTimeout,
            q = n;
        var r = {
                id: c,
                priorityId: d,
                name: e,
                cf: gi(k),
                Oj: [],
                Yg: function() {
                    Q(6)
                },
                Fg: al(),
                Gg: bl(c),
                xb: new yj(q, p)
            },
            t = lc(r);
        m && (t = cl(t));
        var u = Xk(t, r),
            v = !1;
        Ej(r.xb);
        "gtm.js" !== e && "gtm.sync" !== e || hk(Jh.H);
        return dl(t, u) || v
    };

    function bl(a) {
        return function(b) {
            Si && (vb(b) || fj(a, "input", b))
        }
    }

    function al() {
        var a = {};
        a.event = Rd("event", 1);
        a.ecommerce = Rd("ecommerce", 1);
        a.gtm = Rd("gtm");
        a.eventModel = Rd("eventModel");
        return a
    }

    function cl(a) {
        for (var b = [], c = 0; c < a.length; c++) a[c] && (td[String(Yb[c][wb.ub])] && (b[c] = !0), void 0 !== Yb[c][wb.si] && (b[c] = !0));
        return b
    }

    function dl(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && Yb[c] && !ud[String(Yb[c][wb.ub])]) return !0;
        return !1
    }
    var fl = [];
    fl[2] = !0;
    fl[6] = !0;
    fl[7] = !0;
    fl[8] = !0;
    fl[9] = !0;
    fl[10] = !0;
    var gl = function() {
            this.eventModel = {};
            this.targetConfig = {};
            this.containerConfig = {};
            this.globalConfig = {};
            this.dataLayerConfig = {};
            this.remoteConfig = {};
            this.eventMetadata = {};
            this.onSuccess = function() {};
            this.onFailure = function() {};
            this.setContainerTypeLoaded = function() {};
            this.getContainerTypeLoaded = function() {};
            this.priorityId = this.eventId = void 0;
            this.isGtmEvent = !1
        },
        hl = function(a) {
            var b = new gl;
            b.eventModel = a;
            return b
        },
        il = function(a, b) {
            a.targetConfig = b;
            return a
        },
        jl = function(a, b) {
            a.containerConfig = b;
            return a
        },
        kl = function(a, b) {
            a.globalConfig = b;
            return a
        },
        ll = function(a, b) {
            a.dataLayerConfig = b;
            return a
        },
        ml = function(a, b) {
            a.remoteConfig = b;
            return a
        },
        nl = function(a, b) {
            a.eventMetadata = b || {};
            return a
        },
        ol = function(a, b) {
            a.onSuccess = b;
            return a
        },
        pl = function(a, b) {
            a.setContainerTypeLoaded = b;
            return a
        },
        ql = function(a, b) {
            a.getContainerTypeLoaded = b;
            return a
        },
        rl = function(a, b) {
            a.onFailure = b;
            return a
        },
        sl = function(a, b) {
            a.eventId = b;
            return a
        },
        tl = function(a, b) {
            a.priorityId = b;
            return a
        };
    h = gl.prototype;
    h.getWithConfig = function(a) {
        if (void 0 !== this.eventModel[a]) return this.eventModel[a];
        if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
        if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
        ul(this, this.globalConfig[a], this.dataLayerConfig[a]) && (Q(71), Q(79));
        if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
        if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a]
    };
    h.getTopLevelKeys = function() {
        function a(f) {
            for (var g = Object.keys(f), k = 0; k < g.length; ++k) b[g[k]] = 1
        }
        var b = {};
        a(this.eventModel);
        a(this.targetConfig);
        a(this.containerConfig);
        a(this.globalConfig);
        for (var c = Object.keys(this.dataLayerConfig), d = 0; d < c.length; d++) {
            var e = c[d];
            if ("event" !== e && "gtm" !== e && "tagTypeBlacklist" !== e && !b.hasOwnProperty(e)) {
                Q(71);
                Q(80);
                break
            }
        }
        return Object.keys(b)
    };
    h.getMergedValues = function(a, b) {
        function c(k) {
            ub(k) && A(k, function(m, n) {
                e = !0;
                d[m] = n
            })
        }
        var d = {},
            e = !1;
        b && 1 !== b || (c(this.remoteConfig[a]), c(this.globalConfig[a]), c(this.containerConfig[a]), c(this.targetConfig[a]));
        b && 2 !== b || c(this.eventModel[a]);
        var f = e,
            g = d;
        d = {};
        e = !1;
        b && 1 !== b || (c(this.remoteConfig[a]), c(this.dataLayerConfig[a]), c(this.containerConfig[a]), c(this.targetConfig[a]));
        b && 2 !== b || c(this.eventModel[a]);
        if (e !== f || ul(this, d, g)) Q(71), Q(81);
        e = f;
        d = g;
        return e ? d : void 0
    };
    h.getKeysFromFirstOfAnyScope = function(a) {
        var b = {},
            c = !1,
            d = function(g) {
                for (var k = 0; k < a.length; k++) void 0 !== g[a[k]] && (b[a[k]] = g[a[k]], c = !0);
                return c
            };
        if (d(this.eventModel) || d(this.targetConfig) || d(this.containerConfig)) return b;
        d(this.globalConfig);
        var e = b,
            f = c;
        b = {};
        c = !1;
        d(this.dataLayerConfig);
        ul(this, b, e) && (Q(71), Q(82));
        b = e;
        c = f;
        if (c) return b;
        d(this.remoteConfig);
        return b
    };
    h.getEventModelKeys = function() {
        return []
    };
    var ul = function(a, b, c) {
        try {
            if (b === c) return !1;
            var d = sb(b);
            if (d !== sb(c) || !(ub(b) && ub(c) || "array" === d)) return !0;
            if ("array" === d) {
                if (b.length !== c.length) return !0;
                for (var e = 0; e < b.length; e++)
                    if (ul(a, b[e], c[e])) return !0
            } else {
                for (var f in c)
                    if (!b.hasOwnProperty(f)) return !0;
                for (var g in b)
                    if (!c.hasOwnProperty(g) || ul(a, b[g], c[g])) return !0
            }
        } catch (k) {
            Q(72)
        }
        return !1
    };
    var vl = function() {
        U.dedupe_gclid || (U.dedupe_gclid = "" + Qf());
        return U.dedupe_gclid
    };

    function wl(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var xl = function(a, b) {
        a.addEventListener && a.addEventListener.call(a, "message", b, !1)
    };

    function yl() {
        return Ta("iPhone") && !Ta("iPod") && !Ta("iPad")
    };
    Ta("Opera");
    Ta("Trident") || Ta("MSIE");
    Ta("Edge");
    !Ta("Gecko") || -1 != Sa().toLowerCase().indexOf("webkit") && !Ta("Edge") || Ta("Trident") || Ta("MSIE") || Ta("Edge"); - 1 != Sa().toLowerCase().indexOf("webkit") && !Ta("Edge") && Ta("Mobile");
    Ta("Macintosh");
    Ta("Windows");
    Ta("Linux") || Ta("CrOS");
    var zl = la.navigator || null;
    zl && (zl.appVersion || "").indexOf("X11");
    Ta("Android");
    yl();
    Ta("iPad");
    Ta("iPod");
    yl() || Ta("iPad") || Ta("iPod");
    Sa().toLowerCase().indexOf("kaios");
    var Al = function(a) {
        if (!a || !H.head) return null;
        var b, c;
        c = void 0 === c ? document : c;
        b = c.createElement("meta");
        H.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b
    };
    var Bl = function() {};
    var Cl = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        Dl = function(a, b, c) {
            this.o = a;
            this.g = null;
            this.I = {};
            this.Oa = 0;
            this.X = void 0 === b ? 500 : b;
            this.C = void 0 === c ? !1 : c;
            this.s = null
        };
    ja(Dl, Bl);
    Dl.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.C
            },
            d = zf(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.X && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.X));
        var f = function(g, k) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = Cl(c), c.internalBlockOnErrors = b.C, k && 0 === c.internalErrorState || (c.tcString = "tcunavailable", k || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            El(this, "addEventListener", f)
        } catch (g) {
            c.tcString =
                "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    Dl.prototype.removeEventListener = function(a) {
        a && a.listenerId && El(this, "removeEventListener", null, a.listenerId)
    };
    var Gl = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var g = e;
            if (0 === g) return !1;
            var k = c;
            2 === c ? (k = 0, 2 === g && (k = 1)) : 3 === c && (k = 1, 1 === g && (k = 0));
            var m;
            if (0 === k)
                if (a.purpose && a.vendor) {
                    var n = Fl(a.vendor.consents, void 0 === d ? "755" : d);
                    m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Fl(a.purpose.consents, b)
                } else m = !0;
            else m = 1 === k ? a.purpose && a.vendor ? Fl(a.purpose.legitimateInterests,
                b) && Fl(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return m
        },
        Fl = function(a, b) {
            return !(!a || !a[b])
        },
        El = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.o.__tcfapi) {
                var e = a.o.__tcfapi;
                e(b, 2, c, d)
            } else if (Hl(a)) {
                Il(a);
                var f = ++a.Oa;
                a.I[f] = c;
                if (a.g) {
                    var g = {};
                    a.g.postMessage((g.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, g), "*")
                }
            } else c({}, !1)
        },
        Hl = function(a) {
            if (a.g) return a.g;
            var b;
            a: {
                for (var c = a.o, d = 0; 50 > d; ++d) {
                    var e;
                    try {
                        e = !(!c.frames || !c.frames.__tcfapiLocator)
                    } catch (k) {
                        e = !1
                    }
                    if (e) {
                        b = c;
                        break a
                    }
                    var f;
                    b: {
                        try {
                            var g = c.parent;
                            if (g && g != c) {
                                f = g;
                                break b
                            }
                        } catch (k) {}
                        f = null
                    }
                    if (!(c = f)) break
                }
                b = null
            }
            a.g = b;
            return a.g
        },
        Il = function(a) {
            a.s || (a.s = function(b) {
                try {
                    var c;
                    c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.I[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, xl(a.o, a.s))
        };
    var Jl = !0;
    Jl = !1;
    var Kl = {
            1: 0,
            3: 0,
            4: 0,
            7: 3,
            9: 3,
            10: 3
        },
        Ll = wl("", 550),
        Ml = wl("", 500);

    function Nl() {
        var a = U.tcf || {};
        return U.tcf = a
    }
    var Sl = function() {
        var a = Nl(),
            b = new Dl(G, Jl ? 3E3 : -1);
        if (!0 === G.gtag_enable_tcf_support && !a.active && ("function" === typeof G.__tcfapi || "function" === typeof b.o.__tcfapi || null != Hl(b))) {
            a.active = !0;
            a.Rc = {};
            Ol();
            var c = null;
            Jl ? c = G.setTimeout(function() {
                Pl(a);
                Ql(a);
                c = null
            }, Ml) : a.tcString = "tcunavailable";
            try {
                b.addEventListener(function(d) {
                    c && (clearTimeout(c), c = null);
                    if (0 !== d.internalErrorState) Pl(a), Ql(a);
                    else {
                        var e;
                        a.gdprApplies = d.gdprApplies;
                        if (!1 === d.gdprApplies) e = Rl(), b.removeEventListener(d);
                        else if ("tcloaded" ===
                            d.eventStatus || "useractioncomplete" === d.eventStatus || "cmpuishown" === d.eventStatus) {
                            var f = {},
                                g;
                            for (g in Kl)
                                if (Kl.hasOwnProperty(g))
                                    if ("1" === g) {
                                        var k = d,
                                            m = !0;
                                        m = void 0 === m ? !1 : m;
                                        var n;
                                        var p = k;
                                        !1 === p.gdprApplies ? n = !0 : (void 0 === p.internalErrorState && (p.internalErrorState = Cl(p)), n = "error" === p.cmpStatus || 0 !== p.internalErrorState ? !p.internalBlockOnErrors : "loaded" !== p.cmpStatus || "tcloaded" !== p.eventStatus && "useractioncomplete" !== p.eventStatus ? !1 : !0);
                                        f["1"] = n ? !1 === k.gdprApplies || "tcunavailable" === k.tcString ||
                                            void 0 === k.gdprApplies && !m || "string" !== typeof k.tcString || !k.tcString.length ? !0 : Gl(k, "1", 0) : !1
                                    } else f[g] = Gl(d, g, Kl[g]);
                            e = f
                        }
                        e && (a.tcString = d.tcString || "tcempty", a.Rc = e, Ql(a))
                    }
                })
            } catch (d) {
                c && (clearTimeout(c), c = null), Pl(a), Ql(a)
            }
        }
    };

    function Pl(a) {
        a.type = "e";
        a.tcString = "tcunavailable";
        Jl && (a.Rc = Rl())
    }

    function Ol() {
        var a = {},
            b = (a.ad_storage = "denied", a.wait_for_update = Ll, a);
        pf(b)
    }

    function Rl() {
        var a = {},
            b;
        for (b in Kl) Kl.hasOwnProperty(b) && (a[b] = !0);
        return a
    }

    function Ql(a) {
        var b = {},
            c = (b.ad_storage = a.Rc["1"] ? "granted" : "denied", b);
        rf(c, {
            eventId: 0
        }, {
            gdprApplies: a ? a.gdprApplies : void 0,
            tcString: Tl()
        })
    }
    var Tl = function() {
            var a = Nl();
            return a.active ? a.tcString || "" : ""
        },
        Ul = function() {
            var a = Nl();
            return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
        },
        Vl = function(a) {
            if (!Kl.hasOwnProperty(String(a))) return !0;
            var b = Nl();
            return b.active && b.Rc ? !!b.Rc[String(a)] : !0
        };
    var am = /[A-Z]+/,
        bm = /\s/,
        cm = function(a) {
            if (l(a)) {
                a = Ba(a);
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (am.test(c)) {
                        for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                            if (!d[e] || bm.test(d[e]) && ("AW" !== c || 1 !== e)) return;
                        return {
                            id: a,
                            prefix: c,
                            containerId: c + "-" + d[0],
                            J: d
                        }
                    }
                }
            }
        },
        em = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d = cm(a[c]);
                d && (b[d.id] = d)
            }
            dm(b);
            var e = [];
            A(b, function(f, g) {
                e.push(g)
            });
            return e
        };

    function dm(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.J[1] && b.push(d.containerId)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };

    function xm() {
        return "attribution-reporting"
    }

    function ym(a) {
        var b;
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
    };
    var zm = !1;

    function Am() {
        if (ym("join-ad-interest-group") && pa(Za.joinAdInterestGroup)) return !0;
        zm || (Al('A9wkrvp9y21k30U9lU7MJMjBj4USjLrGwV+Z8zO3J3ZBH139DOnCv3XLK2Ii40S94HG1SZ/Zeg2GSHOD3wlWngYAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), zm = !0);
        return ym("join-ad-interest-group") && pa(Za.joinAdInterestGroup)
    }

    function Bm(a, b) {
        var c = void 0;
        try {
            c = H.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {}
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && 6E4 > Da() - d) {
                Qc("TAGGING", 9);
                return
            }
        } else try {
            if (50 <= H.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                Qc("TAGGING", 10);
                return
            }
        } catch (e) {}
        hb(a, void 0, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: Da()
        }, c)
    };
    var Ym = function(a, b, c) {
            this.C = a;
            this.eventName = b;
            this.g = c;
            this.o = {};
            this.metadata = N(c.eventMetadata || {});
            this.s = !1
        },
        Zm = function(a, b, c) {
            var d = a.g.getWithConfig(b);
            void 0 !== d ? a.o[b] = d : void 0 !== c && (a.o[b] = c)
        },
        $m = function(a, b, c) {
            var d = Ud(a.C);
            return d && d.hasOwnProperty(b) ? d[b] : c
        };

    function an(a) {
        return {
            getDestinationId: function() {
                return a.C
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                return void(a.eventName = b)
            },
            getHitData: function(b) {
                return a.o[b]
            },
            setHitData: function(b, c) {
                return void(a.o[b] = c)
            },
            setHitDataIfNotDefined: function(b, c) {
                void 0 === a.o[b] && (a.o[b] = c)
            },
            copyToHitData: function(b, c) {
                Zm(a, b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                return void(a.metadata[b] = c)
            },
            abort: function() {
                return void(a.s = !0)
            },
            getProcessedEvent: function() {
                return a
            }
        }
    };
    var Qn = function() {
            var a = !0;
            Vl(7) && Vl(9) && Vl(10) || (a = !1);
            return a
        },
        Rn = function() {
            var a = !0;
            Vl(3) && Vl(4) || (a = !1);
            return a
        };
    var Lo = null,
        Mo = !1;

    function No(a) {
        return Mo && !a ? Lo = Lo || new Oo : U.gcq = U.gcq || new Oo
    }
    var Po = function(a, b, c) {
            No().register(a, b, c)
        },
        Qo = function(a, b, c, d) {
            No().push("event", [b, a], c, d)
        },
        Ro = function(a, b, c) {
            No().push("config", [a], b, c)
        },
        So = function(a, b, c, d) {
            No().push("get", [a, b], c, d)
        },
        To = function() {
            var a = S.V;
            return No().getGlobalConfigValue && No().getGlobalConfigValue(a)
        },
        Uo = {},
        Vo = function() {
            this.status = 1;
            this.containerConfig = {};
            this.targetConfig = {};
            this.remoteConfig = {};
            this.o = {};
            this.s = null;
            this.claimed = this.g = !1
        },
        Wo = function(a, b, c, d, e) {
            this.type = a;
            this.o = b;
            this.K = c || "";
            this.g = d;
            this.messageContext =
                e
        },
        Oo = function() {
            this.o = {};
            this.s = {};
            this.g = [];
            this.C = {
                AW: !1,
                UA: !1
            }
        },
        Xo = function(a, b) {
            var c = cm(b);
            return a.o[c.containerId] = a.o[c.containerId] || new Vo
        },
        Yo = function(a, b, c, d) {
            if (b) {
                var e = cm(b);
                if (e && 1 === Xo(a, b).status) {
                    Xo(a, b).status = 2;
                    var f = {};
                    Si && (f.timeoutId = G.setTimeout(function() {
                        Q(38);
                        ui()
                    }, 3E3));
                    a.push("require", [f], e.containerId, {});
                    Uo[e.containerId] = Da();
                    if (Ih()) {} else 2 === d ? Ck(e.containerId, c) : Bk(e.containerId, c, !0)
                }
            }
        },
        Zo = function(a, b, c, d) {
            if (d.K) {
                var e = Xo(a, d.K),
                    f = e.s;
                if (f) {
                    var g = N(c),
                        k = N(e.targetConfig[d.K]),
                        m = N(e.containerConfig),
                        n = N(e.remoteConfig),
                        p = N(a.s),
                        q = {};
                    try {
                        q = N(Id)
                    } catch (x) {
                        Q(72)
                    }
                    var r = Ld("gtm.uniqueEventId"),
                        t = cm(d.K).prefix,
                        u = function(x) {
                            ej(r, t, x);
                            var y = g[S.Qb];
                            y && J(y)
                        },
                        v = tl(sl(ql(pl(rl(ol(nl(ll(kl(ml(jl(il(hl(g), k), m), n), p), q), d.messageContext.eventMetadata), function() {
                            if (u) {
                                var x = u;
                                u = void 0;
                                x("2")
                            }
                        }), function() {
                            if (u) {
                                var x = u;
                                u = void 0;
                                x("3")
                            }
                        }), function(x, y) {
                            a.C[x] = y
                        }), function(x) {
                            return a.C[x]
                        }), d.messageContext.eventId), d.messageContext.priorityId);
                    try {
                        ej(r, t, "1"), nj(d.type, d.K, v);
                        f(d.K, b, d.o, v)
                    } catch (x) {
                        ej(r, t, "4");
                    }
                }
            }
        };
    h = Oo.prototype;
    h.register = function(a, b, c) {
        var d = Xo(this, a);
        if (3 !== d.status) {
            d.s = b;
            d.status = 3;
            c && (N(d.remoteConfig, c), d.remoteConfig = c);
            var e = cm(a),
                f = Uo[e.containerId];
            if (void 0 !== f) {
                var g = U[e.containerId].bootstrap,
                    k = e.prefix.toUpperCase();
                U[e.containerId]._spx && (k = k.toLowerCase());
                var m = Ld("gtm.uniqueEventId"),
                    n = k,
                    p = Da() - g;
                if (Si && !zi[m]) {
                    m !== vi && (qi(), vi = m);
                    var q = n + "." + Math.floor(g - f) + "." + Math.floor(p);
                    Gi = Gi ? Gi + "," + q : "&cl=" + q
                }
                delete Uo[e.containerId]
            }
            this.flush()
        }
    };
    h.notifyContainerLoaded = function(a, b) {
        var c = this,
            d = function(f) {
                if (cm(f)) {
                    var g = Xo(c, f);
                    g.status = 3;
                    g.claimed = !0
                }
            };
        d(a);
        for (var e = 0; e < b.length; e++) d(b[e]);
        this.flush()
    };
    h.push = function(a, b, c, d) {
        null == d ? d = {} : "boolean" === typeof d && (d = {
            deferrable: d
        });
        if (void 0 !== c) {
            if (!cm(c)) return;
            Yo(this, c, b[0][S.V] || this.s[S.V], "event" === a ? 2 : 1);
            Xo(this, c).g && (d.deferrable = !1)
        }
        this.g.push(new Wo(a, Math.floor(Da() / 1E3), c, b, d));
        d.deferrable || this.flush()
    };
    h.insert = function(a, b, c, d) {
        null == d && (d = {});
        var e = Math.floor(Da() / 1E3);
        0 < this.g.length ? this.g.splice(1, 0, new Wo(a, e, c, b, d)) : this.g.push(new Wo(a, e, c, b, d))
    };
    h.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.g.length;) {
            var f = this.g[0];
            if (f.messageContext.deferrable) !f.K || Xo(this, f.K).g ? (f.messageContext.deferrable = !1, this.g.push(f)) : c.push(f), this.g.shift();
            else {
                var g = void 0;
                switch (f.type) {
                    case "require":
                        g = Xo(this, f.K);
                        if (3 !== g.status && !a) {
                            this.g.push.apply(this.g, c);
                            return
                        }
                        Si && G.clearTimeout(f.g[0].timeoutId);
                        break;
                    case "set":
                        A(f.g[0], function(r, t) {
                            N(Ja(r, t), b.s)
                        });
                        break;
                    case "config":
                        g = Xo(this, f.K);
                        if (g.claimed) break;
                        e.Na = {};
                        A(f.g[0], function(r) {
                            return function(t,
                                u) {
                                N(Ja(t, u), r.Na)
                            }
                        }(e));
                        var k = !!e.Na[S.xd];
                        delete e.Na[S.xd];
                        var m = cm(f.K),
                            n = m.containerId === m.id;
                        k || (n ? g.containerConfig = {} : g.targetConfig[f.K] = {});
                        g.g && k || Zo(this, S.za, e.Na, f);
                        g.g = !0;
                        delete e.Na[S.Vb];
                        delete e.Na[S.Cc];
                        n ? N(e.Na, g.containerConfig) : (N(e.Na, g.targetConfig[f.K]), Q(70));
                        d = !0;
                        break;
                    case "event":
                        g = Xo(this, f.K);
                        if (g.claimed) break;
                        e.Xc = {};
                        A(f.g[0], function(r) {
                            return function(t, u) {
                                N(Ja(t, u), r.Xc)
                            }
                        }(e));
                        Zo(this, f.g[1], e.Xc, f);
                        break;
                    case "get":
                        if (g = Xo(this, f.K), !g.claimed) {
                            var p = {},
                                q = (p[S.Ia] =
                                    f.g[0], p[S.Qa] = f.g[1], p);
                            Zo(this, S.Ga, q, f)
                        }
                }
                this.g.shift();
                $o(this, f)
            }
            e = {
                Na: e.Na,
                Xc: e.Xc
            }
        }
        this.g.push.apply(this.g, c);
        d && this.flush()
    };
    var $o = function(a, b) {
        if ("require" !== b.type)
            if (b.K)
                for (var c = a.getCommandListeners(b.K)[b.type] || [], d = 0; d < c.length; d++) c[d]();
            else
                for (var e in a.o)
                    if (a.o.hasOwnProperty(e)) {
                        var f = a.o[e];
                        if (f && f.o)
                            for (var g = f.o[b.type] || [], k = 0; k < g.length; k++) g[k]()
                    }
    };
    Oo.prototype.getRemoteConfig = function(a) {
        return Xo(this, a).remoteConfig
    };
    Oo.prototype.getCommandListeners = function(a) {
        return Xo(this, a).o
    };
    Oo.prototype.getGlobalConfigValue = function(a) {
        return this.s[a]
    };
    var ap = !1;
    var bp = !1;
    var mp = !1;
    var np = "HA GF G UA AW DC".split(" "),
        op = !1,
        pp = !1,
        qp = !1;

    function rp(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: Ed()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }

    function Sp() {
        return op
    }
    var Tp = {
            config: function(a, b) {
                rp(a, b);
            },
            consent: function(a, b) {
                if (3 === a.length) {
                    Q(39);
                    var c = rp(a, b),
                        d = a[1];
                    "default" === d ? pf(a[2]) : "update" === d && rf(a[2], c)
                }
            },
            event: function(a, b) {
                var c = a[1];
                if (!(2 > a.length) && l(c)) {
                    var d;
                    if (2 < a.length) {
                        if (!ub(a[2]) && void 0 != a[2] || 3 < a.length) return;
                        d = a[2]
                    }
                    var e = d,
                        f = {},
                        g = (f.event = c, f);
                    e && (g.eventModel = N(e), e[S.Qb] && (g.eventCallback = e[S.Qb]), e[S.nd] && (g.eventTimeout = e[S.nd]));
                    var k = rp(a, b),
                        m = k.priorityId;
                    g["gtm.uniqueEventId"] = k.eventId;
                    m && (g["gtm.priorityId"] =
                        m);
                    return b.noGtmEvent ? void 0 : g
                }
            },
            get: function(a, b) {},
            js: function(a, b) {
                if (2 == a.length && a[1].getTime) {
                    pp = !0;
                    Sp();
                    var c = rp(a, b),
                        d = c.eventId,
                        e = c.priorityId,
                        f = {};
                    return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f
                }
            },
            policy: function() {},
            set: function(a, b) {
                var c;
                2 == a.length && ub(a[1]) ? c = N(a[1]) : 3 == a.length && l(a[1]) && (c = {}, ub(a[2]) || ra(a[2]) ? c[a[1]] = N(a[2]) : c[a[1]] = a[2]);
                if (c) {
                    var d = rp(a, b),
                        e = d.eventId,
                        f = d.priorityId;
                    b.overwriteModelFields = !0;
                    return c
                }
            }
        },
        Up = {
            policy: !0
        },
        Vp = function(a, b) {
            if (a.length && l(a[0])) {
                var c = Tp[a[0]];
                if (c && (!b.fromContainerExecution || !Up[a[0]])) return c(a, b)
            }
        };
    var Wp = function(a) {
            var b = G[rd.Z].hide;
            if (b && void 0 !== b[a] && b.end) {
                b[a] = !1;
                var c = !0,
                    d;
                for (d in b)
                    if (b.hasOwnProperty(d) && !0 === b[d]) {
                        c = !1;
                        break
                    }
                c && (b.end(), b.end = null)
            }
        },
        Xp = function(a) {
            var b = G[rd.Z],
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var Yp = !1,
        Zp = [];

    function $p() {
        if (!Yp) {
            Yp = !0;
            for (var a = 0; a < Zp.length; a++) J(Zp[a])
        }
    }
    var aq = function(a) {
        Yp ? J(a) : Zp.push(a)
    };
    var rq = function(a) {
        if (qq(a)) return a;
        this.g = a
    };
    rq.prototype.getUntrustedMessageValue = function() {
        return this.g
    };
    var qq = function(a) {
            return !a || "object" !== sb(a) || ub(a) ? !1 : "getUntrustedMessageValue" in a
        },
        sq = function(a) {
            if (qq(a)) return a.getUntrustedMessageValue()
        };
    rq.prototype.getUntrustedMessageValue = rq.prototype.getUntrustedMessageValue;
    var tq = 0,
        uq = {},
        vq = [],
        wq = [],
        xq = !1,
        yq = !1;

    function zq(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }
    var Aq = function(a) {
            return G[rd.Z].push(a)
        },
        Bq = function(a, b) {
            var c = U[rd.Z],
                d = c ? c.subscribers : 1,
                e = 0,
                f = !1,
                g = void 0;
            b && (g = G.setTimeout(function() {
                f || (f = !0, a());
                g = void 0
            }, b));
            return function() {
                ++e === d && (g && (G.clearTimeout(g), g = void 0), f || (a(), f = !0))
            }
        };

    function Cq(a, b) {
        var c = !!fl[10] && a._clear || b.overwriteModelFields;
        A(a, function(e, f) {
            "_clear" !== e && (c && Od(e), Od(e, f))
        });
        Ad || (Ad = a["gtm.start"]);
        var d = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        "number" !== typeof d && (d = Ed(), a["gtm.uniqueEventId"] = d, Od("gtm.uniqueEventId", d));
        return el(a)
    }
    var Dq = function(a) {
        if (l(a[0])) {
            var b = a[0].split("."),
                c = b.pop(),
                d = a.slice(1),
                e = Ld(b.join("."), 2);
            if (null != e) try {
                e[c].apply(e, d)
            } catch (f) {}
        }
    };

    function Eq(a) {
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (wa(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b || "get" === b) return !0
        }
        return !1
    }

    function Fq() {
        var a;
        if (wq.length) a = wq.shift();
        else if (vq.length) a = {
            message: vq.shift(),
            messageContext: {}
        };
        else return;
        qq(a.message) && (a.message = sq(a.message), a.messageContext.fromContainerExecution = !0);
        var b;
        var c = a;
        if (xq || !Eq(c.message)) b = c;
        else {
            xq = !0;
            var d = c.message["gtm.uniqueEventId"];
            "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Ed());
            var e = {},
                f = (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e),
                g = {},
                k = (g.event = "gtm.init", g["gtm.uniqueEventId"] = d - 1, g);
            vq.unshift(k, c.message);
            b = {
                message: f,
                messageContext: {}
            }
        }
        return b
    }

    function Gq() {
        for (var a = !1, b; !yq && (b = Fq());) {
            yq = !0;
            Pd();
            var c = b,
                d = c.message,
                e = c.messageContext;
            if (null != d) {
                e.fromContainerExecution && Qd();
                try {
                    if (pa(d)) try {
                            d.call(Md)
                        } catch (g) {} else if (ra(d)) Dq(d);
                        else {
                            if (wa(d) && (d = Vp(d, e), !d)) {
                                yq = !1;
                                continue
                            }
                            a = Cq(d, e) || a;
                            if (Eq(d)) {
                                var f = d["gtm.uniqueEventId"];
                                void 0 !== f && (Hq(f), tq = f)
                            }
                        }
                } finally {
                    e.fromContainerExecution && Kd(!0)
                }
            }
            yq = !1
        }
        return !a
    }

    function Iq() {
        for (var a = !1; !yq && (0 < vq.length || 0 < wq.length);) {
            if (!xq && Eq(vq[0])) {
                var b = {},
                    c = (b.event = "gtm.init_consent", b),
                    d = {},
                    e = (d.event = "gtm.init", d),
                    f = vq[0]["gtm.uniqueEventId"];
                fl[8] && "number" !== typeof f && (f = vq[0]["gtm.uniqueEventId"] = Ed());
                "number" === typeof f && (c["gtm.uniqueEventId"] = f - 2, e["gtm.uniqueEventId"] = f - 1);
                vq.unshift(c, e);
                xq = !0;
            }
            yq = !0;
            Pd();
            var g = null,
                k = void 0;
            if (wq.length) {
                var m = wq.shift();
                g = m.message;
                k = m.messageContext
            }
            null == g && (g = vq.shift(), k = {});
            if (null != g) {
                qq(g) && (g = sq(g), k.fromContainerExecution = !0);
                k.fromContainerExecution && Qd();
                try {
                    if (pa(g)) try {
                            g.call(Md)
                        } catch (p) {} else if (ra(g)) Dq(g);
                        else {
                            if (wa(g) && (g = Vp(g, k), !g)) {
                                yq = !1;
                                continue
                            }
                            a = Cq(g, k) || a;
                            if (Eq(g)) {
                                var n = g["gtm.uniqueEventId"];
                                void 0 !== n && (Hq(n), tq = n)
                            }
                        }
                } finally {
                    k.fromContainerExecution &&
                        Kd(!0)
                }
            }
            yq = !1
        }
        return !a
    }

    function Jq() {
        var b = fl[11] ? Gq() : Iq();
        try {
            Wp(Jh.H)
        } catch (c) {}
        return b
    }

    function Kk(a) {
        if (tq < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            uq[b] = uq[b] || [];
            uq[b].push(a)
        } else wq.push(Lq(a)), wq.sort(zq), J(function() {
            yq || (fl[11] ? Gq() : Iq())
        })
    }

    function Lq(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }

    function Hq(a) {
        for (var b = uq[String(a)] || [], c = 0; c < b.length; c++) wq.push(Lq(b[c]));
        b.length && wq.sort(zq);
        delete uq[String(a)]
    }
    var Mq = function() {
            var a = ab(rd.Z, []),
                b = ab("google_tag_manager", {});
            uq = Ik().get();
            Lk();
            b = b[rd.Z] = b[rd.Z] || {};
            vj(function() {
                if (!b.gtmDom) {
                    b.gtmDom = !0;
                    var e = {};
                    a.push((e.event = "gtm.dom", e))
                }
            });
            aq(function() {
                if (!b.gtmLoad) {
                    b.gtmLoad = !0;
                    var e = {};
                    a.push((e.event = "gtm.load", e))
                }
            });
            b.subscribers = (b.subscribers || 0) + 1;
            var c = a.push;
            a.push = function() {
                var e;
                if (0 < U.SANDBOXED_JS_SEMAPHORE) {
                    e = [];
                    for (var f = 0; f < arguments.length; f++) e[f] = new rq(arguments[f])
                } else e = [].slice.call(arguments, 0);
                vq.push.apply(vq, e);
                var g =
                    c.apply(a, e);
                if (300 < this.length)
                    for (Q(4); 300 < this.length;) this.shift();
                var k = "boolean" !== typeof g || g;
                return (fl[11] ? Gq() : Iq()) && k
            };
            var d = a.slice(0);
            vq.push.apply(vq, d);
            if (Kq()) {
                J(Jq)
            }
        },
        Kq = function() {
            var a = !0;
            return a
        };

    function Nq(a) {
        if (null == a || 0 === a.length) return !1;
        var b = Number(a),
            c = Da();
        return b < c + 3E5 && b > c - 9E5
    };
    var Oq = {};
    Oq.Ad = new String("undefined");
    var or = G.clearTimeout,
        pr = G.setTimeout,
        W = function(a, b, c, d) {
            if (Ih()) {
                b && J(b)
            } else return fb(a, b, c, d)
        },
        qr = function() {
            return new Date
        },
        rr = function() {
            return G.location.href
        },
        sr = function(a) {
            return he(je(a), "fragment")
        },
        tr = function(a) {
            return ie(je(a))
        },
        ur = function(a, b) {
            return Ld(a, b || 2)
        },
        vr = function(a, b, c) {
            var d;
            b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = Aq(a)) : d = Aq(a);
            return d
        },
        wr = function(a, b) {
            G[a] = b
        },
        X = function(a, b, c) {
            b &&
                (void 0 === G[a] || c && !G[a]) && (G[a] = b);
            return G[a]
        },
        xr = function(a, b, c) {
            return Df(a, b, void 0 === c ? !0 : !!c)
        },
        yr = function(a, b, c) {
            return 0 === Mf(a, b, c)
        },
        zr = function(a, b) {
            if (Ih()) {
                b && J(b)
            } else hb(a, b)
        },
        Ar = function(a) {
            return !!Vq(a, "init", !1)
        },
        Br = function(a) {
            Tq(a, "init", !0)
        },
        Cr = function(a, b, c) {
            Si && (vb(a) || fj(c, b, a))
        };
    var $r = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];

    function as(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) === c
    }
    var bs = new ua;

    function cs(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d,
                f = bs.get(e);
            f || (f = new RegExp(b, d), bs.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }

    function ds(a, b) {
        function c(g) {
            var k = je(g),
                m = he(k, "protocol"),
                n = he(k, "host", !0),
                p = he(k, "port"),
                q = he(k, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p) m = "web", p = "default";
            return [m, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function es(a) {
        return fs(a) ? 1 : 0
    }

    function fs(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = N(a, {});
                N({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (es(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a: {
                    if (b) try {
                        for (var g = 0; g < $r.length; g++) {
                            var k = $r[g];
                            if (b[k]) {
                                f = b[k](c);
                                break a
                            }
                        }
                    } catch (m) {}
                    f = !1
                }
                return f;
            case "_ew":
                return as(b, c);
            case "_eq":
                return String(b) === String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                return 0 <= String(b).split(",").indexOf(String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                return cs(b, c, a.ignore_case);
            case "_sw":
                return 0 === String(b).indexOf(String(c));
            case "_um":
                return ds(b, c)
        }
        return !1
    };
    Object.freeze({
        dl: 1,
        id: 1
    });
    Object.freeze(["config", "event", "get", "set"]);
    var ls = encodeURI,
        Y = encodeURIComponent,
        ms = ib;
    var ns = function(a, b) {
            if (!a) return !1;
            var c = he(je(a), "host");
            if (!c) return !1;
            for (var d = 0; b && d < b.length; d++) {
                var e = b[d] && b[d].toLowerCase();
                if (e) {
                    var f = c.length - e.length;
                    0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                    if (0 <= f && c.indexOf(e, f) == f) return !0
                }
            }
            return !1
        },
        os = function(a, b, c) {
            for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
            return e ? d : null
        };

    function Mt() {
        return G.gaGlobal = G.gaGlobal || {}
    }
    var Nt = function() {
            var a = Mt();
            a.hid = a.hid || ta();
            return a.hid
        },
        Ot = function(a, b) {
            var c = Mt();
            if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
        };
    var su = function() {
        if (pa(G.__uspapi)) {
            var a = "";
            try {
                G.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var Xu = window,
        Yu = document,
        Zu = function(a) {
            var b = Xu._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && !0 === Xu["ga-disable-" + a]) return !0;
            try {
                var c = Xu.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (f) {}
            for (var d = xf("AMP_TOKEN", String(Yu.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return Yu.getElementById("__gaOptOutExtension") ? !0 : !1
        };
    var $u = {};

    function hv(a) {
        delete a.eventModel[S.Vb];
        ov(a.eventModel)
    }
    var ov = function(a) {
        A(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[S.Ka] || {};
        A(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var Kv = function(a, b, c, d) {
            d = d || {};
            d.fromContainerExecution = !0;
            Qo(b, c, a, d)
        },
        Lv = function(a, b) {
            var c;
            c = c || {};
            c.fromContainerExecution = !0;
            Ro(b, a, c)
        },
        Mv = function(a, b, c, d) {
            d = d || {};
            d.deferrable = !0;
            d.fromContainerExecution = !0;
            Qo(b, c, a, d)
        },
        Ov = function(a, b) {};

    function Nv(a, b) {}
    var Z = {
        h: {}
    };




    Z.h.e = ["google"],
        function() {
            (function(a) {
                Z.__e = a;
                Z.__e.m = "e";
                Z.__e.isVendorTemplate = !0;
                Z.__e.priorityOverride = 0
            })(function(a) {
                return String(a.vtp_gtmCachedValues.event)
            })
        }();
    Z.h.f = ["google"],
        function() {
            (function(a) {
                Z.__f = a;
                Z.__f.m = "f";
                Z.__f.isVendorTemplate = !0;
                Z.__f.priorityOverride = 0
            })(function(a) {
                var b = ur("gtm.referrer", 1) || H.referrer;
                return b ? a.vtp_component && "URL" != a.vtp_component ? he(je(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : tr(String(b)) : String(b)
            })
        }();

    Z.h.u = ["google"],
        function() {
            var a = function(b) {
                return {
                    toString: function() {
                        return b
                    }
                }
            };
            (function(b) {
                Z.__u = b;
                Z.__u.m = "u";
                Z.__u.isVendorTemplate = !0;
                Z.__u.priorityOverride = 0
            })(function(b) {
                var c;
                c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : ur("gtm.url", 1)) || rr();
                var d = b[a("vtp_component")];
                if (!d || "URL" == d) return tr(String(c));
                var e = je(String(c)),
                    f;
                if ("QUERY" === d) a: {
                    var g = b[a("vtp_multiQueryKeys").toString()],
                        k = b[a("vtp_queryKey").toString()] || "",
                        m = b[a("vtp_ignoreEmptyQueryParam").toString()],
                        n;g ? ra(k) ?
                    n = k : n = String(k).replace(/\s+/g, "").split(",") : n = [String(k)];
                    for (var p = 0; p < n.length; p++) {
                        var q = he(e, "QUERY", void 0, void 0, n[p]);
                        if (void 0 != q && (!m || "" !== q)) {
                            f = q;
                            break a
                        }
                    }
                    f = void 0
                }
                else f = he(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0);
                return f
            })
        }();
















    var Pv = {};
    Pv.dataLayer = Md;
    Pv.callback = function(a) {
        Cd.hasOwnProperty(a) && pa(Cd[a]) && Cd[a]();
        delete Cd[a]
    };
    Pv.bootstrap = 0;
    Pv._spx = !1;
    (function(a) {
        if (!G["__TAGGY_INSTALLED"]) {
            var b = !1;
            if (H.referrer) {
                var c = je(H.referrer);
                b = "cct.google" === ge(c, "host")
            }
            if (!b) {
                var d = Df("googTaggyReferrer");
                b = d.length && d[0].length
            }
            b && (G["__TAGGY_INSTALLED"] = !0, fb("https://cct.google/taggy/agent.js"))
        }
        var f = function(q) {
                var r = "GTM",
                    t = "GTM";
                var u = G["google.tagmanager.debugui2.queue"];
                u || (u = [], G["google.tagmanager.debugui2.queue"] = u, fb("https://" + rd.nc + "/debug/bootstrap?id=" + Jh.H + "&src=" + t + "&cond=" + q + "&gtm=" + Th()));
                var v = {
                    messageType: "CONTAINER_STARTING",
                    data: {
                        scriptSource: $a,
                        containerProduct: r,
                        debug: !1,
                        id: Jh.H
                    }
                };
                v.data.resume = function() {
                    a()
                };
                rd.Ah && (v.data.initialPublish = !0);
                u.push(v)
            },
            g = void 0,
            k = he(G.location, "query", !1, void 0, "gtm_debug");
        Nq(k) && (g = 2);
        if (!g && H.referrer) {
            var m = je(H.referrer);
            "tagassistant.google.com" === ge(m, "host") && (g = 3)
        }
        if (!g) {
            var n = Df("__TAG_ASSISTANT");
            n.length && n[0].length && (g = 4)
        }
        if (!g) {
            var p = H.documentElement.getAttribute("data-tag-assistant-present");
            Nq(p) && (g = 5)
        }
        g && $a ? f(g) : a()
    })(function() {
        var a = !1;
        a && Gj("INIT");
        Te().o();
        Sl();
        Vg.enable_gbraid_cookie_write = !0;
        var b = !!U[Jh.H];
        if (b) {
            var c = U.zones;
            c && c.unregisterChild(Lh());
        } else {
            for (var d = Mh(), e = 0; e < d.length; e++) {
                var f = d[e],
                    g = Jh.H;
                U.addDestinationToContainer ? U.addDestinationToContainer(f, g) : (U.pendingDestinationIds = U.pendingDestinationIds || [], U.pendingDestinationIds.push([f, g]))
            }
            for (var k = data.resource || {}, m = k.macros || [], n = 0; n < m.length; n++) Vb.push(m[n]);
            for (var p = k.tags || [], q = 0; q < p.length; q++) Yb.push(p[q]);
            for (var r = k.predicates || [], t = 0; t < r.length; t++) Xb.push(r[t]);
            for (var u = k.rules || [], v = 0; v < u.length; v++) {
                for (var x =
                        u[v], y = {}, w = 0; w < x.length; w++) y[x[w][0]] = Array.prototype.slice.call(x[w], 1);
                Wb.push(y)
            }
            $b = Z;
            ac = es;
            U[Jh.H] = Pv;
            for (var B = Oh(), z = Lh(), C = 0; C < z.length; C++) B.container[z[C]] = !0;
            for (var E = Mh(), F = 0; F < E.length; F++) B.destination[E[F]] = !0;
            B.canonical[Jh.mc] = !0;
            Ga(Dd, Z.h);
            cc = mc;
            Mq();
            qj = !1;
            rj = 0;
            if ("interactive" == H.readyState && !H.createEventObject || "complete" == H.readyState) tj();
            else {
                jb(H, "DOMContentLoaded", tj);
                jb(H, "readystatechange", tj);
                if (H.createEventObject && H.documentElement.doScroll) {
                    var D = !0;
                    try {
                        D = !G.frameElement
                    } catch (O) {}
                    D && uj()
                }
                jb(G, "load", tj)
            }
            Yp = !1;
            "complete" === H.readyState ? $p() : jb(G, "load", $p);
            Si && G.setInterval(Li, 864E5);
            Bd = Da();
            if (a) {
                var P = Hj("INIT");
            }
        }
    });

})()