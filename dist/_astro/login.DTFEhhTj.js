import { j as T } from './jsx-runtime.K1e75nIr.js';
import { r as We } from './index.NEDEFKed.js';
import { a as Yo } from './axios.Cm0UX6qg.js';
var _ =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : typeof self < 'u'
    ? self
    : {};
function Jo(S) {
  return S && S.__esModule && Object.prototype.hasOwnProperty.call(S, 'default')
    ? S.default
    : S;
}
var Zt = { exports: {} };
/*!
 * sweetalert2 v11.11.0
 * Released under the MIT License.
 */ (function (S, Ue) {
  (function (I, M) {
    S.exports = M();
  })(_, function () {
    function I(r, e, t) {
      if (typeof r == 'function' ? r === e : r.has(e))
        return arguments.length < 3 ? e : t;
      throw new TypeError('Private element is not present on this object');
    }
    function M(r, e, t) {
      return (
        (e = U(e)),
        tn(
          r,
          Ce() ? Reflect.construct(e, t || [], U(r).constructor) : e.apply(r, t)
        )
      );
    }
    function E(r, e) {
      return r.get(I(r, e));
    }
    function P(r, e, t) {
      return r.set(I(r, e), t), t;
    }
    function Yt(r, e, t) {
      if (Ce()) return Reflect.construct.apply(null, arguments);
      var n = [null];
      n.push.apply(n, e);
      var o = new (r.bind.apply(r, n))();
      return t && se(o, t.prototype), o;
    }
    function Ce() {
      try {
        var r = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        );
      } catch {}
      return (Ce = function () {
        return !!r;
      })();
    }
    function Jt(r, e) {
      var t =
        r == null
          ? null
          : (typeof Symbol < 'u' && r[Symbol.iterator]) || r['@@iterator'];
      if (t != null) {
        var n,
          o,
          a,
          s,
          c = [],
          u = !0,
          p = !1;
        try {
          if (((a = (t = t.call(r)).next), e === 0)) {
            if (Object(t) !== t) return;
            u = !1;
          } else
            for (
              ;
              !(u = (n = a.call(t)).done) && (c.push(n.value), c.length !== e);
              u = !0
            );
        } catch (ae) {
          (p = !0), (o = ae);
        } finally {
          try {
            if (!u && t.return != null && ((s = t.return()), Object(s) !== s))
              return;
          } finally {
            if (p) throw o;
          }
        }
        return c;
      }
    }
    function Xt(r, e) {
      if (typeof r != 'object' || !r) return r;
      var t = r[Symbol.toPrimitive];
      if (t !== void 0) {
        var n = t.call(r, e || 'default');
        if (typeof n != 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
      }
      return (e === 'string' ? String : Number)(r);
    }
    function Gt(r) {
      var e = Xt(r, 'string');
      return typeof e == 'symbol' ? e : e + '';
    }
    function v(r) {
      '@babel/helpers - typeof';
      return (
        (v =
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  typeof Symbol == 'function' &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              }),
        v(r)
      );
    }
    function xe(r, e) {
      if (!(r instanceof e))
        throw new TypeError('Cannot call a class as a function');
    }
    function $e(r, e) {
      for (var t = 0; t < e.length; t++) {
        var n = e[t];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(r, Gt(n.key), n);
      }
    }
    function ke(r, e, t) {
      return (
        e && $e(r.prototype, e),
        t && $e(r, t),
        Object.defineProperty(r, 'prototype', { writable: !1 }),
        r
      );
    }
    function Qt(r, e) {
      if (typeof e != 'function' && e !== null)
        throw new TypeError(
          'Super expression must either be null or a function'
        );
      (r.prototype = Object.create(e && e.prototype, {
        constructor: { value: r, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(r, 'prototype', { writable: !1 }),
        e && se(r, e);
    }
    function U(r) {
      return (
        (U = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            }),
        U(r)
      );
    }
    function se(r, e) {
      return (
        (se = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (n, o) {
              return (n.__proto__ = o), n;
            }),
        se(r, e)
      );
    }
    function en(r) {
      if (r === void 0)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return r;
    }
    function tn(r, e) {
      if (e && (typeof e == 'object' || typeof e == 'function')) return e;
      if (e !== void 0)
        throw new TypeError(
          'Derived constructors may only return object or undefined'
        );
      return en(r);
    }
    function nn(r, e) {
      for (
        ;
        !Object.prototype.hasOwnProperty.call(r, e) && ((r = U(r)), r !== null);

      );
      return r;
    }
    function le() {
      return (
        typeof Reflect < 'u' && Reflect.get
          ? (le = Reflect.get.bind())
          : (le = function (e, t, n) {
              var o = nn(e, t);
              if (o) {
                var a = Object.getOwnPropertyDescriptor(o, t);
                return a.get
                  ? a.get.call(arguments.length < 3 ? e : n)
                  : a.value;
              }
            }),
        le.apply(this, arguments)
      );
    }
    function rn(r, e) {
      return sn(r) || Jt(r, e) || Ke(r, e) || un();
    }
    function on(r) {
      return an(r) || ln(r) || Ke(r) || cn();
    }
    function an(r) {
      if (Array.isArray(r)) return Ae(r);
    }
    function sn(r) {
      if (Array.isArray(r)) return r;
    }
    function ln(r) {
      if (
        (typeof Symbol < 'u' && r[Symbol.iterator] != null) ||
        r['@@iterator'] != null
      )
        return Array.from(r);
    }
    function Ke(r, e) {
      if (r) {
        if (typeof r == 'string') return Ae(r, e);
        var t = Object.prototype.toString.call(r).slice(8, -1);
        if (
          (t === 'Object' && r.constructor && (t = r.constructor.name),
          t === 'Map' || t === 'Set')
        )
          return Array.from(r);
        if (
          t === 'Arguments' ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
        )
          return Ae(r, e);
      }
    }
    function Ae(r, e) {
      (e == null || e > r.length) && (e = r.length);
      for (var t = 0, n = new Array(e); t < e; t++) n[t] = r[t];
      return n;
    }
    function cn() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function un() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function dn(r, e) {
      if (e.has(r))
        throw new TypeError(
          'Cannot initialize the same private elements twice on an object'
        );
    }
    function fn(r, e, t) {
      dn(r, e), e.set(r, t);
    }
    var wn = 100,
      l = {},
      pn = function () {
        l.previousActiveElement instanceof HTMLElement
          ? (l.previousActiveElement.focus(), (l.previousActiveElement = null))
          : document.body && document.body.focus();
      },
      mn = function (e) {
        return new Promise(function (t) {
          if (!e) return t();
          var n = window.scrollX,
            o = window.scrollY;
          (l.restoreFocusTimeout = setTimeout(function () {
            pn(), t();
          }, wn)),
            window.scrollTo(n, o);
        });
      },
      Ze = 'swal2-',
      hn = [
        'container',
        'shown',
        'height-auto',
        'iosfix',
        'popup',
        'modal',
        'no-backdrop',
        'no-transition',
        'toast',
        'toast-shown',
        'show',
        'hide',
        'close',
        'title',
        'html-container',
        'actions',
        'confirm',
        'deny',
        'cancel',
        'default-outline',
        'footer',
        'icon',
        'icon-content',
        'image',
        'input',
        'file',
        'range',
        'select',
        'radio',
        'checkbox',
        'label',
        'textarea',
        'inputerror',
        'input-label',
        'validation-message',
        'progress-steps',
        'active-progress-step',
        'progress-step',
        'progress-step-line',
        'loader',
        'loading',
        'styled',
        'top',
        'top-start',
        'top-end',
        'top-left',
        'top-right',
        'center',
        'center-start',
        'center-end',
        'center-left',
        'center-right',
        'bottom',
        'bottom-start',
        'bottom-end',
        'bottom-left',
        'bottom-right',
        'grow-row',
        'grow-column',
        'grow-fullscreen',
        'rtl',
        'timer-progress-bar',
        'timer-progress-bar-container',
        'scrollbar-measure',
        'icon-success',
        'icon-warning',
        'icon-info',
        'icon-question',
        'icon-error',
      ],
      i = hn.reduce(function (r, e) {
        return (r[e] = Ze + e), r;
      }, {}),
      gn = ['success', 'warning', 'info', 'question', 'error'],
      ce = gn.reduce(function (r, e) {
        return (r[e] = Ze + e), r;
      }, {}),
      Ye = 'SweetAlert2:',
      Pe = function (e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      },
      y = function (e) {
        console.warn(
          ''.concat(Ye, ' ').concat(v(e) === 'object' ? e.join(' ') : e)
        );
      },
      F = function (e) {
        console.error(''.concat(Ye, ' ').concat(e));
      },
      Je = [],
      vn = function (e) {
        Je.includes(e) || (Je.push(e), y(e));
      },
      bn = function (e, t) {
        vn(
          '"'
            .concat(
              e,
              '" is deprecated and will be removed in the next major release. Please use "'
            )
            .concat(t, '" instead.')
        );
      },
      ue = function (e) {
        return typeof e == 'function' ? e() : e;
      },
      Be = function (e) {
        return e && typeof e.toPromise == 'function';
      },
      Q = function (e) {
        return Be(e) ? e.toPromise() : Promise.resolve(e);
      },
      Se = function (e) {
        return e && Promise.resolve(e) === e;
      },
      C = function () {
        return document.body.querySelector('.'.concat(i.container));
      },
      ee = function (e) {
        var t = C();
        return t ? t.querySelector(e) : null;
      },
      x = function (e) {
        return ee('.'.concat(e));
      },
      f = function () {
        return x(i.popup);
      },
      te = function () {
        return x(i.icon);
      },
      yn = function () {
        return x(i['icon-content']);
      },
      Xe = function () {
        return x(i.title);
      },
      Ee = function () {
        return x(i['html-container']);
      },
      Ge = function () {
        return x(i.image);
      },
      Te = function () {
        return x(i['progress-steps']);
      },
      de = function () {
        return x(i['validation-message']);
      },
      O = function () {
        return ee('.'.concat(i.actions, ' .').concat(i.confirm));
      },
      $ = function () {
        return ee('.'.concat(i.actions, ' .').concat(i.cancel));
      },
      z = function () {
        return ee('.'.concat(i.actions, ' .').concat(i.deny));
      },
      Cn = function () {
        return x(i['input-label']);
      },
      K = function () {
        return ee('.'.concat(i.loader));
      },
      ne = function () {
        return x(i.actions);
      },
      Qe = function () {
        return x(i.footer);
      },
      fe = function () {
        return x(i['timer-progress-bar']);
      },
      Ie = function () {
        return x(i.close);
      },
      xn = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,
      Oe = function () {
        var e = f();
        if (!e) return [];
        var t = e.querySelectorAll(
            '[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'
          ),
          n = Array.from(t).sort(function (s, c) {
            var u = parseInt(s.getAttribute('tabindex') || '0'),
              p = parseInt(c.getAttribute('tabindex') || '0');
            return u > p ? 1 : u < p ? -1 : 0;
          }),
          o = e.querySelectorAll(xn),
          a = Array.from(o).filter(function (s) {
            return s.getAttribute('tabindex') !== '-1';
          });
        return on(new Set(n.concat(a))).filter(function (s) {
          return A(s);
        });
      },
      Le = function () {
        return (
          D(document.body, i.shown) &&
          !D(document.body, i['toast-shown']) &&
          !D(document.body, i['no-backdrop'])
        );
      },
      we = function () {
        var e = f();
        return e ? D(e, i.toast) : !1;
      },
      kn = function () {
        var e = f();
        return e ? e.hasAttribute('data-loading') : !1;
      },
      k = function (e, t) {
        if (((e.textContent = ''), t)) {
          var n = new DOMParser(),
            o = n.parseFromString(t, 'text/html'),
            a = o.querySelector('head');
          a &&
            Array.from(a.childNodes).forEach(function (c) {
              e.appendChild(c);
            });
          var s = o.querySelector('body');
          s &&
            Array.from(s.childNodes).forEach(function (c) {
              c instanceof HTMLVideoElement || c instanceof HTMLAudioElement
                ? e.appendChild(c.cloneNode(!0))
                : e.appendChild(c);
            });
        }
      },
      D = function (e, t) {
        if (!t) return !1;
        for (var n = t.split(/\s+/), o = 0; o < n.length; o++)
          if (!e.classList.contains(n[o])) return !1;
        return !0;
      },
      An = function (e, t) {
        Array.from(e.classList).forEach(function (n) {
          !Object.values(i).includes(n) &&
            !Object.values(ce).includes(n) &&
            !Object.values(t.showClass || {}).includes(n) &&
            e.classList.remove(n);
        });
      },
      B = function (e, t, n) {
        if ((An(e, t), t.customClass && t.customClass[n])) {
          if (
            typeof t.customClass[n] != 'string' &&
            !t.customClass[n].forEach
          ) {
            y(
              'Invalid type of customClass.'
                .concat(n, '! Expected string or iterable object, got "')
                .concat(v(t.customClass[n]), '"')
            );
            return;
          }
          d(e, t.customClass[n]);
        }
      },
      pe = function (e, t) {
        if (!t) return null;
        switch (t) {
          case 'select':
          case 'textarea':
          case 'file':
            return e.querySelector('.'.concat(i.popup, ' > .').concat(i[t]));
          case 'checkbox':
            return e.querySelector(
              '.'.concat(i.popup, ' > .').concat(i.checkbox, ' input')
            );
          case 'radio':
            return (
              e.querySelector(
                '.'.concat(i.popup, ' > .').concat(i.radio, ' input:checked')
              ) ||
              e.querySelector(
                '.'
                  .concat(i.popup, ' > .')
                  .concat(i.radio, ' input:first-child')
              )
            );
          case 'range':
            return e.querySelector(
              '.'.concat(i.popup, ' > .').concat(i.range, ' input')
            );
          default:
            return e.querySelector('.'.concat(i.popup, ' > .').concat(i.input));
        }
      },
      et = function (e) {
        if ((e.focus(), e.type !== 'file')) {
          var t = e.value;
          (e.value = ''), (e.value = t);
        }
      },
      tt = function (e, t, n) {
        !e ||
          !t ||
          (typeof t == 'string' && (t = t.split(/\s+/).filter(Boolean)),
          t.forEach(function (o) {
            Array.isArray(e)
              ? e.forEach(function (a) {
                  n ? a.classList.add(o) : a.classList.remove(o);
                })
              : n
              ? e.classList.add(o)
              : e.classList.remove(o);
          }));
      },
      d = function (e, t) {
        tt(e, t, !0);
      },
      L = function (e, t) {
        tt(e, t, !1);
      },
      H = function (e, t) {
        for (var n = Array.from(e.children), o = 0; o < n.length; o++) {
          var a = n[o];
          if (a instanceof HTMLElement && D(a, t)) return a;
        }
      },
      q = function (e, t, n) {
        n === ''.concat(parseInt(n)) && (n = parseInt(n)),
          n || parseInt(n) === 0
            ? e.style.setProperty(
                t,
                typeof n == 'number' ? ''.concat(n, 'px') : n
              )
            : e.style.removeProperty(t);
      },
      g = function (e) {
        var t =
          arguments.length > 1 && arguments[1] !== void 0
            ? arguments[1]
            : 'flex';
        e && (e.style.display = t);
      },
      b = function (e) {
        e && (e.style.display = 'none');
      },
      je = function (e) {
        var t =
          arguments.length > 1 && arguments[1] !== void 0
            ? arguments[1]
            : 'block';
        e &&
          new MutationObserver(function () {
            re(e, e.innerHTML, t);
          }).observe(e, { childList: !0, subtree: !0 });
      },
      nt = function (e, t, n, o) {
        var a = e.querySelector(t);
        a && a.style.setProperty(n, o);
      },
      re = function (e, t) {
        var n =
          arguments.length > 2 && arguments[2] !== void 0
            ? arguments[2]
            : 'flex';
        t ? g(e, n) : b(e);
      },
      A = function (e) {
        return !!(
          e &&
          (e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        );
      },
      Pn = function () {
        return !A(O()) && !A(z()) && !A($());
      },
      rt = function (e) {
        return e.scrollHeight > e.clientHeight;
      },
      ot = function (e) {
        var t = window.getComputedStyle(e),
          n = parseFloat(t.getPropertyValue('animation-duration') || '0'),
          o = parseFloat(t.getPropertyValue('transition-duration') || '0');
        return n > 0 || o > 0;
      },
      Me = function (e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
          n = fe();
        n &&
          A(n) &&
          (t && ((n.style.transition = 'none'), (n.style.width = '100%')),
          setTimeout(function () {
            (n.style.transition = 'width '.concat(e / 1e3, 's linear')),
              (n.style.width = '0%');
          }, 10));
      },
      Bn = function () {
        var e = fe();
        if (e) {
          var t = parseInt(window.getComputedStyle(e).width);
          e.style.removeProperty('transition'), (e.style.width = '100%');
          var n = parseInt(window.getComputedStyle(e).width),
            o = (t / n) * 100;
          e.style.width = ''.concat(o, '%');
        }
      },
      it = function () {
        return typeof window > 'u' || typeof document > 'u';
      },
      Sn = `
 <div aria-labelledby="`
        .concat(i.title, '" aria-describedby="')
        .concat(i['html-container'], '" class="')
        .concat(
          i.popup,
          `" tabindex="-1">
   <button type="button" class="`
        )
        .concat(
          i.close,
          `"></button>
   <ul class="`
        )
        .concat(
          i['progress-steps'],
          `"></ul>
   <div class="`
        )
        .concat(
          i.icon,
          `"></div>
   <img class="`
        )
        .concat(
          i.image,
          `" />
   <h2 class="`
        )
        .concat(i.title, '" id="')
        .concat(
          i.title,
          `"></h2>
   <div class="`
        )
        .concat(i['html-container'], '" id="')
        .concat(
          i['html-container'],
          `"></div>
   <input class="`
        )
        .concat(i.input, '" id="')
        .concat(
          i.input,
          `" />
   <input type="file" class="`
        )
        .concat(
          i.file,
          `" />
   <div class="`
        )
        .concat(
          i.range,
          `">
     <input type="range" />
     <output></output>
   </div>
   <select class="`
        )
        .concat(i.select, '" id="')
        .concat(
          i.select,
          `"></select>
   <div class="`
        )
        .concat(
          i.radio,
          `"></div>
   <label class="`
        )
        .concat(
          i.checkbox,
          `">
     <input type="checkbox" id="`
        )
        .concat(
          i.checkbox,
          `" />
     <span class="`
        )
        .concat(
          i.label,
          `"></span>
   </label>
   <textarea class="`
        )
        .concat(i.textarea, '" id="')
        .concat(
          i.textarea,
          `"></textarea>
   <div class="`
        )
        .concat(i['validation-message'], '" id="')
        .concat(
          i['validation-message'],
          `"></div>
   <div class="`
        )
        .concat(
          i.actions,
          `">
     <div class="`
        )
        .concat(
          i.loader,
          `"></div>
     <button type="button" class="`
        )
        .concat(
          i.confirm,
          `"></button>
     <button type="button" class="`
        )
        .concat(
          i.deny,
          `"></button>
     <button type="button" class="`
        )
        .concat(
          i.cancel,
          `"></button>
   </div>
   <div class="`
        )
        .concat(
          i.footer,
          `"></div>
   <div class="`
        )
        .concat(
          i['timer-progress-bar-container'],
          `">
     <div class="`
        )
        .concat(
          i['timer-progress-bar'],
          `"></div>
   </div>
 </div>
`
        )
        .replace(/(^|\n)\s*/g, ''),
      En = function () {
        var e = C();
        return e
          ? (e.remove(),
            L(
              [document.documentElement, document.body],
              [i['no-backdrop'], i['toast-shown'], i['has-column']]
            ),
            !0)
          : !1;
      },
      R = function () {
        l.currentInstance.resetValidationMessage();
      },
      Tn = function () {
        var e = f(),
          t = H(e, i.input),
          n = H(e, i.file),
          o = e.querySelector('.'.concat(i.range, ' input')),
          a = e.querySelector('.'.concat(i.range, ' output')),
          s = H(e, i.select),
          c = e.querySelector('.'.concat(i.checkbox, ' input')),
          u = H(e, i.textarea);
        (t.oninput = R),
          (n.onchange = R),
          (s.onchange = R),
          (c.onchange = R),
          (u.oninput = R),
          (o.oninput = function () {
            R(), (a.value = o.value);
          }),
          (o.onchange = function () {
            R(), (a.value = o.value);
          });
      },
      In = function (e) {
        return typeof e == 'string' ? document.querySelector(e) : e;
      },
      On = function (e) {
        var t = f();
        t.setAttribute('role', e.toast ? 'alert' : 'dialog'),
          t.setAttribute('aria-live', e.toast ? 'polite' : 'assertive'),
          e.toast || t.setAttribute('aria-modal', 'true');
      },
      Ln = function (e) {
        window.getComputedStyle(e).direction === 'rtl' && d(C(), i.rtl);
      },
      jn = function (e) {
        var t = En();
        if (it()) {
          F('SweetAlert2 requires document to initialize');
          return;
        }
        var n = document.createElement('div');
        (n.className = i.container), t && d(n, i['no-transition']), k(n, Sn);
        var o = In(e.target);
        o.appendChild(n), On(e), Ln(o), Tn();
      },
      De = function (e, t) {
        e instanceof HTMLElement
          ? t.appendChild(e)
          : v(e) === 'object'
          ? Mn(e, t)
          : e && k(t, e);
      },
      Mn = function (e, t) {
        e.jquery ? Dn(t, e) : k(t, e.toString());
      },
      Dn = function (e, t) {
        if (((e.textContent = ''), 0 in t))
          for (var n = 0; n in t; n++) e.appendChild(t[n].cloneNode(!0));
        else e.appendChild(t.cloneNode(!0));
      },
      W = (function () {
        if (it()) return !1;
        var r = document.createElement('div');
        return typeof r.style.webkitAnimation < 'u'
          ? 'webkitAnimationEnd'
          : typeof r.style.animation < 'u'
          ? 'animationend'
          : !1;
      })(),
      Hn = function (e, t) {
        var n = ne(),
          o = K();
        !n ||
          !o ||
          (!t.showConfirmButton && !t.showDenyButton && !t.showCancelButton
            ? b(n)
            : g(n),
          B(n, t, 'actions'),
          Vn(n, o, t),
          k(o, t.loaderHtml || ''),
          B(o, t, 'loader'));
      };
    function Vn(r, e, t) {
      var n = O(),
        o = z(),
        a = $();
      !n ||
        !o ||
        !a ||
        (He(n, 'confirm', t),
        He(o, 'deny', t),
        He(a, 'cancel', t),
        _n(n, o, a, t),
        t.reverseButtons &&
          (t.toast
            ? (r.insertBefore(a, n), r.insertBefore(o, n))
            : (r.insertBefore(a, e),
              r.insertBefore(o, e),
              r.insertBefore(n, e))));
    }
    function _n(r, e, t, n) {
      if (!n.buttonsStyling) {
        L([r, e, t], i.styled);
        return;
      }
      d([r, e, t], i.styled),
        n.confirmButtonColor &&
          ((r.style.backgroundColor = n.confirmButtonColor),
          d(r, i['default-outline'])),
        n.denyButtonColor &&
          ((e.style.backgroundColor = n.denyButtonColor),
          d(e, i['default-outline'])),
        n.cancelButtonColor &&
          ((t.style.backgroundColor = n.cancelButtonColor),
          d(t, i['default-outline']));
    }
    function He(r, e, t) {
      var n = Pe(e);
      re(r, t['show'.concat(n, 'Button')], 'inline-block'),
        k(r, t[''.concat(e, 'ButtonText')] || ''),
        r.setAttribute('aria-label', t[''.concat(e, 'ButtonAriaLabel')] || ''),
        (r.className = i[e]),
        B(r, t, ''.concat(e, 'Button'));
    }
    var Fn = function (e, t) {
        var n = Ie();
        n &&
          (k(n, t.closeButtonHtml || ''),
          B(n, t, 'closeButton'),
          re(n, t.showCloseButton),
          n.setAttribute('aria-label', t.closeButtonAriaLabel || ''));
      },
      zn = function (e, t) {
        var n = C();
        n &&
          (qn(n, t.backdrop),
          Rn(n, t.position),
          Wn(n, t.grow),
          B(n, t, 'container'));
      };
    function qn(r, e) {
      typeof e == 'string'
        ? (r.style.background = e)
        : e || d([document.documentElement, document.body], i['no-backdrop']);
    }
    function Rn(r, e) {
      e &&
        (e in i
          ? d(r, i[e])
          : (y('The "position" parameter is not valid, defaulting to "center"'),
            d(r, i.center)));
    }
    function Wn(r, e) {
      e && d(r, i['grow-'.concat(e)]);
    }
    var w = { innerParams: new WeakMap(), domCache: new WeakMap() },
      Nn = [
        'input',
        'file',
        'range',
        'select',
        'radio',
        'checkbox',
        'textarea',
      ],
      Un = function (e, t) {
        var n = f();
        if (n) {
          var o = w.innerParams.get(e),
            a = !o || t.input !== o.input;
          Nn.forEach(function (s) {
            var c = H(n, i[s]);
            c && (Zn(s, t.inputAttributes), (c.className = i[s]), a && b(c));
          }),
            t.input && (a && $n(t), Yn(t));
        }
      },
      $n = function (e) {
        if (e.input) {
          if (!m[e.input]) {
            F(
              'Unexpected type of input! Expected '
                .concat(Object.keys(m).join(' | '), ', got "')
                .concat(e.input, '"')
            );
            return;
          }
          var t = at(e.input),
            n = m[e.input](t, e);
          g(t),
            e.inputAutoFocus &&
              setTimeout(function () {
                et(n);
              });
        }
      },
      Kn = function (e) {
        for (var t = 0; t < e.attributes.length; t++) {
          var n = e.attributes[t].name;
          ['id', 'type', 'value', 'style'].includes(n) || e.removeAttribute(n);
        }
      },
      Zn = function (e, t) {
        var n = pe(f(), e);
        if (n) {
          Kn(n);
          for (var o in t) n.setAttribute(o, t[o]);
        }
      },
      Yn = function (e) {
        var t = at(e.input);
        v(e.customClass) === 'object' && d(t, e.customClass.input);
      },
      Ve = function (e, t) {
        (!e.placeholder || t.inputPlaceholder) &&
          (e.placeholder = t.inputPlaceholder);
      },
      oe = function (e, t, n) {
        if (n.inputLabel) {
          var o = document.createElement('label'),
            a = i['input-label'];
          o.setAttribute('for', e.id),
            (o.className = a),
            v(n.customClass) === 'object' && d(o, n.customClass.inputLabel),
            (o.innerText = n.inputLabel),
            t.insertAdjacentElement('beforebegin', o);
        }
      },
      at = function (e) {
        return H(f(), i[e] || i.input);
      },
      me = function (e, t) {
        ['string', 'number'].includes(v(t))
          ? (e.value = ''.concat(t))
          : Se(t) ||
            y(
              'Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(
                v(t),
                '"'
              )
            );
      },
      m = {};
    (m.text =
      m.email =
      m.password =
      m.number =
      m.tel =
      m.url =
      m.search =
      m.date =
      m['datetime-local'] =
      m.time =
      m.week =
      m.month =
        function (r, e) {
          return (
            me(r, e.inputValue), oe(r, r, e), Ve(r, e), (r.type = e.input), r
          );
        }),
      (m.file = function (r, e) {
        return oe(r, r, e), Ve(r, e), r;
      }),
      (m.range = function (r, e) {
        var t = r.querySelector('input'),
          n = r.querySelector('output');
        return (
          me(t, e.inputValue),
          (t.type = e.input),
          me(n, e.inputValue),
          oe(t, r, e),
          r
        );
      }),
      (m.select = function (r, e) {
        if (((r.textContent = ''), e.inputPlaceholder)) {
          var t = document.createElement('option');
          k(t, e.inputPlaceholder),
            (t.value = ''),
            (t.disabled = !0),
            (t.selected = !0),
            r.appendChild(t);
        }
        return oe(r, r, e), r;
      }),
      (m.radio = function (r) {
        return (r.textContent = ''), r;
      }),
      (m.checkbox = function (r, e) {
        var t = pe(f(), 'checkbox');
        (t.value = '1'), (t.checked = !!e.inputValue);
        var n = r.querySelector('span');
        return k(n, e.inputPlaceholder), t;
      }),
      (m.textarea = function (r, e) {
        me(r, e.inputValue), Ve(r, e), oe(r, r, e);
        var t = function (o) {
          return (
            parseInt(window.getComputedStyle(o).marginLeft) +
            parseInt(window.getComputedStyle(o).marginRight)
          );
        };
        return (
          setTimeout(function () {
            if ('MutationObserver' in window) {
              var n = parseInt(window.getComputedStyle(f()).width),
                o = function () {
                  if (document.body.contains(r)) {
                    var s = r.offsetWidth + t(r);
                    s > n
                      ? (f().style.width = ''.concat(s, 'px'))
                      : q(f(), 'width', e.width);
                  }
                };
              new MutationObserver(o).observe(r, {
                attributes: !0,
                attributeFilter: ['style'],
              });
            }
          }),
          r
        );
      });
    var Jn = function (e, t) {
        var n = Ee();
        n &&
          (je(n),
          B(n, t, 'htmlContainer'),
          t.html
            ? (De(t.html, n), g(n, 'block'))
            : t.text
            ? ((n.textContent = t.text), g(n, 'block'))
            : b(n),
          Un(e, t));
      },
      Xn = function (e, t) {
        var n = Qe();
        n &&
          (je(n),
          re(n, t.footer, 'block'),
          t.footer && De(t.footer, n),
          B(n, t, 'footer'));
      },
      Gn = function (e, t) {
        var n = w.innerParams.get(e),
          o = te();
        if (o) {
          if (n && t.icon === n.icon) {
            lt(o, t), st(o, t);
            return;
          }
          if (!t.icon && !t.iconHtml) {
            b(o);
            return;
          }
          if (t.icon && Object.keys(ce).indexOf(t.icon) === -1) {
            F(
              'Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(
                t.icon,
                '"'
              )
            ),
              b(o);
            return;
          }
          g(o), lt(o, t), st(o, t), d(o, t.showClass && t.showClass.icon);
        }
      },
      st = function (e, t) {
        for (var n = 0, o = Object.entries(ce); n < o.length; n++) {
          var a = rn(o[n], 2),
            s = a[0],
            c = a[1];
          t.icon !== s && L(e, c);
        }
        d(e, t.icon && ce[t.icon]), nr(e, t), Qn(), B(e, t, 'icon');
      },
      Qn = function () {
        var e = f();
        if (e)
          for (
            var t = window
                .getComputedStyle(e)
                .getPropertyValue('background-color'),
              n = e.querySelectorAll(
                '[class^=swal2-success-circular-line], .swal2-success-fix'
              ),
              o = 0;
            o < n.length;
            o++
          )
            n[o].style.backgroundColor = t;
      },
      er = `
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,
      tr = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,
      lt = function (e, t) {
        if (!(!t.icon && !t.iconHtml)) {
          var n = e.innerHTML,
            o = '';
          if (t.iconHtml) o = ct(t.iconHtml);
          else if (t.icon === 'success')
            (o = er), (n = n.replace(/ style=".*?"/g, ''));
          else if (t.icon === 'error') o = tr;
          else if (t.icon) {
            var a = { question: '?', warning: '!', info: 'i' };
            o = ct(a[t.icon]);
          }
          n.trim() !== o.trim() && k(e, o);
        }
      },
      nr = function (e, t) {
        if (t.iconColor) {
          (e.style.color = t.iconColor), (e.style.borderColor = t.iconColor);
          for (
            var n = 0,
              o = [
                '.swal2-success-line-tip',
                '.swal2-success-line-long',
                '.swal2-x-mark-line-left',
                '.swal2-x-mark-line-right',
              ];
            n < o.length;
            n++
          ) {
            var a = o[n];
            nt(e, a, 'background-color', t.iconColor);
          }
          nt(e, '.swal2-success-ring', 'border-color', t.iconColor);
        }
      },
      ct = function (e) {
        return '<div class="'
          .concat(i['icon-content'], '">')
          .concat(e, '</div>');
      },
      rr = function (e, t) {
        var n = Ge();
        if (n) {
          if (!t.imageUrl) {
            b(n);
            return;
          }
          g(n, ''),
            n.setAttribute('src', t.imageUrl),
            n.setAttribute('alt', t.imageAlt || ''),
            q(n, 'width', t.imageWidth),
            q(n, 'height', t.imageHeight),
            (n.className = i.image),
            B(n, t, 'image');
        }
      },
      or = function (e, t) {
        var n = C(),
          o = f();
        if (!(!n || !o)) {
          if (t.toast) {
            q(n, 'width', t.width), (o.style.width = '100%');
            var a = K();
            a && o.insertBefore(a, te());
          } else q(o, 'width', t.width);
          q(o, 'padding', t.padding),
            t.color && (o.style.color = t.color),
            t.background && (o.style.background = t.background),
            b(de()),
            ir(o, t);
        }
      },
      ir = function (e, t) {
        var n = t.showClass || {};
        (e.className = ''.concat(i.popup, ' ').concat(A(e) ? n.popup : '')),
          t.toast
            ? (d([document.documentElement, document.body], i['toast-shown']),
              d(e, i.toast))
            : d(e, i.modal),
          B(e, t, 'popup'),
          typeof t.customClass == 'string' && d(e, t.customClass),
          t.icon && d(e, i['icon-'.concat(t.icon)]);
      },
      ar = function (e, t) {
        var n = Te();
        if (n) {
          var o = t.progressSteps,
            a = t.currentProgressStep;
          if (!o || o.length === 0 || a === void 0) {
            b(n);
            return;
          }
          g(n),
            (n.textContent = ''),
            a >= o.length &&
              y(
                'Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)'
              ),
            o.forEach(function (s, c) {
              var u = sr(s);
              if (
                (n.appendChild(u),
                c === a && d(u, i['active-progress-step']),
                c !== o.length - 1)
              ) {
                var p = lr(t);
                n.appendChild(p);
              }
            });
        }
      },
      sr = function (e) {
        var t = document.createElement('li');
        return d(t, i['progress-step']), k(t, e), t;
      },
      lr = function (e) {
        var t = document.createElement('li');
        return (
          d(t, i['progress-step-line']),
          e.progressStepsDistance && q(t, 'width', e.progressStepsDistance),
          t
        );
      },
      cr = function (e, t) {
        var n = Xe();
        n &&
          (je(n),
          re(n, t.title || t.titleText, 'block'),
          t.title && De(t.title, n),
          t.titleText && (n.innerText = t.titleText),
          B(n, t, 'title'));
      },
      ut = function (e, t) {
        or(e, t),
          zn(e, t),
          ar(e, t),
          Gn(e, t),
          rr(e, t),
          cr(e, t),
          Fn(e, t),
          Jn(e, t),
          Hn(e, t),
          Xn(e, t);
        var n = f();
        typeof t.didRender == 'function' && n && t.didRender(n);
      },
      ur = function () {
        return A(f());
      },
      dt = function () {
        var e;
        return (e = O()) === null || e === void 0 ? void 0 : e.click();
      },
      dr = function () {
        var e;
        return (e = z()) === null || e === void 0 ? void 0 : e.click();
      },
      fr = function () {
        var e;
        return (e = $()) === null || e === void 0 ? void 0 : e.click();
      },
      Z = Object.freeze({
        cancel: 'cancel',
        backdrop: 'backdrop',
        close: 'close',
        esc: 'esc',
        timer: 'timer',
      }),
      ft = function (e) {
        e.keydownTarget &&
          e.keydownHandlerAdded &&
          (e.keydownTarget.removeEventListener('keydown', e.keydownHandler, {
            capture: e.keydownListenerCapture,
          }),
          (e.keydownHandlerAdded = !1));
      },
      wr = function (e, t, n) {
        ft(e),
          t.toast ||
            ((e.keydownHandler = function (o) {
              return mr(t, o, n);
            }),
            (e.keydownTarget = t.keydownListenerCapture ? window : f()),
            (e.keydownListenerCapture = t.keydownListenerCapture),
            e.keydownTarget.addEventListener('keydown', e.keydownHandler, {
              capture: e.keydownListenerCapture,
            }),
            (e.keydownHandlerAdded = !0));
      },
      _e = function (e, t) {
        var n,
          o = Oe();
        if (o.length) {
          (e = e + t),
            e === o.length ? (e = 0) : e === -1 && (e = o.length - 1),
            o[e].focus();
          return;
        }
        (n = f()) === null || n === void 0 || n.focus();
      },
      wt = ['ArrowRight', 'ArrowDown'],
      pr = ['ArrowLeft', 'ArrowUp'],
      mr = function (e, t, n) {
        e &&
          (t.isComposing ||
            t.keyCode === 229 ||
            (e.stopKeydownPropagation && t.stopPropagation(),
            t.key === 'Enter'
              ? hr(t, e)
              : t.key === 'Tab'
              ? gr(t)
              : [].concat(wt, pr).includes(t.key)
              ? vr(t.key)
              : t.key === 'Escape' && br(t, e, n)));
      },
      hr = function (e, t) {
        if (ue(t.allowEnterKey)) {
          var n = pe(f(), t.input);
          if (
            e.target &&
            n &&
            e.target instanceof HTMLElement &&
            e.target.outerHTML === n.outerHTML
          ) {
            if (['textarea', 'file'].includes(t.input)) return;
            dt(), e.preventDefault();
          }
        }
      },
      gr = function (e) {
        for (var t = e.target, n = Oe(), o = -1, a = 0; a < n.length; a++)
          if (t === n[a]) {
            o = a;
            break;
          }
        e.shiftKey ? _e(o, -1) : _e(o, 1),
          e.stopPropagation(),
          e.preventDefault();
      },
      vr = function (e) {
        var t = ne(),
          n = O(),
          o = z(),
          a = $();
        if (!(!t || !n || !o || !a)) {
          var s = [n, o, a];
          if (
            !(
              document.activeElement instanceof HTMLElement &&
              !s.includes(document.activeElement)
            )
          ) {
            var c = wt.includes(e)
                ? 'nextElementSibling'
                : 'previousElementSibling',
              u = document.activeElement;
            if (u) {
              for (var p = 0; p < t.children.length; p++) {
                if (((u = u[c]), !u)) return;
                if (u instanceof HTMLButtonElement && A(u)) break;
              }
              u instanceof HTMLButtonElement && u.focus();
            }
          }
        }
      },
      br = function (e, t, n) {
        ue(t.allowEscapeKey) && (e.preventDefault(), n(Z.esc));
      },
      Y = {
        swalPromiseResolve: new WeakMap(),
        swalPromiseReject: new WeakMap(),
      },
      yr = function () {
        var e = C(),
          t = Array.from(document.body.children);
        t.forEach(function (n) {
          n.contains(e) ||
            (n.hasAttribute('aria-hidden') &&
              n.setAttribute(
                'data-previous-aria-hidden',
                n.getAttribute('aria-hidden') || ''
              ),
            n.setAttribute('aria-hidden', 'true'));
        });
      },
      pt = function () {
        var e = Array.from(document.body.children);
        e.forEach(function (t) {
          t.hasAttribute('data-previous-aria-hidden')
            ? (t.setAttribute(
                'aria-hidden',
                t.getAttribute('data-previous-aria-hidden') || ''
              ),
              t.removeAttribute('data-previous-aria-hidden'))
            : t.removeAttribute('aria-hidden');
        });
      },
      mt = typeof window < 'u' && !!window.GestureEvent,
      Cr = function () {
        if (mt && !D(document.body, i.iosfix)) {
          var e = document.body.scrollTop;
          (document.body.style.top = ''.concat(e * -1, 'px')),
            d(document.body, i.iosfix),
            xr();
        }
      },
      xr = function () {
        var e = C();
        if (e) {
          var t;
          (e.ontouchstart = function (n) {
            t = kr(n);
          }),
            (e.ontouchmove = function (n) {
              t && (n.preventDefault(), n.stopPropagation());
            });
        }
      },
      kr = function (e) {
        var t = e.target,
          n = C(),
          o = Ee();
        return !n || !o || Ar(e) || Pr(e)
          ? !1
          : t === n ||
              (!rt(n) &&
                t instanceof HTMLElement &&
                t.tagName !== 'INPUT' &&
                t.tagName !== 'TEXTAREA' &&
                !(rt(o) && o.contains(t)));
      },
      Ar = function (e) {
        return (
          e.touches && e.touches.length && e.touches[0].touchType === 'stylus'
        );
      },
      Pr = function (e) {
        return e.touches && e.touches.length > 1;
      },
      Br = function () {
        if (D(document.body, i.iosfix)) {
          var e = parseInt(document.body.style.top, 10);
          L(document.body, i.iosfix),
            (document.body.style.top = ''),
            (document.body.scrollTop = e * -1);
        }
      },
      Sr = function () {
        var e = document.createElement('div');
        (e.className = i['scrollbar-measure']), document.body.appendChild(e);
        var t = e.getBoundingClientRect().width - e.clientWidth;
        return document.body.removeChild(e), t;
      },
      J = null,
      Er = function (e) {
        J === null &&
          (document.body.scrollHeight > window.innerHeight || e === 'scroll') &&
          ((J = parseInt(
            window
              .getComputedStyle(document.body)
              .getPropertyValue('padding-right')
          )),
          (document.body.style.paddingRight = ''.concat(J + Sr(), 'px')));
      },
      Tr = function () {
        J !== null &&
          ((document.body.style.paddingRight = ''.concat(J, 'px')), (J = null));
      };
    function ht(r, e, t, n) {
      we()
        ? vt(r, n)
        : (mn(t).then(function () {
            return vt(r, n);
          }),
          ft(l)),
        mt
          ? (e.setAttribute('style', 'display:none !important'),
            e.removeAttribute('class'),
            (e.innerHTML = ''))
          : e.remove(),
        Le() && (Tr(), Br(), pt()),
        Ir();
    }
    function Ir() {
      L(
        [document.documentElement, document.body],
        [i.shown, i['height-auto'], i['no-backdrop'], i['toast-shown']]
      );
    }
    function V(r) {
      r = Lr(r);
      var e = Y.swalPromiseResolve.get(this),
        t = Or(this);
      this.isAwaitingPromise ? r.isDismissed || (ie(this), e(r)) : t && e(r);
    }
    var Or = function (e) {
      var t = f();
      if (!t) return !1;
      var n = w.innerParams.get(e);
      if (!n || D(t, n.hideClass.popup)) return !1;
      L(t, n.showClass.popup), d(t, n.hideClass.popup);
      var o = C();
      return (
        L(o, n.showClass.backdrop), d(o, n.hideClass.backdrop), jr(e, t, n), !0
      );
    };
    function gt(r) {
      var e = Y.swalPromiseReject.get(this);
      ie(this), e && e(r);
    }
    var ie = function (e) {
        e.isAwaitingPromise &&
          (delete e.isAwaitingPromise, w.innerParams.get(e) || e._destroy());
      },
      Lr = function (e) {
        return typeof e > 'u'
          ? { isConfirmed: !1, isDenied: !1, isDismissed: !0 }
          : Object.assign(
              { isConfirmed: !1, isDenied: !1, isDismissed: !1 },
              e
            );
      },
      jr = function (e, t, n) {
        var o = C(),
          a = W && ot(t);
        typeof n.willClose == 'function' && n.willClose(t),
          a
            ? Mr(e, t, o, n.returnFocus, n.didClose)
            : ht(e, o, n.returnFocus, n.didClose);
      },
      Mr = function (e, t, n, o, a) {
        W &&
          ((l.swalCloseEventFinishedCallback = ht.bind(null, e, n, o, a)),
          t.addEventListener(W, function (s) {
            s.target === t &&
              (l.swalCloseEventFinishedCallback(),
              delete l.swalCloseEventFinishedCallback);
          }));
      },
      vt = function (e, t) {
        setTimeout(function () {
          typeof t == 'function' && t.bind(e.params)(),
            e._destroy && e._destroy();
        });
      },
      X = function (e) {
        var t = f();
        if ((t || new ye(), (t = f()), !!t)) {
          var n = K();
          we() ? b(te()) : Dr(t, e),
            g(n),
            t.setAttribute('data-loading', 'true'),
            t.setAttribute('aria-busy', 'true'),
            t.focus();
        }
      },
      Dr = function (e, t) {
        var n = ne(),
          o = K();
        !n ||
          !o ||
          (!t && A(O()) && (t = O()),
          g(n),
          t &&
            (b(t),
            o.setAttribute('data-button-to-replace', t.className),
            n.insertBefore(o, t)),
          d([e, n], i.loading));
      },
      Hr = function (e, t) {
        t.input === 'select' || t.input === 'radio'
          ? qr(e, t)
          : ['text', 'email', 'number', 'tel', 'textarea'].some(function (n) {
              return n === t.input;
            }) &&
            (Be(t.inputValue) || Se(t.inputValue)) &&
            (X(O()), Rr(e, t));
      },
      Vr = function (e, t) {
        var n = e.getInput();
        if (!n) return null;
        switch (t.input) {
          case 'checkbox':
            return _r(n);
          case 'radio':
            return Fr(n);
          case 'file':
            return zr(n);
          default:
            return t.inputAutoTrim ? n.value.trim() : n.value;
        }
      },
      _r = function (e) {
        return e.checked ? 1 : 0;
      },
      Fr = function (e) {
        return e.checked ? e.value : null;
      },
      zr = function (e) {
        return e.files && e.files.length
          ? e.getAttribute('multiple') !== null
            ? e.files
            : e.files[0]
          : null;
      },
      qr = function (e, t) {
        var n = f();
        if (n) {
          var o = function (s) {
            t.input === 'select'
              ? Wr(n, bt(s), t)
              : t.input === 'radio' && Nr(n, bt(s), t);
          };
          Be(t.inputOptions) || Se(t.inputOptions)
            ? (X(O()),
              Q(t.inputOptions).then(function (a) {
                e.hideLoading(), o(a);
              }))
            : v(t.inputOptions) === 'object'
            ? o(t.inputOptions)
            : F(
                'Unexpected type of inputOptions! Expected object, Map or Promise, got '.concat(
                  v(t.inputOptions)
                )
              );
        }
      },
      Rr = function (e, t) {
        var n = e.getInput();
        n &&
          (b(n),
          Q(t.inputValue)
            .then(function (o) {
              (n.value =
                t.input === 'number'
                  ? ''.concat(parseFloat(o) || 0)
                  : ''.concat(o)),
                g(n),
                n.focus(),
                e.hideLoading();
            })
            .catch(function (o) {
              F('Error in inputValue promise: '.concat(o)),
                (n.value = ''),
                g(n),
                n.focus(),
                e.hideLoading();
            }));
      };
    function Wr(r, e, t) {
      var n = H(r, i.select);
      if (n) {
        var o = function (s, c, u) {
          var p = document.createElement('option');
          (p.value = u),
            k(p, c),
            (p.selected = yt(u, t.inputValue)),
            s.appendChild(p);
        };
        e.forEach(function (a) {
          var s = a[0],
            c = a[1];
          if (Array.isArray(c)) {
            var u = document.createElement('optgroup');
            (u.label = s),
              (u.disabled = !1),
              n.appendChild(u),
              c.forEach(function (p) {
                return o(u, p[1], p[0]);
              });
          } else o(n, c, s);
        }),
          n.focus();
      }
    }
    function Nr(r, e, t) {
      var n = H(r, i.radio);
      if (n) {
        e.forEach(function (a) {
          var s = a[0],
            c = a[1],
            u = document.createElement('input'),
            p = document.createElement('label');
          (u.type = 'radio'),
            (u.name = i.radio),
            (u.value = s),
            yt(s, t.inputValue) && (u.checked = !0);
          var ae = document.createElement('span');
          k(ae, c),
            (ae.className = i.label),
            p.appendChild(u),
            p.appendChild(ae),
            n.appendChild(p);
        });
        var o = n.querySelectorAll('input');
        o.length && o[0].focus();
      }
    }
    var bt = function r(e) {
        var t = [];
        return (
          e instanceof Map
            ? e.forEach(function (n, o) {
                var a = n;
                v(a) === 'object' && (a = r(a)), t.push([o, a]);
              })
            : Object.keys(e).forEach(function (n) {
                var o = e[n];
                v(o) === 'object' && (o = r(o)), t.push([n, o]);
              }),
          t
        );
      },
      yt = function (e, t) {
        return !!t && t.toString() === e.toString();
      },
      he = void 0,
      Ur = function (e) {
        var t = w.innerParams.get(e);
        e.disableButtons(), t.input ? Ct(e, 'confirm') : ze(e, !0);
      },
      $r = function (e) {
        var t = w.innerParams.get(e);
        e.disableButtons(),
          t.returnInputValueOnDeny ? Ct(e, 'deny') : Fe(e, !1);
      },
      Kr = function (e, t) {
        e.disableButtons(), t(Z.cancel);
      },
      Ct = function (e, t) {
        var n = w.innerParams.get(e);
        if (!n.input) {
          F(
            'The "input" parameter is needed to be set when using returnInputValueOn'.concat(
              Pe(t)
            )
          );
          return;
        }
        var o = e.getInput(),
          a = Vr(e, n);
        n.inputValidator
          ? Zr(e, a, t)
          : o && !o.checkValidity()
          ? (e.enableButtons(),
            e.showValidationMessage(n.validationMessage || o.validationMessage))
          : t === 'deny'
          ? Fe(e, a)
          : ze(e, a);
      },
      Zr = function (e, t, n) {
        var o = w.innerParams.get(e);
        e.disableInput();
        var a = Promise.resolve().then(function () {
          return Q(o.inputValidator(t, o.validationMessage));
        });
        a.then(function (s) {
          e.enableButtons(),
            e.enableInput(),
            s ? e.showValidationMessage(s) : n === 'deny' ? Fe(e, t) : ze(e, t);
        });
      },
      Fe = function (e, t) {
        var n = w.innerParams.get(e || he);
        if ((n.showLoaderOnDeny && X(z()), n.preDeny)) {
          e.isAwaitingPromise = !0;
          var o = Promise.resolve().then(function () {
            return Q(n.preDeny(t, n.validationMessage));
          });
          o.then(function (a) {
            a === !1
              ? (e.hideLoading(), ie(e))
              : e.close({ isDenied: !0, value: typeof a > 'u' ? t : a });
          }).catch(function (a) {
            return kt(e || he, a);
          });
        } else e.close({ isDenied: !0, value: t });
      },
      xt = function (e, t) {
        e.close({ isConfirmed: !0, value: t });
      },
      kt = function (e, t) {
        e.rejectPromise(t);
      },
      ze = function (e, t) {
        var n = w.innerParams.get(e || he);
        if ((n.showLoaderOnConfirm && X(), n.preConfirm)) {
          e.resetValidationMessage(), (e.isAwaitingPromise = !0);
          var o = Promise.resolve().then(function () {
            return Q(n.preConfirm(t, n.validationMessage));
          });
          o.then(function (a) {
            A(de()) || a === !1
              ? (e.hideLoading(), ie(e))
              : xt(e, typeof a > 'u' ? t : a);
          }).catch(function (a) {
            return kt(e || he, a);
          });
        } else xt(e, t);
      };
    function ge() {
      var r = w.innerParams.get(this);
      if (r) {
        var e = w.domCache.get(this);
        b(e.loader),
          we() ? r.icon && g(te()) : Yr(e),
          L([e.popup, e.actions], i.loading),
          e.popup.removeAttribute('aria-busy'),
          e.popup.removeAttribute('data-loading'),
          (e.confirmButton.disabled = !1),
          (e.denyButton.disabled = !1),
          (e.cancelButton.disabled = !1);
      }
    }
    var Yr = function (e) {
      var t = e.popup.getElementsByClassName(
        e.loader.getAttribute('data-button-to-replace')
      );
      t.length ? g(t[0], 'inline-block') : Pn() && b(e.actions);
    };
    function At() {
      var r = w.innerParams.get(this),
        e = w.domCache.get(this);
      return e ? pe(e.popup, r.input) : null;
    }
    function Pt(r, e, t) {
      var n = w.domCache.get(r);
      e.forEach(function (o) {
        n[o].disabled = t;
      });
    }
    function Bt(r, e) {
      var t = f();
      if (!(!t || !r))
        if (r.type === 'radio')
          for (
            var n = t.querySelectorAll('[name="'.concat(i.radio, '"]')), o = 0;
            o < n.length;
            o++
          )
            n[o].disabled = e;
        else r.disabled = e;
    }
    function St() {
      Pt(this, ['confirmButton', 'denyButton', 'cancelButton'], !1);
    }
    function Et() {
      Pt(this, ['confirmButton', 'denyButton', 'cancelButton'], !0);
    }
    function Tt() {
      Bt(this.getInput(), !1);
    }
    function It() {
      Bt(this.getInput(), !0);
    }
    function Ot(r) {
      var e = w.domCache.get(this),
        t = w.innerParams.get(this);
      k(e.validationMessage, r),
        (e.validationMessage.className = i['validation-message']),
        t.customClass &&
          t.customClass.validationMessage &&
          d(e.validationMessage, t.customClass.validationMessage),
        g(e.validationMessage);
      var n = this.getInput();
      n &&
        (n.setAttribute('aria-invalid', 'true'),
        n.setAttribute('aria-describedby', i['validation-message']),
        et(n),
        d(n, i.inputerror));
    }
    function Lt() {
      var r = w.domCache.get(this);
      r.validationMessage && b(r.validationMessage);
      var e = this.getInput();
      e &&
        (e.removeAttribute('aria-invalid'),
        e.removeAttribute('aria-describedby'),
        L(e, i.inputerror));
    }
    var G = {
        title: '',
        titleText: '',
        text: '',
        html: '',
        footer: '',
        icon: void 0,
        iconColor: void 0,
        iconHtml: void 0,
        template: void 0,
        toast: !1,
        animation: !0,
        showClass: {
          popup: 'swal2-show',
          backdrop: 'swal2-backdrop-show',
          icon: 'swal2-icon-show',
        },
        hideClass: {
          popup: 'swal2-hide',
          backdrop: 'swal2-backdrop-hide',
          icon: 'swal2-icon-hide',
        },
        customClass: {},
        target: 'body',
        color: void 0,
        backdrop: !0,
        heightAuto: !0,
        allowOutsideClick: !0,
        allowEscapeKey: !0,
        allowEnterKey: !0,
        stopKeydownPropagation: !0,
        keydownListenerCapture: !1,
        showConfirmButton: !0,
        showDenyButton: !1,
        showCancelButton: !1,
        preConfirm: void 0,
        preDeny: void 0,
        confirmButtonText: 'OK',
        confirmButtonAriaLabel: '',
        confirmButtonColor: void 0,
        denyButtonText: 'No',
        denyButtonAriaLabel: '',
        denyButtonColor: void 0,
        cancelButtonText: 'Cancel',
        cancelButtonAriaLabel: '',
        cancelButtonColor: void 0,
        buttonsStyling: !0,
        reverseButtons: !1,
        focusConfirm: !0,
        focusDeny: !1,
        focusCancel: !1,
        returnFocus: !0,
        showCloseButton: !1,
        closeButtonHtml: '&times;',
        closeButtonAriaLabel: 'Close this dialog',
        loaderHtml: '',
        showLoaderOnConfirm: !1,
        showLoaderOnDeny: !1,
        imageUrl: void 0,
        imageWidth: void 0,
        imageHeight: void 0,
        imageAlt: '',
        timer: void 0,
        timerProgressBar: !1,
        width: void 0,
        padding: void 0,
        background: void 0,
        input: void 0,
        inputPlaceholder: '',
        inputLabel: '',
        inputValue: '',
        inputOptions: {},
        inputAutoFocus: !0,
        inputAutoTrim: !0,
        inputAttributes: {},
        inputValidator: void 0,
        returnInputValueOnDeny: !1,
        validationMessage: void 0,
        grow: !1,
        position: 'center',
        progressSteps: [],
        currentProgressStep: void 0,
        progressStepsDistance: void 0,
        willOpen: void 0,
        didOpen: void 0,
        didRender: void 0,
        willClose: void 0,
        didClose: void 0,
        didDestroy: void 0,
        scrollbarPadding: !0,
      },
      Jr = [
        'allowEscapeKey',
        'allowOutsideClick',
        'background',
        'buttonsStyling',
        'cancelButtonAriaLabel',
        'cancelButtonColor',
        'cancelButtonText',
        'closeButtonAriaLabel',
        'closeButtonHtml',
        'color',
        'confirmButtonAriaLabel',
        'confirmButtonColor',
        'confirmButtonText',
        'currentProgressStep',
        'customClass',
        'denyButtonAriaLabel',
        'denyButtonColor',
        'denyButtonText',
        'didClose',
        'didDestroy',
        'footer',
        'hideClass',
        'html',
        'icon',
        'iconColor',
        'iconHtml',
        'imageAlt',
        'imageHeight',
        'imageUrl',
        'imageWidth',
        'preConfirm',
        'preDeny',
        'progressSteps',
        'returnFocus',
        'reverseButtons',
        'showCancelButton',
        'showCloseButton',
        'showConfirmButton',
        'showDenyButton',
        'text',
        'title',
        'titleText',
        'willClose',
      ],
      Xr = {},
      Gr = [
        'allowOutsideClick',
        'allowEnterKey',
        'backdrop',
        'focusConfirm',
        'focusDeny',
        'focusCancel',
        'returnFocus',
        'heightAuto',
        'keydownListenerCapture',
      ],
      jt = function (e) {
        return Object.prototype.hasOwnProperty.call(G, e);
      },
      Mt = function (e) {
        return Jr.indexOf(e) !== -1;
      },
      Dt = function (e) {
        return Xr[e];
      },
      Qr = function (e) {
        jt(e) || y('Unknown parameter "'.concat(e, '"'));
      },
      eo = function (e) {
        Gr.includes(e) &&
          y('The parameter "'.concat(e, '" is incompatible with toasts'));
      },
      to = function (e) {
        var t = Dt(e);
        t && bn(e, t);
      },
      no = function (e) {
        e.backdrop === !1 &&
          e.allowOutsideClick &&
          y(
            '"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'
          );
        for (var t in e) Qr(t), e.toast && eo(t), to(t);
      };
    function Ht(r) {
      var e = f(),
        t = w.innerParams.get(this);
      if (!e || D(e, t.hideClass.popup)) {
        y(
          "You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup."
        );
        return;
      }
      var n = ro(r),
        o = Object.assign({}, t, n);
      ut(this, o),
        w.innerParams.set(this, o),
        Object.defineProperties(this, {
          params: {
            value: Object.assign({}, this.params, r),
            writable: !1,
            enumerable: !0,
          },
        });
    }
    var ro = function (e) {
      var t = {};
      return (
        Object.keys(e).forEach(function (n) {
          Mt(n) ? (t[n] = e[n]) : y('Invalid parameter to update: '.concat(n));
        }),
        t
      );
    };
    function Vt() {
      var r = w.domCache.get(this),
        e = w.innerParams.get(this);
      if (!e) {
        _t(this);
        return;
      }
      r.popup &&
        l.swalCloseEventFinishedCallback &&
        (l.swalCloseEventFinishedCallback(),
        delete l.swalCloseEventFinishedCallback),
        typeof e.didDestroy == 'function' && e.didDestroy(),
        oo(this);
    }
    var oo = function (e) {
        _t(e),
          delete e.params,
          delete l.keydownHandler,
          delete l.keydownTarget,
          delete l.currentInstance;
      },
      _t = function (e) {
        e.isAwaitingPromise
          ? (qe(w, e), (e.isAwaitingPromise = !0))
          : (qe(Y, e),
            qe(w, e),
            delete e.isAwaitingPromise,
            delete e.disableButtons,
            delete e.enableButtons,
            delete e.getInput,
            delete e.disableInput,
            delete e.enableInput,
            delete e.hideLoading,
            delete e.disableLoading,
            delete e.showValidationMessage,
            delete e.resetValidationMessage,
            delete e.close,
            delete e.closePopup,
            delete e.closeModal,
            delete e.closeToast,
            delete e.rejectPromise,
            delete e.update,
            delete e._destroy);
      },
      qe = function (e, t) {
        for (var n in e) e[n].delete(t);
      },
      io = Object.freeze({
        __proto__: null,
        _destroy: Vt,
        close: V,
        closeModal: V,
        closePopup: V,
        closeToast: V,
        disableButtons: Et,
        disableInput: It,
        disableLoading: ge,
        enableButtons: St,
        enableInput: Tt,
        getInput: At,
        handleAwaitingPromise: ie,
        hideLoading: ge,
        rejectPromise: gt,
        resetValidationMessage: Lt,
        showValidationMessage: Ot,
        update: Ht,
      }),
      ao = function (e, t, n) {
        e.toast ? so(e, t, n) : (co(t), uo(t), fo(e, t, n));
      },
      so = function (e, t, n) {
        t.popup.onclick = function () {
          (e && (lo(e) || e.timer || e.input)) || n(Z.close);
        };
      },
      lo = function (e) {
        return !!(
          e.showConfirmButton ||
          e.showDenyButton ||
          e.showCancelButton ||
          e.showCloseButton
        );
      },
      ve = !1,
      co = function (e) {
        e.popup.onmousedown = function () {
          e.container.onmouseup = function (t) {
            (e.container.onmouseup = function () {}),
              t.target === e.container && (ve = !0);
          };
        };
      },
      uo = function (e) {
        e.container.onmousedown = function (t) {
          t.target === e.container && t.preventDefault(),
            (e.popup.onmouseup = function (n) {
              (e.popup.onmouseup = function () {}),
                (n.target === e.popup ||
                  (n.target instanceof HTMLElement &&
                    e.popup.contains(n.target))) &&
                  (ve = !0);
            });
        };
      },
      fo = function (e, t, n) {
        t.container.onclick = function (o) {
          if (ve) {
            ve = !1;
            return;
          }
          o.target === t.container && ue(e.allowOutsideClick) && n(Z.backdrop);
        };
      },
      wo = function (e) {
        return v(e) === 'object' && e.jquery;
      },
      Ft = function (e) {
        return e instanceof Element || wo(e);
      },
      po = function (e) {
        var t = {};
        return (
          v(e[0]) === 'object' && !Ft(e[0])
            ? Object.assign(t, e[0])
            : ['title', 'html', 'icon'].forEach(function (n, o) {
                var a = e[o];
                typeof a == 'string' || Ft(a)
                  ? (t[n] = a)
                  : a !== void 0 &&
                    F(
                      'Unexpected type of '
                        .concat(n, '! Expected "string" or "Element", got ')
                        .concat(v(a))
                    );
              }),
          t
        );
      };
    function mo() {
      for (
        var r = this, e = arguments.length, t = new Array(e), n = 0;
        n < e;
        n++
      )
        t[n] = arguments[n];
      return Yt(r, t);
    }
    function ho(r) {
      var e = (function (t) {
        function n() {
          return xe(this, n), M(this, n, arguments);
        }
        return (
          Qt(n, t),
          ke(n, [
            {
              key: '_main',
              value: function (a, s) {
                return le(U(n.prototype), '_main', this).call(
                  this,
                  a,
                  Object.assign({}, r, s)
                );
              },
            },
          ])
        );
      })(this);
      return e;
    }
    var go = function () {
        return l.timeout && l.timeout.getTimerLeft();
      },
      zt = function () {
        if (l.timeout) return Bn(), l.timeout.stop();
      },
      qt = function () {
        if (l.timeout) {
          var e = l.timeout.start();
          return Me(e), e;
        }
      },
      vo = function () {
        var e = l.timeout;
        return e && (e.running ? zt() : qt());
      },
      bo = function (e) {
        if (l.timeout) {
          var t = l.timeout.increase(e);
          return Me(t, !0), t;
        }
      },
      yo = function () {
        return !!(l.timeout && l.timeout.isRunning());
      },
      Rt = !1,
      Re = {};
    function Co() {
      var r =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : 'data-swal-template';
      (Re[r] = this),
        Rt || (document.body.addEventListener('click', xo), (Rt = !0));
    }
    var xo = function (e) {
        for (var t = e.target; t && t !== document; t = t.parentNode)
          for (var n in Re) {
            var o = t.getAttribute(n);
            if (o) {
              Re[n].fire({ template: o });
              return;
            }
          }
      },
      ko = Object.freeze({
        __proto__: null,
        argsToParams: po,
        bindClickHandler: Co,
        clickCancel: fr,
        clickConfirm: dt,
        clickDeny: dr,
        enableLoading: X,
        fire: mo,
        getActions: ne,
        getCancelButton: $,
        getCloseButton: Ie,
        getConfirmButton: O,
        getContainer: C,
        getDenyButton: z,
        getFocusableElements: Oe,
        getFooter: Qe,
        getHtmlContainer: Ee,
        getIcon: te,
        getIconContent: yn,
        getImage: Ge,
        getInputLabel: Cn,
        getLoader: K,
        getPopup: f,
        getProgressSteps: Te,
        getTimerLeft: go,
        getTimerProgressBar: fe,
        getTitle: Xe,
        getValidationMessage: de,
        increaseTimer: bo,
        isDeprecatedParameter: Dt,
        isLoading: kn,
        isTimerRunning: yo,
        isUpdatableParameter: Mt,
        isValidParameter: jt,
        isVisible: ur,
        mixin: ho,
        resumeTimer: qt,
        showLoading: X,
        stopTimer: zt,
        toggleTimer: vo,
      }),
      Ao = (function () {
        function r(e, t) {
          xe(this, r),
            (this.callback = e),
            (this.remaining = t),
            (this.running = !1),
            this.start();
        }
        return ke(r, [
          {
            key: 'start',
            value: function () {
              return (
                this.running ||
                  ((this.running = !0),
                  (this.started = new Date()),
                  (this.id = setTimeout(this.callback, this.remaining))),
                this.remaining
              );
            },
          },
          {
            key: 'stop',
            value: function () {
              return (
                this.started &&
                  this.running &&
                  ((this.running = !1),
                  clearTimeout(this.id),
                  (this.remaining -=
                    new Date().getTime() - this.started.getTime())),
                this.remaining
              );
            },
          },
          {
            key: 'increase',
            value: function (t) {
              var n = this.running;
              return (
                n && this.stop(),
                (this.remaining += t),
                n && this.start(),
                this.remaining
              );
            },
          },
          {
            key: 'getTimerLeft',
            value: function () {
              return (
                this.running && (this.stop(), this.start()), this.remaining
              );
            },
          },
          {
            key: 'isRunning',
            value: function () {
              return this.running;
            },
          },
        ]);
      })(),
      Wt = ['swal-title', 'swal-html', 'swal-footer'],
      Po = function (e) {
        var t =
          typeof e.template == 'string'
            ? document.querySelector(e.template)
            : e.template;
        if (!t) return {};
        var n = t.content;
        jo(n);
        var o = Object.assign(
          Bo(n),
          So(n),
          Eo(n),
          To(n),
          Io(n),
          Oo(n),
          Lo(n, Wt)
        );
        return o;
      },
      Bo = function (e) {
        var t = {},
          n = Array.from(e.querySelectorAll('swal-param'));
        return (
          n.forEach(function (o) {
            N(o, ['name', 'value']);
            var a = o.getAttribute('name'),
              s = o.getAttribute('value');
            typeof G[a] == 'boolean'
              ? (t[a] = s !== 'false')
              : v(G[a]) === 'object'
              ? (t[a] = JSON.parse(s))
              : (t[a] = s);
          }),
          t
        );
      },
      So = function (e) {
        var t = {},
          n = Array.from(e.querySelectorAll('swal-function-param'));
        return (
          n.forEach(function (o) {
            var a = o.getAttribute('name'),
              s = o.getAttribute('value');
            t[a] = new Function('return '.concat(s))();
          }),
          t
        );
      },
      Eo = function (e) {
        var t = {},
          n = Array.from(e.querySelectorAll('swal-button'));
        return (
          n.forEach(function (o) {
            N(o, ['type', 'color', 'aria-label']);
            var a = o.getAttribute('type');
            (t[''.concat(a, 'ButtonText')] = o.innerHTML),
              (t['show'.concat(Pe(a), 'Button')] = !0),
              o.hasAttribute('color') &&
                (t[''.concat(a, 'ButtonColor')] = o.getAttribute('color')),
              o.hasAttribute('aria-label') &&
                (t[''.concat(a, 'ButtonAriaLabel')] =
                  o.getAttribute('aria-label'));
          }),
          t
        );
      },
      To = function (e) {
        var t = {},
          n = e.querySelector('swal-image');
        return (
          n &&
            (N(n, ['src', 'width', 'height', 'alt']),
            n.hasAttribute('src') && (t.imageUrl = n.getAttribute('src')),
            n.hasAttribute('width') && (t.imageWidth = n.getAttribute('width')),
            n.hasAttribute('height') &&
              (t.imageHeight = n.getAttribute('height')),
            n.hasAttribute('alt') && (t.imageAlt = n.getAttribute('alt'))),
          t
        );
      },
      Io = function (e) {
        var t = {},
          n = e.querySelector('swal-icon');
        return (
          n &&
            (N(n, ['type', 'color']),
            n.hasAttribute('type') && (t.icon = n.getAttribute('type')),
            n.hasAttribute('color') && (t.iconColor = n.getAttribute('color')),
            (t.iconHtml = n.innerHTML)),
          t
        );
      },
      Oo = function (e) {
        var t = {},
          n = e.querySelector('swal-input');
        n &&
          (N(n, ['type', 'label', 'placeholder', 'value']),
          (t.input = n.getAttribute('type') || 'text'),
          n.hasAttribute('label') && (t.inputLabel = n.getAttribute('label')),
          n.hasAttribute('placeholder') &&
            (t.inputPlaceholder = n.getAttribute('placeholder')),
          n.hasAttribute('value') && (t.inputValue = n.getAttribute('value')));
        var o = Array.from(e.querySelectorAll('swal-input-option'));
        return (
          o.length &&
            ((t.inputOptions = {}),
            o.forEach(function (a) {
              N(a, ['value']);
              var s = a.getAttribute('value'),
                c = a.innerHTML;
              t.inputOptions[s] = c;
            })),
          t
        );
      },
      Lo = function (e, t) {
        var n = {};
        for (var o in t) {
          var a = t[o],
            s = e.querySelector(a);
          s && (N(s, []), (n[a.replace(/^swal-/, '')] = s.innerHTML.trim()));
        }
        return n;
      },
      jo = function (e) {
        var t = Wt.concat([
          'swal-param',
          'swal-function-param',
          'swal-button',
          'swal-image',
          'swal-icon',
          'swal-input',
          'swal-input-option',
        ]);
        Array.from(e.children).forEach(function (n) {
          var o = n.tagName.toLowerCase();
          t.includes(o) || y('Unrecognized element <'.concat(o, '>'));
        });
      },
      N = function (e, t) {
        Array.from(e.attributes).forEach(function (n) {
          t.indexOf(n.name) === -1 &&
            y([
              'Unrecognized attribute "'
                .concat(n.name, '" on <')
                .concat(e.tagName.toLowerCase(), '>.'),
              ''.concat(
                t.length
                  ? 'Allowed attributes are: '.concat(t.join(', '))
                  : 'To set the value, use HTML within the element.'
              ),
            ]);
        });
      },
      Nt = 10,
      Mo = function (e) {
        var t = C(),
          n = f();
        typeof e.willOpen == 'function' && e.willOpen(n);
        var o = window.getComputedStyle(document.body),
          a = o.overflowY;
        _o(t, n, e),
          setTimeout(function () {
            Ho(t, n);
          }, Nt),
          Le() && (Vo(t, e.scrollbarPadding, a), yr()),
          !we() &&
            !l.previousActiveElement &&
            (l.previousActiveElement = document.activeElement),
          typeof e.didOpen == 'function' &&
            setTimeout(function () {
              return e.didOpen(n);
            }),
          L(t, i['no-transition']);
      },
      Do = function r(e) {
        var t = f();
        if (!(e.target !== t || !W)) {
          var n = C();
          t.removeEventListener(W, r), (n.style.overflowY = 'auto');
        }
      },
      Ho = function (e, t) {
        W && ot(t)
          ? ((e.style.overflowY = 'hidden'), t.addEventListener(W, Do))
          : (e.style.overflowY = 'auto');
      },
      Vo = function (e, t, n) {
        Cr(),
          t && n !== 'hidden' && Er(n),
          setTimeout(function () {
            e.scrollTop = 0;
          });
      },
      _o = function (e, t, n) {
        d(e, n.showClass.backdrop),
          n.animation
            ? (t.style.setProperty('opacity', '0', 'important'),
              g(t, 'grid'),
              setTimeout(function () {
                d(t, n.showClass.popup), t.style.removeProperty('opacity');
              }, Nt))
            : g(t, 'grid'),
          d([document.documentElement, document.body], i.shown),
          n.heightAuto &&
            n.backdrop &&
            !n.toast &&
            d([document.documentElement, document.body], i['height-auto']);
      },
      Ut = {
        email: function (e, t) {
          return /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(e)
            ? Promise.resolve()
            : Promise.resolve(t || 'Invalid email address');
        },
        url: function (e, t) {
          return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(
            e
          )
            ? Promise.resolve()
            : Promise.resolve(t || 'Invalid URL');
        },
      };
    function Fo(r) {
      r.inputValidator ||
        (r.input === 'email' && (r.inputValidator = Ut.email),
        r.input === 'url' && (r.inputValidator = Ut.url));
    }
    function zo(r) {
      (!r.target ||
        (typeof r.target == 'string' && !document.querySelector(r.target)) ||
        (typeof r.target != 'string' && !r.target.appendChild)) &&
        (y('Target parameter is not valid, defaulting to "body"'),
        (r.target = 'body'));
    }
    function qo(r) {
      Fo(r),
        r.showLoaderOnConfirm &&
          !r.preConfirm &&
          y(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),
        zo(r),
        typeof r.title == 'string' &&
          (r.title = r.title
            .split(
              `
`
            )
            .join('<br />')),
        jn(r);
    }
    var j,
      be = new WeakMap(),
      h = (function () {
        function r() {
          if ((xe(this, r), fn(this, be, void 0), !(typeof window > 'u'))) {
            j = this;
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            var o = Object.freeze(this.constructor.argsToParams(t));
            (this.params = o),
              (this.isAwaitingPromise = !1),
              P(be, this, this._main(j.params));
          }
        }
        return ke(r, [
          {
            key: '_main',
            value: function (t) {
              var n =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : {};
              if ((no(Object.assign({}, n, t)), l.currentInstance)) {
                var o = Y.swalPromiseResolve.get(l.currentInstance),
                  a = l.currentInstance.isAwaitingPromise;
                l.currentInstance._destroy(),
                  a || o({ isDismissed: !0 }),
                  Le() && pt();
              }
              l.currentInstance = j;
              var s = Wo(t, n);
              qo(s),
                Object.freeze(s),
                l.timeout && (l.timeout.stop(), delete l.timeout),
                clearTimeout(l.restoreFocusTimeout);
              var c = No(j);
              return ut(j, s), w.innerParams.set(j, s), Ro(j, c, s);
            },
          },
          {
            key: 'then',
            value: function (t) {
              return E(be, this).then(t);
            },
          },
          {
            key: 'finally',
            value: function (t) {
              return E(be, this).finally(t);
            },
          },
        ]);
      })(),
      Ro = function (e, t, n) {
        return new Promise(function (o, a) {
          var s = function (u) {
            e.close({ isDismissed: !0, dismiss: u });
          };
          Y.swalPromiseResolve.set(e, o),
            Y.swalPromiseReject.set(e, a),
            (t.confirmButton.onclick = function () {
              Ur(e);
            }),
            (t.denyButton.onclick = function () {
              $r(e);
            }),
            (t.cancelButton.onclick = function () {
              Kr(e, s);
            }),
            (t.closeButton.onclick = function () {
              s(Z.close);
            }),
            ao(n, t, s),
            wr(l, n, s),
            Hr(e, n),
            Mo(n),
            Uo(l, n, s),
            $o(t, n),
            setTimeout(function () {
              t.container.scrollTop = 0;
            });
        });
      },
      Wo = function (e, t) {
        var n = Po(e),
          o = Object.assign({}, G, t, n, e);
        return (
          (o.showClass = Object.assign({}, G.showClass, o.showClass)),
          (o.hideClass = Object.assign({}, G.hideClass, o.hideClass)),
          o.animation === !1 &&
            ((o.showClass = { backdrop: 'swal2-noanimation' }),
            (o.hideClass = {})),
          o
        );
      },
      No = function (e) {
        var t = {
          popup: f(),
          container: C(),
          actions: ne(),
          confirmButton: O(),
          denyButton: z(),
          cancelButton: $(),
          loader: K(),
          closeButton: Ie(),
          validationMessage: de(),
          progressSteps: Te(),
        };
        return w.domCache.set(e, t), t;
      },
      Uo = function (e, t, n) {
        var o = fe();
        b(o),
          t.timer &&
            ((e.timeout = new Ao(function () {
              n('timer'), delete e.timeout;
            }, t.timer)),
            t.timerProgressBar &&
              (g(o),
              B(o, t, 'timerProgressBar'),
              setTimeout(function () {
                e.timeout && e.timeout.running && Me(t.timer);
              })));
      },
      $o = function (e, t) {
        if (!t.toast) {
          if (!ue(t.allowEnterKey)) {
            Zo();
            return;
          }
          Ko(e, t) || _e(-1, 1);
        }
      },
      Ko = function (e, t) {
        return t.focusDeny && A(e.denyButton)
          ? (e.denyButton.focus(), !0)
          : t.focusCancel && A(e.cancelButton)
          ? (e.cancelButton.focus(), !0)
          : t.focusConfirm && A(e.confirmButton)
          ? (e.confirmButton.focus(), !0)
          : !1;
      },
      Zo = function () {
        document.activeElement instanceof HTMLElement &&
          typeof document.activeElement.blur == 'function' &&
          document.activeElement.blur();
      };
    if (
      typeof window < 'u' &&
      /^ru\b/.test(navigator.language) &&
      location.host.match(/\.(ru|su|by|xn--p1ai)$/)
    ) {
      var $t = new Date(),
        Kt = localStorage.getItem('swal-initiation');
      Kt
        ? ($t.getTime() - Date.parse(Kt)) / (1e3 * 60 * 60 * 24) > 3 &&
          setTimeout(function () {
            document.body.style.pointerEvents = 'none';
            var r = document.createElement('audio');
            (r.src =
              'https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3'),
              (r.loop = !0),
              document.body.appendChild(r),
              setTimeout(function () {
                r.play().catch(function () {});
              }, 2500);
          }, 500)
        : localStorage.setItem('swal-initiation', ''.concat($t));
    }
    (h.prototype.disableButtons = Et),
      (h.prototype.enableButtons = St),
      (h.prototype.getInput = At),
      (h.prototype.disableInput = It),
      (h.prototype.enableInput = Tt),
      (h.prototype.hideLoading = ge),
      (h.prototype.disableLoading = ge),
      (h.prototype.showValidationMessage = Ot),
      (h.prototype.resetValidationMessage = Lt),
      (h.prototype.close = V),
      (h.prototype.closePopup = V),
      (h.prototype.closeModal = V),
      (h.prototype.closeToast = V),
      (h.prototype.rejectPromise = gt),
      (h.prototype.update = Ht),
      (h.prototype._destroy = Vt),
      Object.assign(h, ko),
      Object.keys(io).forEach(function (r) {
        h[r] = function () {
          if (j && j[r]) {
            var e;
            return (e = j)[r].apply(e, arguments);
          }
          return null;
        };
      }),
      (h.DismissReason = Z),
      (h.version = '11.11.0');
    var ye = h;
    return (ye.default = ye), ye;
  }),
    typeof _ < 'u' &&
      _.Sweetalert2 &&
      (_.swal = _.sweetAlert = _.Swal = _.SweetAlert = _.Sweetalert2),
    typeof document < 'u' &&
      (function (I, M) {
        var E = I.createElement('style');
        if ((I.getElementsByTagName('head')[0].appendChild(E), E.styleSheet))
          E.styleSheet.disabled || (E.styleSheet.cssText = M);
        else
          try {
            E.innerHTML = M;
          } catch {
            E.innerText = M;
          }
      })(
        document,
        '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}'
      );
})(Zt);
var Xo = Zt.exports;
const Ne = Jo(Xo),
  ti = () => {
    const [S, Ue] = We.useState(''),
      [I, M] = We.useState('');
    We.useEffect(() => {
      localStorage.getItem('userData') && (window.location.href = '/casos');
    }, []);
    const E = async () => {
      if ((console.log('login', S, I), S !== '' && I !== '')) {
        Ne.fire({
          title: 'Espere por favor',
          html: 'Verificando datos',
          allowOutsideClick: !1,
          didOpen: () => {
            Ne.showLoading();
          },
        });
        try {
          const P = await Yo.post('http://192.168.1.50:3000/usuarios/login', {
            usuario: S,
            clave: I,
          });
          console.log(P.data),
            P.data &&
              (localStorage.setItem('userData', JSON.stringify(P.data)),
              (window.location.href = '/casos'));
        } catch {
          Ne.fire({
            icon: 'error',
            title: 'Error',
            text: 'Usuario o contraseña incorrectos',
          });
        }
      }
    };
    return T.jsxs('div', {
      className: 'py-5',
      children: [
        T.jsx('div', {
          className: 'max-w-7xl mx-auto px-0 sm:px-6 lg:px-8',
          children: T.jsxs('div', {
            className: 'max-w-4xl mx-auto text-center',
            children: [
              T.jsx('h2', {
                className:
                  'text-3xl text-primary-450 sm:text-3xl font-bold mb-6',
                children: 'Iniciar sesión',
              }),
              T.jsxs('div', {
                className: 'w-ful',
                children: [
                  T.jsx('input', {
                    type: 'text',
                    placeholder: 'Correo electrónico',
                    className:
                      ' border border-gray-300 rounded-lg shadow-sm px-4 py-2 mb-4 text-gray-900',
                    onChange: (P) => Ue(P.target.value),
                  }),
                  T.jsx('br', {}),
                  T.jsx('input', {
                    type: 'password',
                    placeholder: 'Contraseña',
                    className:
                      'border border-gray-300 rounded-lg shadow-sm px-4 py-2 mb-4 text-gray-900',
                    onChange: (P) => M(P.target.value),
                  }),
                  T.jsx('br', {}),
                  T.jsx('button', {
                    className:
                      'bg-primary-450 text-white rounded-lg shadow-sm px-4 py-2 mb-4',
                    onClick: E,
                    children: 'Iniciar sesión',
                  }),
                ],
              }),
            ],
          }),
        }),
        T.jsx('style', {
          children: `
            .swal2-confirm{
              background-color: #0A6C48 !important;
              color: #fff !important;
              
            }
            .swal2-modal{
              background-color: #23262D !important;
              color: #fff !important;
            }
          `,
        }),
      ],
    });
  };
export { ti as default };
