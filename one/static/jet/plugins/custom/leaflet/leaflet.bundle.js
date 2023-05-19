/* @preserve
 * Leaflet 1.7.1, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2019 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
!(function (t, i) {
  'object' == typeof exports && 'undefined' != typeof module
    ? i(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], i)
    : i((t.L = {}));
})(this, function (t) {
  'use strict';
  function h(t) {
    for (var i, e, n = 1, o = arguments.length; n < o; n++)
      for (i in (e = arguments[n])) t[i] = e[i];
    return t;
  }
  var s =
    Object.create ||
    function (t) {
      return (i.prototype = t), new i();
    };
  function i() {}
  function p(t, i) {
    var e = Array.prototype.slice;
    if (t.bind) return t.bind.apply(t, e.call(arguments, 1));
    var n = e.call(arguments, 2);
    return function () {
      return t.apply(i, n.length ? n.concat(e.call(arguments)) : arguments);
    };
  }
  var e = 0;
  function m(t) {
    return (t._leaflet_id = t._leaflet_id || ++e), t._leaflet_id;
  }
  function n(t, i, e) {
    var n,
      o,
      s = function () {
        (n = !1), o && (r.apply(e, o), (o = !1));
      },
      r = function () {
        n
          ? (o = arguments)
          : (t.apply(e, arguments), setTimeout(s, i), (n = !0));
      };
    return r;
  }
  function o(t, i, e) {
    var n = i[1],
      o = i[0],
      s = n - o;
    return t === n && e ? t : ((((t - o) % s) + s) % s) + o;
  }
  function a() {
    return !1;
  }
  function r(t, i) {
    var e = Math.pow(10, void 0 === i ? 6 : i);
    return Math.round(t * e) / e;
  }
  function u(t) {
    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, '');
  }
  function l(t) {
    return u(t).split(/\s+/);
  }
  function c(t, i) {
    for (var e in (Object.prototype.hasOwnProperty.call(t, 'options') ||
      (t.options = t.options ? s(t.options) : {}),
    i))
      t.options[e] = i[e];
    return t.options;
  }
  function _(t, i, e) {
    var n = [];
    for (var o in t)
      n.push(
        encodeURIComponent(e ? o.toUpperCase() : o) +
          '=' +
          encodeURIComponent(t[o]),
      );
    return (i && -1 !== i.indexOf('?') ? '&' : '?') + n.join('&');
  }
  var d = /\{ *([\w_-]+) *\}/g;
  function f(t, n) {
    return t.replace(d, function (t, i) {
      var e = n[i];
      if (void 0 === e) throw new Error('No value provided for variable ' + t);
      return 'function' == typeof e && (e = e(n)), e;
    });
  }
  var g =
    Array.isArray ||
    function (t) {
      return '[object Array]' === Object.prototype.toString.call(t);
    };
  function v(t, i) {
    for (var e = 0; e < t.length; e++) if (t[e] === i) return e;
    return -1;
  }
  var y = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
  function x(t) {
    return window['webkit' + t] || window['moz' + t] || window['ms' + t];
  }
  var w = 0;
  function P(t) {
    var i = +new Date(),
      e = Math.max(0, 16 - (i - w));
    return (w = i + e), window.setTimeout(t, e);
  }
  var b = window.requestAnimationFrame || x('RequestAnimationFrame') || P,
    T =
      window.cancelAnimationFrame ||
      x('CancelAnimationFrame') ||
      x('CancelRequestAnimationFrame') ||
      function (t) {
        window.clearTimeout(t);
      };
  function M(t, i, e) {
    if (!e || b !== P) return b.call(window, p(t, i));
    t.call(i);
  }
  function z(t) {
    t && T.call(window, t);
  }
  var C = {
    extend: h,
    create: s,
    bind: p,
    lastId: e,
    stamp: m,
    throttle: n,
    wrapNum: o,
    falseFn: a,
    formatNum: r,
    trim: u,
    splitWords: l,
    setOptions: c,
    getParamString: _,
    template: f,
    isArray: g,
    indexOf: v,
    emptyImageUrl: y,
    requestFn: b,
    cancelFn: T,
    requestAnimFrame: M,
    cancelAnimFrame: z,
  };
  function S() {}
  (S.extend = function (t) {
    function i() {
      this.initialize && this.initialize.apply(this, arguments),
        this.callInitHooks();
    }
    var e = (i.__super__ = this.prototype),
      n = s(e);
    for (var o in (((n.constructor = i).prototype = n), this))
      Object.prototype.hasOwnProperty.call(this, o) &&
        'prototype' !== o &&
        '__super__' !== o &&
        (i[o] = this[o]);
    return (
      t.statics && (h(i, t.statics), delete t.statics),
      t.includes &&
        ((function (t) {
          if ('undefined' == typeof L || !L || !L.Mixin) return;
          t = g(t) ? t : [t];
          for (var i = 0; i < t.length; i++)
            t[i] === L.Mixin.Events &&
              console.warn(
                'Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.',
                new Error().stack,
              );
        })(t.includes),
        h.apply(null, [n].concat(t.includes)),
        delete t.includes),
      n.options && (t.options = h(s(n.options), t.options)),
      h(n, t),
      (n._initHooks = []),
      (n.callInitHooks = function () {
        if (!this._initHooksCalled) {
          e.callInitHooks && e.callInitHooks.call(this),
            (this._initHooksCalled = !0);
          for (var t = 0, i = n._initHooks.length; t < i; t++)
            n._initHooks[t].call(this);
        }
      }),
      i
    );
  }),
    (S.include = function (t) {
      return h(this.prototype, t), this;
    }),
    (S.mergeOptions = function (t) {
      return h(this.prototype.options, t), this;
    }),
    (S.addInitHook = function (t) {
      var i = Array.prototype.slice.call(arguments, 1),
        e =
          'function' == typeof t
            ? t
            : function () {
                this[t].apply(this, i);
              };
      return (
        (this.prototype._initHooks = this.prototype._initHooks || []),
        this.prototype._initHooks.push(e),
        this
      );
    });
  var Z = {
    on: function (t, i, e) {
      if ('object' == typeof t) for (var n in t) this._on(n, t[n], i);
      else
        for (var o = 0, s = (t = l(t)).length; o < s; o++) this._on(t[o], i, e);
      return this;
    },
    off: function (t, i, e) {
      if (t)
        if ('object' == typeof t) for (var n in t) this._off(n, t[n], i);
        else
          for (var o = 0, s = (t = l(t)).length; o < s; o++)
            this._off(t[o], i, e);
      else delete this._events;
      return this;
    },
    _on: function (t, i, e) {
      this._events = this._events || {};
      var n = this._events[t];
      n || ((n = []), (this._events[t] = n)), e === this && (e = void 0);
      for (var o = { fn: i, ctx: e }, s = n, r = 0, a = s.length; r < a; r++)
        if (s[r].fn === i && s[r].ctx === e) return;
      s.push(o);
    },
    _off: function (t, i, e) {
      var n, o, s;
      if (this._events && (n = this._events[t]))
        if (i) {
          if ((e === this && (e = void 0), n))
            for (o = 0, s = n.length; o < s; o++) {
              var r = n[o];
              if (r.ctx === e && r.fn === i)
                return (
                  (r.fn = a),
                  this._firingCount && (this._events[t] = n = n.slice()),
                  void n.splice(o, 1)
                );
            }
        } else {
          for (o = 0, s = n.length; o < s; o++) n[o].fn = a;
          delete this._events[t];
        }
    },
    fire: function (t, i, e) {
      if (!this.listens(t, e)) return this;
      var n = h({}, i, {
        type: t,
        target: this,
        sourceTarget: (i && i.sourceTarget) || this,
      });
      if (this._events) {
        var o = this._events[t];
        if (o) {
          this._firingCount = this._firingCount + 1 || 1;
          for (var s = 0, r = o.length; s < r; s++) {
            var a = o[s];
            a.fn.call(a.ctx || this, n);
          }
          this._firingCount--;
        }
      }
      return e && this._propagateEvent(n), this;
    },
    listens: function (t, i) {
      var e = this._events && this._events[t];
      if (e && e.length) return !0;
      if (i)
        for (var n in this._eventParents)
          if (this._eventParents[n].listens(t, i)) return !0;
      return !1;
    },
    once: function (t, i, e) {
      if ('object' == typeof t) {
        for (var n in t) this.once(n, t[n], i);
        return this;
      }
      var o = p(function () {
        this.off(t, i, e).off(t, o, e);
      }, this);
      return this.on(t, i, e).on(t, o, e);
    },
    addEventParent: function (t) {
      return (
        (this._eventParents = this._eventParents || {}),
        (this._eventParents[m(t)] = t),
        this
      );
    },
    removeEventParent: function (t) {
      return this._eventParents && delete this._eventParents[m(t)], this;
    },
    _propagateEvent: function (t) {
      for (var i in this._eventParents)
        this._eventParents[i].fire(
          t.type,
          h({ layer: t.target, propagatedFrom: t.target }, t),
          !0,
        );
    },
  };
  (Z.addEventListener = Z.on),
    (Z.removeEventListener = Z.clearAllEventListeners = Z.off),
    (Z.addOneTimeEventListener = Z.once),
    (Z.fireEvent = Z.fire),
    (Z.hasEventListeners = Z.listens);
  var E = S.extend(Z);
  function k(t, i, e) {
    (this.x = e ? Math.round(t) : t), (this.y = e ? Math.round(i) : i);
  }
  var B =
    Math.trunc ||
    function (t) {
      return 0 < t ? Math.floor(t) : Math.ceil(t);
    };
  function A(t, i, e) {
    return t instanceof k
      ? t
      : g(t)
      ? new k(t[0], t[1])
      : null == t
      ? t
      : 'object' == typeof t && 'x' in t && 'y' in t
      ? new k(t.x, t.y)
      : new k(t, i, e);
  }
  function I(t, i) {
    if (t)
      for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++)
        this.extend(e[n]);
  }
  function O(t, i) {
    return !t || t instanceof I ? t : new I(t, i);
  }
  function R(t, i) {
    if (t)
      for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++)
        this.extend(e[n]);
  }
  function N(t, i) {
    return t instanceof R ? t : new R(t, i);
  }
  function D(t, i, e) {
    if (isNaN(t) || isNaN(i))
      throw new Error('Invalid LatLng object: (' + t + ', ' + i + ')');
    (this.lat = +t), (this.lng = +i), void 0 !== e && (this.alt = +e);
  }
  function j(t, i, e) {
    return t instanceof D
      ? t
      : g(t) && 'object' != typeof t[0]
      ? 3 === t.length
        ? new D(t[0], t[1], t[2])
        : 2 === t.length
        ? new D(t[0], t[1])
        : null
      : null == t
      ? t
      : 'object' == typeof t && 'lat' in t
      ? new D(t.lat, 'lng' in t ? t.lng : t.lon, t.alt)
      : void 0 === i
      ? null
      : new D(t, i, e);
  }
  (k.prototype = {
    clone: function () {
      return new k(this.x, this.y);
    },
    add: function (t) {
      return this.clone()._add(A(t));
    },
    _add: function (t) {
      return (this.x += t.x), (this.y += t.y), this;
    },
    subtract: function (t) {
      return this.clone()._subtract(A(t));
    },
    _subtract: function (t) {
      return (this.x -= t.x), (this.y -= t.y), this;
    },
    divideBy: function (t) {
      return this.clone()._divideBy(t);
    },
    _divideBy: function (t) {
      return (this.x /= t), (this.y /= t), this;
    },
    multiplyBy: function (t) {
      return this.clone()._multiplyBy(t);
    },
    _multiplyBy: function (t) {
      return (this.x *= t), (this.y *= t), this;
    },
    scaleBy: function (t) {
      return new k(this.x * t.x, this.y * t.y);
    },
    unscaleBy: function (t) {
      return new k(this.x / t.x, this.y / t.y);
    },
    round: function () {
      return this.clone()._round();
    },
    _round: function () {
      return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
    },
    floor: function () {
      return this.clone()._floor();
    },
    _floor: function () {
      return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
    },
    ceil: function () {
      return this.clone()._ceil();
    },
    _ceil: function () {
      return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
    },
    trunc: function () {
      return this.clone()._trunc();
    },
    _trunc: function () {
      return (this.x = B(this.x)), (this.y = B(this.y)), this;
    },
    distanceTo: function (t) {
      var i = (t = A(t)).x - this.x,
        e = t.y - this.y;
      return Math.sqrt(i * i + e * e);
    },
    equals: function (t) {
      return (t = A(t)).x === this.x && t.y === this.y;
    },
    contains: function (t) {
      return (
        (t = A(t)),
        Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
      );
    },
    toString: function () {
      return 'Point(' + r(this.x) + ', ' + r(this.y) + ')';
    },
  }),
    (I.prototype = {
      extend: function (t) {
        return (
          (t = A(t)),
          this.min || this.max
            ? ((this.min.x = Math.min(t.x, this.min.x)),
              (this.max.x = Math.max(t.x, this.max.x)),
              (this.min.y = Math.min(t.y, this.min.y)),
              (this.max.y = Math.max(t.y, this.max.y)))
            : ((this.min = t.clone()), (this.max = t.clone())),
          this
        );
      },
      getCenter: function (t) {
        return new k(
          (this.min.x + this.max.x) / 2,
          (this.min.y + this.max.y) / 2,
          t,
        );
      },
      getBottomLeft: function () {
        return new k(this.min.x, this.max.y);
      },
      getTopRight: function () {
        return new k(this.max.x, this.min.y);
      },
      getTopLeft: function () {
        return this.min;
      },
      getBottomRight: function () {
        return this.max;
      },
      getSize: function () {
        return this.max.subtract(this.min);
      },
      contains: function (t) {
        var i, e;
        return (
          (t = ('number' == typeof t[0] || t instanceof k ? A : O)(
            t,
          )) instanceof I
            ? ((i = t.min), (e = t.max))
            : (i = e = t),
          i.x >= this.min.x &&
            e.x <= this.max.x &&
            i.y >= this.min.y &&
            e.y <= this.max.y
        );
      },
      intersects: function (t) {
        t = O(t);
        var i = this.min,
          e = this.max,
          n = t.min,
          o = t.max,
          s = o.x >= i.x && n.x <= e.x,
          r = o.y >= i.y && n.y <= e.y;
        return s && r;
      },
      overlaps: function (t) {
        t = O(t);
        var i = this.min,
          e = this.max,
          n = t.min,
          o = t.max,
          s = o.x > i.x && n.x < e.x,
          r = o.y > i.y && n.y < e.y;
        return s && r;
      },
      isValid: function () {
        return !(!this.min || !this.max);
      },
    }),
    (R.prototype = {
      extend: function (t) {
        var i,
          e,
          n = this._southWest,
          o = this._northEast;
        if (t instanceof D) e = i = t;
        else {
          if (!(t instanceof R)) return t ? this.extend(j(t) || N(t)) : this;
          if (((i = t._southWest), (e = t._northEast), !i || !e)) return this;
        }
        return (
          n || o
            ? ((n.lat = Math.min(i.lat, n.lat)),
              (n.lng = Math.min(i.lng, n.lng)),
              (o.lat = Math.max(e.lat, o.lat)),
              (o.lng = Math.max(e.lng, o.lng)))
            : ((this._southWest = new D(i.lat, i.lng)),
              (this._northEast = new D(e.lat, e.lng))),
          this
        );
      },
      pad: function (t) {
        var i = this._southWest,
          e = this._northEast,
          n = Math.abs(i.lat - e.lat) * t,
          o = Math.abs(i.lng - e.lng) * t;
        return new R(new D(i.lat - n, i.lng - o), new D(e.lat + n, e.lng + o));
      },
      getCenter: function () {
        return new D(
          (this._southWest.lat + this._northEast.lat) / 2,
          (this._southWest.lng + this._northEast.lng) / 2,
        );
      },
      getSouthWest: function () {
        return this._southWest;
      },
      getNorthEast: function () {
        return this._northEast;
      },
      getNorthWest: function () {
        return new D(this.getNorth(), this.getWest());
      },
      getSouthEast: function () {
        return new D(this.getSouth(), this.getEast());
      },
      getWest: function () {
        return this._southWest.lng;
      },
      getSouth: function () {
        return this._southWest.lat;
      },
      getEast: function () {
        return this._northEast.lng;
      },
      getNorth: function () {
        return this._northEast.lat;
      },
      contains: function (t) {
        t = ('number' == typeof t[0] || t instanceof D || 'lat' in t ? j : N)(
          t,
        );
        var i,
          e,
          n = this._southWest,
          o = this._northEast;
        return (
          t instanceof R
            ? ((i = t.getSouthWest()), (e = t.getNorthEast()))
            : (i = e = t),
          i.lat >= n.lat && e.lat <= o.lat && i.lng >= n.lng && e.lng <= o.lng
        );
      },
      intersects: function (t) {
        t = N(t);
        var i = this._southWest,
          e = this._northEast,
          n = t.getSouthWest(),
          o = t.getNorthEast(),
          s = o.lat >= i.lat && n.lat <= e.lat,
          r = o.lng >= i.lng && n.lng <= e.lng;
        return s && r;
      },
      overlaps: function (t) {
        t = N(t);
        var i = this._southWest,
          e = this._northEast,
          n = t.getSouthWest(),
          o = t.getNorthEast(),
          s = o.lat > i.lat && n.lat < e.lat,
          r = o.lng > i.lng && n.lng < e.lng;
        return s && r;
      },
      toBBoxString: function () {
        return [
          this.getWest(),
          this.getSouth(),
          this.getEast(),
          this.getNorth(),
        ].join(',');
      },
      equals: function (t, i) {
        return (
          !!t &&
          ((t = N(t)),
          this._southWest.equals(t.getSouthWest(), i) &&
            this._northEast.equals(t.getNorthEast(), i))
        );
      },
      isValid: function () {
        return !(!this._southWest || !this._northEast);
      },
    });
  var W,
    H = {
      latLngToPoint: function (t, i) {
        var e = this.projection.project(t),
          n = this.scale(i);
        return this.transformation._transform(e, n);
      },
      pointToLatLng: function (t, i) {
        var e = this.scale(i),
          n = this.transformation.untransform(t, e);
        return this.projection.unproject(n);
      },
      project: function (t) {
        return this.projection.project(t);
      },
      unproject: function (t) {
        return this.projection.unproject(t);
      },
      scale: function (t) {
        return 256 * Math.pow(2, t);
      },
      zoom: function (t) {
        return Math.log(t / 256) / Math.LN2;
      },
      getProjectedBounds: function (t) {
        if (this.infinite) return null;
        var i = this.projection.bounds,
          e = this.scale(t);
        return new I(
          this.transformation.transform(i.min, e),
          this.transformation.transform(i.max, e),
        );
      },
      infinite: !(D.prototype = {
        equals: function (t, i) {
          return (
            !!t &&
            ((t = j(t)),
            Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <=
              (void 0 === i ? 1e-9 : i))
          );
        },
        toString: function (t) {
          return 'LatLng(' + r(this.lat, t) + ', ' + r(this.lng, t) + ')';
        },
        distanceTo: function (t) {
          return F.distance(this, j(t));
        },
        wrap: function () {
          return F.wrapLatLng(this);
        },
        toBounds: function (t) {
          var i = (180 * t) / 40075017,
            e = i / Math.cos((Math.PI / 180) * this.lat);
          return N([this.lat - i, this.lng - e], [this.lat + i, this.lng + e]);
        },
        clone: function () {
          return new D(this.lat, this.lng, this.alt);
        },
      }),
      wrapLatLng: function (t) {
        var i = this.wrapLng ? o(t.lng, this.wrapLng, !0) : t.lng;
        return new D(
          this.wrapLat ? o(t.lat, this.wrapLat, !0) : t.lat,
          i,
          t.alt,
        );
      },
      wrapLatLngBounds: function (t) {
        var i = t.getCenter(),
          e = this.wrapLatLng(i),
          n = i.lat - e.lat,
          o = i.lng - e.lng;
        if (0 == n && 0 == o) return t;
        var s = t.getSouthWest(),
          r = t.getNorthEast();
        return new R(new D(s.lat - n, s.lng - o), new D(r.lat - n, r.lng - o));
      },
    },
    F = h({}, H, {
      wrapLng: [-180, 180],
      R: 6371e3,
      distance: function (t, i) {
        var e = Math.PI / 180,
          n = t.lat * e,
          o = i.lat * e,
          s = Math.sin(((i.lat - t.lat) * e) / 2),
          r = Math.sin(((i.lng - t.lng) * e) / 2),
          a = s * s + Math.cos(n) * Math.cos(o) * r * r,
          h = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return this.R * h;
      },
    }),
    U = 6378137,
    V = {
      R: U,
      MAX_LATITUDE: 85.0511287798,
      project: function (t) {
        var i = Math.PI / 180,
          e = this.MAX_LATITUDE,
          n = Math.max(Math.min(e, t.lat), -e),
          o = Math.sin(n * i);
        return new k(
          this.R * t.lng * i,
          (this.R * Math.log((1 + o) / (1 - o))) / 2,
        );
      },
      unproject: function (t) {
        var i = 180 / Math.PI;
        return new D(
          (2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * i,
          (t.x * i) / this.R,
        );
      },
      bounds: new I([-(W = U * Math.PI), -W], [W, W]),
    };
  function q(t, i, e, n) {
    if (g(t))
      return (
        (this._a = t[0]),
        (this._b = t[1]),
        (this._c = t[2]),
        void (this._d = t[3])
      );
    (this._a = t), (this._b = i), (this._c = e), (this._d = n);
  }
  function G(t, i, e, n) {
    return new q(t, i, e, n);
  }
  q.prototype = {
    transform: function (t, i) {
      return this._transform(t.clone(), i);
    },
    _transform: function (t, i) {
      return (
        (i = i || 1),
        (t.x = i * (this._a * t.x + this._b)),
        (t.y = i * (this._c * t.y + this._d)),
        t
      );
    },
    untransform: function (t, i) {
      return (
        (i = i || 1),
        new k((t.x / i - this._b) / this._a, (t.y / i - this._d) / this._c)
      );
    },
  };
  var K,
    Y = h({}, F, {
      code: 'EPSG:3857',
      projection: V,
      transformation: G((K = 0.5 / (Math.PI * V.R)), 0.5, -K, 0.5),
    }),
    X = h({}, Y, { code: 'EPSG:900913' });
  function J(t) {
    return document.createElementNS('http://www.w3.org/2000/svg', t);
  }
  function $(t, i) {
    for (var e, n, o, s, r = '', a = 0, h = t.length; a < h; a++) {
      for (e = 0, n = (o = t[a]).length; e < n; e++)
        r += (e ? 'L' : 'M') + (s = o[e]).x + ' ' + s.y;
      r += i ? (Zt ? 'z' : 'x') : '';
    }
    return r || 'M0 0';
  }
  var Q = document.documentElement.style,
    tt = 'ActiveXObject' in window,
    it = tt && !document.addEventListener,
    et = 'msLaunchUri' in navigator && !('documentMode' in document),
    nt = kt('webkit'),
    ot = kt('android'),
    st = kt('android 2') || kt('android 3'),
    rt = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
    at = ot && kt('Google') && rt < 537 && !('AudioNode' in window),
    ht = !!window.opera,
    ut = !et && kt('chrome'),
    lt = kt('gecko') && !nt && !ht && !tt,
    ct = !ut && kt('safari'),
    _t = kt('phantom'),
    dt = 'OTransition' in Q,
    pt = 0 === navigator.platform.indexOf('Win'),
    mt = tt && 'transition' in Q,
    ft =
      'WebKitCSSMatrix' in window &&
      'm11' in new window.WebKitCSSMatrix() &&
      !st,
    gt = 'MozPerspective' in Q,
    vt = !window.L_DISABLE_3D && (mt || ft || gt) && !dt && !_t,
    yt = 'undefined' != typeof orientation || kt('mobile'),
    xt = yt && nt,
    wt = yt && ft,
    Pt = !window.PointerEvent && window.MSPointerEvent,
    Lt = !(!window.PointerEvent && !Pt),
    bt =
      !window.L_NO_TOUCH &&
      (Lt ||
        'ontouchstart' in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
    Tt = yt && ht,
    Mt = yt && lt,
    zt =
      1 <
      (window.devicePixelRatio ||
        window.screen.deviceXDPI / window.screen.logicalXDPI),
    Ct = (function () {
      var t = !1;
      try {
        var i = Object.defineProperty({}, 'passive', {
          get: function () {
            t = !0;
          },
        });
        window.addEventListener('testPassiveEventSupport', a, i),
          window.removeEventListener('testPassiveEventSupport', a, i);
      } catch (t) {}
      return t;
    })(),
    St = !!document.createElement('canvas').getContext,
    Zt = !(!document.createElementNS || !J('svg').createSVGRect),
    Et =
      !Zt &&
      (function () {
        try {
          var t = document.createElement('div');
          t.innerHTML = '<v:shape adj="1"/>';
          var i = t.firstChild;
          return (
            (i.style.behavior = 'url(#default#VML)'),
            i && 'object' == typeof i.adj
          );
        } catch (t) {
          return !1;
        }
      })();
  function kt(t) {
    return 0 <= navigator.userAgent.toLowerCase().indexOf(t);
  }
  var Bt = {
      ie: tt,
      ielt9: it,
      edge: et,
      webkit: nt,
      android: ot,
      android23: st,
      androidStock: at,
      opera: ht,
      chrome: ut,
      gecko: lt,
      safari: ct,
      phantom: _t,
      opera12: dt,
      win: pt,
      ie3d: mt,
      webkit3d: ft,
      gecko3d: gt,
      any3d: vt,
      mobile: yt,
      mobileWebkit: xt,
      mobileWebkit3d: wt,
      msPointer: Pt,
      pointer: Lt,
      touch: bt,
      mobileOpera: Tt,
      mobileGecko: Mt,
      retina: zt,
      passiveEvents: Ct,
      canvas: St,
      svg: Zt,
      vml: Et,
    },
    At = Pt ? 'MSPointerDown' : 'pointerdown',
    It = Pt ? 'MSPointerMove' : 'pointermove',
    Ot = Pt ? 'MSPointerUp' : 'pointerup',
    Rt = Pt ? 'MSPointerCancel' : 'pointercancel',
    Nt = {},
    Dt = !1;
  function jt(t, i, e, n) {
    function o(t) {
      Ut(t, r);
    }
    var s, r, a, h, u, l, c, _;
    function d(t) {
      (t.pointerType === (t.MSPOINTER_TYPE_MOUSE || 'mouse') &&
        0 === t.buttons) ||
        Ut(t, h);
    }
    return (
      'touchstart' === i
        ? ((u = t),
          (l = e),
          (c = n),
          (_ = p(function (t) {
            t.MSPOINTER_TYPE_TOUCH &&
              t.pointerType === t.MSPOINTER_TYPE_TOUCH &&
              Ri(t),
              Ut(t, l);
          })),
          (u['_leaflet_touchstart' + c] = _),
          u.addEventListener(At, _, !1),
          Dt ||
            (document.addEventListener(At, Wt, !0),
            document.addEventListener(It, Ht, !0),
            document.addEventListener(Ot, Ft, !0),
            document.addEventListener(Rt, Ft, !0),
            (Dt = !0)))
        : 'touchmove' === i
        ? ((h = e),
          ((a = t)['_leaflet_touchmove' + n] = d),
          a.addEventListener(It, d, !1))
        : 'touchend' === i &&
          ((r = e),
          ((s = t)['_leaflet_touchend' + n] = o),
          s.addEventListener(Ot, o, !1),
          s.addEventListener(Rt, o, !1)),
      this
    );
  }
  function Wt(t) {
    Nt[t.pointerId] = t;
  }
  function Ht(t) {
    Nt[t.pointerId] && (Nt[t.pointerId] = t);
  }
  function Ft(t) {
    delete Nt[t.pointerId];
  }
  function Ut(t, i) {
    for (var e in ((t.touches = []), Nt)) t.touches.push(Nt[e]);
    (t.changedTouches = [t]), i(t);
  }
  var Vt = Pt ? 'MSPointerDown' : Lt ? 'pointerdown' : 'touchstart',
    qt = Pt ? 'MSPointerUp' : Lt ? 'pointerup' : 'touchend',
    Gt = '_leaflet_';
  var Kt,
    Yt,
    Xt,
    Jt,
    $t,
    Qt,
    ti = fi([
      'transform',
      'webkitTransform',
      'OTransform',
      'MozTransform',
      'msTransform',
    ]),
    ii = fi([
      'webkitTransition',
      'transition',
      'OTransition',
      'MozTransition',
      'msTransition',
    ]),
    ei =
      'webkitTransition' === ii || 'OTransition' === ii
        ? ii + 'End'
        : 'transitionend';
  function ni(t) {
    return 'string' == typeof t ? document.getElementById(t) : t;
  }
  function oi(t, i) {
    var e,
      n = t.style[i] || (t.currentStyle && t.currentStyle[i]);
    return (
      (n && 'auto' !== n) ||
        !document.defaultView ||
        (n = (e = document.defaultView.getComputedStyle(t, null))
          ? e[i]
          : null),
      'auto' === n ? null : n
    );
  }
  function si(t, i, e) {
    var n = document.createElement(t);
    return (n.className = i || ''), e && e.appendChild(n), n;
  }
  function ri(t) {
    var i = t.parentNode;
    i && i.removeChild(t);
  }
  function ai(t) {
    for (; t.firstChild; ) t.removeChild(t.firstChild);
  }
  function hi(t) {
    var i = t.parentNode;
    i && i.lastChild !== t && i.appendChild(t);
  }
  function ui(t) {
    var i = t.parentNode;
    i && i.firstChild !== t && i.insertBefore(t, i.firstChild);
  }
  function li(t, i) {
    if (void 0 !== t.classList) return t.classList.contains(i);
    var e = pi(t);
    return 0 < e.length && new RegExp('(^|\\s)' + i + '(\\s|$)').test(e);
  }
  function ci(t, i) {
    var e;
    if (void 0 !== t.classList)
      for (var n = l(i), o = 0, s = n.length; o < s; o++) t.classList.add(n[o]);
    else li(t, i) || di(t, ((e = pi(t)) ? e + ' ' : '') + i);
  }
  function _i(t, i) {
    void 0 !== t.classList
      ? t.classList.remove(i)
      : di(t, u((' ' + pi(t) + ' ').replace(' ' + i + ' ', ' ')));
  }
  function di(t, i) {
    void 0 === t.className.baseVal
      ? (t.className = i)
      : (t.className.baseVal = i);
  }
  function pi(t) {
    return (
      t.correspondingElement && (t = t.correspondingElement),
      void 0 === t.className.baseVal ? t.className : t.className.baseVal
    );
  }
  function mi(t, i) {
    'opacity' in t.style
      ? (t.style.opacity = i)
      : 'filter' in t.style &&
        (function (t, i) {
          var e = !1,
            n = 'DXImageTransform.Microsoft.Alpha';
          try {
            e = t.filters.item(n);
          } catch (t) {
            if (1 === i) return;
          }
          (i = Math.round(100 * i)),
            e
              ? ((e.Enabled = 100 !== i), (e.Opacity = i))
              : (t.style.filter += ' progid:' + n + '(opacity=' + i + ')');
        })(t, i);
  }
  function fi(t) {
    for (var i = document.documentElement.style, e = 0; e < t.length; e++)
      if (t[e] in i) return t[e];
    return !1;
  }
  function gi(t, i, e) {
    var n = i || new k(0, 0);
    t.style[ti] =
      (mt
        ? 'translate(' + n.x + 'px,' + n.y + 'px)'
        : 'translate3d(' + n.x + 'px,' + n.y + 'px,0)') +
      (e ? ' scale(' + e + ')' : '');
  }
  function vi(t, i) {
    (t._leaflet_pos = i),
      vt ? gi(t, i) : ((t.style.left = i.x + 'px'), (t.style.top = i.y + 'px'));
  }
  function yi(t) {
    return t._leaflet_pos || new k(0, 0);
  }
  function xi() {
    zi(window, 'dragstart', Ri);
  }
  function wi() {
    Si(window, 'dragstart', Ri);
  }
  function Pi(t) {
    for (; -1 === t.tabIndex; ) t = t.parentNode;
    t.style &&
      (Li(),
      (Qt = ($t = t).style.outline),
      (t.style.outline = 'none'),
      zi(window, 'keydown', Li));
  }
  function Li() {
    $t &&
      (($t.style.outline = Qt), (Qt = $t = void 0), Si(window, 'keydown', Li));
  }
  function bi(t) {
    for (
      ;
      !(
        ((t = t.parentNode).offsetWidth && t.offsetHeight) ||
        t === document.body
      );

    );
    return t;
  }
  function Ti(t) {
    var i = t.getBoundingClientRect();
    return {
      x: i.width / t.offsetWidth || 1,
      y: i.height / t.offsetHeight || 1,
      boundingClientRect: i,
    };
  }
  Jt =
    'onselectstart' in document
      ? ((Xt = function () {
          zi(window, 'selectstart', Ri);
        }),
        function () {
          Si(window, 'selectstart', Ri);
        })
      : ((Yt = fi([
          'userSelect',
          'WebkitUserSelect',
          'OUserSelect',
          'MozUserSelect',
          'msUserSelect',
        ])),
        (Xt = function () {
          var t;
          Yt &&
            ((t = document.documentElement.style),
            (Kt = t[Yt]),
            (t[Yt] = 'none'));
        }),
        function () {
          Yt && ((document.documentElement.style[Yt] = Kt), (Kt = void 0));
        });
  var Mi = {
    TRANSFORM: ti,
    TRANSITION: ii,
    TRANSITION_END: ei,
    get: ni,
    getStyle: oi,
    create: si,
    remove: ri,
    empty: ai,
    toFront: hi,
    toBack: ui,
    hasClass: li,
    addClass: ci,
    removeClass: _i,
    setClass: di,
    getClass: pi,
    setOpacity: mi,
    testProp: fi,
    setTransform: gi,
    setPosition: vi,
    getPosition: yi,
    disableTextSelection: Xt,
    enableTextSelection: Jt,
    disableImageDrag: xi,
    enableImageDrag: wi,
    preventOutline: Pi,
    restoreOutline: Li,
    getSizedParentNode: bi,
    getScale: Ti,
  };
  function zi(t, i, e, n) {
    if ('object' == typeof i) for (var o in i) ki(t, o, i[o], e);
    else for (var s = 0, r = (i = l(i)).length; s < r; s++) ki(t, i[s], e, n);
    return this;
  }
  var Ci = '_leaflet_events';
  function Si(t, i, e, n) {
    if ('object' == typeof i) for (var o in i) Bi(t, o, i[o], e);
    else if (i)
      for (var s = 0, r = (i = l(i)).length; s < r; s++) Bi(t, i[s], e, n);
    else {
      for (var a in t[Ci]) Bi(t, a, t[Ci][a]);
      delete t[Ci];
    }
    return this;
  }
  function Zi() {
    return Lt && !et && !ct;
  }
  var Ei = {
    mouseenter: 'mouseover',
    mouseleave: 'mouseout',
    wheel: !('onwheel' in window) && 'mousewheel',
  };
  function ki(i, t, e, n) {
    var o = t + m(e) + (n ? '_' + m(n) : '');
    if (i[Ci] && i[Ci][o]) return this;
    var s,
      r,
      a,
      h,
      u,
      l,
      c = function (t) {
        return e.call(n || i, t || window.event);
      },
      _ = c;
    function d(t) {
      if (Lt) {
        if (!t.isPrimary) return;
        if ('mouse' === t.pointerType) return;
      } else if (1 < t.touches.length) return;
      var i = Date.now(),
        e = i - (h || i);
      (u = t.touches ? t.touches[0] : t), (l = 0 < e && e <= 250), (h = i);
    }
    function p(t) {
      if (l && !u.cancelBubble) {
        if (Lt) {
          if ('mouse' === t.pointerType) return;
          var i,
            e,
            n = {};
          for (e in u) (i = u[e]), (n[e] = i && i.bind ? i.bind(u) : i);
          u = n;
        }
        (u.type = 'dblclick'), (u.button = 0), r(u), (h = null);
      }
    }
    Lt && 0 === t.indexOf('touch')
      ? jt(i, t, c, o)
      : bt && 'dblclick' === t && !Zi()
      ? ((r = c),
        (l = !1),
        ((s = i)[Gt + Vt + (a = o)] = d),
        (s[Gt + qt + a] = p),
        (s[Gt + 'dblclick' + a] = r),
        s.addEventListener(Vt, d, !!Ct && { passive: !1 }),
        s.addEventListener(qt, p, !!Ct && { passive: !1 }),
        s.addEventListener('dblclick', r, !1))
      : 'addEventListener' in i
      ? 'touchstart' === t ||
        'touchmove' === t ||
        'wheel' === t ||
        'mousewheel' === t
        ? i.addEventListener(Ei[t] || t, c, !!Ct && { passive: !1 })
        : 'mouseenter' === t || 'mouseleave' === t
        ? ((c = function (t) {
            (t = t || window.event), Vi(i, t) && _(t);
          }),
          i.addEventListener(Ei[t], c, !1))
        : i.addEventListener(t, _, !1)
      : 'attachEvent' in i && i.attachEvent('on' + t, c),
      (i[Ci] = i[Ci] || {}),
      (i[Ci][o] = c);
  }
  function Bi(t, i, e, n) {
    var o,
      s,
      r,
      a,
      h,
      u,
      l,
      c,
      _ = i + m(e) + (n ? '_' + m(n) : ''),
      d = t[Ci] && t[Ci][_];
    if (!d) return this;
    Lt && 0 === i.indexOf('touch')
      ? ((c = (u = t)['_leaflet_' + (l = i) + _]),
        'touchstart' === l
          ? u.removeEventListener(At, c, !1)
          : 'touchmove' === l
          ? u.removeEventListener(It, c, !1)
          : 'touchend' === l &&
            (u.removeEventListener(Ot, c, !1),
            u.removeEventListener(Rt, c, !1)))
      : bt && 'dblclick' === i && !Zi()
      ? ((r = (o = t)[Gt + Vt + (s = _)]),
        (a = o[Gt + qt + s]),
        (h = o[Gt + 'dblclick' + s]),
        o.removeEventListener(Vt, r, !!Ct && { passive: !1 }),
        o.removeEventListener(qt, a, !!Ct && { passive: !1 }),
        o.removeEventListener('dblclick', h, !1))
      : 'removeEventListener' in t
      ? t.removeEventListener(Ei[i] || i, d, !1)
      : 'detachEvent' in t && t.detachEvent('on' + i, d),
      (t[Ci][_] = null);
  }
  function Ai(t) {
    return (
      t.stopPropagation
        ? t.stopPropagation()
        : t.originalEvent
        ? (t.originalEvent._stopped = !0)
        : (t.cancelBubble = !0),
      Ui(t),
      this
    );
  }
  function Ii(t) {
    return ki(t, 'wheel', Ai), this;
  }
  function Oi(t) {
    return zi(t, 'mousedown touchstart dblclick', Ai), ki(t, 'click', Fi), this;
  }
  function Ri(t) {
    return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), this;
  }
  function Ni(t) {
    return Ri(t), Ai(t), this;
  }
  function Di(t, i) {
    if (!i) return new k(t.clientX, t.clientY);
    var e = Ti(i),
      n = e.boundingClientRect;
    return new k(
      (t.clientX - n.left) / e.x - i.clientLeft,
      (t.clientY - n.top) / e.y - i.clientTop,
    );
  }
  var ji =
    pt && ut ? 2 * window.devicePixelRatio : lt ? window.devicePixelRatio : 1;
  function Wi(t) {
    return et
      ? t.wheelDeltaY / 2
      : t.deltaY && 0 === t.deltaMode
      ? -t.deltaY / ji
      : t.deltaY && 1 === t.deltaMode
      ? 20 * -t.deltaY
      : t.deltaY && 2 === t.deltaMode
      ? 60 * -t.deltaY
      : t.deltaX || t.deltaZ
      ? 0
      : t.wheelDelta
      ? (t.wheelDeltaY || t.wheelDelta) / 2
      : t.detail && Math.abs(t.detail) < 32765
      ? 20 * -t.detail
      : t.detail
      ? (t.detail / -32765) * 60
      : 0;
  }
  var Hi = {};
  function Fi(t) {
    Hi[t.type] = !0;
  }
  function Ui(t) {
    var i = Hi[t.type];
    return (Hi[t.type] = !1), i;
  }
  function Vi(t, i) {
    var e = i.relatedTarget;
    if (!e) return !0;
    try {
      for (; e && e !== t; ) e = e.parentNode;
    } catch (t) {
      return !1;
    }
    return e !== t;
  }
  var qi = {
      on: zi,
      off: Si,
      stopPropagation: Ai,
      disableScrollPropagation: Ii,
      disableClickPropagation: Oi,
      preventDefault: Ri,
      stop: Ni,
      getMousePosition: Di,
      getWheelDelta: Wi,
      fakeStop: Fi,
      skipped: Ui,
      isExternalTarget: Vi,
      addListener: zi,
      removeListener: Si,
    },
    Gi = E.extend({
      run: function (t, i, e, n) {
        this.stop(),
          (this._el = t),
          (this._inProgress = !0),
          (this._duration = e || 0.25),
          (this._easeOutPower = 1 / Math.max(n || 0.5, 0.2)),
          (this._startPos = yi(t)),
          (this._offset = i.subtract(this._startPos)),
          (this._startTime = +new Date()),
          this.fire('start'),
          this._animate();
      },
      stop: function () {
        this._inProgress && (this._step(!0), this._complete());
      },
      _animate: function () {
        (this._animId = M(this._animate, this)), this._step();
      },
      _step: function (t) {
        var i = new Date() - this._startTime,
          e = 1e3 * this._duration;
        i < e
          ? this._runFrame(this._easeOut(i / e), t)
          : (this._runFrame(1), this._complete());
      },
      _runFrame: function (t, i) {
        var e = this._startPos.add(this._offset.multiplyBy(t));
        i && e._round(), vi(this._el, e), this.fire('step');
      },
      _complete: function () {
        z(this._animId), (this._inProgress = !1), this.fire('end');
      },
      _easeOut: function (t) {
        return 1 - Math.pow(1 - t, this._easeOutPower);
      },
    }),
    Ki = E.extend({
      options: {
        crs: Y,
        center: void 0,
        zoom: void 0,
        minZoom: void 0,
        maxZoom: void 0,
        layers: [],
        maxBounds: void 0,
        renderer: void 0,
        zoomAnimation: !0,
        zoomAnimationThreshold: 4,
        fadeAnimation: !0,
        markerZoomAnimation: !0,
        transform3DLimit: 8388608,
        zoomSnap: 1,
        zoomDelta: 1,
        trackResize: !0,
      },
      initialize: function (t, i) {
        (i = c(this, i)),
          (this._handlers = []),
          (this._layers = {}),
          (this._zoomBoundLayers = {}),
          (this._sizeChanged = !0),
          this._initContainer(t),
          this._initLayout(),
          (this._onResize = p(this._onResize, this)),
          this._initEvents(),
          i.maxBounds && this.setMaxBounds(i.maxBounds),
          void 0 !== i.zoom && (this._zoom = this._limitZoom(i.zoom)),
          i.center &&
            void 0 !== i.zoom &&
            this.setView(j(i.center), i.zoom, { reset: !0 }),
          this.callInitHooks(),
          (this._zoomAnimated = ii && vt && !Tt && this.options.zoomAnimation),
          this._zoomAnimated &&
            (this._createAnimProxy(),
            zi(this._proxy, ei, this._catchTransitionEnd, this)),
          this._addLayers(this.options.layers);
      },
      setView: function (t, i, e) {
        if (
          ((i = void 0 === i ? this._zoom : this._limitZoom(i)),
          (t = this._limitCenter(j(t), i, this.options.maxBounds)),
          (e = e || {}),
          this._stop(),
          this._loaded && !e.reset && !0 !== e) &&
          (void 0 !== e.animate &&
            ((e.zoom = h({ animate: e.animate }, e.zoom)),
            (e.pan = h({ animate: e.animate, duration: e.duration }, e.pan))),
          this._zoom !== i
            ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, i, e.zoom)
            : this._tryAnimatedPan(t, e.pan))
        )
          return clearTimeout(this._sizeTimer), this;
        return this._resetView(t, i), this;
      },
      setZoom: function (t, i) {
        return this._loaded
          ? this.setView(this.getCenter(), t, { zoom: i })
          : ((this._zoom = t), this);
      },
      zoomIn: function (t, i) {
        return (
          (t = t || (vt ? this.options.zoomDelta : 1)),
          this.setZoom(this._zoom + t, i)
        );
      },
      zoomOut: function (t, i) {
        return (
          (t = t || (vt ? this.options.zoomDelta : 1)),
          this.setZoom(this._zoom - t, i)
        );
      },
      setZoomAround: function (t, i, e) {
        var n = this.getZoomScale(i),
          o = this.getSize().divideBy(2),
          s = (t instanceof k ? t : this.latLngToContainerPoint(t))
            .subtract(o)
            .multiplyBy(1 - 1 / n),
          r = this.containerPointToLatLng(o.add(s));
        return this.setView(r, i, { zoom: e });
      },
      _getBoundsCenterZoom: function (t, i) {
        (i = i || {}), (t = t.getBounds ? t.getBounds() : N(t));
        var e = A(i.paddingTopLeft || i.padding || [0, 0]),
          n = A(i.paddingBottomRight || i.padding || [0, 0]),
          o = this.getBoundsZoom(t, !1, e.add(n));
        if (
          (o = 'number' == typeof i.maxZoom ? Math.min(i.maxZoom, o) : o) ===
          1 / 0
        )
          return { center: t.getCenter(), zoom: o };
        var s = n.subtract(e).divideBy(2),
          r = this.project(t.getSouthWest(), o),
          a = this.project(t.getNorthEast(), o);
        return {
          center: this.unproject(r.add(a).divideBy(2).add(s), o),
          zoom: o,
        };
      },
      fitBounds: function (t, i) {
        if (!(t = N(t)).isValid()) throw new Error('Bounds are not valid.');
        var e = this._getBoundsCenterZoom(t, i);
        return this.setView(e.center, e.zoom, i);
      },
      fitWorld: function (t) {
        return this.fitBounds(
          [
            [-90, -180],
            [90, 180],
          ],
          t,
        );
      },
      panTo: function (t, i) {
        return this.setView(t, this._zoom, { pan: i });
      },
      panBy: function (t, i) {
        return (
          (i = i || {}),
          (t = A(t).round()).x || t.y
            ? (!0 === i.animate || this.getSize().contains(t)
                ? (this._panAnim ||
                    ((this._panAnim = new Gi()),
                    this._panAnim.on(
                      {
                        step: this._onPanTransitionStep,
                        end: this._onPanTransitionEnd,
                      },
                      this,
                    )),
                  i.noMoveStart || this.fire('movestart'),
                  !1 !== i.animate
                    ? (ci(this._mapPane, 'leaflet-pan-anim'),
                      (e = this._getMapPanePos().subtract(t).round()),
                      this._panAnim.run(
                        this._mapPane,
                        e,
                        i.duration || 0.25,
                        i.easeLinearity,
                      ))
                    : (this._rawPanBy(t), this.fire('move').fire('moveend')))
                : this._resetView(
                    this.unproject(this.project(this.getCenter()).add(t)),
                    this.getZoom(),
                  ),
              this)
            : this.fire('moveend')
        );
        var e;
      },
      flyTo: function (s, r, t) {
        if (!1 === (t = t || {}).animate || !vt) return this.setView(s, r, t);
        this._stop();
        var a = this.project(this.getCenter()),
          h = this.project(s),
          i = this.getSize(),
          u = this._zoom;
        (s = j(s)), (r = void 0 === r ? u : r);
        var l = Math.max(i.x, i.y),
          n = l * this.getZoomScale(u, r),
          c = h.distanceTo(a) || 1,
          _ = 1.42,
          o = _ * _;
        function e(t) {
          var i =
              (n * n - l * l + (t ? -1 : 1) * o * o * c * c) /
              (2 * (t ? n : l) * o * c),
            e = Math.sqrt(i * i + 1) - i;
          return e < 1e-9 ? -18 : Math.log(e);
        }
        function d(t) {
          return (Math.exp(t) - Math.exp(-t)) / 2;
        }
        function p(t) {
          return (Math.exp(t) + Math.exp(-t)) / 2;
        }
        var m = e(0);
        function f(t) {
          return (l * (p(m) * (d((i = m + _ * t)) / p(i)) - d(m))) / o;
          var i;
        }
        var g = Date.now(),
          v = (e(1) - m) / _,
          y = t.duration ? 1e3 * t.duration : 1e3 * v * 0.8;
        return (
          this._moveStart(!0, t.noMoveStart),
          function t() {
            var i,
              e,
              n = (Date.now() - g) / y,
              o = ((i = n), (1 - Math.pow(1 - i, 1.5)) * v);
            n <= 1
              ? ((this._flyToFrame = M(t, this)),
                this._move(
                  this.unproject(a.add(h.subtract(a).multiplyBy(f(o) / c)), u),
                  this.getScaleZoom(
                    l / ((e = o), l * (p(m) / p(m + _ * e))),
                    u,
                  ),
                  { flyTo: !0 },
                ))
              : this._move(s, r)._moveEnd(!0);
          }.call(this),
          this
        );
      },
      flyToBounds: function (t, i) {
        var e = this._getBoundsCenterZoom(t, i);
        return this.flyTo(e.center, e.zoom, i);
      },
      setMaxBounds: function (t) {
        return (t = N(t)).isValid()
          ? (this.options.maxBounds &&
              this.off('moveend', this._panInsideMaxBounds),
            (this.options.maxBounds = t),
            this._loaded && this._panInsideMaxBounds(),
            this.on('moveend', this._panInsideMaxBounds))
          : ((this.options.maxBounds = null),
            this.off('moveend', this._panInsideMaxBounds));
      },
      setMinZoom: function (t) {
        var i = this.options.minZoom;
        return (
          (this.options.minZoom = t),
          this._loaded &&
          i !== t &&
          (this.fire('zoomlevelschange'), this.getZoom() < this.options.minZoom)
            ? this.setZoom(t)
            : this
        );
      },
      setMaxZoom: function (t) {
        var i = this.options.maxZoom;
        return (
          (this.options.maxZoom = t),
          this._loaded &&
          i !== t &&
          (this.fire('zoomlevelschange'), this.getZoom() > this.options.maxZoom)
            ? this.setZoom(t)
            : this
        );
      },
      panInsideBounds: function (t, i) {
        this._enforcingBounds = !0;
        var e = this.getCenter(),
          n = this._limitCenter(e, this._zoom, N(t));
        return (
          e.equals(n) || this.panTo(n, i), (this._enforcingBounds = !1), this
        );
      },
      panInside: function (t, i) {
        var e,
          n,
          o = A((i = i || {}).paddingTopLeft || i.padding || [0, 0]),
          s = A(i.paddingBottomRight || i.padding || [0, 0]),
          r = this.getCenter(),
          a = this.project(r),
          h = this.project(t),
          u = this.getPixelBounds(),
          l = u.getSize().divideBy(2),
          c = O([u.min.add(o), u.max.subtract(s)]);
        return (
          c.contains(h) ||
            ((this._enforcingBounds = !0),
            (e = a.subtract(h)),
            (n = A(h.x + e.x, h.y + e.y)),
            (h.x < c.min.x || h.x > c.max.x) &&
              ((n.x = a.x - e.x),
              0 < e.x ? (n.x += l.x - o.x) : (n.x -= l.x - s.x)),
            (h.y < c.min.y || h.y > c.max.y) &&
              ((n.y = a.y - e.y),
              0 < e.y ? (n.y += l.y - o.y) : (n.y -= l.y - s.y)),
            this.panTo(this.unproject(n), i),
            (this._enforcingBounds = !1)),
          this
        );
      },
      invalidateSize: function (t) {
        if (!this._loaded) return this;
        t = h({ animate: !1, pan: !0 }, !0 === t ? { animate: !0 } : t);
        var i = this.getSize();
        (this._sizeChanged = !0), (this._lastCenter = null);
        var e = this.getSize(),
          n = i.divideBy(2).round(),
          o = e.divideBy(2).round(),
          s = n.subtract(o);
        return s.x || s.y
          ? (t.animate && t.pan
              ? this.panBy(s)
              : (t.pan && this._rawPanBy(s),
                this.fire('move'),
                t.debounceMoveend
                  ? (clearTimeout(this._sizeTimer),
                    (this._sizeTimer = setTimeout(
                      p(this.fire, this, 'moveend'),
                      200,
                    )))
                  : this.fire('moveend')),
            this.fire('resize', { oldSize: i, newSize: e }))
          : this;
      },
      stop: function () {
        return (
          this.setZoom(this._limitZoom(this._zoom)),
          this.options.zoomSnap || this.fire('viewreset'),
          this._stop()
        );
      },
      locate: function (t) {
        if (
          ((t = this._locateOptions = h({ timeout: 1e4, watch: !1 }, t)),
          !('geolocation' in navigator))
        )
          return (
            this._handleGeolocationError({
              code: 0,
              message: 'Geolocation not supported.',
            }),
            this
          );
        var i = p(this._handleGeolocationResponse, this),
          e = p(this._handleGeolocationError, this);
        return (
          t.watch
            ? (this._locationWatchId = navigator.geolocation.watchPosition(
                i,
                e,
                t,
              ))
            : navigator.geolocation.getCurrentPosition(i, e, t),
          this
        );
      },
      stopLocate: function () {
        return (
          navigator.geolocation &&
            navigator.geolocation.clearWatch &&
            navigator.geolocation.clearWatch(this._locationWatchId),
          this._locateOptions && (this._locateOptions.setView = !1),
          this
        );
      },
      _handleGeolocationError: function (t) {
        var i = t.code,
          e =
            t.message ||
            (1 === i
              ? 'permission denied'
              : 2 === i
              ? 'position unavailable'
              : 'timeout');
        this._locateOptions.setView && !this._loaded && this.fitWorld(),
          this.fire('locationerror', {
            code: i,
            message: 'Geolocation error: ' + e + '.',
          });
      },
      _handleGeolocationResponse: function (t) {
        var i,
          e = new D(t.coords.latitude, t.coords.longitude),
          n = e.toBounds(2 * t.coords.accuracy),
          o = this._locateOptions;
        o.setView &&
          ((i = this.getBoundsZoom(n)),
          this.setView(e, o.maxZoom ? Math.min(i, o.maxZoom) : i));
        var s = { latlng: e, bounds: n, timestamp: t.timestamp };
        for (var r in t.coords)
          'number' == typeof t.coords[r] && (s[r] = t.coords[r]);
        this.fire('locationfound', s);
      },
      addHandler: function (t, i) {
        if (!i) return this;
        var e = (this[t] = new i(this));
        return this._handlers.push(e), this.options[t] && e.enable(), this;
      },
      remove: function () {
        if (
          (this._initEvents(!0),
          this.off('moveend', this._panInsideMaxBounds),
          this._containerId !== this._container._leaflet_id)
        )
          throw new Error('Map container is being reused by another instance');
        try {
          delete this._container._leaflet_id, delete this._containerId;
        } catch (t) {
          (this._container._leaflet_id = void 0), (this._containerId = void 0);
        }
        var t;
        for (t in (void 0 !== this._locationWatchId && this.stopLocate(),
        this._stop(),
        ri(this._mapPane),
        this._clearControlPos && this._clearControlPos(),
        this._resizeRequest &&
          (z(this._resizeRequest), (this._resizeRequest = null)),
        this._clearHandlers(),
        this._loaded && this.fire('unload'),
        this._layers))
          this._layers[t].remove();
        for (t in this._panes) ri(this._panes[t]);
        return (
          (this._layers = []),
          (this._panes = []),
          delete this._mapPane,
          delete this._renderer,
          this
        );
      },
      createPane: function (t, i) {
        var e = si(
          'div',
          'leaflet-pane' +
            (t ? ' leaflet-' + t.replace('Pane', '') + '-pane' : ''),
          i || this._mapPane,
        );
        return t && (this._panes[t] = e), e;
      },
      getCenter: function () {
        return (
          this._checkIfLoaded(),
          this._lastCenter && !this._moved()
            ? this._lastCenter
            : this.layerPointToLatLng(this._getCenterLayerPoint())
        );
      },
      getZoom: function () {
        return this._zoom;
      },
      getBounds: function () {
        var t = this.getPixelBounds();
        return new R(
          this.unproject(t.getBottomLeft()),
          this.unproject(t.getTopRight()),
        );
      },
      getMinZoom: function () {
        return void 0 === this.options.minZoom
          ? this._layersMinZoom || 0
          : this.options.minZoom;
      },
      getMaxZoom: function () {
        return void 0 === this.options.maxZoom
          ? void 0 === this._layersMaxZoom
            ? 1 / 0
            : this._layersMaxZoom
          : this.options.maxZoom;
      },
      getBoundsZoom: function (t, i, e) {
        (t = N(t)), (e = A(e || [0, 0]));
        var n = this.getZoom() || 0,
          o = this.getMinZoom(),
          s = this.getMaxZoom(),
          r = t.getNorthWest(),
          a = t.getSouthEast(),
          h = this.getSize().subtract(e),
          u = O(this.project(a, n), this.project(r, n)).getSize(),
          l = vt ? this.options.zoomSnap : 1,
          c = h.x / u.x,
          _ = h.y / u.y,
          d = i ? Math.max(c, _) : Math.min(c, _),
          n = this.getScaleZoom(d, n);
        return (
          l &&
            ((n = Math.round(n / (l / 100)) * (l / 100)),
            (n = i ? Math.ceil(n / l) * l : Math.floor(n / l) * l)),
          Math.max(o, Math.min(s, n))
        );
      },
      getSize: function () {
        return (
          (this._size && !this._sizeChanged) ||
            ((this._size = new k(
              this._container.clientWidth || 0,
              this._container.clientHeight || 0,
            )),
            (this._sizeChanged = !1)),
          this._size.clone()
        );
      },
      getPixelBounds: function (t, i) {
        var e = this._getTopLeftPoint(t, i);
        return new I(e, e.add(this.getSize()));
      },
      getPixelOrigin: function () {
        return this._checkIfLoaded(), this._pixelOrigin;
      },
      getPixelWorldBounds: function (t) {
        return this.options.crs.getProjectedBounds(
          void 0 === t ? this.getZoom() : t,
        );
      },
      getPane: function (t) {
        return 'string' == typeof t ? this._panes[t] : t;
      },
      getPanes: function () {
        return this._panes;
      },
      getContainer: function () {
        return this._container;
      },
      getZoomScale: function (t, i) {
        var e = this.options.crs;
        return (i = void 0 === i ? this._zoom : i), e.scale(t) / e.scale(i);
      },
      getScaleZoom: function (t, i) {
        var e = this.options.crs;
        i = void 0 === i ? this._zoom : i;
        var n = e.zoom(t * e.scale(i));
        return isNaN(n) ? 1 / 0 : n;
      },
      project: function (t, i) {
        return (
          (i = void 0 === i ? this._zoom : i),
          this.options.crs.latLngToPoint(j(t), i)
        );
      },
      unproject: function (t, i) {
        return (
          (i = void 0 === i ? this._zoom : i),
          this.options.crs.pointToLatLng(A(t), i)
        );
      },
      layerPointToLatLng: function (t) {
        var i = A(t).add(this.getPixelOrigin());
        return this.unproject(i);
      },
      latLngToLayerPoint: function (t) {
        return this.project(j(t))._round()._subtract(this.getPixelOrigin());
      },
      wrapLatLng: function (t) {
        return this.options.crs.wrapLatLng(j(t));
      },
      wrapLatLngBounds: function (t) {
        return this.options.crs.wrapLatLngBounds(N(t));
      },
      distance: function (t, i) {
        return this.options.crs.distance(j(t), j(i));
      },
      containerPointToLayerPoint: function (t) {
        return A(t).subtract(this._getMapPanePos());
      },
      layerPointToContainerPoint: function (t) {
        return A(t).add(this._getMapPanePos());
      },
      containerPointToLatLng: function (t) {
        var i = this.containerPointToLayerPoint(A(t));
        return this.layerPointToLatLng(i);
      },
      latLngToContainerPoint: function (t) {
        return this.layerPointToContainerPoint(this.latLngToLayerPoint(j(t)));
      },
      mouseEventToContainerPoint: function (t) {
        return Di(t, this._container);
      },
      mouseEventToLayerPoint: function (t) {
        return this.containerPointToLayerPoint(
          this.mouseEventToContainerPoint(t),
        );
      },
      mouseEventToLatLng: function (t) {
        return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
      },
      _initContainer: function (t) {
        var i = (this._container = ni(t));
        if (!i) throw new Error('Map container not found.');
        if (i._leaflet_id)
          throw new Error('Map container is already initialized.');
        zi(i, 'scroll', this._onScroll, this), (this._containerId = m(i));
      },
      _initLayout: function () {
        var t = this._container;
        (this._fadeAnimated = this.options.fadeAnimation && vt),
          ci(
            t,
            'leaflet-container' +
              (bt ? ' leaflet-touch' : '') +
              (zt ? ' leaflet-retina' : '') +
              (it ? ' leaflet-oldie' : '') +
              (ct ? ' leaflet-safari' : '') +
              (this._fadeAnimated ? ' leaflet-fade-anim' : ''),
          );
        var i = oi(t, 'position');
        'absolute' !== i &&
          'relative' !== i &&
          'fixed' !== i &&
          (t.style.position = 'relative'),
          this._initPanes(),
          this._initControlPos && this._initControlPos();
      },
      _initPanes: function () {
        var t = (this._panes = {});
        (this._paneRenderers = {}),
          (this._mapPane = this.createPane('mapPane', this._container)),
          vi(this._mapPane, new k(0, 0)),
          this.createPane('tilePane'),
          this.createPane('shadowPane'),
          this.createPane('overlayPane'),
          this.createPane('markerPane'),
          this.createPane('tooltipPane'),
          this.createPane('popupPane'),
          this.options.markerZoomAnimation ||
            (ci(t.markerPane, 'leaflet-zoom-hide'),
            ci(t.shadowPane, 'leaflet-zoom-hide'));
      },
      _resetView: function (t, i) {
        vi(this._mapPane, new k(0, 0));
        var e = !this._loaded;
        (this._loaded = !0),
          (i = this._limitZoom(i)),
          this.fire('viewprereset');
        var n = this._zoom !== i;
        this._moveStart(n, !1)._move(t, i)._moveEnd(n),
          this.fire('viewreset'),
          e && this.fire('load');
      },
      _moveStart: function (t, i) {
        return t && this.fire('zoomstart'), i || this.fire('movestart'), this;
      },
      _move: function (t, i, e) {
        void 0 === i && (i = this._zoom);
        var n = this._zoom !== i;
        return (
          (this._zoom = i),
          (this._lastCenter = t),
          (this._pixelOrigin = this._getNewPixelOrigin(t)),
          (n || (e && e.pinch)) && this.fire('zoom', e),
          this.fire('move', e)
        );
      },
      _moveEnd: function (t) {
        return t && this.fire('zoomend'), this.fire('moveend');
      },
      _stop: function () {
        return z(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
      },
      _rawPanBy: function (t) {
        vi(this._mapPane, this._getMapPanePos().subtract(t));
      },
      _getZoomSpan: function () {
        return this.getMaxZoom() - this.getMinZoom();
      },
      _panInsideMaxBounds: function () {
        this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
      },
      _checkIfLoaded: function () {
        if (!this._loaded) throw new Error('Set map center and zoom first.');
      },
      _initEvents: function (t) {
        this._targets = {};
        var i = t ? Si : zi;
        i(
          (this._targets[m(this._container)] = this)._container,
          'click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup',
          this._handleDOMEvent,
          this,
        ),
          this.options.trackResize && i(window, 'resize', this._onResize, this),
          vt &&
            this.options.transform3DLimit &&
            (t ? this.off : this.on).call(this, 'moveend', this._onMoveEnd);
      },
      _onResize: function () {
        z(this._resizeRequest),
          (this._resizeRequest = M(function () {
            this.invalidateSize({ debounceMoveend: !0 });
          }, this));
      },
      _onScroll: function () {
        (this._container.scrollTop = 0), (this._container.scrollLeft = 0);
      },
      _onMoveEnd: function () {
        var t = this._getMapPanePos();
        Math.max(Math.abs(t.x), Math.abs(t.y)) >=
          this.options.transform3DLimit &&
          this._resetView(this.getCenter(), this.getZoom());
      },
      _findEventTargets: function (t, i) {
        for (
          var e,
            n = [],
            o = 'mouseout' === i || 'mouseover' === i,
            s = t.target || t.srcElement,
            r = !1;
          s;

        ) {
          if (
            (e = this._targets[m(s)]) &&
            ('click' === i || 'preclick' === i) &&
            !t._simulated &&
            this._draggableMoved(e)
          ) {
            r = !0;
            break;
          }
          if (e && e.listens(i, !0)) {
            if (o && !Vi(s, t)) break;
            if ((n.push(e), o)) break;
          }
          if (s === this._container) break;
          s = s.parentNode;
        }
        return n.length || r || o || !Vi(s, t) || (n = [this]), n;
      },
      _handleDOMEvent: function (t) {
        var i;
        this._loaded &&
          !Ui(t) &&
          (('mousedown' !== (i = t.type) &&
            'keypress' !== i &&
            'keyup' !== i &&
            'keydown' !== i) ||
            Pi(t.target || t.srcElement),
          this._fireDOMEvent(t, i));
      },
      _mouseEvents: [
        'click',
        'dblclick',
        'mouseover',
        'mouseout',
        'contextmenu',
      ],
      _fireDOMEvent: function (t, i, e) {
        var n;
        if (
          ('click' === t.type &&
            (((n = h({}, t)).type = 'preclick'),
            this._fireDOMEvent(n, n.type, e)),
          !t._stopped &&
            (e = (e || []).concat(this._findEventTargets(t, i))).length)
        ) {
          var o = e[0];
          'contextmenu' === i && o.listens(i, !0) && Ri(t);
          var s,
            r = { originalEvent: t };
          'keypress' !== t.type &&
            'keydown' !== t.type &&
            'keyup' !== t.type &&
            ((s = o.getLatLng && (!o._radius || o._radius <= 10)),
            (r.containerPoint = s
              ? this.latLngToContainerPoint(o.getLatLng())
              : this.mouseEventToContainerPoint(t)),
            (r.layerPoint = this.containerPointToLayerPoint(r.containerPoint)),
            (r.latlng = s
              ? o.getLatLng()
              : this.layerPointToLatLng(r.layerPoint)));
          for (var a = 0; a < e.length; a++)
            if (
              (e[a].fire(i, r, !0),
              r.originalEvent._stopped ||
                (!1 === e[a].options.bubblingMouseEvents &&
                  -1 !== v(this._mouseEvents, i)))
            )
              return;
        }
      },
      _draggableMoved: function (t) {
        return (
          ((t = t.dragging && t.dragging.enabled() ? t : this).dragging &&
            t.dragging.moved()) ||
          (this.boxZoom && this.boxZoom.moved())
        );
      },
      _clearHandlers: function () {
        for (var t = 0, i = this._handlers.length; t < i; t++)
          this._handlers[t].disable();
      },
      whenReady: function (t, i) {
        return (
          this._loaded
            ? t.call(i || this, { target: this })
            : this.on('load', t, i),
          this
        );
      },
      _getMapPanePos: function () {
        return yi(this._mapPane) || new k(0, 0);
      },
      _moved: function () {
        var t = this._getMapPanePos();
        return t && !t.equals([0, 0]);
      },
      _getTopLeftPoint: function (t, i) {
        return (
          t && void 0 !== i
            ? this._getNewPixelOrigin(t, i)
            : this.getPixelOrigin()
        ).subtract(this._getMapPanePos());
      },
      _getNewPixelOrigin: function (t, i) {
        var e = this.getSize()._divideBy(2);
        return this.project(t, i)
          ._subtract(e)
          ._add(this._getMapPanePos())
          ._round();
      },
      _latLngToNewLayerPoint: function (t, i, e) {
        var n = this._getNewPixelOrigin(e, i);
        return this.project(t, i)._subtract(n);
      },
      _latLngBoundsToNewLayerBounds: function (t, i, e) {
        var n = this._getNewPixelOrigin(e, i);
        return O([
          this.project(t.getSouthWest(), i)._subtract(n),
          this.project(t.getNorthWest(), i)._subtract(n),
          this.project(t.getSouthEast(), i)._subtract(n),
          this.project(t.getNorthEast(), i)._subtract(n),
        ]);
      },
      _getCenterLayerPoint: function () {
        return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
      },
      _getCenterOffset: function (t) {
        return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
      },
      _limitCenter: function (t, i, e) {
        if (!e) return t;
        var n = this.project(t, i),
          o = this.getSize().divideBy(2),
          s = new I(n.subtract(o), n.add(o)),
          r = this._getBoundsOffset(s, e, i);
        return r.round().equals([0, 0]) ? t : this.unproject(n.add(r), i);
      },
      _limitOffset: function (t, i) {
        if (!i) return t;
        var e = this.getPixelBounds(),
          n = new I(e.min.add(t), e.max.add(t));
        return t.add(this._getBoundsOffset(n, i));
      },
      _getBoundsOffset: function (t, i, e) {
        var n = O(
            this.project(i.getNorthEast(), e),
            this.project(i.getSouthWest(), e),
          ),
          o = n.min.subtract(t.min),
          s = n.max.subtract(t.max);
        return new k(this._rebound(o.x, -s.x), this._rebound(o.y, -s.y));
      },
      _rebound: function (t, i) {
        return 0 < t + i
          ? Math.round(t - i) / 2
          : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(i));
      },
      _limitZoom: function (t) {
        var i = this.getMinZoom(),
          e = this.getMaxZoom(),
          n = vt ? this.options.zoomSnap : 1;
        return n && (t = Math.round(t / n) * n), Math.max(i, Math.min(e, t));
      },
      _onPanTransitionStep: function () {
        this.fire('move');
      },
      _onPanTransitionEnd: function () {
        _i(this._mapPane, 'leaflet-pan-anim'), this.fire('moveend');
      },
      _tryAnimatedPan: function (t, i) {
        var e = this._getCenterOffset(t)._trunc();
        return (
          !(!0 !== (i && i.animate) && !this.getSize().contains(e)) &&
          (this.panBy(e, i), !0)
        );
      },
      _createAnimProxy: function () {
        var t = (this._proxy = si(
          'div',
          'leaflet-proxy leaflet-zoom-animated',
        ));
        this._panes.mapPane.appendChild(t),
          this.on(
            'zoomanim',
            function (t) {
              var i = ti,
                e = this._proxy.style[i];
              gi(
                this._proxy,
                this.project(t.center, t.zoom),
                this.getZoomScale(t.zoom, 1),
              ),
                e === this._proxy.style[i] &&
                  this._animatingZoom &&
                  this._onZoomTransitionEnd();
            },
            this,
          ),
          this.on('load moveend', this._animMoveEnd, this),
          this._on('unload', this._destroyAnimProxy, this);
      },
      _destroyAnimProxy: function () {
        ri(this._proxy),
          this.off('load moveend', this._animMoveEnd, this),
          delete this._proxy;
      },
      _animMoveEnd: function () {
        var t = this.getCenter(),
          i = this.getZoom();
        gi(this._proxy, this.project(t, i), this.getZoomScale(i, 1));
      },
      _catchTransitionEnd: function (t) {
        this._animatingZoom &&
          0 <= t.propertyName.indexOf('transform') &&
          this._onZoomTransitionEnd();
      },
      _nothingToAnimate: function () {
        return !this._container.getElementsByClassName('leaflet-zoom-animated')
          .length;
      },
      _tryAnimatedZoom: function (t, i, e) {
        if (this._animatingZoom) return !0;
        if (
          ((e = e || {}),
          !this._zoomAnimated ||
            !1 === e.animate ||
            this._nothingToAnimate() ||
            Math.abs(i - this._zoom) > this.options.zoomAnimationThreshold)
        )
          return !1;
        var n = this.getZoomScale(i),
          o = this._getCenterOffset(t)._divideBy(1 - 1 / n);
        return (
          !(!0 !== e.animate && !this.getSize().contains(o)) &&
          (M(function () {
            this._moveStart(!0, !1)._animateZoom(t, i, !0);
          }, this),
          !0)
        );
      },
      _animateZoom: function (t, i, e, n) {
        this._mapPane &&
          (e &&
            ((this._animatingZoom = !0),
            (this._animateToCenter = t),
            (this._animateToZoom = i),
            ci(this._mapPane, 'leaflet-zoom-anim')),
          this.fire('zoomanim', { center: t, zoom: i, noUpdate: n }),
          setTimeout(p(this._onZoomTransitionEnd, this), 250));
      },
      _onZoomTransitionEnd: function () {
        this._animatingZoom &&
          (this._mapPane && _i(this._mapPane, 'leaflet-zoom-anim'),
          (this._animatingZoom = !1),
          this._move(this._animateToCenter, this._animateToZoom),
          M(function () {
            this._moveEnd(!0);
          }, this));
      },
    });
  function Yi(t) {
    return new Xi(t);
  }
  var Xi = S.extend({
    options: { position: 'topright' },
    initialize: function (t) {
      c(this, t);
    },
    getPosition: function () {
      return this.options.position;
    },
    setPosition: function (t) {
      var i = this._map;
      return (
        i && i.removeControl(this),
        (this.options.position = t),
        i && i.addControl(this),
        this
      );
    },
    getContainer: function () {
      return this._container;
    },
    addTo: function (t) {
      this.remove(), (this._map = t);
      var i = (this._container = this.onAdd(t)),
        e = this.getPosition(),
        n = t._controlCorners[e];
      return (
        ci(i, 'leaflet-control'),
        -1 !== e.indexOf('bottom')
          ? n.insertBefore(i, n.firstChild)
          : n.appendChild(i),
        this._map.on('unload', this.remove, this),
        this
      );
    },
    remove: function () {
      return (
        this._map &&
          (ri(this._container),
          this.onRemove && this.onRemove(this._map),
          this._map.off('unload', this.remove, this),
          (this._map = null)),
        this
      );
    },
    _refocusOnMap: function (t) {
      this._map &&
        t &&
        0 < t.screenX &&
        0 < t.screenY &&
        this._map.getContainer().focus();
    },
  });
  Ki.include({
    addControl: function (t) {
      return t.addTo(this), this;
    },
    removeControl: function (t) {
      return t.remove(), this;
    },
    _initControlPos: function () {
      var n = (this._controlCorners = {}),
        o = 'leaflet-',
        s = (this._controlContainer = si(
          'div',
          o + 'control-container',
          this._container,
        ));
      function t(t, i) {
        var e = o + t + ' ' + o + i;
        n[t + i] = si('div', e, s);
      }
      t('top', 'left'),
        t('top', 'right'),
        t('bottom', 'left'),
        t('bottom', 'right');
    },
    _clearControlPos: function () {
      for (var t in this._controlCorners) ri(this._controlCorners[t]);
      ri(this._controlContainer),
        delete this._controlCorners,
        delete this._controlContainer;
    },
  });
  var Ji = Xi.extend({
      options: {
        collapsed: !0,
        position: 'topright',
        autoZIndex: !0,
        hideSingleBase: !1,
        sortLayers: !1,
        sortFunction: function (t, i, e, n) {
          return e < n ? -1 : n < e ? 1 : 0;
        },
      },
      initialize: function (t, i, e) {
        for (var n in (c(this, e),
        (this._layerControlInputs = []),
        (this._layers = []),
        (this._lastZIndex = 0),
        (this._handlingClick = !1),
        t))
          this._addLayer(t[n], n);
        for (n in i) this._addLayer(i[n], n, !0);
      },
      onAdd: function (t) {
        this._initLayout(),
          this._update(),
          (this._map = t).on('zoomend', this._checkDisabledLayers, this);
        for (var i = 0; i < this._layers.length; i++)
          this._layers[i].layer.on('add remove', this._onLayerChange, this);
        return this._container;
      },
      addTo: function (t) {
        return Xi.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
      },
      onRemove: function () {
        this._map.off('zoomend', this._checkDisabledLayers, this);
        for (var t = 0; t < this._layers.length; t++)
          this._layers[t].layer.off('add remove', this._onLayerChange, this);
      },
      addBaseLayer: function (t, i) {
        return this._addLayer(t, i), this._map ? this._update() : this;
      },
      addOverlay: function (t, i) {
        return this._addLayer(t, i, !0), this._map ? this._update() : this;
      },
      removeLayer: function (t) {
        t.off('add remove', this._onLayerChange, this);
        var i = this._getLayer(m(t));
        return (
          i && this._layers.splice(this._layers.indexOf(i), 1),
          this._map ? this._update() : this
        );
      },
      expand: function () {
        ci(this._container, 'leaflet-control-layers-expanded'),
          (this._section.style.height = null);
        var t = this._map.getSize().y - (this._container.offsetTop + 50);
        return (
          t < this._section.clientHeight
            ? (ci(this._section, 'leaflet-control-layers-scrollbar'),
              (this._section.style.height = t + 'px'))
            : _i(this._section, 'leaflet-control-layers-scrollbar'),
          this._checkDisabledLayers(),
          this
        );
      },
      collapse: function () {
        return _i(this._container, 'leaflet-control-layers-expanded'), this;
      },
      _initLayout: function () {
        var t = 'leaflet-control-layers',
          i = (this._container = si('div', t)),
          e = this.options.collapsed;
        i.setAttribute('aria-haspopup', !0), Oi(i), Ii(i);
        var n = (this._section = si('section', t + '-list'));
        e &&
          (this._map.on('click', this.collapse, this),
          ot ||
            zi(
              i,
              { mouseenter: this.expand, mouseleave: this.collapse },
              this,
            ));
        var o = (this._layersLink = si('a', t + '-toggle', i));
        (o.href = '#'),
          (o.title = 'Layers'),
          bt
            ? (zi(o, 'click', Ni), zi(o, 'click', this.expand, this))
            : zi(o, 'focus', this.expand, this),
          e || this.expand(),
          (this._baseLayersList = si('div', t + '-base', n)),
          (this._separator = si('div', t + '-separator', n)),
          (this._overlaysList = si('div', t + '-overlays', n)),
          i.appendChild(n);
      },
      _getLayer: function (t) {
        for (var i = 0; i < this._layers.length; i++)
          if (this._layers[i] && m(this._layers[i].layer) === t)
            return this._layers[i];
      },
      _addLayer: function (t, i, e) {
        this._map && t.on('add remove', this._onLayerChange, this),
          this._layers.push({ layer: t, name: i, overlay: e }),
          this.options.sortLayers &&
            this._layers.sort(
              p(function (t, i) {
                return this.options.sortFunction(
                  t.layer,
                  i.layer,
                  t.name,
                  i.name,
                );
              }, this),
            ),
          this.options.autoZIndex &&
            t.setZIndex &&
            (this._lastZIndex++, t.setZIndex(this._lastZIndex)),
          this._expandIfNotCollapsed();
      },
      _update: function () {
        if (!this._container) return this;
        ai(this._baseLayersList),
          ai(this._overlaysList),
          (this._layerControlInputs = []);
        for (var t, i, e, n = 0, o = 0; o < this._layers.length; o++)
          (e = this._layers[o]),
            this._addItem(e),
            (i = i || e.overlay),
            (t = t || !e.overlay),
            (n += e.overlay ? 0 : 1);
        return (
          this.options.hideSingleBase &&
            ((t = t && 1 < n),
            (this._baseLayersList.style.display = t ? '' : 'none')),
          (this._separator.style.display = i && t ? '' : 'none'),
          this
        );
      },
      _onLayerChange: function (t) {
        this._handlingClick || this._update();
        var i = this._getLayer(m(t.target)),
          e = i.overlay
            ? 'add' === t.type
              ? 'overlayadd'
              : 'overlayremove'
            : 'add' === t.type
            ? 'baselayerchange'
            : null;
        e && this._map.fire(e, i);
      },
      _createRadioElement: function (t, i) {
        var e =
            '<input type="radio" class="leaflet-control-layers-selector" name="' +
            t +
            '"' +
            (i ? ' checked="checked"' : '') +
            '/>',
          n = document.createElement('div');
        return (n.innerHTML = e), n.firstChild;
      },
      _addItem: function (t) {
        var i,
          e = document.createElement('label'),
          n = this._map.hasLayer(t.layer);
        t.overlay
          ? (((i = document.createElement('input')).type = 'checkbox'),
            (i.className = 'leaflet-control-layers-selector'),
            (i.defaultChecked = n))
          : (i = this._createRadioElement('leaflet-base-layers_' + m(this), n)),
          this._layerControlInputs.push(i),
          (i.layerId = m(t.layer)),
          zi(i, 'click', this._onInputClick, this);
        var o = document.createElement('span');
        o.innerHTML = ' ' + t.name;
        var s = document.createElement('div');
        return (
          e.appendChild(s),
          s.appendChild(i),
          s.appendChild(o),
          (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(
            e,
          ),
          this._checkDisabledLayers(),
          e
        );
      },
      _onInputClick: function () {
        var t,
          i,
          e = this._layerControlInputs,
          n = [],
          o = [];
        this._handlingClick = !0;
        for (var s = e.length - 1; 0 <= s; s--)
          (t = e[s]),
            (i = this._getLayer(t.layerId).layer),
            t.checked ? n.push(i) : t.checked || o.push(i);
        for (s = 0; s < o.length; s++)
          this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
        for (s = 0; s < n.length; s++)
          this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
        (this._handlingClick = !1), this._refocusOnMap();
      },
      _checkDisabledLayers: function () {
        for (
          var t,
            i,
            e = this._layerControlInputs,
            n = this._map.getZoom(),
            o = e.length - 1;
          0 <= o;
          o--
        )
          (t = e[o]),
            (i = this._getLayer(t.layerId).layer),
            (t.disabled =
              (void 0 !== i.options.minZoom && n < i.options.minZoom) ||
              (void 0 !== i.options.maxZoom && n > i.options.maxZoom));
      },
      _expandIfNotCollapsed: function () {
        return this._map && !this.options.collapsed && this.expand(), this;
      },
      _expand: function () {
        return this.expand();
      },
      _collapse: function () {
        return this.collapse();
      },
    }),
    $i = Xi.extend({
      options: {
        position: 'topleft',
        zoomInText: '+',
        zoomInTitle: 'Zoom in',
        zoomOutText: '&#x2212;',
        zoomOutTitle: 'Zoom out',
      },
      onAdd: function (t) {
        var i = 'leaflet-control-zoom',
          e = si('div', i + ' leaflet-bar'),
          n = this.options;
        return (
          (this._zoomInButton = this._createButton(
            n.zoomInText,
            n.zoomInTitle,
            i + '-in',
            e,
            this._zoomIn,
          )),
          (this._zoomOutButton = this._createButton(
            n.zoomOutText,
            n.zoomOutTitle,
            i + '-out',
            e,
            this._zoomOut,
          )),
          this._updateDisabled(),
          t.on('zoomend zoomlevelschange', this._updateDisabled, this),
          e
        );
      },
      onRemove: function (t) {
        t.off('zoomend zoomlevelschange', this._updateDisabled, this);
      },
      disable: function () {
        return (this._disabled = !0), this._updateDisabled(), this;
      },
      enable: function () {
        return (this._disabled = !1), this._updateDisabled(), this;
      },
      _zoomIn: function (t) {
        !this._disabled &&
          this._map._zoom < this._map.getMaxZoom() &&
          this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
      },
      _zoomOut: function (t) {
        !this._disabled &&
          this._map._zoom > this._map.getMinZoom() &&
          this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
      },
      _createButton: function (t, i, e, n, o) {
        var s = si('a', e, n);
        return (
          (s.innerHTML = t),
          (s.href = '#'),
          (s.title = i),
          s.setAttribute('role', 'button'),
          s.setAttribute('aria-label', i),
          Oi(s),
          zi(s, 'click', Ni),
          zi(s, 'click', o, this),
          zi(s, 'click', this._refocusOnMap, this),
          s
        );
      },
      _updateDisabled: function () {
        var t = this._map,
          i = 'leaflet-disabled';
        _i(this._zoomInButton, i),
          _i(this._zoomOutButton, i),
          (!this._disabled && t._zoom !== t.getMinZoom()) ||
            ci(this._zoomOutButton, i),
          (!this._disabled && t._zoom !== t.getMaxZoom()) ||
            ci(this._zoomInButton, i);
      },
    });
  Ki.mergeOptions({ zoomControl: !0 }),
    Ki.addInitHook(function () {
      this.options.zoomControl &&
        ((this.zoomControl = new $i()), this.addControl(this.zoomControl));
    });
  var Qi = Xi.extend({
      options: {
        position: 'bottomleft',
        maxWidth: 100,
        metric: !0,
        imperial: !0,
      },
      onAdd: function (t) {
        var i = 'leaflet-control-scale',
          e = si('div', i),
          n = this.options;
        return (
          this._addScales(n, i + '-line', e),
          t.on(n.updateWhenIdle ? 'moveend' : 'move', this._update, this),
          t.whenReady(this._update, this),
          e
        );
      },
      onRemove: function (t) {
        t.off(
          this.options.updateWhenIdle ? 'moveend' : 'move',
          this._update,
          this,
        );
      },
      _addScales: function (t, i, e) {
        t.metric && (this._mScale = si('div', i, e)),
          t.imperial && (this._iScale = si('div', i, e));
      },
      _update: function () {
        var t = this._map,
          i = t.getSize().y / 2,
          e = t.distance(
            t.containerPointToLatLng([0, i]),
            t.containerPointToLatLng([this.options.maxWidth, i]),
          );
        this._updateScales(e);
      },
      _updateScales: function (t) {
        this.options.metric && t && this._updateMetric(t),
          this.options.imperial && t && this._updateImperial(t);
      },
      _updateMetric: function (t) {
        var i = this._getRoundNum(t),
          e = i < 1e3 ? i + ' m' : i / 1e3 + ' km';
        this._updateScale(this._mScale, e, i / t);
      },
      _updateImperial: function (t) {
        var i,
          e,
          n,
          o = 3.2808399 * t;
        5280 < o
          ? ((i = o / 5280),
            (e = this._getRoundNum(i)),
            this._updateScale(this._iScale, e + ' mi', e / i))
          : ((n = this._getRoundNum(o)),
            this._updateScale(this._iScale, n + ' ft', n / o));
      },
      _updateScale: function (t, i, e) {
        (t.style.width = Math.round(this.options.maxWidth * e) + 'px'),
          (t.innerHTML = i);
      },
      _getRoundNum: function (t) {
        var i = Math.pow(10, (Math.floor(t) + '').length - 1),
          e = t / i;
        return (
          i * (e = 10 <= e ? 10 : 5 <= e ? 5 : 3 <= e ? 3 : 2 <= e ? 2 : 1)
        );
      },
    }),
    te = Xi.extend({
      options: {
        position: 'bottomright',
        prefix:
          '<a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>',
      },
      initialize: function (t) {
        c(this, t), (this._attributions = {});
      },
      onAdd: function (t) {
        for (var i in (((t.attributionControl = this)._container = si(
          'div',
          'leaflet-control-attribution',
        )),
        Oi(this._container),
        t._layers))
          t._layers[i].getAttribution &&
            this.addAttribution(t._layers[i].getAttribution());
        return this._update(), this._container;
      },
      setPrefix: function (t) {
        return (this.options.prefix = t), this._update(), this;
      },
      addAttribution: function (t) {
        return (
          t &&
            (this._attributions[t] || (this._attributions[t] = 0),
            this._attributions[t]++,
            this._update()),
          this
        );
      },
      removeAttribution: function (t) {
        return (
          t &&
            this._attributions[t] &&
            (this._attributions[t]--, this._update()),
          this
        );
      },
      _update: function () {
        if (this._map) {
          var t = [];
          for (var i in this._attributions) this._attributions[i] && t.push(i);
          var e = [];
          this.options.prefix && e.push(this.options.prefix),
            t.length && e.push(t.join(', ')),
            (this._container.innerHTML = e.join(' | '));
        }
      },
    });
  Ki.mergeOptions({ attributionControl: !0 }),
    Ki.addInitHook(function () {
      this.options.attributionControl && new te().addTo(this);
    });
  (Xi.Layers = Ji),
    (Xi.Zoom = $i),
    (Xi.Scale = Qi),
    (Xi.Attribution = te),
    (Yi.layers = function (t, i, e) {
      return new Ji(t, i, e);
    }),
    (Yi.zoom = function (t) {
      return new $i(t);
    }),
    (Yi.scale = function (t) {
      return new Qi(t);
    }),
    (Yi.attribution = function (t) {
      return new te(t);
    });
  var ie = S.extend({
    initialize: function (t) {
      this._map = t;
    },
    enable: function () {
      return this._enabled || ((this._enabled = !0), this.addHooks()), this;
    },
    disable: function () {
      return this._enabled && ((this._enabled = !1), this.removeHooks()), this;
    },
    enabled: function () {
      return !!this._enabled;
    },
  });
  ie.addTo = function (t, i) {
    return t.addHandler(i, this), this;
  };
  var ee,
    ne = { Events: Z },
    oe = bt ? 'touchstart mousedown' : 'mousedown',
    se = {
      mousedown: 'mouseup',
      touchstart: 'touchend',
      pointerdown: 'touchend',
      MSPointerDown: 'touchend',
    },
    re = {
      mousedown: 'mousemove',
      touchstart: 'touchmove',
      pointerdown: 'touchmove',
      MSPointerDown: 'touchmove',
    },
    ae = E.extend({
      options: { clickTolerance: 3 },
      initialize: function (t, i, e, n) {
        c(this, n),
          (this._element = t),
          (this._dragStartTarget = i || t),
          (this._preventOutline = e);
      },
      enable: function () {
        this._enabled ||
          (zi(this._dragStartTarget, oe, this._onDown, this),
          (this._enabled = !0));
      },
      disable: function () {
        this._enabled &&
          (ae._dragging === this && this.finishDrag(),
          Si(this._dragStartTarget, oe, this._onDown, this),
          (this._enabled = !1),
          (this._moved = !1));
      },
      _onDown: function (t) {
        var i, e;
        !t._simulated &&
          this._enabled &&
          ((this._moved = !1),
          li(this._element, 'leaflet-zoom-anim') ||
            ae._dragging ||
            t.shiftKey ||
            (1 !== t.which && 1 !== t.button && !t.touches) ||
            ((ae._dragging = this)._preventOutline && Pi(this._element),
            xi(),
            Xt(),
            this._moving ||
              (this.fire('down'),
              (i = t.touches ? t.touches[0] : t),
              (e = bi(this._element)),
              (this._startPoint = new k(i.clientX, i.clientY)),
              (this._parentScale = Ti(e)),
              zi(document, re[t.type], this._onMove, this),
              zi(document, se[t.type], this._onUp, this))));
      },
      _onMove: function (t) {
        var i, e;
        !t._simulated &&
          this._enabled &&
          (t.touches && 1 < t.touches.length
            ? (this._moved = !0)
            : ((e = new k(
                (i =
                  t.touches && 1 === t.touches.length
                    ? t.touches[0]
                    : t).clientX,
                i.clientY,
              )._subtract(this._startPoint)).x ||
                e.y) &&
              (Math.abs(e.x) + Math.abs(e.y) < this.options.clickTolerance ||
                ((e.x /= this._parentScale.x),
                (e.y /= this._parentScale.y),
                Ri(t),
                this._moved ||
                  (this.fire('dragstart'),
                  (this._moved = !0),
                  (this._startPos = yi(this._element).subtract(e)),
                  ci(document.body, 'leaflet-dragging'),
                  (this._lastTarget = t.target || t.srcElement),
                  window.SVGElementInstance &&
                    this._lastTarget instanceof window.SVGElementInstance &&
                    (this._lastTarget =
                      this._lastTarget.correspondingUseElement),
                  ci(this._lastTarget, 'leaflet-drag-target')),
                (this._newPos = this._startPos.add(e)),
                (this._moving = !0),
                z(this._animRequest),
                (this._lastEvent = t),
                (this._animRequest = M(this._updatePosition, this, !0)))));
      },
      _updatePosition: function () {
        var t = { originalEvent: this._lastEvent };
        this.fire('predrag', t),
          vi(this._element, this._newPos),
          this.fire('drag', t);
      },
      _onUp: function (t) {
        !t._simulated && this._enabled && this.finishDrag();
      },
      finishDrag: function () {
        for (var t in (_i(document.body, 'leaflet-dragging'),
        this._lastTarget &&
          (_i(this._lastTarget, 'leaflet-drag-target'),
          (this._lastTarget = null)),
        re))
          Si(document, re[t], this._onMove, this),
            Si(document, se[t], this._onUp, this);
        wi(),
          Jt(),
          this._moved &&
            this._moving &&
            (z(this._animRequest),
            this.fire('dragend', {
              distance: this._newPos.distanceTo(this._startPos),
            })),
          (this._moving = !1),
          (ae._dragging = !1);
      },
    });
  function he(t, i) {
    if (!i || !t.length) return t.slice();
    var e = i * i;
    return (t = (function (t, i) {
      var e = t.length,
        n = new (typeof Uint8Array != void 0 + '' ? Uint8Array : Array)(e);
      (n[0] = n[e - 1] = 1),
        (function t(i, e, n, o, s) {
          var r,
            a,
            h,
            u = 0;
          for (a = o + 1; a <= s - 1; a++)
            (h = de(i[a], i[o], i[s], !0)), u < h && ((r = a), (u = h));
          n < u && ((e[r] = 1), t(i, e, n, o, r), t(i, e, n, r, s));
        })(t, n, i, 0, e - 1);
      var o,
        s = [];
      for (o = 0; o < e; o++) n[o] && s.push(t[o]);
      return s;
    })(
      (t = (function (t, i) {
        for (var e = [t[0]], n = 1, o = 0, s = t.length; n < s; n++)
          (function (t, i) {
            var e = i.x - t.x,
              n = i.y - t.y;
            return e * e + n * n;
          })(t[n], t[o]) > i && (e.push(t[n]), (o = n));
        o < s - 1 && e.push(t[s - 1]);
        return e;
      })(t, e)),
      e,
    ));
  }
  function ue(t, i, e) {
    return Math.sqrt(de(t, i, e, !0));
  }
  function le(t, i, e, n, o) {
    var s,
      r,
      a,
      h = n ? ee : _e(t, e),
      u = _e(i, e);
    for (ee = u; ; ) {
      if (!(h | u)) return [t, i];
      if (h & u) return !1;
      (a = _e((r = ce(t, i, (s = h || u), e, o)), e)),
        s === h ? ((t = r), (h = a)) : ((i = r), (u = a));
    }
  }
  function ce(t, i, e, n, o) {
    var s,
      r,
      a = i.x - t.x,
      h = i.y - t.y,
      u = n.min,
      l = n.max;
    return (
      8 & e
        ? ((s = t.x + (a * (l.y - t.y)) / h), (r = l.y))
        : 4 & e
        ? ((s = t.x + (a * (u.y - t.y)) / h), (r = u.y))
        : 2 & e
        ? ((s = l.x), (r = t.y + (h * (l.x - t.x)) / a))
        : 1 & e && ((s = u.x), (r = t.y + (h * (u.x - t.x)) / a)),
      new k(s, r, o)
    );
  }
  function _e(t, i) {
    var e = 0;
    return (
      t.x < i.min.x ? (e |= 1) : t.x > i.max.x && (e |= 2),
      t.y < i.min.y ? (e |= 4) : t.y > i.max.y && (e |= 8),
      e
    );
  }
  function de(t, i, e, n) {
    var o,
      s = i.x,
      r = i.y,
      a = e.x - s,
      h = e.y - r,
      u = a * a + h * h;
    return (
      0 < u &&
        (1 < (o = ((t.x - s) * a + (t.y - r) * h) / u)
          ? ((s = e.x), (r = e.y))
          : 0 < o && ((s += a * o), (r += h * o))),
      (a = t.x - s),
      (h = t.y - r),
      n ? a * a + h * h : new k(s, r)
    );
  }
  function pe(t) {
    return !g(t[0]) || ('object' != typeof t[0][0] && void 0 !== t[0][0]);
  }
  function me(t) {
    return (
      console.warn(
        'Deprecated use of _flat, please use L.LineUtil.isFlat instead.',
      ),
      pe(t)
    );
  }
  var fe = {
    simplify: he,
    pointToSegmentDistance: ue,
    closestPointOnSegment: function (t, i, e) {
      return de(t, i, e);
    },
    clipSegment: le,
    _getEdgeIntersection: ce,
    _getBitCode: _e,
    _sqClosestPointOnSegment: de,
    isFlat: pe,
    _flat: me,
  };
  function ge(t, i, e) {
    for (
      var n, o, s, r, a, h, u, l = [1, 4, 2, 8], c = 0, _ = t.length;
      c < _;
      c++
    )
      t[c]._code = _e(t[c], i);
    for (s = 0; s < 4; s++) {
      for (h = l[s], n = [], c = 0, o = (_ = t.length) - 1; c < _; o = c++)
        (r = t[c]),
          (a = t[o]),
          r._code & h
            ? a._code & h ||
              (((u = ce(a, r, h, i, e))._code = _e(u, i)), n.push(u))
            : (a._code & h &&
                (((u = ce(a, r, h, i, e))._code = _e(u, i)), n.push(u)),
              n.push(r));
      t = n;
    }
    return t;
  }
  var ve,
    ye = { clipPolygon: ge },
    xe = {
      project: function (t) {
        return new k(t.lng, t.lat);
      },
      unproject: function (t) {
        return new D(t.y, t.x);
      },
      bounds: new I([-180, -90], [180, 90]),
    },
    we = {
      R: 6378137,
      R_MINOR: 6356752.314245179,
      bounds: new I(
        [-20037508.34279, -15496570.73972],
        [20037508.34279, 18764656.23138],
      ),
      project: function (t) {
        var i = Math.PI / 180,
          e = this.R,
          n = t.lat * i,
          o = this.R_MINOR / e,
          s = Math.sqrt(1 - o * o),
          r = s * Math.sin(n),
          a =
            Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - r) / (1 + r), s / 2),
          n = -e * Math.log(Math.max(a, 1e-10));
        return new k(t.lng * i * e, n);
      },
      unproject: function (t) {
        for (
          var i,
            e = 180 / Math.PI,
            n = this.R,
            o = this.R_MINOR / n,
            s = Math.sqrt(1 - o * o),
            r = Math.exp(-t.y / n),
            a = Math.PI / 2 - 2 * Math.atan(r),
            h = 0,
            u = 0.1;
          h < 15 && 1e-7 < Math.abs(u);
          h++
        )
          (i = s * Math.sin(a)),
            (i = Math.pow((1 - i) / (1 + i), s / 2)),
            (a += u = Math.PI / 2 - 2 * Math.atan(r * i) - a);
        return new D(a * e, (t.x * e) / n);
      },
    },
    Pe = { LonLat: xe, Mercator: we, SphericalMercator: V },
    Le = h({}, F, {
      code: 'EPSG:3395',
      projection: we,
      transformation: G((ve = 0.5 / (Math.PI * we.R)), 0.5, -ve, 0.5),
    }),
    be = h({}, F, {
      code: 'EPSG:4326',
      projection: xe,
      transformation: G(1 / 180, 1, -1 / 180, 0.5),
    }),
    Te = h({}, H, {
      projection: xe,
      transformation: G(1, 0, -1, 0),
      scale: function (t) {
        return Math.pow(2, t);
      },
      zoom: function (t) {
        return Math.log(t) / Math.LN2;
      },
      distance: function (t, i) {
        var e = i.lng - t.lng,
          n = i.lat - t.lat;
        return Math.sqrt(e * e + n * n);
      },
      infinite: !0,
    });
  (H.Earth = F),
    (H.EPSG3395 = Le),
    (H.EPSG3857 = Y),
    (H.EPSG900913 = X),
    (H.EPSG4326 = be),
    (H.Simple = Te);
  var Me = E.extend({
    options: {
      pane: 'overlayPane',
      attribution: null,
      bubblingMouseEvents: !0,
    },
    addTo: function (t) {
      return t.addLayer(this), this;
    },
    remove: function () {
      return this.removeFrom(this._map || this._mapToAdd);
    },
    removeFrom: function (t) {
      return t && t.removeLayer(this), this;
    },
    getPane: function (t) {
      return this._map.getPane(t ? this.options[t] || t : this.options.pane);
    },
    addInteractiveTarget: function (t) {
      return (this._map._targets[m(t)] = this);
    },
    removeInteractiveTarget: function (t) {
      return delete this._map._targets[m(t)], this;
    },
    getAttribution: function () {
      return this.options.attribution;
    },
    _layerAdd: function (t) {
      var i,
        e = t.target;
      e.hasLayer(this) &&
        ((this._map = e),
        (this._zoomAnimated = e._zoomAnimated),
        this.getEvents &&
          ((i = this.getEvents()),
          e.on(i, this),
          this.once(
            'remove',
            function () {
              e.off(i, this);
            },
            this,
          )),
        this.onAdd(e),
        this.getAttribution &&
          e.attributionControl &&
          e.attributionControl.addAttribution(this.getAttribution()),
        this.fire('add'),
        e.fire('layeradd', { layer: this }));
    },
  });
  Ki.include({
    addLayer: function (t) {
      if (!t._layerAdd) throw new Error('The provided object is not a Layer.');
      var i = m(t);
      return (
        this._layers[i] ||
          (((this._layers[i] = t)._mapToAdd = this),
          t.beforeAdd && t.beforeAdd(this),
          this.whenReady(t._layerAdd, t)),
        this
      );
    },
    removeLayer: function (t) {
      var i = m(t);
      return (
        this._layers[i] &&
          (this._loaded && t.onRemove(this),
          t.getAttribution &&
            this.attributionControl &&
            this.attributionControl.removeAttribution(t.getAttribution()),
          delete this._layers[i],
          this._loaded &&
            (this.fire('layerremove', { layer: t }), t.fire('remove')),
          (t._map = t._mapToAdd = null)),
        this
      );
    },
    hasLayer: function (t) {
      return !!t && m(t) in this._layers;
    },
    eachLayer: function (t, i) {
      for (var e in this._layers) t.call(i, this._layers[e]);
      return this;
    },
    _addLayers: function (t) {
      for (var i = 0, e = (t = t ? (g(t) ? t : [t]) : []).length; i < e; i++)
        this.addLayer(t[i]);
    },
    _addZoomLimit: function (t) {
      (!isNaN(t.options.maxZoom) && isNaN(t.options.minZoom)) ||
        ((this._zoomBoundLayers[m(t)] = t), this._updateZoomLevels());
    },
    _removeZoomLimit: function (t) {
      var i = m(t);
      this._zoomBoundLayers[i] &&
        (delete this._zoomBoundLayers[i], this._updateZoomLevels());
    },
    _updateZoomLevels: function () {
      var t = 1 / 0,
        i = -1 / 0,
        e = this._getZoomSpan();
      for (var n in this._zoomBoundLayers)
        var o = this._zoomBoundLayers[n].options,
          t = void 0 === o.minZoom ? t : Math.min(t, o.minZoom),
          i = void 0 === o.maxZoom ? i : Math.max(i, o.maxZoom);
      (this._layersMaxZoom = i === -1 / 0 ? void 0 : i),
        (this._layersMinZoom = t === 1 / 0 ? void 0 : t),
        e !== this._getZoomSpan() && this.fire('zoomlevelschange'),
        void 0 === this.options.maxZoom &&
          this._layersMaxZoom &&
          this.getZoom() > this._layersMaxZoom &&
          this.setZoom(this._layersMaxZoom),
        void 0 === this.options.minZoom &&
          this._layersMinZoom &&
          this.getZoom() < this._layersMinZoom &&
          this.setZoom(this._layersMinZoom);
    },
  });
  var ze = Me.extend({
      initialize: function (t, i) {
        var e, n;
        if ((c(this, i), (this._layers = {}), t))
          for (e = 0, n = t.length; e < n; e++) this.addLayer(t[e]);
      },
      addLayer: function (t) {
        var i = this.getLayerId(t);
        return (this._layers[i] = t), this._map && this._map.addLayer(t), this;
      },
      removeLayer: function (t) {
        var i = t in this._layers ? t : this.getLayerId(t);
        return (
          this._map &&
            this._layers[i] &&
            this._map.removeLayer(this._layers[i]),
          delete this._layers[i],
          this
        );
      },
      hasLayer: function (t) {
        return (
          !!t && ('number' == typeof t ? t : this.getLayerId(t)) in this._layers
        );
      },
      clearLayers: function () {
        return this.eachLayer(this.removeLayer, this);
      },
      invoke: function (t) {
        var i,
          e,
          n = Array.prototype.slice.call(arguments, 1);
        for (i in this._layers) (e = this._layers[i])[t] && e[t].apply(e, n);
        return this;
      },
      onAdd: function (t) {
        this.eachLayer(t.addLayer, t);
      },
      onRemove: function (t) {
        this.eachLayer(t.removeLayer, t);
      },
      eachLayer: function (t, i) {
        for (var e in this._layers) t.call(i, this._layers[e]);
        return this;
      },
      getLayer: function (t) {
        return this._layers[t];
      },
      getLayers: function () {
        var t = [];
        return this.eachLayer(t.push, t), t;
      },
      setZIndex: function (t) {
        return this.invoke('setZIndex', t);
      },
      getLayerId: m,
    }),
    Ce = ze.extend({
      addLayer: function (t) {
        return this.hasLayer(t)
          ? this
          : (t.addEventParent(this),
            ze.prototype.addLayer.call(this, t),
            this.fire('layeradd', { layer: t }));
      },
      removeLayer: function (t) {
        return this.hasLayer(t)
          ? (t in this._layers && (t = this._layers[t]),
            t.removeEventParent(this),
            ze.prototype.removeLayer.call(this, t),
            this.fire('layerremove', { layer: t }))
          : this;
      },
      setStyle: function (t) {
        return this.invoke('setStyle', t);
      },
      bringToFront: function () {
        return this.invoke('bringToFront');
      },
      bringToBack: function () {
        return this.invoke('bringToBack');
      },
      getBounds: function () {
        var t = new R();
        for (var i in this._layers) {
          var e = this._layers[i];
          t.extend(e.getBounds ? e.getBounds() : e.getLatLng());
        }
        return t;
      },
    }),
    Se = S.extend({
      options: { popupAnchor: [0, 0], tooltipAnchor: [0, 0] },
      initialize: function (t) {
        c(this, t);
      },
      createIcon: function (t) {
        return this._createIcon('icon', t);
      },
      createShadow: function (t) {
        return this._createIcon('shadow', t);
      },
      _createIcon: function (t, i) {
        var e = this._getIconUrl(t);
        if (!e) {
          if ('icon' === t)
            throw new Error('iconUrl not set in Icon options (see the docs).');
          return null;
        }
        var n = this._createImg(e, i && 'IMG' === i.tagName ? i : null);
        return this._setIconStyles(n, t), n;
      },
      _setIconStyles: function (t, i) {
        var e = this.options,
          n = e[i + 'Size'];
        'number' == typeof n && (n = [n, n]);
        var o = A(n),
          s = A(
            ('shadow' === i && e.shadowAnchor) ||
              e.iconAnchor ||
              (o && o.divideBy(2, !0)),
          );
        (t.className = 'leaflet-marker-' + i + ' ' + (e.className || '')),
          s &&
            ((t.style.marginLeft = -s.x + 'px'),
            (t.style.marginTop = -s.y + 'px')),
          o && ((t.style.width = o.x + 'px'), (t.style.height = o.y + 'px'));
      },
      _createImg: function (t, i) {
        return ((i = i || document.createElement('img')).src = t), i;
      },
      _getIconUrl: function (t) {
        return (zt && this.options[t + 'RetinaUrl']) || this.options[t + 'Url'];
      },
    });
  var Ze = Se.extend({
      options: {
        iconUrl: 'marker-icon.png',
        iconRetinaUrl: 'marker-icon-2x.png',
        shadowUrl: 'marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41],
      },
      _getIconUrl: function (t) {
        return (
          Ze.imagePath || (Ze.imagePath = this._detectIconPath()),
          (this.options.imagePath || Ze.imagePath) +
            Se.prototype._getIconUrl.call(this, t)
        );
      },
      _detectIconPath: function () {
        var t = si('div', 'leaflet-default-icon-path', document.body),
          i = oi(t, 'background-image') || oi(t, 'backgroundImage');
        return (
          document.body.removeChild(t),
          (i =
            null === i || 0 !== i.indexOf('url')
              ? ''
              : i
                  .replace(/^url\(["']?/, '')
                  .replace(/marker-icon\.png["']?\)$/, ''))
        );
      },
    }),
    Ee = ie.extend({
      initialize: function (t) {
        this._marker = t;
      },
      addHooks: function () {
        var t = this._marker._icon;
        this._draggable || (this._draggable = new ae(t, t, !0)),
          this._draggable
            .on(
              {
                dragstart: this._onDragStart,
                predrag: this._onPreDrag,
                drag: this._onDrag,
                dragend: this._onDragEnd,
              },
              this,
            )
            .enable(),
          ci(t, 'leaflet-marker-draggable');
      },
      removeHooks: function () {
        this._draggable
          .off(
            {
              dragstart: this._onDragStart,
              predrag: this._onPreDrag,
              drag: this._onDrag,
              dragend: this._onDragEnd,
            },
            this,
          )
          .disable(),
          this._marker._icon &&
            _i(this._marker._icon, 'leaflet-marker-draggable');
      },
      moved: function () {
        return this._draggable && this._draggable._moved;
      },
      _adjustPan: function (t) {
        var i,
          e = this._marker,
          n = e._map,
          o = this._marker.options.autoPanSpeed,
          s = this._marker.options.autoPanPadding,
          r = yi(e._icon),
          a = n.getPixelBounds(),
          h = n.getPixelOrigin(),
          u = O(a.min._subtract(h).add(s), a.max._subtract(h).subtract(s));
        u.contains(r) ||
          ((i = A(
            (Math.max(u.max.x, r.x) - u.max.x) / (a.max.x - u.max.x) -
              (Math.min(u.min.x, r.x) - u.min.x) / (a.min.x - u.min.x),
            (Math.max(u.max.y, r.y) - u.max.y) / (a.max.y - u.max.y) -
              (Math.min(u.min.y, r.y) - u.min.y) / (a.min.y - u.min.y),
          ).multiplyBy(o)),
          n.panBy(i, { animate: !1 }),
          this._draggable._newPos._add(i),
          this._draggable._startPos._add(i),
          vi(e._icon, this._draggable._newPos),
          this._onDrag(t),
          (this._panRequest = M(this._adjustPan.bind(this, t))));
      },
      _onDragStart: function () {
        (this._oldLatLng = this._marker.getLatLng()),
          this._marker.closePopup && this._marker.closePopup(),
          this._marker.fire('movestart').fire('dragstart');
      },
      _onPreDrag: function (t) {
        this._marker.options.autoPan &&
          (z(this._panRequest),
          (this._panRequest = M(this._adjustPan.bind(this, t))));
      },
      _onDrag: function (t) {
        var i = this._marker,
          e = i._shadow,
          n = yi(i._icon),
          o = i._map.layerPointToLatLng(n);
        e && vi(e, n),
          (i._latlng = o),
          (t.latlng = o),
          (t.oldLatLng = this._oldLatLng),
          i.fire('move', t).fire('drag', t);
      },
      _onDragEnd: function (t) {
        z(this._panRequest),
          delete this._oldLatLng,
          this._marker.fire('moveend').fire('dragend', t);
      },
    }),
    ke = Me.extend({
      options: {
        icon: new Ze(),
        interactive: !0,
        keyboard: !0,
        title: '',
        alt: '',
        zIndexOffset: 0,
        opacity: 1,
        riseOnHover: !1,
        riseOffset: 250,
        pane: 'markerPane',
        shadowPane: 'shadowPane',
        bubblingMouseEvents: !1,
        draggable: !1,
        autoPan: !1,
        autoPanPadding: [50, 50],
        autoPanSpeed: 10,
      },
      initialize: function (t, i) {
        c(this, i), (this._latlng = j(t));
      },
      onAdd: function (t) {
        (this._zoomAnimated =
          this._zoomAnimated && t.options.markerZoomAnimation),
          this._zoomAnimated && t.on('zoomanim', this._animateZoom, this),
          this._initIcon(),
          this.update();
      },
      onRemove: function (t) {
        this.dragging &&
          this.dragging.enabled() &&
          ((this.options.draggable = !0), this.dragging.removeHooks()),
          delete this.dragging,
          this._zoomAnimated && t.off('zoomanim', this._animateZoom, this),
          this._removeIcon(),
          this._removeShadow();
      },
      getEvents: function () {
        return { zoom: this.update, viewreset: this.update };
      },
      getLatLng: function () {
        return this._latlng;
      },
      setLatLng: function (t) {
        var i = this._latlng;
        return (
          (this._latlng = j(t)),
          this.update(),
          this.fire('move', { oldLatLng: i, latlng: this._latlng })
        );
      },
      setZIndexOffset: function (t) {
        return (this.options.zIndexOffset = t), this.update();
      },
      getIcon: function () {
        return this.options.icon;
      },
      setIcon: function (t) {
        return (
          (this.options.icon = t),
          this._map && (this._initIcon(), this.update()),
          this._popup && this.bindPopup(this._popup, this._popup.options),
          this
        );
      },
      getElement: function () {
        return this._icon;
      },
      update: function () {
        var t;
        return (
          this._icon &&
            this._map &&
            ((t = this._map.latLngToLayerPoint(this._latlng).round()),
            this._setPos(t)),
          this
        );
      },
      _initIcon: function () {
        var t = this.options,
          i = 'leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide'),
          e = t.icon.createIcon(this._icon),
          n = !1;
        e !== this._icon &&
          (this._icon && this._removeIcon(),
          (n = !0),
          t.title && (e.title = t.title),
          'IMG' === e.tagName && (e.alt = t.alt || '')),
          ci(e, i),
          t.keyboard && (e.tabIndex = '0'),
          (this._icon = e),
          t.riseOnHover &&
            this.on({
              mouseover: this._bringToFront,
              mouseout: this._resetZIndex,
            });
        var o = t.icon.createShadow(this._shadow),
          s = !1;
        o !== this._shadow && (this._removeShadow(), (s = !0)),
          o && (ci(o, i), (o.alt = '')),
          (this._shadow = o),
          t.opacity < 1 && this._updateOpacity(),
          n && this.getPane().appendChild(this._icon),
          this._initInteraction(),
          o && s && this.getPane(t.shadowPane).appendChild(this._shadow);
      },
      _removeIcon: function () {
        this.options.riseOnHover &&
          this.off({
            mouseover: this._bringToFront,
            mouseout: this._resetZIndex,
          }),
          ri(this._icon),
          this.removeInteractiveTarget(this._icon),
          (this._icon = null);
      },
      _removeShadow: function () {
        this._shadow && ri(this._shadow), (this._shadow = null);
      },
      _setPos: function (t) {
        this._icon && vi(this._icon, t),
          this._shadow && vi(this._shadow, t),
          (this._zIndex = t.y + this.options.zIndexOffset),
          this._resetZIndex();
      },
      _updateZIndex: function (t) {
        this._icon && (this._icon.style.zIndex = this._zIndex + t);
      },
      _animateZoom: function (t) {
        var i = this._map
          ._latLngToNewLayerPoint(this._latlng, t.zoom, t.center)
          .round();
        this._setPos(i);
      },
      _initInteraction: function () {
        var t;
        this.options.interactive &&
          (ci(this._icon, 'leaflet-interactive'),
          this.addInteractiveTarget(this._icon),
          Ee &&
            ((t = this.options.draggable),
            this.dragging &&
              ((t = this.dragging.enabled()), this.dragging.disable()),
            (this.dragging = new Ee(this)),
            t && this.dragging.enable()));
      },
      setOpacity: function (t) {
        return (
          (this.options.opacity = t), this._map && this._updateOpacity(), this
        );
      },
      _updateOpacity: function () {
        var t = this.options.opacity;
        this._icon && mi(this._icon, t), this._shadow && mi(this._shadow, t);
      },
      _bringToFront: function () {
        this._updateZIndex(this.options.riseOffset);
      },
      _resetZIndex: function () {
        this._updateZIndex(0);
      },
      _getPopupAnchor: function () {
        return this.options.icon.options.popupAnchor;
      },
      _getTooltipAnchor: function () {
        return this.options.icon.options.tooltipAnchor;
      },
    });
  var Be = Me.extend({
      options: {
        stroke: !0,
        color: '#3388ff',
        weight: 3,
        opacity: 1,
        lineCap: 'round',
        lineJoin: 'round',
        dashArray: null,
        dashOffset: null,
        fill: !1,
        fillColor: null,
        fillOpacity: 0.2,
        fillRule: 'evenodd',
        interactive: !0,
        bubblingMouseEvents: !0,
      },
      beforeAdd: function (t) {
        this._renderer = t.getRenderer(this);
      },
      onAdd: function () {
        this._renderer._initPath(this),
          this._reset(),
          this._renderer._addPath(this);
      },
      onRemove: function () {
        this._renderer._removePath(this);
      },
      redraw: function () {
        return this._map && this._renderer._updatePath(this), this;
      },
      setStyle: function (t) {
        return (
          c(this, t),
          this._renderer &&
            (this._renderer._updateStyle(this),
            this.options.stroke &&
              t &&
              Object.prototype.hasOwnProperty.call(t, 'weight') &&
              this._updateBounds()),
          this
        );
      },
      bringToFront: function () {
        return this._renderer && this._renderer._bringToFront(this), this;
      },
      bringToBack: function () {
        return this._renderer && this._renderer._bringToBack(this), this;
      },
      getElement: function () {
        return this._path;
      },
      _reset: function () {
        this._project(), this._update();
      },
      _clickTolerance: function () {
        return (
          (this.options.stroke ? this.options.weight / 2 : 0) +
          this._renderer.options.tolerance
        );
      },
    }),
    Ae = Be.extend({
      options: { fill: !0, radius: 10 },
      initialize: function (t, i) {
        c(this, i), (this._latlng = j(t)), (this._radius = this.options.radius);
      },
      setLatLng: function (t) {
        var i = this._latlng;
        return (
          (this._latlng = j(t)),
          this.redraw(),
          this.fire('move', { oldLatLng: i, latlng: this._latlng })
        );
      },
      getLatLng: function () {
        return this._latlng;
      },
      setRadius: function (t) {
        return (this.options.radius = this._radius = t), this.redraw();
      },
      getRadius: function () {
        return this._radius;
      },
      setStyle: function (t) {
        var i = (t && t.radius) || this._radius;
        return Be.prototype.setStyle.call(this, t), this.setRadius(i), this;
      },
      _project: function () {
        (this._point = this._map.latLngToLayerPoint(this._latlng)),
          this._updateBounds();
      },
      _updateBounds: function () {
        var t = this._radius,
          i = this._radiusY || t,
          e = this._clickTolerance(),
          n = [t + e, i + e];
        this._pxBounds = new I(this._point.subtract(n), this._point.add(n));
      },
      _update: function () {
        this._map && this._updatePath();
      },
      _updatePath: function () {
        this._renderer._updateCircle(this);
      },
      _empty: function () {
        return (
          this._radius && !this._renderer._bounds.intersects(this._pxBounds)
        );
      },
      _containsPoint: function (t) {
        return (
          t.distanceTo(this._point) <= this._radius + this._clickTolerance()
        );
      },
    });
  var Ie = Ae.extend({
    initialize: function (t, i, e) {
      if (
        ('number' == typeof i && (i = h({}, e, { radius: i })),
        c(this, i),
        (this._latlng = j(t)),
        isNaN(this.options.radius))
      )
        throw new Error('Circle radius cannot be NaN');
      this._mRadius = this.options.radius;
    },
    setRadius: function (t) {
      return (this._mRadius = t), this.redraw();
    },
    getRadius: function () {
      return this._mRadius;
    },
    getBounds: function () {
      var t = [this._radius, this._radiusY || this._radius];
      return new R(
        this._map.layerPointToLatLng(this._point.subtract(t)),
        this._map.layerPointToLatLng(this._point.add(t)),
      );
    },
    setStyle: Be.prototype.setStyle,
    _project: function () {
      var t,
        i,
        e,
        n,
        o,
        s,
        r,
        a,
        h = this._latlng.lng,
        u = this._latlng.lat,
        l = this._map,
        c = l.options.crs;
      c.distance === F.distance
        ? ((t = Math.PI / 180),
          (i = this._mRadius / F.R / t),
          (e = l.project([u + i, h])),
          (n = l.project([u - i, h])),
          (o = e.add(n).divideBy(2)),
          (s = l.unproject(o).lat),
          (r =
            Math.acos(
              (Math.cos(i * t) - Math.sin(u * t) * Math.sin(s * t)) /
                (Math.cos(u * t) * Math.cos(s * t)),
            ) / t),
          (!isNaN(r) && 0 !== r) || (r = i / Math.cos((Math.PI / 180) * u)),
          (this._point = o.subtract(l.getPixelOrigin())),
          (this._radius = isNaN(r) ? 0 : o.x - l.project([s, h - r]).x),
          (this._radiusY = o.y - e.y))
        : ((a = c.unproject(
            c.project(this._latlng).subtract([this._mRadius, 0]),
          )),
          (this._point = l.latLngToLayerPoint(this._latlng)),
          (this._radius = this._point.x - l.latLngToLayerPoint(a).x)),
        this._updateBounds();
    },
  });
  var Oe = Be.extend({
    options: { smoothFactor: 1, noClip: !1 },
    initialize: function (t, i) {
      c(this, i), this._setLatLngs(t);
    },
    getLatLngs: function () {
      return this._latlngs;
    },
    setLatLngs: function (t) {
      return this._setLatLngs(t), this.redraw();
    },
    isEmpty: function () {
      return !this._latlngs.length;
    },
    closestLayerPoint: function (t) {
      for (
        var i, e, n = 1 / 0, o = null, s = de, r = 0, a = this._parts.length;
        r < a;
        r++
      )
        for (var h = this._parts[r], u = 1, l = h.length; u < l; u++) {
          var c = s(t, (i = h[u - 1]), (e = h[u]), !0);
          c < n && ((n = c), (o = s(t, i, e)));
        }
      return o && (o.distance = Math.sqrt(n)), o;
    },
    getCenter: function () {
      if (!this._map)
        throw new Error('Must add layer to map before using getCenter()');
      var t,
        i,
        e,
        n,
        o,
        s,
        r,
        a = this._rings[0],
        h = a.length;
      if (!h) return null;
      for (i = t = 0; t < h - 1; t++) i += a[t].distanceTo(a[t + 1]) / 2;
      if (0 === i) return this._map.layerPointToLatLng(a[0]);
      for (n = t = 0; t < h - 1; t++)
        if (((o = a[t]), (s = a[t + 1]), i < (n += e = o.distanceTo(s))))
          return (
            (r = (n - i) / e),
            this._map.layerPointToLatLng([
              s.x - r * (s.x - o.x),
              s.y - r * (s.y - o.y),
            ])
          );
    },
    getBounds: function () {
      return this._bounds;
    },
    addLatLng: function (t, i) {
      return (
        (i = i || this._defaultShape()),
        (t = j(t)),
        i.push(t),
        this._bounds.extend(t),
        this.redraw()
      );
    },
    _setLatLngs: function (t) {
      (this._bounds = new R()), (this._latlngs = this._convertLatLngs(t));
    },
    _defaultShape: function () {
      return pe(this._latlngs) ? this._latlngs : this._latlngs[0];
    },
    _convertLatLngs: function (t) {
      for (var i = [], e = pe(t), n = 0, o = t.length; n < o; n++)
        e
          ? ((i[n] = j(t[n])), this._bounds.extend(i[n]))
          : (i[n] = this._convertLatLngs(t[n]));
      return i;
    },
    _project: function () {
      var t = new I();
      (this._rings = []),
        this._projectLatlngs(this._latlngs, this._rings, t),
        this._bounds.isValid() &&
          t.isValid() &&
          ((this._rawPxBounds = t), this._updateBounds());
    },
    _updateBounds: function () {
      var t = this._clickTolerance(),
        i = new k(t, t);
      this._pxBounds = new I([
        this._rawPxBounds.min.subtract(i),
        this._rawPxBounds.max.add(i),
      ]);
    },
    _projectLatlngs: function (t, i, e) {
      var n,
        o,
        s = t[0] instanceof D,
        r = t.length;
      if (s) {
        for (o = [], n = 0; n < r; n++)
          (o[n] = this._map.latLngToLayerPoint(t[n])), e.extend(o[n]);
        i.push(o);
      } else for (n = 0; n < r; n++) this._projectLatlngs(t[n], i, e);
    },
    _clipPoints: function () {
      var t = this._renderer._bounds;
      if (((this._parts = []), this._pxBounds && this._pxBounds.intersects(t)))
        if (this.options.noClip) this._parts = this._rings;
        else
          for (
            var i,
              e,
              n,
              o,
              s = this._parts,
              r = 0,
              a = 0,
              h = this._rings.length;
            r < h;
            r++
          )
            for (i = 0, e = (o = this._rings[r]).length; i < e - 1; i++)
              (n = le(o[i], o[i + 1], t, i, !0)) &&
                ((s[a] = s[a] || []),
                s[a].push(n[0]),
                (n[1] === o[i + 1] && i !== e - 2) || (s[a].push(n[1]), a++));
    },
    _simplifyPoints: function () {
      for (
        var t = this._parts, i = this.options.smoothFactor, e = 0, n = t.length;
        e < n;
        e++
      )
        t[e] = he(t[e], i);
    },
    _update: function () {
      this._map &&
        (this._clipPoints(), this._simplifyPoints(), this._updatePath());
    },
    _updatePath: function () {
      this._renderer._updatePoly(this);
    },
    _containsPoint: function (t, i) {
      var e,
        n,
        o,
        s,
        r,
        a,
        h = this._clickTolerance();
      if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
      for (e = 0, s = this._parts.length; e < s; e++)
        for (n = 0, o = (r = (a = this._parts[e]).length) - 1; n < r; o = n++)
          if ((i || 0 !== n) && ue(t, a[o], a[n]) <= h) return !0;
      return !1;
    },
  });
  Oe._flat = me;
  var Re = Oe.extend({
    options: { fill: !0 },
    isEmpty: function () {
      return !this._latlngs.length || !this._latlngs[0].length;
    },
    getCenter: function () {
      if (!this._map)
        throw new Error('Must add layer to map before using getCenter()');
      var t,
        i,
        e,
        n,
        o,
        s,
        r,
        a,
        h,
        u = this._rings[0],
        l = u.length;
      if (!l) return null;
      for (t = s = r = a = 0, i = l - 1; t < l; i = t++)
        (e = u[t]),
          (n = u[i]),
          (o = e.y * n.x - n.y * e.x),
          (r += (e.x + n.x) * o),
          (a += (e.y + n.y) * o),
          (s += 3 * o);
      return (
        (h = 0 === s ? u[0] : [r / s, a / s]), this._map.layerPointToLatLng(h)
      );
    },
    _convertLatLngs: function (t) {
      var i = Oe.prototype._convertLatLngs.call(this, t),
        e = i.length;
      return 2 <= e && i[0] instanceof D && i[0].equals(i[e - 1]) && i.pop(), i;
    },
    _setLatLngs: function (t) {
      Oe.prototype._setLatLngs.call(this, t),
        pe(this._latlngs) && (this._latlngs = [this._latlngs]);
    },
    _defaultShape: function () {
      return pe(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
    },
    _clipPoints: function () {
      var t = this._renderer._bounds,
        i = this.options.weight,
        e = new k(i, i),
        t = new I(t.min.subtract(e), t.max.add(e));
      if (((this._parts = []), this._pxBounds && this._pxBounds.intersects(t)))
        if (this.options.noClip) this._parts = this._rings;
        else
          for (var n, o = 0, s = this._rings.length; o < s; o++)
            (n = ge(this._rings[o], t, !0)).length && this._parts.push(n);
    },
    _updatePath: function () {
      this._renderer._updatePoly(this, !0);
    },
    _containsPoint: function (t) {
      var i,
        e,
        n,
        o,
        s,
        r,
        a,
        h,
        u = !1;
      if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
      for (o = 0, a = this._parts.length; o < a; o++)
        for (s = 0, r = (h = (i = this._parts[o]).length) - 1; s < h; r = s++)
          (e = i[s]),
            (n = i[r]),
            e.y > t.y != n.y > t.y &&
              t.x < ((n.x - e.x) * (t.y - e.y)) / (n.y - e.y) + e.x &&
              (u = !u);
      return u || Oe.prototype._containsPoint.call(this, t, !0);
    },
  });
  var Ne = Ce.extend({
    initialize: function (t, i) {
      c(this, i), (this._layers = {}), t && this.addData(t);
    },
    addData: function (t) {
      var i,
        e,
        n,
        o = g(t) ? t : t.features;
      if (o) {
        for (i = 0, e = o.length; i < e; i++)
          ((n = o[i]).geometries ||
            n.geometry ||
            n.features ||
            n.coordinates) &&
            this.addData(n);
        return this;
      }
      var s = this.options;
      if (s.filter && !s.filter(t)) return this;
      var r = De(t, s);
      return r
        ? ((r.feature = qe(t)),
          (r.defaultOptions = r.options),
          this.resetStyle(r),
          s.onEachFeature && s.onEachFeature(t, r),
          this.addLayer(r))
        : this;
    },
    resetStyle: function (t) {
      return void 0 === t
        ? this.eachLayer(this.resetStyle, this)
        : ((t.options = h({}, t.defaultOptions)),
          this._setLayerStyle(t, this.options.style),
          this);
    },
    setStyle: function (i) {
      return this.eachLayer(function (t) {
        this._setLayerStyle(t, i);
      }, this);
    },
    _setLayerStyle: function (t, i) {
      t.setStyle &&
        ('function' == typeof i && (i = i(t.feature)), t.setStyle(i));
    },
  });
  function De(t, i) {
    var e,
      n,
      o,
      s,
      r = 'Feature' === t.type ? t.geometry : t,
      a = r ? r.coordinates : null,
      h = [],
      u = i && i.pointToLayer,
      l = (i && i.coordsToLatLng) || We;
    if (!a && !r) return null;
    switch (r.type) {
      case 'Point':
        return je(u, t, (e = l(a)), i);
      case 'MultiPoint':
        for (o = 0, s = a.length; o < s; o++)
          (e = l(a[o])), h.push(je(u, t, e, i));
        return new Ce(h);
      case 'LineString':
      case 'MultiLineString':
        return (n = He(a, 'LineString' === r.type ? 0 : 1, l)), new Oe(n, i);
      case 'Polygon':
      case 'MultiPolygon':
        return (n = He(a, 'Polygon' === r.type ? 1 : 2, l)), new Re(n, i);
      case 'GeometryCollection':
        for (o = 0, s = r.geometries.length; o < s; o++) {
          var c = De(
            {
              geometry: r.geometries[o],
              type: 'Feature',
              properties: t.properties,
            },
            i,
          );
          c && h.push(c);
        }
        return new Ce(h);
      default:
        throw new Error('Invalid GeoJSON object.');
    }
  }
  function je(t, i, e, n) {
    return t ? t(i, e) : new ke(e, n && n.markersInheritOptions && n);
  }
  function We(t) {
    return new D(t[1], t[0], t[2]);
  }
  function He(t, i, e) {
    for (var n, o = [], s = 0, r = t.length; s < r; s++)
      (n = i ? He(t[s], i - 1, e) : (e || We)(t[s])), o.push(n);
    return o;
  }
  function Fe(t, i) {
    return (
      (i = 'number' == typeof i ? i : 6),
      void 0 !== t.alt
        ? [r(t.lng, i), r(t.lat, i), r(t.alt, i)]
        : [r(t.lng, i), r(t.lat, i)]
    );
  }
  function Ue(t, i, e, n) {
    for (var o = [], s = 0, r = t.length; s < r; s++)
      o.push(i ? Ue(t[s], i - 1, e, n) : Fe(t[s], n));
    return !i && e && o.push(o[0]), o;
  }
  function Ve(t, i) {
    return t.feature ? h({}, t.feature, { geometry: i }) : qe(i);
  }
  function qe(t) {
    return 'Feature' === t.type || 'FeatureCollection' === t.type
      ? t
      : { type: 'Feature', properties: {}, geometry: t };
  }
  var Ge = {
    toGeoJSON: function (t) {
      return Ve(this, { type: 'Point', coordinates: Fe(this.getLatLng(), t) });
    },
  };
  function Ke(t, i) {
    return new Ne(t, i);
  }
  ke.include(Ge),
    Ie.include(Ge),
    Ae.include(Ge),
    Oe.include({
      toGeoJSON: function (t) {
        var i = !pe(this._latlngs);
        return Ve(this, {
          type: (i ? 'Multi' : '') + 'LineString',
          coordinates: Ue(this._latlngs, i ? 1 : 0, !1, t),
        });
      },
    }),
    Re.include({
      toGeoJSON: function (t) {
        var i = !pe(this._latlngs),
          e = i && !pe(this._latlngs[0]),
          n = Ue(this._latlngs, e ? 2 : i ? 1 : 0, !0, t);
        return (
          i || (n = [n]),
          Ve(this, { type: (e ? 'Multi' : '') + 'Polygon', coordinates: n })
        );
      },
    }),
    ze.include({
      toMultiPoint: function (i) {
        var e = [];
        return (
          this.eachLayer(function (t) {
            e.push(t.toGeoJSON(i).geometry.coordinates);
          }),
          Ve(this, { type: 'MultiPoint', coordinates: e })
        );
      },
      toGeoJSON: function (n) {
        var t =
          this.feature && this.feature.geometry && this.feature.geometry.type;
        if ('MultiPoint' === t) return this.toMultiPoint(n);
        var o = 'GeometryCollection' === t,
          s = [];
        return (
          this.eachLayer(function (t) {
            var i, e;
            t.toGeoJSON &&
              ((i = t.toGeoJSON(n)),
              o
                ? s.push(i.geometry)
                : 'FeatureCollection' === (e = qe(i)).type
                ? s.push.apply(s, e.features)
                : s.push(e));
          }),
          o
            ? Ve(this, { geometries: s, type: 'GeometryCollection' })
            : { type: 'FeatureCollection', features: s }
        );
      },
    });
  var Ye = Ke,
    Xe = Me.extend({
      options: {
        opacity: 1,
        alt: '',
        interactive: !1,
        crossOrigin: !1,
        errorOverlayUrl: '',
        zIndex: 1,
        className: '',
      },
      initialize: function (t, i, e) {
        (this._url = t), (this._bounds = N(i)), c(this, e);
      },
      onAdd: function () {
        this._image ||
          (this._initImage(),
          this.options.opacity < 1 && this._updateOpacity()),
          this.options.interactive &&
            (ci(this._image, 'leaflet-interactive'),
            this.addInteractiveTarget(this._image)),
          this.getPane().appendChild(this._image),
          this._reset();
      },
      onRemove: function () {
        ri(this._image),
          this.options.interactive && this.removeInteractiveTarget(this._image);
      },
      setOpacity: function (t) {
        return (
          (this.options.opacity = t), this._image && this._updateOpacity(), this
        );
      },
      setStyle: function (t) {
        return t.opacity && this.setOpacity(t.opacity), this;
      },
      bringToFront: function () {
        return this._map && hi(this._image), this;
      },
      bringToBack: function () {
        return this._map && ui(this._image), this;
      },
      setUrl: function (t) {
        return (this._url = t), this._image && (this._image.src = t), this;
      },
      setBounds: function (t) {
        return (this._bounds = N(t)), this._map && this._reset(), this;
      },
      getEvents: function () {
        var t = { zoom: this._reset, viewreset: this._reset };
        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      },
      setZIndex: function (t) {
        return (this.options.zIndex = t), this._updateZIndex(), this;
      },
      getBounds: function () {
        return this._bounds;
      },
      getElement: function () {
        return this._image;
      },
      _initImage: function () {
        var t = 'IMG' === this._url.tagName,
          i = (this._image = t ? this._url : si('img'));
        ci(i, 'leaflet-image-layer'),
          this._zoomAnimated && ci(i, 'leaflet-zoom-animated'),
          this.options.className && ci(i, this.options.className),
          (i.onselectstart = a),
          (i.onmousemove = a),
          (i.onload = p(this.fire, this, 'load')),
          (i.onerror = p(this._overlayOnError, this, 'error')),
          (!this.options.crossOrigin && '' !== this.options.crossOrigin) ||
            (i.crossOrigin =
              !0 === this.options.crossOrigin ? '' : this.options.crossOrigin),
          this.options.zIndex && this._updateZIndex(),
          t
            ? (this._url = i.src)
            : ((i.src = this._url), (i.alt = this.options.alt));
      },
      _animateZoom: function (t) {
        var i = this._map.getZoomScale(t.zoom),
          e = this._map._latLngBoundsToNewLayerBounds(
            this._bounds,
            t.zoom,
            t.center,
          ).min;
        gi(this._image, e, i);
      },
      _reset: function () {
        var t = this._image,
          i = new I(
            this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
            this._map.latLngToLayerPoint(this._bounds.getSouthEast()),
          ),
          e = i.getSize();
        vi(t, i.min),
          (t.style.width = e.x + 'px'),
          (t.style.height = e.y + 'px');
      },
      _updateOpacity: function () {
        mi(this._image, this.options.opacity);
      },
      _updateZIndex: function () {
        this._image &&
          void 0 !== this.options.zIndex &&
          null !== this.options.zIndex &&
          (this._image.style.zIndex = this.options.zIndex);
      },
      _overlayOnError: function () {
        this.fire('error');
        var t = this.options.errorOverlayUrl;
        t && this._url !== t && ((this._url = t), (this._image.src = t));
      },
    }),
    Je = Xe.extend({
      options: { autoplay: !0, loop: !0, keepAspectRatio: !0, muted: !1 },
      _initImage: function () {
        var t = 'VIDEO' === this._url.tagName,
          i = (this._image = t ? this._url : si('video'));
        if (
          (ci(i, 'leaflet-image-layer'),
          this._zoomAnimated && ci(i, 'leaflet-zoom-animated'),
          this.options.className && ci(i, this.options.className),
          (i.onselectstart = a),
          (i.onmousemove = a),
          (i.onloadeddata = p(this.fire, this, 'load')),
          t)
        ) {
          for (
            var e = i.getElementsByTagName('source'), n = [], o = 0;
            o < e.length;
            o++
          )
            n.push(e[o].src);
          this._url = 0 < e.length ? n : [i.src];
        } else {
          g(this._url) || (this._url = [this._url]),
            !this.options.keepAspectRatio &&
              Object.prototype.hasOwnProperty.call(i.style, 'objectFit') &&
              (i.style.objectFit = 'fill'),
            (i.autoplay = !!this.options.autoplay),
            (i.loop = !!this.options.loop),
            (i.muted = !!this.options.muted);
          for (var s = 0; s < this._url.length; s++) {
            var r = si('source');
            (r.src = this._url[s]), i.appendChild(r);
          }
        }
      },
    });
  var $e = Xe.extend({
    _initImage: function () {
      var t = (this._image = this._url);
      ci(t, 'leaflet-image-layer'),
        this._zoomAnimated && ci(t, 'leaflet-zoom-animated'),
        this.options.className && ci(t, this.options.className),
        (t.onselectstart = a),
        (t.onmousemove = a);
    },
  });
  var Qe = Me.extend({
      options: { offset: [0, 7], className: '', pane: 'popupPane' },
      initialize: function (t, i) {
        c(this, t), (this._source = i);
      },
      onAdd: function (t) {
        (this._zoomAnimated = t._zoomAnimated),
          this._container || this._initLayout(),
          t._fadeAnimated && mi(this._container, 0),
          clearTimeout(this._removeTimeout),
          this.getPane().appendChild(this._container),
          this.update(),
          t._fadeAnimated && mi(this._container, 1),
          this.bringToFront();
      },
      onRemove: function (t) {
        t._fadeAnimated
          ? (mi(this._container, 0),
            (this._removeTimeout = setTimeout(
              p(ri, void 0, this._container),
              200,
            )))
          : ri(this._container);
      },
      getLatLng: function () {
        return this._latlng;
      },
      setLatLng: function (t) {
        return (
          (this._latlng = j(t)),
          this._map && (this._updatePosition(), this._adjustPan()),
          this
        );
      },
      getContent: function () {
        return this._content;
      },
      setContent: function (t) {
        return (this._content = t), this.update(), this;
      },
      getElement: function () {
        return this._container;
      },
      update: function () {
        this._map &&
          ((this._container.style.visibility = 'hidden'),
          this._updateContent(),
          this._updateLayout(),
          this._updatePosition(),
          (this._container.style.visibility = ''),
          this._adjustPan());
      },
      getEvents: function () {
        var t = { zoom: this._updatePosition, viewreset: this._updatePosition };
        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      },
      isOpen: function () {
        return !!this._map && this._map.hasLayer(this);
      },
      bringToFront: function () {
        return this._map && hi(this._container), this;
      },
      bringToBack: function () {
        return this._map && ui(this._container), this;
      },
      _prepareOpen: function (t, i, e) {
        if ((i instanceof Me || ((e = i), (i = t)), i instanceof Ce))
          for (var n in t._layers) {
            i = t._layers[n];
            break;
          }
        if (!e)
          if (i.getCenter) e = i.getCenter();
          else {
            if (!i.getLatLng)
              throw new Error('Unable to get source layer LatLng.');
            e = i.getLatLng();
          }
        return (this._source = i), this.update(), e;
      },
      _updateContent: function () {
        if (this._content) {
          var t = this._contentNode,
            i =
              'function' == typeof this._content
                ? this._content(this._source || this)
                : this._content;
          if ('string' == typeof i) t.innerHTML = i;
          else {
            for (; t.hasChildNodes(); ) t.removeChild(t.firstChild);
            t.appendChild(i);
          }
          this.fire('contentupdate');
        }
      },
      _updatePosition: function () {
        var t, i, e, n, o;
        this._map &&
          ((t = this._map.latLngToLayerPoint(this._latlng)),
          (i = A(this.options.offset)),
          (e = this._getAnchor()),
          this._zoomAnimated
            ? vi(this._container, t.add(e))
            : (i = i.add(t).add(e)),
          (n = this._containerBottom = -i.y),
          (o = this._containerLeft =
            -Math.round(this._containerWidth / 2) + i.x),
          (this._container.style.bottom = n + 'px'),
          (this._container.style.left = o + 'px'));
      },
      _getAnchor: function () {
        return [0, 0];
      },
    }),
    tn = Qe.extend({
      options: {
        maxWidth: 300,
        minWidth: 50,
        maxHeight: null,
        autoPan: !0,
        autoPanPaddingTopLeft: null,
        autoPanPaddingBottomRight: null,
        autoPanPadding: [5, 5],
        keepInView: !1,
        closeButton: !0,
        autoClose: !0,
        closeOnEscapeKey: !0,
        className: '',
      },
      openOn: function (t) {
        return t.openPopup(this), this;
      },
      onAdd: function (t) {
        Qe.prototype.onAdd.call(this, t),
          t.fire('popupopen', { popup: this }),
          this._source &&
            (this._source.fire('popupopen', { popup: this }, !0),
            this._source instanceof Be || this._source.on('preclick', Ai));
      },
      onRemove: function (t) {
        Qe.prototype.onRemove.call(this, t),
          t.fire('popupclose', { popup: this }),
          this._source &&
            (this._source.fire('popupclose', { popup: this }, !0),
            this._source instanceof Be || this._source.off('preclick', Ai));
      },
      getEvents: function () {
        var t = Qe.prototype.getEvents.call(this);
        return (
          (void 0 !== this.options.closeOnClick
            ? this.options.closeOnClick
            : this._map.options.closePopupOnClick) &&
            (t.preclick = this._close),
          this.options.keepInView && (t.moveend = this._adjustPan),
          t
        );
      },
      _close: function () {
        this._map && this._map.closePopup(this);
      },
      _initLayout: function () {
        var t,
          i = 'leaflet-popup',
          e = (this._container = si(
            'div',
            i + ' ' + (this.options.className || '') + ' leaflet-zoom-animated',
          )),
          n = (this._wrapper = si('div', i + '-content-wrapper', e));
        (this._contentNode = si('div', i + '-content', n)),
          Oi(e),
          Ii(this._contentNode),
          zi(e, 'contextmenu', Ai),
          (this._tipContainer = si('div', i + '-tip-container', e)),
          (this._tip = si('div', i + '-tip', this._tipContainer)),
          this.options.closeButton &&
            (((t = this._closeButton = si('a', i + '-close-button', e)).href =
              '#close'),
            (t.innerHTML = '&#215;'),
            zi(t, 'click', this._onCloseButtonClick, this));
      },
      _updateLayout: function () {
        var t = this._contentNode,
          i = t.style;
        (i.width = ''), (i.whiteSpace = 'nowrap');
        var e = t.offsetWidth,
          e = Math.min(e, this.options.maxWidth);
        (e = Math.max(e, this.options.minWidth)),
          (i.width = e + 1 + 'px'),
          (i.whiteSpace = ''),
          (i.height = '');
        var n = t.offsetHeight,
          o = this.options.maxHeight,
          s = 'leaflet-popup-scrolled';
        o && o < n ? ((i.height = o + 'px'), ci(t, s)) : _i(t, s),
          (this._containerWidth = this._container.offsetWidth);
      },
      _animateZoom: function (t) {
        var i = this._map._latLngToNewLayerPoint(
            this._latlng,
            t.zoom,
            t.center,
          ),
          e = this._getAnchor();
        vi(this._container, i.add(e));
      },
      _adjustPan: function () {
        var t, i, e, n, o, s, r, a, h, u, l, c;
        this.options.autoPan &&
          (this._map._panAnim && this._map._panAnim.stop(),
          (t = this._map),
          (i = parseInt(oi(this._container, 'marginBottom'), 10) || 0),
          (e = this._container.offsetHeight + i),
          (n = this._containerWidth),
          (o = new k(this._containerLeft, -e - this._containerBottom))._add(
            yi(this._container),
          ),
          (s = t.layerPointToContainerPoint(o)),
          (r = A(this.options.autoPanPadding)),
          (a = A(this.options.autoPanPaddingTopLeft || r)),
          (h = A(this.options.autoPanPaddingBottomRight || r)),
          (u = t.getSize()),
          (c = l = 0),
          s.x + n + h.x > u.x && (l = s.x + n - u.x + h.x),
          s.x - l - a.x < 0 && (l = s.x - a.x),
          s.y + e + h.y > u.y && (c = s.y + e - u.y + h.y),
          s.y - c - a.y < 0 && (c = s.y - a.y),
          (l || c) && t.fire('autopanstart').panBy([l, c]));
      },
      _onCloseButtonClick: function (t) {
        this._close(), Ni(t);
      },
      _getAnchor: function () {
        return A(
          this._source && this._source._getPopupAnchor
            ? this._source._getPopupAnchor()
            : [0, 0],
        );
      },
    });
  Ki.mergeOptions({ closePopupOnClick: !0 }),
    Ki.include({
      openPopup: function (t, i, e) {
        return (
          t instanceof tn || (t = new tn(e).setContent(t)),
          i && t.setLatLng(i),
          this.hasLayer(t)
            ? this
            : (this._popup &&
                this._popup.options.autoClose &&
                this.closePopup(),
              (this._popup = t),
              this.addLayer(t))
        );
      },
      closePopup: function (t) {
        return (
          (t && t !== this._popup) || ((t = this._popup), (this._popup = null)),
          t && this.removeLayer(t),
          this
        );
      },
    }),
    Me.include({
      bindPopup: function (t, i) {
        return (
          t instanceof tn
            ? (c(t, i), ((this._popup = t)._source = this))
            : ((this._popup && !i) || (this._popup = new tn(i, this)),
              this._popup.setContent(t)),
          this._popupHandlersAdded ||
            (this.on({
              click: this._openPopup,
              keypress: this._onKeyPress,
              remove: this.closePopup,
              move: this._movePopup,
            }),
            (this._popupHandlersAdded = !0)),
          this
        );
      },
      unbindPopup: function () {
        return (
          this._popup &&
            (this.off({
              click: this._openPopup,
              keypress: this._onKeyPress,
              remove: this.closePopup,
              move: this._movePopup,
            }),
            (this._popupHandlersAdded = !1),
            (this._popup = null)),
          this
        );
      },
      openPopup: function (t, i) {
        return (
          this._popup &&
            this._map &&
            ((i = this._popup._prepareOpen(this, t, i)),
            this._map.openPopup(this._popup, i)),
          this
        );
      },
      closePopup: function () {
        return this._popup && this._popup._close(), this;
      },
      togglePopup: function (t) {
        return (
          this._popup &&
            (this._popup._map ? this.closePopup() : this.openPopup(t)),
          this
        );
      },
      isPopupOpen: function () {
        return !!this._popup && this._popup.isOpen();
      },
      setPopupContent: function (t) {
        return this._popup && this._popup.setContent(t), this;
      },
      getPopup: function () {
        return this._popup;
      },
      _openPopup: function (t) {
        var i = t.layer || t.target;
        this._popup &&
          this._map &&
          (Ni(t),
          i instanceof Be
            ? this.openPopup(t.layer || t.target, t.latlng)
            : this._map.hasLayer(this._popup) && this._popup._source === i
            ? this.closePopup()
            : this.openPopup(i, t.latlng));
      },
      _movePopup: function (t) {
        this._popup.setLatLng(t.latlng);
      },
      _onKeyPress: function (t) {
        13 === t.originalEvent.keyCode && this._openPopup(t);
      },
    });
  var en = Qe.extend({
    options: {
      pane: 'tooltipPane',
      offset: [0, 0],
      direction: 'auto',
      permanent: !1,
      sticky: !1,
      interactive: !1,
      opacity: 0.9,
    },
    onAdd: function (t) {
      Qe.prototype.onAdd.call(this, t),
        this.setOpacity(this.options.opacity),
        t.fire('tooltipopen', { tooltip: this }),
        this._source && this._source.fire('tooltipopen', { tooltip: this }, !0);
    },
    onRemove: function (t) {
      Qe.prototype.onRemove.call(this, t),
        t.fire('tooltipclose', { tooltip: this }),
        this._source &&
          this._source.fire('tooltipclose', { tooltip: this }, !0);
    },
    getEvents: function () {
      var t = Qe.prototype.getEvents.call(this);
      return bt && !this.options.permanent && (t.preclick = this._close), t;
    },
    _close: function () {
      this._map && this._map.closeTooltip(this);
    },
    _initLayout: function () {
      var t =
        'leaflet-tooltip ' +
        (this.options.className || '') +
        ' leaflet-zoom-' +
        (this._zoomAnimated ? 'animated' : 'hide');
      this._contentNode = this._container = si('div', t);
    },
    _updateLayout: function () {},
    _adjustPan: function () {},
    _setPosition: function (t) {
      var i,
        e = this._map,
        n = this._container,
        o = e.latLngToContainerPoint(e.getCenter()),
        s = e.layerPointToContainerPoint(t),
        r = this.options.direction,
        a = n.offsetWidth,
        h = n.offsetHeight,
        u = A(this.options.offset),
        l = this._getAnchor(),
        c =
          'top' === r
            ? ((i = a / 2), h)
            : 'bottom' === r
            ? ((i = a / 2), 0)
            : ((i =
                'center' === r
                  ? a / 2
                  : 'right' === r
                  ? 0
                  : 'left' === r
                  ? a
                  : s.x < o.x
                  ? ((r = 'right'), 0)
                  : ((r = 'left'), a + 2 * (u.x + l.x))),
              h / 2);
      (t = t
        .subtract(A(i, c, !0))
        .add(u)
        .add(l)),
        _i(n, 'leaflet-tooltip-right'),
        _i(n, 'leaflet-tooltip-left'),
        _i(n, 'leaflet-tooltip-top'),
        _i(n, 'leaflet-tooltip-bottom'),
        ci(n, 'leaflet-tooltip-' + r),
        vi(n, t);
    },
    _updatePosition: function () {
      var t = this._map.latLngToLayerPoint(this._latlng);
      this._setPosition(t);
    },
    setOpacity: function (t) {
      (this.options.opacity = t), this._container && mi(this._container, t);
    },
    _animateZoom: function (t) {
      var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
      this._setPosition(i);
    },
    _getAnchor: function () {
      return A(
        this._source && this._source._getTooltipAnchor && !this.options.sticky
          ? this._source._getTooltipAnchor()
          : [0, 0],
      );
    },
  });
  Ki.include({
    openTooltip: function (t, i, e) {
      return (
        t instanceof en || (t = new en(e).setContent(t)),
        i && t.setLatLng(i),
        this.hasLayer(t) ? this : this.addLayer(t)
      );
    },
    closeTooltip: function (t) {
      return t && this.removeLayer(t), this;
    },
  }),
    Me.include({
      bindTooltip: function (t, i) {
        return (
          t instanceof en
            ? (c(t, i), ((this._tooltip = t)._source = this))
            : ((this._tooltip && !i) || (this._tooltip = new en(i, this)),
              this._tooltip.setContent(t)),
          this._initTooltipInteractions(),
          this._tooltip.options.permanent &&
            this._map &&
            this._map.hasLayer(this) &&
            this.openTooltip(),
          this
        );
      },
      unbindTooltip: function () {
        return (
          this._tooltip &&
            (this._initTooltipInteractions(!0),
            this.closeTooltip(),
            (this._tooltip = null)),
          this
        );
      },
      _initTooltipInteractions: function (t) {
        var i, e;
        (!t && this._tooltipHandlersAdded) ||
          ((i = t ? 'off' : 'on'),
          (e = { remove: this.closeTooltip, move: this._moveTooltip }),
          this._tooltip.options.permanent
            ? (e.add = this._openTooltip)
            : ((e.mouseover = this._openTooltip),
              (e.mouseout = this.closeTooltip),
              this._tooltip.options.sticky && (e.mousemove = this._moveTooltip),
              bt && (e.click = this._openTooltip)),
          this[i](e),
          (this._tooltipHandlersAdded = !t));
      },
      openTooltip: function (t, i) {
        return (
          this._tooltip &&
            this._map &&
            ((i = this._tooltip._prepareOpen(this, t, i)),
            this._map.openTooltip(this._tooltip, i),
            this._tooltip.options.interactive &&
              this._tooltip._container &&
              (ci(this._tooltip._container, 'leaflet-clickable'),
              this.addInteractiveTarget(this._tooltip._container))),
          this
        );
      },
      closeTooltip: function () {
        return (
          this._tooltip &&
            (this._tooltip._close(),
            this._tooltip.options.interactive &&
              this._tooltip._container &&
              (_i(this._tooltip._container, 'leaflet-clickable'),
              this.removeInteractiveTarget(this._tooltip._container))),
          this
        );
      },
      toggleTooltip: function (t) {
        return (
          this._tooltip &&
            (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)),
          this
        );
      },
      isTooltipOpen: function () {
        return this._tooltip.isOpen();
      },
      setTooltipContent: function (t) {
        return this._tooltip && this._tooltip.setContent(t), this;
      },
      getTooltip: function () {
        return this._tooltip;
      },
      _openTooltip: function (t) {
        var i = t.layer || t.target;
        this._tooltip &&
          this._map &&
          this.openTooltip(i, this._tooltip.options.sticky ? t.latlng : void 0);
      },
      _moveTooltip: function (t) {
        var i,
          e,
          n = t.latlng;
        this._tooltip.options.sticky &&
          t.originalEvent &&
          ((i = this._map.mouseEventToContainerPoint(t.originalEvent)),
          (e = this._map.containerPointToLayerPoint(i)),
          (n = this._map.layerPointToLatLng(e))),
          this._tooltip.setLatLng(n);
      },
    });
  var nn = Se.extend({
    options: {
      iconSize: [12, 12],
      html: !1,
      bgPos: null,
      className: 'leaflet-div-icon',
    },
    createIcon: function (t) {
      var i,
        e = t && 'DIV' === t.tagName ? t : document.createElement('div'),
        n = this.options;
      return (
        n.html instanceof Element
          ? (ai(e), e.appendChild(n.html))
          : (e.innerHTML = !1 !== n.html ? n.html : ''),
        n.bgPos &&
          ((i = A(n.bgPos)),
          (e.style.backgroundPosition = -i.x + 'px ' + -i.y + 'px')),
        this._setIconStyles(e, 'icon'),
        e
      );
    },
    createShadow: function () {
      return null;
    },
  });
  Se.Default = Ze;
  var on = Me.extend({
    options: {
      tileSize: 256,
      opacity: 1,
      updateWhenIdle: yt,
      updateWhenZooming: !0,
      updateInterval: 200,
      zIndex: 1,
      bounds: null,
      minZoom: 0,
      maxZoom: void 0,
      maxNativeZoom: void 0,
      minNativeZoom: void 0,
      noWrap: !1,
      pane: 'tilePane',
      className: '',
      keepBuffer: 2,
    },
    initialize: function (t) {
      c(this, t);
    },
    onAdd: function () {
      this._initContainer(),
        (this._levels = {}),
        (this._tiles = {}),
        this._resetView(),
        this._update();
    },
    beforeAdd: function (t) {
      t._addZoomLimit(this);
    },
    onRemove: function (t) {
      this._removeAllTiles(),
        ri(this._container),
        t._removeZoomLimit(this),
        (this._container = null),
        (this._tileZoom = void 0);
    },
    bringToFront: function () {
      return (
        this._map && (hi(this._container), this._setAutoZIndex(Math.max)), this
      );
    },
    bringToBack: function () {
      return (
        this._map && (ui(this._container), this._setAutoZIndex(Math.min)), this
      );
    },
    getContainer: function () {
      return this._container;
    },
    setOpacity: function (t) {
      return (this.options.opacity = t), this._updateOpacity(), this;
    },
    setZIndex: function (t) {
      return (this.options.zIndex = t), this._updateZIndex(), this;
    },
    isLoading: function () {
      return this._loading;
    },
    redraw: function () {
      return this._map && (this._removeAllTiles(), this._update()), this;
    },
    getEvents: function () {
      var t = {
        viewprereset: this._invalidateAll,
        viewreset: this._resetView,
        zoom: this._resetView,
        moveend: this._onMoveEnd,
      };
      return (
        this.options.updateWhenIdle ||
          (this._onMove ||
            (this._onMove = n(
              this._onMoveEnd,
              this.options.updateInterval,
              this,
            )),
          (t.move = this._onMove)),
        this._zoomAnimated && (t.zoomanim = this._animateZoom),
        t
      );
    },
    createTile: function () {
      return document.createElement('div');
    },
    getTileSize: function () {
      var t = this.options.tileSize;
      return t instanceof k ? t : new k(t, t);
    },
    _updateZIndex: function () {
      this._container &&
        void 0 !== this.options.zIndex &&
        null !== this.options.zIndex &&
        (this._container.style.zIndex = this.options.zIndex);
    },
    _setAutoZIndex: function (t) {
      for (
        var i,
          e = this.getPane().children,
          n = -t(-1 / 0, 1 / 0),
          o = 0,
          s = e.length;
        o < s;
        o++
      )
        (i = e[o].style.zIndex),
          e[o] !== this._container && i && (n = t(n, +i));
      isFinite(n) &&
        ((this.options.zIndex = n + t(-1, 1)), this._updateZIndex());
    },
    _updateOpacity: function () {
      if (this._map && !it) {
        mi(this._container, this.options.opacity);
        var t = +new Date(),
          i = !1,
          e = !1;
        for (var n in this._tiles) {
          var o,
            s = this._tiles[n];
          s.current &&
            s.loaded &&
            ((o = Math.min(1, (t - s.loaded) / 200)),
            mi(s.el, o),
            o < 1
              ? (i = !0)
              : (s.active ? (e = !0) : this._onOpaqueTile(s), (s.active = !0)));
        }
        e && !this._noPrune && this._pruneTiles(),
          i &&
            (z(this._fadeFrame),
            (this._fadeFrame = M(this._updateOpacity, this)));
      }
    },
    _onOpaqueTile: a,
    _initContainer: function () {
      this._container ||
        ((this._container = si(
          'div',
          'leaflet-layer ' + (this.options.className || ''),
        )),
        this._updateZIndex(),
        this.options.opacity < 1 && this._updateOpacity(),
        this.getPane().appendChild(this._container));
    },
    _updateLevels: function () {
      var t = this._tileZoom,
        i = this.options.maxZoom;
      if (void 0 !== t) {
        for (var e in this._levels)
          (e = Number(e)),
            this._levels[e].el.children.length || e === t
              ? ((this._levels[e].el.style.zIndex = i - Math.abs(t - e)),
                this._onUpdateLevel(e))
              : (ri(this._levels[e].el),
                this._removeTilesAtZoom(e),
                this._onRemoveLevel(e),
                delete this._levels[e]);
        var n = this._levels[t],
          o = this._map;
        return (
          n ||
            (((n = this._levels[t] = {}).el = si(
              'div',
              'leaflet-tile-container leaflet-zoom-animated',
              this._container,
            )),
            (n.el.style.zIndex = i),
            (n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round()),
            (n.zoom = t),
            this._setZoomTransform(n, o.getCenter(), o.getZoom()),
            a(n.el.offsetWidth),
            this._onCreateLevel(n)),
          (this._level = n)
        );
      }
    },
    _onUpdateLevel: a,
    _onRemoveLevel: a,
    _onCreateLevel: a,
    _pruneTiles: function () {
      if (this._map) {
        var t,
          i,
          e,
          n = this._map.getZoom();
        if (n > this.options.maxZoom || n < this.options.minZoom)
          this._removeAllTiles();
        else {
          for (t in this._tiles) (e = this._tiles[t]).retain = e.current;
          for (t in this._tiles) {
            (e = this._tiles[t]).current &&
              !e.active &&
              ((i = e.coords),
              this._retainParent(i.x, i.y, i.z, i.z - 5) ||
                this._retainChildren(i.x, i.y, i.z, i.z + 2));
          }
          for (t in this._tiles) this._tiles[t].retain || this._removeTile(t);
        }
      }
    },
    _removeTilesAtZoom: function (t) {
      for (var i in this._tiles)
        this._tiles[i].coords.z === t && this._removeTile(i);
    },
    _removeAllTiles: function () {
      for (var t in this._tiles) this._removeTile(t);
    },
    _invalidateAll: function () {
      for (var t in this._levels)
        ri(this._levels[t].el),
          this._onRemoveLevel(Number(t)),
          delete this._levels[t];
      this._removeAllTiles(), (this._tileZoom = void 0);
    },
    _retainParent: function (t, i, e, n) {
      var o = Math.floor(t / 2),
        s = Math.floor(i / 2),
        r = e - 1,
        a = new k(+o, +s);
      a.z = +r;
      var h = this._tileCoordsToKey(a),
        u = this._tiles[h];
      return u && u.active
        ? (u.retain = !0)
        : (u && u.loaded && (u.retain = !0),
          n < r && this._retainParent(o, s, r, n));
    },
    _retainChildren: function (t, i, e, n) {
      for (var o = 2 * t; o < 2 * t + 2; o++)
        for (var s = 2 * i; s < 2 * i + 2; s++) {
          var r = new k(o, s);
          r.z = e + 1;
          var a = this._tileCoordsToKey(r),
            h = this._tiles[a];
          h && h.active
            ? (h.retain = !0)
            : (h && h.loaded && (h.retain = !0),
              e + 1 < n && this._retainChildren(o, s, e + 1, n));
        }
    },
    _resetView: function (t) {
      var i = t && (t.pinch || t.flyTo);
      this._setView(this._map.getCenter(), this._map.getZoom(), i, i);
    },
    _animateZoom: function (t) {
      this._setView(t.center, t.zoom, !0, t.noUpdate);
    },
    _clampZoom: function (t) {
      var i = this.options;
      return void 0 !== i.minNativeZoom && t < i.minNativeZoom
        ? i.minNativeZoom
        : void 0 !== i.maxNativeZoom && i.maxNativeZoom < t
        ? i.maxNativeZoom
        : t;
    },
    _setView: function (t, i, e, n) {
      var o = Math.round(i),
        o =
          (void 0 !== this.options.maxZoom && o > this.options.maxZoom) ||
          (void 0 !== this.options.minZoom && o < this.options.minZoom)
            ? void 0
            : this._clampZoom(o),
        s = this.options.updateWhenZooming && o !== this._tileZoom;
      (n && !s) ||
        ((this._tileZoom = o),
        this._abortLoading && this._abortLoading(),
        this._updateLevels(),
        this._resetGrid(),
        void 0 !== o && this._update(t),
        e || this._pruneTiles(),
        (this._noPrune = !!e)),
        this._setZoomTransforms(t, i);
    },
    _setZoomTransforms: function (t, i) {
      for (var e in this._levels) this._setZoomTransform(this._levels[e], t, i);
    },
    _setZoomTransform: function (t, i, e) {
      var n = this._map.getZoomScale(e, t.zoom),
        o = t.origin
          .multiplyBy(n)
          .subtract(this._map._getNewPixelOrigin(i, e))
          .round();
      vt ? gi(t.el, o, n) : vi(t.el, o);
    },
    _resetGrid: function () {
      var t = this._map,
        i = t.options.crs,
        e = (this._tileSize = this.getTileSize()),
        n = this._tileZoom,
        o = this._map.getPixelWorldBounds(this._tileZoom);
      o && (this._globalTileRange = this._pxBoundsToTileRange(o)),
        (this._wrapX = i.wrapLng &&
          !this.options.noWrap && [
            Math.floor(t.project([0, i.wrapLng[0]], n).x / e.x),
            Math.ceil(t.project([0, i.wrapLng[1]], n).x / e.y),
          ]),
        (this._wrapY = i.wrapLat &&
          !this.options.noWrap && [
            Math.floor(t.project([i.wrapLat[0], 0], n).y / e.x),
            Math.ceil(t.project([i.wrapLat[1], 0], n).y / e.y),
          ]);
    },
    _onMoveEnd: function () {
      this._map && !this._map._animatingZoom && this._update();
    },
    _getTiledPixelBounds: function (t) {
      var i = this._map,
        e = i._animatingZoom
          ? Math.max(i._animateToZoom, i.getZoom())
          : i.getZoom(),
        n = i.getZoomScale(e, this._tileZoom),
        o = i.project(t, this._tileZoom).floor(),
        s = i.getSize().divideBy(2 * n);
      return new I(o.subtract(s), o.add(s));
    },
    _update: function (t) {
      var i = this._map;
      if (i) {
        var e = this._clampZoom(i.getZoom());
        if ((void 0 === t && (t = i.getCenter()), void 0 !== this._tileZoom)) {
          var n = this._getTiledPixelBounds(t),
            o = this._pxBoundsToTileRange(n),
            s = o.getCenter(),
            r = [],
            a = this.options.keepBuffer,
            h = new I(
              o.getBottomLeft().subtract([a, -a]),
              o.getTopRight().add([a, -a]),
            );
          if (
            !(
              isFinite(o.min.x) &&
              isFinite(o.min.y) &&
              isFinite(o.max.x) &&
              isFinite(o.max.y)
            )
          )
            throw new Error('Attempted to load an infinite number of tiles');
          for (var u in this._tiles) {
            var l = this._tiles[u].coords;
            (l.z === this._tileZoom && h.contains(new k(l.x, l.y))) ||
              (this._tiles[u].current = !1);
          }
          if (1 < Math.abs(e - this._tileZoom)) this._setView(t, e);
          else {
            for (var c = o.min.y; c <= o.max.y; c++)
              for (var _ = o.min.x; _ <= o.max.x; _++) {
                var d,
                  p = new k(_, c);
                (p.z = this._tileZoom),
                  this._isValidTile(p) &&
                    ((d = this._tiles[this._tileCoordsToKey(p)])
                      ? (d.current = !0)
                      : r.push(p));
              }
            if (
              (r.sort(function (t, i) {
                return t.distanceTo(s) - i.distanceTo(s);
              }),
              0 !== r.length)
            ) {
              this._loading || ((this._loading = !0), this.fire('loading'));
              for (
                var m = document.createDocumentFragment(), _ = 0;
                _ < r.length;
                _++
              )
                this._addTile(r[_], m);
              this._level.el.appendChild(m);
            }
          }
        }
      }
    },
    _isValidTile: function (t) {
      var i = this._map.options.crs;
      if (!i.infinite) {
        var e = this._globalTileRange;
        if (
          (!i.wrapLng && (t.x < e.min.x || t.x > e.max.x)) ||
          (!i.wrapLat && (t.y < e.min.y || t.y > e.max.y))
        )
          return !1;
      }
      if (!this.options.bounds) return !0;
      var n = this._tileCoordsToBounds(t);
      return N(this.options.bounds).overlaps(n);
    },
    _keyToBounds: function (t) {
      return this._tileCoordsToBounds(this._keyToTileCoords(t));
    },
    _tileCoordsToNwSe: function (t) {
      var i = this._map,
        e = this.getTileSize(),
        n = t.scaleBy(e),
        o = n.add(e);
      return [i.unproject(n, t.z), i.unproject(o, t.z)];
    },
    _tileCoordsToBounds: function (t) {
      var i = this._tileCoordsToNwSe(t),
        e = new R(i[0], i[1]);
      return this.options.noWrap || (e = this._map.wrapLatLngBounds(e)), e;
    },
    _tileCoordsToKey: function (t) {
      return t.x + ':' + t.y + ':' + t.z;
    },
    _keyToTileCoords: function (t) {
      var i = t.split(':'),
        e = new k(+i[0], +i[1]);
      return (e.z = +i[2]), e;
    },
    _removeTile: function (t) {
      var i = this._tiles[t];
      i &&
        (ri(i.el),
        delete this._tiles[t],
        this.fire('tileunload', {
          tile: i.el,
          coords: this._keyToTileCoords(t),
        }));
    },
    _initTile: function (t) {
      ci(t, 'leaflet-tile');
      var i = this.getTileSize();
      (t.style.width = i.x + 'px'),
        (t.style.height = i.y + 'px'),
        (t.onselectstart = a),
        (t.onmousemove = a),
        it && this.options.opacity < 1 && mi(t, this.options.opacity),
        ot && !st && (t.style.WebkitBackfaceVisibility = 'hidden');
    },
    _addTile: function (t, i) {
      var e = this._getTilePos(t),
        n = this._tileCoordsToKey(t),
        o = this.createTile(this._wrapCoords(t), p(this._tileReady, this, t));
      this._initTile(o),
        this.createTile.length < 2 && M(p(this._tileReady, this, t, null, o)),
        vi(o, e),
        (this._tiles[n] = { el: o, coords: t, current: !0 }),
        i.appendChild(o),
        this.fire('tileloadstart', { tile: o, coords: t });
    },
    _tileReady: function (t, i, e) {
      i && this.fire('tileerror', { error: i, tile: e, coords: t });
      var n = this._tileCoordsToKey(t);
      (e = this._tiles[n]) &&
        ((e.loaded = +new Date()),
        this._map._fadeAnimated
          ? (mi(e.el, 0),
            z(this._fadeFrame),
            (this._fadeFrame = M(this._updateOpacity, this)))
          : ((e.active = !0), this._pruneTiles()),
        i ||
          (ci(e.el, 'leaflet-tile-loaded'),
          this.fire('tileload', { tile: e.el, coords: t })),
        this._noTilesToLoad() &&
          ((this._loading = !1),
          this.fire('load'),
          it || !this._map._fadeAnimated
            ? M(this._pruneTiles, this)
            : setTimeout(p(this._pruneTiles, this), 250)));
    },
    _getTilePos: function (t) {
      return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
    },
    _wrapCoords: function (t) {
      var i = new k(
        this._wrapX ? o(t.x, this._wrapX) : t.x,
        this._wrapY ? o(t.y, this._wrapY) : t.y,
      );
      return (i.z = t.z), i;
    },
    _pxBoundsToTileRange: function (t) {
      var i = this.getTileSize();
      return new I(
        t.min.unscaleBy(i).floor(),
        t.max.unscaleBy(i).ceil().subtract([1, 1]),
      );
    },
    _noTilesToLoad: function () {
      for (var t in this._tiles) if (!this._tiles[t].loaded) return !1;
      return !0;
    },
  });
  var sn = on.extend({
    options: {
      minZoom: 0,
      maxZoom: 18,
      subdomains: 'abc',
      errorTileUrl: '',
      zoomOffset: 0,
      tms: !1,
      zoomReverse: !1,
      detectRetina: !1,
      crossOrigin: !1,
    },
    initialize: function (t, i) {
      (this._url = t),
        (i = c(this, i)).detectRetina &&
          zt &&
          0 < i.maxZoom &&
          ((i.tileSize = Math.floor(i.tileSize / 2)),
          i.zoomReverse
            ? (i.zoomOffset--, i.minZoom++)
            : (i.zoomOffset++, i.maxZoom--),
          (i.minZoom = Math.max(0, i.minZoom))),
        'string' == typeof i.subdomains &&
          (i.subdomains = i.subdomains.split('')),
        ot || this.on('tileunload', this._onTileRemove);
    },
    setUrl: function (t, i) {
      return (
        this._url === t && void 0 === i && (i = !0),
        (this._url = t),
        i || this.redraw(),
        this
      );
    },
    createTile: function (t, i) {
      var e = document.createElement('img');
      return (
        zi(e, 'load', p(this._tileOnLoad, this, i, e)),
        zi(e, 'error', p(this._tileOnError, this, i, e)),
        (!this.options.crossOrigin && '' !== this.options.crossOrigin) ||
          (e.crossOrigin =
            !0 === this.options.crossOrigin ? '' : this.options.crossOrigin),
        (e.alt = ''),
        e.setAttribute('role', 'presentation'),
        (e.src = this.getTileUrl(t)),
        e
      );
    },
    getTileUrl: function (t) {
      var i,
        e = {
          r: zt ? '@2x' : '',
          s: this._getSubdomain(t),
          x: t.x,
          y: t.y,
          z: this._getZoomForUrl(),
        };
      return (
        this._map &&
          !this._map.options.crs.infinite &&
          ((i = this._globalTileRange.max.y - t.y),
          this.options.tms && (e.y = i),
          (e['-y'] = i)),
        f(this._url, h(e, this.options))
      );
    },
    _tileOnLoad: function (t, i) {
      it ? setTimeout(p(t, this, null, i), 0) : t(null, i);
    },
    _tileOnError: function (t, i, e) {
      var n = this.options.errorTileUrl;
      n && i.getAttribute('src') !== n && (i.src = n), t(e, i);
    },
    _onTileRemove: function (t) {
      t.tile.onload = null;
    },
    _getZoomForUrl: function () {
      var t = this._tileZoom,
        i = this.options.maxZoom;
      return (
        this.options.zoomReverse && (t = i - t), t + this.options.zoomOffset
      );
    },
    _getSubdomain: function (t) {
      var i = Math.abs(t.x + t.y) % this.options.subdomains.length;
      return this.options.subdomains[i];
    },
    _abortLoading: function () {
      var t, i;
      for (t in this._tiles)
        this._tiles[t].coords.z !== this._tileZoom &&
          (((i = this._tiles[t].el).onload = a),
          (i.onerror = a),
          i.complete || ((i.src = y), ri(i), delete this._tiles[t]));
    },
    _removeTile: function (t) {
      var i = this._tiles[t];
      if (i)
        return (
          at || i.el.setAttribute('src', y),
          on.prototype._removeTile.call(this, t)
        );
    },
    _tileReady: function (t, i, e) {
      if (this._map && (!e || e.getAttribute('src') !== y))
        return on.prototype._tileReady.call(this, t, i, e);
    },
  });
  function rn(t, i) {
    return new sn(t, i);
  }
  var an = sn.extend({
    defaultWmsParams: {
      service: 'WMS',
      request: 'GetMap',
      layers: '',
      styles: '',
      format: 'image/jpeg',
      transparent: !1,
      version: '1.1.1',
    },
    options: { crs: null, uppercase: !1 },
    initialize: function (t, i) {
      this._url = t;
      var e = h({}, this.defaultWmsParams);
      for (var n in i) n in this.options || (e[n] = i[n]);
      var o = (i = c(this, i)).detectRetina && zt ? 2 : 1,
        s = this.getTileSize();
      (e.width = s.x * o), (e.height = s.y * o), (this.wmsParams = e);
    },
    onAdd: function (t) {
      (this._crs = this.options.crs || t.options.crs),
        (this._wmsVersion = parseFloat(this.wmsParams.version));
      var i = 1.3 <= this._wmsVersion ? 'crs' : 'srs';
      (this.wmsParams[i] = this._crs.code), sn.prototype.onAdd.call(this, t);
    },
    getTileUrl: function (t) {
      var i = this._tileCoordsToNwSe(t),
        e = this._crs,
        n = O(e.project(i[0]), e.project(i[1])),
        o = n.min,
        s = n.max,
        r = (
          1.3 <= this._wmsVersion && this._crs === be
            ? [o.y, o.x, s.y, s.x]
            : [o.x, o.y, s.x, s.y]
        ).join(','),
        a = sn.prototype.getTileUrl.call(this, t);
      return (
        a +
        _(this.wmsParams, a, this.options.uppercase) +
        (this.options.uppercase ? '&BBOX=' : '&bbox=') +
        r
      );
    },
    setParams: function (t, i) {
      return h(this.wmsParams, t), i || this.redraw(), this;
    },
  });
  (sn.WMS = an),
    (rn.wms = function (t, i) {
      return new an(t, i);
    });
  var hn = Me.extend({
      options: { padding: 0.1, tolerance: 0 },
      initialize: function (t) {
        c(this, t), m(this), (this._layers = this._layers || {});
      },
      onAdd: function () {
        this._container ||
          (this._initContainer(),
          this._zoomAnimated && ci(this._container, 'leaflet-zoom-animated')),
          this.getPane().appendChild(this._container),
          this._update(),
          this.on('update', this._updatePaths, this);
      },
      onRemove: function () {
        this.off('update', this._updatePaths, this), this._destroyContainer();
      },
      getEvents: function () {
        var t = {
          viewreset: this._reset,
          zoom: this._onZoom,
          moveend: this._update,
          zoomend: this._onZoomEnd,
        };
        return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
      },
      _onAnimZoom: function (t) {
        this._updateTransform(t.center, t.zoom);
      },
      _onZoom: function () {
        this._updateTransform(this._map.getCenter(), this._map.getZoom());
      },
      _updateTransform: function (t, i) {
        var e = this._map.getZoomScale(i, this._zoom),
          n = yi(this._container),
          o = this._map.getSize().multiplyBy(0.5 + this.options.padding),
          s = this._map.project(this._center, i),
          r = this._map.project(t, i).subtract(s),
          a = o.multiplyBy(-e).add(n).add(o).subtract(r);
        vt ? gi(this._container, a, e) : vi(this._container, a);
      },
      _reset: function () {
        for (var t in (this._update(),
        this._updateTransform(this._center, this._zoom),
        this._layers))
          this._layers[t]._reset();
      },
      _onZoomEnd: function () {
        for (var t in this._layers) this._layers[t]._project();
      },
      _updatePaths: function () {
        for (var t in this._layers) this._layers[t]._update();
      },
      _update: function () {
        var t = this.options.padding,
          i = this._map.getSize(),
          e = this._map.containerPointToLayerPoint(i.multiplyBy(-t)).round();
        (this._bounds = new I(e, e.add(i.multiplyBy(1 + 2 * t)).round())),
          (this._center = this._map.getCenter()),
          (this._zoom = this._map.getZoom());
      },
    }),
    un = hn.extend({
      getEvents: function () {
        var t = hn.prototype.getEvents.call(this);
        return (t.viewprereset = this._onViewPreReset), t;
      },
      _onViewPreReset: function () {
        this._postponeUpdatePaths = !0;
      },
      onAdd: function () {
        hn.prototype.onAdd.call(this), this._draw();
      },
      _initContainer: function () {
        var t = (this._container = document.createElement('canvas'));
        zi(t, 'mousemove', this._onMouseMove, this),
          zi(
            t,
            'click dblclick mousedown mouseup contextmenu',
            this._onClick,
            this,
          ),
          zi(t, 'mouseout', this._handleMouseOut, this),
          (this._ctx = t.getContext('2d'));
      },
      _destroyContainer: function () {
        z(this._redrawRequest),
          delete this._ctx,
          ri(this._container),
          Si(this._container),
          delete this._container;
      },
      _updatePaths: function () {
        if (!this._postponeUpdatePaths) {
          for (var t in ((this._redrawBounds = null), this._layers))
            this._layers[t]._update();
          this._redraw();
        }
      },
      _update: function () {
        var t, i, e, n;
        (this._map._animatingZoom && this._bounds) ||
          (hn.prototype._update.call(this),
          (t = this._bounds),
          (i = this._container),
          (e = t.getSize()),
          (n = zt ? 2 : 1),
          vi(i, t.min),
          (i.width = n * e.x),
          (i.height = n * e.y),
          (i.style.width = e.x + 'px'),
          (i.style.height = e.y + 'px'),
          zt && this._ctx.scale(2, 2),
          this._ctx.translate(-t.min.x, -t.min.y),
          this.fire('update'));
      },
      _reset: function () {
        hn.prototype._reset.call(this),
          this._postponeUpdatePaths &&
            ((this._postponeUpdatePaths = !1), this._updatePaths());
      },
      _initPath: function (t) {
        this._updateDashArray(t);
        var i = ((this._layers[m(t)] = t)._order = {
          layer: t,
          prev: this._drawLast,
          next: null,
        });
        this._drawLast && (this._drawLast.next = i),
          (this._drawLast = i),
          (this._drawFirst = this._drawFirst || this._drawLast);
      },
      _addPath: function (t) {
        this._requestRedraw(t);
      },
      _removePath: function (t) {
        var i = t._order,
          e = i.next,
          n = i.prev;
        e ? (e.prev = n) : (this._drawLast = n),
          n ? (n.next = e) : (this._drawFirst = e),
          delete t._order,
          delete this._layers[m(t)],
          this._requestRedraw(t);
      },
      _updatePath: function (t) {
        this._extendRedrawBounds(t),
          t._project(),
          t._update(),
          this._requestRedraw(t);
      },
      _updateStyle: function (t) {
        this._updateDashArray(t), this._requestRedraw(t);
      },
      _updateDashArray: function (t) {
        if ('string' == typeof t.options.dashArray) {
          for (
            var i, e = t.options.dashArray.split(/[, ]+/), n = [], o = 0;
            o < e.length;
            o++
          ) {
            if (((i = Number(e[o])), isNaN(i))) return;
            n.push(i);
          }
          t.options._dashArray = n;
        } else t.options._dashArray = t.options.dashArray;
      },
      _requestRedraw: function (t) {
        this._map &&
          (this._extendRedrawBounds(t),
          (this._redrawRequest = this._redrawRequest || M(this._redraw, this)));
      },
      _extendRedrawBounds: function (t) {
        var i;
        t._pxBounds &&
          ((i = (t.options.weight || 0) + 1),
          (this._redrawBounds = this._redrawBounds || new I()),
          this._redrawBounds.extend(t._pxBounds.min.subtract([i, i])),
          this._redrawBounds.extend(t._pxBounds.max.add([i, i])));
      },
      _redraw: function () {
        (this._redrawRequest = null),
          this._redrawBounds &&
            (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()),
          this._clear(),
          this._draw(),
          (this._redrawBounds = null);
      },
      _clear: function () {
        var t,
          i = this._redrawBounds;
        i
          ? ((t = i.getSize()), this._ctx.clearRect(i.min.x, i.min.y, t.x, t.y))
          : (this._ctx.save(),
            this._ctx.setTransform(1, 0, 0, 1, 0, 0),
            this._ctx.clearRect(
              0,
              0,
              this._container.width,
              this._container.height,
            ),
            this._ctx.restore());
      },
      _draw: function () {
        var t,
          i,
          e = this._redrawBounds;
        this._ctx.save(),
          e &&
            ((i = e.getSize()),
            this._ctx.beginPath(),
            this._ctx.rect(e.min.x, e.min.y, i.x, i.y),
            this._ctx.clip()),
          (this._drawing = !0);
        for (var n = this._drawFirst; n; n = n.next)
          (t = n.layer),
            (!e || (t._pxBounds && t._pxBounds.intersects(e))) &&
              t._updatePath();
        (this._drawing = !1), this._ctx.restore();
      },
      _updatePoly: function (t, i) {
        if (this._drawing) {
          var e,
            n,
            o,
            s,
            r = t._parts,
            a = r.length,
            h = this._ctx;
          if (a) {
            for (h.beginPath(), e = 0; e < a; e++) {
              for (n = 0, o = r[e].length; n < o; n++)
                (s = r[e][n]), h[n ? 'lineTo' : 'moveTo'](s.x, s.y);
              i && h.closePath();
            }
            this._fillStroke(h, t);
          }
        }
      },
      _updateCircle: function (t) {
        var i, e, n, o;
        this._drawing &&
          !t._empty() &&
          ((i = t._point),
          (e = this._ctx),
          (n = Math.max(Math.round(t._radius), 1)),
          1 != (o = (Math.max(Math.round(t._radiusY), 1) || n) / n) &&
            (e.save(), e.scale(1, o)),
          e.beginPath(),
          e.arc(i.x, i.y / o, n, 0, 2 * Math.PI, !1),
          1 != o && e.restore(),
          this._fillStroke(e, t));
      },
      _fillStroke: function (t, i) {
        var e = i.options;
        e.fill &&
          ((t.globalAlpha = e.fillOpacity),
          (t.fillStyle = e.fillColor || e.color),
          t.fill(e.fillRule || 'evenodd')),
          e.stroke &&
            0 !== e.weight &&
            (t.setLineDash &&
              t.setLineDash((i.options && i.options._dashArray) || []),
            (t.globalAlpha = e.opacity),
            (t.lineWidth = e.weight),
            (t.strokeStyle = e.color),
            (t.lineCap = e.lineCap),
            (t.lineJoin = e.lineJoin),
            t.stroke());
      },
      _onClick: function (t) {
        for (
          var i,
            e,
            n = this._map.mouseEventToLayerPoint(t),
            o = this._drawFirst;
          o;
          o = o.next
        )
          (i = o.layer).options.interactive &&
            i._containsPoint(n) &&
            ((('click' === t.type || 'preclick' !== t.type) &&
              this._map._draggableMoved(i)) ||
              (e = i));
        e && (Fi(t), this._fireEvent([e], t));
      },
      _onMouseMove: function (t) {
        var i;
        !this._map ||
          this._map.dragging.moving() ||
          this._map._animatingZoom ||
          ((i = this._map.mouseEventToLayerPoint(t)),
          this._handleMouseHover(t, i));
      },
      _handleMouseOut: function (t) {
        var i = this._hoveredLayer;
        i &&
          (_i(this._container, 'leaflet-interactive'),
          this._fireEvent([i], t, 'mouseout'),
          (this._hoveredLayer = null),
          (this._mouseHoverThrottled = !1));
      },
      _handleMouseHover: function (t, i) {
        if (!this._mouseHoverThrottled) {
          for (var e, n, o = this._drawFirst; o; o = o.next)
            (e = o.layer).options.interactive && e._containsPoint(i) && (n = e);
          n !== this._hoveredLayer &&
            (this._handleMouseOut(t),
            n &&
              (ci(this._container, 'leaflet-interactive'),
              this._fireEvent([n], t, 'mouseover'),
              (this._hoveredLayer = n))),
            this._hoveredLayer && this._fireEvent([this._hoveredLayer], t),
            (this._mouseHoverThrottled = !0),
            setTimeout(
              p(function () {
                this._mouseHoverThrottled = !1;
              }, this),
              32,
            );
        }
      },
      _fireEvent: function (t, i, e) {
        this._map._fireDOMEvent(i, e || i.type, t);
      },
      _bringToFront: function (t) {
        var i,
          e,
          n = t._order;
        n &&
          ((i = n.next),
          (e = n.prev),
          i &&
            ((i.prev = e) ? (e.next = i) : i && (this._drawFirst = i),
            (n.prev = this._drawLast),
            ((this._drawLast.next = n).next = null),
            (this._drawLast = n),
            this._requestRedraw(t)));
      },
      _bringToBack: function (t) {
        var i,
          e,
          n = t._order;
        n &&
          ((i = n.next),
          (e = n.prev) &&
            ((e.next = i) ? (i.prev = e) : e && (this._drawLast = e),
            (n.prev = null),
            (n.next = this._drawFirst),
            (this._drawFirst.prev = n),
            (this._drawFirst = n),
            this._requestRedraw(t)));
      },
    });
  function ln(t) {
    return St ? new un(t) : null;
  }
  var cn = (function () {
      try {
        return (
          document.namespaces.add('lvml', 'urn:schemas-microsoft-com:vml'),
          function (t) {
            return document.createElement('<lvml:' + t + ' class="lvml">');
          }
        );
      } catch (t) {
        return function (t) {
          return document.createElement(
            '<' + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">',
          );
        };
      }
    })(),
    _n = {
      _initContainer: function () {
        this._container = si('div', 'leaflet-vml-container');
      },
      _update: function () {
        this._map._animatingZoom ||
          (hn.prototype._update.call(this), this.fire('update'));
      },
      _initPath: function (t) {
        var i = (t._container = cn('shape'));
        ci(i, 'leaflet-vml-shape ' + (this.options.className || '')),
          (i.coordsize = '1 1'),
          (t._path = cn('path')),
          i.appendChild(t._path),
          this._updateStyle(t),
          (this._layers[m(t)] = t);
      },
      _addPath: function (t) {
        var i = t._container;
        this._container.appendChild(i),
          t.options.interactive && t.addInteractiveTarget(i);
      },
      _removePath: function (t) {
        var i = t._container;
        ri(i), t.removeInteractiveTarget(i), delete this._layers[m(t)];
      },
      _updateStyle: function (t) {
        var i = t._stroke,
          e = t._fill,
          n = t.options,
          o = t._container;
        (o.stroked = !!n.stroke),
          (o.filled = !!n.fill),
          n.stroke
            ? ((i = i || (t._stroke = cn('stroke'))),
              o.appendChild(i),
              (i.weight = n.weight + 'px'),
              (i.color = n.color),
              (i.opacity = n.opacity),
              n.dashArray
                ? (i.dashStyle = g(n.dashArray)
                    ? n.dashArray.join(' ')
                    : n.dashArray.replace(/( *, *)/g, ' '))
                : (i.dashStyle = ''),
              (i.endcap = n.lineCap.replace('butt', 'flat')),
              (i.joinstyle = n.lineJoin))
            : i && (o.removeChild(i), (t._stroke = null)),
          n.fill
            ? ((e = e || (t._fill = cn('fill'))),
              o.appendChild(e),
              (e.color = n.fillColor || n.color),
              (e.opacity = n.fillOpacity))
            : e && (o.removeChild(e), (t._fill = null));
      },
      _updateCircle: function (t) {
        var i = t._point.round(),
          e = Math.round(t._radius),
          n = Math.round(t._radiusY || e);
        this._setPath(
          t,
          t._empty()
            ? 'M0 0'
            : 'AL ' + i.x + ',' + i.y + ' ' + e + ',' + n + ' 0,23592600',
        );
      },
      _setPath: function (t, i) {
        t._path.v = i;
      },
      _bringToFront: function (t) {
        hi(t._container);
      },
      _bringToBack: function (t) {
        ui(t._container);
      },
    },
    dn = Et ? cn : J,
    pn = hn.extend({
      getEvents: function () {
        var t = hn.prototype.getEvents.call(this);
        return (t.zoomstart = this._onZoomStart), t;
      },
      _initContainer: function () {
        (this._container = dn('svg')),
          this._container.setAttribute('pointer-events', 'none'),
          (this._rootGroup = dn('g')),
          this._container.appendChild(this._rootGroup);
      },
      _destroyContainer: function () {
        ri(this._container),
          Si(this._container),
          delete this._container,
          delete this._rootGroup,
          delete this._svgSize;
      },
      _onZoomStart: function () {
        this._update();
      },
      _update: function () {
        var t, i, e;
        (this._map._animatingZoom && this._bounds) ||
          (hn.prototype._update.call(this),
          (i = (t = this._bounds).getSize()),
          (e = this._container),
          (this._svgSize && this._svgSize.equals(i)) ||
            ((this._svgSize = i),
            e.setAttribute('width', i.x),
            e.setAttribute('height', i.y)),
          vi(e, t.min),
          e.setAttribute('viewBox', [t.min.x, t.min.y, i.x, i.y].join(' ')),
          this.fire('update'));
      },
      _initPath: function (t) {
        var i = (t._path = dn('path'));
        t.options.className && ci(i, t.options.className),
          t.options.interactive && ci(i, 'leaflet-interactive'),
          this._updateStyle(t),
          (this._layers[m(t)] = t);
      },
      _addPath: function (t) {
        this._rootGroup || this._initContainer(),
          this._rootGroup.appendChild(t._path),
          t.addInteractiveTarget(t._path);
      },
      _removePath: function (t) {
        ri(t._path),
          t.removeInteractiveTarget(t._path),
          delete this._layers[m(t)];
      },
      _updatePath: function (t) {
        t._project(), t._update();
      },
      _updateStyle: function (t) {
        var i = t._path,
          e = t.options;
        i &&
          (e.stroke
            ? (i.setAttribute('stroke', e.color),
              i.setAttribute('stroke-opacity', e.opacity),
              i.setAttribute('stroke-width', e.weight),
              i.setAttribute('stroke-linecap', e.lineCap),
              i.setAttribute('stroke-linejoin', e.lineJoin),
              e.dashArray
                ? i.setAttribute('stroke-dasharray', e.dashArray)
                : i.removeAttribute('stroke-dasharray'),
              e.dashOffset
                ? i.setAttribute('stroke-dashoffset', e.dashOffset)
                : i.removeAttribute('stroke-dashoffset'))
            : i.setAttribute('stroke', 'none'),
          e.fill
            ? (i.setAttribute('fill', e.fillColor || e.color),
              i.setAttribute('fill-opacity', e.fillOpacity),
              i.setAttribute('fill-rule', e.fillRule || 'evenodd'))
            : i.setAttribute('fill', 'none'));
      },
      _updatePoly: function (t, i) {
        this._setPath(t, $(t._parts, i));
      },
      _updateCircle: function (t) {
        var i = t._point,
          e = Math.max(Math.round(t._radius), 1),
          n =
            'a' +
            e +
            ',' +
            (Math.max(Math.round(t._radiusY), 1) || e) +
            ' 0 1,0 ',
          o = t._empty()
            ? 'M0 0'
            : 'M' +
              (i.x - e) +
              ',' +
              i.y +
              n +
              2 * e +
              ',0 ' +
              n +
              2 * -e +
              ',0 ';
        this._setPath(t, o);
      },
      _setPath: function (t, i) {
        t._path.setAttribute('d', i);
      },
      _bringToFront: function (t) {
        hi(t._path);
      },
      _bringToBack: function (t) {
        ui(t._path);
      },
    });
  function mn(t) {
    return Zt || Et ? new pn(t) : null;
  }
  Et && pn.include(_n),
    Ki.include({
      getRenderer: function (t) {
        var i =
          (i =
            t.options.renderer ||
            this._getPaneRenderer(t.options.pane) ||
            this.options.renderer ||
            this._renderer) || (this._renderer = this._createRenderer());
        return this.hasLayer(i) || this.addLayer(i), i;
      },
      _getPaneRenderer: function (t) {
        if ('overlayPane' === t || void 0 === t) return !1;
        var i = this._paneRenderers[t];
        return (
          void 0 === i &&
            ((i = this._createRenderer({ pane: t })),
            (this._paneRenderers[t] = i)),
          i
        );
      },
      _createRenderer: function (t) {
        return (this.options.preferCanvas && ln(t)) || mn(t);
      },
    });
  var fn = Re.extend({
    initialize: function (t, i) {
      Re.prototype.initialize.call(this, this._boundsToLatLngs(t), i);
    },
    setBounds: function (t) {
      return this.setLatLngs(this._boundsToLatLngs(t));
    },
    _boundsToLatLngs: function (t) {
      return [
        (t = N(t)).getSouthWest(),
        t.getNorthWest(),
        t.getNorthEast(),
        t.getSouthEast(),
      ];
    },
  });
  (pn.create = dn),
    (pn.pointsToPath = $),
    (Ne.geometryToLayer = De),
    (Ne.coordsToLatLng = We),
    (Ne.coordsToLatLngs = He),
    (Ne.latLngToCoords = Fe),
    (Ne.latLngsToCoords = Ue),
    (Ne.getFeature = Ve),
    (Ne.asFeature = qe),
    Ki.mergeOptions({ boxZoom: !0 });
  var gn = ie.extend({
    initialize: function (t) {
      (this._map = t),
        (this._container = t._container),
        (this._pane = t._panes.overlayPane),
        (this._resetStateTimeout = 0),
        t.on('unload', this._destroy, this);
    },
    addHooks: function () {
      zi(this._container, 'mousedown', this._onMouseDown, this);
    },
    removeHooks: function () {
      Si(this._container, 'mousedown', this._onMouseDown, this);
    },
    moved: function () {
      return this._moved;
    },
    _destroy: function () {
      ri(this._pane), delete this._pane;
    },
    _resetState: function () {
      (this._resetStateTimeout = 0), (this._moved = !1);
    },
    _clearDeferredResetState: function () {
      0 !== this._resetStateTimeout &&
        (clearTimeout(this._resetStateTimeout), (this._resetStateTimeout = 0));
    },
    _onMouseDown: function (t) {
      if (!t.shiftKey || (1 !== t.which && 1 !== t.button)) return !1;
      this._clearDeferredResetState(),
        this._resetState(),
        Xt(),
        xi(),
        (this._startPoint = this._map.mouseEventToContainerPoint(t)),
        zi(
          document,
          {
            contextmenu: Ni,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown,
          },
          this,
        );
    },
    _onMouseMove: function (t) {
      this._moved ||
        ((this._moved = !0),
        (this._box = si('div', 'leaflet-zoom-box', this._container)),
        ci(this._container, 'leaflet-crosshair'),
        this._map.fire('boxzoomstart')),
        (this._point = this._map.mouseEventToContainerPoint(t));
      var i = new I(this._point, this._startPoint),
        e = i.getSize();
      vi(this._box, i.min),
        (this._box.style.width = e.x + 'px'),
        (this._box.style.height = e.y + 'px');
    },
    _finish: function () {
      this._moved && (ri(this._box), _i(this._container, 'leaflet-crosshair')),
        Jt(),
        wi(),
        Si(
          document,
          {
            contextmenu: Ni,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown,
          },
          this,
        );
    },
    _onMouseUp: function (t) {
      var i;
      (1 !== t.which && 1 !== t.button) ||
        (this._finish(),
        this._moved &&
          (this._clearDeferredResetState(),
          (this._resetStateTimeout = setTimeout(p(this._resetState, this), 0)),
          (i = new R(
            this._map.containerPointToLatLng(this._startPoint),
            this._map.containerPointToLatLng(this._point),
          )),
          this._map.fitBounds(i).fire('boxzoomend', { boxZoomBounds: i })));
    },
    _onKeyDown: function (t) {
      27 === t.keyCode && this._finish();
    },
  });
  Ki.addInitHook('addHandler', 'boxZoom', gn),
    Ki.mergeOptions({ doubleClickZoom: !0 });
  var vn = ie.extend({
    addHooks: function () {
      this._map.on('dblclick', this._onDoubleClick, this);
    },
    removeHooks: function () {
      this._map.off('dblclick', this._onDoubleClick, this);
    },
    _onDoubleClick: function (t) {
      var i = this._map,
        e = i.getZoom(),
        n = i.options.zoomDelta,
        o = t.originalEvent.shiftKey ? e - n : e + n;
      'center' === i.options.doubleClickZoom
        ? i.setZoom(o)
        : i.setZoomAround(t.containerPoint, o);
    },
  });
  Ki.addInitHook('addHandler', 'doubleClickZoom', vn),
    Ki.mergeOptions({
      dragging: !0,
      inertia: !st,
      inertiaDeceleration: 3400,
      inertiaMaxSpeed: 1 / 0,
      easeLinearity: 0.2,
      worldCopyJump: !1,
      maxBoundsViscosity: 0,
    });
  var yn = ie.extend({
    addHooks: function () {
      var t;
      this._draggable ||
        ((t = this._map),
        (this._draggable = new ae(t._mapPane, t._container)),
        this._draggable.on(
          {
            dragstart: this._onDragStart,
            drag: this._onDrag,
            dragend: this._onDragEnd,
          },
          this,
        ),
        this._draggable.on('predrag', this._onPreDragLimit, this),
        t.options.worldCopyJump &&
          (this._draggable.on('predrag', this._onPreDragWrap, this),
          t.on('zoomend', this._onZoomEnd, this),
          t.whenReady(this._onZoomEnd, this))),
        ci(this._map._container, 'leaflet-grab leaflet-touch-drag'),
        this._draggable.enable(),
        (this._positions = []),
        (this._times = []);
    },
    removeHooks: function () {
      _i(this._map._container, 'leaflet-grab'),
        _i(this._map._container, 'leaflet-touch-drag'),
        this._draggable.disable();
    },
    moved: function () {
      return this._draggable && this._draggable._moved;
    },
    moving: function () {
      return this._draggable && this._draggable._moving;
    },
    _onDragStart: function () {
      var t,
        i = this._map;
      i._stop(),
        this._map.options.maxBounds && this._map.options.maxBoundsViscosity
          ? ((t = N(this._map.options.maxBounds)),
            (this._offsetLimit = O(
              this._map.latLngToContainerPoint(t.getNorthWest()).multiplyBy(-1),
              this._map
                .latLngToContainerPoint(t.getSouthEast())
                .multiplyBy(-1)
                .add(this._map.getSize()),
            )),
            (this._viscosity = Math.min(
              1,
              Math.max(0, this._map.options.maxBoundsViscosity),
            )))
          : (this._offsetLimit = null),
        i.fire('movestart').fire('dragstart'),
        i.options.inertia && ((this._positions = []), (this._times = []));
    },
    _onDrag: function (t) {
      var i, e;
      this._map.options.inertia &&
        ((i = this._lastTime = +new Date()),
        (e = this._lastPos =
          this._draggable._absPos || this._draggable._newPos),
        this._positions.push(e),
        this._times.push(i),
        this._prunePositions(i)),
        this._map.fire('move', t).fire('drag', t);
    },
    _prunePositions: function (t) {
      for (; 1 < this._positions.length && 50 < t - this._times[0]; )
        this._positions.shift(), this._times.shift();
    },
    _onZoomEnd: function () {
      var t = this._map.getSize().divideBy(2),
        i = this._map.latLngToLayerPoint([0, 0]);
      (this._initialWorldOffset = i.subtract(t).x),
        (this._worldWidth = this._map.getPixelWorldBounds().getSize().x);
    },
    _viscousLimit: function (t, i) {
      return t - (t - i) * this._viscosity;
    },
    _onPreDragLimit: function () {
      var t, i;
      this._viscosity &&
        this._offsetLimit &&
        ((t = this._draggable._newPos.subtract(this._draggable._startPos)),
        (i = this._offsetLimit),
        t.x < i.min.x && (t.x = this._viscousLimit(t.x, i.min.x)),
        t.y < i.min.y && (t.y = this._viscousLimit(t.y, i.min.y)),
        t.x > i.max.x && (t.x = this._viscousLimit(t.x, i.max.x)),
        t.y > i.max.y && (t.y = this._viscousLimit(t.y, i.max.y)),
        (this._draggable._newPos = this._draggable._startPos.add(t)));
    },
    _onPreDragWrap: function () {
      var t = this._worldWidth,
        i = Math.round(t / 2),
        e = this._initialWorldOffset,
        n = this._draggable._newPos.x,
        o = ((n - i + e) % t) + i - e,
        s = ((n + i + e) % t) - i - e,
        r = Math.abs(o + e) < Math.abs(s + e) ? o : s;
      (this._draggable._absPos = this._draggable._newPos.clone()),
        (this._draggable._newPos.x = r);
    },
    _onDragEnd: function (t) {
      var i,
        e,
        n,
        o,
        s,
        r,
        a,
        h,
        u,
        l = this._map,
        c = l.options,
        _ = !c.inertia || this._times.length < 2;
      l.fire('dragend', t),
        _
          ? l.fire('moveend')
          : (this._prunePositions(+new Date()),
            (i = this._lastPos.subtract(this._positions[0])),
            (e = (this._lastTime - this._times[0]) / 1e3),
            (n = c.easeLinearity),
            (s = (o = i.multiplyBy(n / e)).distanceTo([0, 0])),
            (r = Math.min(c.inertiaMaxSpeed, s)),
            (a = o.multiplyBy(r / s)),
            (h = r / (c.inertiaDeceleration * n)),
            (u = a.multiplyBy(-h / 2).round()).x || u.y
              ? ((u = l._limitOffset(u, l.options.maxBounds)),
                M(function () {
                  l.panBy(u, {
                    duration: h,
                    easeLinearity: n,
                    noMoveStart: !0,
                    animate: !0,
                  });
                }))
              : l.fire('moveend'));
    },
  });
  Ki.addInitHook('addHandler', 'dragging', yn),
    Ki.mergeOptions({ keyboard: !0, keyboardPanDelta: 80 });
  var xn = ie.extend({
    keyCodes: {
      left: [37],
      right: [39],
      down: [40],
      up: [38],
      zoomIn: [187, 107, 61, 171],
      zoomOut: [189, 109, 54, 173],
    },
    initialize: function (t) {
      (this._map = t),
        this._setPanDelta(t.options.keyboardPanDelta),
        this._setZoomDelta(t.options.zoomDelta);
    },
    addHooks: function () {
      var t = this._map._container;
      t.tabIndex <= 0 && (t.tabIndex = '0'),
        zi(
          t,
          {
            focus: this._onFocus,
            blur: this._onBlur,
            mousedown: this._onMouseDown,
          },
          this,
        ),
        this._map.on({ focus: this._addHooks, blur: this._removeHooks }, this);
    },
    removeHooks: function () {
      this._removeHooks(),
        Si(
          this._map._container,
          {
            focus: this._onFocus,
            blur: this._onBlur,
            mousedown: this._onMouseDown,
          },
          this,
        ),
        this._map.off({ focus: this._addHooks, blur: this._removeHooks }, this);
    },
    _onMouseDown: function () {
      var t, i, e, n;
      this._focused ||
        ((t = document.body),
        (i = document.documentElement),
        (e = t.scrollTop || i.scrollTop),
        (n = t.scrollLeft || i.scrollLeft),
        this._map._container.focus(),
        window.scrollTo(n, e));
    },
    _onFocus: function () {
      (this._focused = !0), this._map.fire('focus');
    },
    _onBlur: function () {
      (this._focused = !1), this._map.fire('blur');
    },
    _setPanDelta: function (t) {
      for (
        var i = (this._panKeys = {}),
          e = this.keyCodes,
          n = 0,
          o = e.left.length;
        n < o;
        n++
      )
        i[e.left[n]] = [-1 * t, 0];
      for (n = 0, o = e.right.length; n < o; n++) i[e.right[n]] = [t, 0];
      for (n = 0, o = e.down.length; n < o; n++) i[e.down[n]] = [0, t];
      for (n = 0, o = e.up.length; n < o; n++) i[e.up[n]] = [0, -1 * t];
    },
    _setZoomDelta: function (t) {
      for (
        var i = (this._zoomKeys = {}),
          e = this.keyCodes,
          n = 0,
          o = e.zoomIn.length;
        n < o;
        n++
      )
        i[e.zoomIn[n]] = t;
      for (n = 0, o = e.zoomOut.length; n < o; n++) i[e.zoomOut[n]] = -t;
    },
    _addHooks: function () {
      zi(document, 'keydown', this._onKeyDown, this);
    },
    _removeHooks: function () {
      Si(document, 'keydown', this._onKeyDown, this);
    },
    _onKeyDown: function (t) {
      if (!(t.altKey || t.ctrlKey || t.metaKey)) {
        var i,
          e = t.keyCode,
          n = this._map;
        if (e in this._panKeys)
          (n._panAnim && n._panAnim._inProgress) ||
            ((i = this._panKeys[e]),
            t.shiftKey && (i = A(i).multiplyBy(3)),
            n.panBy(i),
            n.options.maxBounds && n.panInsideBounds(n.options.maxBounds));
        else if (e in this._zoomKeys)
          n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[e]);
        else {
          if (27 !== e || !n._popup || !n._popup.options.closeOnEscapeKey)
            return;
          n.closePopup();
        }
        Ni(t);
      }
    },
  });
  Ki.addInitHook('addHandler', 'keyboard', xn),
    Ki.mergeOptions({
      scrollWheelZoom: !0,
      wheelDebounceTime: 40,
      wheelPxPerZoomLevel: 60,
    });
  var wn = ie.extend({
    addHooks: function () {
      zi(this._map._container, 'wheel', this._onWheelScroll, this),
        (this._delta = 0);
    },
    removeHooks: function () {
      Si(this._map._container, 'wheel', this._onWheelScroll, this);
    },
    _onWheelScroll: function (t) {
      var i = Wi(t),
        e = this._map.options.wheelDebounceTime;
      (this._delta += i),
        (this._lastMousePos = this._map.mouseEventToContainerPoint(t)),
        this._startTime || (this._startTime = +new Date());
      var n = Math.max(e - (new Date() - this._startTime), 0);
      clearTimeout(this._timer),
        (this._timer = setTimeout(p(this._performZoom, this), n)),
        Ni(t);
    },
    _performZoom: function () {
      var t = this._map,
        i = t.getZoom(),
        e = this._map.options.zoomSnap || 0;
      t._stop();
      var n = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
        o = (4 * Math.log(2 / (1 + Math.exp(-Math.abs(n))))) / Math.LN2,
        s = e ? Math.ceil(o / e) * e : o,
        r = t._limitZoom(i + (0 < this._delta ? s : -s)) - i;
      (this._delta = 0),
        (this._startTime = null),
        r &&
          ('center' === t.options.scrollWheelZoom
            ? t.setZoom(i + r)
            : t.setZoomAround(this._lastMousePos, i + r));
    },
  });
  Ki.addInitHook('addHandler', 'scrollWheelZoom', wn),
    Ki.mergeOptions({ tap: !0, tapTolerance: 15 });
  var Pn = ie.extend({
    addHooks: function () {
      zi(this._map._container, 'touchstart', this._onDown, this);
    },
    removeHooks: function () {
      Si(this._map._container, 'touchstart', this._onDown, this);
    },
    _onDown: function (t) {
      if (t.touches) {
        if ((Ri(t), (this._fireClick = !0), 1 < t.touches.length))
          return (this._fireClick = !1), void clearTimeout(this._holdTimeout);
        var i = t.touches[0],
          e = i.target;
        (this._startPos = this._newPos = new k(i.clientX, i.clientY)),
          e.tagName &&
            'a' === e.tagName.toLowerCase() &&
            ci(e, 'leaflet-active'),
          (this._holdTimeout = setTimeout(
            p(function () {
              this._isTapValid() &&
                ((this._fireClick = !1),
                this._onUp(),
                this._simulateEvent('contextmenu', i));
            }, this),
            1e3,
          )),
          this._simulateEvent('mousedown', i),
          zi(document, { touchmove: this._onMove, touchend: this._onUp }, this);
      }
    },
    _onUp: function (t) {
      var i, e;
      clearTimeout(this._holdTimeout),
        Si(document, { touchmove: this._onMove, touchend: this._onUp }, this),
        this._fireClick &&
          t &&
          t.changedTouches &&
          ((e = (i = t.changedTouches[0]).target) &&
            e.tagName &&
            'a' === e.tagName.toLowerCase() &&
            _i(e, 'leaflet-active'),
          this._simulateEvent('mouseup', i),
          this._isTapValid() && this._simulateEvent('click', i));
    },
    _isTapValid: function () {
      return (
        this._newPos.distanceTo(this._startPos) <=
        this._map.options.tapTolerance
      );
    },
    _onMove: function (t) {
      var i = t.touches[0];
      (this._newPos = new k(i.clientX, i.clientY)),
        this._simulateEvent('mousemove', i);
    },
    _simulateEvent: function (t, i) {
      var e = document.createEvent('MouseEvents');
      (e._simulated = !0),
        (i.target._simulatedClick = !0),
        e.initMouseEvent(
          t,
          !0,
          !0,
          window,
          1,
          i.screenX,
          i.screenY,
          i.clientX,
          i.clientY,
          !1,
          !1,
          !1,
          !1,
          0,
          null,
        ),
        i.target.dispatchEvent(e);
    },
  });
  !bt || (Lt && !ct) || Ki.addInitHook('addHandler', 'tap', Pn),
    Ki.mergeOptions({ touchZoom: bt && !st, bounceAtZoomLimits: !0 });
  var Ln = ie.extend({
    addHooks: function () {
      ci(this._map._container, 'leaflet-touch-zoom'),
        zi(this._map._container, 'touchstart', this._onTouchStart, this);
    },
    removeHooks: function () {
      _i(this._map._container, 'leaflet-touch-zoom'),
        Si(this._map._container, 'touchstart', this._onTouchStart, this);
    },
    _onTouchStart: function (t) {
      var i,
        e,
        n = this._map;
      !t.touches ||
        2 !== t.touches.length ||
        n._animatingZoom ||
        this._zooming ||
        ((i = n.mouseEventToContainerPoint(t.touches[0])),
        (e = n.mouseEventToContainerPoint(t.touches[1])),
        (this._centerPoint = n.getSize()._divideBy(2)),
        (this._startLatLng = n.containerPointToLatLng(this._centerPoint)),
        'center' !== n.options.touchZoom &&
          (this._pinchStartLatLng = n.containerPointToLatLng(
            i.add(e)._divideBy(2),
          )),
        (this._startDist = i.distanceTo(e)),
        (this._startZoom = n.getZoom()),
        (this._moved = !1),
        (this._zooming = !0),
        n._stop(),
        zi(document, 'touchmove', this._onTouchMove, this),
        zi(document, 'touchend', this._onTouchEnd, this),
        Ri(t));
    },
    _onTouchMove: function (t) {
      if (t.touches && 2 === t.touches.length && this._zooming) {
        var i = this._map,
          e = i.mouseEventToContainerPoint(t.touches[0]),
          n = i.mouseEventToContainerPoint(t.touches[1]),
          o = e.distanceTo(n) / this._startDist;
        if (
          ((this._zoom = i.getScaleZoom(o, this._startZoom)),
          !i.options.bounceAtZoomLimits &&
            ((this._zoom < i.getMinZoom() && o < 1) ||
              (this._zoom > i.getMaxZoom() && 1 < o)) &&
            (this._zoom = i._limitZoom(this._zoom)),
          'center' === i.options.touchZoom)
        ) {
          if (((this._center = this._startLatLng), 1 == o)) return;
        } else {
          var s = e._add(n)._divideBy(2)._subtract(this._centerPoint);
          if (1 == o && 0 === s.x && 0 === s.y) return;
          this._center = i.unproject(
            i.project(this._pinchStartLatLng, this._zoom).subtract(s),
            this._zoom,
          );
        }
        this._moved || (i._moveStart(!0, !1), (this._moved = !0)),
          z(this._animRequest);
        var r = p(i._move, i, this._center, this._zoom, {
          pinch: !0,
          round: !1,
        });
        (this._animRequest = M(r, this, !0)), Ri(t);
      }
    },
    _onTouchEnd: function () {
      this._moved && this._zooming
        ? ((this._zooming = !1),
          z(this._animRequest),
          Si(document, 'touchmove', this._onTouchMove, this),
          Si(document, 'touchend', this._onTouchEnd, this),
          this._map.options.zoomAnimation
            ? this._map._animateZoom(
                this._center,
                this._map._limitZoom(this._zoom),
                !0,
                this._map.options.zoomSnap,
              )
            : this._map._resetView(
                this._center,
                this._map._limitZoom(this._zoom),
              ))
        : (this._zooming = !1);
    },
  });
  Ki.addInitHook('addHandler', 'touchZoom', Ln),
    (Ki.BoxZoom = gn),
    (Ki.DoubleClickZoom = vn),
    (Ki.Drag = yn),
    (Ki.Keyboard = xn),
    (Ki.ScrollWheelZoom = wn),
    (Ki.Tap = Pn),
    (Ki.TouchZoom = Ln),
    (t.version = '1.7.1'),
    (t.Control = Xi),
    (t.control = Yi),
    (t.Browser = Bt),
    (t.Evented = E),
    (t.Mixin = ne),
    (t.Util = C),
    (t.Class = S),
    (t.Handler = ie),
    (t.extend = h),
    (t.bind = p),
    (t.stamp = m),
    (t.setOptions = c),
    (t.DomEvent = qi),
    (t.DomUtil = Mi),
    (t.PosAnimation = Gi),
    (t.Draggable = ae),
    (t.LineUtil = fe),
    (t.PolyUtil = ye),
    (t.Point = k),
    (t.point = A),
    (t.Bounds = I),
    (t.bounds = O),
    (t.Transformation = q),
    (t.transformation = G),
    (t.Projection = Pe),
    (t.LatLng = D),
    (t.latLng = j),
    (t.LatLngBounds = R),
    (t.latLngBounds = N),
    (t.CRS = H),
    (t.GeoJSON = Ne),
    (t.geoJSON = Ke),
    (t.geoJson = Ye),
    (t.Layer = Me),
    (t.LayerGroup = ze),
    (t.layerGroup = function (t, i) {
      return new ze(t, i);
    }),
    (t.FeatureGroup = Ce),
    (t.featureGroup = function (t, i) {
      return new Ce(t, i);
    }),
    (t.ImageOverlay = Xe),
    (t.imageOverlay = function (t, i, e) {
      return new Xe(t, i, e);
    }),
    (t.VideoOverlay = Je),
    (t.videoOverlay = function (t, i, e) {
      return new Je(t, i, e);
    }),
    (t.SVGOverlay = $e),
    (t.svgOverlay = function (t, i, e) {
      return new $e(t, i, e);
    }),
    (t.DivOverlay = Qe),
    (t.Popup = tn),
    (t.popup = function (t, i) {
      return new tn(t, i);
    }),
    (t.Tooltip = en),
    (t.tooltip = function (t, i) {
      return new en(t, i);
    }),
    (t.Icon = Se),
    (t.icon = function (t) {
      return new Se(t);
    }),
    (t.DivIcon = nn),
    (t.divIcon = function (t) {
      return new nn(t);
    }),
    (t.Marker = ke),
    (t.marker = function (t, i) {
      return new ke(t, i);
    }),
    (t.TileLayer = sn),
    (t.tileLayer = rn),
    (t.GridLayer = on),
    (t.gridLayer = function (t) {
      return new on(t);
    }),
    (t.SVG = pn),
    (t.svg = mn),
    (t.Renderer = hn),
    (t.Canvas = un),
    (t.canvas = ln),
    (t.Path = Be),
    (t.CircleMarker = Ae),
    (t.circleMarker = function (t, i) {
      return new Ae(t, i);
    }),
    (t.Circle = Ie),
    (t.circle = function (t, i, e) {
      return new Ie(t, i, e);
    }),
    (t.Polyline = Oe),
    (t.polyline = function (t, i) {
      return new Oe(t, i);
    }),
    (t.Polygon = Re),
    (t.polygon = function (t, i) {
      return new Re(t, i);
    }),
    (t.Rectangle = fn),
    (t.rectangle = function (t, i) {
      return new fn(t, i);
    }),
    (t.Map = Ki),
    (t.map = function (t, i) {
      return new Ki(t, i);
    });
  var bn = window.L;
  (t.noConflict = function () {
    return (window.L = bn), this;
  }),
    (window.L = t);
});
//# sourceMappingURL=leaflet.js.map
/* esri-leaflet - v2.5.3 - Wed Jan 06 2021 13:19:10 GMT-0600 (Central Standard Time)
 * Copyright (c) 2021 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
!(function (t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? e(exports, require('leaflet'))
    : 'function' == typeof define && define.amd
    ? define(['exports', 'leaflet'], e)
    : e((((t = t || self).L = t.L || {}), (t.L.esri = {})), t.L);
})(this, function (t, g) {
  'use strict';
  var e =
      window.XMLHttpRequest && 'withCredentials' in new window.XMLHttpRequest(),
    i = '' === document.documentElement.style.pointerEvents,
    a = { cors: e, pointerEvents: i },
    s = { attributionWidthOffset: 55 },
    n = 0;
  function l(t) {
    var e,
      i,
      s,
      r = '';
    for (var o in ((t.f = t.f || 'json'), t)) {
      t.hasOwnProperty(o) &&
        ((e = t[o]),
        (i = Object.prototype.toString.call(e)),
        r.length && (r += '&'),
        (s =
          '[object Array]' === i
            ? '[object Object]' === Object.prototype.toString.call(e[0])
              ? JSON.stringify(e)
              : e.join(',')
            : '[object Object]' === i
            ? JSON.stringify(e)
            : '[object Date]' === i
            ? e.valueOf()
            : e),
        (r += encodeURIComponent(o) + '=' + encodeURIComponent(s)));
    }
    return r;
  }
  function u(s, r) {
    var o = new window.XMLHttpRequest();
    return (
      (o.onerror = function (t) {
        (o.onreadystatechange = g.Util.falseFn),
          s.call(
            r,
            { error: { code: 500, message: 'XMLHttpRequest error' } },
            null,
          );
      }),
      (o.onreadystatechange = function () {
        var e, i;
        if (4 === o.readyState) {
          try {
            e = JSON.parse(o.responseText);
          } catch (t) {
            (e = null),
              (i = {
                code: 500,
                message:
                  'Could not parse response as JSON. This could also be caused by a CORS or XMLHttpRequest error.',
              });
          }
          !i && e.error && ((i = e.error), (e = null)),
            (o.onerror = g.Util.falseFn),
            s.call(r, i, e);
        }
      }),
      (o.ontimeout = function () {
        this.onerror();
      }),
      o
    );
  }
  function r(t, e, i, s) {
    var r = u(i, s);
    return (
      r.open('POST', t),
      null != s && void 0 !== s.options && (r.timeout = s.options.timeout),
      r.setRequestHeader(
        'Content-Type',
        'application/x-www-form-urlencoded; charset=UTF-8',
      ),
      r.send(l(e)),
      r
    );
  }
  function o(t, e, i, s) {
    var r = u(i, s);
    return (
      r.open('GET', t + '?' + l(e), !0),
      null != s &&
        void 0 !== s.options &&
        ((r.timeout = s.options.timeout),
        s.options.withCredentials && (r.withCredentials = !0)),
      r.send(null),
      r
    );
  }
  function h(t, e, i, s) {
    var r = l(e),
      o = u(i, s),
      n = (t + '?' + r).length;
    if (
      (n <= 2e3 && a.cors
        ? o.open('GET', t + '?' + r)
        : 2e3 < n &&
          a.cors &&
          (o.open('POST', t),
          o.setRequestHeader(
            'Content-Type',
            'application/x-www-form-urlencoded; charset=UTF-8',
          )),
      null != s &&
        void 0 !== s.options &&
        ((o.timeout = s.options.timeout),
        s.options.withCredentials && (o.withCredentials = !0)),
      n <= 2e3 && a.cors)
    )
      o.send(null);
    else {
      if (!(2e3 < n && a.cors))
        return n <= 2e3 && !a.cors
          ? c(t, e, i, s)
          : void d(
              'a request to ' +
                t +
                ' was longer then 2000 characters and this browser cannot make a cross-domain post request. Please use a proxy http://esri.github.io/esri-leaflet/api-reference/request.html',
            );
      o.send(r);
    }
    return o;
  }
  function c(t, e, s, r) {
    window._EsriLeafletCallbacks = window._EsriLeafletCallbacks || {};
    var o = 'c' + n;
    (e.callback = 'window._EsriLeafletCallbacks.' + o),
      (window._EsriLeafletCallbacks[o] = function (t) {
        var e, i;
        !0 !== window._EsriLeafletCallbacks[o] &&
          ('[object Object]' !== (i = Object.prototype.toString.call(t)) &&
            '[object Array]' !== i &&
            ((e = {
              error: {
                code: 500,
                message: 'Expected array or object as JSONP response',
              },
            }),
            (t = null)),
          !e && t.error && ((e = t), (t = null)),
          s.call(r, e, t),
          (window._EsriLeafletCallbacks[o] = !0));
      });
    var i = g.DomUtil.create('script', null, document.body);
    return (
      (i.type = 'text/javascript'),
      (i.src = t + '?' + l(e)),
      (i.id = o),
      (i.onerror = function (t) {
        t &&
          !0 !== window._EsriLeafletCallbacks[o] &&
          (s.call(r, {
            error: { code: 500, message: 'An unknown error occurred' },
          }),
          (window._EsriLeafletCallbacks[o] = !0));
      }),
      g.DomUtil.addClass(i, 'esri-leaflet-jsonp'),
      n++,
      {
        id: o,
        url: i.src,
        abort: function () {
          window._EsriLeafletCallbacks._callback[o]({
            code: 0,
            message: 'Request aborted.',
          });
        },
      }
    );
  }
  var p = a.cors ? o : c;
  function d() {
    console && console.warn && console.warn.apply(console, arguments);
  }
  (p.CORS = o), (p.JSONP = c);
  function y(t, e) {
    for (var i = 0; i < t.length - 1; i++)
      for (var s = 0; s < e.length - 1; s++)
        if (
          (function (t, e, i, s) {
            var r =
                (s[0] - i[0]) * (t[1] - i[1]) - (s[1] - i[1]) * (t[0] - i[0]),
              o = (e[0] - t[0]) * (t[1] - i[1]) - (e[1] - t[1]) * (t[0] - i[0]),
              n = (s[1] - i[1]) * (e[0] - t[0]) - (s[0] - i[0]) * (e[1] - t[1]);
            if (0 != n) {
              var a = r / n,
                l = o / n;
              if (0 <= a && a <= 1 && 0 <= l && l <= 1) return !0;
            }
            return !1;
          })(t[i], t[i + 1], e[s], e[s + 1])
        )
          return !0;
    return !1;
  }
  function _(t) {
    return (
      (function (t, e) {
        for (var i = 0; i < t.length; i++) if (t[i] !== e[i]) return !1;
        return !0;
      })(t[0], t[t.length - 1]) || t.push(t[0]),
      t
    );
  }
  function v(t) {
    for (var e, i = 0, s = 0, r = t.length, o = t[s]; s < r - 1; s++)
      (i += ((e = t[s + 1])[0] - o[0]) * (e[1] + o[1])), (o = e);
    return 0 <= i;
  }
  function m(t) {
    var e = {};
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    return e;
  }
  function f(t) {
    for (var e, i, s = [], r = [], o = 0; o < t.length; o++) {
      var n,
        a = _(t[o].slice(0));
      a.length < 4 ||
        (v(a)
          ? ((n = [a.slice().reverse()]), s.push(n))
          : r.push(a.slice().reverse()));
    }
    for (var l, u, h, c, p = []; r.length; ) {
      i = r.pop();
      for (var d = !1, m = s.length - 1; 0 <= m; m--)
        if (
          ((e = s[m][0]),
          (h = void 0),
          (h = y((l = e), (u = i))),
          (c = (function (t, e) {
            for (var i = !1, s = -1, r = t.length, o = r - 1; ++s < r; o = s)
              ((t[s][1] <= e[1] && e[1] < t[o][1]) ||
                (t[o][1] <= e[1] && e[1] < t[s][1])) &&
                e[0] <
                  ((t[o][0] - t[s][0]) * (e[1] - t[s][1])) /
                    (t[o][1] - t[s][1]) +
                    t[s][0] &&
                (i = !i);
            return i;
          })(l, u[0])),
          !h && c)
        ) {
          s[m].push(i), (d = !0);
          break;
        }
      d || p.push(i);
    }
    for (; p.length; ) {
      i = p.pop();
      var f = !1;
      for (m = s.length - 1; 0 <= m; m--)
        if (((e = s[m][0]), y(e, i))) {
          s[m].push(i), (f = !0);
          break;
        }
      f || s.push([i.reverse()]);
    }
    return 1 === s.length
      ? { type: 'Polygon', coordinates: s[0] }
      : { type: 'MultiPolygon', coordinates: s };
  }
  function b(t) {
    var e = [],
      i = t.slice(0),
      s = _(i.shift().slice(0));
    if (4 <= s.length) {
      v(s) || s.reverse(), e.push(s);
      for (var r = 0; r < i.length; r++) {
        var o = _(i[r].slice(0));
        4 <= o.length && (v(o) && o.reverse(), e.push(o));
      }
    }
    return e;
  }
  var x = { request: h, get: p, post: r },
    S = function t(e, i) {
      var s = {};
      if (e.features) {
        (s.type = 'FeatureCollection'), (s.features = []);
        for (var r = 0; r < e.features.length; r++)
          s.features.push(t(e.features[r], i));
      }
      if (
        ('number' == typeof e.x &&
          'number' == typeof e.y &&
          ((s.type = 'Point'),
          (s.coordinates = [e.x, e.y]),
          'number' == typeof e.z && s.coordinates.push(e.z)),
        e.points &&
          ((s.type = 'MultiPoint'), (s.coordinates = e.points.slice(0))),
        e.paths &&
          (1 === e.paths.length
            ? ((s.type = 'LineString'), (s.coordinates = e.paths[0].slice(0)))
            : ((s.type = 'MultiLineString'),
              (s.coordinates = e.paths.slice(0)))),
        e.rings && (s = f(e.rings.slice(0))),
        'number' == typeof e.xmin &&
          'number' == typeof e.ymin &&
          'number' == typeof e.xmax &&
          'number' == typeof e.ymax &&
          ((s.type = 'Polygon'),
          (s.coordinates = [
            [
              [e.xmax, e.ymax],
              [e.xmin, e.ymax],
              [e.xmin, e.ymin],
              [e.xmax, e.ymin],
              [e.xmax, e.ymax],
            ],
          ])),
        (e.geometry || e.attributes) &&
          ((s.type = 'Feature'),
          (s.geometry = e.geometry ? t(e.geometry) : null),
          (s.properties = e.attributes ? m(e.attributes) : null),
          e.attributes))
      )
        try {
          s.id = (function (t, e) {
            for (
              var i = e ? [e, 'OBJECTID', 'FID'] : ['OBJECTID', 'FID'], s = 0;
              s < i.length;
              s++
            ) {
              var r = i[s];
              if (
                r in t &&
                ('string' == typeof t[r] || 'number' == typeof t[r])
              )
                return t[r];
            }
            throw Error('No valid id attribute found');
          })(e.attributes, i);
        } catch (t) {}
      return (
        JSON.stringify(s.geometry) === JSON.stringify({}) &&
          (s.geometry = null),
        e.spatialReference &&
          e.spatialReference.wkid &&
          4326 !== e.spatialReference.wkid &&
          console.warn(
            'Object converted in non-standard crs - ' +
              JSON.stringify(e.spatialReference),
          ),
        s
      );
    },
    L = function t(e, i) {
      i = i || 'OBJECTID';
      var s,
        r = { wkid: 4326 },
        o = {};
      switch (e.type) {
        case 'Point':
          (o.x = e.coordinates[0]),
            (o.y = e.coordinates[1]),
            (o.spatialReference = r);
          break;
        case 'MultiPoint':
          (o.points = e.coordinates.slice(0)), (o.spatialReference = r);
          break;
        case 'LineString':
          (o.paths = [e.coordinates.slice(0)]), (o.spatialReference = r);
          break;
        case 'MultiLineString':
          (o.paths = e.coordinates.slice(0)), (o.spatialReference = r);
          break;
        case 'Polygon':
          (o.rings = b(e.coordinates.slice(0))), (o.spatialReference = r);
          break;
        case 'MultiPolygon':
          (o.rings = (function (t) {
            for (var e = [], i = 0; i < t.length; i++)
              for (var s = b(t[i]), r = s.length - 1; 0 <= r; r--) {
                var o = s[r].slice(0);
                e.push(o);
              }
            return e;
          })(e.coordinates.slice(0))),
            (o.spatialReference = r);
          break;
        case 'Feature':
          e.geometry && (o.geometry = t(e.geometry, i)),
            (o.attributes = e.properties ? m(e.properties) : {}),
            e.id && (o.attributes[i] = e.id);
          break;
        case 'FeatureCollection':
          for (o = [], s = 0; s < e.features.length; s++)
            o.push(t(e.features[s], i));
          break;
        case 'GeometryCollection':
          for (o = [], s = 0; s < e.geometries.length; s++)
            o.push(t(e.geometries[s], i));
      }
      return o;
    },
    A =
      '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>';
  /* @preserve
   * @terraformer/arcgis - v2.0.6 - MIT
   * Copyright (c) 2012-2020 Environmental Systems Research Institute, Inc.
   * Mon May 18 2020 14:30:35 GMT-0700 (Pacific Daylight Time)
   */
  /* Copyright (c) 2012-2019 Environmental Systems Research Institute, Inc.
   * Apache-2.0 */ function I(t, e) {
    return L(t, e);
  }
  function T(t, e) {
    return S(t, e);
  }
  function C(t) {
    if (
      'NaN' === t.xmin ||
      'NaN' === t.ymin ||
      'NaN' === t.xmax ||
      'NaN' === t.ymax
    )
      return null;
    var e = g.latLng(t.ymin, t.xmin),
      i = g.latLng(t.ymax, t.xmax);
    return g.latLngBounds(e, i);
  }
  function w(t) {
    return {
      xmin: (t = g.latLngBounds(t)).getSouthWest().lng,
      ymin: t.getSouthWest().lat,
      xmax: t.getNorthEast().lng,
      ymax: t.getNorthEast().lat,
      spatialReference: { wkid: 4326 },
    };
  }
  var R = /^(OBJECTID|FID|OID|ID)$/i;
  function P(t) {
    var e;
    if (t.objectIdFieldName) e = t.objectIdFieldName;
    else if (t.fields) {
      for (var i = 0; i <= t.fields.length - 1; i++)
        if ('esriFieldTypeOID' === t.fields[i].type) {
          e = t.fields[i].name;
          break;
        }
      if (!e)
        for (i = 0; i <= t.fields.length - 1; i++)
          if (t.fields[i].name.match(R)) {
            e = t.fields[i].name;
            break;
          }
    }
    return e;
  }
  function F(t) {
    for (var e in t.attributes) if (e.match(R)) return e;
  }
  function O(t, e) {
    var i = t.features || t.results,
      s = i && i.length,
      r = e || P(t),
      o = { type: 'FeatureCollection', features: [] };
    if (s)
      for (var n = i.length - 1; 0 <= n; n--) {
        var a = T(i[n], r || F(i[n]));
        o.features.push(a);
      }
    return o;
  }
  function M(t) {
    return '/' !== (t = g.Util.trim(t))[t.length - 1] && (t += '/'), t;
  }
  function k(t) {
    var e;
    return (
      -1 !== t.url.indexOf('?') &&
        ((t.requestParams = t.requestParams || {}),
        (e = t.url.substring(t.url.indexOf('?') + 1)),
        (t.url = t.url.split('?')[0]),
        (t.requestParams = JSON.parse(
          '{"' +
            decodeURI(e)
              .replace(/"/g, '\\"')
              .replace(/&/g, '","')
              .replace(/=/g, '":"') +
            '"}',
        ))),
      (t.url = M(t.url.split('?')[0])),
      t
    );
  }
  function U(t) {
    return /^(?!.*utility\.arcgis\.com).*\.arcgis\.com.*FeatureServer/i.test(t);
  }
  function G(t) {
    var e;
    switch (t) {
      case 'Point':
        e = 'esriGeometryPoint';
        break;
      case 'MultiPoint':
        e = 'esriGeometryMultipoint';
        break;
      case 'LineString':
      case 'MultiLineString':
        e = 'esriGeometryPolyline';
        break;
      case 'Polygon':
      case 'MultiPolygon':
        e = 'esriGeometryPolygon';
    }
    return e;
  }
  function D(t) {
    return t.getSize().x - s.attributionWidthOffset + 'px';
  }
  function q(e) {
    var t, i;
    e.attributionControl &&
      (e.attributionControl._esriAttributionLayerCount ||
        (e.attributionControl._esriAttributionLayerCount = 0),
      0 === e.attributionControl._esriAttributionLayerCount &&
        (e.attributionControl._esriAttributionAddedOnce ||
          (((t = document.createElement('style')).type = 'text/css'),
          (t.innerHTML =
            '.esri-truncated-attribution:hover {white-space: normal;}'),
          document.getElementsByTagName('head')[0].appendChild(t),
          ((i = document.createElement('style')).type = 'text/css'),
          (i.innerHTML =
            '.esri-truncated-attribution {vertical-align: -3px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;display: inline-block;transition: 0s white-space;transition-delay: 1s;max-width: ' +
            D(e) +
            ';}'),
          document.getElementsByTagName('head')[0].appendChild(i),
          e.on('resize', function (t) {
            e.attributionControl &&
              (e.attributionControl._container.style.maxWidth = D(t.target));
          }),
          (e.attributionControl._esriAttributionAddedOnce = !0)),
        e.attributionControl.setPrefix(
          A + ' | Powered by <a href="https://www.esri.com">Esri</a>',
        ),
        g.DomUtil.addClass(
          e.attributionControl._container,
          'esri-truncated-attribution:hover',
        ),
        g.DomUtil.addClass(
          e.attributionControl._container,
          'esri-truncated-attribution',
        )),
      (e.attributionControl._esriAttributionLayerCount =
        e.attributionControl._esriAttributionLayerCount + 1));
  }
  function E(t) {
    t.attributionControl &&
      (t.attributionControl._esriAttributionLayerCount &&
        1 === t.attributionControl._esriAttributionLayerCount &&
        (t.attributionControl.setPrefix(A),
        g.DomUtil.removeClass(
          t.attributionControl._container,
          'esri-truncated-attribution:hover',
        ),
        g.DomUtil.removeClass(
          t.attributionControl._container,
          'esri-truncated-attribution',
        )),
      (t.attributionControl._esriAttributionLayerCount =
        t.attributionControl._esriAttributionLayerCount - 1));
  }
  function B(t) {
    var e = { geometry: null, geometryType: null };
    return t instanceof g.LatLngBounds
      ? ((e.geometry = w(t)), (e.geometryType = 'esriGeometryEnvelope'), e)
      : (t.getLatLng && (t = t.getLatLng()),
        t instanceof g.LatLng &&
          (t = { type: 'Point', coordinates: [t.lng, t.lat] }),
        t instanceof g.GeoJSON &&
          ((t = t.getLayers()[0].feature.geometry),
          (e.geometry = I(t)),
          (e.geometryType = G(t.type))),
        t.toGeoJSON && (t = t.toGeoJSON()),
        'Feature' === t.type && (t = t.geometry),
        'Point' === t.type ||
        'LineString' === t.type ||
        'Polygon' === t.type ||
        'MultiPolygon' === t.type
          ? ((e.geometry = I(t)), (e.geometryType = G(t.type)), e)
          : void d(
              'invalid geometry passed to spatial query. Should be L.LatLng, L.LatLngBounds, L.Marker or a GeoJSON Point, Line, Polygon or MultiPolygon object',
            ));
  }
  function z(t, l) {
    a.cors &&
      h(
        t,
        {},
        g.Util.bind(function (t, e) {
          if (!t) {
            l._esriAttributions = [];
            for (var i = 0; i < e.contributors.length; i++)
              for (
                var s = e.contributors[i], r = 0;
                r < s.coverageAreas.length;
                r++
              ) {
                var o = s.coverageAreas[r],
                  n = g.latLng(o.bbox[0], o.bbox[1]),
                  a = g.latLng(o.bbox[2], o.bbox[3]);
                l._esriAttributions.push({
                  attribution: s.attribution,
                  score: o.score,
                  bounds: g.latLngBounds(n, a),
                  minZoom: o.zoomMin,
                  maxZoom: o.zoomMax,
                });
              }
            l._esriAttributions.sort(function (t, e) {
              return e.score - t.score;
            }),
              Z({ target: l });
          }
        }, this),
      );
  }
  function Z(t) {
    var e = t.target,
      i = e._esriAttributions;
    if (e && e.attributionControl) {
      var s = e.attributionControl._container.querySelector(
        '.esri-dynamic-attribution',
      );
      if (s && i) {
        for (
          var r = '',
            o = e.getBounds(),
            n = g.latLngBounds(
              o.getSouthWest().wrap(),
              o.getNorthEast().wrap(),
            ),
            a = e.getZoom(),
            l = 0;
          l < i.length;
          l++
        ) {
          var u = i[l],
            h = u.attribution;
          !r.match(h) &&
            u.bounds.intersects(n) &&
            a >= u.minZoom &&
            a <= u.maxZoom &&
            (r += ', ' + h);
        }
        (r = r.substr(2)),
          (s.innerHTML = r),
          (s.style.maxWidth = D(e)),
          e.fire('attributionupdated', { attribution: r });
      }
    }
  }
  var N = {
      warn: d,
      cleanUrl: M,
      getUrlParams: k,
      isArcgisOnline: U,
      geojsonTypeToArcGIS: G,
      responseToFeatureCollection: O,
      geojsonToArcGIS: I,
      arcgisToGeoJSON: T,
      boundsToExtent: w,
      extentToBounds: C,
      calcAttributionWidth: D,
      setEsriAttribution: q,
      _setGeometry: B,
      _getAttributionData: z,
      _updateMapAttribution: Z,
      _findIdAttributeFromFeature: F,
      _findIdAttributeFromResponse: P,
    },
    j = g.Class.extend({
      options: { proxy: !1, useCors: e },
      generateSetter: function (e, t) {
        return g.Util.bind(function (t) {
          return (this.params[e] = t), this;
        }, t);
      },
      initialize: function (t) {
        if (
          (t.request && t.options
            ? ((this._service = t), g.Util.setOptions(this, t.options))
            : (g.Util.setOptions(this, t), (this.options.url = M(t.url))),
          (this.params = g.Util.extend({}, this.params || {})),
          this.setters)
        )
          for (var e in this.setters) {
            var i = this.setters[e];
            this[e] = this.generateSetter(i, this);
          }
      },
      token: function (t) {
        return (
          this._service
            ? this._service.authenticate(t)
            : (this.params.token = t),
          this
        );
      },
      format: function (t) {
        return (this.params.returnUnformattedValues = !t), this;
      },
      request: function (t, e) {
        return (
          this.options.requestParams &&
            g.Util.extend(this.params, this.options.requestParams),
          this._service
            ? this._service.request(this.path, this.params, t, e)
            : this._request('request', this.path, this.params, t, e)
        );
      },
      _request: function (t, e, i, s, r) {
        var o = this.options.proxy
          ? this.options.proxy + '?' + this.options.url + e
          : this.options.url + e;
        return ('get' !== t && 'request' !== t) || this.options.useCors
          ? x[t](o, i, s, r)
          : x.get.JSONP(o, i, s, r);
      },
    });
  var W = j.extend({
    setters: {
      offset: 'resultOffset',
      limit: 'resultRecordCount',
      fields: 'outFields',
      precision: 'geometryPrecision',
      featureIds: 'objectIds',
      returnGeometry: 'returnGeometry',
      returnM: 'returnM',
      transform: 'datumTransformation',
      token: 'token',
    },
    path: 'query',
    params: { returnGeometry: !0, where: '1=1', outSR: 4326, outFields: '*' },
    within: function (t) {
      return (
        this._setGeometryParams(t),
        (this.params.spatialRel = 'esriSpatialRelContains'),
        this
      );
    },
    intersects: function (t) {
      return (
        this._setGeometryParams(t),
        (this.params.spatialRel = 'esriSpatialRelIntersects'),
        this
      );
    },
    contains: function (t) {
      return (
        this._setGeometryParams(t),
        (this.params.spatialRel = 'esriSpatialRelWithin'),
        this
      );
    },
    crosses: function (t) {
      return (
        this._setGeometryParams(t),
        (this.params.spatialRel = 'esriSpatialRelCrosses'),
        this
      );
    },
    touches: function (t) {
      return (
        this._setGeometryParams(t),
        (this.params.spatialRel = 'esriSpatialRelTouches'),
        this
      );
    },
    overlaps: function (t) {
      return (
        this._setGeometryParams(t),
        (this.params.spatialRel = 'esriSpatialRelOverlaps'),
        this
      );
    },
    bboxIntersects: function (t) {
      return (
        this._setGeometryParams(t),
        (this.params.spatialRel = 'esriSpatialRelEnvelopeIntersects'),
        this
      );
    },
    indexIntersects: function (t) {
      return (
        this._setGeometryParams(t),
        (this.params.spatialRel = 'esriSpatialRelIndexIntersects'),
        this
      );
    },
    nearby: function (t, e) {
      return (
        (t = g.latLng(t)),
        (this.params.geometry = [t.lng, t.lat]),
        (this.params.geometryType = 'esriGeometryPoint'),
        (this.params.spatialRel = 'esriSpatialRelIntersects'),
        (this.params.units = 'esriSRUnit_Meter'),
        (this.params.distance = e),
        (this.params.inSR = 4326),
        this
      );
    },
    where: function (t) {
      return (this.params.where = t), this;
    },
    between: function (t, e) {
      return (this.params.time = [t.valueOf(), e.valueOf()]), this;
    },
    simplify: function (t, e) {
      var i = Math.abs(t.getBounds().getWest() - t.getBounds().getEast());
      return (this.params.maxAllowableOffset = (i / t.getSize().y) * e), this;
    },
    orderBy: function (t, e) {
      return (
        (e = e || 'ASC'),
        (this.params.orderByFields = this.params.orderByFields
          ? this.params.orderByFields + ','
          : ''),
        (this.params.orderByFields += [t, e].join(' ')),
        this
      );
    },
    run: function (i, s) {
      return (
        this._cleanParams(),
        this.options.isModern ||
        (U(this.options.url) && void 0 === this.options.isModern)
          ? ((this.params.f = 'geojson'),
            this.request(function (t, e) {
              this._trapSQLerrors(t), i.call(s, t, e, e);
            }, this))
          : this.request(function (t, e) {
              this._trapSQLerrors(t), i.call(s, t, e && O(e), e);
            }, this)
      );
    },
    count: function (i, t) {
      return (
        this._cleanParams(),
        (this.params.returnCountOnly = !0),
        this.request(function (t, e) {
          i.call(this, t, e && e.count, e);
        }, t)
      );
    },
    ids: function (i, t) {
      return (
        this._cleanParams(),
        (this.params.returnIdsOnly = !0),
        this.request(function (t, e) {
          i.call(this, t, e && e.objectIds, e);
        }, t)
      );
    },
    bounds: function (i, s) {
      return (
        this._cleanParams(),
        (this.params.returnExtentOnly = !0),
        this.request(function (t, e) {
          e && e.extent && C(e.extent)
            ? i.call(s, t, C(e.extent), e)
            : ((t = { message: 'Invalid Bounds' }), i.call(s, t, null, e));
        }, s)
      );
    },
    distinct: function () {
      return (
        (this.params.returnGeometry = !1),
        (this.params.returnDistinctValues = !0),
        this
      );
    },
    pixelSize: function (t) {
      var e = g.point(t);
      return (this.params.pixelSize = [e.x, e.y]), this;
    },
    layer: function (t) {
      return (this.path = t + '/query'), this;
    },
    _trapSQLerrors: function (t) {
      t &&
        '400' === t.code &&
        d(
          'one common syntax error in query requests is encasing string values in double quotes instead of single quotes',
        );
    },
    _cleanParams: function () {
      delete this.params.returnIdsOnly,
        delete this.params.returnExtentOnly,
        delete this.params.returnCountOnly;
    },
    _setGeometryParams: function (t) {
      this.params.inSR = 4326;
      var e = B(t);
      (this.params.geometry = e.geometry),
        (this.params.geometryType = e.geometryType);
    },
  });
  function J(t) {
    return new W(t);
  }
  var V = j.extend({
    setters: {
      contains: 'contains',
      text: 'searchText',
      fields: 'searchFields',
      spatialReference: 'sr',
      sr: 'sr',
      layers: 'layers',
      returnGeometry: 'returnGeometry',
      maxAllowableOffset: 'maxAllowableOffset',
      precision: 'geometryPrecision',
      dynamicLayers: 'dynamicLayers',
      returnZ: 'returnZ',
      returnM: 'returnM',
      gdbVersion: 'gdbVersion',
      token: 'token',
    },
    path: 'find',
    params: {
      sr: 4326,
      contains: !0,
      returnGeometry: !0,
      returnZ: !0,
      returnM: !1,
    },
    layerDefs: function (t, e) {
      return (
        (this.params.layerDefs = this.params.layerDefs
          ? this.params.layerDefs + ';'
          : ''),
        (this.params.layerDefs += [t, e].join(':')),
        this
      );
    },
    simplify: function (t, e) {
      var i = Math.abs(t.getBounds().getWest() - t.getBounds().getEast());
      return (this.params.maxAllowableOffset = (i / t.getSize().y) * e), this;
    },
    run: function (i, s) {
      return this.request(function (t, e) {
        i.call(s, t, e && O(e), e);
      }, s);
    },
  });
  function Q(t) {
    return new V(t);
  }
  var K = j.extend({
    path: 'identify',
    between: function (t, e) {
      return (this.params.time = [t.valueOf(), e.valueOf()]), this;
    },
  });
  var H = K.extend({
    setters: {
      layers: 'layers',
      precision: 'geometryPrecision',
      tolerance: 'tolerance',
      returnGeometry: 'returnGeometry',
    },
    params: { sr: 4326, layers: 'all', tolerance: 3, returnGeometry: !0 },
    on: function (t) {
      var e = w(t.getBounds()),
        i = t.getSize();
      return (
        (this.params.imageDisplay = [i.x, i.y, 96]),
        (this.params.mapExtent = [e.xmin, e.ymin, e.xmax, e.ymax]),
        this
      );
    },
    at: function (t) {
      return (
        2 === t.length && (t = g.latLng(t)), this._setGeometryParams(t), this
      );
    },
    layerDef: function (t, e) {
      return (
        (this.params.layerDefs = this.params.layerDefs
          ? this.params.layerDefs + ';'
          : ''),
        (this.params.layerDefs += [t, e].join(':')),
        this
      );
    },
    simplify: function (t, e) {
      var i = Math.abs(t.getBounds().getWest() - t.getBounds().getEast());
      return (this.params.maxAllowableOffset = (i / t.getSize().y) * e), this;
    },
    run: function (r, o) {
      return this.request(function (t, e) {
        if (t) r.call(o, t, void 0, e);
        else {
          var i = O(e);
          e.results = e.results.reverse();
          for (var s = 0; s < i.features.length; s++) {
            i.features[s].layerId = e.results[s].layerId;
          }
          r.call(o, void 0, i, e);
        }
      });
    },
    _setGeometryParams: function (t) {
      var e = B(t);
      (this.params.geometry = e.geometry),
        (this.params.geometryType = e.geometryType);
    },
  });
  function X(t) {
    return new H(t);
  }
  var Y = K.extend({
    setters: {
      setMosaicRule: 'mosaicRule',
      setRenderingRule: 'renderingRule',
      setPixelSize: 'pixelSize',
      returnCatalogItems: 'returnCatalogItems',
      returnGeometry: 'returnGeometry',
    },
    params: { returnGeometry: !1 },
    at: function (t) {
      return (
        (t = g.latLng(t)),
        (this.params.geometry = JSON.stringify({
          x: t.lng,
          y: t.lat,
          spatialReference: { wkid: 4326 },
        })),
        (this.params.geometryType = 'esriGeometryPoint'),
        this
      );
    },
    getMosaicRule: function () {
      return this.params.mosaicRule;
    },
    getRenderingRule: function () {
      return this.params.renderingRule;
    },
    getPixelSize: function () {
      return this.params.pixelSize;
    },
    run: function (i, s) {
      return this.request(function (t, e) {
        i.call(s, t, e && this._responseToGeoJSON(e), e);
      }, this);
    },
    _responseToGeoJSON: function (t) {
      var e = t.location,
        i = t.catalogItems,
        s = t.catalogItemVisibilities,
        r = {
          pixel: {
            type: 'Feature',
            geometry: { type: 'Point', coordinates: [e.x, e.y] },
            crs: {
              type: 'EPSG',
              properties: { code: e.spatialReference.wkid },
            },
            properties: { OBJECTID: t.objectId, name: t.name, value: t.value },
            id: t.objectId,
          },
        };
      if (
        (t.properties &&
          t.properties.Values &&
          (r.pixel.properties.values = t.properties.Values),
        i &&
          i.features &&
          ((r.catalogItems = O(i)),
          s && s.length === r.catalogItems.features.length))
      )
        for (var o = s.length - 1; 0 <= o; o--)
          r.catalogItems.features[o].properties.catalogItemVisibility = s[o];
      return r;
    },
  });
  function $(t) {
    return new Y(t);
  }
  var tt = g.Evented.extend({
    options: { proxy: !1, useCors: e, timeout: 0 },
    initialize: function (t) {
      (t = t || {}),
        (this._requestQueue = []),
        (this._authenticating = !1),
        g.Util.setOptions(this, t),
        (this.options.url = M(this.options.url));
    },
    get: function (t, e, i, s) {
      return this._request('get', t, e, i, s);
    },
    post: function (t, e, i, s) {
      return this._request('post', t, e, i, s);
    },
    request: function (t, e, i, s) {
      return this._request('request', t, e, i, s);
    },
    metadata: function (t, e) {
      return this._request('get', '', {}, t, e);
    },
    authenticate: function (t) {
      return (
        (this._authenticating = !1),
        (this.options.token = t),
        this._runQueue(),
        this
      );
    },
    getTimeout: function () {
      return this.options.timeout;
    },
    setTimeout: function (t) {
      this.options.timeout = t;
    },
    _request: function (t, e, i, s, r) {
      this.fire(
        'requeststart',
        { url: this.options.url + e, params: i, method: t },
        !0,
      );
      var o = this._createServiceCallback(t, e, i, s, r);
      if (
        (this.options.token && (i.token = this.options.token),
        this.options.requestParams &&
          g.Util.extend(i, this.options.requestParams),
        !this._authenticating)
      ) {
        var n = this.options.proxy
          ? this.options.proxy + '?' + this.options.url + e
          : this.options.url + e;
        return ('get' !== t && 'request' !== t) || this.options.useCors
          ? x[t](n, i, o, r)
          : x.get.JSONP(n, i, o, r);
      }
      this._requestQueue.push([t, e, i, s, r]);
    },
    _createServiceCallback: function (i, s, r, o, n) {
      return g.Util.bind(function (t, e) {
        !t ||
          (499 !== t.code && 498 !== t.code) ||
          ((this._authenticating = !0),
          this._requestQueue.push([i, s, r, o, n]),
          this.fire(
            'authenticationrequired',
            { authenticate: g.Util.bind(this.authenticate, this) },
            !0,
          ),
          (t.authenticate = g.Util.bind(this.authenticate, this))),
          o.call(n, t, e),
          t
            ? this.fire(
                'requesterror',
                {
                  url: this.options.url + s,
                  params: r,
                  message: t.message,
                  code: t.code,
                  method: i,
                },
                !0,
              )
            : this.fire(
                'requestsuccess',
                {
                  url: this.options.url + s,
                  params: r,
                  response: e,
                  method: i,
                },
                !0,
              ),
          this.fire(
            'requestend',
            { url: this.options.url + s, params: r, method: i },
            !0,
          );
      }, this);
    },
    _runQueue: function () {
      for (var t = this._requestQueue.length - 1; 0 <= t; t--) {
        var e = this._requestQueue[t];
        this[e.shift()].apply(this, e);
      }
      this._requestQueue = [];
    },
  });
  var et = tt.extend({
    identify: function () {
      return X(this);
    },
    find: function () {
      return Q(this);
    },
    query: function () {
      return J(this);
    },
  });
  function it(t) {
    return new et(t);
  }
  var st = tt.extend({
    query: function () {
      return J(this);
    },
    identify: function () {
      return $(this);
    },
  });
  function rt(t) {
    return new st(t);
  }
  var ot = tt.extend({
    options: { idAttribute: 'OBJECTID' },
    query: function () {
      return J(this);
    },
    addFeature: function (t, e, i) {
      this.addFeatures(t, e, i);
    },
    addFeatures: function (t, s, r) {
      for (var e = t.features ? t.features : [t], i = e.length - 1; 0 <= i; i--)
        delete e[i].id;
      return (
        (t = I(t)),
        (t = 1 < e.length ? t : [t]),
        this.post(
          'addFeatures',
          { features: t },
          function (t, e) {
            var i =
              e && e.addResults
                ? 1 < e.addResults.length
                  ? e.addResults
                  : e.addResults[0]
                : void 0;
            s && s.call(r, t || e.addResults[0].error, i);
          },
          r,
        )
      );
    },
    updateFeature: function (t, e, i) {
      this.updateFeatures(t, e, i);
    },
    updateFeatures: function (t, s, r) {
      var e = t.features ? t.features : [t];
      return (
        (t = I(t, this.options.idAttribute)),
        (t = 1 < e.length ? t : [t]),
        this.post(
          'updateFeatures',
          { features: t },
          function (t, e) {
            var i =
              e && e.updateResults
                ? 1 < e.updateResults.length
                  ? e.updateResults
                  : e.updateResults[0]
                : void 0;
            s && s.call(r, t || e.updateResults[0].error, i);
          },
          r,
        )
      );
    },
    deleteFeature: function (t, e, i) {
      this.deleteFeatures(t, e, i);
    },
    deleteFeatures: function (t, s, r) {
      return this.post(
        'deleteFeatures',
        { objectIds: t },
        function (t, e) {
          var i =
            e && e.deleteResults
              ? 1 < e.deleteResults.length
                ? e.deleteResults
                : e.deleteResults[0]
              : void 0;
          s && s.call(r, t || e.deleteResults[0].error, i);
        },
        r,
      );
    },
  });
  function nt(t) {
    return new ot(t);
  }
  var at = 'https:' !== window.location.protocol ? 'http:' : 'https:',
    lt = g.TileLayer.extend({
      statics: {
        TILES: {
          Streets: {
            urlTemplate:
              at +
              '//{s}.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
            options: {
              minZoom: 1,
              maxZoom: 19,
              subdomains: ['server', 'services'],
              attribution: 'USGS, NOAA',
              attributionUrl:
                'https://static.arcgis.com/attribution/World_Street_Map',
            },
          },
          Topographic: {
            urlTemplate:
              at +
              '//{s}.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
            options: {
              minZoom: 1,
              maxZoom: 19,
              subdomains: ['server', 'services'],
              attribution: 'USGS, NOAA',
              attributionUrl:
                'https://static.arcgis.com/attribution/World_Topo_Map',
            },
          },
          Oceans: {
            urlTemplate:
              at +
              '//{s}.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}',
            options: {
              minZoom: 1,
              maxZoom: 16,
              subdomains: ['server', 'services'],
              attribution: 'USGS, NOAA',
              attributionUrl:
                'https://static.arcgis.com/attribution/Ocean_Basemap',
            },
          },
          OceansLabels: {
            urlTemplate:
              at +
              '//{s}.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Reference/MapServer/tile/{z}/{y}/{x}',
            options: {
              minZoom: 1,
              maxZoom: 16,
              subdomains: ['server', 'services'],
              pane: i ? 'esri-labels' : 'tilePane',
              attribution: '',
            },
          },
          NationalGeographic: {
            urlTemplate:
              at +
              '//{s}.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}',
            options: {
              minZoom: 1,
              maxZoom: 16,
              subdomains: ['server', 'services'],
              attribution:
                'National Geographic, DeLorme, HERE, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, increment P Corp.',
            },
          },
          DarkGray: {
            urlTemplate:
              at +
              '//{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}',
            options: {
              minZoom: 1,
              maxZoom: 16,
              subdomains: ['server', 'services'],
              attribution:
                'HERE, DeLorme, MapmyIndia, &copy; OpenStreetMap contributors',
            },
          },
          DarkGrayLabels: {
            urlTemplate:
              at +
              '//{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}',
            options: {
              minZoom: 1,
              maxZoom: 16,
              subdomains: ['server', 'services'],
              pane: i ? 'esri-labels' : 'tilePane',
              attribution: '',
            },
          },
          Gray: {
            urlTemplate:
              at +
              '//{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
            options: {
              minZoom: 1,
              maxZoom: 16,
              subdomains: ['server', 'services'],
              attribution:
                'HERE, DeLorme, MapmyIndia, &copy; OpenStreetMap contributors',
            },
          },
          GrayLabels: {
            urlTemplate:
              at +
              '//{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}',
            options: {
              minZoom: 1,
              maxZoom: 16,
              subdomains: ['server', 'services'],
              pane: i ? 'esri-labels' : 'tilePane',
              attribution: '',
            },
          },
          Imagery: {
            urlTemplate:
              at +
              '//{s}.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
            options: {
              minZoom: 1,
              maxZoom: 19,
              subdomains: ['server', 'services'],
              attribution:
                'DigitalGlobe, GeoEye, i-cubed, USDA, USGS, AEX, Getmapping, Aerogrid, IGN, IGP, swisstopo, and the GIS User Community',
              attributionUrl:
                'https://static.arcgis.com/attribution/World_Imagery',
            },
          },
          ImageryLabels: {
            urlTemplate:
              at +
              '//{s}.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}',
            options: {
              minZoom: 1,
              maxZoom: 19,
              subdomains: ['server', 'services'],
              pane: i ? 'esri-labels' : 'tilePane',
              attribution: '',
            },
          },
          ImageryTransportation: {
            urlTemplate:
              at +
              '//{s}.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}',
            options: {
              minZoom: 1,
              maxZoom: 19,
              subdomains: ['server', 'services'],
              pane: i ? 'esri-labels' : 'tilePane',
              attribution: '',
            },
          },
          ShadedRelief: {
            urlTemplate:
              at +
              '//{s}.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}',
            options: {
              minZoom: 1,
              maxZoom: 13,
              subdomains: ['server', 'services'],
              attribution: 'USGS',
            },
          },
          ShadedReliefLabels: {
            urlTemplate:
              at +
              '//{s}.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places_Alternate/MapServer/tile/{z}/{y}/{x}',
            options: {
              minZoom: 1,
              maxZoom: 12,
              subdomains: ['server', 'services'],
              pane: i ? 'esri-labels' : 'tilePane',
              attribution: '',
            },
          },
          Terrain: {
            urlTemplate:
              at +
              '//{s}.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}',
            options: {
              minZoom: 1,
              maxZoom: 13,
              subdomains: ['server', 'services'],
              attribution: 'USGS, NOAA',
            },
          },
          TerrainLabels: {
            urlTemplate:
              at +
              '//{s}.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer/tile/{z}/{y}/{x}',
            options: {
              minZoom: 1,
              maxZoom: 13,
              subdomains: ['server', 'services'],
              pane: i ? 'esri-labels' : 'tilePane',
              attribution: '',
            },
          },
          USATopo: {
            urlTemplate:
              at +
              '//{s}.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer/tile/{z}/{y}/{x}',
            options: {
              minZoom: 1,
              maxZoom: 15,
              subdomains: ['server', 'services'],
              attribution: 'USGS, National Geographic Society, i-cubed',
            },
          },
          ImageryClarity: {
            urlTemplate:
              at +
              '//clarity.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
            options: {
              minZoom: 1,
              maxZoom: 19,
              attribution:
                'Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community',
            },
          },
          Physical: {
            urlTemplate:
              at +
              '//{s}.arcgisonline.com/arcgis/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}',
            options: {
              minZoom: 1,
              maxZoom: 8,
              subdomains: ['server', 'services'],
              attribution: 'U.S. National Park Service',
            },
          },
          ImageryFirefly: {
            urlTemplate:
              at +
              '//fly.maptiles.arcgis.com/arcgis/rest/services/World_Imagery_Firefly/MapServer/tile/{z}/{y}/{x}',
            options: {
              minZoom: 1,
              maxZoom: 19,
              attribution:
                'Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community',
              attributionUrl:
                'https://static.arcgis.com/attribution/World_Imagery',
            },
          },
        },
      },
      initialize: function (t, e) {
        var i;
        if ('object' == typeof t && t.urlTemplate && t.options) i = t;
        else {
          if ('string' != typeof t || !lt.TILES[t])
            throw new Error(
              'L.esri.BasemapLayer: Invalid parameter. Use one of "Streets", "Topographic", "Oceans", "OceansLabels", "NationalGeographic", "Physical", "Gray", "GrayLabels", "DarkGray", "DarkGrayLabels", "Imagery", "ImageryLabels", "ImageryTransportation", "ImageryClarity", "ImageryFirefly", ShadedRelief", "ShadedReliefLabels", "Terrain", "TerrainLabels" or "USATopo"',
            );
          i = lt.TILES[t];
        }
        var s = g.Util.extend(i.options, e);
        g.Util.setOptions(this, s),
          this.options.token &&
            -1 === i.urlTemplate.indexOf('token=') &&
            (i.urlTemplate += '?token=' + this.options.token),
          this.options.proxy &&
            (i.urlTemplate = this.options.proxy + '?' + i.urlTemplate),
          g.TileLayer.prototype.initialize.call(this, i.urlTemplate, s);
      },
      onAdd: function (t) {
        q(t),
          'esri-labels' === this.options.pane && this._initPane(),
          this.options.attributionUrl &&
            z(
              (this.options.proxy ? this.options.proxy + '?' : '') +
                this.options.attributionUrl,
              t,
            ),
          t.on('moveend', Z),
          g.TileLayer.prototype.onAdd.call(this, t);
      },
      onRemove: function (t) {
        E(t), t.off('moveend', Z), g.TileLayer.prototype.onRemove.call(this, t);
      },
      _initPane: function () {
        var t;
        this._map.getPane(this.options.pane) ||
          (((t = this._map.createPane(this.options.pane)).style.pointerEvents =
            'none'),
          (t.style.zIndex = 500));
      },
      getAttribution: function () {
        var t;
        return (
          this.options.attribution &&
            (t =
              '<span class="esri-dynamic-attribution">' +
              this.options.attribution +
              '</span>'),
          t
        );
      },
    });
  var ut = g.TileLayer.extend({
    options: {
      zoomOffsetAllowance: 0.1,
      errorTileUrl:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEABAMAAACuXLVVAAAAA1BMVEUzNDVszlHHAAAAAXRSTlMAQObYZgAAAAlwSFlzAAAAAAAAAAAB6mUWpAAAADZJREFUeJztwQEBAAAAgiD/r25IQAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7waBAAABw08RwAAAAABJRU5ErkJggg==',
    },
    statics: {
      MercatorZoomLevels: {
        0: 156543.033928,
        1: 78271.5169639999,
        2: 39135.7584820001,
        3: 19567.8792409999,
        4: 9783.93962049996,
        5: 4891.96981024998,
        6: 2445.98490512499,
        7: 1222.99245256249,
        8: 611.49622628138,
        9: 305.748113140558,
        10: 152.874056570411,
        11: 76.4370282850732,
        12: 38.2185141425366,
        13: 19.1092570712683,
        14: 9.55462853563415,
        15: 4.77731426794937,
        16: 2.38865713397468,
        17: 1.19432856685505,
        18: 0.597164283559817,
        19: 0.298582141647617,
        20: 0.14929107082381,
        21: 0.07464553541191,
        22: 0.0373227677059525,
        23: 0.0186613838529763,
      },
    },
    initialize: function (t) {
      (t = k((t = g.Util.setOptions(this, t)))),
        (this.tileUrl =
          (t.proxy ? t.proxy + '?' : '') +
          t.url +
          'tile/{z}/{y}/{x}' +
          (t.requestParams && 0 < Object.keys(t.requestParams).length
            ? g.Util.getParamString(t.requestParams)
            : '')),
        -1 !== t.url.indexOf('{s}') &&
          t.subdomains &&
          (t.url = t.url.replace('{s}', t.subdomains[0])),
        (this.service = it(t)),
        this.service.addEventParent(this),
        new RegExp(/tiles.arcgis(online)?\.com/g).test(t.url) &&
          ((this.tileUrl = this.tileUrl.replace('://tiles', '://tiles{s}')),
          (t.subdomains = ['1', '2', '3', '4'])),
        this.options.token && (this.tileUrl += '?token=' + this.options.token),
        g.TileLayer.prototype.initialize.call(this, this.tileUrl, t);
    },
    getTileUrl: function (t) {
      var e = this._getZoomForUrl();
      return g.Util.template(
        this.tileUrl,
        g.Util.extend(
          {
            s: this._getSubdomain(t),
            x: t.x,
            y: t.y,
            z: this._lodMap && this._lodMap[e] ? this._lodMap[e] : e,
          },
          this.options,
        ),
      );
    },
    createTile: function (t, e) {
      var i = document.createElement('img');
      return (
        g.DomEvent.on(i, 'load', g.Util.bind(this._tileOnLoad, this, e, i)),
        g.DomEvent.on(i, 'error', g.Util.bind(this._tileOnError, this, e, i)),
        this.options.crossOrigin && (i.crossOrigin = ''),
        (i.alt = ''),
        !this._lodMap || (this._lodMap && this._lodMap[this._getZoomForUrl()])
          ? (i.src = this.getTileUrl(t))
          : this.once(
              'lodmap',
              function () {
                i.src = this.getTileUrl(t);
              },
              this,
            ),
        i
      );
    },
    onAdd: function (u) {
      q(u),
        this._lodMap ||
          this.metadata(function (t, e) {
            if (!t && e.spatialReference) {
              var i = e.spatialReference.latestWkid || e.spatialReference.wkid;
              if (
                (!this.options.attribution &&
                  u.attributionControl &&
                  e.copyrightText &&
                  ((this.options.attribution = e.copyrightText),
                  u.attributionControl.addAttribution(this.getAttribution())),
                u.options.crs !== g.CRS.EPSG3857 ||
                  (102100 !== i && 3857 !== i))
              )
                (u.options.crs &&
                  u.options.crs.code &&
                  -1 < u.options.crs.code.indexOf(i)) ||
                  d(
                    'L.esri.TiledMapLayer is using a non-mercator spatial reference. Support may be available through Proj4Leaflet http://esri.github.io/esri-leaflet/examples/non-mercator-projection.html',
                  );
              else {
                this._lodMap = {};
                for (
                  var s = e.tileInfo.lods, r = ut.MercatorZoomLevels, o = 0;
                  o < s.length;
                  o++
                ) {
                  var n = s[o];
                  for (var a in r) {
                    var l = r[a];
                    if (
                      this._withinPercentage(
                        n.resolution,
                        l,
                        this.options.zoomOffsetAllowance,
                      )
                    ) {
                      this._lodMap[a] = n.level;
                      break;
                    }
                  }
                }
                this.fire('lodmap');
              }
            }
          }, this),
        g.TileLayer.prototype.onAdd.call(this, u);
    },
    onRemove: function (t) {
      E(t);
    },
    metadata: function (t, e) {
      return this.service.metadata(t, e), this;
    },
    identify: function () {
      return this.service.identify();
    },
    find: function () {
      return this.service.find();
    },
    query: function () {
      return this.service.query();
    },
    authenticate: function (t) {
      var e = '?token=' + t;
      return (
        (this.tileUrl = this.options.token
          ? this.tileUrl.replace(/\?token=(.+)/g, e)
          : this.tileUrl + e),
        (this.options.token = t),
        this.service.authenticate(t),
        this
      );
    },
    _withinPercentage: function (t, e, i) {
      return Math.abs(t / e - 1) < i;
    },
  });
  var ht = g.ImageOverlay.extend({
      onAdd: function (t) {
        (this._topLeft = t.getPixelBounds().min),
          g.ImageOverlay.prototype.onAdd.call(this, t);
      },
      _reset: function () {
        this._map.options.crs === g.CRS.EPSG3857
          ? g.ImageOverlay.prototype._reset.call(this)
          : g.DomUtil.setPosition(
              this._image,
              this._topLeft.subtract(this._map.getPixelOrigin()),
            );
      },
    }),
    ct = g.Layer.extend({
      options: {
        opacity: 1,
        position: 'front',
        f: 'image',
        useCors: e,
        attribution: null,
        interactive: !1,
        alt: '',
      },
      onAdd: function (i) {
        q(i),
          this.options.zIndex && (this.options.position = null),
          (this._update = g.Util.throttle(
            this._update,
            this.options.updateInterval,
            this,
          )),
          i.on('moveend', this._update, this),
          this._currentImage &&
          this._currentImage._bounds.equals(this._map.getBounds())
            ? i.addLayer(this._currentImage)
            : this._currentImage &&
              (this._map.removeLayer(this._currentImage),
              (this._currentImage = null)),
          this._update(),
          this._popup &&
            (this._map.on('click', this._getPopupData, this),
            this._map.on('dblclick', this._resetPopupState, this)),
          this.metadata(function (t, e) {
            !t &&
              !this.options.attribution &&
              i.attributionControl &&
              e.copyrightText &&
              ((this.options.attribution = e.copyrightText),
              i.attributionControl.addAttribution(this.getAttribution()));
          }, this);
      },
      onRemove: function (t) {
        E(t),
          this._currentImage && this._map.removeLayer(this._currentImage),
          this._popup &&
            (this._map.off('click', this._getPopupData, this),
            this._map.off('dblclick', this._resetPopupState, this)),
          this._map.off('moveend', this._update, this);
      },
      bindPopup: function (t, e) {
        return (
          (this._shouldRenderPopup = !1),
          (this._lastClick = !1),
          (this._popup = g.popup(e)),
          (this._popupFunction = t),
          this._map &&
            (this._map.on('click', this._getPopupData, this),
            this._map.on('dblclick', this._resetPopupState, this)),
          this
        );
      },
      unbindPopup: function () {
        return (
          this._map &&
            (this._map.closePopup(this._popup),
            this._map.off('click', this._getPopupData, this),
            this._map.off('dblclick', this._resetPopupState, this)),
          (this._popup = !1),
          this
        );
      },
      bringToFront: function () {
        return (
          (this.options.position = 'front'),
          this._currentImage &&
            (this._currentImage.bringToFront(), this._setAutoZIndex(Math.max)),
          this
        );
      },
      bringToBack: function () {
        return (
          (this.options.position = 'back'),
          this._currentImage &&
            (this._currentImage.bringToBack(), this._setAutoZIndex(Math.min)),
          this
        );
      },
      setZIndex: function (t) {
        return (
          (this.options.zIndex = t),
          this._currentImage && this._currentImage.setZIndex(t),
          this
        );
      },
      _setAutoZIndex: function (t) {
        if (this._currentImage) {
          for (
            var e,
              i = this._currentImage.getPane().children,
              s = -t(-1 / 0, 1 / 0),
              r = 0,
              o = i.length;
            r < o;
            r++
          )
            (e = i[r].style.zIndex),
              i[r] !== this._currentImage._image && e && (s = t(s, +e));
          isFinite(s) &&
            ((this.options.zIndex = s + t(-1, 1)),
            this.setZIndex(this.options.zIndex));
        }
      },
      getAttribution: function () {
        return this.options.attribution;
      },
      getOpacity: function () {
        return this.options.opacity;
      },
      setOpacity: function (t) {
        return (
          (this.options.opacity = t),
          this._currentImage && this._currentImage.setOpacity(t),
          this
        );
      },
      getTimeRange: function () {
        return [this.options.from, this.options.to];
      },
      setTimeRange: function (t, e) {
        return (
          (this.options.from = t), (this.options.to = e), this._update(), this
        );
      },
      metadata: function (t, e) {
        return this.service.metadata(t, e), this;
      },
      authenticate: function (t) {
        return this.service.authenticate(t), this;
      },
      redraw: function () {
        this._update();
      },
      _renderImage: function (t, s, e) {
        if (this._map) {
          if ((e && (t = 'data:' + e + ';base64,' + t), !t)) return;
          var r = new ht(t, s, {
              opacity: 0,
              crossOrigin: this.options.withCredentials
                ? 'use-credentials'
                : this.options.useCors,
              alt: this.options.alt,
              pane: this.options.pane || this.getPane(),
              interactive: this.options.interactive,
            }).addTo(this._map),
            o = function (t) {
              var e, i;
              r.off('error', o, this),
                this._map &&
                  ((e = t.target),
                  (i = this._currentImage),
                  e._bounds.equals(s) && e._bounds.equals(this._map.getBounds())
                    ? ((this._currentImage = e),
                      'front' === this.options.position
                        ? this.bringToFront()
                        : 'back' === this.options.position &&
                          this.bringToBack(),
                      this.options.zIndex &&
                        this.setZIndex(this.options.zIndex),
                      this._map && this._currentImage._map
                        ? this._currentImage.setOpacity(this.options.opacity)
                        : this._currentImage._map.removeLayer(
                            this._currentImage,
                          ),
                      i && this._map && this._map.removeLayer(i),
                      i && i._map && i._map.removeLayer(i))
                    : this._map.removeLayer(e)),
                this.fire('load', { bounds: s });
            };
          r.once(
            'error',
            function () {
              this._map.removeLayer(r),
                this.fire('error'),
                r.off('load', o, this);
            },
            this,
          ),
            r.once('load', o, this);
        }
      },
      _update: function () {
        var t, e, i;
        this._map &&
          ((t = this._map.getZoom()),
          (e = this._map.getBounds()),
          this._animatingZoom ||
            (this._map._panTransition &&
              this._map._panTransition._inProgress) ||
            (t > this.options.maxZoom || t < this.options.minZoom
              ? this._currentImage &&
                (this._currentImage._map.removeLayer(this._currentImage),
                (this._currentImage = null))
              : ((i = this._buildExportParams()),
                g.Util.extend(i, this.options.requestParams),
                i
                  ? (this._requestExport(i, e),
                    this.fire('loading', { bounds: e }))
                  : this._currentImage &&
                    (this._currentImage._map.removeLayer(this._currentImage),
                    (this._currentImage = null)))));
      },
      _renderPopup: function (t, e, i, s) {
        var r;
        (t = g.latLng(t)),
          this._shouldRenderPopup &&
            this._lastClick.equals(t) &&
            (r = this._popupFunction(e, i, s)) &&
            this._popup.setLatLng(t).setContent(r).openOn(this._map);
      },
      _resetPopupState: function (t) {
        (this._shouldRenderPopup = !1), (this._lastClick = t.latlng);
      },
      _calculateBbox: function () {
        var t = this._map.getPixelBounds(),
          e = this._map.unproject(t.getBottomLeft()),
          i = this._map.unproject(t.getTopRight()),
          s = this._map.options.crs.project(i),
          r = this._map.options.crs.project(e),
          o = g.bounds(s, r);
        return [
          o.getBottomLeft().x,
          o.getBottomLeft().y,
          o.getTopRight().x,
          o.getTopRight().y,
        ].join(',');
      },
      _calculateImageSize: function () {
        var t = this._map.getPixelBounds(),
          e = this._map.getSize(),
          i = this._map.unproject(t.getBottomLeft()),
          s = this._map.unproject(t.getTopRight()),
          r = this._map.latLngToLayerPoint(s).y,
          o = this._map.latLngToLayerPoint(i).y;
        return (0 < r || o < e.y) && (e.y = o - r), e.x + ',' + e.y;
      },
    }),
    pt = ct.extend({
      options: {
        updateInterval: 150,
        format: 'jpgpng',
        transparent: !0,
        f: 'image',
      },
      query: function () {
        return this.service.query();
      },
      identify: function () {
        return this.service.identify();
      },
      initialize: function (t) {
        (t = k(t)),
          (this.service = rt(t)),
          this.service.addEventParent(this),
          g.Util.setOptions(this, t);
      },
      setPixelType: function (t) {
        return (this.options.pixelType = t), this._update(), this;
      },
      getPixelType: function () {
        return this.options.pixelType;
      },
      setBandIds: function (t) {
        return (
          g.Util.isArray(t)
            ? (this.options.bandIds = t.join(','))
            : (this.options.bandIds = t.toString()),
          this._update(),
          this
        );
      },
      getBandIds: function () {
        return this.options.bandIds;
      },
      setNoData: function (t, e) {
        return (
          g.Util.isArray(t)
            ? (this.options.noData = t.join(','))
            : (this.options.noData = t.toString()),
          e && (this.options.noDataInterpretation = e),
          this._update(),
          this
        );
      },
      getNoData: function () {
        return this.options.noData;
      },
      getNoDataInterpretation: function () {
        return this.options.noDataInterpretation;
      },
      setRenderingRule: function (t) {
        (this.options.renderingRule = t), this._update();
      },
      getRenderingRule: function () {
        return this.options.renderingRule;
      },
      setMosaicRule: function (t) {
        (this.options.mosaicRule = t), this._update();
      },
      getMosaicRule: function () {
        return this.options.mosaicRule;
      },
      _getPopupData: function (s) {
        var t = g.Util.bind(function (t, e, i) {
            t ||
              setTimeout(
                g.Util.bind(function () {
                  this._renderPopup(s.latlng, t, e, i);
                }, this),
                300,
              );
          }, this),
          e = this.identify().at(s.latlng);
        this.options.mosaicRule && e.setMosaicRule(this.options.mosaicRule),
          e.run(t),
          (this._shouldRenderPopup = !0),
          (this._lastClick = s.latlng);
      },
      _buildExportParams: function () {
        var t = parseInt(this._map.options.crs.code.split(':')[1], 10),
          e = {
            bbox: this._calculateBbox(),
            size: this._calculateImageSize(),
            format: this.options.format,
            transparent: this.options.transparent,
            bboxSR: t,
            imageSR: t,
          };
        return (
          this.options.from &&
            this.options.to &&
            (e.time =
              this.options.from.valueOf() + ',' + this.options.to.valueOf()),
          this.options.pixelType && (e.pixelType = this.options.pixelType),
          this.options.interpolation &&
            (e.interpolation = this.options.interpolation),
          this.options.compressionQuality &&
            (e.compressionQuality = this.options.compressionQuality),
          this.options.bandIds && (e.bandIds = this.options.bandIds),
          (0 !== this.options.noData && !this.options.noData) ||
            (e.noData = this.options.noData),
          this.options.noDataInterpretation &&
            (e.noDataInterpretation = this.options.noDataInterpretation),
          this.service.options.token && (e.token = this.service.options.token),
          this.options.renderingRule &&
            (e.renderingRule = JSON.stringify(this.options.renderingRule)),
          this.options.mosaicRule &&
            (e.mosaicRule = JSON.stringify(this.options.mosaicRule)),
          e
        );
      },
      _requestExport: function (t, i) {
        var e;
        'json' === this.options.f
          ? this.service.request(
              'exportImage',
              t,
              function (t, e) {
                t ||
                  (this.options.token &&
                    (e.href += '?token=' + this.options.token),
                  this.options.proxy &&
                    (e.href = this.options.proxy + '?' + e.href),
                  this._renderImage(e.href, i));
              },
              this,
            )
          : ((t.f = 'image'),
            (e = this.options.url + 'exportImage' + g.Util.getParamString(t)),
            this.options.proxy && (e = this.options.proxy + '?' + e),
            this._renderImage(e, i));
      },
    });
  var dt = ct.extend({
    options: {
      updateInterval: 150,
      layers: !1,
      layerDefs: !1,
      timeOptions: !1,
      format: 'png32',
      transparent: !0,
      f: 'json',
    },
    initialize: function (t) {
      (t = k(t)),
        (this.service = it(t)),
        this.service.addEventParent(this),
        g.Util.setOptions(this, t);
    },
    getDynamicLayers: function () {
      return this.options.dynamicLayers;
    },
    setDynamicLayers: function (t) {
      return (this.options.dynamicLayers = t), this._update(), this;
    },
    getLayers: function () {
      return this.options.layers;
    },
    setLayers: function (t) {
      return (this.options.layers = t), this._update(), this;
    },
    getLayerDefs: function () {
      return this.options.layerDefs;
    },
    setLayerDefs: function (t) {
      return (this.options.layerDefs = t), this._update(), this;
    },
    getTimeOptions: function () {
      return this.options.timeOptions;
    },
    setTimeOptions: function (t) {
      return (this.options.timeOptions = t), this._update(), this;
    },
    query: function () {
      return this.service.query();
    },
    identify: function () {
      return this.service.identify();
    },
    find: function () {
      return this.service.find();
    },
    _getPopupData: function (s) {
      var t = g.Util.bind(function (t, e, i) {
          t ||
            setTimeout(
              g.Util.bind(function () {
                this._renderPopup(s.latlng, t, e, i);
              }, this),
              300,
            );
        }, this),
        e = this.options.popup
          ? this.options.popup.on(this._map).at(s.latlng)
          : this.identify().on(this._map).at(s.latlng);
      if (
        (e.params.maxAllowableOffset || e.simplify(this._map, 0.5),
        (this.options.popup &&
          this.options.popup.params &&
          this.options.popup.params.layers) ||
          (this.options.layers
            ? e.layers('visible:' + this.options.layers.join(','))
            : e.layers('visible')),
        this.options.layerDefs &&
          'string' != typeof this.options.layerDefs &&
          !e.params.layerDefs)
      )
        for (var i in this.options.layerDefs)
          this.options.layerDefs.hasOwnProperty(i) &&
            e.layerDef(i, this.options.layerDefs[i]);
      e.run(t), (this._shouldRenderPopup = !0), (this._lastClick = s.latlng);
    },
    _buildExportParams: function () {
      var t = parseInt(this._map.options.crs.code.split(':')[1], 10),
        e = {
          bbox: this._calculateBbox(),
          size: this._calculateImageSize(),
          dpi: 96,
          format: this.options.format,
          transparent: this.options.transparent,
          bboxSR: t,
          imageSR: t,
        };
      if (
        (this.options.dynamicLayers &&
          (e.dynamicLayers = this.options.dynamicLayers),
        this.options.layers)
      ) {
        if (0 === this.options.layers.length) return;
        e.layers = 'show:' + this.options.layers.join(',');
      }
      return (
        this.options.layerDefs &&
          (e.layerDefs =
            'string' == typeof this.options.layerDefs
              ? this.options.layerDefs
              : JSON.stringify(this.options.layerDefs)),
        this.options.timeOptions &&
          (e.timeOptions = JSON.stringify(this.options.timeOptions)),
        this.options.from &&
          this.options.to &&
          (e.time =
            this.options.from.valueOf() + ',' + this.options.to.valueOf()),
        this.service.options.token && (e.token = this.service.options.token),
        this.options.proxy && (e.proxy = this.options.proxy),
        this.options.disableCache && (e._ts = Date.now()),
        e
      );
    },
    _requestExport: function (t, i) {
      var e;
      'json' === this.options.f
        ? this.service.request(
            'export',
            t,
            function (t, e) {
              t ||
                (this.options.token &&
                  e.href &&
                  (e.href += '?token=' + this.options.token),
                this.options.proxy &&
                  e.href &&
                  (e.href = this.options.proxy + '?' + e.href),
                e.href
                  ? this._renderImage(e.href, i)
                  : this._renderImage(e.imageData, i, e.contentType));
            },
            this,
          )
        : ((t.f = 'image'),
          (e = this.options.url + 'export' + g.Util.getParamString(t)),
          this.options.proxy && (e = this.options.proxy + '?' + e),
          this._renderImage(e, i));
    },
  });
  var mt = g.Layer.extend({
    options: {
      cellSize: 512,
      updateWhenIdle: g.Browser.mobile,
      updateInterval: 150,
      noWrap: !1,
      keepBuffer: 1.5,
    },
    initialize: function (t) {
      g.Util.setOptions(this, t);
    },
    onAdd: function (t) {
      (this._cells = {}),
        (this._activeCells = {}),
        this._resetView(),
        this._update();
    },
    onRemove: function (t) {
      this._removeAllCells(), (this._cellZoom = void 0);
    },
    isLoading: function () {
      return this._loading;
    },
    redraw: function () {
      return this._map && (this._removeAllCells(), this._update()), this;
    },
    getEvents: function () {
      var t = {
        viewprereset: this._invalidateAll,
        viewreset: this._resetView,
        zoom: this._resetView,
        moveend: this._onMoveEnd,
      };
      return (
        this.options.updateWhenIdle ||
          (this._onMove ||
            (this._onMove = g.Util.throttle(
              this._onMoveEnd,
              this.options.updateInterval,
              this,
            )),
          (t.move = this._onMove)),
        t
      );
    },
    createCell: function () {
      return document.createElement('div');
    },
    removeCell: function () {},
    reuseCell: function () {},
    cellLeave: function () {},
    cellEnter: function () {},
    getCellSize: function () {
      var t = this.options.cellSize;
      return t instanceof g.Point ? t : new g.Point(t, t);
    },
    _pruneCells: function () {
      if (this._map) {
        var t, e, i;
        for (t in this._cells) (i = this._cells[t]).retain = i.current;
        for (t in this._cells) {
          (i = this._cells[t]).current &&
            !i.active &&
            ((e = i.coords),
            this._retainParent(e.x, e.y, e.z, e.z - 5) ||
              this._retainChildren(e.x, e.y, e.z, e.z + 2));
        }
        for (t in this._cells) this._cells[t].retain || this._removeCell(t);
      }
    },
    _removeAllCells: function () {
      for (var t in this._cells) this._removeCell(t);
    },
    _invalidateAll: function () {
      this._removeAllCells(), (this._cellZoom = void 0);
    },
    _retainParent: function (t, e, i, s) {
      var r = Math.floor(t / 2),
        o = Math.floor(e / 2),
        n = i - 1,
        a = new g.Point(+r, +o);
      a.z = +n;
      var l = this._cellCoordsToKey(a),
        u = this._cells[l];
      return u && u.active
        ? (u.retain = !0)
        : (u && u.loaded && (u.retain = !0),
          s < n && this._retainParent(r, o, n, s));
    },
    _retainChildren: function (t, e, i, s) {
      for (var r = 2 * t; r < 2 * t + 2; r++)
        for (var o = 2 * e; o < 2 * e + 2; o++) {
          var n = new g.Point(r, o);
          n.z = i + 1;
          var a = this._cellCoordsToKey(n),
            l = this._cells[a];
          l && l.active
            ? (l.retain = !0)
            : (l && l.loaded && (l.retain = !0),
              i + 1 < s && this._retainChildren(r, o, i + 1, s));
        }
    },
    _resetView: function (t) {
      var e = t && (t.pinch || t.flyTo);
      e || this._setView(this._map.getCenter(), this._map.getZoom(), e, e);
    },
    _setView: function (t, e, i, s) {
      var r = Math.round(e);
      s ||
        ((this._cellZoom = r),
        this._abortLoading && this._abortLoading(),
        this._resetGrid(),
        void 0 !== r && this._update(t),
        i || this._pruneCells(),
        (this._noPrune = !!i));
    },
    _resetGrid: function () {
      var t = this._map,
        e = t.options.crs,
        i = (this._cellSize = this.getCellSize()),
        s = this._cellZoom,
        r = this._map.getPixelWorldBounds(this._cellZoom);
      r && (this._globalCellRange = this._pxBoundsToCellRange(r)),
        (this._wrapX = e.wrapLng &&
          !this.options.noWrap && [
            Math.floor(t.project([0, e.wrapLng[0]], s).x / i.x),
            Math.ceil(t.project([0, e.wrapLng[1]], s).x / i.y),
          ]),
        (this._wrapY = e.wrapLat &&
          !this.options.noWrap && [
            Math.floor(t.project([e.wrapLat[0], 0], s).y / i.x),
            Math.ceil(t.project([e.wrapLat[1], 0], s).y / i.y),
          ]);
    },
    _onMoveEnd: function (t) {
      (t && (t.pinch || t.flyTo)) ||
        !this._map ||
        this._map._animatingZoom ||
        this._update();
    },
    _getCelldPixelBounds: function (t) {
      var e = this._map,
        i = e._animatingZoom
          ? Math.max(e._animateToZoom, e.getZoom())
          : e.getZoom(),
        s = e.getZoomScale(i, this._cellZoom),
        r = e.project(t, this._cellZoom).floor(),
        o = e.getSize().divideBy(2 * s);
      return new g.Bounds(r.subtract(o), r.add(o));
    },
    _update: function (t) {
      var e = this._map;
      if (e) {
        var i = Math.round(e.getZoom());
        void 0 === t && (t = e.getCenter());
        var s = this._getCelldPixelBounds(t),
          r = this._pxBoundsToCellRange(s),
          o = r.getCenter(),
          n = [],
          a = this.options.keepBuffer,
          l = new g.Bounds(
            r.getBottomLeft().subtract([a, -a]),
            r.getTopRight().add([a, -a]),
          );
        if (
          !(
            isFinite(r.min.x) &&
            isFinite(r.min.y) &&
            isFinite(r.max.x) &&
            isFinite(r.max.y)
          )
        )
          throw new Error('Attempted to load an infinite number of cells');
        for (var u in this._cells) {
          var h = this._cells[u].coords;
          (h.z === this._cellZoom && l.contains(new g.Point(h.x, h.y))) ||
            (this._cells[u].current = !1);
        }
        if (1 < Math.abs(i - this._cellZoom)) this._setView(t, i);
        else {
          for (var c = r.min.y; c <= r.max.y; c++)
            for (var p = r.min.x; p <= r.max.x; p++) {
              var d,
                m = new g.Point(p, c);
              (m.z = this._cellZoom),
                this._isValidCell(m) &&
                  ((d = this._cells[this._cellCoordsToKey(m)])
                    ? (d.current = !0)
                    : n.push(m));
            }
          if (
            (n.sort(function (t, e) {
              return t.distanceTo(o) - e.distanceTo(o);
            }),
            0 !== n.length)
          )
            for (
              this._loading || (this._loading = !0), p = 0;
              p < n.length;
              p++
            ) {
              var f = this._cellCoordsToKey(n[p]),
                y = this._keyToCellCoords(f);
              this._activeCells[y]
                ? this._reuseCell(n[p])
                : this._createCell(n[p]);
            }
        }
      }
    },
    _isValidCell: function (t) {
      var e = this._map.options.crs;
      if (!e.infinite) {
        var i = this._globalCellRange;
        if (
          (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x)) ||
          (!e.wrapLat && (t.y < i.min.y || t.y > i.max.y))
        )
          return !1;
      }
      if (!this.options.bounds) return !0;
      var s = this._cellCoordsToBounds(t);
      return g.toLatLngBounds(this.options.bounds).overlaps(s);
    },
    _keyToBounds: function (t) {
      return this._cellCoordsToBounds(this._keyToCellCoords(t));
    },
    _cellCoordsToNwSe: function (t) {
      var e = this._map,
        i = this.getCellSize(),
        s = t.scaleBy(i),
        r = s.add(i);
      return [e.unproject(s, t.z), e.unproject(r, t.z)];
    },
    _cellCoordsToBounds: function (t) {
      var e = this._cellCoordsToNwSe(t),
        i = new g.LatLngBounds(e[0], e[1]);
      return this.options.noWrap || (i = this._map.wrapLatLngBounds(i)), i;
    },
    _cellCoordsToKey: function (t) {
      return t.x + ':' + t.y + ':' + t.z;
    },
    _keyToCellCoords: function (t) {
      var e = t.split(':'),
        i = new g.Point(+e[0], +e[1]);
      return (i.z = +e[2]), i;
    },
    _removeCell: function (t) {
      var e,
        i,
        s,
        r = this._cells[t];
      r &&
        ((e = this._keyToCellCoords(t)),
        (i = this._wrapCoords(e)),
        (s = this._cellCoordsToBounds(this._wrapCoords(e))),
        (r.current = !1),
        delete this._cells[t],
        (this._activeCells[t] = r),
        this.cellLeave(s, i, t),
        this.fire('cellleave', { key: t, coords: i, bounds: s }));
    },
    _reuseCell: function (t) {
      var e = this._cellCoordsToKey(t);
      (this._cells[e] = this._activeCells[e]), (this._cells[e].current = !0);
      var i = this._wrapCoords(t),
        s = this._cellCoordsToBounds(this._wrapCoords(t));
      this.cellEnter(s, i, e),
        this.fire('cellenter', { key: e, coords: i, bounds: s });
    },
    _createCell: function (t) {
      var e = this._cellCoordsToKey(t),
        i = this._wrapCoords(t),
        s = this._cellCoordsToBounds(this._wrapCoords(t));
      this.createCell(s, i, e),
        this.fire('cellcreate', { key: e, coords: i, bounds: s }),
        (this._cells[e] = { coords: t, current: !0 }),
        g.Util.requestAnimFrame(this._pruneCells, this);
    },
    _cellReady: function (t, e, i) {
      var s = this._cellCoordsToKey(t);
      (i = this._cells[s]) && ((i.loaded = +new Date()), (i.active = !0));
    },
    _getCellPos: function (t) {
      return t.scaleBy(this.getCellSize());
    },
    _wrapCoords: function (t) {
      var e = new g.Point(
        this._wrapX ? g.Util.wrapNum(t.x, this._wrapX) : t.x,
        this._wrapY ? g.Util.wrapNum(t.y, this._wrapY) : t.y,
      );
      return (e.z = t.z), e;
    },
    _pxBoundsToCellRange: function (t) {
      var e = this.getCellSize();
      return new g.Bounds(
        t.min.unscaleBy(e).floor(),
        t.max.unscaleBy(e).ceil().subtract([1, 1]),
      );
    },
  });
  function ft(t) {
    this.values = [].concat(t || []);
  }
  (ft.prototype.query = function (t) {
    var e = this.getIndex(t);
    return this.values[e];
  }),
    (ft.prototype.getIndex = function (t) {
      this.dirty && this.sort();
      for (var e, i, s = 0, r = this.values.length - 1; s <= r; )
        if (
          ((e = ((s + r) / 2) | 0),
          +(i = this.values[Math.round(e)]).value < +t)
        )
          s = 1 + e;
        else {
          if (!(+i.value > +t)) return e;
          r = e - 1;
        }
      return Math.abs(~r);
    }),
    (ft.prototype.between = function (t, e) {
      var i = this.getIndex(t),
        s = this.getIndex(e);
      if (0 === i && 0 === s) return [];
      for (; this.values[i - 1] && this.values[i - 1].value === t; ) i--;
      for (; this.values[s + 1] && this.values[s + 1].value === e; ) s++;
      return (
        this.values[s] &&
          this.values[s].value === e &&
          this.values[s + 1] &&
          s++,
        this.values.slice(i, s)
      );
    }),
    (ft.prototype.insert = function (t) {
      return this.values.splice(this.getIndex(t.value), 0, t), this;
    }),
    (ft.prototype.bulkAdd = function (t, e) {
      return (
        (this.values = this.values.concat([].concat(t || []))),
        e ? this.sort() : (this.dirty = !0),
        this
      );
    }),
    (ft.prototype.sort = function () {
      return (
        this.values
          .sort(function (t, e) {
            return e.value - t.value;
          })
          .reverse(),
        (this.dirty = !1),
        this
      );
    });
  var yt = mt.extend({
      options: {
        attribution: null,
        where: '1=1',
        fields: ['*'],
        from: !1,
        to: !1,
        timeField: !1,
        timeFilterMode: 'server',
        simplifyFactor: 0,
        precision: 6,
        fetchAllFeatures: !1,
      },
      initialize: function (t) {
        if (
          (mt.prototype.initialize.call(this, t),
          (t = k(t)),
          (t = g.Util.setOptions(this, t)),
          (this.service = nt(t)),
          this.service.addEventParent(this),
          '*' !== this.options.fields[0])
        ) {
          for (var e = !1, i = 0; i < this.options.fields.length; i++)
            this.options.fields[i].match(/^(OBJECTID|FID|OID|ID)$/i) &&
              (e = !0);
          !1 === e &&
            d(
              'no known esriFieldTypeOID field detected in fields Array.  Please add an attribute field containing unique IDs to ensure the layer can be drawn correctly.',
            );
        }
        this.options.timeField.start && this.options.timeField.end
          ? ((this._startTimeIndex = new ft()), (this._endTimeIndex = new ft()))
          : this.options.timeField && (this._timeIndex = new ft()),
          (this._cache = {}),
          (this._currentSnapshot = []),
          (this._activeRequests = 0);
      },
      onAdd: function (r) {
        return (
          q(r),
          this.service.metadata(function (t, e) {
            var i, s;
            t ||
              ((i = e.supportedQueryFormats),
              ((s = !1) !== this.service.options.isModern &&
                !this.options.fetchAllFeatures) ||
                (s = !0),
              !s &&
                i &&
                -1 !== i.indexOf('geoJSON') &&
                (this.service.options.isModern = !0),
              e.objectIdField &&
                (this.service.options.idAttribute = e.objectIdField),
              !this.options.attribution &&
                r.attributionControl &&
                e.copyrightText &&
                ((this.options.attribution = e.copyrightText),
                r.attributionControl.addAttribution(this.getAttribution())));
          }, this),
          r.on('zoomend', this._handleZoomChange, this),
          mt.prototype.onAdd.call(this, r)
        );
      },
      onRemove: function (t) {
        return (
          E(t),
          t.off('zoomend', this._handleZoomChange, this),
          mt.prototype.onRemove.call(this, t)
        );
      },
      getAttribution: function () {
        return this.options.attribution;
      },
      createCell: function (t, e) {
        this._visibleZoom() && this._requestFeatures(t, e);
      },
      _requestFeatures: function (s, r, o, n) {
        this._activeRequests++, (n = n || 0);
        var a = this.options.where;
        return (
          1 === this._activeRequests && this.fire('loading', { bounds: s }, !0),
          this._buildQuery(s, n).run(function (t, e, i) {
            i && i.exceededTransferLimit && this.fire('drawlimitexceeded'),
              this.options.where === a &&
                (!t &&
                  e &&
                  e.features.length &&
                  g.Util.requestAnimFrame(
                    g.Util.bind(function () {
                      this._addFeatures(e.features, r),
                        this._postProcessFeatures(s);
                    }, this),
                  ),
                t || !e || e.features.length || this._postProcessFeatures(s),
                t && this._postProcessFeatures(s),
                o && o.call(this, t, e),
                i &&
                  (i.exceededTransferLimit ||
                    (i.properties && i.properties.exceededTransferLimit)) &&
                  this.options.fetchAllFeatures &&
                  this._requestFeatures(s, r, o, n + e.features.length));
          }, this)
        );
      },
      _postProcessFeatures: function (t) {
        this._activeRequests--,
          this._activeRequests <= 0 && this.fire('load', { bounds: t });
      },
      _cacheKey: function (t) {
        return t.z + ':' + t.x + ':' + t.y;
      },
      _addFeatures: function (t, e) {
        var i;
        e && ((i = this._cacheKey(e)), (this._cache[i] = this._cache[i] || []));
        for (var s = t.length - 1; 0 <= s; s--) {
          var r = t[s].id;
          -1 === this._currentSnapshot.indexOf(r) &&
            this._currentSnapshot.push(r),
            void 0 !== i &&
              -1 === this._cache[i].indexOf(r) &&
              this._cache[i].push(r);
        }
        this.options.timeField && this._buildTimeIndexes(t),
          this.createLayers(t);
      },
      _buildQuery: function (t, e) {
        var i = this.service
          .query()
          .intersects(t)
          .where(this.options.where)
          .fields(this.options.fields)
          .precision(this.options.precision);
        return (
          this.options.fetchAllFeatures &&
            !isNaN(parseInt(e)) &&
            (i = i.offset(e)),
          (i.params.resultType = 'tile'),
          this.options.requestParams &&
            g.Util.extend(i.params, this.options.requestParams),
          this.options.simplifyFactor &&
            i.simplify(this._map, this.options.simplifyFactor),
          'server' === this.options.timeFilterMode &&
            this.options.from &&
            this.options.to &&
            i.between(this.options.from, this.options.to),
          i
        );
      },
      setWhere: function (s, r, o) {
        this.options.where = s && s.length ? s : '1=1';
        for (
          var n = [],
            a = [],
            l = 0,
            u = null,
            t = g.Util.bind(function (t, e) {
              if ((t && (u = t), e))
                for (var i = e.features.length - 1; 0 <= i; i--)
                  a.push(e.features[i].id);
              --l <= 0 &&
                this._visibleZoom() &&
                s === this.options.where &&
                ((this._currentSnapshot = a),
                g.Util.requestAnimFrame(
                  g.Util.bind(function () {
                    this.removeLayers(n), this.addLayers(a), r && r.call(o, u);
                  }, this),
                ));
            }, this),
            e = this._currentSnapshot.length - 1;
          0 <= e;
          e--
        )
          n.push(this._currentSnapshot[e]);
        for (var i in ((this._cache = {}), this._cells)) {
          l++;
          var h = this._keyToCellCoords(i),
            c = this._cellCoordsToBounds(h);
          this._requestFeatures(c, h, t);
        }
        return this;
      },
      getWhere: function () {
        return this.options.where;
      },
      getTimeRange: function () {
        return [this.options.from, this.options.to];
      },
      setTimeRange: function (e, i, s, r) {
        var o = this.options.from,
          n = this.options.to,
          a = 0,
          l = null,
          t = g.Util.bind(function (t) {
            t && (l = t),
              this._filterExistingFeatures(o, n, e, i),
              a--,
              s && a <= 0 && s.call(r, l);
          }, this);
        if (
          ((this.options.from = e),
          (this.options.to = i),
          this._filterExistingFeatures(o, n, e, i),
          'server' === this.options.timeFilterMode)
        )
          for (var u in this._cells) {
            a++;
            var h = this._keyToCellCoords(u),
              c = this._cellCoordsToBounds(h);
            this._requestFeatures(c, h, t);
          }
        return this;
      },
      refresh: function () {
        this.setWhere(this.options.where);
      },
      _filterExistingFeatures: function (t, e, i, s) {
        var r =
            t && e ? this._getFeaturesInTimeRange(t, e) : this._currentSnapshot,
          o = this._getFeaturesInTimeRange(i, s);
        if (o.indexOf)
          for (var n = 0; n < o.length; n++) {
            var a = r.indexOf(o[n]);
            0 <= a && r.splice(a, 1);
          }
        g.Util.requestAnimFrame(
          g.Util.bind(function () {
            this.removeLayers(r), this.addLayers(o);
          }, this),
        );
      },
      _getFeaturesInTimeRange: function (t, e) {
        var i = [];
        if (this.options.timeField.start && this.options.timeField.end)
          var s = this._startTimeIndex.between(t, e),
            r = this._endTimeIndex.between(t, e),
            o = s.concat(r);
        else {
          if (!this._timeIndex)
            return (
              d(
                'You must set timeField in the layer constructor in order to manipulate the start and end time filter.',
              ),
              []
            );
          o = this._timeIndex.between(t, e);
        }
        for (var n = o.length - 1; 0 <= n; n--) i.push(o[n].id);
        return i;
      },
      _buildTimeIndexes: function (t) {
        var e;
        if (this.options.timeField.start && this.options.timeField.end) {
          for (var i = [], s = [], r = t.length - 1; 0 <= r; r--)
            (e = t[r]),
              i.push({
                id: e.id,
                value: new Date(e.properties[this.options.timeField.start]),
              }),
              s.push({
                id: e.id,
                value: new Date(e.properties[this.options.timeField.end]),
              });
          this._startTimeIndex.bulkAdd(i), this._endTimeIndex.bulkAdd(s);
        } else {
          var o = [];
          for (r = t.length - 1; 0 <= r; r--)
            (e = t[r]),
              o.push({
                id: e.id,
                value: new Date(e.properties[this.options.timeField]),
              });
          this._timeIndex.bulkAdd(o);
        }
      },
      _featureWithinTimeRange: function (t) {
        if (!this.options.from || !this.options.to) return !0;
        var e = +this.options.from.valueOf(),
          i = +this.options.to.valueOf();
        if ('string' == typeof this.options.timeField) {
          var s = +t.properties[this.options.timeField];
          return e <= s && s <= i;
        }
        if (this.options.timeField.start && this.options.timeField.end) {
          var r = +t.properties[this.options.timeField.start],
            o = +t.properties[this.options.timeField.end];
          return (e <= r && r <= i) || (e <= o && o <= i) || (r <= e && i <= o);
        }
      },
      _visibleZoom: function () {
        if (!this._map) return !1;
        var t = this._map.getZoom();
        return !(t > this.options.maxZoom || t < this.options.minZoom);
      },
      _handleZoomChange: function () {
        if (this._visibleZoom())
          for (var t in this._cells) {
            var e = this._cells[t].coords,
              i = this._cacheKey(e);
            this._cache[i] && this.addLayers(this._cache[i]);
          }
        else this.removeLayers(this._currentSnapshot);
      },
      authenticate: function (t) {
        return this.service.authenticate(t), this;
      },
      metadata: function (t, e) {
        return this.service.metadata(t, e), this;
      },
      query: function () {
        return this.service.query();
      },
      _getMetadata: function (i) {
        this._metadata
          ? i(void 0, this._metadata)
          : this.metadata(
              g.Util.bind(function (t, e) {
                (this._metadata = e), i(t, this._metadata);
              }, this),
            );
      },
      addFeature: function (t, e, i) {
        this.addFeatures(t, e, i);
      },
      addFeatures: function (e, o, n) {
        this._getMetadata(
          g.Util.bind(function (t, s) {
            var r;
            t
              ? o && o.call(this, t, null)
              : ((r = e.features ? e.features : [e]),
                this.service.addFeatures(
                  e,
                  g.Util.bind(function (t, e) {
                    if (!t) {
                      for (var i = r.length - 1; 0 <= i; i--)
                        (r[i].properties[s.objectIdField] =
                          1 < r.length ? e[i].objectId : e.objectId),
                          (r[i].id = 1 < r.length ? e[i].objectId : e.objectId);
                      this._addFeatures(r);
                    }
                    o && o.call(n, t, e);
                  }, this),
                ));
          }, this),
        );
      },
      updateFeature: function (t, e, i) {
        this.updateFeatures(t, e, i);
      },
      updateFeatures: function (t, s, r) {
        var o = t.features ? t.features : [t];
        this.service.updateFeatures(
          t,
          function (t, e) {
            if (!t) {
              for (var i = o.length - 1; 0 <= i; i--)
                this.removeLayers([o[i].id], !0);
              this._addFeatures(o);
            }
            s && s.call(r, t, e);
          },
          this,
        );
      },
      deleteFeature: function (t, e, i) {
        this.deleteFeatures(t, e, i);
      },
      deleteFeatures: function (t, r, o) {
        return this.service.deleteFeatures(
          t,
          function (t, e) {
            var i = e.length ? e : [e];
            if (!t && 0 < i.length)
              for (var s = i.length - 1; 0 <= s; s--)
                this.removeLayers([i[s].objectId], !0);
            r && r.call(o, t, e);
          },
          this,
        );
      },
    }),
    gt = yt.extend({
      options: { cacheLayers: !0 },
      initialize: function (t) {
        yt.prototype.initialize.call(this, t),
          (this._originalStyle = this.options.style),
          (this._layers = {});
      },
      onRemove: function (t) {
        for (var e in this._layers)
          t.removeLayer(this._layers[e]),
            this.fire(
              'removefeature',
              { feature: this._layers[e].feature, permanent: !1 },
              !0,
            );
        return yt.prototype.onRemove.call(this, t);
      },
      createNewLayer: function (t) {
        var e = g.GeoJSON.geometryToLayer(t, this.options);
        return e && (e.defaultOptions = e.options), e;
      },
      _updateLayer: function (t, e) {
        var i = [],
          s = this.options.coordsToLatLng || g.GeoJSON.coordsToLatLng;
        switch (
          (e.properties && (t.feature.properties = e.properties),
          e.geometry.type)
        ) {
          case 'Point':
            (i = g.GeoJSON.coordsToLatLng(e.geometry.coordinates)),
              t.setLatLng(i);
            break;
          case 'LineString':
            (i = g.GeoJSON.coordsToLatLngs(e.geometry.coordinates, 0, s)),
              t.setLatLngs(i);
            break;
          case 'MultiLineString':
          case 'Polygon':
            (i = g.GeoJSON.coordsToLatLngs(e.geometry.coordinates, 1, s)),
              t.setLatLngs(i);
            break;
          case 'MultiPolygon':
            (i = g.GeoJSON.coordsToLatLngs(e.geometry.coordinates, 2, s)),
              t.setLatLngs(i);
        }
      },
      createLayers: function (t) {
        for (var e = t.length - 1; 0 <= e; e--) {
          var i,
            s = t[e],
            r = this._layers[s.id];
          !this._visibleZoom() ||
            !r ||
            this._map.hasLayer(r) ||
            (this.options.timeField && !this._featureWithinTimeRange(s)) ||
            (this._map.addLayer(r),
            this.fire('addfeature', { feature: r.feature }, !0)),
            r &&
              0 < this.options.simplifyFactor &&
              (r.setLatLngs || r.setLatLng) &&
              this._updateLayer(r, s),
            r ||
              ((i = this.createNewLayer(s))
                ? ((i.feature = s),
                  i.addEventParent(this),
                  this.options.onEachFeature &&
                    this.options.onEachFeature(i.feature, i),
                  (this._layers[i.feature.id] = i),
                  this.setFeatureStyle(i.feature.id, this.options.style),
                  this.fire('createfeature', { feature: i.feature }, !0),
                  this._visibleZoom() &&
                    (!this.options.timeField ||
                      (this.options.timeField &&
                        this._featureWithinTimeRange(s))) &&
                    this._map.addLayer(i))
                : d('invalid GeoJSON encountered'));
        }
      },
      addLayers: function (t) {
        for (var e = t.length - 1; 0 <= e; e--) {
          var i = this._layers[t[e]];
          !i ||
            (this.options.timeField &&
              !this._featureWithinTimeRange(i.feature)) ||
            this._map.addLayer(i);
        }
      },
      removeLayers: function (t, e) {
        for (var i = t.length - 1; 0 <= i; i--) {
          var s = t[i],
            r = this._layers[s];
          r &&
            (this.fire(
              'removefeature',
              { feature: r.feature, permanent: e },
              !0,
            ),
            this._map.removeLayer(r)),
            r && e && delete this._layers[s];
        }
      },
      cellEnter: function (t, s) {
        this._visibleZoom() &&
          !this._zooming &&
          this._map &&
          g.Util.requestAnimFrame(
            g.Util.bind(function () {
              var t = this._cacheKey(s),
                e = this._cellCoordsToKey(s),
                i = this._cache[t];
              this._activeCells[e] && i && this.addLayers(i);
            }, this),
          );
      },
      cellLeave: function (t, a) {
        this._zooming ||
          g.Util.requestAnimFrame(
            g.Util.bind(function () {
              if (this._map) {
                var t = this._cacheKey(a),
                  e = this._cellCoordsToKey(a),
                  i = this._cache[t],
                  s = this._map.getBounds();
                if (!this._activeCells[e] && i) {
                  for (var r = !0, o = 0; o < i.length; o++) {
                    var n = this._layers[i[o]];
                    n && n.getBounds && s.intersects(n.getBounds()) && (r = !1);
                  }
                  r && this.removeLayers(i, !this.options.cacheLayers),
                    !this.options.cacheLayers &&
                      r &&
                      (delete this._cache[t],
                      delete this._cells[e],
                      delete this._activeCells[e]);
                }
              }
            }, this),
          );
      },
      resetStyle: function () {
        return (
          (this.options.style = this._originalStyle),
          this.eachFeature(function (t) {
            this.resetFeatureStyle(t.feature.id);
          }, this),
          this
        );
      },
      setStyle: function (e) {
        return (
          (this.options.style = e),
          this.eachFeature(function (t) {
            this.setFeatureStyle(t.feature.id, e);
          }, this),
          this
        );
      },
      resetFeatureStyle: function (t) {
        var e = this._layers[t],
          i = this._originalStyle || g.Path.prototype.options;
        return (
          e &&
            (g.Util.extend(e.options, e.defaultOptions),
            this.setFeatureStyle(t, i)),
          this
        );
      },
      setFeatureStyle: function (t, e) {
        var i = this._layers[t];
        return (
          'function' == typeof e && (e = e(i.feature)),
          i.setStyle && i.setStyle(e),
          this
        );
      },
      eachActiveFeature: function (t, e) {
        if (this._map) {
          var i = this._map.getBounds();
          for (var s in this._layers)
            -1 !== this._currentSnapshot.indexOf(this._layers[s].feature.id) &&
              (('function' == typeof this._layers[s].getLatLng &&
                i.contains(this._layers[s].getLatLng())) ||
                ('function' == typeof this._layers[s].getBounds &&
                  i.intersects(this._layers[s].getBounds()))) &&
              t.call(e, this._layers[s]);
        }
        return this;
      },
      eachFeature: function (t, e) {
        for (var i in this._layers) t.call(e, this._layers[i]);
        return this;
      },
      getFeature: function (t) {
        return this._layers[t];
      },
      bringToBack: function () {
        this.eachFeature(function (t) {
          t.bringToBack && t.bringToBack();
        });
      },
      bringToFront: function () {
        this.eachFeature(function (t) {
          t.bringToFront && t.bringToFront();
        });
      },
      redraw: function (t) {
        return t && this._redraw(t), this;
      },
      _redraw: function (t) {
        var e,
          i,
          s = this._layers[t],
          r = s.feature;
        s &&
          s.setIcon &&
          this.options.pointToLayer &&
          this.options.pointToLayer &&
          ((e = this.options.pointToLayer(
            r,
            g.latLng(r.geometry.coordinates[1], r.geometry.coordinates[0]),
          ).options.icon),
          s.setIcon(e)),
          s &&
            s.setStyle &&
            this.options.pointToLayer &&
            ((i = this.options.pointToLayer(
              r,
              g.latLng(r.geometry.coordinates[1], r.geometry.coordinates[0]),
            ).options),
            this.setFeatureStyle(r.id, i)),
          s && s.setStyle && this.options.style && this.resetStyle(r.id);
      },
    });
  (t.BasemapLayer = lt),
    (t.DynamicMapLayer = dt),
    (t.FeatureLayer = gt),
    (t.FeatureLayerService = ot),
    (t.FeatureManager = yt),
    (t.Find = V),
    (t.Identify = K),
    (t.IdentifyFeatures = H),
    (t.IdentifyImage = Y),
    (t.ImageMapLayer = pt),
    (t.ImageService = st),
    (t.MapService = et),
    (t.Query = W),
    (t.RasterLayer = ct),
    (t.Service = tt),
    (t.Support = a),
    (t.Task = j),
    (t.TiledMapLayer = ut),
    (t.Util = N),
    (t.VERSION = '2.5.3'),
    (t.basemapLayer = function (t, e) {
      return new lt(t, e);
    }),
    (t.dynamicMapLayer = function (t, e) {
      return new dt(t, e);
    }),
    (t.featureLayer = function (t) {
      return new gt(t);
    }),
    (t.featureLayerService = nt),
    (t.find = Q),
    (t.get = p),
    (t.identify = function (t) {
      return new K(t);
    }),
    (t.identifyFeatures = X),
    (t.identifyImage = $),
    (t.imageMapLayer = function (t, e) {
      return new pt(t, e);
    }),
    (t.imageService = rt),
    (t.mapService = it),
    (t.options = s),
    (t.post = r),
    (t.query = J),
    (t.request = h),
    (t.service = function (t) {
      return (t = k(t)), new tt(t);
    }),
    (t.task = function (t) {
      return (t = k(t)), new j(t);
    }),
    (t.tiledMapLayer = function (t, e) {
      return new ut(t, e);
    }),
    Object.defineProperty(t, '__esModule', { value: !0 });
});
//# sourceMappingURL=esri-leaflet.js.map

/* esri-leaflet-geocoder - v2.3.4 - Tue Dec 29 2020 16:04:33 GMT-0600 (Central Standard Time)
 * Copyright (c) 2020 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports, require('leaflet'), require('esri-leaflet'))
    : 'function' == typeof define && define.amd
    ? define(['exports', 'leaflet', 'esri-leaflet'], t)
    : t(
        (((e = e || self).L = e.L || {}),
        (e.L.esri = e.L.esri || {}),
        (e.L.esri.Geocoding = {})),
        e.L,
        e.L.esri,
      );
})(this, function (e, h, r) {
  'use strict';
  var t =
      'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/',
    s = r.Task.extend({
      path: 'findAddressCandidates',
      params: { outSr: 4326, forStorage: !1, outFields: '*', maxLocations: 20 },
      setters: {
        address: 'address',
        neighborhood: 'neighborhood',
        city: 'city',
        subregion: 'subregion',
        region: 'region',
        postal: 'postal',
        country: 'country',
        text: 'singleLine',
        category: 'category',
        token: 'token',
        key: 'magicKey',
        fields: 'outFields',
        forStorage: 'forStorage',
        maxLocations: 'maxLocations',
        countries: 'sourceCountry',
      },
      initialize: function (e) {
        ((e = e || {}).url = e.url || t),
          r.Task.prototype.initialize.call(this, e);
      },
      within: function (e) {
        return (
          (e = h.latLngBounds(e)),
          (this.params.searchExtent = r.Util.boundsToExtent(e)),
          this
        );
      },
      nearby: function (e, t) {
        var s = h.latLng(e);
        return (
          (this.params.location = s.lng + ',' + s.lat),
          t && (this.params.distance = Math.min(Math.max(t, 2e3), 5e4)),
          this
        );
      },
      run: function (o, r) {
        return (
          this.options.customParam &&
            ((this.params[this.options.customParam] = this.params.singleLine),
            delete this.params.singleLine),
          this.request(function (e, t) {
            var s = this._processGeocoderResponse,
              i = e ? void 0 : s(t);
            o.call(r, e, { results: i }, t);
          }, this)
        );
      },
      _processGeocoderResponse: function (e) {
        for (var t = [], s = 0; s < e.candidates.length; s++) {
          var i,
            o = e.candidates[s];
          o.extent && (i = r.Util.extentToBounds(o.extent)),
            t.push({
              text: o.address,
              bounds: i,
              score: o.score,
              latlng: h.latLng(o.location.y, o.location.x),
              properties: o.attributes,
            });
        }
        return t;
      },
    });
  function i(e) {
    return new s(e);
  }
  var o = r.Task.extend({
    path: 'reverseGeocode',
    params: { outSR: 4326, returnIntersection: !1 },
    setters: {
      distance: 'distance',
      language: 'langCode',
      intersection: 'returnIntersection',
    },
    initialize: function (e) {
      ((e = e || {}).url = e.url || t),
        r.Task.prototype.initialize.call(this, e);
    },
    latlng: function (e) {
      var t = h.latLng(e);
      return (this.params.location = t.lng + ',' + t.lat), this;
    },
    run: function (i, o) {
      return this.request(function (e, t) {
        var s = e
          ? void 0
          : {
              latlng: h.latLng(t.location.y, t.location.x),
              address: t.address,
            };
        i.call(o, e, s, t);
      }, this);
    },
  });
  function n(e) {
    return new o(e);
  }
  var a = r.Task.extend({
    path: 'suggest',
    params: {},
    setters: {
      text: 'text',
      category: 'category',
      countries: 'countryCode',
      maxSuggestions: 'maxSuggestions',
    },
    initialize: function (e) {
      (e = e || {}).url || ((e.url = t), (e.supportsSuggest = !0)),
        r.Task.prototype.initialize.call(this, e);
    },
    within: function (e) {
      var t = (e = (e = h.latLngBounds(e)).pad(0.5)).getCenter(),
        s = e.getNorthWest();
      return (
        (this.params.location = t.lng + ',' + t.lat),
        (this.params.distance = Math.min(Math.max(t.distanceTo(s), 2e3), 5e4)),
        (this.params.searchExtent = r.Util.boundsToExtent(e)),
        this
      );
    },
    nearby: function (e, t) {
      var s = h.latLng(e);
      return (
        (this.params.location = s.lng + ',' + s.lat),
        t && (this.params.distance = Math.min(Math.max(t, 2e3), 5e4)),
        this
      );
    },
    run: function (s, i) {
      if (this.options.supportsSuggest)
        return this.request(function (e, t) {
          s.call(i, e, t, t);
        }, this);
      console.warn(
        'this geocoding service does not support asking for suggestions',
      );
    },
  });
  function l(e) {
    return new a(e);
  }
  var u = r.Service.extend({
    initialize: function (e) {
      (e = e || {}).url
        ? (r.Service.prototype.initialize.call(this, e),
          this._confirmSuggestSupport())
        : ((e.url = t),
          (e.supportsSuggest = !0),
          r.Service.prototype.initialize.call(this, e));
    },
    geocode: function () {
      return i(this);
    },
    reverse: function () {
      return n(this);
    },
    suggest: function () {
      return l(this);
    },
    _confirmSuggestSupport: function () {
      this.metadata(function (e, t) {
        e ||
          (t.capabilities && -1 < t.capabilities.indexOf('Suggest')
            ? (this.options.supportsSuggest = !0)
            : (this.options.supportsSuggest = !1),
          (this.options.customParam = t.singleLineAddressField.name));
      }, this);
    },
  });
  var d = h.Evented.extend({
    options: { zoomToResult: !0, useMapBounds: 12, searchBounds: null },
    initialize: function (e, t) {
      if (
        (h.Util.setOptions(this, t),
        (this._control = e),
        !t || !t.providers || !t.providers.length)
      )
        throw new Error('You must specify at least one provider');
      this._providers = t.providers;
    },
    _geocode: function (s, e, t) {
      var i,
        o = 0,
        r = [],
        n = h.Util.bind(function (e, t) {
          o--,
            e ||
              (t && (r = r.concat(t)),
              o <= 0 &&
                ((i = this._boundsFromResults(r)),
                this.fire(
                  'results',
                  {
                    results: r,
                    bounds: i,
                    latlng: i ? i.getCenter() : void 0,
                    text: s,
                  },
                  !0,
                ),
                this.options.zoomToResult &&
                  i &&
                  this._control._map.fitBounds(i),
                this.fire('load')));
        }, this);
      if (e) o++, t.results(s, e, this._searchBounds(), n);
      else
        for (var a = 0; a < this._providers.length; a++)
          o++, this._providers[a].results(s, e, this._searchBounds(), n);
    },
    _suggest: function (e) {
      var r = this._providers.length,
        n = 0,
        t = h.Util.bind(function (i, o) {
          return h.Util.bind(function (e, t) {
            if ((--r, (n += t.length), e))
              return (
                this._control._clearProviderSuggestions(o),
                void this._control._finalizeSuggestions(r, n)
              );
            if (t.length) for (var s = 0; s < t.length; s++) t[s].provider = o;
            else this._control._renderSuggestions(t);
            o._lastRender !== i && this._control._clearProviderSuggestions(o),
              t.length &&
                this._control._input.value === i &&
                ((o._lastRender = i), this._control._renderSuggestions(t)),
              this._control._finalizeSuggestions(r, n);
          }, this);
        }, this);
      this._pendingSuggestions = [];
      for (var s = 0; s < this._providers.length; s++) {
        var i = this._providers[s],
          o = i.suggestions(e, this._searchBounds(), t(e, i));
        this._pendingSuggestions.push(o);
      }
    },
    _searchBounds: function () {
      return null !== this.options.searchBounds
        ? this.options.searchBounds
        : !1 !== this.options.useMapBounds &&
          (!0 === this.options.useMapBounds ||
            this.options.useMapBounds <= this._control._map.getZoom())
        ? this._control._map.getBounds()
        : null;
    },
    _boundsFromResults: function (e) {
      if (e.length) {
        for (
          var t = h.latLngBounds([0, 0], [0, 0]),
            s = [],
            i = [],
            o = e.length - 1;
          0 <= o;
          o--
        ) {
          var r = e[o];
          i.push(r.latlng),
            r.bounds &&
              r.bounds.isValid() &&
              !r.bounds.equals(t) &&
              s.push(r.bounds);
        }
        for (var n = h.latLngBounds(i), a = 0; a < s.length; a++)
          n.extend(s[a]);
        return n;
      }
    },
    _getAttribution: function () {
      for (var e = [], t = this._providers, s = 0; s < t.length; s++)
        t[s].options.attribution && e.push(t[s].options.attribution);
      return e.join(', ');
    },
  });
  function c(e, t) {
    return new d(e, t);
  }
  var g = u.extend({
    options: { label: 'Places and Addresses', maxResults: 5 },
    suggestions: function (e, t, r) {
      var s = this.suggest().text(e);
      return (
        t && s.within(t),
        this.options.nearby && s.nearby(this.options.nearby),
        this.options.countries && s.countries(this.options.countries),
        this.options.categories && s.category(this.options.categories),
        s.maxSuggestions(this.options.maxResults),
        s.run(function (e, t, s) {
          var i = [];
          if (!e)
            for (
              ;
              s.suggestions.length && i.length <= this.options.maxResults - 1;

            ) {
              var o = s.suggestions.shift();
              o.isCollection ||
                i.push({
                  text: o.text,
                  unformattedText: o.text,
                  magicKey: o.magicKey,
                });
            }
          r(e, i);
        }, this)
      );
    },
    results: function (e, t, s, i) {
      var o = this.geocode().text(e);
      return (
        t && o.key(t),
        o.maxLocations(this.options.maxResults),
        s && o.within(s),
        this.options.forStorage && o.forStorage(!0),
        this.options.nearby && o.nearby(this.options.nearby),
        this.options.countries && o.countries(this.options.countries),
        this.options.categories && o.category(this.options.categories),
        o.run(function (e, t) {
          i(e, t.results);
        }, this)
      );
    },
  });
  function p(e) {
    return new g(e);
  }
  var f = h.Control.extend({
    includes: h.Evented.prototype,
    options: {
      position: 'topleft',
      collapseAfterResult: !0,
      expanded: !1,
      allowMultipleResults: !0,
      placeholder: 'Search for places or addresses',
      title: 'Location Search',
    },
    initialize: function (e) {
      h.Util.setOptions(this, e),
        (e && e.providers && e.providers.length) ||
          ((e = e || {}).providers = [p()]),
        (this._geosearchCore = c(this, e)),
        (this._geosearchCore._providers = e.providers),
        this._geosearchCore.addEventParent(this);
      for (var t = 0; t < this._geosearchCore._providers.length; t++)
        this._geosearchCore._providers[t].addEventParent(this);
      (this._geosearchCore._pendingSuggestions = []),
        h.Control.prototype.initialize.call(this, e);
    },
    _renderSuggestions: function (e) {
      var t, s, i;
      0 < e.length && (this._suggestions.style.display = 'block');
      for (var o = [], r = 0; r < e.length; r++) {
        var n = e[r];
        if (
          (!i &&
            1 < this._geosearchCore._providers.length &&
            t !== n.provider.options.label &&
            (((i = h.DomUtil.create(
              'div',
              'geocoder-control-header',
              n.provider._contentsElement,
            )).textContent = n.provider.options.label),
            (i.innerText = n.provider.options.label),
            (t = n.provider.options.label)),
          (s =
            s ||
            h.DomUtil.create(
              'ul',
              'geocoder-control-list',
              n.provider._contentsElement,
            )),
          -1 === o.indexOf(n.text))
        ) {
          var a = h.DomUtil.create('li', 'geocoder-control-suggestion', s);
          (a.innerHTML = n.text),
            (a.provider = n.provider),
            (a['data-magic-key'] = n.magicKey),
            (a.unformattedText = n.unformattedText);
        } else
          for (var l = 0; l < s.childNodes.length; l++)
            s.childNodes[l].innerHTML === n.text &&
              (s.childNodes[l]['data-magic-key'] += ',' + n.magicKey);
        o.push(n.text);
      }
      -1 < this.getPosition().indexOf('top') &&
        (this._suggestions.style.maxHeight =
          this._map.getSize().y -
          this._suggestions.offsetTop -
          this._wrapper.offsetTop -
          10 +
          'px'),
        -1 < this.getPosition().indexOf('bottom') &&
          this._setSuggestionsBottomPosition();
    },
    _setSuggestionsBottomPosition: function () {
      (this._suggestions.style.maxHeight =
        this._map.getSize().y -
        this._map._controlCorners[this.getPosition()].offsetHeight -
        this._wrapper.offsetHeight +
        'px'),
        (this._suggestions.style.top =
          -this._suggestions.offsetHeight -
          this._wrapper.offsetHeight +
          20 +
          'px');
    },
    _boundsFromResults: function (e) {
      if (e.length) {
        for (
          var t = h.latLngBounds([0, 0], [0, 0]),
            s = [],
            i = [],
            o = e.length - 1;
          0 <= o;
          o--
        ) {
          var r = e[o];
          i.push(r.latlng),
            r.bounds &&
              r.bounds.isValid() &&
              !r.bounds.equals(t) &&
              s.push(r.bounds);
        }
        for (var n = h.latLngBounds(i), a = 0; a < s.length; a++)
          n.extend(s[a]);
        return n;
      }
    },
    clear: function () {
      this._clearAllSuggestions(),
        this.options.collapseAfterResult &&
          ((this._input.value = ''),
          (this._lastValue = ''),
          (this._input.placeholder = ''),
          h.DomUtil.removeClass(this._wrapper, 'geocoder-control-expanded')),
        !this._map.scrollWheelZoom.enabled() &&
          this._map.options.scrollWheelZoom &&
          this._map.scrollWheelZoom.enable();
    },
    _clearAllSuggestions: function () {
      this._suggestions.style.display = 'none';
      for (var e = 0; e < this.options.providers.length; e++)
        this._clearProviderSuggestions(this.options.providers[e]);
    },
    _clearProviderSuggestions: function (e) {
      e._contentsElement.innerHTML = '';
    },
    _finalizeSuggestions: function (e, t) {
      e ||
        (h.DomUtil.removeClass(this._input, 'geocoder-control-loading'),
        -1 < this.getPosition().indexOf('bottom') &&
          this._setSuggestionsBottomPosition(),
        t || this._clearAllSuggestions());
    },
    _setupClick: function () {
      h.DomUtil.addClass(this._wrapper, 'geocoder-control-expanded'),
        this._input.focus();
    },
    disable: function () {
      (this._input.disabled = !0),
        h.DomUtil.addClass(this._input, 'geocoder-control-input-disabled'),
        h.DomEvent.removeListener(
          this._wrapper,
          'click',
          this._setupClick,
          this,
        );
    },
    enable: function () {
      (this._input.disabled = !1),
        h.DomUtil.removeClass(this._input, 'geocoder-control-input-disabled'),
        h.DomEvent.addListener(this._wrapper, 'click', this._setupClick, this);
    },
    getAttribution: function () {
      for (var e = [], t = 0; t < this._providers.length; t++)
        this._providers[t].options.attribution &&
          e.push(this._providers[t].options.attribution);
      return e.join(', ');
    },
    geocodeSuggestion: function (e) {
      var t = e.target || e.srcElement;
      t.classList.contains('geocoder-control-suggestions') ||
        t.classList.contains('geocoder-control-header') ||
        (t.classList.length < 1 && (t = t.parentNode),
        this._geosearchCore._geocode(
          t.unformattedText,
          t['data-magic-key'],
          t.provider,
        ),
        this.clear());
    },
    onAdd: function (t) {
      r.Util.setEsriAttribution(t),
        (this._map = t),
        (this._wrapper = h.DomUtil.create('div', 'geocoder-control')),
        (this._input = h.DomUtil.create(
          'input',
          'geocoder-control-input leaflet-bar',
          this._wrapper,
        )),
        (this._input.title = this.options.title),
        this.options.expanded &&
          (h.DomUtil.addClass(this._wrapper, 'geocoder-control-expanded'),
          (this._input.placeholder = this.options.placeholder)),
        (this._suggestions = h.DomUtil.create(
          'div',
          'geocoder-control-suggestions leaflet-bar',
          this._wrapper,
        ));
      for (var e = 0; e < this.options.providers.length; e++)
        this.options.providers[e]._contentsElement = h.DomUtil.create(
          'div',
          null,
          this._suggestions,
        );
      var s = this._geosearchCore._getAttribution();
      return (
        t.attributionControl && t.attributionControl.addAttribution(s),
        h.DomEvent.addListener(
          this._input,
          'focus',
          function (e) {
            (this._input.placeholder = this.options.placeholder),
              h.DomUtil.addClass(this._wrapper, 'geocoder-control-expanded');
          },
          this,
        ),
        h.DomEvent.addListener(this._wrapper, 'click', this._setupClick, this),
        h.DomEvent.addListener(
          this._suggestions,
          'mousedown',
          this.geocodeSuggestion,
          this,
        ),
        h.DomEvent.addListener(
          this._input,
          'blur',
          function (e) {
            this.clear();
          },
          this,
        ),
        h.DomEvent.addListener(
          this._input,
          'keydown',
          function (e) {
            var t = (e.target || e.srcElement).value;
            h.DomUtil.addClass(this._wrapper, 'geocoder-control-expanded');
            for (
              var s,
                i = this._suggestions.querySelectorAll(
                  '.geocoder-control-suggestion',
                ),
                o = this._suggestions.querySelectorAll(
                  '.geocoder-control-selected',
                )[0],
                r = 0;
              r < i.length;
              r++
            )
              if (i[r] === o) {
                s = r;
                break;
              }
            switch (e.keyCode) {
              case 13:
                o
                  ? ((this._input.value = o.innerText),
                    this._geosearchCore._geocode(
                      o.unformattedText,
                      o['data-magic-key'],
                      o.provider,
                    ),
                    this.clear())
                  : this.options.allowMultipleResults && 2 <= t.length
                  ? (this._geosearchCore._geocode(this._input.value, void 0),
                    this.clear())
                  : 1 === i.length
                  ? (h.DomUtil.addClass(i[0], 'geocoder-control-selected'),
                    this._geosearchCore._geocode(
                      i[0].innerHTML,
                      i[0]['data-magic-key'],
                      i[0].provider,
                    ))
                  : (this.clear(), this._input.blur()),
                  h.DomEvent.preventDefault(e);
                break;
              case 38:
                o && h.DomUtil.removeClass(o, 'geocoder-control-selected');
                var n = i[s - 1];
                o && n
                  ? h.DomUtil.addClass(n, 'geocoder-control-selected')
                  : h.DomUtil.addClass(
                      i[i.length - 1],
                      'geocoder-control-selected',
                    ),
                  h.DomEvent.preventDefault(e);
                break;
              case 40:
                o && h.DomUtil.removeClass(o, 'geocoder-control-selected');
                var a = i[s + 1];
                o && a
                  ? h.DomUtil.addClass(a, 'geocoder-control-selected')
                  : h.DomUtil.addClass(i[0], 'geocoder-control-selected'),
                  h.DomEvent.preventDefault(e);
                break;
              default:
                for (
                  var l = 0;
                  l < this._geosearchCore._pendingSuggestions.length;
                  l++
                ) {
                  var u = this._geosearchCore._pendingSuggestions[l];
                  u && u.abort && !u.id && u.abort();
                }
            }
          },
          this,
        ),
        h.DomEvent.addListener(
          this._input,
          'keyup',
          h.Util.throttle(
            function (e) {
              var t = e.which || e.keyCode,
                s = (e.target || e.srcElement).value;
              if (s.length < 2)
                return (
                  (this._lastValue = this._input.value),
                  this._clearAllSuggestions(),
                  void h.DomUtil.removeClass(
                    this._input,
                    'geocoder-control-loading',
                  )
                );
              27 !== t
                ? 13 !== t &&
                  38 !== t &&
                  40 !== t &&
                  this._input.value !== this._lastValue &&
                  ((this._lastValue = this._input.value),
                  h.DomUtil.addClass(this._input, 'geocoder-control-loading'),
                  this._geosearchCore._suggest(s))
                : this._clearAllSuggestions();
            },
            50,
            this,
          ),
          this,
        ),
        h.DomEvent.disableClickPropagation(this._wrapper),
        h.DomEvent.addListener(this._suggestions, 'mouseover', function (e) {
          t.scrollWheelZoom.enabled() &&
            t.options.scrollWheelZoom &&
            t.scrollWheelZoom.disable();
        }),
        h.DomEvent.addListener(this._suggestions, 'mouseout', function (e) {
          !t.scrollWheelZoom.enabled() &&
            t.options.scrollWheelZoom &&
            t.scrollWheelZoom.enable();
        }),
        this._geosearchCore.on(
          'load',
          function (e) {
            h.DomUtil.removeClass(this._input, 'geocoder-control-loading'),
              this.clear(),
              this._input.blur();
          },
          this,
        ),
        this._wrapper
      );
    },
  });
  var v = r.FeatureLayerService.extend({
    options: {
      label: 'Feature Layer',
      maxResults: 5,
      bufferRadius: 1e3,
      searchMode: 'contain',
      formatSuggestion: function (e) {
        return e.properties[this.options.searchFields[0]];
      },
    },
    initialize: function (e) {
      r.FeatureLayerService.prototype.initialize.call(this, e),
        'string' == typeof this.options.searchFields &&
          (this.options.searchFields = [this.options.searchFields]),
        (this._suggestionsQuery = this.query()),
        (this._resultsQuery = this.query());
    },
    suggestions: function (e, t, n) {
      var s = this._suggestionsQuery
        .where(this._buildQuery(e))
        .returnGeometry(!1);
      return (
        t && s.intersects(t),
        this.options.idField &&
          s.fields([this.options.idField].concat(this.options.searchFields)),
        s.run(function (e, t, s) {
          if (e) n(e, []);
          else {
            this.options.idField = s.objectIdFieldName;
            for (var i = [], o = t.features.length - 1; 0 <= o; o--) {
              var r = t.features[o];
              i.push({
                text: this.options.formatSuggestion.call(this, r),
                unformattedText: r.properties[this.options.searchFields[0]],
                magicKey: r.id,
              });
            }
            n(e, i.slice(0, this.options.maxResults));
          }
        }, this)
      );
    },
    results: function (e, t, s, a) {
      var i = this._resultsQuery;
      return (
        t
          ? (delete i.params.where, i.featureIds([t]))
          : i.where(this._buildQuery(e)),
        s && i.within(s),
        i.run(
          h.Util.bind(function (e, t) {
            for (var s = [], i = 0; i < t.features.length; i++) {
              var o,
                r,
                n = t.features[i];
              n &&
                ((r = {
                  latlng: (o = this._featureBounds(n)).getCenter(),
                  bounds: o,
                  text: this.options.formatSuggestion.call(this, n),
                  properties: n.properties,
                  geojson: n,
                }),
                s.push(r),
                delete this._resultsQuery.params.objectIds);
            }
            a(e, s);
          }, this),
        )
      );
    },
    orderBy: function (e, t) {
      this._suggestionsQuery.orderBy(e, t);
    },
    _buildQuery: function (e) {
      for (var t = [], s = this.options.searchFields.length - 1; 0 <= s; s--) {
        var i = 'upper("' + this.options.searchFields[s] + '")';
        if ('contain' === this.options.searchMode)
          t.push(i + " LIKE upper('%" + e + "%')");
        else if ('startWith' === this.options.searchMode)
          t.push(i + " LIKE upper('" + e + "%')");
        else if ('endWith' === this.options.searchMode)
          t.push(i + " LIKE upper('%" + e + "')");
        else {
          if ('strict' !== this.options.searchMode)
            throw new Error(
              'L.esri.Geocoding.featureLayerProvider: Invalid parameter for "searchMode". Use one of "contain", "startWith", "endWith", or "strict"',
            );
          t.push(i + " LIKE upper('" + e + "')");
        }
      }
      return this.options.where
        ? this.options.where + ' AND (' + t.join(' OR ') + ')'
        : t.join(' OR ');
    },
    _featureBounds: function (e) {
      var t = h.geoJson(e);
      if ('Point' !== e.geometry.type) return t.getBounds();
      var s = t.getBounds().getCenter(),
        i =
          ((this.options.bufferRadius / 40075017) * 360) /
          Math.cos((180 / Math.PI) * s.lat),
        o = (this.options.bufferRadius / 40075017) * 360;
      return h.latLngBounds([s.lat - o, s.lng - i], [s.lat + o, s.lng + i]);
    },
  });
  var m = r.MapService.extend({
    options: {
      layers: [0],
      label: 'Map Service',
      bufferRadius: 1e3,
      maxResults: 5,
      formatSuggestion: function (e) {
        return (
          e.properties[e.displayFieldName] +
          ' <small>' +
          e.layerName +
          '</small>'
        );
      },
    },
    initialize: function (e) {
      r.MapService.prototype.initialize.call(this, e), this._getIdFields();
    },
    suggestions: function (e, t, h) {
      return this.find()
        .text(e)
        .fields(this.options.searchFields)
        .returnGeometry(!1)
        .layers(this.options.layers)
        .run(function (e, t, s) {
          var i = [];
          if (!e) {
            var o = Math.min(this.options.maxResults, t.features.length);
            s.results = s.results.reverse();
            for (var r = 0; r < o; r++) {
              var n = t.features[r],
                a = s.results[r],
                l = a.layerId,
                u = this._idFields[l];
              (n.layerId = l),
                (n.layerName = this._layerNames[l]),
                (n.displayFieldName = this._displayFields[l]),
                u &&
                  i.push({
                    text: this.options.formatSuggestion.call(this, n),
                    unformattedText: n.properties[n.displayFieldName],
                    magicKey: a.attributes[u] + ':' + l,
                  });
            }
          }
          h(e, i.reverse());
        }, this);
    },
    results: function (e, t, s, a) {
      var i,
        l,
        u = [];
      return (
        t && !t.includes(',')
          ? ((i = t.split(':')[0]),
            (l = t.split(':')[1]),
            this.query().layer(l).featureIds(i))
          : this.find()
              .text(e)
              .fields(this.options.searchFields)
              .layers(this.options.layers)
      ).run(function (e, t, s) {
        if (!e) {
          s.results && (s.results = s.results.reverse());
          for (var i = 0; i < t.features.length; i++) {
            var o,
              r,
              n = t.features[i];
            (l = l || s.results[i].layerId),
              n &&
                void 0 !== l &&
                ((o = this._featureBounds(n)),
                (n.layerId = l),
                (n.layerName = this._layerNames[l]),
                (n.displayFieldName = this._displayFields[l]),
                (r = {
                  latlng: o.getCenter(),
                  bounds: o,
                  text: this.options.formatSuggestion.call(this, n),
                  properties: n.properties,
                  geojson: n,
                }),
                u.push(r));
          }
        }
        a(e, u.reverse());
      }, this);
    },
    _featureBounds: function (e) {
      var t = h.geoJson(e);
      if ('Point' !== e.geometry.type) return t.getBounds();
      var s = t.getBounds().getCenter(),
        i =
          ((this.options.bufferRadius / 40075017) * 360) /
          Math.cos((180 / Math.PI) * s.lat),
        o = (this.options.bufferRadius / 40075017) * 360;
      return h.latLngBounds([s.lat - o, s.lng - i], [s.lat + o, s.lng + i]);
    },
    _layerMetadataCallback: function (o) {
      return h.Util.bind(function (e, t) {
        if (!e) {
          (this._displayFields[o] = t.displayField),
            (this._layerNames[o] = t.name);
          for (var s = 0; s < t.fields.length; s++) {
            var i = t.fields[s];
            if ('esriFieldTypeOID' === i.type) {
              this._idFields[o] = i.name;
              break;
            }
          }
        }
      }, this);
    },
    _getIdFields: function () {
      (this._idFields = {}),
        (this._displayFields = {}),
        (this._layerNames = {});
      for (var e = 0; e < this.options.layers.length; e++) {
        var t = this.options.layers[e];
        this.get(t, {}, this._layerMetadataCallback(t));
      }
    },
  });
  var _ = u.extend({
    options: { label: 'Geocode Server', maxResults: 5 },
    suggestions: function (e, t, r) {
      if (this.options.supportsSuggest) {
        var s = this.suggest().text(e);
        return (
          t && s.within(t),
          s.run(function (e, t, s) {
            var i = [];
            if (!e)
              for (
                ;
                s.suggestions.length && i.length <= this.options.maxResults - 1;

              ) {
                var o = s.suggestions.shift();
                o.isCollection ||
                  i.push({
                    text: o.text,
                    unformattedText: o.text,
                    magicKey: o.magicKey,
                  });
              }
            r(e, i);
          }, this)
        );
      }
      return r(void 0, []), !1;
    },
    results: function (e, t, s, i) {
      var o = this.geocode().text(e);
      return (
        t && o.key(t),
        o.maxLocations(this.options.maxResults),
        s && o.within(s),
        o.run(function (e, t) {
          i(e, t.results);
        }, this)
      );
    },
  });
  (e.ArcgisOnlineProvider = g),
    (e.FeatureLayerProvider = v),
    (e.Geocode = s),
    (e.GeocodeService = u),
    (e.GeocodeServiceProvider = _),
    (e.Geosearch = f),
    (e.GeosearchCore = d),
    (e.MapServiceProvider = m),
    (e.ReverseGeocode = o),
    (e.Suggest = a),
    (e.VERSION = '2.3.4'),
    (e.WorldGeocodingServiceUrl = t),
    (e.arcgisOnlineProvider = p),
    (e.featureLayerProvider = function (e) {
      return new v(e);
    }),
    (e.geocode = i),
    (e.geocodeService = function (e) {
      return new u(e);
    }),
    (e.geocodeServiceProvider = function (e) {
      return new _(e);
    }),
    (e.geosearch = function (e) {
      return new f(e);
    }),
    (e.geosearchCore = c),
    (e.mapServiceProvider = function (e) {
      return new m(e);
    }),
    (e.reverseGeocode = n),
    (e.suggest = l),
    Object.defineProperty(e, '__esModule', { value: !0 });
});
//# sourceMappingURL=esri-leaflet-geocoder.js.map
