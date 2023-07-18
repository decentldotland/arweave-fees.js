var FE = Object.defineProperty;
var ME = (e, i, r) => i in e ? FE(e, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[i] = r;
var ae = (e, i, r) => (ME(e, typeof i != "symbol" ? i + "" : i, r), r);
var se = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function mf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var as = {}, Da = {}, Af = {}, ip = { exports: {} };
(function(e) {
  (function(i) {
    var r, a = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, o = Math.ceil, u = Math.floor, c = "[BigNumber Error] ", d = c + "Number primitive has more than 15 significant digits: ", g = 1e14, f = 14, p = 9007199254740991, S = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], w = 1e7, m = 1e9;
    function I(H) {
      var L, K, ee, q = Q.prototype = { constructor: Q, toString: null, valueOf: null }, ne = new Q(1), le = 20, ve = 4, Re = -7, Fe = 21, rt = -1e7, Ge = 1e7, Ye = !1, Pr = 1, Rt = 0, yt = {
        prefix: "",
        groupSize: 3,
        secondaryGroupSize: 0,
        groupSeparator: ",",
        decimalSeparator: ".",
        fractionGroupSize: 0,
        fractionGroupSeparator: " ",
        // non-breaking space
        suffix: ""
      }, vr = "0123456789abcdefghijklmnopqrstuvwxyz", si = !0;
      function Q(y, A) {
        var b, U, R, B, $, T, D, F, k = this;
        if (!(k instanceof Q))
          return new Q(y, A);
        if (A == null) {
          if (y && y._isBigNumber === !0) {
            k.s = y.s, !y.c || y.e > Ge ? k.c = k.e = null : y.e < rt ? k.c = [k.e = 0] : (k.e = y.e, k.c = y.c.slice());
            return;
          }
          if ((T = typeof y == "number") && y * 0 == 0) {
            if (k.s = 1 / y < 0 ? (y = -y, -1) : 1, y === ~~y) {
              for (B = 0, $ = y; $ >= 10; $ /= 10, B++)
                ;
              B > Ge ? k.c = k.e = null : (k.e = B, k.c = [y]);
              return;
            }
            F = String(y);
          } else {
            if (!a.test(F = String(y)))
              return ee(k, F, T);
            k.s = F.charCodeAt(0) == 45 ? (F = F.slice(1), -1) : 1;
          }
          (B = F.indexOf(".")) > -1 && (F = F.replace(".", "")), ($ = F.search(/e/i)) > 0 ? (B < 0 && (B = $), B += +F.slice($ + 1), F = F.substring(0, $)) : B < 0 && (B = F.length);
        } else {
          if (te(A, 2, vr.length, "Base"), A == 10 && si)
            return k = new Q(y), Qe(k, le + k.e + 1, ve);
          if (F = String(y), T = typeof y == "number") {
            if (y * 0 != 0)
              return ee(k, F, T, A);
            if (k.s = 1 / y < 0 ? (F = F.slice(1), -1) : 1, Q.DEBUG && F.replace(/^0\.0*|\./, "").length > 15)
              throw Error(d + y);
          } else
            k.s = F.charCodeAt(0) === 45 ? (F = F.slice(1), -1) : 1;
          for (b = vr.slice(0, A), B = $ = 0, D = F.length; $ < D; $++)
            if (b.indexOf(U = F.charAt($)) < 0) {
              if (U == ".") {
                if ($ > B) {
                  B = D;
                  continue;
                }
              } else if (!R && (F == F.toUpperCase() && (F = F.toLowerCase()) || F == F.toLowerCase() && (F = F.toUpperCase()))) {
                R = !0, $ = -1, B = 0;
                continue;
              }
              return ee(k, String(y), T, A);
            }
          T = !1, F = K(F, A, 10, k.s), (B = F.indexOf(".")) > -1 ? F = F.replace(".", "") : B = F.length;
        }
        for ($ = 0; F.charCodeAt($) === 48; $++)
          ;
        for (D = F.length; F.charCodeAt(--D) === 48; )
          ;
        if (F = F.slice($, ++D)) {
          if (D -= $, T && Q.DEBUG && D > 15 && (y > p || y !== u(y)))
            throw Error(d + k.s * y);
          if ((B = B - $ - 1) > Ge)
            k.c = k.e = null;
          else if (B < rt)
            k.c = [k.e = 0];
          else {
            if (k.e = B, k.c = [], $ = (B + 1) % f, B < 0 && ($ += f), $ < D) {
              for ($ && k.c.push(+F.slice(0, $)), D -= f; $ < D; )
                k.c.push(+F.slice($, $ += f));
              $ = f - (F = F.slice($)).length;
            } else
              $ -= D;
            for (; $--; F += "0")
              ;
            k.c.push(+F);
          }
        } else
          k.c = [k.e = 0];
      }
      Q.clone = I, Q.ROUND_UP = 0, Q.ROUND_DOWN = 1, Q.ROUND_CEIL = 2, Q.ROUND_FLOOR = 3, Q.ROUND_HALF_UP = 4, Q.ROUND_HALF_DOWN = 5, Q.ROUND_HALF_EVEN = 6, Q.ROUND_HALF_CEIL = 7, Q.ROUND_HALF_FLOOR = 8, Q.EUCLID = 9, Q.config = Q.set = function(y) {
        var A, b;
        if (y != null)
          if (typeof y == "object") {
            if (y.hasOwnProperty(A = "DECIMAL_PLACES") && (b = y[A], te(b, 0, m, A), le = b), y.hasOwnProperty(A = "ROUNDING_MODE") && (b = y[A], te(b, 0, 8, A), ve = b), y.hasOwnProperty(A = "EXPONENTIAL_AT") && (b = y[A], b && b.pop ? (te(b[0], -m, 0, A), te(b[1], 0, m, A), Re = b[0], Fe = b[1]) : (te(b, -m, m, A), Re = -(Fe = b < 0 ? -b : b))), y.hasOwnProperty(A = "RANGE"))
              if (b = y[A], b && b.pop)
                te(b[0], -m, -1, A), te(b[1], 1, m, A), rt = b[0], Ge = b[1];
              else if (te(b, -m, m, A), b)
                rt = -(Ge = b < 0 ? -b : b);
              else
                throw Error(c + A + " cannot be zero: " + b);
            if (y.hasOwnProperty(A = "CRYPTO"))
              if (b = y[A], b === !!b)
                if (b)
                  if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
                    Ye = b;
                  else
                    throw Ye = !b, Error(c + "crypto unavailable");
                else
                  Ye = b;
              else
                throw Error(c + A + " not true or false: " + b);
            if (y.hasOwnProperty(A = "MODULO_MODE") && (b = y[A], te(b, 0, 9, A), Pr = b), y.hasOwnProperty(A = "POW_PRECISION") && (b = y[A], te(b, 0, m, A), Rt = b), y.hasOwnProperty(A = "FORMAT"))
              if (b = y[A], typeof b == "object")
                yt = b;
              else
                throw Error(c + A + " not an object: " + b);
            if (y.hasOwnProperty(A = "ALPHABET"))
              if (b = y[A], typeof b == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(b))
                si = b.slice(0, 10) == "0123456789", vr = b;
              else
                throw Error(c + A + " invalid: " + b);
          } else
            throw Error(c + "Object expected: " + y);
        return {
          DECIMAL_PLACES: le,
          ROUNDING_MODE: ve,
          EXPONENTIAL_AT: [Re, Fe],
          RANGE: [rt, Ge],
          CRYPTO: Ye,
          MODULO_MODE: Pr,
          POW_PRECISION: Rt,
          FORMAT: yt,
          ALPHABET: vr
        };
      }, Q.isBigNumber = function(y) {
        if (!y || y._isBigNumber !== !0)
          return !1;
        if (!Q.DEBUG)
          return !0;
        var A, b, U = y.c, R = y.e, B = y.s;
        e:
          if ({}.toString.call(U) == "[object Array]") {
            if ((B === 1 || B === -1) && R >= -m && R <= m && R === u(R)) {
              if (U[0] === 0) {
                if (R === 0 && U.length === 1)
                  return !0;
                break e;
              }
              if (A = (R + 1) % f, A < 1 && (A += f), String(U[0]).length == A) {
                for (A = 0; A < U.length; A++)
                  if (b = U[A], b < 0 || b >= g || b !== u(b))
                    break e;
                if (b !== 0)
                  return !0;
              }
            }
          } else if (U === null && R === null && (B === null || B === 1 || B === -1))
            return !0;
        throw Error(c + "Invalid BigNumber: " + y);
      }, Q.maximum = Q.max = function() {
        return Qr(arguments, q.lt);
      }, Q.minimum = Q.min = function() {
        return Qr(arguments, q.gt);
      }, Q.random = function() {
        var y = 9007199254740992, A = Math.random() * y & 2097151 ? function() {
          return u(Math.random() * y);
        } : function() {
          return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
        };
        return function(b) {
          var U, R, B, $, T, D = 0, F = [], k = new Q(ne);
          if (b == null ? b = le : te(b, 0, m), $ = o(b / f), Ye)
            if (crypto.getRandomValues) {
              for (U = crypto.getRandomValues(new Uint32Array($ *= 2)); D < $; )
                T = U[D] * 131072 + (U[D + 1] >>> 11), T >= 9e15 ? (R = crypto.getRandomValues(new Uint32Array(2)), U[D] = R[0], U[D + 1] = R[1]) : (F.push(T % 1e14), D += 2);
              D = $ / 2;
            } else if (crypto.randomBytes) {
              for (U = crypto.randomBytes($ *= 7); D < $; )
                T = (U[D] & 31) * 281474976710656 + U[D + 1] * 1099511627776 + U[D + 2] * 4294967296 + U[D + 3] * 16777216 + (U[D + 4] << 16) + (U[D + 5] << 8) + U[D + 6], T >= 9e15 ? crypto.randomBytes(7).copy(U, D) : (F.push(T % 1e14), D += 7);
              D = $ / 7;
            } else
              throw Ye = !1, Error(c + "crypto unavailable");
          if (!Ye)
            for (; D < $; )
              T = A(), T < 9e15 && (F[D++] = T % 1e14);
          for ($ = F[--D], b %= f, $ && b && (T = S[f - b], F[D] = u($ / T) * T); F[D] === 0; F.pop(), D--)
            ;
          if (D < 0)
            F = [B = 0];
          else {
            for (B = -1; F[0] === 0; F.splice(0, 1), B -= f)
              ;
            for (D = 1, T = F[0]; T >= 10; T /= 10, D++)
              ;
            D < f && (B -= f - D);
          }
          return k.e = B, k.c = F, k;
        };
      }(), Q.sum = function() {
        for (var y = 1, A = arguments, b = new Q(A[0]); y < A.length; )
          b = b.plus(A[y++]);
        return b;
      }, K = function() {
        var y = "0123456789";
        function A(b, U, R, B) {
          for (var $, T = [0], D, F = 0, k = b.length; F < k; ) {
            for (D = T.length; D--; T[D] *= U)
              ;
            for (T[0] += B.indexOf(b.charAt(F++)), $ = 0; $ < T.length; $++)
              T[$] > R - 1 && (T[$ + 1] == null && (T[$ + 1] = 0), T[$ + 1] += T[$] / R | 0, T[$] %= R);
          }
          return T.reverse();
        }
        return function(b, U, R, B, $) {
          var T, D, F, k, W, oe, fe, Te, Pe = b.indexOf("."), Ke = le, ye = ve;
          for (Pe >= 0 && (k = Rt, Rt = 0, b = b.replace(".", ""), Te = new Q(U), oe = Te.pow(b.length - Pe), Rt = k, Te.c = A(
            P(C(oe.c), oe.e, "0"),
            10,
            R,
            y
          ), Te.e = Te.c.length), fe = A(b, U, R, $ ? (T = vr, y) : (T = y, vr)), F = k = fe.length; fe[--k] == 0; fe.pop())
            ;
          if (!fe[0])
            return T.charAt(0);
          if (Pe < 0 ? --F : (oe.c = fe, oe.e = F, oe.s = B, oe = L(oe, Te, Ke, ye, R), fe = oe.c, W = oe.r, F = oe.e), D = F + Ke + 1, Pe = fe[D], k = R / 2, W = W || D < 0 || fe[D + 1] != null, W = ye < 4 ? (Pe != null || W) && (ye == 0 || ye == (oe.s < 0 ? 3 : 2)) : Pe > k || Pe == k && (ye == 4 || W || ye == 6 && fe[D - 1] & 1 || ye == (oe.s < 0 ? 8 : 7)), D < 1 || !fe[0])
            b = W ? P(T.charAt(1), -Ke, T.charAt(0)) : T.charAt(0);
          else {
            if (fe.length = D, W)
              for (--R; ++fe[--D] > R; )
                fe[D] = 0, D || (++F, fe = [1].concat(fe));
            for (k = fe.length; !fe[--k]; )
              ;
            for (Pe = 0, b = ""; Pe <= k; b += T.charAt(fe[Pe++]))
              ;
            b = P(b, F, T.charAt(0));
          }
          return b;
        };
      }(), L = function() {
        function y(U, R, B) {
          var $, T, D, F, k = 0, W = U.length, oe = R % w, fe = R / w | 0;
          for (U = U.slice(); W--; )
            D = U[W] % w, F = U[W] / w | 0, $ = fe * D + F * oe, T = oe * D + $ % w * w + k, k = (T / B | 0) + ($ / w | 0) + fe * F, U[W] = T % B;
          return k && (U = [k].concat(U)), U;
        }
        function A(U, R, B, $) {
          var T, D;
          if (B != $)
            D = B > $ ? 1 : -1;
          else
            for (T = D = 0; T < B; T++)
              if (U[T] != R[T]) {
                D = U[T] > R[T] ? 1 : -1;
                break;
              }
          return D;
        }
        function b(U, R, B, $) {
          for (var T = 0; B--; )
            U[B] -= T, T = U[B] < R[B] ? 1 : 0, U[B] = T * $ + U[B] - R[B];
          for (; !U[0] && U.length > 1; U.splice(0, 1))
            ;
        }
        return function(U, R, B, $, T) {
          var D, F, k, W, oe, fe, Te, Pe, Ke, ye, be, Ze, Br, en, tn, mt, wr, ft = U.s == R.s ? 1 : -1, je = U.c, ke = R.c;
          if (!je || !je[0] || !ke || !ke[0])
            return new Q(
              // Return NaN if either NaN, or both Infinity or 0.
              !U.s || !R.s || (je ? ke && je[0] == ke[0] : !ke) ? NaN : (
                // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
                je && je[0] == 0 || !ke ? ft * 0 : ft / 0
              )
            );
          for (Pe = new Q(ft), Ke = Pe.c = [], F = U.e - R.e, ft = B + F + 1, T || (T = g, F = z(U.e / f) - z(R.e / f), ft = ft / f | 0), k = 0; ke[k] == (je[k] || 0); k++)
            ;
          if (ke[k] > (je[k] || 0) && F--, ft < 0)
            Ke.push(1), W = !0;
          else {
            for (en = je.length, mt = ke.length, k = 0, ft += 2, oe = u(T / (ke[0] + 1)), oe > 1 && (ke = y(ke, oe, T), je = y(je, oe, T), mt = ke.length, en = je.length), Br = mt, ye = je.slice(0, mt), be = ye.length; be < mt; ye[be++] = 0)
              ;
            wr = ke.slice(), wr = [0].concat(wr), tn = ke[0], ke[1] >= T / 2 && tn++;
            do {
              if (oe = 0, D = A(ke, ye, mt, be), D < 0) {
                if (Ze = ye[0], mt != be && (Ze = Ze * T + (ye[1] || 0)), oe = u(Ze / tn), oe > 1)
                  for (oe >= T && (oe = T - 1), fe = y(ke, oe, T), Te = fe.length, be = ye.length; A(fe, ye, Te, be) == 1; )
                    oe--, b(fe, mt < Te ? wr : ke, Te, T), Te = fe.length, D = 1;
                else
                  oe == 0 && (D = oe = 1), fe = ke.slice(), Te = fe.length;
                if (Te < be && (fe = [0].concat(fe)), b(ye, fe, be, T), be = ye.length, D == -1)
                  for (; A(ke, ye, mt, be) < 1; )
                    oe++, b(ye, mt < be ? wr : ke, be, T), be = ye.length;
              } else
                D === 0 && (oe++, ye = [0]);
              Ke[k++] = oe, ye[0] ? ye[be++] = je[Br] || 0 : (ye = [je[Br]], be = 1);
            } while ((Br++ < en || ye[0] != null) && ft--);
            W = ye[0] != null, Ke[0] || Ke.splice(0, 1);
          }
          if (T == g) {
            for (k = 1, ft = Ke[0]; ft >= 10; ft /= 10, k++)
              ;
            Qe(Pe, B + (Pe.e = k + F * f - 1) + 1, $, W);
          } else
            Pe.e = F, Pe.r = +W;
          return Pe;
        };
      }();
      function ir(y, A, b, U) {
        var R, B, $, T, D;
        if (b == null ? b = ve : te(b, 0, 8), !y.c)
          return y.toString();
        if (R = y.c[0], $ = y.e, A == null)
          D = C(y.c), D = U == 1 || U == 2 && ($ <= Re || $ >= Fe) ? j(D, $) : P(D, $, "0");
        else if (y = Qe(new Q(y), A, b), B = y.e, D = C(y.c), T = D.length, U == 1 || U == 2 && (A <= B || B <= Re)) {
          for (; T < A; D += "0", T++)
            ;
          D = j(D, B);
        } else if (A -= $, D = P(D, B, "0"), B + 1 > T) {
          if (--A > 0)
            for (D += "."; A--; D += "0")
              ;
        } else if (A += B - T, A > 0)
          for (B + 1 == T && (D += "."); A--; D += "0")
            ;
        return y.s < 0 && R ? "-" + D : D;
      }
      function Qr(y, A) {
        for (var b, U = 1, R = new Q(y[0]); U < y.length; U++)
          if (b = new Q(y[U]), b.s)
            A.call(R, b) && (R = b);
          else {
            R = b;
            break;
          }
        return R;
      }
      function oi(y, A, b) {
        for (var U = 1, R = A.length; !A[--R]; A.pop())
          ;
        for (R = A[0]; R >= 10; R /= 10, U++)
          ;
        return (b = U + b * f - 1) > Ge ? y.c = y.e = null : b < rt ? y.c = [y.e = 0] : (y.e = b, y.c = A), y;
      }
      ee = function() {
        var y = /^(-?)0([xbo])(?=\w[\w.]*$)/i, A = /^([^.]+)\.$/, b = /^\.([^.]+)$/, U = /^-?(Infinity|NaN)$/, R = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
        return function(B, $, T, D) {
          var F, k = T ? $ : $.replace(R, "");
          if (U.test(k))
            B.s = isNaN(k) ? null : k < 0 ? -1 : 1;
          else {
            if (!T && (k = k.replace(y, function(W, oe, fe) {
              return F = (fe = fe.toLowerCase()) == "x" ? 16 : fe == "b" ? 2 : 8, !D || D == F ? oe : W;
            }), D && (F = D, k = k.replace(A, "$1").replace(b, "0.$1")), $ != k))
              return new Q(k, F);
            if (Q.DEBUG)
              throw Error(c + "Not a" + (D ? " base " + D : "") + " number: " + $);
            B.s = null;
          }
          B.c = B.e = null;
        };
      }();
      function Qe(y, A, b, U) {
        var R, B, $, T, D, F, k, W = y.c, oe = S;
        if (W) {
          e: {
            for (R = 1, T = W[0]; T >= 10; T /= 10, R++)
              ;
            if (B = A - R, B < 0)
              B += f, $ = A, D = W[F = 0], k = D / oe[R - $ - 1] % 10 | 0;
            else if (F = o((B + 1) / f), F >= W.length)
              if (U) {
                for (; W.length <= F; W.push(0))
                  ;
                D = k = 0, R = 1, B %= f, $ = B - f + 1;
              } else
                break e;
            else {
              for (D = T = W[F], R = 1; T >= 10; T /= 10, R++)
                ;
              B %= f, $ = B - f + R, k = $ < 0 ? 0 : D / oe[R - $ - 1] % 10 | 0;
            }
            if (U = U || A < 0 || // Are there any non-zero digits after the rounding digit?
            // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
            // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
            W[F + 1] != null || ($ < 0 ? D : D % oe[R - $ - 1]), U = b < 4 ? (k || U) && (b == 0 || b == (y.s < 0 ? 3 : 2)) : k > 5 || k == 5 && (b == 4 || U || b == 6 && // Check whether the digit to the left of the rounding digit is odd.
            (B > 0 ? $ > 0 ? D / oe[R - $] : 0 : W[F - 1]) % 10 & 1 || b == (y.s < 0 ? 8 : 7)), A < 1 || !W[0])
              return W.length = 0, U ? (A -= y.e + 1, W[0] = oe[(f - A % f) % f], y.e = -A || 0) : W[0] = y.e = 0, y;
            if (B == 0 ? (W.length = F, T = 1, F--) : (W.length = F + 1, T = oe[f - B], W[F] = $ > 0 ? u(D / oe[R - $] % oe[$]) * T : 0), U)
              for (; ; )
                if (F == 0) {
                  for (B = 1, $ = W[0]; $ >= 10; $ /= 10, B++)
                    ;
                  for ($ = W[0] += T, T = 1; $ >= 10; $ /= 10, T++)
                    ;
                  B != T && (y.e++, W[0] == g && (W[0] = 1));
                  break;
                } else {
                  if (W[F] += T, W[F] != g)
                    break;
                  W[F--] = 0, T = 1;
                }
            for (B = W.length; W[--B] === 0; W.pop())
              ;
          }
          y.e > Ge ? y.c = y.e = null : y.e < rt && (y.c = [y.e = 0]);
        }
        return y;
      }
      function pt(y) {
        var A, b = y.e;
        return b === null ? y.toString() : (A = C(y.c), A = b <= Re || b >= Fe ? j(A, b) : P(A, b, "0"), y.s < 0 ? "-" + A : A);
      }
      return q.absoluteValue = q.abs = function() {
        var y = new Q(this);
        return y.s < 0 && (y.s = 1), y;
      }, q.comparedTo = function(y, A) {
        return Y(this, new Q(y, A));
      }, q.decimalPlaces = q.dp = function(y, A) {
        var b, U, R, B = this;
        if (y != null)
          return te(y, 0, m), A == null ? A = ve : te(A, 0, 8), Qe(new Q(B), y + B.e + 1, A);
        if (!(b = B.c))
          return null;
        if (U = ((R = b.length - 1) - z(this.e / f)) * f, R = b[R])
          for (; R % 10 == 0; R /= 10, U--)
            ;
        return U < 0 && (U = 0), U;
      }, q.dividedBy = q.div = function(y, A) {
        return L(this, new Q(y, A), le, ve);
      }, q.dividedToIntegerBy = q.idiv = function(y, A) {
        return L(this, new Q(y, A), 0, 1);
      }, q.exponentiatedBy = q.pow = function(y, A) {
        var b, U, R, B, $, T, D, F, k, W = this;
        if (y = new Q(y), y.c && !y.isInteger())
          throw Error(c + "Exponent not an integer: " + pt(y));
        if (A != null && (A = new Q(A)), T = y.e > 14, !W.c || !W.c[0] || W.c[0] == 1 && !W.e && W.c.length == 1 || !y.c || !y.c[0])
          return k = new Q(Math.pow(+pt(W), T ? y.s * (2 - V(y)) : +pt(y))), A ? k.mod(A) : k;
        if (D = y.s < 0, A) {
          if (A.c ? !A.c[0] : !A.s)
            return new Q(NaN);
          U = !D && W.isInteger() && A.isInteger(), U && (W = W.mod(A));
        } else {
          if (y.e > 9 && (W.e > 0 || W.e < -1 || (W.e == 0 ? W.c[0] > 1 || T && W.c[1] >= 24e7 : W.c[0] < 8e13 || T && W.c[0] <= 9999975e7)))
            return B = W.s < 0 && V(y) ? -0 : 0, W.e > -1 && (B = 1 / B), new Q(D ? 1 / B : B);
          Rt && (B = o(Rt / f + 2));
        }
        for (T ? (b = new Q(0.5), D && (y.s = 1), F = V(y)) : (R = Math.abs(+pt(y)), F = R % 2), k = new Q(ne); ; ) {
          if (F) {
            if (k = k.times(W), !k.c)
              break;
            B ? k.c.length > B && (k.c.length = B) : U && (k = k.mod(A));
          }
          if (R) {
            if (R = u(R / 2), R === 0)
              break;
            F = R % 2;
          } else if (y = y.times(b), Qe(y, y.e + 1, 1), y.e > 14)
            F = V(y);
          else {
            if (R = +pt(y), R === 0)
              break;
            F = R % 2;
          }
          W = W.times(W), B ? W.c && W.c.length > B && (W.c.length = B) : U && (W = W.mod(A));
        }
        return U ? k : (D && (k = ne.div(k)), A ? k.mod(A) : B ? Qe(k, Rt, ve, $) : k);
      }, q.integerValue = function(y) {
        var A = new Q(this);
        return y == null ? y = ve : te(y, 0, 8), Qe(A, A.e + 1, y);
      }, q.isEqualTo = q.eq = function(y, A) {
        return Y(this, new Q(y, A)) === 0;
      }, q.isFinite = function() {
        return !!this.c;
      }, q.isGreaterThan = q.gt = function(y, A) {
        return Y(this, new Q(y, A)) > 0;
      }, q.isGreaterThanOrEqualTo = q.gte = function(y, A) {
        return (A = Y(this, new Q(y, A))) === 1 || A === 0;
      }, q.isInteger = function() {
        return !!this.c && z(this.e / f) > this.c.length - 2;
      }, q.isLessThan = q.lt = function(y, A) {
        return Y(this, new Q(y, A)) < 0;
      }, q.isLessThanOrEqualTo = q.lte = function(y, A) {
        return (A = Y(this, new Q(y, A))) === -1 || A === 0;
      }, q.isNaN = function() {
        return !this.s;
      }, q.isNegative = function() {
        return this.s < 0;
      }, q.isPositive = function() {
        return this.s > 0;
      }, q.isZero = function() {
        return !!this.c && this.c[0] == 0;
      }, q.minus = function(y, A) {
        var b, U, R, B, $ = this, T = $.s;
        if (y = new Q(y, A), A = y.s, !T || !A)
          return new Q(NaN);
        if (T != A)
          return y.s = -A, $.plus(y);
        var D = $.e / f, F = y.e / f, k = $.c, W = y.c;
        if (!D || !F) {
          if (!k || !W)
            return k ? (y.s = -A, y) : new Q(W ? $ : NaN);
          if (!k[0] || !W[0])
            return W[0] ? (y.s = -A, y) : new Q(k[0] ? $ : (
              // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
              ve == 3 ? -0 : 0
            ));
        }
        if (D = z(D), F = z(F), k = k.slice(), T = D - F) {
          for ((B = T < 0) ? (T = -T, R = k) : (F = D, R = W), R.reverse(), A = T; A--; R.push(0))
            ;
          R.reverse();
        } else
          for (U = (B = (T = k.length) < (A = W.length)) ? T : A, T = A = 0; A < U; A++)
            if (k[A] != W[A]) {
              B = k[A] < W[A];
              break;
            }
        if (B && (R = k, k = W, W = R, y.s = -y.s), A = (U = W.length) - (b = k.length), A > 0)
          for (; A--; k[b++] = 0)
            ;
        for (A = g - 1; U > T; ) {
          if (k[--U] < W[U]) {
            for (b = U; b && !k[--b]; k[b] = A)
              ;
            --k[b], k[U] += g;
          }
          k[U] -= W[U];
        }
        for (; k[0] == 0; k.splice(0, 1), --F)
          ;
        return k[0] ? oi(y, k, F) : (y.s = ve == 3 ? -1 : 1, y.c = [y.e = 0], y);
      }, q.modulo = q.mod = function(y, A) {
        var b, U, R = this;
        return y = new Q(y, A), !R.c || !y.s || y.c && !y.c[0] ? new Q(NaN) : !y.c || R.c && !R.c[0] ? new Q(R) : (Pr == 9 ? (U = y.s, y.s = 1, b = L(R, y, 0, 3), y.s = U, b.s *= U) : b = L(R, y, 0, Pr), y = R.minus(b.times(y)), !y.c[0] && Pr == 1 && (y.s = R.s), y);
      }, q.multipliedBy = q.times = function(y, A) {
        var b, U, R, B, $, T, D, F, k, W, oe, fe, Te, Pe, Ke, ye = this, be = ye.c, Ze = (y = new Q(y, A)).c;
        if (!be || !Ze || !be[0] || !Ze[0])
          return !ye.s || !y.s || be && !be[0] && !Ze || Ze && !Ze[0] && !be ? y.c = y.e = y.s = null : (y.s *= ye.s, !be || !Ze ? y.c = y.e = null : (y.c = [0], y.e = 0)), y;
        for (U = z(ye.e / f) + z(y.e / f), y.s *= ye.s, D = be.length, W = Ze.length, D < W && (Te = be, be = Ze, Ze = Te, R = D, D = W, W = R), R = D + W, Te = []; R--; Te.push(0))
          ;
        for (Pe = g, Ke = w, R = W; --R >= 0; ) {
          for (b = 0, oe = Ze[R] % Ke, fe = Ze[R] / Ke | 0, $ = D, B = R + $; B > R; )
            F = be[--$] % Ke, k = be[$] / Ke | 0, T = fe * F + k * oe, F = oe * F + T % Ke * Ke + Te[B] + b, b = (F / Pe | 0) + (T / Ke | 0) + fe * k, Te[B--] = F % Pe;
          Te[B] = b;
        }
        return b ? ++U : Te.splice(0, 1), oi(y, Te, U);
      }, q.negated = function() {
        var y = new Q(this);
        return y.s = -y.s || null, y;
      }, q.plus = function(y, A) {
        var b, U = this, R = U.s;
        if (y = new Q(y, A), A = y.s, !R || !A)
          return new Q(NaN);
        if (R != A)
          return y.s = -A, U.minus(y);
        var B = U.e / f, $ = y.e / f, T = U.c, D = y.c;
        if (!B || !$) {
          if (!T || !D)
            return new Q(R / 0);
          if (!T[0] || !D[0])
            return D[0] ? y : new Q(T[0] ? U : R * 0);
        }
        if (B = z(B), $ = z($), T = T.slice(), R = B - $) {
          for (R > 0 ? ($ = B, b = D) : (R = -R, b = T), b.reverse(); R--; b.push(0))
            ;
          b.reverse();
        }
        for (R = T.length, A = D.length, R - A < 0 && (b = D, D = T, T = b, A = R), R = 0; A; )
          R = (T[--A] = T[A] + D[A] + R) / g | 0, T[A] = g === T[A] ? 0 : T[A] % g;
        return R && (T = [R].concat(T), ++$), oi(y, T, $);
      }, q.precision = q.sd = function(y, A) {
        var b, U, R, B = this;
        if (y != null && y !== !!y)
          return te(y, 1, m), A == null ? A = ve : te(A, 0, 8), Qe(new Q(B), y, A);
        if (!(b = B.c))
          return null;
        if (R = b.length - 1, U = R * f + 1, R = b[R]) {
          for (; R % 10 == 0; R /= 10, U--)
            ;
          for (R = b[0]; R >= 10; R /= 10, U++)
            ;
        }
        return y && B.e + 1 > U && (U = B.e + 1), U;
      }, q.shiftedBy = function(y) {
        return te(y, -p, p), this.times("1e" + y);
      }, q.squareRoot = q.sqrt = function() {
        var y, A, b, U, R, B = this, $ = B.c, T = B.s, D = B.e, F = le + 4, k = new Q("0.5");
        if (T !== 1 || !$ || !$[0])
          return new Q(!T || T < 0 && (!$ || $[0]) ? NaN : $ ? B : 1 / 0);
        if (T = Math.sqrt(+pt(B)), T == 0 || T == 1 / 0 ? (A = C($), (A.length + D) % 2 == 0 && (A += "0"), T = Math.sqrt(+A), D = z((D + 1) / 2) - (D < 0 || D % 2), T == 1 / 0 ? A = "5e" + D : (A = T.toExponential(), A = A.slice(0, A.indexOf("e") + 1) + D), b = new Q(A)) : b = new Q(T + ""), b.c[0]) {
          for (D = b.e, T = D + F, T < 3 && (T = 0); ; )
            if (R = b, b = k.times(R.plus(L(B, R, F, 1))), C(R.c).slice(0, T) === (A = C(b.c)).slice(0, T))
              if (b.e < D && --T, A = A.slice(T - 3, T + 1), A == "9999" || !U && A == "4999") {
                if (!U && (Qe(R, R.e + le + 2, 0), R.times(R).eq(B))) {
                  b = R;
                  break;
                }
                F += 4, T += 4, U = 1;
              } else {
                (!+A || !+A.slice(1) && A.charAt(0) == "5") && (Qe(b, b.e + le + 2, 1), y = !b.times(b).eq(B));
                break;
              }
        }
        return Qe(b, b.e + le + 1, ve, y);
      }, q.toExponential = function(y, A) {
        return y != null && (te(y, 0, m), y++), ir(this, y, A, 1);
      }, q.toFixed = function(y, A) {
        return y != null && (te(y, 0, m), y = y + this.e + 1), ir(this, y, A);
      }, q.toFormat = function(y, A, b) {
        var U, R = this;
        if (b == null)
          y != null && A && typeof A == "object" ? (b = A, A = null) : y && typeof y == "object" ? (b = y, y = A = null) : b = yt;
        else if (typeof b != "object")
          throw Error(c + "Argument not an object: " + b);
        if (U = R.toFixed(y, A), R.c) {
          var B, $ = U.split("."), T = +b.groupSize, D = +b.secondaryGroupSize, F = b.groupSeparator || "", k = $[0], W = $[1], oe = R.s < 0, fe = oe ? k.slice(1) : k, Te = fe.length;
          if (D && (B = T, T = D, D = B, Te -= B), T > 0 && Te > 0) {
            for (B = Te % T || T, k = fe.substr(0, B); B < Te; B += T)
              k += F + fe.substr(B, T);
            D > 0 && (k += F + fe.slice(B)), oe && (k = "-" + k);
          }
          U = W ? k + (b.decimalSeparator || "") + ((D = +b.fractionGroupSize) ? W.replace(
            new RegExp("\\d{" + D + "}\\B", "g"),
            "$&" + (b.fractionGroupSeparator || "")
          ) : W) : k;
        }
        return (b.prefix || "") + U + (b.suffix || "");
      }, q.toFraction = function(y) {
        var A, b, U, R, B, $, T, D, F, k, W, oe, fe = this, Te = fe.c;
        if (y != null && (T = new Q(y), !T.isInteger() && (T.c || T.s !== 1) || T.lt(ne)))
          throw Error(c + "Argument " + (T.isInteger() ? "out of range: " : "not an integer: ") + pt(T));
        if (!Te)
          return new Q(fe);
        for (A = new Q(ne), F = b = new Q(ne), U = D = new Q(ne), oe = C(Te), B = A.e = oe.length - fe.e - 1, A.c[0] = S[($ = B % f) < 0 ? f + $ : $], y = !y || T.comparedTo(A) > 0 ? B > 0 ? A : F : T, $ = Ge, Ge = 1 / 0, T = new Q(oe), D.c[0] = 0; k = L(T, A, 0, 1), R = b.plus(k.times(U)), R.comparedTo(y) != 1; )
          b = U, U = R, F = D.plus(k.times(R = F)), D = R, A = T.minus(k.times(R = A)), T = R;
        return R = L(y.minus(b), U, 0, 1), D = D.plus(R.times(F)), b = b.plus(R.times(U)), D.s = F.s = fe.s, B = B * 2, W = L(F, U, B, ve).minus(fe).abs().comparedTo(
          L(D, b, B, ve).minus(fe).abs()
        ) < 1 ? [F, U] : [D, b], Ge = $, W;
      }, q.toNumber = function() {
        return +pt(this);
      }, q.toPrecision = function(y, A) {
        return y != null && te(y, 1, m), ir(this, y, A, 2);
      }, q.toString = function(y) {
        var A, b = this, U = b.s, R = b.e;
        return R === null ? U ? (A = "Infinity", U < 0 && (A = "-" + A)) : A = "NaN" : (y == null ? A = R <= Re || R >= Fe ? j(C(b.c), R) : P(C(b.c), R, "0") : y === 10 && si ? (b = Qe(new Q(b), le + R + 1, ve), A = P(C(b.c), b.e, "0")) : (te(y, 2, vr.length, "Base"), A = K(P(C(b.c), R, "0"), 10, y, U, !0)), U < 0 && b.c[0] && (A = "-" + A)), A;
      }, q.valueOf = q.toJSON = function() {
        return pt(this);
      }, q._isBigNumber = !0, H != null && Q.set(H), Q;
    }
    function z(H) {
      var L = H | 0;
      return H > 0 || H === L ? L : L - 1;
    }
    function C(H) {
      for (var L, K, ee = 1, q = H.length, ne = H[0] + ""; ee < q; ) {
        for (L = H[ee++] + "", K = f - L.length; K--; L = "0" + L)
          ;
        ne += L;
      }
      for (q = ne.length; ne.charCodeAt(--q) === 48; )
        ;
      return ne.slice(0, q + 1 || 1);
    }
    function Y(H, L) {
      var K, ee, q = H.c, ne = L.c, le = H.s, ve = L.s, Re = H.e, Fe = L.e;
      if (!le || !ve)
        return null;
      if (K = q && !q[0], ee = ne && !ne[0], K || ee)
        return K ? ee ? 0 : -ve : le;
      if (le != ve)
        return le;
      if (K = le < 0, ee = Re == Fe, !q || !ne)
        return ee ? 0 : !q ^ K ? 1 : -1;
      if (!ee)
        return Re > Fe ^ K ? 1 : -1;
      for (ve = (Re = q.length) < (Fe = ne.length) ? Re : Fe, le = 0; le < ve; le++)
        if (q[le] != ne[le])
          return q[le] > ne[le] ^ K ? 1 : -1;
      return Re == Fe ? 0 : Re > Fe ^ K ? 1 : -1;
    }
    function te(H, L, K, ee) {
      if (H < L || H > K || H !== u(H))
        throw Error(c + (ee || "Argument") + (typeof H == "number" ? H < L || H > K ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(H));
    }
    function V(H) {
      var L = H.c.length - 1;
      return z(H.e / f) == L && H.c[L] % 2 != 0;
    }
    function j(H, L) {
      return (H.length > 1 ? H.charAt(0) + "." + H.slice(1) : H) + (L < 0 ? "e" : "e+") + L;
    }
    function P(H, L, K) {
      var ee, q;
      if (L < 0) {
        for (q = K + "."; ++L; q += K)
          ;
        H = q + H;
      } else if (ee = H.length, ++L > ee) {
        for (q = K, L -= ee; --L; q += K)
          ;
        H += q;
      } else
        L < ee && (H = H.slice(0, L) + "." + H.slice(L));
      return H;
    }
    r = I(), r.default = r.BigNumber = r, e.exports ? e.exports = r : (i || (i = typeof self < "u" && self ? self : window), i.BigNumber = r);
  })(se);
})(ip);
var $E = ip.exports;
Object.defineProperty(Af, "__esModule", { value: !0 });
const HE = $E;
class qE {
  constructor() {
    /**
     * Method to take a string value and return a bignumber object.
     *
     * @protected
     * @type {Function}
     * @memberof Arweave
     */
    ae(this, "BigNum");
    this.BigNum = (i, r) => {
      let a = HE.BigNumber.clone({ DECIMAL_PLACES: r });
      return new a(i);
    };
  }
  winstonToAr(i, { formatted: r = !1, decimals: a = 12, trim: o = !0 } = {}) {
    let u = this.stringToBigNum(i, a).shiftedBy(-12);
    return r ? u.toFormat(a) : u.toFixed(a);
  }
  arToWinston(i, { formatted: r = !1 } = {}) {
    let a = this.stringToBigNum(i).shiftedBy(12);
    return r ? a.toFormat() : a.toFixed(0);
  }
  compare(i, r) {
    let a = this.stringToBigNum(i), o = this.stringToBigNum(r);
    return a.comparedTo(o);
  }
  isEqual(i, r) {
    return this.compare(i, r) === 0;
  }
  isLessThan(i, r) {
    let a = this.stringToBigNum(i), o = this.stringToBigNum(r);
    return a.isLessThan(o);
  }
  isGreaterThan(i, r) {
    let a = this.stringToBigNum(i), o = this.stringToBigNum(r);
    return a.isGreaterThan(o);
  }
  add(i, r) {
    let a = this.stringToBigNum(i);
    return this.stringToBigNum(r), a.plus(r).toFixed(0);
  }
  sub(i, r) {
    let a = this.stringToBigNum(i);
    return this.stringToBigNum(r), a.minus(r).toFixed(0);
  }
  stringToBigNum(i, r = 12) {
    return this.BigNum(i, r);
  }
}
Af.default = qE;
var Ef = {};
Object.defineProperty(Ef, "__esModule", { value: !0 });
class zE {
  constructor(i) {
    ae(this, "METHOD_GET", "GET");
    ae(this, "METHOD_POST", "POST");
    ae(this, "config");
    this.applyConfig(i);
  }
  applyConfig(i) {
    this.config = this.mergeDefaults(i);
  }
  getConfig() {
    return this.config;
  }
  mergeDefaults(i) {
    const r = i.protocol || "http", a = i.port || (r === "https" ? 443 : 80);
    return {
      host: i.host || "127.0.0.1",
      protocol: r,
      port: a,
      timeout: i.timeout || 2e4,
      logging: i.logging || !1,
      logger: i.logger || console.log,
      network: i.network
    };
  }
  async get(i, r) {
    return await this.request(i, { ...r, method: this.METHOD_GET });
  }
  async post(i, r, a) {
    var u;
    const o = new Headers((a == null ? void 0 : a.headers) || {});
    return (u = o.get("content-type")) != null && u.includes("application/json") || o.append("content-type", "application/json"), o.append("accept", "application/json, text/plain, */*"), await this.request(i, {
      ...a,
      method: this.METHOD_POST,
      body: typeof r != "string" ? JSON.stringify(r) : r,
      headers: o
    });
  }
  async request(i, r) {
    var S;
    const a = new Headers((r == null ? void 0 : r.headers) || {}), o = `${this.config.protocol}://${this.config.host}:${this.config.port}`, u = r == null ? void 0 : r.responseType;
    r == null || delete r.responseType, i.startsWith("/") && (i = i.slice(1)), this.config.network && a.append("x-network", this.config.network), this.config.logging && this.config.logger(`Requesting: ${o}/${i}`);
    let c = await fetch(`${o}/${i}`, {
      ...r || {},
      headers: a
    });
    this.config.logging && this.config.logger(`Response:   ${c.url} - ${c.status}`);
    const d = c.headers.get("content-type"), g = (S = d == null ? void 0 : d.match(/charset=([^()<>@,;:\"/[\]?.=\s]*)/i)) == null ? void 0 : S[1], f = c, p = async () => {
      if (g)
        try {
          f.data = new TextDecoder(g).decode(await c.arrayBuffer());
        } catch {
          f.data = await c.text();
        }
      else
        f.data = await c.text();
    };
    if (u === "arraybuffer")
      f.data = await c.arrayBuffer();
    else if (u === "text")
      await p();
    else if (u === "webstream")
      f.data = GE(c.body);
    else
      try {
        let w = await c.clone().json();
        typeof w != "object" ? await p() : f.data = await c.json(), w = null;
      } catch {
        await p();
      }
    return f;
  }
}
Ef.default = zE;
const GE = (e) => {
  const i = e;
  return typeof i[Symbol.asyncIterator] > "u" ? (i[Symbol.asyncIterator] = KE(e), i) : e;
}, KE = function(e) {
  return async function* () {
    const r = e.getReader();
    try {
      for (; ; ) {
        const { done: a, value: o } = await r.read();
        if (a)
          return;
        yield o;
      }
    } finally {
      r.releaseLock();
    }
  };
};
var bf = {}, Le = {}, ss = {};
ss.byteLength = ZE;
ss.toByteArray = VE;
ss.fromByteArray = QE;
var lr = [], Zt = [], WE = typeof Uint8Array < "u" ? Uint8Array : Array, Io = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var In = 0, XE = Io.length; In < XE; ++In)
  lr[In] = Io[In], Zt[Io.charCodeAt(In)] = In;
Zt["-".charCodeAt(0)] = 62;
Zt["_".charCodeAt(0)] = 63;
function ap(e) {
  var i = e.length;
  if (i % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var r = e.indexOf("=");
  r === -1 && (r = i);
  var a = r === i ? 0 : 4 - r % 4;
  return [r, a];
}
function ZE(e) {
  var i = ap(e), r = i[0], a = i[1];
  return (r + a) * 3 / 4 - a;
}
function jE(e, i, r) {
  return (i + r) * 3 / 4 - r;
}
function VE(e) {
  var i, r = ap(e), a = r[0], o = r[1], u = new WE(jE(e, a, o)), c = 0, d = o > 0 ? a - 4 : a, g;
  for (g = 0; g < d; g += 4)
    i = Zt[e.charCodeAt(g)] << 18 | Zt[e.charCodeAt(g + 1)] << 12 | Zt[e.charCodeAt(g + 2)] << 6 | Zt[e.charCodeAt(g + 3)], u[c++] = i >> 16 & 255, u[c++] = i >> 8 & 255, u[c++] = i & 255;
  return o === 2 && (i = Zt[e.charCodeAt(g)] << 2 | Zt[e.charCodeAt(g + 1)] >> 4, u[c++] = i & 255), o === 1 && (i = Zt[e.charCodeAt(g)] << 10 | Zt[e.charCodeAt(g + 1)] << 4 | Zt[e.charCodeAt(g + 2)] >> 2, u[c++] = i >> 8 & 255, u[c++] = i & 255), u;
}
function JE(e) {
  return lr[e >> 18 & 63] + lr[e >> 12 & 63] + lr[e >> 6 & 63] + lr[e & 63];
}
function YE(e, i, r) {
  for (var a, o = [], u = i; u < r; u += 3)
    a = (e[u] << 16 & 16711680) + (e[u + 1] << 8 & 65280) + (e[u + 2] & 255), o.push(JE(a));
  return o.join("");
}
function QE(e) {
  for (var i, r = e.length, a = r % 3, o = [], u = 16383, c = 0, d = r - a; c < d; c += u)
    o.push(YE(e, c, c + u > d ? d : c + u));
  return a === 1 ? (i = e[r - 1], o.push(
    lr[i >> 2] + lr[i << 4 & 63] + "=="
  )) : a === 2 && (i = (e[r - 2] << 8) + e[r - 1], o.push(
    lr[i >> 10] + lr[i >> 4 & 63] + lr[i << 2 & 63] + "="
  )), o.join("");
}
Object.defineProperty(Le, "__esModule", { value: !0 });
Le.b64UrlDecode = Le.b64UrlEncode = Le.bufferTob64Url = Le.bufferTob64 = Le.b64UrlToBuffer = Le.stringToB64Url = Le.stringToBuffer = Le.bufferToString = Le.b64UrlToString = Le.concatBuffers = void 0;
const sp = ss;
function eb(e) {
  let i = 0;
  for (let o = 0; o < e.length; o++)
    i += e[o].byteLength;
  let r = new Uint8Array(i), a = 0;
  r.set(new Uint8Array(e[0]), a), a += e[0].byteLength;
  for (let o = 1; o < e.length; o++)
    r.set(new Uint8Array(e[o]), a), a += e[o].byteLength;
  return r;
}
Le.concatBuffers = eb;
function tb(e) {
  let i = fp(e);
  return op(i);
}
Le.b64UrlToString = tb;
function op(e) {
  return new TextDecoder("utf-8", { fatal: !0 }).decode(e);
}
Le.bufferToString = op;
function up(e) {
  return new TextEncoder().encode(e);
}
Le.stringToBuffer = up;
function rb(e) {
  return cp(up(e));
}
Le.stringToB64Url = rb;
function fp(e) {
  return new Uint8Array(sp.toByteArray(hp(e)));
}
Le.b64UrlToBuffer = fp;
function lp(e) {
  return sp.fromByteArray(new Uint8Array(e));
}
Le.bufferTob64 = lp;
function cp(e) {
  return dp(lp(e));
}
Le.bufferTob64Url = cp;
function dp(e) {
  return e.replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, "");
}
Le.b64UrlEncode = dp;
function hp(e) {
  e = e.replace(/\-/g, "+").replace(/\_/g, "/");
  let i;
  return e.length % 4 == 0 ? i = 0 : i = 4 - e.length % 4, e.concat("=".repeat(i));
}
Le.b64UrlDecode = hp;
Object.defineProperty(bf, "__esModule", { value: !0 });
const Gr = Le;
class nb {
  constructor() {
    ae(this, "keyLength", 4096);
    ae(this, "publicExponent", 65537);
    ae(this, "hashAlgorithm", "sha256");
    ae(this, "driver");
    if (!this.detectWebCrypto())
      throw new Error("SubtleCrypto not available!");
    this.driver = crypto.subtle;
  }
  async generateJWK() {
    let i = await this.driver.generateKey({
      name: "RSA-PSS",
      modulusLength: 4096,
      publicExponent: new Uint8Array([1, 0, 1]),
      hash: {
        name: "SHA-256"
      }
    }, !0, ["sign"]), r = await this.driver.exportKey("jwk", i.privateKey);
    return {
      kty: r.kty,
      e: r.e,
      n: r.n,
      d: r.d,
      p: r.p,
      q: r.q,
      dp: r.dp,
      dq: r.dq,
      qi: r.qi
    };
  }
  async sign(i, r, { saltLength: a } = {}) {
    let o = await this.driver.sign({
      name: "RSA-PSS",
      saltLength: 32
    }, await this.jwkToCryptoKey(i), r);
    return new Uint8Array(o);
  }
  async hash(i, r = "SHA-256") {
    let a = await this.driver.digest(r, i);
    return new Uint8Array(a);
  }
  async verify(i, r, a) {
    const o = {
      kty: "RSA",
      e: "AQAB",
      n: i
    }, u = await this.jwkToPublicCryptoKey(o), c = await this.driver.digest("SHA-256", r), d = await this.driver.verify({
      name: "RSA-PSS",
      saltLength: 0
    }, u, a, r), g = await this.driver.verify({
      name: "RSA-PSS",
      saltLength: 32
    }, u, a, r), f = await this.driver.verify({
      name: "RSA-PSS",
      saltLength: Math.ceil((u.algorithm.modulusLength - 1) / 8) - c.byteLength - 2
    }, u, a, r);
    return d || g || f;
  }
  async jwkToCryptoKey(i) {
    return this.driver.importKey("jwk", i, {
      name: "RSA-PSS",
      hash: {
        name: "SHA-256"
      }
    }, !1, ["sign"]);
  }
  async jwkToPublicCryptoKey(i) {
    return this.driver.importKey("jwk", i, {
      name: "RSA-PSS",
      hash: {
        name: "SHA-256"
      }
    }, !1, ["verify"]);
  }
  detectWebCrypto() {
    if (typeof crypto > "u")
      return !1;
    const i = crypto == null ? void 0 : crypto.subtle;
    return i === void 0 ? !1 : [
      "generateKey",
      "importKey",
      "exportKey",
      "digest",
      "sign"
    ].every((a) => typeof i[a] == "function");
  }
  async encrypt(i, r, a) {
    const o = await this.driver.importKey("raw", typeof r == "string" ? Gr.stringToBuffer(r) : r, {
      name: "PBKDF2",
      length: 32
    }, !1, ["deriveKey"]), u = await this.driver.deriveKey({
      name: "PBKDF2",
      salt: a ? Gr.stringToBuffer(a) : Gr.stringToBuffer("salt"),
      iterations: 1e5,
      hash: "SHA-256"
    }, o, {
      name: "AES-CBC",
      length: 256
    }, !1, ["encrypt", "decrypt"]), c = new Uint8Array(16);
    crypto.getRandomValues(c);
    const d = await this.driver.encrypt({
      name: "AES-CBC",
      iv: c
    }, u, i);
    return Gr.concatBuffers([c, d]);
  }
  async decrypt(i, r, a) {
    const o = await this.driver.importKey("raw", typeof r == "string" ? Gr.stringToBuffer(r) : r, {
      name: "PBKDF2",
      length: 32
    }, !1, ["deriveKey"]), u = await this.driver.deriveKey({
      name: "PBKDF2",
      salt: a ? Gr.stringToBuffer(a) : Gr.stringToBuffer("salt"),
      iterations: 1e5,
      hash: "SHA-256"
    }, o, {
      name: "AES-CBC",
      length: 256
    }, !1, ["encrypt", "decrypt"]), c = i.slice(0, 16), d = await this.driver.decrypt({
      name: "AES-CBC",
      iv: c
    }, u, i.slice(16));
    return Gr.concatBuffers([d]);
  }
}
bf.default = nb;
var Sf = {};
Object.defineProperty(Sf, "__esModule", { value: !0 });
class ib {
  constructor(i) {
    ae(this, "api");
    this.api = i;
  }
  getInfo() {
    return this.api.get("info").then((i) => i.data);
  }
  getPeers() {
    return this.api.get("peers").then((i) => i.data);
  }
}
Sf.default = ib;
var Pa = {}, Yr = {};
Object.defineProperty(Yr, "__esModule", { value: !0 });
Yr.getError = void 0;
class ab extends Error {
  constructor(r, a = {}) {
    var i = (...args) => {
      super(...args);
      ae(this, "type");
      ae(this, "response");
    };
    a.message ? i(a.message) : i(), this.type = r, this.response = a.response;
  }
  getType() {
    return this.type;
  }
}
Yr.default = ab;
function sb(e) {
  let i = e.data;
  if (typeof e.data == "string")
    try {
      i = JSON.parse(e.data);
    } catch {
    }
  if (e.data instanceof ArrayBuffer || e.data instanceof Uint8Array)
    try {
      i = JSON.parse(i.toString());
    } catch {
    }
  return i ? i.error || i : e.statusText || "unknown";
}
Yr.getError = sb;
var Un = {}, Ba = {}, Hd;
function ob() {
  if (Hd)
    return Ba;
  Hd = 1, Object.defineProperty(Ba, "__esModule", { value: !0 });
  const e = Ya();
  async function i(a) {
    if (Array.isArray(a)) {
      const c = e.default.utils.concatBuffers([
        e.default.utils.stringToBuffer("list"),
        e.default.utils.stringToBuffer(a.length.toString())
      ]);
      return await r(a, await e.default.crypto.hash(c, "SHA-384"));
    }
    const o = e.default.utils.concatBuffers([
      e.default.utils.stringToBuffer("blob"),
      e.default.utils.stringToBuffer(a.byteLength.toString())
    ]), u = e.default.utils.concatBuffers([
      await e.default.crypto.hash(o, "SHA-384"),
      await e.default.crypto.hash(a, "SHA-384")
    ]);
    return await e.default.crypto.hash(u, "SHA-384");
  }
  Ba.default = i;
  async function r(a, o) {
    if (a.length < 1)
      return o;
    const u = e.default.utils.concatBuffers([
      o,
      await i(a[0])
    ]), c = await e.default.crypto.hash(u, "SHA-384");
    return await r(a.slice(1), c);
  }
  return Ba;
}
var Uo = {}, qd;
function pp() {
  return qd || (qd = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.debug = e.validatePath = e.arrayCompare = e.bufferToInt = e.intToBuffer = e.arrayFlatten = e.generateProofs = e.buildLayers = e.generateTransactionChunks = e.generateTree = e.computeRootHash = e.generateLeaves = e.chunkData = e.MIN_CHUNK_SIZE = e.MAX_CHUNK_SIZE = void 0;
    const i = Ya(), r = Le;
    e.MAX_CHUNK_SIZE = 256 * 1024, e.MIN_CHUNK_SIZE = 32 * 1024;
    const a = 32, o = 32;
    async function u(P) {
      let H = [], L = P, K = 0;
      for (; L.byteLength >= e.MAX_CHUNK_SIZE; ) {
        let ee = e.MAX_CHUNK_SIZE, q = L.byteLength - e.MAX_CHUNK_SIZE;
        q > 0 && q < e.MIN_CHUNK_SIZE && (ee = Math.ceil(L.byteLength / 2));
        const ne = L.slice(0, ee), le = await i.default.crypto.hash(ne);
        K += ne.byteLength, H.push({
          dataHash: le,
          minByteRange: K - ne.byteLength,
          maxByteRange: K
        }), L = L.slice(ee);
      }
      return H.push({
        dataHash: await i.default.crypto.hash(L),
        minByteRange: K,
        maxByteRange: K + L.byteLength
      }), H;
    }
    e.chunkData = u;
    async function c(P) {
      return Promise.all(P.map(async ({ dataHash: H, minByteRange: L, maxByteRange: K }) => ({
        type: "leaf",
        id: await z(await Promise.all([z(H), z(C(K))])),
        dataHash: H,
        minByteRange: L,
        maxByteRange: K
      })));
    }
    e.generateLeaves = c;
    async function d(P) {
      return (await g(P)).id;
    }
    e.computeRootHash = d;
    async function g(P) {
      return await p(await c(await u(P)));
    }
    e.generateTree = g;
    async function f(P) {
      const H = await u(P), L = await c(H), K = await p(L), ee = await S(K), q = H.slice(-1)[0];
      return q.maxByteRange - q.minByteRange === 0 && (H.splice(H.length - 1, 1), ee.splice(ee.length - 1, 1)), {
        data_root: K.id,
        chunks: H,
        proofs: ee
      };
    }
    e.generateTransactionChunks = f;
    async function p(P, H = 0) {
      if (P.length < 2)
        return P[0];
      const L = [];
      for (let K = 0; K < P.length; K += 2)
        L.push(await I(P[K], P[K + 1]));
      return p(L, H + 1);
    }
    e.buildLayers = p;
    function S(P) {
      const H = w(P);
      return Array.isArray(H) ? m(H) : [H];
    }
    e.generateProofs = S;
    function w(P, H = new Uint8Array(), L = 0) {
      if (P.type == "leaf")
        return {
          offset: P.maxByteRange - 1,
          proof: (0, r.concatBuffers)([
            H,
            P.dataHash,
            C(P.maxByteRange)
          ])
        };
      if (P.type == "branch") {
        const K = (0, r.concatBuffers)([
          H,
          P.leftChild.id,
          P.rightChild.id,
          C(P.byteRange)
        ]);
        return [
          w(P.leftChild, K, L + 1),
          w(P.rightChild, K, L + 1)
        ];
      }
      throw new Error("Unexpected node type");
    }
    function m(P) {
      const H = [];
      return P.forEach((L) => {
        Array.isArray(L) ? H.push(...m(L)) : H.push(L);
      }), H;
    }
    e.arrayFlatten = m;
    async function I(P, H) {
      return H ? {
        type: "branch",
        id: await z([
          await z(P.id),
          await z(H.id),
          await z(C(P.maxByteRange))
        ]),
        byteRange: P.maxByteRange,
        maxByteRange: H.maxByteRange,
        leftChild: P,
        rightChild: H
      } : P;
    }
    async function z(P) {
      return Array.isArray(P) && (P = i.default.utils.concatBuffers(P)), new Uint8Array(await i.default.crypto.hash(P));
    }
    function C(P) {
      const H = new Uint8Array(a);
      for (var L = H.length - 1; L >= 0; L--) {
        var K = P % 256;
        H[L] = K, P = (P - K) / 256;
      }
      return H;
    }
    e.intToBuffer = C;
    function Y(P) {
      let H = 0;
      for (var L = 0; L < P.length; L++)
        H *= 256, H += P[L];
      return H;
    }
    e.bufferToInt = Y;
    const te = (P, H) => P.every((L, K) => H[K] === L);
    e.arrayCompare = te;
    async function V(P, H, L, K, ee) {
      if (K <= 0)
        return !1;
      if (H >= K)
        return V(P, 0, K - 1, K, ee);
      if (H < 0)
        return V(P, 0, 0, K, ee);
      if (ee.length == o + a) {
        const rt = ee.slice(0, o), Ge = ee.slice(rt.length, rt.length + a), Ye = await z([
          await z(rt),
          await z(Ge)
        ]);
        return (0, e.arrayCompare)(P, Ye) ? {
          offset: K - 1,
          leftBound: L,
          rightBound: K,
          chunkSize: K - L
        } : !1;
      }
      const q = ee.slice(0, o), ne = ee.slice(q.length, q.length + o), le = ee.slice(q.length + ne.length, q.length + ne.length + a), ve = Y(le), Re = ee.slice(q.length + ne.length + le.length), Fe = await z([
        await z(q),
        await z(ne),
        await z(le)
      ]);
      return (0, e.arrayCompare)(P, Fe) ? H < ve ? await V(q, H, L, Math.min(K, ve), Re) : await V(ne, H, Math.max(L, ve), K, Re) : !1;
    }
    e.validatePath = V;
    async function j(P, H = "") {
      if (P.byteLength < 1)
        return H;
      const L = P.slice(0, o), K = P.slice(L.length, L.length + o), ee = P.slice(L.length + K.length, L.length + K.length + a), q = Y(ee), ne = P.slice(L.length + K.length + ee.length), le = await z([
        await z(L),
        await z(K),
        await z(ee)
      ]), ve = `${H}
${JSON.stringify(Buffer.from(L))},${JSON.stringify(Buffer.from(K))},${q} => ${JSON.stringify(le)}`;
      return j(ne, ve);
    }
    e.debug = j;
  }(Uo)), Uo;
}
var zd;
function xf() {
  if (zd)
    return Un;
  zd = 1, Object.defineProperty(Un, "__esModule", { value: !0 }), Un.Tag = void 0;
  const e = Le, i = ob(), r = pp();
  class a {
    get(d, g) {
      if (!Object.getOwnPropertyNames(this).includes(d))
        throw new Error(`Field "${d}" is not a property of the Arweave Transaction class.`);
      if (this[d] instanceof Uint8Array)
        return g && g.decode && g.string ? e.bufferToString(this[d]) : g && g.decode && !g.string ? this[d] : e.bufferTob64Url(this[d]);
      if (this[d] instanceof Array) {
        if ((g == null ? void 0 : g.decode) !== void 0 || (g == null ? void 0 : g.string) !== void 0)
          throw d === "tags" && console.warn(`Did you mean to use 'transaction["tags"]' ?`), new Error("Cannot decode or stringify an array.");
        return this[d];
      }
      return g && g.decode == !0 ? g && g.string ? e.b64UrlToString(this[d]) : e.b64UrlToBuffer(this[d]) : this[d];
    }
  }
  class o extends a {
    constructor(g, f, p = !1) {
      super();
      ae(this, "name");
      ae(this, "value");
      this.name = g, this.value = f;
    }
  }
  Un.Tag = o;
  class u extends a {
    constructor(g = {}) {
      super();
      ae(this, "format", 2);
      ae(this, "id", "");
      ae(this, "last_tx", "");
      ae(this, "owner", "");
      ae(this, "tags", []);
      ae(this, "target", "");
      ae(this, "quantity", "0");
      ae(this, "data_size", "0");
      ae(this, "data", new Uint8Array());
      ae(this, "data_root", "");
      ae(this, "reward", "0");
      ae(this, "signature", "");
      // Computed when needed.
      ae(this, "chunks");
      Object.assign(this, g), typeof this.data == "string" && (this.data = e.b64UrlToBuffer(this.data)), g.tags && (this.tags = g.tags.map((f) => new o(f.name, f.value)));
    }
    addTag(g, f) {
      this.tags.push(new o(e.stringToB64Url(g), e.stringToB64Url(f)));
    }
    toJSON() {
      return {
        format: this.format,
        id: this.id,
        last_tx: this.last_tx,
        owner: this.owner,
        tags: this.tags,
        target: this.target,
        quantity: this.quantity,
        data: e.bufferTob64Url(this.data),
        data_size: this.data_size,
        data_root: this.data_root,
        data_tree: this.data_tree,
        reward: this.reward,
        signature: this.signature
      };
    }
    setOwner(g) {
      this.owner = g;
    }
    setSignature({ id: g, owner: f, reward: p, tags: S, signature: w }) {
      this.id = g, this.owner = f, p && (this.reward = p), S && (this.tags = S), this.signature = w;
    }
    async prepareChunks(g) {
      !this.chunks && g.byteLength > 0 && (this.chunks = await (0, r.generateTransactionChunks)(g), this.data_root = e.bufferTob64Url(this.chunks.data_root)), !this.chunks && g.byteLength === 0 && (this.chunks = {
        chunks: [],
        data_root: new Uint8Array(),
        proofs: []
      }, this.data_root = "");
    }
    // Returns a chunk in a format suitable for posting to /chunk.
    // Similar to `prepareChunks()` this does not operate `this.data`,
    // instead using the data passed in.
    getChunk(g, f) {
      if (!this.chunks)
        throw new Error("Chunks have not been prepared");
      const p = this.chunks.proofs[g], S = this.chunks.chunks[g];
      return {
        data_root: this.data_root,
        data_size: this.data_size,
        data_path: e.bufferTob64Url(p.proof),
        offset: p.offset.toString(),
        chunk: e.bufferTob64Url(f.slice(S.minByteRange, S.maxByteRange))
      };
    }
    async getSignatureData() {
      switch (this.format) {
        case 1:
          let g = this.tags.reduce((p, S) => e.concatBuffers([
            p,
            S.get("name", { decode: !0, string: !1 }),
            S.get("value", { decode: !0, string: !1 })
          ]), new Uint8Array());
          return e.concatBuffers([
            this.get("owner", { decode: !0, string: !1 }),
            this.get("target", { decode: !0, string: !1 }),
            this.get("data", { decode: !0, string: !1 }),
            e.stringToBuffer(this.quantity),
            e.stringToBuffer(this.reward),
            this.get("last_tx", { decode: !0, string: !1 }),
            g
          ]);
        case 2:
          this.data_root || await this.prepareChunks(this.data);
          const f = this.tags.map((p) => [
            p.get("name", { decode: !0, string: !1 }),
            p.get("value", { decode: !0, string: !1 })
          ]);
          return await (0, i.default)([
            e.stringToBuffer(this.format.toString()),
            this.get("owner", { decode: !0, string: !1 }),
            this.get("target", { decode: !0, string: !1 }),
            e.stringToBuffer(this.quantity),
            e.stringToBuffer(this.reward),
            this.get("last_tx", { decode: !0, string: !1 }),
            f,
            e.stringToBuffer(this.data_size),
            this.get("data_root", { decode: !0, string: !1 })
          ]);
        default:
          throw new Error(`Unexpected transaction format: ${this.format}`);
      }
    }
  }
  return Un.default = u, Un;
}
var bi = {}, Gd;
function ub() {
  if (Gd)
    return bi;
  Gd = 1, Object.defineProperty(bi, "__esModule", { value: !0 }), bi.TransactionUploader = void 0;
  const e = xf(), i = Le, r = Yr, a = pp(), o = 1, u = [
    "invalid_json",
    "chunk_too_big",
    "data_path_too_big",
    "offset_too_big",
    "data_size_too_big",
    "chunk_proof_ratio_not_attractive",
    "invalid_proof"
  ], c = 1e3 * 40;
  class d {
    constructor(f, p) {
      ae(this, "api");
      ae(this, "chunkIndex", 0);
      ae(this, "txPosted", !1);
      ae(this, "transaction");
      ae(this, "lastRequestTimeEnd", 0);
      ae(this, "totalErrors", 0);
      // Not serialized.
      ae(this, "data");
      ae(this, "lastResponseStatus", 0);
      ae(this, "lastResponseError", "");
      if (this.api = f, !p.id)
        throw new Error("Transaction is not signed");
      if (!p.chunks)
        throw new Error("Transaction chunks not prepared");
      this.data = p.data, this.transaction = new e.default(Object.assign({}, p, { data: new Uint8Array(0) }));
    }
    get isComplete() {
      return this.txPosted && this.chunkIndex === this.transaction.chunks.chunks.length;
    }
    get totalChunks() {
      return this.transaction.chunks.chunks.length;
    }
    get uploadedChunks() {
      return this.chunkIndex;
    }
    get pctComplete() {
      return Math.trunc(this.uploadedChunks / this.totalChunks * 100);
    }
    /**
     * Uploads the next part of the transaction.
     * On the first call this posts the transaction
     * itself and on any subsequent calls uploads the
     * next chunk until it completes.
     */
    async uploadChunk(f) {
      if (this.isComplete)
        throw new Error("Upload is already complete");
      if (this.lastResponseError !== "" ? this.totalErrors++ : this.totalErrors = 0, this.totalErrors === 100)
        throw new Error(`Unable to complete upload: ${this.lastResponseStatus}: ${this.lastResponseError}`);
      let p = this.lastResponseError === "" ? 0 : Math.max(this.lastRequestTimeEnd + c - Date.now(), c);
      if (p > 0 && (p = p - p * Math.random() * 0.3, await new Promise((I) => setTimeout(I, p))), this.lastResponseError = "", !this.txPosted) {
        await this.postTransaction();
        return;
      }
      f && (this.chunkIndex = f);
      const S = this.transaction.getChunk(f || this.chunkIndex, this.data);
      if (!await (0, a.validatePath)(this.transaction.chunks.data_root, parseInt(S.offset), 0, parseInt(S.data_size), i.b64UrlToBuffer(S.data_path)))
        throw new Error(`Unable to validate chunk ${this.chunkIndex}`);
      const m = await this.api.post("chunk", this.transaction.getChunk(this.chunkIndex, this.data)).catch((I) => (console.error(I.message), { status: -1, data: { error: I.message } }));
      if (this.lastRequestTimeEnd = Date.now(), this.lastResponseStatus = m.status, this.lastResponseStatus == 200)
        this.chunkIndex++;
      else if (this.lastResponseError = (0, r.getError)(m), u.includes(this.lastResponseError))
        throw new Error(`Fatal error uploading chunk ${this.chunkIndex}: ${this.lastResponseError}`);
    }
    /**
     * Reconstructs an upload from its serialized state and data.
     * Checks if data matches the expected data_root.
     *
     * @param serialized
     * @param data
     */
    static async fromSerialized(f, p, S) {
      if (!p || typeof p.chunkIndex != "number" || typeof p.transaction != "object")
        throw new Error("Serialized object does not match expected format.");
      var w = new e.default(p.transaction);
      w.chunks || await w.prepareChunks(S);
      const m = new d(f, w);
      if (m.chunkIndex = p.chunkIndex, m.lastRequestTimeEnd = p.lastRequestTimeEnd, m.lastResponseError = p.lastResponseError, m.lastResponseStatus = p.lastResponseStatus, m.txPosted = p.txPosted, m.data = S, m.transaction.data_root !== p.transaction.data_root)
        throw new Error("Data mismatch: Uploader doesn't match provided data.");
      return m;
    }
    /**
     * Reconstruct an upload from the tx metadata, ie /tx/<id>.
     *
     * @param api
     * @param id
     * @param data
     */
    static async fromTransactionId(f, p) {
      const S = await f.get(`tx/${p}`);
      if (S.status !== 200)
        throw new Error(`Tx ${p} not found: ${S.status}`);
      const w = S.data;
      return w.data = new Uint8Array(0), {
        txPosted: !0,
        chunkIndex: 0,
        lastResponseError: "",
        lastRequestTimeEnd: 0,
        lastResponseStatus: 0,
        transaction: w
      };
    }
    toJSON() {
      return {
        chunkIndex: this.chunkIndex,
        transaction: this.transaction,
        lastRequestTimeEnd: this.lastRequestTimeEnd,
        lastResponseStatus: this.lastResponseStatus,
        lastResponseError: this.lastResponseError,
        txPosted: this.txPosted
      };
    }
    // POST to /tx
    async postTransaction() {
      if (this.totalChunks <= o) {
        this.transaction.data = this.data;
        const S = await this.api.post("tx", this.transaction).catch((w) => (console.error(w), { status: -1, data: { error: w.message } }));
        if (this.lastRequestTimeEnd = Date.now(), this.lastResponseStatus = S.status, this.transaction.data = new Uint8Array(0), S.status >= 200 && S.status < 300) {
          this.txPosted = !0, this.chunkIndex = o;
          return;
        }
        throw this.lastResponseError = (0, r.getError)(S), new Error(`Unable to upload transaction: ${S.status}, ${this.lastResponseError}`);
      }
      const p = await this.api.post("tx", this.transaction);
      if (this.lastRequestTimeEnd = Date.now(), this.lastResponseStatus = p.status, !(p.status >= 200 && p.status < 300))
        throw this.lastResponseError = (0, r.getError)(p), new Error(`Unable to upload transaction: ${p.status}, ${this.lastResponseError}`);
      this.txPosted = !0;
    }
  }
  return bi.TransactionUploader = d, bi;
}
var Kd;
function fb() {
  if (Kd)
    return Pa;
  Kd = 1, Object.defineProperty(Pa, "__esModule", { value: !0 });
  const e = Yr, i = xf(), r = Le, a = ub();
  class o {
    constructor(c, d, g) {
      ae(this, "api");
      ae(this, "crypto");
      ae(this, "chunks");
      this.api = c, this.crypto = d, this.chunks = g;
    }
    async getTransactionAnchor() {
      const c = await this.api.get("tx_anchor");
      if (!c.data.match(/^[a-z0-9_-]{43,}/i) || !c.ok)
        throw new Error(`Could not getTransactionAnchor. Received: ${c.data}. Status: ${c.status}, ${c.statusText}`);
      return c.data;
    }
    async getPrice(c, d) {
      let g = d ? `price/${c}/${d}` : `price/${c}`;
      const f = await this.api.get(g);
      if (!/^\d+$/.test(f.data) || !f.ok)
        throw new Error(`Could not getPrice. Received: ${f.data}. Status: ${f.status}, ${f.statusText}`);
      return f.data;
    }
    async get(c) {
      const d = await this.api.get(`tx/${c}`);
      if (d.status == 200) {
        const g = parseInt(d.data.data_size);
        if (d.data.format >= 2 && g > 0 && g <= 1024 * 1024 * 12) {
          const f = await this.getData(c);
          return new i.default({
            ...d.data,
            data: f
          });
        }
        return new i.default({
          ...d.data,
          format: d.data.format || 1
        });
      }
      throw d.status == 404 ? new e.default(
        "TX_NOT_FOUND"
        /* ArweaveErrorType.TX_NOT_FOUND */
      ) : d.status == 410 ? new e.default(
        "TX_FAILED"
        /* ArweaveErrorType.TX_FAILED */
      ) : new e.default(
        "TX_INVALID"
        /* ArweaveErrorType.TX_INVALID */
      );
    }
    fromRaw(c) {
      return new i.default(c);
    }
    async search(c, d) {
      return this.api.post("arql", {
        op: "equals",
        expr1: c,
        expr2: d
      }).then((g) => g.data ? g.data : []);
    }
    getStatus(c) {
      return this.api.get(`tx/${c}/status`).then((d) => d.status == 200 ? {
        status: 200,
        confirmed: d.data
      } : {
        status: d.status,
        confirmed: null
      });
    }
    async getData(c, d) {
      let g;
      try {
        g = await this.chunks.downloadChunkedData(c);
      } catch (f) {
        console.error(`Error while trying to download chunked data for ${c}`), console.error(f);
      }
      if (!g) {
        console.warn(`Falling back to gateway cache for ${c}`);
        try {
          const { data: f, ok: p, status: S, statusText: w } = await this.api.get(`/${c}`, { responseType: "arraybuffer" });
          if (!p)
            throw new Error("Bad http status code", {
              cause: { status: S, statusText: w }
            });
          g = f;
        } catch (f) {
          console.error(`Error while trying to download contiguous data from gateway cache for ${c}`), console.error(f);
        }
      }
      if (!g)
        throw new Error(`${c} data was not found!`);
      return d && d.decode && !d.string ? g : d && d.decode && d.string ? r.bufferToString(g) : r.bufferTob64Url(g);
    }
    async sign(c, d, g) {
      const p = typeof d == "object" && ((w) => {
        let m = !0;
        return ["n", "e", "d", "p", "q", "dp", "dq", "qi"].map((I) => !(I in w) && (m = !1)), m;
      })(d), S = typeof arweaveWallet == "object";
      if (!p && !S)
        throw new Error("No valid JWK or external wallet found to sign transaction.");
      if (p) {
        c.setOwner(d.n);
        let w = await c.getSignatureData(), m = await this.crypto.sign(d, w, g), I = await this.crypto.hash(m);
        c.setSignature({
          id: r.bufferTob64Url(I),
          owner: d.n,
          signature: r.bufferTob64Url(m)
        });
      } else if (S) {
        try {
          (await arweaveWallet.getPermissions()).includes("SIGN_TRANSACTION") || await arweaveWallet.connect(["SIGN_TRANSACTION"]);
        } catch {
        }
        const w = await arweaveWallet.sign(c, g);
        c.setSignature({
          id: w.id,
          owner: w.owner,
          reward: w.reward,
          tags: w.tags,
          signature: w.signature
        });
      } else
        throw new Error("An error occurred while signing. Check wallet is valid");
    }
    async verify(c) {
      const d = await c.getSignatureData(), g = c.get("signature", {
        decode: !0,
        string: !1
      }), f = r.bufferTob64Url(await this.crypto.hash(g));
      if (c.id !== f)
        throw new Error("Invalid transaction signature or ID! The transaction ID doesn't match the expected SHA-256 hash of the signature.");
      return this.crypto.verify(c.owner, d, g);
    }
    async post(c) {
      if (typeof c == "string" ? c = new i.default(JSON.parse(c)) : typeof c.readInt32BE == "function" ? c = new i.default(JSON.parse(c.toString())) : typeof c == "object" && !(c instanceof i.default) && (c = new i.default(c)), !(c instanceof i.default))
        throw new Error("Must be Transaction object");
      c.chunks || await c.prepareChunks(c.data);
      const d = await this.getUploader(c, c.data);
      try {
        for (; !d.isComplete; )
          await d.uploadChunk();
      } catch (g) {
        if (d.lastResponseStatus > 0)
          return {
            status: d.lastResponseStatus,
            statusText: d.lastResponseError,
            data: {
              error: d.lastResponseError
            }
          };
        throw g;
      }
      return {
        status: 200,
        statusText: "OK",
        data: {}
      };
    }
    /**
     * Gets an uploader than can be used to upload a transaction chunk by chunk, giving progress
     * and the ability to resume.
     *
     * Usage example:
     *
     * ```
     * const uploader = arweave.transactions.getUploader(transaction);
     * while (!uploader.isComplete) {
     *   await uploader.uploadChunk();
     *   console.log(`${uploader.pctComplete}%`);
     * }
     * ```
     *
     * @param upload a Transaction object, a previously save progress object, or a transaction id.
     * @param data the data of the transaction. Required when resuming an upload.
     */
    async getUploader(c, d) {
      let g;
      if (d instanceof ArrayBuffer && (d = new Uint8Array(d)), c instanceof i.default) {
        if (d || (d = c.data), !(d instanceof Uint8Array))
          throw new Error("Data format is invalid");
        c.chunks || await c.prepareChunks(d), g = new a.TransactionUploader(this.api, c), (!g.data || g.data.length === 0) && (g.data = d);
      } else {
        if (typeof c == "string" && (c = await a.TransactionUploader.fromTransactionId(this.api, c)), !d || !(d instanceof Uint8Array))
          throw new Error("Must provide data when resuming upload");
        g = await a.TransactionUploader.fromSerialized(this.api, c, d);
      }
      return g;
    }
    /**
     * Async generator version of uploader
     *
     * Usage example:
     *
     * ```
     * for await (const uploader of arweave.transactions.upload(tx)) {
     *  console.log(`${uploader.pctComplete}%`);
     * }
     * ```
     *
     * @param upload a Transaction object, a previously save uploader, or a transaction id.
     * @param data the data of the transaction. Required when resuming an upload.
     */
    async *upload(c, d) {
      const g = await this.getUploader(c, d);
      for (; !g.isComplete; )
        await g.uploadChunk(), yield g;
      return g;
    }
  }
  return Pa.default = o, Pa;
}
var Tf = {};
Object.defineProperty(Tf, "__esModule", { value: !0 });
const Wd = Le;
class lb {
  constructor(i, r) {
    ae(this, "api");
    ae(this, "crypto");
    this.api = i, this.crypto = r;
  }
  /**
   * Get the wallet balance for the given address.
   *
   * @param {string} address - The arweave address to get the balance for.
   *
   * @returns {Promise<string>} - Promise which resolves with a winston string balance.
   */
  getBalance(i) {
    return this.api.get(`wallet/${i}/balance`).then((r) => r.data);
  }
  /**
   * Get the last transaction ID for the given wallet address.
   *
   * @param {string} address - The arweave address to get the transaction for.
   *
   * @returns {Promise<string>} - Promise which resolves with a transaction ID.
   */
  getLastTransactionID(i) {
    return this.api.get(`wallet/${i}/last_tx`).then((r) => r.data);
  }
  generate() {
    return this.crypto.generateJWK();
  }
  async jwkToAddress(i) {
    return !i || i === "use_wallet" ? this.getAddress() : this.getAddress(i);
  }
  async getAddress(i) {
    if (!i || i === "use_wallet") {
      try {
        await arweaveWallet.connect(["ACCESS_ADDRESS"]);
      } catch {
      }
      return arweaveWallet.getActiveAddress();
    } else
      return this.ownerToAddress(i.n);
  }
  async ownerToAddress(i) {
    return Wd.bufferTob64Url(await this.crypto.hash(Wd.b64UrlToBuffer(i)));
  }
}
Tf.default = lb;
var Ii = {};
Object.defineProperty(Ii, "__esModule", { value: !0 });
Ii.SiloResource = void 0;
const Xd = Le;
class cb {
  constructor(i, r, a) {
    ae(this, "api");
    ae(this, "crypto");
    ae(this, "transactions");
    this.api = i, this.crypto = r, this.transactions = a;
  }
  async get(i) {
    if (!i)
      throw new Error("No Silo URI specified");
    const r = await this.parseUri(i), a = await this.transactions.search("Silo-Name", r.getAccessKey());
    if (a.length == 0)
      throw new Error(`No data could be found for the Silo URI: ${i}`);
    const o = await this.transactions.get(a[0]);
    if (!o)
      throw new Error(`No data could be found for the Silo URI: ${i}`);
    const u = o.get("data", { decode: !0, string: !1 });
    return this.crypto.decrypt(u, r.getEncryptionKey());
  }
  async readTransactionData(i, r) {
    if (!r)
      throw new Error("No Silo URI specified");
    const a = await this.parseUri(r), o = i.get("data", { decode: !0, string: !1 });
    return this.crypto.decrypt(o, a.getEncryptionKey());
  }
  async parseUri(i) {
    const r = i.match(/^([a-z0-9-_]+)\.([0-9]+)/i);
    if (!r)
      throw new Error("Invalid Silo name, must be a name in the format of [a-z0-9]+.[0-9]+, e.g. 'bubble.7'");
    const a = r[1], o = Math.pow(2, parseInt(r[2])), u = await this.hash(Xd.stringToBuffer(a), o), c = Xd.bufferTob64(u.slice(0, 15)), d = await this.hash(u.slice(16, 31), 1);
    return new gp(i, c, d);
  }
  async hash(i, r) {
    let a = await this.crypto.hash(i);
    for (let o = 0; o < r - 1; o++)
      a = await this.crypto.hash(a);
    return a;
  }
}
Ii.default = cb;
class gp {
  constructor(i, r, a) {
    ae(this, "uri");
    ae(this, "accessKey");
    ae(this, "encryptionKey");
    this.uri = i, this.accessKey = r, this.encryptionKey = a;
  }
  getUri() {
    return this.uri;
  }
  getAccessKey() {
    return this.accessKey;
  }
  getEncryptionKey() {
    return this.encryptionKey;
  }
}
Ii.SiloResource = gp;
var Rf = {};
Object.defineProperty(Rf, "__esModule", { value: !0 });
const Zd = Yr, db = Le;
class hb {
  constructor(i) {
    ae(this, "api");
    this.api = i;
  }
  async getTransactionOffset(i) {
    const r = await this.api.get(`tx/${i}/offset`);
    if (r.status === 200)
      return r.data;
    throw new Error(`Unable to get transaction offset: ${(0, Zd.getError)(r)}`);
  }
  async getChunk(i) {
    const r = await this.api.get(`chunk/${i}`);
    if (r.status === 200)
      return r.data;
    throw new Error(`Unable to get chunk: ${(0, Zd.getError)(r)}`);
  }
  async getChunkData(i) {
    const r = await this.getChunk(i);
    return db.b64UrlToBuffer(r.chunk);
  }
  firstChunkOffset(i) {
    return parseInt(i.offset) - parseInt(i.size) + 1;
  }
  async downloadChunkedData(i) {
    const r = await this.getTransactionOffset(i), a = parseInt(r.size), u = parseInt(r.offset) - a + 1, c = new Uint8Array(a);
    let d = 0;
    for (; d < a; ) {
      this.api.config.logging && console.log(`[chunk] ${d}/${a}`);
      let g;
      try {
        g = await this.getChunkData(u + d);
      } catch {
        console.error(`[chunk] Failed to fetch chunk at offset ${u + d}`), console.error("[chunk] This could indicate that the chunk wasn't uploaded or hasn't yet seeded properly to a particular gateway/node");
      }
      if (g)
        c.set(g, d), d += g.length;
      else
        throw new Error(`Couldn't complete data download at ${d}/${a}`);
    }
    return c;
  }
}
Rf.default = hb;
var Of = {};
Object.defineProperty(Of, "__esModule", { value: !0 });
const pb = Yr, cl = class {
  constructor(i, r) {
    ae(this, "api");
    ae(this, "network");
    this.api = i, this.network = r;
  }
  /**
   * Gets a block by its "indep_hash"
   */
  async get(i) {
    const r = await this.api.get(`${cl.ENDPOINT}${i}`);
    if (r.status === 200)
      return r.data;
    throw r.status === 404 ? new pb.default(
      "BLOCK_NOT_FOUND"
      /* ArweaveErrorType.BLOCK_NOT_FOUND */
    ) : new Error(`Error while loading block data: ${r}`);
  }
  /**
   * Gets current block data (ie. block with indep_hash = Network.getInfo().current)
   */
  async getCurrent() {
    const { current: i } = await this.network.getInfo();
    return await this.get(i);
  }
};
let Ga = cl;
ae(Ga, "ENDPOINT", "block/hash/");
Of.default = Ga;
var jd;
function Ya() {
  if (jd)
    return Da;
  jd = 1, Object.defineProperty(Da, "__esModule", { value: !0 });
  const e = Af, i = Ef, r = bf, a = Sf, o = fb(), u = Tf, c = xf(), d = Le, g = Ii, f = Rf, p = Of, w = class {
    constructor(I) {
      ae(this, "api");
      ae(this, "wallets");
      ae(this, "transactions");
      ae(this, "network");
      ae(this, "blocks");
      ae(this, "ar");
      ae(this, "silo");
      ae(this, "chunks");
      this.api = new i.default(I), this.wallets = new u.default(this.api, w.crypto), this.chunks = new f.default(this.api), this.transactions = new o.default(this.api, w.crypto, this.chunks), this.silo = new g.default(this.api, this.crypto, this.transactions), this.network = new a.default(this.api), this.blocks = new p.default(this.api, this.network), this.ar = new e.default();
    }
    /** @deprecated */
    get crypto() {
      return w.crypto;
    }
    /** @deprecated */
    get utils() {
      return w.utils;
    }
    getConfig() {
      return {
        api: this.api.getConfig(),
        crypto: null
      };
    }
    async createTransaction(I, z) {
      const C = {};
      if (Object.assign(C, I), !I.data && !(I.target && I.quantity))
        throw new Error("A new Arweave transaction must have a 'data' value, or 'target' and 'quantity' values.");
      if (I.owner == null && z && z !== "use_wallet" && (C.owner = z.n), I.last_tx == null && (C.last_tx = await this.transactions.getTransactionAnchor()), typeof I.data == "string" && (I.data = d.stringToBuffer(I.data)), I.data instanceof ArrayBuffer && (I.data = new Uint8Array(I.data)), I.data && !(I.data instanceof Uint8Array))
        throw new Error("Expected data to be a string, Uint8Array or ArrayBuffer");
      if (I.reward == null) {
        const te = I.data ? I.data.byteLength : 0;
        C.reward = await this.transactions.getPrice(te, C.target);
      }
      C.data_root = "", C.data_size = I.data ? I.data.byteLength.toString() : "0", C.data = I.data || new Uint8Array(0);
      const Y = new c.default(C);
      return await Y.getSignatureData(), Y;
    }
    async createSiloTransaction(I, z, C) {
      const Y = {};
      if (Object.assign(Y, I), !I.data)
        throw new Error("Silo transactions must have a 'data' value");
      if (!C)
        throw new Error("No Silo URI specified.");
      if (I.target || I.quantity)
        throw new Error("Silo transactions can only be used for storing data, sending AR to other wallets isn't supported.");
      if (I.owner == null) {
        if (!z || !z.n)
          throw new Error("A new Arweave transaction must either have an 'owner' attribute, or you must provide the jwk parameter.");
        Y.owner = z.n;
      }
      I.last_tx == null && (Y.last_tx = await this.transactions.getTransactionAnchor());
      const te = await this.silo.parseUri(C);
      if (typeof I.data == "string") {
        const j = await this.crypto.encrypt(d.stringToBuffer(I.data), te.getEncryptionKey());
        Y.reward = await this.transactions.getPrice(j.byteLength), Y.data = d.bufferTob64Url(j);
      }
      if (I.data instanceof Uint8Array) {
        const j = await this.crypto.encrypt(I.data, te.getEncryptionKey());
        Y.reward = await this.transactions.getPrice(j.byteLength), Y.data = d.bufferTob64Url(j);
      }
      const V = new c.default(Y);
      return V.addTag("Silo-Name", te.getAccessKey()), V.addTag("Silo-Version", "0.1.0"), V;
    }
    arql(I) {
      return this.api.post("/arql", I).then((z) => z.data || []);
    }
  };
  let S = w;
  return ae(S, "init"), ae(S, "crypto", new r.default()), ae(S, "utils", d), Da.default = S, Da;
}
var os = {};
Object.defineProperty(os, "__esModule", { value: !0 });
os.getDefaultConfig = void 0;
const gb = (e, i) => {
  const r = /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/, a = i.split("."), o = a[a.length - 1], u = ["localhost", "[::1]"];
  return u.includes(i) || e == "file" || u.includes(o) || !!i.match(r) || !!o.match(r);
}, _b = (e) => {
  const i = e.charAt(0) === "[", r = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
  return !!e.match(r) || i;
}, vb = (e, i) => {
  if (gb(e, i))
    return {
      protocol: "https",
      host: "arweave.net",
      port: 443
    };
  if (!_b(i)) {
    let r = i.split(".");
    if (r.length >= 3) {
      r.shift();
      const a = r.join(".");
      return {
        protocol: e,
        host: a
      };
    }
  }
  return {
    protocol: e,
    host: i
  };
};
os.getDefaultConfig = vb;
(function(e) {
  var i = se && se.__createBinding || (Object.create ? function(u, c, d, g) {
    g === void 0 && (g = d);
    var f = Object.getOwnPropertyDescriptor(c, d);
    (!f || ("get" in f ? !c.__esModule : f.writable || f.configurable)) && (f = { enumerable: !0, get: function() {
      return c[d];
    } }), Object.defineProperty(u, g, f);
  } : function(u, c, d, g) {
    g === void 0 && (g = d), u[g] = c[d];
  }), r = se && se.__exportStar || function(u, c) {
    for (var d in u)
      d !== "default" && !Object.prototype.hasOwnProperty.call(c, d) && i(c, u, d);
  };
  Object.defineProperty(e, "__esModule", { value: !0 });
  const a = Ya(), o = os;
  a.default.init = function(u = {}) {
    const c = {
      host: "arweave.net",
      port: 443,
      protocol: "https"
    };
    if (typeof location != "object" || !location.protocol || !location.hostname)
      return new a.default({
        ...u,
        ...c
      });
    const d = location.protocol.replace(":", ""), g = location.hostname, f = location.port ? parseInt(location.port) : d == "https" ? 443 : 80, p = (0, o.getDefaultConfig)(d, g), S = u.protocol || p.protocol, w = u.host || p.host, m = u.port || p.port || f;
    return new a.default({
      ...u,
      host: w,
      protocol: S,
      port: m
    });
  }, typeof globalThis == "object" ? globalThis.Arweave = a.default : typeof self == "object" && (self.Arweave = a.default), r(Ya(), e), e.default = a.default;
})(as);
const wb = /* @__PURE__ */ mf(as);
var Cf = { exports: {} }, _p = function(i, r) {
  return function() {
    for (var o = new Array(arguments.length), u = 0; u < o.length; u++)
      o[u] = arguments[u];
    return i.apply(r, o);
  };
}, yb = _p, Nf = Object.prototype.toString, Lf = function(e) {
  return function(i) {
    var r = Nf.call(i);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function vn(e) {
  return e = e.toLowerCase(), function(r) {
    return Lf(r) === e;
  };
}
function Df(e) {
  return Array.isArray(e);
}
function Qa(e) {
  return typeof e > "u";
}
function mb(e) {
  return e !== null && !Qa(e) && e.constructor !== null && !Qa(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
var vp = vn("ArrayBuffer");
function Ab(e) {
  var i;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? i = ArrayBuffer.isView(e) : i = e && e.buffer && vp(e.buffer), i;
}
function Eb(e) {
  return typeof e == "string";
}
function bb(e) {
  return typeof e == "number";
}
function wp(e) {
  return e !== null && typeof e == "object";
}
function Ka(e) {
  if (Lf(e) !== "object")
    return !1;
  var i = Object.getPrototypeOf(e);
  return i === null || i === Object.prototype;
}
var Sb = vn("Date"), xb = vn("File"), Tb = vn("Blob"), Rb = vn("FileList");
function Pf(e) {
  return Nf.call(e) === "[object Function]";
}
function Ob(e) {
  return wp(e) && Pf(e.pipe);
}
function Cb(e) {
  var i = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || Nf.call(e) === i || Pf(e.toString) && e.toString() === i);
}
var Nb = vn("URLSearchParams");
function Lb(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function Db() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function Bf(e, i) {
  if (!(e === null || typeof e > "u"))
    if (typeof e != "object" && (e = [e]), Df(e))
      for (var r = 0, a = e.length; r < a; r++)
        i.call(null, e[r], r, e);
    else
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && i.call(null, e[o], o, e);
}
function Qu() {
  var e = {};
  function i(o, u) {
    Ka(e[u]) && Ka(o) ? e[u] = Qu(e[u], o) : Ka(o) ? e[u] = Qu({}, o) : Df(o) ? e[u] = o.slice() : e[u] = o;
  }
  for (var r = 0, a = arguments.length; r < a; r++)
    Bf(arguments[r], i);
  return e;
}
function Pb(e, i, r) {
  return Bf(i, function(o, u) {
    r && typeof o == "function" ? e[u] = yb(o, r) : e[u] = o;
  }), e;
}
function Bb(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function kb(e, i, r, a) {
  e.prototype = Object.create(i.prototype, a), e.prototype.constructor = e, r && Object.assign(e.prototype, r);
}
function Ib(e, i, r) {
  var a, o, u, c = {};
  i = i || {};
  do {
    for (a = Object.getOwnPropertyNames(e), o = a.length; o-- > 0; )
      u = a[o], c[u] || (i[u] = e[u], c[u] = !0);
    e = Object.getPrototypeOf(e);
  } while (e && (!r || r(e, i)) && e !== Object.prototype);
  return i;
}
function Ub(e, i, r) {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= i.length;
  var a = e.indexOf(i, r);
  return a !== -1 && a === r;
}
function Fb(e) {
  if (!e)
    return null;
  var i = e.length;
  if (Qa(i))
    return null;
  for (var r = new Array(i); i-- > 0; )
    r[i] = e[i];
  return r;
}
var Mb = function(e) {
  return function(i) {
    return e && i instanceof e;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), ut = {
  isArray: Df,
  isArrayBuffer: vp,
  isBuffer: mb,
  isFormData: Cb,
  isArrayBufferView: Ab,
  isString: Eb,
  isNumber: bb,
  isObject: wp,
  isPlainObject: Ka,
  isUndefined: Qa,
  isDate: Sb,
  isFile: xb,
  isBlob: Tb,
  isFunction: Pf,
  isStream: Ob,
  isURLSearchParams: Nb,
  isStandardBrowserEnv: Db,
  forEach: Bf,
  merge: Qu,
  extend: Pb,
  trim: Lb,
  stripBOM: Bb,
  inherits: kb,
  toFlatObject: Ib,
  kindOf: Lf,
  kindOfTest: vn,
  endsWith: Ub,
  toArray: Fb,
  isTypedArray: Mb,
  isFileList: Rb
}, Fn = ut;
function Vd(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var yp = function(i, r, a) {
  if (!r)
    return i;
  var o;
  if (a)
    o = a(r);
  else if (Fn.isURLSearchParams(r))
    o = r.toString();
  else {
    var u = [];
    Fn.forEach(r, function(g, f) {
      g === null || typeof g > "u" || (Fn.isArray(g) ? f = f + "[]" : g = [g], Fn.forEach(g, function(S) {
        Fn.isDate(S) ? S = S.toISOString() : Fn.isObject(S) && (S = JSON.stringify(S)), u.push(Vd(f) + "=" + Vd(S));
      }));
    }), o = u.join("&");
  }
  if (o) {
    var c = i.indexOf("#");
    c !== -1 && (i = i.slice(0, c)), i += (i.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return i;
}, $b = ut;
function us() {
  this.handlers = [];
}
us.prototype.use = function(i, r, a) {
  return this.handlers.push({
    fulfilled: i,
    rejected: r,
    synchronous: a ? a.synchronous : !1,
    runWhen: a ? a.runWhen : null
  }), this.handlers.length - 1;
};
us.prototype.eject = function(i) {
  this.handlers[i] && (this.handlers[i] = null);
};
us.prototype.forEach = function(i) {
  $b.forEach(this.handlers, function(a) {
    a !== null && i(a);
  });
};
var Hb = us, qb = ut, zb = function(i, r) {
  qb.forEach(i, function(o, u) {
    u !== r && u.toUpperCase() === r.toUpperCase() && (i[r] = o, delete i[u]);
  });
}, Fo, Jd;
function Yn() {
  if (Jd)
    return Fo;
  Jd = 1;
  var e = ut;
  function i(o, u, c, d, g) {
    Error.call(this), this.message = o, this.name = "AxiosError", u && (this.code = u), c && (this.config = c), d && (this.request = d), g && (this.response = g);
  }
  e.inherits(i, Error, {
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
  var r = i.prototype, a = {};
  return [
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
  ].forEach(function(o) {
    a[o] = { value: o };
  }), Object.defineProperties(i, a), Object.defineProperty(r, "isAxiosError", { value: !0 }), i.from = function(o, u, c, d, g, f) {
    var p = Object.create(r);
    return e.toFlatObject(o, p, function(w) {
      return w !== Error.prototype;
    }), i.call(p, o.message, u, c, d, g), p.name = o.name, f && Object.assign(p, f), p;
  }, Fo = i, Fo;
}
var mp = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Mo, Yd;
function Ap() {
  if (Yd)
    return Mo;
  Yd = 1;
  var e = ut;
  function i(r, a) {
    a = a || new FormData();
    var o = [];
    function u(d) {
      return d === null ? "" : e.isDate(d) ? d.toISOString() : e.isArrayBuffer(d) || e.isTypedArray(d) ? typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
    }
    function c(d, g) {
      if (e.isPlainObject(d) || e.isArray(d)) {
        if (o.indexOf(d) !== -1)
          throw Error("Circular reference detected in " + g);
        o.push(d), e.forEach(d, function(p, S) {
          if (!e.isUndefined(p)) {
            var w = g ? g + "." + S : S, m;
            if (p && !g && typeof p == "object") {
              if (e.endsWith(S, "{}"))
                p = JSON.stringify(p);
              else if (e.endsWith(S, "[]") && (m = e.toArray(p))) {
                m.forEach(function(I) {
                  !e.isUndefined(I) && a.append(w, u(I));
                });
                return;
              }
            }
            c(p, w);
          }
        }), o.pop();
      } else
        a.append(g, u(d));
    }
    return c(r), a;
  }
  return Mo = i, Mo;
}
var $o, Qd;
function Gb() {
  if (Qd)
    return $o;
  Qd = 1;
  var e = Yn();
  return $o = function(r, a, o) {
    var u = o.config.validateStatus;
    !o.status || !u || u(o.status) ? r(o) : a(new e(
      "Request failed with status code " + o.status,
      [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][Math.floor(o.status / 100) - 4],
      o.config,
      o.request,
      o
    ));
  }, $o;
}
var Ho, eh;
function Kb() {
  if (eh)
    return Ho;
  eh = 1;
  var e = ut;
  return Ho = e.isStandardBrowserEnv() ? (
    // Standard browser envs support document.cookie
    function() {
      return {
        write: function(a, o, u, c, d, g) {
          var f = [];
          f.push(a + "=" + encodeURIComponent(o)), e.isNumber(u) && f.push("expires=" + new Date(u).toGMTString()), e.isString(c) && f.push("path=" + c), e.isString(d) && f.push("domain=" + d), g === !0 && f.push("secure"), document.cookie = f.join("; ");
        },
        read: function(a) {
          var o = document.cookie.match(new RegExp("(^|;\\s*)(" + a + ")=([^;]*)"));
          return o ? decodeURIComponent(o[3]) : null;
        },
        remove: function(a) {
          this.write(a, "", Date.now() - 864e5);
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
  ), Ho;
}
var Wb = function(i) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(i);
}, Xb = function(i, r) {
  return r ? i.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : i;
}, Zb = Wb, jb = Xb, Ep = function(i, r) {
  return i && !Zb(r) ? jb(i, r) : r;
}, qo, th;
function Vb() {
  if (th)
    return qo;
  th = 1;
  var e = ut, i = [
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
  return qo = function(a) {
    var o = {}, u, c, d;
    return a && e.forEach(a.split(`
`), function(f) {
      if (d = f.indexOf(":"), u = e.trim(f.substr(0, d)).toLowerCase(), c = e.trim(f.substr(d + 1)), u) {
        if (o[u] && i.indexOf(u) >= 0)
          return;
        u === "set-cookie" ? o[u] = (o[u] ? o[u] : []).concat([c]) : o[u] = o[u] ? o[u] + ", " + c : c;
      }
    }), o;
  }, qo;
}
var zo, rh;
function Jb() {
  if (rh)
    return zo;
  rh = 1;
  var e = ut;
  return zo = e.isStandardBrowserEnv() ? (
    // Standard browser envs have full support of the APIs needed to test
    // whether the request URL is of the same origin as current location.
    function() {
      var r = /(msie|trident)/i.test(navigator.userAgent), a = document.createElement("a"), o;
      function u(c) {
        var d = c;
        return r && (a.setAttribute("href", d), d = a.href), a.setAttribute("href", d), {
          href: a.href,
          protocol: a.protocol ? a.protocol.replace(/:$/, "") : "",
          host: a.host,
          search: a.search ? a.search.replace(/^\?/, "") : "",
          hash: a.hash ? a.hash.replace(/^#/, "") : "",
          hostname: a.hostname,
          port: a.port,
          pathname: a.pathname.charAt(0) === "/" ? a.pathname : "/" + a.pathname
        };
      }
      return o = u(window.location.href), function(d) {
        var g = e.isString(d) ? u(d) : d;
        return g.protocol === o.protocol && g.host === o.host;
      };
    }()
  ) : (
    // Non standard browser envs (web workers, react-native) lack needed support.
    function() {
      return function() {
        return !0;
      };
    }()
  ), zo;
}
var Go, nh;
function fs() {
  if (nh)
    return Go;
  nh = 1;
  var e = Yn(), i = ut;
  function r(a) {
    e.call(this, a ?? "canceled", e.ERR_CANCELED), this.name = "CanceledError";
  }
  return i.inherits(r, e, {
    __CANCEL__: !0
  }), Go = r, Go;
}
var Ko, ih;
function Yb() {
  return ih || (ih = 1, Ko = function(i) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(i);
    return r && r[1] || "";
  }), Ko;
}
var Wo, ah;
function sh() {
  if (ah)
    return Wo;
  ah = 1;
  var e = ut, i = Gb(), r = Kb(), a = yp, o = Ep, u = Vb(), c = Jb(), d = mp, g = Yn(), f = fs(), p = Yb();
  return Wo = function(w) {
    return new Promise(function(I, z) {
      var C = w.data, Y = w.headers, te = w.responseType, V;
      function j() {
        w.cancelToken && w.cancelToken.unsubscribe(V), w.signal && w.signal.removeEventListener("abort", V);
      }
      e.isFormData(C) && e.isStandardBrowserEnv() && delete Y["Content-Type"];
      var P = new XMLHttpRequest();
      if (w.auth) {
        var H = w.auth.username || "", L = w.auth.password ? unescape(encodeURIComponent(w.auth.password)) : "";
        Y.Authorization = "Basic " + btoa(H + ":" + L);
      }
      var K = o(w.baseURL, w.url);
      P.open(w.method.toUpperCase(), a(K, w.params, w.paramsSerializer), !0), P.timeout = w.timeout;
      function ee() {
        if (P) {
          var le = "getAllResponseHeaders" in P ? u(P.getAllResponseHeaders()) : null, ve = !te || te === "text" || te === "json" ? P.responseText : P.response, Re = {
            data: ve,
            status: P.status,
            statusText: P.statusText,
            headers: le,
            config: w,
            request: P
          };
          i(function(rt) {
            I(rt), j();
          }, function(rt) {
            z(rt), j();
          }, Re), P = null;
        }
      }
      if ("onloadend" in P ? P.onloadend = ee : P.onreadystatechange = function() {
        !P || P.readyState !== 4 || P.status === 0 && !(P.responseURL && P.responseURL.indexOf("file:") === 0) || setTimeout(ee);
      }, P.onabort = function() {
        P && (z(new g("Request aborted", g.ECONNABORTED, w, P)), P = null);
      }, P.onerror = function() {
        z(new g("Network Error", g.ERR_NETWORK, w, P, P)), P = null;
      }, P.ontimeout = function() {
        var ve = w.timeout ? "timeout of " + w.timeout + "ms exceeded" : "timeout exceeded", Re = w.transitional || d;
        w.timeoutErrorMessage && (ve = w.timeoutErrorMessage), z(new g(
          ve,
          Re.clarifyTimeoutError ? g.ETIMEDOUT : g.ECONNABORTED,
          w,
          P
        )), P = null;
      }, e.isStandardBrowserEnv()) {
        var q = (w.withCredentials || c(K)) && w.xsrfCookieName ? r.read(w.xsrfCookieName) : void 0;
        q && (Y[w.xsrfHeaderName] = q);
      }
      "setRequestHeader" in P && e.forEach(Y, function(ve, Re) {
        typeof C > "u" && Re.toLowerCase() === "content-type" ? delete Y[Re] : P.setRequestHeader(Re, ve);
      }), e.isUndefined(w.withCredentials) || (P.withCredentials = !!w.withCredentials), te && te !== "json" && (P.responseType = w.responseType), typeof w.onDownloadProgress == "function" && P.addEventListener("progress", w.onDownloadProgress), typeof w.onUploadProgress == "function" && P.upload && P.upload.addEventListener("progress", w.onUploadProgress), (w.cancelToken || w.signal) && (V = function(le) {
        P && (z(!le || le && le.type ? new f() : le), P.abort(), P = null);
      }, w.cancelToken && w.cancelToken.subscribe(V), w.signal && (w.signal.aborted ? V() : w.signal.addEventListener("abort", V))), C || (C = null);
      var ne = p(K);
      if (ne && ["http", "https", "file"].indexOf(ne) === -1) {
        z(new g("Unsupported protocol " + ne + ":", g.ERR_BAD_REQUEST, w));
        return;
      }
      P.send(C);
    });
  }, Wo;
}
var Xo, oh;
function Qb() {
  return oh || (oh = 1, Xo = null), Xo;
}
var tt = ut, uh = zb, fh = Yn(), eS = mp, tS = Ap(), rS = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function lh(e, i) {
  !tt.isUndefined(e) && tt.isUndefined(e["Content-Type"]) && (e["Content-Type"] = i);
}
function nS() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = sh()), e;
}
function iS(e, i, r) {
  if (tt.isString(e))
    try {
      return (i || JSON.parse)(e), tt.trim(e);
    } catch (a) {
      if (a.name !== "SyntaxError")
        throw a;
    }
  return (r || JSON.stringify)(e);
}
var ls = {
  transitional: eS,
  adapter: nS(),
  transformRequest: [function(i, r) {
    if (uh(r, "Accept"), uh(r, "Content-Type"), tt.isFormData(i) || tt.isArrayBuffer(i) || tt.isBuffer(i) || tt.isStream(i) || tt.isFile(i) || tt.isBlob(i))
      return i;
    if (tt.isArrayBufferView(i))
      return i.buffer;
    if (tt.isURLSearchParams(i))
      return lh(r, "application/x-www-form-urlencoded;charset=utf-8"), i.toString();
    var a = tt.isObject(i), o = r && r["Content-Type"], u;
    if ((u = tt.isFileList(i)) || a && o === "multipart/form-data") {
      var c = this.env && this.env.FormData;
      return tS(u ? { "files[]": i } : i, c && new c());
    } else if (a || o === "application/json")
      return lh(r, "application/json"), iS(i);
    return i;
  }],
  transformResponse: [function(i) {
    var r = this.transitional || ls.transitional, a = r && r.silentJSONParsing, o = r && r.forcedJSONParsing, u = !a && this.responseType === "json";
    if (u || o && tt.isString(i) && i.length)
      try {
        return JSON.parse(i);
      } catch (c) {
        if (u)
          throw c.name === "SyntaxError" ? fh.from(c, fh.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    return i;
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
    FormData: Qb()
  },
  validateStatus: function(i) {
    return i >= 200 && i < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
tt.forEach(["delete", "get", "head"], function(i) {
  ls.headers[i] = {};
});
tt.forEach(["post", "put", "patch"], function(i) {
  ls.headers[i] = tt.merge(rS);
});
var kf = ls, aS = ut, sS = kf, oS = function(i, r, a) {
  var o = this || sS;
  return aS.forEach(a, function(c) {
    i = c.call(o, i, r);
  }), i;
}, Zo, ch;
function bp() {
  return ch || (ch = 1, Zo = function(i) {
    return !!(i && i.__CANCEL__);
  }), Zo;
}
var dh = ut, jo = oS, uS = bp(), fS = kf, lS = fs();
function Vo(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new lS();
}
var cS = function(i) {
  Vo(i), i.headers = i.headers || {}, i.data = jo.call(
    i,
    i.data,
    i.headers,
    i.transformRequest
  ), i.headers = dh.merge(
    i.headers.common || {},
    i.headers[i.method] || {},
    i.headers
  ), dh.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(o) {
      delete i.headers[o];
    }
  );
  var r = i.adapter || fS.adapter;
  return r(i).then(function(o) {
    return Vo(i), o.data = jo.call(
      i,
      o.data,
      o.headers,
      i.transformResponse
    ), o;
  }, function(o) {
    return uS(o) || (Vo(i), o && o.response && (o.response.data = jo.call(
      i,
      o.response.data,
      o.response.headers,
      i.transformResponse
    ))), Promise.reject(o);
  });
}, Bt = ut, Sp = function(i, r) {
  r = r || {};
  var a = {};
  function o(p, S) {
    return Bt.isPlainObject(p) && Bt.isPlainObject(S) ? Bt.merge(p, S) : Bt.isPlainObject(S) ? Bt.merge({}, S) : Bt.isArray(S) ? S.slice() : S;
  }
  function u(p) {
    if (Bt.isUndefined(r[p])) {
      if (!Bt.isUndefined(i[p]))
        return o(void 0, i[p]);
    } else
      return o(i[p], r[p]);
  }
  function c(p) {
    if (!Bt.isUndefined(r[p]))
      return o(void 0, r[p]);
  }
  function d(p) {
    if (Bt.isUndefined(r[p])) {
      if (!Bt.isUndefined(i[p]))
        return o(void 0, i[p]);
    } else
      return o(void 0, r[p]);
  }
  function g(p) {
    if (p in r)
      return o(i[p], r[p]);
    if (p in i)
      return o(void 0, i[p]);
  }
  var f = {
    url: c,
    method: c,
    data: c,
    baseURL: d,
    transformRequest: d,
    transformResponse: d,
    paramsSerializer: d,
    timeout: d,
    timeoutMessage: d,
    withCredentials: d,
    adapter: d,
    responseType: d,
    xsrfCookieName: d,
    xsrfHeaderName: d,
    onUploadProgress: d,
    onDownloadProgress: d,
    decompress: d,
    maxContentLength: d,
    maxBodyLength: d,
    beforeRedirect: d,
    transport: d,
    httpAgent: d,
    httpsAgent: d,
    cancelToken: d,
    socketPath: d,
    responseEncoding: d,
    validateStatus: g
  };
  return Bt.forEach(Object.keys(i).concat(Object.keys(r)), function(S) {
    var w = f[S] || u, m = w(S);
    Bt.isUndefined(m) && w !== g || (a[S] = m);
  }), a;
}, Jo, hh;
function xp() {
  return hh || (hh = 1, Jo = {
    version: "0.27.2"
  }), Jo;
}
var dS = xp().version, Wr = Yn(), If = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, i) {
  If[e] = function(a) {
    return typeof a === e || "a" + (i < 1 ? "n " : " ") + e;
  };
});
var ph = {};
If.transitional = function(i, r, a) {
  function o(u, c) {
    return "[Axios v" + dS + "] Transitional option '" + u + "'" + c + (a ? ". " + a : "");
  }
  return function(u, c, d) {
    if (i === !1)
      throw new Wr(
        o(c, " has been removed" + (r ? " in " + r : "")),
        Wr.ERR_DEPRECATED
      );
    return r && !ph[c] && (ph[c] = !0, console.warn(
      o(
        c,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), i ? i(u, c, d) : !0;
  };
};
function hS(e, i, r) {
  if (typeof e != "object")
    throw new Wr("options must be an object", Wr.ERR_BAD_OPTION_VALUE);
  for (var a = Object.keys(e), o = a.length; o-- > 0; ) {
    var u = a[o], c = i[u];
    if (c) {
      var d = e[u], g = d === void 0 || c(d, u, e);
      if (g !== !0)
        throw new Wr("option " + u + " must be " + g, Wr.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new Wr("Unknown option " + u, Wr.ERR_BAD_OPTION);
  }
}
var pS = {
  assertOptions: hS,
  validators: If
}, Tp = ut, gS = yp, gh = Hb, _h = cS, cs = Sp, _S = Ep, Rp = pS, Mn = Rp.validators;
function jn(e) {
  this.defaults = e, this.interceptors = {
    request: new gh(),
    response: new gh()
  };
}
jn.prototype.request = function(i, r) {
  typeof i == "string" ? (r = r || {}, r.url = i) : r = i || {}, r = cs(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var a = r.transitional;
  a !== void 0 && Rp.assertOptions(a, {
    silentJSONParsing: Mn.transitional(Mn.boolean),
    forcedJSONParsing: Mn.transitional(Mn.boolean),
    clarifyTimeoutError: Mn.transitional(Mn.boolean)
  }, !1);
  var o = [], u = !0;
  this.interceptors.request.forEach(function(m) {
    typeof m.runWhen == "function" && m.runWhen(r) === !1 || (u = u && m.synchronous, o.unshift(m.fulfilled, m.rejected));
  });
  var c = [];
  this.interceptors.response.forEach(function(m) {
    c.push(m.fulfilled, m.rejected);
  });
  var d;
  if (!u) {
    var g = [_h, void 0];
    for (Array.prototype.unshift.apply(g, o), g = g.concat(c), d = Promise.resolve(r); g.length; )
      d = d.then(g.shift(), g.shift());
    return d;
  }
  for (var f = r; o.length; ) {
    var p = o.shift(), S = o.shift();
    try {
      f = p(f);
    } catch (w) {
      S(w);
      break;
    }
  }
  try {
    d = _h(f);
  } catch (w) {
    return Promise.reject(w);
  }
  for (; c.length; )
    d = d.then(c.shift(), c.shift());
  return d;
};
jn.prototype.getUri = function(i) {
  i = cs(this.defaults, i);
  var r = _S(i.baseURL, i.url);
  return gS(r, i.params, i.paramsSerializer);
};
Tp.forEach(["delete", "get", "head", "options"], function(i) {
  jn.prototype[i] = function(r, a) {
    return this.request(cs(a || {}, {
      method: i,
      url: r,
      data: (a || {}).data
    }));
  };
});
Tp.forEach(["post", "put", "patch"], function(i) {
  function r(a) {
    return function(u, c, d) {
      return this.request(cs(d || {}, {
        method: i,
        headers: a ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: u,
        data: c
      }));
    };
  }
  jn.prototype[i] = r(), jn.prototype[i + "Form"] = r(!0);
});
var vS = jn, Yo, vh;
function wS() {
  if (vh)
    return Yo;
  vh = 1;
  var e = fs();
  function i(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    var a;
    this.promise = new Promise(function(c) {
      a = c;
    });
    var o = this;
    this.promise.then(function(u) {
      if (o._listeners) {
        var c, d = o._listeners.length;
        for (c = 0; c < d; c++)
          o._listeners[c](u);
        o._listeners = null;
      }
    }), this.promise.then = function(u) {
      var c, d = new Promise(function(g) {
        o.subscribe(g), c = g;
      }).then(u);
      return d.cancel = function() {
        o.unsubscribe(c);
      }, d;
    }, r(function(c) {
      o.reason || (o.reason = new e(c), a(o.reason));
    });
  }
  return i.prototype.throwIfRequested = function() {
    if (this.reason)
      throw this.reason;
  }, i.prototype.subscribe = function(a) {
    if (this.reason) {
      a(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(a) : this._listeners = [a];
  }, i.prototype.unsubscribe = function(a) {
    if (this._listeners) {
      var o = this._listeners.indexOf(a);
      o !== -1 && this._listeners.splice(o, 1);
    }
  }, i.source = function() {
    var a, o = new i(function(c) {
      a = c;
    });
    return {
      token: o,
      cancel: a
    };
  }, Yo = i, Yo;
}
var Qo, wh;
function yS() {
  return wh || (wh = 1, Qo = function(i) {
    return function(a) {
      return i.apply(null, a);
    };
  }), Qo;
}
var eu, yh;
function mS() {
  if (yh)
    return eu;
  yh = 1;
  var e = ut;
  return eu = function(r) {
    return e.isObject(r) && r.isAxiosError === !0;
  }, eu;
}
var mh = ut, AS = _p, Wa = vS, ES = Sp, bS = kf;
function Op(e) {
  var i = new Wa(e), r = AS(Wa.prototype.request, i);
  return mh.extend(r, Wa.prototype, i), mh.extend(r, i), r.create = function(o) {
    return Op(ES(e, o));
  }, r;
}
var Tt = Op(bS);
Tt.Axios = Wa;
Tt.CanceledError = fs();
Tt.CancelToken = wS();
Tt.isCancel = bp();
Tt.VERSION = xp().version;
Tt.toFormData = Ap();
Tt.AxiosError = Yn();
Tt.Cancel = Tt.CanceledError;
Tt.all = function(i) {
  return Promise.all(i);
};
Tt.spread = yS();
Tt.isAxiosError = mS();
Cf.exports = Tt;
Cf.exports.default = Tt;
var SS = Cf.exports, xS = SS;
const Cp = /* @__PURE__ */ mf(xS);
var ds = {}, es = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
es.exports;
(function(e, i) {
  (function() {
    var r, a = "4.17.21", o = 200, u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", c = "Expected a function", d = "Invalid `variable` option passed into `_.template`", g = "__lodash_hash_undefined__", f = 500, p = "__lodash_placeholder__", S = 1, w = 2, m = 4, I = 1, z = 2, C = 1, Y = 2, te = 4, V = 8, j = 16, P = 32, H = 64, L = 128, K = 256, ee = 512, q = 30, ne = "...", le = 800, ve = 16, Re = 1, Fe = 2, rt = 3, Ge = 1 / 0, Ye = 9007199254740991, Pr = 17976931348623157e292, Rt = 0 / 0, yt = 4294967295, vr = yt - 1, si = yt >>> 1, Q = [
      ["ary", L],
      ["bind", C],
      ["bindKey", Y],
      ["curry", V],
      ["curryRight", j],
      ["flip", ee],
      ["partial", P],
      ["partialRight", H],
      ["rearg", K]
    ], ir = "[object Arguments]", Qr = "[object Array]", oi = "[object AsyncFunction]", Qe = "[object Boolean]", pt = "[object Date]", y = "[object DOMException]", A = "[object Error]", b = "[object Function]", U = "[object GeneratorFunction]", R = "[object Map]", B = "[object Number]", $ = "[object Null]", T = "[object Object]", D = "[object Promise]", F = "[object Proxy]", k = "[object RegExp]", W = "[object Set]", oe = "[object String]", fe = "[object Symbol]", Te = "[object Undefined]", Pe = "[object WeakMap]", Ke = "[object WeakSet]", ye = "[object ArrayBuffer]", be = "[object DataView]", Ze = "[object Float32Array]", Br = "[object Float64Array]", en = "[object Int8Array]", tn = "[object Int16Array]", mt = "[object Int32Array]", wr = "[object Uint8Array]", ft = "[object Uint8ClampedArray]", je = "[object Uint16Array]", ke = "[object Uint32Array]", a_ = /\b__p \+= '';/g, s_ = /\b(__p \+=) '' \+/g, o_ = /(__e\(.*?\)|\b__t\)) \+\n'';/g, dl = /&(?:amp|lt|gt|quot|#39);/g, hl = /[&<>"']/g, u_ = RegExp(dl.source), f_ = RegExp(hl.source), l_ = /<%-([\s\S]+?)%>/g, c_ = /<%([\s\S]+?)%>/g, pl = /<%=([\s\S]+?)%>/g, d_ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, h_ = /^\w*$/, p_ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, bs = /[\\^$.*+?()[\]{}|]/g, g_ = RegExp(bs.source), Ss = /^\s+/, __ = /\s/, v_ = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, w_ = /\{\n\/\* \[wrapped with (.+)\] \*/, y_ = /,? & /, m_ = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, A_ = /[()=,{}\[\]\/\s]/, E_ = /\\(\\)?/g, b_ = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, gl = /\w*$/, S_ = /^[-+]0x[0-9a-f]+$/i, x_ = /^0b[01]+$/i, T_ = /^\[object .+?Constructor\]$/, R_ = /^0o[0-7]+$/i, O_ = /^(?:0|[1-9]\d*)$/, C_ = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Gi = /($^)/, N_ = /['\n\r\u2028\u2029\\]/g, Ki = "\\ud800-\\udfff", L_ = "\\u0300-\\u036f", D_ = "\\ufe20-\\ufe2f", P_ = "\\u20d0-\\u20ff", _l = L_ + D_ + P_, vl = "\\u2700-\\u27bf", wl = "a-z\\xdf-\\xf6\\xf8-\\xff", B_ = "\\xac\\xb1\\xd7\\xf7", k_ = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", I_ = "\\u2000-\\u206f", U_ = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", yl = "A-Z\\xc0-\\xd6\\xd8-\\xde", ml = "\\ufe0e\\ufe0f", Al = B_ + k_ + I_ + U_, xs = "['’]", F_ = "[" + Ki + "]", El = "[" + Al + "]", Wi = "[" + _l + "]", bl = "\\d+", M_ = "[" + vl + "]", Sl = "[" + wl + "]", xl = "[^" + Ki + Al + bl + vl + wl + yl + "]", Ts = "\\ud83c[\\udffb-\\udfff]", $_ = "(?:" + Wi + "|" + Ts + ")", Tl = "[^" + Ki + "]", Rs = "(?:\\ud83c[\\udde6-\\uddff]){2}", Os = "[\\ud800-\\udbff][\\udc00-\\udfff]", En = "[" + yl + "]", Rl = "\\u200d", Ol = "(?:" + Sl + "|" + xl + ")", H_ = "(?:" + En + "|" + xl + ")", Cl = "(?:" + xs + "(?:d|ll|m|re|s|t|ve))?", Nl = "(?:" + xs + "(?:D|LL|M|RE|S|T|VE))?", Ll = $_ + "?", Dl = "[" + ml + "]?", q_ = "(?:" + Rl + "(?:" + [Tl, Rs, Os].join("|") + ")" + Dl + Ll + ")*", z_ = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", G_ = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Pl = Dl + Ll + q_, K_ = "(?:" + [M_, Rs, Os].join("|") + ")" + Pl, W_ = "(?:" + [Tl + Wi + "?", Wi, Rs, Os, F_].join("|") + ")", X_ = RegExp(xs, "g"), Z_ = RegExp(Wi, "g"), Cs = RegExp(Ts + "(?=" + Ts + ")|" + W_ + Pl, "g"), j_ = RegExp([
      En + "?" + Sl + "+" + Cl + "(?=" + [El, En, "$"].join("|") + ")",
      H_ + "+" + Nl + "(?=" + [El, En + Ol, "$"].join("|") + ")",
      En + "?" + Ol + "+" + Cl,
      En + "+" + Nl,
      G_,
      z_,
      bl,
      K_
    ].join("|"), "g"), V_ = RegExp("[" + Rl + Ki + _l + ml + "]"), J_ = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Y_ = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], Q_ = -1, Ue = {};
    Ue[Ze] = Ue[Br] = Ue[en] = Ue[tn] = Ue[mt] = Ue[wr] = Ue[ft] = Ue[je] = Ue[ke] = !0, Ue[ir] = Ue[Qr] = Ue[ye] = Ue[Qe] = Ue[be] = Ue[pt] = Ue[A] = Ue[b] = Ue[R] = Ue[B] = Ue[T] = Ue[k] = Ue[W] = Ue[oe] = Ue[Pe] = !1;
    var Ie = {};
    Ie[ir] = Ie[Qr] = Ie[ye] = Ie[be] = Ie[Qe] = Ie[pt] = Ie[Ze] = Ie[Br] = Ie[en] = Ie[tn] = Ie[mt] = Ie[R] = Ie[B] = Ie[T] = Ie[k] = Ie[W] = Ie[oe] = Ie[fe] = Ie[wr] = Ie[ft] = Ie[je] = Ie[ke] = !0, Ie[A] = Ie[b] = Ie[Pe] = !1;
    var e1 = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, t1 = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, r1 = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, n1 = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, i1 = parseFloat, a1 = parseInt, Bl = typeof se == "object" && se && se.Object === Object && se, s1 = typeof self == "object" && self && self.Object === Object && self, nt = Bl || s1 || Function("return this")(), Ns = i && !i.nodeType && i, rn = Ns && !0 && e && !e.nodeType && e, kl = rn && rn.exports === Ns, Ls = kl && Bl.process, $t = function() {
      try {
        var O = rn && rn.require && rn.require("util").types;
        return O || Ls && Ls.binding && Ls.binding("util");
      } catch {
      }
    }(), Il = $t && $t.isArrayBuffer, Ul = $t && $t.isDate, Fl = $t && $t.isMap, Ml = $t && $t.isRegExp, $l = $t && $t.isSet, Hl = $t && $t.isTypedArray;
    function Ot(O, G, M) {
      switch (M.length) {
        case 0:
          return O.call(G);
        case 1:
          return O.call(G, M[0]);
        case 2:
          return O.call(G, M[0], M[1]);
        case 3:
          return O.call(G, M[0], M[1], M[2]);
      }
      return O.apply(G, M);
    }
    function o1(O, G, M, ie) {
      for (var pe = -1, Oe = O == null ? 0 : O.length; ++pe < Oe; ) {
        var Ve = O[pe];
        G(ie, Ve, M(Ve), O);
      }
      return ie;
    }
    function Ht(O, G) {
      for (var M = -1, ie = O == null ? 0 : O.length; ++M < ie && G(O[M], M, O) !== !1; )
        ;
      return O;
    }
    function u1(O, G) {
      for (var M = O == null ? 0 : O.length; M-- && G(O[M], M, O) !== !1; )
        ;
      return O;
    }
    function ql(O, G) {
      for (var M = -1, ie = O == null ? 0 : O.length; ++M < ie; )
        if (!G(O[M], M, O))
          return !1;
      return !0;
    }
    function kr(O, G) {
      for (var M = -1, ie = O == null ? 0 : O.length, pe = 0, Oe = []; ++M < ie; ) {
        var Ve = O[M];
        G(Ve, M, O) && (Oe[pe++] = Ve);
      }
      return Oe;
    }
    function Xi(O, G) {
      var M = O == null ? 0 : O.length;
      return !!M && bn(O, G, 0) > -1;
    }
    function Ds(O, G, M) {
      for (var ie = -1, pe = O == null ? 0 : O.length; ++ie < pe; )
        if (M(G, O[ie]))
          return !0;
      return !1;
    }
    function Me(O, G) {
      for (var M = -1, ie = O == null ? 0 : O.length, pe = Array(ie); ++M < ie; )
        pe[M] = G(O[M], M, O);
      return pe;
    }
    function Ir(O, G) {
      for (var M = -1, ie = G.length, pe = O.length; ++M < ie; )
        O[pe + M] = G[M];
      return O;
    }
    function Ps(O, G, M, ie) {
      var pe = -1, Oe = O == null ? 0 : O.length;
      for (ie && Oe && (M = O[++pe]); ++pe < Oe; )
        M = G(M, O[pe], pe, O);
      return M;
    }
    function f1(O, G, M, ie) {
      var pe = O == null ? 0 : O.length;
      for (ie && pe && (M = O[--pe]); pe--; )
        M = G(M, O[pe], pe, O);
      return M;
    }
    function Bs(O, G) {
      for (var M = -1, ie = O == null ? 0 : O.length; ++M < ie; )
        if (G(O[M], M, O))
          return !0;
      return !1;
    }
    var l1 = ks("length");
    function c1(O) {
      return O.split("");
    }
    function d1(O) {
      return O.match(m_) || [];
    }
    function zl(O, G, M) {
      var ie;
      return M(O, function(pe, Oe, Ve) {
        if (G(pe, Oe, Ve))
          return ie = Oe, !1;
      }), ie;
    }
    function Zi(O, G, M, ie) {
      for (var pe = O.length, Oe = M + (ie ? 1 : -1); ie ? Oe-- : ++Oe < pe; )
        if (G(O[Oe], Oe, O))
          return Oe;
      return -1;
    }
    function bn(O, G, M) {
      return G === G ? S1(O, G, M) : Zi(O, Gl, M);
    }
    function h1(O, G, M, ie) {
      for (var pe = M - 1, Oe = O.length; ++pe < Oe; )
        if (ie(O[pe], G))
          return pe;
      return -1;
    }
    function Gl(O) {
      return O !== O;
    }
    function Kl(O, G) {
      var M = O == null ? 0 : O.length;
      return M ? Us(O, G) / M : Rt;
    }
    function ks(O) {
      return function(G) {
        return G == null ? r : G[O];
      };
    }
    function Is(O) {
      return function(G) {
        return O == null ? r : O[G];
      };
    }
    function Wl(O, G, M, ie, pe) {
      return pe(O, function(Oe, Ve, Be) {
        M = ie ? (ie = !1, Oe) : G(M, Oe, Ve, Be);
      }), M;
    }
    function p1(O, G) {
      var M = O.length;
      for (O.sort(G); M--; )
        O[M] = O[M].value;
      return O;
    }
    function Us(O, G) {
      for (var M, ie = -1, pe = O.length; ++ie < pe; ) {
        var Oe = G(O[ie]);
        Oe !== r && (M = M === r ? Oe : M + Oe);
      }
      return M;
    }
    function Fs(O, G) {
      for (var M = -1, ie = Array(O); ++M < O; )
        ie[M] = G(M);
      return ie;
    }
    function g1(O, G) {
      return Me(G, function(M) {
        return [M, O[M]];
      });
    }
    function Xl(O) {
      return O && O.slice(0, Jl(O) + 1).replace(Ss, "");
    }
    function Ct(O) {
      return function(G) {
        return O(G);
      };
    }
    function Ms(O, G) {
      return Me(G, function(M) {
        return O[M];
      });
    }
    function ui(O, G) {
      return O.has(G);
    }
    function Zl(O, G) {
      for (var M = -1, ie = O.length; ++M < ie && bn(G, O[M], 0) > -1; )
        ;
      return M;
    }
    function jl(O, G) {
      for (var M = O.length; M-- && bn(G, O[M], 0) > -1; )
        ;
      return M;
    }
    function _1(O, G) {
      for (var M = O.length, ie = 0; M--; )
        O[M] === G && ++ie;
      return ie;
    }
    var v1 = Is(e1), w1 = Is(t1);
    function y1(O) {
      return "\\" + n1[O];
    }
    function m1(O, G) {
      return O == null ? r : O[G];
    }
    function Sn(O) {
      return V_.test(O);
    }
    function A1(O) {
      return J_.test(O);
    }
    function E1(O) {
      for (var G, M = []; !(G = O.next()).done; )
        M.push(G.value);
      return M;
    }
    function $s(O) {
      var G = -1, M = Array(O.size);
      return O.forEach(function(ie, pe) {
        M[++G] = [pe, ie];
      }), M;
    }
    function Vl(O, G) {
      return function(M) {
        return O(G(M));
      };
    }
    function Ur(O, G) {
      for (var M = -1, ie = O.length, pe = 0, Oe = []; ++M < ie; ) {
        var Ve = O[M];
        (Ve === G || Ve === p) && (O[M] = p, Oe[pe++] = M);
      }
      return Oe;
    }
    function ji(O) {
      var G = -1, M = Array(O.size);
      return O.forEach(function(ie) {
        M[++G] = ie;
      }), M;
    }
    function b1(O) {
      var G = -1, M = Array(O.size);
      return O.forEach(function(ie) {
        M[++G] = [ie, ie];
      }), M;
    }
    function S1(O, G, M) {
      for (var ie = M - 1, pe = O.length; ++ie < pe; )
        if (O[ie] === G)
          return ie;
      return -1;
    }
    function x1(O, G, M) {
      for (var ie = M + 1; ie--; )
        if (O[ie] === G)
          return ie;
      return ie;
    }
    function xn(O) {
      return Sn(O) ? R1(O) : l1(O);
    }
    function Jt(O) {
      return Sn(O) ? O1(O) : c1(O);
    }
    function Jl(O) {
      for (var G = O.length; G-- && __.test(O.charAt(G)); )
        ;
      return G;
    }
    var T1 = Is(r1);
    function R1(O) {
      for (var G = Cs.lastIndex = 0; Cs.test(O); )
        ++G;
      return G;
    }
    function O1(O) {
      return O.match(Cs) || [];
    }
    function C1(O) {
      return O.match(j_) || [];
    }
    var N1 = function O(G) {
      G = G == null ? nt : Tn.defaults(nt.Object(), G, Tn.pick(nt, Y_));
      var M = G.Array, ie = G.Date, pe = G.Error, Oe = G.Function, Ve = G.Math, Be = G.Object, Hs = G.RegExp, L1 = G.String, qt = G.TypeError, Vi = M.prototype, D1 = Oe.prototype, Rn = Be.prototype, Ji = G["__core-js_shared__"], Yi = D1.toString, De = Rn.hasOwnProperty, P1 = 0, Yl = function() {
        var t = /[^.]+$/.exec(Ji && Ji.keys && Ji.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), Qi = Rn.toString, B1 = Yi.call(Be), k1 = nt._, I1 = Hs(
        "^" + Yi.call(De).replace(bs, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), ea = kl ? G.Buffer : r, Fr = G.Symbol, ta = G.Uint8Array, Ql = ea ? ea.allocUnsafe : r, ra = Vl(Be.getPrototypeOf, Be), ec = Be.create, tc = Rn.propertyIsEnumerable, na = Vi.splice, rc = Fr ? Fr.isConcatSpreadable : r, fi = Fr ? Fr.iterator : r, nn = Fr ? Fr.toStringTag : r, ia = function() {
        try {
          var t = fn(Be, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), U1 = G.clearTimeout !== nt.clearTimeout && G.clearTimeout, F1 = ie && ie.now !== nt.Date.now && ie.now, M1 = G.setTimeout !== nt.setTimeout && G.setTimeout, aa = Ve.ceil, sa = Ve.floor, qs = Be.getOwnPropertySymbols, $1 = ea ? ea.isBuffer : r, nc = G.isFinite, H1 = Vi.join, q1 = Vl(Be.keys, Be), Je = Ve.max, lt = Ve.min, z1 = ie.now, G1 = G.parseInt, ic = Ve.random, K1 = Vi.reverse, zs = fn(G, "DataView"), li = fn(G, "Map"), Gs = fn(G, "Promise"), On = fn(G, "Set"), ci = fn(G, "WeakMap"), di = fn(Be, "create"), oa = ci && new ci(), Cn = {}, W1 = ln(zs), X1 = ln(li), Z1 = ln(Gs), j1 = ln(On), V1 = ln(ci), ua = Fr ? Fr.prototype : r, hi = ua ? ua.valueOf : r, ac = ua ? ua.toString : r;
      function _(t) {
        if (qe(t) && !ge(t) && !(t instanceof Ee)) {
          if (t instanceof zt)
            return t;
          if (De.call(t, "__wrapped__"))
            return sd(t);
        }
        return new zt(t);
      }
      var Nn = function() {
        function t() {
        }
        return function(n) {
          if (!He(n))
            return {};
          if (ec)
            return ec(n);
          t.prototype = n;
          var s = new t();
          return t.prototype = r, s;
        };
      }();
      function fa() {
      }
      function zt(t, n) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = r;
      }
      _.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: l_,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: c_,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: pl,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _
        }
      }, _.prototype = fa.prototype, _.prototype.constructor = _, zt.prototype = Nn(fa.prototype), zt.prototype.constructor = zt;
      function Ee(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = yt, this.__views__ = [];
      }
      function J1() {
        var t = new Ee(this.__wrapped__);
        return t.__actions__ = At(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = At(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = At(this.__views__), t;
      }
      function Y1() {
        if (this.__filtered__) {
          var t = new Ee(this);
          t.__dir__ = -1, t.__filtered__ = !0;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function Q1() {
        var t = this.__wrapped__.value(), n = this.__dir__, s = ge(t), l = n < 0, h = s ? t.length : 0, v = cw(0, h, this.__views__), E = v.start, x = v.end, N = x - E, X = l ? x : E - 1, Z = this.__iteratees__, J = Z.length, re = 0, ue = lt(N, this.__takeCount__);
        if (!s || !l && h == N && ue == N)
          return Cc(t, this.__actions__);
        var de = [];
        e:
          for (; N-- && re < ue; ) {
            X += n;
            for (var we = -1, he = t[X]; ++we < J; ) {
              var Ae = Z[we], Se = Ae.iteratee, Dt = Ae.type, vt = Se(he);
              if (Dt == Fe)
                he = vt;
              else if (!vt) {
                if (Dt == Re)
                  continue e;
                break e;
              }
            }
            de[re++] = he;
          }
        return de;
      }
      Ee.prototype = Nn(fa.prototype), Ee.prototype.constructor = Ee;
      function an(t) {
        var n = -1, s = t == null ? 0 : t.length;
        for (this.clear(); ++n < s; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function ev() {
        this.__data__ = di ? di(null) : {}, this.size = 0;
      }
      function tv(t) {
        var n = this.has(t) && delete this.__data__[t];
        return this.size -= n ? 1 : 0, n;
      }
      function rv(t) {
        var n = this.__data__;
        if (di) {
          var s = n[t];
          return s === g ? r : s;
        }
        return De.call(n, t) ? n[t] : r;
      }
      function nv(t) {
        var n = this.__data__;
        return di ? n[t] !== r : De.call(n, t);
      }
      function iv(t, n) {
        var s = this.__data__;
        return this.size += this.has(t) ? 0 : 1, s[t] = di && n === r ? g : n, this;
      }
      an.prototype.clear = ev, an.prototype.delete = tv, an.prototype.get = rv, an.prototype.has = nv, an.prototype.set = iv;
      function yr(t) {
        var n = -1, s = t == null ? 0 : t.length;
        for (this.clear(); ++n < s; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function av() {
        this.__data__ = [], this.size = 0;
      }
      function sv(t) {
        var n = this.__data__, s = la(n, t);
        if (s < 0)
          return !1;
        var l = n.length - 1;
        return s == l ? n.pop() : na.call(n, s, 1), --this.size, !0;
      }
      function ov(t) {
        var n = this.__data__, s = la(n, t);
        return s < 0 ? r : n[s][1];
      }
      function uv(t) {
        return la(this.__data__, t) > -1;
      }
      function fv(t, n) {
        var s = this.__data__, l = la(s, t);
        return l < 0 ? (++this.size, s.push([t, n])) : s[l][1] = n, this;
      }
      yr.prototype.clear = av, yr.prototype.delete = sv, yr.prototype.get = ov, yr.prototype.has = uv, yr.prototype.set = fv;
      function mr(t) {
        var n = -1, s = t == null ? 0 : t.length;
        for (this.clear(); ++n < s; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function lv() {
        this.size = 0, this.__data__ = {
          hash: new an(),
          map: new (li || yr)(),
          string: new an()
        };
      }
      function cv(t) {
        var n = Ea(this, t).delete(t);
        return this.size -= n ? 1 : 0, n;
      }
      function dv(t) {
        return Ea(this, t).get(t);
      }
      function hv(t) {
        return Ea(this, t).has(t);
      }
      function pv(t, n) {
        var s = Ea(this, t), l = s.size;
        return s.set(t, n), this.size += s.size == l ? 0 : 1, this;
      }
      mr.prototype.clear = lv, mr.prototype.delete = cv, mr.prototype.get = dv, mr.prototype.has = hv, mr.prototype.set = pv;
      function sn(t) {
        var n = -1, s = t == null ? 0 : t.length;
        for (this.__data__ = new mr(); ++n < s; )
          this.add(t[n]);
      }
      function gv(t) {
        return this.__data__.set(t, g), this;
      }
      function _v(t) {
        return this.__data__.has(t);
      }
      sn.prototype.add = sn.prototype.push = gv, sn.prototype.has = _v;
      function Yt(t) {
        var n = this.__data__ = new yr(t);
        this.size = n.size;
      }
      function vv() {
        this.__data__ = new yr(), this.size = 0;
      }
      function wv(t) {
        var n = this.__data__, s = n.delete(t);
        return this.size = n.size, s;
      }
      function yv(t) {
        return this.__data__.get(t);
      }
      function mv(t) {
        return this.__data__.has(t);
      }
      function Av(t, n) {
        var s = this.__data__;
        if (s instanceof yr) {
          var l = s.__data__;
          if (!li || l.length < o - 1)
            return l.push([t, n]), this.size = ++s.size, this;
          s = this.__data__ = new mr(l);
        }
        return s.set(t, n), this.size = s.size, this;
      }
      Yt.prototype.clear = vv, Yt.prototype.delete = wv, Yt.prototype.get = yv, Yt.prototype.has = mv, Yt.prototype.set = Av;
      function sc(t, n) {
        var s = ge(t), l = !s && cn(t), h = !s && !l && zr(t), v = !s && !l && !h && Bn(t), E = s || l || h || v, x = E ? Fs(t.length, L1) : [], N = x.length;
        for (var X in t)
          (n || De.call(t, X)) && !(E && // Safari 9 has enumerable `arguments.length` in strict mode.
          (X == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          h && (X == "offset" || X == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          v && (X == "buffer" || X == "byteLength" || X == "byteOffset") || // Skip index properties.
          Sr(X, N))) && x.push(X);
        return x;
      }
      function oc(t) {
        var n = t.length;
        return n ? t[to(0, n - 1)] : r;
      }
      function Ev(t, n) {
        return ba(At(t), on(n, 0, t.length));
      }
      function bv(t) {
        return ba(At(t));
      }
      function Ks(t, n, s) {
        (s !== r && !Qt(t[n], s) || s === r && !(n in t)) && Ar(t, n, s);
      }
      function pi(t, n, s) {
        var l = t[n];
        (!(De.call(t, n) && Qt(l, s)) || s === r && !(n in t)) && Ar(t, n, s);
      }
      function la(t, n) {
        for (var s = t.length; s--; )
          if (Qt(t[s][0], n))
            return s;
        return -1;
      }
      function Sv(t, n, s, l) {
        return Mr(t, function(h, v, E) {
          n(l, h, s(h), E);
        }), l;
      }
      function uc(t, n) {
        return t && sr(n, et(n), t);
      }
      function xv(t, n) {
        return t && sr(n, bt(n), t);
      }
      function Ar(t, n, s) {
        n == "__proto__" && ia ? ia(t, n, {
          configurable: !0,
          enumerable: !0,
          value: s,
          writable: !0
        }) : t[n] = s;
      }
      function Ws(t, n) {
        for (var s = -1, l = n.length, h = M(l), v = t == null; ++s < l; )
          h[s] = v ? r : Ro(t, n[s]);
        return h;
      }
      function on(t, n, s) {
        return t === t && (s !== r && (t = t <= s ? t : s), n !== r && (t = t >= n ? t : n)), t;
      }
      function Gt(t, n, s, l, h, v) {
        var E, x = n & S, N = n & w, X = n & m;
        if (s && (E = h ? s(t, l, h, v) : s(t)), E !== r)
          return E;
        if (!He(t))
          return t;
        var Z = ge(t);
        if (Z) {
          if (E = hw(t), !x)
            return At(t, E);
        } else {
          var J = ct(t), re = J == b || J == U;
          if (zr(t))
            return Dc(t, x);
          if (J == T || J == ir || re && !h) {
            if (E = N || re ? {} : Jc(t), !x)
              return N ? rw(t, xv(E, t)) : tw(t, uc(E, t));
          } else {
            if (!Ie[J])
              return h ? t : {};
            E = pw(t, J, x);
          }
        }
        v || (v = new Yt());
        var ue = v.get(t);
        if (ue)
          return ue;
        v.set(t, E), Td(t) ? t.forEach(function(he) {
          E.add(Gt(he, n, s, he, t, v));
        }) : Sd(t) && t.forEach(function(he, Ae) {
          E.set(Ae, Gt(he, n, s, Ae, t, v));
        });
        var de = X ? N ? ho : co : N ? bt : et, we = Z ? r : de(t);
        return Ht(we || t, function(he, Ae) {
          we && (Ae = he, he = t[Ae]), pi(E, Ae, Gt(he, n, s, Ae, t, v));
        }), E;
      }
      function Tv(t) {
        var n = et(t);
        return function(s) {
          return fc(s, t, n);
        };
      }
      function fc(t, n, s) {
        var l = s.length;
        if (t == null)
          return !l;
        for (t = Be(t); l--; ) {
          var h = s[l], v = n[h], E = t[h];
          if (E === r && !(h in t) || !v(E))
            return !1;
        }
        return !0;
      }
      function lc(t, n, s) {
        if (typeof t != "function")
          throw new qt(c);
        return Ai(function() {
          t.apply(r, s);
        }, n);
      }
      function gi(t, n, s, l) {
        var h = -1, v = Xi, E = !0, x = t.length, N = [], X = n.length;
        if (!x)
          return N;
        s && (n = Me(n, Ct(s))), l ? (v = Ds, E = !1) : n.length >= o && (v = ui, E = !1, n = new sn(n));
        e:
          for (; ++h < x; ) {
            var Z = t[h], J = s == null ? Z : s(Z);
            if (Z = l || Z !== 0 ? Z : 0, E && J === J) {
              for (var re = X; re--; )
                if (n[re] === J)
                  continue e;
              N.push(Z);
            } else
              v(n, J, l) || N.push(Z);
          }
        return N;
      }
      var Mr = Uc(ar), cc = Uc(Zs, !0);
      function Rv(t, n) {
        var s = !0;
        return Mr(t, function(l, h, v) {
          return s = !!n(l, h, v), s;
        }), s;
      }
      function ca(t, n, s) {
        for (var l = -1, h = t.length; ++l < h; ) {
          var v = t[l], E = n(v);
          if (E != null && (x === r ? E === E && !Lt(E) : s(E, x)))
            var x = E, N = v;
        }
        return N;
      }
      function Ov(t, n, s, l) {
        var h = t.length;
        for (s = _e(s), s < 0 && (s = -s > h ? 0 : h + s), l = l === r || l > h ? h : _e(l), l < 0 && (l += h), l = s > l ? 0 : Od(l); s < l; )
          t[s++] = n;
        return t;
      }
      function dc(t, n) {
        var s = [];
        return Mr(t, function(l, h, v) {
          n(l, h, v) && s.push(l);
        }), s;
      }
      function it(t, n, s, l, h) {
        var v = -1, E = t.length;
        for (s || (s = _w), h || (h = []); ++v < E; ) {
          var x = t[v];
          n > 0 && s(x) ? n > 1 ? it(x, n - 1, s, l, h) : Ir(h, x) : l || (h[h.length] = x);
        }
        return h;
      }
      var Xs = Fc(), hc = Fc(!0);
      function ar(t, n) {
        return t && Xs(t, n, et);
      }
      function Zs(t, n) {
        return t && hc(t, n, et);
      }
      function da(t, n) {
        return kr(n, function(s) {
          return xr(t[s]);
        });
      }
      function un(t, n) {
        n = Hr(n, t);
        for (var s = 0, l = n.length; t != null && s < l; )
          t = t[or(n[s++])];
        return s && s == l ? t : r;
      }
      function pc(t, n, s) {
        var l = n(t);
        return ge(t) ? l : Ir(l, s(t));
      }
      function gt(t) {
        return t == null ? t === r ? Te : $ : nn && nn in Be(t) ? lw(t) : bw(t);
      }
      function js(t, n) {
        return t > n;
      }
      function Cv(t, n) {
        return t != null && De.call(t, n);
      }
      function Nv(t, n) {
        return t != null && n in Be(t);
      }
      function Lv(t, n, s) {
        return t >= lt(n, s) && t < Je(n, s);
      }
      function Vs(t, n, s) {
        for (var l = s ? Ds : Xi, h = t[0].length, v = t.length, E = v, x = M(v), N = 1 / 0, X = []; E--; ) {
          var Z = t[E];
          E && n && (Z = Me(Z, Ct(n))), N = lt(Z.length, N), x[E] = !s && (n || h >= 120 && Z.length >= 120) ? new sn(E && Z) : r;
        }
        Z = t[0];
        var J = -1, re = x[0];
        e:
          for (; ++J < h && X.length < N; ) {
            var ue = Z[J], de = n ? n(ue) : ue;
            if (ue = s || ue !== 0 ? ue : 0, !(re ? ui(re, de) : l(X, de, s))) {
              for (E = v; --E; ) {
                var we = x[E];
                if (!(we ? ui(we, de) : l(t[E], de, s)))
                  continue e;
              }
              re && re.push(de), X.push(ue);
            }
          }
        return X;
      }
      function Dv(t, n, s, l) {
        return ar(t, function(h, v, E) {
          n(l, s(h), v, E);
        }), l;
      }
      function _i(t, n, s) {
        n = Hr(n, t), t = td(t, n);
        var l = t == null ? t : t[or(Wt(n))];
        return l == null ? r : Ot(l, t, s);
      }
      function gc(t) {
        return qe(t) && gt(t) == ir;
      }
      function Pv(t) {
        return qe(t) && gt(t) == ye;
      }
      function Bv(t) {
        return qe(t) && gt(t) == pt;
      }
      function vi(t, n, s, l, h) {
        return t === n ? !0 : t == null || n == null || !qe(t) && !qe(n) ? t !== t && n !== n : kv(t, n, s, l, vi, h);
      }
      function kv(t, n, s, l, h, v) {
        var E = ge(t), x = ge(n), N = E ? Qr : ct(t), X = x ? Qr : ct(n);
        N = N == ir ? T : N, X = X == ir ? T : X;
        var Z = N == T, J = X == T, re = N == X;
        if (re && zr(t)) {
          if (!zr(n))
            return !1;
          E = !0, Z = !1;
        }
        if (re && !Z)
          return v || (v = new Yt()), E || Bn(t) ? Zc(t, n, s, l, h, v) : uw(t, n, N, s, l, h, v);
        if (!(s & I)) {
          var ue = Z && De.call(t, "__wrapped__"), de = J && De.call(n, "__wrapped__");
          if (ue || de) {
            var we = ue ? t.value() : t, he = de ? n.value() : n;
            return v || (v = new Yt()), h(we, he, s, l, v);
          }
        }
        return re ? (v || (v = new Yt()), fw(t, n, s, l, h, v)) : !1;
      }
      function Iv(t) {
        return qe(t) && ct(t) == R;
      }
      function Js(t, n, s, l) {
        var h = s.length, v = h, E = !l;
        if (t == null)
          return !v;
        for (t = Be(t); h--; ) {
          var x = s[h];
          if (E && x[2] ? x[1] !== t[x[0]] : !(x[0] in t))
            return !1;
        }
        for (; ++h < v; ) {
          x = s[h];
          var N = x[0], X = t[N], Z = x[1];
          if (E && x[2]) {
            if (X === r && !(N in t))
              return !1;
          } else {
            var J = new Yt();
            if (l)
              var re = l(X, Z, N, t, n, J);
            if (!(re === r ? vi(Z, X, I | z, l, J) : re))
              return !1;
          }
        }
        return !0;
      }
      function _c(t) {
        if (!He(t) || ww(t))
          return !1;
        var n = xr(t) ? I1 : T_;
        return n.test(ln(t));
      }
      function Uv(t) {
        return qe(t) && gt(t) == k;
      }
      function Fv(t) {
        return qe(t) && ct(t) == W;
      }
      function Mv(t) {
        return qe(t) && Ca(t.length) && !!Ue[gt(t)];
      }
      function vc(t) {
        return typeof t == "function" ? t : t == null ? St : typeof t == "object" ? ge(t) ? mc(t[0], t[1]) : yc(t) : Md(t);
      }
      function Ys(t) {
        if (!mi(t))
          return q1(t);
        var n = [];
        for (var s in Be(t))
          De.call(t, s) && s != "constructor" && n.push(s);
        return n;
      }
      function $v(t) {
        if (!He(t))
          return Ew(t);
        var n = mi(t), s = [];
        for (var l in t)
          l == "constructor" && (n || !De.call(t, l)) || s.push(l);
        return s;
      }
      function Qs(t, n) {
        return t < n;
      }
      function wc(t, n) {
        var s = -1, l = Et(t) ? M(t.length) : [];
        return Mr(t, function(h, v, E) {
          l[++s] = n(h, v, E);
        }), l;
      }
      function yc(t) {
        var n = go(t);
        return n.length == 1 && n[0][2] ? Qc(n[0][0], n[0][1]) : function(s) {
          return s === t || Js(s, t, n);
        };
      }
      function mc(t, n) {
        return vo(t) && Yc(n) ? Qc(or(t), n) : function(s) {
          var l = Ro(s, t);
          return l === r && l === n ? Oo(s, t) : vi(n, l, I | z);
        };
      }
      function ha(t, n, s, l, h) {
        t !== n && Xs(n, function(v, E) {
          if (h || (h = new Yt()), He(v))
            Hv(t, n, E, s, ha, l, h);
          else {
            var x = l ? l(yo(t, E), v, E + "", t, n, h) : r;
            x === r && (x = v), Ks(t, E, x);
          }
        }, bt);
      }
      function Hv(t, n, s, l, h, v, E) {
        var x = yo(t, s), N = yo(n, s), X = E.get(N);
        if (X) {
          Ks(t, s, X);
          return;
        }
        var Z = v ? v(x, N, s + "", t, n, E) : r, J = Z === r;
        if (J) {
          var re = ge(N), ue = !re && zr(N), de = !re && !ue && Bn(N);
          Z = N, re || ue || de ? ge(x) ? Z = x : We(x) ? Z = At(x) : ue ? (J = !1, Z = Dc(N, !0)) : de ? (J = !1, Z = Pc(N, !0)) : Z = [] : Ei(N) || cn(N) ? (Z = x, cn(x) ? Z = Cd(x) : (!He(x) || xr(x)) && (Z = Jc(N))) : J = !1;
        }
        J && (E.set(N, Z), h(Z, N, l, v, E), E.delete(N)), Ks(t, s, Z);
      }
      function Ac(t, n) {
        var s = t.length;
        if (s)
          return n += n < 0 ? s : 0, Sr(n, s) ? t[n] : r;
      }
      function Ec(t, n, s) {
        n.length ? n = Me(n, function(v) {
          return ge(v) ? function(E) {
            return un(E, v.length === 1 ? v[0] : v);
          } : v;
        }) : n = [St];
        var l = -1;
        n = Me(n, Ct(ce()));
        var h = wc(t, function(v, E, x) {
          var N = Me(n, function(X) {
            return X(v);
          });
          return { criteria: N, index: ++l, value: v };
        });
        return p1(h, function(v, E) {
          return ew(v, E, s);
        });
      }
      function qv(t, n) {
        return bc(t, n, function(s, l) {
          return Oo(t, l);
        });
      }
      function bc(t, n, s) {
        for (var l = -1, h = n.length, v = {}; ++l < h; ) {
          var E = n[l], x = un(t, E);
          s(x, E) && wi(v, Hr(E, t), x);
        }
        return v;
      }
      function zv(t) {
        return function(n) {
          return un(n, t);
        };
      }
      function eo(t, n, s, l) {
        var h = l ? h1 : bn, v = -1, E = n.length, x = t;
        for (t === n && (n = At(n)), s && (x = Me(t, Ct(s))); ++v < E; )
          for (var N = 0, X = n[v], Z = s ? s(X) : X; (N = h(x, Z, N, l)) > -1; )
            x !== t && na.call(x, N, 1), na.call(t, N, 1);
        return t;
      }
      function Sc(t, n) {
        for (var s = t ? n.length : 0, l = s - 1; s--; ) {
          var h = n[s];
          if (s == l || h !== v) {
            var v = h;
            Sr(h) ? na.call(t, h, 1) : io(t, h);
          }
        }
        return t;
      }
      function to(t, n) {
        return t + sa(ic() * (n - t + 1));
      }
      function Gv(t, n, s, l) {
        for (var h = -1, v = Je(aa((n - t) / (s || 1)), 0), E = M(v); v--; )
          E[l ? v : ++h] = t, t += s;
        return E;
      }
      function ro(t, n) {
        var s = "";
        if (!t || n < 1 || n > Ye)
          return s;
        do
          n % 2 && (s += t), n = sa(n / 2), n && (t += t);
        while (n);
        return s;
      }
      function me(t, n) {
        return mo(ed(t, n, St), t + "");
      }
      function Kv(t) {
        return oc(kn(t));
      }
      function Wv(t, n) {
        var s = kn(t);
        return ba(s, on(n, 0, s.length));
      }
      function wi(t, n, s, l) {
        if (!He(t))
          return t;
        n = Hr(n, t);
        for (var h = -1, v = n.length, E = v - 1, x = t; x != null && ++h < v; ) {
          var N = or(n[h]), X = s;
          if (N === "__proto__" || N === "constructor" || N === "prototype")
            return t;
          if (h != E) {
            var Z = x[N];
            X = l ? l(Z, N, x) : r, X === r && (X = He(Z) ? Z : Sr(n[h + 1]) ? [] : {});
          }
          pi(x, N, X), x = x[N];
        }
        return t;
      }
      var xc = oa ? function(t, n) {
        return oa.set(t, n), t;
      } : St, Xv = ia ? function(t, n) {
        return ia(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: No(n),
          writable: !0
        });
      } : St;
      function Zv(t) {
        return ba(kn(t));
      }
      function Kt(t, n, s) {
        var l = -1, h = t.length;
        n < 0 && (n = -n > h ? 0 : h + n), s = s > h ? h : s, s < 0 && (s += h), h = n > s ? 0 : s - n >>> 0, n >>>= 0;
        for (var v = M(h); ++l < h; )
          v[l] = t[l + n];
        return v;
      }
      function jv(t, n) {
        var s;
        return Mr(t, function(l, h, v) {
          return s = n(l, h, v), !s;
        }), !!s;
      }
      function pa(t, n, s) {
        var l = 0, h = t == null ? l : t.length;
        if (typeof n == "number" && n === n && h <= si) {
          for (; l < h; ) {
            var v = l + h >>> 1, E = t[v];
            E !== null && !Lt(E) && (s ? E <= n : E < n) ? l = v + 1 : h = v;
          }
          return h;
        }
        return no(t, n, St, s);
      }
      function no(t, n, s, l) {
        var h = 0, v = t == null ? 0 : t.length;
        if (v === 0)
          return 0;
        n = s(n);
        for (var E = n !== n, x = n === null, N = Lt(n), X = n === r; h < v; ) {
          var Z = sa((h + v) / 2), J = s(t[Z]), re = J !== r, ue = J === null, de = J === J, we = Lt(J);
          if (E)
            var he = l || de;
          else
            X ? he = de && (l || re) : x ? he = de && re && (l || !ue) : N ? he = de && re && !ue && (l || !we) : ue || we ? he = !1 : he = l ? J <= n : J < n;
          he ? h = Z + 1 : v = Z;
        }
        return lt(v, vr);
      }
      function Tc(t, n) {
        for (var s = -1, l = t.length, h = 0, v = []; ++s < l; ) {
          var E = t[s], x = n ? n(E) : E;
          if (!s || !Qt(x, N)) {
            var N = x;
            v[h++] = E === 0 ? 0 : E;
          }
        }
        return v;
      }
      function Rc(t) {
        return typeof t == "number" ? t : Lt(t) ? Rt : +t;
      }
      function Nt(t) {
        if (typeof t == "string")
          return t;
        if (ge(t))
          return Me(t, Nt) + "";
        if (Lt(t))
          return ac ? ac.call(t) : "";
        var n = t + "";
        return n == "0" && 1 / t == -Ge ? "-0" : n;
      }
      function $r(t, n, s) {
        var l = -1, h = Xi, v = t.length, E = !0, x = [], N = x;
        if (s)
          E = !1, h = Ds;
        else if (v >= o) {
          var X = n ? null : sw(t);
          if (X)
            return ji(X);
          E = !1, h = ui, N = new sn();
        } else
          N = n ? [] : x;
        e:
          for (; ++l < v; ) {
            var Z = t[l], J = n ? n(Z) : Z;
            if (Z = s || Z !== 0 ? Z : 0, E && J === J) {
              for (var re = N.length; re--; )
                if (N[re] === J)
                  continue e;
              n && N.push(J), x.push(Z);
            } else
              h(N, J, s) || (N !== x && N.push(J), x.push(Z));
          }
        return x;
      }
      function io(t, n) {
        return n = Hr(n, t), t = td(t, n), t == null || delete t[or(Wt(n))];
      }
      function Oc(t, n, s, l) {
        return wi(t, n, s(un(t, n)), l);
      }
      function ga(t, n, s, l) {
        for (var h = t.length, v = l ? h : -1; (l ? v-- : ++v < h) && n(t[v], v, t); )
          ;
        return s ? Kt(t, l ? 0 : v, l ? v + 1 : h) : Kt(t, l ? v + 1 : 0, l ? h : v);
      }
      function Cc(t, n) {
        var s = t;
        return s instanceof Ee && (s = s.value()), Ps(n, function(l, h) {
          return h.func.apply(h.thisArg, Ir([l], h.args));
        }, s);
      }
      function ao(t, n, s) {
        var l = t.length;
        if (l < 2)
          return l ? $r(t[0]) : [];
        for (var h = -1, v = M(l); ++h < l; )
          for (var E = t[h], x = -1; ++x < l; )
            x != h && (v[h] = gi(v[h] || E, t[x], n, s));
        return $r(it(v, 1), n, s);
      }
      function Nc(t, n, s) {
        for (var l = -1, h = t.length, v = n.length, E = {}; ++l < h; ) {
          var x = l < v ? n[l] : r;
          s(E, t[l], x);
        }
        return E;
      }
      function so(t) {
        return We(t) ? t : [];
      }
      function oo(t) {
        return typeof t == "function" ? t : St;
      }
      function Hr(t, n) {
        return ge(t) ? t : vo(t, n) ? [t] : ad(Ne(t));
      }
      var Vv = me;
      function qr(t, n, s) {
        var l = t.length;
        return s = s === r ? l : s, !n && s >= l ? t : Kt(t, n, s);
      }
      var Lc = U1 || function(t) {
        return nt.clearTimeout(t);
      };
      function Dc(t, n) {
        if (n)
          return t.slice();
        var s = t.length, l = Ql ? Ql(s) : new t.constructor(s);
        return t.copy(l), l;
      }
      function uo(t) {
        var n = new t.constructor(t.byteLength);
        return new ta(n).set(new ta(t)), n;
      }
      function Jv(t, n) {
        var s = n ? uo(t.buffer) : t.buffer;
        return new t.constructor(s, t.byteOffset, t.byteLength);
      }
      function Yv(t) {
        var n = new t.constructor(t.source, gl.exec(t));
        return n.lastIndex = t.lastIndex, n;
      }
      function Qv(t) {
        return hi ? Be(hi.call(t)) : {};
      }
      function Pc(t, n) {
        var s = n ? uo(t.buffer) : t.buffer;
        return new t.constructor(s, t.byteOffset, t.length);
      }
      function Bc(t, n) {
        if (t !== n) {
          var s = t !== r, l = t === null, h = t === t, v = Lt(t), E = n !== r, x = n === null, N = n === n, X = Lt(n);
          if (!x && !X && !v && t > n || v && E && N && !x && !X || l && E && N || !s && N || !h)
            return 1;
          if (!l && !v && !X && t < n || X && s && h && !l && !v || x && s && h || !E && h || !N)
            return -1;
        }
        return 0;
      }
      function ew(t, n, s) {
        for (var l = -1, h = t.criteria, v = n.criteria, E = h.length, x = s.length; ++l < E; ) {
          var N = Bc(h[l], v[l]);
          if (N) {
            if (l >= x)
              return N;
            var X = s[l];
            return N * (X == "desc" ? -1 : 1);
          }
        }
        return t.index - n.index;
      }
      function kc(t, n, s, l) {
        for (var h = -1, v = t.length, E = s.length, x = -1, N = n.length, X = Je(v - E, 0), Z = M(N + X), J = !l; ++x < N; )
          Z[x] = n[x];
        for (; ++h < E; )
          (J || h < v) && (Z[s[h]] = t[h]);
        for (; X--; )
          Z[x++] = t[h++];
        return Z;
      }
      function Ic(t, n, s, l) {
        for (var h = -1, v = t.length, E = -1, x = s.length, N = -1, X = n.length, Z = Je(v - x, 0), J = M(Z + X), re = !l; ++h < Z; )
          J[h] = t[h];
        for (var ue = h; ++N < X; )
          J[ue + N] = n[N];
        for (; ++E < x; )
          (re || h < v) && (J[ue + s[E]] = t[h++]);
        return J;
      }
      function At(t, n) {
        var s = -1, l = t.length;
        for (n || (n = M(l)); ++s < l; )
          n[s] = t[s];
        return n;
      }
      function sr(t, n, s, l) {
        var h = !s;
        s || (s = {});
        for (var v = -1, E = n.length; ++v < E; ) {
          var x = n[v], N = l ? l(s[x], t[x], x, s, t) : r;
          N === r && (N = t[x]), h ? Ar(s, x, N) : pi(s, x, N);
        }
        return s;
      }
      function tw(t, n) {
        return sr(t, _o(t), n);
      }
      function rw(t, n) {
        return sr(t, jc(t), n);
      }
      function _a(t, n) {
        return function(s, l) {
          var h = ge(s) ? o1 : Sv, v = n ? n() : {};
          return h(s, t, ce(l, 2), v);
        };
      }
      function Ln(t) {
        return me(function(n, s) {
          var l = -1, h = s.length, v = h > 1 ? s[h - 1] : r, E = h > 2 ? s[2] : r;
          for (v = t.length > 3 && typeof v == "function" ? (h--, v) : r, E && _t(s[0], s[1], E) && (v = h < 3 ? r : v, h = 1), n = Be(n); ++l < h; ) {
            var x = s[l];
            x && t(n, x, l, v);
          }
          return n;
        });
      }
      function Uc(t, n) {
        return function(s, l) {
          if (s == null)
            return s;
          if (!Et(s))
            return t(s, l);
          for (var h = s.length, v = n ? h : -1, E = Be(s); (n ? v-- : ++v < h) && l(E[v], v, E) !== !1; )
            ;
          return s;
        };
      }
      function Fc(t) {
        return function(n, s, l) {
          for (var h = -1, v = Be(n), E = l(n), x = E.length; x--; ) {
            var N = E[t ? x : ++h];
            if (s(v[N], N, v) === !1)
              break;
          }
          return n;
        };
      }
      function nw(t, n, s) {
        var l = n & C, h = yi(t);
        function v() {
          var E = this && this !== nt && this instanceof v ? h : t;
          return E.apply(l ? s : this, arguments);
        }
        return v;
      }
      function Mc(t) {
        return function(n) {
          n = Ne(n);
          var s = Sn(n) ? Jt(n) : r, l = s ? s[0] : n.charAt(0), h = s ? qr(s, 1).join("") : n.slice(1);
          return l[t]() + h;
        };
      }
      function Dn(t) {
        return function(n) {
          return Ps(Ud(Id(n).replace(X_, "")), t, "");
        };
      }
      function yi(t) {
        return function() {
          var n = arguments;
          switch (n.length) {
            case 0:
              return new t();
            case 1:
              return new t(n[0]);
            case 2:
              return new t(n[0], n[1]);
            case 3:
              return new t(n[0], n[1], n[2]);
            case 4:
              return new t(n[0], n[1], n[2], n[3]);
            case 5:
              return new t(n[0], n[1], n[2], n[3], n[4]);
            case 6:
              return new t(n[0], n[1], n[2], n[3], n[4], n[5]);
            case 7:
              return new t(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
          }
          var s = Nn(t.prototype), l = t.apply(s, n);
          return He(l) ? l : s;
        };
      }
      function iw(t, n, s) {
        var l = yi(t);
        function h() {
          for (var v = arguments.length, E = M(v), x = v, N = Pn(h); x--; )
            E[x] = arguments[x];
          var X = v < 3 && E[0] !== N && E[v - 1] !== N ? [] : Ur(E, N);
          if (v -= X.length, v < s)
            return Gc(
              t,
              n,
              va,
              h.placeholder,
              r,
              E,
              X,
              r,
              r,
              s - v
            );
          var Z = this && this !== nt && this instanceof h ? l : t;
          return Ot(Z, this, E);
        }
        return h;
      }
      function $c(t) {
        return function(n, s, l) {
          var h = Be(n);
          if (!Et(n)) {
            var v = ce(s, 3);
            n = et(n), s = function(x) {
              return v(h[x], x, h);
            };
          }
          var E = t(n, s, l);
          return E > -1 ? h[v ? n[E] : E] : r;
        };
      }
      function Hc(t) {
        return br(function(n) {
          var s = n.length, l = s, h = zt.prototype.thru;
          for (t && n.reverse(); l--; ) {
            var v = n[l];
            if (typeof v != "function")
              throw new qt(c);
            if (h && !E && Aa(v) == "wrapper")
              var E = new zt([], !0);
          }
          for (l = E ? l : s; ++l < s; ) {
            v = n[l];
            var x = Aa(v), N = x == "wrapper" ? po(v) : r;
            N && wo(N[0]) && N[1] == (L | V | P | K) && !N[4].length && N[9] == 1 ? E = E[Aa(N[0])].apply(E, N[3]) : E = v.length == 1 && wo(v) ? E[x]() : E.thru(v);
          }
          return function() {
            var X = arguments, Z = X[0];
            if (E && X.length == 1 && ge(Z))
              return E.plant(Z).value();
            for (var J = 0, re = s ? n[J].apply(this, X) : Z; ++J < s; )
              re = n[J].call(this, re);
            return re;
          };
        });
      }
      function va(t, n, s, l, h, v, E, x, N, X) {
        var Z = n & L, J = n & C, re = n & Y, ue = n & (V | j), de = n & ee, we = re ? r : yi(t);
        function he() {
          for (var Ae = arguments.length, Se = M(Ae), Dt = Ae; Dt--; )
            Se[Dt] = arguments[Dt];
          if (ue)
            var vt = Pn(he), Pt = _1(Se, vt);
          if (l && (Se = kc(Se, l, h, ue)), v && (Se = Ic(Se, v, E, ue)), Ae -= Pt, ue && Ae < X) {
            var Xe = Ur(Se, vt);
            return Gc(
              t,
              n,
              va,
              he.placeholder,
              s,
              Se,
              Xe,
              x,
              N,
              X - Ae
            );
          }
          var er = J ? s : this, Rr = re ? er[t] : t;
          return Ae = Se.length, x ? Se = Sw(Se, x) : de && Ae > 1 && Se.reverse(), Z && N < Ae && (Se.length = N), this && this !== nt && this instanceof he && (Rr = we || yi(Rr)), Rr.apply(er, Se);
        }
        return he;
      }
      function qc(t, n) {
        return function(s, l) {
          return Dv(s, t, n(l), {});
        };
      }
      function wa(t, n) {
        return function(s, l) {
          var h;
          if (s === r && l === r)
            return n;
          if (s !== r && (h = s), l !== r) {
            if (h === r)
              return l;
            typeof s == "string" || typeof l == "string" ? (s = Nt(s), l = Nt(l)) : (s = Rc(s), l = Rc(l)), h = t(s, l);
          }
          return h;
        };
      }
      function fo(t) {
        return br(function(n) {
          return n = Me(n, Ct(ce())), me(function(s) {
            var l = this;
            return t(n, function(h) {
              return Ot(h, l, s);
            });
          });
        });
      }
      function ya(t, n) {
        n = n === r ? " " : Nt(n);
        var s = n.length;
        if (s < 2)
          return s ? ro(n, t) : n;
        var l = ro(n, aa(t / xn(n)));
        return Sn(n) ? qr(Jt(l), 0, t).join("") : l.slice(0, t);
      }
      function aw(t, n, s, l) {
        var h = n & C, v = yi(t);
        function E() {
          for (var x = -1, N = arguments.length, X = -1, Z = l.length, J = M(Z + N), re = this && this !== nt && this instanceof E ? v : t; ++X < Z; )
            J[X] = l[X];
          for (; N--; )
            J[X++] = arguments[++x];
          return Ot(re, h ? s : this, J);
        }
        return E;
      }
      function zc(t) {
        return function(n, s, l) {
          return l && typeof l != "number" && _t(n, s, l) && (s = l = r), n = Tr(n), s === r ? (s = n, n = 0) : s = Tr(s), l = l === r ? n < s ? 1 : -1 : Tr(l), Gv(n, s, l, t);
        };
      }
      function ma(t) {
        return function(n, s) {
          return typeof n == "string" && typeof s == "string" || (n = Xt(n), s = Xt(s)), t(n, s);
        };
      }
      function Gc(t, n, s, l, h, v, E, x, N, X) {
        var Z = n & V, J = Z ? E : r, re = Z ? r : E, ue = Z ? v : r, de = Z ? r : v;
        n |= Z ? P : H, n &= ~(Z ? H : P), n & te || (n &= ~(C | Y));
        var we = [
          t,
          n,
          h,
          ue,
          J,
          de,
          re,
          x,
          N,
          X
        ], he = s.apply(r, we);
        return wo(t) && rd(he, we), he.placeholder = l, nd(he, t, n);
      }
      function lo(t) {
        var n = Ve[t];
        return function(s, l) {
          if (s = Xt(s), l = l == null ? 0 : lt(_e(l), 292), l && nc(s)) {
            var h = (Ne(s) + "e").split("e"), v = n(h[0] + "e" + (+h[1] + l));
            return h = (Ne(v) + "e").split("e"), +(h[0] + "e" + (+h[1] - l));
          }
          return n(s);
        };
      }
      var sw = On && 1 / ji(new On([, -0]))[1] == Ge ? function(t) {
        return new On(t);
      } : Po;
      function Kc(t) {
        return function(n) {
          var s = ct(n);
          return s == R ? $s(n) : s == W ? b1(n) : g1(n, t(n));
        };
      }
      function Er(t, n, s, l, h, v, E, x) {
        var N = n & Y;
        if (!N && typeof t != "function")
          throw new qt(c);
        var X = l ? l.length : 0;
        if (X || (n &= ~(P | H), l = h = r), E = E === r ? E : Je(_e(E), 0), x = x === r ? x : _e(x), X -= h ? h.length : 0, n & H) {
          var Z = l, J = h;
          l = h = r;
        }
        var re = N ? r : po(t), ue = [
          t,
          n,
          s,
          l,
          h,
          Z,
          J,
          v,
          E,
          x
        ];
        if (re && Aw(ue, re), t = ue[0], n = ue[1], s = ue[2], l = ue[3], h = ue[4], x = ue[9] = ue[9] === r ? N ? 0 : t.length : Je(ue[9] - X, 0), !x && n & (V | j) && (n &= ~(V | j)), !n || n == C)
          var de = nw(t, n, s);
        else
          n == V || n == j ? de = iw(t, n, x) : (n == P || n == (C | P)) && !h.length ? de = aw(t, n, s, l) : de = va.apply(r, ue);
        var we = re ? xc : rd;
        return nd(we(de, ue), t, n);
      }
      function Wc(t, n, s, l) {
        return t === r || Qt(t, Rn[s]) && !De.call(l, s) ? n : t;
      }
      function Xc(t, n, s, l, h, v) {
        return He(t) && He(n) && (v.set(n, t), ha(t, n, r, Xc, v), v.delete(n)), t;
      }
      function ow(t) {
        return Ei(t) ? r : t;
      }
      function Zc(t, n, s, l, h, v) {
        var E = s & I, x = t.length, N = n.length;
        if (x != N && !(E && N > x))
          return !1;
        var X = v.get(t), Z = v.get(n);
        if (X && Z)
          return X == n && Z == t;
        var J = -1, re = !0, ue = s & z ? new sn() : r;
        for (v.set(t, n), v.set(n, t); ++J < x; ) {
          var de = t[J], we = n[J];
          if (l)
            var he = E ? l(we, de, J, n, t, v) : l(de, we, J, t, n, v);
          if (he !== r) {
            if (he)
              continue;
            re = !1;
            break;
          }
          if (ue) {
            if (!Bs(n, function(Ae, Se) {
              if (!ui(ue, Se) && (de === Ae || h(de, Ae, s, l, v)))
                return ue.push(Se);
            })) {
              re = !1;
              break;
            }
          } else if (!(de === we || h(de, we, s, l, v))) {
            re = !1;
            break;
          }
        }
        return v.delete(t), v.delete(n), re;
      }
      function uw(t, n, s, l, h, v, E) {
        switch (s) {
          case be:
            if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
              return !1;
            t = t.buffer, n = n.buffer;
          case ye:
            return !(t.byteLength != n.byteLength || !v(new ta(t), new ta(n)));
          case Qe:
          case pt:
          case B:
            return Qt(+t, +n);
          case A:
            return t.name == n.name && t.message == n.message;
          case k:
          case oe:
            return t == n + "";
          case R:
            var x = $s;
          case W:
            var N = l & I;
            if (x || (x = ji), t.size != n.size && !N)
              return !1;
            var X = E.get(t);
            if (X)
              return X == n;
            l |= z, E.set(t, n);
            var Z = Zc(x(t), x(n), l, h, v, E);
            return E.delete(t), Z;
          case fe:
            if (hi)
              return hi.call(t) == hi.call(n);
        }
        return !1;
      }
      function fw(t, n, s, l, h, v) {
        var E = s & I, x = co(t), N = x.length, X = co(n), Z = X.length;
        if (N != Z && !E)
          return !1;
        for (var J = N; J--; ) {
          var re = x[J];
          if (!(E ? re in n : De.call(n, re)))
            return !1;
        }
        var ue = v.get(t), de = v.get(n);
        if (ue && de)
          return ue == n && de == t;
        var we = !0;
        v.set(t, n), v.set(n, t);
        for (var he = E; ++J < N; ) {
          re = x[J];
          var Ae = t[re], Se = n[re];
          if (l)
            var Dt = E ? l(Se, Ae, re, n, t, v) : l(Ae, Se, re, t, n, v);
          if (!(Dt === r ? Ae === Se || h(Ae, Se, s, l, v) : Dt)) {
            we = !1;
            break;
          }
          he || (he = re == "constructor");
        }
        if (we && !he) {
          var vt = t.constructor, Pt = n.constructor;
          vt != Pt && "constructor" in t && "constructor" in n && !(typeof vt == "function" && vt instanceof vt && typeof Pt == "function" && Pt instanceof Pt) && (we = !1);
        }
        return v.delete(t), v.delete(n), we;
      }
      function br(t) {
        return mo(ed(t, r, fd), t + "");
      }
      function co(t) {
        return pc(t, et, _o);
      }
      function ho(t) {
        return pc(t, bt, jc);
      }
      var po = oa ? function(t) {
        return oa.get(t);
      } : Po;
      function Aa(t) {
        for (var n = t.name + "", s = Cn[n], l = De.call(Cn, n) ? s.length : 0; l--; ) {
          var h = s[l], v = h.func;
          if (v == null || v == t)
            return h.name;
        }
        return n;
      }
      function Pn(t) {
        var n = De.call(_, "placeholder") ? _ : t;
        return n.placeholder;
      }
      function ce() {
        var t = _.iteratee || Lo;
        return t = t === Lo ? vc : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function Ea(t, n) {
        var s = t.__data__;
        return vw(n) ? s[typeof n == "string" ? "string" : "hash"] : s.map;
      }
      function go(t) {
        for (var n = et(t), s = n.length; s--; ) {
          var l = n[s], h = t[l];
          n[s] = [l, h, Yc(h)];
        }
        return n;
      }
      function fn(t, n) {
        var s = m1(t, n);
        return _c(s) ? s : r;
      }
      function lw(t) {
        var n = De.call(t, nn), s = t[nn];
        try {
          t[nn] = r;
          var l = !0;
        } catch {
        }
        var h = Qi.call(t);
        return l && (n ? t[nn] = s : delete t[nn]), h;
      }
      var _o = qs ? function(t) {
        return t == null ? [] : (t = Be(t), kr(qs(t), function(n) {
          return tc.call(t, n);
        }));
      } : Bo, jc = qs ? function(t) {
        for (var n = []; t; )
          Ir(n, _o(t)), t = ra(t);
        return n;
      } : Bo, ct = gt;
      (zs && ct(new zs(new ArrayBuffer(1))) != be || li && ct(new li()) != R || Gs && ct(Gs.resolve()) != D || On && ct(new On()) != W || ci && ct(new ci()) != Pe) && (ct = function(t) {
        var n = gt(t), s = n == T ? t.constructor : r, l = s ? ln(s) : "";
        if (l)
          switch (l) {
            case W1:
              return be;
            case X1:
              return R;
            case Z1:
              return D;
            case j1:
              return W;
            case V1:
              return Pe;
          }
        return n;
      });
      function cw(t, n, s) {
        for (var l = -1, h = s.length; ++l < h; ) {
          var v = s[l], E = v.size;
          switch (v.type) {
            case "drop":
              t += E;
              break;
            case "dropRight":
              n -= E;
              break;
            case "take":
              n = lt(n, t + E);
              break;
            case "takeRight":
              t = Je(t, n - E);
              break;
          }
        }
        return { start: t, end: n };
      }
      function dw(t) {
        var n = t.match(w_);
        return n ? n[1].split(y_) : [];
      }
      function Vc(t, n, s) {
        n = Hr(n, t);
        for (var l = -1, h = n.length, v = !1; ++l < h; ) {
          var E = or(n[l]);
          if (!(v = t != null && s(t, E)))
            break;
          t = t[E];
        }
        return v || ++l != h ? v : (h = t == null ? 0 : t.length, !!h && Ca(h) && Sr(E, h) && (ge(t) || cn(t)));
      }
      function hw(t) {
        var n = t.length, s = new t.constructor(n);
        return n && typeof t[0] == "string" && De.call(t, "index") && (s.index = t.index, s.input = t.input), s;
      }
      function Jc(t) {
        return typeof t.constructor == "function" && !mi(t) ? Nn(ra(t)) : {};
      }
      function pw(t, n, s) {
        var l = t.constructor;
        switch (n) {
          case ye:
            return uo(t);
          case Qe:
          case pt:
            return new l(+t);
          case be:
            return Jv(t, s);
          case Ze:
          case Br:
          case en:
          case tn:
          case mt:
          case wr:
          case ft:
          case je:
          case ke:
            return Pc(t, s);
          case R:
            return new l();
          case B:
          case oe:
            return new l(t);
          case k:
            return Yv(t);
          case W:
            return new l();
          case fe:
            return Qv(t);
        }
      }
      function gw(t, n) {
        var s = n.length;
        if (!s)
          return t;
        var l = s - 1;
        return n[l] = (s > 1 ? "& " : "") + n[l], n = n.join(s > 2 ? ", " : " "), t.replace(v_, `{
/* [wrapped with ` + n + `] */
`);
      }
      function _w(t) {
        return ge(t) || cn(t) || !!(rc && t && t[rc]);
      }
      function Sr(t, n) {
        var s = typeof t;
        return n = n ?? Ye, !!n && (s == "number" || s != "symbol" && O_.test(t)) && t > -1 && t % 1 == 0 && t < n;
      }
      function _t(t, n, s) {
        if (!He(s))
          return !1;
        var l = typeof n;
        return (l == "number" ? Et(s) && Sr(n, s.length) : l == "string" && n in s) ? Qt(s[n], t) : !1;
      }
      function vo(t, n) {
        if (ge(t))
          return !1;
        var s = typeof t;
        return s == "number" || s == "symbol" || s == "boolean" || t == null || Lt(t) ? !0 : h_.test(t) || !d_.test(t) || n != null && t in Be(n);
      }
      function vw(t) {
        var n = typeof t;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
      }
      function wo(t) {
        var n = Aa(t), s = _[n];
        if (typeof s != "function" || !(n in Ee.prototype))
          return !1;
        if (t === s)
          return !0;
        var l = po(s);
        return !!l && t === l[0];
      }
      function ww(t) {
        return !!Yl && Yl in t;
      }
      var yw = Ji ? xr : ko;
      function mi(t) {
        var n = t && t.constructor, s = typeof n == "function" && n.prototype || Rn;
        return t === s;
      }
      function Yc(t) {
        return t === t && !He(t);
      }
      function Qc(t, n) {
        return function(s) {
          return s == null ? !1 : s[t] === n && (n !== r || t in Be(s));
        };
      }
      function mw(t) {
        var n = Ra(t, function(l) {
          return s.size === f && s.clear(), l;
        }), s = n.cache;
        return n;
      }
      function Aw(t, n) {
        var s = t[1], l = n[1], h = s | l, v = h < (C | Y | L), E = l == L && s == V || l == L && s == K && t[7].length <= n[8] || l == (L | K) && n[7].length <= n[8] && s == V;
        if (!(v || E))
          return t;
        l & C && (t[2] = n[2], h |= s & C ? 0 : te);
        var x = n[3];
        if (x) {
          var N = t[3];
          t[3] = N ? kc(N, x, n[4]) : x, t[4] = N ? Ur(t[3], p) : n[4];
        }
        return x = n[5], x && (N = t[5], t[5] = N ? Ic(N, x, n[6]) : x, t[6] = N ? Ur(t[5], p) : n[6]), x = n[7], x && (t[7] = x), l & L && (t[8] = t[8] == null ? n[8] : lt(t[8], n[8])), t[9] == null && (t[9] = n[9]), t[0] = n[0], t[1] = h, t;
      }
      function Ew(t) {
        var n = [];
        if (t != null)
          for (var s in Be(t))
            n.push(s);
        return n;
      }
      function bw(t) {
        return Qi.call(t);
      }
      function ed(t, n, s) {
        return n = Je(n === r ? t.length - 1 : n, 0), function() {
          for (var l = arguments, h = -1, v = Je(l.length - n, 0), E = M(v); ++h < v; )
            E[h] = l[n + h];
          h = -1;
          for (var x = M(n + 1); ++h < n; )
            x[h] = l[h];
          return x[n] = s(E), Ot(t, this, x);
        };
      }
      function td(t, n) {
        return n.length < 2 ? t : un(t, Kt(n, 0, -1));
      }
      function Sw(t, n) {
        for (var s = t.length, l = lt(n.length, s), h = At(t); l--; ) {
          var v = n[l];
          t[l] = Sr(v, s) ? h[v] : r;
        }
        return t;
      }
      function yo(t, n) {
        if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
          return t[n];
      }
      var rd = id(xc), Ai = M1 || function(t, n) {
        return nt.setTimeout(t, n);
      }, mo = id(Xv);
      function nd(t, n, s) {
        var l = n + "";
        return mo(t, gw(l, xw(dw(l), s)));
      }
      function id(t) {
        var n = 0, s = 0;
        return function() {
          var l = z1(), h = ve - (l - s);
          if (s = l, h > 0) {
            if (++n >= le)
              return arguments[0];
          } else
            n = 0;
          return t.apply(r, arguments);
        };
      }
      function ba(t, n) {
        var s = -1, l = t.length, h = l - 1;
        for (n = n === r ? l : n; ++s < n; ) {
          var v = to(s, h), E = t[v];
          t[v] = t[s], t[s] = E;
        }
        return t.length = n, t;
      }
      var ad = mw(function(t) {
        var n = [];
        return t.charCodeAt(0) === 46 && n.push(""), t.replace(p_, function(s, l, h, v) {
          n.push(h ? v.replace(E_, "$1") : l || s);
        }), n;
      });
      function or(t) {
        if (typeof t == "string" || Lt(t))
          return t;
        var n = t + "";
        return n == "0" && 1 / t == -Ge ? "-0" : n;
      }
      function ln(t) {
        if (t != null) {
          try {
            return Yi.call(t);
          } catch {
          }
          try {
            return t + "";
          } catch {
          }
        }
        return "";
      }
      function xw(t, n) {
        return Ht(Q, function(s) {
          var l = "_." + s[0];
          n & s[1] && !Xi(t, l) && t.push(l);
        }), t.sort();
      }
      function sd(t) {
        if (t instanceof Ee)
          return t.clone();
        var n = new zt(t.__wrapped__, t.__chain__);
        return n.__actions__ = At(t.__actions__), n.__index__ = t.__index__, n.__values__ = t.__values__, n;
      }
      function Tw(t, n, s) {
        (s ? _t(t, n, s) : n === r) ? n = 1 : n = Je(_e(n), 0);
        var l = t == null ? 0 : t.length;
        if (!l || n < 1)
          return [];
        for (var h = 0, v = 0, E = M(aa(l / n)); h < l; )
          E[v++] = Kt(t, h, h += n);
        return E;
      }
      function Rw(t) {
        for (var n = -1, s = t == null ? 0 : t.length, l = 0, h = []; ++n < s; ) {
          var v = t[n];
          v && (h[l++] = v);
        }
        return h;
      }
      function Ow() {
        var t = arguments.length;
        if (!t)
          return [];
        for (var n = M(t - 1), s = arguments[0], l = t; l--; )
          n[l - 1] = arguments[l];
        return Ir(ge(s) ? At(s) : [s], it(n, 1));
      }
      var Cw = me(function(t, n) {
        return We(t) ? gi(t, it(n, 1, We, !0)) : [];
      }), Nw = me(function(t, n) {
        var s = Wt(n);
        return We(s) && (s = r), We(t) ? gi(t, it(n, 1, We, !0), ce(s, 2)) : [];
      }), Lw = me(function(t, n) {
        var s = Wt(n);
        return We(s) && (s = r), We(t) ? gi(t, it(n, 1, We, !0), r, s) : [];
      });
      function Dw(t, n, s) {
        var l = t == null ? 0 : t.length;
        return l ? (n = s || n === r ? 1 : _e(n), Kt(t, n < 0 ? 0 : n, l)) : [];
      }
      function Pw(t, n, s) {
        var l = t == null ? 0 : t.length;
        return l ? (n = s || n === r ? 1 : _e(n), n = l - n, Kt(t, 0, n < 0 ? 0 : n)) : [];
      }
      function Bw(t, n) {
        return t && t.length ? ga(t, ce(n, 3), !0, !0) : [];
      }
      function kw(t, n) {
        return t && t.length ? ga(t, ce(n, 3), !0) : [];
      }
      function Iw(t, n, s, l) {
        var h = t == null ? 0 : t.length;
        return h ? (s && typeof s != "number" && _t(t, n, s) && (s = 0, l = h), Ov(t, n, s, l)) : [];
      }
      function od(t, n, s) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var h = s == null ? 0 : _e(s);
        return h < 0 && (h = Je(l + h, 0)), Zi(t, ce(n, 3), h);
      }
      function ud(t, n, s) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var h = l - 1;
        return s !== r && (h = _e(s), h = s < 0 ? Je(l + h, 0) : lt(h, l - 1)), Zi(t, ce(n, 3), h, !0);
      }
      function fd(t) {
        var n = t == null ? 0 : t.length;
        return n ? it(t, 1) : [];
      }
      function Uw(t) {
        var n = t == null ? 0 : t.length;
        return n ? it(t, Ge) : [];
      }
      function Fw(t, n) {
        var s = t == null ? 0 : t.length;
        return s ? (n = n === r ? 1 : _e(n), it(t, n)) : [];
      }
      function Mw(t) {
        for (var n = -1, s = t == null ? 0 : t.length, l = {}; ++n < s; ) {
          var h = t[n];
          l[h[0]] = h[1];
        }
        return l;
      }
      function ld(t) {
        return t && t.length ? t[0] : r;
      }
      function $w(t, n, s) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var h = s == null ? 0 : _e(s);
        return h < 0 && (h = Je(l + h, 0)), bn(t, n, h);
      }
      function Hw(t) {
        var n = t == null ? 0 : t.length;
        return n ? Kt(t, 0, -1) : [];
      }
      var qw = me(function(t) {
        var n = Me(t, so);
        return n.length && n[0] === t[0] ? Vs(n) : [];
      }), zw = me(function(t) {
        var n = Wt(t), s = Me(t, so);
        return n === Wt(s) ? n = r : s.pop(), s.length && s[0] === t[0] ? Vs(s, ce(n, 2)) : [];
      }), Gw = me(function(t) {
        var n = Wt(t), s = Me(t, so);
        return n = typeof n == "function" ? n : r, n && s.pop(), s.length && s[0] === t[0] ? Vs(s, r, n) : [];
      });
      function Kw(t, n) {
        return t == null ? "" : H1.call(t, n);
      }
      function Wt(t) {
        var n = t == null ? 0 : t.length;
        return n ? t[n - 1] : r;
      }
      function Ww(t, n, s) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var h = l;
        return s !== r && (h = _e(s), h = h < 0 ? Je(l + h, 0) : lt(h, l - 1)), n === n ? x1(t, n, h) : Zi(t, Gl, h, !0);
      }
      function Xw(t, n) {
        return t && t.length ? Ac(t, _e(n)) : r;
      }
      var Zw = me(cd);
      function cd(t, n) {
        return t && t.length && n && n.length ? eo(t, n) : t;
      }
      function jw(t, n, s) {
        return t && t.length && n && n.length ? eo(t, n, ce(s, 2)) : t;
      }
      function Vw(t, n, s) {
        return t && t.length && n && n.length ? eo(t, n, r, s) : t;
      }
      var Jw = br(function(t, n) {
        var s = t == null ? 0 : t.length, l = Ws(t, n);
        return Sc(t, Me(n, function(h) {
          return Sr(h, s) ? +h : h;
        }).sort(Bc)), l;
      });
      function Yw(t, n) {
        var s = [];
        if (!(t && t.length))
          return s;
        var l = -1, h = [], v = t.length;
        for (n = ce(n, 3); ++l < v; ) {
          var E = t[l];
          n(E, l, t) && (s.push(E), h.push(l));
        }
        return Sc(t, h), s;
      }
      function Ao(t) {
        return t == null ? t : K1.call(t);
      }
      function Qw(t, n, s) {
        var l = t == null ? 0 : t.length;
        return l ? (s && typeof s != "number" && _t(t, n, s) ? (n = 0, s = l) : (n = n == null ? 0 : _e(n), s = s === r ? l : _e(s)), Kt(t, n, s)) : [];
      }
      function ey(t, n) {
        return pa(t, n);
      }
      function ty(t, n, s) {
        return no(t, n, ce(s, 2));
      }
      function ry(t, n) {
        var s = t == null ? 0 : t.length;
        if (s) {
          var l = pa(t, n);
          if (l < s && Qt(t[l], n))
            return l;
        }
        return -1;
      }
      function ny(t, n) {
        return pa(t, n, !0);
      }
      function iy(t, n, s) {
        return no(t, n, ce(s, 2), !0);
      }
      function ay(t, n) {
        var s = t == null ? 0 : t.length;
        if (s) {
          var l = pa(t, n, !0) - 1;
          if (Qt(t[l], n))
            return l;
        }
        return -1;
      }
      function sy(t) {
        return t && t.length ? Tc(t) : [];
      }
      function oy(t, n) {
        return t && t.length ? Tc(t, ce(n, 2)) : [];
      }
      function uy(t) {
        var n = t == null ? 0 : t.length;
        return n ? Kt(t, 1, n) : [];
      }
      function fy(t, n, s) {
        return t && t.length ? (n = s || n === r ? 1 : _e(n), Kt(t, 0, n < 0 ? 0 : n)) : [];
      }
      function ly(t, n, s) {
        var l = t == null ? 0 : t.length;
        return l ? (n = s || n === r ? 1 : _e(n), n = l - n, Kt(t, n < 0 ? 0 : n, l)) : [];
      }
      function cy(t, n) {
        return t && t.length ? ga(t, ce(n, 3), !1, !0) : [];
      }
      function dy(t, n) {
        return t && t.length ? ga(t, ce(n, 3)) : [];
      }
      var hy = me(function(t) {
        return $r(it(t, 1, We, !0));
      }), py = me(function(t) {
        var n = Wt(t);
        return We(n) && (n = r), $r(it(t, 1, We, !0), ce(n, 2));
      }), gy = me(function(t) {
        var n = Wt(t);
        return n = typeof n == "function" ? n : r, $r(it(t, 1, We, !0), r, n);
      });
      function _y(t) {
        return t && t.length ? $r(t) : [];
      }
      function vy(t, n) {
        return t && t.length ? $r(t, ce(n, 2)) : [];
      }
      function wy(t, n) {
        return n = typeof n == "function" ? n : r, t && t.length ? $r(t, r, n) : [];
      }
      function Eo(t) {
        if (!(t && t.length))
          return [];
        var n = 0;
        return t = kr(t, function(s) {
          if (We(s))
            return n = Je(s.length, n), !0;
        }), Fs(n, function(s) {
          return Me(t, ks(s));
        });
      }
      function dd(t, n) {
        if (!(t && t.length))
          return [];
        var s = Eo(t);
        return n == null ? s : Me(s, function(l) {
          return Ot(n, r, l);
        });
      }
      var yy = me(function(t, n) {
        return We(t) ? gi(t, n) : [];
      }), my = me(function(t) {
        return ao(kr(t, We));
      }), Ay = me(function(t) {
        var n = Wt(t);
        return We(n) && (n = r), ao(kr(t, We), ce(n, 2));
      }), Ey = me(function(t) {
        var n = Wt(t);
        return n = typeof n == "function" ? n : r, ao(kr(t, We), r, n);
      }), by = me(Eo);
      function Sy(t, n) {
        return Nc(t || [], n || [], pi);
      }
      function xy(t, n) {
        return Nc(t || [], n || [], wi);
      }
      var Ty = me(function(t) {
        var n = t.length, s = n > 1 ? t[n - 1] : r;
        return s = typeof s == "function" ? (t.pop(), s) : r, dd(t, s);
      });
      function hd(t) {
        var n = _(t);
        return n.__chain__ = !0, n;
      }
      function Ry(t, n) {
        return n(t), t;
      }
      function Sa(t, n) {
        return n(t);
      }
      var Oy = br(function(t) {
        var n = t.length, s = n ? t[0] : 0, l = this.__wrapped__, h = function(v) {
          return Ws(v, t);
        };
        return n > 1 || this.__actions__.length || !(l instanceof Ee) || !Sr(s) ? this.thru(h) : (l = l.slice(s, +s + (n ? 1 : 0)), l.__actions__.push({
          func: Sa,
          args: [h],
          thisArg: r
        }), new zt(l, this.__chain__).thru(function(v) {
          return n && !v.length && v.push(r), v;
        }));
      });
      function Cy() {
        return hd(this);
      }
      function Ny() {
        return new zt(this.value(), this.__chain__);
      }
      function Ly() {
        this.__values__ === r && (this.__values__ = Rd(this.value()));
        var t = this.__index__ >= this.__values__.length, n = t ? r : this.__values__[this.__index__++];
        return { done: t, value: n };
      }
      function Dy() {
        return this;
      }
      function Py(t) {
        for (var n, s = this; s instanceof fa; ) {
          var l = sd(s);
          l.__index__ = 0, l.__values__ = r, n ? h.__wrapped__ = l : n = l;
          var h = l;
          s = s.__wrapped__;
        }
        return h.__wrapped__ = t, n;
      }
      function By() {
        var t = this.__wrapped__;
        if (t instanceof Ee) {
          var n = t;
          return this.__actions__.length && (n = new Ee(this)), n = n.reverse(), n.__actions__.push({
            func: Sa,
            args: [Ao],
            thisArg: r
          }), new zt(n, this.__chain__);
        }
        return this.thru(Ao);
      }
      function ky() {
        return Cc(this.__wrapped__, this.__actions__);
      }
      var Iy = _a(function(t, n, s) {
        De.call(t, s) ? ++t[s] : Ar(t, s, 1);
      });
      function Uy(t, n, s) {
        var l = ge(t) ? ql : Rv;
        return s && _t(t, n, s) && (n = r), l(t, ce(n, 3));
      }
      function Fy(t, n) {
        var s = ge(t) ? kr : dc;
        return s(t, ce(n, 3));
      }
      var My = $c(od), $y = $c(ud);
      function Hy(t, n) {
        return it(xa(t, n), 1);
      }
      function qy(t, n) {
        return it(xa(t, n), Ge);
      }
      function zy(t, n, s) {
        return s = s === r ? 1 : _e(s), it(xa(t, n), s);
      }
      function pd(t, n) {
        var s = ge(t) ? Ht : Mr;
        return s(t, ce(n, 3));
      }
      function gd(t, n) {
        var s = ge(t) ? u1 : cc;
        return s(t, ce(n, 3));
      }
      var Gy = _a(function(t, n, s) {
        De.call(t, s) ? t[s].push(n) : Ar(t, s, [n]);
      });
      function Ky(t, n, s, l) {
        t = Et(t) ? t : kn(t), s = s && !l ? _e(s) : 0;
        var h = t.length;
        return s < 0 && (s = Je(h + s, 0)), Na(t) ? s <= h && t.indexOf(n, s) > -1 : !!h && bn(t, n, s) > -1;
      }
      var Wy = me(function(t, n, s) {
        var l = -1, h = typeof n == "function", v = Et(t) ? M(t.length) : [];
        return Mr(t, function(E) {
          v[++l] = h ? Ot(n, E, s) : _i(E, n, s);
        }), v;
      }), Xy = _a(function(t, n, s) {
        Ar(t, s, n);
      });
      function xa(t, n) {
        var s = ge(t) ? Me : wc;
        return s(t, ce(n, 3));
      }
      function Zy(t, n, s, l) {
        return t == null ? [] : (ge(n) || (n = n == null ? [] : [n]), s = l ? r : s, ge(s) || (s = s == null ? [] : [s]), Ec(t, n, s));
      }
      var jy = _a(function(t, n, s) {
        t[s ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function Vy(t, n, s) {
        var l = ge(t) ? Ps : Wl, h = arguments.length < 3;
        return l(t, ce(n, 4), s, h, Mr);
      }
      function Jy(t, n, s) {
        var l = ge(t) ? f1 : Wl, h = arguments.length < 3;
        return l(t, ce(n, 4), s, h, cc);
      }
      function Yy(t, n) {
        var s = ge(t) ? kr : dc;
        return s(t, Oa(ce(n, 3)));
      }
      function Qy(t) {
        var n = ge(t) ? oc : Kv;
        return n(t);
      }
      function em(t, n, s) {
        (s ? _t(t, n, s) : n === r) ? n = 1 : n = _e(n);
        var l = ge(t) ? Ev : Wv;
        return l(t, n);
      }
      function tm(t) {
        var n = ge(t) ? bv : Zv;
        return n(t);
      }
      function rm(t) {
        if (t == null)
          return 0;
        if (Et(t))
          return Na(t) ? xn(t) : t.length;
        var n = ct(t);
        return n == R || n == W ? t.size : Ys(t).length;
      }
      function nm(t, n, s) {
        var l = ge(t) ? Bs : jv;
        return s && _t(t, n, s) && (n = r), l(t, ce(n, 3));
      }
      var im = me(function(t, n) {
        if (t == null)
          return [];
        var s = n.length;
        return s > 1 && _t(t, n[0], n[1]) ? n = [] : s > 2 && _t(n[0], n[1], n[2]) && (n = [n[0]]), Ec(t, it(n, 1), []);
      }), Ta = F1 || function() {
        return nt.Date.now();
      };
      function am(t, n) {
        if (typeof n != "function")
          throw new qt(c);
        return t = _e(t), function() {
          if (--t < 1)
            return n.apply(this, arguments);
        };
      }
      function _d(t, n, s) {
        return n = s ? r : n, n = t && n == null ? t.length : n, Er(t, L, r, r, r, r, n);
      }
      function vd(t, n) {
        var s;
        if (typeof n != "function")
          throw new qt(c);
        return t = _e(t), function() {
          return --t > 0 && (s = n.apply(this, arguments)), t <= 1 && (n = r), s;
        };
      }
      var bo = me(function(t, n, s) {
        var l = C;
        if (s.length) {
          var h = Ur(s, Pn(bo));
          l |= P;
        }
        return Er(t, l, n, s, h);
      }), wd = me(function(t, n, s) {
        var l = C | Y;
        if (s.length) {
          var h = Ur(s, Pn(wd));
          l |= P;
        }
        return Er(n, l, t, s, h);
      });
      function yd(t, n, s) {
        n = s ? r : n;
        var l = Er(t, V, r, r, r, r, r, n);
        return l.placeholder = yd.placeholder, l;
      }
      function md(t, n, s) {
        n = s ? r : n;
        var l = Er(t, j, r, r, r, r, r, n);
        return l.placeholder = md.placeholder, l;
      }
      function Ad(t, n, s) {
        var l, h, v, E, x, N, X = 0, Z = !1, J = !1, re = !0;
        if (typeof t != "function")
          throw new qt(c);
        n = Xt(n) || 0, He(s) && (Z = !!s.leading, J = "maxWait" in s, v = J ? Je(Xt(s.maxWait) || 0, n) : v, re = "trailing" in s ? !!s.trailing : re);
        function ue(Xe) {
          var er = l, Rr = h;
          return l = h = r, X = Xe, E = t.apply(Rr, er), E;
        }
        function de(Xe) {
          return X = Xe, x = Ai(Ae, n), Z ? ue(Xe) : E;
        }
        function we(Xe) {
          var er = Xe - N, Rr = Xe - X, $d = n - er;
          return J ? lt($d, v - Rr) : $d;
        }
        function he(Xe) {
          var er = Xe - N, Rr = Xe - X;
          return N === r || er >= n || er < 0 || J && Rr >= v;
        }
        function Ae() {
          var Xe = Ta();
          if (he(Xe))
            return Se(Xe);
          x = Ai(Ae, we(Xe));
        }
        function Se(Xe) {
          return x = r, re && l ? ue(Xe) : (l = h = r, E);
        }
        function Dt() {
          x !== r && Lc(x), X = 0, l = N = h = x = r;
        }
        function vt() {
          return x === r ? E : Se(Ta());
        }
        function Pt() {
          var Xe = Ta(), er = he(Xe);
          if (l = arguments, h = this, N = Xe, er) {
            if (x === r)
              return de(N);
            if (J)
              return Lc(x), x = Ai(Ae, n), ue(N);
          }
          return x === r && (x = Ai(Ae, n)), E;
        }
        return Pt.cancel = Dt, Pt.flush = vt, Pt;
      }
      var sm = me(function(t, n) {
        return lc(t, 1, n);
      }), om = me(function(t, n, s) {
        return lc(t, Xt(n) || 0, s);
      });
      function um(t) {
        return Er(t, ee);
      }
      function Ra(t, n) {
        if (typeof t != "function" || n != null && typeof n != "function")
          throw new qt(c);
        var s = function() {
          var l = arguments, h = n ? n.apply(this, l) : l[0], v = s.cache;
          if (v.has(h))
            return v.get(h);
          var E = t.apply(this, l);
          return s.cache = v.set(h, E) || v, E;
        };
        return s.cache = new (Ra.Cache || mr)(), s;
      }
      Ra.Cache = mr;
      function Oa(t) {
        if (typeof t != "function")
          throw new qt(c);
        return function() {
          var n = arguments;
          switch (n.length) {
            case 0:
              return !t.call(this);
            case 1:
              return !t.call(this, n[0]);
            case 2:
              return !t.call(this, n[0], n[1]);
            case 3:
              return !t.call(this, n[0], n[1], n[2]);
          }
          return !t.apply(this, n);
        };
      }
      function fm(t) {
        return vd(2, t);
      }
      var lm = Vv(function(t, n) {
        n = n.length == 1 && ge(n[0]) ? Me(n[0], Ct(ce())) : Me(it(n, 1), Ct(ce()));
        var s = n.length;
        return me(function(l) {
          for (var h = -1, v = lt(l.length, s); ++h < v; )
            l[h] = n[h].call(this, l[h]);
          return Ot(t, this, l);
        });
      }), So = me(function(t, n) {
        var s = Ur(n, Pn(So));
        return Er(t, P, r, n, s);
      }), Ed = me(function(t, n) {
        var s = Ur(n, Pn(Ed));
        return Er(t, H, r, n, s);
      }), cm = br(function(t, n) {
        return Er(t, K, r, r, r, n);
      });
      function dm(t, n) {
        if (typeof t != "function")
          throw new qt(c);
        return n = n === r ? n : _e(n), me(t, n);
      }
      function hm(t, n) {
        if (typeof t != "function")
          throw new qt(c);
        return n = n == null ? 0 : Je(_e(n), 0), me(function(s) {
          var l = s[n], h = qr(s, 0, n);
          return l && Ir(h, l), Ot(t, this, h);
        });
      }
      function pm(t, n, s) {
        var l = !0, h = !0;
        if (typeof t != "function")
          throw new qt(c);
        return He(s) && (l = "leading" in s ? !!s.leading : l, h = "trailing" in s ? !!s.trailing : h), Ad(t, n, {
          leading: l,
          maxWait: n,
          trailing: h
        });
      }
      function gm(t) {
        return _d(t, 1);
      }
      function _m(t, n) {
        return So(oo(n), t);
      }
      function vm() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return ge(t) ? t : [t];
      }
      function wm(t) {
        return Gt(t, m);
      }
      function ym(t, n) {
        return n = typeof n == "function" ? n : r, Gt(t, m, n);
      }
      function mm(t) {
        return Gt(t, S | m);
      }
      function Am(t, n) {
        return n = typeof n == "function" ? n : r, Gt(t, S | m, n);
      }
      function Em(t, n) {
        return n == null || fc(t, n, et(n));
      }
      function Qt(t, n) {
        return t === n || t !== t && n !== n;
      }
      var bm = ma(js), Sm = ma(function(t, n) {
        return t >= n;
      }), cn = gc(function() {
        return arguments;
      }()) ? gc : function(t) {
        return qe(t) && De.call(t, "callee") && !tc.call(t, "callee");
      }, ge = M.isArray, xm = Il ? Ct(Il) : Pv;
      function Et(t) {
        return t != null && Ca(t.length) && !xr(t);
      }
      function We(t) {
        return qe(t) && Et(t);
      }
      function Tm(t) {
        return t === !0 || t === !1 || qe(t) && gt(t) == Qe;
      }
      var zr = $1 || ko, Rm = Ul ? Ct(Ul) : Bv;
      function Om(t) {
        return qe(t) && t.nodeType === 1 && !Ei(t);
      }
      function Cm(t) {
        if (t == null)
          return !0;
        if (Et(t) && (ge(t) || typeof t == "string" || typeof t.splice == "function" || zr(t) || Bn(t) || cn(t)))
          return !t.length;
        var n = ct(t);
        if (n == R || n == W)
          return !t.size;
        if (mi(t))
          return !Ys(t).length;
        for (var s in t)
          if (De.call(t, s))
            return !1;
        return !0;
      }
      function Nm(t, n) {
        return vi(t, n);
      }
      function Lm(t, n, s) {
        s = typeof s == "function" ? s : r;
        var l = s ? s(t, n) : r;
        return l === r ? vi(t, n, r, s) : !!l;
      }
      function xo(t) {
        if (!qe(t))
          return !1;
        var n = gt(t);
        return n == A || n == y || typeof t.message == "string" && typeof t.name == "string" && !Ei(t);
      }
      function Dm(t) {
        return typeof t == "number" && nc(t);
      }
      function xr(t) {
        if (!He(t))
          return !1;
        var n = gt(t);
        return n == b || n == U || n == oi || n == F;
      }
      function bd(t) {
        return typeof t == "number" && t == _e(t);
      }
      function Ca(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Ye;
      }
      function He(t) {
        var n = typeof t;
        return t != null && (n == "object" || n == "function");
      }
      function qe(t) {
        return t != null && typeof t == "object";
      }
      var Sd = Fl ? Ct(Fl) : Iv;
      function Pm(t, n) {
        return t === n || Js(t, n, go(n));
      }
      function Bm(t, n, s) {
        return s = typeof s == "function" ? s : r, Js(t, n, go(n), s);
      }
      function km(t) {
        return xd(t) && t != +t;
      }
      function Im(t) {
        if (yw(t))
          throw new pe(u);
        return _c(t);
      }
      function Um(t) {
        return t === null;
      }
      function Fm(t) {
        return t == null;
      }
      function xd(t) {
        return typeof t == "number" || qe(t) && gt(t) == B;
      }
      function Ei(t) {
        if (!qe(t) || gt(t) != T)
          return !1;
        var n = ra(t);
        if (n === null)
          return !0;
        var s = De.call(n, "constructor") && n.constructor;
        return typeof s == "function" && s instanceof s && Yi.call(s) == B1;
      }
      var To = Ml ? Ct(Ml) : Uv;
      function Mm(t) {
        return bd(t) && t >= -Ye && t <= Ye;
      }
      var Td = $l ? Ct($l) : Fv;
      function Na(t) {
        return typeof t == "string" || !ge(t) && qe(t) && gt(t) == oe;
      }
      function Lt(t) {
        return typeof t == "symbol" || qe(t) && gt(t) == fe;
      }
      var Bn = Hl ? Ct(Hl) : Mv;
      function $m(t) {
        return t === r;
      }
      function Hm(t) {
        return qe(t) && ct(t) == Pe;
      }
      function qm(t) {
        return qe(t) && gt(t) == Ke;
      }
      var zm = ma(Qs), Gm = ma(function(t, n) {
        return t <= n;
      });
      function Rd(t) {
        if (!t)
          return [];
        if (Et(t))
          return Na(t) ? Jt(t) : At(t);
        if (fi && t[fi])
          return E1(t[fi]());
        var n = ct(t), s = n == R ? $s : n == W ? ji : kn;
        return s(t);
      }
      function Tr(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = Xt(t), t === Ge || t === -Ge) {
          var n = t < 0 ? -1 : 1;
          return n * Pr;
        }
        return t === t ? t : 0;
      }
      function _e(t) {
        var n = Tr(t), s = n % 1;
        return n === n ? s ? n - s : n : 0;
      }
      function Od(t) {
        return t ? on(_e(t), 0, yt) : 0;
      }
      function Xt(t) {
        if (typeof t == "number")
          return t;
        if (Lt(t))
          return Rt;
        if (He(t)) {
          var n = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = He(n) ? n + "" : n;
        }
        if (typeof t != "string")
          return t === 0 ? t : +t;
        t = Xl(t);
        var s = x_.test(t);
        return s || R_.test(t) ? a1(t.slice(2), s ? 2 : 8) : S_.test(t) ? Rt : +t;
      }
      function Cd(t) {
        return sr(t, bt(t));
      }
      function Km(t) {
        return t ? on(_e(t), -Ye, Ye) : t === 0 ? t : 0;
      }
      function Ne(t) {
        return t == null ? "" : Nt(t);
      }
      var Wm = Ln(function(t, n) {
        if (mi(n) || Et(n)) {
          sr(n, et(n), t);
          return;
        }
        for (var s in n)
          De.call(n, s) && pi(t, s, n[s]);
      }), Nd = Ln(function(t, n) {
        sr(n, bt(n), t);
      }), La = Ln(function(t, n, s, l) {
        sr(n, bt(n), t, l);
      }), Xm = Ln(function(t, n, s, l) {
        sr(n, et(n), t, l);
      }), Zm = br(Ws);
      function jm(t, n) {
        var s = Nn(t);
        return n == null ? s : uc(s, n);
      }
      var Vm = me(function(t, n) {
        t = Be(t);
        var s = -1, l = n.length, h = l > 2 ? n[2] : r;
        for (h && _t(n[0], n[1], h) && (l = 1); ++s < l; )
          for (var v = n[s], E = bt(v), x = -1, N = E.length; ++x < N; ) {
            var X = E[x], Z = t[X];
            (Z === r || Qt(Z, Rn[X]) && !De.call(t, X)) && (t[X] = v[X]);
          }
        return t;
      }), Jm = me(function(t) {
        return t.push(r, Xc), Ot(Ld, r, t);
      });
      function Ym(t, n) {
        return zl(t, ce(n, 3), ar);
      }
      function Qm(t, n) {
        return zl(t, ce(n, 3), Zs);
      }
      function eA(t, n) {
        return t == null ? t : Xs(t, ce(n, 3), bt);
      }
      function tA(t, n) {
        return t == null ? t : hc(t, ce(n, 3), bt);
      }
      function rA(t, n) {
        return t && ar(t, ce(n, 3));
      }
      function nA(t, n) {
        return t && Zs(t, ce(n, 3));
      }
      function iA(t) {
        return t == null ? [] : da(t, et(t));
      }
      function aA(t) {
        return t == null ? [] : da(t, bt(t));
      }
      function Ro(t, n, s) {
        var l = t == null ? r : un(t, n);
        return l === r ? s : l;
      }
      function sA(t, n) {
        return t != null && Vc(t, n, Cv);
      }
      function Oo(t, n) {
        return t != null && Vc(t, n, Nv);
      }
      var oA = qc(function(t, n, s) {
        n != null && typeof n.toString != "function" && (n = Qi.call(n)), t[n] = s;
      }, No(St)), uA = qc(function(t, n, s) {
        n != null && typeof n.toString != "function" && (n = Qi.call(n)), De.call(t, n) ? t[n].push(s) : t[n] = [s];
      }, ce), fA = me(_i);
      function et(t) {
        return Et(t) ? sc(t) : Ys(t);
      }
      function bt(t) {
        return Et(t) ? sc(t, !0) : $v(t);
      }
      function lA(t, n) {
        var s = {};
        return n = ce(n, 3), ar(t, function(l, h, v) {
          Ar(s, n(l, h, v), l);
        }), s;
      }
      function cA(t, n) {
        var s = {};
        return n = ce(n, 3), ar(t, function(l, h, v) {
          Ar(s, h, n(l, h, v));
        }), s;
      }
      var dA = Ln(function(t, n, s) {
        ha(t, n, s);
      }), Ld = Ln(function(t, n, s, l) {
        ha(t, n, s, l);
      }), hA = br(function(t, n) {
        var s = {};
        if (t == null)
          return s;
        var l = !1;
        n = Me(n, function(v) {
          return v = Hr(v, t), l || (l = v.length > 1), v;
        }), sr(t, ho(t), s), l && (s = Gt(s, S | w | m, ow));
        for (var h = n.length; h--; )
          io(s, n[h]);
        return s;
      });
      function pA(t, n) {
        return Dd(t, Oa(ce(n)));
      }
      var gA = br(function(t, n) {
        return t == null ? {} : qv(t, n);
      });
      function Dd(t, n) {
        if (t == null)
          return {};
        var s = Me(ho(t), function(l) {
          return [l];
        });
        return n = ce(n), bc(t, s, function(l, h) {
          return n(l, h[0]);
        });
      }
      function _A(t, n, s) {
        n = Hr(n, t);
        var l = -1, h = n.length;
        for (h || (h = 1, t = r); ++l < h; ) {
          var v = t == null ? r : t[or(n[l])];
          v === r && (l = h, v = s), t = xr(v) ? v.call(t) : v;
        }
        return t;
      }
      function vA(t, n, s) {
        return t == null ? t : wi(t, n, s);
      }
      function wA(t, n, s, l) {
        return l = typeof l == "function" ? l : r, t == null ? t : wi(t, n, s, l);
      }
      var Pd = Kc(et), Bd = Kc(bt);
      function yA(t, n, s) {
        var l = ge(t), h = l || zr(t) || Bn(t);
        if (n = ce(n, 4), s == null) {
          var v = t && t.constructor;
          h ? s = l ? new v() : [] : He(t) ? s = xr(v) ? Nn(ra(t)) : {} : s = {};
        }
        return (h ? Ht : ar)(t, function(E, x, N) {
          return n(s, E, x, N);
        }), s;
      }
      function mA(t, n) {
        return t == null ? !0 : io(t, n);
      }
      function AA(t, n, s) {
        return t == null ? t : Oc(t, n, oo(s));
      }
      function EA(t, n, s, l) {
        return l = typeof l == "function" ? l : r, t == null ? t : Oc(t, n, oo(s), l);
      }
      function kn(t) {
        return t == null ? [] : Ms(t, et(t));
      }
      function bA(t) {
        return t == null ? [] : Ms(t, bt(t));
      }
      function SA(t, n, s) {
        return s === r && (s = n, n = r), s !== r && (s = Xt(s), s = s === s ? s : 0), n !== r && (n = Xt(n), n = n === n ? n : 0), on(Xt(t), n, s);
      }
      function xA(t, n, s) {
        return n = Tr(n), s === r ? (s = n, n = 0) : s = Tr(s), t = Xt(t), Lv(t, n, s);
      }
      function TA(t, n, s) {
        if (s && typeof s != "boolean" && _t(t, n, s) && (n = s = r), s === r && (typeof n == "boolean" ? (s = n, n = r) : typeof t == "boolean" && (s = t, t = r)), t === r && n === r ? (t = 0, n = 1) : (t = Tr(t), n === r ? (n = t, t = 0) : n = Tr(n)), t > n) {
          var l = t;
          t = n, n = l;
        }
        if (s || t % 1 || n % 1) {
          var h = ic();
          return lt(t + h * (n - t + i1("1e-" + ((h + "").length - 1))), n);
        }
        return to(t, n);
      }
      var RA = Dn(function(t, n, s) {
        return n = n.toLowerCase(), t + (s ? kd(n) : n);
      });
      function kd(t) {
        return Co(Ne(t).toLowerCase());
      }
      function Id(t) {
        return t = Ne(t), t && t.replace(C_, v1).replace(Z_, "");
      }
      function OA(t, n, s) {
        t = Ne(t), n = Nt(n);
        var l = t.length;
        s = s === r ? l : on(_e(s), 0, l);
        var h = s;
        return s -= n.length, s >= 0 && t.slice(s, h) == n;
      }
      function CA(t) {
        return t = Ne(t), t && f_.test(t) ? t.replace(hl, w1) : t;
      }
      function NA(t) {
        return t = Ne(t), t && g_.test(t) ? t.replace(bs, "\\$&") : t;
      }
      var LA = Dn(function(t, n, s) {
        return t + (s ? "-" : "") + n.toLowerCase();
      }), DA = Dn(function(t, n, s) {
        return t + (s ? " " : "") + n.toLowerCase();
      }), PA = Mc("toLowerCase");
      function BA(t, n, s) {
        t = Ne(t), n = _e(n);
        var l = n ? xn(t) : 0;
        if (!n || l >= n)
          return t;
        var h = (n - l) / 2;
        return ya(sa(h), s) + t + ya(aa(h), s);
      }
      function kA(t, n, s) {
        t = Ne(t), n = _e(n);
        var l = n ? xn(t) : 0;
        return n && l < n ? t + ya(n - l, s) : t;
      }
      function IA(t, n, s) {
        t = Ne(t), n = _e(n);
        var l = n ? xn(t) : 0;
        return n && l < n ? ya(n - l, s) + t : t;
      }
      function UA(t, n, s) {
        return s || n == null ? n = 0 : n && (n = +n), G1(Ne(t).replace(Ss, ""), n || 0);
      }
      function FA(t, n, s) {
        return (s ? _t(t, n, s) : n === r) ? n = 1 : n = _e(n), ro(Ne(t), n);
      }
      function MA() {
        var t = arguments, n = Ne(t[0]);
        return t.length < 3 ? n : n.replace(t[1], t[2]);
      }
      var $A = Dn(function(t, n, s) {
        return t + (s ? "_" : "") + n.toLowerCase();
      });
      function HA(t, n, s) {
        return s && typeof s != "number" && _t(t, n, s) && (n = s = r), s = s === r ? yt : s >>> 0, s ? (t = Ne(t), t && (typeof n == "string" || n != null && !To(n)) && (n = Nt(n), !n && Sn(t)) ? qr(Jt(t), 0, s) : t.split(n, s)) : [];
      }
      var qA = Dn(function(t, n, s) {
        return t + (s ? " " : "") + Co(n);
      });
      function zA(t, n, s) {
        return t = Ne(t), s = s == null ? 0 : on(_e(s), 0, t.length), n = Nt(n), t.slice(s, s + n.length) == n;
      }
      function GA(t, n, s) {
        var l = _.templateSettings;
        s && _t(t, n, s) && (n = r), t = Ne(t), n = La({}, n, l, Wc);
        var h = La({}, n.imports, l.imports, Wc), v = et(h), E = Ms(h, v), x, N, X = 0, Z = n.interpolate || Gi, J = "__p += '", re = Hs(
          (n.escape || Gi).source + "|" + Z.source + "|" + (Z === pl ? b_ : Gi).source + "|" + (n.evaluate || Gi).source + "|$",
          "g"
        ), ue = "//# sourceURL=" + (De.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Q_ + "]") + `
`;
        t.replace(re, function(he, Ae, Se, Dt, vt, Pt) {
          return Se || (Se = Dt), J += t.slice(X, Pt).replace(N_, y1), Ae && (x = !0, J += `' +
__e(` + Ae + `) +
'`), vt && (N = !0, J += `';
` + vt + `;
__p += '`), Se && (J += `' +
((__t = (` + Se + `)) == null ? '' : __t) +
'`), X = Pt + he.length, he;
        }), J += `';
`;
        var de = De.call(n, "variable") && n.variable;
        if (!de)
          J = `with (obj) {
` + J + `
}
`;
        else if (A_.test(de))
          throw new pe(d);
        J = (N ? J.replace(a_, "") : J).replace(s_, "$1").replace(o_, "$1;"), J = "function(" + (de || "obj") + `) {
` + (de ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (x ? ", __e = _.escape" : "") + (N ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + J + `return __p
}`;
        var we = Fd(function() {
          return Oe(v, ue + "return " + J).apply(r, E);
        });
        if (we.source = J, xo(we))
          throw we;
        return we;
      }
      function KA(t) {
        return Ne(t).toLowerCase();
      }
      function WA(t) {
        return Ne(t).toUpperCase();
      }
      function XA(t, n, s) {
        if (t = Ne(t), t && (s || n === r))
          return Xl(t);
        if (!t || !(n = Nt(n)))
          return t;
        var l = Jt(t), h = Jt(n), v = Zl(l, h), E = jl(l, h) + 1;
        return qr(l, v, E).join("");
      }
      function ZA(t, n, s) {
        if (t = Ne(t), t && (s || n === r))
          return t.slice(0, Jl(t) + 1);
        if (!t || !(n = Nt(n)))
          return t;
        var l = Jt(t), h = jl(l, Jt(n)) + 1;
        return qr(l, 0, h).join("");
      }
      function jA(t, n, s) {
        if (t = Ne(t), t && (s || n === r))
          return t.replace(Ss, "");
        if (!t || !(n = Nt(n)))
          return t;
        var l = Jt(t), h = Zl(l, Jt(n));
        return qr(l, h).join("");
      }
      function VA(t, n) {
        var s = q, l = ne;
        if (He(n)) {
          var h = "separator" in n ? n.separator : h;
          s = "length" in n ? _e(n.length) : s, l = "omission" in n ? Nt(n.omission) : l;
        }
        t = Ne(t);
        var v = t.length;
        if (Sn(t)) {
          var E = Jt(t);
          v = E.length;
        }
        if (s >= v)
          return t;
        var x = s - xn(l);
        if (x < 1)
          return l;
        var N = E ? qr(E, 0, x).join("") : t.slice(0, x);
        if (h === r)
          return N + l;
        if (E && (x += N.length - x), To(h)) {
          if (t.slice(x).search(h)) {
            var X, Z = N;
            for (h.global || (h = Hs(h.source, Ne(gl.exec(h)) + "g")), h.lastIndex = 0; X = h.exec(Z); )
              var J = X.index;
            N = N.slice(0, J === r ? x : J);
          }
        } else if (t.indexOf(Nt(h), x) != x) {
          var re = N.lastIndexOf(h);
          re > -1 && (N = N.slice(0, re));
        }
        return N + l;
      }
      function JA(t) {
        return t = Ne(t), t && u_.test(t) ? t.replace(dl, T1) : t;
      }
      var YA = Dn(function(t, n, s) {
        return t + (s ? " " : "") + n.toUpperCase();
      }), Co = Mc("toUpperCase");
      function Ud(t, n, s) {
        return t = Ne(t), n = s ? r : n, n === r ? A1(t) ? C1(t) : d1(t) : t.match(n) || [];
      }
      var Fd = me(function(t, n) {
        try {
          return Ot(t, r, n);
        } catch (s) {
          return xo(s) ? s : new pe(s);
        }
      }), QA = br(function(t, n) {
        return Ht(n, function(s) {
          s = or(s), Ar(t, s, bo(t[s], t));
        }), t;
      });
      function eE(t) {
        var n = t == null ? 0 : t.length, s = ce();
        return t = n ? Me(t, function(l) {
          if (typeof l[1] != "function")
            throw new qt(c);
          return [s(l[0]), l[1]];
        }) : [], me(function(l) {
          for (var h = -1; ++h < n; ) {
            var v = t[h];
            if (Ot(v[0], this, l))
              return Ot(v[1], this, l);
          }
        });
      }
      function tE(t) {
        return Tv(Gt(t, S));
      }
      function No(t) {
        return function() {
          return t;
        };
      }
      function rE(t, n) {
        return t == null || t !== t ? n : t;
      }
      var nE = Hc(), iE = Hc(!0);
      function St(t) {
        return t;
      }
      function Lo(t) {
        return vc(typeof t == "function" ? t : Gt(t, S));
      }
      function aE(t) {
        return yc(Gt(t, S));
      }
      function sE(t, n) {
        return mc(t, Gt(n, S));
      }
      var oE = me(function(t, n) {
        return function(s) {
          return _i(s, t, n);
        };
      }), uE = me(function(t, n) {
        return function(s) {
          return _i(t, s, n);
        };
      });
      function Do(t, n, s) {
        var l = et(n), h = da(n, l);
        s == null && !(He(n) && (h.length || !l.length)) && (s = n, n = t, t = this, h = da(n, et(n)));
        var v = !(He(s) && "chain" in s) || !!s.chain, E = xr(t);
        return Ht(h, function(x) {
          var N = n[x];
          t[x] = N, E && (t.prototype[x] = function() {
            var X = this.__chain__;
            if (v || X) {
              var Z = t(this.__wrapped__), J = Z.__actions__ = At(this.__actions__);
              return J.push({ func: N, args: arguments, thisArg: t }), Z.__chain__ = X, Z;
            }
            return N.apply(t, Ir([this.value()], arguments));
          });
        }), t;
      }
      function fE() {
        return nt._ === this && (nt._ = k1), this;
      }
      function Po() {
      }
      function lE(t) {
        return t = _e(t), me(function(n) {
          return Ac(n, t);
        });
      }
      var cE = fo(Me), dE = fo(ql), hE = fo(Bs);
      function Md(t) {
        return vo(t) ? ks(or(t)) : zv(t);
      }
      function pE(t) {
        return function(n) {
          return t == null ? r : un(t, n);
        };
      }
      var gE = zc(), _E = zc(!0);
      function Bo() {
        return [];
      }
      function ko() {
        return !1;
      }
      function vE() {
        return {};
      }
      function wE() {
        return "";
      }
      function yE() {
        return !0;
      }
      function mE(t, n) {
        if (t = _e(t), t < 1 || t > Ye)
          return [];
        var s = yt, l = lt(t, yt);
        n = ce(n), t -= yt;
        for (var h = Fs(l, n); ++s < t; )
          n(s);
        return h;
      }
      function AE(t) {
        return ge(t) ? Me(t, or) : Lt(t) ? [t] : At(ad(Ne(t)));
      }
      function EE(t) {
        var n = ++P1;
        return Ne(t) + n;
      }
      var bE = wa(function(t, n) {
        return t + n;
      }, 0), SE = lo("ceil"), xE = wa(function(t, n) {
        return t / n;
      }, 1), TE = lo("floor");
      function RE(t) {
        return t && t.length ? ca(t, St, js) : r;
      }
      function OE(t, n) {
        return t && t.length ? ca(t, ce(n, 2), js) : r;
      }
      function CE(t) {
        return Kl(t, St);
      }
      function NE(t, n) {
        return Kl(t, ce(n, 2));
      }
      function LE(t) {
        return t && t.length ? ca(t, St, Qs) : r;
      }
      function DE(t, n) {
        return t && t.length ? ca(t, ce(n, 2), Qs) : r;
      }
      var PE = wa(function(t, n) {
        return t * n;
      }, 1), BE = lo("round"), kE = wa(function(t, n) {
        return t - n;
      }, 0);
      function IE(t) {
        return t && t.length ? Us(t, St) : 0;
      }
      function UE(t, n) {
        return t && t.length ? Us(t, ce(n, 2)) : 0;
      }
      return _.after = am, _.ary = _d, _.assign = Wm, _.assignIn = Nd, _.assignInWith = La, _.assignWith = Xm, _.at = Zm, _.before = vd, _.bind = bo, _.bindAll = QA, _.bindKey = wd, _.castArray = vm, _.chain = hd, _.chunk = Tw, _.compact = Rw, _.concat = Ow, _.cond = eE, _.conforms = tE, _.constant = No, _.countBy = Iy, _.create = jm, _.curry = yd, _.curryRight = md, _.debounce = Ad, _.defaults = Vm, _.defaultsDeep = Jm, _.defer = sm, _.delay = om, _.difference = Cw, _.differenceBy = Nw, _.differenceWith = Lw, _.drop = Dw, _.dropRight = Pw, _.dropRightWhile = Bw, _.dropWhile = kw, _.fill = Iw, _.filter = Fy, _.flatMap = Hy, _.flatMapDeep = qy, _.flatMapDepth = zy, _.flatten = fd, _.flattenDeep = Uw, _.flattenDepth = Fw, _.flip = um, _.flow = nE, _.flowRight = iE, _.fromPairs = Mw, _.functions = iA, _.functionsIn = aA, _.groupBy = Gy, _.initial = Hw, _.intersection = qw, _.intersectionBy = zw, _.intersectionWith = Gw, _.invert = oA, _.invertBy = uA, _.invokeMap = Wy, _.iteratee = Lo, _.keyBy = Xy, _.keys = et, _.keysIn = bt, _.map = xa, _.mapKeys = lA, _.mapValues = cA, _.matches = aE, _.matchesProperty = sE, _.memoize = Ra, _.merge = dA, _.mergeWith = Ld, _.method = oE, _.methodOf = uE, _.mixin = Do, _.negate = Oa, _.nthArg = lE, _.omit = hA, _.omitBy = pA, _.once = fm, _.orderBy = Zy, _.over = cE, _.overArgs = lm, _.overEvery = dE, _.overSome = hE, _.partial = So, _.partialRight = Ed, _.partition = jy, _.pick = gA, _.pickBy = Dd, _.property = Md, _.propertyOf = pE, _.pull = Zw, _.pullAll = cd, _.pullAllBy = jw, _.pullAllWith = Vw, _.pullAt = Jw, _.range = gE, _.rangeRight = _E, _.rearg = cm, _.reject = Yy, _.remove = Yw, _.rest = dm, _.reverse = Ao, _.sampleSize = em, _.set = vA, _.setWith = wA, _.shuffle = tm, _.slice = Qw, _.sortBy = im, _.sortedUniq = sy, _.sortedUniqBy = oy, _.split = HA, _.spread = hm, _.tail = uy, _.take = fy, _.takeRight = ly, _.takeRightWhile = cy, _.takeWhile = dy, _.tap = Ry, _.throttle = pm, _.thru = Sa, _.toArray = Rd, _.toPairs = Pd, _.toPairsIn = Bd, _.toPath = AE, _.toPlainObject = Cd, _.transform = yA, _.unary = gm, _.union = hy, _.unionBy = py, _.unionWith = gy, _.uniq = _y, _.uniqBy = vy, _.uniqWith = wy, _.unset = mA, _.unzip = Eo, _.unzipWith = dd, _.update = AA, _.updateWith = EA, _.values = kn, _.valuesIn = bA, _.without = yy, _.words = Ud, _.wrap = _m, _.xor = my, _.xorBy = Ay, _.xorWith = Ey, _.zip = by, _.zipObject = Sy, _.zipObjectDeep = xy, _.zipWith = Ty, _.entries = Pd, _.entriesIn = Bd, _.extend = Nd, _.extendWith = La, Do(_, _), _.add = bE, _.attempt = Fd, _.camelCase = RA, _.capitalize = kd, _.ceil = SE, _.clamp = SA, _.clone = wm, _.cloneDeep = mm, _.cloneDeepWith = Am, _.cloneWith = ym, _.conformsTo = Em, _.deburr = Id, _.defaultTo = rE, _.divide = xE, _.endsWith = OA, _.eq = Qt, _.escape = CA, _.escapeRegExp = NA, _.every = Uy, _.find = My, _.findIndex = od, _.findKey = Ym, _.findLast = $y, _.findLastIndex = ud, _.findLastKey = Qm, _.floor = TE, _.forEach = pd, _.forEachRight = gd, _.forIn = eA, _.forInRight = tA, _.forOwn = rA, _.forOwnRight = nA, _.get = Ro, _.gt = bm, _.gte = Sm, _.has = sA, _.hasIn = Oo, _.head = ld, _.identity = St, _.includes = Ky, _.indexOf = $w, _.inRange = xA, _.invoke = fA, _.isArguments = cn, _.isArray = ge, _.isArrayBuffer = xm, _.isArrayLike = Et, _.isArrayLikeObject = We, _.isBoolean = Tm, _.isBuffer = zr, _.isDate = Rm, _.isElement = Om, _.isEmpty = Cm, _.isEqual = Nm, _.isEqualWith = Lm, _.isError = xo, _.isFinite = Dm, _.isFunction = xr, _.isInteger = bd, _.isLength = Ca, _.isMap = Sd, _.isMatch = Pm, _.isMatchWith = Bm, _.isNaN = km, _.isNative = Im, _.isNil = Fm, _.isNull = Um, _.isNumber = xd, _.isObject = He, _.isObjectLike = qe, _.isPlainObject = Ei, _.isRegExp = To, _.isSafeInteger = Mm, _.isSet = Td, _.isString = Na, _.isSymbol = Lt, _.isTypedArray = Bn, _.isUndefined = $m, _.isWeakMap = Hm, _.isWeakSet = qm, _.join = Kw, _.kebabCase = LA, _.last = Wt, _.lastIndexOf = Ww, _.lowerCase = DA, _.lowerFirst = PA, _.lt = zm, _.lte = Gm, _.max = RE, _.maxBy = OE, _.mean = CE, _.meanBy = NE, _.min = LE, _.minBy = DE, _.stubArray = Bo, _.stubFalse = ko, _.stubObject = vE, _.stubString = wE, _.stubTrue = yE, _.multiply = PE, _.nth = Xw, _.noConflict = fE, _.noop = Po, _.now = Ta, _.pad = BA, _.padEnd = kA, _.padStart = IA, _.parseInt = UA, _.random = TA, _.reduce = Vy, _.reduceRight = Jy, _.repeat = FA, _.replace = MA, _.result = _A, _.round = BE, _.runInContext = O, _.sample = Qy, _.size = rm, _.snakeCase = $A, _.some = nm, _.sortedIndex = ey, _.sortedIndexBy = ty, _.sortedIndexOf = ry, _.sortedLastIndex = ny, _.sortedLastIndexBy = iy, _.sortedLastIndexOf = ay, _.startCase = qA, _.startsWith = zA, _.subtract = kE, _.sum = IE, _.sumBy = UE, _.template = GA, _.times = mE, _.toFinite = Tr, _.toInteger = _e, _.toLength = Od, _.toLower = KA, _.toNumber = Xt, _.toSafeInteger = Km, _.toString = Ne, _.toUpper = WA, _.trim = XA, _.trimEnd = ZA, _.trimStart = jA, _.truncate = VA, _.unescape = JA, _.uniqueId = EE, _.upperCase = YA, _.upperFirst = Co, _.each = pd, _.eachRight = gd, _.first = ld, Do(_, function() {
        var t = {};
        return ar(_, function(n, s) {
          De.call(_.prototype, s) || (t[s] = n);
        }), t;
      }(), { chain: !1 }), _.VERSION = a, Ht(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        _[t].placeholder = _;
      }), Ht(["drop", "take"], function(t, n) {
        Ee.prototype[t] = function(s) {
          s = s === r ? 1 : Je(_e(s), 0);
          var l = this.__filtered__ && !n ? new Ee(this) : this.clone();
          return l.__filtered__ ? l.__takeCount__ = lt(s, l.__takeCount__) : l.__views__.push({
            size: lt(s, yt),
            type: t + (l.__dir__ < 0 ? "Right" : "")
          }), l;
        }, Ee.prototype[t + "Right"] = function(s) {
          return this.reverse()[t](s).reverse();
        };
      }), Ht(["filter", "map", "takeWhile"], function(t, n) {
        var s = n + 1, l = s == Re || s == rt;
        Ee.prototype[t] = function(h) {
          var v = this.clone();
          return v.__iteratees__.push({
            iteratee: ce(h, 3),
            type: s
          }), v.__filtered__ = v.__filtered__ || l, v;
        };
      }), Ht(["head", "last"], function(t, n) {
        var s = "take" + (n ? "Right" : "");
        Ee.prototype[t] = function() {
          return this[s](1).value()[0];
        };
      }), Ht(["initial", "tail"], function(t, n) {
        var s = "drop" + (n ? "" : "Right");
        Ee.prototype[t] = function() {
          return this.__filtered__ ? new Ee(this) : this[s](1);
        };
      }), Ee.prototype.compact = function() {
        return this.filter(St);
      }, Ee.prototype.find = function(t) {
        return this.filter(t).head();
      }, Ee.prototype.findLast = function(t) {
        return this.reverse().find(t);
      }, Ee.prototype.invokeMap = me(function(t, n) {
        return typeof t == "function" ? new Ee(this) : this.map(function(s) {
          return _i(s, t, n);
        });
      }), Ee.prototype.reject = function(t) {
        return this.filter(Oa(ce(t)));
      }, Ee.prototype.slice = function(t, n) {
        t = _e(t);
        var s = this;
        return s.__filtered__ && (t > 0 || n < 0) ? new Ee(s) : (t < 0 ? s = s.takeRight(-t) : t && (s = s.drop(t)), n !== r && (n = _e(n), s = n < 0 ? s.dropRight(-n) : s.take(n - t)), s);
      }, Ee.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, Ee.prototype.toArray = function() {
        return this.take(yt);
      }, ar(Ee.prototype, function(t, n) {
        var s = /^(?:filter|find|map|reject)|While$/.test(n), l = /^(?:head|last)$/.test(n), h = _[l ? "take" + (n == "last" ? "Right" : "") : n], v = l || /^find/.test(n);
        h && (_.prototype[n] = function() {
          var E = this.__wrapped__, x = l ? [1] : arguments, N = E instanceof Ee, X = x[0], Z = N || ge(E), J = function(Ae) {
            var Se = h.apply(_, Ir([Ae], x));
            return l && re ? Se[0] : Se;
          };
          Z && s && typeof X == "function" && X.length != 1 && (N = Z = !1);
          var re = this.__chain__, ue = !!this.__actions__.length, de = v && !re, we = N && !ue;
          if (!v && Z) {
            E = we ? E : new Ee(this);
            var he = t.apply(E, x);
            return he.__actions__.push({ func: Sa, args: [J], thisArg: r }), new zt(he, re);
          }
          return de && we ? t.apply(this, x) : (he = this.thru(J), de ? l ? he.value()[0] : he.value() : he);
        });
      }), Ht(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var n = Vi[t], s = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(t);
        _.prototype[t] = function() {
          var h = arguments;
          if (l && !this.__chain__) {
            var v = this.value();
            return n.apply(ge(v) ? v : [], h);
          }
          return this[s](function(E) {
            return n.apply(ge(E) ? E : [], h);
          });
        };
      }), ar(Ee.prototype, function(t, n) {
        var s = _[n];
        if (s) {
          var l = s.name + "";
          De.call(Cn, l) || (Cn[l] = []), Cn[l].push({ name: n, func: s });
        }
      }), Cn[va(r, Y).name] = [{
        name: "wrapper",
        func: r
      }], Ee.prototype.clone = J1, Ee.prototype.reverse = Y1, Ee.prototype.value = Q1, _.prototype.at = Oy, _.prototype.chain = Cy, _.prototype.commit = Ny, _.prototype.next = Ly, _.prototype.plant = Py, _.prototype.reverse = By, _.prototype.toJSON = _.prototype.valueOf = _.prototype.value = ky, _.prototype.first = _.prototype.head, fi && (_.prototype[fi] = Dy), _;
    }, Tn = N1();
    rn ? ((rn.exports = Tn)._ = Tn, Ns._ = Tn) : nt._ = Tn;
  }).call(se);
})(es, es.exports);
var Uf = es.exports, Ff = {}, TS = se && se.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
const RS = TS(as), OS = [
  {
    host: "arweave.net",
    protocol: "https",
    port: 443
  },
  {
    host: "gateway.amplify.host",
    protocol: "https",
    port: 443
  },
  {
    host: "arweave.dev",
    protocol: "https",
    port: 443
  }
], CS = {
  timeout: 1e4,
  logging: !1,
  onError: console.error
};
function Np(e, i = CS) {
  if (e.length === 0)
    throw new Error("Multihost config should have at least one host");
  const r = RS.default.init(Object.assign(Object.assign({}, e[0]), i));
  let a = 0;
  function o(p) {
    r.api.config.host = p.host, r.api.config.port = p.port, r.api.config.protocol = p.protocol;
  }
  const u = {
    get: r.api.get.bind(r.api),
    post: r.api.post.bind(r.api)
  };
  function c() {
    const p = d();
    a = (a + 1) % e.length;
    const S = e[a];
    i.logging && i.logger !== void 0 && i.logger(`Request failed. Switching host and retrying. Old host: ${JSON.stringify(p)}. New host: ${JSON.stringify(S)}.`), o(S);
  }
  function d() {
    return e[a];
  }
  function g(p) {
    const S = d();
    return JSON.stringify(p) === JSON.stringify(S);
  }
  async function f(p) {
    for (let S = 0; S < e.length; S++) {
      const w = d();
      try {
        const m = await p();
        if (m.status >= 500 && m.status < 600)
          throw new Error(`Error while sending http request: Status: ${m.status}. Data: ${JSON.stringify(m.data)}`);
        return m;
      } catch (m) {
        if (i.onError && i.onError(m), S === e.length - 1)
          throw m;
        g(w) && c();
      }
    }
    throw new Error("Should never reach this");
  }
  return r.api.get = async (p, S) => await f(() => u.get(p, S)), r.api.post = async (p, S, w) => await f(() => u.post(p, S, w)), r;
}
function NS(e) {
  return Np(OS, e);
}
var LS = {
  init: Np,
  initWithDefaultHosts: NS
}, Lp = {}, Mf = { exports: {} }, Dp = function(i, r) {
  return function() {
    for (var o = new Array(arguments.length), u = 0; u < o.length; u++)
      o[u] = arguments[u];
    return i.apply(r, o);
  };
}, DS = Dp, wn = Object.prototype.toString;
function $f(e) {
  return wn.call(e) === "[object Array]";
}
function ef(e) {
  return typeof e > "u";
}
function PS(e) {
  return e !== null && !ef(e) && e.constructor !== null && !ef(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
function BS(e) {
  return wn.call(e) === "[object ArrayBuffer]";
}
function kS(e) {
  return typeof FormData < "u" && e instanceof FormData;
}
function IS(e) {
  var i;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? i = ArrayBuffer.isView(e) : i = e && e.buffer && e.buffer instanceof ArrayBuffer, i;
}
function US(e) {
  return typeof e == "string";
}
function FS(e) {
  return typeof e == "number";
}
function Pp(e) {
  return e !== null && typeof e == "object";
}
function Xa(e) {
  if (wn.call(e) !== "[object Object]")
    return !1;
  var i = Object.getPrototypeOf(e);
  return i === null || i === Object.prototype;
}
function MS(e) {
  return wn.call(e) === "[object Date]";
}
function $S(e) {
  return wn.call(e) === "[object File]";
}
function HS(e) {
  return wn.call(e) === "[object Blob]";
}
function Bp(e) {
  return wn.call(e) === "[object Function]";
}
function qS(e) {
  return Pp(e) && Bp(e.pipe);
}
function zS(e) {
  return typeof URLSearchParams < "u" && e instanceof URLSearchParams;
}
function GS(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function KS() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function Hf(e, i) {
  if (!(e === null || typeof e > "u"))
    if (typeof e != "object" && (e = [e]), $f(e))
      for (var r = 0, a = e.length; r < a; r++)
        i.call(null, e[r], r, e);
    else
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && i.call(null, e[o], o, e);
}
function tf() {
  var e = {};
  function i(o, u) {
    Xa(e[u]) && Xa(o) ? e[u] = tf(e[u], o) : Xa(o) ? e[u] = tf({}, o) : $f(o) ? e[u] = o.slice() : e[u] = o;
  }
  for (var r = 0, a = arguments.length; r < a; r++)
    Hf(arguments[r], i);
  return e;
}
function WS(e, i, r) {
  return Hf(i, function(o, u) {
    r && typeof o == "function" ? e[u] = DS(o, r) : e[u] = o;
  }), e;
}
function XS(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
var Ft = {
  isArray: $f,
  isArrayBuffer: BS,
  isBuffer: PS,
  isFormData: kS,
  isArrayBufferView: IS,
  isString: US,
  isNumber: FS,
  isObject: Pp,
  isPlainObject: Xa,
  isUndefined: ef,
  isDate: MS,
  isFile: $S,
  isBlob: HS,
  isFunction: Bp,
  isStream: qS,
  isURLSearchParams: zS,
  isStandardBrowserEnv: KS,
  forEach: Hf,
  merge: tf,
  extend: WS,
  trim: GS,
  stripBOM: XS
}, $n = Ft;
function Ah(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var kp = function(i, r, a) {
  if (!r)
    return i;
  var o;
  if (a)
    o = a(r);
  else if ($n.isURLSearchParams(r))
    o = r.toString();
  else {
    var u = [];
    $n.forEach(r, function(g, f) {
      g === null || typeof g > "u" || ($n.isArray(g) ? f = f + "[]" : g = [g], $n.forEach(g, function(S) {
        $n.isDate(S) ? S = S.toISOString() : $n.isObject(S) && (S = JSON.stringify(S)), u.push(Ah(f) + "=" + Ah(S));
      }));
    }), o = u.join("&");
  }
  if (o) {
    var c = i.indexOf("#");
    c !== -1 && (i = i.slice(0, c)), i += (i.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return i;
}, ZS = Ft;
function hs() {
  this.handlers = [];
}
hs.prototype.use = function(i, r, a) {
  return this.handlers.push({
    fulfilled: i,
    rejected: r,
    synchronous: a ? a.synchronous : !1,
    runWhen: a ? a.runWhen : null
  }), this.handlers.length - 1;
};
hs.prototype.eject = function(i) {
  this.handlers[i] && (this.handlers[i] = null);
};
hs.prototype.forEach = function(i) {
  ZS.forEach(this.handlers, function(a) {
    a !== null && i(a);
  });
};
var jS = hs, VS = Ft, JS = function(i, r) {
  VS.forEach(i, function(o, u) {
    u !== r && u.toUpperCase() === r.toUpperCase() && (i[r] = o, delete i[u]);
  });
}, Ip = function(i, r, a, o, u) {
  return i.config = r, a && (i.code = a), i.request = o, i.response = u, i.isAxiosError = !0, i.toJSON = function() {
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
      code: this.code
    };
  }, i;
}, tu, Eh;
function Up() {
  if (Eh)
    return tu;
  Eh = 1;
  var e = Ip;
  return tu = function(r, a, o, u, c) {
    var d = new Error(r);
    return e(d, a, o, u, c);
  }, tu;
}
var ru, bh;
function YS() {
  if (bh)
    return ru;
  bh = 1;
  var e = Up();
  return ru = function(r, a, o) {
    var u = o.config.validateStatus;
    !o.status || !u || u(o.status) ? r(o) : a(e(
      "Request failed with status code " + o.status,
      o.config,
      null,
      o.request,
      o
    ));
  }, ru;
}
var nu, Sh;
function QS() {
  if (Sh)
    return nu;
  Sh = 1;
  var e = Ft;
  return nu = e.isStandardBrowserEnv() ? (
    // Standard browser envs support document.cookie
    function() {
      return {
        write: function(a, o, u, c, d, g) {
          var f = [];
          f.push(a + "=" + encodeURIComponent(o)), e.isNumber(u) && f.push("expires=" + new Date(u).toGMTString()), e.isString(c) && f.push("path=" + c), e.isString(d) && f.push("domain=" + d), g === !0 && f.push("secure"), document.cookie = f.join("; ");
        },
        read: function(a) {
          var o = document.cookie.match(new RegExp("(^|;\\s*)(" + a + ")=([^;]*)"));
          return o ? decodeURIComponent(o[3]) : null;
        },
        remove: function(a) {
          this.write(a, "", Date.now() - 864e5);
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
  ), nu;
}
var iu, xh;
function ex() {
  return xh || (xh = 1, iu = function(i) {
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(i);
  }), iu;
}
var au, Th;
function tx() {
  return Th || (Th = 1, au = function(i, r) {
    return r ? i.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : i;
  }), au;
}
var su, Rh;
function rx() {
  if (Rh)
    return su;
  Rh = 1;
  var e = ex(), i = tx();
  return su = function(a, o) {
    return a && !e(o) ? i(a, o) : o;
  }, su;
}
var ou, Oh;
function nx() {
  if (Oh)
    return ou;
  Oh = 1;
  var e = Ft, i = [
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
  return ou = function(a) {
    var o = {}, u, c, d;
    return a && e.forEach(a.split(`
`), function(f) {
      if (d = f.indexOf(":"), u = e.trim(f.substr(0, d)).toLowerCase(), c = e.trim(f.substr(d + 1)), u) {
        if (o[u] && i.indexOf(u) >= 0)
          return;
        u === "set-cookie" ? o[u] = (o[u] ? o[u] : []).concat([c]) : o[u] = o[u] ? o[u] + ", " + c : c;
      }
    }), o;
  }, ou;
}
var uu, Ch;
function ix() {
  if (Ch)
    return uu;
  Ch = 1;
  var e = Ft;
  return uu = e.isStandardBrowserEnv() ? (
    // Standard browser envs have full support of the APIs needed to test
    // whether the request URL is of the same origin as current location.
    function() {
      var r = /(msie|trident)/i.test(navigator.userAgent), a = document.createElement("a"), o;
      function u(c) {
        var d = c;
        return r && (a.setAttribute("href", d), d = a.href), a.setAttribute("href", d), {
          href: a.href,
          protocol: a.protocol ? a.protocol.replace(/:$/, "") : "",
          host: a.host,
          search: a.search ? a.search.replace(/^\?/, "") : "",
          hash: a.hash ? a.hash.replace(/^#/, "") : "",
          hostname: a.hostname,
          port: a.port,
          pathname: a.pathname.charAt(0) === "/" ? a.pathname : "/" + a.pathname
        };
      }
      return o = u(window.location.href), function(d) {
        var g = e.isString(d) ? u(d) : d;
        return g.protocol === o.protocol && g.host === o.host;
      };
    }()
  ) : (
    // Non standard browser envs (web workers, react-native) lack needed support.
    function() {
      return function() {
        return !0;
      };
    }()
  ), uu;
}
var fu, Nh;
function Lh() {
  if (Nh)
    return fu;
  Nh = 1;
  var e = Ft, i = YS(), r = QS(), a = kp, o = rx(), u = nx(), c = ix(), d = Up();
  return fu = function(f) {
    return new Promise(function(S, w) {
      var m = f.data, I = f.headers, z = f.responseType;
      e.isFormData(m) && delete I["Content-Type"];
      var C = new XMLHttpRequest();
      if (f.auth) {
        var Y = f.auth.username || "", te = f.auth.password ? unescape(encodeURIComponent(f.auth.password)) : "";
        I.Authorization = "Basic " + btoa(Y + ":" + te);
      }
      var V = o(f.baseURL, f.url);
      C.open(f.method.toUpperCase(), a(V, f.params, f.paramsSerializer), !0), C.timeout = f.timeout;
      function j() {
        if (C) {
          var H = "getAllResponseHeaders" in C ? u(C.getAllResponseHeaders()) : null, L = !z || z === "text" || z === "json" ? C.responseText : C.response, K = {
            data: L,
            status: C.status,
            statusText: C.statusText,
            headers: H,
            config: f,
            request: C
          };
          i(S, w, K), C = null;
        }
      }
      if ("onloadend" in C ? C.onloadend = j : C.onreadystatechange = function() {
        !C || C.readyState !== 4 || C.status === 0 && !(C.responseURL && C.responseURL.indexOf("file:") === 0) || setTimeout(j);
      }, C.onabort = function() {
        C && (w(d("Request aborted", f, "ECONNABORTED", C)), C = null);
      }, C.onerror = function() {
        w(d("Network Error", f, null, C)), C = null;
      }, C.ontimeout = function() {
        var L = "timeout of " + f.timeout + "ms exceeded";
        f.timeoutErrorMessage && (L = f.timeoutErrorMessage), w(d(
          L,
          f,
          f.transitional && f.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED",
          C
        )), C = null;
      }, e.isStandardBrowserEnv()) {
        var P = (f.withCredentials || c(V)) && f.xsrfCookieName ? r.read(f.xsrfCookieName) : void 0;
        P && (I[f.xsrfHeaderName] = P);
      }
      "setRequestHeader" in C && e.forEach(I, function(L, K) {
        typeof m > "u" && K.toLowerCase() === "content-type" ? delete I[K] : C.setRequestHeader(K, L);
      }), e.isUndefined(f.withCredentials) || (C.withCredentials = !!f.withCredentials), z && z !== "json" && (C.responseType = f.responseType), typeof f.onDownloadProgress == "function" && C.addEventListener("progress", f.onDownloadProgress), typeof f.onUploadProgress == "function" && C.upload && C.upload.addEventListener("progress", f.onUploadProgress), f.cancelToken && f.cancelToken.promise.then(function(L) {
        C && (C.abort(), w(L), C = null);
      }), m || (m = null), C.send(m);
    });
  }, fu;
}
var st = Ft, Dh = JS, ax = Ip, sx = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function Ph(e, i) {
  !st.isUndefined(e) && st.isUndefined(e["Content-Type"]) && (e["Content-Type"] = i);
}
function ox() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = Lh()), e;
}
function ux(e, i, r) {
  if (st.isString(e))
    try {
      return (i || JSON.parse)(e), st.trim(e);
    } catch (a) {
      if (a.name !== "SyntaxError")
        throw a;
    }
  return (r || JSON.stringify)(e);
}
var ps = {
  transitional: {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
  },
  adapter: ox(),
  transformRequest: [function(i, r) {
    return Dh(r, "Accept"), Dh(r, "Content-Type"), st.isFormData(i) || st.isArrayBuffer(i) || st.isBuffer(i) || st.isStream(i) || st.isFile(i) || st.isBlob(i) ? i : st.isArrayBufferView(i) ? i.buffer : st.isURLSearchParams(i) ? (Ph(r, "application/x-www-form-urlencoded;charset=utf-8"), i.toString()) : st.isObject(i) || r && r["Content-Type"] === "application/json" ? (Ph(r, "application/json"), ux(i)) : i;
  }],
  transformResponse: [function(i) {
    var r = this.transitional, a = r && r.silentJSONParsing, o = r && r.forcedJSONParsing, u = !a && this.responseType === "json";
    if (u || o && st.isString(i) && i.length)
      try {
        return JSON.parse(i);
      } catch (c) {
        if (u)
          throw c.name === "SyntaxError" ? ax(c, this, "E_JSON_PARSE") : c;
      }
    return i;
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
  validateStatus: function(i) {
    return i >= 200 && i < 300;
  }
};
ps.headers = {
  common: {
    Accept: "application/json, text/plain, */*"
  }
};
st.forEach(["delete", "get", "head"], function(i) {
  ps.headers[i] = {};
});
st.forEach(["post", "put", "patch"], function(i) {
  ps.headers[i] = st.merge(sx);
});
var qf = ps, fx = Ft, lx = qf, cx = function(i, r, a) {
  var o = this || lx;
  return fx.forEach(a, function(c) {
    i = c.call(o, i, r);
  }), i;
}, lu, Bh;
function Fp() {
  return Bh || (Bh = 1, lu = function(i) {
    return !!(i && i.__CANCEL__);
  }), lu;
}
var kh = Ft, cu = cx, dx = Fp(), hx = qf;
function du(e) {
  e.cancelToken && e.cancelToken.throwIfRequested();
}
var px = function(i) {
  du(i), i.headers = i.headers || {}, i.data = cu.call(
    i,
    i.data,
    i.headers,
    i.transformRequest
  ), i.headers = kh.merge(
    i.headers.common || {},
    i.headers[i.method] || {},
    i.headers
  ), kh.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(o) {
      delete i.headers[o];
    }
  );
  var r = i.adapter || hx.adapter;
  return r(i).then(function(o) {
    return du(i), o.data = cu.call(
      i,
      o.data,
      o.headers,
      i.transformResponse
    ), o;
  }, function(o) {
    return dx(o) || (du(i), o && o.response && (o.response.data = cu.call(
      i,
      o.response.data,
      o.response.headers,
      i.transformResponse
    ))), Promise.reject(o);
  });
}, dt = Ft, Mp = function(i, r) {
  r = r || {};
  var a = {}, o = ["url", "method", "data"], u = ["headers", "auth", "proxy", "params"], c = [
    "baseURL",
    "transformRequest",
    "transformResponse",
    "paramsSerializer",
    "timeout",
    "timeoutMessage",
    "withCredentials",
    "adapter",
    "responseType",
    "xsrfCookieName",
    "xsrfHeaderName",
    "onUploadProgress",
    "onDownloadProgress",
    "decompress",
    "maxContentLength",
    "maxBodyLength",
    "maxRedirects",
    "transport",
    "httpAgent",
    "httpsAgent",
    "cancelToken",
    "socketPath",
    "responseEncoding"
  ], d = ["validateStatus"];
  function g(w, m) {
    return dt.isPlainObject(w) && dt.isPlainObject(m) ? dt.merge(w, m) : dt.isPlainObject(m) ? dt.merge({}, m) : dt.isArray(m) ? m.slice() : m;
  }
  function f(w) {
    dt.isUndefined(r[w]) ? dt.isUndefined(i[w]) || (a[w] = g(void 0, i[w])) : a[w] = g(i[w], r[w]);
  }
  dt.forEach(o, function(m) {
    dt.isUndefined(r[m]) || (a[m] = g(void 0, r[m]));
  }), dt.forEach(u, f), dt.forEach(c, function(m) {
    dt.isUndefined(r[m]) ? dt.isUndefined(i[m]) || (a[m] = g(void 0, i[m])) : a[m] = g(void 0, r[m]);
  }), dt.forEach(d, function(m) {
    m in r ? a[m] = g(i[m], r[m]) : m in i && (a[m] = g(void 0, i[m]));
  });
  var p = o.concat(u).concat(c).concat(d), S = Object.keys(i).concat(Object.keys(r)).filter(function(m) {
    return p.indexOf(m) === -1;
  });
  return dt.forEach(S, f), a;
};
const gx = "axios", _x = "0.21.4", vx = "Promise based HTTP client for the browser and node.js", wx = "index.js", yx = {
  test: "grunt test",
  start: "node ./sandbox/server.js",
  build: "NODE_ENV=production grunt build",
  preversion: "npm test",
  version: "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",
  postversion: "git push && git push --tags",
  examples: "node ./examples/server.js",
  coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
  fix: "eslint --fix lib/**/*.js"
}, mx = {
  type: "git",
  url: "https://github.com/axios/axios.git"
}, Ax = [
  "xhr",
  "http",
  "ajax",
  "promise",
  "node"
], Ex = "Matt Zabriskie", bx = "MIT", Sx = {
  url: "https://github.com/axios/axios/issues"
}, xx = "https://axios-http.com", Tx = {
  coveralls: "^3.0.0",
  "es6-promise": "^4.2.4",
  grunt: "^1.3.0",
  "grunt-banner": "^0.6.0",
  "grunt-cli": "^1.2.0",
  "grunt-contrib-clean": "^1.1.0",
  "grunt-contrib-watch": "^1.0.0",
  "grunt-eslint": "^23.0.0",
  "grunt-karma": "^4.0.0",
  "grunt-mocha-test": "^0.13.3",
  "grunt-ts": "^6.0.0-beta.19",
  "grunt-webpack": "^4.0.2",
  "istanbul-instrumenter-loader": "^1.0.0",
  "jasmine-core": "^2.4.1",
  karma: "^6.3.2",
  "karma-chrome-launcher": "^3.1.0",
  "karma-firefox-launcher": "^2.1.0",
  "karma-jasmine": "^1.1.1",
  "karma-jasmine-ajax": "^0.1.13",
  "karma-safari-launcher": "^1.0.0",
  "karma-sauce-launcher": "^4.3.6",
  "karma-sinon": "^1.0.5",
  "karma-sourcemap-loader": "^0.3.8",
  "karma-webpack": "^4.0.2",
  "load-grunt-tasks": "^3.5.2",
  minimist: "^1.2.0",
  mocha: "^8.2.1",
  sinon: "^4.5.0",
  "terser-webpack-plugin": "^4.2.3",
  typescript: "^4.0.5",
  "url-search-params": "^0.10.0",
  webpack: "^4.44.2",
  "webpack-dev-server": "^3.11.0"
}, Rx = {
  "./lib/adapters/http.js": "./lib/adapters/xhr.js"
}, Ox = "dist/axios.min.js", Cx = "dist/axios.min.js", Nx = "./index.d.ts", Lx = {
  "follow-redirects": "^1.14.0"
}, Dx = [
  {
    path: "./dist/axios.min.js",
    threshold: "5kB"
  }
], Px = {
  name: gx,
  version: _x,
  description: vx,
  main: wx,
  scripts: yx,
  repository: mx,
  keywords: Ax,
  author: Ex,
  license: bx,
  bugs: Sx,
  homepage: xx,
  devDependencies: Tx,
  browser: Rx,
  jsdelivr: Ox,
  unpkg: Cx,
  typings: Nx,
  dependencies: Lx,
  bundlesize: Dx
};
var $p = Px, zf = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, i) {
  zf[e] = function(a) {
    return typeof a === e || "a" + (i < 1 ? "n " : " ") + e;
  };
});
var Ih = {}, Bx = $p.version.split(".");
function Hp(e, i) {
  for (var r = i ? i.split(".") : Bx, a = e.split("."), o = 0; o < 3; o++) {
    if (r[o] > a[o])
      return !0;
    if (r[o] < a[o])
      return !1;
  }
  return !1;
}
zf.transitional = function(i, r, a) {
  var o = r && Hp(r);
  function u(c, d) {
    return "[Axios v" + $p.version + "] Transitional option '" + c + "'" + d + (a ? ". " + a : "");
  }
  return function(c, d, g) {
    if (i === !1)
      throw new Error(u(d, " has been removed in " + r));
    return o && !Ih[d] && (Ih[d] = !0, console.warn(
      u(
        d,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), i ? i(c, d, g) : !0;
  };
};
function kx(e, i, r) {
  if (typeof e != "object")
    throw new TypeError("options must be an object");
  for (var a = Object.keys(e), o = a.length; o-- > 0; ) {
    var u = a[o], c = i[u];
    if (c) {
      var d = e[u], g = d === void 0 || c(d, u, e);
      if (g !== !0)
        throw new TypeError("option " + u + " must be " + g);
      continue;
    }
    if (r !== !0)
      throw Error("Unknown option " + u);
  }
}
var Ix = {
  isOlderVersion: Hp,
  assertOptions: kx,
  validators: zf
}, qp = Ft, Ux = kp, Uh = jS, Fh = px, gs = Mp, zp = Ix, Hn = zp.validators;
function Ui(e) {
  this.defaults = e, this.interceptors = {
    request: new Uh(),
    response: new Uh()
  };
}
Ui.prototype.request = function(i) {
  typeof i == "string" ? (i = arguments[1] || {}, i.url = arguments[0]) : i = i || {}, i = gs(this.defaults, i), i.method ? i.method = i.method.toLowerCase() : this.defaults.method ? i.method = this.defaults.method.toLowerCase() : i.method = "get";
  var r = i.transitional;
  r !== void 0 && zp.assertOptions(r, {
    silentJSONParsing: Hn.transitional(Hn.boolean, "1.0.0"),
    forcedJSONParsing: Hn.transitional(Hn.boolean, "1.0.0"),
    clarifyTimeoutError: Hn.transitional(Hn.boolean, "1.0.0")
  }, !1);
  var a = [], o = !0;
  this.interceptors.request.forEach(function(w) {
    typeof w.runWhen == "function" && w.runWhen(i) === !1 || (o = o && w.synchronous, a.unshift(w.fulfilled, w.rejected));
  });
  var u = [];
  this.interceptors.response.forEach(function(w) {
    u.push(w.fulfilled, w.rejected);
  });
  var c;
  if (!o) {
    var d = [Fh, void 0];
    for (Array.prototype.unshift.apply(d, a), d = d.concat(u), c = Promise.resolve(i); d.length; )
      c = c.then(d.shift(), d.shift());
    return c;
  }
  for (var g = i; a.length; ) {
    var f = a.shift(), p = a.shift();
    try {
      g = f(g);
    } catch (S) {
      p(S);
      break;
    }
  }
  try {
    c = Fh(g);
  } catch (S) {
    return Promise.reject(S);
  }
  for (; u.length; )
    c = c.then(u.shift(), u.shift());
  return c;
};
Ui.prototype.getUri = function(i) {
  return i = gs(this.defaults, i), Ux(i.url, i.params, i.paramsSerializer).replace(/^\?/, "");
};
qp.forEach(["delete", "get", "head", "options"], function(i) {
  Ui.prototype[i] = function(r, a) {
    return this.request(gs(a || {}, {
      method: i,
      url: r,
      data: (a || {}).data
    }));
  };
});
qp.forEach(["post", "put", "patch"], function(i) {
  Ui.prototype[i] = function(r, a, o) {
    return this.request(gs(o || {}, {
      method: i,
      url: r,
      data: a
    }));
  };
});
var Fx = Ui, hu, Mh;
function Gp() {
  if (Mh)
    return hu;
  Mh = 1;
  function e(i) {
    this.message = i;
  }
  return e.prototype.toString = function() {
    return "Cancel" + (this.message ? ": " + this.message : "");
  }, e.prototype.__CANCEL__ = !0, hu = e, hu;
}
var pu, $h;
function Mx() {
  if ($h)
    return pu;
  $h = 1;
  var e = Gp();
  function i(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    var a;
    this.promise = new Promise(function(c) {
      a = c;
    });
    var o = this;
    r(function(c) {
      o.reason || (o.reason = new e(c), a(o.reason));
    });
  }
  return i.prototype.throwIfRequested = function() {
    if (this.reason)
      throw this.reason;
  }, i.source = function() {
    var a, o = new i(function(c) {
      a = c;
    });
    return {
      token: o,
      cancel: a
    };
  }, pu = i, pu;
}
var gu, Hh;
function $x() {
  return Hh || (Hh = 1, gu = function(i) {
    return function(a) {
      return i.apply(null, a);
    };
  }), gu;
}
var _u, qh;
function Hx() {
  return qh || (qh = 1, _u = function(i) {
    return typeof i == "object" && i.isAxiosError === !0;
  }), _u;
}
var zh = Ft, qx = Dp, Za = Fx, zx = Mp, Gx = qf;
function Kp(e) {
  var i = new Za(e), r = qx(Za.prototype.request, i);
  return zh.extend(r, Za.prototype, i), zh.extend(r, i), r;
}
var tr = Kp(Gx);
tr.Axios = Za;
tr.create = function(i) {
  return Kp(zx(tr.defaults, i));
};
tr.Cancel = Gp();
tr.CancelToken = Mx();
tr.isCancel = Fp();
tr.all = function(i) {
  return Promise.all(i);
};
tr.spread = $x();
tr.isAxiosError = Hx();
Mf.exports = tr;
Mf.exports.default = tr;
var Kx = Mf.exports, Wx = Kx, Wp = {};
(function(e) {
  e.__esModule = !0, e.default = `
query($id: ID!) {
  transaction(id: $id) {
    id
    anchor
    signature
    recipient
    owner {
      address
      key
    }
    fee {
      winston
      ar
    }
    quantity {
      winston
      ar
    }
    data {
      size
      type
    }
    tags {
      name
      value
    }
    block {
      id
      timestamp
      height
      previous
    }
    parent {
      id
    }
  }
}
`;
})(Wp);
(function(e) {
  var i = se && se.__assign || function() {
    return i = Object.assign || function(p) {
      for (var S, w = 1, m = arguments.length; w < m; w++) {
        S = arguments[w];
        for (var I in S)
          Object.prototype.hasOwnProperty.call(S, I) && (p[I] = S[I]);
      }
      return p;
    }, i.apply(this, arguments);
  }, r = se && se.__awaiter || function(p, S, w, m) {
    function I(z) {
      return z instanceof w ? z : new w(function(C) {
        C(z);
      });
    }
    return new (w || (w = Promise))(function(z, C) {
      function Y(j) {
        try {
          V(m.next(j));
        } catch (P) {
          C(P);
        }
      }
      function te(j) {
        try {
          V(m.throw(j));
        } catch (P) {
          C(P);
        }
      }
      function V(j) {
        j.done ? z(j.value) : I(j.value).then(Y, te);
      }
      V((m = m.apply(p, S || [])).next());
    });
  }, a = se && se.__generator || function(p, S) {
    var w = { label: 0, sent: function() {
      if (z[0] & 1)
        throw z[1];
      return z[1];
    }, trys: [], ops: [] }, m, I, z, C;
    return C = { next: Y(0), throw: Y(1), return: Y(2) }, typeof Symbol == "function" && (C[Symbol.iterator] = function() {
      return this;
    }), C;
    function Y(V) {
      return function(j) {
        return te([V, j]);
      };
    }
    function te(V) {
      if (m)
        throw new TypeError("Generator is already executing.");
      for (; w; )
        try {
          if (m = 1, I && (z = V[0] & 2 ? I.return : V[0] ? I.throw || ((z = I.return) && z.call(I), 0) : I.next) && !(z = z.call(I, V[1])).done)
            return z;
          switch (I = 0, z && (V = [V[0] & 2, z.value]), V[0]) {
            case 0:
            case 1:
              z = V;
              break;
            case 4:
              return w.label++, { value: V[1], done: !1 };
            case 5:
              w.label++, I = V[1], V = [0];
              continue;
            case 7:
              V = w.ops.pop(), w.trys.pop();
              continue;
            default:
              if (z = w.trys, !(z = z.length > 0 && z[z.length - 1]) && (V[0] === 6 || V[0] === 2)) {
                w = 0;
                continue;
              }
              if (V[0] === 3 && (!z || V[1] > z[0] && V[1] < z[3])) {
                w.label = V[1];
                break;
              }
              if (V[0] === 6 && w.label < z[1]) {
                w.label = z[1], z = V;
                break;
              }
              if (z && w.label < z[2]) {
                w.label = z[2], w.ops.push(V);
                break;
              }
              z[2] && w.ops.pop(), w.trys.pop();
              continue;
          }
          V = S.call(p, w);
        } catch (j) {
          V = [6, j], I = 0;
        } finally {
          m = z = 0;
        }
      if (V[0] & 5)
        throw V[1];
      return { value: V[0] ? V[1] : void 0, done: !0 };
    }
  };
  e.__esModule = !0, e.fetchTxTag = e.tx = e.all = e.run = void 0;
  var o = Wx, u = Wp, c = function(p, S) {
    return r(void 0, void 0, void 0, function() {
      var w, m;
      return a(this, function(I) {
        switch (I.label) {
          case 0:
            return w = JSON.stringify({
              query: p,
              variables: S
            }), [4, o.default.post("https://arweave.net/graphql", w, {
              headers: {
                "content-type": "application/json"
              }
            })];
          case 1:
            return m = I.sent().data, [2, m];
        }
      });
    });
  };
  e.run = c;
  var d = function(p, S) {
    return r(void 0, void 0, void 0, function() {
      var w, m, I, z;
      return a(this, function(C) {
        switch (C.label) {
          case 0:
            w = !0, m = [], I = "", C.label = 1;
          case 1:
            return w ? [4, e.run(p, i(i({}, S), { cursor: I }))] : [3, 3];
          case 2:
            return z = C.sent().data.transactions, z.edges && z.edges.length && (m = m.concat(z.edges), I = z.edges[z.edges.length - 1].cursor), w = z.pageInfo.hasNextPage, [3, 1];
          case 3:
            return [2, m];
        }
      });
    });
  };
  e.all = d;
  var g = function(p) {
    return r(void 0, void 0, void 0, function() {
      var S, m, w, m;
      return a(this, function(I) {
        switch (I.label) {
          case 0:
            return S = typeof window < "u", S && (m = JSON.parse(localStorage.getItem("gqlCache") || "{}"), p in m) ? [2, JSON.parse(m[p])] : [4, e.run(u.default, { id: p })];
          case 1:
            return w = I.sent(), S && w.data.transaction.block && (m = JSON.parse(localStorage.getItem("gqlCache") || "{}"), m[p] = w.data.transaction, localStorage.setItem("gqlCache", JSON.stringify(m))), [2, w.data.transaction];
        }
      });
    });
  };
  e.tx = g;
  var f = function(p, S) {
    return r(void 0, void 0, void 0, function() {
      var w, m;
      return a(this, function(I) {
        switch (I.label) {
          case 0:
            return [4, e.tx(p)];
          case 1:
            return w = I.sent(), m = w.tags.find(function(z) {
              return z.name === S;
            }), m ? [2, m.value] : [
              2
              /*return*/
            ];
        }
      });
    });
  };
  e.fetchTxTag = f;
})(Lp);
var gr = {}, Qn = {}, _r = {}, ei = {};
const Xx = 4, Gh = 0, Kh = 1, Zx = 2;
function ti(e) {
  let i = e.length;
  for (; --i >= 0; )
    e[i] = 0;
}
const jx = 0, Xp = 1, Vx = 2, Jx = 3, Yx = 258, Gf = 29, Fi = 256, Ni = Fi + 1 + Gf, Zn = 30, Kf = 19, Zp = 2 * Ni + 1, dn = 15, vu = 16, Qx = 7, Wf = 256, jp = 16, Vp = 17, Jp = 18, rf = (
  /* extra bits for each length code */
  new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0])
), ja = (
  /* extra bits for each distance code */
  new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13])
), eT = (
  /* extra bits for each bit length code */
  new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7])
), Yp = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), tT = 512, Lr = new Array((Ni + 2) * 2);
ti(Lr);
const Ri = new Array(Zn * 2);
ti(Ri);
const Li = new Array(tT);
ti(Li);
const Di = new Array(Yx - Jx + 1);
ti(Di);
const Xf = new Array(Gf);
ti(Xf);
const ts = new Array(Zn);
ti(ts);
function wu(e, i, r, a, o) {
  this.static_tree = e, this.extra_bits = i, this.extra_base = r, this.elems = a, this.max_length = o, this.has_stree = e && e.length;
}
let Qp, eg, tg;
function yu(e, i) {
  this.dyn_tree = e, this.max_code = 0, this.stat_desc = i;
}
const rg = (e) => e < 256 ? Li[e] : Li[256 + (e >>> 7)], Pi = (e, i) => {
  e.pending_buf[e.pending++] = i & 255, e.pending_buf[e.pending++] = i >>> 8 & 255;
}, xt = (e, i, r) => {
  e.bi_valid > vu - r ? (e.bi_buf |= i << e.bi_valid & 65535, Pi(e, e.bi_buf), e.bi_buf = i >> vu - e.bi_valid, e.bi_valid += r - vu) : (e.bi_buf |= i << e.bi_valid & 65535, e.bi_valid += r);
}, cr = (e, i, r) => {
  xt(
    e,
    r[i * 2],
    r[i * 2 + 1]
    /*.Len*/
  );
}, ng = (e, i) => {
  let r = 0;
  do
    r |= e & 1, e >>>= 1, r <<= 1;
  while (--i > 0);
  return r >>> 1;
}, rT = (e) => {
  e.bi_valid === 16 ? (Pi(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = e.bi_buf & 255, e.bi_buf >>= 8, e.bi_valid -= 8);
}, nT = (e, i) => {
  const r = i.dyn_tree, a = i.max_code, o = i.stat_desc.static_tree, u = i.stat_desc.has_stree, c = i.stat_desc.extra_bits, d = i.stat_desc.extra_base, g = i.stat_desc.max_length;
  let f, p, S, w, m, I, z = 0;
  for (w = 0; w <= dn; w++)
    e.bl_count[w] = 0;
  for (r[e.heap[e.heap_max] * 2 + 1] = 0, f = e.heap_max + 1; f < Zp; f++)
    p = e.heap[f], w = r[r[p * 2 + 1] * 2 + 1] + 1, w > g && (w = g, z++), r[p * 2 + 1] = w, !(p > a) && (e.bl_count[w]++, m = 0, p >= d && (m = c[p - d]), I = r[p * 2], e.opt_len += I * (w + m), u && (e.static_len += I * (o[p * 2 + 1] + m)));
  if (z !== 0) {
    do {
      for (w = g - 1; e.bl_count[w] === 0; )
        w--;
      e.bl_count[w]--, e.bl_count[w + 1] += 2, e.bl_count[g]--, z -= 2;
    } while (z > 0);
    for (w = g; w !== 0; w--)
      for (p = e.bl_count[w]; p !== 0; )
        S = e.heap[--f], !(S > a) && (r[S * 2 + 1] !== w && (e.opt_len += (w - r[S * 2 + 1]) * r[S * 2], r[S * 2 + 1] = w), p--);
  }
}, ig = (e, i, r) => {
  const a = new Array(dn + 1);
  let o = 0, u, c;
  for (u = 1; u <= dn; u++)
    o = o + r[u - 1] << 1, a[u] = o;
  for (c = 0; c <= i; c++) {
    let d = e[c * 2 + 1];
    d !== 0 && (e[c * 2] = ng(a[d]++, d));
  }
}, iT = () => {
  let e, i, r, a, o;
  const u = new Array(dn + 1);
  for (r = 0, a = 0; a < Gf - 1; a++)
    for (Xf[a] = r, e = 0; e < 1 << rf[a]; e++)
      Di[r++] = a;
  for (Di[r - 1] = a, o = 0, a = 0; a < 16; a++)
    for (ts[a] = o, e = 0; e < 1 << ja[a]; e++)
      Li[o++] = a;
  for (o >>= 7; a < Zn; a++)
    for (ts[a] = o << 7, e = 0; e < 1 << ja[a] - 7; e++)
      Li[256 + o++] = a;
  for (i = 0; i <= dn; i++)
    u[i] = 0;
  for (e = 0; e <= 143; )
    Lr[e * 2 + 1] = 8, e++, u[8]++;
  for (; e <= 255; )
    Lr[e * 2 + 1] = 9, e++, u[9]++;
  for (; e <= 279; )
    Lr[e * 2 + 1] = 7, e++, u[7]++;
  for (; e <= 287; )
    Lr[e * 2 + 1] = 8, e++, u[8]++;
  for (ig(Lr, Ni + 1, u), e = 0; e < Zn; e++)
    Ri[e * 2 + 1] = 5, Ri[e * 2] = ng(e, 5);
  Qp = new wu(Lr, rf, Fi + 1, Ni, dn), eg = new wu(Ri, ja, 0, Zn, dn), tg = new wu(new Array(0), eT, 0, Kf, Qx);
}, ag = (e) => {
  let i;
  for (i = 0; i < Ni; i++)
    e.dyn_ltree[i * 2] = 0;
  for (i = 0; i < Zn; i++)
    e.dyn_dtree[i * 2] = 0;
  for (i = 0; i < Kf; i++)
    e.bl_tree[i * 2] = 0;
  e.dyn_ltree[Wf * 2] = 1, e.opt_len = e.static_len = 0, e.sym_next = e.matches = 0;
}, sg = (e) => {
  e.bi_valid > 8 ? Pi(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf), e.bi_buf = 0, e.bi_valid = 0;
}, Wh = (e, i, r, a) => {
  const o = i * 2, u = r * 2;
  return e[o] < e[u] || e[o] === e[u] && a[i] <= a[r];
}, mu = (e, i, r) => {
  const a = e.heap[r];
  let o = r << 1;
  for (; o <= e.heap_len && (o < e.heap_len && Wh(i, e.heap[o + 1], e.heap[o], e.depth) && o++, !Wh(i, a, e.heap[o], e.depth)); )
    e.heap[r] = e.heap[o], r = o, o <<= 1;
  e.heap[r] = a;
}, Xh = (e, i, r) => {
  let a, o, u = 0, c, d;
  if (e.sym_next !== 0)
    do
      a = e.pending_buf[e.sym_buf + u++] & 255, a += (e.pending_buf[e.sym_buf + u++] & 255) << 8, o = e.pending_buf[e.sym_buf + u++], a === 0 ? cr(e, o, i) : (c = Di[o], cr(e, c + Fi + 1, i), d = rf[c], d !== 0 && (o -= Xf[c], xt(e, o, d)), a--, c = rg(a), cr(e, c, r), d = ja[c], d !== 0 && (a -= ts[c], xt(e, a, d)));
    while (u < e.sym_next);
  cr(e, Wf, i);
}, nf = (e, i) => {
  const r = i.dyn_tree, a = i.stat_desc.static_tree, o = i.stat_desc.has_stree, u = i.stat_desc.elems;
  let c, d, g = -1, f;
  for (e.heap_len = 0, e.heap_max = Zp, c = 0; c < u; c++)
    r[c * 2] !== 0 ? (e.heap[++e.heap_len] = g = c, e.depth[c] = 0) : r[c * 2 + 1] = 0;
  for (; e.heap_len < 2; )
    f = e.heap[++e.heap_len] = g < 2 ? ++g : 0, r[f * 2] = 1, e.depth[f] = 0, e.opt_len--, o && (e.static_len -= a[f * 2 + 1]);
  for (i.max_code = g, c = e.heap_len >> 1; c >= 1; c--)
    mu(e, r, c);
  f = u;
  do
    c = e.heap[
      1
      /*SMALLEST*/
    ], e.heap[
      1
      /*SMALLEST*/
    ] = e.heap[e.heap_len--], mu(
      e,
      r,
      1
      /*SMALLEST*/
    ), d = e.heap[
      1
      /*SMALLEST*/
    ], e.heap[--e.heap_max] = c, e.heap[--e.heap_max] = d, r[f * 2] = r[c * 2] + r[d * 2], e.depth[f] = (e.depth[c] >= e.depth[d] ? e.depth[c] : e.depth[d]) + 1, r[c * 2 + 1] = r[d * 2 + 1] = f, e.heap[
      1
      /*SMALLEST*/
    ] = f++, mu(
      e,
      r,
      1
      /*SMALLEST*/
    );
  while (e.heap_len >= 2);
  e.heap[--e.heap_max] = e.heap[
    1
    /*SMALLEST*/
  ], nT(e, i), ig(r, g, e.bl_count);
}, Zh = (e, i, r) => {
  let a, o = -1, u, c = i[0 * 2 + 1], d = 0, g = 7, f = 4;
  for (c === 0 && (g = 138, f = 3), i[(r + 1) * 2 + 1] = 65535, a = 0; a <= r; a++)
    u = c, c = i[(a + 1) * 2 + 1], !(++d < g && u === c) && (d < f ? e.bl_tree[u * 2] += d : u !== 0 ? (u !== o && e.bl_tree[u * 2]++, e.bl_tree[jp * 2]++) : d <= 10 ? e.bl_tree[Vp * 2]++ : e.bl_tree[Jp * 2]++, d = 0, o = u, c === 0 ? (g = 138, f = 3) : u === c ? (g = 6, f = 3) : (g = 7, f = 4));
}, jh = (e, i, r) => {
  let a, o = -1, u, c = i[0 * 2 + 1], d = 0, g = 7, f = 4;
  for (c === 0 && (g = 138, f = 3), a = 0; a <= r; a++)
    if (u = c, c = i[(a + 1) * 2 + 1], !(++d < g && u === c)) {
      if (d < f)
        do
          cr(e, u, e.bl_tree);
        while (--d !== 0);
      else
        u !== 0 ? (u !== o && (cr(e, u, e.bl_tree), d--), cr(e, jp, e.bl_tree), xt(e, d - 3, 2)) : d <= 10 ? (cr(e, Vp, e.bl_tree), xt(e, d - 3, 3)) : (cr(e, Jp, e.bl_tree), xt(e, d - 11, 7));
      d = 0, o = u, c === 0 ? (g = 138, f = 3) : u === c ? (g = 6, f = 3) : (g = 7, f = 4);
    }
}, aT = (e) => {
  let i;
  for (Zh(e, e.dyn_ltree, e.l_desc.max_code), Zh(e, e.dyn_dtree, e.d_desc.max_code), nf(e, e.bl_desc), i = Kf - 1; i >= 3 && e.bl_tree[Yp[i] * 2 + 1] === 0; i--)
    ;
  return e.opt_len += 3 * (i + 1) + 5 + 5 + 4, i;
}, sT = (e, i, r, a) => {
  let o;
  for (xt(e, i - 257, 5), xt(e, r - 1, 5), xt(e, a - 4, 4), o = 0; o < a; o++)
    xt(e, e.bl_tree[Yp[o] * 2 + 1], 3);
  jh(e, e.dyn_ltree, i - 1), jh(e, e.dyn_dtree, r - 1);
}, oT = (e) => {
  let i = 4093624447, r;
  for (r = 0; r <= 31; r++, i >>>= 1)
    if (i & 1 && e.dyn_ltree[r * 2] !== 0)
      return Gh;
  if (e.dyn_ltree[9 * 2] !== 0 || e.dyn_ltree[10 * 2] !== 0 || e.dyn_ltree[13 * 2] !== 0)
    return Kh;
  for (r = 32; r < Fi; r++)
    if (e.dyn_ltree[r * 2] !== 0)
      return Kh;
  return Gh;
};
let Vh = !1;
const uT = (e) => {
  Vh || (iT(), Vh = !0), e.l_desc = new yu(e.dyn_ltree, Qp), e.d_desc = new yu(e.dyn_dtree, eg), e.bl_desc = new yu(e.bl_tree, tg), e.bi_buf = 0, e.bi_valid = 0, ag(e);
}, og = (e, i, r, a) => {
  xt(e, (jx << 1) + (a ? 1 : 0), 3), sg(e), Pi(e, r), Pi(e, ~r), r && e.pending_buf.set(e.window.subarray(i, i + r), e.pending), e.pending += r;
}, fT = (e) => {
  xt(e, Xp << 1, 3), cr(e, Wf, Lr), rT(e);
}, lT = (e, i, r, a) => {
  let o, u, c = 0;
  e.level > 0 ? (e.strm.data_type === Zx && (e.strm.data_type = oT(e)), nf(e, e.l_desc), nf(e, e.d_desc), c = aT(e), o = e.opt_len + 3 + 7 >>> 3, u = e.static_len + 3 + 7 >>> 3, u <= o && (o = u)) : o = u = r + 5, r + 4 <= o && i !== -1 ? og(e, i, r, a) : e.strategy === Xx || u === o ? (xt(e, (Xp << 1) + (a ? 1 : 0), 3), Xh(e, Lr, Ri)) : (xt(e, (Vx << 1) + (a ? 1 : 0), 3), sT(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, c + 1), Xh(e, e.dyn_ltree, e.dyn_dtree)), ag(e), a && sg(e);
}, cT = (e, i, r) => (e.pending_buf[e.sym_buf + e.sym_next++] = i, e.pending_buf[e.sym_buf + e.sym_next++] = i >> 8, e.pending_buf[e.sym_buf + e.sym_next++] = r, i === 0 ? e.dyn_ltree[r * 2]++ : (e.matches++, i--, e.dyn_ltree[(Di[r] + Fi + 1) * 2]++, e.dyn_dtree[rg(i) * 2]++), e.sym_next === e.sym_end);
ei._tr_init = uT;
ei._tr_stored_block = og;
ei._tr_flush_block = lT;
ei._tr_tally = cT;
ei._tr_align = fT;
const dT = (e, i, r, a) => {
  let o = e & 65535 | 0, u = e >>> 16 & 65535 | 0, c = 0;
  for (; r !== 0; ) {
    c = r > 2e3 ? 2e3 : r, r -= c;
    do
      o = o + i[a++] | 0, u = u + o | 0;
    while (--c);
    o %= 65521, u %= 65521;
  }
  return o | u << 16 | 0;
};
var ug = dT;
const hT = () => {
  let e, i = [];
  for (var r = 0; r < 256; r++) {
    e = r;
    for (var a = 0; a < 8; a++)
      e = e & 1 ? 3988292384 ^ e >>> 1 : e >>> 1;
    i[r] = e;
  }
  return i;
}, pT = new Uint32Array(hT()), gT = (e, i, r, a) => {
  const o = pT, u = a + r;
  e ^= -1;
  for (let c = a; c < u; c++)
    e = e >>> 8 ^ o[(e ^ i[c]) & 255];
  return e ^ -1;
};
var fg = gT, Zf = {
  2: "need dictionary",
  /* Z_NEED_DICT       2  */
  1: "stream end",
  /* Z_STREAM_END      1  */
  0: "",
  /* Z_OK              0  */
  "-1": "file error",
  /* Z_ERRNO         (-1) */
  "-2": "stream error",
  /* Z_STREAM_ERROR  (-2) */
  "-3": "data error",
  /* Z_DATA_ERROR    (-3) */
  "-4": "insufficient memory",
  /* Z_MEM_ERROR     (-4) */
  "-5": "buffer error",
  /* Z_BUF_ERROR     (-5) */
  "-6": "incompatible version"
  /* Z_VERSION_ERROR (-6) */
}, yn = {
  /* Allowed flush values; see deflate() and inflate() below for details */
  Z_NO_FLUSH: 0,
  Z_PARTIAL_FLUSH: 1,
  Z_SYNC_FLUSH: 2,
  Z_FULL_FLUSH: 3,
  Z_FINISH: 4,
  Z_BLOCK: 5,
  Z_TREES: 6,
  /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */
  Z_OK: 0,
  Z_STREAM_END: 1,
  Z_NEED_DICT: 2,
  Z_ERRNO: -1,
  Z_STREAM_ERROR: -2,
  Z_DATA_ERROR: -3,
  Z_MEM_ERROR: -4,
  Z_BUF_ERROR: -5,
  //Z_VERSION_ERROR: -6,
  /* compression levels */
  Z_NO_COMPRESSION: 0,
  Z_BEST_SPEED: 1,
  Z_BEST_COMPRESSION: 9,
  Z_DEFAULT_COMPRESSION: -1,
  Z_FILTERED: 1,
  Z_HUFFMAN_ONLY: 2,
  Z_RLE: 3,
  Z_FIXED: 4,
  Z_DEFAULT_STRATEGY: 0,
  /* Possible values of the data_type field (though see inflate()) */
  Z_BINARY: 0,
  Z_TEXT: 1,
  //Z_ASCII:                1, // = Z_TEXT (deprecated)
  Z_UNKNOWN: 2,
  /* The deflate compression method */
  Z_DEFLATED: 8
  //Z_NULL:                 null // Use -1 or null inline, depending on var type
};
const { _tr_init: _T, _tr_stored_block: af, _tr_flush_block: vT, _tr_tally: jr, _tr_align: wT } = ei, lg = ug, Kr = fg, yT = Zf, {
  Z_NO_FLUSH: Vr,
  Z_PARTIAL_FLUSH: mT,
  Z_FULL_FLUSH: AT,
  Z_FINISH: jt,
  Z_BLOCK: Jh,
  Z_OK: at,
  Z_STREAM_END: Yh,
  Z_STREAM_ERROR: dr,
  Z_DATA_ERROR: ET,
  Z_BUF_ERROR: Au,
  Z_DEFAULT_COMPRESSION: bT,
  Z_FILTERED: ST,
  Z_HUFFMAN_ONLY: ka,
  Z_RLE: xT,
  Z_FIXED: TT,
  Z_DEFAULT_STRATEGY: RT,
  Z_UNKNOWN: OT,
  Z_DEFLATED: _s
} = yn, CT = 9, NT = 15, LT = 8, DT = 29, PT = 256, sf = PT + 1 + DT, BT = 30, kT = 19, IT = 2 * sf + 1, UT = 15, xe = 3, Zr = 258, hr = Zr + xe + 1, FT = 32, Vn = 42, jf = 57, of = 69, uf = 73, ff = 91, lf = 103, hn = 113, xi = 666, wt = 1, ri = 2, gn = 3, ni = 4, MT = 3, pn = (e, i) => (e.msg = yT[i], i), Qh = (e) => e * 2 - (e > 4 ? 9 : 0), Xr = (e) => {
  let i = e.length;
  for (; --i >= 0; )
    e[i] = 0;
}, $T = (e) => {
  let i, r, a, o = e.w_size;
  i = e.hash_size, a = i;
  do
    r = e.head[--a], e.head[a] = r >= o ? r - o : 0;
  while (--i);
  i = o, a = i;
  do
    r = e.prev[--a], e.prev[a] = r >= o ? r - o : 0;
  while (--i);
};
let HT = (e, i, r) => (i << e.hash_shift ^ r) & e.hash_mask, Jr = HT;
const kt = (e) => {
  const i = e.state;
  let r = i.pending;
  r > e.avail_out && (r = e.avail_out), r !== 0 && (e.output.set(i.pending_buf.subarray(i.pending_out, i.pending_out + r), e.next_out), e.next_out += r, i.pending_out += r, e.total_out += r, e.avail_out -= r, i.pending -= r, i.pending === 0 && (i.pending_out = 0));
}, Ut = (e, i) => {
  vT(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, i), e.block_start = e.strstart, kt(e.strm);
}, Ce = (e, i) => {
  e.pending_buf[e.pending++] = i;
}, Si = (e, i) => {
  e.pending_buf[e.pending++] = i >>> 8 & 255, e.pending_buf[e.pending++] = i & 255;
}, cf = (e, i, r, a) => {
  let o = e.avail_in;
  return o > a && (o = a), o === 0 ? 0 : (e.avail_in -= o, i.set(e.input.subarray(e.next_in, e.next_in + o), r), e.state.wrap === 1 ? e.adler = lg(e.adler, i, o, r) : e.state.wrap === 2 && (e.adler = Kr(e.adler, i, o, r)), e.next_in += o, e.total_in += o, o);
}, cg = (e, i) => {
  let r = e.max_chain_length, a = e.strstart, o, u, c = e.prev_length, d = e.nice_match;
  const g = e.strstart > e.w_size - hr ? e.strstart - (e.w_size - hr) : 0, f = e.window, p = e.w_mask, S = e.prev, w = e.strstart + Zr;
  let m = f[a + c - 1], I = f[a + c];
  e.prev_length >= e.good_match && (r >>= 2), d > e.lookahead && (d = e.lookahead);
  do
    if (o = i, !(f[o + c] !== I || f[o + c - 1] !== m || f[o] !== f[a] || f[++o] !== f[a + 1])) {
      a += 2, o++;
      do
        ;
      while (f[++a] === f[++o] && f[++a] === f[++o] && f[++a] === f[++o] && f[++a] === f[++o] && f[++a] === f[++o] && f[++a] === f[++o] && f[++a] === f[++o] && f[++a] === f[++o] && a < w);
      if (u = Zr - (w - a), a = w - Zr, u > c) {
        if (e.match_start = i, c = u, u >= d)
          break;
        m = f[a + c - 1], I = f[a + c];
      }
    }
  while ((i = S[i & p]) > g && --r !== 0);
  return c <= e.lookahead ? c : e.lookahead;
}, Jn = (e) => {
  const i = e.w_size;
  let r, a, o;
  do {
    if (a = e.window_size - e.lookahead - e.strstart, e.strstart >= i + (i - hr) && (e.window.set(e.window.subarray(i, i + i - a), 0), e.match_start -= i, e.strstart -= i, e.block_start -= i, e.insert > e.strstart && (e.insert = e.strstart), $T(e), a += i), e.strm.avail_in === 0)
      break;
    if (r = cf(e.strm, e.window, e.strstart + e.lookahead, a), e.lookahead += r, e.lookahead + e.insert >= xe)
      for (o = e.strstart - e.insert, e.ins_h = e.window[o], e.ins_h = Jr(e, e.ins_h, e.window[o + 1]); e.insert && (e.ins_h = Jr(e, e.ins_h, e.window[o + xe - 1]), e.prev[o & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = o, o++, e.insert--, !(e.lookahead + e.insert < xe)); )
        ;
  } while (e.lookahead < hr && e.strm.avail_in !== 0);
}, dg = (e, i) => {
  let r = e.pending_buf_size - 5 > e.w_size ? e.w_size : e.pending_buf_size - 5, a, o, u, c = 0, d = e.strm.avail_in;
  do {
    if (a = 65535, u = e.bi_valid + 42 >> 3, e.strm.avail_out < u || (u = e.strm.avail_out - u, o = e.strstart - e.block_start, a > o + e.strm.avail_in && (a = o + e.strm.avail_in), a > u && (a = u), a < r && (a === 0 && i !== jt || i === Vr || a !== o + e.strm.avail_in)))
      break;
    c = i === jt && a === o + e.strm.avail_in ? 1 : 0, af(e, 0, 0, c), e.pending_buf[e.pending - 4] = a, e.pending_buf[e.pending - 3] = a >> 8, e.pending_buf[e.pending - 2] = ~a, e.pending_buf[e.pending - 1] = ~a >> 8, kt(e.strm), o && (o > a && (o = a), e.strm.output.set(e.window.subarray(e.block_start, e.block_start + o), e.strm.next_out), e.strm.next_out += o, e.strm.avail_out -= o, e.strm.total_out += o, e.block_start += o, a -= o), a && (cf(e.strm, e.strm.output, e.strm.next_out, a), e.strm.next_out += a, e.strm.avail_out -= a, e.strm.total_out += a);
  } while (c === 0);
  return d -= e.strm.avail_in, d && (d >= e.w_size ? (e.matches = 2, e.window.set(e.strm.input.subarray(e.strm.next_in - e.w_size, e.strm.next_in), 0), e.strstart = e.w_size, e.insert = e.strstart) : (e.window_size - e.strstart <= d && (e.strstart -= e.w_size, e.window.set(e.window.subarray(e.w_size, e.w_size + e.strstart), 0), e.matches < 2 && e.matches++, e.insert > e.strstart && (e.insert = e.strstart)), e.window.set(e.strm.input.subarray(e.strm.next_in - d, e.strm.next_in), e.strstart), e.strstart += d, e.insert += d > e.w_size - e.insert ? e.w_size - e.insert : d), e.block_start = e.strstart), e.high_water < e.strstart && (e.high_water = e.strstart), c ? ni : i !== Vr && i !== jt && e.strm.avail_in === 0 && e.strstart === e.block_start ? ri : (u = e.window_size - e.strstart, e.strm.avail_in > u && e.block_start >= e.w_size && (e.block_start -= e.w_size, e.strstart -= e.w_size, e.window.set(e.window.subarray(e.w_size, e.w_size + e.strstart), 0), e.matches < 2 && e.matches++, u += e.w_size, e.insert > e.strstart && (e.insert = e.strstart)), u > e.strm.avail_in && (u = e.strm.avail_in), u && (cf(e.strm, e.window, e.strstart, u), e.strstart += u, e.insert += u > e.w_size - e.insert ? e.w_size - e.insert : u), e.high_water < e.strstart && (e.high_water = e.strstart), u = e.bi_valid + 42 >> 3, u = e.pending_buf_size - u > 65535 ? 65535 : e.pending_buf_size - u, r = u > e.w_size ? e.w_size : u, o = e.strstart - e.block_start, (o >= r || (o || i === jt) && i !== Vr && e.strm.avail_in === 0 && o <= u) && (a = o > u ? u : o, c = i === jt && e.strm.avail_in === 0 && a === o ? 1 : 0, af(e, e.block_start, a, c), e.block_start += a, kt(e.strm)), c ? gn : wt);
}, Eu = (e, i) => {
  let r, a;
  for (; ; ) {
    if (e.lookahead < hr) {
      if (Jn(e), e.lookahead < hr && i === Vr)
        return wt;
      if (e.lookahead === 0)
        break;
    }
    if (r = 0, e.lookahead >= xe && (e.ins_h = Jr(e, e.ins_h, e.window[e.strstart + xe - 1]), r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), r !== 0 && e.strstart - r <= e.w_size - hr && (e.match_length = cg(e, r)), e.match_length >= xe)
      if (a = jr(e, e.strstart - e.match_start, e.match_length - xe), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= xe) {
        e.match_length--;
        do
          e.strstart++, e.ins_h = Jr(e, e.ins_h, e.window[e.strstart + xe - 1]), r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart;
        while (--e.match_length !== 0);
        e.strstart++;
      } else
        e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], e.ins_h = Jr(e, e.ins_h, e.window[e.strstart + 1]);
    else
      a = jr(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
    if (a && (Ut(e, !1), e.strm.avail_out === 0))
      return wt;
  }
  return e.insert = e.strstart < xe - 1 ? e.strstart : xe - 1, i === jt ? (Ut(e, !0), e.strm.avail_out === 0 ? gn : ni) : e.sym_next && (Ut(e, !1), e.strm.avail_out === 0) ? wt : ri;
}, qn = (e, i) => {
  let r, a, o;
  for (; ; ) {
    if (e.lookahead < hr) {
      if (Jn(e), e.lookahead < hr && i === Vr)
        return wt;
      if (e.lookahead === 0)
        break;
    }
    if (r = 0, e.lookahead >= xe && (e.ins_h = Jr(e, e.ins_h, e.window[e.strstart + xe - 1]), r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = xe - 1, r !== 0 && e.prev_length < e.max_lazy_match && e.strstart - r <= e.w_size - hr && (e.match_length = cg(e, r), e.match_length <= 5 && (e.strategy === ST || e.match_length === xe && e.strstart - e.match_start > 4096) && (e.match_length = xe - 1)), e.prev_length >= xe && e.match_length <= e.prev_length) {
      o = e.strstart + e.lookahead - xe, a = jr(e, e.strstart - 1 - e.prev_match, e.prev_length - xe), e.lookahead -= e.prev_length - 1, e.prev_length -= 2;
      do
        ++e.strstart <= o && (e.ins_h = Jr(e, e.ins_h, e.window[e.strstart + xe - 1]), r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart);
      while (--e.prev_length !== 0);
      if (e.match_available = 0, e.match_length = xe - 1, e.strstart++, a && (Ut(e, !1), e.strm.avail_out === 0))
        return wt;
    } else if (e.match_available) {
      if (a = jr(e, 0, e.window[e.strstart - 1]), a && Ut(e, !1), e.strstart++, e.lookahead--, e.strm.avail_out === 0)
        return wt;
    } else
      e.match_available = 1, e.strstart++, e.lookahead--;
  }
  return e.match_available && (a = jr(e, 0, e.window[e.strstart - 1]), e.match_available = 0), e.insert = e.strstart < xe - 1 ? e.strstart : xe - 1, i === jt ? (Ut(e, !0), e.strm.avail_out === 0 ? gn : ni) : e.sym_next && (Ut(e, !1), e.strm.avail_out === 0) ? wt : ri;
}, qT = (e, i) => {
  let r, a, o, u;
  const c = e.window;
  for (; ; ) {
    if (e.lookahead <= Zr) {
      if (Jn(e), e.lookahead <= Zr && i === Vr)
        return wt;
      if (e.lookahead === 0)
        break;
    }
    if (e.match_length = 0, e.lookahead >= xe && e.strstart > 0 && (o = e.strstart - 1, a = c[o], a === c[++o] && a === c[++o] && a === c[++o])) {
      u = e.strstart + Zr;
      do
        ;
      while (a === c[++o] && a === c[++o] && a === c[++o] && a === c[++o] && a === c[++o] && a === c[++o] && a === c[++o] && a === c[++o] && o < u);
      e.match_length = Zr - (u - o), e.match_length > e.lookahead && (e.match_length = e.lookahead);
    }
    if (e.match_length >= xe ? (r = jr(e, 1, e.match_length - xe), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (r = jr(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), r && (Ut(e, !1), e.strm.avail_out === 0))
      return wt;
  }
  return e.insert = 0, i === jt ? (Ut(e, !0), e.strm.avail_out === 0 ? gn : ni) : e.sym_next && (Ut(e, !1), e.strm.avail_out === 0) ? wt : ri;
}, zT = (e, i) => {
  let r;
  for (; ; ) {
    if (e.lookahead === 0 && (Jn(e), e.lookahead === 0)) {
      if (i === Vr)
        return wt;
      break;
    }
    if (e.match_length = 0, r = jr(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, r && (Ut(e, !1), e.strm.avail_out === 0))
      return wt;
  }
  return e.insert = 0, i === jt ? (Ut(e, !0), e.strm.avail_out === 0 ? gn : ni) : e.sym_next && (Ut(e, !1), e.strm.avail_out === 0) ? wt : ri;
};
function ur(e, i, r, a, o) {
  this.good_length = e, this.max_lazy = i, this.nice_length = r, this.max_chain = a, this.func = o;
}
const Ti = [
  /*      good lazy nice chain */
  new ur(0, 0, 0, 0, dg),
  /* 0 store only */
  new ur(4, 4, 8, 4, Eu),
  /* 1 max speed, no lazy matches */
  new ur(4, 5, 16, 8, Eu),
  /* 2 */
  new ur(4, 6, 32, 32, Eu),
  /* 3 */
  new ur(4, 4, 16, 16, qn),
  /* 4 lazy matches */
  new ur(8, 16, 32, 32, qn),
  /* 5 */
  new ur(8, 16, 128, 128, qn),
  /* 6 */
  new ur(8, 32, 128, 256, qn),
  /* 7 */
  new ur(32, 128, 258, 1024, qn),
  /* 8 */
  new ur(32, 258, 258, 4096, qn)
  /* 9 max compression */
], GT = (e) => {
  e.window_size = 2 * e.w_size, Xr(e.head), e.max_lazy_match = Ti[e.level].max_lazy, e.good_match = Ti[e.level].good_length, e.nice_match = Ti[e.level].nice_length, e.max_chain_length = Ti[e.level].max_chain, e.strstart = 0, e.block_start = 0, e.lookahead = 0, e.insert = 0, e.match_length = e.prev_length = xe - 1, e.match_available = 0, e.ins_h = 0;
};
function KT() {
  this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = _s, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new Uint16Array(IT * 2), this.dyn_dtree = new Uint16Array((2 * BT + 1) * 2), this.bl_tree = new Uint16Array((2 * kT + 1) * 2), Xr(this.dyn_ltree), Xr(this.dyn_dtree), Xr(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new Uint16Array(UT + 1), this.heap = new Uint16Array(2 * sf + 1), Xr(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new Uint16Array(2 * sf + 1), Xr(this.depth), this.sym_buf = 0, this.lit_bufsize = 0, this.sym_next = 0, this.sym_end = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
}
const Mi = (e) => {
  if (!e)
    return 1;
  const i = e.state;
  return !i || i.strm !== e || i.status !== Vn && //#ifdef GZIP
  i.status !== jf && //#endif
  i.status !== of && i.status !== uf && i.status !== ff && i.status !== lf && i.status !== hn && i.status !== xi ? 1 : 0;
}, hg = (e) => {
  if (Mi(e))
    return pn(e, dr);
  e.total_in = e.total_out = 0, e.data_type = OT;
  const i = e.state;
  return i.pending = 0, i.pending_out = 0, i.wrap < 0 && (i.wrap = -i.wrap), i.status = //#ifdef GZIP
  i.wrap === 2 ? jf : (
    //#endif
    i.wrap ? Vn : hn
  ), e.adler = i.wrap === 2 ? 0 : 1, i.last_flush = -2, _T(i), at;
}, pg = (e) => {
  const i = hg(e);
  return i === at && GT(e.state), i;
}, WT = (e, i) => Mi(e) || e.state.wrap !== 2 ? dr : (e.state.gzhead = i, at), gg = (e, i, r, a, o, u) => {
  if (!e)
    return dr;
  let c = 1;
  if (i === bT && (i = 6), a < 0 ? (c = 0, a = -a) : a > 15 && (c = 2, a -= 16), o < 1 || o > CT || r !== _s || a < 8 || a > 15 || i < 0 || i > 9 || u < 0 || u > TT || a === 8 && c !== 1)
    return pn(e, dr);
  a === 8 && (a = 9);
  const d = new KT();
  return e.state = d, d.strm = e, d.status = Vn, d.wrap = c, d.gzhead = null, d.w_bits = a, d.w_size = 1 << d.w_bits, d.w_mask = d.w_size - 1, d.hash_bits = o + 7, d.hash_size = 1 << d.hash_bits, d.hash_mask = d.hash_size - 1, d.hash_shift = ~~((d.hash_bits + xe - 1) / xe), d.window = new Uint8Array(d.w_size * 2), d.head = new Uint16Array(d.hash_size), d.prev = new Uint16Array(d.w_size), d.lit_bufsize = 1 << o + 6, d.pending_buf_size = d.lit_bufsize * 4, d.pending_buf = new Uint8Array(d.pending_buf_size), d.sym_buf = d.lit_bufsize, d.sym_end = (d.lit_bufsize - 1) * 3, d.level = i, d.strategy = u, d.method = r, pg(e);
}, XT = (e, i) => gg(e, i, _s, NT, LT, RT), ZT = (e, i) => {
  if (Mi(e) || i > Jh || i < 0)
    return e ? pn(e, dr) : dr;
  const r = e.state;
  if (!e.output || e.avail_in !== 0 && !e.input || r.status === xi && i !== jt)
    return pn(e, e.avail_out === 0 ? Au : dr);
  const a = r.last_flush;
  if (r.last_flush = i, r.pending !== 0) {
    if (kt(e), e.avail_out === 0)
      return r.last_flush = -1, at;
  } else if (e.avail_in === 0 && Qh(i) <= Qh(a) && i !== jt)
    return pn(e, Au);
  if (r.status === xi && e.avail_in !== 0)
    return pn(e, Au);
  if (r.status === Vn && r.wrap === 0 && (r.status = hn), r.status === Vn) {
    let o = _s + (r.w_bits - 8 << 4) << 8, u = -1;
    if (r.strategy >= ka || r.level < 2 ? u = 0 : r.level < 6 ? u = 1 : r.level === 6 ? u = 2 : u = 3, o |= u << 6, r.strstart !== 0 && (o |= FT), o += 31 - o % 31, Si(r, o), r.strstart !== 0 && (Si(r, e.adler >>> 16), Si(r, e.adler & 65535)), e.adler = 1, r.status = hn, kt(e), r.pending !== 0)
      return r.last_flush = -1, at;
  }
  if (r.status === jf) {
    if (e.adler = 0, Ce(r, 31), Ce(r, 139), Ce(r, 8), r.gzhead)
      Ce(
        r,
        (r.gzhead.text ? 1 : 0) + (r.gzhead.hcrc ? 2 : 0) + (r.gzhead.extra ? 4 : 0) + (r.gzhead.name ? 8 : 0) + (r.gzhead.comment ? 16 : 0)
      ), Ce(r, r.gzhead.time & 255), Ce(r, r.gzhead.time >> 8 & 255), Ce(r, r.gzhead.time >> 16 & 255), Ce(r, r.gzhead.time >> 24 & 255), Ce(r, r.level === 9 ? 2 : r.strategy >= ka || r.level < 2 ? 4 : 0), Ce(r, r.gzhead.os & 255), r.gzhead.extra && r.gzhead.extra.length && (Ce(r, r.gzhead.extra.length & 255), Ce(r, r.gzhead.extra.length >> 8 & 255)), r.gzhead.hcrc && (e.adler = Kr(e.adler, r.pending_buf, r.pending, 0)), r.gzindex = 0, r.status = of;
    else if (Ce(r, 0), Ce(r, 0), Ce(r, 0), Ce(r, 0), Ce(r, 0), Ce(r, r.level === 9 ? 2 : r.strategy >= ka || r.level < 2 ? 4 : 0), Ce(r, MT), r.status = hn, kt(e), r.pending !== 0)
      return r.last_flush = -1, at;
  }
  if (r.status === of) {
    if (r.gzhead.extra) {
      let o = r.pending, u = (r.gzhead.extra.length & 65535) - r.gzindex;
      for (; r.pending + u > r.pending_buf_size; ) {
        let d = r.pending_buf_size - r.pending;
        if (r.pending_buf.set(r.gzhead.extra.subarray(r.gzindex, r.gzindex + d), r.pending), r.pending = r.pending_buf_size, r.gzhead.hcrc && r.pending > o && (e.adler = Kr(e.adler, r.pending_buf, r.pending - o, o)), r.gzindex += d, kt(e), r.pending !== 0)
          return r.last_flush = -1, at;
        o = 0, u -= d;
      }
      let c = new Uint8Array(r.gzhead.extra);
      r.pending_buf.set(c.subarray(r.gzindex, r.gzindex + u), r.pending), r.pending += u, r.gzhead.hcrc && r.pending > o && (e.adler = Kr(e.adler, r.pending_buf, r.pending - o, o)), r.gzindex = 0;
    }
    r.status = uf;
  }
  if (r.status === uf) {
    if (r.gzhead.name) {
      let o = r.pending, u;
      do {
        if (r.pending === r.pending_buf_size) {
          if (r.gzhead.hcrc && r.pending > o && (e.adler = Kr(e.adler, r.pending_buf, r.pending - o, o)), kt(e), r.pending !== 0)
            return r.last_flush = -1, at;
          o = 0;
        }
        r.gzindex < r.gzhead.name.length ? u = r.gzhead.name.charCodeAt(r.gzindex++) & 255 : u = 0, Ce(r, u);
      } while (u !== 0);
      r.gzhead.hcrc && r.pending > o && (e.adler = Kr(e.adler, r.pending_buf, r.pending - o, o)), r.gzindex = 0;
    }
    r.status = ff;
  }
  if (r.status === ff) {
    if (r.gzhead.comment) {
      let o = r.pending, u;
      do {
        if (r.pending === r.pending_buf_size) {
          if (r.gzhead.hcrc && r.pending > o && (e.adler = Kr(e.adler, r.pending_buf, r.pending - o, o)), kt(e), r.pending !== 0)
            return r.last_flush = -1, at;
          o = 0;
        }
        r.gzindex < r.gzhead.comment.length ? u = r.gzhead.comment.charCodeAt(r.gzindex++) & 255 : u = 0, Ce(r, u);
      } while (u !== 0);
      r.gzhead.hcrc && r.pending > o && (e.adler = Kr(e.adler, r.pending_buf, r.pending - o, o));
    }
    r.status = lf;
  }
  if (r.status === lf) {
    if (r.gzhead.hcrc) {
      if (r.pending + 2 > r.pending_buf_size && (kt(e), r.pending !== 0))
        return r.last_flush = -1, at;
      Ce(r, e.adler & 255), Ce(r, e.adler >> 8 & 255), e.adler = 0;
    }
    if (r.status = hn, kt(e), r.pending !== 0)
      return r.last_flush = -1, at;
  }
  if (e.avail_in !== 0 || r.lookahead !== 0 || i !== Vr && r.status !== xi) {
    let o = r.level === 0 ? dg(r, i) : r.strategy === ka ? zT(r, i) : r.strategy === xT ? qT(r, i) : Ti[r.level].func(r, i);
    if ((o === gn || o === ni) && (r.status = xi), o === wt || o === gn)
      return e.avail_out === 0 && (r.last_flush = -1), at;
    if (o === ri && (i === mT ? wT(r) : i !== Jh && (af(r, 0, 0, !1), i === AT && (Xr(r.head), r.lookahead === 0 && (r.strstart = 0, r.block_start = 0, r.insert = 0))), kt(e), e.avail_out === 0))
      return r.last_flush = -1, at;
  }
  return i !== jt ? at : r.wrap <= 0 ? Yh : (r.wrap === 2 ? (Ce(r, e.adler & 255), Ce(r, e.adler >> 8 & 255), Ce(r, e.adler >> 16 & 255), Ce(r, e.adler >> 24 & 255), Ce(r, e.total_in & 255), Ce(r, e.total_in >> 8 & 255), Ce(r, e.total_in >> 16 & 255), Ce(r, e.total_in >> 24 & 255)) : (Si(r, e.adler >>> 16), Si(r, e.adler & 65535)), kt(e), r.wrap > 0 && (r.wrap = -r.wrap), r.pending !== 0 ? at : Yh);
}, jT = (e) => {
  if (Mi(e))
    return dr;
  const i = e.state.status;
  return e.state = null, i === hn ? pn(e, ET) : at;
}, VT = (e, i) => {
  let r = i.length;
  if (Mi(e))
    return dr;
  const a = e.state, o = a.wrap;
  if (o === 2 || o === 1 && a.status !== Vn || a.lookahead)
    return dr;
  if (o === 1 && (e.adler = lg(e.adler, i, r, 0)), a.wrap = 0, r >= a.w_size) {
    o === 0 && (Xr(a.head), a.strstart = 0, a.block_start = 0, a.insert = 0);
    let g = new Uint8Array(a.w_size);
    g.set(i.subarray(r - a.w_size, r), 0), i = g, r = a.w_size;
  }
  const u = e.avail_in, c = e.next_in, d = e.input;
  for (e.avail_in = r, e.next_in = 0, e.input = i, Jn(a); a.lookahead >= xe; ) {
    let g = a.strstart, f = a.lookahead - (xe - 1);
    do
      a.ins_h = Jr(a, a.ins_h, a.window[g + xe - 1]), a.prev[g & a.w_mask] = a.head[a.ins_h], a.head[a.ins_h] = g, g++;
    while (--f);
    a.strstart = g, a.lookahead = xe - 1, Jn(a);
  }
  return a.strstart += a.lookahead, a.block_start = a.strstart, a.insert = a.lookahead, a.lookahead = 0, a.match_length = a.prev_length = xe - 1, a.match_available = 0, e.next_in = c, e.input = d, e.avail_in = u, a.wrap = o, at;
};
_r.deflateInit = XT;
_r.deflateInit2 = gg;
_r.deflateReset = pg;
_r.deflateResetKeep = hg;
_r.deflateSetHeader = WT;
_r.deflate = ZT;
_r.deflateEnd = jT;
_r.deflateSetDictionary = VT;
_r.deflateInfo = "pako deflate (from Nodeca project)";
var vs = {};
const JT = (e, i) => Object.prototype.hasOwnProperty.call(e, i);
vs.assign = function(e) {
  const i = Array.prototype.slice.call(arguments, 1);
  for (; i.length; ) {
    const r = i.shift();
    if (r) {
      if (typeof r != "object")
        throw new TypeError(r + "must be non-object");
      for (const a in r)
        JT(r, a) && (e[a] = r[a]);
    }
  }
  return e;
};
vs.flattenChunks = (e) => {
  let i = 0;
  for (let a = 0, o = e.length; a < o; a++)
    i += e[a].length;
  const r = new Uint8Array(i);
  for (let a = 0, o = 0, u = e.length; a < u; a++) {
    let c = e[a];
    r.set(c, o), o += c.length;
  }
  return r;
};
var $i = {};
let _g = !0;
try {
  String.fromCharCode.apply(null, new Uint8Array(1));
} catch {
  _g = !1;
}
const Bi = new Uint8Array(256);
for (let e = 0; e < 256; e++)
  Bi[e] = e >= 252 ? 6 : e >= 248 ? 5 : e >= 240 ? 4 : e >= 224 ? 3 : e >= 192 ? 2 : 1;
Bi[254] = Bi[254] = 1;
$i.string2buf = (e) => {
  if (typeof TextEncoder == "function" && TextEncoder.prototype.encode)
    return new TextEncoder().encode(e);
  let i, r, a, o, u, c = e.length, d = 0;
  for (o = 0; o < c; o++)
    r = e.charCodeAt(o), (r & 64512) === 55296 && o + 1 < c && (a = e.charCodeAt(o + 1), (a & 64512) === 56320 && (r = 65536 + (r - 55296 << 10) + (a - 56320), o++)), d += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;
  for (i = new Uint8Array(d), u = 0, o = 0; u < d; o++)
    r = e.charCodeAt(o), (r & 64512) === 55296 && o + 1 < c && (a = e.charCodeAt(o + 1), (a & 64512) === 56320 && (r = 65536 + (r - 55296 << 10) + (a - 56320), o++)), r < 128 ? i[u++] = r : r < 2048 ? (i[u++] = 192 | r >>> 6, i[u++] = 128 | r & 63) : r < 65536 ? (i[u++] = 224 | r >>> 12, i[u++] = 128 | r >>> 6 & 63, i[u++] = 128 | r & 63) : (i[u++] = 240 | r >>> 18, i[u++] = 128 | r >>> 12 & 63, i[u++] = 128 | r >>> 6 & 63, i[u++] = 128 | r & 63);
  return i;
};
const YT = (e, i) => {
  if (i < 65534 && e.subarray && _g)
    return String.fromCharCode.apply(null, e.length === i ? e : e.subarray(0, i));
  let r = "";
  for (let a = 0; a < i; a++)
    r += String.fromCharCode(e[a]);
  return r;
};
$i.buf2string = (e, i) => {
  const r = i || e.length;
  if (typeof TextDecoder == "function" && TextDecoder.prototype.decode)
    return new TextDecoder().decode(e.subarray(0, i));
  let a, o;
  const u = new Array(r * 2);
  for (o = 0, a = 0; a < r; ) {
    let c = e[a++];
    if (c < 128) {
      u[o++] = c;
      continue;
    }
    let d = Bi[c];
    if (d > 4) {
      u[o++] = 65533, a += d - 1;
      continue;
    }
    for (c &= d === 2 ? 31 : d === 3 ? 15 : 7; d > 1 && a < r; )
      c = c << 6 | e[a++] & 63, d--;
    if (d > 1) {
      u[o++] = 65533;
      continue;
    }
    c < 65536 ? u[o++] = c : (c -= 65536, u[o++] = 55296 | c >> 10 & 1023, u[o++] = 56320 | c & 1023);
  }
  return YT(u, o);
};
$i.utf8border = (e, i) => {
  i = i || e.length, i > e.length && (i = e.length);
  let r = i - 1;
  for (; r >= 0 && (e[r] & 192) === 128; )
    r--;
  return r < 0 || r === 0 ? i : r + Bi[e[r]] > i ? r : i;
};
function QT() {
  this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
}
var vg = QT;
const Oi = _r, wg = vs, yg = $i, df = Zf, eR = vg, mg = Object.prototype.toString, {
  Z_NO_FLUSH: tR,
  Z_SYNC_FLUSH: rR,
  Z_FULL_FLUSH: nR,
  Z_FINISH: iR,
  Z_OK: rs,
  Z_STREAM_END: aR,
  Z_DEFAULT_COMPRESSION: sR,
  Z_DEFAULT_STRATEGY: oR,
  Z_DEFLATED: uR
} = yn;
function Hi(e) {
  this.options = wg.assign({
    level: sR,
    method: uR,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: oR
  }, e || {});
  let i = this.options;
  i.raw && i.windowBits > 0 ? i.windowBits = -i.windowBits : i.gzip && i.windowBits > 0 && i.windowBits < 16 && (i.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new eR(), this.strm.avail_out = 0;
  let r = Oi.deflateInit2(
    this.strm,
    i.level,
    i.method,
    i.windowBits,
    i.memLevel,
    i.strategy
  );
  if (r !== rs)
    throw new Error(df[r]);
  if (i.header && Oi.deflateSetHeader(this.strm, i.header), i.dictionary) {
    let a;
    if (typeof i.dictionary == "string" ? a = yg.string2buf(i.dictionary) : mg.call(i.dictionary) === "[object ArrayBuffer]" ? a = new Uint8Array(i.dictionary) : a = i.dictionary, r = Oi.deflateSetDictionary(this.strm, a), r !== rs)
      throw new Error(df[r]);
    this._dict_set = !0;
  }
}
Hi.prototype.push = function(e, i) {
  const r = this.strm, a = this.options.chunkSize;
  let o, u;
  if (this.ended)
    return !1;
  for (i === ~~i ? u = i : u = i === !0 ? iR : tR, typeof e == "string" ? r.input = yg.string2buf(e) : mg.call(e) === "[object ArrayBuffer]" ? r.input = new Uint8Array(e) : r.input = e, r.next_in = 0, r.avail_in = r.input.length; ; ) {
    if (r.avail_out === 0 && (r.output = new Uint8Array(a), r.next_out = 0, r.avail_out = a), (u === rR || u === nR) && r.avail_out <= 6) {
      this.onData(r.output.subarray(0, r.next_out)), r.avail_out = 0;
      continue;
    }
    if (o = Oi.deflate(r, u), o === aR)
      return r.next_out > 0 && this.onData(r.output.subarray(0, r.next_out)), o = Oi.deflateEnd(this.strm), this.onEnd(o), this.ended = !0, o === rs;
    if (r.avail_out === 0) {
      this.onData(r.output);
      continue;
    }
    if (u > 0 && r.next_out > 0) {
      this.onData(r.output.subarray(0, r.next_out)), r.avail_out = 0;
      continue;
    }
    if (r.avail_in === 0)
      break;
  }
  return !0;
};
Hi.prototype.onData = function(e) {
  this.chunks.push(e);
};
Hi.prototype.onEnd = function(e) {
  e === rs && (this.result = wg.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
};
function Vf(e, i) {
  const r = new Hi(i);
  if (r.push(e, !0), r.err)
    throw r.msg || df[r.err];
  return r.result;
}
function fR(e, i) {
  return i = i || {}, i.raw = !0, Vf(e, i);
}
function lR(e, i) {
  return i = i || {}, i.gzip = !0, Vf(e, i);
}
Qn.Deflate = Hi;
Qn.deflate = Vf;
Qn.deflateRaw = fR;
Qn.gzip = lR;
Qn.constants = yn;
var ii = {}, nr = {};
const Ia = 16209, cR = 16191;
var dR = function(i, r) {
  let a, o, u, c, d, g, f, p, S, w, m, I, z, C, Y, te, V, j, P, H, L, K, ee, q;
  const ne = i.state;
  a = i.next_in, ee = i.input, o = a + (i.avail_in - 5), u = i.next_out, q = i.output, c = u - (r - i.avail_out), d = u + (i.avail_out - 257), g = ne.dmax, f = ne.wsize, p = ne.whave, S = ne.wnext, w = ne.window, m = ne.hold, I = ne.bits, z = ne.lencode, C = ne.distcode, Y = (1 << ne.lenbits) - 1, te = (1 << ne.distbits) - 1;
  e:
    do {
      I < 15 && (m += ee[a++] << I, I += 8, m += ee[a++] << I, I += 8), V = z[m & Y];
      t:
        for (; ; ) {
          if (j = V >>> 24, m >>>= j, I -= j, j = V >>> 16 & 255, j === 0)
            q[u++] = V & 65535;
          else if (j & 16) {
            P = V & 65535, j &= 15, j && (I < j && (m += ee[a++] << I, I += 8), P += m & (1 << j) - 1, m >>>= j, I -= j), I < 15 && (m += ee[a++] << I, I += 8, m += ee[a++] << I, I += 8), V = C[m & te];
            r:
              for (; ; ) {
                if (j = V >>> 24, m >>>= j, I -= j, j = V >>> 16 & 255, j & 16) {
                  if (H = V & 65535, j &= 15, I < j && (m += ee[a++] << I, I += 8, I < j && (m += ee[a++] << I, I += 8)), H += m & (1 << j) - 1, H > g) {
                    i.msg = "invalid distance too far back", ne.mode = Ia;
                    break e;
                  }
                  if (m >>>= j, I -= j, j = u - c, H > j) {
                    if (j = H - j, j > p && ne.sane) {
                      i.msg = "invalid distance too far back", ne.mode = Ia;
                      break e;
                    }
                    if (L = 0, K = w, S === 0) {
                      if (L += f - j, j < P) {
                        P -= j;
                        do
                          q[u++] = w[L++];
                        while (--j);
                        L = u - H, K = q;
                      }
                    } else if (S < j) {
                      if (L += f + S - j, j -= S, j < P) {
                        P -= j;
                        do
                          q[u++] = w[L++];
                        while (--j);
                        if (L = 0, S < P) {
                          j = S, P -= j;
                          do
                            q[u++] = w[L++];
                          while (--j);
                          L = u - H, K = q;
                        }
                      }
                    } else if (L += S - j, j < P) {
                      P -= j;
                      do
                        q[u++] = w[L++];
                      while (--j);
                      L = u - H, K = q;
                    }
                    for (; P > 2; )
                      q[u++] = K[L++], q[u++] = K[L++], q[u++] = K[L++], P -= 3;
                    P && (q[u++] = K[L++], P > 1 && (q[u++] = K[L++]));
                  } else {
                    L = u - H;
                    do
                      q[u++] = q[L++], q[u++] = q[L++], q[u++] = q[L++], P -= 3;
                    while (P > 2);
                    P && (q[u++] = q[L++], P > 1 && (q[u++] = q[L++]));
                  }
                } else if (j & 64) {
                  i.msg = "invalid distance code", ne.mode = Ia;
                  break e;
                } else {
                  V = C[(V & 65535) + (m & (1 << j) - 1)];
                  continue r;
                }
                break;
              }
          } else if (j & 64)
            if (j & 32) {
              ne.mode = cR;
              break e;
            } else {
              i.msg = "invalid literal/length code", ne.mode = Ia;
              break e;
            }
          else {
            V = z[(V & 65535) + (m & (1 << j) - 1)];
            continue t;
          }
          break;
        }
    } while (a < o && u < d);
  P = I >> 3, a -= P, I -= P << 3, m &= (1 << I) - 1, i.next_in = a, i.next_out = u, i.avail_in = a < o ? 5 + (o - a) : 5 - (a - o), i.avail_out = u < d ? 257 + (d - u) : 257 - (u - d), ne.hold = m, ne.bits = I;
};
const zn = 15, e0 = 852, t0 = 592, r0 = 0, bu = 1, n0 = 2, hR = new Uint16Array([
  /* Length codes 257..285 base */
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  13,
  15,
  17,
  19,
  23,
  27,
  31,
  35,
  43,
  51,
  59,
  67,
  83,
  99,
  115,
  131,
  163,
  195,
  227,
  258,
  0,
  0
]), pR = new Uint8Array([
  /* Length codes 257..285 extra */
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  17,
  17,
  17,
  17,
  18,
  18,
  18,
  18,
  19,
  19,
  19,
  19,
  20,
  20,
  20,
  20,
  21,
  21,
  21,
  21,
  16,
  72,
  78
]), gR = new Uint16Array([
  /* Distance codes 0..29 base */
  1,
  2,
  3,
  4,
  5,
  7,
  9,
  13,
  17,
  25,
  33,
  49,
  65,
  97,
  129,
  193,
  257,
  385,
  513,
  769,
  1025,
  1537,
  2049,
  3073,
  4097,
  6145,
  8193,
  12289,
  16385,
  24577,
  0,
  0
]), _R = new Uint8Array([
  /* Distance codes 0..29 extra */
  16,
  16,
  16,
  16,
  17,
  17,
  18,
  18,
  19,
  19,
  20,
  20,
  21,
  21,
  22,
  22,
  23,
  23,
  24,
  24,
  25,
  25,
  26,
  26,
  27,
  27,
  28,
  28,
  29,
  29,
  64,
  64
]), vR = (e, i, r, a, o, u, c, d) => {
  const g = d.bits;
  let f = 0, p = 0, S = 0, w = 0, m = 0, I = 0, z = 0, C = 0, Y = 0, te = 0, V, j, P, H, L, K = null, ee;
  const q = new Uint16Array(zn + 1), ne = new Uint16Array(zn + 1);
  let le = null, ve, Re, Fe;
  for (f = 0; f <= zn; f++)
    q[f] = 0;
  for (p = 0; p < a; p++)
    q[i[r + p]]++;
  for (m = g, w = zn; w >= 1 && q[w] === 0; w--)
    ;
  if (m > w && (m = w), w === 0)
    return o[u++] = 1 << 24 | 64 << 16 | 0, o[u++] = 1 << 24 | 64 << 16 | 0, d.bits = 1, 0;
  for (S = 1; S < w && q[S] === 0; S++)
    ;
  for (m < S && (m = S), C = 1, f = 1; f <= zn; f++)
    if (C <<= 1, C -= q[f], C < 0)
      return -1;
  if (C > 0 && (e === r0 || w !== 1))
    return -1;
  for (ne[1] = 0, f = 1; f < zn; f++)
    ne[f + 1] = ne[f] + q[f];
  for (p = 0; p < a; p++)
    i[r + p] !== 0 && (c[ne[i[r + p]]++] = p);
  if (e === r0 ? (K = le = c, ee = 20) : e === bu ? (K = hR, le = pR, ee = 257) : (K = gR, le = _R, ee = 0), te = 0, p = 0, f = S, L = u, I = m, z = 0, P = -1, Y = 1 << m, H = Y - 1, e === bu && Y > e0 || e === n0 && Y > t0)
    return 1;
  for (; ; ) {
    ve = f - z, c[p] + 1 < ee ? (Re = 0, Fe = c[p]) : c[p] >= ee ? (Re = le[c[p] - ee], Fe = K[c[p] - ee]) : (Re = 32 + 64, Fe = 0), V = 1 << f - z, j = 1 << I, S = j;
    do
      j -= V, o[L + (te >> z) + j] = ve << 24 | Re << 16 | Fe | 0;
    while (j !== 0);
    for (V = 1 << f - 1; te & V; )
      V >>= 1;
    if (V !== 0 ? (te &= V - 1, te += V) : te = 0, p++, --q[f] === 0) {
      if (f === w)
        break;
      f = i[r + c[p]];
    }
    if (f > m && (te & H) !== P) {
      for (z === 0 && (z = m), L += S, I = f - z, C = 1 << I; I + z < w && (C -= q[I + z], !(C <= 0)); )
        I++, C <<= 1;
      if (Y += 1 << I, e === bu && Y > e0 || e === n0 && Y > t0)
        return 1;
      P = te & H, o[P] = m << 24 | I << 16 | L - u | 0;
    }
  }
  return te !== 0 && (o[L + te] = f - z << 24 | 64 << 16 | 0), d.bits = m, 0;
};
var wR = vR;
const hf = ug, fr = fg, yR = dR, Ci = wR, mR = 0, Ag = 1, Eg = 2, {
  Z_FINISH: i0,
  Z_BLOCK: AR,
  Z_TREES: Ua,
  Z_OK: _n,
  Z_STREAM_END: ER,
  Z_NEED_DICT: bR,
  Z_STREAM_ERROR: Vt,
  Z_DATA_ERROR: bg,
  Z_MEM_ERROR: Sg,
  Z_BUF_ERROR: SR,
  Z_DEFLATED: a0
} = yn, ws = 16180, s0 = 16181, o0 = 16182, u0 = 16183, f0 = 16184, l0 = 16185, c0 = 16186, d0 = 16187, h0 = 16188, p0 = 16189, ns = 16190, Or = 16191, Su = 16192, g0 = 16193, xu = 16194, _0 = 16195, v0 = 16196, w0 = 16197, y0 = 16198, Fa = 16199, Ma = 16200, m0 = 16201, A0 = 16202, E0 = 16203, b0 = 16204, S0 = 16205, Tu = 16206, x0 = 16207, T0 = 16208, $e = 16209, xg = 16210, Tg = 16211, xR = 852, TR = 592, RR = 15, OR = RR, R0 = (e) => (e >>> 24 & 255) + (e >>> 8 & 65280) + ((e & 65280) << 8) + ((e & 255) << 24);
function CR() {
  this.strm = null, this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
}
const mn = (e) => {
  if (!e)
    return 1;
  const i = e.state;
  return !i || i.strm !== e || i.mode < ws || i.mode > Tg ? 1 : 0;
}, Rg = (e) => {
  if (mn(e))
    return Vt;
  const i = e.state;
  return e.total_in = e.total_out = i.total = 0, e.msg = "", i.wrap && (e.adler = i.wrap & 1), i.mode = ws, i.last = 0, i.havedict = 0, i.flags = -1, i.dmax = 32768, i.head = null, i.hold = 0, i.bits = 0, i.lencode = i.lendyn = new Int32Array(xR), i.distcode = i.distdyn = new Int32Array(TR), i.sane = 1, i.back = -1, _n;
}, Og = (e) => {
  if (mn(e))
    return Vt;
  const i = e.state;
  return i.wsize = 0, i.whave = 0, i.wnext = 0, Rg(e);
}, Cg = (e, i) => {
  let r;
  if (mn(e))
    return Vt;
  const a = e.state;
  return i < 0 ? (r = 0, i = -i) : (r = (i >> 4) + 5, i < 48 && (i &= 15)), i && (i < 8 || i > 15) ? Vt : (a.window !== null && a.wbits !== i && (a.window = null), a.wrap = r, a.wbits = i, Og(e));
}, Ng = (e, i) => {
  if (!e)
    return Vt;
  const r = new CR();
  e.state = r, r.strm = e, r.window = null, r.mode = ws;
  const a = Cg(e, i);
  return a !== _n && (e.state = null), a;
}, NR = (e) => Ng(e, OR);
let O0 = !0, Ru, Ou;
const LR = (e) => {
  if (O0) {
    Ru = new Int32Array(512), Ou = new Int32Array(32);
    let i = 0;
    for (; i < 144; )
      e.lens[i++] = 8;
    for (; i < 256; )
      e.lens[i++] = 9;
    for (; i < 280; )
      e.lens[i++] = 7;
    for (; i < 288; )
      e.lens[i++] = 8;
    for (Ci(Ag, e.lens, 0, 288, Ru, 0, e.work, { bits: 9 }), i = 0; i < 32; )
      e.lens[i++] = 5;
    Ci(Eg, e.lens, 0, 32, Ou, 0, e.work, { bits: 5 }), O0 = !1;
  }
  e.lencode = Ru, e.lenbits = 9, e.distcode = Ou, e.distbits = 5;
}, Lg = (e, i, r, a) => {
  let o;
  const u = e.state;
  return u.window === null && (u.wsize = 1 << u.wbits, u.wnext = 0, u.whave = 0, u.window = new Uint8Array(u.wsize)), a >= u.wsize ? (u.window.set(i.subarray(r - u.wsize, r), 0), u.wnext = 0, u.whave = u.wsize) : (o = u.wsize - u.wnext, o > a && (o = a), u.window.set(i.subarray(r - a, r - a + o), u.wnext), a -= o, a ? (u.window.set(i.subarray(r - a, r), 0), u.wnext = a, u.whave = u.wsize) : (u.wnext += o, u.wnext === u.wsize && (u.wnext = 0), u.whave < u.wsize && (u.whave += o))), 0;
}, DR = (e, i) => {
  let r, a, o, u, c, d, g, f, p, S, w, m, I, z, C = 0, Y, te, V, j, P, H, L, K;
  const ee = new Uint8Array(4);
  let q, ne;
  const le = (
    /* permutation of code lengths */
    new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
  );
  if (mn(e) || !e.output || !e.input && e.avail_in !== 0)
    return Vt;
  r = e.state, r.mode === Or && (r.mode = Su), c = e.next_out, o = e.output, g = e.avail_out, u = e.next_in, a = e.input, d = e.avail_in, f = r.hold, p = r.bits, S = d, w = g, K = _n;
  e:
    for (; ; )
      switch (r.mode) {
        case ws:
          if (r.wrap === 0) {
            r.mode = Su;
            break;
          }
          for (; p < 16; ) {
            if (d === 0)
              break e;
            d--, f += a[u++] << p, p += 8;
          }
          if (r.wrap & 2 && f === 35615) {
            r.wbits === 0 && (r.wbits = 15), r.check = 0, ee[0] = f & 255, ee[1] = f >>> 8 & 255, r.check = fr(r.check, ee, 2, 0), f = 0, p = 0, r.mode = s0;
            break;
          }
          if (r.head && (r.head.done = !1), !(r.wrap & 1) || /* check if zlib header allowed */
          (((f & 255) << 8) + (f >> 8)) % 31) {
            e.msg = "incorrect header check", r.mode = $e;
            break;
          }
          if ((f & 15) !== a0) {
            e.msg = "unknown compression method", r.mode = $e;
            break;
          }
          if (f >>>= 4, p -= 4, L = (f & 15) + 8, r.wbits === 0 && (r.wbits = L), L > 15 || L > r.wbits) {
            e.msg = "invalid window size", r.mode = $e;
            break;
          }
          r.dmax = 1 << r.wbits, r.flags = 0, e.adler = r.check = 1, r.mode = f & 512 ? p0 : Or, f = 0, p = 0;
          break;
        case s0:
          for (; p < 16; ) {
            if (d === 0)
              break e;
            d--, f += a[u++] << p, p += 8;
          }
          if (r.flags = f, (r.flags & 255) !== a0) {
            e.msg = "unknown compression method", r.mode = $e;
            break;
          }
          if (r.flags & 57344) {
            e.msg = "unknown header flags set", r.mode = $e;
            break;
          }
          r.head && (r.head.text = f >> 8 & 1), r.flags & 512 && r.wrap & 4 && (ee[0] = f & 255, ee[1] = f >>> 8 & 255, r.check = fr(r.check, ee, 2, 0)), f = 0, p = 0, r.mode = o0;
        case o0:
          for (; p < 32; ) {
            if (d === 0)
              break e;
            d--, f += a[u++] << p, p += 8;
          }
          r.head && (r.head.time = f), r.flags & 512 && r.wrap & 4 && (ee[0] = f & 255, ee[1] = f >>> 8 & 255, ee[2] = f >>> 16 & 255, ee[3] = f >>> 24 & 255, r.check = fr(r.check, ee, 4, 0)), f = 0, p = 0, r.mode = u0;
        case u0:
          for (; p < 16; ) {
            if (d === 0)
              break e;
            d--, f += a[u++] << p, p += 8;
          }
          r.head && (r.head.xflags = f & 255, r.head.os = f >> 8), r.flags & 512 && r.wrap & 4 && (ee[0] = f & 255, ee[1] = f >>> 8 & 255, r.check = fr(r.check, ee, 2, 0)), f = 0, p = 0, r.mode = f0;
        case f0:
          if (r.flags & 1024) {
            for (; p < 16; ) {
              if (d === 0)
                break e;
              d--, f += a[u++] << p, p += 8;
            }
            r.length = f, r.head && (r.head.extra_len = f), r.flags & 512 && r.wrap & 4 && (ee[0] = f & 255, ee[1] = f >>> 8 & 255, r.check = fr(r.check, ee, 2, 0)), f = 0, p = 0;
          } else
            r.head && (r.head.extra = null);
          r.mode = l0;
        case l0:
          if (r.flags & 1024 && (m = r.length, m > d && (m = d), m && (r.head && (L = r.head.extra_len - r.length, r.head.extra || (r.head.extra = new Uint8Array(r.head.extra_len)), r.head.extra.set(
            a.subarray(
              u,
              // extra field is limited to 65536 bytes
              // - no need for additional size check
              u + m
            ),
            /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
            L
          )), r.flags & 512 && r.wrap & 4 && (r.check = fr(r.check, a, m, u)), d -= m, u += m, r.length -= m), r.length))
            break e;
          r.length = 0, r.mode = c0;
        case c0:
          if (r.flags & 2048) {
            if (d === 0)
              break e;
            m = 0;
            do
              L = a[u + m++], r.head && L && r.length < 65536 && (r.head.name += String.fromCharCode(L));
            while (L && m < d);
            if (r.flags & 512 && r.wrap & 4 && (r.check = fr(r.check, a, m, u)), d -= m, u += m, L)
              break e;
          } else
            r.head && (r.head.name = null);
          r.length = 0, r.mode = d0;
        case d0:
          if (r.flags & 4096) {
            if (d === 0)
              break e;
            m = 0;
            do
              L = a[u + m++], r.head && L && r.length < 65536 && (r.head.comment += String.fromCharCode(L));
            while (L && m < d);
            if (r.flags & 512 && r.wrap & 4 && (r.check = fr(r.check, a, m, u)), d -= m, u += m, L)
              break e;
          } else
            r.head && (r.head.comment = null);
          r.mode = h0;
        case h0:
          if (r.flags & 512) {
            for (; p < 16; ) {
              if (d === 0)
                break e;
              d--, f += a[u++] << p, p += 8;
            }
            if (r.wrap & 4 && f !== (r.check & 65535)) {
              e.msg = "header crc mismatch", r.mode = $e;
              break;
            }
            f = 0, p = 0;
          }
          r.head && (r.head.hcrc = r.flags >> 9 & 1, r.head.done = !0), e.adler = r.check = 0, r.mode = Or;
          break;
        case p0:
          for (; p < 32; ) {
            if (d === 0)
              break e;
            d--, f += a[u++] << p, p += 8;
          }
          e.adler = r.check = R0(f), f = 0, p = 0, r.mode = ns;
        case ns:
          if (r.havedict === 0)
            return e.next_out = c, e.avail_out = g, e.next_in = u, e.avail_in = d, r.hold = f, r.bits = p, bR;
          e.adler = r.check = 1, r.mode = Or;
        case Or:
          if (i === AR || i === Ua)
            break e;
        case Su:
          if (r.last) {
            f >>>= p & 7, p -= p & 7, r.mode = Tu;
            break;
          }
          for (; p < 3; ) {
            if (d === 0)
              break e;
            d--, f += a[u++] << p, p += 8;
          }
          switch (r.last = f & 1, f >>>= 1, p -= 1, f & 3) {
            case 0:
              r.mode = g0;
              break;
            case 1:
              if (LR(r), r.mode = Fa, i === Ua) {
                f >>>= 2, p -= 2;
                break e;
              }
              break;
            case 2:
              r.mode = v0;
              break;
            case 3:
              e.msg = "invalid block type", r.mode = $e;
          }
          f >>>= 2, p -= 2;
          break;
        case g0:
          for (f >>>= p & 7, p -= p & 7; p < 32; ) {
            if (d === 0)
              break e;
            d--, f += a[u++] << p, p += 8;
          }
          if ((f & 65535) !== (f >>> 16 ^ 65535)) {
            e.msg = "invalid stored block lengths", r.mode = $e;
            break;
          }
          if (r.length = f & 65535, f = 0, p = 0, r.mode = xu, i === Ua)
            break e;
        case xu:
          r.mode = _0;
        case _0:
          if (m = r.length, m) {
            if (m > d && (m = d), m > g && (m = g), m === 0)
              break e;
            o.set(a.subarray(u, u + m), c), d -= m, u += m, g -= m, c += m, r.length -= m;
            break;
          }
          r.mode = Or;
          break;
        case v0:
          for (; p < 14; ) {
            if (d === 0)
              break e;
            d--, f += a[u++] << p, p += 8;
          }
          if (r.nlen = (f & 31) + 257, f >>>= 5, p -= 5, r.ndist = (f & 31) + 1, f >>>= 5, p -= 5, r.ncode = (f & 15) + 4, f >>>= 4, p -= 4, r.nlen > 286 || r.ndist > 30) {
            e.msg = "too many length or distance symbols", r.mode = $e;
            break;
          }
          r.have = 0, r.mode = w0;
        case w0:
          for (; r.have < r.ncode; ) {
            for (; p < 3; ) {
              if (d === 0)
                break e;
              d--, f += a[u++] << p, p += 8;
            }
            r.lens[le[r.have++]] = f & 7, f >>>= 3, p -= 3;
          }
          for (; r.have < 19; )
            r.lens[le[r.have++]] = 0;
          if (r.lencode = r.lendyn, r.lenbits = 7, q = { bits: r.lenbits }, K = Ci(mR, r.lens, 0, 19, r.lencode, 0, r.work, q), r.lenbits = q.bits, K) {
            e.msg = "invalid code lengths set", r.mode = $e;
            break;
          }
          r.have = 0, r.mode = y0;
        case y0:
          for (; r.have < r.nlen + r.ndist; ) {
            for (; C = r.lencode[f & (1 << r.lenbits) - 1], Y = C >>> 24, te = C >>> 16 & 255, V = C & 65535, !(Y <= p); ) {
              if (d === 0)
                break e;
              d--, f += a[u++] << p, p += 8;
            }
            if (V < 16)
              f >>>= Y, p -= Y, r.lens[r.have++] = V;
            else {
              if (V === 16) {
                for (ne = Y + 2; p < ne; ) {
                  if (d === 0)
                    break e;
                  d--, f += a[u++] << p, p += 8;
                }
                if (f >>>= Y, p -= Y, r.have === 0) {
                  e.msg = "invalid bit length repeat", r.mode = $e;
                  break;
                }
                L = r.lens[r.have - 1], m = 3 + (f & 3), f >>>= 2, p -= 2;
              } else if (V === 17) {
                for (ne = Y + 3; p < ne; ) {
                  if (d === 0)
                    break e;
                  d--, f += a[u++] << p, p += 8;
                }
                f >>>= Y, p -= Y, L = 0, m = 3 + (f & 7), f >>>= 3, p -= 3;
              } else {
                for (ne = Y + 7; p < ne; ) {
                  if (d === 0)
                    break e;
                  d--, f += a[u++] << p, p += 8;
                }
                f >>>= Y, p -= Y, L = 0, m = 11 + (f & 127), f >>>= 7, p -= 7;
              }
              if (r.have + m > r.nlen + r.ndist) {
                e.msg = "invalid bit length repeat", r.mode = $e;
                break;
              }
              for (; m--; )
                r.lens[r.have++] = L;
            }
          }
          if (r.mode === $e)
            break;
          if (r.lens[256] === 0) {
            e.msg = "invalid code -- missing end-of-block", r.mode = $e;
            break;
          }
          if (r.lenbits = 9, q = { bits: r.lenbits }, K = Ci(Ag, r.lens, 0, r.nlen, r.lencode, 0, r.work, q), r.lenbits = q.bits, K) {
            e.msg = "invalid literal/lengths set", r.mode = $e;
            break;
          }
          if (r.distbits = 6, r.distcode = r.distdyn, q = { bits: r.distbits }, K = Ci(Eg, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, q), r.distbits = q.bits, K) {
            e.msg = "invalid distances set", r.mode = $e;
            break;
          }
          if (r.mode = Fa, i === Ua)
            break e;
        case Fa:
          r.mode = Ma;
        case Ma:
          if (d >= 6 && g >= 258) {
            e.next_out = c, e.avail_out = g, e.next_in = u, e.avail_in = d, r.hold = f, r.bits = p, yR(e, w), c = e.next_out, o = e.output, g = e.avail_out, u = e.next_in, a = e.input, d = e.avail_in, f = r.hold, p = r.bits, r.mode === Or && (r.back = -1);
            break;
          }
          for (r.back = 0; C = r.lencode[f & (1 << r.lenbits) - 1], Y = C >>> 24, te = C >>> 16 & 255, V = C & 65535, !(Y <= p); ) {
            if (d === 0)
              break e;
            d--, f += a[u++] << p, p += 8;
          }
          if (te && !(te & 240)) {
            for (j = Y, P = te, H = V; C = r.lencode[H + ((f & (1 << j + P) - 1) >> j)], Y = C >>> 24, te = C >>> 16 & 255, V = C & 65535, !(j + Y <= p); ) {
              if (d === 0)
                break e;
              d--, f += a[u++] << p, p += 8;
            }
            f >>>= j, p -= j, r.back += j;
          }
          if (f >>>= Y, p -= Y, r.back += Y, r.length = V, te === 0) {
            r.mode = S0;
            break;
          }
          if (te & 32) {
            r.back = -1, r.mode = Or;
            break;
          }
          if (te & 64) {
            e.msg = "invalid literal/length code", r.mode = $e;
            break;
          }
          r.extra = te & 15, r.mode = m0;
        case m0:
          if (r.extra) {
            for (ne = r.extra; p < ne; ) {
              if (d === 0)
                break e;
              d--, f += a[u++] << p, p += 8;
            }
            r.length += f & (1 << r.extra) - 1, f >>>= r.extra, p -= r.extra, r.back += r.extra;
          }
          r.was = r.length, r.mode = A0;
        case A0:
          for (; C = r.distcode[f & (1 << r.distbits) - 1], Y = C >>> 24, te = C >>> 16 & 255, V = C & 65535, !(Y <= p); ) {
            if (d === 0)
              break e;
            d--, f += a[u++] << p, p += 8;
          }
          if (!(te & 240)) {
            for (j = Y, P = te, H = V; C = r.distcode[H + ((f & (1 << j + P) - 1) >> j)], Y = C >>> 24, te = C >>> 16 & 255, V = C & 65535, !(j + Y <= p); ) {
              if (d === 0)
                break e;
              d--, f += a[u++] << p, p += 8;
            }
            f >>>= j, p -= j, r.back += j;
          }
          if (f >>>= Y, p -= Y, r.back += Y, te & 64) {
            e.msg = "invalid distance code", r.mode = $e;
            break;
          }
          r.offset = V, r.extra = te & 15, r.mode = E0;
        case E0:
          if (r.extra) {
            for (ne = r.extra; p < ne; ) {
              if (d === 0)
                break e;
              d--, f += a[u++] << p, p += 8;
            }
            r.offset += f & (1 << r.extra) - 1, f >>>= r.extra, p -= r.extra, r.back += r.extra;
          }
          if (r.offset > r.dmax) {
            e.msg = "invalid distance too far back", r.mode = $e;
            break;
          }
          r.mode = b0;
        case b0:
          if (g === 0)
            break e;
          if (m = w - g, r.offset > m) {
            if (m = r.offset - m, m > r.whave && r.sane) {
              e.msg = "invalid distance too far back", r.mode = $e;
              break;
            }
            m > r.wnext ? (m -= r.wnext, I = r.wsize - m) : I = r.wnext - m, m > r.length && (m = r.length), z = r.window;
          } else
            z = o, I = c - r.offset, m = r.length;
          m > g && (m = g), g -= m, r.length -= m;
          do
            o[c++] = z[I++];
          while (--m);
          r.length === 0 && (r.mode = Ma);
          break;
        case S0:
          if (g === 0)
            break e;
          o[c++] = r.length, g--, r.mode = Ma;
          break;
        case Tu:
          if (r.wrap) {
            for (; p < 32; ) {
              if (d === 0)
                break e;
              d--, f |= a[u++] << p, p += 8;
            }
            if (w -= g, e.total_out += w, r.total += w, r.wrap & 4 && w && (e.adler = r.check = /*UPDATE_CHECK(state.check, put - _out, _out);*/
            r.flags ? fr(r.check, o, w, c - w) : hf(r.check, o, w, c - w)), w = g, r.wrap & 4 && (r.flags ? f : R0(f)) !== r.check) {
              e.msg = "incorrect data check", r.mode = $e;
              break;
            }
            f = 0, p = 0;
          }
          r.mode = x0;
        case x0:
          if (r.wrap && r.flags) {
            for (; p < 32; ) {
              if (d === 0)
                break e;
              d--, f += a[u++] << p, p += 8;
            }
            if (r.wrap & 4 && f !== (r.total & 4294967295)) {
              e.msg = "incorrect length check", r.mode = $e;
              break;
            }
            f = 0, p = 0;
          }
          r.mode = T0;
        case T0:
          K = ER;
          break e;
        case $e:
          K = bg;
          break e;
        case xg:
          return Sg;
        case Tg:
        default:
          return Vt;
      }
  return e.next_out = c, e.avail_out = g, e.next_in = u, e.avail_in = d, r.hold = f, r.bits = p, (r.wsize || w !== e.avail_out && r.mode < $e && (r.mode < Tu || i !== i0)) && Lg(e, e.output, e.next_out, w - e.avail_out), S -= e.avail_in, w -= e.avail_out, e.total_in += S, e.total_out += w, r.total += w, r.wrap & 4 && w && (e.adler = r.check = /*UPDATE_CHECK(state.check, strm.next_out - _out, _out);*/
  r.flags ? fr(r.check, o, w, e.next_out - w) : hf(r.check, o, w, e.next_out - w)), e.data_type = r.bits + (r.last ? 64 : 0) + (r.mode === Or ? 128 : 0) + (r.mode === Fa || r.mode === xu ? 256 : 0), (S === 0 && w === 0 || i === i0) && K === _n && (K = SR), K;
}, PR = (e) => {
  if (mn(e))
    return Vt;
  let i = e.state;
  return i.window && (i.window = null), e.state = null, _n;
}, BR = (e, i) => {
  if (mn(e))
    return Vt;
  const r = e.state;
  return r.wrap & 2 ? (r.head = i, i.done = !1, _n) : Vt;
}, kR = (e, i) => {
  const r = i.length;
  let a, o, u;
  return mn(e) || (a = e.state, a.wrap !== 0 && a.mode !== ns) ? Vt : a.mode === ns && (o = 1, o = hf(o, i, r, 0), o !== a.check) ? bg : (u = Lg(e, i, r, r), u ? (a.mode = xg, Sg) : (a.havedict = 1, _n));
};
nr.inflateReset = Og;
nr.inflateReset2 = Cg;
nr.inflateResetKeep = Rg;
nr.inflateInit = NR;
nr.inflateInit2 = Ng;
nr.inflate = DR;
nr.inflateEnd = PR;
nr.inflateGetHeader = BR;
nr.inflateSetDictionary = kR;
nr.inflateInfo = "pako inflate (from Nodeca project)";
function IR() {
  this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
}
var UR = IR;
const Dr = nr, Dg = vs, pf = $i, gf = Zf, FR = vg, MR = UR, Pg = Object.prototype.toString, {
  Z_NO_FLUSH: $R,
  Z_FINISH: HR,
  Z_OK: ki,
  Z_STREAM_END: Cu,
  Z_NEED_DICT: Nu,
  Z_STREAM_ERROR: qR,
  Z_DATA_ERROR: C0,
  Z_MEM_ERROR: zR
} = yn;
function qi(e) {
  this.options = Dg.assign({
    chunkSize: 1024 * 64,
    windowBits: 15,
    to: ""
  }, e || {});
  const i = this.options;
  i.raw && i.windowBits >= 0 && i.windowBits < 16 && (i.windowBits = -i.windowBits, i.windowBits === 0 && (i.windowBits = -15)), i.windowBits >= 0 && i.windowBits < 16 && !(e && e.windowBits) && (i.windowBits += 32), i.windowBits > 15 && i.windowBits < 48 && (i.windowBits & 15 || (i.windowBits |= 15)), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new FR(), this.strm.avail_out = 0;
  let r = Dr.inflateInit2(
    this.strm,
    i.windowBits
  );
  if (r !== ki)
    throw new Error(gf[r]);
  if (this.header = new MR(), Dr.inflateGetHeader(this.strm, this.header), i.dictionary && (typeof i.dictionary == "string" ? i.dictionary = pf.string2buf(i.dictionary) : Pg.call(i.dictionary) === "[object ArrayBuffer]" && (i.dictionary = new Uint8Array(i.dictionary)), i.raw && (r = Dr.inflateSetDictionary(this.strm, i.dictionary), r !== ki)))
    throw new Error(gf[r]);
}
qi.prototype.push = function(e, i) {
  const r = this.strm, a = this.options.chunkSize, o = this.options.dictionary;
  let u, c, d;
  if (this.ended)
    return !1;
  for (i === ~~i ? c = i : c = i === !0 ? HR : $R, Pg.call(e) === "[object ArrayBuffer]" ? r.input = new Uint8Array(e) : r.input = e, r.next_in = 0, r.avail_in = r.input.length; ; ) {
    for (r.avail_out === 0 && (r.output = new Uint8Array(a), r.next_out = 0, r.avail_out = a), u = Dr.inflate(r, c), u === Nu && o && (u = Dr.inflateSetDictionary(r, o), u === ki ? u = Dr.inflate(r, c) : u === C0 && (u = Nu)); r.avail_in > 0 && u === Cu && r.state.wrap > 0 && e[r.next_in] !== 0; )
      Dr.inflateReset(r), u = Dr.inflate(r, c);
    switch (u) {
      case qR:
      case C0:
      case Nu:
      case zR:
        return this.onEnd(u), this.ended = !0, !1;
    }
    if (d = r.avail_out, r.next_out && (r.avail_out === 0 || u === Cu))
      if (this.options.to === "string") {
        let g = pf.utf8border(r.output, r.next_out), f = r.next_out - g, p = pf.buf2string(r.output, g);
        r.next_out = f, r.avail_out = a - f, f && r.output.set(r.output.subarray(g, g + f), 0), this.onData(p);
      } else
        this.onData(r.output.length === r.next_out ? r.output : r.output.subarray(0, r.next_out));
    if (!(u === ki && d === 0)) {
      if (u === Cu)
        return u = Dr.inflateEnd(this.strm), this.onEnd(u), this.ended = !0, !0;
      if (r.avail_in === 0)
        break;
    }
  }
  return !0;
};
qi.prototype.onData = function(e) {
  this.chunks.push(e);
};
qi.prototype.onEnd = function(e) {
  e === ki && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = Dg.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
};
function Jf(e, i) {
  const r = new qi(i);
  if (r.push(e), r.err)
    throw r.msg || gf[r.err];
  return r.result;
}
function GR(e, i) {
  return i = i || {}, i.raw = !0, Jf(e, i);
}
ii.Inflate = qi;
ii.inflate = Jf;
ii.inflateRaw = GR;
ii.ungzip = Jf;
ii.constants = yn;
const { Deflate: KR, deflate: WR, deflateRaw: XR, gzip: ZR } = Qn, { Inflate: jR, inflate: VR, inflateRaw: JR, ungzip: YR } = ii, QR = yn;
gr.Deflate = KR;
gr.deflate = WR;
gr.deflateRaw = XR;
gr.gzip = ZR;
gr.Inflate = jR;
gr.inflate = VR;
gr.inflateRaw = JR;
gr.ungzip = YR;
gr.constants = QR;
var Yf = {};
Object.defineProperty(Yf, "__esModule", { value: !0 });
Yf.default = {
  version: "0.4",
  cacheApiUrl: "https://api.redstone.finance/prices"
  // cacheApiUrl: "https://api.redstone.finance/b1/prices",
  // cacheApiUrl: "https://api.redstone.finance/b2/prices",
};
var $a = se && se.__awaiter || function(e, i, r, a) {
  function o(u) {
    return u instanceof r ? u : new r(function(c) {
      c(u);
    });
  }
  return new (r || (r = Promise))(function(u, c) {
    function d(p) {
      try {
        f(a.next(p));
      } catch (S) {
        c(S);
      }
    }
    function g(p) {
      try {
        f(a.throw(p));
      } catch (S) {
        c(S);
      }
    }
    function f(p) {
      p.done ? u(p.value) : o(p.value).then(d, g);
    }
    f((a = a.apply(e, i || [])).next());
  });
}, Ha = se && se.__generator || function(e, i) {
  var r = { label: 0, sent: function() {
    if (u[0] & 1)
      throw u[1];
    return u[1];
  }, trys: [], ops: [] }, a, o, u, c;
  return c = { next: d(0), throw: d(1), return: d(2) }, typeof Symbol == "function" && (c[Symbol.iterator] = function() {
    return this;
  }), c;
  function d(f) {
    return function(p) {
      return g([f, p]);
    };
  }
  function g(f) {
    if (a)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (a = 1, o && (u = f[0] & 2 ? o.return : f[0] ? o.throw || ((u = o.return) && u.call(o), 0) : o.next) && !(u = u.call(o, f[1])).done)
          return u;
        switch (o = 0, u && (f = [f[0] & 2, u.value]), f[0]) {
          case 0:
          case 1:
            u = f;
            break;
          case 4:
            return r.label++, { value: f[1], done: !1 };
          case 5:
            r.label++, o = f[1], f = [0];
            continue;
          case 7:
            f = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (u = r.trys, !(u = u.length > 0 && u[u.length - 1]) && (f[0] === 6 || f[0] === 2)) {
              r = 0;
              continue;
            }
            if (f[0] === 3 && (!u || f[1] > u[0] && f[1] < u[3])) {
              r.label = f[1];
              break;
            }
            if (f[0] === 6 && r.label < u[1]) {
              r.label = u[1], u = f;
              break;
            }
            if (u && r.label < u[2]) {
              r.label = u[2], r.ops.push(f);
              break;
            }
            u[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        f = i.call(e, r);
      } catch (p) {
        f = [6, p], o = 0;
      } finally {
        a = u = 0;
      }
    if (f[0] & 5)
      throw f[1];
    return { value: f[0] ? f[1] : void 0, done: !0 };
  }
}, ys = se && se.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Ff, "__esModule", { value: !0 });
var eO = ys(LS), tO = ys(as), rO = Lp, nO = ys(gr), iO = ys(Yf), aO = 5e3, sO = (
  /** @class */
  function() {
    function e() {
      this.arweaveClient = eO.default.initWithDefaultHosts({
        timeout: 1e4,
        logging: !1
        // Enable network request logging
      });
    }
    return e.prototype.findPricesInGraphQL = function(i) {
      return $a(this, void 0, void 0, function() {
        var r, a, o, u, c, d, g, f, p, S, w;
        return Ha(this, function(m) {
          switch (m.label) {
            case 0:
              return [4, this.arweaveClient.network.getInfo()];
            case 1:
              return r = m.sent(), a = r.height - aO, o = `
        {
          transactions(
            tags: [
              { name: "app", values: "Redstone" }
              { name: "type", values: "` + i.type + `" }
              { name: "version", values: "` + i.version + `" }
            ]
            block: { min: ` + a + ` }
            owners: ["` + i.providerAddress + `"]
            first: 1
          ) {
            edges {
              node {
                tags {
                  name
                  value
                }
                id
              }
            }
          }
        }`, [4, rO.run(o)];
            case 2:
              if (u = m.sent().data.transactions.edges, u.length > 0) {
                for (c = u[0].node, d = {}, g = 0, f = c.tags; g < f.length; g++)
                  p = f[g], S = p.name, w = p.value, d[S] = w;
                return [2, {
                  permawebTx: c.id,
                  tags: d
                }];
              } else
                return [2, void 0];
          }
        });
      });
    }, e.prototype.getTxDataById = function(i, r) {
      return $a(this, void 0, void 0, function() {
        var a, o, u;
        return Ha(this, function(c) {
          switch (c.label) {
            case 0:
              return [4, this.arweaveClient.transactions.getData(i, {
                decode: !0
              })];
            case 1:
              return a = c.sent(), o = nO.default.ungzip(Buffer.from(a)), u = tO.default.utils.bufferToString(o), r !== void 0 && r.parseJSON ? [2, JSON.parse(u)] : [2, u];
          }
        });
      });
    }, e.prototype.getProviderDetails = function(i) {
      return $a(this, void 0, void 0, function() {
        var r;
        return Ha(this, function(a) {
          if (r = iO.default.providers, r[i] === void 0)
            throw new Error("Provider details not found: " + i);
          return [2, r[i]];
        });
      });
    }, e.prototype.verifySignature = function(i) {
      return $a(this, void 0, void 0, function() {
        var r, a;
        return Ha(this, function(o) {
          switch (o.label) {
            case 0:
              return r = new TextEncoder().encode(i.signedData), a = Uint8Array.from(Buffer.from(i.signature, "base64")), [4, this.arweaveClient.crypto.verify(i.signerPublicKey, r, a)];
            case 1:
              return [2, o.sent()];
          }
        });
      });
    }, e;
  }()
);
Ff.default = sO;
var Qf = {}, el = { exports: {} }, Bg = function(i, r) {
  return function() {
    for (var o = new Array(arguments.length), u = 0; u < o.length; u++)
      o[u] = arguments[u];
    return i.apply(r, o);
  };
}, oO = Bg, An = Object.prototype.toString;
function tl(e) {
  return An.call(e) === "[object Array]";
}
function _f(e) {
  return typeof e > "u";
}
function uO(e) {
  return e !== null && !_f(e) && e.constructor !== null && !_f(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
function fO(e) {
  return An.call(e) === "[object ArrayBuffer]";
}
function lO(e) {
  return typeof FormData < "u" && e instanceof FormData;
}
function cO(e) {
  var i;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? i = ArrayBuffer.isView(e) : i = e && e.buffer && e.buffer instanceof ArrayBuffer, i;
}
function dO(e) {
  return typeof e == "string";
}
function hO(e) {
  return typeof e == "number";
}
function kg(e) {
  return e !== null && typeof e == "object";
}
function Va(e) {
  if (An.call(e) !== "[object Object]")
    return !1;
  var i = Object.getPrototypeOf(e);
  return i === null || i === Object.prototype;
}
function pO(e) {
  return An.call(e) === "[object Date]";
}
function gO(e) {
  return An.call(e) === "[object File]";
}
function _O(e) {
  return An.call(e) === "[object Blob]";
}
function Ig(e) {
  return An.call(e) === "[object Function]";
}
function vO(e) {
  return kg(e) && Ig(e.pipe);
}
function wO(e) {
  return typeof URLSearchParams < "u" && e instanceof URLSearchParams;
}
function yO(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function mO() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function rl(e, i) {
  if (!(e === null || typeof e > "u"))
    if (typeof e != "object" && (e = [e]), tl(e))
      for (var r = 0, a = e.length; r < a; r++)
        i.call(null, e[r], r, e);
    else
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && i.call(null, e[o], o, e);
}
function vf() {
  var e = {};
  function i(o, u) {
    Va(e[u]) && Va(o) ? e[u] = vf(e[u], o) : Va(o) ? e[u] = vf({}, o) : tl(o) ? e[u] = o.slice() : e[u] = o;
  }
  for (var r = 0, a = arguments.length; r < a; r++)
    rl(arguments[r], i);
  return e;
}
function AO(e, i, r) {
  return rl(i, function(o, u) {
    r && typeof o == "function" ? e[u] = oO(o, r) : e[u] = o;
  }), e;
}
function EO(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
var Mt = {
  isArray: tl,
  isArrayBuffer: fO,
  isBuffer: uO,
  isFormData: lO,
  isArrayBufferView: cO,
  isString: dO,
  isNumber: hO,
  isObject: kg,
  isPlainObject: Va,
  isUndefined: _f,
  isDate: pO,
  isFile: gO,
  isBlob: _O,
  isFunction: Ig,
  isStream: vO,
  isURLSearchParams: wO,
  isStandardBrowserEnv: mO,
  forEach: rl,
  merge: vf,
  extend: AO,
  trim: yO,
  stripBOM: EO
}, Gn = Mt;
function N0(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var Ug = function(i, r, a) {
  if (!r)
    return i;
  var o;
  if (a)
    o = a(r);
  else if (Gn.isURLSearchParams(r))
    o = r.toString();
  else {
    var u = [];
    Gn.forEach(r, function(g, f) {
      g === null || typeof g > "u" || (Gn.isArray(g) ? f = f + "[]" : g = [g], Gn.forEach(g, function(S) {
        Gn.isDate(S) ? S = S.toISOString() : Gn.isObject(S) && (S = JSON.stringify(S)), u.push(N0(f) + "=" + N0(S));
      }));
    }), o = u.join("&");
  }
  if (o) {
    var c = i.indexOf("#");
    c !== -1 && (i = i.slice(0, c)), i += (i.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return i;
}, bO = Mt;
function ms() {
  this.handlers = [];
}
ms.prototype.use = function(i, r, a) {
  return this.handlers.push({
    fulfilled: i,
    rejected: r,
    synchronous: a ? a.synchronous : !1,
    runWhen: a ? a.runWhen : null
  }), this.handlers.length - 1;
};
ms.prototype.eject = function(i) {
  this.handlers[i] && (this.handlers[i] = null);
};
ms.prototype.forEach = function(i) {
  bO.forEach(this.handlers, function(a) {
    a !== null && i(a);
  });
};
var SO = ms, xO = Mt, TO = function(i, r) {
  xO.forEach(i, function(o, u) {
    u !== r && u.toUpperCase() === r.toUpperCase() && (i[r] = o, delete i[u]);
  });
}, Fg = function(i, r, a, o, u) {
  return i.config = r, a && (i.code = a), i.request = o, i.response = u, i.isAxiosError = !0, i.toJSON = function() {
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
      code: this.code
    };
  }, i;
}, Lu, L0;
function Mg() {
  if (L0)
    return Lu;
  L0 = 1;
  var e = Fg;
  return Lu = function(r, a, o, u, c) {
    var d = new Error(r);
    return e(d, a, o, u, c);
  }, Lu;
}
var Du, D0;
function RO() {
  if (D0)
    return Du;
  D0 = 1;
  var e = Mg();
  return Du = function(r, a, o) {
    var u = o.config.validateStatus;
    !o.status || !u || u(o.status) ? r(o) : a(e(
      "Request failed with status code " + o.status,
      o.config,
      null,
      o.request,
      o
    ));
  }, Du;
}
var Pu, P0;
function OO() {
  if (P0)
    return Pu;
  P0 = 1;
  var e = Mt;
  return Pu = e.isStandardBrowserEnv() ? (
    // Standard browser envs support document.cookie
    function() {
      return {
        write: function(a, o, u, c, d, g) {
          var f = [];
          f.push(a + "=" + encodeURIComponent(o)), e.isNumber(u) && f.push("expires=" + new Date(u).toGMTString()), e.isString(c) && f.push("path=" + c), e.isString(d) && f.push("domain=" + d), g === !0 && f.push("secure"), document.cookie = f.join("; ");
        },
        read: function(a) {
          var o = document.cookie.match(new RegExp("(^|;\\s*)(" + a + ")=([^;]*)"));
          return o ? decodeURIComponent(o[3]) : null;
        },
        remove: function(a) {
          this.write(a, "", Date.now() - 864e5);
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
  ), Pu;
}
var Bu, B0;
function CO() {
  return B0 || (B0 = 1, Bu = function(i) {
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(i);
  }), Bu;
}
var ku, k0;
function NO() {
  return k0 || (k0 = 1, ku = function(i, r) {
    return r ? i.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : i;
  }), ku;
}
var Iu, I0;
function LO() {
  if (I0)
    return Iu;
  I0 = 1;
  var e = CO(), i = NO();
  return Iu = function(a, o) {
    return a && !e(o) ? i(a, o) : o;
  }, Iu;
}
var Uu, U0;
function DO() {
  if (U0)
    return Uu;
  U0 = 1;
  var e = Mt, i = [
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
  return Uu = function(a) {
    var o = {}, u, c, d;
    return a && e.forEach(a.split(`
`), function(f) {
      if (d = f.indexOf(":"), u = e.trim(f.substr(0, d)).toLowerCase(), c = e.trim(f.substr(d + 1)), u) {
        if (o[u] && i.indexOf(u) >= 0)
          return;
        u === "set-cookie" ? o[u] = (o[u] ? o[u] : []).concat([c]) : o[u] = o[u] ? o[u] + ", " + c : c;
      }
    }), o;
  }, Uu;
}
var Fu, F0;
function PO() {
  if (F0)
    return Fu;
  F0 = 1;
  var e = Mt;
  return Fu = e.isStandardBrowserEnv() ? (
    // Standard browser envs have full support of the APIs needed to test
    // whether the request URL is of the same origin as current location.
    function() {
      var r = /(msie|trident)/i.test(navigator.userAgent), a = document.createElement("a"), o;
      function u(c) {
        var d = c;
        return r && (a.setAttribute("href", d), d = a.href), a.setAttribute("href", d), {
          href: a.href,
          protocol: a.protocol ? a.protocol.replace(/:$/, "") : "",
          host: a.host,
          search: a.search ? a.search.replace(/^\?/, "") : "",
          hash: a.hash ? a.hash.replace(/^#/, "") : "",
          hostname: a.hostname,
          port: a.port,
          pathname: a.pathname.charAt(0) === "/" ? a.pathname : "/" + a.pathname
        };
      }
      return o = u(window.location.href), function(d) {
        var g = e.isString(d) ? u(d) : d;
        return g.protocol === o.protocol && g.host === o.host;
      };
    }()
  ) : (
    // Non standard browser envs (web workers, react-native) lack needed support.
    function() {
      return function() {
        return !0;
      };
    }()
  ), Fu;
}
var Mu, M0;
function $0() {
  if (M0)
    return Mu;
  M0 = 1;
  var e = Mt, i = RO(), r = OO(), a = Ug, o = LO(), u = DO(), c = PO(), d = Mg();
  return Mu = function(f) {
    return new Promise(function(S, w) {
      var m = f.data, I = f.headers, z = f.responseType;
      e.isFormData(m) && delete I["Content-Type"];
      var C = new XMLHttpRequest();
      if (f.auth) {
        var Y = f.auth.username || "", te = f.auth.password ? unescape(encodeURIComponent(f.auth.password)) : "";
        I.Authorization = "Basic " + btoa(Y + ":" + te);
      }
      var V = o(f.baseURL, f.url);
      C.open(f.method.toUpperCase(), a(V, f.params, f.paramsSerializer), !0), C.timeout = f.timeout;
      function j() {
        if (C) {
          var H = "getAllResponseHeaders" in C ? u(C.getAllResponseHeaders()) : null, L = !z || z === "text" || z === "json" ? C.responseText : C.response, K = {
            data: L,
            status: C.status,
            statusText: C.statusText,
            headers: H,
            config: f,
            request: C
          };
          i(S, w, K), C = null;
        }
      }
      if ("onloadend" in C ? C.onloadend = j : C.onreadystatechange = function() {
        !C || C.readyState !== 4 || C.status === 0 && !(C.responseURL && C.responseURL.indexOf("file:") === 0) || setTimeout(j);
      }, C.onabort = function() {
        C && (w(d("Request aborted", f, "ECONNABORTED", C)), C = null);
      }, C.onerror = function() {
        w(d("Network Error", f, null, C)), C = null;
      }, C.ontimeout = function() {
        var L = "timeout of " + f.timeout + "ms exceeded";
        f.timeoutErrorMessage && (L = f.timeoutErrorMessage), w(d(
          L,
          f,
          f.transitional && f.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED",
          C
        )), C = null;
      }, e.isStandardBrowserEnv()) {
        var P = (f.withCredentials || c(V)) && f.xsrfCookieName ? r.read(f.xsrfCookieName) : void 0;
        P && (I[f.xsrfHeaderName] = P);
      }
      "setRequestHeader" in C && e.forEach(I, function(L, K) {
        typeof m > "u" && K.toLowerCase() === "content-type" ? delete I[K] : C.setRequestHeader(K, L);
      }), e.isUndefined(f.withCredentials) || (C.withCredentials = !!f.withCredentials), z && z !== "json" && (C.responseType = f.responseType), typeof f.onDownloadProgress == "function" && C.addEventListener("progress", f.onDownloadProgress), typeof f.onUploadProgress == "function" && C.upload && C.upload.addEventListener("progress", f.onUploadProgress), f.cancelToken && f.cancelToken.promise.then(function(L) {
        C && (C.abort(), w(L), C = null);
      }), m || (m = null), C.send(m);
    });
  }, Mu;
}
var ot = Mt, H0 = TO, BO = Fg, kO = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function q0(e, i) {
  !ot.isUndefined(e) && ot.isUndefined(e["Content-Type"]) && (e["Content-Type"] = i);
}
function IO() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = $0()), e;
}
function UO(e, i, r) {
  if (ot.isString(e))
    try {
      return (i || JSON.parse)(e), ot.trim(e);
    } catch (a) {
      if (a.name !== "SyntaxError")
        throw a;
    }
  return (r || JSON.stringify)(e);
}
var As = {
  transitional: {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
  },
  adapter: IO(),
  transformRequest: [function(i, r) {
    return H0(r, "Accept"), H0(r, "Content-Type"), ot.isFormData(i) || ot.isArrayBuffer(i) || ot.isBuffer(i) || ot.isStream(i) || ot.isFile(i) || ot.isBlob(i) ? i : ot.isArrayBufferView(i) ? i.buffer : ot.isURLSearchParams(i) ? (q0(r, "application/x-www-form-urlencoded;charset=utf-8"), i.toString()) : ot.isObject(i) || r && r["Content-Type"] === "application/json" ? (q0(r, "application/json"), UO(i)) : i;
  }],
  transformResponse: [function(i) {
    var r = this.transitional, a = r && r.silentJSONParsing, o = r && r.forcedJSONParsing, u = !a && this.responseType === "json";
    if (u || o && ot.isString(i) && i.length)
      try {
        return JSON.parse(i);
      } catch (c) {
        if (u)
          throw c.name === "SyntaxError" ? BO(c, this, "E_JSON_PARSE") : c;
      }
    return i;
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
  validateStatus: function(i) {
    return i >= 200 && i < 300;
  }
};
As.headers = {
  common: {
    Accept: "application/json, text/plain, */*"
  }
};
ot.forEach(["delete", "get", "head"], function(i) {
  As.headers[i] = {};
});
ot.forEach(["post", "put", "patch"], function(i) {
  As.headers[i] = ot.merge(kO);
});
var nl = As, FO = Mt, MO = nl, $O = function(i, r, a) {
  var o = this || MO;
  return FO.forEach(a, function(c) {
    i = c.call(o, i, r);
  }), i;
}, $u, z0;
function $g() {
  return z0 || (z0 = 1, $u = function(i) {
    return !!(i && i.__CANCEL__);
  }), $u;
}
var G0 = Mt, Hu = $O, HO = $g(), qO = nl;
function qu(e) {
  e.cancelToken && e.cancelToken.throwIfRequested();
}
var zO = function(i) {
  qu(i), i.headers = i.headers || {}, i.data = Hu.call(
    i,
    i.data,
    i.headers,
    i.transformRequest
  ), i.headers = G0.merge(
    i.headers.common || {},
    i.headers[i.method] || {},
    i.headers
  ), G0.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(o) {
      delete i.headers[o];
    }
  );
  var r = i.adapter || qO.adapter;
  return r(i).then(function(o) {
    return qu(i), o.data = Hu.call(
      i,
      o.data,
      o.headers,
      i.transformResponse
    ), o;
  }, function(o) {
    return HO(o) || (qu(i), o && o.response && (o.response.data = Hu.call(
      i,
      o.response.data,
      o.response.headers,
      i.transformResponse
    ))), Promise.reject(o);
  });
}, ht = Mt, Hg = function(i, r) {
  r = r || {};
  var a = {}, o = ["url", "method", "data"], u = ["headers", "auth", "proxy", "params"], c = [
    "baseURL",
    "transformRequest",
    "transformResponse",
    "paramsSerializer",
    "timeout",
    "timeoutMessage",
    "withCredentials",
    "adapter",
    "responseType",
    "xsrfCookieName",
    "xsrfHeaderName",
    "onUploadProgress",
    "onDownloadProgress",
    "decompress",
    "maxContentLength",
    "maxBodyLength",
    "maxRedirects",
    "transport",
    "httpAgent",
    "httpsAgent",
    "cancelToken",
    "socketPath",
    "responseEncoding"
  ], d = ["validateStatus"];
  function g(w, m) {
    return ht.isPlainObject(w) && ht.isPlainObject(m) ? ht.merge(w, m) : ht.isPlainObject(m) ? ht.merge({}, m) : ht.isArray(m) ? m.slice() : m;
  }
  function f(w) {
    ht.isUndefined(r[w]) ? ht.isUndefined(i[w]) || (a[w] = g(void 0, i[w])) : a[w] = g(i[w], r[w]);
  }
  ht.forEach(o, function(m) {
    ht.isUndefined(r[m]) || (a[m] = g(void 0, r[m]));
  }), ht.forEach(u, f), ht.forEach(c, function(m) {
    ht.isUndefined(r[m]) ? ht.isUndefined(i[m]) || (a[m] = g(void 0, i[m])) : a[m] = g(void 0, r[m]);
  }), ht.forEach(d, function(m) {
    m in r ? a[m] = g(i[m], r[m]) : m in i && (a[m] = g(void 0, i[m]));
  });
  var p = o.concat(u).concat(c).concat(d), S = Object.keys(i).concat(Object.keys(r)).filter(function(m) {
    return p.indexOf(m) === -1;
  });
  return ht.forEach(S, f), a;
};
const GO = "axios", KO = "0.21.4", WO = "Promise based HTTP client for the browser and node.js", XO = "index.js", ZO = {
  test: "grunt test",
  start: "node ./sandbox/server.js",
  build: "NODE_ENV=production grunt build",
  preversion: "npm test",
  version: "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",
  postversion: "git push && git push --tags",
  examples: "node ./examples/server.js",
  coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
  fix: "eslint --fix lib/**/*.js"
}, jO = {
  type: "git",
  url: "https://github.com/axios/axios.git"
}, VO = [
  "xhr",
  "http",
  "ajax",
  "promise",
  "node"
], JO = "Matt Zabriskie", YO = "MIT", QO = {
  url: "https://github.com/axios/axios/issues"
}, e2 = "https://axios-http.com", t2 = {
  coveralls: "^3.0.0",
  "es6-promise": "^4.2.4",
  grunt: "^1.3.0",
  "grunt-banner": "^0.6.0",
  "grunt-cli": "^1.2.0",
  "grunt-contrib-clean": "^1.1.0",
  "grunt-contrib-watch": "^1.0.0",
  "grunt-eslint": "^23.0.0",
  "grunt-karma": "^4.0.0",
  "grunt-mocha-test": "^0.13.3",
  "grunt-ts": "^6.0.0-beta.19",
  "grunt-webpack": "^4.0.2",
  "istanbul-instrumenter-loader": "^1.0.0",
  "jasmine-core": "^2.4.1",
  karma: "^6.3.2",
  "karma-chrome-launcher": "^3.1.0",
  "karma-firefox-launcher": "^2.1.0",
  "karma-jasmine": "^1.1.1",
  "karma-jasmine-ajax": "^0.1.13",
  "karma-safari-launcher": "^1.0.0",
  "karma-sauce-launcher": "^4.3.6",
  "karma-sinon": "^1.0.5",
  "karma-sourcemap-loader": "^0.3.8",
  "karma-webpack": "^4.0.2",
  "load-grunt-tasks": "^3.5.2",
  minimist: "^1.2.0",
  mocha: "^8.2.1",
  sinon: "^4.5.0",
  "terser-webpack-plugin": "^4.2.3",
  typescript: "^4.0.5",
  "url-search-params": "^0.10.0",
  webpack: "^4.44.2",
  "webpack-dev-server": "^3.11.0"
}, r2 = {
  "./lib/adapters/http.js": "./lib/adapters/xhr.js"
}, n2 = "dist/axios.min.js", i2 = "dist/axios.min.js", a2 = "./index.d.ts", s2 = {
  "follow-redirects": "^1.14.0"
}, o2 = [
  {
    path: "./dist/axios.min.js",
    threshold: "5kB"
  }
], u2 = {
  name: GO,
  version: KO,
  description: WO,
  main: XO,
  scripts: ZO,
  repository: jO,
  keywords: VO,
  author: JO,
  license: YO,
  bugs: QO,
  homepage: e2,
  devDependencies: t2,
  browser: r2,
  jsdelivr: n2,
  unpkg: i2,
  typings: a2,
  dependencies: s2,
  bundlesize: o2
};
var qg = u2, il = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, i) {
  il[e] = function(a) {
    return typeof a === e || "a" + (i < 1 ? "n " : " ") + e;
  };
});
var K0 = {}, f2 = qg.version.split(".");
function zg(e, i) {
  for (var r = i ? i.split(".") : f2, a = e.split("."), o = 0; o < 3; o++) {
    if (r[o] > a[o])
      return !0;
    if (r[o] < a[o])
      return !1;
  }
  return !1;
}
il.transitional = function(i, r, a) {
  var o = r && zg(r);
  function u(c, d) {
    return "[Axios v" + qg.version + "] Transitional option '" + c + "'" + d + (a ? ". " + a : "");
  }
  return function(c, d, g) {
    if (i === !1)
      throw new Error(u(d, " has been removed in " + r));
    return o && !K0[d] && (K0[d] = !0, console.warn(
      u(
        d,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), i ? i(c, d, g) : !0;
  };
};
function l2(e, i, r) {
  if (typeof e != "object")
    throw new TypeError("options must be an object");
  for (var a = Object.keys(e), o = a.length; o-- > 0; ) {
    var u = a[o], c = i[u];
    if (c) {
      var d = e[u], g = d === void 0 || c(d, u, e);
      if (g !== !0)
        throw new TypeError("option " + u + " must be " + g);
      continue;
    }
    if (r !== !0)
      throw Error("Unknown option " + u);
  }
}
var c2 = {
  isOlderVersion: zg,
  assertOptions: l2,
  validators: il
}, Gg = Mt, d2 = Ug, W0 = SO, X0 = zO, Es = Hg, Kg = c2, Kn = Kg.validators;
function zi(e) {
  this.defaults = e, this.interceptors = {
    request: new W0(),
    response: new W0()
  };
}
zi.prototype.request = function(i) {
  typeof i == "string" ? (i = arguments[1] || {}, i.url = arguments[0]) : i = i || {}, i = Es(this.defaults, i), i.method ? i.method = i.method.toLowerCase() : this.defaults.method ? i.method = this.defaults.method.toLowerCase() : i.method = "get";
  var r = i.transitional;
  r !== void 0 && Kg.assertOptions(r, {
    silentJSONParsing: Kn.transitional(Kn.boolean, "1.0.0"),
    forcedJSONParsing: Kn.transitional(Kn.boolean, "1.0.0"),
    clarifyTimeoutError: Kn.transitional(Kn.boolean, "1.0.0")
  }, !1);
  var a = [], o = !0;
  this.interceptors.request.forEach(function(w) {
    typeof w.runWhen == "function" && w.runWhen(i) === !1 || (o = o && w.synchronous, a.unshift(w.fulfilled, w.rejected));
  });
  var u = [];
  this.interceptors.response.forEach(function(w) {
    u.push(w.fulfilled, w.rejected);
  });
  var c;
  if (!o) {
    var d = [X0, void 0];
    for (Array.prototype.unshift.apply(d, a), d = d.concat(u), c = Promise.resolve(i); d.length; )
      c = c.then(d.shift(), d.shift());
    return c;
  }
  for (var g = i; a.length; ) {
    var f = a.shift(), p = a.shift();
    try {
      g = f(g);
    } catch (S) {
      p(S);
      break;
    }
  }
  try {
    c = X0(g);
  } catch (S) {
    return Promise.reject(S);
  }
  for (; u.length; )
    c = c.then(u.shift(), u.shift());
  return c;
};
zi.prototype.getUri = function(i) {
  return i = Es(this.defaults, i), d2(i.url, i.params, i.paramsSerializer).replace(/^\?/, "");
};
Gg.forEach(["delete", "get", "head", "options"], function(i) {
  zi.prototype[i] = function(r, a) {
    return this.request(Es(a || {}, {
      method: i,
      url: r,
      data: (a || {}).data
    }));
  };
});
Gg.forEach(["post", "put", "patch"], function(i) {
  zi.prototype[i] = function(r, a, o) {
    return this.request(Es(o || {}, {
      method: i,
      url: r,
      data: a
    }));
  };
});
var h2 = zi, zu, Z0;
function Wg() {
  if (Z0)
    return zu;
  Z0 = 1;
  function e(i) {
    this.message = i;
  }
  return e.prototype.toString = function() {
    return "Cancel" + (this.message ? ": " + this.message : "");
  }, e.prototype.__CANCEL__ = !0, zu = e, zu;
}
var Gu, j0;
function p2() {
  if (j0)
    return Gu;
  j0 = 1;
  var e = Wg();
  function i(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    var a;
    this.promise = new Promise(function(c) {
      a = c;
    });
    var o = this;
    r(function(c) {
      o.reason || (o.reason = new e(c), a(o.reason));
    });
  }
  return i.prototype.throwIfRequested = function() {
    if (this.reason)
      throw this.reason;
  }, i.source = function() {
    var a, o = new i(function(c) {
      a = c;
    });
    return {
      token: o,
      cancel: a
    };
  }, Gu = i, Gu;
}
var Ku, V0;
function g2() {
  return V0 || (V0 = 1, Ku = function(i) {
    return function(a) {
      return i.apply(null, a);
    };
  }), Ku;
}
var Wu, J0;
function _2() {
  return J0 || (J0 = 1, Wu = function(i) {
    return typeof i == "object" && i.isAxiosError === !0;
  }), Wu;
}
var Y0 = Mt, v2 = Bg, Ja = h2, w2 = Hg, y2 = nl;
function Xg(e) {
  var i = new Ja(e), r = v2(Ja.prototype.request, i);
  return Y0.extend(r, Ja.prototype, i), Y0.extend(r, i), r;
}
var rr = Xg(y2);
rr.Axios = Ja;
rr.create = function(i) {
  return Xg(w2(rr.defaults, i));
};
rr.Cancel = Wg();
rr.CancelToken = p2();
rr.isCancel = $g();
rr.all = function(i) {
  return Promise.all(i);
};
rr.spread = g2();
rr.isAxiosError = _2();
el.exports = rr;
el.exports.default = rr;
var m2 = el.exports, A2 = m2, Xu = se && se.__awaiter || function(e, i, r, a) {
  function o(u) {
    return u instanceof r ? u : new r(function(c) {
      c(u);
    });
  }
  return new (r || (r = Promise))(function(u, c) {
    function d(p) {
      try {
        f(a.next(p));
      } catch (S) {
        c(S);
      }
    }
    function g(p) {
      try {
        f(a.throw(p));
      } catch (S) {
        c(S);
      }
    }
    function f(p) {
      p.done ? u(p.value) : o(p.value).then(d, g);
    }
    f((a = a.apply(e, i || [])).next());
  });
}, Zu = se && se.__generator || function(e, i) {
  var r = { label: 0, sent: function() {
    if (u[0] & 1)
      throw u[1];
    return u[1];
  }, trys: [], ops: [] }, a, o, u, c;
  return c = { next: d(0), throw: d(1), return: d(2) }, typeof Symbol == "function" && (c[Symbol.iterator] = function() {
    return this;
  }), c;
  function d(f) {
    return function(p) {
      return g([f, p]);
    };
  }
  function g(f) {
    if (a)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (a = 1, o && (u = f[0] & 2 ? o.return : f[0] ? o.throw || ((u = o.return) && u.call(o), 0) : o.next) && !(u = u.call(o, f[1])).done)
          return u;
        switch (o = 0, u && (f = [f[0] & 2, u.value]), f[0]) {
          case 0:
          case 1:
            u = f;
            break;
          case 4:
            return r.label++, { value: f[1], done: !1 };
          case 5:
            r.label++, o = f[1], f = [0];
            continue;
          case 7:
            f = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (u = r.trys, !(u = u.length > 0 && u[u.length - 1]) && (f[0] === 6 || f[0] === 2)) {
              r = 0;
              continue;
            }
            if (f[0] === 3 && (!u || f[1] > u[0] && f[1] < u[3])) {
              r.label = f[1];
              break;
            }
            if (f[0] === 6 && r.label < u[1]) {
              r.label = u[1], u = f;
              break;
            }
            if (u && r.label < u[2]) {
              r.label = u[2], r.ops.push(f);
              break;
            }
            u[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        f = i.call(e, r);
      } catch (p) {
        f = [6, p], o = 0;
      } finally {
        a = u = 0;
      }
    if (f[0] & 5)
      throw f[1];
    return { value: f[0] ? f[1] : void 0, done: !0 };
  }
}, Zg = se && se.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Qf, "__esModule", { value: !0 });
var ju = Zg(A2), Q0 = Zg(Uf), E2 = (
  /** @class */
  function() {
    function e(i) {
      this.cacheApiUrl = i;
    }
    return e.prototype.setCacheApiUrl = function(i) {
      this.cacheApiUrl = i;
    }, e.prototype.getPrice = function(i) {
      return Xu(this, void 0, void 0, function() {
        var r, a;
        return Zu(this, function(o) {
          switch (o.label) {
            case 0:
              return r = {
                symbol: i.symbol,
                provider: i.provider,
                limit: 1
              }, i.timestamp !== void 0 && (r.toTimestamp = i.timestamp), [4, ju.default.get(this.cacheApiUrl, { params: r })];
            case 1:
              return a = o.sent().data, Array.isArray(a) && a.length === 1 ? [2, a[0]] : [2, void 0];
          }
        });
      });
    }, e.prototype.getPriceForManyTokens = function(i) {
      return Xu(this, void 0, void 0, function() {
        var r, a;
        return Zu(this, function(o) {
          switch (o.label) {
            case 0:
              return r = {
                provider: i.provider,
                toTimestamp: i.timestamp
              }, i.symbols !== void 0 && (r.symbols = i.symbols.join(",")), [4, ju.default.get(this.cacheApiUrl, { params: r })];
            case 1:
              return a = o.sent().data, [2, a];
          }
        });
      });
    }, e.prototype.getManyPrices = function(i) {
      return Xu(this, void 0, void 0, function() {
        var r, a;
        return Zu(this, function(o) {
          switch (o.label) {
            case 0:
              return r = Q0.default.pickBy(i, function(u) {
                return !Q0.default.isUndefined(u);
              }), [4, ju.default.get(this.cacheApiUrl, { params: r })];
            case 1:
              return a = o.sent().data, [2, a];
          }
        });
      });
    }, e;
  }()
);
Qf.default = E2;
var al = {};
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
var b2 = function(i) {
  return i != null && typeof i == "object" && Array.isArray(i) === !1;
};
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
var S2 = b2;
function ep(e) {
  return S2(e) === !0 && Object.prototype.toString.call(e) === "[object Object]";
}
var x2 = function(i) {
  var r, a;
  return !(ep(i) === !1 || (r = i.constructor, typeof r != "function") || (a = r.prototype, ep(a) === !1) || a.hasOwnProperty("isPrototypeOf") === !1);
}, T2 = x2;
function R2(e, i) {
  return e.localeCompare(i);
}
function wf(e, i) {
  var r;
  return Array.isArray(e) ? e.map(function(a) {
    return wf(a, i);
  }) : T2(e) ? (r = {}, Object.keys(e).sort(i || R2).forEach(function(a) {
    r[a] = wf(e[a], i);
  }), r) : e;
}
var O2 = wf, C2 = se && se.__awaiter || function(e, i, r, a) {
  function o(u) {
    return u instanceof r ? u : new r(function(c) {
      c(u);
    });
  }
  return new (r || (r = Promise))(function(u, c) {
    function d(p) {
      try {
        f(a.next(p));
      } catch (S) {
        c(S);
      }
    }
    function g(p) {
      try {
        f(a.throw(p));
      } catch (S) {
        c(S);
      }
    }
    function f(p) {
      p.done ? u(p.value) : o(p.value).then(d, g);
    }
    f((a = a.apply(e, i || [])).next());
  });
}, N2 = se && se.__generator || function(e, i) {
  var r = { label: 0, sent: function() {
    if (u[0] & 1)
      throw u[1];
    return u[1];
  }, trys: [], ops: [] }, a, o, u, c;
  return c = { next: d(0), throw: d(1), return: d(2) }, typeof Symbol == "function" && (c[Symbol.iterator] = function() {
    return this;
  }), c;
  function d(f) {
    return function(p) {
      return g([f, p]);
    };
  }
  function g(f) {
    if (a)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (a = 1, o && (u = f[0] & 2 ? o.return : f[0] ? o.throw || ((u = o.return) && u.call(o), 0) : o.next) && !(u = u.call(o, f[1])).done)
          return u;
        switch (o = 0, u && (f = [f[0] & 2, u.value]), f[0]) {
          case 0:
          case 1:
            u = f;
            break;
          case 4:
            return r.label++, { value: f[1], done: !1 };
          case 5:
            r.label++, o = f[1], f = [0];
            continue;
          case 7:
            f = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (u = r.trys, !(u = u.length > 0 && u[u.length - 1]) && (f[0] === 6 || f[0] === 2)) {
              r = 0;
              continue;
            }
            if (f[0] === 3 && (!u || f[1] > u[0] && f[1] < u[3])) {
              r.label = f[1];
              break;
            }
            if (f[0] === 6 && r.label < u[1]) {
              r.label = u[1], u = f;
              break;
            }
            if (u && r.label < u[2]) {
              r.label = u[2], r.ops.push(f);
              break;
            }
            u[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        f = i.call(e, r);
      } catch (p) {
        f = [6, p], o = 0;
      } finally {
        a = u = 0;
      }
    if (f[0] & 5)
      throw f[1];
    return { value: f[0] ? f[1] : void 0, done: !0 };
  }
}, jg = se && se.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(al, "__esModule", { value: !0 });
var L2 = jg(O2), D2 = jg(Uf), P2 = (
  /** @class */
  function() {
    function e(i) {
      this.arweaveProxy = i;
    }
    return e.prototype.assertValidSignature = function(i) {
      return C2(this, void 0, void 0, function() {
        return N2(this, function(r) {
          return [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.getPriceSignedData = function(i) {
      var r, a = D2.default.pick(i, [
        "id",
        "source",
        "symbol",
        "timestamp",
        "version",
        "value",
        "permawebTx",
        "provider"
      ]);
      return i.version === "3" || !((r = i.version) === null || r === void 0) && r.includes(".") ? JSON.stringify(L2.default(a)) : JSON.stringify(a);
    }, e;
  }()
);
al.default = P2;
var sl = {}, B2 = se && se.__extends || function() {
  var e = function(i, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, o) {
      a.__proto__ = o;
    } || function(a, o) {
      for (var u in o)
        Object.prototype.hasOwnProperty.call(o, u) && (a[u] = o[u]);
    }, e(i, r);
  };
  return function(i, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(i, r);
    function a() {
      this.constructor = i;
    }
    i.prototype = r === null ? Object.create(r) : (a.prototype = r.prototype, new a());
  };
}();
Object.defineProperty(sl, "__esModule", { value: !0 });
var k2 = (
  /** @class */
  function(e) {
    B2(i, e);
    function i(r) {
      return e.call(this, "Price not found for symbol: " + r) || this;
    }
    return i;
  }(Error)
);
sl.default = k2;
var ol = {}, ul = {};
Object.defineProperty(ul, "__esModule", { value: !0 });
ul.default = {
  redstone: {
    address: "I-5rWUehEv-MjdK9gFw09RxfSLQX9DIHxG614Wf8qo0",
    publicKey: "xyTvKiCST8bAT6sxrgkLh8UCX2N1eKvawODuxwq4qOHIdDAZFU_3N2m59rkZ0E7m77GsJuf1I8u0oEJEbxAdT7uD2JTwoYEHauXSxyJYvF0RCcZOhl5P1PJwImd44SJYa_9My7L84D5KXB9SKs8_VThe7ZyOb5HSGLNvMIK6A8IJ4Hr_tg9GYm65CRmtcu18S9mhun8vgw2wi7Gw6oR6mc4vU1I-hrU66Fi7YlXwFieP6YSy01JqoLPhU84EunPQzXPouVSbXjgRU5kFVxtdRy4GK2fzEBFYsQwCQgFrySCrFKHV8AInu9jerfof_DxNKiXkBzlB8nc22CrYnvvio_BWyh-gN0hQHZT0gwMR-A7sbXNCQJfReaIZzX_jP6XoB82PnpzmL_j1mJ2lnv2Rn001flBAx9AYxtGXd9s07pA-FggTbEG3Y2UnlWW6l3EJ93E0IfxL0PqGEUlp217mxUHvmTw9fkGDWa8rT9RPmsTyji-kMFSefclw80cBm_iOsIEutGP4S3LDbP-ZVJWDeJOBQQpSgwbisl8qbjl2sMQLQihoG2TQyNbmLwfyq-XSULkXjUi1_6BH36wnDBLWBKF-bS2bLKcGtn3Vjet72lNHxJJilcj8vpauwJG0078S_lO5uGt6oicdGR6eh_NSn6_8za_tXg0G_fohz4Yb1z8",
    evmAddress: "0x0C39486f770B26F5527BBBf942726537986Cd7eb"
  },
  "redstone-rapid": {
    address: "zYqPZuALSPa_f5Agvf8g2JHv94cqMn9aBtnH7GFHbuA",
    publicKey: "tfkkt6lHR3lSEBNvjistpdGb8pR9UJoOVO-IuXRXD9PckAqY7TAVuDVhrcQDM56GZ_EUh6Eg_NRYd-EGW8SEQLHXtY_CM4P8563xUpw0XcZJbpOeScFcN5JdN47gq8vllOheO6-v4nRPLVabRVJqkXEqzdEwxQNYDkmPL-gxE0ziZcQRQZdJUzL5mI9DzwpPC86JBVwsBK71iuRlstABciIu8u77qyArkNu0pPig9OFQvT3Vg4OPuWXd83EhqEuN5gqVufyomkmL8X7agiEjDf-UQIfZrSYqgiJsWiVJ2aKHRhLZN17wdX51L21Cg2Sbyb3B1Roy5EgUUTdJ2MY7LnI-CTbBBJLKUHSvN67MDhj1OSBwUULc8bgVCzmfVQryIFmb4tucKvz7TRAWseXNO2MtMlggXa42Hx0sOTopbFTmT_r9glRLYw3QLzyJVH7Ltqr8QldoU-VMWtpo5cmOGh8jwVknSHqWNURbRCoDfAuwh8lpWXBjL_V8haaY0OKFT9Lpi1VW8o4Kfx7ED1VAnLcpVIoV5CkPs_L0Qy_G7XpgA02OAbJH2KvwxZPeSSymdupmr1KMc8iGz5B4a1HEcKggk5ETFfeGz5r0hDha3dwDj-dOv1jbADcdgk7e2xaLgw1CpS1XEHhAnhBJgAzJDJpcHKrxPkD6cUc7FbnsBCE",
    evmAddress: "0xf786a909D559F5Dee2dc6706d8e5A81728a39aE9"
  },
  "redstone-stocks": {
    address: "Yba8IVc_01bFxutKNJAZ7CmTD5AVi2GcWXf1NajPAsc",
    publicKey: "wOoClMPZ_maAoE6OhCC8svn_9gu8rjuWPi3Grf05zpQnCzeFjzUocJUr0ta-muJDqfiTd4t5KR2qNxn3nkN2_kXsn5AcXnlI4UgnRdcEvsDh6yPMoMlAiAD6c0_CIgdiMFku5OTijNMtFYOybPKrd9Xdf_7_lnRZhU9qQXeBclVjmIzftwNaTFYI1sgApWKMxJ6301CY7VN9SOD9KBrFQJ3QjWqLrLwAyAu_Q6aBeQF_L-cZSFCiTfwyDptiMCdLAjzU9s55LNAg65pZ_OfFsvqylwiXEVIEDLUI3nmcM6OUHfyAG2TxoeXeem9nCpA96MiM8MyTWtOApGA3GW__j3fxutD0wt3_uGnVRZoypPqNuPjb5BraF0owTDYJQNML9Ddx1Hy6gMXjvjxn-MbAV7tI4KnDynrbtXPSZYjRpTpxcH9Rlr-bQAZWGpYF7OWpsZlPuE4MdxpQYhqLj6wfGCxTyzIjyt_t4zR28gWIGT5SfM-etcuXyy_chspsIqisSj781AP7YMTIxzyrY_LAAm-u5gz5VwnD8xDKIrYcsxLpC4V30HFWRc5vYtBQ0cAZYnp9AGGFD-6A7PnqQ1EYSSEHzSAqoYHaqxuAvxJEhG5AECdXBS3-FpgbGgVFEeQxIH7v9Js6-Uk85t23MjRUJFNo2JIlvyolmtkd3mf88qc",
    evmAddress: "0x926E370fD53c23f8B71ad2B3217b227E41A92b12"
  },
  "redstone-avalanche": {
    address: "f1Ipos2fVPbxPVO65GBygkMyW0tkAhp2hdprRPPBBN8",
    publicKey: "nehHT9-CMWscteR3COOU455AmDI8VihUPG05kDryVl8wjv4iE_7MttV2rz3MTIicL1BNDQ246EnyIL_4qsqu8a_B3dZT8sVdfOtHqh48pDgA0MJ8ifFVUtyabr3D2ZSc2M4re79wm2SQ_S74ZNHV7zBIBS8pUHB20TfrKhrOWi-W0hfkxrqz4jIngXIPmE1ycYbaj9OHSVRFIB-EZN-1LmLZuy2EAAN0nOqJ-aYoblcGOu4WfZDpTXTfj-6-GRRBgeHen3MYnQuDneEYYrtzoCnimWGYrqRnpM654mJTW7gp_NIqLnXn3yG2aS2pbhn1_I0CavtKuE4PSACoP0UwZaGXEtanIaSuMDkeRdu-zhrr8yXZSW1inWdC0lhWPxAhzTYWQ00_OD6oj2FUtbXbAk_F-aPnT1Teb-LcNn6q-HbHSeZ_VV0ge5nn3zvBCc77z-Qfbgyd_a7dNwfy8sVkQc4-gvDJIftzxVXbUWnc3ipvL-PHfLsajg5Jkhteuvf8bIS0cNFS5u9pu3qnutskQxSymPzhkVmSyMWNe48Xp3ok4mUA9SuWTb6AskyoDVR9APh7JNDgeYINctgduqawzJQFxcVDuoW-1b8Gy79EYXW8yHowpAaDm6eYGTPQjnMpttThZwFiC_81JTXHXmDneKm677F2kO-1f6o4UWTBOEk",
    evmAddress: "0x3a7d971De367FE15D164CDD952F64205F2D9f10c"
  },
  "redstone-dev": {
    address: "33F0QHcb22W7LwWR1iRC8Az1ntZG09XQ03YWuw2ABqA",
    publicKey: "omNGUhh5ar4WnqNxSjDDHBfhK5nMshxyRXUW8uObuxxKELKQjUeEsUdtg5UNuGnUh4AYb5rmGsx_KrLmuqbxl4-OLQrDNnj_LYcP78RLCA7wwonzi5HZVi6vXZ765JKQ-f5SJtFR7hhjj8W8f6PFQ_F2AjtNBkC6basAP4RM3GYIKQGUdVfvAJECZYcjtkZBGZtBxTzSm3SsvcdyVZkiEnvFzg1xLgwsGNuq8dHFciUHaa_ItNzM8GZ_Esjx77qgRLUwKNGvpU8nbao07YxcC7vj-opQQTAWNt1spxLLPqRTRJM_JGDgOEhEN_Tr0qWmjz61LhFW15NJiY1D5sBpOUM29IEpqhMUjj2r2TWp8-gjus_1u3g-KCB6ydfWbjsW9W5oZUfXE8lBKpmQFQ7jOzfev94-uVkxvnK4lY-FeP0fOD6hL_3EPAWLR1oWUqwXPs38A_vvys_ySTgQ11VWEtW-F8s3BRdeHFNZ4XalWAF-BM81HoyC2TwcbLJx3pLJS4FjqbQXcjPCzGE-eUztwKH73luqYXyG-S6sfBWRlqwcwsB9vNp7SnIDs2VLNUmxXG5PpwWG7GlO3HHj-WSchVfFqge0jHlDQeukIIy6fYIqnXaR6cSpiAfqHyzazOnOGgjBUBYDky5LlnrO8bctggYDlAyzJAn997AjeLTlmLM"
  },
  "redstone-avalanche-prod-1": {
    address: "TEHhCDWy-vGmPSZsYJyM0aP_MM4xESgyIZdf5mVODzg",
    publicKey: "01vc-Uxo9LabpCzQBGLdtlsaoJh9ee5rl-AcOG6dwmXoUDHRUzwexCmIItDOJ7yqus-XMxHeTlks8Re_q7oiKvKAU9KGoYnhoP5hiymeqFMwCIta0Qne92Za9Nm2R2tBW5cUqFHeXJuEutDnU0PUkBF5W7Ut3x3gd0xyVe9j69Sqd-kIQL_E47_ost0-pwHd76z6MZm_u7zmxbnTq0OsZTP4OQrvsnlRLpjyRsNzQomsKjuakM4RcYwfpueLKLwQa4OOJ9uWxsrSmtwdwdHZzQY9F2-l2LOllu5L-dOeDYCw4q9KZ0gmkKM6333pPo8DB-r5qe-gKY4_vNgOLRmBJqCF-G_ifWNptM3fhbkGwokfGw0ELCDqXwZ9Ka2QbqM11xViRhUiVPUJLiYwdhydPv9z0Mu5hPOR13GU-sNCf8Zt6GRyZ3ZMIo40GWrGbowJgTvSxU-mAxXwZ3hs3HRxA8wKkgUwUzTJ9UD6tYhctrG-SLUJfDVdEOGmih3FUbayt6OXN4p_I0WP_8OB8FEMV1Y7Ln-fxhErNonO3HDco4sgRiJvCP-Rcey94fK7fOQXAJ2ZLBh00uEjOWPsf0QjWpDp1qjKFkLAGlMoGDCa_SrTikOZtLAf8QKWap2wye3FeBp5UVwedi2vlF1HJuV8u_C-hoMxI1n0FKoyGJEyLrM",
    evmAddress: "0x981bdA8276ae93F567922497153de7A5683708d3"
  },
  "redstone-avalanche-prod-2": {
    address: "ll8DlO4xMwHK7gIMsbnOnN7Jg8Sl674Ls4G0aBfHCyk",
    publicKey: "s0H0bHuIK0X-FptNPBvZGBHDbTLj0y-P6PV33sE2xW8WLx0DUtYz7jzlqc1brQ76SiO7ER-B9v80uLkaf5RwRQG-NL3Cm79FOxksz1oA0_wvK5oI-uZRWHDH4uTjhsnc3K2rg6N1X5J0GrSmB-puwiVt-1_fYrCyyzv2rE135bG61IA0i_4_cREr9t84WAYIkSbH003vbuI1KssDJtzqwVidC-DtYuzSnp1oqd4WPBDWSRSM_AswYFCk4A0xROhSmRf--140th5soz7FEJ92QRd3UYGgZ7HpPnedz-xCDgRi1-h12eMzCQM-HtipEJDl2DeTjekcTqPk_2BfnclpeDHO8myd49ikqwlHpkv0rerB3kJgDWYXcP499cZfXetEOrAiVlbPsmkJvpT7u1swaWyG5m78AjBAjZ1RrlSMLXuEHEPb1H31w16oPO6W-cqsZLZXjnxom5GXCbBOZ2Sdo7eIoTt7WMW653yzwZ97tjyMTbM5IqJZLyAFJgq6CFFnwAiKZlrtnCNHWFpfCm4uxsAzAyoW2l0FMZ4lgp7cUCHnl7IEWKSpkfsZy5FLQ0kInfeabZXPs12d5ufnL3upRSlL3pbi0OGrRQyojhOwIkasuVe0MiSSJW1QoD7oK07GWQhSke40vg3GrKW8V57IKSd1pU8owj1k7R9lADYAWLk",
    evmAddress: "0x3BEFDd935b50F172e696A5187DBaCfEf0D208e48"
  }
};
var fl = {};
Object.defineProperty(fl, "__esModule", { value: !0 });
fl.default = {
  TSLA: [
    "redstone-stocks",
    "redstone"
  ],
  AAPL: [
    "redstone-stocks",
    "redstone"
  ],
  IBM: [
    "redstone-stocks"
  ],
  AMZN: [
    "redstone-stocks",
    "redstone"
  ],
  GOOG: [
    "redstone-stocks"
  ],
  COST: [
    "redstone-stocks"
  ],
  DIS: [
    "redstone-stocks"
  ],
  FB: [
    "redstone-stocks",
    "redstone"
  ],
  MA: [
    "redstone-stocks"
  ],
  MSFT: [
    "redstone-stocks"
  ],
  NFLX: [
    "redstone-stocks",
    "redstone"
  ],
  NKE: [
    "redstone-stocks"
  ],
  PINS: [
    "redstone-stocks"
  ],
  SHOP: [
    "redstone-stocks"
  ],
  SPOT: [
    "redstone-stocks"
  ],
  TDOC: [
    "redstone-stocks"
  ],
  SPY: [
    "redstone-stocks",
    "redstone"
  ],
  QQQ: [
    "redstone-stocks"
  ],
  ONEQ: [
    "redstone-stocks"
  ],
  IWM: [
    "redstone-stocks"
  ],
  EFA: [
    "redstone-stocks"
  ],
  VGK: [
    "redstone-stocks"
  ],
  INDA: [
    "redstone-stocks"
  ],
  RSX: [
    "redstone-stocks"
  ],
  "ZC=F": [
    "redstone-stocks"
  ],
  "ZS=F": [
    "redstone-stocks"
  ],
  "ZM=F": [
    "redstone-stocks"
  ],
  "ZW=F": [
    "redstone-stocks"
  ],
  "KE=F": [
    "redstone-stocks"
  ],
  "ZO=F": [
    "redstone-stocks"
  ],
  "ZR=F": [
    "redstone-stocks"
  ],
  "CL=F": [
    "redstone-stocks"
  ],
  "RB=F": [
    "redstone-stocks"
  ],
  "NG=F": [
    "redstone-stocks"
  ],
  "QA=F": [
    "redstone-stocks"
  ],
  "EH=F": [
    "redstone-stocks"
  ],
  "GC=F": [
    "redstone-stocks"
  ],
  "SI=F": [
    "redstone-stocks"
  ],
  "HG=F": [
    "redstone-stocks"
  ],
  "PL=F": [
    "redstone-stocks"
  ],
  "PA=F": [
    "redstone-stocks"
  ],
  "LE=F": [
    "redstone-stocks"
  ],
  "GF=F": [
    "redstone-stocks"
  ],
  "HE=F": [
    "redstone-stocks"
  ],
  "PRK=F": [
    "redstone-stocks"
  ],
  "DC=F": [
    "redstone-stocks"
  ],
  "GNF=F": [
    "redstone-stocks"
  ],
  "CB=F": [
    "redstone-stocks"
  ],
  "CSC=F": [
    "redstone-stocks"
  ],
  BTC: [
    "redstone-rapid",
    "redstone",
    "redstone-avalanche"
  ],
  ETH: [
    "redstone-rapid",
    "redstone",
    "redstone-avalanche"
  ],
  BNB: [
    "redstone-rapid",
    "redstone"
  ],
  ADA: [
    "redstone-rapid",
    "redstone"
  ],
  USDT: [
    "redstone-rapid",
    "redstone",
    "redstone-avalanche"
  ],
  DOT: [
    "redstone-rapid",
    "redstone"
  ],
  XRP: [
    "redstone-rapid",
    "redstone"
  ],
  LTC: [
    "redstone"
  ],
  LINK: [
    "redstone",
    "redstone-avalanche"
  ],
  BCH: [
    "redstone"
  ],
  XLM: [
    "redstone-rapid",
    "redstone"
  ],
  USDC: [
    "redstone"
  ],
  UNI: [
    "redstone"
  ],
  DOGE: [
    "redstone-rapid",
    "redstone"
  ],
  WBTC: [
    "redstone"
  ],
  OKB: [
    "redstone"
  ],
  XEM: [
    "redstone"
  ],
  ATOM: [
    "redstone"
  ],
  AAVE: [
    "redstone"
  ],
  SOL: [
    "redstone"
  ],
  CRO: [
    "redstone"
  ],
  EOS: [
    "redstone"
  ],
  XMR: [
    "redstone"
  ],
  BSV: [
    "redstone"
  ],
  TRX: [
    "redstone"
  ],
  HT: [
    "redstone"
  ],
  MIOTA: [
    "redstone"
  ],
  THETA: [
    "redstone"
  ],
  SNX: [
    "redstone"
  ],
  NEO: [
    "redstone"
  ],
  XTZ: [
    "redstone"
  ],
  VET: [
    "redstone"
  ],
  LUNA: [
    "redstone"
  ],
  FTT: [
    "redstone"
  ],
  DASH: [
    "redstone"
  ],
  DAI: [
    "redstone"
  ],
  GRT: [
    "redstone"
  ],
  BUSD: [
    "redstone"
  ],
  AVAX: [
    "redstone",
    "redstone-avalanche"
  ],
  KSM: [
    "redstone"
  ],
  EGLD: [
    "redstone"
  ],
  SUSHI: [
    "redstone"
  ],
  LEO: [
    "redstone"
  ],
  MKR: [
    "redstone"
  ],
  FIL: [
    "redstone"
  ],
  CEL: [
    "redstone"
  ],
  COMP: [
    "redstone"
  ],
  DCR: [
    "redstone"
  ],
  FTM: [
    "redstone"
  ],
  CAKE: [
    "redstone"
  ],
  VGX: [
    "redstone"
  ],
  RVN: [
    "redstone"
  ],
  ZEC: [
    "redstone"
  ],
  ZIL: [
    "redstone"
  ],
  NEAR: [
    "redstone"
  ],
  ETC: [
    "redstone"
  ],
  UMA: [
    "redstone"
  ],
  NEXO: [
    "redstone"
  ],
  YFI: [
    "redstone"
  ],
  RUNE: [
    "redstone"
  ],
  ZRX: [
    "redstone"
  ],
  REN: [
    "redstone"
  ],
  WAVES: [
    "redstone"
  ],
  MATIC: [
    "redstone"
  ],
  ICX: [
    "redstone"
  ],
  HBAR: [
    "redstone"
  ],
  STX: [
    "redstone"
  ],
  AMP: [
    "redstone"
  ],
  BTT: [
    "redstone"
  ],
  RENBTC: [
    "redstone"
  ],
  MDX: [
    "redstone"
  ],
  CHSB: [
    "redstone"
  ],
  ALGO: [
    "redstone"
  ],
  PAX: [
    "redstone"
  ],
  IOST: [
    "redstone"
  ],
  DGB: [
    "redstone"
  ],
  ONT: [
    "redstone"
  ],
  ZKS: [
    "redstone"
  ],
  BAT: [
    "redstone"
  ],
  NANO: [
    "redstone"
  ],
  LRC: [
    "redstone"
  ],
  OMG: [
    "redstone"
  ],
  UST: [
    "redstone"
  ],
  BNT: [
    "redstone"
  ],
  ZEN: [
    "redstone"
  ],
  ENJ: [
    "redstone"
  ],
  QTUM: [
    "redstone"
  ],
  HOT: [
    "redstone"
  ],
  XVS: [
    "redstone"
  ],
  SC: [
    "redstone"
  ],
  CRV: [
    "redstone"
  ],
  BTG: [
    "redstone"
  ],
  FLOW: [
    "redstone"
  ],
  EWT: [
    "redstone"
  ],
  LSK: [
    "redstone"
  ],
  DODO: [
    "redstone"
  ],
  QNT: [
    "redstone"
  ],
  AR: [
    "redstone-rapid",
    "redstone"
  ],
  RSR: [
    "redstone"
  ],
  "1INCH": [
    "redstone"
  ],
  KCS: [
    "redstone"
  ],
  CELO: [
    "redstone"
  ],
  BAL: [
    "redstone"
  ],
  ALPHA: [
    "redstone"
  ],
  OCEAN: [
    "redstone"
  ],
  GLM: [
    "redstone"
  ],
  CKB: [
    "redstone"
  ],
  KNC: [
    "redstone"
  ],
  AMPL: [
    "redstone"
  ],
  SRM: [
    "redstone"
  ],
  MANA: [
    "redstone"
  ],
  TUSD: [
    "redstone"
  ],
  CUSDT: [
    "redstone"
  ],
  SNT: [
    "redstone"
  ],
  XVG: [
    "redstone"
  ],
  BAND: [
    "redstone"
  ],
  XDC: [
    "redstone"
  ],
  HNT: [
    "redstone"
  ],
  CHZ: [
    "redstone"
  ],
  ORN: [
    "redstone"
  ],
  BADGER: [
    "redstone"
  ],
  NU: [
    "redstone"
  ],
  POLS: [
    "redstone"
  ],
  GT: [
    "redstone"
  ],
  SWAP: [
    "redstone"
  ],
  SCRT: [
    "redstone"
  ],
  POLY: [
    "redstone"
  ],
  CVC: [
    "redstone"
  ],
  BTCST: [
    "redstone"
  ],
  AKT: [
    "redstone"
  ],
  ONE: [
    "redstone"
  ],
  SUSD: [
    "redstone"
  ],
  SFP: [
    "redstone"
  ],
  SFI: [
    "redstone"
  ],
  MIR: [
    "redstone"
  ],
  KAVA: [
    "redstone"
  ],
  UBT: [
    "redstone"
  ],
  SXP: [
    "redstone"
  ],
  NMR: [
    "redstone"
  ],
  GALA: [
    "redstone"
  ],
  GNO: [
    "redstone"
  ],
  BCD: [
    "redstone"
  ],
  DNT: [
    "redstone"
  ],
  RFOX: [
    "redstone"
  ],
  FUN: [
    "redstone"
  ],
  ARK: [
    "redstone"
  ],
  ANKR: [
    "redstone"
  ],
  MATH: [
    "redstone"
  ],
  RIF: [
    "redstone"
  ],
  INJ: [
    "redstone"
  ],
  DENT: [
    "redstone"
  ],
  TOMO: [
    "redstone"
  ],
  GAS: [
    "redstone"
  ],
  FET: [
    "redstone"
  ],
  ETN: [
    "redstone"
  ],
  KMD: [
    "redstone"
  ],
  SAND: [
    "redstone"
  ],
  ARDR: [
    "redstone"
  ],
  LIT: [
    "redstone"
  ],
  USDN: [
    "redstone"
  ],
  UTK: [
    "redstone"
  ],
  REP: [
    "redstone"
  ],
  ANT: [
    "redstone"
  ],
  WIN: [
    "redstone"
  ],
  VTHO: [
    "redstone"
  ],
  XOR: [
    "redstone"
  ],
  UOS: [
    "redstone"
  ],
  MONA: [
    "redstone"
  ],
  MASK: [
    "redstone"
  ],
  STEEM: [
    "redstone"
  ],
  BTM: [
    "redstone"
  ],
  ROSE: [
    "redstone"
  ],
  COTI: [
    "redstone"
  ],
  HTR: [
    "redstone"
  ],
  PRQ: [
    "redstone"
  ],
  WAN: [
    "redstone"
  ],
  PROM: [
    "redstone"
  ],
  ROOK: [
    "redstone"
  ],
  IOTX: [
    "redstone"
  ],
  EDG: [
    "redstone"
  ],
  SKL: [
    "redstone"
  ],
  MFT: [
    "redstone"
  ],
  RDD: [
    "redstone"
  ],
  XAUT: [
    "redstone"
  ],
  LON: [
    "redstone"
  ],
  KEEP: [
    "redstone"
  ],
  SUPER: [
    "redstone"
  ],
  WOO: [
    "redstone"
  ],
  BTS: [
    "redstone"
  ],
  PERP: [
    "redstone"
  ],
  PAXG: [
    "redstone"
  ],
  WAXP: [
    "redstone"
  ],
  FARM: [
    "redstone"
  ],
  AVA: [
    "redstone"
  ],
  GUSD: [
    "redstone"
  ],
  PHA: [
    "redstone"
  ],
  HNS: [
    "redstone"
  ],
  DPI: [
    "redstone"
  ],
  IRIS: [
    "redstone"
  ],
  STAKE: [
    "redstone"
  ],
  ELF: [
    "redstone"
  ],
  RAY: [
    "redstone"
  ],
  HEGIC: [
    "redstone"
  ],
  RLC: [
    "redstone"
  ],
  ERG: [
    "redstone"
  ],
  PIVX: [
    "redstone"
  ],
  LOOM: [
    "redstone"
  ],
  JULD: [
    "redstone"
  ],
  API3: [
    "redstone"
  ],
  EXRD: [
    "redstone"
  ],
  HIVE: [
    "redstone"
  ],
  MX: [
    "redstone"
  ],
  SYS: [
    "redstone"
  ],
  AKRO: [
    "redstone"
  ],
  SHR: [
    "redstone"
  ],
  YFII: [
    "redstone"
  ],
  TORN: [
    "redstone"
  ],
  STORJ: [
    "redstone"
  ],
  AION: [
    "redstone"
  ],
  UQC: [
    "redstone"
  ],
  ANY: [
    "redstone"
  ],
  DUSK: [
    "redstone"
  ],
  WHALE: [
    "redstone"
  ],
  BIFI: [
    "redstone"
  ],
  CREAM: [
    "redstone"
  ],
  LTO: [
    "redstone"
  ],
  UNFI: [
    "redstone"
  ],
  LBC: [
    "redstone"
  ],
  AXS: [
    "redstone"
  ],
  LINA: [
    "redstone"
  ],
  ALBT: [
    "redstone"
  ],
  BCN: [
    "redstone"
  ],
  HARD: [
    "redstone"
  ],
  LPT: [
    "redstone"
  ],
  SWINGBY: [
    "redstone"
  ],
  FRAX: [
    "redstone",
    "redstone-avalanche"
  ],
  STMX: [
    "redstone"
  ],
  HXRO: [
    "redstone"
  ],
  WNXM: [
    "redstone"
  ],
  NEST: [
    "redstone"
  ],
  AUTO: [
    "redstone"
  ],
  OM: [
    "redstone"
  ],
  TRU: [
    "redstone"
  ],
  AUDIO: [
    "redstone"
  ],
  WRX: [
    "redstone"
  ],
  REQ: [
    "redstone"
  ],
  FRONT: [
    "redstone"
  ],
  DF: [
    "redstone"
  ],
  PPT: [
    "redstone"
  ],
  DAO: [
    "redstone"
  ],
  CELR: [
    "redstone"
  ],
  WICC: [
    "redstone"
  ],
  ESD: [
    "redstone"
  ],
  JST: [
    "redstone"
  ],
  TRB: [
    "redstone"
  ],
  KAI: [
    "redstone"
  ],
  DIVI: [
    "redstone"
  ],
  MAPS: [
    "redstone"
  ],
  OGN: [
    "redstone"
  ],
  KP3R: [
    "redstone"
  ],
  ORBS: [
    "redstone"
  ],
  BOND: [
    "redstone"
  ],
  CTK: [
    "redstone"
  ],
  COVER: [
    "redstone"
  ],
  BZRX: [
    "redstone"
  ],
  FIRO: [
    "redstone"
  ],
  SKEY: [
    "redstone"
  ],
  BAO: [
    "redstone"
  ],
  ELA: [
    "redstone"
  ],
  GHST: [
    "redstone"
  ],
  TT: [
    "redstone"
  ],
  AE: [
    "redstone"
  ],
  ARRR: [
    "redstone"
  ],
  RING: [
    "redstone"
  ],
  DATA: [
    "redstone"
  ],
  CTSI: [
    "redstone"
  ],
  DIA: [
    "redstone"
  ],
  FRM: [
    "redstone"
  ],
  IGNIS: [
    "redstone"
  ],
  NULS: [
    "redstone"
  ],
  FSN: [
    "redstone"
  ],
  AUCTION: [
    "redstone"
  ],
  TON: [
    "redstone"
  ],
  ZB: [
    "redstone"
  ],
  POND: [
    "redstone"
  ],
  LAMB: [
    "redstone"
  ],
  MTL: [
    "redstone"
  ],
  VLX: [
    "redstone"
  ],
  CRE: [
    "redstone"
  ],
  NIM: [
    "redstone"
  ],
  MXC: [
    "redstone"
  ],
  ZAP: [
    "redstone"
  ],
  FXS: [
    "redstone"
  ],
  PNT: [
    "redstone"
  ],
  BLZ: [
    "redstone"
  ],
  MLN: [
    "redstone"
  ],
  APY: [
    "redstone"
  ],
  BEL: [
    "redstone"
  ],
  BEAM: [
    "redstone"
  ],
  VSYS: [
    "redstone"
  ],
  YAM: [
    "redstone"
  ],
  RARI: [
    "redstone"
  ],
  FIDA: [
    "redstone"
  ],
  CORE: [
    "redstone"
  ],
  TVK: [
    "redstone"
  ],
  HC: [
    "redstone"
  ],
  MTA: [
    "redstone"
  ],
  KDA: [
    "redstone"
  ],
  RNDR: [
    "redstone"
  ],
  CUSD: [
    "redstone"
  ],
  EURS: [
    "redstone"
  ],
  MEME: [
    "redstone"
  ],
  STPT: [
    "redstone"
  ],
  TLOS: [
    "redstone"
  ],
  DHT: [
    "redstone"
  ],
  GXC: [
    "redstone"
  ],
  BOR: [
    "redstone"
  ],
  ARPA: [
    "redstone"
  ],
  AST: [
    "redstone"
  ],
  XSN: [
    "redstone"
  ],
  VALUE: [
    "redstone"
  ],
  FILDA: [
    "redstone"
  ],
  PNK: [
    "redstone"
  ],
  RAMP: [
    "redstone"
  ],
  SPI: [
    "redstone"
  ],
  NXT: [
    "redstone"
  ],
  HEZ: [
    "redstone"
  ],
  FIS: [
    "redstone"
  ],
  COMBO: [
    "redstone"
  ],
  NWC: [
    "redstone"
  ],
  MPH: [
    "redstone"
  ],
  RFUEL: [
    "redstone"
  ],
  ALEPH: [
    "redstone"
  ],
  XRT: [
    "redstone"
  ],
  SERO: [
    "redstone"
  ],
  NKN: [
    "redstone"
  ],
  FOR: [
    "redstone"
  ],
  FIO: [
    "redstone"
  ],
  REVV: [
    "redstone"
  ],
  RFR: [
    "redstone"
  ],
  AERGO: [
    "redstone"
  ],
  TRYB: [
    "redstone"
  ],
  NEC: [
    "redstone"
  ],
  ZEE: [
    "redstone"
  ],
  UNN: [
    "redstone"
  ],
  ZCN: [
    "redstone"
  ],
  BAC: [
    "redstone"
  ],
  UMB: [
    "redstone"
  ],
  DERO: [
    "redstone"
  ],
  PEAK: [
    "redstone"
  ],
  CRU: [
    "redstone"
  ],
  APL: [
    "redstone"
  ],
  PHX: [
    "redstone"
  ],
  BMI: [
    "redstone"
  ],
  WTC: [
    "redstone"
  ],
  MDT: [
    "redstone"
  ],
  KEY: [
    "redstone"
  ],
  WHITE: [
    "redstone"
  ],
  CVP: [
    "redstone"
  ],
  CHR: [
    "redstone"
  ],
  ULT: [
    "redstone"
  ],
  PRE: [
    "redstone"
  ],
  WING: [
    "redstone"
  ],
  NAS: [
    "redstone"
  ],
  WXT: [
    "redstone"
  ],
  XDB: [
    "redstone"
  ],
  CRPT: [
    "redstone"
  ],
  RLY: [
    "redstone"
  ],
  DEC: [
    "redstone"
  ],
  QASH: [
    "redstone"
  ],
  SDT: [
    "redstone"
  ],
  DEGO: [
    "redstone"
  ],
  RUFF: [
    "redstone"
  ],
  MDA: [
    "redstone"
  ],
  DOCK: [
    "redstone"
  ],
  CUDOS: [
    "redstone"
  ],
  SUKU: [
    "redstone"
  ],
  LOC: [
    "redstone"
  ],
  AITRA: [
    "redstone"
  ],
  PAY: [
    "redstone"
  ],
  VITE: [
    "redstone"
  ],
  CBC: [
    "redstone"
  ],
  MITX: [
    "redstone"
  ],
  ERSDL: [
    "redstone"
  ],
  SMART: [
    "redstone"
  ],
  KAN: [
    "redstone"
  ],
  UBQ: [
    "redstone"
  ],
  SHA: [
    "redstone"
  ],
  COIN: [
    "redstone"
  ],
  JRT: [
    "redstone"
  ],
  HAKKA: [
    "redstone"
  ],
  PROPS: [
    "redstone"
  ],
  TROY: [
    "redstone"
  ],
  DSLA: [
    "redstone"
  ],
  PNG: [
    "redstone",
    "redstone-avalanche"
  ],
  CLO: [
    "redstone"
  ],
  TOP: [
    "redstone"
  ],
  ETP: [
    "redstone"
  ],
  HGET: [
    "redstone"
  ],
  DOS: [
    "redstone"
  ],
  YFL: [
    "redstone"
  ],
  MHC: [
    "redstone"
  ],
  IQN: [
    "redstone"
  ],
  BTSE: [
    "redstone"
  ],
  ABT: [
    "redstone"
  ],
  GTO: [
    "redstone"
  ],
  LAYER: [
    "redstone"
  ],
  ACH: [
    "redstone"
  ],
  NSURE: [
    "redstone"
  ],
  PICKLE: [
    "redstone"
  ],
  BIX: [
    "redstone"
  ],
  SWRV: [
    "redstone"
  ],
  NGM: [
    "redstone"
  ],
  HYDRA: [
    "redstone"
  ],
  DCN: [
    "redstone"
  ],
  PLU: [
    "redstone"
  ],
  EGT: [
    "redstone"
  ],
  ESS: [
    "redstone"
  ],
  TCT: [
    "redstone"
  ],
  MITH: [
    "redstone"
  ],
  VEE: [
    "redstone"
  ],
  DYP: [
    "redstone"
  ],
  SAN: [
    "redstone"
  ],
  MBL: [
    "redstone"
  ],
  CMT: [
    "redstone"
  ],
  SLP: [
    "redstone"
  ],
  EMC: [
    "redstone"
  ],
  MAHA: [
    "redstone"
  ],
  HYDRO: [
    "redstone"
  ],
  DTA: [
    "redstone"
  ],
  SWFTC: [
    "redstone"
  ],
  TRADE: [
    "redstone"
  ],
  BFT: [
    "redstone"
  ],
  CHI: [
    "redstone"
  ],
  SNGLS: [
    "redstone"
  ],
  ACT: [
    "redstone"
  ],
  UBXT: [
    "redstone"
  ],
  DFD: [
    "redstone"
  ],
  DLT: [
    "redstone"
  ],
  VIB: [
    "redstone"
  ],
  LIKE: [
    "redstone"
  ],
  LYM: [
    "redstone"
  ],
  APM: [
    "redstone"
  ],
  GNX: [
    "redstone"
  ],
  AGA: [
    "redstone"
  ],
  SMT: [
    "redstone"
  ],
  GEEQ: [
    "redstone"
  ],
  SATT: [
    "redstone"
  ],
  MDS: [
    "redstone"
  ],
  YOU: [
    "redstone"
  ],
  XDN: [
    "redstone"
  ],
  ANJ: [
    "redstone"
  ],
  BOLT: [
    "redstone"
  ],
  CNNS: [
    "redstone"
  ],
  VEO: [
    "redstone"
  ],
  XCUR: [
    "redstone"
  ],
  BEPRO: [
    "redstone"
  ],
  ENQ: [
    "redstone"
  ],
  FLEX: [
    "redstone"
  ],
  LTX: [
    "redstone"
  ],
  STA: [
    "redstone"
  ],
  BULL: [
    "redstone"
  ],
  DMD: [
    "redstone"
  ],
  SKM: [
    "redstone"
  ],
  OCN: [
    "redstone"
  ],
  ODE: [
    "redstone"
  ],
  NCT: [
    "redstone"
  ],
  NORD: [
    "redstone"
  ],
  ITC: [
    "redstone"
  ],
  RIO: [
    "redstone"
  ],
  YEE: [
    "redstone"
  ],
  REV: [
    "redstone"
  ],
  AMB: [
    "redstone"
  ],
  NFT: [
    "redstone"
  ],
  SOC: [
    "redstone"
  ],
  VEX: [
    "redstone"
  ],
  EOSDT: [
    "redstone"
  ],
  ASP: [
    "redstone"
  ],
  TERN: [
    "redstone"
  ],
  $ANRX: [
    "redstone"
  ],
  TRUE: [
    "redstone"
  ],
  HPB: [
    "redstone"
  ],
  INT: [
    "redstone"
  ],
  RNT: [
    "redstone"
  ],
  XLQ: [
    "redstone"
  ],
  FAIR: [
    "redstone"
  ],
  DMG: [
    "redstone"
  ],
  UOP: [
    "redstone"
  ],
  YOYOW: [
    "redstone"
  ],
  DGTX: [
    "redstone"
  ],
  ALPA: [
    "redstone"
  ],
  IDEA: [
    "redstone"
  ],
  AMN: [
    "redstone"
  ],
  VRA: [
    "redstone"
  ],
  AXIS: [
    "redstone"
  ],
  ABL: [
    "redstone"
  ],
  BASE: [
    "redstone"
  ],
  PHNX: [
    "redstone"
  ],
  BNF: [
    "redstone"
  ],
  HYC: [
    "redstone"
  ],
  TRIO: [
    "redstone"
  ],
  UCT: [
    "redstone"
  ],
  EOSC: [
    "redstone"
  ],
  AIT: [
    "redstone"
  ],
  ETHO: [
    "redstone"
  ],
  QUN: [
    "redstone"
  ],
  LBA: [
    "redstone"
  ],
  CAN: [
    "redstone"
  ],
  BAX: [
    "redstone"
  ],
  AVS: [
    "redstone"
  ],
  BEAR: [
    "redstone"
  ],
  XPR: [
    "redstone"
  ],
  ADEL: [
    "redstone"
  ],
  CHAT: [
    "redstone"
  ],
  OLT: [
    "redstone"
  ],
  OGO: [
    "redstone"
  ],
  PVT: [
    "redstone"
  ],
  RSV: [
    "redstone"
  ],
  CTXC: [
    "redstone"
  ],
  PST: [
    "redstone"
  ],
  ONG: [
    "redstone"
  ],
  ACAT: [
    "redstone"
  ],
  NTK: [
    "redstone"
  ],
  CUR: [
    "redstone"
  ],
  ROCKS: [
    "redstone"
  ],
  XDNA: [
    "redstone"
  ],
  AID: [
    "redstone"
  ],
  AIDOC: [
    "redstone"
  ],
  ACM: [
    "redstone"
  ],
  ALEX: [
    "redstone"
  ],
  ORS: [
    "redstone"
  ],
  SDS: [
    "redstone"
  ],
  CORX: [
    "redstone"
  ],
  ASAFE: [
    "redstone"
  ],
  ALI: [
    "redstone"
  ],
  TNC: [
    "redstone"
  ],
  ALLBI: [
    "redstone"
  ],
  AG8: [
    "redstone"
  ],
  ATM: [
    "redstone"
  ],
  AGS: [
    "redstone"
  ],
  CNS: [
    "redstone"
  ],
  IQ: [
    "redstone"
  ],
  ETZ: [
    "redstone"
  ],
  ALMX: [
    "redstone"
  ],
  ALT: [
    "redstone"
  ],
  FLIXX: [
    "redstone"
  ],
  FESS: [
    "redstone"
  ],
  ALV: [
    "redstone"
  ],
  FLUX: [
    "redstone"
  ],
  ETM: [
    "redstone"
  ],
  DEX: [
    "redstone"
  ],
  GOT: [
    "redstone"
  ],
  BLOC: [
    "redstone"
  ],
  INX: [
    "redstone"
  ],
  A: [
    "redstone"
  ],
  MXT: [
    "redstone"
  ],
  ANON: [
    "redstone"
  ],
  XSR: [
    "redstone"
  ],
  UCM: [
    "redstone"
  ],
  GTX: [
    "redstone"
  ],
  WBT: [
    "redstone"
  ],
  STAK: [
    "redstone"
  ],
  SMC: [
    "redstone"
  ],
  ABET: [
    "redstone"
  ],
  AMS: [
    "redstone"
  ],
  BUNNY: [
    "redstone"
  ],
  APC: [
    "redstone"
  ],
  AGU: [
    "redstone"
  ],
  AET: [
    "redstone"
  ],
  AIAS: [
    "redstone"
  ],
  SSX: [
    "redstone"
  ],
  NIO: [
    "redstone"
  ],
  FCL: [
    "redstone"
  ],
  LBY: [
    "redstone"
  ],
  HOPR: [
    "redstone"
  ],
  ALOHA: [
    "redstone"
  ],
  QTF: [
    "redstone"
  ],
  SPORE: [
    "redstone"
  ],
  RAD: [
    "redstone"
  ],
  QUICK: [
    "redstone"
  ],
  ZUSD: [
    "redstone"
  ],
  LHB: [
    "redstone"
  ],
  ELCASH: [
    "redstone"
  ],
  ALL: [
    "redstone"
  ],
  A5T: [
    "redstone"
  ],
  CWS: [
    "redstone"
  ],
  DFM: [
    "redstone"
  ],
  CVT: [
    "redstone"
  ],
  GME: [
    "redstone"
  ],
  BETH: [
    "redstone"
  ],
  GLCH: [
    "redstone"
  ],
  ROUTE: [
    "redstone"
  ],
  OKT: [
    "redstone"
  ],
  GOLD: [
    "redstone"
  ],
  BAGS: [
    "redstone"
  ],
  GERA: [
    "redstone"
  ],
  HGOLD: [
    "redstone"
  ],
  UCOIN: [
    "redstone"
  ],
  AIM: [
    "redstone"
  ],
  EC: [
    "redstone"
  ],
  XEP: [
    "redstone"
  ],
  AME: [
    "redstone"
  ],
  REEF: [
    "redstone"
  ],
  GUSDT: [
    "redstone"
  ],
  G999: [
    "redstone"
  ],
  BANANA: [
    "redstone"
  ],
  CTC: [
    "redstone"
  ],
  PLEX: [
    "redstone"
  ],
  TBCC: [
    "redstone"
  ],
  HUB: [
    "redstone"
  ],
  CAMP: [
    "redstone"
  ],
  XLMBEAR: [
    "redstone"
  ],
  XLMBULL: [
    "redstone"
  ],
  MOB: [
    "redstone"
  ],
  AIN: [
    "redstone"
  ],
  CLT: [
    "redstone"
  ],
  AKN: [
    "redstone"
  ],
  CFX: [
    "redstone"
  ],
  LONG: [
    "redstone"
  ],
  TRA: [
    "redstone"
  ],
  GASP: [
    "redstone"
  ],
  UBX: [
    "redstone"
  ],
  PASS: [
    "redstone"
  ],
  CHESS: [
    "redstone"
  ],
  AICO: [
    "redstone"
  ],
  CLV: [
    "redstone"
  ],
  AGT: [
    "redstone"
  ],
  JGN: [
    "redstone"
  ],
  AWX: [
    "redstone"
  ],
  APE: [
    "redstone"
  ],
  AHF: [
    "redstone"
  ],
  ECELL: [
    "redstone"
  ],
  FLM: [
    "redstone"
  ],
  ZOMB: [
    "redstone"
  ],
  SFG: [
    "redstone"
  ],
  BID: [
    "redstone"
  ],
  BAKE: [
    "redstone"
  ],
  BURGER: [
    "redstone"
  ],
  VELO: [
    "redstone"
  ],
  NBS: [
    "redstone"
  ],
  SAM: [
    "redstone"
  ],
  HBC: [
    "redstone"
  ],
  ZYRO: [
    "redstone"
  ],
  GOF: [
    "redstone"
  ],
  SUN: [
    "redstone"
  ],
  JFI: [
    "redstone"
  ],
  GBP: [
    "redstone"
  ],
  USDU: [
    "redstone"
  ],
  ALA: [
    "redstone"
  ],
  TAI: [
    "redstone"
  ],
  PEARL: [
    "redstone"
  ],
  EPS: [
    "redstone"
  ],
  EFK: [
    "redstone"
  ],
  ANC: [
    "redstone"
  ],
  KLV: [
    "redstone"
  ],
  BUY: [
    "redstone"
  ],
  BSY: [
    "redstone"
  ],
  AHT: [
    "redstone"
  ],
  AMIX: [
    "redstone"
  ],
  WGRT: [
    "redstone"
  ],
  BNTX: [
    "redstone"
  ],
  ALD: [
    "redstone"
  ],
  CGC: [
    "redstone"
  ],
  SHIB: [
    "redstone"
  ],
  XAMP: [
    "redstone"
  ],
  KTON: [
    "redstone"
  ],
  NVT: [
    "redstone"
  ],
  BBT: [
    "redstone"
  ],
  RINGX: [
    "redstone"
  ],
  RWN: [
    "redstone"
  ],
  DFI: [
    "redstone"
  ],
  POL: [
    "redstone"
  ],
  BAR: [
    "redstone"
  ],
  LOON: [
    "redstone"
  ],
  AKC: [
    "redstone"
  ],
  GATOR: [
    "redstone"
  ],
  ALC: [
    "redstone"
  ],
  AWG: [
    "redstone"
  ],
  GAL: [
    "redstone"
  ],
  NDN: [
    "redstone"
  ],
  ZLW: [
    "redstone"
  ],
  AXT: [
    "redstone"
  ],
  ANW: [
    "redstone"
  ],
  AOS: [
    "redstone"
  ],
  TTT: [
    "redstone"
  ],
  AAB: [
    "redstone"
  ],
  SENSO: [
    "redstone"
  ],
  IBVOL: [
    "redstone"
  ],
  BVOL: [
    "redstone"
  ],
  HMR: [
    "redstone"
  ],
  MASS: [
    "redstone"
  ],
  RBTC: [
    "redstone"
  ],
  AMA: [
    "redstone"
  ],
  USDJ: [
    "redstone"
  ],
  DEP: [
    "redstone"
  ],
  BLCT: [
    "redstone"
  ],
  HDAO: [
    "redstone"
  ],
  SOLO: [
    "redstone"
  ],
  BEER: [
    "redstone"
  ],
  DNA: [
    "redstone"
  ],
  KOK: [
    "redstone"
  ],
  WEST: [
    "redstone"
  ],
  EXCHBULL: [
    "redstone"
  ],
  HTDF: [
    "redstone"
  ],
  DDRT: [
    "redstone"
  ],
  NODE: [
    "redstone"
  ],
  GOLDR: [
    "redstone"
  ],
  CHEX: [
    "redstone"
  ],
  BSVBEAR: [
    "redstone"
  ],
  EXCHBEAR: [
    "redstone"
  ],
  PLF: [
    "redstone"
  ],
  BCHBULL: [
    "redstone"
  ],
  BNA: [
    "redstone"
  ],
  DOGEBULL: [
    "redstone"
  ],
  BCHBEAR: [
    "redstone"
  ],
  BSVBULL: [
    "redstone"
  ],
  TRXBULL: [
    "redstone"
  ],
  AAT: [
    "redstone"
  ],
  BNBBEAR: [
    "redstone"
  ],
  LINKBULL: [
    "redstone"
  ],
  ADABEAR: [
    "redstone"
  ],
  TRXBEAR: [
    "redstone"
  ],
  LINKBEAR: [
    "redstone"
  ],
  LTCBULL: [
    "redstone"
  ],
  LTCBEAR: [
    "redstone"
  ],
  BNBBULL: [
    "redstone"
  ],
  XRPBULL: [
    "redstone"
  ],
  XRPBEAR: [
    "redstone"
  ],
  ALTBULL: [
    "redstone"
  ],
  ADABULL: [
    "redstone"
  ],
  ALTBEAR: [
    "redstone"
  ],
  EOSBEAR: [
    "redstone"
  ],
  ETHBULL: [
    "redstone"
  ],
  APIX: [
    "redstone"
  ],
  ROAD: [
    "redstone"
  ],
  JUV: [
    "redstone"
  ],
  AMC: [
    "redstone"
  ],
  ANCT: [
    "redstone"
  ],
  SUTER: [
    "redstone"
  ],
  BYND: [
    "redstone"
  ],
  DEXA: [
    "redstone"
  ],
  XPO: [
    "redstone"
  ],
  ALP: [
    "redstone"
  ],
  KLAY: [
    "redstone"
  ],
  NDAU: [
    "redstone"
  ],
  ALY: [
    "redstone"
  ],
  RRB: [
    "redstone"
  ],
  TORI: [
    "redstone"
  ],
  NUT: [
    "redstone"
  ],
  EXE: [
    "redstone"
  ],
  AXA: [
    "redstone"
  ],
  ARDX: [
    "redstone"
  ],
  XYZ: [
    "redstone"
  ],
  JOB: [
    "redstone"
  ],
  LOL: [
    "redstone"
  ],
  TRIBE: [
    "redstone"
  ],
  AIRX: [
    "redstone"
  ],
  ANTR: [
    "redstone"
  ],
  ZIK: [
    "redstone"
  ],
  ERK: [
    "redstone"
  ],
  AMON: [
    "redstone"
  ],
  SLV: [
    "redstone"
  ],
  TOKO: [
    "redstone"
  ],
  BEST: [
    "redstone"
  ],
  AMIO: [
    "redstone"
  ],
  ANDES: [
    "redstone"
  ],
  AFO: [
    "redstone"
  ],
  CNTM: [
    "redstone"
  ],
  BRZ: [
    "redstone"
  ],
  XCHF: [
    "redstone"
  ],
  AMIS: [
    "redstone"
  ],
  SRK: [
    "redstone"
  ],
  AIPE: [
    "redstone"
  ],
  TFUEL: [
    "redstone"
  ],
  ALTM: [
    "redstone"
  ],
  GTC: [
    "redstone"
  ],
  BKK: [
    "redstone"
  ],
  ACD: [
    "redstone"
  ],
  ALB: [
    "redstone"
  ],
  BHP: [
    "redstone"
  ],
  BWB: [
    "redstone"
  ],
  AIDUS: [
    "redstone"
  ],
  SONO: [
    "redstone"
  ],
  HEDG: [
    "redstone"
  ],
  PLG: [
    "redstone"
  ],
  ABAO: [
    "redstone"
  ],
  AGVC: [
    "redstone"
  ],
  BHD: [
    "redstone"
  ],
  HPT: [
    "redstone"
  ],
  RRT: [
    "redstone"
  ],
  ANTY: [
    "redstone"
  ],
  STC: [
    "redstone"
  ],
  TMTG: [
    "redstone"
  ],
  MARX: [
    "redstone"
  ],
  ADK: [
    "redstone"
  ],
  XRA: [
    "redstone"
  ],
  EVY: [
    "redstone"
  ],
  ME: [
    "redstone"
  ],
  VIDY: [
    "redstone"
  ],
  FKX: [
    "redstone"
  ],
  ATP: [
    "redstone"
  ],
  PAI: [
    "redstone"
  ],
  CET: [
    "redstone"
  ],
  PERL: [
    "redstone"
  ],
  DREP: [
    "redstone"
  ],
  AGLT: [
    "redstone"
  ],
  AKA: [
    "redstone"
  ],
  NEW: [
    "redstone"
  ],
  CRON: [
    "redstone"
  ],
  AGN: [
    "redstone"
  ],
  INNBC: [
    "redstone"
  ],
  AGET: [
    "redstone"
  ],
  SG: [
    "redstone"
  ],
  OXT: [
    "redstone"
  ],
  XAO: [
    "redstone"
  ],
  MVL: [
    "redstone"
  ],
  CENNZ: [
    "redstone"
  ],
  SEELE: [
    "redstone"
  ],
  ICP: [
    "redstone"
  ],
  ABBC: [
    "redstone"
  ],
  MOF: [
    "redstone"
  ],
  EKT: [
    "redstone"
  ],
  AAC: [
    "redstone"
  ],
  KCASH: [
    "redstone"
  ],
  TOPC: [
    "redstone"
  ],
  AMR: [
    "redstone"
  ],
  UBTC: [
    "redstone"
  ],
  XUC: [
    "redstone"
  ],
  ALTOM: [
    "redstone"
  ],
  ALIS: [
    "redstone"
  ],
  KICK: [
    "redstone"
  ],
  KIN: [
    "redstone"
  ],
  AGRS: [
    "redstone"
  ],
  XWC: [
    "redstone"
  ],
  AGVE: [
    "redstone"
  ],
  AIOZ: [
    "redstone"
  ],
  AWT: [
    "redstone"
  ],
  AKITA: [
    "redstone"
  ],
  ALR: [
    "redstone"
  ],
  ALCX: [
    "redstone"
  ],
  ALUSD: [
    "redstone"
  ],
  ALCH: [
    "redstone"
  ],
  AGOL: [
    "redstone"
  ],
  TLM: [
    "redstone"
  ],
  ALH: [
    "redstone"
  ],
  ALPACA: [
    "redstone"
  ],
  ALPHR: [
    "redstone"
  ],
  ALN: [
    "redstone"
  ],
  AMI: [
    "redstone"
  ],
  FORTH: [
    "redstone"
  ],
  AAPX: [
    "redstone"
  ],
  ANS: [
    "redstone"
  ],
  AGOV: [
    "redstone"
  ],
  MATTER: [
    "redstone"
  ],
  ABLOCK: [
    "redstone"
  ],
  AP3: [
    "redstone"
  ],
  APE$: [
    "redstone"
  ],
  NANA: [
    "redstone"
  ],
  APN: [
    "redstone"
  ],
  BCVT: [
    "redstone"
  ],
  BSBT: [
    "redstone"
  ],
  BOSON: [
    "redstone"
  ],
  CARR: [
    "redstone"
  ],
  CONV: [
    "redstone"
  ],
  CQT: [
    "redstone"
  ],
  DPR: [
    "redstone"
  ],
  ELON: [
    "redstone"
  ],
  DORA: [
    "redstone"
  ],
  ELONGATE: [
    "redstone"
  ],
  ETHA: [
    "redstone"
  ],
  ERN: [
    "redstone"
  ],
  FEI: [
    "redstone"
  ],
  FLY: [
    "redstone"
  ],
  GMT: [
    "redstone"
  ],
  GMEE: [
    "redstone"
  ],
  HAPI: [
    "redstone"
  ],
  HOKK: [
    "redstone"
  ],
  ICE: [
    "redstone"
  ],
  ILV: [
    "redstone"
  ],
  INSUR: [
    "redstone"
  ],
  IQQ: [
    "redstone"
  ],
  KINE: [
    "redstone"
  ],
  KISHU: [
    "redstone"
  ],
  KONO: [
    "redstone"
  ],
  LABS: [
    "redstone"
  ],
  LQTY: [
    "redstone"
  ],
  LUSD: [
    "redstone"
  ],
  MINA: [
    "redstone"
  ],
  MMAON: [
    "redstone"
  ],
  ALICE: [
    "redstone"
  ],
  OCC: [
    "redstone"
  ],
  OXY: [
    "redstone"
  ],
  PANDO: [
    "redstone"
  ],
  PSL: [
    "redstone"
  ],
  PIG: [
    "redstone"
  ],
  PUNDIX: [
    "redstone"
  ],
  FINE: [
    "redstone"
  ],
  ROC: [
    "redstone"
  ],
  SAFEMOON: [
    "redstone"
  ],
  SATOZ: [
    "redstone"
  ],
  SHFT: [
    "redstone"
  ],
  SMTY: [
    "redstone"
  ],
  SNOB: [
    "redstone"
  ],
  SHOPX: [
    "redstone"
  ],
  STEP: [
    "redstone"
  ],
  STRK: [
    "redstone"
  ],
  SUPERBID: [
    "redstone"
  ],
  XYM: [
    "redstone"
  ],
  TARA: [
    "redstone"
  ],
  TKO: [
    "redstone"
  ],
  HVE2: [
    "redstone"
  ],
  MARSH: [
    "redstone"
  ],
  PYR: [
    "redstone"
  ],
  WSB: [
    "redstone"
  ],
  XELS: [
    "redstone"
  ],
  sUSD: [
    "redstone"
  ],
  wNXM: [
    "redstone"
  ],
  AMD: [
    "redstone"
  ],
  AUD: [
    "redstone"
  ],
  CHF: [
    "redstone"
  ],
  EUR: [
    "redstone"
  ],
  JPY: [
    "redstone"
  ],
  NOK: [
    "redstone"
  ],
  CSPR: [
    "redstone"
  ],
  YFV: [
    "redstone"
  ],
  ARDRIVE: [
    "redstone"
  ],
  ARGO: [
    "redstone"
  ],
  ARVERIFY: [
    "redstone"
  ],
  EDST: [
    "redstone"
  ],
  EMD_PST_TOKEN: [
    "redstone"
  ],
  OPENBITS: [
    "redstone"
  ],
  PBT: [
    "redstone"
  ],
  QUAD: [
    "redstone"
  ],
  SUNNY: [
    "redstone"
  ],
  VRT: [
    "redstone"
  ],
  IOTA: [
    "redstone"
  ],
  XCH: [
    "redstone"
  ],
  LAT: [
    "redstone"
  ],
  DOGGY: [
    "redstone"
  ],
  BZZ: [
    "redstone"
  ],
  O3: [
    "redstone"
  ],
  DOM: [
    "redstone"
  ],
  ATA: [
    "redstone"
  ],
  BABYDOGE: [
    "redstone"
  ],
  HF: [
    "redstone"
  ],
  FEAR: [
    "redstone"
  ],
  DPET: [
    "redstone"
  ],
  C98: [
    "redstone"
  ],
  SKILL: [
    "redstone"
  ],
  XCAD: [
    "redstone"
  ],
  ASD: [
    "redstone"
  ],
  YFDAI: [
    "redstone"
  ],
  COOP: [
    "redstone"
  ],
  SAFELIGHT: [
    "redstone"
  ],
  DS: [
    "redstone"
  ],
  ETL: [
    "redstone"
  ],
  XEC: [
    "redstone"
  ],
  BTCUP: [
    "redstone"
  ],
  BTCDOWN: [
    "redstone"
  ],
  ETHUP: [
    "redstone"
  ],
  ETHDOWN: [
    "redstone"
  ],
  DOTUP: [
    "redstone"
  ],
  CCE: [
    "redstone"
  ],
  Cube: [
    "redstone"
  ],
  GNT: [
    "redstone"
  ],
  "ORS Group": [
    "redstone"
  ],
  OMN: [
    "redstone"
  ],
  EURT: [
    "redstone"
  ],
  MDOGE: [
    "redstone"
  ],
  B21X: [
    "redstone"
  ],
  ETH2X: [
    "redstone"
  ],
  PLANETS: [
    "redstone"
  ],
  ABNB: [
    "redstone"
  ],
  ACB: [
    "redstone"
  ],
  ARKK: [
    "redstone"
  ],
  BABA: [
    "redstone"
  ],
  BB: [
    "redstone"
  ],
  BILI: [
    "redstone"
  ],
  BITW: [
    "redstone"
  ],
  GDXJ: [
    "redstone"
  ],
  GLD: [
    "redstone"
  ],
  GLXY: [
    "redstone"
  ],
  GOOGL: [
    "redstone"
  ],
  MRNA: [
    "redstone"
  ],
  PENN: [
    "redstone"
  ],
  PFE: [
    "redstone"
  ],
  PYPL: [
    "redstone"
  ],
  SMBSWAP: [
    "redstone"
  ],
  SQ: [
    "redstone"
  ],
  TSM: [
    "redstone"
  ],
  TWTR: [
    "redstone"
  ],
  UBER: [
    "redstone"
  ],
  USO: [
    "redstone"
  ],
  ZM: [
    "redstone"
  ],
  YFX: [
    "redstone"
  ],
  CFG: [
    "redstone"
  ],
  OOE: [
    "redstone"
  ],
  DRS: [
    "redstone"
  ],
  NVDA: [
    "redstone"
  ],
  GDX: [
    "redstone"
  ],
  TLRY: [
    "redstone"
  ],
  DKNG: [
    "redstone"
  ],
  XHT: [
    "redstone"
  ],
  KAR: [
    "redstone"
  ],
  AXC: [
    "redstone"
  ],
  HERO: [
    "redstone"
  ],
  AQUAGOAT: [
    "redstone"
  ],
  PORNROCKET: [
    "redstone"
  ],
  TOKAU: [
    "redstone"
  ],
  SRM3L: [
    "redstone"
  ],
  ALICE3L: [
    "redstone"
  ],
  YFI3S: [
    "redstone"
  ],
  ZEC3S: [
    "redstone"
  ],
  DUKE: [
    "redstone"
  ],
  DefiBox: [
    "redstone"
  ],
  ARTEX: [
    "redstone"
  ],
  CBY: [
    "redstone"
  ],
  STRI: [
    "redstone"
  ],
  SCONEX: [
    "redstone"
  ],
  PNIXS: [
    "redstone"
  ],
  PYE: [
    "redstone"
  ],
  TRR: [
    "redstone"
  ],
  WACO: [
    "redstone"
  ],
  INVESTEL: [
    "redstone"
  ],
  KABOSU: [
    "redstone"
  ],
  GNBT: [
    "redstone"
  ],
  "MW=F": [
    "redstone-stocks"
  ],
  DLM21: [
    "redstone-stocks"
  ],
  DFQ21: [
    "redstone-stocks"
  ],
  "BD=F": [
    "redstone-stocks"
  ],
  "BJ=F": [
    "redstone-stocks"
  ],
  CTZ21: [
    "redstone-stocks"
  ],
  "KC=F": [
    "redstone-stocks"
  ],
  "SB=F": [
    "redstone-stocks"
  ],
  "CC=F": [
    "redstone-stocks"
  ],
  "LS=F": [
    "redstone-stocks"
  ],
  "OJ=F": [
    "redstone-stocks"
  ],
  XAVA: [
    "redstone",
    "redstone-avalanche"
  ],
  SHERPA: [
    "redstone"
  ],
  AVME: [
    "redstone"
  ],
  WAVAX: [
    "redstone"
  ],
  JOE: [
    "redstone"
  ],
  YAK: [
    "redstone",
    "redstone-avalanche"
  ],
  QI: [
    "redstone",
    "redstone-avalanche"
  ],
  "MXNUSD=X": [
    "redstone",
    "redstone-stocks"
  ],
  "BRLUSD=X": [
    "redstone",
    "redstone-stocks"
  ],
  "COPUSD=X": [
    "redstone",
    "redstone-stocks"
  ],
  "ARSUSD=X": [
    "redstone",
    "redstone-stocks"
  ],
  "PENUSD=X": [
    "redstone",
    "redstone-stocks"
  ],
  SOS: [
    "redstone"
  ]
};
var Vg = se && se.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(ol, "__esModule", { value: !0 });
var I2 = Vg(ul), U2 = Vg(fl);
ol.default = {
  version: "0.4",
  cacheApiUrl: "https://api.redstone.finance/prices",
  providers: I2.default,
  tokens: U2.default
};
var is = se && se.__assign || function() {
  return is = Object.assign || function(e) {
    for (var i, r = 1, a = arguments.length; r < a; r++) {
      i = arguments[r];
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o]);
    }
    return e;
  }, is.apply(this, arguments);
}, Cr = se && se.__awaiter || function(e, i, r, a) {
  function o(u) {
    return u instanceof r ? u : new r(function(c) {
      c(u);
    });
  }
  return new (r || (r = Promise))(function(u, c) {
    function d(p) {
      try {
        f(a.next(p));
      } catch (S) {
        c(S);
      }
    }
    function g(p) {
      try {
        f(a.throw(p));
      } catch (S) {
        c(S);
      }
    }
    function f(p) {
      p.done ? u(p.value) : o(p.value).then(d, g);
    }
    f((a = a.apply(e, i || [])).next());
  });
}, Nr = se && se.__generator || function(e, i) {
  var r = { label: 0, sent: function() {
    if (u[0] & 1)
      throw u[1];
    return u[1];
  }, trys: [], ops: [] }, a, o, u, c;
  return c = { next: d(0), throw: d(1), return: d(2) }, typeof Symbol == "function" && (c[Symbol.iterator] = function() {
    return this;
  }), c;
  function d(f) {
    return function(p) {
      return g([f, p]);
    };
  }
  function g(f) {
    if (a)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (a = 1, o && (u = f[0] & 2 ? o.return : f[0] ? o.throw || ((u = o.return) && u.call(o), 0) : o.next) && !(u = u.call(o, f[1])).done)
          return u;
        switch (o = 0, u && (f = [f[0] & 2, u.value]), f[0]) {
          case 0:
          case 1:
            u = f;
            break;
          case 4:
            return r.label++, { value: f[1], done: !1 };
          case 5:
            r.label++, o = f[1], f = [0];
            continue;
          case 7:
            f = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (u = r.trys, !(u = u.length > 0 && u[u.length - 1]) && (f[0] === 6 || f[0] === 2)) {
              r = 0;
              continue;
            }
            if (f[0] === 3 && (!u || f[1] > u[0] && f[1] < u[3])) {
              r.label = f[1];
              break;
            }
            if (f[0] === 6 && r.label < u[1]) {
              r.label = u[1], u = f;
              break;
            }
            if (u && r.label < u[2]) {
              r.label = u[2], r.ops.push(f);
              break;
            }
            u[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        f = i.call(e, r);
      } catch (p) {
        f = [6, p], o = 0;
      } finally {
        a = u = 0;
      }
    if (f[0] & 5)
      throw f[1];
    return { value: f[0] ? f[1] : void 0, done: !0 };
  }
}, ai = se && se.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(ds, "__esModule", { value: !0 });
var ze = ai(Uf), F2 = ai(Ff), M2 = ai(Qf), $2 = ai(al), Vu = ai(sl), Ju = ai(ol), Yu = {
  defaultProvider: "redstone",
  useCache: !0,
  verifySignature: !1
}, H2 = [
  "redstone-rapid",
  "redstone-stocks",
  "redstone"
], q2 = (
  /** @class */
  function() {
    function e(i) {
      i === void 0 && (i = {}), this.arweaveProxy = new F2.default(), this.cacheProxy = new M2.default(ze.default.defaultTo(i.cacheApiUrl, Ju.default.cacheApiUrl)), this.signatureVerifier = new $2.default(this.arweaveProxy), this.version = ze.default.defaultTo(i.version, Ju.default.version), this.verifySignature = ze.default.defaultTo(i.verifySignature, Yu.verifySignature), this.defaultProvider = ze.default.defaultTo(i.defaultProvider, Yu.defaultProvider), this.useCache = ze.default.defaultTo(i.useCache, Yu.useCache);
    }
    return e.prototype.setCacheApiUrl = function(i) {
      this.cacheProxy.setCacheApiUrl(i);
    }, e.prototype.getPrice = function(i, r) {
      return r === void 0 && (r = {}), Cr(this, void 0, void 0, function() {
        var a, o, c, u, c;
        return Nr(this, function(d) {
          switch (d.label) {
            case 0:
              return a = ze.default.defaultTo(r.verifySignature, this.verifySignature), ze.default.isArray(i) ? (o = i, c = this.getProviderForSymbols(o, r.provider), [4, this.getPriceForManyTokens({
                symbols: o,
                provider: c,
                shouldVerifySignature: a
              })]) : [3, 2];
            case 1:
              return [2, d.sent()];
            case 2:
              return typeof i != "string" ? [3, 4] : (u = i, c = this.getProviderForSymbol(u, r.provider), [4, this.getLatestPriceForOneToken({
                symbol: u,
                provider: c,
                shouldVerifySignature: a
              })]);
            case 3:
              return [2, d.sent()];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.getHistoricalPrice = function(i, r) {
      return Cr(this, void 0, void 0, function() {
        var a, o, c, u, c;
        return Nr(this, function(d) {
          switch (d.label) {
            case 0:
              return a = ze.default.defaultTo(r.verifySignature, this.verifySignature), ze.default.isArray(i) ? (o = i, c = this.getProviderForSymbols(o, r.provider), [4, this.getPriceForManyTokens({
                symbols: o,
                timestamp: qa(r.date),
                provider: c,
                shouldVerifySignature: a
              })]) : [3, 2];
            case 1:
              return [2, d.sent()];
            case 2:
              return typeof i != "string" ? [3, 6] : (u = i, c = this.getProviderForSymbol(u, r.provider), r.interval !== void 0 || r.limit !== void 0 ? [4, this.getHistoricalPricesForOneSymbol({
                symbol: u,
                fromTimestamp: qa(r.startDate),
                toTimestamp: qa(r.endDate),
                interval: r.interval,
                offset: r.offset,
                limit: r.limit,
                provider: c,
                shouldVerifySignature: a
              })] : [3, 4]);
            case 3:
              return [2, d.sent()];
            case 4:
              return [4, this.getHistoricalPriceForOneSymbol({
                symbol: u,
                timestamp: qa(r.date),
                provider: c,
                shouldVerifySignature: a
              })];
            case 5:
              return [2, d.sent()];
            case 6:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.getAllPrices = function(i) {
      return i === void 0 && (i = {}), Cr(this, void 0, void 0, function() {
        var r, a, o, u, c;
        return Nr(this, function(d) {
          switch (d.label) {
            case 0:
              return r = ze.default.defaultTo(i.provider, this.defaultProvider), this.useCache ? [4, this.cacheProxy.getPriceForManyTokens({
                provider: r
              })] : [3, 2];
            case 1:
              if (a = d.sent(), ze.default.defaultTo(i.verifySignature, this.verifySignature))
                for (o = 0, u = ze.default.keys(a); o < u.length; o++)
                  c = u[o], this.signatureVerifier.assertValidSignature(a[c]);
              return [2, za(a)];
            case 2:
              return [4, this.getPricesFromArweave(r)];
            case 3:
              return [2, d.sent()];
          }
        });
      });
    }, e.prototype.getLatestPriceForOneToken = function(i) {
      return Cr(this, void 0, void 0, function() {
        var r, r, a, o;
        return Nr(this, function(u) {
          switch (u.label) {
            case 0:
              return this.useCache ? [4, this.cacheProxy.getPrice(ze.default.pick(i, ["symbol", "provider"]))] : [3, 4];
            case 1:
              return r = u.sent(), i.shouldVerifySignature && r !== void 0 ? [4, this.signatureVerifier.assertValidSignature(r)] : [3, 3];
            case 2:
              u.sent(), u.label = 3;
            case 3:
              if (r === void 0)
                throw new Vu.default(i.symbol);
              return [2, Xn(r)];
            case 4:
              return i.symbol !== "AR" ? [3, 6] : [4, this.tryToGetPriceFromGQL(ze.default.pick(i, ["provider", "symbol"]))];
            case 5:
              if (r = u.sent(), r !== void 0)
                return [2, Xn(r)];
              u.label = 6;
            case 6:
              return [4, this.getPricesFromArweave(i.provider)];
            case 7:
              return a = u.sent(), o = a[i.symbol], [2, Xn(o)];
          }
        });
      });
    }, e.prototype.getPriceForManyTokens = function(i) {
      return Cr(this, void 0, void 0, function() {
        var c, r, a, o, u, c;
        return Nr(this, function(d) {
          switch (d.label) {
            case 0:
              return this.useCache ? [4, this.cacheProxy.getPriceForManyTokens(ze.default.pick(i, ["symbols", "provider", "timestamp"]))] : [3, 2];
            case 1:
              if (c = d.sent(), i.shouldVerifySignature)
                for (r = 0, a = ze.default.keys(c); r < a.length; r++)
                  o = a[r], this.signatureVerifier.assertValidSignature(c[o]);
              return [2, za(c)];
            case 2:
              if (i.timestamp !== void 0)
                throw new Error("Getting historical prices from arweave is not supported");
              return [4, this.getPricesFromArweave(i.provider)];
            case 3:
              return u = d.sent(), c = ze.default.pick(u, i.symbols), [2, za(c)];
          }
        });
      });
    }, e.prototype.getPricesFromArweave = function(i) {
      return Cr(this, void 0, void 0, function() {
        var r, a, o, u, c, d, g;
        return Nr(this, function(f) {
          switch (f.label) {
            case 0:
              return [4, this.arweaveProxy.getProviderDetails(i)];
            case 1:
              return r = f.sent().address, [4, this.arweaveProxy.findPricesInGraphQL({
                type: "data",
                providerAddress: r,
                version: this.version
              })];
            case 2:
              return a = f.sent(), a === void 0 ? [2, {}] : [4, this.arweaveProxy.getTxDataById(a.permawebTx, { parseJSON: !0 })];
            case 3:
              for (o = f.sent(), u = {}, c = 0, d = o; c < d.length; c++)
                g = d[c], u[g.symbol] = is(is({}, g), { provider: r, permawebTx: a.permawebTx });
              return [2, za(u)];
          }
        });
      });
    }, e.prototype.getHistoricalPriceForOneSymbol = function(i) {
      return Cr(this, void 0, void 0, function() {
        var r;
        return Nr(this, function(a) {
          switch (a.label) {
            case 0:
              return this.useCache ? [4, this.cacheProxy.getPrice(ze.default.pick(i, ["symbol", "provider", "timestamp"]))] : [3, 4];
            case 1:
              return r = a.sent(), i.shouldVerifySignature && r !== void 0 ? [4, this.signatureVerifier.assertValidSignature(r)] : [3, 3];
            case 2:
              a.sent(), a.label = 3;
            case 3:
              if (r === void 0)
                throw new Vu.default(i.symbol);
              return [2, Xn(r)];
            case 4:
              throw new Error("Fetching historical price from arweave is not supported");
          }
        });
      });
    }, e.prototype.tryToGetPriceFromGQL = function(i) {
      return Cr(this, void 0, void 0, function() {
        var r, a;
        return Nr(this, function(o) {
          switch (o.label) {
            case 0:
              return [4, this.arweaveProxy.getProviderDetails(i.provider)];
            case 1:
              return r = o.sent().address, [4, this.arweaveProxy.findPricesInGraphQL({
                type: "data",
                providerAddress: r,
                version: this.version
              })];
            case 2:
              if (a = o.sent(), a === void 0 || a.tags[i.symbol] === void 0)
                throw new Vu.default(i.symbol);
              return [2, {
                symbol: i.symbol,
                value: Number(a.tags[i.symbol]),
                permawebTx: a.permawebTx,
                timestamp: Number(a.tags.timestamp),
                provider: r
              }];
          }
        });
      });
    }, e.prototype.getHistoricalPricesForOneSymbol = function(i) {
      return Cr(this, void 0, void 0, function() {
        var r, a, o, u;
        return Nr(this, function(c) {
          switch (c.label) {
            case 0:
              return this.useCache ? [4, this.cacheProxy.getManyPrices(ze.default.pick(i, [
                "symbol",
                "provider",
                "fromTimestamp",
                "toTimestamp",
                "interval",
                "offset",
                "limit"
              ]))] : [3, 6];
            case 1:
              if (r = c.sent(), !i.shouldVerifySignature)
                return [3, 5];
              a = 0, o = r, c.label = 2;
            case 2:
              return a < o.length ? (u = o[a], [4, this.signatureVerifier.assertValidSignature(u)]) : [3, 5];
            case 3:
              c.sent(), c.label = 4;
            case 4:
              return a++, [3, 2];
            case 5:
              return [2, r.map(Xn)];
            case 6:
              throw new Error("Fetching historical prices from arweave is not supported");
          }
        });
      });
    }, e.prototype.getProviderForSymbol = function(i, r) {
      return this.getProviderForSymbols([i], r);
    }, e.prototype.getProviderForSymbols = function(i, r) {
      if (r !== void 0)
        return r;
      for (var a = Array.from(H2), o = 0, u = i; o < u.length; o++) {
        var c = u[o], d = Ju.default.tokens[c];
        if (d && Array.isArray(d))
          for (var g = function(w) {
            d.includes(w) || (a = a.filter(function(m) {
              return m !== w;
            }));
          }, f = 0, p = a; f < p.length; f++) {
            var S = p[f];
            g(S);
          }
        else {
          a = [];
          break;
        }
      }
      return a.length > 0 ? a[0] : this.defaultProvider;
    }, e;
  }()
);
ds.default = q2;
function qa(e) {
  if (!ze.default.isUndefined(e))
    return new Date(e).getTime();
}
function Xn(e) {
  var i = ze.default.omit(e, ["version", "signature", "providerPublicKey"]);
  return i;
}
function za(e) {
  for (var i = {}, r = 0, a = ze.default.keys(e); r < a.length; r++) {
    var o = a[r];
    i[o] = Xn(e[o]);
  }
  return i;
}
var It = {}, Jg = se && se.__extends || function() {
  var e = function(i, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, o) {
      a.__proto__ = o;
    } || function(a, o) {
      for (var u in o)
        Object.prototype.hasOwnProperty.call(o, u) && (a[u] = o[u]);
    }, e(i, r);
  };
  return function(i, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(i, r);
    function a() {
      this.constructor = i;
    }
    i.prototype = r === null ? Object.create(r) : (a.prototype = r.prototype, new a());
  };
}(), pr = se && se.__assign || function() {
  return pr = Object.assign || function(e) {
    for (var i, r = 1, a = arguments.length; r < a; r++) {
      i = arguments[r];
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o]);
    }
    return e;
  }, pr.apply(this, arguments);
}, z2 = se && se.__awaiter || function(e, i, r, a) {
  function o(u) {
    return u instanceof r ? u : new r(function(c) {
      c(u);
    });
  }
  return new (r || (r = Promise))(function(u, c) {
    function d(p) {
      try {
        f(a.next(p));
      } catch (S) {
        c(S);
      }
    }
    function g(p) {
      try {
        f(a.throw(p));
      } catch (S) {
        c(S);
      }
    }
    function f(p) {
      p.done ? u(p.value) : o(p.value).then(d, g);
    }
    f((a = a.apply(e, i || [])).next());
  });
}, G2 = se && se.__generator || function(e, i) {
  var r = { label: 0, sent: function() {
    if (u[0] & 1)
      throw u[1];
    return u[1];
  }, trys: [], ops: [] }, a, o, u, c;
  return c = { next: d(0), throw: d(1), return: d(2) }, typeof Symbol == "function" && (c[Symbol.iterator] = function() {
    return this;
  }), c;
  function d(f) {
    return function(p) {
      return g([f, p]);
    };
  }
  function g(f) {
    if (a)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (a = 1, o && (u = f[0] & 2 ? o.return : f[0] ? o.throw || ((u = o.return) && u.call(o), 0) : o.next) && !(u = u.call(o, f[1])).done)
          return u;
        switch (o = 0, u && (f = [f[0] & 2, u.value]), f[0]) {
          case 0:
          case 1:
            u = f;
            break;
          case 4:
            return r.label++, { value: f[1], done: !1 };
          case 5:
            r.label++, o = f[1], f = [0];
            continue;
          case 7:
            f = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (u = r.trys, !(u = u.length > 0 && u[u.length - 1]) && (f[0] === 6 || f[0] === 2)) {
              r = 0;
              continue;
            }
            if (f[0] === 3 && (!u || f[1] > u[0] && f[1] < u[3])) {
              r.label = f[1];
              break;
            }
            if (f[0] === 6 && r.label < u[1]) {
              r.label = u[1], u = f;
              break;
            }
            if (u && r.label < u[2]) {
              r.label = u[2], r.ops.push(f);
              break;
            }
            u[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        f = i.call(e, r);
      } catch (p) {
        f = [6, p], o = 0;
      } finally {
        a = u = 0;
      }
    if (f[0] & 5)
      throw f[1];
    return { value: f[0] ? f[1] : void 0, done: !0 };
  }
}, K2 = se && se.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(It, "__esModule", { value: !0 });
It.RedstoneQueryExecutable = It.RedstoneQueryForSeveralSymbols = It.RedstoneQueryForSingleSymbol = It.RedstoneQueryForSingleOrSeveralSymbols = It.RedstoneQuery = void 0;
var W2 = K2(ds), Yg = (
  /** @class */
  function() {
    function e(i) {
      i === void 0 && (i = {}), this.params = pr({ symbols: [] }, i);
    }
    return e.prototype.symbol = function(i) {
      return new Qg({
        symbols: [i]
      });
    }, e.prototype.symbols = function(i) {
      return new yf({ symbols: i });
    }, e.prototype.allSymbols = function() {
      return new yf({
        symbols: []
      });
    }, e;
  }()
);
It.RedstoneQuery = Yg;
var ll = (
  /** @class */
  function() {
    function e(i) {
      this.params = i;
    }
    return e.prototype.getExecutableQuery = function(i) {
      return new e_(pr(pr({}, this.params), i));
    }, e.prototype.latest = function() {
      return this.getExecutableQuery({});
    }, e.prototype.hoursAgo = function(i) {
      return this.getExecutableQuery({
        date: Date.now() - i * 3600 * 1e3
      });
    }, e.prototype.atDate = function(i) {
      return this.getExecutableQuery({ date: i });
    }, e;
  }()
);
It.RedstoneQueryForSingleOrSeveralSymbols = ll;
var Qg = (
  /** @class */
  function(e) {
    Jg(i, e);
    function i(r) {
      return e.call(this, r) || this;
    }
    return i.prototype.fromDate = function(r) {
      return new i(pr(pr({}, this.params), { startDate: r }));
    }, i.prototype.toDate = function(r) {
      if (this.params.startDate === void 0)
        throw new Error("Please specify fromDate before using toDate");
      return this.getExecutableQuery({ endDate: r });
    }, i.prototype.forLastHours = function(r) {
      var a = Date.now();
      return this.getExecutableQuery({
        endDate: a,
        startDate: a - r * 3600 * 1e3,
        interval: 600 * 1e3
      });
    }, i.prototype.forLastDays = function(r) {
      var a = Date.now();
      return this.getExecutableQuery({
        endDate: a,
        startDate: a - r * 24 * 3600 * 1e3,
        interval: 3600 * 1e3
      });
    }, i;
  }(ll)
);
It.RedstoneQueryForSingleSymbol = Qg;
var yf = (
  /** @class */
  function(e) {
    Jg(i, e);
    function i(r) {
      return e.call(this, r) || this;
    }
    return i;
  }(ll)
);
It.RedstoneQueryForSeveralSymbols = yf;
var e_ = (
  /** @class */
  function() {
    function e(i) {
      i === void 0 && (i = {}), this.params = pr({ symbols: [] }, i);
    }
    return e.prototype.exec = function(i) {
      return z2(this, void 0, void 0, function() {
        var r, a, o, u, c, d, g, f, p;
        return G2(this, function(S) {
          switch (S.label) {
            case 0:
              return r = new W2.default(pr(pr({}, i), { defaultProvider: i == null ? void 0 : i.provider })), a = this.params.symbols, a.length > 0 ? (o = a.length === 1 ? a[0] : a, u = this.params, c = u.startDate, d = u.endDate, g = u.date, f = u.interval, [c, d, g].every(function(w) {
                return w === void 0;
              }) ? [4, r.getPrice(o, this.params)] : [3, 2]) : [3, 5];
            case 1:
              return [2, S.sent()];
            case 2:
              return c !== void 0 && d !== void 0 && f === void 0 && (p = X2(c, d), p >= 24 * 3600 * 1e3 ? this.params.interval = 3600 * 1e3 : this.params.interval = 1), [4, r.getHistoricalPrice(o, this.params)];
            case 3:
              return [2, S.sent()];
            case 4:
              return [3, 7];
            case 5:
              return [4, r.getAllPrices(this.params)];
            case 6:
              return [2, S.sent()];
            case 7:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e;
  }()
);
It.RedstoneQueryExecutable = e_;
function X2(e, i) {
  var r = new Date(e).getTime(), a = new Date(i).getTime();
  return Math.abs(a - r);
}
var Z2 = function() {
  return new Yg();
};
It.default = Z2;
var j2 = se && se.__extends || function() {
  var e = function(i, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, o) {
      a.__proto__ = o;
    } || function(a, o) {
      for (var u in o)
        Object.prototype.hasOwnProperty.call(o, u) && (a[u] = o[u]);
    }, e(i, r);
  };
  return function(i, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(i, r);
    function a() {
      this.constructor = i;
    }
    i.prototype = r === null ? Object.create(r) : (a.prototype = r.prototype, new a());
  };
}(), t_ = se && se.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
}, tp = t_(ds), V2 = t_(It), J2 = (
  /** @class */
  function(e) {
    j2(i, e);
    function i(r) {
      var a = e.call(this, r) || this;
      return a.query = V2.default, a.Api = tp.default, a;
    }
    return i;
  }(tp.default)
), Y2 = new J2();
const Q2 = /* @__PURE__ */ mf(Y2), eC = "https://arweave.net/", Wn = 256 * 1024, rp = {
  KB: Wn / Wn,
  // rounded to min storage size
  MB: 1048576 / Wn,
  GB: 1073741824 / Wn,
  TB: 1099511627776 / Wn,
  PT: 1125899906842624 / Wn
}, np = wb.init({
  host: "arweave.net",
  port: 443,
  protocol: "https",
  timeout: 6e4
});
async function r_() {
  try {
    const e = (await Q2.getPrice("AR")).value;
    return e || await tC();
  } catch (e) {
    console.log(`${e.name} : ${e.description}`);
  }
}
async function n_(e) {
  try {
    return (await Cp.get(`${eC}/price/${e}`)).data;
  } catch (i) {
    console.log(i);
  }
}
async function i_(e) {
  try {
    const i = [
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
    for (const r in e)
      if (!i.includes(r))
        throw new Error(
          "ERROR: invalid Arweave Transaction Object Has Been Passed"
        );
    return !0;
  } catch (i) {
    return console.log(i), !1;
  }
}
async function tC() {
  try {
    const e = (await Cp.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=arweave&vs_currencies=usd"
    )).data;
    if (e.arweave)
      return e.arweave.usd;
    throw new Error("Error fetching AR price from coingecko");
  } catch (e) {
    console.log(e);
  }
}
async function iC({ txObj: e = { data_size: 0, reward: 0 }, feeMultiplier: i = 1 }) {
  try {
    await i_(e);
    const r = Number(e.data_size), a = Number(e.reward), o = await n_(r);
    return {
      txByteSize: r,
      theoreticalWinstonReward: o,
      actualWinstonReward: a,
      actualFeeMultiplier: a / o,
      testedAgainstMultiplier: i,
      isEqual: a / o === i
    };
  } catch (r) {
    console.log(r);
  }
  return e;
}
async function rC() {
  const e = { winston: 0, ar: 0, usd: 0 }, i = { KB: e, MB: e, GB: e, TB: e, PT: e };
  try {
    const r = await n_(262144), a = await r_();
    for (const o in rp) {
      const u = r * rp[o];
      i[o] = {
        winston: u,
        ar: u * 1e-12,
        usd: u * 1e-12 * a
      };
    }
  } catch (r) {
    console.log(r);
  }
  return i;
}
async function aC({ txObj: e = { owner: "", reward: 0 } }) {
  try {
    await i_(e);
    const i = await r_(), r = await np.wallets.ownerToAddress(e.owner), a = Number(await np.wallets.getBalance(r));
    return {
      canUpload: a >= Number(e.reward),
      balanceWinstonBefore: a,
      balanceWinstonAfter: a - Number(e.reward),
      costInWinston: Number(e.reward),
      costInAr: Number(e.reward) * 1e-12,
      costInUsd: Number(e.reward) * 1e-12 * i
    };
  } catch (i) {
    return console.log(i), {};
  }
}
async function sC(e) {
  try {
    if (!e || !Number.isInteger(e) || e <= 0)
      return 0;
    const r = (await rC()).MB.winston;
    return e / r;
  } catch {
    return 0;
  }
}
export {
  sC as canUploadUpTo,
  aC as canUserUpload,
  iC as checkFeeMultiplier,
  rC as storageCostTable
};
