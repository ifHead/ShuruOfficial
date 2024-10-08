/*!
 * ScrollSmoother 3.10.4
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * This plugin is a membership benefit of Club GreenSock and is only authorized for use in sites/apps/products developed by individuals/companies with an active Club GreenSock membership. See https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */

! function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function (e) {
    "use strict";

    function _defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function q() {
        return "undefined" != typeof window
    }

    function r() {
        return B || q() && (B = window.gsap) && B.registerPlugin && B
    }
    var B, H, F, z, M, I, U, D, L, N, O, V, j, t = (ScrollSmoother.register = function register(e) {
        return H || (B = e || r(), q() && window.document && (F = window, z = document, M = z.documentElement, I = z.body), B && (U = B.utils.toArray, D = B.utils.clamp, O = B.parseEase("expo"), L = B.core.globals().ScrollTrigger, B.core.globals("ScrollSmoother", ScrollSmoother), I && L && (V = L.core._getVelocityProp, j = L.core._inputObserver, ScrollSmoother.refresh = L.refresh, H = 1))), H
    }, function _createClass(e, t, r) {
        return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
    }(ScrollSmoother, [{
        key: "progress",
        get: function get() {
            return this.scrollTrigger.animation._time / 100
        }
    }]), ScrollSmoother);

    function ScrollSmoother(e) {
        var o = this;
        H || ScrollSmoother.register(B) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"), e = this.vars = e || {}, N && N.kill(), N = this;

        function ra() {
            return _.update(-k)
        }

        function ta() {
            return n.style.overflow = "visible"
        }

        function va(e) {
            e.update();
            var t = e.getTween();
            t && (t.pause(), t._time = t._dur, t._tTime = t._tDur), h = !1, e.animation.progress(e.progress, !0)
        }

        function wa(e, t) {
            (e !== k && !u || t) && (E && (n.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)"), C = e - k, k = e, L.isUpdating || L.update())
        }

        function xa(e) {
            return arguments.length ? (u ? k = -e : wa(-e), R.y = -e, h = !0, x(e), this) : -k - x.offset
        }

        function za(e) {
            m.scrollTop = 0, S && !1 === S(o, e) || (L.isInViewport(e.target) || e.target === d || o.scrollTo(e.target, !1, "center center"), d = e.target)
        }

        function Aa(e) {
            var r, n, o, i;
            w.forEach(function (t) {
                r = t.pins, i = t.markers, e.forEach(function (e) {
                    e.trigger !== t.trigger && e.pinnedContainer !== t.trigger || t === e || (n = e.start, o = (n - t.start - t.offset) / t.ratio - (n - t.start), r.forEach(function (e) {
                        return o -= e.distance / t.ratio - e.distance
                    }), e.setPositions(n + o, e.end + o), e.markerStart && i.push(B.quickSetter([e.markerStart, e.markerEnd], "y", "px")), e.pin && 0 < e.end && (o = e.end - e.start, r.push({
                        start: e.start,
                        end: e.end,
                        distance: o,
                        trig: e
                    }), t.setPositions(t.start, t.end + o), t.vars.onRefresh(t)))
                })
            })
        }

        function Ba() {
            ta(), requestAnimationFrame(ta), w && (w.forEach(function (e) {
                var t = e.start,
                    r = e.auto ? Math.min(L.maxScroll(e.scroller), e.end) : t + (e.end - t) / e.ratio,
                    n = (r - e.end) / 2;
                t -= n, r -= n, e.offset = n || 1e-4, e.pins.length = 0, e.setPositions(Math.min(t, r), Math.max(t, r)), e.vars.onRefresh(e)
            }), Aa(L.sort())), _.reset()
        }

        function Ca() {
            return w && w.forEach(function (e) {
                return e.vars.onRefresh(e)
            })
        }

        function Da() {
            return w && w.forEach(function (e) {
                return e.vars.onRefreshInit(e)
            }), Ca
        }

        function Ea(t, r, n, o) {
            return function () {
                var e = "function" == typeof r ? r(n, o) : r;
                return e || 0 === e || (e = o.getAttribute("data-" + t) || ("speed" === t ? 1 : 0)), o.setAttribute("data-" + t, e), "auto" === e ? e : parseFloat(e)
            }
        }

        function Fa(r, e, t, n) {
            function tb() {
                e = s(), t = f(), o = parseFloat(e) || 1, c = (a = "auto" === e) ? 0 : .5, l && l.kill(), l = t && B.to(r, {
                    ease: O,
                    overwrite: !1,
                    y: "+=0",
                    duration: t
                }), i && (i.ratio = o, i.autoSpeed = a)
            }

            function ub() {
                d.y = h + "px", d.renderTransform(1), tb()
            }

            function yb(e) {
                if (a) {
                    ub();
                    var t = function _autoDistance(e, t) {
                        var r, n, o = e.parentNode || M,
                            i = e.getBoundingClientRect(),
                            s = o.getBoundingClientRect(),
                            a = s.top - i.top,
                            l = s.bottom - i.bottom,
                            c = (Math.abs(a) > Math.abs(l) ? a : l) / (1 - t),
                            u = -c * t;
                        return 0 < c && (u += -(n = .5 == (r = s.height / (F.innerHeight + s.height)) ? 2 * s.height : 2 * Math.min(s.height, -c * r / (2 * r - 1))) / 2, c += n), {
                            change: c,
                            offset: u
                        }
                    }(r, D(0, 1, -e.start / (e.end - e.start)));
                    v = t.change, u = t.offset
                } else v = (e.end - e.start) * (1 - o), u = 0;
                g.forEach(function (e) {
                    return v -= e.distance * (1 - o)
                }), e.vars.onUpdate(e), l && l.progress(1)
            }
            var o, i, a, l, c, u, s = Ea("speed", e, n, r),
                f = Ea("lag", t, n, r),
                h = B.getProperty(r, "y"),
                d = r._gsap,
                g = [],
                p = [],
                v = 0;
            return tb(), (1 !== o || a || l) && (yb(i = L.create({
                trigger: a ? r.parentNode : r,
                scroller: m,
                scrub: !0,
                refreshPriority: -999,
                onRefreshInit: ub,
                onRefresh: yb,
                onKill: function onKill(e) {
                    var t = w.indexOf(e);
                    0 <= t && w.splice(t, 1), ub()
                },
                onUpdate: function onUpdate(e) {
                    var t, r, n, o = h + v * (e.progress - c),
                        i = g.length,
                        s = 0;
                    if (e.offset) {
                        if (i) {
                            for (r = -k, n = e.end; i--;) {
                                if ((t = g[i]).trig.isActive || r >= t.start && r <= t.end) return void(l && (t.trig.progress += t.trig.direction < 0 ? .001 : -.001, t.trig.update(0, 0, 1), l.resetTo("y", parseFloat(d.y), -C, !0), P && l.progress(1)));
                                r > t.end && (s += t.distance), n -= t.distance
                            }
                            o = h + s + v * ((B.utils.clamp(e.start, e.end, r) - e.start - s) / (n - e.start) - c)
                        }
                        o = function _round(e) {
                            return Math.round(1e5 * e) / 1e5 || 0
                        }(o + u), p.length && !a && p.forEach(function (e) {
                            return e(o - s)
                        }), l ? (l.resetTo("y", o, -C, !0), P && l.progress(1)) : (d.y = o + "px", d.renderTransform(1))
                    }
                }
            })), B.core.getCache(i.trigger).stRevert = Da, i.startY = h, i.pins = g, i.markers = p, i.ratio = o, i.autoSpeed = a, r.style.willChange = "transform"), i
        }
        var n, m, t, i, w, s, a, l, c, u, r, f, h, d, g = e.smoothTouch,
            p = e.onUpdate,
            v = e.onStop,
            b = e.smooth,
            S = e.onFocusIn,
            T = e.normalizeScroll,
            x = L.getScrollFunc(F),
            E = 1 === L.isTouch ? !0 === g ? .8 : parseFloat(g) || 0 : 0 === b || !1 === b ? 0 : parseFloat(b) || .8,
            k = 0,
            C = 0,
            P = 1,
            _ = V(0),
            R = {
                y: 0
            };

        function refreshHeight() {
            return t = n.clientHeight, n.style.overflow = "visible", I.style.height = t + "px", t - F.innerHeight
        }
        L.addEventListener("refresh", Ba), B.delayedCall(.5, function () {
            return P = 0
        }), this.scrollTop = xa, this.scrollTo = function (e, t, r) {
            var n = B.utils.clamp(0, L.maxScroll(F), isNaN(e) ? o.offset(e, r) : +e);
            t ? u ? B.to(o, {
                duration: E,
                scrollTop: n,
                overwrite: "auto",
                ease: O
            }) : x(n) : xa(n)
        }, this.offset = function (e, t) {
            var r, n = (e = U(e)[0]).style.cssText,
                o = L.create({
                    trigger: e,
                    start: t || "top top"
                });
            return w && Aa([o]), r = o.start, o.kill(!1), e.style.cssText = n, B.core.getCache(e).uncache = 1, r
        }, this.content = function (e) {
            if (arguments.length) {
                var t = U(e || "#smooth-content")[0] || I.children[0];
                return t !== n && (c = (n = t).getAttribute("style") || "", B.set(n, {
                    overflow: "visible",
                    width: "100%",
                    boxSizing: "border-box"
                })), this
            }
            return n
        }, this.wrapper = function (e) {
            return arguments.length ? (m = U(e || "#smooth-wrapper")[0] || function _wrap(e) {
                var t = z.querySelector(".ScrollSmoother-wrapper");
                return t || ((t = z.createElement("div")).classList.add("ScrollSmoother-wrapper"), e.parentNode.insertBefore(t, e), t.appendChild(e)), t
            }(n), l = m.getAttribute("style") || "", refreshHeight(), B.set(m, E ? {
                overflow: "hidden",
                position: "fixed",
                height: "100%",
                width: "100%",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            } : {
                overflow: "visible",
                position: "relative",
                width: "100%",
                height: "auto",
                top: "auto",
                bottom: "auto",
                left: "auto",
                right: "auto"
            }), this) : m
        }, this.effects = function (e, t) {
            if (w = w || [], !e) return w.slice(0);
            (e = U(e)).forEach(function (e) {
                for (var t = w.length; t--;) w[t].trigger === e && (w[t].kill(), w.splice(t, 1))
            });
            t = t || {};
            var r, n, o = t.speed,
                i = t.lag,
                s = [];
            for (r = 0; r < e.length; r++)(n = Fa(e[r], o, i, r)) && s.push(n);
            return w.push.apply(w, s), s
        }, this.sections = function (e, t) {
            if (s = s || [], !e) return s.slice(0);
            var r = U(e).map(function (t) {
                return L.create({
                    trigger: t,
                    start: "top 120%",
                    end: "bottom -20%",
                    onToggle: function onToggle(e) {
                        t.style.opacity = e.isActive ? "1" : "0", t.style.pointerEvents = e.isActive ? "all" : "none"
                    }
                })
            });
            return t && t.add ? s.push.apply(s, r) : s = r.slice(0), r
        }, this.content(e.content), this.wrapper(e.wrapper), this.render = function (e) {
            return wa(e || 0 === e ? e : k)
        }, this.getVelocity = function () {
            return _.getVelocity(-k)
        }, L.scrollerProxy(m, {
            scrollTop: xa,
            scrollHeight: function scrollHeight() {
                return refreshHeight() && I.scrollHeight
            },
            fixedMarkers: !1 !== e.fixedMarkers && !!E,
            content: n,
            getBoundingClientRect: function getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: F.innerWidth,
                    height: F.innerHeight
                }
            }
        }), L.defaults({
            scroller: m
        });
        var A = L.getAll().filter(function (e) {
            return e.scroller === F || e.scroller === m
        });
        A.forEach(function (e) {
            return e.revert(!0)
        }), i = L.create({
            animation: B.to(R, {
                y: function y() {
                    return -refreshHeight()
                },
                ease: "none",
                data: "ScrollSmoother",
                duration: 100,
                onUpdate: function onUpdate() {
                    var e = h;
                    e && (R.y = k, va(i)), wa(R.y, e), ra(), p && !u && p(o)
                }
            }),
            onRefreshInit: function onRefreshInit() {
                f = k, R.y = m.scrollTop = 0
            },
            id: "ScrollSmoother",
            scroller: F,
            invalidateOnRefresh: !0,
            start: 0,
            refreshPriority: -9999,
            end: refreshHeight,
            onScrubComplete: function onScrubComplete() {
                _.reset(), v && v(o)
            },
            scrub: E || !0,
            onRefresh: function onRefresh(e) {
                va(e), R.y = -x(), wa(R.y), P || e.animation.progress(B.utils.clamp(0, 1, f / -e.end))
            }
        }), this.smooth = function (e) {
            return E = e, arguments.length ? i.scrubDuration(e) : i.getTween() ? i.getTween().duration() : 0
        }, i.getTween() && (i.getTween().vars.ease = e.ease || O), this.scrollTrigger = i, e.effects && this.effects(!0 === e.effects ? "[data-speed], [data-lag]" : e.effects, {}), e.sections && this.sections(!0 === e.sections ? "[data-section]" : e.sections), A.forEach(function (e) {
            e.vars.scroller = m, e.init(e.vars, e.animation)
        }), this.paused = function (e, t) {
            return arguments.length ? (!!u !== e && (e ? (i.getTween() && i.getTween().pause(), x(-k), _.reset(), (r = L.normalizeScroll()) && r.disable(), (u = L.observe({
                preventDefault: !0,
                type: "wheel,touch,scroll",
                debounce: !1,
                allowClicks: !0,
                onChangeY: function onChangeY() {
                    return xa(-k)
                }
            })).nested = j(M, "wheel,touch,scroll", !0, !1 !== t)) : (u.nested.kill(), u.kill(), u = 0, r && r.enable(), i.progress = (-k - i.start) / (i.end - i.start), va(i))), this) : !!u
        }, this.kill = function () {
            o.paused(!1), va(i), i.kill();
            for (var e = (w || []).concat(s || []), t = e.length; t--;) e[t].kill();
            L.scrollerProxy(m), L.removeEventListener("refresh", Ba), I.style.removeProperty("height"), m.style.cssText = l, n.style.cssText = c;
            var r = L.defaults({});
            r && r.scroller === m && L.defaults({
                scroller: F
            }), o.normalizer && L.normalizeScroll(!1), clearInterval(a), N = null, F.removeEventListener("focusin", za)
        }, this.refresh = function (e, t) {
            return i.refresh(e, t)
        }, T && (this.normalizer = L.normalizeScroll(!0 === T ? {
            debounce: !0,
            content: n
        } : T)), L.config(e), "overscrollBehavior" in F.getComputedStyle(I) && B.set([I, M], {
            overscrollBehavior: "none"
        }), "scrollBehavior" in F.getComputedStyle(I) && B.set([I, M], {
            scrollBehavior: "auto"
        }), F.addEventListener("focusin", za), a = setInterval(ra, 250), "loading" === z.readyState || requestAnimationFrame(function () {
            return L.refresh()
        })
    }
    t.version = "3.10.4", t.create = function (e) {
        return N && e && N.content() === U(e.content)[0] ? N : new t(e)
    }, t.get = function () {
        return N
    }, r() && B.registerPlugin(t), e.ScrollSmoother = t, e.default = t;
    if (typeof (window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});
