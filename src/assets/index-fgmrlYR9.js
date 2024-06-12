function Fd(e, t) {
	for (var n = 0; n < t.length; n++) {
		const r = t[n];
		if (typeof r != "string" && !Array.isArray(r)) {
			for (const a in r)
				if (a !== "default" && !(a in e)) {
					const i = Object.getOwnPropertyDescriptor(r, a);
					i &&
						Object.defineProperty(
							e,
							a,
							i.get ? i : { enumerable: !0, get: () => r[a] },
						);
				}
		}
	}
	return Object.freeze(
		Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
	);
}
(function () {
	const t = document.createElement("link").relList;
	if (t && t.supports && t.supports("modulepreload")) return;
	for (const a of document.querySelectorAll('link[rel="modulepreload"]')) r(a);
	new MutationObserver((a) => {
		for (const i of a)
			if (i.type === "childList")
				for (const o of i.addedNodes)
					o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
	}).observe(document, { childList: !0, subtree: !0 });
	function n(a) {
		const i = {};
		return (
			a.integrity && (i.integrity = a.integrity),
			a.referrerPolicy && (i.referrerPolicy = a.referrerPolicy),
			a.crossOrigin === "use-credentials"
				? (i.credentials = "include")
				: a.crossOrigin === "anonymous"
				? (i.credentials = "omit")
				: (i.credentials = "same-origin"),
			i
		);
	}
	function r(a) {
		if (a.ep) return;
		a.ep = !0;
		const i = n(a);
		fetch(a.href, i);
	}
})();
function iu(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
		? e.default
		: e;
}
var $d = { exports: {} },
	Io = {},
	Ud = { exports: {} },
	Z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qa = Symbol.for("react.element"),
	j1 = Symbol.for("react.portal"),
	N1 = Symbol.for("react.fragment"),
	P1 = Symbol.for("react.strict_mode"),
	_1 = Symbol.for("react.profiler"),
	T1 = Symbol.for("react.provider"),
	L1 = Symbol.for("react.context"),
	R1 = Symbol.for("react.forward_ref"),
	O1 = Symbol.for("react.suspense"),
	M1 = Symbol.for("react.memo"),
	z1 = Symbol.for("react.lazy"),
	Tc = Symbol.iterator;
function I1(e) {
	return e === null || typeof e != "object"
		? null
		: ((e = (Tc && e[Tc]) || e["@@iterator"]),
		  typeof e == "function" ? e : null);
}
var Hd = {
		isMounted: function () {
			return !1;
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {},
	},
	Vd = Object.assign,
	Bd = {};
function Hr(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = Bd),
		(this.updater = n || Hd);
}
Hr.prototype.isReactComponent = {};
Hr.prototype.setState = function (e, t) {
	if (typeof e != "object" && typeof e != "function" && e != null)
		throw Error(
			"setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
		);
	this.updater.enqueueSetState(this, e, t, "setState");
};
Hr.prototype.forceUpdate = function (e) {
	this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Wd() {}
Wd.prototype = Hr.prototype;
function ou(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = Bd),
		(this.updater = n || Hd);
}
var lu = (ou.prototype = new Wd());
lu.constructor = ou;
Vd(lu, Hr.prototype);
lu.isPureReactComponent = !0;
var Lc = Array.isArray,
	Yd = Object.prototype.hasOwnProperty,
	su = { current: null },
	Qd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Kd(e, t, n) {
	var r,
		a = {},
		i = null,
		o = null;
	if (t != null)
		for (r in (t.ref !== void 0 && (o = t.ref),
		t.key !== void 0 && (i = "" + t.key),
		t))
			Yd.call(t, r) && !Qd.hasOwnProperty(r) && (a[r] = t[r]);
	var l = arguments.length - 2;
	if (l === 1) a.children = n;
	else if (1 < l) {
		for (var s = Array(l), u = 0; u < l; u++) s[u] = arguments[u + 2];
		a.children = s;
	}
	if (e && e.defaultProps)
		for (r in ((l = e.defaultProps), l)) a[r] === void 0 && (a[r] = l[r]);
	return {
		$$typeof: qa,
		type: e,
		key: i,
		ref: o,
		props: a,
		_owner: su.current,
	};
}
function D1(e, t) {
	return {
		$$typeof: qa,
		type: e.type,
		key: t,
		ref: e.ref,
		props: e.props,
		_owner: e._owner,
	};
}
function uu(e) {
	return typeof e == "object" && e !== null && e.$$typeof === qa;
}
function A1(e) {
	var t = { "=": "=0", ":": "=2" };
	return (
		"$" +
		e.replace(/[=:]/g, function (n) {
			return t[n];
		})
	);
}
var Rc = /\/+/g;
function cl(e, t) {
	return typeof e == "object" && e !== null && e.key != null
		? A1("" + e.key)
		: t.toString(36);
}
function Hi(e, t, n, r, a) {
	var i = typeof e;
	(i === "undefined" || i === "boolean") && (e = null);
	var o = !1;
	if (e === null) o = !0;
	else
		switch (i) {
			case "string":
			case "number":
				o = !0;
				break;
			case "object":
				switch (e.$$typeof) {
					case qa:
					case j1:
						o = !0;
				}
		}
	if (o)
		return (
			(o = e),
			(a = a(o)),
			(e = r === "" ? "." + cl(o, 0) : r),
			Lc(a)
				? ((n = ""),
				  e != null && (n = e.replace(Rc, "$&/") + "/"),
				  Hi(a, t, n, "", function (u) {
						return u;
				  }))
				: a != null &&
				  (uu(a) &&
						(a = D1(
							a,
							n +
								(!a.key || (o && o.key === a.key)
									? ""
									: ("" + a.key).replace(Rc, "$&/") + "/") +
								e,
						)),
				  t.push(a)),
			1
		);
	if (((o = 0), (r = r === "" ? "." : r + ":"), Lc(e)))
		for (var l = 0; l < e.length; l++) {
			i = e[l];
			var s = r + cl(i, l);
			o += Hi(i, t, n, s, a);
		}
	else if (((s = I1(e)), typeof s == "function"))
		for (e = s.call(e), l = 0; !(i = e.next()).done; )
			(i = i.value), (s = r + cl(i, l++)), (o += Hi(i, t, n, s, a));
	else if (i === "object")
		throw (
			((t = String(e)),
			Error(
				"Objects are not valid as a React child (found: " +
					(t === "[object Object]"
						? "object with keys {" + Object.keys(e).join(", ") + "}"
						: t) +
					"). If you meant to render a collection of children, use an array instead.",
			))
		);
	return o;
}
function mi(e, t, n) {
	if (e == null) return e;
	var r = [],
		a = 0;
	return (
		Hi(e, r, "", "", function (i) {
			return t.call(n, i, a++);
		}),
		r
	);
}
function F1(e) {
	if (e._status === -1) {
		var t = e._result;
		(t = t()),
			t.then(
				function (n) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 1), (e._result = n));
				},
				function (n) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 2), (e._result = n));
				},
			),
			e._status === -1 && ((e._status = 0), (e._result = t));
	}
	if (e._status === 1) return e._result.default;
	throw e._result;
}
var tt = { current: null },
	Vi = { transition: null },
	$1 = {
		ReactCurrentDispatcher: tt,
		ReactCurrentBatchConfig: Vi,
		ReactCurrentOwner: su,
	};
function Xd() {
	throw Error("act(...) is not supported in production builds of React.");
}
Z.Children = {
	map: mi,
	forEach: function (e, t, n) {
		mi(
			e,
			function () {
				t.apply(this, arguments);
			},
			n,
		);
	},
	count: function (e) {
		var t = 0;
		return (
			mi(e, function () {
				t++;
			}),
			t
		);
	},
	toArray: function (e) {
		return (
			mi(e, function (t) {
				return t;
			}) || []
		);
	},
	only: function (e) {
		if (!uu(e))
			throw Error(
				"React.Children.only expected to receive a single React element child.",
			);
		return e;
	},
};
Z.Component = Hr;
Z.Fragment = N1;
Z.Profiler = _1;
Z.PureComponent = ou;
Z.StrictMode = P1;
Z.Suspense = O1;
Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $1;
Z.act = Xd;
Z.cloneElement = function (e, t, n) {
	if (e == null)
		throw Error(
			"React.cloneElement(...): The argument must be a React element, but you passed " +
				e +
				".",
		);
	var r = Vd({}, e.props),
		a = e.key,
		i = e.ref,
		o = e._owner;
	if (t != null) {
		if (
			(t.ref !== void 0 && ((i = t.ref), (o = su.current)),
			t.key !== void 0 && (a = "" + t.key),
			e.type && e.type.defaultProps)
		)
			var l = e.type.defaultProps;
		for (s in t)
			Yd.call(t, s) &&
				!Qd.hasOwnProperty(s) &&
				(r[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s]);
	}
	var s = arguments.length - 2;
	if (s === 1) r.children = n;
	else if (1 < s) {
		l = Array(s);
		for (var u = 0; u < s; u++) l[u] = arguments[u + 2];
		r.children = l;
	}
	return { $$typeof: qa, type: e.type, key: a, ref: i, props: r, _owner: o };
};
Z.createContext = function (e) {
	return (
		(e = {
			$$typeof: L1,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null,
		}),
		(e.Provider = { $$typeof: T1, _context: e }),
		(e.Consumer = e)
	);
};
Z.createElement = Kd;
Z.createFactory = function (e) {
	var t = Kd.bind(null, e);
	return (t.type = e), t;
};
Z.createRef = function () {
	return { current: null };
};
Z.forwardRef = function (e) {
	return { $$typeof: R1, render: e };
};
Z.isValidElement = uu;
Z.lazy = function (e) {
	return { $$typeof: z1, _payload: { _status: -1, _result: e }, _init: F1 };
};
Z.memo = function (e, t) {
	return { $$typeof: M1, type: e, compare: t === void 0 ? null : t };
};
Z.startTransition = function (e) {
	var t = Vi.transition;
	Vi.transition = {};
	try {
		e();
	} finally {
		Vi.transition = t;
	}
};
Z.unstable_act = Xd;
Z.useCallback = function (e, t) {
	return tt.current.useCallback(e, t);
};
Z.useContext = function (e) {
	return tt.current.useContext(e);
};
Z.useDebugValue = function () {};
Z.useDeferredValue = function (e) {
	return tt.current.useDeferredValue(e);
};
Z.useEffect = function (e, t) {
	return tt.current.useEffect(e, t);
};
Z.useId = function () {
	return tt.current.useId();
};
Z.useImperativeHandle = function (e, t, n) {
	return tt.current.useImperativeHandle(e, t, n);
};
Z.useInsertionEffect = function (e, t) {
	return tt.current.useInsertionEffect(e, t);
};
Z.useLayoutEffect = function (e, t) {
	return tt.current.useLayoutEffect(e, t);
};
Z.useMemo = function (e, t) {
	return tt.current.useMemo(e, t);
};
Z.useReducer = function (e, t, n) {
	return tt.current.useReducer(e, t, n);
};
Z.useRef = function (e) {
	return tt.current.useRef(e);
};
Z.useState = function (e) {
	return tt.current.useState(e);
};
Z.useSyncExternalStore = function (e, t, n) {
	return tt.current.useSyncExternalStore(e, t, n);
};
Z.useTransition = function () {
	return tt.current.useTransition();
};
Z.version = "18.3.1";
Ud.exports = Z;
var S = Ud.exports;
const ae = iu(S),
	U1 = Fd({ __proto__: null, default: ae }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var H1 = S,
	V1 = Symbol.for("react.element"),
	B1 = Symbol.for("react.fragment"),
	W1 = Object.prototype.hasOwnProperty,
	Y1 = H1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	Q1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Gd(e, t, n) {
	var r,
		a = {},
		i = null,
		o = null;
	n !== void 0 && (i = "" + n),
		t.key !== void 0 && (i = "" + t.key),
		t.ref !== void 0 && (o = t.ref);
	for (r in t) W1.call(t, r) && !Q1.hasOwnProperty(r) && (a[r] = t[r]);
	if (e && e.defaultProps)
		for (r in ((t = e.defaultProps), t)) a[r] === void 0 && (a[r] = t[r]);
	return {
		$$typeof: V1,
		type: e,
		key: i,
		ref: o,
		props: a,
		_owner: Y1.current,
	};
}
Io.Fragment = B1;
Io.jsx = Gd;
Io.jsxs = Gd;
$d.exports = Io;
var d = $d.exports,
	Wl = {},
	Jd = { exports: {} },
	mt = {},
	Zd = { exports: {} },
	qd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
	function t(T, $) {
		var H = T.length;
		T.push($);
		e: for (; 0 < H; ) {
			var q = (H - 1) >>> 1,
				X = T[q];
			if (0 < a(X, $)) (T[q] = $), (T[H] = X), (H = q);
			else break e;
		}
	}
	function n(T) {
		return T.length === 0 ? null : T[0];
	}
	function r(T) {
		if (T.length === 0) return null;
		var $ = T[0],
			H = T.pop();
		if (H !== $) {
			T[0] = H;
			e: for (var q = 0, X = T.length, he = X >>> 1; q < he; ) {
				var ce = 2 * (q + 1) - 1,
					ve = T[ce],
					xe = ce + 1,
					ze = T[xe];
				if (0 > a(ve, H))
					xe < X && 0 > a(ze, ve)
						? ((T[q] = ze), (T[xe] = H), (q = xe))
						: ((T[q] = ve), (T[ce] = H), (q = ce));
				else if (xe < X && 0 > a(ze, H)) (T[q] = ze), (T[xe] = H), (q = xe);
				else break e;
			}
		}
		return $;
	}
	function a(T, $) {
		var H = T.sortIndex - $.sortIndex;
		return H !== 0 ? H : T.id - $.id;
	}
	if (typeof performance == "object" && typeof performance.now == "function") {
		var i = performance;
		e.unstable_now = function () {
			return i.now();
		};
	} else {
		var o = Date,
			l = o.now();
		e.unstable_now = function () {
			return o.now() - l;
		};
	}
	var s = [],
		u = [],
		c = 1,
		f = null,
		p = 3,
		w = !1,
		x = !1,
		y = !1,
		C = typeof setTimeout == "function" ? setTimeout : null,
		h = typeof clearTimeout == "function" ? clearTimeout : null,
		m = typeof setImmediate < "u" ? setImmediate : null;
	typeof navigator < "u" &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function v(T) {
		for (var $ = n(u); $ !== null; ) {
			if ($.callback === null) r(u);
			else if ($.startTime <= T)
				r(u), ($.sortIndex = $.expirationTime), t(s, $);
			else break;
			$ = n(u);
		}
	}
	function E(T) {
		if (((y = !1), v(T), !x))
			if (n(s) !== null) (x = !0), We(P);
			else {
				var $ = n(u);
				$ !== null && _e(E, $.startTime - T);
			}
	}
	function P(T, $) {
		(x = !1), y && ((y = !1), h(j), (j = -1)), (w = !0);
		var H = p;
		try {
			for (
				v($), f = n(s);
				f !== null && (!(f.expirationTime > $) || (T && !V()));

			) {
				var q = f.callback;
				if (typeof q == "function") {
					(f.callback = null), (p = f.priorityLevel);
					var X = q(f.expirationTime <= $);
					($ = e.unstable_now()),
						typeof X == "function" ? (f.callback = X) : f === n(s) && r(s),
						v($);
				} else r(s);
				f = n(s);
			}
			if (f !== null) var he = !0;
			else {
				var ce = n(u);
				ce !== null && _e(E, ce.startTime - $), (he = !1);
			}
			return he;
		} finally {
			(f = null), (p = H), (w = !1);
		}
	}
	var R = !1,
		g = null,
		j = -1,
		_ = 5,
		O = -1;
	function V() {
		return !(e.unstable_now() - O < _);
	}
	function te() {
		if (g !== null) {
			var T = e.unstable_now();
			O = T;
			var $ = !0;
			try {
				$ = g(!0, T);
			} finally {
				$ ? ne() : ((R = !1), (g = null));
			}
		} else R = !1;
	}
	var ne;
	if (typeof m == "function")
		ne = function () {
			m(te);
		};
	else if (typeof MessageChannel < "u") {
		var oe = new MessageChannel(),
			Ne = oe.port2;
		(oe.port1.onmessage = te),
			(ne = function () {
				Ne.postMessage(null);
			});
	} else
		ne = function () {
			C(te, 0);
		};
	function We(T) {
		(g = T), R || ((R = !0), ne());
	}
	function _e(T, $) {
		j = C(function () {
			T(e.unstable_now());
		}, $);
	}
	(e.unstable_IdlePriority = 5),
		(e.unstable_ImmediatePriority = 1),
		(e.unstable_LowPriority = 4),
		(e.unstable_NormalPriority = 3),
		(e.unstable_Profiling = null),
		(e.unstable_UserBlockingPriority = 2),
		(e.unstable_cancelCallback = function (T) {
			T.callback = null;
		}),
		(e.unstable_continueExecution = function () {
			x || w || ((x = !0), We(P));
		}),
		(e.unstable_forceFrameRate = function (T) {
			0 > T || 125 < T
				? console.error(
						"forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
				  )
				: (_ = 0 < T ? Math.floor(1e3 / T) : 5);
		}),
		(e.unstable_getCurrentPriorityLevel = function () {
			return p;
		}),
		(e.unstable_getFirstCallbackNode = function () {
			return n(s);
		}),
		(e.unstable_next = function (T) {
			switch (p) {
				case 1:
				case 2:
				case 3:
					var $ = 3;
					break;
				default:
					$ = p;
			}
			var H = p;
			p = $;
			try {
				return T();
			} finally {
				p = H;
			}
		}),
		(e.unstable_pauseExecution = function () {}),
		(e.unstable_requestPaint = function () {}),
		(e.unstable_runWithPriority = function (T, $) {
			switch (T) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					T = 3;
			}
			var H = p;
			p = T;
			try {
				return $();
			} finally {
				p = H;
			}
		}),
		(e.unstable_scheduleCallback = function (T, $, H) {
			var q = e.unstable_now();
			switch (
				(typeof H == "object" && H !== null
					? ((H = H.delay), (H = typeof H == "number" && 0 < H ? q + H : q))
					: (H = q),
				T)
			) {
				case 1:
					var X = -1;
					break;
				case 2:
					X = 250;
					break;
				case 5:
					X = 1073741823;
					break;
				case 4:
					X = 1e4;
					break;
				default:
					X = 5e3;
			}
			return (
				(X = H + X),
				(T = {
					id: c++,
					callback: $,
					priorityLevel: T,
					startTime: H,
					expirationTime: X,
					sortIndex: -1,
				}),
				H > q
					? ((T.sortIndex = H),
					  t(u, T),
					  n(s) === null &&
							T === n(u) &&
							(y ? (h(j), (j = -1)) : (y = !0), _e(E, H - q)))
					: ((T.sortIndex = X), t(s, T), x || w || ((x = !0), We(P))),
				T
			);
		}),
		(e.unstable_shouldYield = V),
		(e.unstable_wrapCallback = function (T) {
			var $ = p;
			return function () {
				var H = p;
				p = $;
				try {
					return T.apply(this, arguments);
				} finally {
					p = H;
				}
			};
		});
})(qd);
Zd.exports = qd;
var K1 = Zd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var X1 = S,
	pt = K1;
function L(e) {
	for (
		var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
		n < arguments.length;
		n++
	)
		t += "&args[]=" + encodeURIComponent(arguments[n]);
	return (
		"Minified React error #" +
		e +
		"; visit " +
		t +
		" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
	);
}
var ep = new Set(),
	Pa = {};
function tr(e, t) {
	Or(e, t), Or(e + "Capture", t);
}
function Or(e, t) {
	for (Pa[e] = t, e = 0; e < t.length; e++) ep.add(t[e]);
}
var Kt = !(
		typeof window > "u" ||
		typeof window.document > "u" ||
		typeof window.document.createElement > "u"
	),
	Yl = Object.prototype.hasOwnProperty,
	G1 =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	Oc = {},
	Mc = {};
function J1(e) {
	return Yl.call(Mc, e)
		? !0
		: Yl.call(Oc, e)
		? !1
		: G1.test(e)
		? (Mc[e] = !0)
		: ((Oc[e] = !0), !1);
}
function Z1(e, t, n, r) {
	if (n !== null && n.type === 0) return !1;
	switch (typeof t) {
		case "function":
		case "symbol":
			return !0;
		case "boolean":
			return r
				? !1
				: n !== null
				? !n.acceptsBooleans
				: ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
		default:
			return !1;
	}
}
function q1(e, t, n, r) {
	if (t === null || typeof t > "u" || Z1(e, t, n, r)) return !0;
	if (r) return !1;
	if (n !== null)
		switch (n.type) {
			case 3:
				return !t;
			case 4:
				return t === !1;
			case 5:
				return isNaN(t);
			case 6:
				return isNaN(t) || 1 > t;
		}
	return !1;
}
function nt(e, t, n, r, a, i, o) {
	(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
		(this.attributeName = r),
		(this.attributeNamespace = a),
		(this.mustUseProperty = n),
		(this.propertyName = e),
		(this.type = t),
		(this.sanitizeURL = i),
		(this.removeEmptyString = o);
}
var Be = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
	.split(" ")
	.forEach(function (e) {
		Be[e] = new nt(e, 0, !1, e, null, !1, !1);
	});
[
	["acceptCharset", "accept-charset"],
	["className", "class"],
	["htmlFor", "for"],
	["httpEquiv", "http-equiv"],
].forEach(function (e) {
	var t = e[0];
	Be[t] = new nt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
	Be[e] = new nt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
	"autoReverse",
	"externalResourcesRequired",
	"focusable",
	"preserveAlpha",
].forEach(function (e) {
	Be[e] = new nt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
	.split(" ")
	.forEach(function (e) {
		Be[e] = new nt(e, 3, !1, e.toLowerCase(), null, !1, !1);
	});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
	Be[e] = new nt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
	Be[e] = new nt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
	Be[e] = new nt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
	Be[e] = new nt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var cu = /[\-:]([a-z])/g;
function fu(e) {
	return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
	.split(" ")
	.forEach(function (e) {
		var t = e.replace(cu, fu);
		Be[t] = new nt(t, 1, !1, e, null, !1, !1);
	});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
	.split(" ")
	.forEach(function (e) {
		var t = e.replace(cu, fu);
		Be[t] = new nt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
	});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
	var t = e.replace(cu, fu);
	Be[t] = new nt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
	Be[e] = new nt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Be.xlinkHref = new nt(
	"xlinkHref",
	1,
	!1,
	"xlink:href",
	"http://www.w3.org/1999/xlink",
	!0,
	!1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
	Be[e] = new nt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function du(e, t, n, r) {
	var a = Be.hasOwnProperty(t) ? Be[t] : null;
	(a !== null
		? a.type !== 0
		: r ||
		  !(2 < t.length) ||
		  (t[0] !== "o" && t[0] !== "O") ||
		  (t[1] !== "n" && t[1] !== "N")) &&
		(q1(t, n, a, r) && (n = null),
		r || a === null
			? J1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
			: a.mustUseProperty
			? (e[a.propertyName] = n === null ? (a.type === 3 ? !1 : "") : n)
			: ((t = a.attributeName),
			  (r = a.attributeNamespace),
			  n === null
					? e.removeAttribute(t)
					: ((a = a.type),
					  (n = a === 3 || (a === 4 && n === !0) ? "" : "" + n),
					  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var tn = X1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	hi = Symbol.for("react.element"),
	cr = Symbol.for("react.portal"),
	fr = Symbol.for("react.fragment"),
	pu = Symbol.for("react.strict_mode"),
	Ql = Symbol.for("react.profiler"),
	tp = Symbol.for("react.provider"),
	np = Symbol.for("react.context"),
	mu = Symbol.for("react.forward_ref"),
	Kl = Symbol.for("react.suspense"),
	Xl = Symbol.for("react.suspense_list"),
	hu = Symbol.for("react.memo"),
	cn = Symbol.for("react.lazy"),
	rp = Symbol.for("react.offscreen"),
	zc = Symbol.iterator;
function qr(e) {
	return e === null || typeof e != "object"
		? null
		: ((e = (zc && e[zc]) || e["@@iterator"]),
		  typeof e == "function" ? e : null);
}
var be = Object.assign,
	fl;
function ca(e) {
	if (fl === void 0)
		try {
			throw Error();
		} catch (n) {
			var t = n.stack.trim().match(/\n( *(at )?)/);
			fl = (t && t[1]) || "";
		}
	return (
		`
` +
		fl +
		e
	);
}
var dl = !1;
function pl(e, t) {
	if (!e || dl) return "";
	dl = !0;
	var n = Error.prepareStackTrace;
	Error.prepareStackTrace = void 0;
	try {
		if (t)
			if (
				((t = function () {
					throw Error();
				}),
				Object.defineProperty(t.prototype, "props", {
					set: function () {
						throw Error();
					},
				}),
				typeof Reflect == "object" && Reflect.construct)
			) {
				try {
					Reflect.construct(t, []);
				} catch (u) {
					var r = u;
				}
				Reflect.construct(e, [], t);
			} else {
				try {
					t.call();
				} catch (u) {
					r = u;
				}
				e.call(t.prototype);
			}
		else {
			try {
				throw Error();
			} catch (u) {
				r = u;
			}
			e();
		}
	} catch (u) {
		if (u && r && typeof u.stack == "string") {
			for (
				var a = u.stack.split(`
`),
					i = r.stack.split(`
`),
					o = a.length - 1,
					l = i.length - 1;
				1 <= o && 0 <= l && a[o] !== i[l];

			)
				l--;
			for (; 1 <= o && 0 <= l; o--, l--)
				if (a[o] !== i[l]) {
					if (o !== 1 || l !== 1)
						do
							if ((o--, l--, 0 > l || a[o] !== i[l])) {
								var s =
									`
` + a[o].replace(" at new ", " at ");
								return (
									e.displayName &&
										s.includes("<anonymous>") &&
										(s = s.replace("<anonymous>", e.displayName)),
									s
								);
							}
						while (1 <= o && 0 <= l);
					break;
				}
		}
	} finally {
		(dl = !1), (Error.prepareStackTrace = n);
	}
	return (e = e ? e.displayName || e.name : "") ? ca(e) : "";
}
function ev(e) {
	switch (e.tag) {
		case 5:
			return ca(e.type);
		case 16:
			return ca("Lazy");
		case 13:
			return ca("Suspense");
		case 19:
			return ca("SuspenseList");
		case 0:
		case 2:
		case 15:
			return (e = pl(e.type, !1)), e;
		case 11:
			return (e = pl(e.type.render, !1)), e;
		case 1:
			return (e = pl(e.type, !0)), e;
		default:
			return "";
	}
}
function Gl(e) {
	if (e == null) return null;
	if (typeof e == "function") return e.displayName || e.name || null;
	if (typeof e == "string") return e;
	switch (e) {
		case fr:
			return "Fragment";
		case cr:
			return "Portal";
		case Ql:
			return "Profiler";
		case pu:
			return "StrictMode";
		case Kl:
			return "Suspense";
		case Xl:
			return "SuspenseList";
	}
	if (typeof e == "object")
		switch (e.$$typeof) {
			case np:
				return (e.displayName || "Context") + ".Consumer";
			case tp:
				return (e._context.displayName || "Context") + ".Provider";
			case mu:
				var t = e.render;
				return (
					(e = e.displayName),
					e ||
						((e = t.displayName || t.name || ""),
						(e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
					e
				);
			case hu:
				return (
					(t = e.displayName || null), t !== null ? t : Gl(e.type) || "Memo"
				);
			case cn:
				(t = e._payload), (e = e._init);
				try {
					return Gl(e(t));
				} catch {}
		}
	return null;
}
function tv(e) {
	var t = e.type;
	switch (e.tag) {
		case 24:
			return "Cache";
		case 9:
			return (t.displayName || "Context") + ".Consumer";
		case 10:
			return (t._context.displayName || "Context") + ".Provider";
		case 18:
			return "DehydratedFragment";
		case 11:
			return (
				(e = t.render),
				(e = e.displayName || e.name || ""),
				t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
			);
		case 7:
			return "Fragment";
		case 5:
			return t;
		case 4:
			return "Portal";
		case 3:
			return "Root";
		case 6:
			return "Text";
		case 16:
			return Gl(t);
		case 8:
			return t === pu ? "StrictMode" : "Mode";
		case 22:
			return "Offscreen";
		case 12:
			return "Profiler";
		case 21:
			return "Scope";
		case 13:
			return "Suspense";
		case 19:
			return "SuspenseList";
		case 25:
			return "TracingMarker";
		case 1:
		case 0:
		case 17:
		case 2:
		case 14:
		case 15:
			if (typeof t == "function") return t.displayName || t.name || null;
			if (typeof t == "string") return t;
	}
	return null;
}
function jn(e) {
	switch (typeof e) {
		case "boolean":
		case "number":
		case "string":
		case "undefined":
			return e;
		case "object":
			return e;
		default:
			return "";
	}
}
function ap(e) {
	var t = e.type;
	return (
		(e = e.nodeName) &&
		e.toLowerCase() === "input" &&
		(t === "checkbox" || t === "radio")
	);
}
function nv(e) {
	var t = ap(e) ? "checked" : "value",
		n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		r = "" + e[t];
	if (
		!e.hasOwnProperty(t) &&
		typeof n < "u" &&
		typeof n.get == "function" &&
		typeof n.set == "function"
	) {
		var a = n.get,
			i = n.set;
		return (
			Object.defineProperty(e, t, {
				configurable: !0,
				get: function () {
					return a.call(this);
				},
				set: function (o) {
					(r = "" + o), i.call(this, o);
				},
			}),
			Object.defineProperty(e, t, { enumerable: n.enumerable }),
			{
				getValue: function () {
					return r;
				},
				setValue: function (o) {
					r = "" + o;
				},
				stopTracking: function () {
					(e._valueTracker = null), delete e[t];
				},
			}
		);
	}
}
function vi(e) {
	e._valueTracker || (e._valueTracker = nv(e));
}
function ip(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var n = t.getValue(),
		r = "";
	return (
		e && (r = ap(e) ? (e.checked ? "true" : "false") : e.value),
		(e = r),
		e !== n ? (t.setValue(e), !0) : !1
	);
}
function ro(e) {
	if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
		return null;
	try {
		return e.activeElement || e.body;
	} catch {
		return e.body;
	}
}
function Jl(e, t) {
	var n = t.checked;
	return be({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked,
	});
}
function Ic(e, t) {
	var n = t.defaultValue == null ? "" : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked;
	(n = jn(t.value != null ? t.value : n)),
		(e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled:
				t.type === "checkbox" || t.type === "radio"
					? t.checked != null
					: t.value != null,
		});
}
function op(e, t) {
	(t = t.checked), t != null && du(e, "checked", t, !1);
}
function Zl(e, t) {
	op(e, t);
	var n = jn(t.value),
		r = t.type;
	if (n != null)
		r === "number"
			? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
			: e.value !== "" + n && (e.value = "" + n);
	else if (r === "submit" || r === "reset") {
		e.removeAttribute("value");
		return;
	}
	t.hasOwnProperty("value")
		? ql(e, t.type, n)
		: t.hasOwnProperty("defaultValue") && ql(e, t.type, jn(t.defaultValue)),
		t.checked == null &&
			t.defaultChecked != null &&
			(e.defaultChecked = !!t.defaultChecked);
}
function Dc(e, t, n) {
	if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
		var r = t.type;
		if (
			!(
				(r !== "submit" && r !== "reset") ||
				(t.value !== void 0 && t.value !== null)
			)
		)
			return;
		(t = "" + e._wrapperState.initialValue),
			n || t === e.value || (e.value = t),
			(e.defaultValue = t);
	}
	(n = e.name),
		n !== "" && (e.name = ""),
		(e.defaultChecked = !!e._wrapperState.initialChecked),
		n !== "" && (e.name = n);
}
function ql(e, t, n) {
	(t !== "number" || ro(e.ownerDocument) !== e) &&
		(n == null
			? (e.defaultValue = "" + e._wrapperState.initialValue)
			: e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var fa = Array.isArray;
function jr(e, t, n, r) {
	if (((e = e.options), t)) {
		t = {};
		for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
		for (n = 0; n < e.length; n++)
			(a = t.hasOwnProperty("$" + e[n].value)),
				e[n].selected !== a && (e[n].selected = a),
				a && r && (e[n].defaultSelected = !0);
	} else {
		for (n = "" + jn(n), t = null, a = 0; a < e.length; a++) {
			if (e[a].value === n) {
				(e[a].selected = !0), r && (e[a].defaultSelected = !0);
				return;
			}
			t !== null || e[a].disabled || (t = e[a]);
		}
		t !== null && (t.selected = !0);
	}
}
function es(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
	return be({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: "" + e._wrapperState.initialValue,
	});
}
function Ac(e, t) {
	var n = t.value;
	if (n == null) {
		if (((n = t.children), (t = t.defaultValue), n != null)) {
			if (t != null) throw Error(L(92));
			if (fa(n)) {
				if (1 < n.length) throw Error(L(93));
				n = n[0];
			}
			t = n;
		}
		t == null && (t = ""), (n = t);
	}
	e._wrapperState = { initialValue: jn(n) };
}
function lp(e, t) {
	var n = jn(t.value),
		r = jn(t.defaultValue);
	n != null &&
		((n = "" + n),
		n !== e.value && (e.value = n),
		t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
		r != null && (e.defaultValue = "" + r);
}
function Fc(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function sp(e) {
	switch (e) {
		case "svg":
			return "http://www.w3.org/2000/svg";
		case "math":
			return "http://www.w3.org/1998/Math/MathML";
		default:
			return "http://www.w3.org/1999/xhtml";
	}
}
function ts(e, t) {
	return e == null || e === "http://www.w3.org/1999/xhtml"
		? sp(t)
		: e === "http://www.w3.org/2000/svg" && t === "foreignObject"
		? "http://www.w3.org/1999/xhtml"
		: e;
}
var gi,
	up = (function (e) {
		return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
			? function (t, n, r, a) {
					MSApp.execUnsafeLocalFunction(function () {
						return e(t, n, r, a);
					});
			  }
			: e;
	})(function (e, t) {
		if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
			e.innerHTML = t;
		else {
			for (
				gi = gi || document.createElement("div"),
					gi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
					t = gi.firstChild;
				e.firstChild;

			)
				e.removeChild(e.firstChild);
			for (; t.firstChild; ) e.appendChild(t.firstChild);
		}
	});
function _a(e, t) {
	if (t) {
		var n = e.firstChild;
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t;
			return;
		}
	}
	e.textContent = t;
}
var ha = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0,
	},
	rv = ["Webkit", "ms", "Moz", "O"];
Object.keys(ha).forEach(function (e) {
	rv.forEach(function (t) {
		(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ha[t] = ha[e]);
	});
});
function cp(e, t, n) {
	return t == null || typeof t == "boolean" || t === ""
		? ""
		: n || typeof t != "number" || t === 0 || (ha.hasOwnProperty(e) && ha[e])
		? ("" + t).trim()
		: t + "px";
}
function fp(e, t) {
	e = e.style;
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf("--") === 0,
				a = cp(n, t[n], r);
			n === "float" && (n = "cssFloat"), r ? e.setProperty(n, a) : (e[n] = a);
		}
}
var av = be(
	{ menuitem: !0 },
	{
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0,
	},
);
function ns(e, t) {
	if (t) {
		if (av[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
			throw Error(L(137, e));
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(L(60));
			if (
				typeof t.dangerouslySetInnerHTML != "object" ||
				!("__html" in t.dangerouslySetInnerHTML)
			)
				throw Error(L(61));
		}
		if (t.style != null && typeof t.style != "object") throw Error(L(62));
	}
}
function rs(e, t) {
	if (e.indexOf("-") === -1) return typeof t.is == "string";
	switch (e) {
		case "annotation-xml":
		case "color-profile":
		case "font-face":
		case "font-face-src":
		case "font-face-uri":
		case "font-face-format":
		case "font-face-name":
		case "missing-glyph":
			return !1;
		default:
			return !0;
	}
}
var as = null;
function vu(e) {
	return (
		(e = e.target || e.srcElement || window),
		e.correspondingUseElement && (e = e.correspondingUseElement),
		e.nodeType === 3 ? e.parentNode : e
	);
}
var is = null,
	Nr = null,
	Pr = null;
function $c(e) {
	if ((e = ni(e))) {
		if (typeof is != "function") throw Error(L(280));
		var t = e.stateNode;
		t && ((t = Uo(t)), is(e.stateNode, e.type, t));
	}
}
function dp(e) {
	Nr ? (Pr ? Pr.push(e) : (Pr = [e])) : (Nr = e);
}
function pp() {
	if (Nr) {
		var e = Nr,
			t = Pr;
		if (((Pr = Nr = null), $c(e), t)) for (e = 0; e < t.length; e++) $c(t[e]);
	}
}
function mp(e, t) {
	return e(t);
}
function hp() {}
var ml = !1;
function vp(e, t, n) {
	if (ml) return e(t, n);
	ml = !0;
	try {
		return mp(e, t, n);
	} finally {
		(ml = !1), (Nr !== null || Pr !== null) && (hp(), pp());
	}
}
function Ta(e, t) {
	var n = e.stateNode;
	if (n === null) return null;
	var r = Uo(n);
	if (r === null) return null;
	n = r[t];
	e: switch (t) {
		case "onClick":
		case "onClickCapture":
		case "onDoubleClick":
		case "onDoubleClickCapture":
		case "onMouseDown":
		case "onMouseDownCapture":
		case "onMouseMove":
		case "onMouseMoveCapture":
		case "onMouseUp":
		case "onMouseUpCapture":
		case "onMouseEnter":
			(r = !r.disabled) ||
				((e = e.type),
				(r = !(
					e === "button" ||
					e === "input" ||
					e === "select" ||
					e === "textarea"
				))),
				(e = !r);
			break e;
		default:
			e = !1;
	}
	if (e) return null;
	if (n && typeof n != "function") throw Error(L(231, t, typeof n));
	return n;
}
var os = !1;
if (Kt)
	try {
		var ea = {};
		Object.defineProperty(ea, "passive", {
			get: function () {
				os = !0;
			},
		}),
			window.addEventListener("test", ea, ea),
			window.removeEventListener("test", ea, ea);
	} catch {
		os = !1;
	}
function iv(e, t, n, r, a, i, o, l, s) {
	var u = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(n, u);
	} catch (c) {
		this.onError(c);
	}
}
var va = !1,
	ao = null,
	io = !1,
	ls = null,
	ov = {
		onError: function (e) {
			(va = !0), (ao = e);
		},
	};
function lv(e, t, n, r, a, i, o, l, s) {
	(va = !1), (ao = null), iv.apply(ov, arguments);
}
function sv(e, t, n, r, a, i, o, l, s) {
	if ((lv.apply(this, arguments), va)) {
		if (va) {
			var u = ao;
			(va = !1), (ao = null);
		} else throw Error(L(198));
		io || ((io = !0), (ls = u));
	}
}
function nr(e) {
	var t = e,
		n = e;
	if (e.alternate) for (; t.return; ) t = t.return;
	else {
		e = t;
		do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
		while (e);
	}
	return t.tag === 3 ? n : null;
}
function gp(e) {
	if (e.tag === 13) {
		var t = e.memoizedState;
		if (
			(t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
			t !== null)
		)
			return t.dehydrated;
	}
	return null;
}
function Uc(e) {
	if (nr(e) !== e) throw Error(L(188));
}
function uv(e) {
	var t = e.alternate;
	if (!t) {
		if (((t = nr(e)), t === null)) throw Error(L(188));
		return t !== e ? null : e;
	}
	for (var n = e, r = t; ; ) {
		var a = n.return;
		if (a === null) break;
		var i = a.alternate;
		if (i === null) {
			if (((r = a.return), r !== null)) {
				n = r;
				continue;
			}
			break;
		}
		if (a.child === i.child) {
			for (i = a.child; i; ) {
				if (i === n) return Uc(a), e;
				if (i === r) return Uc(a), t;
				i = i.sibling;
			}
			throw Error(L(188));
		}
		if (n.return !== r.return) (n = a), (r = i);
		else {
			for (var o = !1, l = a.child; l; ) {
				if (l === n) {
					(o = !0), (n = a), (r = i);
					break;
				}
				if (l === r) {
					(o = !0), (r = a), (n = i);
					break;
				}
				l = l.sibling;
			}
			if (!o) {
				for (l = i.child; l; ) {
					if (l === n) {
						(o = !0), (n = i), (r = a);
						break;
					}
					if (l === r) {
						(o = !0), (r = i), (n = a);
						break;
					}
					l = l.sibling;
				}
				if (!o) throw Error(L(189));
			}
		}
		if (n.alternate !== r) throw Error(L(190));
	}
	if (n.tag !== 3) throw Error(L(188));
	return n.stateNode.current === n ? e : t;
}
function yp(e) {
	return (e = uv(e)), e !== null ? wp(e) : null;
}
function wp(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null; ) {
		var t = wp(e);
		if (t !== null) return t;
		e = e.sibling;
	}
	return null;
}
var xp = pt.unstable_scheduleCallback,
	Hc = pt.unstable_cancelCallback,
	cv = pt.unstable_shouldYield,
	fv = pt.unstable_requestPaint,
	Pe = pt.unstable_now,
	dv = pt.unstable_getCurrentPriorityLevel,
	gu = pt.unstable_ImmediatePriority,
	Sp = pt.unstable_UserBlockingPriority,
	oo = pt.unstable_NormalPriority,
	pv = pt.unstable_LowPriority,
	kp = pt.unstable_IdlePriority,
	Do = null,
	Ut = null;
function mv(e) {
	if (Ut && typeof Ut.onCommitFiberRoot == "function")
		try {
			Ut.onCommitFiberRoot(Do, e, void 0, (e.current.flags & 128) === 128);
		} catch {}
}
var Rt = Math.clz32 ? Math.clz32 : gv,
	hv = Math.log,
	vv = Math.LN2;
function gv(e) {
	return (e >>>= 0), e === 0 ? 32 : (31 - ((hv(e) / vv) | 0)) | 0;
}
var yi = 64,
	wi = 4194304;
function da(e) {
	switch (e & -e) {
		case 1:
			return 1;
		case 2:
			return 2;
		case 4:
			return 4;
		case 8:
			return 8;
		case 16:
			return 16;
		case 32:
			return 32;
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return e & 4194240;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return e & 130023424;
		case 134217728:
			return 134217728;
		case 268435456:
			return 268435456;
		case 536870912:
			return 536870912;
		case 1073741824:
			return 1073741824;
		default:
			return e;
	}
}
function lo(e, t) {
	var n = e.pendingLanes;
	if (n === 0) return 0;
	var r = 0,
		a = e.suspendedLanes,
		i = e.pingedLanes,
		o = n & 268435455;
	if (o !== 0) {
		var l = o & ~a;
		l !== 0 ? (r = da(l)) : ((i &= o), i !== 0 && (r = da(i)));
	} else (o = n & ~a), o !== 0 ? (r = da(o)) : i !== 0 && (r = da(i));
	if (r === 0) return 0;
	if (
		t !== 0 &&
		t !== r &&
		!(t & a) &&
		((a = r & -r), (i = t & -t), a >= i || (a === 16 && (i & 4194240) !== 0))
	)
		return t;
	if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
		for (e = e.entanglements, t &= r; 0 < t; )
			(n = 31 - Rt(t)), (a = 1 << n), (r |= e[n]), (t &= ~a);
	return r;
}
function yv(e, t) {
	switch (e) {
		case 1:
		case 2:
		case 4:
			return t + 250;
		case 8:
		case 16:
		case 32:
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return t + 5e3;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return -1;
		case 134217728:
		case 268435456:
		case 536870912:
		case 1073741824:
			return -1;
		default:
			return -1;
	}
}
function wv(e, t) {
	for (
		var n = e.suspendedLanes,
			r = e.pingedLanes,
			a = e.expirationTimes,
			i = e.pendingLanes;
		0 < i;

	) {
		var o = 31 - Rt(i),
			l = 1 << o,
			s = a[o];
		s === -1
			? (!(l & n) || l & r) && (a[o] = yv(l, t))
			: s <= t && (e.expiredLanes |= l),
			(i &= ~l);
	}
}
function ss(e) {
	return (
		(e = e.pendingLanes & -1073741825),
		e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
	);
}
function Ep() {
	var e = yi;
	return (yi <<= 1), !(yi & 4194240) && (yi = 64), e;
}
function hl(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e);
	return t;
}
function ei(e, t, n) {
	(e.pendingLanes |= t),
		t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
		(e = e.eventTimes),
		(t = 31 - Rt(t)),
		(e[t] = n);
}
function xv(e, t) {
	var n = e.pendingLanes & ~t;
	(e.pendingLanes = t),
		(e.suspendedLanes = 0),
		(e.pingedLanes = 0),
		(e.expiredLanes &= t),
		(e.mutableReadLanes &= t),
		(e.entangledLanes &= t),
		(t = e.entanglements);
	var r = e.eventTimes;
	for (e = e.expirationTimes; 0 < n; ) {
		var a = 31 - Rt(n),
			i = 1 << a;
		(t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~i);
	}
}
function yu(e, t) {
	var n = (e.entangledLanes |= t);
	for (e = e.entanglements; n; ) {
		var r = 31 - Rt(n),
			a = 1 << r;
		(a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
	}
}
var le = 0;
function bp(e) {
	return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Cp,
	wu,
	jp,
	Np,
	Pp,
	us = !1,
	xi = [],
	gn = null,
	yn = null,
	wn = null,
	La = new Map(),
	Ra = new Map(),
	dn = [],
	Sv =
		"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
			" ",
		);
function Vc(e, t) {
	switch (e) {
		case "focusin":
		case "focusout":
			gn = null;
			break;
		case "dragenter":
		case "dragleave":
			yn = null;
			break;
		case "mouseover":
		case "mouseout":
			wn = null;
			break;
		case "pointerover":
		case "pointerout":
			La.delete(t.pointerId);
			break;
		case "gotpointercapture":
		case "lostpointercapture":
			Ra.delete(t.pointerId);
	}
}
function ta(e, t, n, r, a, i) {
	return e === null || e.nativeEvent !== i
		? ((e = {
				blockedOn: t,
				domEventName: n,
				eventSystemFlags: r,
				nativeEvent: i,
				targetContainers: [a],
		  }),
		  t !== null && ((t = ni(t)), t !== null && wu(t)),
		  e)
		: ((e.eventSystemFlags |= r),
		  (t = e.targetContainers),
		  a !== null && t.indexOf(a) === -1 && t.push(a),
		  e);
}
function kv(e, t, n, r, a) {
	switch (t) {
		case "focusin":
			return (gn = ta(gn, e, t, n, r, a)), !0;
		case "dragenter":
			return (yn = ta(yn, e, t, n, r, a)), !0;
		case "mouseover":
			return (wn = ta(wn, e, t, n, r, a)), !0;
		case "pointerover":
			var i = a.pointerId;
			return La.set(i, ta(La.get(i) || null, e, t, n, r, a)), !0;
		case "gotpointercapture":
			return (
				(i = a.pointerId), Ra.set(i, ta(Ra.get(i) || null, e, t, n, r, a)), !0
			);
	}
	return !1;
}
function _p(e) {
	var t = An(e.target);
	if (t !== null) {
		var n = nr(t);
		if (n !== null) {
			if (((t = n.tag), t === 13)) {
				if (((t = gp(n)), t !== null)) {
					(e.blockedOn = t),
						Pp(e.priority, function () {
							jp(n);
						});
					return;
				}
			} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
				e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
				return;
			}
		}
	}
	e.blockedOn = null;
}
function Bi(e) {
	if (e.blockedOn !== null) return !1;
	for (var t = e.targetContainers; 0 < t.length; ) {
		var n = cs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
		if (n === null) {
			n = e.nativeEvent;
			var r = new n.constructor(n.type, n);
			(as = r), n.target.dispatchEvent(r), (as = null);
		} else return (t = ni(n)), t !== null && wu(t), (e.blockedOn = n), !1;
		t.shift();
	}
	return !0;
}
function Bc(e, t, n) {
	Bi(e) && n.delete(t);
}
function Ev() {
	(us = !1),
		gn !== null && Bi(gn) && (gn = null),
		yn !== null && Bi(yn) && (yn = null),
		wn !== null && Bi(wn) && (wn = null),
		La.forEach(Bc),
		Ra.forEach(Bc);
}
function na(e, t) {
	e.blockedOn === t &&
		((e.blockedOn = null),
		us ||
			((us = !0),
			pt.unstable_scheduleCallback(pt.unstable_NormalPriority, Ev)));
}
function Oa(e) {
	function t(a) {
		return na(a, e);
	}
	if (0 < xi.length) {
		na(xi[0], e);
		for (var n = 1; n < xi.length; n++) {
			var r = xi[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
	}
	for (
		gn !== null && na(gn, e),
			yn !== null && na(yn, e),
			wn !== null && na(wn, e),
			La.forEach(t),
			Ra.forEach(t),
			n = 0;
		n < dn.length;
		n++
	)
		(r = dn[n]), r.blockedOn === e && (r.blockedOn = null);
	for (; 0 < dn.length && ((n = dn[0]), n.blockedOn === null); )
		_p(n), n.blockedOn === null && dn.shift();
}
var _r = tn.ReactCurrentBatchConfig,
	so = !0;
function bv(e, t, n, r) {
	var a = le,
		i = _r.transition;
	_r.transition = null;
	try {
		(le = 1), xu(e, t, n, r);
	} finally {
		(le = a), (_r.transition = i);
	}
}
function Cv(e, t, n, r) {
	var a = le,
		i = _r.transition;
	_r.transition = null;
	try {
		(le = 4), xu(e, t, n, r);
	} finally {
		(le = a), (_r.transition = i);
	}
}
function xu(e, t, n, r) {
	if (so) {
		var a = cs(e, t, n, r);
		if (a === null) Cl(e, t, r, uo, n), Vc(e, r);
		else if (kv(a, e, t, n, r)) r.stopPropagation();
		else if ((Vc(e, r), t & 4 && -1 < Sv.indexOf(e))) {
			for (; a !== null; ) {
				var i = ni(a);
				if (
					(i !== null && Cp(i),
					(i = cs(e, t, n, r)),
					i === null && Cl(e, t, r, uo, n),
					i === a)
				)
					break;
				a = i;
			}
			a !== null && r.stopPropagation();
		} else Cl(e, t, r, null, n);
	}
}
var uo = null;
function cs(e, t, n, r) {
	if (((uo = null), (e = vu(r)), (e = An(e)), e !== null))
		if (((t = nr(e)), t === null)) e = null;
		else if (((n = t.tag), n === 13)) {
			if (((e = gp(t)), e !== null)) return e;
			e = null;
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated)
				return t.tag === 3 ? t.stateNode.containerInfo : null;
			e = null;
		} else t !== e && (e = null);
	return (uo = e), null;
}
function Tp(e) {
	switch (e) {
		case "cancel":
		case "click":
		case "close":
		case "contextmenu":
		case "copy":
		case "cut":
		case "auxclick":
		case "dblclick":
		case "dragend":
		case "dragstart":
		case "drop":
		case "focusin":
		case "focusout":
		case "input":
		case "invalid":
		case "keydown":
		case "keypress":
		case "keyup":
		case "mousedown":
		case "mouseup":
		case "paste":
		case "pause":
		case "play":
		case "pointercancel":
		case "pointerdown":
		case "pointerup":
		case "ratechange":
		case "reset":
		case "resize":
		case "seeked":
		case "submit":
		case "touchcancel":
		case "touchend":
		case "touchstart":
		case "volumechange":
		case "change":
		case "selectionchange":
		case "textInput":
		case "compositionstart":
		case "compositionend":
		case "compositionupdate":
		case "beforeblur":
		case "afterblur":
		case "beforeinput":
		case "blur":
		case "fullscreenchange":
		case "focus":
		case "hashchange":
		case "popstate":
		case "select":
		case "selectstart":
			return 1;
		case "drag":
		case "dragenter":
		case "dragexit":
		case "dragleave":
		case "dragover":
		case "mousemove":
		case "mouseout":
		case "mouseover":
		case "pointermove":
		case "pointerout":
		case "pointerover":
		case "scroll":
		case "toggle":
		case "touchmove":
		case "wheel":
		case "mouseenter":
		case "mouseleave":
		case "pointerenter":
		case "pointerleave":
			return 4;
		case "message":
			switch (dv()) {
				case gu:
					return 1;
				case Sp:
					return 4;
				case oo:
				case pv:
					return 16;
				case kp:
					return 536870912;
				default:
					return 16;
			}
		default:
			return 16;
	}
}
var mn = null,
	Su = null,
	Wi = null;
function Lp() {
	if (Wi) return Wi;
	var e,
		t = Su,
		n = t.length,
		r,
		a = "value" in mn ? mn.value : mn.textContent,
		i = a.length;
	for (e = 0; e < n && t[e] === a[e]; e++);
	var o = n - e;
	for (r = 1; r <= o && t[n - r] === a[i - r]; r++);
	return (Wi = a.slice(e, 1 < r ? 1 - r : void 0));
}
function Yi(e) {
	var t = e.keyCode;
	return (
		"charCode" in e
			? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
			: (e = t),
		e === 10 && (e = 13),
		32 <= e || e === 13 ? e : 0
	);
}
function Si() {
	return !0;
}
function Wc() {
	return !1;
}
function ht(e) {
	function t(n, r, a, i, o) {
		(this._reactName = n),
			(this._targetInst = a),
			(this.type = r),
			(this.nativeEvent = i),
			(this.target = o),
			(this.currentTarget = null);
		for (var l in e)
			e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
		return (
			(this.isDefaultPrevented = (
				i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
			)
				? Si
				: Wc),
			(this.isPropagationStopped = Wc),
			this
		);
	}
	return (
		be(t.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0;
				var n = this.nativeEvent;
				n &&
					(n.preventDefault
						? n.preventDefault()
						: typeof n.returnValue != "unknown" && (n.returnValue = !1),
					(this.isDefaultPrevented = Si));
			},
			stopPropagation: function () {
				var n = this.nativeEvent;
				n &&
					(n.stopPropagation
						? n.stopPropagation()
						: typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
					(this.isPropagationStopped = Si));
			},
			persist: function () {},
			isPersistent: Si,
		}),
		t
	);
}
var Vr = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0,
	},
	ku = ht(Vr),
	ti = be({}, Vr, { view: 0, detail: 0 }),
	jv = ht(ti),
	vl,
	gl,
	ra,
	Ao = be({}, ti, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: Eu,
		button: 0,
		buttons: 0,
		relatedTarget: function (e) {
			return e.relatedTarget === void 0
				? e.fromElement === e.srcElement
					? e.toElement
					: e.fromElement
				: e.relatedTarget;
		},
		movementX: function (e) {
			return "movementX" in e
				? e.movementX
				: (e !== ra &&
						(ra && e.type === "mousemove"
							? ((vl = e.screenX - ra.screenX), (gl = e.screenY - ra.screenY))
							: (gl = vl = 0),
						(ra = e)),
				  vl);
		},
		movementY: function (e) {
			return "movementY" in e ? e.movementY : gl;
		},
	}),
	Yc = ht(Ao),
	Nv = be({}, Ao, { dataTransfer: 0 }),
	Pv = ht(Nv),
	_v = be({}, ti, { relatedTarget: 0 }),
	yl = ht(_v),
	Tv = be({}, Vr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	Lv = ht(Tv),
	Rv = be({}, Vr, {
		clipboardData: function (e) {
			return "clipboardData" in e ? e.clipboardData : window.clipboardData;
		},
	}),
	Ov = ht(Rv),
	Mv = be({}, Vr, { data: 0 }),
	Qc = ht(Mv),
	zv = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified",
	},
	Iv = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta",
	},
	Dv = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey",
	};
function Av(e) {
	var t = this.nativeEvent;
	return t.getModifierState ? t.getModifierState(e) : (e = Dv[e]) ? !!t[e] : !1;
}
function Eu() {
	return Av;
}
var Fv = be({}, ti, {
		key: function (e) {
			if (e.key) {
				var t = zv[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress"
				? ((e = Yi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
				: e.type === "keydown" || e.type === "keyup"
				? Iv[e.keyCode] || "Unidentified"
				: "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: Eu,
		charCode: function (e) {
			return e.type === "keypress" ? Yi(e) : 0;
		},
		keyCode: function (e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function (e) {
			return e.type === "keypress"
				? Yi(e)
				: e.type === "keydown" || e.type === "keyup"
				? e.keyCode
				: 0;
		},
	}),
	$v = ht(Fv),
	Uv = be({}, Ao, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0,
	}),
	Kc = ht(Uv),
	Hv = be({}, ti, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: Eu,
	}),
	Vv = ht(Hv),
	Bv = be({}, Vr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	Wv = ht(Bv),
	Yv = be({}, Ao, {
		deltaX: function (e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function (e) {
			return "deltaY" in e
				? e.deltaY
				: "wheelDeltaY" in e
				? -e.wheelDeltaY
				: "wheelDelta" in e
				? -e.wheelDelta
				: 0;
		},
		deltaZ: 0,
		deltaMode: 0,
	}),
	Qv = ht(Yv),
	Kv = [9, 13, 27, 32],
	bu = Kt && "CompositionEvent" in window,
	ga = null;
Kt && "documentMode" in document && (ga = document.documentMode);
var Xv = Kt && "TextEvent" in window && !ga,
	Rp = Kt && (!bu || (ga && 8 < ga && 11 >= ga)),
	Xc = " ",
	Gc = !1;
function Op(e, t) {
	switch (e) {
		case "keyup":
			return Kv.indexOf(t.keyCode) !== -1;
		case "keydown":
			return t.keyCode !== 229;
		case "keypress":
		case "mousedown":
		case "focusout":
			return !0;
		default:
			return !1;
	}
}
function Mp(e) {
	return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var dr = !1;
function Gv(e, t) {
	switch (e) {
		case "compositionend":
			return Mp(t);
		case "keypress":
			return t.which !== 32 ? null : ((Gc = !0), Xc);
		case "textInput":
			return (e = t.data), e === Xc && Gc ? null : e;
		default:
			return null;
	}
}
function Jv(e, t) {
	if (dr)
		return e === "compositionend" || (!bu && Op(e, t))
			? ((e = Lp()), (Wi = Su = mn = null), (dr = !1), e)
			: null;
	switch (e) {
		case "paste":
			return null;
		case "keypress":
			if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
				if (t.char && 1 < t.char.length) return t.char;
				if (t.which) return String.fromCharCode(t.which);
			}
			return null;
		case "compositionend":
			return Rp && t.locale !== "ko" ? null : t.data;
		default:
			return null;
	}
}
var Zv = {
	color: !0,
	date: !0,
	datetime: !0,
	"datetime-local": !0,
	email: !0,
	month: !0,
	number: !0,
	password: !0,
	range: !0,
	search: !0,
	tel: !0,
	text: !0,
	time: !0,
	url: !0,
	week: !0,
};
function Jc(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === "input" ? !!Zv[e.type] : t === "textarea";
}
function zp(e, t, n, r) {
	dp(r),
		(t = co(t, "onChange")),
		0 < t.length &&
			((n = new ku("onChange", "change", null, n, r)),
			e.push({ event: n, listeners: t }));
}
var ya = null,
	Ma = null;
function qv(e) {
	Yp(e, 0);
}
function Fo(e) {
	var t = hr(e);
	if (ip(t)) return e;
}
function e0(e, t) {
	if (e === "change") return t;
}
var Ip = !1;
if (Kt) {
	var wl;
	if (Kt) {
		var xl = "oninput" in document;
		if (!xl) {
			var Zc = document.createElement("div");
			Zc.setAttribute("oninput", "return;"),
				(xl = typeof Zc.oninput == "function");
		}
		wl = xl;
	} else wl = !1;
	Ip = wl && (!document.documentMode || 9 < document.documentMode);
}
function qc() {
	ya && (ya.detachEvent("onpropertychange", Dp), (Ma = ya = null));
}
function Dp(e) {
	if (e.propertyName === "value" && Fo(Ma)) {
		var t = [];
		zp(t, Ma, e, vu(e)), vp(qv, t);
	}
}
function t0(e, t, n) {
	e === "focusin"
		? (qc(), (ya = t), (Ma = n), ya.attachEvent("onpropertychange", Dp))
		: e === "focusout" && qc();
}
function n0(e) {
	if (e === "selectionchange" || e === "keyup" || e === "keydown")
		return Fo(Ma);
}
function r0(e, t) {
	if (e === "click") return Fo(t);
}
function a0(e, t) {
	if (e === "input" || e === "change") return Fo(t);
}
function i0(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Mt = typeof Object.is == "function" ? Object.is : i0;
function za(e, t) {
	if (Mt(e, t)) return !0;
	if (typeof e != "object" || e === null || typeof t != "object" || t === null)
		return !1;
	var n = Object.keys(e),
		r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (r = 0; r < n.length; r++) {
		var a = n[r];
		if (!Yl.call(t, a) || !Mt(e[a], t[a])) return !1;
	}
	return !0;
}
function ef(e) {
	for (; e && e.firstChild; ) e = e.firstChild;
	return e;
}
function tf(e, t) {
	var n = ef(e);
	e = 0;
	for (var r; n; ) {
		if (n.nodeType === 3) {
			if (((r = e + n.textContent.length), e <= t && r >= t))
				return { node: n, offset: t - e };
			e = r;
		}
		e: {
			for (; n; ) {
				if (n.nextSibling) {
					n = n.nextSibling;
					break e;
				}
				n = n.parentNode;
			}
			n = void 0;
		}
		n = ef(n);
	}
}
function Ap(e, t) {
	return e && t
		? e === t
			? !0
			: e && e.nodeType === 3
			? !1
			: t && t.nodeType === 3
			? Ap(e, t.parentNode)
			: "contains" in e
			? e.contains(t)
			: e.compareDocumentPosition
			? !!(e.compareDocumentPosition(t) & 16)
			: !1
		: !1;
}
function Fp() {
	for (var e = window, t = ro(); t instanceof e.HTMLIFrameElement; ) {
		try {
			var n = typeof t.contentWindow.location.href == "string";
		} catch {
			n = !1;
		}
		if (n) e = t.contentWindow;
		else break;
		t = ro(e.document);
	}
	return t;
}
function Cu(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return (
		t &&
		((t === "input" &&
			(e.type === "text" ||
				e.type === "search" ||
				e.type === "tel" ||
				e.type === "url" ||
				e.type === "password")) ||
			t === "textarea" ||
			e.contentEditable === "true")
	);
}
function o0(e) {
	var t = Fp(),
		n = e.focusedElem,
		r = e.selectionRange;
	if (
		t !== n &&
		n &&
		n.ownerDocument &&
		Ap(n.ownerDocument.documentElement, n)
	) {
		if (r !== null && Cu(n)) {
			if (
				((t = r.start),
				(e = r.end),
				e === void 0 && (e = t),
				"selectionStart" in n)
			)
				(n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
			else if (
				((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
				e.getSelection)
			) {
				e = e.getSelection();
				var a = n.textContent.length,
					i = Math.min(r.start, a);
				(r = r.end === void 0 ? i : Math.min(r.end, a)),
					!e.extend && i > r && ((a = r), (r = i), (i = a)),
					(a = tf(n, i));
				var o = tf(n, r);
				a &&
					o &&
					(e.rangeCount !== 1 ||
						e.anchorNode !== a.node ||
						e.anchorOffset !== a.offset ||
						e.focusNode !== o.node ||
						e.focusOffset !== o.offset) &&
					((t = t.createRange()),
					t.setStart(a.node, a.offset),
					e.removeAllRanges(),
					i > r
						? (e.addRange(t), e.extend(o.node, o.offset))
						: (t.setEnd(o.node, o.offset), e.addRange(t)));
			}
		}
		for (t = [], e = n; (e = e.parentNode); )
			e.nodeType === 1 &&
				t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
		for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
			(e = t[n]),
				(e.element.scrollLeft = e.left),
				(e.element.scrollTop = e.top);
	}
}
var l0 = Kt && "documentMode" in document && 11 >= document.documentMode,
	pr = null,
	fs = null,
	wa = null,
	ds = !1;
function nf(e, t, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	ds ||
		pr == null ||
		pr !== ro(r) ||
		((r = pr),
		"selectionStart" in r && Cu(r)
			? (r = { start: r.selectionStart, end: r.selectionEnd })
			: ((r = (
					(r.ownerDocument && r.ownerDocument.defaultView) ||
					window
			  ).getSelection()),
			  (r = {
					anchorNode: r.anchorNode,
					anchorOffset: r.anchorOffset,
					focusNode: r.focusNode,
					focusOffset: r.focusOffset,
			  })),
		(wa && za(wa, r)) ||
			((wa = r),
			(r = co(fs, "onSelect")),
			0 < r.length &&
				((t = new ku("onSelect", "select", null, t, n)),
				e.push({ event: t, listeners: r }),
				(t.target = pr))));
}
function ki(e, t) {
	var n = {};
	return (
		(n[e.toLowerCase()] = t.toLowerCase()),
		(n["Webkit" + e] = "webkit" + t),
		(n["Moz" + e] = "moz" + t),
		n
	);
}
var mr = {
		animationend: ki("Animation", "AnimationEnd"),
		animationiteration: ki("Animation", "AnimationIteration"),
		animationstart: ki("Animation", "AnimationStart"),
		transitionend: ki("Transition", "TransitionEnd"),
	},
	Sl = {},
	$p = {};
Kt &&
	(($p = document.createElement("div").style),
	"AnimationEvent" in window ||
		(delete mr.animationend.animation,
		delete mr.animationiteration.animation,
		delete mr.animationstart.animation),
	"TransitionEvent" in window || delete mr.transitionend.transition);
function $o(e) {
	if (Sl[e]) return Sl[e];
	if (!mr[e]) return e;
	var t = mr[e],
		n;
	for (n in t) if (t.hasOwnProperty(n) && n in $p) return (Sl[e] = t[n]);
	return e;
}
var Up = $o("animationend"),
	Hp = $o("animationiteration"),
	Vp = $o("animationstart"),
	Bp = $o("transitionend"),
	Wp = new Map(),
	rf =
		"abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
			" ",
		);
function Ln(e, t) {
	Wp.set(e, t), tr(t, [e]);
}
for (var kl = 0; kl < rf.length; kl++) {
	var El = rf[kl],
		s0 = El.toLowerCase(),
		u0 = El[0].toUpperCase() + El.slice(1);
	Ln(s0, "on" + u0);
}
Ln(Up, "onAnimationEnd");
Ln(Hp, "onAnimationIteration");
Ln(Vp, "onAnimationStart");
Ln("dblclick", "onDoubleClick");
Ln("focusin", "onFocus");
Ln("focusout", "onBlur");
Ln(Bp, "onTransitionEnd");
Or("onMouseEnter", ["mouseout", "mouseover"]);
Or("onMouseLeave", ["mouseout", "mouseover"]);
Or("onPointerEnter", ["pointerout", "pointerover"]);
Or("onPointerLeave", ["pointerout", "pointerover"]);
tr(
	"onChange",
	"change click focusin focusout input keydown keyup selectionchange".split(
		" ",
	),
);
tr(
	"onSelect",
	"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
		" ",
	),
);
tr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
tr(
	"onCompositionEnd",
	"compositionend focusout keydown keypress keyup mousedown".split(" "),
);
tr(
	"onCompositionStart",
	"compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
tr(
	"onCompositionUpdate",
	"compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var pa =
		"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
			" ",
		),
	c0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(pa));
function af(e, t, n) {
	var r = e.type || "unknown-event";
	(e.currentTarget = n), sv(r, t, void 0, e), (e.currentTarget = null);
}
function Yp(e, t) {
	t = (t & 4) !== 0;
	for (var n = 0; n < e.length; n++) {
		var r = e[n],
			a = r.event;
		r = r.listeners;
		e: {
			var i = void 0;
			if (t)
				for (var o = r.length - 1; 0 <= o; o--) {
					var l = r[o],
						s = l.instance,
						u = l.currentTarget;
					if (((l = l.listener), s !== i && a.isPropagationStopped())) break e;
					af(a, l, u), (i = s);
				}
			else
				for (o = 0; o < r.length; o++) {
					if (
						((l = r[o]),
						(s = l.instance),
						(u = l.currentTarget),
						(l = l.listener),
						s !== i && a.isPropagationStopped())
					)
						break e;
					af(a, l, u), (i = s);
				}
		}
	}
	if (io) throw ((e = ls), (io = !1), (ls = null), e);
}
function fe(e, t) {
	var n = t[gs];
	n === void 0 && (n = t[gs] = new Set());
	var r = e + "__bubble";
	n.has(r) || (Qp(t, e, 2, !1), n.add(r));
}
function bl(e, t, n) {
	var r = 0;
	t && (r |= 4), Qp(n, e, r, t);
}
var Ei = "_reactListening" + Math.random().toString(36).slice(2);
function Ia(e) {
	if (!e[Ei]) {
		(e[Ei] = !0),
			ep.forEach(function (n) {
				n !== "selectionchange" && (c0.has(n) || bl(n, !1, e), bl(n, !0, e));
			});
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null || t[Ei] || ((t[Ei] = !0), bl("selectionchange", !1, t));
	}
}
function Qp(e, t, n, r) {
	switch (Tp(t)) {
		case 1:
			var a = bv;
			break;
		case 4:
			a = Cv;
			break;
		default:
			a = xu;
	}
	(n = a.bind(null, t, n, e)),
		(a = void 0),
		!os ||
			(t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
			(a = !0),
		r
			? a !== void 0
				? e.addEventListener(t, n, { capture: !0, passive: a })
				: e.addEventListener(t, n, !0)
			: a !== void 0
			? e.addEventListener(t, n, { passive: a })
			: e.addEventListener(t, n, !1);
}
function Cl(e, t, n, r, a) {
	var i = r;
	if (!(t & 1) && !(t & 2) && r !== null)
		e: for (;;) {
			if (r === null) return;
			var o = r.tag;
			if (o === 3 || o === 4) {
				var l = r.stateNode.containerInfo;
				if (l === a || (l.nodeType === 8 && l.parentNode === a)) break;
				if (o === 4)
					for (o = r.return; o !== null; ) {
						var s = o.tag;
						if (
							(s === 3 || s === 4) &&
							((s = o.stateNode.containerInfo),
							s === a || (s.nodeType === 8 && s.parentNode === a))
						)
							return;
						o = o.return;
					}
				for (; l !== null; ) {
					if (((o = An(l)), o === null)) return;
					if (((s = o.tag), s === 5 || s === 6)) {
						r = i = o;
						continue e;
					}
					l = l.parentNode;
				}
			}
			r = r.return;
		}
	vp(function () {
		var u = i,
			c = vu(n),
			f = [];
		e: {
			var p = Wp.get(e);
			if (p !== void 0) {
				var w = ku,
					x = e;
				switch (e) {
					case "keypress":
						if (Yi(n) === 0) break e;
					case "keydown":
					case "keyup":
						w = $v;
						break;
					case "focusin":
						(x = "focus"), (w = yl);
						break;
					case "focusout":
						(x = "blur"), (w = yl);
						break;
					case "beforeblur":
					case "afterblur":
						w = yl;
						break;
					case "click":
						if (n.button === 2) break e;
					case "auxclick":
					case "dblclick":
					case "mousedown":
					case "mousemove":
					case "mouseup":
					case "mouseout":
					case "mouseover":
					case "contextmenu":
						w = Yc;
						break;
					case "drag":
					case "dragend":
					case "dragenter":
					case "dragexit":
					case "dragleave":
					case "dragover":
					case "dragstart":
					case "drop":
						w = Pv;
						break;
					case "touchcancel":
					case "touchend":
					case "touchmove":
					case "touchstart":
						w = Vv;
						break;
					case Up:
					case Hp:
					case Vp:
						w = Lv;
						break;
					case Bp:
						w = Wv;
						break;
					case "scroll":
						w = jv;
						break;
					case "wheel":
						w = Qv;
						break;
					case "copy":
					case "cut":
					case "paste":
						w = Ov;
						break;
					case "gotpointercapture":
					case "lostpointercapture":
					case "pointercancel":
					case "pointerdown":
					case "pointermove":
					case "pointerout":
					case "pointerover":
					case "pointerup":
						w = Kc;
				}
				var y = (t & 4) !== 0,
					C = !y && e === "scroll",
					h = y ? (p !== null ? p + "Capture" : null) : p;
				y = [];
				for (var m = u, v; m !== null; ) {
					v = m;
					var E = v.stateNode;
					if (
						(v.tag === 5 &&
							E !== null &&
							((v = E),
							h !== null && ((E = Ta(m, h)), E != null && y.push(Da(m, E, v)))),
						C)
					)
						break;
					m = m.return;
				}
				0 < y.length &&
					((p = new w(p, x, null, n, c)), f.push({ event: p, listeners: y }));
			}
		}
		if (!(t & 7)) {
			e: {
				if (
					((p = e === "mouseover" || e === "pointerover"),
					(w = e === "mouseout" || e === "pointerout"),
					p &&
						n !== as &&
						(x = n.relatedTarget || n.fromElement) &&
						(An(x) || x[Xt]))
				)
					break e;
				if (
					(w || p) &&
					((p =
						c.window === c
							? c
							: (p = c.ownerDocument)
							? p.defaultView || p.parentWindow
							: window),
					w
						? ((x = n.relatedTarget || n.toElement),
						  (w = u),
						  (x = x ? An(x) : null),
						  x !== null &&
								((C = nr(x)), x !== C || (x.tag !== 5 && x.tag !== 6)) &&
								(x = null))
						: ((w = null), (x = u)),
					w !== x)
				) {
					if (
						((y = Yc),
						(E = "onMouseLeave"),
						(h = "onMouseEnter"),
						(m = "mouse"),
						(e === "pointerout" || e === "pointerover") &&
							((y = Kc),
							(E = "onPointerLeave"),
							(h = "onPointerEnter"),
							(m = "pointer")),
						(C = w == null ? p : hr(w)),
						(v = x == null ? p : hr(x)),
						(p = new y(E, m + "leave", w, n, c)),
						(p.target = C),
						(p.relatedTarget = v),
						(E = null),
						An(c) === u &&
							((y = new y(h, m + "enter", x, n, c)),
							(y.target = v),
							(y.relatedTarget = C),
							(E = y)),
						(C = E),
						w && x)
					)
						t: {
							for (y = w, h = x, m = 0, v = y; v; v = sr(v)) m++;
							for (v = 0, E = h; E; E = sr(E)) v++;
							for (; 0 < m - v; ) (y = sr(y)), m--;
							for (; 0 < v - m; ) (h = sr(h)), v--;
							for (; m--; ) {
								if (y === h || (h !== null && y === h.alternate)) break t;
								(y = sr(y)), (h = sr(h));
							}
							y = null;
						}
					else y = null;
					w !== null && of(f, p, w, y, !1),
						x !== null && C !== null && of(f, C, x, y, !0);
				}
			}
			e: {
				if (
					((p = u ? hr(u) : window),
					(w = p.nodeName && p.nodeName.toLowerCase()),
					w === "select" || (w === "input" && p.type === "file"))
				)
					var P = e0;
				else if (Jc(p))
					if (Ip) P = a0;
					else {
						P = n0;
						var R = t0;
					}
				else
					(w = p.nodeName) &&
						w.toLowerCase() === "input" &&
						(p.type === "checkbox" || p.type === "radio") &&
						(P = r0);
				if (P && (P = P(e, u))) {
					zp(f, P, n, c);
					break e;
				}
				R && R(e, p, u),
					e === "focusout" &&
						(R = p._wrapperState) &&
						R.controlled &&
						p.type === "number" &&
						ql(p, "number", p.value);
			}
			switch (((R = u ? hr(u) : window), e)) {
				case "focusin":
					(Jc(R) || R.contentEditable === "true") &&
						((pr = R), (fs = u), (wa = null));
					break;
				case "focusout":
					wa = fs = pr = null;
					break;
				case "mousedown":
					ds = !0;
					break;
				case "contextmenu":
				case "mouseup":
				case "dragend":
					(ds = !1), nf(f, n, c);
					break;
				case "selectionchange":
					if (l0) break;
				case "keydown":
				case "keyup":
					nf(f, n, c);
			}
			var g;
			if (bu)
				e: {
					switch (e) {
						case "compositionstart":
							var j = "onCompositionStart";
							break e;
						case "compositionend":
							j = "onCompositionEnd";
							break e;
						case "compositionupdate":
							j = "onCompositionUpdate";
							break e;
					}
					j = void 0;
				}
			else
				dr
					? Op(e, n) && (j = "onCompositionEnd")
					: e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
			j &&
				(Rp &&
					n.locale !== "ko" &&
					(dr || j !== "onCompositionStart"
						? j === "onCompositionEnd" && dr && (g = Lp())
						: ((mn = c),
						  (Su = "value" in mn ? mn.value : mn.textContent),
						  (dr = !0))),
				(R = co(u, j)),
				0 < R.length &&
					((j = new Qc(j, e, null, n, c)),
					f.push({ event: j, listeners: R }),
					g ? (j.data = g) : ((g = Mp(n)), g !== null && (j.data = g)))),
				(g = Xv ? Gv(e, n) : Jv(e, n)) &&
					((u = co(u, "onBeforeInput")),
					0 < u.length &&
						((c = new Qc("onBeforeInput", "beforeinput", null, n, c)),
						f.push({ event: c, listeners: u }),
						(c.data = g)));
		}
		Yp(f, t);
	});
}
function Da(e, t, n) {
	return { instance: e, listener: t, currentTarget: n };
}
function co(e, t) {
	for (var n = t + "Capture", r = []; e !== null; ) {
		var a = e,
			i = a.stateNode;
		a.tag === 5 &&
			i !== null &&
			((a = i),
			(i = Ta(e, n)),
			i != null && r.unshift(Da(e, i, a)),
			(i = Ta(e, t)),
			i != null && r.push(Da(e, i, a))),
			(e = e.return);
	}
	return r;
}
function sr(e) {
	if (e === null) return null;
	do e = e.return;
	while (e && e.tag !== 5);
	return e || null;
}
function of(e, t, n, r, a) {
	for (var i = t._reactName, o = []; n !== null && n !== r; ) {
		var l = n,
			s = l.alternate,
			u = l.stateNode;
		if (s !== null && s === r) break;
		l.tag === 5 &&
			u !== null &&
			((l = u),
			a
				? ((s = Ta(n, i)), s != null && o.unshift(Da(n, s, l)))
				: a || ((s = Ta(n, i)), s != null && o.push(Da(n, s, l)))),
			(n = n.return);
	}
	o.length !== 0 && e.push({ event: t, listeners: o });
}
var f0 = /\r\n?/g,
	d0 = /\u0000|\uFFFD/g;
function lf(e) {
	return (typeof e == "string" ? e : "" + e)
		.replace(
			f0,
			`
`,
		)
		.replace(d0, "");
}
function bi(e, t, n) {
	if (((t = lf(t)), lf(e) !== t && n)) throw Error(L(425));
}
function fo() {}
var ps = null,
	ms = null;
function hs(e, t) {
	return (
		e === "textarea" ||
		e === "noscript" ||
		typeof t.children == "string" ||
		typeof t.children == "number" ||
		(typeof t.dangerouslySetInnerHTML == "object" &&
			t.dangerouslySetInnerHTML !== null &&
			t.dangerouslySetInnerHTML.__html != null)
	);
}
var vs = typeof setTimeout == "function" ? setTimeout : void 0,
	p0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
	sf = typeof Promise == "function" ? Promise : void 0,
	m0 =
		typeof queueMicrotask == "function"
			? queueMicrotask
			: typeof sf < "u"
			? function (e) {
					return sf.resolve(null).then(e).catch(h0);
			  }
			: vs;
function h0(e) {
	setTimeout(function () {
		throw e;
	});
}
function jl(e, t) {
	var n = t,
		r = 0;
	do {
		var a = n.nextSibling;
		if ((e.removeChild(n), a && a.nodeType === 8))
			if (((n = a.data), n === "/$")) {
				if (r === 0) {
					e.removeChild(a), Oa(t);
					return;
				}
				r--;
			} else (n !== "$" && n !== "$?" && n !== "$!") || r++;
		n = a;
	} while (n);
	Oa(t);
}
function xn(e) {
	for (; e != null; e = e.nextSibling) {
		var t = e.nodeType;
		if (t === 1 || t === 3) break;
		if (t === 8) {
			if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
			if (t === "/$") return null;
		}
	}
	return e;
}
function uf(e) {
	e = e.previousSibling;
	for (var t = 0; e; ) {
		if (e.nodeType === 8) {
			var n = e.data;
			if (n === "$" || n === "$!" || n === "$?") {
				if (t === 0) return e;
				t--;
			} else n === "/$" && t++;
		}
		e = e.previousSibling;
	}
	return null;
}
var Br = Math.random().toString(36).slice(2),
	Ft = "__reactFiber$" + Br,
	Aa = "__reactProps$" + Br,
	Xt = "__reactContainer$" + Br,
	gs = "__reactEvents$" + Br,
	v0 = "__reactListeners$" + Br,
	g0 = "__reactHandles$" + Br;
function An(e) {
	var t = e[Ft];
	if (t) return t;
	for (var n = e.parentNode; n; ) {
		if ((t = n[Xt] || n[Ft])) {
			if (
				((n = t.alternate),
				t.child !== null || (n !== null && n.child !== null))
			)
				for (e = uf(e); e !== null; ) {
					if ((n = e[Ft])) return n;
					e = uf(e);
				}
			return t;
		}
		(e = n), (n = e.parentNode);
	}
	return null;
}
function ni(e) {
	return (
		(e = e[Ft] || e[Xt]),
		!e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
	);
}
function hr(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(L(33));
}
function Uo(e) {
	return e[Aa] || null;
}
var ys = [],
	vr = -1;
function Rn(e) {
	return { current: e };
}
function pe(e) {
	0 > vr || ((e.current = ys[vr]), (ys[vr] = null), vr--);
}
function ue(e, t) {
	vr++, (ys[vr] = e.current), (e.current = t);
}
var Nn = {},
	Xe = Rn(Nn),
	it = Rn(!1),
	Kn = Nn;
function Mr(e, t) {
	var n = e.type.contextTypes;
	if (!n) return Nn;
	var r = e.stateNode;
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
		return r.__reactInternalMemoizedMaskedChildContext;
	var a = {},
		i;
	for (i in n) a[i] = t[i];
	return (
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = t),
			(e.__reactInternalMemoizedMaskedChildContext = a)),
		a
	);
}
function ot(e) {
	return (e = e.childContextTypes), e != null;
}
function po() {
	pe(it), pe(Xe);
}
function cf(e, t, n) {
	if (Xe.current !== Nn) throw Error(L(168));
	ue(Xe, t), ue(it, n);
}
function Kp(e, t, n) {
	var r = e.stateNode;
	if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
		return n;
	r = r.getChildContext();
	for (var a in r) if (!(a in t)) throw Error(L(108, tv(e) || "Unknown", a));
	return be({}, n, r);
}
function mo(e) {
	return (
		(e =
			((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Nn),
		(Kn = Xe.current),
		ue(Xe, e),
		ue(it, it.current),
		!0
	);
}
function ff(e, t, n) {
	var r = e.stateNode;
	if (!r) throw Error(L(169));
	n
		? ((e = Kp(e, t, Kn)),
		  (r.__reactInternalMemoizedMergedChildContext = e),
		  pe(it),
		  pe(Xe),
		  ue(Xe, e))
		: pe(it),
		ue(it, n);
}
var Bt = null,
	Ho = !1,
	Nl = !1;
function Xp(e) {
	Bt === null ? (Bt = [e]) : Bt.push(e);
}
function y0(e) {
	(Ho = !0), Xp(e);
}
function On() {
	if (!Nl && Bt !== null) {
		Nl = !0;
		var e = 0,
			t = le;
		try {
			var n = Bt;
			for (le = 1; e < n.length; e++) {
				var r = n[e];
				do r = r(!0);
				while (r !== null);
			}
			(Bt = null), (Ho = !1);
		} catch (a) {
			throw (Bt !== null && (Bt = Bt.slice(e + 1)), xp(gu, On), a);
		} finally {
			(le = t), (Nl = !1);
		}
	}
	return null;
}
var gr = [],
	yr = 0,
	ho = null,
	vo = 0,
	wt = [],
	xt = 0,
	Xn = null,
	Wt = 1,
	Yt = "";
function In(e, t) {
	(gr[yr++] = vo), (gr[yr++] = ho), (ho = e), (vo = t);
}
function Gp(e, t, n) {
	(wt[xt++] = Wt), (wt[xt++] = Yt), (wt[xt++] = Xn), (Xn = e);
	var r = Wt;
	e = Yt;
	var a = 32 - Rt(r) - 1;
	(r &= ~(1 << a)), (n += 1);
	var i = 32 - Rt(t) + a;
	if (30 < i) {
		var o = a - (a % 5);
		(i = (r & ((1 << o) - 1)).toString(32)),
			(r >>= o),
			(a -= o),
			(Wt = (1 << (32 - Rt(t) + a)) | (n << a) | r),
			(Yt = i + e);
	} else (Wt = (1 << i) | (n << a) | r), (Yt = e);
}
function ju(e) {
	e.return !== null && (In(e, 1), Gp(e, 1, 0));
}
function Nu(e) {
	for (; e === ho; )
		(ho = gr[--yr]), (gr[yr] = null), (vo = gr[--yr]), (gr[yr] = null);
	for (; e === Xn; )
		(Xn = wt[--xt]),
			(wt[xt] = null),
			(Yt = wt[--xt]),
			(wt[xt] = null),
			(Wt = wt[--xt]),
			(wt[xt] = null);
}
var dt = null,
	ct = null,
	we = !1,
	Tt = null;
function Jp(e, t) {
	var n = kt(5, null, null, 0);
	(n.elementType = "DELETED"),
		(n.stateNode = t),
		(n.return = e),
		(t = e.deletions),
		t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function df(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type;
			return (
				(t =
					t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
						? null
						: t),
				t !== null
					? ((e.stateNode = t), (dt = e), (ct = xn(t.firstChild)), !0)
					: !1
			);
		case 6:
			return (
				(t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
				t !== null ? ((e.stateNode = t), (dt = e), (ct = null), !0) : !1
			);
		case 13:
			return (
				(t = t.nodeType !== 8 ? null : t),
				t !== null
					? ((n = Xn !== null ? { id: Wt, overflow: Yt } : null),
					  (e.memoizedState = {
							dehydrated: t,
							treeContext: n,
							retryLane: 1073741824,
					  }),
					  (n = kt(18, null, null, 0)),
					  (n.stateNode = t),
					  (n.return = e),
					  (e.child = n),
					  (dt = e),
					  (ct = null),
					  !0)
					: !1
			);
		default:
			return !1;
	}
}
function ws(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function xs(e) {
	if (we) {
		var t = ct;
		if (t) {
			var n = t;
			if (!df(e, t)) {
				if (ws(e)) throw Error(L(418));
				t = xn(n.nextSibling);
				var r = dt;
				t && df(e, t)
					? Jp(r, n)
					: ((e.flags = (e.flags & -4097) | 2), (we = !1), (dt = e));
			}
		} else {
			if (ws(e)) throw Error(L(418));
			(e.flags = (e.flags & -4097) | 2), (we = !1), (dt = e);
		}
	}
}
function pf(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
		e = e.return;
	dt = e;
}
function Ci(e) {
	if (e !== dt) return !1;
	if (!we) return pf(e), (we = !0), !1;
	var t;
	if (
		((t = e.tag !== 3) &&
			!(t = e.tag !== 5) &&
			((t = e.type),
			(t = t !== "head" && t !== "body" && !hs(e.type, e.memoizedProps))),
		t && (t = ct))
	) {
		if (ws(e)) throw (Zp(), Error(L(418)));
		for (; t; ) Jp(e, t), (t = xn(t.nextSibling));
	}
	if ((pf(e), e.tag === 13)) {
		if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
			throw Error(L(317));
		e: {
			for (e = e.nextSibling, t = 0; e; ) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === "/$") {
						if (t === 0) {
							ct = xn(e.nextSibling);
							break e;
						}
						t--;
					} else (n !== "$" && n !== "$!" && n !== "$?") || t++;
				}
				e = e.nextSibling;
			}
			ct = null;
		}
	} else ct = dt ? xn(e.stateNode.nextSibling) : null;
	return !0;
}
function Zp() {
	for (var e = ct; e; ) e = xn(e.nextSibling);
}
function zr() {
	(ct = dt = null), (we = !1);
}
function Pu(e) {
	Tt === null ? (Tt = [e]) : Tt.push(e);
}
var w0 = tn.ReactCurrentBatchConfig;
function aa(e, t, n) {
	if (
		((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
	) {
		if (n._owner) {
			if (((n = n._owner), n)) {
				if (n.tag !== 1) throw Error(L(309));
				var r = n.stateNode;
			}
			if (!r) throw Error(L(147, e));
			var a = r,
				i = "" + e;
			return t !== null &&
				t.ref !== null &&
				typeof t.ref == "function" &&
				t.ref._stringRef === i
				? t.ref
				: ((t = function (o) {
						var l = a.refs;
						o === null ? delete l[i] : (l[i] = o);
				  }),
				  (t._stringRef = i),
				  t);
		}
		if (typeof e != "string") throw Error(L(284));
		if (!n._owner) throw Error(L(290, e));
	}
	return e;
}
function ji(e, t) {
	throw (
		((e = Object.prototype.toString.call(t)),
		Error(
			L(
				31,
				e === "[object Object]"
					? "object with keys {" + Object.keys(t).join(", ") + "}"
					: e,
			),
		))
	);
}
function mf(e) {
	var t = e._init;
	return t(e._payload);
}
function qp(e) {
	function t(h, m) {
		if (e) {
			var v = h.deletions;
			v === null ? ((h.deletions = [m]), (h.flags |= 16)) : v.push(m);
		}
	}
	function n(h, m) {
		if (!e) return null;
		for (; m !== null; ) t(h, m), (m = m.sibling);
		return null;
	}
	function r(h, m) {
		for (h = new Map(); m !== null; )
			m.key !== null ? h.set(m.key, m) : h.set(m.index, m), (m = m.sibling);
		return h;
	}
	function a(h, m) {
		return (h = bn(h, m)), (h.index = 0), (h.sibling = null), h;
	}
	function i(h, m, v) {
		return (
			(h.index = v),
			e
				? ((v = h.alternate),
				  v !== null
						? ((v = v.index), v < m ? ((h.flags |= 2), m) : v)
						: ((h.flags |= 2), m))
				: ((h.flags |= 1048576), m)
		);
	}
	function o(h) {
		return e && h.alternate === null && (h.flags |= 2), h;
	}
	function l(h, m, v, E) {
		return m === null || m.tag !== 6
			? ((m = Ml(v, h.mode, E)), (m.return = h), m)
			: ((m = a(m, v)), (m.return = h), m);
	}
	function s(h, m, v, E) {
		var P = v.type;
		return P === fr
			? c(h, m, v.props.children, E, v.key)
			: m !== null &&
			  (m.elementType === P ||
					(typeof P == "object" &&
						P !== null &&
						P.$$typeof === cn &&
						mf(P) === m.type))
			? ((E = a(m, v.props)), (E.ref = aa(h, m, v)), (E.return = h), E)
			: ((E = qi(v.type, v.key, v.props, null, h.mode, E)),
			  (E.ref = aa(h, m, v)),
			  (E.return = h),
			  E);
	}
	function u(h, m, v, E) {
		return m === null ||
			m.tag !== 4 ||
			m.stateNode.containerInfo !== v.containerInfo ||
			m.stateNode.implementation !== v.implementation
			? ((m = zl(v, h.mode, E)), (m.return = h), m)
			: ((m = a(m, v.children || [])), (m.return = h), m);
	}
	function c(h, m, v, E, P) {
		return m === null || m.tag !== 7
			? ((m = Yn(v, h.mode, E, P)), (m.return = h), m)
			: ((m = a(m, v)), (m.return = h), m);
	}
	function f(h, m, v) {
		if ((typeof m == "string" && m !== "") || typeof m == "number")
			return (m = Ml("" + m, h.mode, v)), (m.return = h), m;
		if (typeof m == "object" && m !== null) {
			switch (m.$$typeof) {
				case hi:
					return (
						(v = qi(m.type, m.key, m.props, null, h.mode, v)),
						(v.ref = aa(h, null, m)),
						(v.return = h),
						v
					);
				case cr:
					return (m = zl(m, h.mode, v)), (m.return = h), m;
				case cn:
					var E = m._init;
					return f(h, E(m._payload), v);
			}
			if (fa(m) || qr(m))
				return (m = Yn(m, h.mode, v, null)), (m.return = h), m;
			ji(h, m);
		}
		return null;
	}
	function p(h, m, v, E) {
		var P = m !== null ? m.key : null;
		if ((typeof v == "string" && v !== "") || typeof v == "number")
			return P !== null ? null : l(h, m, "" + v, E);
		if (typeof v == "object" && v !== null) {
			switch (v.$$typeof) {
				case hi:
					return v.key === P ? s(h, m, v, E) : null;
				case cr:
					return v.key === P ? u(h, m, v, E) : null;
				case cn:
					return (P = v._init), p(h, m, P(v._payload), E);
			}
			if (fa(v) || qr(v)) return P !== null ? null : c(h, m, v, E, null);
			ji(h, v);
		}
		return null;
	}
	function w(h, m, v, E, P) {
		if ((typeof E == "string" && E !== "") || typeof E == "number")
			return (h = h.get(v) || null), l(m, h, "" + E, P);
		if (typeof E == "object" && E !== null) {
			switch (E.$$typeof) {
				case hi:
					return (h = h.get(E.key === null ? v : E.key) || null), s(m, h, E, P);
				case cr:
					return (h = h.get(E.key === null ? v : E.key) || null), u(m, h, E, P);
				case cn:
					var R = E._init;
					return w(h, m, v, R(E._payload), P);
			}
			if (fa(E) || qr(E)) return (h = h.get(v) || null), c(m, h, E, P, null);
			ji(m, E);
		}
		return null;
	}
	function x(h, m, v, E) {
		for (
			var P = null, R = null, g = m, j = (m = 0), _ = null;
			g !== null && j < v.length;
			j++
		) {
			g.index > j ? ((_ = g), (g = null)) : (_ = g.sibling);
			var O = p(h, g, v[j], E);
			if (O === null) {
				g === null && (g = _);
				break;
			}
			e && g && O.alternate === null && t(h, g),
				(m = i(O, m, j)),
				R === null ? (P = O) : (R.sibling = O),
				(R = O),
				(g = _);
		}
		if (j === v.length) return n(h, g), we && In(h, j), P;
		if (g === null) {
			for (; j < v.length; j++)
				(g = f(h, v[j], E)),
					g !== null &&
						((m = i(g, m, j)), R === null ? (P = g) : (R.sibling = g), (R = g));
			return we && In(h, j), P;
		}
		for (g = r(h, g); j < v.length; j++)
			(_ = w(g, h, j, v[j], E)),
				_ !== null &&
					(e && _.alternate !== null && g.delete(_.key === null ? j : _.key),
					(m = i(_, m, j)),
					R === null ? (P = _) : (R.sibling = _),
					(R = _));
		return (
			e &&
				g.forEach(function (V) {
					return t(h, V);
				}),
			we && In(h, j),
			P
		);
	}
	function y(h, m, v, E) {
		var P = qr(v);
		if (typeof P != "function") throw Error(L(150));
		if (((v = P.call(v)), v == null)) throw Error(L(151));
		for (
			var R = (P = null), g = m, j = (m = 0), _ = null, O = v.next();
			g !== null && !O.done;
			j++, O = v.next()
		) {
			g.index > j ? ((_ = g), (g = null)) : (_ = g.sibling);
			var V = p(h, g, O.value, E);
			if (V === null) {
				g === null && (g = _);
				break;
			}
			e && g && V.alternate === null && t(h, g),
				(m = i(V, m, j)),
				R === null ? (P = V) : (R.sibling = V),
				(R = V),
				(g = _);
		}
		if (O.done) return n(h, g), we && In(h, j), P;
		if (g === null) {
			for (; !O.done; j++, O = v.next())
				(O = f(h, O.value, E)),
					O !== null &&
						((m = i(O, m, j)), R === null ? (P = O) : (R.sibling = O), (R = O));
			return we && In(h, j), P;
		}
		for (g = r(h, g); !O.done; j++, O = v.next())
			(O = w(g, h, j, O.value, E)),
				O !== null &&
					(e && O.alternate !== null && g.delete(O.key === null ? j : O.key),
					(m = i(O, m, j)),
					R === null ? (P = O) : (R.sibling = O),
					(R = O));
		return (
			e &&
				g.forEach(function (te) {
					return t(h, te);
				}),
			we && In(h, j),
			P
		);
	}
	function C(h, m, v, E) {
		if (
			(typeof v == "object" &&
				v !== null &&
				v.type === fr &&
				v.key === null &&
				(v = v.props.children),
			typeof v == "object" && v !== null)
		) {
			switch (v.$$typeof) {
				case hi:
					e: {
						for (var P = v.key, R = m; R !== null; ) {
							if (R.key === P) {
								if (((P = v.type), P === fr)) {
									if (R.tag === 7) {
										n(h, R.sibling),
											(m = a(R, v.props.children)),
											(m.return = h),
											(h = m);
										break e;
									}
								} else if (
									R.elementType === P ||
									(typeof P == "object" &&
										P !== null &&
										P.$$typeof === cn &&
										mf(P) === R.type)
								) {
									n(h, R.sibling),
										(m = a(R, v.props)),
										(m.ref = aa(h, R, v)),
										(m.return = h),
										(h = m);
									break e;
								}
								n(h, R);
								break;
							} else t(h, R);
							R = R.sibling;
						}
						v.type === fr
							? ((m = Yn(v.props.children, h.mode, E, v.key)),
							  (m.return = h),
							  (h = m))
							: ((E = qi(v.type, v.key, v.props, null, h.mode, E)),
							  (E.ref = aa(h, m, v)),
							  (E.return = h),
							  (h = E));
					}
					return o(h);
				case cr:
					e: {
						for (R = v.key; m !== null; ) {
							if (m.key === R)
								if (
									m.tag === 4 &&
									m.stateNode.containerInfo === v.containerInfo &&
									m.stateNode.implementation === v.implementation
								) {
									n(h, m.sibling),
										(m = a(m, v.children || [])),
										(m.return = h),
										(h = m);
									break e;
								} else {
									n(h, m);
									break;
								}
							else t(h, m);
							m = m.sibling;
						}
						(m = zl(v, h.mode, E)), (m.return = h), (h = m);
					}
					return o(h);
				case cn:
					return (R = v._init), C(h, m, R(v._payload), E);
			}
			if (fa(v)) return x(h, m, v, E);
			if (qr(v)) return y(h, m, v, E);
			ji(h, v);
		}
		return (typeof v == "string" && v !== "") || typeof v == "number"
			? ((v = "" + v),
			  m !== null && m.tag === 6
					? (n(h, m.sibling), (m = a(m, v)), (m.return = h), (h = m))
					: (n(h, m), (m = Ml(v, h.mode, E)), (m.return = h), (h = m)),
			  o(h))
			: n(h, m);
	}
	return C;
}
var Ir = qp(!0),
	em = qp(!1),
	go = Rn(null),
	yo = null,
	wr = null,
	_u = null;
function Tu() {
	_u = wr = yo = null;
}
function Lu(e) {
	var t = go.current;
	pe(go), (e._currentValue = t);
}
function Ss(e, t, n) {
	for (; e !== null; ) {
		var r = e.alternate;
		if (
			((e.childLanes & t) !== t
				? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
				: r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
			e === n)
		)
			break;
		e = e.return;
	}
}
function Tr(e, t) {
	(yo = e),
		(_u = wr = null),
		(e = e.dependencies),
		e !== null &&
			e.firstContext !== null &&
			(e.lanes & t && (at = !0), (e.firstContext = null));
}
function bt(e) {
	var t = e._currentValue;
	if (_u !== e)
		if (((e = { context: e, memoizedValue: t, next: null }), wr === null)) {
			if (yo === null) throw Error(L(308));
			(wr = e), (yo.dependencies = { lanes: 0, firstContext: e });
		} else wr = wr.next = e;
	return t;
}
var Fn = null;
function Ru(e) {
	Fn === null ? (Fn = [e]) : Fn.push(e);
}
function tm(e, t, n, r) {
	var a = t.interleaved;
	return (
		a === null ? ((n.next = n), Ru(t)) : ((n.next = a.next), (a.next = n)),
		(t.interleaved = n),
		Gt(e, r)
	);
}
function Gt(e, t) {
	e.lanes |= t;
	var n = e.alternate;
	for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
		(e.childLanes |= t),
			(n = e.alternate),
			n !== null && (n.childLanes |= t),
			(n = e),
			(e = e.return);
	return n.tag === 3 ? n.stateNode : null;
}
var fn = !1;
function Ou(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null,
	};
}
function nm(e, t) {
	(e = e.updateQueue),
		t.updateQueue === e &&
			(t.updateQueue = {
				baseState: e.baseState,
				firstBaseUpdate: e.firstBaseUpdate,
				lastBaseUpdate: e.lastBaseUpdate,
				shared: e.shared,
				effects: e.effects,
			});
}
function Qt(e, t) {
	return {
		eventTime: e,
		lane: t,
		tag: 0,
		payload: null,
		callback: null,
		next: null,
	};
}
function Sn(e, t, n) {
	var r = e.updateQueue;
	if (r === null) return null;
	if (((r = r.shared), re & 2)) {
		var a = r.pending;
		return (
			a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
			(r.pending = t),
			Gt(e, n)
		);
	}
	return (
		(a = r.interleaved),
		a === null ? ((t.next = t), Ru(r)) : ((t.next = a.next), (a.next = t)),
		(r.interleaved = t),
		Gt(e, n)
	);
}
function Qi(e, t, n) {
	if (
		((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
	) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), yu(e, n);
	}
}
function hf(e, t) {
	var n = e.updateQueue,
		r = e.alternate;
	if (r !== null && ((r = r.updateQueue), n === r)) {
		var a = null,
			i = null;
		if (((n = n.firstBaseUpdate), n !== null)) {
			do {
				var o = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null,
				};
				i === null ? (a = i = o) : (i = i.next = o), (n = n.next);
			} while (n !== null);
			i === null ? (a = i = t) : (i = i.next = t);
		} else a = i = t;
		(n = {
			baseState: r.baseState,
			firstBaseUpdate: a,
			lastBaseUpdate: i,
			shared: r.shared,
			effects: r.effects,
		}),
			(e.updateQueue = n);
		return;
	}
	(e = n.lastBaseUpdate),
		e === null ? (n.firstBaseUpdate = t) : (e.next = t),
		(n.lastBaseUpdate = t);
}
function wo(e, t, n, r) {
	var a = e.updateQueue;
	fn = !1;
	var i = a.firstBaseUpdate,
		o = a.lastBaseUpdate,
		l = a.shared.pending;
	if (l !== null) {
		a.shared.pending = null;
		var s = l,
			u = s.next;
		(s.next = null), o === null ? (i = u) : (o.next = u), (o = s);
		var c = e.alternate;
		c !== null &&
			((c = c.updateQueue),
			(l = c.lastBaseUpdate),
			l !== o &&
				(l === null ? (c.firstBaseUpdate = u) : (l.next = u),
				(c.lastBaseUpdate = s)));
	}
	if (i !== null) {
		var f = a.baseState;
		(o = 0), (c = u = s = null), (l = i);
		do {
			var p = l.lane,
				w = l.eventTime;
			if ((r & p) === p) {
				c !== null &&
					(c = c.next =
						{
							eventTime: w,
							lane: 0,
							tag: l.tag,
							payload: l.payload,
							callback: l.callback,
							next: null,
						});
				e: {
					var x = e,
						y = l;
					switch (((p = t), (w = n), y.tag)) {
						case 1:
							if (((x = y.payload), typeof x == "function")) {
								f = x.call(w, f, p);
								break e;
							}
							f = x;
							break e;
						case 3:
							x.flags = (x.flags & -65537) | 128;
						case 0:
							if (
								((x = y.payload),
								(p = typeof x == "function" ? x.call(w, f, p) : x),
								p == null)
							)
								break e;
							f = be({}, f, p);
							break e;
						case 2:
							fn = !0;
					}
				}
				l.callback !== null &&
					l.lane !== 0 &&
					((e.flags |= 64),
					(p = a.effects),
					p === null ? (a.effects = [l]) : p.push(l));
			} else
				(w = {
					eventTime: w,
					lane: p,
					tag: l.tag,
					payload: l.payload,
					callback: l.callback,
					next: null,
				}),
					c === null ? ((u = c = w), (s = f)) : (c = c.next = w),
					(o |= p);
			if (((l = l.next), l === null)) {
				if (((l = a.shared.pending), l === null)) break;
				(p = l),
					(l = p.next),
					(p.next = null),
					(a.lastBaseUpdate = p),
					(a.shared.pending = null);
			}
		} while (!0);
		if (
			(c === null && (s = f),
			(a.baseState = s),
			(a.firstBaseUpdate = u),
			(a.lastBaseUpdate = c),
			(t = a.shared.interleaved),
			t !== null)
		) {
			a = t;
			do (o |= a.lane), (a = a.next);
			while (a !== t);
		} else i === null && (a.shared.lanes = 0);
		(Jn |= o), (e.lanes = o), (e.memoizedState = f);
	}
}
function vf(e, t, n) {
	if (((e = t.effects), (t.effects = null), e !== null))
		for (t = 0; t < e.length; t++) {
			var r = e[t],
				a = r.callback;
			if (a !== null) {
				if (((r.callback = null), (r = n), typeof a != "function"))
					throw Error(L(191, a));
				a.call(r);
			}
		}
}
var ri = {},
	Ht = Rn(ri),
	Fa = Rn(ri),
	$a = Rn(ri);
function $n(e) {
	if (e === ri) throw Error(L(174));
	return e;
}
function Mu(e, t) {
	switch ((ue($a, t), ue(Fa, e), ue(Ht, ri), (e = t.nodeType), e)) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : ts(null, "");
			break;
		default:
			(e = e === 8 ? t.parentNode : t),
				(t = e.namespaceURI || null),
				(e = e.tagName),
				(t = ts(t, e));
	}
	pe(Ht), ue(Ht, t);
}
function Dr() {
	pe(Ht), pe(Fa), pe($a);
}
function rm(e) {
	$n($a.current);
	var t = $n(Ht.current),
		n = ts(t, e.type);
	t !== n && (ue(Fa, e), ue(Ht, n));
}
function zu(e) {
	Fa.current === e && (pe(Ht), pe(Fa));
}
var ke = Rn(0);
function xo(e) {
	for (var t = e; t !== null; ) {
		if (t.tag === 13) {
			var n = t.memoizedState;
			if (
				n !== null &&
				((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
			)
				return t;
		} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
			if (t.flags & 128) return t;
		} else if (t.child !== null) {
			(t.child.return = t), (t = t.child);
			continue;
		}
		if (t === e) break;
		for (; t.sibling === null; ) {
			if (t.return === null || t.return === e) return null;
			t = t.return;
		}
		(t.sibling.return = t.return), (t = t.sibling);
	}
	return null;
}
var Pl = [];
function Iu() {
	for (var e = 0; e < Pl.length; e++)
		Pl[e]._workInProgressVersionPrimary = null;
	Pl.length = 0;
}
var Ki = tn.ReactCurrentDispatcher,
	_l = tn.ReactCurrentBatchConfig,
	Gn = 0,
	Ee = null,
	Re = null,
	De = null,
	So = !1,
	xa = !1,
	Ua = 0,
	x0 = 0;
function Ye() {
	throw Error(L(321));
}
function Du(e, t) {
	if (t === null) return !1;
	for (var n = 0; n < t.length && n < e.length; n++)
		if (!Mt(e[n], t[n])) return !1;
	return !0;
}
function Au(e, t, n, r, a, i) {
	if (
		((Gn = i),
		(Ee = t),
		(t.memoizedState = null),
		(t.updateQueue = null),
		(t.lanes = 0),
		(Ki.current = e === null || e.memoizedState === null ? b0 : C0),
		(e = n(r, a)),
		xa)
	) {
		i = 0;
		do {
			if (((xa = !1), (Ua = 0), 25 <= i)) throw Error(L(301));
			(i += 1),
				(De = Re = null),
				(t.updateQueue = null),
				(Ki.current = j0),
				(e = n(r, a));
		} while (xa);
	}
	if (
		((Ki.current = ko),
		(t = Re !== null && Re.next !== null),
		(Gn = 0),
		(De = Re = Ee = null),
		(So = !1),
		t)
	)
		throw Error(L(300));
	return e;
}
function Fu() {
	var e = Ua !== 0;
	return (Ua = 0), e;
}
function Dt() {
	var e = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null,
	};
	return De === null ? (Ee.memoizedState = De = e) : (De = De.next = e), De;
}
function Ct() {
	if (Re === null) {
		var e = Ee.alternate;
		e = e !== null ? e.memoizedState : null;
	} else e = Re.next;
	var t = De === null ? Ee.memoizedState : De.next;
	if (t !== null) (De = t), (Re = e);
	else {
		if (e === null) throw Error(L(310));
		(Re = e),
			(e = {
				memoizedState: Re.memoizedState,
				baseState: Re.baseState,
				baseQueue: Re.baseQueue,
				queue: Re.queue,
				next: null,
			}),
			De === null ? (Ee.memoizedState = De = e) : (De = De.next = e);
	}
	return De;
}
function Ha(e, t) {
	return typeof t == "function" ? t(e) : t;
}
function Tl(e) {
	var t = Ct(),
		n = t.queue;
	if (n === null) throw Error(L(311));
	n.lastRenderedReducer = e;
	var r = Re,
		a = r.baseQueue,
		i = n.pending;
	if (i !== null) {
		if (a !== null) {
			var o = a.next;
			(a.next = i.next), (i.next = o);
		}
		(r.baseQueue = a = i), (n.pending = null);
	}
	if (a !== null) {
		(i = a.next), (r = r.baseState);
		var l = (o = null),
			s = null,
			u = i;
		do {
			var c = u.lane;
			if ((Gn & c) === c)
				s !== null &&
					(s = s.next =
						{
							lane: 0,
							action: u.action,
							hasEagerState: u.hasEagerState,
							eagerState: u.eagerState,
							next: null,
						}),
					(r = u.hasEagerState ? u.eagerState : e(r, u.action));
			else {
				var f = {
					lane: c,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null,
				};
				s === null ? ((l = s = f), (o = r)) : (s = s.next = f),
					(Ee.lanes |= c),
					(Jn |= c);
			}
			u = u.next;
		} while (u !== null && u !== i);
		s === null ? (o = r) : (s.next = l),
			Mt(r, t.memoizedState) || (at = !0),
			(t.memoizedState = r),
			(t.baseState = o),
			(t.baseQueue = s),
			(n.lastRenderedState = r);
	}
	if (((e = n.interleaved), e !== null)) {
		a = e;
		do (i = a.lane), (Ee.lanes |= i), (Jn |= i), (a = a.next);
		while (a !== e);
	} else a === null && (n.lanes = 0);
	return [t.memoizedState, n.dispatch];
}
function Ll(e) {
	var t = Ct(),
		n = t.queue;
	if (n === null) throw Error(L(311));
	n.lastRenderedReducer = e;
	var r = n.dispatch,
		a = n.pending,
		i = t.memoizedState;
	if (a !== null) {
		n.pending = null;
		var o = (a = a.next);
		do (i = e(i, o.action)), (o = o.next);
		while (o !== a);
		Mt(i, t.memoizedState) || (at = !0),
			(t.memoizedState = i),
			t.baseQueue === null && (t.baseState = i),
			(n.lastRenderedState = i);
	}
	return [i, r];
}
function am() {}
function im(e, t) {
	var n = Ee,
		r = Ct(),
		a = t(),
		i = !Mt(r.memoizedState, a);
	if (
		(i && ((r.memoizedState = a), (at = !0)),
		(r = r.queue),
		$u(sm.bind(null, n, r, e), [e]),
		r.getSnapshot !== t || i || (De !== null && De.memoizedState.tag & 1))
	) {
		if (
			((n.flags |= 2048),
			Va(9, lm.bind(null, n, r, a, t), void 0, null),
			Ae === null)
		)
			throw Error(L(349));
		Gn & 30 || om(n, t, a);
	}
	return a;
}
function om(e, t, n) {
	(e.flags |= 16384),
		(e = { getSnapshot: t, value: n }),
		(t = Ee.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (Ee.updateQueue = t),
			  (t.stores = [e]))
			: ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function lm(e, t, n, r) {
	(t.value = n), (t.getSnapshot = r), um(t) && cm(e);
}
function sm(e, t, n) {
	return n(function () {
		um(t) && cm(e);
	});
}
function um(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !Mt(e, n);
	} catch {
		return !0;
	}
}
function cm(e) {
	var t = Gt(e, 1);
	t !== null && Ot(t, e, 1, -1);
}
function gf(e) {
	var t = Dt();
	return (
		typeof e == "function" && (e = e()),
		(t.memoizedState = t.baseState = e),
		(e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Ha,
			lastRenderedState: e,
		}),
		(t.queue = e),
		(e = e.dispatch = E0.bind(null, Ee, e)),
		[t.memoizedState, e]
	);
}
function Va(e, t, n, r) {
	return (
		(e = { tag: e, create: t, destroy: n, deps: r, next: null }),
		(t = Ee.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (Ee.updateQueue = t),
			  (t.lastEffect = e.next = e))
			: ((n = t.lastEffect),
			  n === null
					? (t.lastEffect = e.next = e)
					: ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
		e
	);
}
function fm() {
	return Ct().memoizedState;
}
function Xi(e, t, n, r) {
	var a = Dt();
	(Ee.flags |= e),
		(a.memoizedState = Va(1 | t, n, void 0, r === void 0 ? null : r));
}
function Vo(e, t, n, r) {
	var a = Ct();
	r = r === void 0 ? null : r;
	var i = void 0;
	if (Re !== null) {
		var o = Re.memoizedState;
		if (((i = o.destroy), r !== null && Du(r, o.deps))) {
			a.memoizedState = Va(t, n, i, r);
			return;
		}
	}
	(Ee.flags |= e), (a.memoizedState = Va(1 | t, n, i, r));
}
function yf(e, t) {
	return Xi(8390656, 8, e, t);
}
function $u(e, t) {
	return Vo(2048, 8, e, t);
}
function dm(e, t) {
	return Vo(4, 2, e, t);
}
function pm(e, t) {
	return Vo(4, 4, e, t);
}
function mm(e, t) {
	if (typeof t == "function")
		return (
			(e = e()),
			t(e),
			function () {
				t(null);
			}
		);
	if (t != null)
		return (
			(e = e()),
			(t.current = e),
			function () {
				t.current = null;
			}
		);
}
function hm(e, t, n) {
	return (
		(n = n != null ? n.concat([e]) : null), Vo(4, 4, mm.bind(null, t, e), n)
	);
}
function Uu() {}
function vm(e, t) {
	var n = Ct();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Du(t, r[1])
		? r[0]
		: ((n.memoizedState = [e, t]), e);
}
function gm(e, t) {
	var n = Ct();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Du(t, r[1])
		? r[0]
		: ((e = e()), (n.memoizedState = [e, t]), e);
}
function ym(e, t, n) {
	return Gn & 21
		? (Mt(n, t) || ((n = Ep()), (Ee.lanes |= n), (Jn |= n), (e.baseState = !0)),
		  t)
		: (e.baseState && ((e.baseState = !1), (at = !0)), (e.memoizedState = n));
}
function S0(e, t) {
	var n = le;
	(le = n !== 0 && 4 > n ? n : 4), e(!0);
	var r = _l.transition;
	_l.transition = {};
	try {
		e(!1), t();
	} finally {
		(le = n), (_l.transition = r);
	}
}
function wm() {
	return Ct().memoizedState;
}
function k0(e, t, n) {
	var r = En(e);
	if (
		((n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
		xm(e))
	)
		Sm(t, n);
	else if (((n = tm(e, t, n, r)), n !== null)) {
		var a = et();
		Ot(n, e, r, a), km(n, t, r);
	}
}
function E0(e, t, n) {
	var r = En(e),
		a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
	if (xm(e)) Sm(t, a);
	else {
		var i = e.alternate;
		if (
			e.lanes === 0 &&
			(i === null || i.lanes === 0) &&
			((i = t.lastRenderedReducer), i !== null)
		)
			try {
				var o = t.lastRenderedState,
					l = i(o, n);
				if (((a.hasEagerState = !0), (a.eagerState = l), Mt(l, o))) {
					var s = t.interleaved;
					s === null
						? ((a.next = a), Ru(t))
						: ((a.next = s.next), (s.next = a)),
						(t.interleaved = a);
					return;
				}
			} catch {
			} finally {
			}
		(n = tm(e, t, a, r)),
			n !== null && ((a = et()), Ot(n, e, r, a), km(n, t, r));
	}
}
function xm(e) {
	var t = e.alternate;
	return e === Ee || (t !== null && t === Ee);
}
function Sm(e, t) {
	xa = So = !0;
	var n = e.pending;
	n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
		(e.pending = t);
}
function km(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), yu(e, n);
	}
}
var ko = {
		readContext: bt,
		useCallback: Ye,
		useContext: Ye,
		useEffect: Ye,
		useImperativeHandle: Ye,
		useInsertionEffect: Ye,
		useLayoutEffect: Ye,
		useMemo: Ye,
		useReducer: Ye,
		useRef: Ye,
		useState: Ye,
		useDebugValue: Ye,
		useDeferredValue: Ye,
		useTransition: Ye,
		useMutableSource: Ye,
		useSyncExternalStore: Ye,
		useId: Ye,
		unstable_isNewReconciler: !1,
	},
	b0 = {
		readContext: bt,
		useCallback: function (e, t) {
			return (Dt().memoizedState = [e, t === void 0 ? null : t]), e;
		},
		useContext: bt,
		useEffect: yf,
		useImperativeHandle: function (e, t, n) {
			return (
				(n = n != null ? n.concat([e]) : null),
				Xi(4194308, 4, mm.bind(null, t, e), n)
			);
		},
		useLayoutEffect: function (e, t) {
			return Xi(4194308, 4, e, t);
		},
		useInsertionEffect: function (e, t) {
			return Xi(4, 2, e, t);
		},
		useMemo: function (e, t) {
			var n = Dt();
			return (
				(t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
			);
		},
		useReducer: function (e, t, n) {
			var r = Dt();
			return (
				(t = n !== void 0 ? n(t) : t),
				(r.memoizedState = r.baseState = t),
				(e = {
					pending: null,
					interleaved: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: e,
					lastRenderedState: t,
				}),
				(r.queue = e),
				(e = e.dispatch = k0.bind(null, Ee, e)),
				[r.memoizedState, e]
			);
		},
		useRef: function (e) {
			var t = Dt();
			return (e = { current: e }), (t.memoizedState = e);
		},
		useState: gf,
		useDebugValue: Uu,
		useDeferredValue: function (e) {
			return (Dt().memoizedState = e);
		},
		useTransition: function () {
			var e = gf(!1),
				t = e[0];
			return (e = S0.bind(null, e[1])), (Dt().memoizedState = e), [t, e];
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (e, t, n) {
			var r = Ee,
				a = Dt();
			if (we) {
				if (n === void 0) throw Error(L(407));
				n = n();
			} else {
				if (((n = t()), Ae === null)) throw Error(L(349));
				Gn & 30 || om(r, t, n);
			}
			a.memoizedState = n;
			var i = { value: n, getSnapshot: t };
			return (
				(a.queue = i),
				yf(sm.bind(null, r, i, e), [e]),
				(r.flags |= 2048),
				Va(9, lm.bind(null, r, i, n, t), void 0, null),
				n
			);
		},
		useId: function () {
			var e = Dt(),
				t = Ae.identifierPrefix;
			if (we) {
				var n = Yt,
					r = Wt;
				(n = (r & ~(1 << (32 - Rt(r) - 1))).toString(32) + n),
					(t = ":" + t + "R" + n),
					(n = Ua++),
					0 < n && (t += "H" + n.toString(32)),
					(t += ":");
			} else (n = x0++), (t = ":" + t + "r" + n.toString(32) + ":");
			return (e.memoizedState = t);
		},
		unstable_isNewReconciler: !1,
	},
	C0 = {
		readContext: bt,
		useCallback: vm,
		useContext: bt,
		useEffect: $u,
		useImperativeHandle: hm,
		useInsertionEffect: dm,
		useLayoutEffect: pm,
		useMemo: gm,
		useReducer: Tl,
		useRef: fm,
		useState: function () {
			return Tl(Ha);
		},
		useDebugValue: Uu,
		useDeferredValue: function (e) {
			var t = Ct();
			return ym(t, Re.memoizedState, e);
		},
		useTransition: function () {
			var e = Tl(Ha)[0],
				t = Ct().memoizedState;
			return [e, t];
		},
		useMutableSource: am,
		useSyncExternalStore: im,
		useId: wm,
		unstable_isNewReconciler: !1,
	},
	j0 = {
		readContext: bt,
		useCallback: vm,
		useContext: bt,
		useEffect: $u,
		useImperativeHandle: hm,
		useInsertionEffect: dm,
		useLayoutEffect: pm,
		useMemo: gm,
		useReducer: Ll,
		useRef: fm,
		useState: function () {
			return Ll(Ha);
		},
		useDebugValue: Uu,
		useDeferredValue: function (e) {
			var t = Ct();
			return Re === null ? (t.memoizedState = e) : ym(t, Re.memoizedState, e);
		},
		useTransition: function () {
			var e = Ll(Ha)[0],
				t = Ct().memoizedState;
			return [e, t];
		},
		useMutableSource: am,
		useSyncExternalStore: im,
		useId: wm,
		unstable_isNewReconciler: !1,
	};
function Nt(e, t) {
	if (e && e.defaultProps) {
		(t = be({}, t)), (e = e.defaultProps);
		for (var n in e) t[n] === void 0 && (t[n] = e[n]);
		return t;
	}
	return t;
}
function ks(e, t, n, r) {
	(t = e.memoizedState),
		(n = n(r, t)),
		(n = n == null ? t : be({}, t, n)),
		(e.memoizedState = n),
		e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Bo = {
	isMounted: function (e) {
		return (e = e._reactInternals) ? nr(e) === e : !1;
	},
	enqueueSetState: function (e, t, n) {
		e = e._reactInternals;
		var r = et(),
			a = En(e),
			i = Qt(r, a);
		(i.payload = t),
			n != null && (i.callback = n),
			(t = Sn(e, i, a)),
			t !== null && (Ot(t, e, a, r), Qi(t, e, a));
	},
	enqueueReplaceState: function (e, t, n) {
		e = e._reactInternals;
		var r = et(),
			a = En(e),
			i = Qt(r, a);
		(i.tag = 1),
			(i.payload = t),
			n != null && (i.callback = n),
			(t = Sn(e, i, a)),
			t !== null && (Ot(t, e, a, r), Qi(t, e, a));
	},
	enqueueForceUpdate: function (e, t) {
		e = e._reactInternals;
		var n = et(),
			r = En(e),
			a = Qt(n, r);
		(a.tag = 2),
			t != null && (a.callback = t),
			(t = Sn(e, a, r)),
			t !== null && (Ot(t, e, r, n), Qi(t, e, r));
	},
};
function wf(e, t, n, r, a, i, o) {
	return (
		(e = e.stateNode),
		typeof e.shouldComponentUpdate == "function"
			? e.shouldComponentUpdate(r, i, o)
			: t.prototype && t.prototype.isPureReactComponent
			? !za(n, r) || !za(a, i)
			: !0
	);
}
function Em(e, t, n) {
	var r = !1,
		a = Nn,
		i = t.contextType;
	return (
		typeof i == "object" && i !== null
			? (i = bt(i))
			: ((a = ot(t) ? Kn : Xe.current),
			  (r = t.contextTypes),
			  (i = (r = r != null) ? Mr(e, a) : Nn)),
		(t = new t(n, i)),
		(e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
		(t.updater = Bo),
		(e.stateNode = t),
		(t._reactInternals = e),
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = a),
			(e.__reactInternalMemoizedMaskedChildContext = i)),
		t
	);
}
function xf(e, t, n, r) {
	(e = t.state),
		typeof t.componentWillReceiveProps == "function" &&
			t.componentWillReceiveProps(n, r),
		typeof t.UNSAFE_componentWillReceiveProps == "function" &&
			t.UNSAFE_componentWillReceiveProps(n, r),
		t.state !== e && Bo.enqueueReplaceState(t, t.state, null);
}
function Es(e, t, n, r) {
	var a = e.stateNode;
	(a.props = n), (a.state = e.memoizedState), (a.refs = {}), Ou(e);
	var i = t.contextType;
	typeof i == "object" && i !== null
		? (a.context = bt(i))
		: ((i = ot(t) ? Kn : Xe.current), (a.context = Mr(e, i))),
		(a.state = e.memoizedState),
		(i = t.getDerivedStateFromProps),
		typeof i == "function" && (ks(e, t, i, n), (a.state = e.memoizedState)),
		typeof t.getDerivedStateFromProps == "function" ||
			typeof a.getSnapshotBeforeUpdate == "function" ||
			(typeof a.UNSAFE_componentWillMount != "function" &&
				typeof a.componentWillMount != "function") ||
			((t = a.state),
			typeof a.componentWillMount == "function" && a.componentWillMount(),
			typeof a.UNSAFE_componentWillMount == "function" &&
				a.UNSAFE_componentWillMount(),
			t !== a.state && Bo.enqueueReplaceState(a, a.state, null),
			wo(e, n, a, r),
			(a.state = e.memoizedState)),
		typeof a.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ar(e, t) {
	try {
		var n = "",
			r = t;
		do (n += ev(r)), (r = r.return);
		while (r);
		var a = n;
	} catch (i) {
		a =
			`
Error generating stack: ` +
			i.message +
			`
` +
			i.stack;
	}
	return { value: e, source: t, stack: a, digest: null };
}
function Rl(e, t, n) {
	return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function bs(e, t) {
	try {
		console.error(t.value);
	} catch (n) {
		setTimeout(function () {
			throw n;
		});
	}
}
var N0 = typeof WeakMap == "function" ? WeakMap : Map;
function bm(e, t, n) {
	(n = Qt(-1, n)), (n.tag = 3), (n.payload = { element: null });
	var r = t.value;
	return (
		(n.callback = function () {
			bo || ((bo = !0), (Ms = r)), bs(e, t);
		}),
		n
	);
}
function Cm(e, t, n) {
	(n = Qt(-1, n)), (n.tag = 3);
	var r = e.type.getDerivedStateFromError;
	if (typeof r == "function") {
		var a = t.value;
		(n.payload = function () {
			return r(a);
		}),
			(n.callback = function () {
				bs(e, t);
			});
	}
	var i = e.stateNode;
	return (
		i !== null &&
			typeof i.componentDidCatch == "function" &&
			(n.callback = function () {
				bs(e, t),
					typeof r != "function" &&
						(kn === null ? (kn = new Set([this])) : kn.add(this));
				var o = t.stack;
				this.componentDidCatch(t.value, {
					componentStack: o !== null ? o : "",
				});
			}),
		n
	);
}
function Sf(e, t, n) {
	var r = e.pingCache;
	if (r === null) {
		r = e.pingCache = new N0();
		var a = new Set();
		r.set(t, a);
	} else (a = r.get(t)), a === void 0 && ((a = new Set()), r.set(t, a));
	a.has(n) || (a.add(n), (e = U0.bind(null, e, t, n)), t.then(e, e));
}
function kf(e) {
	do {
		var t;
		if (
			((t = e.tag === 13) &&
				((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
			t)
		)
			return e;
		e = e.return;
	} while (e !== null);
	return null;
}
function Ef(e, t, n, r, a) {
	return e.mode & 1
		? ((e.flags |= 65536), (e.lanes = a), e)
		: (e === t
				? (e.flags |= 65536)
				: ((e.flags |= 128),
				  (n.flags |= 131072),
				  (n.flags &= -52805),
				  n.tag === 1 &&
						(n.alternate === null
							? (n.tag = 17)
							: ((t = Qt(-1, 1)), (t.tag = 2), Sn(n, t, 1))),
				  (n.lanes |= 1)),
		  e);
}
var P0 = tn.ReactCurrentOwner,
	at = !1;
function Ze(e, t, n, r) {
	t.child = e === null ? em(t, null, n, r) : Ir(t, e.child, n, r);
}
function bf(e, t, n, r, a) {
	n = n.render;
	var i = t.ref;
	return (
		Tr(t, a),
		(r = Au(e, t, n, r, i, a)),
		(n = Fu()),
		e !== null && !at
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~a),
			  Jt(e, t, a))
			: (we && n && ju(t), (t.flags |= 1), Ze(e, t, r, a), t.child)
	);
}
function Cf(e, t, n, r, a) {
	if (e === null) {
		var i = n.type;
		return typeof i == "function" &&
			!Xu(i) &&
			i.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((t.tag = 15), (t.type = i), jm(e, t, i, r, a))
			: ((e = qi(n.type, null, r, t, t.mode, a)),
			  (e.ref = t.ref),
			  (e.return = t),
			  (t.child = e));
	}
	if (((i = e.child), !(e.lanes & a))) {
		var o = i.memoizedProps;
		if (
			((n = n.compare), (n = n !== null ? n : za), n(o, r) && e.ref === t.ref)
		)
			return Jt(e, t, a);
	}
	return (
		(t.flags |= 1),
		(e = bn(i, r)),
		(e.ref = t.ref),
		(e.return = t),
		(t.child = e)
	);
}
function jm(e, t, n, r, a) {
	if (e !== null) {
		var i = e.memoizedProps;
		if (za(i, r) && e.ref === t.ref)
			if (((at = !1), (t.pendingProps = r = i), (e.lanes & a) !== 0))
				e.flags & 131072 && (at = !0);
			else return (t.lanes = e.lanes), Jt(e, t, a);
	}
	return Cs(e, t, n, r, a);
}
function Nm(e, t, n) {
	var r = t.pendingProps,
		a = r.children,
		i = e !== null ? e.memoizedState : null;
	if (r.mode === "hidden")
		if (!(t.mode & 1))
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				ue(Sr, ut),
				(ut |= n);
		else {
			if (!(n & 1073741824))
				return (
					(e = i !== null ? i.baseLanes | n : n),
					(t.lanes = t.childLanes = 1073741824),
					(t.memoizedState = {
						baseLanes: e,
						cachePool: null,
						transitions: null,
					}),
					(t.updateQueue = null),
					ue(Sr, ut),
					(ut |= e),
					null
				);
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				(r = i !== null ? i.baseLanes : n),
				ue(Sr, ut),
				(ut |= r);
		}
	else
		i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
			ue(Sr, ut),
			(ut |= r);
	return Ze(e, t, a, n), t.child;
}
function Pm(e, t) {
	var n = t.ref;
	((e === null && n !== null) || (e !== null && e.ref !== n)) &&
		((t.flags |= 512), (t.flags |= 2097152));
}
function Cs(e, t, n, r, a) {
	var i = ot(n) ? Kn : Xe.current;
	return (
		(i = Mr(t, i)),
		Tr(t, a),
		(n = Au(e, t, n, r, i, a)),
		(r = Fu()),
		e !== null && !at
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~a),
			  Jt(e, t, a))
			: (we && r && ju(t), (t.flags |= 1), Ze(e, t, n, a), t.child)
	);
}
function jf(e, t, n, r, a) {
	if (ot(n)) {
		var i = !0;
		mo(t);
	} else i = !1;
	if ((Tr(t, a), t.stateNode === null))
		Gi(e, t), Em(t, n, r), Es(t, n, r, a), (r = !0);
	else if (e === null) {
		var o = t.stateNode,
			l = t.memoizedProps;
		o.props = l;
		var s = o.context,
			u = n.contextType;
		typeof u == "object" && u !== null
			? (u = bt(u))
			: ((u = ot(n) ? Kn : Xe.current), (u = Mr(t, u)));
		var c = n.getDerivedStateFromProps,
			f =
				typeof c == "function" ||
				typeof o.getSnapshotBeforeUpdate == "function";
		f ||
			(typeof o.UNSAFE_componentWillReceiveProps != "function" &&
				typeof o.componentWillReceiveProps != "function") ||
			((l !== r || s !== u) && xf(t, o, r, u)),
			(fn = !1);
		var p = t.memoizedState;
		(o.state = p),
			wo(t, r, o, a),
			(s = t.memoizedState),
			l !== r || p !== s || it.current || fn
				? (typeof c == "function" && (ks(t, n, c, r), (s = t.memoizedState)),
				  (l = fn || wf(t, n, l, r, p, s, u))
						? (f ||
								(typeof o.UNSAFE_componentWillMount != "function" &&
									typeof o.componentWillMount != "function") ||
								(typeof o.componentWillMount == "function" &&
									o.componentWillMount(),
								typeof o.UNSAFE_componentWillMount == "function" &&
									o.UNSAFE_componentWillMount()),
						  typeof o.componentDidMount == "function" && (t.flags |= 4194308))
						: (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
						  (t.memoizedProps = r),
						  (t.memoizedState = s)),
				  (o.props = r),
				  (o.state = s),
				  (o.context = u),
				  (r = l))
				: (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
				  (r = !1));
	} else {
		(o = t.stateNode),
			nm(e, t),
			(l = t.memoizedProps),
			(u = t.type === t.elementType ? l : Nt(t.type, l)),
			(o.props = u),
			(f = t.pendingProps),
			(p = o.context),
			(s = n.contextType),
			typeof s == "object" && s !== null
				? (s = bt(s))
				: ((s = ot(n) ? Kn : Xe.current), (s = Mr(t, s)));
		var w = n.getDerivedStateFromProps;
		(c =
			typeof w == "function" ||
			typeof o.getSnapshotBeforeUpdate == "function") ||
			(typeof o.UNSAFE_componentWillReceiveProps != "function" &&
				typeof o.componentWillReceiveProps != "function") ||
			((l !== f || p !== s) && xf(t, o, r, s)),
			(fn = !1),
			(p = t.memoizedState),
			(o.state = p),
			wo(t, r, o, a);
		var x = t.memoizedState;
		l !== f || p !== x || it.current || fn
			? (typeof w == "function" && (ks(t, n, w, r), (x = t.memoizedState)),
			  (u = fn || wf(t, n, u, r, p, x, s) || !1)
					? (c ||
							(typeof o.UNSAFE_componentWillUpdate != "function" &&
								typeof o.componentWillUpdate != "function") ||
							(typeof o.componentWillUpdate == "function" &&
								o.componentWillUpdate(r, x, s),
							typeof o.UNSAFE_componentWillUpdate == "function" &&
								o.UNSAFE_componentWillUpdate(r, x, s)),
					  typeof o.componentDidUpdate == "function" && (t.flags |= 4),
					  typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
					: (typeof o.componentDidUpdate != "function" ||
							(l === e.memoizedProps && p === e.memoizedState) ||
							(t.flags |= 4),
					  typeof o.getSnapshotBeforeUpdate != "function" ||
							(l === e.memoizedProps && p === e.memoizedState) ||
							(t.flags |= 1024),
					  (t.memoizedProps = r),
					  (t.memoizedState = x)),
			  (o.props = r),
			  (o.state = x),
			  (o.context = s),
			  (r = u))
			: (typeof o.componentDidUpdate != "function" ||
					(l === e.memoizedProps && p === e.memoizedState) ||
					(t.flags |= 4),
			  typeof o.getSnapshotBeforeUpdate != "function" ||
					(l === e.memoizedProps && p === e.memoizedState) ||
					(t.flags |= 1024),
			  (r = !1));
	}
	return js(e, t, n, r, i, a);
}
function js(e, t, n, r, a, i) {
	Pm(e, t);
	var o = (t.flags & 128) !== 0;
	if (!r && !o) return a && ff(t, n, !1), Jt(e, t, i);
	(r = t.stateNode), (P0.current = t);
	var l =
		o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
	return (
		(t.flags |= 1),
		e !== null && o
			? ((t.child = Ir(t, e.child, null, i)), (t.child = Ir(t, null, l, i)))
			: Ze(e, t, l, i),
		(t.memoizedState = r.state),
		a && ff(t, n, !0),
		t.child
	);
}
function _m(e) {
	var t = e.stateNode;
	t.pendingContext
		? cf(e, t.pendingContext, t.pendingContext !== t.context)
		: t.context && cf(e, t.context, !1),
		Mu(e, t.containerInfo);
}
function Nf(e, t, n, r, a) {
	return zr(), Pu(a), (t.flags |= 256), Ze(e, t, n, r), t.child;
}
var Ns = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ps(e) {
	return { baseLanes: e, cachePool: null, transitions: null };
}
function Tm(e, t, n) {
	var r = t.pendingProps,
		a = ke.current,
		i = !1,
		o = (t.flags & 128) !== 0,
		l;
	if (
		((l = o) ||
			(l = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0),
		l
			? ((i = !0), (t.flags &= -129))
			: (e === null || e.memoizedState !== null) && (a |= 1),
		ue(ke, a & 1),
		e === null)
	)
		return (
			xs(t),
			(e = t.memoizedState),
			e !== null && ((e = e.dehydrated), e !== null)
				? (t.mode & 1
						? e.data === "$!"
							? (t.lanes = 8)
							: (t.lanes = 1073741824)
						: (t.lanes = 1),
				  null)
				: ((o = r.children),
				  (e = r.fallback),
				  i
						? ((r = t.mode),
						  (i = t.child),
						  (o = { mode: "hidden", children: o }),
						  !(r & 1) && i !== null
								? ((i.childLanes = 0), (i.pendingProps = o))
								: (i = Qo(o, r, 0, null)),
						  (e = Yn(e, r, n, null)),
						  (i.return = t),
						  (e.return = t),
						  (i.sibling = e),
						  (t.child = i),
						  (t.child.memoizedState = Ps(n)),
						  (t.memoizedState = Ns),
						  e)
						: Hu(t, o))
		);
	if (((a = e.memoizedState), a !== null && ((l = a.dehydrated), l !== null)))
		return _0(e, t, o, r, l, a, n);
	if (i) {
		(i = r.fallback), (o = t.mode), (a = e.child), (l = a.sibling);
		var s = { mode: "hidden", children: r.children };
		return (
			!(o & 1) && t.child !== a
				? ((r = t.child),
				  (r.childLanes = 0),
				  (r.pendingProps = s),
				  (t.deletions = null))
				: ((r = bn(a, s)), (r.subtreeFlags = a.subtreeFlags & 14680064)),
			l !== null ? (i = bn(l, i)) : ((i = Yn(i, o, n, null)), (i.flags |= 2)),
			(i.return = t),
			(r.return = t),
			(r.sibling = i),
			(t.child = r),
			(r = i),
			(i = t.child),
			(o = e.child.memoizedState),
			(o =
				o === null
					? Ps(n)
					: {
							baseLanes: o.baseLanes | n,
							cachePool: null,
							transitions: o.transitions,
					  }),
			(i.memoizedState = o),
			(i.childLanes = e.childLanes & ~n),
			(t.memoizedState = Ns),
			r
		);
	}
	return (
		(i = e.child),
		(e = i.sibling),
		(r = bn(i, { mode: "visible", children: r.children })),
		!(t.mode & 1) && (r.lanes = n),
		(r.return = t),
		(r.sibling = null),
		e !== null &&
			((n = t.deletions),
			n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
		(t.child = r),
		(t.memoizedState = null),
		r
	);
}
function Hu(e, t) {
	return (
		(t = Qo({ mode: "visible", children: t }, e.mode, 0, null)),
		(t.return = e),
		(e.child = t)
	);
}
function Ni(e, t, n, r) {
	return (
		r !== null && Pu(r),
		Ir(t, e.child, null, n),
		(e = Hu(t, t.pendingProps.children)),
		(e.flags |= 2),
		(t.memoizedState = null),
		e
	);
}
function _0(e, t, n, r, a, i, o) {
	if (n)
		return t.flags & 256
			? ((t.flags &= -257), (r = Rl(Error(L(422)))), Ni(e, t, o, r))
			: t.memoizedState !== null
			? ((t.child = e.child), (t.flags |= 128), null)
			: ((i = r.fallback),
			  (a = t.mode),
			  (r = Qo({ mode: "visible", children: r.children }, a, 0, null)),
			  (i = Yn(i, a, o, null)),
			  (i.flags |= 2),
			  (r.return = t),
			  (i.return = t),
			  (r.sibling = i),
			  (t.child = r),
			  t.mode & 1 && Ir(t, e.child, null, o),
			  (t.child.memoizedState = Ps(o)),
			  (t.memoizedState = Ns),
			  i);
	if (!(t.mode & 1)) return Ni(e, t, o, null);
	if (a.data === "$!") {
		if (((r = a.nextSibling && a.nextSibling.dataset), r)) var l = r.dgst;
		return (r = l), (i = Error(L(419))), (r = Rl(i, r, void 0)), Ni(e, t, o, r);
	}
	if (((l = (o & e.childLanes) !== 0), at || l)) {
		if (((r = Ae), r !== null)) {
			switch (o & -o) {
				case 4:
					a = 2;
					break;
				case 16:
					a = 8;
					break;
				case 64:
				case 128:
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152:
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864:
					a = 32;
					break;
				case 536870912:
					a = 268435456;
					break;
				default:
					a = 0;
			}
			(a = a & (r.suspendedLanes | o) ? 0 : a),
				a !== 0 &&
					a !== i.retryLane &&
					((i.retryLane = a), Gt(e, a), Ot(r, e, a, -1));
		}
		return Ku(), (r = Rl(Error(L(421)))), Ni(e, t, o, r);
	}
	return a.data === "$?"
		? ((t.flags |= 128),
		  (t.child = e.child),
		  (t = H0.bind(null, e)),
		  (a._reactRetry = t),
		  null)
		: ((e = i.treeContext),
		  (ct = xn(a.nextSibling)),
		  (dt = t),
		  (we = !0),
		  (Tt = null),
		  e !== null &&
				((wt[xt++] = Wt),
				(wt[xt++] = Yt),
				(wt[xt++] = Xn),
				(Wt = e.id),
				(Yt = e.overflow),
				(Xn = t)),
		  (t = Hu(t, r.children)),
		  (t.flags |= 4096),
		  t);
}
function Pf(e, t, n) {
	e.lanes |= t;
	var r = e.alternate;
	r !== null && (r.lanes |= t), Ss(e.return, t, n);
}
function Ol(e, t, n, r, a) {
	var i = e.memoizedState;
	i === null
		? (e.memoizedState = {
				isBackwards: t,
				rendering: null,
				renderingStartTime: 0,
				last: r,
				tail: n,
				tailMode: a,
		  })
		: ((i.isBackwards = t),
		  (i.rendering = null),
		  (i.renderingStartTime = 0),
		  (i.last = r),
		  (i.tail = n),
		  (i.tailMode = a));
}
function Lm(e, t, n) {
	var r = t.pendingProps,
		a = r.revealOrder,
		i = r.tail;
	if ((Ze(e, t, r.children, n), (r = ke.current), r & 2))
		(r = (r & 1) | 2), (t.flags |= 128);
	else {
		if (e !== null && e.flags & 128)
			e: for (e = t.child; e !== null; ) {
				if (e.tag === 13) e.memoizedState !== null && Pf(e, n, t);
				else if (e.tag === 19) Pf(e, n, t);
				else if (e.child !== null) {
					(e.child.return = e), (e = e.child);
					continue;
				}
				if (e === t) break e;
				for (; e.sibling === null; ) {
					if (e.return === null || e.return === t) break e;
					e = e.return;
				}
				(e.sibling.return = e.return), (e = e.sibling);
			}
		r &= 1;
	}
	if ((ue(ke, r), !(t.mode & 1))) t.memoizedState = null;
	else
		switch (a) {
			case "forwards":
				for (n = t.child, a = null; n !== null; )
					(e = n.alternate),
						e !== null && xo(e) === null && (a = n),
						(n = n.sibling);
				(n = a),
					n === null
						? ((a = t.child), (t.child = null))
						: ((a = n.sibling), (n.sibling = null)),
					Ol(t, !1, a, n, i);
				break;
			case "backwards":
				for (n = null, a = t.child, t.child = null; a !== null; ) {
					if (((e = a.alternate), e !== null && xo(e) === null)) {
						t.child = a;
						break;
					}
					(e = a.sibling), (a.sibling = n), (n = a), (a = e);
				}
				Ol(t, !0, n, null, i);
				break;
			case "together":
				Ol(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null;
		}
	return t.child;
}
function Gi(e, t) {
	!(t.mode & 1) &&
		e !== null &&
		((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Jt(e, t, n) {
	if (
		(e !== null && (t.dependencies = e.dependencies),
		(Jn |= t.lanes),
		!(n & t.childLanes))
	)
		return null;
	if (e !== null && t.child !== e.child) throw Error(L(153));
	if (t.child !== null) {
		for (
			e = t.child, n = bn(e, e.pendingProps), t.child = n, n.return = t;
			e.sibling !== null;

		)
			(e = e.sibling), (n = n.sibling = bn(e, e.pendingProps)), (n.return = t);
		n.sibling = null;
	}
	return t.child;
}
function T0(e, t, n) {
	switch (t.tag) {
		case 3:
			_m(t), zr();
			break;
		case 5:
			rm(t);
			break;
		case 1:
			ot(t.type) && mo(t);
			break;
		case 4:
			Mu(t, t.stateNode.containerInfo);
			break;
		case 10:
			var r = t.type._context,
				a = t.memoizedProps.value;
			ue(go, r._currentValue), (r._currentValue = a);
			break;
		case 13:
			if (((r = t.memoizedState), r !== null))
				return r.dehydrated !== null
					? (ue(ke, ke.current & 1), (t.flags |= 128), null)
					: n & t.child.childLanes
					? Tm(e, t, n)
					: (ue(ke, ke.current & 1),
					  (e = Jt(e, t, n)),
					  e !== null ? e.sibling : null);
			ue(ke, ke.current & 1);
			break;
		case 19:
			if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
				if (r) return Lm(e, t, n);
				t.flags |= 128;
			}
			if (
				((a = t.memoizedState),
				a !== null &&
					((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
				ue(ke, ke.current),
				r)
			)
				break;
			return null;
		case 22:
		case 23:
			return (t.lanes = 0), Nm(e, t, n);
	}
	return Jt(e, t, n);
}
var Rm, _s, Om, Mm;
Rm = function (e, t) {
	for (var n = t.child; n !== null; ) {
		if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
		else if (n.tag !== 4 && n.child !== null) {
			(n.child.return = n), (n = n.child);
			continue;
		}
		if (n === t) break;
		for (; n.sibling === null; ) {
			if (n.return === null || n.return === t) return;
			n = n.return;
		}
		(n.sibling.return = n.return), (n = n.sibling);
	}
};
_s = function () {};
Om = function (e, t, n, r) {
	var a = e.memoizedProps;
	if (a !== r) {
		(e = t.stateNode), $n(Ht.current);
		var i = null;
		switch (n) {
			case "input":
				(a = Jl(e, a)), (r = Jl(e, r)), (i = []);
				break;
			case "select":
				(a = be({}, a, { value: void 0 })),
					(r = be({}, r, { value: void 0 })),
					(i = []);
				break;
			case "textarea":
				(a = es(e, a)), (r = es(e, r)), (i = []);
				break;
			default:
				typeof a.onClick != "function" &&
					typeof r.onClick == "function" &&
					(e.onclick = fo);
		}
		ns(n, r);
		var o;
		n = null;
		for (u in a)
			if (!r.hasOwnProperty(u) && a.hasOwnProperty(u) && a[u] != null)
				if (u === "style") {
					var l = a[u];
					for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
				} else
					u !== "dangerouslySetInnerHTML" &&
						u !== "children" &&
						u !== "suppressContentEditableWarning" &&
						u !== "suppressHydrationWarning" &&
						u !== "autoFocus" &&
						(Pa.hasOwnProperty(u)
							? i || (i = [])
							: (i = i || []).push(u, null));
		for (u in r) {
			var s = r[u];
			if (
				((l = a != null ? a[u] : void 0),
				r.hasOwnProperty(u) && s !== l && (s != null || l != null))
			)
				if (u === "style")
					if (l) {
						for (o in l)
							!l.hasOwnProperty(o) ||
								(s && s.hasOwnProperty(o)) ||
								(n || (n = {}), (n[o] = ""));
						for (o in s)
							s.hasOwnProperty(o) &&
								l[o] !== s[o] &&
								(n || (n = {}), (n[o] = s[o]));
					} else n || (i || (i = []), i.push(u, n)), (n = s);
				else
					u === "dangerouslySetInnerHTML"
						? ((s = s ? s.__html : void 0),
						  (l = l ? l.__html : void 0),
						  s != null && l !== s && (i = i || []).push(u, s))
						: u === "children"
						? (typeof s != "string" && typeof s != "number") ||
						  (i = i || []).push(u, "" + s)
						: u !== "suppressContentEditableWarning" &&
						  u !== "suppressHydrationWarning" &&
						  (Pa.hasOwnProperty(u)
								? (s != null && u === "onScroll" && fe("scroll", e),
								  i || l === s || (i = []))
								: (i = i || []).push(u, s));
		}
		n && (i = i || []).push("style", n);
		var u = i;
		(t.updateQueue = u) && (t.flags |= 4);
	}
};
Mm = function (e, t, n, r) {
	n !== r && (t.flags |= 4);
};
function ia(e, t) {
	if (!we)
		switch (e.tailMode) {
			case "hidden":
				t = e.tail;
				for (var n = null; t !== null; )
					t.alternate !== null && (n = t), (t = t.sibling);
				n === null ? (e.tail = null) : (n.sibling = null);
				break;
			case "collapsed":
				n = e.tail;
				for (var r = null; n !== null; )
					n.alternate !== null && (r = n), (n = n.sibling);
				r === null
					? t || e.tail === null
						? (e.tail = null)
						: (e.tail.sibling = null)
					: (r.sibling = null);
		}
}
function Qe(e) {
	var t = e.alternate !== null && e.alternate.child === e.child,
		n = 0,
		r = 0;
	if (t)
		for (var a = e.child; a !== null; )
			(n |= a.lanes | a.childLanes),
				(r |= a.subtreeFlags & 14680064),
				(r |= a.flags & 14680064),
				(a.return = e),
				(a = a.sibling);
	else
		for (a = e.child; a !== null; )
			(n |= a.lanes | a.childLanes),
				(r |= a.subtreeFlags),
				(r |= a.flags),
				(a.return = e),
				(a = a.sibling);
	return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function L0(e, t, n) {
	var r = t.pendingProps;
	switch ((Nu(t), t.tag)) {
		case 2:
		case 16:
		case 15:
		case 0:
		case 11:
		case 7:
		case 8:
		case 12:
		case 9:
		case 14:
			return Qe(t), null;
		case 1:
			return ot(t.type) && po(), Qe(t), null;
		case 3:
			return (
				(r = t.stateNode),
				Dr(),
				pe(it),
				pe(Xe),
				Iu(),
				r.pendingContext &&
					((r.context = r.pendingContext), (r.pendingContext = null)),
				(e === null || e.child === null) &&
					(Ci(t)
						? (t.flags |= 4)
						: e === null ||
						  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
						  ((t.flags |= 1024), Tt !== null && (Ds(Tt), (Tt = null)))),
				_s(e, t),
				Qe(t),
				null
			);
		case 5:
			zu(t);
			var a = $n($a.current);
			if (((n = t.type), e !== null && t.stateNode != null))
				Om(e, t, n, r, a),
					e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(L(166));
					return Qe(t), null;
				}
				if (((e = $n(Ht.current)), Ci(t))) {
					(r = t.stateNode), (n = t.type);
					var i = t.memoizedProps;
					switch (((r[Ft] = t), (r[Aa] = i), (e = (t.mode & 1) !== 0), n)) {
						case "dialog":
							fe("cancel", r), fe("close", r);
							break;
						case "iframe":
						case "object":
						case "embed":
							fe("load", r);
							break;
						case "video":
						case "audio":
							for (a = 0; a < pa.length; a++) fe(pa[a], r);
							break;
						case "source":
							fe("error", r);
							break;
						case "img":
						case "image":
						case "link":
							fe("error", r), fe("load", r);
							break;
						case "details":
							fe("toggle", r);
							break;
						case "input":
							Ic(r, i), fe("invalid", r);
							break;
						case "select":
							(r._wrapperState = { wasMultiple: !!i.multiple }),
								fe("invalid", r);
							break;
						case "textarea":
							Ac(r, i), fe("invalid", r);
					}
					ns(n, i), (a = null);
					for (var o in i)
						if (i.hasOwnProperty(o)) {
							var l = i[o];
							o === "children"
								? typeof l == "string"
									? r.textContent !== l &&
									  (i.suppressHydrationWarning !== !0 &&
											bi(r.textContent, l, e),
									  (a = ["children", l]))
									: typeof l == "number" &&
									  r.textContent !== "" + l &&
									  (i.suppressHydrationWarning !== !0 &&
											bi(r.textContent, l, e),
									  (a = ["children", "" + l]))
								: Pa.hasOwnProperty(o) &&
								  l != null &&
								  o === "onScroll" &&
								  fe("scroll", r);
						}
					switch (n) {
						case "input":
							vi(r), Dc(r, i, !0);
							break;
						case "textarea":
							vi(r), Fc(r);
							break;
						case "select":
						case "option":
							break;
						default:
							typeof i.onClick == "function" && (r.onclick = fo);
					}
					(r = a), (t.updateQueue = r), r !== null && (t.flags |= 4);
				} else {
					(o = a.nodeType === 9 ? a : a.ownerDocument),
						e === "http://www.w3.org/1999/xhtml" && (e = sp(n)),
						e === "http://www.w3.org/1999/xhtml"
							? n === "script"
								? ((e = o.createElement("div")),
								  (e.innerHTML = "<script></script>"),
								  (e = e.removeChild(e.firstChild)))
								: typeof r.is == "string"
								? (e = o.createElement(n, { is: r.is }))
								: ((e = o.createElement(n)),
								  n === "select" &&
										((o = e),
										r.multiple
											? (o.multiple = !0)
											: r.size && (o.size = r.size)))
							: (e = o.createElementNS(e, n)),
						(e[Ft] = t),
						(e[Aa] = r),
						Rm(e, t, !1, !1),
						(t.stateNode = e);
					e: {
						switch (((o = rs(n, r)), n)) {
							case "dialog":
								fe("cancel", e), fe("close", e), (a = r);
								break;
							case "iframe":
							case "object":
							case "embed":
								fe("load", e), (a = r);
								break;
							case "video":
							case "audio":
								for (a = 0; a < pa.length; a++) fe(pa[a], e);
								a = r;
								break;
							case "source":
								fe("error", e), (a = r);
								break;
							case "img":
							case "image":
							case "link":
								fe("error", e), fe("load", e), (a = r);
								break;
							case "details":
								fe("toggle", e), (a = r);
								break;
							case "input":
								Ic(e, r), (a = Jl(e, r)), fe("invalid", e);
								break;
							case "option":
								a = r;
								break;
							case "select":
								(e._wrapperState = { wasMultiple: !!r.multiple }),
									(a = be({}, r, { value: void 0 })),
									fe("invalid", e);
								break;
							case "textarea":
								Ac(e, r), (a = es(e, r)), fe("invalid", e);
								break;
							default:
								a = r;
						}
						ns(n, a), (l = a);
						for (i in l)
							if (l.hasOwnProperty(i)) {
								var s = l[i];
								i === "style"
									? fp(e, s)
									: i === "dangerouslySetInnerHTML"
									? ((s = s ? s.__html : void 0), s != null && up(e, s))
									: i === "children"
									? typeof s == "string"
										? (n !== "textarea" || s !== "") && _a(e, s)
										: typeof s == "number" && _a(e, "" + s)
									: i !== "suppressContentEditableWarning" &&
									  i !== "suppressHydrationWarning" &&
									  i !== "autoFocus" &&
									  (Pa.hasOwnProperty(i)
											? s != null && i === "onScroll" && fe("scroll", e)
											: s != null && du(e, i, s, o));
							}
						switch (n) {
							case "input":
								vi(e), Dc(e, r, !1);
								break;
							case "textarea":
								vi(e), Fc(e);
								break;
							case "option":
								r.value != null && e.setAttribute("value", "" + jn(r.value));
								break;
							case "select":
								(e.multiple = !!r.multiple),
									(i = r.value),
									i != null
										? jr(e, !!r.multiple, i, !1)
										: r.defaultValue != null &&
										  jr(e, !!r.multiple, r.defaultValue, !0);
								break;
							default:
								typeof a.onClick == "function" && (e.onclick = fo);
						}
						switch (n) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								r = !!r.autoFocus;
								break e;
							case "img":
								r = !0;
								break e;
							default:
								r = !1;
						}
					}
					r && (t.flags |= 4);
				}
				t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
			}
			return Qe(t), null;
		case 6:
			if (e && t.stateNode != null) Mm(e, t, e.memoizedProps, r);
			else {
				if (typeof r != "string" && t.stateNode === null) throw Error(L(166));
				if (((n = $n($a.current)), $n(Ht.current), Ci(t))) {
					if (
						((r = t.stateNode),
						(n = t.memoizedProps),
						(r[Ft] = t),
						(i = r.nodeValue !== n) && ((e = dt), e !== null))
					)
						switch (e.tag) {
							case 3:
								bi(r.nodeValue, n, (e.mode & 1) !== 0);
								break;
							case 5:
								e.memoizedProps.suppressHydrationWarning !== !0 &&
									bi(r.nodeValue, n, (e.mode & 1) !== 0);
						}
					i && (t.flags |= 4);
				} else
					(r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
						(r[Ft] = t),
						(t.stateNode = r);
			}
			return Qe(t), null;
		case 13:
			if (
				(pe(ke),
				(r = t.memoizedState),
				e === null ||
					(e.memoizedState !== null && e.memoizedState.dehydrated !== null))
			) {
				if (we && ct !== null && t.mode & 1 && !(t.flags & 128))
					Zp(), zr(), (t.flags |= 98560), (i = !1);
				else if (((i = Ci(t)), r !== null && r.dehydrated !== null)) {
					if (e === null) {
						if (!i) throw Error(L(318));
						if (
							((i = t.memoizedState),
							(i = i !== null ? i.dehydrated : null),
							!i)
						)
							throw Error(L(317));
						i[Ft] = t;
					} else
						zr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
					Qe(t), (i = !1);
				} else Tt !== null && (Ds(Tt), (Tt = null)), (i = !0);
				if (!i) return t.flags & 65536 ? t : null;
			}
			return t.flags & 128
				? ((t.lanes = n), t)
				: ((r = r !== null),
				  r !== (e !== null && e.memoizedState !== null) &&
						r &&
						((t.child.flags |= 8192),
						t.mode & 1 &&
							(e === null || ke.current & 1 ? Oe === 0 && (Oe = 3) : Ku())),
				  t.updateQueue !== null && (t.flags |= 4),
				  Qe(t),
				  null);
		case 4:
			return (
				Dr(), _s(e, t), e === null && Ia(t.stateNode.containerInfo), Qe(t), null
			);
		case 10:
			return Lu(t.type._context), Qe(t), null;
		case 17:
			return ot(t.type) && po(), Qe(t), null;
		case 19:
			if ((pe(ke), (i = t.memoizedState), i === null)) return Qe(t), null;
			if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
				if (r) ia(i, !1);
				else {
					if (Oe !== 0 || (e !== null && e.flags & 128))
						for (e = t.child; e !== null; ) {
							if (((o = xo(e)), o !== null)) {
								for (
									t.flags |= 128,
										ia(i, !1),
										r = o.updateQueue,
										r !== null && ((t.updateQueue = r), (t.flags |= 4)),
										t.subtreeFlags = 0,
										r = n,
										n = t.child;
									n !== null;

								)
									(i = n),
										(e = r),
										(i.flags &= 14680066),
										(o = i.alternate),
										o === null
											? ((i.childLanes = 0),
											  (i.lanes = e),
											  (i.child = null),
											  (i.subtreeFlags = 0),
											  (i.memoizedProps = null),
											  (i.memoizedState = null),
											  (i.updateQueue = null),
											  (i.dependencies = null),
											  (i.stateNode = null))
											: ((i.childLanes = o.childLanes),
											  (i.lanes = o.lanes),
											  (i.child = o.child),
											  (i.subtreeFlags = 0),
											  (i.deletions = null),
											  (i.memoizedProps = o.memoizedProps),
											  (i.memoizedState = o.memoizedState),
											  (i.updateQueue = o.updateQueue),
											  (i.type = o.type),
											  (e = o.dependencies),
											  (i.dependencies =
													e === null
														? null
														: {
																lanes: e.lanes,
																firstContext: e.firstContext,
														  })),
										(n = n.sibling);
								return ue(ke, (ke.current & 1) | 2), t.child;
							}
							e = e.sibling;
						}
					i.tail !== null &&
						Pe() > Fr &&
						((t.flags |= 128), (r = !0), ia(i, !1), (t.lanes = 4194304));
				}
			else {
				if (!r)
					if (((e = xo(o)), e !== null)) {
						if (
							((t.flags |= 128),
							(r = !0),
							(n = e.updateQueue),
							n !== null && ((t.updateQueue = n), (t.flags |= 4)),
							ia(i, !0),
							i.tail === null && i.tailMode === "hidden" && !o.alternate && !we)
						)
							return Qe(t), null;
					} else
						2 * Pe() - i.renderingStartTime > Fr &&
							n !== 1073741824 &&
							((t.flags |= 128), (r = !0), ia(i, !1), (t.lanes = 4194304));
				i.isBackwards
					? ((o.sibling = t.child), (t.child = o))
					: ((n = i.last),
					  n !== null ? (n.sibling = o) : (t.child = o),
					  (i.last = o));
			}
			return i.tail !== null
				? ((t = i.tail),
				  (i.rendering = t),
				  (i.tail = t.sibling),
				  (i.renderingStartTime = Pe()),
				  (t.sibling = null),
				  (n = ke.current),
				  ue(ke, r ? (n & 1) | 2 : n & 1),
				  t)
				: (Qe(t), null);
		case 22:
		case 23:
			return (
				Qu(),
				(r = t.memoizedState !== null),
				e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
				r && t.mode & 1
					? ut & 1073741824 && (Qe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
					: Qe(t),
				null
			);
		case 24:
			return null;
		case 25:
			return null;
	}
	throw Error(L(156, t.tag));
}
function R0(e, t) {
	switch ((Nu(t), t.tag)) {
		case 1:
			return (
				ot(t.type) && po(),
				(e = t.flags),
				e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 3:
			return (
				Dr(),
				pe(it),
				pe(Xe),
				Iu(),
				(e = t.flags),
				e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 5:
			return zu(t), null;
		case 13:
			if (
				(pe(ke), (e = t.memoizedState), e !== null && e.dehydrated !== null)
			) {
				if (t.alternate === null) throw Error(L(340));
				zr();
			}
			return (
				(e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 19:
			return pe(ke), null;
		case 4:
			return Dr(), null;
		case 10:
			return Lu(t.type._context), null;
		case 22:
		case 23:
			return Qu(), null;
		case 24:
			return null;
		default:
			return null;
	}
}
var Pi = !1,
	Ke = !1,
	O0 = typeof WeakSet == "function" ? WeakSet : Set,
	I = null;
function xr(e, t) {
	var n = e.ref;
	if (n !== null)
		if (typeof n == "function")
			try {
				n(null);
			} catch (r) {
				Ce(e, t, r);
			}
		else n.current = null;
}
function Ts(e, t, n) {
	try {
		n();
	} catch (r) {
		Ce(e, t, r);
	}
}
var _f = !1;
function M0(e, t) {
	if (((ps = so), (e = Fp()), Cu(e))) {
		if ("selectionStart" in e)
			var n = { start: e.selectionStart, end: e.selectionEnd };
		else
			e: {
				n = ((n = e.ownerDocument) && n.defaultView) || window;
				var r = n.getSelection && n.getSelection();
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode;
					var a = r.anchorOffset,
						i = r.focusNode;
					r = r.focusOffset;
					try {
						n.nodeType, i.nodeType;
					} catch {
						n = null;
						break e;
					}
					var o = 0,
						l = -1,
						s = -1,
						u = 0,
						c = 0,
						f = e,
						p = null;
					t: for (;;) {
						for (
							var w;
							f !== n || (a !== 0 && f.nodeType !== 3) || (l = o + a),
								f !== i || (r !== 0 && f.nodeType !== 3) || (s = o + r),
								f.nodeType === 3 && (o += f.nodeValue.length),
								(w = f.firstChild) !== null;

						)
							(p = f), (f = w);
						for (;;) {
							if (f === e) break t;
							if (
								(p === n && ++u === a && (l = o),
								p === i && ++c === r && (s = o),
								(w = f.nextSibling) !== null)
							)
								break;
							(f = p), (p = f.parentNode);
						}
						f = w;
					}
					n = l === -1 || s === -1 ? null : { start: l, end: s };
				} else n = null;
			}
		n = n || { start: 0, end: 0 };
	} else n = null;
	for (ms = { focusedElem: e, selectionRange: n }, so = !1, I = t; I !== null; )
		if (((t = I), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
			(e.return = t), (I = e);
		else
			for (; I !== null; ) {
				t = I;
				try {
					var x = t.alternate;
					if (t.flags & 1024)
						switch (t.tag) {
							case 0:
							case 11:
							case 15:
								break;
							case 1:
								if (x !== null) {
									var y = x.memoizedProps,
										C = x.memoizedState,
										h = t.stateNode,
										m = h.getSnapshotBeforeUpdate(
											t.elementType === t.type ? y : Nt(t.type, y),
											C,
										);
									h.__reactInternalSnapshotBeforeUpdate = m;
								}
								break;
							case 3:
								var v = t.stateNode.containerInfo;
								v.nodeType === 1
									? (v.textContent = "")
									: v.nodeType === 9 &&
									  v.documentElement &&
									  v.removeChild(v.documentElement);
								break;
							case 5:
							case 6:
							case 4:
							case 17:
								break;
							default:
								throw Error(L(163));
						}
				} catch (E) {
					Ce(t, t.return, E);
				}
				if (((e = t.sibling), e !== null)) {
					(e.return = t.return), (I = e);
					break;
				}
				I = t.return;
			}
	return (x = _f), (_f = !1), x;
}
function Sa(e, t, n) {
	var r = t.updateQueue;
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var a = (r = r.next);
		do {
			if ((a.tag & e) === e) {
				var i = a.destroy;
				(a.destroy = void 0), i !== void 0 && Ts(t, n, i);
			}
			a = a.next;
		} while (a !== r);
	}
}
function Wo(e, t) {
	if (
		((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
	) {
		var n = (t = t.next);
		do {
			if ((n.tag & e) === e) {
				var r = n.create;
				n.destroy = r();
			}
			n = n.next;
		} while (n !== t);
	}
}
function Ls(e) {
	var t = e.ref;
	if (t !== null) {
		var n = e.stateNode;
		switch (e.tag) {
			case 5:
				e = n;
				break;
			default:
				e = n;
		}
		typeof t == "function" ? t(e) : (t.current = e);
	}
}
function zm(e) {
	var t = e.alternate;
	t !== null && ((e.alternate = null), zm(t)),
		(e.child = null),
		(e.deletions = null),
		(e.sibling = null),
		e.tag === 5 &&
			((t = e.stateNode),
			t !== null &&
				(delete t[Ft], delete t[Aa], delete t[gs], delete t[v0], delete t[g0])),
		(e.stateNode = null),
		(e.return = null),
		(e.dependencies = null),
		(e.memoizedProps = null),
		(e.memoizedState = null),
		(e.pendingProps = null),
		(e.stateNode = null),
		(e.updateQueue = null);
}
function Im(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Tf(e) {
	e: for (;;) {
		for (; e.sibling === null; ) {
			if (e.return === null || Im(e.return)) return null;
			e = e.return;
		}
		for (
			e.sibling.return = e.return, e = e.sibling;
			e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

		) {
			if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
			(e.child.return = e), (e = e.child);
		}
		if (!(e.flags & 2)) return e.stateNode;
	}
}
function Rs(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode),
			t
				? n.nodeType === 8
					? n.parentNode.insertBefore(e, t)
					: n.insertBefore(e, t)
				: (n.nodeType === 8
						? ((t = n.parentNode), t.insertBefore(e, n))
						: ((t = n), t.appendChild(e)),
				  (n = n._reactRootContainer),
				  n != null || t.onclick !== null || (t.onclick = fo));
	else if (r !== 4 && ((e = e.child), e !== null))
		for (Rs(e, t, n), e = e.sibling; e !== null; ) Rs(e, t, n), (e = e.sibling);
}
function Os(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
	else if (r !== 4 && ((e = e.child), e !== null))
		for (Os(e, t, n), e = e.sibling; e !== null; ) Os(e, t, n), (e = e.sibling);
}
var He = null,
	Pt = !1;
function ln(e, t, n) {
	for (n = n.child; n !== null; ) Dm(e, t, n), (n = n.sibling);
}
function Dm(e, t, n) {
	if (Ut && typeof Ut.onCommitFiberUnmount == "function")
		try {
			Ut.onCommitFiberUnmount(Do, n);
		} catch {}
	switch (n.tag) {
		case 5:
			Ke || xr(n, t);
		case 6:
			var r = He,
				a = Pt;
			(He = null),
				ln(e, t, n),
				(He = r),
				(Pt = a),
				He !== null &&
					(Pt
						? ((e = He),
						  (n = n.stateNode),
						  e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
						: He.removeChild(n.stateNode));
			break;
		case 18:
			He !== null &&
				(Pt
					? ((e = He),
					  (n = n.stateNode),
					  e.nodeType === 8
							? jl(e.parentNode, n)
							: e.nodeType === 1 && jl(e, n),
					  Oa(e))
					: jl(He, n.stateNode));
			break;
		case 4:
			(r = He),
				(a = Pt),
				(He = n.stateNode.containerInfo),
				(Pt = !0),
				ln(e, t, n),
				(He = r),
				(Pt = a);
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (
				!Ke &&
				((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
			) {
				a = r = r.next;
				do {
					var i = a,
						o = i.destroy;
					(i = i.tag),
						o !== void 0 && (i & 2 || i & 4) && Ts(n, t, o),
						(a = a.next);
				} while (a !== r);
			}
			ln(e, t, n);
			break;
		case 1:
			if (
				!Ke &&
				(xr(n, t),
				(r = n.stateNode),
				typeof r.componentWillUnmount == "function")
			)
				try {
					(r.props = n.memoizedProps),
						(r.state = n.memoizedState),
						r.componentWillUnmount();
				} catch (l) {
					Ce(n, t, l);
				}
			ln(e, t, n);
			break;
		case 21:
			ln(e, t, n);
			break;
		case 22:
			n.mode & 1
				? ((Ke = (r = Ke) || n.memoizedState !== null), ln(e, t, n), (Ke = r))
				: ln(e, t, n);
			break;
		default:
			ln(e, t, n);
	}
}
function Lf(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var n = e.stateNode;
		n === null && (n = e.stateNode = new O0()),
			t.forEach(function (r) {
				var a = V0.bind(null, e, r);
				n.has(r) || (n.add(r), r.then(a, a));
			});
	}
}
function jt(e, t) {
	var n = t.deletions;
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var a = n[r];
			try {
				var i = e,
					o = t,
					l = o;
				e: for (; l !== null; ) {
					switch (l.tag) {
						case 5:
							(He = l.stateNode), (Pt = !1);
							break e;
						case 3:
							(He = l.stateNode.containerInfo), (Pt = !0);
							break e;
						case 4:
							(He = l.stateNode.containerInfo), (Pt = !0);
							break e;
					}
					l = l.return;
				}
				if (He === null) throw Error(L(160));
				Dm(i, o, a), (He = null), (Pt = !1);
				var s = a.alternate;
				s !== null && (s.return = null), (a.return = null);
			} catch (u) {
				Ce(a, t, u);
			}
		}
	if (t.subtreeFlags & 12854)
		for (t = t.child; t !== null; ) Am(t, e), (t = t.sibling);
}
function Am(e, t) {
	var n = e.alternate,
		r = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((jt(t, e), It(e), r & 4)) {
				try {
					Sa(3, e, e.return), Wo(3, e);
				} catch (y) {
					Ce(e, e.return, y);
				}
				try {
					Sa(5, e, e.return);
				} catch (y) {
					Ce(e, e.return, y);
				}
			}
			break;
		case 1:
			jt(t, e), It(e), r & 512 && n !== null && xr(n, n.return);
			break;
		case 5:
			if (
				(jt(t, e),
				It(e),
				r & 512 && n !== null && xr(n, n.return),
				e.flags & 32)
			) {
				var a = e.stateNode;
				try {
					_a(a, "");
				} catch (y) {
					Ce(e, e.return, y);
				}
			}
			if (r & 4 && ((a = e.stateNode), a != null)) {
				var i = e.memoizedProps,
					o = n !== null ? n.memoizedProps : i,
					l = e.type,
					s = e.updateQueue;
				if (((e.updateQueue = null), s !== null))
					try {
						l === "input" && i.type === "radio" && i.name != null && op(a, i),
							rs(l, o);
						var u = rs(l, i);
						for (o = 0; o < s.length; o += 2) {
							var c = s[o],
								f = s[o + 1];
							c === "style"
								? fp(a, f)
								: c === "dangerouslySetInnerHTML"
								? up(a, f)
								: c === "children"
								? _a(a, f)
								: du(a, c, f, u);
						}
						switch (l) {
							case "input":
								Zl(a, i);
								break;
							case "textarea":
								lp(a, i);
								break;
							case "select":
								var p = a._wrapperState.wasMultiple;
								a._wrapperState.wasMultiple = !!i.multiple;
								var w = i.value;
								w != null
									? jr(a, !!i.multiple, w, !1)
									: p !== !!i.multiple &&
									  (i.defaultValue != null
											? jr(a, !!i.multiple, i.defaultValue, !0)
											: jr(a, !!i.multiple, i.multiple ? [] : "", !1));
						}
						a[Aa] = i;
					} catch (y) {
						Ce(e, e.return, y);
					}
			}
			break;
		case 6:
			if ((jt(t, e), It(e), r & 4)) {
				if (e.stateNode === null) throw Error(L(162));
				(a = e.stateNode), (i = e.memoizedProps);
				try {
					a.nodeValue = i;
				} catch (y) {
					Ce(e, e.return, y);
				}
			}
			break;
		case 3:
			if (
				(jt(t, e), It(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
			)
				try {
					Oa(t.containerInfo);
				} catch (y) {
					Ce(e, e.return, y);
				}
			break;
		case 4:
			jt(t, e), It(e);
			break;
		case 13:
			jt(t, e),
				It(e),
				(a = e.child),
				a.flags & 8192 &&
					((i = a.memoizedState !== null),
					(a.stateNode.isHidden = i),
					!i ||
						(a.alternate !== null && a.alternate.memoizedState !== null) ||
						(Wu = Pe())),
				r & 4 && Lf(e);
			break;
		case 22:
			if (
				((c = n !== null && n.memoizedState !== null),
				e.mode & 1 ? ((Ke = (u = Ke) || c), jt(t, e), (Ke = u)) : jt(t, e),
				It(e),
				r & 8192)
			) {
				if (
					((u = e.memoizedState !== null),
					(e.stateNode.isHidden = u) && !c && e.mode & 1)
				)
					for (I = e, c = e.child; c !== null; ) {
						for (f = I = c; I !== null; ) {
							switch (((p = I), (w = p.child), p.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									Sa(4, p, p.return);
									break;
								case 1:
									xr(p, p.return);
									var x = p.stateNode;
									if (typeof x.componentWillUnmount == "function") {
										(r = p), (n = p.return);
										try {
											(t = r),
												(x.props = t.memoizedProps),
												(x.state = t.memoizedState),
												x.componentWillUnmount();
										} catch (y) {
											Ce(r, n, y);
										}
									}
									break;
								case 5:
									xr(p, p.return);
									break;
								case 22:
									if (p.memoizedState !== null) {
										Of(f);
										continue;
									}
							}
							w !== null ? ((w.return = p), (I = w)) : Of(f);
						}
						c = c.sibling;
					}
				e: for (c = null, f = e; ; ) {
					if (f.tag === 5) {
						if (c === null) {
							c = f;
							try {
								(a = f.stateNode),
									u
										? ((i = a.style),
										  typeof i.setProperty == "function"
												? i.setProperty("display", "none", "important")
												: (i.display = "none"))
										: ((l = f.stateNode),
										  (s = f.memoizedProps.style),
										  (o =
												s != null && s.hasOwnProperty("display")
													? s.display
													: null),
										  (l.style.display = cp("display", o)));
							} catch (y) {
								Ce(e, e.return, y);
							}
						}
					} else if (f.tag === 6) {
						if (c === null)
							try {
								f.stateNode.nodeValue = u ? "" : f.memoizedProps;
							} catch (y) {
								Ce(e, e.return, y);
							}
					} else if (
						((f.tag !== 22 && f.tag !== 23) ||
							f.memoizedState === null ||
							f === e) &&
						f.child !== null
					) {
						(f.child.return = f), (f = f.child);
						continue;
					}
					if (f === e) break e;
					for (; f.sibling === null; ) {
						if (f.return === null || f.return === e) break e;
						c === f && (c = null), (f = f.return);
					}
					c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
				}
			}
			break;
		case 19:
			jt(t, e), It(e), r & 4 && Lf(e);
			break;
		case 21:
			break;
		default:
			jt(t, e), It(e);
	}
}
function It(e) {
	var t = e.flags;
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null; ) {
					if (Im(n)) {
						var r = n;
						break e;
					}
					n = n.return;
				}
				throw Error(L(160));
			}
			switch (r.tag) {
				case 5:
					var a = r.stateNode;
					r.flags & 32 && (_a(a, ""), (r.flags &= -33));
					var i = Tf(e);
					Os(e, i, a);
					break;
				case 3:
				case 4:
					var o = r.stateNode.containerInfo,
						l = Tf(e);
					Rs(e, l, o);
					break;
				default:
					throw Error(L(161));
			}
		} catch (s) {
			Ce(e, e.return, s);
		}
		e.flags &= -3;
	}
	t & 4096 && (e.flags &= -4097);
}
function z0(e, t, n) {
	(I = e), Fm(e);
}
function Fm(e, t, n) {
	for (var r = (e.mode & 1) !== 0; I !== null; ) {
		var a = I,
			i = a.child;
		if (a.tag === 22 && r) {
			var o = a.memoizedState !== null || Pi;
			if (!o) {
				var l = a.alternate,
					s = (l !== null && l.memoizedState !== null) || Ke;
				l = Pi;
				var u = Ke;
				if (((Pi = o), (Ke = s) && !u))
					for (I = a; I !== null; )
						(o = I),
							(s = o.child),
							o.tag === 22 && o.memoizedState !== null
								? Mf(a)
								: s !== null
								? ((s.return = o), (I = s))
								: Mf(a);
				for (; i !== null; ) (I = i), Fm(i), (i = i.sibling);
				(I = a), (Pi = l), (Ke = u);
			}
			Rf(e);
		} else
			a.subtreeFlags & 8772 && i !== null ? ((i.return = a), (I = i)) : Rf(e);
	}
}
function Rf(e) {
	for (; I !== null; ) {
		var t = I;
		if (t.flags & 8772) {
			var n = t.alternate;
			try {
				if (t.flags & 8772)
					switch (t.tag) {
						case 0:
						case 11:
						case 15:
							Ke || Wo(5, t);
							break;
						case 1:
							var r = t.stateNode;
							if (t.flags & 4 && !Ke)
								if (n === null) r.componentDidMount();
								else {
									var a =
										t.elementType === t.type
											? n.memoizedProps
											: Nt(t.type, n.memoizedProps);
									r.componentDidUpdate(
										a,
										n.memoizedState,
										r.__reactInternalSnapshotBeforeUpdate,
									);
								}
							var i = t.updateQueue;
							i !== null && vf(t, i, r);
							break;
						case 3:
							var o = t.updateQueue;
							if (o !== null) {
								if (((n = null), t.child !== null))
									switch (t.child.tag) {
										case 5:
											n = t.child.stateNode;
											break;
										case 1:
											n = t.child.stateNode;
									}
								vf(t, o, n);
							}
							break;
						case 5:
							var l = t.stateNode;
							if (n === null && t.flags & 4) {
								n = l;
								var s = t.memoizedProps;
								switch (t.type) {
									case "button":
									case "input":
									case "select":
									case "textarea":
										s.autoFocus && n.focus();
										break;
									case "img":
										s.src && (n.src = s.src);
								}
							}
							break;
						case 6:
							break;
						case 4:
							break;
						case 12:
							break;
						case 13:
							if (t.memoizedState === null) {
								var u = t.alternate;
								if (u !== null) {
									var c = u.memoizedState;
									if (c !== null) {
										var f = c.dehydrated;
										f !== null && Oa(f);
									}
								}
							}
							break;
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25:
							break;
						default:
							throw Error(L(163));
					}
				Ke || (t.flags & 512 && Ls(t));
			} catch (p) {
				Ce(t, t.return, p);
			}
		}
		if (t === e) {
			I = null;
			break;
		}
		if (((n = t.sibling), n !== null)) {
			(n.return = t.return), (I = n);
			break;
		}
		I = t.return;
	}
}
function Of(e) {
	for (; I !== null; ) {
		var t = I;
		if (t === e) {
			I = null;
			break;
		}
		var n = t.sibling;
		if (n !== null) {
			(n.return = t.return), (I = n);
			break;
		}
		I = t.return;
	}
}
function Mf(e) {
	for (; I !== null; ) {
		var t = I;
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return;
					try {
						Wo(4, t);
					} catch (s) {
						Ce(t, n, s);
					}
					break;
				case 1:
					var r = t.stateNode;
					if (typeof r.componentDidMount == "function") {
						var a = t.return;
						try {
							r.componentDidMount();
						} catch (s) {
							Ce(t, a, s);
						}
					}
					var i = t.return;
					try {
						Ls(t);
					} catch (s) {
						Ce(t, i, s);
					}
					break;
				case 5:
					var o = t.return;
					try {
						Ls(t);
					} catch (s) {
						Ce(t, o, s);
					}
			}
		} catch (s) {
			Ce(t, t.return, s);
		}
		if (t === e) {
			I = null;
			break;
		}
		var l = t.sibling;
		if (l !== null) {
			(l.return = t.return), (I = l);
			break;
		}
		I = t.return;
	}
}
var I0 = Math.ceil,
	Eo = tn.ReactCurrentDispatcher,
	Vu = tn.ReactCurrentOwner,
	Et = tn.ReactCurrentBatchConfig,
	re = 0,
	Ae = null,
	Le = null,
	Ve = 0,
	ut = 0,
	Sr = Rn(0),
	Oe = 0,
	Ba = null,
	Jn = 0,
	Yo = 0,
	Bu = 0,
	ka = null,
	rt = null,
	Wu = 0,
	Fr = 1 / 0,
	Vt = null,
	bo = !1,
	Ms = null,
	kn = null,
	_i = !1,
	hn = null,
	Co = 0,
	Ea = 0,
	zs = null,
	Ji = -1,
	Zi = 0;
function et() {
	return re & 6 ? Pe() : Ji !== -1 ? Ji : (Ji = Pe());
}
function En(e) {
	return e.mode & 1
		? re & 2 && Ve !== 0
			? Ve & -Ve
			: w0.transition !== null
			? (Zi === 0 && (Zi = Ep()), Zi)
			: ((e = le),
			  e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Tp(e.type))),
			  e)
		: 1;
}
function Ot(e, t, n, r) {
	if (50 < Ea) throw ((Ea = 0), (zs = null), Error(L(185)));
	ei(e, n, r),
		(!(re & 2) || e !== Ae) &&
			(e === Ae && (!(re & 2) && (Yo |= n), Oe === 4 && pn(e, Ve)),
			lt(e, r),
			n === 1 && re === 0 && !(t.mode & 1) && ((Fr = Pe() + 500), Ho && On()));
}
function lt(e, t) {
	var n = e.callbackNode;
	wv(e, t);
	var r = lo(e, e === Ae ? Ve : 0);
	if (r === 0)
		n !== null && Hc(n), (e.callbackNode = null), (e.callbackPriority = 0);
	else if (((t = r & -r), e.callbackPriority !== t)) {
		if ((n != null && Hc(n), t === 1))
			e.tag === 0 ? y0(zf.bind(null, e)) : Xp(zf.bind(null, e)),
				m0(function () {
					!(re & 6) && On();
				}),
				(n = null);
		else {
			switch (bp(r)) {
				case 1:
					n = gu;
					break;
				case 4:
					n = Sp;
					break;
				case 16:
					n = oo;
					break;
				case 536870912:
					n = kp;
					break;
				default:
					n = oo;
			}
			n = Qm(n, $m.bind(null, e));
		}
		(e.callbackPriority = t), (e.callbackNode = n);
	}
}
function $m(e, t) {
	if (((Ji = -1), (Zi = 0), re & 6)) throw Error(L(327));
	var n = e.callbackNode;
	if (Lr() && e.callbackNode !== n) return null;
	var r = lo(e, e === Ae ? Ve : 0);
	if (r === 0) return null;
	if (r & 30 || r & e.expiredLanes || t) t = jo(e, r);
	else {
		t = r;
		var a = re;
		re |= 2;
		var i = Hm();
		(Ae !== e || Ve !== t) && ((Vt = null), (Fr = Pe() + 500), Wn(e, t));
		do
			try {
				F0();
				break;
			} catch (l) {
				Um(e, l);
			}
		while (!0);
		Tu(),
			(Eo.current = i),
			(re = a),
			Le !== null ? (t = 0) : ((Ae = null), (Ve = 0), (t = Oe));
	}
	if (t !== 0) {
		if (
			(t === 2 && ((a = ss(e)), a !== 0 && ((r = a), (t = Is(e, a)))), t === 1)
		)
			throw ((n = Ba), Wn(e, 0), pn(e, r), lt(e, Pe()), n);
		if (t === 6) pn(e, r);
		else {
			if (
				((a = e.current.alternate),
				!(r & 30) &&
					!D0(a) &&
					((t = jo(e, r)),
					t === 2 && ((i = ss(e)), i !== 0 && ((r = i), (t = Is(e, i)))),
					t === 1))
			)
				throw ((n = Ba), Wn(e, 0), pn(e, r), lt(e, Pe()), n);
			switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
				case 0:
				case 1:
					throw Error(L(345));
				case 2:
					Dn(e, rt, Vt);
					break;
				case 3:
					if (
						(pn(e, r), (r & 130023424) === r && ((t = Wu + 500 - Pe()), 10 < t))
					) {
						if (lo(e, 0) !== 0) break;
						if (((a = e.suspendedLanes), (a & r) !== r)) {
							et(), (e.pingedLanes |= e.suspendedLanes & a);
							break;
						}
						e.timeoutHandle = vs(Dn.bind(null, e, rt, Vt), t);
						break;
					}
					Dn(e, rt, Vt);
					break;
				case 4:
					if ((pn(e, r), (r & 4194240) === r)) break;
					for (t = e.eventTimes, a = -1; 0 < r; ) {
						var o = 31 - Rt(r);
						(i = 1 << o), (o = t[o]), o > a && (a = o), (r &= ~i);
					}
					if (
						((r = a),
						(r = Pe() - r),
						(r =
							(120 > r
								? 120
								: 480 > r
								? 480
								: 1080 > r
								? 1080
								: 1920 > r
								? 1920
								: 3e3 > r
								? 3e3
								: 4320 > r
								? 4320
								: 1960 * I0(r / 1960)) - r),
						10 < r)
					) {
						e.timeoutHandle = vs(Dn.bind(null, e, rt, Vt), r);
						break;
					}
					Dn(e, rt, Vt);
					break;
				case 5:
					Dn(e, rt, Vt);
					break;
				default:
					throw Error(L(329));
			}
		}
	}
	return lt(e, Pe()), e.callbackNode === n ? $m.bind(null, e) : null;
}
function Is(e, t) {
	var n = ka;
	return (
		e.current.memoizedState.isDehydrated && (Wn(e, t).flags |= 256),
		(e = jo(e, t)),
		e !== 2 && ((t = rt), (rt = n), t !== null && Ds(t)),
		e
	);
}
function Ds(e) {
	rt === null ? (rt = e) : rt.push.apply(rt, e);
}
function D0(e) {
	for (var t = e; ; ) {
		if (t.flags & 16384) {
			var n = t.updateQueue;
			if (n !== null && ((n = n.stores), n !== null))
				for (var r = 0; r < n.length; r++) {
					var a = n[r],
						i = a.getSnapshot;
					a = a.value;
					try {
						if (!Mt(i(), a)) return !1;
					} catch {
						return !1;
					}
				}
		}
		if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
			(n.return = t), (t = n);
		else {
			if (t === e) break;
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === e) return !0;
				t = t.return;
			}
			(t.sibling.return = t.return), (t = t.sibling);
		}
	}
	return !0;
}
function pn(e, t) {
	for (
		t &= ~Bu,
			t &= ~Yo,
			e.suspendedLanes |= t,
			e.pingedLanes &= ~t,
			e = e.expirationTimes;
		0 < t;

	) {
		var n = 31 - Rt(t),
			r = 1 << n;
		(e[n] = -1), (t &= ~r);
	}
}
function zf(e) {
	if (re & 6) throw Error(L(327));
	Lr();
	var t = lo(e, 0);
	if (!(t & 1)) return lt(e, Pe()), null;
	var n = jo(e, t);
	if (e.tag !== 0 && n === 2) {
		var r = ss(e);
		r !== 0 && ((t = r), (n = Is(e, r)));
	}
	if (n === 1) throw ((n = Ba), Wn(e, 0), pn(e, t), lt(e, Pe()), n);
	if (n === 6) throw Error(L(345));
	return (
		(e.finishedWork = e.current.alternate),
		(e.finishedLanes = t),
		Dn(e, rt, Vt),
		lt(e, Pe()),
		null
	);
}
function Yu(e, t) {
	var n = re;
	re |= 1;
	try {
		return e(t);
	} finally {
		(re = n), re === 0 && ((Fr = Pe() + 500), Ho && On());
	}
}
function Zn(e) {
	hn !== null && hn.tag === 0 && !(re & 6) && Lr();
	var t = re;
	re |= 1;
	var n = Et.transition,
		r = le;
	try {
		if (((Et.transition = null), (le = 1), e)) return e();
	} finally {
		(le = r), (Et.transition = n), (re = t), !(re & 6) && On();
	}
}
function Qu() {
	(ut = Sr.current), pe(Sr);
}
function Wn(e, t) {
	(e.finishedWork = null), (e.finishedLanes = 0);
	var n = e.timeoutHandle;
	if ((n !== -1 && ((e.timeoutHandle = -1), p0(n)), Le !== null))
		for (n = Le.return; n !== null; ) {
			var r = n;
			switch ((Nu(r), r.tag)) {
				case 1:
					(r = r.type.childContextTypes), r != null && po();
					break;
				case 3:
					Dr(), pe(it), pe(Xe), Iu();
					break;
				case 5:
					zu(r);
					break;
				case 4:
					Dr();
					break;
				case 13:
					pe(ke);
					break;
				case 19:
					pe(ke);
					break;
				case 10:
					Lu(r.type._context);
					break;
				case 22:
				case 23:
					Qu();
			}
			n = n.return;
		}
	if (
		((Ae = e),
		(Le = e = bn(e.current, null)),
		(Ve = ut = t),
		(Oe = 0),
		(Ba = null),
		(Bu = Yo = Jn = 0),
		(rt = ka = null),
		Fn !== null)
	) {
		for (t = 0; t < Fn.length; t++)
			if (((n = Fn[t]), (r = n.interleaved), r !== null)) {
				n.interleaved = null;
				var a = r.next,
					i = n.pending;
				if (i !== null) {
					var o = i.next;
					(i.next = a), (r.next = o);
				}
				n.pending = r;
			}
		Fn = null;
	}
	return e;
}
function Um(e, t) {
	do {
		var n = Le;
		try {
			if ((Tu(), (Ki.current = ko), So)) {
				for (var r = Ee.memoizedState; r !== null; ) {
					var a = r.queue;
					a !== null && (a.pending = null), (r = r.next);
				}
				So = !1;
			}
			if (
				((Gn = 0),
				(De = Re = Ee = null),
				(xa = !1),
				(Ua = 0),
				(Vu.current = null),
				n === null || n.return === null)
			) {
				(Oe = 1), (Ba = t), (Le = null);
				break;
			}
			e: {
				var i = e,
					o = n.return,
					l = n,
					s = t;
				if (
					((t = Ve),
					(l.flags |= 32768),
					s !== null && typeof s == "object" && typeof s.then == "function")
				) {
					var u = s,
						c = l,
						f = c.tag;
					if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
						var p = c.alternate;
						p
							? ((c.updateQueue = p.updateQueue),
							  (c.memoizedState = p.memoizedState),
							  (c.lanes = p.lanes))
							: ((c.updateQueue = null), (c.memoizedState = null));
					}
					var w = kf(o);
					if (w !== null) {
						(w.flags &= -257),
							Ef(w, o, l, i, t),
							w.mode & 1 && Sf(i, u, t),
							(t = w),
							(s = u);
						var x = t.updateQueue;
						if (x === null) {
							var y = new Set();
							y.add(s), (t.updateQueue = y);
						} else x.add(s);
						break e;
					} else {
						if (!(t & 1)) {
							Sf(i, u, t), Ku();
							break e;
						}
						s = Error(L(426));
					}
				} else if (we && l.mode & 1) {
					var C = kf(o);
					if (C !== null) {
						!(C.flags & 65536) && (C.flags |= 256),
							Ef(C, o, l, i, t),
							Pu(Ar(s, l));
						break e;
					}
				}
				(i = s = Ar(s, l)),
					Oe !== 4 && (Oe = 2),
					ka === null ? (ka = [i]) : ka.push(i),
					(i = o);
				do {
					switch (i.tag) {
						case 3:
							(i.flags |= 65536), (t &= -t), (i.lanes |= t);
							var h = bm(i, s, t);
							hf(i, h);
							break e;
						case 1:
							l = s;
							var m = i.type,
								v = i.stateNode;
							if (
								!(i.flags & 128) &&
								(typeof m.getDerivedStateFromError == "function" ||
									(v !== null &&
										typeof v.componentDidCatch == "function" &&
										(kn === null || !kn.has(v))))
							) {
								(i.flags |= 65536), (t &= -t), (i.lanes |= t);
								var E = Cm(i, l, t);
								hf(i, E);
								break e;
							}
					}
					i = i.return;
				} while (i !== null);
			}
			Bm(n);
		} catch (P) {
			(t = P), Le === n && n !== null && (Le = n = n.return);
			continue;
		}
		break;
	} while (!0);
}
function Hm() {
	var e = Eo.current;
	return (Eo.current = ko), e === null ? ko : e;
}
function Ku() {
	(Oe === 0 || Oe === 3 || Oe === 2) && (Oe = 4),
		Ae === null || (!(Jn & 268435455) && !(Yo & 268435455)) || pn(Ae, Ve);
}
function jo(e, t) {
	var n = re;
	re |= 2;
	var r = Hm();
	(Ae !== e || Ve !== t) && ((Vt = null), Wn(e, t));
	do
		try {
			A0();
			break;
		} catch (a) {
			Um(e, a);
		}
	while (!0);
	if ((Tu(), (re = n), (Eo.current = r), Le !== null)) throw Error(L(261));
	return (Ae = null), (Ve = 0), Oe;
}
function A0() {
	for (; Le !== null; ) Vm(Le);
}
function F0() {
	for (; Le !== null && !cv(); ) Vm(Le);
}
function Vm(e) {
	var t = Ym(e.alternate, e, ut);
	(e.memoizedProps = e.pendingProps),
		t === null ? Bm(e) : (Le = t),
		(Vu.current = null);
}
function Bm(e) {
	var t = e;
	do {
		var n = t.alternate;
		if (((e = t.return), t.flags & 32768)) {
			if (((n = R0(n, t)), n !== null)) {
				(n.flags &= 32767), (Le = n);
				return;
			}
			if (e !== null)
				(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
			else {
				(Oe = 6), (Le = null);
				return;
			}
		} else if (((n = L0(n, t, ut)), n !== null)) {
			Le = n;
			return;
		}
		if (((t = t.sibling), t !== null)) {
			Le = t;
			return;
		}
		Le = t = e;
	} while (t !== null);
	Oe === 0 && (Oe = 5);
}
function Dn(e, t, n) {
	var r = le,
		a = Et.transition;
	try {
		(Et.transition = null), (le = 1), $0(e, t, n, r);
	} finally {
		(Et.transition = a), (le = r);
	}
	return null;
}
function $0(e, t, n, r) {
	do Lr();
	while (hn !== null);
	if (re & 6) throw Error(L(327));
	n = e.finishedWork;
	var a = e.finishedLanes;
	if (n === null) return null;
	if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
		throw Error(L(177));
	(e.callbackNode = null), (e.callbackPriority = 0);
	var i = n.lanes | n.childLanes;
	if (
		(xv(e, i),
		e === Ae && ((Le = Ae = null), (Ve = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			_i ||
			((_i = !0),
			Qm(oo, function () {
				return Lr(), null;
			})),
		(i = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || i)
	) {
		(i = Et.transition), (Et.transition = null);
		var o = le;
		le = 1;
		var l = re;
		(re |= 4),
			(Vu.current = null),
			M0(e, n),
			Am(n, e),
			o0(ms),
			(so = !!ps),
			(ms = ps = null),
			(e.current = n),
			z0(n),
			fv(),
			(re = l),
			(le = o),
			(Et.transition = i);
	} else e.current = n;
	if (
		(_i && ((_i = !1), (hn = e), (Co = a)),
		(i = e.pendingLanes),
		i === 0 && (kn = null),
		mv(n.stateNode),
		lt(e, Pe()),
		t !== null)
	)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++)
			(a = t[n]), r(a.value, { componentStack: a.stack, digest: a.digest });
	if (bo) throw ((bo = !1), (e = Ms), (Ms = null), e);
	return (
		Co & 1 && e.tag !== 0 && Lr(),
		(i = e.pendingLanes),
		i & 1 ? (e === zs ? Ea++ : ((Ea = 0), (zs = e))) : (Ea = 0),
		On(),
		null
	);
}
function Lr() {
	if (hn !== null) {
		var e = bp(Co),
			t = Et.transition,
			n = le;
		try {
			if (((Et.transition = null), (le = 16 > e ? 16 : e), hn === null))
				var r = !1;
			else {
				if (((e = hn), (hn = null), (Co = 0), re & 6)) throw Error(L(331));
				var a = re;
				for (re |= 4, I = e.current; I !== null; ) {
					var i = I,
						o = i.child;
					if (I.flags & 16) {
						var l = i.deletions;
						if (l !== null) {
							for (var s = 0; s < l.length; s++) {
								var u = l[s];
								for (I = u; I !== null; ) {
									var c = I;
									switch (c.tag) {
										case 0:
										case 11:
										case 15:
											Sa(8, c, i);
									}
									var f = c.child;
									if (f !== null) (f.return = c), (I = f);
									else
										for (; I !== null; ) {
											c = I;
											var p = c.sibling,
												w = c.return;
											if ((zm(c), c === u)) {
												I = null;
												break;
											}
											if (p !== null) {
												(p.return = w), (I = p);
												break;
											}
											I = w;
										}
								}
							}
							var x = i.alternate;
							if (x !== null) {
								var y = x.child;
								if (y !== null) {
									x.child = null;
									do {
										var C = y.sibling;
										(y.sibling = null), (y = C);
									} while (y !== null);
								}
							}
							I = i;
						}
					}
					if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (I = o);
					else
						e: for (; I !== null; ) {
							if (((i = I), i.flags & 2048))
								switch (i.tag) {
									case 0:
									case 11:
									case 15:
										Sa(9, i, i.return);
								}
							var h = i.sibling;
							if (h !== null) {
								(h.return = i.return), (I = h);
								break e;
							}
							I = i.return;
						}
				}
				var m = e.current;
				for (I = m; I !== null; ) {
					o = I;
					var v = o.child;
					if (o.subtreeFlags & 2064 && v !== null) (v.return = o), (I = v);
					else
						e: for (o = m; I !== null; ) {
							if (((l = I), l.flags & 2048))
								try {
									switch (l.tag) {
										case 0:
										case 11:
										case 15:
											Wo(9, l);
									}
								} catch (P) {
									Ce(l, l.return, P);
								}
							if (l === o) {
								I = null;
								break e;
							}
							var E = l.sibling;
							if (E !== null) {
								(E.return = l.return), (I = E);
								break e;
							}
							I = l.return;
						}
				}
				if (
					((re = a), On(), Ut && typeof Ut.onPostCommitFiberRoot == "function")
				)
					try {
						Ut.onPostCommitFiberRoot(Do, e);
					} catch {}
				r = !0;
			}
			return r;
		} finally {
			(le = n), (Et.transition = t);
		}
	}
	return !1;
}
function If(e, t, n) {
	(t = Ar(n, t)),
		(t = bm(e, t, 1)),
		(e = Sn(e, t, 1)),
		(t = et()),
		e !== null && (ei(e, 1, t), lt(e, t));
}
function Ce(e, t, n) {
	if (e.tag === 3) If(e, e, n);
	else
		for (; t !== null; ) {
			if (t.tag === 3) {
				If(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (
					typeof t.type.getDerivedStateFromError == "function" ||
					(typeof r.componentDidCatch == "function" &&
						(kn === null || !kn.has(r)))
				) {
					(e = Ar(n, e)),
						(e = Cm(t, e, 1)),
						(t = Sn(t, e, 1)),
						(e = et()),
						t !== null && (ei(t, 1, e), lt(t, e));
					break;
				}
			}
			t = t.return;
		}
}
function U0(e, t, n) {
	var r = e.pingCache;
	r !== null && r.delete(t),
		(t = et()),
		(e.pingedLanes |= e.suspendedLanes & n),
		Ae === e &&
			(Ve & n) === n &&
			(Oe === 4 || (Oe === 3 && (Ve & 130023424) === Ve && 500 > Pe() - Wu)
				? Wn(e, 0)
				: (Bu |= n)),
		lt(e, t);
}
function Wm(e, t) {
	t === 0 &&
		(e.mode & 1
			? ((t = wi), (wi <<= 1), !(wi & 130023424) && (wi = 4194304))
			: (t = 1));
	var n = et();
	(e = Gt(e, t)), e !== null && (ei(e, t, n), lt(e, n));
}
function H0(e) {
	var t = e.memoizedState,
		n = 0;
	t !== null && (n = t.retryLane), Wm(e, n);
}
function V0(e, t) {
	var n = 0;
	switch (e.tag) {
		case 13:
			var r = e.stateNode,
				a = e.memoizedState;
			a !== null && (n = a.retryLane);
			break;
		case 19:
			r = e.stateNode;
			break;
		default:
			throw Error(L(314));
	}
	r !== null && r.delete(t), Wm(e, n);
}
var Ym;
Ym = function (e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || it.current) at = !0;
		else {
			if (!(e.lanes & n) && !(t.flags & 128)) return (at = !1), T0(e, t, n);
			at = !!(e.flags & 131072);
		}
	else (at = !1), we && t.flags & 1048576 && Gp(t, vo, t.index);
	switch (((t.lanes = 0), t.tag)) {
		case 2:
			var r = t.type;
			Gi(e, t), (e = t.pendingProps);
			var a = Mr(t, Xe.current);
			Tr(t, n), (a = Au(null, t, r, e, a, n));
			var i = Fu();
			return (
				(t.flags |= 1),
				typeof a == "object" &&
				a !== null &&
				typeof a.render == "function" &&
				a.$$typeof === void 0
					? ((t.tag = 1),
					  (t.memoizedState = null),
					  (t.updateQueue = null),
					  ot(r) ? ((i = !0), mo(t)) : (i = !1),
					  (t.memoizedState =
							a.state !== null && a.state !== void 0 ? a.state : null),
					  Ou(t),
					  (a.updater = Bo),
					  (t.stateNode = a),
					  (a._reactInternals = t),
					  Es(t, r, e, n),
					  (t = js(null, t, r, !0, i, n)))
					: ((t.tag = 0), we && i && ju(t), Ze(null, t, a, n), (t = t.child)),
				t
			);
		case 16:
			r = t.elementType;
			e: {
				switch (
					(Gi(e, t),
					(e = t.pendingProps),
					(a = r._init),
					(r = a(r._payload)),
					(t.type = r),
					(a = t.tag = W0(r)),
					(e = Nt(r, e)),
					a)
				) {
					case 0:
						t = Cs(null, t, r, e, n);
						break e;
					case 1:
						t = jf(null, t, r, e, n);
						break e;
					case 11:
						t = bf(null, t, r, e, n);
						break e;
					case 14:
						t = Cf(null, t, r, Nt(r.type, e), n);
						break e;
				}
				throw Error(L(306, r, ""));
			}
			return t;
		case 0:
			return (
				(r = t.type),
				(a = t.pendingProps),
				(a = t.elementType === r ? a : Nt(r, a)),
				Cs(e, t, r, a, n)
			);
		case 1:
			return (
				(r = t.type),
				(a = t.pendingProps),
				(a = t.elementType === r ? a : Nt(r, a)),
				jf(e, t, r, a, n)
			);
		case 3:
			e: {
				if ((_m(t), e === null)) throw Error(L(387));
				(r = t.pendingProps),
					(i = t.memoizedState),
					(a = i.element),
					nm(e, t),
					wo(t, r, null, n);
				var o = t.memoizedState;
				if (((r = o.element), i.isDehydrated))
					if (
						((i = {
							element: r,
							isDehydrated: !1,
							cache: o.cache,
							pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
							transitions: o.transitions,
						}),
						(t.updateQueue.baseState = i),
						(t.memoizedState = i),
						t.flags & 256)
					) {
						(a = Ar(Error(L(423)), t)), (t = Nf(e, t, r, n, a));
						break e;
					} else if (r !== a) {
						(a = Ar(Error(L(424)), t)), (t = Nf(e, t, r, n, a));
						break e;
					} else
						for (
							ct = xn(t.stateNode.containerInfo.firstChild),
								dt = t,
								we = !0,
								Tt = null,
								n = em(t, null, r, n),
								t.child = n;
							n;

						)
							(n.flags = (n.flags & -3) | 4096), (n = n.sibling);
				else {
					if ((zr(), r === a)) {
						t = Jt(e, t, n);
						break e;
					}
					Ze(e, t, r, n);
				}
				t = t.child;
			}
			return t;
		case 5:
			return (
				rm(t),
				e === null && xs(t),
				(r = t.type),
				(a = t.pendingProps),
				(i = e !== null ? e.memoizedProps : null),
				(o = a.children),
				hs(r, a) ? (o = null) : i !== null && hs(r, i) && (t.flags |= 32),
				Pm(e, t),
				Ze(e, t, o, n),
				t.child
			);
		case 6:
			return e === null && xs(t), null;
		case 13:
			return Tm(e, t, n);
		case 4:
			return (
				Mu(t, t.stateNode.containerInfo),
				(r = t.pendingProps),
				e === null ? (t.child = Ir(t, null, r, n)) : Ze(e, t, r, n),
				t.child
			);
		case 11:
			return (
				(r = t.type),
				(a = t.pendingProps),
				(a = t.elementType === r ? a : Nt(r, a)),
				bf(e, t, r, a, n)
			);
		case 7:
			return Ze(e, t, t.pendingProps, n), t.child;
		case 8:
			return Ze(e, t, t.pendingProps.children, n), t.child;
		case 12:
			return Ze(e, t, t.pendingProps.children, n), t.child;
		case 10:
			e: {
				if (
					((r = t.type._context),
					(a = t.pendingProps),
					(i = t.memoizedProps),
					(o = a.value),
					ue(go, r._currentValue),
					(r._currentValue = o),
					i !== null)
				)
					if (Mt(i.value, o)) {
						if (i.children === a.children && !it.current) {
							t = Jt(e, t, n);
							break e;
						}
					} else
						for (i = t.child, i !== null && (i.return = t); i !== null; ) {
							var l = i.dependencies;
							if (l !== null) {
								o = i.child;
								for (var s = l.firstContext; s !== null; ) {
									if (s.context === r) {
										if (i.tag === 1) {
											(s = Qt(-1, n & -n)), (s.tag = 2);
											var u = i.updateQueue;
											if (u !== null) {
												u = u.shared;
												var c = u.pending;
												c === null
													? (s.next = s)
													: ((s.next = c.next), (c.next = s)),
													(u.pending = s);
											}
										}
										(i.lanes |= n),
											(s = i.alternate),
											s !== null && (s.lanes |= n),
											Ss(i.return, n, t),
											(l.lanes |= n);
										break;
									}
									s = s.next;
								}
							} else if (i.tag === 10) o = i.type === t.type ? null : i.child;
							else if (i.tag === 18) {
								if (((o = i.return), o === null)) throw Error(L(341));
								(o.lanes |= n),
									(l = o.alternate),
									l !== null && (l.lanes |= n),
									Ss(o, n, t),
									(o = i.sibling);
							} else o = i.child;
							if (o !== null) o.return = i;
							else
								for (o = i; o !== null; ) {
									if (o === t) {
										o = null;
										break;
									}
									if (((i = o.sibling), i !== null)) {
										(i.return = o.return), (o = i);
										break;
									}
									o = o.return;
								}
							i = o;
						}
				Ze(e, t, a.children, n), (t = t.child);
			}
			return t;
		case 9:
			return (
				(a = t.type),
				(r = t.pendingProps.children),
				Tr(t, n),
				(a = bt(a)),
				(r = r(a)),
				(t.flags |= 1),
				Ze(e, t, r, n),
				t.child
			);
		case 14:
			return (
				(r = t.type),
				(a = Nt(r, t.pendingProps)),
				(a = Nt(r.type, a)),
				Cf(e, t, r, a, n)
			);
		case 15:
			return jm(e, t, t.type, t.pendingProps, n);
		case 17:
			return (
				(r = t.type),
				(a = t.pendingProps),
				(a = t.elementType === r ? a : Nt(r, a)),
				Gi(e, t),
				(t.tag = 1),
				ot(r) ? ((e = !0), mo(t)) : (e = !1),
				Tr(t, n),
				Em(t, r, a),
				Es(t, r, a, n),
				js(null, t, r, !0, e, n)
			);
		case 19:
			return Lm(e, t, n);
		case 22:
			return Nm(e, t, n);
	}
	throw Error(L(156, t.tag));
};
function Qm(e, t) {
	return xp(e, t);
}
function B0(e, t, n, r) {
	(this.tag = e),
		(this.key = n),
		(this.sibling =
			this.child =
			this.return =
			this.stateNode =
			this.type =
			this.elementType =
				null),
		(this.index = 0),
		(this.ref = null),
		(this.pendingProps = t),
		(this.dependencies =
			this.memoizedState =
			this.updateQueue =
			this.memoizedProps =
				null),
		(this.mode = r),
		(this.subtreeFlags = this.flags = 0),
		(this.deletions = null),
		(this.childLanes = this.lanes = 0),
		(this.alternate = null);
}
function kt(e, t, n, r) {
	return new B0(e, t, n, r);
}
function Xu(e) {
	return (e = e.prototype), !(!e || !e.isReactComponent);
}
function W0(e) {
	if (typeof e == "function") return Xu(e) ? 1 : 0;
	if (e != null) {
		if (((e = e.$$typeof), e === mu)) return 11;
		if (e === hu) return 14;
	}
	return 2;
}
function bn(e, t) {
	var n = e.alternate;
	return (
		n === null
			? ((n = kt(e.tag, t, e.key, e.mode)),
			  (n.elementType = e.elementType),
			  (n.type = e.type),
			  (n.stateNode = e.stateNode),
			  (n.alternate = e),
			  (e.alternate = n))
			: ((n.pendingProps = t),
			  (n.type = e.type),
			  (n.flags = 0),
			  (n.subtreeFlags = 0),
			  (n.deletions = null)),
		(n.flags = e.flags & 14680064),
		(n.childLanes = e.childLanes),
		(n.lanes = e.lanes),
		(n.child = e.child),
		(n.memoizedProps = e.memoizedProps),
		(n.memoizedState = e.memoizedState),
		(n.updateQueue = e.updateQueue),
		(t = e.dependencies),
		(n.dependencies =
			t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
		(n.sibling = e.sibling),
		(n.index = e.index),
		(n.ref = e.ref),
		n
	);
}
function qi(e, t, n, r, a, i) {
	var o = 2;
	if (((r = e), typeof e == "function")) Xu(e) && (o = 1);
	else if (typeof e == "string") o = 5;
	else
		e: switch (e) {
			case fr:
				return Yn(n.children, a, i, t);
			case pu:
				(o = 8), (a |= 8);
				break;
			case Ql:
				return (
					(e = kt(12, n, t, a | 2)), (e.elementType = Ql), (e.lanes = i), e
				);
			case Kl:
				return (e = kt(13, n, t, a)), (e.elementType = Kl), (e.lanes = i), e;
			case Xl:
				return (e = kt(19, n, t, a)), (e.elementType = Xl), (e.lanes = i), e;
			case rp:
				return Qo(n, a, i, t);
			default:
				if (typeof e == "object" && e !== null)
					switch (e.$$typeof) {
						case tp:
							o = 10;
							break e;
						case np:
							o = 9;
							break e;
						case mu:
							o = 11;
							break e;
						case hu:
							o = 14;
							break e;
						case cn:
							(o = 16), (r = null);
							break e;
					}
				throw Error(L(130, e == null ? e : typeof e, ""));
		}
	return (
		(t = kt(o, n, t, a)), (t.elementType = e), (t.type = r), (t.lanes = i), t
	);
}
function Yn(e, t, n, r) {
	return (e = kt(7, e, r, t)), (e.lanes = n), e;
}
function Qo(e, t, n, r) {
	return (
		(e = kt(22, e, r, t)),
		(e.elementType = rp),
		(e.lanes = n),
		(e.stateNode = { isHidden: !1 }),
		e
	);
}
function Ml(e, t, n) {
	return (e = kt(6, e, null, t)), (e.lanes = n), e;
}
function zl(e, t, n) {
	return (
		(t = kt(4, e.children !== null ? e.children : [], e.key, t)),
		(t.lanes = n),
		(t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation,
		}),
		t
	);
}
function Y0(e, t, n, r, a) {
	(this.tag = t),
		(this.containerInfo = e),
		(this.finishedWork =
			this.pingCache =
			this.current =
			this.pendingChildren =
				null),
		(this.timeoutHandle = -1),
		(this.callbackNode = this.pendingContext = this.context = null),
		(this.callbackPriority = 0),
		(this.eventTimes = hl(0)),
		(this.expirationTimes = hl(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = hl(0)),
		(this.identifierPrefix = r),
		(this.onRecoverableError = a),
		(this.mutableSourceEagerHydrationData = null);
}
function Gu(e, t, n, r, a, i, o, l, s) {
	return (
		(e = new Y0(e, t, n, l, s)),
		t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
		(i = kt(3, null, null, t)),
		(e.current = i),
		(i.stateNode = e),
		(i.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null,
		}),
		Ou(i),
		e
	);
}
function Q0(e, t, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: cr,
		key: r == null ? null : "" + r,
		children: e,
		containerInfo: t,
		implementation: n,
	};
}
function Km(e) {
	if (!e) return Nn;
	e = e._reactInternals;
	e: {
		if (nr(e) !== e || e.tag !== 1) throw Error(L(170));
		var t = e;
		do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context;
					break e;
				case 1:
					if (ot(t.type)) {
						t = t.stateNode.__reactInternalMemoizedMergedChildContext;
						break e;
					}
			}
			t = t.return;
		} while (t !== null);
		throw Error(L(171));
	}
	if (e.tag === 1) {
		var n = e.type;
		if (ot(n)) return Kp(e, n, t);
	}
	return t;
}
function Xm(e, t, n, r, a, i, o, l, s) {
	return (
		(e = Gu(n, r, !0, e, a, i, o, l, s)),
		(e.context = Km(null)),
		(n = e.current),
		(r = et()),
		(a = En(n)),
		(i = Qt(r, a)),
		(i.callback = t ?? null),
		Sn(n, i, a),
		(e.current.lanes = a),
		ei(e, a, r),
		lt(e, r),
		e
	);
}
function Ko(e, t, n, r) {
	var a = t.current,
		i = et(),
		o = En(a);
	return (
		(n = Km(n)),
		t.context === null ? (t.context = n) : (t.pendingContext = n),
		(t = Qt(i, o)),
		(t.payload = { element: e }),
		(r = r === void 0 ? null : r),
		r !== null && (t.callback = r),
		(e = Sn(a, t, o)),
		e !== null && (Ot(e, a, o, i), Qi(e, a, o)),
		o
	);
}
function No(e) {
	if (((e = e.current), !e.child)) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode;
	}
}
function Df(e, t) {
	if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
		var n = e.retryLane;
		e.retryLane = n !== 0 && n < t ? n : t;
	}
}
function Ju(e, t) {
	Df(e, t), (e = e.alternate) && Df(e, t);
}
function K0() {
	return null;
}
var Gm =
	typeof reportError == "function"
		? reportError
		: function (e) {
				console.error(e);
		  };
function Zu(e) {
	this._internalRoot = e;
}
Xo.prototype.render = Zu.prototype.render = function (e) {
	var t = this._internalRoot;
	if (t === null) throw Error(L(409));
	Ko(e, t, null, null);
};
Xo.prototype.unmount = Zu.prototype.unmount = function () {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		Zn(function () {
			Ko(null, e, null, null);
		}),
			(t[Xt] = null);
	}
};
function Xo(e) {
	this._internalRoot = e;
}
Xo.prototype.unstable_scheduleHydration = function (e) {
	if (e) {
		var t = Np();
		e = { blockedOn: null, target: e, priority: t };
		for (var n = 0; n < dn.length && t !== 0 && t < dn[n].priority; n++);
		dn.splice(n, 0, e), n === 0 && _p(e);
	}
};
function qu(e) {
	return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Go(e) {
	return !(
		!e ||
		(e.nodeType !== 1 &&
			e.nodeType !== 9 &&
			e.nodeType !== 11 &&
			(e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
	);
}
function Af() {}
function X0(e, t, n, r, a) {
	if (a) {
		if (typeof r == "function") {
			var i = r;
			r = function () {
				var u = No(o);
				i.call(u);
			};
		}
		var o = Xm(t, r, e, 0, null, !1, !1, "", Af);
		return (
			(e._reactRootContainer = o),
			(e[Xt] = o.current),
			Ia(e.nodeType === 8 ? e.parentNode : e),
			Zn(),
			o
		);
	}
	for (; (a = e.lastChild); ) e.removeChild(a);
	if (typeof r == "function") {
		var l = r;
		r = function () {
			var u = No(s);
			l.call(u);
		};
	}
	var s = Gu(e, 0, !1, null, null, !1, !1, "", Af);
	return (
		(e._reactRootContainer = s),
		(e[Xt] = s.current),
		Ia(e.nodeType === 8 ? e.parentNode : e),
		Zn(function () {
			Ko(t, s, n, r);
		}),
		s
	);
}
function Jo(e, t, n, r, a) {
	var i = n._reactRootContainer;
	if (i) {
		var o = i;
		if (typeof a == "function") {
			var l = a;
			a = function () {
				var s = No(o);
				l.call(s);
			};
		}
		Ko(t, o, e, a);
	} else o = X0(n, t, e, a, r);
	return No(o);
}
Cp = function (e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var n = da(t.pendingLanes);
				n !== 0 &&
					(yu(t, n | 1), lt(t, Pe()), !(re & 6) && ((Fr = Pe() + 500), On()));
			}
			break;
		case 13:
			Zn(function () {
				var r = Gt(e, 1);
				if (r !== null) {
					var a = et();
					Ot(r, e, 1, a);
				}
			}),
				Ju(e, 1);
	}
};
wu = function (e) {
	if (e.tag === 13) {
		var t = Gt(e, 134217728);
		if (t !== null) {
			var n = et();
			Ot(t, e, 134217728, n);
		}
		Ju(e, 134217728);
	}
};
jp = function (e) {
	if (e.tag === 13) {
		var t = En(e),
			n = Gt(e, t);
		if (n !== null) {
			var r = et();
			Ot(n, e, t, r);
		}
		Ju(e, t);
	}
};
Np = function () {
	return le;
};
Pp = function (e, t) {
	var n = le;
	try {
		return (le = e), t();
	} finally {
		le = n;
	}
};
is = function (e, t, n) {
	switch (t) {
		case "input":
			if ((Zl(e, n), (t = n.name), n.type === "radio" && t != null)) {
				for (n = e; n.parentNode; ) n = n.parentNode;
				for (
					n = n.querySelectorAll(
						"input[name=" + JSON.stringify("" + t) + '][type="radio"]',
					),
						t = 0;
					t < n.length;
					t++
				) {
					var r = n[t];
					if (r !== e && r.form === e.form) {
						var a = Uo(r);
						if (!a) throw Error(L(90));
						ip(r), Zl(r, a);
					}
				}
			}
			break;
		case "textarea":
			lp(e, n);
			break;
		case "select":
			(t = n.value), t != null && jr(e, !!n.multiple, t, !1);
	}
};
mp = Yu;
hp = Zn;
var G0 = { usingClientEntryPoint: !1, Events: [ni, hr, Uo, dp, pp, Yu] },
	oa = {
		findFiberByHostInstance: An,
		bundleType: 0,
		version: "18.3.1",
		rendererPackageName: "react-dom",
	},
	J0 = {
		bundleType: oa.bundleType,
		version: oa.version,
		rendererPackageName: oa.rendererPackageName,
		rendererConfig: oa.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: tn.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (e) {
			return (e = yp(e)), e === null ? null : e.stateNode;
		},
		findFiberByHostInstance: oa.findFiberByHostInstance || K0,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
	var Ti = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!Ti.isDisabled && Ti.supportsFiber)
		try {
			(Do = Ti.inject(J0)), (Ut = Ti);
		} catch {}
}
mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = G0;
mt.createPortal = function (e, t) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!qu(t)) throw Error(L(200));
	return Q0(e, t, null, n);
};
mt.createRoot = function (e, t) {
	if (!qu(e)) throw Error(L(299));
	var n = !1,
		r = "",
		a = Gm;
	return (
		t != null &&
			(t.unstable_strictMode === !0 && (n = !0),
			t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
			t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
		(t = Gu(e, 1, !1, null, null, n, !1, r, a)),
		(e[Xt] = t.current),
		Ia(e.nodeType === 8 ? e.parentNode : e),
		new Zu(t)
	);
};
mt.findDOMNode = function (e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var t = e._reactInternals;
	if (t === void 0)
		throw typeof e.render == "function"
			? Error(L(188))
			: ((e = Object.keys(e).join(",")), Error(L(268, e)));
	return (e = yp(t)), (e = e === null ? null : e.stateNode), e;
};
mt.flushSync = function (e) {
	return Zn(e);
};
mt.hydrate = function (e, t, n) {
	if (!Go(t)) throw Error(L(200));
	return Jo(null, e, t, !0, n);
};
mt.hydrateRoot = function (e, t, n) {
	if (!qu(e)) throw Error(L(405));
	var r = (n != null && n.hydratedSources) || null,
		a = !1,
		i = "",
		o = Gm;
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (a = !0),
			n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
		(t = Xm(t, null, e, 1, n ?? null, a, !1, i, o)),
		(e[Xt] = t.current),
		Ia(e),
		r)
	)
		for (e = 0; e < r.length; e++)
			(n = r[e]),
				(a = n._getVersion),
				(a = a(n._source)),
				t.mutableSourceEagerHydrationData == null
					? (t.mutableSourceEagerHydrationData = [n, a])
					: t.mutableSourceEagerHydrationData.push(n, a);
	return new Xo(t);
};
mt.render = function (e, t, n) {
	if (!Go(t)) throw Error(L(200));
	return Jo(null, e, t, !1, n);
};
mt.unmountComponentAtNode = function (e) {
	if (!Go(e)) throw Error(L(40));
	return e._reactRootContainer
		? (Zn(function () {
				Jo(null, null, e, !1, function () {
					(e._reactRootContainer = null), (e[Xt] = null);
				});
		  }),
		  !0)
		: !1;
};
mt.unstable_batchedUpdates = Yu;
mt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
	if (!Go(n)) throw Error(L(200));
	if (e == null || e._reactInternals === void 0) throw Error(L(38));
	return Jo(e, t, n, !1, r);
};
mt.version = "18.3.1-next-f1338f8080-20240426";
function Jm() {
	if (
		!(
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
		)
	)
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jm);
		} catch (e) {
			console.error(e);
		}
}
Jm(), (Jd.exports = mt);
var ec = Jd.exports;
const Z0 = iu(ec),
	q0 = Fd({ __proto__: null, default: Z0 }, [ec]);
var Ff = ec;
(Wl.createRoot = Ff.createRoot), (Wl.hydrateRoot = Ff.hydrateRoot);
/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Se() {
	return (
		(Se = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		Se.apply(this, arguments)
	);
}
var Te;
(function (e) {
	(e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Te || (Te = {}));
const $f = "popstate";
function eg(e) {
	e === void 0 && (e = {});
	function t(r, a) {
		let { pathname: i, search: o, hash: l } = r.location;
		return Wa(
			"",
			{ pathname: i, search: o, hash: l },
			(a.state && a.state.usr) || null,
			(a.state && a.state.key) || "default",
		);
	}
	function n(r, a) {
		return typeof a == "string" ? a : ai(a);
	}
	return ng(t, n, null, e);
}
function G(e, t) {
	if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function $r(e, t) {
	if (!e) {
		typeof console < "u" && console.warn(t);
		try {
			throw new Error(t);
		} catch {}
	}
}
function tg() {
	return Math.random().toString(36).substr(2, 8);
}
function Uf(e, t) {
	return { usr: e.state, key: e.key, idx: t };
}
function Wa(e, t, n, r) {
	return (
		n === void 0 && (n = null),
		Se(
			{ pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
			typeof t == "string" ? Mn(t) : t,
			{ state: n, key: (t && t.key) || r || tg() },
		)
	);
}
function ai(e) {
	let { pathname: t = "/", search: n = "", hash: r = "" } = e;
	return (
		n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
		r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
		t
	);
}
function Mn(e) {
	let t = {};
	if (e) {
		let n = e.indexOf("#");
		n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
		let r = e.indexOf("?");
		r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
			e && (t.pathname = e);
	}
	return t;
}
function ng(e, t, n, r) {
	r === void 0 && (r = {});
	let { window: a = document.defaultView, v5Compat: i = !1 } = r,
		o = a.history,
		l = Te.Pop,
		s = null,
		u = c();
	u == null && ((u = 0), o.replaceState(Se({}, o.state, { idx: u }), ""));
	function c() {
		return (o.state || { idx: null }).idx;
	}
	function f() {
		l = Te.Pop;
		let C = c(),
			h = C == null ? null : C - u;
		(u = C), s && s({ action: l, location: y.location, delta: h });
	}
	function p(C, h) {
		l = Te.Push;
		let m = Wa(y.location, C, h);
		u = c() + 1;
		let v = Uf(m, u),
			E = y.createHref(m);
		try {
			o.pushState(v, "", E);
		} catch (P) {
			if (P instanceof DOMException && P.name === "DataCloneError") throw P;
			a.location.assign(E);
		}
		i && s && s({ action: l, location: y.location, delta: 1 });
	}
	function w(C, h) {
		l = Te.Replace;
		let m = Wa(y.location, C, h);
		u = c();
		let v = Uf(m, u),
			E = y.createHref(m);
		o.replaceState(v, "", E),
			i && s && s({ action: l, location: y.location, delta: 0 });
	}
	function x(C) {
		let h = a.location.origin !== "null" ? a.location.origin : a.location.href,
			m = typeof C == "string" ? C : ai(C);
		return (
			(m = m.replace(/ $/, "%20")),
			G(
				h,
				"No window.location.(origin|href) available to create URL for href: " +
					m,
			),
			new URL(m, h)
		);
	}
	let y = {
		get action() {
			return l;
		},
		get location() {
			return e(a, o);
		},
		listen(C) {
			if (s) throw new Error("A history only accepts one active listener");
			return (
				a.addEventListener($f, f),
				(s = C),
				() => {
					a.removeEventListener($f, f), (s = null);
				}
			);
		},
		createHref(C) {
			return t(a, C);
		},
		createURL: x,
		encodeLocation(C) {
			let h = x(C);
			return { pathname: h.pathname, search: h.search, hash: h.hash };
		},
		push: p,
		replace: w,
		go(C) {
			return o.go(C);
		},
	};
	return y;
}
var ye;
(function (e) {
	(e.data = "data"),
		(e.deferred = "deferred"),
		(e.redirect = "redirect"),
		(e.error = "error");
})(ye || (ye = {}));
const rg = new Set([
	"lazy",
	"caseSensitive",
	"path",
	"id",
	"index",
	"children",
]);
function ag(e) {
	return e.index === !0;
}
function As(e, t, n, r) {
	return (
		n === void 0 && (n = []),
		r === void 0 && (r = {}),
		e.map((a, i) => {
			let o = [...n, i],
				l = typeof a.id == "string" ? a.id : o.join("-");
			if (
				(G(
					a.index !== !0 || !a.children,
					"Cannot specify children on an index route",
				),
				G(
					!r[l],
					'Found a route id collision on id "' +
						l +
						`".  Route id's must be globally unique within Data Router usages`,
				),
				ag(a))
			) {
				let s = Se({}, a, t(a), { id: l });
				return (r[l] = s), s;
			} else {
				let s = Se({}, a, t(a), { id: l, children: void 0 });
				return (
					(r[l] = s), a.children && (s.children = As(a.children, t, o, r)), s
				);
			}
		})
	);
}
function kr(e, t, n) {
	n === void 0 && (n = "/");
	let r = typeof t == "string" ? Mn(t) : t,
		a = ii(r.pathname || "/", n);
	if (a == null) return null;
	let i = Zm(e);
	og(i);
	let o = null;
	for (let l = 0; o == null && l < i.length; ++l) {
		let s = yg(a);
		o = hg(i[l], s);
	}
	return o;
}
function ig(e, t) {
	let { route: n, pathname: r, params: a } = e;
	return { id: n.id, pathname: r, params: a, data: t[n.id], handle: n.handle };
}
function Zm(e, t, n, r) {
	t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
	let a = (i, o, l) => {
		let s = {
			relativePath: l === void 0 ? i.path || "" : l,
			caseSensitive: i.caseSensitive === !0,
			childrenIndex: o,
			route: i,
		};
		s.relativePath.startsWith("/") &&
			(G(
				s.relativePath.startsWith(r),
				'Absolute route path "' +
					s.relativePath +
					'" nested under path ' +
					('"' + r + '" is not valid. An absolute child route path ') +
					"must start with the combined path of all its parent routes.",
			),
			(s.relativePath = s.relativePath.slice(r.length)));
		let u = Cn([r, s.relativePath]),
			c = n.concat(s);
		i.children &&
			i.children.length > 0 &&
			(G(
				i.index !== !0,
				"Index routes must not have child routes. Please remove " +
					('all child routes from route path "' + u + '".'),
			),
			Zm(i.children, t, c, u)),
			!(i.path == null && !i.index) &&
				t.push({ path: u, score: pg(u, i.index), routesMeta: c });
	};
	return (
		e.forEach((i, o) => {
			var l;
			if (i.path === "" || !((l = i.path) != null && l.includes("?"))) a(i, o);
			else for (let s of qm(i.path)) a(i, o, s);
		}),
		t
	);
}
function qm(e) {
	let t = e.split("/");
	if (t.length === 0) return [];
	let [n, ...r] = t,
		a = n.endsWith("?"),
		i = n.replace(/\?$/, "");
	if (r.length === 0) return a ? [i, ""] : [i];
	let o = qm(r.join("/")),
		l = [];
	return (
		l.push(...o.map((s) => (s === "" ? i : [i, s].join("/")))),
		a && l.push(...o),
		l.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
	);
}
function og(e) {
	e.sort((t, n) =>
		t.score !== n.score
			? n.score - t.score
			: mg(
					t.routesMeta.map((r) => r.childrenIndex),
					n.routesMeta.map((r) => r.childrenIndex),
			  ),
	);
}
const lg = /^:[\w-]+$/,
	sg = 3,
	ug = 2,
	cg = 1,
	fg = 10,
	dg = -2,
	Hf = (e) => e === "*";
function pg(e, t) {
	let n = e.split("/"),
		r = n.length;
	return (
		n.some(Hf) && (r += dg),
		t && (r += ug),
		n
			.filter((a) => !Hf(a))
			.reduce((a, i) => a + (lg.test(i) ? sg : i === "" ? cg : fg), r)
	);
}
function mg(e, t) {
	return e.length === t.length && e.slice(0, -1).every((r, a) => r === t[a])
		? e[e.length - 1] - t[t.length - 1]
		: 0;
}
function hg(e, t) {
	let { routesMeta: n } = e,
		r = {},
		a = "/",
		i = [];
	for (let o = 0; o < n.length; ++o) {
		let l = n[o],
			s = o === n.length - 1,
			u = a === "/" ? t : t.slice(a.length) || "/",
			c = vg(
				{ path: l.relativePath, caseSensitive: l.caseSensitive, end: s },
				u,
			);
		if (!c) return null;
		Object.assign(r, c.params);
		let f = l.route;
		i.push({
			params: r,
			pathname: Cn([a, c.pathname]),
			pathnameBase: Sg(Cn([a, c.pathnameBase])),
			route: f,
		}),
			c.pathnameBase !== "/" && (a = Cn([a, c.pathnameBase]));
	}
	return i;
}
function vg(e, t) {
	typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
	let [n, r] = gg(e.path, e.caseSensitive, e.end),
		a = t.match(n);
	if (!a) return null;
	let i = a[0],
		o = i.replace(/(.)\/+$/, "$1"),
		l = a.slice(1);
	return {
		params: r.reduce((u, c, f) => {
			let { paramName: p, isOptional: w } = c;
			if (p === "*") {
				let y = l[f] || "";
				o = i.slice(0, i.length - y.length).replace(/(.)\/+$/, "$1");
			}
			const x = l[f];
			return (
				w && !x ? (u[p] = void 0) : (u[p] = (x || "").replace(/%2F/g, "/")), u
			);
		}, {}),
		pathname: i,
		pathnameBase: o,
		pattern: e,
	};
}
function gg(e, t, n) {
	t === void 0 && (t = !1),
		n === void 0 && (n = !0),
		$r(
			e === "*" || !e.endsWith("*") || e.endsWith("/*"),
			'Route path "' +
				e +
				'" will be treated as if it were ' +
				('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
				"always follow a `/` in the pattern. To get rid of this warning, " +
				('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
		);
	let r = [],
		a =
			"^" +
			e
				.replace(/\/*\*?$/, "")
				.replace(/^\/*/, "/")
				.replace(/[\\.*+^${}|()[\]]/g, "\\$&")
				.replace(
					/\/:([\w-]+)(\?)?/g,
					(o, l, s) => (
						r.push({ paramName: l, isOptional: s != null }),
						s ? "/?([^\\/]+)?" : "/([^\\/]+)"
					),
				);
	return (
		e.endsWith("*")
			? (r.push({ paramName: "*" }),
			  (a += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
			: n
			? (a += "\\/*$")
			: e !== "" && e !== "/" && (a += "(?:(?=\\/|$))"),
		[new RegExp(a, t ? void 0 : "i"), r]
	);
}
function yg(e) {
	try {
		return e
			.split("/")
			.map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
			.join("/");
	} catch (t) {
		return (
			$r(
				!1,
				'The URL path "' +
					e +
					'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
					("encoding (" + t + ")."),
			),
			e
		);
	}
}
function ii(e, t) {
	if (t === "/") return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
	let n = t.endsWith("/") ? t.length - 1 : t.length,
		r = e.charAt(n);
	return r && r !== "/" ? null : e.slice(n) || "/";
}
function wg(e, t) {
	t === void 0 && (t = "/");
	let {
		pathname: n,
		search: r = "",
		hash: a = "",
	} = typeof e == "string" ? Mn(e) : e;
	return {
		pathname: n ? (n.startsWith("/") ? n : xg(n, t)) : t,
		search: kg(r),
		hash: Eg(a),
	};
}
function xg(e, t) {
	let n = t.replace(/\/+$/, "").split("/");
	return (
		e.split("/").forEach((a) => {
			a === ".." ? n.length > 1 && n.pop() : a !== "." && n.push(a);
		}),
		n.length > 1 ? n.join("/") : "/"
	);
}
function Il(e, t, n, r) {
	return (
		"Cannot include a '" +
		e +
		"' character in a manually specified " +
		("`to." +
			t +
			"` field [" +
			JSON.stringify(r) +
			"].  Please separate it out to the ") +
		("`to." + n + "` field. Alternatively you may provide the full path as ") +
		'a string in <Link to="..."> and the router will parse it for you.'
	);
}
function eh(e) {
	return e.filter(
		(t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
	);
}
function th(e, t) {
	let n = eh(e);
	return t
		? n.map((r, a) => (a === e.length - 1 ? r.pathname : r.pathnameBase))
		: n.map((r) => r.pathnameBase);
}
function nh(e, t, n, r) {
	r === void 0 && (r = !1);
	let a;
	typeof e == "string"
		? (a = Mn(e))
		: ((a = Se({}, e)),
		  G(
				!a.pathname || !a.pathname.includes("?"),
				Il("?", "pathname", "search", a),
		  ),
		  G(
				!a.pathname || !a.pathname.includes("#"),
				Il("#", "pathname", "hash", a),
		  ),
		  G(!a.search || !a.search.includes("#"), Il("#", "search", "hash", a)));
	let i = e === "" || a.pathname === "",
		o = i ? "/" : a.pathname,
		l;
	if (o == null) l = n;
	else {
		let f = t.length - 1;
		if (!r && o.startsWith("..")) {
			let p = o.split("/");
			for (; p[0] === ".."; ) p.shift(), (f -= 1);
			a.pathname = p.join("/");
		}
		l = f >= 0 ? t[f] : "/";
	}
	let s = wg(a, l),
		u = o && o !== "/" && o.endsWith("/"),
		c = (i || o === ".") && n.endsWith("/");
	return !s.pathname.endsWith("/") && (u || c) && (s.pathname += "/"), s;
}
const Cn = (e) => e.join("/").replace(/\/\/+/g, "/"),
	Sg = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
	kg = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
	Eg = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class tc {
	constructor(t, n, r, a) {
		a === void 0 && (a = !1),
			(this.status = t),
			(this.statusText = n || ""),
			(this.internal = a),
			r instanceof Error
				? ((this.data = r.toString()), (this.error = r))
				: (this.data = r);
	}
}
function nc(e) {
	return (
		e != null &&
		typeof e.status == "number" &&
		typeof e.statusText == "string" &&
		typeof e.internal == "boolean" &&
		"data" in e
	);
}
const rh = ["post", "put", "patch", "delete"],
	bg = new Set(rh),
	Cg = ["get", ...rh],
	jg = new Set(Cg),
	Ng = new Set([301, 302, 303, 307, 308]),
	Pg = new Set([307, 308]),
	Dl = {
		state: "idle",
		location: void 0,
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
	},
	_g = {
		state: "idle",
		data: void 0,
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
	},
	la = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
	rc = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	Tg = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
	ah = "remix-router-transitions";
function Lg(e) {
	const t = e.window ? e.window : typeof window < "u" ? window : void 0,
		n =
			typeof t < "u" &&
			typeof t.document < "u" &&
			typeof t.document.createElement < "u",
		r = !n;
	G(
		e.routes.length > 0,
		"You must provide a non-empty routes array to createRouter",
	);
	let a;
	if (e.mapRouteProperties) a = e.mapRouteProperties;
	else if (e.detectErrorBoundary) {
		let k = e.detectErrorBoundary;
		a = (b) => ({ hasErrorBoundary: k(b) });
	} else a = Tg;
	let i = {},
		o = As(e.routes, a, void 0, i),
		l,
		s = e.basename || "/",
		u = e.unstable_dataStrategy || zg,
		c = Se(
			{
				v7_fetcherPersist: !1,
				v7_normalizeFormMethod: !1,
				v7_partialHydration: !1,
				v7_prependBasename: !1,
				v7_relativeSplatPath: !1,
				unstable_skipActionErrorRevalidation: !1,
			},
			e.future,
		),
		f = null,
		p = new Set(),
		w = null,
		x = null,
		y = null,
		C = e.hydrationData != null,
		h = kr(o, e.history.location, s),
		m = null;
	if (h == null) {
		let k = yt(404, { pathname: e.history.location.pathname }),
			{ matches: b, route: N } = Zf(o);
		(h = b), (m = { [N.id]: k });
	}
	let v,
		E = h.some((k) => k.route.lazy),
		P = h.some((k) => k.route.loader);
	if (E) v = !1;
	else if (!P) v = !0;
	else if (c.v7_partialHydration) {
		let k = e.hydrationData ? e.hydrationData.loaderData : null,
			b = e.hydrationData ? e.hydrationData.errors : null,
			N = (M) =>
				M.route.loader
					? typeof M.route.loader == "function" && M.route.loader.hydrate === !0
						? !1
						: (k && k[M.route.id] !== void 0) || (b && b[M.route.id] !== void 0)
					: !0;
		if (b) {
			let M = h.findIndex((D) => b[D.route.id] !== void 0);
			v = h.slice(0, M + 1).every(N);
		} else v = h.every(N);
	} else v = e.hydrationData != null;
	let R,
		g = {
			historyAction: e.history.action,
			location: e.history.location,
			matches: h,
			initialized: v,
			navigation: Dl,
			restoreScrollPosition: e.hydrationData != null ? !1 : null,
			preventScrollReset: !1,
			revalidation: "idle",
			loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
			actionData: (e.hydrationData && e.hydrationData.actionData) || null,
			errors: (e.hydrationData && e.hydrationData.errors) || m,
			fetchers: new Map(),
			blockers: new Map(),
		},
		j = Te.Pop,
		_ = !1,
		O,
		V = !1,
		te = new Map(),
		ne = null,
		oe = !1,
		Ne = !1,
		We = [],
		_e = [],
		T = new Map(),
		$ = 0,
		H = -1,
		q = new Map(),
		X = new Set(),
		he = new Map(),
		ce = new Map(),
		ve = new Set(),
		xe = new Map(),
		ze = new Map(),
		Yr = !1;
	function f1() {
		if (
			((f = e.history.listen((k) => {
				let { action: b, location: N, delta: M } = k;
				if (Yr) {
					Yr = !1;
					return;
				}
				$r(
					ze.size === 0 || M != null,
					"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
				);
				let D = jc({
					currentLocation: g.location,
					nextLocation: N,
					historyAction: b,
				});
				if (D && M != null) {
					(Yr = !0),
						e.history.go(M * -1),
						ci(D, {
							state: "blocked",
							location: N,
							proceed() {
								ci(D, {
									state: "proceeding",
									proceed: void 0,
									reset: void 0,
									location: N,
								}),
									e.history.go(M);
							},
							reset() {
								let Y = new Map(g.blockers);
								Y.set(D, la), st({ blockers: Y });
							},
						});
					return;
				}
				return zn(b, N);
			})),
			n)
		) {
			Qg(t, te);
			let k = () => Kg(t, te);
			t.addEventListener("pagehide", k),
				(ne = () => t.removeEventListener("pagehide", k));
		}
		return g.initialized || zn(Te.Pop, g.location, { initialHydration: !0 }), R;
	}
	function d1() {
		f && f(),
			ne && ne(),
			p.clear(),
			O && O.abort(),
			g.fetchers.forEach((k, b) => ui(b)),
			g.blockers.forEach((k, b) => Cc(b));
	}
	function p1(k) {
		return p.add(k), () => p.delete(k);
	}
	function st(k, b) {
		b === void 0 && (b = {}), (g = Se({}, g, k));
		let N = [],
			M = [];
		c.v7_fetcherPersist &&
			g.fetchers.forEach((D, Y) => {
				D.state === "idle" && (ve.has(Y) ? M.push(Y) : N.push(Y));
			}),
			[...p].forEach((D) =>
				D(g, {
					deletedFetchers: M,
					unstable_viewTransitionOpts: b.viewTransitionOpts,
					unstable_flushSync: b.flushSync === !0,
				}),
			),
			c.v7_fetcherPersist &&
				(N.forEach((D) => g.fetchers.delete(D)), M.forEach((D) => ui(D)));
	}
	function Qr(k, b, N) {
		var M, D;
		let { flushSync: Y } = N === void 0 ? {} : N,
			U =
				g.actionData != null &&
				g.navigation.formMethod != null &&
				_t(g.navigation.formMethod) &&
				g.navigation.state === "loading" &&
				((M = k.state) == null ? void 0 : M._isRedirect) !== !0,
			A;
		b.actionData
			? Object.keys(b.actionData).length > 0
				? (A = b.actionData)
				: (A = null)
			: U
			? (A = g.actionData)
			: (A = null);
		let Q = b.loaderData
				? Gf(g.loaderData, b.loaderData, b.matches || [], b.errors)
				: g.loaderData,
			W = g.blockers;
		W.size > 0 && ((W = new Map(W)), W.forEach((B, ge) => W.set(ge, la)));
		let Fe =
			_ === !0 ||
			(g.navigation.formMethod != null &&
				_t(g.navigation.formMethod) &&
				((D = k.state) == null ? void 0 : D._isRedirect) !== !0);
		l && ((o = l), (l = void 0)),
			oe ||
				j === Te.Pop ||
				(j === Te.Push
					? e.history.push(k, k.state)
					: j === Te.Replace && e.history.replace(k, k.state));
		let $e;
		if (j === Te.Pop) {
			let B = te.get(g.location.pathname);
			B && B.has(k.pathname)
				? ($e = { currentLocation: g.location, nextLocation: k })
				: te.has(k.pathname) &&
				  ($e = { currentLocation: k, nextLocation: g.location });
		} else if (V) {
			let B = te.get(g.location.pathname);
			B
				? B.add(k.pathname)
				: ((B = new Set([k.pathname])), te.set(g.location.pathname, B)),
				($e = { currentLocation: g.location, nextLocation: k });
		}
		st(
			Se({}, b, {
				actionData: A,
				loaderData: Q,
				historyAction: j,
				location: k,
				initialized: !0,
				navigation: Dl,
				revalidation: "idle",
				restoreScrollPosition: Pc(k, b.matches || g.matches),
				preventScrollReset: Fe,
				blockers: W,
			}),
			{ viewTransitionOpts: $e, flushSync: Y === !0 },
		),
			(j = Te.Pop),
			(_ = !1),
			(V = !1),
			(oe = !1),
			(Ne = !1),
			(We = []),
			(_e = []);
	}
	async function wc(k, b) {
		if (typeof k == "number") {
			e.history.go(k);
			return;
		}
		let N = Fs(
				g.location,
				g.matches,
				s,
				c.v7_prependBasename,
				k,
				c.v7_relativeSplatPath,
				b == null ? void 0 : b.fromRouteId,
				b == null ? void 0 : b.relative,
			),
			{
				path: M,
				submission: D,
				error: Y,
			} = Vf(c.v7_normalizeFormMethod, !1, N, b),
			U = g.location,
			A = Wa(g.location, M, b && b.state);
		A = Se({}, A, e.history.encodeLocation(A));
		let Q = b && b.replace != null ? b.replace : void 0,
			W = Te.Push;
		Q === !0
			? (W = Te.Replace)
			: Q === !1 ||
			  (D != null &&
					_t(D.formMethod) &&
					D.formAction === g.location.pathname + g.location.search &&
					(W = Te.Replace));
		let Fe =
				b && "preventScrollReset" in b ? b.preventScrollReset === !0 : void 0,
			$e = (b && b.unstable_flushSync) === !0,
			B = jc({ currentLocation: U, nextLocation: A, historyAction: W });
		if (B) {
			ci(B, {
				state: "blocked",
				location: A,
				proceed() {
					ci(B, {
						state: "proceeding",
						proceed: void 0,
						reset: void 0,
						location: A,
					}),
						wc(k, b);
				},
				reset() {
					let ge = new Map(g.blockers);
					ge.set(B, la), st({ blockers: ge });
				},
			});
			return;
		}
		return await zn(W, A, {
			submission: D,
			pendingError: Y,
			preventScrollReset: Fe,
			replace: b && b.replace,
			enableViewTransition: b && b.unstable_viewTransition,
			flushSync: $e,
		});
	}
	function m1() {
		if (
			(sl(),
			st({ revalidation: "loading" }),
			g.navigation.state !== "submitting")
		) {
			if (g.navigation.state === "idle") {
				zn(g.historyAction, g.location, { startUninterruptedRevalidation: !0 });
				return;
			}
			zn(j || g.historyAction, g.navigation.location, {
				overrideNavigation: g.navigation,
			});
		}
	}
	async function zn(k, b, N) {
		O && O.abort(),
			(O = null),
			(j = k),
			(oe = (N && N.startUninterruptedRevalidation) === !0),
			E1(g.location, g.matches),
			(_ = (N && N.preventScrollReset) === !0),
			(V = (N && N.enableViewTransition) === !0);
		let M = l || o,
			D = N && N.overrideNavigation,
			Y = kr(M, b, s),
			U = (N && N.flushSync) === !0;
		if (!Y) {
			let B = yt(404, { pathname: b.pathname }),
				{ matches: ge, route: Ie } = Zf(M);
			ul(),
				Qr(
					b,
					{ matches: ge, loaderData: {}, errors: { [Ie.id]: B } },
					{ flushSync: U },
				);
			return;
		}
		if (
			g.initialized &&
			!Ne &&
			Ug(g.location, b) &&
			!(N && N.submission && _t(N.submission.formMethod))
		) {
			Qr(b, { matches: Y }, { flushSync: U });
			return;
		}
		O = new AbortController();
		let A = ur(e.history, b, O.signal, N && N.submission),
			Q;
		if (N && N.pendingError)
			Q = [ba(Y).route.id, { type: ye.error, error: N.pendingError }];
		else if (N && N.submission && _t(N.submission.formMethod)) {
			let B = await h1(A, b, N.submission, Y, {
				replace: N.replace,
				flushSync: U,
			});
			if (B.shortCircuited) return;
			(Q = B.pendingActionResult),
				(D = Al(b, N.submission)),
				(U = !1),
				(A = ur(e.history, A.url, A.signal));
		}
		let {
			shortCircuited: W,
			loaderData: Fe,
			errors: $e,
		} = await v1(
			A,
			b,
			Y,
			D,
			N && N.submission,
			N && N.fetcherSubmission,
			N && N.replace,
			N && N.initialHydration === !0,
			U,
			Q,
		);
		W ||
			((O = null),
			Qr(b, Se({ matches: Y }, Jf(Q), { loaderData: Fe, errors: $e })));
	}
	async function h1(k, b, N, M, D) {
		D === void 0 && (D = {}), sl();
		let Y = Wg(b, N);
		st({ navigation: Y }, { flushSync: D.flushSync === !0 });
		let U,
			A = Us(M, b);
		if (!A.route.action && !A.route.lazy)
			U = {
				type: ye.error,
				error: yt(405, {
					method: k.method,
					pathname: b.pathname,
					routeId: A.route.id,
				}),
			};
		else if (((U = (await Xr("action", k, [A], M))[0]), k.signal.aborted))
			return { shortCircuited: !0 };
		if (Hn(U)) {
			let Q;
			return (
				D && D.replace != null
					? (Q = D.replace)
					: (Q =
							Qf(U.response.headers.get("Location"), new URL(k.url), s) ===
							g.location.pathname + g.location.search),
				await Kr(k, U, { submission: N, replace: Q }),
				{ shortCircuited: !0 }
			);
		}
		if (Un(U)) throw yt(400, { type: "defer-action" });
		if (St(U)) {
			let Q = ba(M, A.route.id);
			return (
				(D && D.replace) !== !0 && (j = Te.Push),
				{ pendingActionResult: [Q.route.id, U] }
			);
		}
		return { pendingActionResult: [A.route.id, U] };
	}
	async function v1(k, b, N, M, D, Y, U, A, Q, W) {
		let Fe = M || Al(b, D),
			$e = D || Y || td(Fe),
			B = l || o,
			[ge, Ie] = Bf(
				e.history,
				g,
				N,
				$e,
				b,
				c.v7_partialHydration && A === !0,
				c.unstable_skipActionErrorRevalidation,
				Ne,
				We,
				_e,
				ve,
				he,
				X,
				B,
				s,
				W,
			);
		if (
			(ul(
				(ee) =>
					!(N && N.some((Ge) => Ge.route.id === ee)) ||
					(ge && ge.some((Ge) => Ge.route.id === ee)),
			),
			(H = ++$),
			ge.length === 0 && Ie.length === 0)
		) {
			let ee = Ec();
			return (
				Qr(
					b,
					Se(
						{
							matches: N,
							loaderData: {},
							errors: W && St(W[1]) ? { [W[0]]: W[1].error } : null,
						},
						Jf(W),
						ee ? { fetchers: new Map(g.fetchers) } : {},
					),
					{ flushSync: Q },
				),
				{ shortCircuited: !0 }
			);
		}
		if (!oe && (!c.v7_partialHydration || !A)) {
			Ie.forEach((Ge) => {
				let gt = g.fetchers.get(Ge.key),
					Ue = sa(void 0, gt ? gt.data : void 0);
				g.fetchers.set(Ge.key, Ue);
			});
			let ee;
			W && !St(W[1])
				? (ee = { [W[0]]: W[1].data })
				: g.actionData &&
				  (Object.keys(g.actionData).length === 0
						? (ee = null)
						: (ee = g.actionData)),
				st(
					Se(
						{ navigation: Fe },
						ee !== void 0 ? { actionData: ee } : {},
						Ie.length > 0 ? { fetchers: new Map(g.fetchers) } : {},
					),
					{ flushSync: Q },
				);
		}
		Ie.forEach((ee) => {
			T.has(ee.key) && an(ee.key),
				ee.controller && T.set(ee.key, ee.controller);
		});
		let Jr = () => Ie.forEach((ee) => an(ee.key));
		O && O.signal.addEventListener("abort", Jr);
		let { loaderResults: on, fetcherResults: ir } = await xc(
			g.matches,
			N,
			ge,
			Ie,
			k,
		);
		if (k.signal.aborted) return { shortCircuited: !0 };
		O && O.signal.removeEventListener("abort", Jr),
			Ie.forEach((ee) => T.delete(ee.key));
		let or = qf([...on, ...ir]);
		if (or) {
			if (or.idx >= ge.length) {
				let ee = Ie[or.idx - ge.length].key;
				X.add(ee);
			}
			return await Kr(k, or.result, { replace: U }), { shortCircuited: !0 };
		}
		let { loaderData: lr, errors: zt } = Xf(g, N, ge, on, W, Ie, ir, xe);
		xe.forEach((ee, Ge) => {
			ee.subscribe((gt) => {
				(gt || ee.done) && xe.delete(Ge);
			});
		}),
			c.v7_partialHydration &&
				A &&
				g.errors &&
				Object.entries(g.errors)
					.filter((ee) => {
						let [Ge] = ee;
						return !ge.some((gt) => gt.route.id === Ge);
					})
					.forEach((ee) => {
						let [Ge, gt] = ee;
						zt = Object.assign(zt || {}, { [Ge]: gt });
					});
		let fi = Ec(),
			di = bc(H),
			pi = fi || di || Ie.length > 0;
		return Se(
			{ loaderData: lr, errors: zt },
			pi ? { fetchers: new Map(g.fetchers) } : {},
		);
	}
	function g1(k, b, N, M) {
		if (r)
			throw new Error(
				"router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
			);
		T.has(k) && an(k);
		let D = (M && M.unstable_flushSync) === !0,
			Y = l || o,
			U = Fs(
				g.location,
				g.matches,
				s,
				c.v7_prependBasename,
				N,
				c.v7_relativeSplatPath,
				b,
				M == null ? void 0 : M.relative,
			),
			A = kr(Y, U, s);
		if (!A) {
			Gr(k, b, yt(404, { pathname: U }), { flushSync: D });
			return;
		}
		let {
			path: Q,
			submission: W,
			error: Fe,
		} = Vf(c.v7_normalizeFormMethod, !0, U, M);
		if (Fe) {
			Gr(k, b, Fe, { flushSync: D });
			return;
		}
		let $e = Us(A, Q);
		if (((_ = (M && M.preventScrollReset) === !0), W && _t(W.formMethod))) {
			y1(k, b, Q, $e, A, D, W);
			return;
		}
		he.set(k, { routeId: b, path: Q }), w1(k, b, Q, $e, A, D, W);
	}
	async function y1(k, b, N, M, D, Y, U) {
		if ((sl(), he.delete(k), !M.route.action && !M.route.lazy)) {
			let Ue = yt(405, { method: U.formMethod, pathname: N, routeId: b });
			Gr(k, b, Ue, { flushSync: Y });
			return;
		}
		let A = g.fetchers.get(k);
		rn(k, Yg(U, A), { flushSync: Y });
		let Q = new AbortController(),
			W = ur(e.history, N, Q.signal, U);
		T.set(k, Q);
		let Fe = $,
			B = (await Xr("action", W, [M], D))[0];
		if (W.signal.aborted) {
			T.get(k) === Q && T.delete(k);
			return;
		}
		if (c.v7_fetcherPersist && ve.has(k)) {
			if (Hn(B) || St(B)) {
				rn(k, un(void 0));
				return;
			}
		} else {
			if (Hn(B))
				if ((T.delete(k), H > Fe)) {
					rn(k, un(void 0));
					return;
				} else
					return X.add(k), rn(k, sa(U)), Kr(W, B, { fetcherSubmission: U });
			if (St(B)) {
				Gr(k, b, B.error);
				return;
			}
		}
		if (Un(B)) throw yt(400, { type: "defer-action" });
		let ge = g.navigation.location || g.location,
			Ie = ur(e.history, ge, Q.signal),
			Jr = l || o,
			on =
				g.navigation.state !== "idle"
					? kr(Jr, g.navigation.location, s)
					: g.matches;
		G(on, "Didn't find any matches after fetcher action");
		let ir = ++$;
		q.set(k, ir);
		let or = sa(U, B.data);
		g.fetchers.set(k, or);
		let [lr, zt] = Bf(
			e.history,
			g,
			on,
			U,
			ge,
			!1,
			c.unstable_skipActionErrorRevalidation,
			Ne,
			We,
			_e,
			ve,
			he,
			X,
			Jr,
			s,
			[M.route.id, B],
		);
		zt
			.filter((Ue) => Ue.key !== k)
			.forEach((Ue) => {
				let Zr = Ue.key,
					_c = g.fetchers.get(Zr),
					C1 = sa(void 0, _c ? _c.data : void 0);
				g.fetchers.set(Zr, C1),
					T.has(Zr) && an(Zr),
					Ue.controller && T.set(Zr, Ue.controller);
			}),
			st({ fetchers: new Map(g.fetchers) });
		let fi = () => zt.forEach((Ue) => an(Ue.key));
		Q.signal.addEventListener("abort", fi);
		let { loaderResults: di, fetcherResults: pi } = await xc(
			g.matches,
			on,
			lr,
			zt,
			Ie,
		);
		if (Q.signal.aborted) return;
		Q.signal.removeEventListener("abort", fi),
			q.delete(k),
			T.delete(k),
			zt.forEach((Ue) => T.delete(Ue.key));
		let ee = qf([...di, ...pi]);
		if (ee) {
			if (ee.idx >= lr.length) {
				let Ue = zt[ee.idx - lr.length].key;
				X.add(Ue);
			}
			return Kr(Ie, ee.result);
		}
		let { loaderData: Ge, errors: gt } = Xf(
			g,
			g.matches,
			lr,
			di,
			void 0,
			zt,
			pi,
			xe,
		);
		if (g.fetchers.has(k)) {
			let Ue = un(B.data);
			g.fetchers.set(k, Ue);
		}
		bc(ir),
			g.navigation.state === "loading" && ir > H
				? (G(j, "Expected pending action"),
				  O && O.abort(),
				  Qr(g.navigation.location, {
						matches: on,
						loaderData: Ge,
						errors: gt,
						fetchers: new Map(g.fetchers),
				  }))
				: (st({
						errors: gt,
						loaderData: Gf(g.loaderData, Ge, on, gt),
						fetchers: new Map(g.fetchers),
				  }),
				  (Ne = !1));
	}
	async function w1(k, b, N, M, D, Y, U) {
		let A = g.fetchers.get(k);
		rn(k, sa(U, A ? A.data : void 0), { flushSync: Y });
		let Q = new AbortController(),
			W = ur(e.history, N, Q.signal);
		T.set(k, Q);
		let Fe = $,
			B = (await Xr("loader", W, [M], D))[0];
		if (
			(Un(B) && (B = (await sh(B, W.signal, !0)) || B),
			T.get(k) === Q && T.delete(k),
			!W.signal.aborted)
		) {
			if (ve.has(k)) {
				rn(k, un(void 0));
				return;
			}
			if (Hn(B))
				if (H > Fe) {
					rn(k, un(void 0));
					return;
				} else {
					X.add(k), await Kr(W, B);
					return;
				}
			if (St(B)) {
				Gr(k, b, B.error);
				return;
			}
			G(!Un(B), "Unhandled fetcher deferred data"), rn(k, un(B.data));
		}
	}
	async function Kr(k, b, N) {
		let {
			submission: M,
			fetcherSubmission: D,
			replace: Y,
		} = N === void 0 ? {} : N;
		b.response.headers.has("X-Remix-Revalidate") && (Ne = !0);
		let U = b.response.headers.get("Location");
		G(U, "Expected a Location header on the redirect Response"),
			(U = Qf(U, new URL(k.url), s));
		let A = Wa(g.location, U, { _isRedirect: !0 });
		if (n) {
			let ge = !1;
			if (b.response.headers.has("X-Remix-Reload-Document")) ge = !0;
			else if (rc.test(U)) {
				const Ie = e.history.createURL(U);
				ge = Ie.origin !== t.location.origin || ii(Ie.pathname, s) == null;
			}
			if (ge) {
				Y ? t.location.replace(U) : t.location.assign(U);
				return;
			}
		}
		O = null;
		let Q = Y === !0 ? Te.Replace : Te.Push,
			{ formMethod: W, formAction: Fe, formEncType: $e } = g.navigation;
		!M && !D && W && Fe && $e && (M = td(g.navigation));
		let B = M || D;
		if (Pg.has(b.response.status) && B && _t(B.formMethod))
			await zn(Q, A, {
				submission: Se({}, B, { formAction: U }),
				preventScrollReset: _,
			});
		else {
			let ge = Al(A, M);
			await zn(Q, A, {
				overrideNavigation: ge,
				fetcherSubmission: D,
				preventScrollReset: _,
			});
		}
	}
	async function Xr(k, b, N, M) {
		try {
			let D = await Ig(u, k, b, N, M, i, a);
			return await Promise.all(
				D.map((Y, U) => {
					if (Hg(Y)) {
						let A = Y.result;
						return {
							type: ye.redirect,
							response: Fg(A, b, N[U].route.id, M, s, c.v7_relativeSplatPath),
						};
					}
					return Ag(Y);
				}),
			);
		} catch (D) {
			return N.map(() => ({ type: ye.error, error: D }));
		}
	}
	async function xc(k, b, N, M, D) {
		let [Y, ...U] = await Promise.all([
			N.length ? Xr("loader", D, N, b) : [],
			...M.map((A) => {
				if (A.matches && A.match && A.controller) {
					let Q = ur(e.history, A.path, A.controller.signal);
					return Xr("loader", Q, [A.match], A.matches).then((W) => W[0]);
				} else
					return Promise.resolve({
						type: ye.error,
						error: yt(404, { pathname: A.path }),
					});
			}),
		]);
		return (
			await Promise.all([
				ed(
					k,
					N,
					Y,
					Y.map(() => D.signal),
					!1,
					g.loaderData,
				),
				ed(
					k,
					M.map((A) => A.match),
					U,
					M.map((A) => (A.controller ? A.controller.signal : null)),
					!0,
				),
			]),
			{ loaderResults: Y, fetcherResults: U }
		);
	}
	function sl() {
		(Ne = !0),
			We.push(...ul()),
			he.forEach((k, b) => {
				T.has(b) && (_e.push(b), an(b));
			});
	}
	function rn(k, b, N) {
		N === void 0 && (N = {}),
			g.fetchers.set(k, b),
			st(
				{ fetchers: new Map(g.fetchers) },
				{ flushSync: (N && N.flushSync) === !0 },
			);
	}
	function Gr(k, b, N, M) {
		M === void 0 && (M = {});
		let D = ba(g.matches, b);
		ui(k),
			st(
				{ errors: { [D.route.id]: N }, fetchers: new Map(g.fetchers) },
				{ flushSync: (M && M.flushSync) === !0 },
			);
	}
	function Sc(k) {
		return (
			c.v7_fetcherPersist &&
				(ce.set(k, (ce.get(k) || 0) + 1), ve.has(k) && ve.delete(k)),
			g.fetchers.get(k) || _g
		);
	}
	function ui(k) {
		let b = g.fetchers.get(k);
		T.has(k) && !(b && b.state === "loading" && q.has(k)) && an(k),
			he.delete(k),
			q.delete(k),
			X.delete(k),
			ve.delete(k),
			g.fetchers.delete(k);
	}
	function x1(k) {
		if (c.v7_fetcherPersist) {
			let b = (ce.get(k) || 0) - 1;
			b <= 0 ? (ce.delete(k), ve.add(k)) : ce.set(k, b);
		} else ui(k);
		st({ fetchers: new Map(g.fetchers) });
	}
	function an(k) {
		let b = T.get(k);
		G(b, "Expected fetch controller: " + k), b.abort(), T.delete(k);
	}
	function kc(k) {
		for (let b of k) {
			let N = Sc(b),
				M = un(N.data);
			g.fetchers.set(b, M);
		}
	}
	function Ec() {
		let k = [],
			b = !1;
		for (let N of X) {
			let M = g.fetchers.get(N);
			G(M, "Expected fetcher: " + N),
				M.state === "loading" && (X.delete(N), k.push(N), (b = !0));
		}
		return kc(k), b;
	}
	function bc(k) {
		let b = [];
		for (let [N, M] of q)
			if (M < k) {
				let D = g.fetchers.get(N);
				G(D, "Expected fetcher: " + N),
					D.state === "loading" && (an(N), q.delete(N), b.push(N));
			}
		return kc(b), b.length > 0;
	}
	function S1(k, b) {
		let N = g.blockers.get(k) || la;
		return ze.get(k) !== b && ze.set(k, b), N;
	}
	function Cc(k) {
		g.blockers.delete(k), ze.delete(k);
	}
	function ci(k, b) {
		let N = g.blockers.get(k) || la;
		G(
			(N.state === "unblocked" && b.state === "blocked") ||
				(N.state === "blocked" && b.state === "blocked") ||
				(N.state === "blocked" && b.state === "proceeding") ||
				(N.state === "blocked" && b.state === "unblocked") ||
				(N.state === "proceeding" && b.state === "unblocked"),
			"Invalid blocker state transition: " + N.state + " -> " + b.state,
		);
		let M = new Map(g.blockers);
		M.set(k, b), st({ blockers: M });
	}
	function jc(k) {
		let { currentLocation: b, nextLocation: N, historyAction: M } = k;
		if (ze.size === 0) return;
		ze.size > 1 && $r(!1, "A router only supports one blocker at a time");
		let D = Array.from(ze.entries()),
			[Y, U] = D[D.length - 1],
			A = g.blockers.get(Y);
		if (
			!(A && A.state === "proceeding") &&
			U({ currentLocation: b, nextLocation: N, historyAction: M })
		)
			return Y;
	}
	function ul(k) {
		let b = [];
		return (
			xe.forEach((N, M) => {
				(!k || k(M)) && (N.cancel(), b.push(M), xe.delete(M));
			}),
			b
		);
	}
	function k1(k, b, N) {
		if (((w = k), (y = b), (x = N || null), !C && g.navigation === Dl)) {
			C = !0;
			let M = Pc(g.location, g.matches);
			M != null && st({ restoreScrollPosition: M });
		}
		return () => {
			(w = null), (y = null), (x = null);
		};
	}
	function Nc(k, b) {
		return (
			(x &&
				x(
					k,
					b.map((M) => ig(M, g.loaderData)),
				)) ||
			k.key
		);
	}
	function E1(k, b) {
		if (w && y) {
			let N = Nc(k, b);
			w[N] = y();
		}
	}
	function Pc(k, b) {
		if (w) {
			let N = Nc(k, b),
				M = w[N];
			if (typeof M == "number") return M;
		}
		return null;
	}
	function b1(k) {
		(i = {}), (l = As(k, a, void 0, i));
	}
	return (
		(R = {
			get basename() {
				return s;
			},
			get future() {
				return c;
			},
			get state() {
				return g;
			},
			get routes() {
				return o;
			},
			get window() {
				return t;
			},
			initialize: f1,
			subscribe: p1,
			enableScrollRestoration: k1,
			navigate: wc,
			fetch: g1,
			revalidate: m1,
			createHref: (k) => e.history.createHref(k),
			encodeLocation: (k) => e.history.encodeLocation(k),
			getFetcher: Sc,
			deleteFetcher: x1,
			dispose: d1,
			getBlocker: S1,
			deleteBlocker: Cc,
			_internalFetchControllers: T,
			_internalActiveDeferreds: xe,
			_internalSetRoutes: b1,
		}),
		R
	);
}
function Rg(e) {
	return (
		e != null &&
		(("formData" in e && e.formData != null) ||
			("body" in e && e.body !== void 0))
	);
}
function Fs(e, t, n, r, a, i, o, l) {
	let s, u;
	if (o) {
		s = [];
		for (let f of t)
			if ((s.push(f), f.route.id === o)) {
				u = f;
				break;
			}
	} else (s = t), (u = t[t.length - 1]);
	let c = nh(a || ".", th(s, i), ii(e.pathname, n) || e.pathname, l === "path");
	return (
		a == null && ((c.search = e.search), (c.hash = e.hash)),
		(a == null || a === "" || a === ".") &&
			u &&
			u.route.index &&
			!ac(c.search) &&
			(c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
		r &&
			n !== "/" &&
			(c.pathname = c.pathname === "/" ? n : Cn([n, c.pathname])),
		ai(c)
	);
}
function Vf(e, t, n, r) {
	if (!r || !Rg(r)) return { path: n };
	if (r.formMethod && !Bg(r.formMethod))
		return { path: n, error: yt(405, { method: r.formMethod }) };
	let a = () => ({ path: n, error: yt(400, { type: "invalid-body" }) }),
		i = r.formMethod || "get",
		o = e ? i.toUpperCase() : i.toLowerCase(),
		l = oh(n);
	if (r.body !== void 0) {
		if (r.formEncType === "text/plain") {
			if (!_t(o)) return a();
			let p =
				typeof r.body == "string"
					? r.body
					: r.body instanceof FormData || r.body instanceof URLSearchParams
					? Array.from(r.body.entries()).reduce((w, x) => {
							let [y, C] = x;
							return (
								"" +
								w +
								y +
								"=" +
								C +
								`
`
							);
					  }, "")
					: String(r.body);
			return {
				path: n,
				submission: {
					formMethod: o,
					formAction: l,
					formEncType: r.formEncType,
					formData: void 0,
					json: void 0,
					text: p,
				},
			};
		} else if (r.formEncType === "application/json") {
			if (!_t(o)) return a();
			try {
				let p = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
				return {
					path: n,
					submission: {
						formMethod: o,
						formAction: l,
						formEncType: r.formEncType,
						formData: void 0,
						json: p,
						text: void 0,
					},
				};
			} catch {
				return a();
			}
		}
	}
	G(
		typeof FormData == "function",
		"FormData is not available in this environment",
	);
	let s, u;
	if (r.formData) (s = $s(r.formData)), (u = r.formData);
	else if (r.body instanceof FormData) (s = $s(r.body)), (u = r.body);
	else if (r.body instanceof URLSearchParams) (s = r.body), (u = Kf(s));
	else if (r.body == null) (s = new URLSearchParams()), (u = new FormData());
	else
		try {
			(s = new URLSearchParams(r.body)), (u = Kf(s));
		} catch {
			return a();
		}
	let c = {
		formMethod: o,
		formAction: l,
		formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
		formData: u,
		json: void 0,
		text: void 0,
	};
	if (_t(c.formMethod)) return { path: n, submission: c };
	let f = Mn(n);
	return (
		t && f.search && ac(f.search) && s.append("index", ""),
		(f.search = "?" + s),
		{ path: ai(f), submission: c }
	);
}
function Og(e, t) {
	let n = e;
	if (t) {
		let r = e.findIndex((a) => a.route.id === t);
		r >= 0 && (n = e.slice(0, r));
	}
	return n;
}
function Bf(e, t, n, r, a, i, o, l, s, u, c, f, p, w, x, y) {
	let C = y ? (St(y[1]) ? y[1].error : y[1].data) : void 0,
		h = e.createURL(t.location),
		m = e.createURL(a),
		v = y && St(y[1]) ? y[0] : void 0,
		E = v ? Og(n, v) : n,
		P = y ? y[1].statusCode : void 0,
		R = o && P && P >= 400,
		g = E.filter((_, O) => {
			let { route: V } = _;
			if (V.lazy) return !0;
			if (V.loader == null) return !1;
			if (i)
				return typeof V.loader != "function" || V.loader.hydrate
					? !0
					: t.loaderData[V.id] === void 0 &&
							(!t.errors || t.errors[V.id] === void 0);
			if (
				Mg(t.loaderData, t.matches[O], _) ||
				s.some((oe) => oe === _.route.id)
			)
				return !0;
			let te = t.matches[O],
				ne = _;
			return Wf(
				_,
				Se(
					{
						currentUrl: h,
						currentParams: te.params,
						nextUrl: m,
						nextParams: ne.params,
					},
					r,
					{
						actionResult: C,
						unstable_actionStatus: P,
						defaultShouldRevalidate: R
							? !1
							: l ||
							  h.pathname + h.search === m.pathname + m.search ||
							  h.search !== m.search ||
							  ih(te, ne),
					},
				),
			);
		}),
		j = [];
	return (
		f.forEach((_, O) => {
			if (i || !n.some((Ne) => Ne.route.id === _.routeId) || c.has(O)) return;
			let V = kr(w, _.path, x);
			if (!V) {
				j.push({
					key: O,
					routeId: _.routeId,
					path: _.path,
					matches: null,
					match: null,
					controller: null,
				});
				return;
			}
			let te = t.fetchers.get(O),
				ne = Us(V, _.path),
				oe = !1;
			p.has(O)
				? (oe = !1)
				: u.includes(O)
				? (oe = !0)
				: te && te.state !== "idle" && te.data === void 0
				? (oe = l)
				: (oe = Wf(
						ne,
						Se(
							{
								currentUrl: h,
								currentParams: t.matches[t.matches.length - 1].params,
								nextUrl: m,
								nextParams: n[n.length - 1].params,
							},
							r,
							{
								actionResult: C,
								unstable_actionStatus: P,
								defaultShouldRevalidate: R ? !1 : l,
							},
						),
				  )),
				oe &&
					j.push({
						key: O,
						routeId: _.routeId,
						path: _.path,
						matches: V,
						match: ne,
						controller: new AbortController(),
					});
		}),
		[g, j]
	);
}
function Mg(e, t, n) {
	let r = !t || n.route.id !== t.route.id,
		a = e[n.route.id] === void 0;
	return r || a;
}
function ih(e, t) {
	let n = e.route.path;
	return (
		e.pathname !== t.pathname ||
		(n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
	);
}
function Wf(e, t) {
	if (e.route.shouldRevalidate) {
		let n = e.route.shouldRevalidate(t);
		if (typeof n == "boolean") return n;
	}
	return t.defaultShouldRevalidate;
}
async function Yf(e, t, n) {
	if (!e.lazy) return;
	let r = await e.lazy();
	if (!e.lazy) return;
	let a = n[e.id];
	G(a, "No route found in manifest");
	let i = {};
	for (let o in r) {
		let s = a[o] !== void 0 && o !== "hasErrorBoundary";
		$r(
			!s,
			'Route "' +
				a.id +
				'" has a static property "' +
				o +
				'" defined but its lazy function is also returning a value for this property. ' +
				('The lazy route property "' + o + '" will be ignored.'),
		),
			!s && !rg.has(o) && (i[o] = r[o]);
	}
	Object.assign(a, i), Object.assign(a, Se({}, t(a), { lazy: void 0 }));
}
function zg(e) {
	return Promise.all(e.matches.map((t) => t.resolve()));
}
async function Ig(e, t, n, r, a, i, o, l) {
	let s = r.reduce((f, p) => f.add(p.route.id), new Set()),
		u = new Set(),
		c = await e({
			matches: a.map((f) => {
				let p = s.has(f.route.id);
				return Se({}, f, {
					shouldLoad: p,
					resolve: (x) => (
						u.add(f.route.id),
						p
							? Dg(t, n, f, i, o, x, l)
							: Promise.resolve({ type: ye.data, result: void 0 })
					),
				});
			}),
			request: n,
			params: a[0].params,
			context: l,
		});
	return (
		a.forEach((f) =>
			G(
				u.has(f.route.id),
				'`match.resolve()` was not called for route id "' +
					f.route.id +
					'". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.',
			),
		),
		c.filter((f, p) => s.has(a[p].route.id))
	);
}
async function Dg(e, t, n, r, a, i, o) {
	let l,
		s,
		u = (c) => {
			let f,
				p = new Promise((y, C) => (f = C));
			(s = () => f()), t.signal.addEventListener("abort", s);
			let w = (y) =>
					typeof c != "function"
						? Promise.reject(
								new Error(
									"You cannot call the handler for a route which defines a boolean " +
										('"' + e + '" [routeId: ' + n.route.id + "]"),
								),
						  )
						: c(
								{ request: t, params: n.params, context: o },
								...(y !== void 0 ? [y] : []),
						  ),
				x;
			return (
				i
					? (x = i((y) => w(y)))
					: (x = (async () => {
							try {
								return { type: "data", result: await w() };
							} catch (y) {
								return { type: "error", result: y };
							}
					  })()),
				Promise.race([x, p])
			);
		};
	try {
		let c = n.route[e];
		if (n.route.lazy)
			if (c) {
				let f,
					[p] = await Promise.all([
						u(c).catch((w) => {
							f = w;
						}),
						Yf(n.route, a, r),
					]);
				if (f !== void 0) throw f;
				l = p;
			} else if ((await Yf(n.route, a, r), (c = n.route[e]), c)) l = await u(c);
			else if (e === "action") {
				let f = new URL(t.url),
					p = f.pathname + f.search;
				throw yt(405, { method: t.method, pathname: p, routeId: n.route.id });
			} else return { type: ye.data, result: void 0 };
		else if (c) l = await u(c);
		else {
			let f = new URL(t.url),
				p = f.pathname + f.search;
			throw yt(404, { pathname: p });
		}
		G(
			l.result !== void 0,
			"You defined " +
				(e === "action" ? "an action" : "a loader") +
				" for route " +
				('"' +
					n.route.id +
					"\" but didn't return anything from your `" +
					e +
					"` ") +
				"function. Please return a value or `null`.",
		);
	} catch (c) {
		return { type: ye.error, result: c };
	} finally {
		s && t.signal.removeEventListener("abort", s);
	}
	return l;
}
async function Ag(e) {
	let { result: t, type: n, status: r } = e;
	if (lh(t)) {
		let o;
		try {
			let l = t.headers.get("Content-Type");
			l && /\bapplication\/json\b/.test(l)
				? t.body == null
					? (o = null)
					: (o = await t.json())
				: (o = await t.text());
		} catch (l) {
			return { type: ye.error, error: l };
		}
		return n === ye.error
			? {
					type: ye.error,
					error: new tc(t.status, t.statusText, o),
					statusCode: t.status,
					headers: t.headers,
			  }
			: { type: ye.data, data: o, statusCode: t.status, headers: t.headers };
	}
	if (n === ye.error)
		return { type: ye.error, error: t, statusCode: nc(t) ? t.status : r };
	if (Vg(t)) {
		var a, i;
		return {
			type: ye.deferred,
			deferredData: t,
			statusCode: (a = t.init) == null ? void 0 : a.status,
			headers:
				((i = t.init) == null ? void 0 : i.headers) &&
				new Headers(t.init.headers),
		};
	}
	return { type: ye.data, data: t, statusCode: r };
}
function Fg(e, t, n, r, a, i) {
	let o = e.headers.get("Location");
	if (
		(G(
			o,
			"Redirects returned/thrown from loaders/actions must have a Location header",
		),
		!rc.test(o))
	) {
		let l = r.slice(0, r.findIndex((s) => s.route.id === n) + 1);
		(o = Fs(new URL(t.url), l, a, !0, o, i)), e.headers.set("Location", o);
	}
	return e;
}
function Qf(e, t, n) {
	if (rc.test(e)) {
		let r = e,
			a = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r),
			i = ii(a.pathname, n) != null;
		if (a.origin === t.origin && i) return a.pathname + a.search + a.hash;
	}
	return e;
}
function ur(e, t, n, r) {
	let a = e.createURL(oh(t)).toString(),
		i = { signal: n };
	if (r && _t(r.formMethod)) {
		let { formMethod: o, formEncType: l } = r;
		(i.method = o.toUpperCase()),
			l === "application/json"
				? ((i.headers = new Headers({ "Content-Type": l })),
				  (i.body = JSON.stringify(r.json)))
				: l === "text/plain"
				? (i.body = r.text)
				: l === "application/x-www-form-urlencoded" && r.formData
				? (i.body = $s(r.formData))
				: (i.body = r.formData);
	}
	return new Request(a, i);
}
function $s(e) {
	let t = new URLSearchParams();
	for (let [n, r] of e.entries())
		t.append(n, typeof r == "string" ? r : r.name);
	return t;
}
function Kf(e) {
	let t = new FormData();
	for (let [n, r] of e.entries()) t.append(n, r);
	return t;
}
function $g(e, t, n, r, a, i) {
	let o = {},
		l = null,
		s,
		u = !1,
		c = {},
		f = r && St(r[1]) ? r[1].error : void 0;
	return (
		n.forEach((p, w) => {
			let x = t[w].route.id;
			if (
				(G(!Hn(p), "Cannot handle redirect results in processLoaderData"),
				St(p))
			) {
				let y = p.error;
				f !== void 0 && ((y = f), (f = void 0)), (l = l || {});
				{
					let C = ba(e, x);
					l[C.route.id] == null && (l[C.route.id] = y);
				}
				(o[x] = void 0),
					u || ((u = !0), (s = nc(p.error) ? p.error.status : 500)),
					p.headers && (c[x] = p.headers);
			} else
				Un(p)
					? (a.set(x, p.deferredData),
					  (o[x] = p.deferredData.data),
					  p.statusCode != null &&
							p.statusCode !== 200 &&
							!u &&
							(s = p.statusCode),
					  p.headers && (c[x] = p.headers))
					: ((o[x] = p.data),
					  p.statusCode && p.statusCode !== 200 && !u && (s = p.statusCode),
					  p.headers && (c[x] = p.headers));
		}),
		f !== void 0 && r && ((l = { [r[0]]: f }), (o[r[0]] = void 0)),
		{ loaderData: o, errors: l, statusCode: s || 200, loaderHeaders: c }
	);
}
function Xf(e, t, n, r, a, i, o, l) {
	let { loaderData: s, errors: u } = $g(t, n, r, a, l);
	for (let c = 0; c < i.length; c++) {
		let { key: f, match: p, controller: w } = i[c];
		G(
			o !== void 0 && o[c] !== void 0,
			"Did not find corresponding fetcher result",
		);
		let x = o[c];
		if (!(w && w.signal.aborted))
			if (St(x)) {
				let y = ba(e.matches, p == null ? void 0 : p.route.id);
				(u && u[y.route.id]) || (u = Se({}, u, { [y.route.id]: x.error })),
					e.fetchers.delete(f);
			} else if (Hn(x)) G(!1, "Unhandled fetcher revalidation redirect");
			else if (Un(x)) G(!1, "Unhandled fetcher deferred data");
			else {
				let y = un(x.data);
				e.fetchers.set(f, y);
			}
	}
	return { loaderData: s, errors: u };
}
function Gf(e, t, n, r) {
	let a = Se({}, t);
	for (let i of n) {
		let o = i.route.id;
		if (
			(t.hasOwnProperty(o)
				? t[o] !== void 0 && (a[o] = t[o])
				: e[o] !== void 0 && i.route.loader && (a[o] = e[o]),
			r && r.hasOwnProperty(o))
		)
			break;
	}
	return a;
}
function Jf(e) {
	return e
		? St(e[1])
			? { actionData: {} }
			: { actionData: { [e[0]]: e[1].data } }
		: {};
}
function ba(e, t) {
	return (
		(t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
			.reverse()
			.find((r) => r.route.hasErrorBoundary === !0) || e[0]
	);
}
function Zf(e) {
	let t =
		e.length === 1
			? e[0]
			: e.find((n) => n.index || !n.path || n.path === "/") || {
					id: "__shim-error-route__",
			  };
	return {
		matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
		route: t,
	};
}
function yt(e, t) {
	let { pathname: n, routeId: r, method: a, type: i } = t === void 0 ? {} : t,
		o = "Unknown Server Error",
		l = "Unknown @remix-run/router error";
	return (
		e === 400
			? ((o = "Bad Request"),
			  a && n && r
					? (l =
							"You made a " +
							a +
							' request to "' +
							n +
							'" but ' +
							('did not provide a `loader` for route "' + r + '", ') +
							"so there is no way to handle the request.")
					: i === "defer-action"
					? (l = "defer() is not supported in actions")
					: i === "invalid-body" && (l = "Unable to encode submission body"))
			: e === 403
			? ((o = "Forbidden"),
			  (l = 'Route "' + r + '" does not match URL "' + n + '"'))
			: e === 404
			? ((o = "Not Found"), (l = 'No route matches URL "' + n + '"'))
			: e === 405 &&
			  ((o = "Method Not Allowed"),
			  a && n && r
					? (l =
							"You made a " +
							a.toUpperCase() +
							' request to "' +
							n +
							'" but ' +
							('did not provide an `action` for route "' + r + '", ') +
							"so there is no way to handle the request.")
					: a && (l = 'Invalid request method "' + a.toUpperCase() + '"')),
		new tc(e || 500, o, new Error(l), !0)
	);
}
function qf(e) {
	for (let t = e.length - 1; t >= 0; t--) {
		let n = e[t];
		if (Hn(n)) return { result: n, idx: t };
	}
}
function oh(e) {
	let t = typeof e == "string" ? Mn(e) : e;
	return ai(Se({}, t, { hash: "" }));
}
function Ug(e, t) {
	return e.pathname !== t.pathname || e.search !== t.search
		? !1
		: e.hash === ""
		? t.hash !== ""
		: e.hash === t.hash
		? !0
		: t.hash !== "";
}
function Hg(e) {
	return lh(e.result) && Ng.has(e.result.status);
}
function Un(e) {
	return e.type === ye.deferred;
}
function St(e) {
	return e.type === ye.error;
}
function Hn(e) {
	return (e && e.type) === ye.redirect;
}
function Vg(e) {
	let t = e;
	return (
		t &&
		typeof t == "object" &&
		typeof t.data == "object" &&
		typeof t.subscribe == "function" &&
		typeof t.cancel == "function" &&
		typeof t.resolveData == "function"
	);
}
function lh(e) {
	return (
		e != null &&
		typeof e.status == "number" &&
		typeof e.statusText == "string" &&
		typeof e.headers == "object" &&
		typeof e.body < "u"
	);
}
function Bg(e) {
	return jg.has(e.toLowerCase());
}
function _t(e) {
	return bg.has(e.toLowerCase());
}
async function ed(e, t, n, r, a, i) {
	for (let o = 0; o < n.length; o++) {
		let l = n[o],
			s = t[o];
		if (!s) continue;
		let u = e.find((f) => f.route.id === s.route.id),
			c = u != null && !ih(u, s) && (i && i[s.route.id]) !== void 0;
		if (Un(l) && (a || c)) {
			let f = r[o];
			G(f, "Expected an AbortSignal for revalidating fetcher deferred result"),
				await sh(l, f, a).then((p) => {
					p && (n[o] = p || n[o]);
				});
		}
	}
}
async function sh(e, t, n) {
	if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
		if (n)
			try {
				return { type: ye.data, data: e.deferredData.unwrappedData };
			} catch (a) {
				return { type: ye.error, error: a };
			}
		return { type: ye.data, data: e.deferredData.data };
	}
}
function ac(e) {
	return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Us(e, t) {
	let n = typeof t == "string" ? Mn(t).search : t.search;
	if (e[e.length - 1].route.index && ac(n || "")) return e[e.length - 1];
	let r = eh(e);
	return r[r.length - 1];
}
function td(e) {
	let {
		formMethod: t,
		formAction: n,
		formEncType: r,
		text: a,
		formData: i,
		json: o,
	} = e;
	if (!(!t || !n || !r)) {
		if (a != null)
			return {
				formMethod: t,
				formAction: n,
				formEncType: r,
				formData: void 0,
				json: void 0,
				text: a,
			};
		if (i != null)
			return {
				formMethod: t,
				formAction: n,
				formEncType: r,
				formData: i,
				json: void 0,
				text: void 0,
			};
		if (o !== void 0)
			return {
				formMethod: t,
				formAction: n,
				formEncType: r,
				formData: void 0,
				json: o,
				text: void 0,
			};
	}
}
function Al(e, t) {
	return t
		? {
				state: "loading",
				location: e,
				formMethod: t.formMethod,
				formAction: t.formAction,
				formEncType: t.formEncType,
				formData: t.formData,
				json: t.json,
				text: t.text,
		  }
		: {
				state: "loading",
				location: e,
				formMethod: void 0,
				formAction: void 0,
				formEncType: void 0,
				formData: void 0,
				json: void 0,
				text: void 0,
		  };
}
function Wg(e, t) {
	return {
		state: "submitting",
		location: e,
		formMethod: t.formMethod,
		formAction: t.formAction,
		formEncType: t.formEncType,
		formData: t.formData,
		json: t.json,
		text: t.text,
	};
}
function sa(e, t) {
	return e
		? {
				state: "loading",
				formMethod: e.formMethod,
				formAction: e.formAction,
				formEncType: e.formEncType,
				formData: e.formData,
				json: e.json,
				text: e.text,
				data: t,
		  }
		: {
				state: "loading",
				formMethod: void 0,
				formAction: void 0,
				formEncType: void 0,
				formData: void 0,
				json: void 0,
				text: void 0,
				data: t,
		  };
}
function Yg(e, t) {
	return {
		state: "submitting",
		formMethod: e.formMethod,
		formAction: e.formAction,
		formEncType: e.formEncType,
		formData: e.formData,
		json: e.json,
		text: e.text,
		data: t ? t.data : void 0,
	};
}
function un(e) {
	return {
		state: "idle",
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
		data: e,
	};
}
function Qg(e, t) {
	try {
		let n = e.sessionStorage.getItem(ah);
		if (n) {
			let r = JSON.parse(n);
			for (let [a, i] of Object.entries(r || {}))
				i && Array.isArray(i) && t.set(a, new Set(i || []));
		}
	} catch {}
}
function Kg(e, t) {
	if (t.size > 0) {
		let n = {};
		for (let [r, a] of t) n[r] = [...a];
		try {
			e.sessionStorage.setItem(ah, JSON.stringify(n));
		} catch (r) {
			$r(
				!1,
				"Failed to save applied view transitions in sessionStorage (" +
					r +
					").",
			);
		}
	}
}
/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Po() {
	return (
		(Po = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		Po.apply(this, arguments)
	);
}
const Zo = S.createContext(null),
	uh = S.createContext(null),
	qo = S.createContext(null),
	ic = S.createContext(null),
	rr = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
	ch = S.createContext(null);
function el() {
	return S.useContext(ic) != null;
}
function tl() {
	return el() || G(!1), S.useContext(ic).location;
}
function fh(e) {
	S.useContext(qo).static || S.useLayoutEffect(e);
}
function ar() {
	let { isDataRoute: e } = S.useContext(rr);
	return e ? sy() : Xg();
}
function Xg() {
	el() || G(!1);
	let e = S.useContext(Zo),
		{ basename: t, future: n, navigator: r } = S.useContext(qo),
		{ matches: a } = S.useContext(rr),
		{ pathname: i } = tl(),
		o = JSON.stringify(th(a, n.v7_relativeSplatPath)),
		l = S.useRef(!1);
	return (
		fh(() => {
			l.current = !0;
		}),
		S.useCallback(
			function (u, c) {
				if ((c === void 0 && (c = {}), !l.current)) return;
				if (typeof u == "number") {
					r.go(u);
					return;
				}
				let f = nh(u, JSON.parse(o), i, c.relative === "path");
				e == null &&
					t !== "/" &&
					(f.pathname = f.pathname === "/" ? t : Cn([t, f.pathname])),
					(c.replace ? r.replace : r.push)(f, c.state, c);
			},
			[t, r, o, i, e],
		)
	);
}
const Gg = S.createContext(null);
function Jg(e) {
	let t = S.useContext(rr).outlet;
	return t && S.createElement(Gg.Provider, { value: e }, t);
}
function Zg(e, t, n, r) {
	el() || G(!1);
	let { navigator: a } = S.useContext(qo),
		{ matches: i } = S.useContext(rr),
		o = i[i.length - 1],
		l = o ? o.params : {};
	o && o.pathname;
	let s = o ? o.pathnameBase : "/";
	o && o.route;
	let u = tl(),
		c;
	c = u;
	let f = c.pathname || "/",
		p = f;
	if (s !== "/") {
		let y = s.replace(/^\//, "").split("/");
		p = "/" + f.replace(/^\//, "").split("/").slice(y.length).join("/");
	}
	let w = kr(e, { pathname: p });
	return ry(
		w &&
			w.map((y) =>
				Object.assign({}, y, {
					params: Object.assign({}, l, y.params),
					pathname: Cn([
						s,
						a.encodeLocation
							? a.encodeLocation(y.pathname).pathname
							: y.pathname,
					]),
					pathnameBase:
						y.pathnameBase === "/"
							? s
							: Cn([
									s,
									a.encodeLocation
										? a.encodeLocation(y.pathnameBase).pathname
										: y.pathnameBase,
							  ]),
				}),
			),
		i,
		n,
		r,
	);
}
function qg() {
	let e = ly(),
		t = nc(e)
			? e.status + " " + e.statusText
			: e instanceof Error
			? e.message
			: JSON.stringify(e),
		n = e instanceof Error ? e.stack : null,
		a = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
	return S.createElement(
		S.Fragment,
		null,
		S.createElement("h2", null, "Unexpected Application Error!"),
		S.createElement("h3", { style: { fontStyle: "italic" } }, t),
		n ? S.createElement("pre", { style: a }, n) : null,
		null,
	);
}
const ey = S.createElement(qg, null);
class ty extends S.Component {
	constructor(t) {
		super(t),
			(this.state = {
				location: t.location,
				revalidation: t.revalidation,
				error: t.error,
			});
	}
	static getDerivedStateFromError(t) {
		return { error: t };
	}
	static getDerivedStateFromProps(t, n) {
		return n.location !== t.location ||
			(n.revalidation !== "idle" && t.revalidation === "idle")
			? { error: t.error, location: t.location, revalidation: t.revalidation }
			: {
					error: t.error !== void 0 ? t.error : n.error,
					location: n.location,
					revalidation: t.revalidation || n.revalidation,
			  };
	}
	componentDidCatch(t, n) {
		console.error(
			"React Router caught the following error during render",
			t,
			n,
		);
	}
	render() {
		return this.state.error !== void 0
			? S.createElement(
					rr.Provider,
					{ value: this.props.routeContext },
					S.createElement(ch.Provider, {
						value: this.state.error,
						children: this.props.component,
					}),
			  )
			: this.props.children;
	}
}
function ny(e) {
	let { routeContext: t, match: n, children: r } = e,
		a = S.useContext(Zo);
	return (
		a &&
			a.static &&
			a.staticContext &&
			(n.route.errorElement || n.route.ErrorBoundary) &&
			(a.staticContext._deepestRenderedBoundaryId = n.route.id),
		S.createElement(rr.Provider, { value: t }, r)
	);
}
function ry(e, t, n, r) {
	var a;
	if (
		(t === void 0 && (t = []),
		n === void 0 && (n = null),
		r === void 0 && (r = null),
		e == null)
	) {
		var i;
		if ((i = n) != null && i.errors) e = n.matches;
		else return null;
	}
	let o = e,
		l = (a = n) == null ? void 0 : a.errors;
	if (l != null) {
		let c = o.findIndex(
			(f) => f.route.id && (l == null ? void 0 : l[f.route.id]) !== void 0,
		);
		c >= 0 || G(!1), (o = o.slice(0, Math.min(o.length, c + 1)));
	}
	let s = !1,
		u = -1;
	if (n && r && r.v7_partialHydration)
		for (let c = 0; c < o.length; c++) {
			let f = o[c];
			if (
				((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c),
				f.route.id)
			) {
				let { loaderData: p, errors: w } = n,
					x =
						f.route.loader &&
						p[f.route.id] === void 0 &&
						(!w || w[f.route.id] === void 0);
				if (f.route.lazy || x) {
					(s = !0), u >= 0 ? (o = o.slice(0, u + 1)) : (o = [o[0]]);
					break;
				}
			}
		}
	return o.reduceRight((c, f, p) => {
		let w,
			x = !1,
			y = null,
			C = null;
		n &&
			((w = l && f.route.id ? l[f.route.id] : void 0),
			(y = f.route.errorElement || ey),
			s &&
				(u < 0 && p === 0
					? ((x = !0), (C = null))
					: u === p &&
					  ((x = !0), (C = f.route.hydrateFallbackElement || null))));
		let h = t.concat(o.slice(0, p + 1)),
			m = () => {
				let v;
				return (
					w
						? (v = y)
						: x
						? (v = C)
						: f.route.Component
						? (v = S.createElement(f.route.Component, null))
						: f.route.element
						? (v = f.route.element)
						: (v = c),
					S.createElement(ny, {
						match: f,
						routeContext: { outlet: c, matches: h, isDataRoute: n != null },
						children: v,
					})
				);
			};
		return n && (f.route.ErrorBoundary || f.route.errorElement || p === 0)
			? S.createElement(ty, {
					location: n.location,
					revalidation: n.revalidation,
					component: y,
					error: w,
					children: m(),
					routeContext: { outlet: null, matches: h, isDataRoute: !0 },
			  })
			: m();
	}, null);
}
var dh = (function (e) {
		return (
			(e.UseBlocker = "useBlocker"),
			(e.UseRevalidator = "useRevalidator"),
			(e.UseNavigateStable = "useNavigate"),
			e
		);
	})(dh || {}),
	_o = (function (e) {
		return (
			(e.UseBlocker = "useBlocker"),
			(e.UseLoaderData = "useLoaderData"),
			(e.UseActionData = "useActionData"),
			(e.UseRouteError = "useRouteError"),
			(e.UseNavigation = "useNavigation"),
			(e.UseRouteLoaderData = "useRouteLoaderData"),
			(e.UseMatches = "useMatches"),
			(e.UseRevalidator = "useRevalidator"),
			(e.UseNavigateStable = "useNavigate"),
			(e.UseRouteId = "useRouteId"),
			e
		);
	})(_o || {});
function ay(e) {
	let t = S.useContext(Zo);
	return t || G(!1), t;
}
function iy(e) {
	let t = S.useContext(uh);
	return t || G(!1), t;
}
function oy(e) {
	let t = S.useContext(rr);
	return t || G(!1), t;
}
function ph(e) {
	let t = oy(),
		n = t.matches[t.matches.length - 1];
	return n.route.id || G(!1), n.route.id;
}
function ly() {
	var e;
	let t = S.useContext(ch),
		n = iy(_o.UseRouteError),
		r = ph(_o.UseRouteError);
	return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function sy() {
	let { router: e } = ay(dh.UseNavigateStable),
		t = ph(_o.UseNavigateStable),
		n = S.useRef(!1);
	return (
		fh(() => {
			n.current = !0;
		}),
		S.useCallback(
			function (a, i) {
				i === void 0 && (i = {}),
					n.current &&
						(typeof a == "number"
							? e.navigate(a)
							: e.navigate(a, Po({ fromRouteId: t }, i)));
			},
			[e, t],
		)
	);
}
function mh(e) {
	return Jg(e.context);
}
function Je(e) {
	G(!1);
}
function uy(e) {
	let {
		basename: t = "/",
		children: n = null,
		location: r,
		navigationType: a = Te.Pop,
		navigator: i,
		static: o = !1,
		future: l,
	} = e;
	el() && G(!1);
	let s = t.replace(/^\/*/, "/"),
		u = S.useMemo(
			() => ({
				basename: s,
				navigator: i,
				static: o,
				future: Po({ v7_relativeSplatPath: !1 }, l),
			}),
			[s, l, i, o],
		);
	typeof r == "string" && (r = Mn(r));
	let {
			pathname: c = "/",
			search: f = "",
			hash: p = "",
			state: w = null,
			key: x = "default",
		} = r,
		y = S.useMemo(() => {
			let C = ii(c, s);
			return C == null
				? null
				: {
						location: { pathname: C, search: f, hash: p, state: w, key: x },
						navigationType: a,
				  };
		}, [s, c, f, p, w, x, a]);
	return y == null
		? null
		: S.createElement(
				qo.Provider,
				{ value: u },
				S.createElement(ic.Provider, { children: n, value: y }),
		  );
}
new Promise(() => {});
function Hs(e, t) {
	t === void 0 && (t = []);
	let n = [];
	return (
		S.Children.forEach(e, (r, a) => {
			if (!S.isValidElement(r)) return;
			let i = [...t, a];
			if (r.type === S.Fragment) {
				n.push.apply(n, Hs(r.props.children, i));
				return;
			}
			r.type !== Je && G(!1), !r.props.index || !r.props.children || G(!1);
			let o = {
				id: r.props.id || i.join("-"),
				caseSensitive: r.props.caseSensitive,
				element: r.props.element,
				Component: r.props.Component,
				index: r.props.index,
				path: r.props.path,
				loader: r.props.loader,
				action: r.props.action,
				errorElement: r.props.errorElement,
				ErrorBoundary: r.props.ErrorBoundary,
				hasErrorBoundary:
					r.props.ErrorBoundary != null || r.props.errorElement != null,
				shouldRevalidate: r.props.shouldRevalidate,
				handle: r.props.handle,
				lazy: r.props.lazy,
			};
			r.props.children && (o.children = Hs(r.props.children, i)), n.push(o);
		}),
		n
	);
}
function cy(e) {
	let t = {
		hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
	};
	return (
		e.Component &&
			Object.assign(t, {
				element: S.createElement(e.Component),
				Component: void 0,
			}),
		e.HydrateFallback &&
			Object.assign(t, {
				hydrateFallbackElement: S.createElement(e.HydrateFallback),
				HydrateFallback: void 0,
			}),
		e.ErrorBoundary &&
			Object.assign(t, {
				errorElement: S.createElement(e.ErrorBoundary),
				ErrorBoundary: void 0,
			}),
		t
	);
}
/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function To() {
	return (
		(To = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		To.apply(this, arguments)
	);
}
const fy = "6";
try {
	window.__reactRouterVersion = fy;
} catch {}
function dy(e, t) {
	return Lg({
		basename: void 0,
		future: To({}, void 0, { v7_prependBasename: !0 }),
		history: eg({ window: void 0 }),
		hydrationData: py(),
		routes: e,
		mapRouteProperties: cy,
		unstable_dataStrategy: void 0,
		window: void 0,
	}).initialize();
}
function py() {
	var e;
	let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
	return t && t.errors && (t = To({}, t, { errors: my(t.errors) })), t;
}
function my(e) {
	if (!e) return null;
	let t = Object.entries(e),
		n = {};
	for (let [r, a] of t)
		if (a && a.__type === "RouteErrorResponse")
			n[r] = new tc(a.status, a.statusText, a.data, a.internal === !0);
		else if (a && a.__type === "Error") {
			if (a.__subType) {
				let i = window[a.__subType];
				if (typeof i == "function")
					try {
						let o = new i(a.message);
						(o.stack = ""), (n[r] = o);
					} catch {}
			}
			if (n[r] == null) {
				let i = new Error(a.message);
				(i.stack = ""), (n[r] = i);
			}
		} else n[r] = a;
	return n;
}
const hy = S.createContext({ isTransitioning: !1 }),
	vy = S.createContext(new Map()),
	gy = "startTransition",
	nd = U1[gy],
	yy = "flushSync",
	rd = q0[yy];
function wy(e) {
	nd ? nd(e) : e();
}
function ua(e) {
	rd ? rd(e) : e();
}
class xy {
	constructor() {
		(this.status = "pending"),
			(this.promise = new Promise((t, n) => {
				(this.resolve = (r) => {
					this.status === "pending" && ((this.status = "resolved"), t(r));
				}),
					(this.reject = (r) => {
						this.status === "pending" && ((this.status = "rejected"), n(r));
					});
			}));
	}
}
function Sy(e) {
	let { fallbackElement: t, router: n, future: r } = e,
		[a, i] = S.useState(n.state),
		[o, l] = S.useState(),
		[s, u] = S.useState({ isTransitioning: !1 }),
		[c, f] = S.useState(),
		[p, w] = S.useState(),
		[x, y] = S.useState(),
		C = S.useRef(new Map()),
		{ v7_startTransition: h } = r || {},
		m = S.useCallback(
			(g) => {
				h ? wy(g) : g();
			},
			[h],
		),
		v = S.useCallback(
			(g, j) => {
				let {
					deletedFetchers: _,
					unstable_flushSync: O,
					unstable_viewTransitionOpts: V,
				} = j;
				_.forEach((ne) => C.current.delete(ne)),
					g.fetchers.forEach((ne, oe) => {
						ne.data !== void 0 && C.current.set(oe, ne.data);
					});
				let te =
					n.window == null ||
					n.window.document == null ||
					typeof n.window.document.startViewTransition != "function";
				if (!V || te) {
					O ? ua(() => i(g)) : m(() => i(g));
					return;
				}
				if (O) {
					ua(() => {
						p && (c && c.resolve(), p.skipTransition()),
							u({
								isTransitioning: !0,
								flushSync: !0,
								currentLocation: V.currentLocation,
								nextLocation: V.nextLocation,
							});
					});
					let ne = n.window.document.startViewTransition(() => {
						ua(() => i(g));
					});
					ne.finished.finally(() => {
						ua(() => {
							f(void 0), w(void 0), l(void 0), u({ isTransitioning: !1 });
						});
					}),
						ua(() => w(ne));
					return;
				}
				p
					? (c && c.resolve(),
					  p.skipTransition(),
					  y({
							state: g,
							currentLocation: V.currentLocation,
							nextLocation: V.nextLocation,
					  }))
					: (l(g),
					  u({
							isTransitioning: !0,
							flushSync: !1,
							currentLocation: V.currentLocation,
							nextLocation: V.nextLocation,
					  }));
			},
			[n.window, p, c, C, m],
		);
	S.useLayoutEffect(() => n.subscribe(v), [n, v]),
		S.useEffect(() => {
			s.isTransitioning && !s.flushSync && f(new xy());
		}, [s]),
		S.useEffect(() => {
			if (c && o && n.window) {
				let g = o,
					j = c.promise,
					_ = n.window.document.startViewTransition(async () => {
						m(() => i(g)), await j;
					});
				_.finished.finally(() => {
					f(void 0), w(void 0), l(void 0), u({ isTransitioning: !1 });
				}),
					w(_);
			}
		}, [m, o, c, n.window]),
		S.useEffect(() => {
			c && o && a.location.key === o.location.key && c.resolve();
		}, [c, p, a.location, o]),
		S.useEffect(() => {
			!s.isTransitioning &&
				x &&
				(l(x.state),
				u({
					isTransitioning: !0,
					flushSync: !1,
					currentLocation: x.currentLocation,
					nextLocation: x.nextLocation,
				}),
				y(void 0));
		}, [s.isTransitioning, x]),
		S.useEffect(() => {}, []);
	let E = S.useMemo(
			() => ({
				createHref: n.createHref,
				encodeLocation: n.encodeLocation,
				go: (g) => n.navigate(g),
				push: (g, j, _) =>
					n.navigate(g, {
						state: j,
						preventScrollReset: _ == null ? void 0 : _.preventScrollReset,
					}),
				replace: (g, j, _) =>
					n.navigate(g, {
						replace: !0,
						state: j,
						preventScrollReset: _ == null ? void 0 : _.preventScrollReset,
					}),
			}),
			[n],
		),
		P = n.basename || "/",
		R = S.useMemo(
			() => ({ router: n, navigator: E, static: !1, basename: P }),
			[n, E, P],
		);
	return S.createElement(
		S.Fragment,
		null,
		S.createElement(
			Zo.Provider,
			{ value: R },
			S.createElement(
				uh.Provider,
				{ value: a },
				S.createElement(
					vy.Provider,
					{ value: C.current },
					S.createElement(
						hy.Provider,
						{ value: s },
						S.createElement(
							uy,
							{
								basename: P,
								location: a.location,
								navigationType: a.historyAction,
								navigator: E,
								future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath },
							},
							a.initialized || n.future.v7_partialHydration
								? S.createElement(ky, {
										routes: n.routes,
										future: n.future,
										state: a,
								  })
								: t,
						),
					),
				),
			),
		),
		null,
	);
}
function ky(e) {
	let { routes: t, future: n, state: r } = e;
	return Zg(t, void 0, r, n);
}
var ad;
(function (e) {
	(e.UseScrollRestoration = "useScrollRestoration"),
		(e.UseSubmit = "useSubmit"),
		(e.UseSubmitFetcher = "useSubmitFetcher"),
		(e.UseFetcher = "useFetcher"),
		(e.useViewTransitionState = "useViewTransitionState");
})(ad || (ad = {}));
var id;
(function (e) {
	(e.UseFetcher = "useFetcher"),
		(e.UseFetchers = "useFetchers"),
		(e.UseScrollRestoration = "useScrollRestoration");
})(id || (id = {}));
function hh(e) {
	var t,
		n,
		r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object")
		if (Array.isArray(e)) {
			var a = e.length;
			for (t = 0; t < a; t++)
				e[t] && (n = hh(e[t])) && (r && (r += " "), (r += n));
		} else for (n in e) e[n] && (r && (r += " "), (r += n));
	return r;
}
function vn() {
	for (var e, t, n = 0, r = "", a = arguments.length; n < a; n++)
		(e = arguments[n]) && (t = hh(e)) && (r && (r += " "), (r += t));
	return r;
}
const Ya = (e) => typeof e == "number" && !isNaN(e),
	Qn = (e) => typeof e == "string",
	ft = (e) => typeof e == "function",
	eo = (e) => (Qn(e) || ft(e) ? e : null),
	Vs = (e) => S.isValidElement(e) || Qn(e) || ft(e) || Ya(e);
function Ey(e, t, n) {
	n === void 0 && (n = 300);
	const { scrollHeight: r, style: a } = e;
	requestAnimationFrame(() => {
		(a.minHeight = "initial"),
			(a.height = r + "px"),
			(a.transition = `all ${n}ms`),
			requestAnimationFrame(() => {
				(a.height = "0"), (a.padding = "0"), (a.margin = "0"), setTimeout(t, n);
			});
	});
}
function nl(e) {
	let {
		enter: t,
		exit: n,
		appendPosition: r = !1,
		collapse: a = !0,
		collapseDuration: i = 300,
	} = e;
	return function (o) {
		let {
			children: l,
			position: s,
			preventExitTransition: u,
			done: c,
			nodeRef: f,
			isIn: p,
			playToast: w,
		} = o;
		const x = r ? `${t}--${s}` : t,
			y = r ? `${n}--${s}` : n,
			C = S.useRef(0);
		return (
			S.useLayoutEffect(() => {
				const h = f.current,
					m = x.split(" "),
					v = (E) => {
						E.target === f.current &&
							(w(),
							h.removeEventListener("animationend", v),
							h.removeEventListener("animationcancel", v),
							C.current === 0 &&
								E.type !== "animationcancel" &&
								h.classList.remove(...m));
					};
				h.classList.add(...m),
					h.addEventListener("animationend", v),
					h.addEventListener("animationcancel", v);
			}, []),
			S.useEffect(() => {
				const h = f.current,
					m = () => {
						h.removeEventListener("animationend", m), a ? Ey(h, c, i) : c();
					};
				p ||
					(u
						? m()
						: ((C.current = 1),
						  (h.className += ` ${y}`),
						  h.addEventListener("animationend", m)));
			}, [p]),
			ae.createElement(ae.Fragment, null, l)
		);
	};
}
function od(e, t) {
	return e != null
		? {
				content: e.content,
				containerId: e.props.containerId,
				id: e.props.toastId,
				theme: e.props.theme,
				type: e.props.type,
				data: e.props.data || {},
				isLoading: e.props.isLoading,
				icon: e.props.icon,
				status: t,
		  }
		: {};
}
const qe = new Map();
let Qa = [];
const Bs = new Set(),
	by = (e) => Bs.forEach((t) => t(e)),
	vh = () => qe.size > 0;
function gh(e, t) {
	var n;
	if (t) return !((n = qe.get(t)) == null || !n.isToastActive(e));
	let r = !1;
	return (
		qe.forEach((a) => {
			a.isToastActive(e) && (r = !0);
		}),
		r
	);
}
function yh(e, t) {
	Vs(e) &&
		(vh() || Qa.push({ content: e, options: t }),
		qe.forEach((n) => {
			n.buildToast(e, t);
		}));
}
function ld(e, t) {
	qe.forEach((n) => {
		t != null && t != null && t.containerId
			? (t == null ? void 0 : t.containerId) === n.id &&
			  n.toggle(e, t == null ? void 0 : t.id)
			: n.toggle(e, t == null ? void 0 : t.id);
	});
}
function Cy(e) {
	const {
		subscribe: t,
		getSnapshot: n,
		setProps: r,
	} = S.useRef(
		(function (i) {
			const o = i.containerId || 1;
			return {
				subscribe(l) {
					const s = (function (c, f, p) {
						let w = 1,
							x = 0,
							y = [],
							C = [],
							h = [],
							m = f;
						const v = new Map(),
							E = new Set(),
							P = () => {
								(h = Array.from(v.values())), E.forEach((j) => j());
							},
							R = (j) => {
								(C = j == null ? [] : C.filter((_) => _ !== j)), P();
							},
							g = (j) => {
								const {
										toastId: _,
										onOpen: O,
										updateId: V,
										children: te,
									} = j.props,
									ne = V == null;
								j.staleId && v.delete(j.staleId),
									v.set(_, j),
									(C = [...C, j.props.toastId].filter(
										(oe) => oe !== j.staleId,
									)),
									P(),
									p(od(j, ne ? "added" : "updated")),
									ne && ft(O) && O(S.isValidElement(te) && te.props);
							};
						return {
							id: c,
							props: m,
							observe: (j) => (E.add(j), () => E.delete(j)),
							toggle: (j, _) => {
								v.forEach((O) => {
									(_ != null && _ !== O.props.toastId) ||
										(ft(O.toggle) && O.toggle(j));
								});
							},
							removeToast: R,
							toasts: v,
							clearQueue: () => {
								(x -= y.length), (y = []);
							},
							buildToast: (j, _) => {
								if (
									((X) => {
										let { containerId: he, toastId: ce, updateId: ve } = X;
										const xe = he ? he !== c : c !== 1,
											ze = v.has(ce) && ve == null;
										return xe || ze;
									})(_)
								)
									return;
								const {
										toastId: O,
										updateId: V,
										data: te,
										staleId: ne,
										delay: oe,
									} = _,
									Ne = () => {
										R(O);
									},
									We = V == null;
								We && x++;
								const _e = {
									...m,
									style: m.toastStyle,
									key: w++,
									...Object.fromEntries(
										Object.entries(_).filter((X) => {
											let [he, ce] = X;
											return ce != null;
										}),
									),
									toastId: O,
									updateId: V,
									data: te,
									closeToast: Ne,
									isIn: !1,
									className: eo(_.className || m.toastClassName),
									bodyClassName: eo(_.bodyClassName || m.bodyClassName),
									progressClassName: eo(
										_.progressClassName || m.progressClassName,
									),
									autoClose:
										!_.isLoading &&
										((T = _.autoClose),
										($ = m.autoClose),
										T === !1 || (Ya(T) && T > 0) ? T : $),
									deleteToast() {
										const X = v.get(O),
											{ onClose: he, children: ce } = X.props;
										ft(he) && he(S.isValidElement(ce) && ce.props),
											p(od(X, "removed")),
											v.delete(O),
											x--,
											x < 0 && (x = 0),
											y.length > 0 ? g(y.shift()) : P();
									},
								};
								var T, $;
								(_e.closeButton = m.closeButton),
									_.closeButton === !1 || Vs(_.closeButton)
										? (_e.closeButton = _.closeButton)
										: _.closeButton === !0 &&
										  (_e.closeButton = !Vs(m.closeButton) || m.closeButton);
								let H = j;
								S.isValidElement(j) && !Qn(j.type)
									? (H = S.cloneElement(j, {
											closeToast: Ne,
											toastProps: _e,
											data: te,
									  }))
									: ft(j) &&
									  (H = j({ closeToast: Ne, toastProps: _e, data: te }));
								const q = { content: H, props: _e, staleId: ne };
								m.limit && m.limit > 0 && x > m.limit && We
									? y.push(q)
									: Ya(oe)
									? setTimeout(() => {
											g(q);
									  }, oe)
									: g(q);
							},
							setProps(j) {
								m = j;
							},
							setToggle: (j, _) => {
								v.get(j).toggle = _;
							},
							isToastActive: (j) => C.some((_) => _ === j),
							getSnapshot: () => (m.newestOnTop ? h.reverse() : h),
						};
					})(o, i, by);
					qe.set(o, s);
					const u = s.observe(l);
					return (
						Qa.forEach((c) => yh(c.content, c.options)),
						(Qa = []),
						() => {
							u(), qe.delete(o);
						}
					);
				},
				setProps(l) {
					var s;
					(s = qe.get(o)) == null || s.setProps(l);
				},
				getSnapshot() {
					var l;
					return (l = qe.get(o)) == null ? void 0 : l.getSnapshot();
				},
			};
		})(e),
	).current;
	r(e);
	const a = S.useSyncExternalStore(t, n, n);
	return {
		getToastToRender: function (i) {
			if (!a) return [];
			const o = new Map();
			return (
				a.forEach((l) => {
					const { position: s } = l.props;
					o.has(s) || o.set(s, []), o.get(s).push(l);
				}),
				Array.from(o, (l) => i(l[0], l[1]))
			);
		},
		isToastActive: gh,
		count: a == null ? void 0 : a.length,
	};
}
function jy(e) {
	const [t, n] = S.useState(!1),
		[r, a] = S.useState(!1),
		i = S.useRef(null),
		o = S.useRef({
			start: 0,
			delta: 0,
			removalDistance: 0,
			canCloseOnClick: !0,
			canDrag: !1,
			didMove: !1,
		}).current,
		{
			autoClose: l,
			pauseOnHover: s,
			closeToast: u,
			onClick: c,
			closeOnClick: f,
		} = e;
	var p, w;
	function x() {
		n(!0);
	}
	function y() {
		n(!1);
	}
	function C(v) {
		const E = i.current;
		o.canDrag &&
			E &&
			((o.didMove = !0),
			t && y(),
			(o.delta =
				e.draggableDirection === "x"
					? v.clientX - o.start
					: v.clientY - o.start),
			o.start !== v.clientX && (o.canCloseOnClick = !1),
			(E.style.transform = `translate3d(${
				e.draggableDirection === "x"
					? `${o.delta}px, var(--y)`
					: `0, calc(${o.delta}px + var(--y))`
			},0)`),
			(E.style.opacity = "" + (1 - Math.abs(o.delta / o.removalDistance))));
	}
	function h() {
		document.removeEventListener("pointermove", C),
			document.removeEventListener("pointerup", h);
		const v = i.current;
		if (o.canDrag && o.didMove && v) {
			if (((o.canDrag = !1), Math.abs(o.delta) > o.removalDistance))
				return a(!0), e.closeToast(), void e.collapseAll();
			(v.style.transition = "transform 0.2s, opacity 0.2s"),
				v.style.removeProperty("transform"),
				v.style.removeProperty("opacity");
		}
	}
	(w = qe.get(
		(p = { id: e.toastId, containerId: e.containerId, fn: n }).containerId || 1,
	)) == null || w.setToggle(p.id, p.fn),
		S.useEffect(() => {
			if (e.pauseOnFocusLoss)
				return (
					document.hasFocus() || y(),
					window.addEventListener("focus", x),
					window.addEventListener("blur", y),
					() => {
						window.removeEventListener("focus", x),
							window.removeEventListener("blur", y);
					}
				);
		}, [e.pauseOnFocusLoss]);
	const m = {
		onPointerDown: function (v) {
			if (e.draggable === !0 || e.draggable === v.pointerType) {
				(o.didMove = !1),
					document.addEventListener("pointermove", C),
					document.addEventListener("pointerup", h);
				const E = i.current;
				(o.canCloseOnClick = !0),
					(o.canDrag = !0),
					(E.style.transition = "none"),
					e.draggableDirection === "x"
						? ((o.start = v.clientX),
						  (o.removalDistance = E.offsetWidth * (e.draggablePercent / 100)))
						: ((o.start = v.clientY),
						  (o.removalDistance =
								(E.offsetHeight *
									(e.draggablePercent === 80
										? 1.5 * e.draggablePercent
										: e.draggablePercent)) /
								100));
			}
		},
		onPointerUp: function (v) {
			const {
				top: E,
				bottom: P,
				left: R,
				right: g,
			} = i.current.getBoundingClientRect();
			v.nativeEvent.type !== "touchend" &&
			e.pauseOnHover &&
			v.clientX >= R &&
			v.clientX <= g &&
			v.clientY >= E &&
			v.clientY <= P
				? y()
				: x();
		},
	};
	return (
		l && s && ((m.onMouseEnter = y), e.stacked || (m.onMouseLeave = x)),
		f &&
			(m.onClick = (v) => {
				c && c(v), o.canCloseOnClick && u();
			}),
		{
			playToast: x,
			pauseToast: y,
			isRunning: t,
			preventExitTransition: r,
			toastRef: i,
			eventHandlers: m,
		}
	);
}
function Ny(e) {
	let {
		delay: t,
		isRunning: n,
		closeToast: r,
		type: a = "default",
		hide: i,
		className: o,
		style: l,
		controlledProgress: s,
		progress: u,
		rtl: c,
		isIn: f,
		theme: p,
	} = e;
	const w = i || (s && u === 0),
		x = {
			...l,
			animationDuration: `${t}ms`,
			animationPlayState: n ? "running" : "paused",
		};
	s && (x.transform = `scaleX(${u})`);
	const y = vn(
			"Toastify__progress-bar",
			s
				? "Toastify__progress-bar--controlled"
				: "Toastify__progress-bar--animated",
			`Toastify__progress-bar-theme--${p}`,
			`Toastify__progress-bar--${a}`,
			{ "Toastify__progress-bar--rtl": c },
		),
		C = ft(o) ? o({ rtl: c, type: a, defaultClassName: y }) : vn(y, o),
		h = {
			[s && u >= 1 ? "onTransitionEnd" : "onAnimationEnd"]:
				s && u < 1
					? null
					: () => {
							f && r();
					  },
		};
	return ae.createElement(
		"div",
		{ className: "Toastify__progress-bar--wrp", "data-hidden": w },
		ae.createElement("div", {
			className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${p} Toastify__progress-bar--${a}`,
		}),
		ae.createElement("div", {
			role: "progressbar",
			"aria-hidden": w ? "true" : "false",
			"aria-label": "notification timer",
			className: C,
			style: x,
			...h,
		}),
	);
}
let Py = 1;
const wh = () => "" + Py++;
function _y(e) {
	return e && (Qn(e.toastId) || Ya(e.toastId)) ? e.toastId : wh();
}
function Ca(e, t) {
	return yh(e, t), t.toastId;
}
function Lo(e, t) {
	return { ...t, type: (t && t.type) || e, toastId: _y(t) };
}
function Li(e) {
	return (t, n) => Ca(t, Lo(e, n));
}
function K(e, t) {
	return Ca(e, Lo("default", t));
}
(K.loading = (e, t) =>
	Ca(
		e,
		Lo("default", {
			isLoading: !0,
			autoClose: !1,
			closeOnClick: !1,
			closeButton: !1,
			draggable: !1,
			...t,
		}),
	)),
	(K.promise = function (e, t, n) {
		let r,
			{ pending: a, error: i, success: o } = t;
		a && (r = Qn(a) ? K.loading(a, n) : K.loading(a.render, { ...n, ...a }));
		const l = {
				isLoading: null,
				autoClose: null,
				closeOnClick: null,
				closeButton: null,
				draggable: null,
			},
			s = (c, f, p) => {
				if (f == null) return void K.dismiss(r);
				const w = { type: c, ...l, ...n, data: p },
					x = Qn(f) ? { render: f } : f;
				return r ? K.update(r, { ...w, ...x }) : K(x.render, { ...w, ...x }), p;
			},
			u = ft(e) ? e() : e;
		return u.then((c) => s("success", o, c)).catch((c) => s("error", i, c)), u;
	}),
	(K.success = Li("success")),
	(K.info = Li("info")),
	(K.error = Li("error")),
	(K.warning = Li("warning")),
	(K.warn = K.warning),
	(K.dark = (e, t) => Ca(e, Lo("default", { theme: "dark", ...t }))),
	(K.dismiss = function (e) {
		(function (t) {
			var n;
			if (vh()) {
				if (t == null || Qn((n = t)) || Ya(n))
					qe.forEach((r) => {
						r.removeToast(t);
					});
				else if (t && ("containerId" in t || "id" in t)) {
					const r = qe.get(t.containerId);
					r
						? r.removeToast(t.id)
						: qe.forEach((a) => {
								a.removeToast(t.id);
						  });
				}
			} else Qa = Qa.filter((r) => t != null && r.options.toastId !== t);
		})(e);
	}),
	(K.clearWaitingQueue = function (e) {
		e === void 0 && (e = {}),
			qe.forEach((t) => {
				!t.props.limit ||
					(e.containerId && t.id !== e.containerId) ||
					t.clearQueue();
			});
	}),
	(K.isActive = gh),
	(K.update = function (e, t) {
		t === void 0 && (t = {});
		const n = ((r, a) => {
			var i;
			let { containerId: o } = a;
			return (i = qe.get(o || 1)) == null ? void 0 : i.toasts.get(r);
		})(e, t);
		if (n) {
			const { props: r, content: a } = n,
				i = { delay: 100, ...r, ...t, toastId: t.toastId || e, updateId: wh() };
			i.toastId !== e && (i.staleId = e);
			const o = i.render || a;
			delete i.render, Ca(o, i);
		}
	}),
	(K.done = (e) => {
		K.update(e, { progress: 1 });
	}),
	(K.onChange = function (e) {
		return (
			Bs.add(e),
			() => {
				Bs.delete(e);
			}
		);
	}),
	(K.play = (e) => ld(!0, e)),
	(K.pause = (e) => ld(!1, e));
const Ty = typeof window < "u" ? S.useLayoutEffect : S.useEffect,
	Ri = (e) => {
		let { theme: t, type: n, isLoading: r, ...a } = e;
		return ae.createElement("svg", {
			viewBox: "0 0 24 24",
			width: "100%",
			height: "100%",
			fill:
				t === "colored" ? "currentColor" : `var(--toastify-icon-color-${n})`,
			...a,
		});
	},
	Fl = {
		info: function (e) {
			return ae.createElement(
				Ri,
				{ ...e },
				ae.createElement("path", {
					d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
				}),
			);
		},
		warning: function (e) {
			return ae.createElement(
				Ri,
				{ ...e },
				ae.createElement("path", {
					d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
				}),
			);
		},
		success: function (e) {
			return ae.createElement(
				Ri,
				{ ...e },
				ae.createElement("path", {
					d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
				}),
			);
		},
		error: function (e) {
			return ae.createElement(
				Ri,
				{ ...e },
				ae.createElement("path", {
					d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",
				}),
			);
		},
		spinner: function () {
			return ae.createElement("div", { className: "Toastify__spinner" });
		},
	},
	Ly = (e) => {
		const {
				isRunning: t,
				preventExitTransition: n,
				toastRef: r,
				eventHandlers: a,
				playToast: i,
			} = jy(e),
			{
				closeButton: o,
				children: l,
				autoClose: s,
				onClick: u,
				type: c,
				hideProgressBar: f,
				closeToast: p,
				transition: w,
				position: x,
				className: y,
				style: C,
				bodyClassName: h,
				bodyStyle: m,
				progressClassName: v,
				progressStyle: E,
				updateId: P,
				role: R,
				progress: g,
				rtl: j,
				toastId: _,
				deleteToast: O,
				isIn: V,
				isLoading: te,
				closeOnClick: ne,
				theme: oe,
			} = e,
			Ne = vn(
				"Toastify__toast",
				`Toastify__toast-theme--${oe}`,
				`Toastify__toast--${c}`,
				{ "Toastify__toast--rtl": j },
				{ "Toastify__toast--close-on-click": ne },
			),
			We = ft(y)
				? y({ rtl: j, position: x, type: c, defaultClassName: Ne })
				: vn(Ne, y),
			_e = (function (q) {
				let { theme: X, type: he, isLoading: ce, icon: ve } = q,
					xe = null;
				const ze = { theme: X, type: he };
				return (
					ve === !1 ||
						(ft(ve)
							? (xe = ve({ ...ze, isLoading: ce }))
							: S.isValidElement(ve)
							? (xe = S.cloneElement(ve, ze))
							: ce
							? (xe = Fl.spinner())
							: ((Yr) => Yr in Fl)(he) && (xe = Fl[he](ze))),
					xe
				);
			})(e),
			T = !!g || !s,
			$ = { closeToast: p, type: c, theme: oe };
		let H = null;
		return (
			o === !1 ||
				(H = ft(o)
					? o($)
					: S.isValidElement(o)
					? S.cloneElement(o, $)
					: (function (q) {
							let { closeToast: X, theme: he, ariaLabel: ce = "close" } = q;
							return ae.createElement(
								"button",
								{
									className: `Toastify__close-button Toastify__close-button--${he}`,
									type: "button",
									onClick: (ve) => {
										ve.stopPropagation(), X(ve);
									},
									"aria-label": ce,
								},
								ae.createElement(
									"svg",
									{ "aria-hidden": "true", viewBox: "0 0 14 16" },
									ae.createElement("path", {
										fillRule: "evenodd",
										d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z",
									}),
								),
							);
					  })($)),
			ae.createElement(
				w,
				{
					isIn: V,
					done: O,
					position: x,
					preventExitTransition: n,
					nodeRef: r,
					playToast: i,
				},
				ae.createElement(
					"div",
					{
						id: _,
						onClick: u,
						"data-in": V,
						className: We,
						...a,
						style: C,
						ref: r,
					},
					ae.createElement(
						"div",
						{
							...(V && { role: R }),
							className: ft(h) ? h({ type: c }) : vn("Toastify__toast-body", h),
							style: m,
						},
						_e != null &&
							ae.createElement(
								"div",
								{
									className: vn("Toastify__toast-icon", {
										"Toastify--animate-icon Toastify__zoom-enter": !te,
									}),
								},
								_e,
							),
						ae.createElement("div", null, l),
					),
					H,
					ae.createElement(Ny, {
						...(P && !T ? { key: `pb-${P}` } : {}),
						rtl: j,
						theme: oe,
						delay: s,
						isRunning: t,
						isIn: V,
						closeToast: p,
						hide: f,
						type: c,
						style: E,
						className: v,
						controlledProgress: T,
						progress: g || 0,
					}),
				),
			)
		);
	},
	rl = function (e, t) {
		return (
			t === void 0 && (t = !1),
			{
				enter: `Toastify--animate Toastify__${e}-enter`,
				exit: `Toastify--animate Toastify__${e}-exit`,
				appendPosition: t,
			}
		);
	},
	Ry = nl(rl("bounce", !0));
nl(rl("slide", !0));
nl(rl("zoom"));
nl(rl("flip"));
const Oy = {
	position: "top-right",
	transition: Ry,
	autoClose: 5e3,
	closeButton: !0,
	pauseOnHover: !0,
	pauseOnFocusLoss: !0,
	draggable: "touch",
	draggablePercent: 80,
	draggableDirection: "x",
	role: "alert",
	theme: "light",
};
function My(e) {
	let t = { ...Oy, ...e };
	const n = e.stacked,
		[r, a] = S.useState(!0),
		i = S.useRef(null),
		{ getToastToRender: o, isToastActive: l, count: s } = Cy(t),
		{ className: u, style: c, rtl: f, containerId: p } = t;
	function w(y) {
		const C = vn(
			"Toastify__toast-container",
			`Toastify__toast-container--${y}`,
			{ "Toastify__toast-container--rtl": f },
		);
		return ft(u)
			? u({ position: y, rtl: f, defaultClassName: C })
			: vn(C, eo(u));
	}
	function x() {
		n && (a(!0), K.play());
	}
	return (
		Ty(() => {
			if (n) {
				var y;
				const C = i.current.querySelectorAll('[data-in="true"]'),
					h = 12,
					m = (y = t.position) == null ? void 0 : y.includes("top");
				let v = 0,
					E = 0;
				Array.from(C)
					.reverse()
					.forEach((P, R) => {
						const g = P;
						g.classList.add("Toastify__toast--stacked"),
							R > 0 && (g.dataset.collapsed = `${r}`),
							g.dataset.pos || (g.dataset.pos = m ? "top" : "bot");
						const j = v * (r ? 0.2 : 1) + (r ? 0 : h * R);
						g.style.setProperty("--y", `${m ? j : -1 * j}px`),
							g.style.setProperty("--g", `${h}`),
							g.style.setProperty("--s", "" + (1 - (r ? E : 0))),
							(v += g.offsetHeight),
							(E += 0.025);
					});
			}
		}, [r, s, n]),
		ae.createElement(
			"div",
			{
				ref: i,
				className: "Toastify",
				id: p,
				onMouseEnter: () => {
					n && (a(!1), K.pause());
				},
				onMouseLeave: x,
			},
			o((y, C) => {
				const h = C.length ? { ...c } : { ...c, pointerEvents: "none" };
				return ae.createElement(
					"div",
					{ className: w(y), style: h, key: `container-${y}` },
					C.map((m) => {
						let { content: v, props: E } = m;
						return ae.createElement(
							Ly,
							{
								...E,
								stacked: n,
								collapseAll: x,
								isIn: l(E.toastId, E.containerId),
								style: E.style,
								key: `toast-${E.key}`,
							},
							v,
						);
					}),
				);
			}),
		)
	);
}
var xh = {};
(function (e) {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = "fas",
		n = "user-graduate",
		r = 448,
		a = 512,
		i = [],
		o = "f501",
		l =
			"M219.3 .5c3.1-.6 6.3-.6 9.4 0l200 40C439.9 42.7 448 52.6 448 64s-8.1 21.3-19.3 23.5L352 102.9V160c0 70.7-57.3 128-128 128s-128-57.3-128-128V102.9L48 93.3v65.1l15.7 78.4c.9 4.7-.3 9.6-3.3 13.3s-7.6 5.9-12.4 5.9H16c-4.8 0-9.3-2.1-12.4-5.9s-4.3-8.6-3.3-13.3L16 158.4V86.6C6.5 83.3 0 74.3 0 64C0 52.6 8.1 42.7 19.3 40.5l200-40zM111.9 327.7c10.5-3.4 21.8 .4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6z";
	(e.definition = { prefix: t, iconName: n, icon: [r, a, i, o, l] }),
		(e.faUserGraduate = e.definition),
		(e.prefix = t),
		(e.iconName = n),
		(e.width = r),
		(e.height = a),
		(e.ligatures = i),
		(e.unicode = o),
		(e.svgPathData = l),
		(e.aliases = i);
})(xh);
function sd(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t &&
			(r = r.filter(function (a) {
				return Object.getOwnPropertyDescriptor(e, a).enumerable;
			})),
			n.push.apply(n, r);
	}
	return n;
}
function z(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] != null ? arguments[t] : {};
		t % 2
			? sd(Object(n), !0).forEach(function (r) {
					Me(e, r, n[r]);
			  })
			: Object.getOwnPropertyDescriptors
			? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
			: sd(Object(n)).forEach(function (r) {
					Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
			  });
	}
	return e;
}
function Ro(e) {
	"@babel/helpers - typeof";
	return (
		(Ro =
			typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
				? function (t) {
						return typeof t;
				  }
				: function (t) {
						return t &&
							typeof Symbol == "function" &&
							t.constructor === Symbol &&
							t !== Symbol.prototype
							? "symbol"
							: typeof t;
				  }),
		Ro(e)
	);
}
function zy(e, t) {
	if (!(e instanceof t))
		throw new TypeError("Cannot call a class as a function");
}
function Iy(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		(r.enumerable = r.enumerable || !1),
			(r.configurable = !0),
			"value" in r && (r.writable = !0),
			Object.defineProperty(e, r.key, r);
	}
}
function Dy(e, t, n) {
	return (
		t && Iy(e.prototype, t),
		Object.defineProperty(e, "prototype", { writable: !1 }),
		e
	);
}
function Me(e, t, n) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0,
			  })
			: (e[t] = n),
		e
	);
}
function oc(e, t) {
	return Fy(e) || Uy(e, t) || Sh(e, t) || Vy();
}
function oi(e) {
	return Ay(e) || $y(e) || Sh(e) || Hy();
}
function Ay(e) {
	if (Array.isArray(e)) return Ws(e);
}
function Fy(e) {
	if (Array.isArray(e)) return e;
}
function $y(e) {
	if (
		(typeof Symbol < "u" && e[Symbol.iterator] != null) ||
		e["@@iterator"] != null
	)
		return Array.from(e);
}
function Uy(e, t) {
	var n =
		e == null
			? null
			: (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
	if (n != null) {
		var r = [],
			a = !0,
			i = !1,
			o,
			l;
		try {
			for (
				n = n.call(e);
				!(a = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t));
				a = !0
			);
		} catch (s) {
			(i = !0), (l = s);
		} finally {
			try {
				!a && n.return != null && n.return();
			} finally {
				if (i) throw l;
			}
		}
		return r;
	}
}
function Sh(e, t) {
	if (e) {
		if (typeof e == "string") return Ws(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		if (
			(n === "Object" && e.constructor && (n = e.constructor.name),
			n === "Map" || n === "Set")
		)
			return Array.from(e);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
			return Ws(e, t);
	}
}
function Ws(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function Hy() {
	throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Vy() {
	throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var ud = function () {},
	lc = {},
	kh = {},
	Eh = null,
	bh = { mark: ud, measure: ud };
try {
	typeof window < "u" && (lc = window),
		typeof document < "u" && (kh = document),
		typeof MutationObserver < "u" && (Eh = MutationObserver),
		typeof performance < "u" && (bh = performance);
} catch {}
var By = lc.navigator || {},
	cd = By.userAgent,
	fd = cd === void 0 ? "" : cd,
	Pn = lc,
	me = kh,
	dd = Eh,
	Oi = bh;
Pn.document;
var nn =
		!!me.documentElement &&
		!!me.head &&
		typeof me.addEventListener == "function" &&
		typeof me.createElement == "function",
	Ch = ~fd.indexOf("MSIE") || ~fd.indexOf("Trident/"),
	Mi,
	zi,
	Ii,
	Di,
	Ai,
	Zt = "___FONT_AWESOME___",
	Ys = 16,
	jh = "fa",
	Nh = "svg-inline--fa",
	qn = "data-fa-i2svg",
	Qs = "data-fa-pseudo-element",
	Wy = "data-fa-pseudo-element-pending",
	sc = "data-prefix",
	uc = "data-icon",
	pd = "fontawesome-i2svg",
	Yy = "async",
	Qy = ["HTML", "HEAD", "STYLE", "SCRIPT"],
	Ph = (function () {
		try {
			return !0;
		} catch {
			return !1;
		}
	})(),
	de = "classic",
	je = "sharp",
	cc = [de, je];
function li(e) {
	return new Proxy(e, {
		get: function (n, r) {
			return r in n ? n[r] : n[de];
		},
	});
}
var Ka = li(
		((Mi = {}),
		Me(Mi, de, {
			fa: "solid",
			fas: "solid",
			"fa-solid": "solid",
			far: "regular",
			"fa-regular": "regular",
			fal: "light",
			"fa-light": "light",
			fat: "thin",
			"fa-thin": "thin",
			fad: "duotone",
			"fa-duotone": "duotone",
			fab: "brands",
			"fa-brands": "brands",
			fak: "kit",
			fakd: "kit",
			"fa-kit": "kit",
			"fa-kit-duotone": "kit",
		}),
		Me(Mi, je, {
			fa: "solid",
			fass: "solid",
			"fa-solid": "solid",
			fasr: "regular",
			"fa-regular": "regular",
			fasl: "light",
			"fa-light": "light",
			fast: "thin",
			"fa-thin": "thin",
		}),
		Mi),
	),
	Xa = li(
		((zi = {}),
		Me(zi, de, {
			solid: "fas",
			regular: "far",
			light: "fal",
			thin: "fat",
			duotone: "fad",
			brands: "fab",
			kit: "fak",
		}),
		Me(zi, je, { solid: "fass", regular: "fasr", light: "fasl", thin: "fast" }),
		zi),
	),
	Ga = li(
		((Ii = {}),
		Me(Ii, de, {
			fab: "fa-brands",
			fad: "fa-duotone",
			fak: "fa-kit",
			fal: "fa-light",
			far: "fa-regular",
			fas: "fa-solid",
			fat: "fa-thin",
		}),
		Me(Ii, je, {
			fass: "fa-solid",
			fasr: "fa-regular",
			fasl: "fa-light",
			fast: "fa-thin",
		}),
		Ii),
	),
	Ky = li(
		((Di = {}),
		Me(Di, de, {
			"fa-brands": "fab",
			"fa-duotone": "fad",
			"fa-kit": "fak",
			"fa-light": "fal",
			"fa-regular": "far",
			"fa-solid": "fas",
			"fa-thin": "fat",
		}),
		Me(Di, je, {
			"fa-solid": "fass",
			"fa-regular": "fasr",
			"fa-light": "fasl",
			"fa-thin": "fast",
		}),
		Di),
	),
	Xy = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,
	_h = "fa-layers-text",
	Gy =
		/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
	Jy = li(
		((Ai = {}),
		Me(Ai, de, {
			900: "fas",
			400: "far",
			normal: "far",
			300: "fal",
			100: "fat",
		}),
		Me(Ai, je, { 900: "fass", 400: "fasr", 300: "fasl", 100: "fast" }),
		Ai),
	),
	Th = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	Zy = Th.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
	qy = [
		"class",
		"data-prefix",
		"data-icon",
		"data-fa-transform",
		"data-fa-mask",
	],
	Vn = {
		GROUP: "duotone-group",
		SWAP_OPACITY: "swap-opacity",
		PRIMARY: "primary",
		SECONDARY: "secondary",
	},
	Ja = new Set();
Object.keys(Xa[de]).map(Ja.add.bind(Ja));
Object.keys(Xa[je]).map(Ja.add.bind(Ja));
var e2 = []
		.concat(cc, oi(Ja), [
			"2xs",
			"xs",
			"sm",
			"lg",
			"xl",
			"2xl",
			"beat",
			"border",
			"fade",
			"beat-fade",
			"bounce",
			"flip-both",
			"flip-horizontal",
			"flip-vertical",
			"flip",
			"fw",
			"inverse",
			"layers-counter",
			"layers-text",
			"layers",
			"li",
			"pull-left",
			"pull-right",
			"pulse",
			"rotate-180",
			"rotate-270",
			"rotate-90",
			"rotate-by",
			"shake",
			"spin-pulse",
			"spin-reverse",
			"spin",
			"stack-1x",
			"stack-2x",
			"stack",
			"ul",
			Vn.GROUP,
			Vn.SWAP_OPACITY,
			Vn.PRIMARY,
			Vn.SECONDARY,
		])
		.concat(
			Th.map(function (e) {
				return "".concat(e, "x");
			}),
		)
		.concat(
			Zy.map(function (e) {
				return "w-".concat(e);
			}),
		),
	ja = Pn.FontAwesomeConfig || {};
function t2(e) {
	var t = me.querySelector("script[" + e + "]");
	if (t) return t.getAttribute(e);
}
function n2(e) {
	return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (me && typeof me.querySelector == "function") {
	var r2 = [
		["data-family-prefix", "familyPrefix"],
		["data-css-prefix", "cssPrefix"],
		["data-family-default", "familyDefault"],
		["data-style-default", "styleDefault"],
		["data-replacement-class", "replacementClass"],
		["data-auto-replace-svg", "autoReplaceSvg"],
		["data-auto-add-css", "autoAddCss"],
		["data-auto-a11y", "autoA11y"],
		["data-search-pseudo-elements", "searchPseudoElements"],
		["data-observe-mutations", "observeMutations"],
		["data-mutate-approach", "mutateApproach"],
		["data-keep-original-source", "keepOriginalSource"],
		["data-measure-performance", "measurePerformance"],
		["data-show-missing-icons", "showMissingIcons"],
	];
	r2.forEach(function (e) {
		var t = oc(e, 2),
			n = t[0],
			r = t[1],
			a = n2(t2(n));
		a != null && (ja[r] = a);
	});
}
var Lh = {
	styleDefault: "solid",
	familyDefault: "classic",
	cssPrefix: jh,
	replacementClass: Nh,
	autoReplaceSvg: !0,
	autoAddCss: !0,
	autoA11y: !0,
	searchPseudoElements: !1,
	observeMutations: !0,
	mutateApproach: "async",
	keepOriginalSource: !0,
	measurePerformance: !1,
	showMissingIcons: !0,
};
ja.familyPrefix && (ja.cssPrefix = ja.familyPrefix);
var Ur = z(z({}, Lh), ja);
Ur.autoReplaceSvg || (Ur.observeMutations = !1);
var F = {};
Object.keys(Lh).forEach(function (e) {
	Object.defineProperty(F, e, {
		enumerable: !0,
		set: function (n) {
			(Ur[e] = n),
				Na.forEach(function (r) {
					return r(F);
				});
		},
		get: function () {
			return Ur[e];
		},
	});
});
Object.defineProperty(F, "familyPrefix", {
	enumerable: !0,
	set: function (t) {
		(Ur.cssPrefix = t),
			Na.forEach(function (n) {
				return n(F);
			});
	},
	get: function () {
		return Ur.cssPrefix;
	},
});
Pn.FontAwesomeConfig = F;
var Na = [];
function a2(e) {
	return (
		Na.push(e),
		function () {
			Na.splice(Na.indexOf(e), 1);
		}
	);
}
var sn = Ys,
	$t = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
function i2(e) {
	if (!(!e || !nn)) {
		var t = me.createElement("style");
		t.setAttribute("type", "text/css"), (t.innerHTML = e);
		for (var n = me.head.childNodes, r = null, a = n.length - 1; a > -1; a--) {
			var i = n[a],
				o = (i.tagName || "").toUpperCase();
			["STYLE", "LINK"].indexOf(o) > -1 && (r = i);
		}
		return me.head.insertBefore(t, r), e;
	}
}
var o2 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Za() {
	for (var e = 12, t = ""; e-- > 0; ) t += o2[(Math.random() * 62) | 0];
	return t;
}
function Wr(e) {
	for (var t = [], n = (e || []).length >>> 0; n--; ) t[n] = e[n];
	return t;
}
function fc(e) {
	return e.classList
		? Wr(e.classList)
		: (e.getAttribute("class") || "").split(" ").filter(function (t) {
				return t;
		  });
}
function Rh(e) {
	return ""
		.concat(e)
		.replace(/&/g, "&amp;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#39;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;");
}
function l2(e) {
	return Object.keys(e || {})
		.reduce(function (t, n) {
			return t + "".concat(n, '="').concat(Rh(e[n]), '" ');
		}, "")
		.trim();
}
function al(e) {
	return Object.keys(e || {}).reduce(function (t, n) {
		return t + "".concat(n, ": ").concat(e[n].trim(), ";");
	}, "");
}
function dc(e) {
	return (
		e.size !== $t.size ||
		e.x !== $t.x ||
		e.y !== $t.y ||
		e.rotate !== $t.rotate ||
		e.flipX ||
		e.flipY
	);
}
function s2(e) {
	var t = e.transform,
		n = e.containerWidth,
		r = e.iconWidth,
		a = { transform: "translate(".concat(n / 2, " 256)") },
		i = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "),
		o = "scale("
			.concat((t.size / 16) * (t.flipX ? -1 : 1), ", ")
			.concat((t.size / 16) * (t.flipY ? -1 : 1), ") "),
		l = "rotate(".concat(t.rotate, " 0 0)"),
		s = { transform: "".concat(i, " ").concat(o, " ").concat(l) },
		u = { transform: "translate(".concat((r / 2) * -1, " -256)") };
	return { outer: a, inner: s, path: u };
}
function u2(e) {
	var t = e.transform,
		n = e.width,
		r = n === void 0 ? Ys : n,
		a = e.height,
		i = a === void 0 ? Ys : a,
		o = e.startCentered,
		l = o === void 0 ? !1 : o,
		s = "";
	return (
		l && Ch
			? (s += "translate("
					.concat(t.x / sn - r / 2, "em, ")
					.concat(t.y / sn - i / 2, "em) "))
			: l
			? (s += "translate(calc(-50% + "
					.concat(t.x / sn, "em), calc(-50% + ")
					.concat(t.y / sn, "em)) "))
			: (s += "translate(".concat(t.x / sn, "em, ").concat(t.y / sn, "em) ")),
		(s += "scale("
			.concat((t.size / sn) * (t.flipX ? -1 : 1), ", ")
			.concat((t.size / sn) * (t.flipY ? -1 : 1), ") ")),
		(s += "rotate(".concat(t.rotate, "deg) ")),
		s
	);
}
var c2 = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function Oh() {
	var e = jh,
		t = Nh,
		n = F.cssPrefix,
		r = F.replacementClass,
		a = c2;
	if (n !== e || r !== t) {
		var i = new RegExp("\\.".concat(e, "\\-"), "g"),
			o = new RegExp("\\--".concat(e, "\\-"), "g"),
			l = new RegExp("\\.".concat(t), "g");
		a = a
			.replace(i, ".".concat(n, "-"))
			.replace(o, "--".concat(n, "-"))
			.replace(l, ".".concat(r));
	}
	return a;
}
var md = !1;
function $l() {
	F.autoAddCss && !md && (i2(Oh()), (md = !0));
}
var f2 = {
		mixout: function () {
			return { dom: { css: Oh, insertCss: $l } };
		},
		hooks: function () {
			return {
				beforeDOMElementCreation: function () {
					$l();
				},
				beforeI2svg: function () {
					$l();
				},
			};
		},
	},
	qt = Pn || {};
qt[Zt] || (qt[Zt] = {});
qt[Zt].styles || (qt[Zt].styles = {});
qt[Zt].hooks || (qt[Zt].hooks = {});
qt[Zt].shims || (qt[Zt].shims = []);
var Lt = qt[Zt],
	Mh = [],
	d2 = function e() {
		me.removeEventListener("DOMContentLoaded", e),
			(Oo = 1),
			Mh.map(function (t) {
				return t();
			});
	},
	Oo = !1;
nn &&
	((Oo = (me.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
		me.readyState,
	)),
	Oo || me.addEventListener("DOMContentLoaded", d2));
function p2(e) {
	nn && (Oo ? setTimeout(e, 0) : Mh.push(e));
}
function si(e) {
	var t = e.tag,
		n = e.attributes,
		r = n === void 0 ? {} : n,
		a = e.children,
		i = a === void 0 ? [] : a;
	return typeof e == "string"
		? Rh(e)
		: "<"
				.concat(t, " ")
				.concat(l2(r), ">")
				.concat(i.map(si).join(""), "</")
				.concat(t, ">");
}
function hd(e, t, n) {
	if (e && e[t] && e[t][n]) return { prefix: t, iconName: n, icon: e[t][n] };
}
var Ul = function (t, n, r, a) {
	var i = Object.keys(t),
		o = i.length,
		l = n,
		s,
		u,
		c;
	for (r === void 0 ? ((s = 1), (c = t[i[0]])) : ((s = 0), (c = r)); s < o; s++)
		(u = i[s]), (c = l(c, t[u], u, t));
	return c;
};
function m2(e) {
	for (var t = [], n = 0, r = e.length; n < r; ) {
		var a = e.charCodeAt(n++);
		if (a >= 55296 && a <= 56319 && n < r) {
			var i = e.charCodeAt(n++);
			(i & 64512) == 56320
				? t.push(((a & 1023) << 10) + (i & 1023) + 65536)
				: (t.push(a), n--);
		} else t.push(a);
	}
	return t;
}
function Ks(e) {
	var t = m2(e);
	return t.length === 1 ? t[0].toString(16) : null;
}
function h2(e, t) {
	var n = e.length,
		r = e.charCodeAt(t),
		a;
	return r >= 55296 &&
		r <= 56319 &&
		n > t + 1 &&
		((a = e.charCodeAt(t + 1)), a >= 56320 && a <= 57343)
		? (r - 55296) * 1024 + a - 56320 + 65536
		: r;
}
function vd(e) {
	return Object.keys(e).reduce(function (t, n) {
		var r = e[n],
			a = !!r.icon;
		return a ? (t[r.iconName] = r.icon) : (t[n] = r), t;
	}, {});
}
function Xs(e, t) {
	var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
		r = n.skipHooks,
		a = r === void 0 ? !1 : r,
		i = vd(t);
	typeof Lt.hooks.addPack == "function" && !a
		? Lt.hooks.addPack(e, vd(t))
		: (Lt.styles[e] = z(z({}, Lt.styles[e] || {}), i)),
		e === "fas" && Xs("fa", t);
}
var Fi,
	$i,
	Ui,
	Er = Lt.styles,
	v2 = Lt.shims,
	g2 =
		((Fi = {}),
		Me(Fi, de, Object.values(Ga[de])),
		Me(Fi, je, Object.values(Ga[je])),
		Fi),
	pc = null,
	zh = {},
	Ih = {},
	Dh = {},
	Ah = {},
	Fh = {},
	y2 =
		(($i = {}),
		Me($i, de, Object.keys(Ka[de])),
		Me($i, je, Object.keys(Ka[je])),
		$i);
function w2(e) {
	return ~e2.indexOf(e);
}
function x2(e, t) {
	var n = t.split("-"),
		r = n[0],
		a = n.slice(1).join("-");
	return r === e && a !== "" && !w2(a) ? a : null;
}
var $h = function () {
	var t = function (i) {
		return Ul(
			Er,
			function (o, l, s) {
				return (o[s] = Ul(l, i, {})), o;
			},
			{},
		);
	};
	(zh = t(function (a, i, o) {
		if ((i[3] && (a[i[3]] = o), i[2])) {
			var l = i[2].filter(function (s) {
				return typeof s == "number";
			});
			l.forEach(function (s) {
				a[s.toString(16)] = o;
			});
		}
		return a;
	})),
		(Ih = t(function (a, i, o) {
			if (((a[o] = o), i[2])) {
				var l = i[2].filter(function (s) {
					return typeof s == "string";
				});
				l.forEach(function (s) {
					a[s] = o;
				});
			}
			return a;
		})),
		(Fh = t(function (a, i, o) {
			var l = i[2];
			return (
				(a[o] = o),
				l.forEach(function (s) {
					a[s] = o;
				}),
				a
			);
		}));
	var n = "far" in Er || F.autoFetchSvg,
		r = Ul(
			v2,
			function (a, i) {
				var o = i[0],
					l = i[1],
					s = i[2];
				return (
					l === "far" && !n && (l = "fas"),
					typeof o == "string" && (a.names[o] = { prefix: l, iconName: s }),
					typeof o == "number" &&
						(a.unicodes[o.toString(16)] = { prefix: l, iconName: s }),
					a
				);
			},
			{ names: {}, unicodes: {} },
		);
	(Dh = r.names),
		(Ah = r.unicodes),
		(pc = il(F.styleDefault, { family: F.familyDefault }));
};
a2(function (e) {
	pc = il(e.styleDefault, { family: F.familyDefault });
});
$h();
function mc(e, t) {
	return (zh[e] || {})[t];
}
function S2(e, t) {
	return (Ih[e] || {})[t];
}
function Bn(e, t) {
	return (Fh[e] || {})[t];
}
function Uh(e) {
	return Dh[e] || { prefix: null, iconName: null };
}
function k2(e) {
	var t = Ah[e],
		n = mc("fas", e);
	return (
		t ||
		(n ? { prefix: "fas", iconName: n } : null) || {
			prefix: null,
			iconName: null,
		}
	);
}
function _n() {
	return pc;
}
var hc = function () {
	return { prefix: null, iconName: null, rest: [] };
};
function il(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
		n = t.family,
		r = n === void 0 ? de : n,
		a = Ka[r][e],
		i = Xa[r][e] || Xa[r][a],
		o = e in Lt.styles ? e : null;
	return i || o || null;
}
var gd =
	((Ui = {}),
	Me(Ui, de, Object.keys(Ga[de])),
	Me(Ui, je, Object.keys(Ga[je])),
	Ui);
function ol(e) {
	var t,
		n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
		r = n.skipLookups,
		a = r === void 0 ? !1 : r,
		i =
			((t = {}),
			Me(t, de, "".concat(F.cssPrefix, "-").concat(de)),
			Me(t, je, "".concat(F.cssPrefix, "-").concat(je)),
			t),
		o = null,
		l = de;
	(e.includes(i[de]) ||
		e.some(function (u) {
			return gd[de].includes(u);
		})) &&
		(l = de),
		(e.includes(i[je]) ||
			e.some(function (u) {
				return gd[je].includes(u);
			})) &&
			(l = je);
	var s = e.reduce(function (u, c) {
		var f = x2(F.cssPrefix, c);
		if (
			(Er[c]
				? ((c = g2[l].includes(c) ? Ky[l][c] : c), (o = c), (u.prefix = c))
				: y2[l].indexOf(c) > -1
				? ((o = c), (u.prefix = il(c, { family: l })))
				: f
				? (u.iconName = f)
				: c !== F.replacementClass &&
				  c !== i[de] &&
				  c !== i[je] &&
				  u.rest.push(c),
			!a && u.prefix && u.iconName)
		) {
			var p = o === "fa" ? Uh(u.iconName) : {},
				w = Bn(u.prefix, u.iconName);
			p.prefix && (o = null),
				(u.iconName = p.iconName || w || u.iconName),
				(u.prefix = p.prefix || u.prefix),
				u.prefix === "far" &&
					!Er.far &&
					Er.fas &&
					!F.autoFetchSvg &&
					(u.prefix = "fas");
		}
		return u;
	}, hc());
	return (
		(e.includes("fa-brands") || e.includes("fab")) && (s.prefix = "fab"),
		(e.includes("fa-duotone") || e.includes("fad")) && (s.prefix = "fad"),
		!s.prefix &&
			l === je &&
			(Er.fass || F.autoFetchSvg) &&
			((s.prefix = "fass"),
			(s.iconName = Bn(s.prefix, s.iconName) || s.iconName)),
		(s.prefix === "fa" || o === "fa") && (s.prefix = _n() || "fas"),
		s
	);
}
var E2 = (function () {
		function e() {
			zy(this, e), (this.definitions = {});
		}
		return (
			Dy(e, [
				{
					key: "add",
					value: function () {
						for (
							var n = this, r = arguments.length, a = new Array(r), i = 0;
							i < r;
							i++
						)
							a[i] = arguments[i];
						var o = a.reduce(this._pullDefinitions, {});
						Object.keys(o).forEach(function (l) {
							(n.definitions[l] = z(z({}, n.definitions[l] || {}), o[l])),
								Xs(l, o[l]);
							var s = Ga[de][l];
							s && Xs(s, o[l]), $h();
						});
					},
				},
				{
					key: "reset",
					value: function () {
						this.definitions = {};
					},
				},
				{
					key: "_pullDefinitions",
					value: function (n, r) {
						var a = r.prefix && r.iconName && r.icon ? { 0: r } : r;
						return (
							Object.keys(a).map(function (i) {
								var o = a[i],
									l = o.prefix,
									s = o.iconName,
									u = o.icon,
									c = u[2];
								n[l] || (n[l] = {}),
									c.length > 0 &&
										c.forEach(function (f) {
											typeof f == "string" && (n[l][f] = u);
										}),
									(n[l][s] = u);
							}),
							n
						);
					},
				},
			]),
			e
		);
	})(),
	yd = [],
	br = {},
	Rr = {},
	b2 = Object.keys(Rr);
function C2(e, t) {
	var n = t.mixoutsTo;
	return (
		(yd = e),
		(br = {}),
		Object.keys(Rr).forEach(function (r) {
			b2.indexOf(r) === -1 && delete Rr[r];
		}),
		yd.forEach(function (r) {
			var a = r.mixout ? r.mixout() : {};
			if (
				(Object.keys(a).forEach(function (o) {
					typeof a[o] == "function" && (n[o] = a[o]),
						Ro(a[o]) === "object" &&
							Object.keys(a[o]).forEach(function (l) {
								n[o] || (n[o] = {}), (n[o][l] = a[o][l]);
							});
				}),
				r.hooks)
			) {
				var i = r.hooks();
				Object.keys(i).forEach(function (o) {
					br[o] || (br[o] = []), br[o].push(i[o]);
				});
			}
			r.provides && r.provides(Rr);
		}),
		n
	);
}
function Gs(e, t) {
	for (
		var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2;
		a < n;
		a++
	)
		r[a - 2] = arguments[a];
	var i = br[e] || [];
	return (
		i.forEach(function (o) {
			t = o.apply(null, [t].concat(r));
		}),
		t
	);
}
function er(e) {
	for (
		var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
		r < t;
		r++
	)
		n[r - 1] = arguments[r];
	var a = br[e] || [];
	a.forEach(function (i) {
		i.apply(null, n);
	});
}
function en() {
	var e = arguments[0],
		t = Array.prototype.slice.call(arguments, 1);
	return Rr[e] ? Rr[e].apply(null, t) : void 0;
}
function Js(e) {
	e.prefix === "fa" && (e.prefix = "fas");
	var t = e.iconName,
		n = e.prefix || _n();
	if (t)
		return (t = Bn(n, t) || t), hd(Hh.definitions, n, t) || hd(Lt.styles, n, t);
}
var Hh = new E2(),
	j2 = function () {
		(F.autoReplaceSvg = !1), (F.observeMutations = !1), er("noAuto");
	},
	N2 = {
		i2svg: function () {
			var t =
				arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
			return nn
				? (er("beforeI2svg", t), en("pseudoElements2svg", t), en("i2svg", t))
				: Promise.reject("Operation requires a DOM of some kind.");
		},
		watch: function () {
			var t =
					arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
				n = t.autoReplaceSvgRoot;
			F.autoReplaceSvg === !1 && (F.autoReplaceSvg = !0),
				(F.observeMutations = !0),
				p2(function () {
					_2({ autoReplaceSvgRoot: n }), er("watch", t);
				});
		},
	},
	P2 = {
		icon: function (t) {
			if (t === null) return null;
			if (Ro(t) === "object" && t.prefix && t.iconName)
				return {
					prefix: t.prefix,
					iconName: Bn(t.prefix, t.iconName) || t.iconName,
				};
			if (Array.isArray(t) && t.length === 2) {
				var n = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1],
					r = il(t[0]);
				return { prefix: r, iconName: Bn(r, n) || n };
			}
			if (
				typeof t == "string" &&
				(t.indexOf("".concat(F.cssPrefix, "-")) > -1 || t.match(Xy))
			) {
				var a = ol(t.split(" "), { skipLookups: !0 });
				return {
					prefix: a.prefix || _n(),
					iconName: Bn(a.prefix, a.iconName) || a.iconName,
				};
			}
			if (typeof t == "string") {
				var i = _n();
				return { prefix: i, iconName: Bn(i, t) || t };
			}
		},
	},
	vt = {
		noAuto: j2,
		config: F,
		dom: N2,
		parse: P2,
		library: Hh,
		findIconDefinition: Js,
		toHtml: si,
	},
	_2 = function () {
		var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
			n = t.autoReplaceSvgRoot,
			r = n === void 0 ? me : n;
		(Object.keys(Lt.styles).length > 0 || F.autoFetchSvg) &&
			nn &&
			F.autoReplaceSvg &&
			vt.dom.i2svg({ node: r });
	};
function ll(e, t) {
	return (
		Object.defineProperty(e, "abstract", { get: t }),
		Object.defineProperty(e, "html", {
			get: function () {
				return e.abstract.map(function (r) {
					return si(r);
				});
			},
		}),
		Object.defineProperty(e, "node", {
			get: function () {
				if (nn) {
					var r = me.createElement("div");
					return (r.innerHTML = e.html), r.children;
				}
			},
		}),
		e
	);
}
function T2(e) {
	var t = e.children,
		n = e.main,
		r = e.mask,
		a = e.attributes,
		i = e.styles,
		o = e.transform;
	if (dc(o) && n.found && !r.found) {
		var l = n.width,
			s = n.height,
			u = { x: l / s / 2, y: 0.5 };
		a.style = al(
			z(
				z({}, i),
				{},
				{
					"transform-origin": ""
						.concat(u.x + o.x / 16, "em ")
						.concat(u.y + o.y / 16, "em"),
				},
			),
		);
	}
	return [{ tag: "svg", attributes: a, children: t }];
}
function L2(e) {
	var t = e.prefix,
		n = e.iconName,
		r = e.children,
		a = e.attributes,
		i = e.symbol,
		o = i === !0 ? "".concat(t, "-").concat(F.cssPrefix, "-").concat(n) : i;
	return [
		{
			tag: "svg",
			attributes: { style: "display: none;" },
			children: [
				{ tag: "symbol", attributes: z(z({}, a), {}, { id: o }), children: r },
			],
		},
	];
}
function vc(e) {
	var t = e.icons,
		n = t.main,
		r = t.mask,
		a = e.prefix,
		i = e.iconName,
		o = e.transform,
		l = e.symbol,
		s = e.title,
		u = e.maskId,
		c = e.titleId,
		f = e.extra,
		p = e.watchable,
		w = p === void 0 ? !1 : p,
		x = r.found ? r : n,
		y = x.width,
		C = x.height,
		h = a === "fak",
		m = [F.replacementClass, i ? "".concat(F.cssPrefix, "-").concat(i) : ""]
			.filter(function (_) {
				return f.classes.indexOf(_) === -1;
			})
			.filter(function (_) {
				return _ !== "" || !!_;
			})
			.concat(f.classes)
			.join(" "),
		v = {
			children: [],
			attributes: z(
				z({}, f.attributes),
				{},
				{
					"data-prefix": a,
					"data-icon": i,
					class: m,
					role: f.attributes.role || "img",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 ".concat(y, " ").concat(C),
				},
			),
		},
		E =
			h && !~f.classes.indexOf("fa-fw")
				? { width: "".concat((y / C) * 16 * 0.0625, "em") }
				: {};
	w && (v.attributes[qn] = ""),
		s &&
			(v.children.push({
				tag: "title",
				attributes: {
					id: v.attributes["aria-labelledby"] || "title-".concat(c || Za()),
				},
				children: [s],
			}),
			delete v.attributes.title);
	var P = z(
			z({}, v),
			{},
			{
				prefix: a,
				iconName: i,
				main: n,
				mask: r,
				maskId: u,
				transform: o,
				symbol: l,
				styles: z(z({}, E), f.styles),
			},
		),
		R =
			r.found && n.found
				? en("generateAbstractMask", P) || { children: [], attributes: {} }
				: en("generateAbstractIcon", P) || { children: [], attributes: {} },
		g = R.children,
		j = R.attributes;
	return (P.children = g), (P.attributes = j), l ? L2(P) : T2(P);
}
function wd(e) {
	var t = e.content,
		n = e.width,
		r = e.height,
		a = e.transform,
		i = e.title,
		o = e.extra,
		l = e.watchable,
		s = l === void 0 ? !1 : l,
		u = z(
			z(z({}, o.attributes), i ? { title: i } : {}),
			{},
			{ class: o.classes.join(" ") },
		);
	s && (u[qn] = "");
	var c = z({}, o.styles);
	dc(a) &&
		((c.transform = u2({
			transform: a,
			startCentered: !0,
			width: n,
			height: r,
		})),
		(c["-webkit-transform"] = c.transform));
	var f = al(c);
	f.length > 0 && (u.style = f);
	var p = [];
	return (
		p.push({ tag: "span", attributes: u, children: [t] }),
		i &&
			p.push({ tag: "span", attributes: { class: "sr-only" }, children: [i] }),
		p
	);
}
function R2(e) {
	var t = e.content,
		n = e.title,
		r = e.extra,
		a = z(
			z(z({}, r.attributes), n ? { title: n } : {}),
			{},
			{ class: r.classes.join(" ") },
		),
		i = al(r.styles);
	i.length > 0 && (a.style = i);
	var o = [];
	return (
		o.push({ tag: "span", attributes: a, children: [t] }),
		n &&
			o.push({ tag: "span", attributes: { class: "sr-only" }, children: [n] }),
		o
	);
}
var Hl = Lt.styles;
function Zs(e) {
	var t = e[0],
		n = e[1],
		r = e.slice(4),
		a = oc(r, 1),
		i = a[0],
		o = null;
	return (
		Array.isArray(i)
			? (o = {
					tag: "g",
					attributes: { class: "".concat(F.cssPrefix, "-").concat(Vn.GROUP) },
					children: [
						{
							tag: "path",
							attributes: {
								class: "".concat(F.cssPrefix, "-").concat(Vn.SECONDARY),
								fill: "currentColor",
								d: i[0],
							},
						},
						{
							tag: "path",
							attributes: {
								class: "".concat(F.cssPrefix, "-").concat(Vn.PRIMARY),
								fill: "currentColor",
								d: i[1],
							},
						},
					],
			  })
			: (o = { tag: "path", attributes: { fill: "currentColor", d: i } }),
		{ found: !0, width: t, height: n, icon: o }
	);
}
var O2 = { found: !1, width: 512, height: 512 };
function M2(e, t) {
	!Ph &&
		!F.showMissingIcons &&
		e &&
		console.error(
			'Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'),
		);
}
function qs(e, t) {
	var n = t;
	return (
		t === "fa" && F.styleDefault !== null && (t = _n()),
		new Promise(function (r, a) {
			if ((en("missingIconAbstract"), n === "fa")) {
				var i = Uh(e) || {};
				(e = i.iconName || e), (t = i.prefix || t);
			}
			if (e && t && Hl[t] && Hl[t][e]) {
				var o = Hl[t][e];
				return r(Zs(o));
			}
			M2(e, t),
				r(
					z(
						z({}, O2),
						{},
						{
							icon:
								F.showMissingIcons && e ? en("missingIconAbstract") || {} : {},
						},
					),
				);
		})
	);
}
var xd = function () {},
	eu =
		F.measurePerformance && Oi && Oi.mark && Oi.measure
			? Oi
			: { mark: xd, measure: xd },
	ma = 'FA "6.5.2"',
	z2 = function (t) {
		return (
			eu.mark("".concat(ma, " ").concat(t, " begins")),
			function () {
				return Vh(t);
			}
		);
	},
	Vh = function (t) {
		eu.mark("".concat(ma, " ").concat(t, " ends")),
			eu.measure(
				"".concat(ma, " ").concat(t),
				"".concat(ma, " ").concat(t, " begins"),
				"".concat(ma, " ").concat(t, " ends"),
			);
	},
	gc = { begin: z2, end: Vh },
	to = function () {};
function Sd(e) {
	var t = e.getAttribute ? e.getAttribute(qn) : null;
	return typeof t == "string";
}
function I2(e) {
	var t = e.getAttribute ? e.getAttribute(sc) : null,
		n = e.getAttribute ? e.getAttribute(uc) : null;
	return t && n;
}
function D2(e) {
	return (
		e &&
		e.classList &&
		e.classList.contains &&
		e.classList.contains(F.replacementClass)
	);
}
function A2() {
	if (F.autoReplaceSvg === !0) return no.replace;
	var e = no[F.autoReplaceSvg];
	return e || no.replace;
}
function F2(e) {
	return me.createElementNS("http://www.w3.org/2000/svg", e);
}
function $2(e) {
	return me.createElement(e);
}
function Bh(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
		n = t.ceFn,
		r = n === void 0 ? (e.tag === "svg" ? F2 : $2) : n;
	if (typeof e == "string") return me.createTextNode(e);
	var a = r(e.tag);
	Object.keys(e.attributes || []).forEach(function (o) {
		a.setAttribute(o, e.attributes[o]);
	});
	var i = e.children || [];
	return (
		i.forEach(function (o) {
			a.appendChild(Bh(o, { ceFn: r }));
		}),
		a
	);
}
function U2(e) {
	var t = " ".concat(e.outerHTML, " ");
	return (t = "".concat(t, "Font Awesome fontawesome.com ")), t;
}
var no = {
	replace: function (t) {
		var n = t[0];
		if (n.parentNode)
			if (
				(t[1].forEach(function (a) {
					n.parentNode.insertBefore(Bh(a), n);
				}),
				n.getAttribute(qn) === null && F.keepOriginalSource)
			) {
				var r = me.createComment(U2(n));
				n.parentNode.replaceChild(r, n);
			} else n.remove();
	},
	nest: function (t) {
		var n = t[0],
			r = t[1];
		if (~fc(n).indexOf(F.replacementClass)) return no.replace(t);
		var a = new RegExp("".concat(F.cssPrefix, "-.*"));
		if ((delete r[0].attributes.id, r[0].attributes.class)) {
			var i = r[0].attributes.class.split(" ").reduce(
				function (l, s) {
					return (
						s === F.replacementClass || s.match(a)
							? l.toSvg.push(s)
							: l.toNode.push(s),
						l
					);
				},
				{ toNode: [], toSvg: [] },
			);
			(r[0].attributes.class = i.toSvg.join(" ")),
				i.toNode.length === 0
					? n.removeAttribute("class")
					: n.setAttribute("class", i.toNode.join(" "));
		}
		var o = r.map(function (l) {
			return si(l);
		}).join(`
`);
		n.setAttribute(qn, ""), (n.innerHTML = o);
	},
};
function kd(e) {
	e();
}
function Wh(e, t) {
	var n = typeof t == "function" ? t : to;
	if (e.length === 0) n();
	else {
		var r = kd;
		F.mutateApproach === Yy && (r = Pn.requestAnimationFrame || kd),
			r(function () {
				var a = A2(),
					i = gc.begin("mutate");
				e.map(a), i(), n();
			});
	}
}
var yc = !1;
function Yh() {
	yc = !0;
}
function tu() {
	yc = !1;
}
var Mo = null;
function Ed(e) {
	if (dd && F.observeMutations) {
		var t = e.treeCallback,
			n = t === void 0 ? to : t,
			r = e.nodeCallback,
			a = r === void 0 ? to : r,
			i = e.pseudoElementsCallback,
			o = i === void 0 ? to : i,
			l = e.observeMutationsRoot,
			s = l === void 0 ? me : l;
		(Mo = new dd(function (u) {
			if (!yc) {
				var c = _n();
				Wr(u).forEach(function (f) {
					if (
						(f.type === "childList" &&
							f.addedNodes.length > 0 &&
							!Sd(f.addedNodes[0]) &&
							(F.searchPseudoElements && o(f.target), n(f.target)),
						f.type === "attributes" &&
							f.target.parentNode &&
							F.searchPseudoElements &&
							o(f.target.parentNode),
						f.type === "attributes" &&
							Sd(f.target) &&
							~qy.indexOf(f.attributeName))
					)
						if (f.attributeName === "class" && I2(f.target)) {
							var p = ol(fc(f.target)),
								w = p.prefix,
								x = p.iconName;
							f.target.setAttribute(sc, w || c),
								x && f.target.setAttribute(uc, x);
						} else D2(f.target) && a(f.target);
				});
			}
		})),
			nn &&
				Mo.observe(s, {
					childList: !0,
					attributes: !0,
					characterData: !0,
					subtree: !0,
				});
	}
}
function H2() {
	Mo && Mo.disconnect();
}
function V2(e) {
	var t = e.getAttribute("style"),
		n = [];
	return (
		t &&
			(n = t.split(";").reduce(function (r, a) {
				var i = a.split(":"),
					o = i[0],
					l = i.slice(1);
				return o && l.length > 0 && (r[o] = l.join(":").trim()), r;
			}, {})),
		n
	);
}
function B2(e) {
	var t = e.getAttribute("data-prefix"),
		n = e.getAttribute("data-icon"),
		r = e.innerText !== void 0 ? e.innerText.trim() : "",
		a = ol(fc(e));
	return (
		a.prefix || (a.prefix = _n()),
		t && n && ((a.prefix = t), (a.iconName = n)),
		(a.iconName && a.prefix) ||
			(a.prefix &&
				r.length > 0 &&
				(a.iconName =
					S2(a.prefix, e.innerText) || mc(a.prefix, Ks(e.innerText))),
			!a.iconName &&
				F.autoFetchSvg &&
				e.firstChild &&
				e.firstChild.nodeType === Node.TEXT_NODE &&
				(a.iconName = e.firstChild.data)),
		a
	);
}
function W2(e) {
	var t = Wr(e.attributes).reduce(function (a, i) {
			return (
				a.name !== "class" && a.name !== "style" && (a[i.name] = i.value), a
			);
		}, {}),
		n = e.getAttribute("title"),
		r = e.getAttribute("data-fa-title-id");
	return (
		F.autoA11y &&
			(n
				? (t["aria-labelledby"] = ""
						.concat(F.replacementClass, "-title-")
						.concat(r || Za()))
				: ((t["aria-hidden"] = "true"), (t.focusable = "false"))),
		t
	);
}
function Y2() {
	return {
		iconName: null,
		title: null,
		titleId: null,
		prefix: null,
		transform: $t,
		symbol: !1,
		mask: { iconName: null, prefix: null, rest: [] },
		maskId: null,
		extra: { classes: [], styles: {}, attributes: {} },
	};
}
function bd(e) {
	var t =
			arguments.length > 1 && arguments[1] !== void 0
				? arguments[1]
				: { styleParser: !0 },
		n = B2(e),
		r = n.iconName,
		a = n.prefix,
		i = n.rest,
		o = W2(e),
		l = Gs("parseNodeAttributes", {}, e),
		s = t.styleParser ? V2(e) : [];
	return z(
		{
			iconName: r,
			title: e.getAttribute("title"),
			titleId: e.getAttribute("data-fa-title-id"),
			prefix: a,
			transform: $t,
			mask: { iconName: null, prefix: null, rest: [] },
			maskId: null,
			symbol: !1,
			extra: { classes: i, styles: s, attributes: o },
		},
		l,
	);
}
var Q2 = Lt.styles;
function Qh(e) {
	var t = F.autoReplaceSvg === "nest" ? bd(e, { styleParser: !1 }) : bd(e);
	return ~t.extra.classes.indexOf(_h)
		? en("generateLayersText", e, t)
		: en("generateSvgReplacementMutation", e, t);
}
var Tn = new Set();
cc.map(function (e) {
	Tn.add("fa-".concat(e));
});
Object.keys(Ka[de]).map(Tn.add.bind(Tn));
Object.keys(Ka[je]).map(Tn.add.bind(Tn));
Tn = oi(Tn);
function Cd(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
	if (!nn) return Promise.resolve();
	var n = me.documentElement.classList,
		r = function (f) {
			return n.add("".concat(pd, "-").concat(f));
		},
		a = function (f) {
			return n.remove("".concat(pd, "-").concat(f));
		},
		i = F.autoFetchSvg
			? Tn
			: cc
					.map(function (c) {
						return "fa-".concat(c);
					})
					.concat(Object.keys(Q2));
	i.includes("fa") || i.push("fa");
	var o = [".".concat(_h, ":not([").concat(qn, "])")]
		.concat(
			i.map(function (c) {
				return ".".concat(c, ":not([").concat(qn, "])");
			}),
		)
		.join(", ");
	if (o.length === 0) return Promise.resolve();
	var l = [];
	try {
		l = Wr(e.querySelectorAll(o));
	} catch {}
	if (l.length > 0) r("pending"), a("complete");
	else return Promise.resolve();
	var s = gc.begin("onTree"),
		u = l.reduce(function (c, f) {
			try {
				var p = Qh(f);
				p && c.push(p);
			} catch (w) {
				Ph || (w.name === "MissingIcon" && console.error(w));
			}
			return c;
		}, []);
	return new Promise(function (c, f) {
		Promise.all(u)
			.then(function (p) {
				Wh(p, function () {
					r("active"),
						r("complete"),
						a("pending"),
						typeof t == "function" && t(),
						s(),
						c();
				});
			})
			.catch(function (p) {
				s(), f(p);
			});
	});
}
function K2(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
	Qh(e).then(function (n) {
		n && Wh([n], t);
	});
}
function X2(e) {
	return function (t) {
		var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
			r = (t || {}).icon ? t : Js(t || {}),
			a = n.mask;
		return (
			a && (a = (a || {}).icon ? a : Js(a || {})),
			e(r, z(z({}, n), {}, { mask: a }))
		);
	};
}
var G2 = function (t) {
		var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
			r = n.transform,
			a = r === void 0 ? $t : r,
			i = n.symbol,
			o = i === void 0 ? !1 : i,
			l = n.mask,
			s = l === void 0 ? null : l,
			u = n.maskId,
			c = u === void 0 ? null : u,
			f = n.title,
			p = f === void 0 ? null : f,
			w = n.titleId,
			x = w === void 0 ? null : w,
			y = n.classes,
			C = y === void 0 ? [] : y,
			h = n.attributes,
			m = h === void 0 ? {} : h,
			v = n.styles,
			E = v === void 0 ? {} : v;
		if (t) {
			var P = t.prefix,
				R = t.iconName,
				g = t.icon;
			return ll(z({ type: "icon" }, t), function () {
				return (
					er("beforeDOMElementCreation", { iconDefinition: t, params: n }),
					F.autoA11y &&
						(p
							? (m["aria-labelledby"] = ""
									.concat(F.replacementClass, "-title-")
									.concat(x || Za()))
							: ((m["aria-hidden"] = "true"), (m.focusable = "false"))),
					vc({
						icons: {
							main: Zs(g),
							mask: s
								? Zs(s.icon)
								: { found: !1, width: null, height: null, icon: {} },
						},
						prefix: P,
						iconName: R,
						transform: z(z({}, $t), a),
						symbol: o,
						title: p,
						maskId: c,
						titleId: x,
						extra: { attributes: m, styles: E, classes: C },
					})
				);
			});
		}
	},
	J2 = {
		mixout: function () {
			return { icon: X2(G2) };
		},
		hooks: function () {
			return {
				mutationObserverCallbacks: function (n) {
					return (n.treeCallback = Cd), (n.nodeCallback = K2), n;
				},
			};
		},
		provides: function (t) {
			(t.i2svg = function (n) {
				var r = n.node,
					a = r === void 0 ? me : r,
					i = n.callback,
					o = i === void 0 ? function () {} : i;
				return Cd(a, o);
			}),
				(t.generateSvgReplacementMutation = function (n, r) {
					var a = r.iconName,
						i = r.title,
						o = r.titleId,
						l = r.prefix,
						s = r.transform,
						u = r.symbol,
						c = r.mask,
						f = r.maskId,
						p = r.extra;
					return new Promise(function (w, x) {
						Promise.all([
							qs(a, l),
							c.iconName
								? qs(c.iconName, c.prefix)
								: Promise.resolve({
										found: !1,
										width: 512,
										height: 512,
										icon: {},
								  }),
						])
							.then(function (y) {
								var C = oc(y, 2),
									h = C[0],
									m = C[1];
								w([
									n,
									vc({
										icons: { main: h, mask: m },
										prefix: l,
										iconName: a,
										transform: s,
										symbol: u,
										maskId: f,
										title: i,
										titleId: o,
										extra: p,
										watchable: !0,
									}),
								]);
							})
							.catch(x);
					});
				}),
				(t.generateAbstractIcon = function (n) {
					var r = n.children,
						a = n.attributes,
						i = n.main,
						o = n.transform,
						l = n.styles,
						s = al(l);
					s.length > 0 && (a.style = s);
					var u;
					return (
						dc(o) &&
							(u = en("generateAbstractTransformGrouping", {
								main: i,
								transform: o,
								containerWidth: i.width,
								iconWidth: i.width,
							})),
						r.push(u || i.icon),
						{ children: r, attributes: a }
					);
				});
		},
	},
	Z2 = {
		mixout: function () {
			return {
				layer: function (n) {
					var r =
							arguments.length > 1 && arguments[1] !== void 0
								? arguments[1]
								: {},
						a = r.classes,
						i = a === void 0 ? [] : a;
					return ll({ type: "layer" }, function () {
						er("beforeDOMElementCreation", { assembler: n, params: r });
						var o = [];
						return (
							n(function (l) {
								Array.isArray(l)
									? l.map(function (s) {
											o = o.concat(s.abstract);
									  })
									: (o = o.concat(l.abstract));
							}),
							[
								{
									tag: "span",
									attributes: {
										class: ["".concat(F.cssPrefix, "-layers")]
											.concat(oi(i))
											.join(" "),
									},
									children: o,
								},
							]
						);
					});
				},
			};
		},
	},
	q2 = {
		mixout: function () {
			return {
				counter: function (n) {
					var r =
							arguments.length > 1 && arguments[1] !== void 0
								? arguments[1]
								: {},
						a = r.title,
						i = a === void 0 ? null : a,
						o = r.classes,
						l = o === void 0 ? [] : o,
						s = r.attributes,
						u = s === void 0 ? {} : s,
						c = r.styles,
						f = c === void 0 ? {} : c;
					return ll({ type: "counter", content: n }, function () {
						return (
							er("beforeDOMElementCreation", { content: n, params: r }),
							R2({
								content: n.toString(),
								title: i,
								extra: {
									attributes: u,
									styles: f,
									classes: ["".concat(F.cssPrefix, "-layers-counter")].concat(
										oi(l),
									),
								},
							})
						);
					});
				},
			};
		},
	},
	ew = {
		mixout: function () {
			return {
				text: function (n) {
					var r =
							arguments.length > 1 && arguments[1] !== void 0
								? arguments[1]
								: {},
						a = r.transform,
						i = a === void 0 ? $t : a,
						o = r.title,
						l = o === void 0 ? null : o,
						s = r.classes,
						u = s === void 0 ? [] : s,
						c = r.attributes,
						f = c === void 0 ? {} : c,
						p = r.styles,
						w = p === void 0 ? {} : p;
					return ll({ type: "text", content: n }, function () {
						return (
							er("beforeDOMElementCreation", { content: n, params: r }),
							wd({
								content: n,
								transform: z(z({}, $t), i),
								title: l,
								extra: {
									attributes: f,
									styles: w,
									classes: ["".concat(F.cssPrefix, "-layers-text")].concat(
										oi(u),
									),
								},
							})
						);
					});
				},
			};
		},
		provides: function (t) {
			t.generateLayersText = function (n, r) {
				var a = r.title,
					i = r.transform,
					o = r.extra,
					l = null,
					s = null;
				if (Ch) {
					var u = parseInt(getComputedStyle(n).fontSize, 10),
						c = n.getBoundingClientRect();
					(l = c.width / u), (s = c.height / u);
				}
				return (
					F.autoA11y && !a && (o.attributes["aria-hidden"] = "true"),
					Promise.resolve([
						n,
						wd({
							content: n.innerHTML,
							width: l,
							height: s,
							transform: i,
							title: a,
							extra: o,
							watchable: !0,
						}),
					])
				);
			};
		},
	},
	tw = new RegExp('"', "ug"),
	jd = [1105920, 1112319];
function nw(e) {
	var t = e.replace(tw, ""),
		n = h2(t, 0),
		r = n >= jd[0] && n <= jd[1],
		a = t.length === 2 ? t[0] === t[1] : !1;
	return { value: Ks(a ? t[0] : t), isSecondary: r || a };
}
function Nd(e, t) {
	var n = "".concat(Wy).concat(t.replace(":", "-"));
	return new Promise(function (r, a) {
		if (e.getAttribute(n) !== null) return r();
		var i = Wr(e.children),
			o = i.filter(function (g) {
				return g.getAttribute(Qs) === t;
			})[0],
			l = Pn.getComputedStyle(e, t),
			s = l.getPropertyValue("font-family").match(Gy),
			u = l.getPropertyValue("font-weight"),
			c = l.getPropertyValue("content");
		if (o && !s) return e.removeChild(o), r();
		if (s && c !== "none" && c !== "") {
			var f = l.getPropertyValue("content"),
				p = ~["Sharp"].indexOf(s[2]) ? je : de,
				w = ~[
					"Solid",
					"Regular",
					"Light",
					"Thin",
					"Duotone",
					"Brands",
					"Kit",
				].indexOf(s[2])
					? Xa[p][s[2].toLowerCase()]
					: Jy[p][u],
				x = nw(f),
				y = x.value,
				C = x.isSecondary,
				h = s[0].startsWith("FontAwesome"),
				m = mc(w, y),
				v = m;
			if (h) {
				var E = k2(y);
				E.iconName && E.prefix && ((m = E.iconName), (w = E.prefix));
			}
			if (
				m &&
				!C &&
				(!o || o.getAttribute(sc) !== w || o.getAttribute(uc) !== v)
			) {
				e.setAttribute(n, v), o && e.removeChild(o);
				var P = Y2(),
					R = P.extra;
				(R.attributes[Qs] = t),
					qs(m, w)
						.then(function (g) {
							var j = vc(
									z(
										z({}, P),
										{},
										{
											icons: { main: g, mask: hc() },
											prefix: w,
											iconName: v,
											extra: R,
											watchable: !0,
										},
									),
								),
								_ = me.createElementNS("http://www.w3.org/2000/svg", "svg");
							t === "::before"
								? e.insertBefore(_, e.firstChild)
								: e.appendChild(_),
								(_.outerHTML = j.map(function (O) {
									return si(O);
								}).join(`
`)),
								e.removeAttribute(n),
								r();
						})
						.catch(a);
			} else r();
		} else r();
	});
}
function rw(e) {
	return Promise.all([Nd(e, "::before"), Nd(e, "::after")]);
}
function aw(e) {
	return (
		e.parentNode !== document.head &&
		!~Qy.indexOf(e.tagName.toUpperCase()) &&
		!e.getAttribute(Qs) &&
		(!e.parentNode || e.parentNode.tagName !== "svg")
	);
}
function Pd(e) {
	if (nn)
		return new Promise(function (t, n) {
			var r = Wr(e.querySelectorAll("*")).filter(aw).map(rw),
				a = gc.begin("searchPseudoElements");
			Yh(),
				Promise.all(r)
					.then(function () {
						a(), tu(), t();
					})
					.catch(function () {
						a(), tu(), n();
					});
		});
}
var iw = {
		hooks: function () {
			return {
				mutationObserverCallbacks: function (n) {
					return (n.pseudoElementsCallback = Pd), n;
				},
			};
		},
		provides: function (t) {
			t.pseudoElements2svg = function (n) {
				var r = n.node,
					a = r === void 0 ? me : r;
				F.searchPseudoElements && Pd(a);
			};
		},
	},
	_d = !1,
	ow = {
		mixout: function () {
			return {
				dom: {
					unwatch: function () {
						Yh(), (_d = !0);
					},
				},
			};
		},
		hooks: function () {
			return {
				bootstrap: function () {
					Ed(Gs("mutationObserverCallbacks", {}));
				},
				noAuto: function () {
					H2();
				},
				watch: function (n) {
					var r = n.observeMutationsRoot;
					_d
						? tu()
						: Ed(Gs("mutationObserverCallbacks", { observeMutationsRoot: r }));
				},
			};
		},
	},
	Td = function (t) {
		var n = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
		return t
			.toLowerCase()
			.split(" ")
			.reduce(function (r, a) {
				var i = a.toLowerCase().split("-"),
					o = i[0],
					l = i.slice(1).join("-");
				if (o && l === "h") return (r.flipX = !0), r;
				if (o && l === "v") return (r.flipY = !0), r;
				if (((l = parseFloat(l)), isNaN(l))) return r;
				switch (o) {
					case "grow":
						r.size = r.size + l;
						break;
					case "shrink":
						r.size = r.size - l;
						break;
					case "left":
						r.x = r.x - l;
						break;
					case "right":
						r.x = r.x + l;
						break;
					case "up":
						r.y = r.y - l;
						break;
					case "down":
						r.y = r.y + l;
						break;
					case "rotate":
						r.rotate = r.rotate + l;
						break;
				}
				return r;
			}, n);
	},
	lw = {
		mixout: function () {
			return {
				parse: {
					transform: function (n) {
						return Td(n);
					},
				},
			};
		},
		hooks: function () {
			return {
				parseNodeAttributes: function (n, r) {
					var a = r.getAttribute("data-fa-transform");
					return a && (n.transform = Td(a)), n;
				},
			};
		},
		provides: function (t) {
			t.generateAbstractTransformGrouping = function (n) {
				var r = n.main,
					a = n.transform,
					i = n.containerWidth,
					o = n.iconWidth,
					l = { transform: "translate(".concat(i / 2, " 256)") },
					s = "translate(".concat(a.x * 32, ", ").concat(a.y * 32, ") "),
					u = "scale("
						.concat((a.size / 16) * (a.flipX ? -1 : 1), ", ")
						.concat((a.size / 16) * (a.flipY ? -1 : 1), ") "),
					c = "rotate(".concat(a.rotate, " 0 0)"),
					f = { transform: "".concat(s, " ").concat(u, " ").concat(c) },
					p = { transform: "translate(".concat((o / 2) * -1, " -256)") },
					w = { outer: l, inner: f, path: p };
				return {
					tag: "g",
					attributes: z({}, w.outer),
					children: [
						{
							tag: "g",
							attributes: z({}, w.inner),
							children: [
								{
									tag: r.icon.tag,
									children: r.icon.children,
									attributes: z(z({}, r.icon.attributes), w.path),
								},
							],
						},
					],
				};
			};
		},
	},
	Vl = { x: 0, y: 0, width: "100%", height: "100%" };
function Ld(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
	return (
		e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e
	);
}
function sw(e) {
	return e.tag === "g" ? e.children : [e];
}
var uw = {
		hooks: function () {
			return {
				parseNodeAttributes: function (n, r) {
					var a = r.getAttribute("data-fa-mask"),
						i = a
							? ol(
									a.split(" ").map(function (o) {
										return o.trim();
									}),
							  )
							: hc();
					return (
						i.prefix || (i.prefix = _n()),
						(n.mask = i),
						(n.maskId = r.getAttribute("data-fa-mask-id")),
						n
					);
				},
			};
		},
		provides: function (t) {
			t.generateAbstractMask = function (n) {
				var r = n.children,
					a = n.attributes,
					i = n.main,
					o = n.mask,
					l = n.maskId,
					s = n.transform,
					u = i.width,
					c = i.icon,
					f = o.width,
					p = o.icon,
					w = s2({ transform: s, containerWidth: f, iconWidth: u }),
					x = { tag: "rect", attributes: z(z({}, Vl), {}, { fill: "white" }) },
					y = c.children ? { children: c.children.map(Ld) } : {},
					C = {
						tag: "g",
						attributes: z({}, w.inner),
						children: [
							Ld(
								z(
									{ tag: c.tag, attributes: z(z({}, c.attributes), w.path) },
									y,
								),
							),
						],
					},
					h = { tag: "g", attributes: z({}, w.outer), children: [C] },
					m = "mask-".concat(l || Za()),
					v = "clip-".concat(l || Za()),
					E = {
						tag: "mask",
						attributes: z(
							z({}, Vl),
							{},
							{
								id: m,
								maskUnits: "userSpaceOnUse",
								maskContentUnits: "userSpaceOnUse",
							},
						),
						children: [x, h],
					},
					P = {
						tag: "defs",
						children: [
							{ tag: "clipPath", attributes: { id: v }, children: sw(p) },
							E,
						],
					};
				return (
					r.push(P, {
						tag: "rect",
						attributes: z(
							{
								fill: "currentColor",
								"clip-path": "url(#".concat(v, ")"),
								mask: "url(#".concat(m, ")"),
							},
							Vl,
						),
					}),
					{ children: r, attributes: a }
				);
			};
		},
	},
	cw = {
		provides: function (t) {
			var n = !1;
			Pn.matchMedia &&
				(n = Pn.matchMedia("(prefers-reduced-motion: reduce)").matches),
				(t.missingIconAbstract = function () {
					var r = [],
						a = { fill: "currentColor" },
						i = { attributeType: "XML", repeatCount: "indefinite", dur: "2s" };
					r.push({
						tag: "path",
						attributes: z(
							z({}, a),
							{},
							{
								d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
							},
						),
					});
					var o = z(z({}, i), {}, { attributeName: "opacity" }),
						l = {
							tag: "circle",
							attributes: z(z({}, a), {}, { cx: "256", cy: "364", r: "28" }),
							children: [],
						};
					return (
						n ||
							l.children.push(
								{
									tag: "animate",
									attributes: z(
										z({}, i),
										{},
										{ attributeName: "r", values: "28;14;28;28;14;28;" },
									),
								},
								{
									tag: "animate",
									attributes: z(z({}, o), {}, { values: "1;0;1;1;0;1;" }),
								},
							),
						r.push(l),
						r.push({
							tag: "path",
							attributes: z(
								z({}, a),
								{},
								{
									opacity: "1",
									d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
								},
							),
							children: n
								? []
								: [
										{
											tag: "animate",
											attributes: z(z({}, o), {}, { values: "1;0;0;0;0;1;" }),
										},
								  ],
						}),
						n ||
							r.push({
								tag: "path",
								attributes: z(
									z({}, a),
									{},
									{
										opacity: "0",
										d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
									},
								),
								children: [
									{
										tag: "animate",
										attributes: z(z({}, o), {}, { values: "0;0;1;1;0;0;" }),
									},
								],
							}),
						{ tag: "g", attributes: { class: "missing" }, children: r }
					);
				});
		},
	},
	fw = {
		hooks: function () {
			return {
				parseNodeAttributes: function (n, r) {
					var a = r.getAttribute("data-fa-symbol"),
						i = a === null ? !1 : a === "" ? !0 : a;
					return (n.symbol = i), n;
				},
			};
		},
	},
	dw = [f2, J2, Z2, q2, ew, iw, ow, lw, uw, cw, fw];
C2(dw, { mixoutsTo: vt });
vt.noAuto;
vt.config;
vt.library;
vt.dom;
var nu = vt.parse;
vt.findIconDefinition;
vt.toHtml;
var pw = vt.icon;
vt.layer;
vt.text;
vt.counter;
var Kh = { exports: {} },
	mw = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
	hw = mw,
	vw = hw;
function Xh() {}
function Gh() {}
Gh.resetWarningCache = Xh;
var gw = function () {
	function e(r, a, i, o, l, s) {
		if (s !== vw) {
			var u = new Error(
				"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
			);
			throw ((u.name = "Invariant Violation"), u);
		}
	}
	e.isRequired = e;
	function t() {
		return e;
	}
	var n = {
		array: e,
		bigint: e,
		bool: e,
		func: e,
		number: e,
		object: e,
		string: e,
		symbol: e,
		any: e,
		arrayOf: t,
		element: e,
		elementType: e,
		instanceOf: t,
		node: e,
		objectOf: t,
		oneOf: t,
		oneOfType: t,
		shape: t,
		exact: t,
		checkPropTypes: Gh,
		resetWarningCache: Xh,
	};
	return (n.PropTypes = n), n;
};
Kh.exports = gw();
var yw = Kh.exports;
const J = iu(yw);
function Rd(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t &&
			(r = r.filter(function (a) {
				return Object.getOwnPropertyDescriptor(e, a).enumerable;
			})),
			n.push.apply(n, r);
	}
	return n;
}
function At(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] != null ? arguments[t] : {};
		t % 2
			? Rd(Object(n), !0).forEach(function (r) {
					Cr(e, r, n[r]);
			  })
			: Object.getOwnPropertyDescriptors
			? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
			: Rd(Object(n)).forEach(function (r) {
					Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
			  });
	}
	return e;
}
function zo(e) {
	"@babel/helpers - typeof";
	return (
		(zo =
			typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
				? function (t) {
						return typeof t;
				  }
				: function (t) {
						return t &&
							typeof Symbol == "function" &&
							t.constructor === Symbol &&
							t !== Symbol.prototype
							? "symbol"
							: typeof t;
				  }),
		zo(e)
	);
}
function Cr(e, t, n) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0,
			  })
			: (e[t] = n),
		e
	);
}
function ww(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		a,
		i;
	for (i = 0; i < r.length; i++)
		(a = r[i]), !(t.indexOf(a) >= 0) && (n[a] = e[a]);
	return n;
}
function xw(e, t) {
	if (e == null) return {};
	var n = ww(e, t),
		r,
		a;
	if (Object.getOwnPropertySymbols) {
		var i = Object.getOwnPropertySymbols(e);
		for (a = 0; a < i.length; a++)
			(r = i[a]),
				!(t.indexOf(r) >= 0) &&
					Object.prototype.propertyIsEnumerable.call(e, r) &&
					(n[r] = e[r]);
	}
	return n;
}
function ru(e) {
	return Sw(e) || kw(e) || Ew(e) || bw();
}
function Sw(e) {
	if (Array.isArray(e)) return au(e);
}
function kw(e) {
	if (
		(typeof Symbol < "u" && e[Symbol.iterator] != null) ||
		e["@@iterator"] != null
	)
		return Array.from(e);
}
function Ew(e, t) {
	if (e) {
		if (typeof e == "string") return au(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		if (
			(n === "Object" && e.constructor && (n = e.constructor.name),
			n === "Map" || n === "Set")
		)
			return Array.from(e);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
			return au(e, t);
	}
}
function au(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function bw() {
	throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Cw(e) {
	var t,
		n = e.beat,
		r = e.fade,
		a = e.beatFade,
		i = e.bounce,
		o = e.shake,
		l = e.flash,
		s = e.spin,
		u = e.spinPulse,
		c = e.spinReverse,
		f = e.pulse,
		p = e.fixedWidth,
		w = e.inverse,
		x = e.border,
		y = e.listItem,
		C = e.flip,
		h = e.size,
		m = e.rotation,
		v = e.pull,
		E =
			((t = {
				"fa-beat": n,
				"fa-fade": r,
				"fa-beat-fade": a,
				"fa-bounce": i,
				"fa-shake": o,
				"fa-flash": l,
				"fa-spin": s,
				"fa-spin-reverse": c,
				"fa-spin-pulse": u,
				"fa-pulse": f,
				"fa-fw": p,
				"fa-inverse": w,
				"fa-border": x,
				"fa-li": y,
				"fa-flip": C === !0,
				"fa-flip-horizontal": C === "horizontal" || C === "both",
				"fa-flip-vertical": C === "vertical" || C === "both",
			}),
			Cr(t, "fa-".concat(h), typeof h < "u" && h !== null),
			Cr(t, "fa-rotate-".concat(m), typeof m < "u" && m !== null && m !== 0),
			Cr(t, "fa-pull-".concat(v), typeof v < "u" && v !== null),
			Cr(t, "fa-swap-opacity", e.swapOpacity),
			t);
	return Object.keys(E)
		.map(function (P) {
			return E[P] ? P : null;
		})
		.filter(function (P) {
			return P;
		});
}
function jw(e) {
	return (e = e - 0), e === e;
}
function Jh(e) {
	return jw(e)
		? e
		: ((e = e.replace(/[\-_\s]+(.)?/g, function (t, n) {
				return n ? n.toUpperCase() : "";
		  })),
		  e.substr(0, 1).toLowerCase() + e.substr(1));
}
var Nw = ["style"];
function Pw(e) {
	return e.charAt(0).toUpperCase() + e.slice(1);
}
function _w(e) {
	return e
		.split(";")
		.map(function (t) {
			return t.trim();
		})
		.filter(function (t) {
			return t;
		})
		.reduce(function (t, n) {
			var r = n.indexOf(":"),
				a = Jh(n.slice(0, r)),
				i = n.slice(r + 1).trim();
			return a.startsWith("webkit") ? (t[Pw(a)] = i) : (t[a] = i), t;
		}, {});
}
function Zh(e, t) {
	var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
	if (typeof t == "string") return t;
	var r = (t.children || []).map(function (s) {
			return Zh(e, s);
		}),
		a = Object.keys(t.attributes || {}).reduce(
			function (s, u) {
				var c = t.attributes[u];
				switch (u) {
					case "class":
						(s.attrs.className = c), delete t.attributes.class;
						break;
					case "style":
						s.attrs.style = _w(c);
						break;
					default:
						u.indexOf("aria-") === 0 || u.indexOf("data-") === 0
							? (s.attrs[u.toLowerCase()] = c)
							: (s.attrs[Jh(u)] = c);
				}
				return s;
			},
			{ attrs: {} },
		),
		i = n.style,
		o = i === void 0 ? {} : i,
		l = xw(n, Nw);
	return (
		(a.attrs.style = At(At({}, a.attrs.style), o)),
		e.apply(void 0, [t.tag, At(At({}, a.attrs), l)].concat(ru(r)))
	);
}
var qh = !1;
try {
	qh = !0;
} catch {}
function Tw() {
	if (!qh && console && typeof console.error == "function") {
		var e;
		(e = console).error.apply(e, arguments);
	}
}
function Od(e) {
	if (e && zo(e) === "object" && e.prefix && e.iconName && e.icon) return e;
	if (nu.icon) return nu.icon(e);
	if (e === null) return null;
	if (e && zo(e) === "object" && e.prefix && e.iconName) return e;
	if (Array.isArray(e) && e.length === 2)
		return { prefix: e[0], iconName: e[1] };
	if (typeof e == "string") return { prefix: "fas", iconName: e };
}
function Bl(e, t) {
	return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
		? Cr({}, e, t)
		: {};
}
var Md = {
		border: !1,
		className: "",
		mask: null,
		maskId: null,
		fixedWidth: !1,
		inverse: !1,
		flip: !1,
		icon: null,
		listItem: !1,
		pull: null,
		pulse: !1,
		rotation: null,
		size: null,
		spin: !1,
		spinPulse: !1,
		spinReverse: !1,
		beat: !1,
		fade: !1,
		beatFade: !1,
		bounce: !1,
		shake: !1,
		symbol: !1,
		title: "",
		titleId: null,
		transform: null,
		swapOpacity: !1,
	},
	se = ae.forwardRef(function (e, t) {
		var n = At(At({}, Md), e),
			r = n.icon,
			a = n.mask,
			i = n.symbol,
			o = n.className,
			l = n.title,
			s = n.titleId,
			u = n.maskId,
			c = Od(r),
			f = Bl("classes", [].concat(ru(Cw(n)), ru((o || "").split(" ")))),
			p = Bl(
				"transform",
				typeof n.transform == "string"
					? nu.transform(n.transform)
					: n.transform,
			),
			w = Bl("mask", Od(a)),
			x = pw(
				c,
				At(
					At(At(At({}, f), p), w),
					{},
					{ symbol: i, title: l, titleId: s, maskId: u },
				),
			);
		if (!x) return Tw("Could not find icon", c), null;
		var y = x.abstract,
			C = { ref: t };
		return (
			Object.keys(n).forEach(function (h) {
				Md.hasOwnProperty(h) || (C[h] = n[h]);
			}),
			Lw(y[0], C)
		);
	});
se.displayName = "FontAwesomeIcon";
se.propTypes = {
	beat: J.bool,
	border: J.bool,
	beatFade: J.bool,
	bounce: J.bool,
	className: J.string,
	fade: J.bool,
	flash: J.bool,
	mask: J.oneOfType([J.object, J.array, J.string]),
	maskId: J.string,
	fixedWidth: J.bool,
	inverse: J.bool,
	flip: J.oneOf([!0, !1, "horizontal", "vertical", "both"]),
	icon: J.oneOfType([J.object, J.array, J.string]),
	listItem: J.bool,
	pull: J.oneOf(["right", "left"]),
	pulse: J.bool,
	rotation: J.oneOf([0, 90, 180, 270]),
	shake: J.bool,
	size: J.oneOf([
		"2xs",
		"xs",
		"sm",
		"lg",
		"xl",
		"2xl",
		"1x",
		"2x",
		"3x",
		"4x",
		"5x",
		"6x",
		"7x",
		"8x",
		"9x",
		"10x",
	]),
	spin: J.bool,
	spinPulse: J.bool,
	spinReverse: J.bool,
	symbol: J.oneOfType([J.bool, J.string]),
	title: J.string,
	titleId: J.string,
	transform: J.oneOfType([J.string, J.object]),
	swapOpacity: J.bool,
};
var Lw = Zh.bind(null, ae.createElement);
const zd = () => {
	const [e, t] = S.useState(""),
		[n, r] = S.useState(""),
		[a, i] = S.useState(!1),
		[o, l] = S.useState(""),
		s = ar(),
		u = (c) => {
			if ((c.preventDefault(), !n)) K.error("Vui lòng nhập mật khẩu!");
			else if (n.length < 6) K.warning("Mật khẩu phải trên 6 kí tự!");
			else {
				let f = {
					type: "updateinfo",
					username: e,
					password: n,
					phone_number: o,
				};
				window.chrome.webview.postMessage(f),
					K.success("Đăng xuất sau 2 giây"),
					setTimeout(() => {
						s("/");
					}, 2e3);
			}
		};
	return (
		S.useEffect(() => {
			const c = JSON.parse(localStorage.getItem("data") || "{}");
			if (Object.keys(c).length > 0) {
				const f = JSON.parse(c);
				t(f.Username), l(f.phone_number);
			}
		}, [e]),
		d.jsxs("div", {
			className: "w-full",
			children: [
				d.jsxs("div", {
					className: "text-3xl font-bold text-indigo-500",
					children: [
						d.jsx(se, { icon: xh.faUserGraduate }),
						" Thông tin tài khoản",
					],
				}),
				d.jsx("div", {
					className: "content mt-2 w-full overflow-auto text-indigo-500",
					children: d.jsxs("form", {
						className: "flex flex-col",
						children: [
							d.jsx("label", {
								className: "font-bold",
								htmlFor: "phone",
								children: "Số điện thoại:",
							}),
							d.jsx("input", {
								value: o,
								onChange: (c) => l(c.target.value),
								name: "phone",
								id: "phone",
								type: "number",
								className:
									"w-1/2 rounded-lg border border-indigo-500 px-2 py-1",
								placeholder: "VD: 0123456789",
								onBlur: () => {
									o.length < 10 && i(!0);
								},
								onInput: () => i(!1),
							}),
							a &&
								d.jsx("p", {
									className: "text-yellow-500",
									children: "Số điện thoại không hợp lệ!",
								}),
							d.jsx("label", {
								className: "font-bold",
								htmlFor: "card",
								children: "Tài khoản:",
							}),
							d.jsx("input", {
								name: "card",
								id: "card",
								type: "number",
								className:
									"pointer-events-none w-1/2 select-none rounded-lg border border-indigo-500 px-2 py-1",
								placeholder: e,
								readOnly: !0,
							}),
							d.jsx("label", {
								className: "font-bold",
								htmlFor: "password",
								children: "Mật khẩu:",
							}),
							d.jsx("input", {
								value: n,
								onChange: (c) => r(c.target.value),
								name: "password",
								id: "password",
								type: "password",
								className:
									"w-1/2 select-none rounded-lg border border-indigo-500 px-2 py-1",
							}),
							d.jsx("button", {
								className:
									"mt-4 w-1/2 rounded-lg bg-indigo-500 p-2 font-bold text-white",
								type: "submit",
								onClick: u,
								children: "Cập nhật",
							}),
						],
					}),
				}),
			],
		})
	);
};
var Rw = {
		prefix: "fas",
		iconName: "trash-can",
		icon: [
			448,
			512,
			[61460, "trash-alt"],
			"f2ed",
			"M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z",
		],
	},
	Ow = {
		prefix: "fas",
		iconName: "face-flushed",
		icon: [
			512,
			512,
			[128563, "flushed"],
			"f579",
			"M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM176 384c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16s-7.2-16-16-16H192c-8.8 0-16 7.2-16 16zm-16-88a72 72 0 1 0 0-144 72 72 0 1 0 0 144zm264-72a72 72 0 1 0 -144 0 72 72 0 1 0 144 0zm-288 0a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm192 0a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z",
		],
	},
	Mw = {
		prefix: "fas",
		iconName: "list",
		icon: [
			512,
			512,
			["list-squares"],
			"f03a",
			"M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z",
		],
	},
	zw = {
		prefix: "fas",
		iconName: "ban",
		icon: [
			512,
			512,
			[128683, "cancel"],
			"f05e",
			"M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z",
		],
	},
	Iw = {
		prefix: "fas",
		iconName: "fire",
		icon: [
			448,
			512,
			[128293],
			"f06d",
			"M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z",
		],
	},
	e1 = {
		prefix: "fas",
		iconName: "user-pen",
		icon: [
			640,
			512,
			["user-edit"],
			"f4ff",
			"M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H322.8c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1H178.3zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71L375.9 417z",
		],
	},
	Dw = {
		prefix: "fas",
		iconName: "chart-pie",
		icon: [
			576,
			512,
			["pie-chart"],
			"f200",
			"M304 240V16.6c0-9 7-16.6 16-16.6C443.7 0 544 100.3 544 224c0 9-7.6 16-16.6 16H304zM32 272C32 150.7 122.1 50.3 239 34.3c9.2-1.3 17 6.1 17 15.4V288L412.5 444.5c6.7 6.7 6.2 17.7-1.5 23.1C371.8 495.6 323.8 512 272 512C139.5 512 32 404.6 32 272zm526.4 16c9.3 0 16.6 7.8 15.4 17c-7.7 55.9-34.6 105.6-73.9 142.3c-6 5.6-15.4 5.2-21.2-.7L320 288H558.4z",
		],
	},
	t1 = {
		prefix: "fas",
		iconName: "face-meh-blank",
		icon: [
			512,
			512,
			[128566, "meh-blank"],
			"f5a4",
			"M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm208.4-48a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm128 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z",
		],
	},
	Aw = {
		prefix: "fas",
		iconName: "house",
		icon: [
			576,
			512,
			[127968, 63498, 63500, "home", "home-alt", "home-lg-alt"],
			"f015",
			"M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z",
		],
	},
	n1 = Aw,
	r1 = {
		prefix: "fas",
		iconName: "bug",
		icon: [
			512,
			512,
			[],
			"f188",
			"M256 0c53 0 96 43 96 96v3.6c0 15.7-12.7 28.4-28.4 28.4H188.4c-15.7 0-28.4-12.7-28.4-28.4V96c0-53 43-96 96-96zM41.4 105.4c12.5-12.5 32.8-12.5 45.3 0l64 64c.7 .7 1.3 1.4 1.9 2.1c14.2-7.3 30.4-11.4 47.5-11.4H312c17.1 0 33.2 4.1 47.5 11.4c.6-.7 1.2-1.4 1.9-2.1l64-64c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-64 64c-.7 .7-1.4 1.3-2.1 1.9c6.2 12 10.1 25.3 11.1 39.5H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H416c0 24.6-5.5 47.8-15.4 68.6c2.2 1.3 4.2 2.9 6 4.8l64 64c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-63.1-63.1c-24.5 21.8-55.8 36.2-90.3 39.6V240c0-8.8-7.2-16-16-16s-16 7.2-16 16V479.2c-34.5-3.4-65.8-17.8-90.3-39.6L86.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l64-64c1.9-1.9 3.9-3.4 6-4.8C101.5 367.8 96 344.6 96 320H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96.3c1.1-14.1 5-27.5 11.1-39.5c-.7-.6-1.4-1.2-2.1-1.9l-64-64c-12.5-12.5-12.5-32.8 0-45.3z",
		],
	},
	a1 = {
		prefix: "fas",
		iconName: "bell",
		icon: [
			448,
			512,
			[128276, 61602],
			"f0f3",
			"M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z",
		],
	},
	Fw = {
		prefix: "fas",
		iconName: "magnifying-glass",
		icon: [
			512,
			512,
			[128269, "search"],
			"f002",
			"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z",
		],
	},
	$w = {
		prefix: "fas",
		iconName: "user-graduate",
		icon: [
			448,
			512,
			[],
			"f501",
			"M219.3 .5c3.1-.6 6.3-.6 9.4 0l200 40C439.9 42.7 448 52.6 448 64s-8.1 21.3-19.3 23.5L352 102.9V160c0 70.7-57.3 128-128 128s-128-57.3-128-128V102.9L48 93.3v65.1l15.7 78.4c.9 4.7-.3 9.6-3.3 13.3s-7.6 5.9-12.4 5.9H16c-4.8 0-9.3-2.1-12.4-5.9s-4.3-8.6-3.3-13.3L16 158.4V86.6C6.5 83.3 0 74.3 0 64C0 52.6 8.1 42.7 19.3 40.5l200-40zM111.9 327.7c10.5-3.4 21.8 .4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6z",
		],
	},
	i1 = {
		prefix: "fas",
		iconName: "bell-slash",
		icon: [
			640,
			512,
			[128277, 61943],
			"f1f6",
			"M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-90.2-70.7c.2-.4 .4-.9 .6-1.3c5.2-11.5 3.1-25-5.3-34.4l-7.4-8.3C497.3 319.2 480 273.9 480 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V51.2c-42.6 8.6-79 34.2-102 69.3L38.8 5.1zM406.2 416L160 222.1v4.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S115.4 416 128 416H406.2zm-40.9 77.3c12-12 18.7-28.3 18.7-45.3H320 256c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z",
		],
	},
	Uw = {
		prefix: "fas",
		iconName: "chart-column",
		icon: [
			512,
			512,
			[],
			"e0e3",
			"M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64C0 46.3 14.3 32 32 32zM160 224c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm128-64V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32zm64 32c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32zM480 96V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7 14.3-32 32-32s32 14.3 32 32z",
		],
	},
	Hw = {
		prefix: "fas",
		iconName: "calendar",
		icon: [
			448,
			512,
			[128197, 128198],
			"f133",
			"M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z",
		],
	},
	o1 = {
		prefix: "fas",
		iconName: "calendar-day",
		icon: [
			448,
			512,
			[],
			"f783",
			"M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm80 64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80z",
		],
	};
const Id = () => {
	const e = [
		"init",
		"add README to Repo",
		"add sln to project",
		"remove manifest sign",
		"add studen gui and login api for winform",
		"add database and some api: login, changeinfo,...",
		"remove unused readme",
		"add vscode config to github",
		"chore:add teacher route",
		"chore: update add student form and view score",
		"chore: add signup page",
	];
	return d.jsxs("div", {
		className: "w-full",
		children: [
			d.jsxs("div", {
				className: "text-3xl font-bold text-indigo-500",
				children: [d.jsx(se, { icon: Iw }), " Thông báo"],
			}),
			d.jsxs("div", {
				className: "content w-full overflow-auto text-indigo-500",
				children: [
					d.jsx("p", { className: "text-2xl", children: "Lịch sử cập nhật:" }),
					d.jsx("ul", {
						children: e.map((t, n) =>
							d.jsxs("li", {
								children: [
									d.jsxs("b", { className: "mr-2", children: [n + 1, "."] }),
									t,
									".",
								],
							}),
						),
					}),
					d.jsxs("div", {
						className: "flex items-center justify-center gap-2",
						children: [
							d.jsx("img", { src: "https://picsum.photos/200/300", alt: "" }),
							d.jsx("img", { src: "https://picsum.photos/200/300", alt: "" }),
							d.jsx("img", { src: "https://picsum.photos/200/300", alt: "" }),
						],
					}),
				],
			}),
		],
	});
};
var l1 = {},
	s1 = {};
(function (e) {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = "fas",
		n = "user-group",
		r = 640,
		a = 512,
		i = [128101, "user-friends"],
		o = "f500",
		l =
			"M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z";
	(e.definition = { prefix: t, iconName: n, icon: [r, a, i, o, l] }),
		(e.faUserGroup = e.definition),
		(e.prefix = t),
		(e.iconName = n),
		(e.width = r),
		(e.height = a),
		(e.ligatures = i),
		(e.unicode = o),
		(e.svgPathData = l),
		(e.aliases = i);
})(s1);
(function (e) {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = s1;
	(e.definition = {
		prefix: t.prefix,
		iconName: t.iconName,
		icon: [t.width, t.height, t.aliases, t.unicode, t.svgPathData],
	}),
		(e.faUserFriends = e.definition),
		(e.prefix = t.prefix),
		(e.iconName = t.iconName),
		(e.width = t.width),
		(e.height = t.height),
		(e.ligatures = t.aliases),
		(e.unicode = t.unicode),
		(e.svgPathData = t.svgPathData),
		(e.aliases = t.aliases);
})(l1);
const Vw = () => {
		const [e, t] = S.useState([]),
			[n, r] = S.useState([]),
			[a, i] = S.useState(!0),
			[o, l] = S.useState(""),
			s = () => {
				window.chrome.webview.postMessage({ type: "getstudent" }),
					window.chrome.webview.addEventListener("message", (c) => {
						t(JSON.parse(c.data));
					});
			},
			u = () => {
				if (o.length > 0) {
					const c = [];
					e.forEach((f) => {
						f.Name.includes(o) && c.push(f);
					}),
						r(c);
				} else i(!0);
			};
		return (
			S.useEffect(() => {
				s(), n.length > 0 && i(!1);
			}, [n]),
			d.jsxs("div", {
				className: "flex w-full flex-col text-indigo-500",
				children: [
					d.jsxs("header", {
						className: "flex justify-between",
						children: [
							d.jsxs("div", {
								className: "text-3xl font-bold text-indigo-500",
								children: [
									d.jsx(se, { icon: l1.faUserFriends }),
									" Danh sách học sinh",
								],
							}),
							d.jsxs("div", {
								className: "flex items-center justify-center",
								children: [
									d.jsx("input", {
										value: o,
										onChange: (c) => {
											l(c.target.value), u();
										},
										onKeyDown: (c) => {
											c.key === "Enter" && u();
										},
										type: "text",
										className:
											"rounded-l-lg  border border-r-0 border-indigo-500 p-1 focus:border-indigo-400",
									}),
									d.jsx(se, {
										className:
											"cursor-pointer rounded-r-lg border border-indigo-500 p-2 font-bold hover:bg-indigo-500 hover:text-white",
										icon: Fw,
										onClick: u,
									}),
								],
							}),
						],
					}),
					a ? d.jsx(Dd, { students: e }) : d.jsx(Dd, { students: n }),
				],
			})
		);
	},
	Dd = ({ students: e }) => {
		const t = ar();
		return d.jsx("ul", {
			children: e.map((n, r) =>
				d.jsxs(
					"li",
					{
						onClick: () =>
							t(`/teacher/set-score?student=${n.Username}&name=${n.Name}`),
						className: "cursor-pointer",
						children: [
							" ",
							d.jsxs("strong", { children: [r + 1, ". ", n.Name] }),
							n.phone_number && ` - ${n.phone_number}`,
						],
					},
					n.Username,
				),
			),
		});
	},
	Bw = () =>
		d.jsxs("div", {
			className: "w-full",
			children: [
				d.jsxs("div", {
					className: "text-3xl font-bold text-indigo-500",
					children: [d.jsx(se, { icon: r1 }), " Báo lỗi"],
				}),
				d.jsx("div", {
					className: "content mt-2 w-full overflow-auto text-indigo-500",
					children: d.jsxs("form", {
						className: "flex flex-col",
						children: [
							d.jsxs("label", {
								className: "font-bold",
								htmlFor: "card",
								children: [
									"Số thẻ",
									" ",
									d.jsx("span", {
										className: "font-medium text-gray-400",
										children: "(*Xem ở mặt trước thẻ học sinh)",
									}),
									":",
								],
							}),
							d.jsx("input", {
								name: "card",
								id: "card",
								type: "number",
								className:
									"w-1/2 rounded-lg border border-indigo-500 px-2 py-1",
								placeholder: "VD: 987654321",
							}),
							d.jsxs("label", {
								className: "font-bold",
								htmlFor: "phone",
								children: [
									"Số điện thoại",
									" ",
									d.jsx("span", {
										className: "font-medium text-gray-400",
										children: "(*Bắt buộc)",
									}),
									":",
								],
							}),
							d.jsx("input", {
								name: "phone",
								id: "phone",
								type: "number",
								className:
									"w-1/2 rounded-lg border border-indigo-500 px-2 py-1",
								placeholder: "VD: 0123456789",
							}),
							d.jsx("label", {
								className: "font-bold",
								htmlFor: "message",
								children: "Nội dung",
							}),
							d.jsx("textarea", {
								className:
									"w-1/2 rounded-lg border border-indigo-500 px-2 py-1",
								name: "message",
								id: "message",
								placeholder: "Nội dung báo lỗi",
							}),
							d.jsx("button", {
								className:
									"mt-4 w-1/2 rounded-lg bg-indigo-500 p-2 font-bold text-white",
								type: "submit",
								children: "Gửi",
							}),
						],
					}),
				}),
			],
		}),
	Ad = () => {
		const e = tl(),
			[t, n] = S.useState(!1),
			r = S.useRef(null),
			a = S.useRef(null),
			[i, o] = S.useState(),
			[l, s] = S.useState();
		return (
			S.useEffect(
				() => (
					window.chrome.webview.postMessage({ type: "getschedule" }),
					window.chrome.webview.addEventListener("message", (u) => {
						s(JSON.parse(u.data));
					}),
					() => {
						window.chrome.webview.removeEventListener("message", () => {});
					}
				),
				[],
			),
			S.useEffect(() => {
				var w, x;
				const c =
						(((w = r.current) == null ? void 0 : w.clientWidth) || 0) / 6 || 0,
					f = {
						width: `${c + 1}px`,
						maxWidth: `${c + 1}px`,
						minWidth: `${c + 1}px`,
					};
				o(f),
					e.pathname.includes("teacher") && n(!0),
					(x = document.getElementById("table")) == null ||
						x.addEventListener("wheel", (y) => {
							y.preventDefault(),
								a.current !== null && (a.current.scrollLeft += y.deltaY / 10);
						});
			}, []),
			d.jsxs("div", {
				className: "flex w-full flex-col items-center justify-center",
				children: [
					d.jsxs("div", {
						className: "self-start text-3xl font-bold text-indigo-500",
						children: [d.jsx(se, { icon: Hw }), " Thời khóa biểu"],
					}),
					d.jsx("div", {
						id: "table",
						ref: a,
						className:
							"content mt-2 flex w-full items-center justify-center overflow-x-scroll text-indigo-500",
						children: d.jsx("table", {
							ref: r,
							className:
								"table w-11/12 max-w-full border-t border-indigo-500 object-cover",
							children: d.jsxs("thead", {
								children: [
									d.jsxs("tr", {
										className: "bg-indigo-500 text-white",
										children: [
											d.jsx("th", {
												className: "border-r-white",
												children: "Thứ 2",
											}),
											d.jsx("th", {
												className: "border-x-white",
												children: "Thứ 3",
											}),
											d.jsx("th", {
												className: "border-x-white",
												children: "Thứ 4",
											}),
											d.jsx("th", {
												className: "border-x-white",
												children: "Thứ 5",
											}),
											d.jsx("th", {
												className: "border-x-white",
												children: "Thứ 6",
											}),
											d.jsx("th", {
												className: "border-l-white",
												children: "Thứ 7",
											}),
										],
									}),
									d.jsxs("tr", {
										id: "Subject1",
										children: [
											d.jsx("th", {
												id: "2Subject1",
												className: "truncate",
												style: i,
												children:
													l &&
													d.jsx(ie, {
														id: 1,
														day: 2,
														subject: l[0].Subject1,
														canEdit: t,
													}),
											}),
											d.jsx("th", {
												id: "3Subject1",
												className: "truncate",
												style: i,
												children:
													l &&
													d.jsx(ie, {
														id: 1,
														day: 3,
														subject: l[1].Subject1,
														canEdit: t,
													}),
											}),
											d.jsx("th", {
												id: "4Subject1",
												className: "truncate",
												style: i,
												children:
													l &&
													d.jsx(ie, {
														id: 1,
														day: 4,
														subject: l[2].Subject1,
														canEdit: t,
													}),
											}),
											d.jsx("th", {
												id: "5Subject1",
												className: "truncate",
												style: i,
												children:
													l &&
													d.jsx(ie, {
														id: 1,
														day: 5,
														subject: l[3].Subject1,
														canEdit: t,
													}),
											}),
											d.jsx("th", {
												id: "6Subject1",
												className: "truncate",
												style: i,
												children:
													l &&
													d.jsx(ie, {
														id: 1,
														day: 6,
														subject: l[4].Subject1,
														canEdit: t,
													}),
											}),
											d.jsx("th", {
												id: "7Subject1",
												className: "truncate",
												style: i,
												children:
													l &&
													d.jsx(ie, {
														id: 1,
														day: 7,
														subject: l[5].Subject1,
														canEdit: t,
													}),
											}),
										],
									}),
									d.jsxs("tr", {
										id: "Subject2",
										children: [
											d.jsx("th", {
												id: "2Subject2",
												className: "truncate",
												style: i,
												children:
													l &&
													d.jsx(ie, {
														id: 2,
														day: 2,
														subject: l[0].Subject2,
														canEdit: t,
													}),
											}),
											d.jsx("th", {
												id: "3Subject2",
												className: "truncate",
												style: i,
												children:
													l &&
													d.jsx(ie, {
														id: 2,
														day: 3,
														subject: l[1].Subject2,
														canEdit: t,
													}),
											}),
											d.jsx("th", {
												id: "4Subject2",
												className: "truncate",
												style: i,
												children:
													l &&
													d.jsx(ie, {
														id: 2,
														day: 4,
														subject: l[2].Subject2,
														canEdit: t,
													}),
											}),
											d.jsx("th", {
												id: "5Subject2",
												className: "truncate",
												style: i,
												children:
													l &&
													d.jsx(ie, {
														id: 2,
														day: 5,
														subject: l[3].Subject2,
														canEdit: t,
													}),
											}),
											d.jsx("th", {
												id: "6Subject2",
												className: "truncate",
												style: i,
												children:
													l &&
													d.jsx(ie, {
														id: 2,
														day: 6,
														subject: l[4].Subject2,
														canEdit: t,
													}),
											}),
											d.jsx("th", {
												id: "7Subject2",
												className: "truncate",
												style: i,
												children:
													l &&
													d.jsx(ie, {
														id: 2,
														day: 7,
														subject: l[5].Subject2,
														canEdit: t,
													}),
											}),
										],
									}),
									d.jsxs("tr", {
										id: "Subject3",
										children: [
											d.jsx("th", {
												id: "2Subject3",
												className: "truncate",
												style: i,
												children:
													l &&
													d.jsx(ie, {
														id: 3,
														day: 2,
														subject: l[0].Subject3,
														canEdit: t,
													}),
											}),
											d.jsx("th", {
												id: "3Subject3",
												className: "truncate",
												style: i,
												children:
													l &&
													d.jsx(ie, {
														id: 3,
														day: 3,
														subject: l[1].Subject3,
														canEdit: t,
													}),
											}),
											d.jsx("th", {
												id: "4Subject3",
												className: "truncate",
												style: i,
												children:
													l &&
													d.jsx(ie, {
														id: 3,
														day: 4,
														subject: l[2].Subject3,
														canEdit: t,
													}),
											}),
											d.jsx("th", {
												id: "5Subject3",
												className: "truncate",
												style: i,
												children:
													l &&
													d.jsx(ie, {
														id: 3,
														day: 5,
														subject: l[3].Subject3,
														canEdit: t,
													}),
											}),
											d.jsx("th", {
												id: "6Subject3",
												className: "truncate",
												style: i,
												children:
													l &&
													d.jsx(ie, {
														id: 3,
														day: 6,
														subject: l[4].Subject3,
														canEdit: t,
													}),
											}),
											d.jsx("th", {
												id: "7Subject3",
												className: "truncate",
												style: i,
												children:
													l &&
													d.jsx(ie, {
														id: 3,
														day: 7,
														subject: l[5].Subject3,
														canEdit: t,
													}),
											}),
										],
									}),
									d.jsxs("tr", {
										id: "Subject4",
										children: [
											d.jsx("th", {
												id: "2Subject4",
												className: "truncate",
												style: i,
												children:
													l &&
													d.jsx(ie, {
														id: 4,
														day: 2,
														subject: l[0].Subject4,
														canEdit: t,
													}),
											}),
											d.jsx("th", {
												id: "3Subject4",
												className: "truncate",
												style: i,
												children:
													l &&
													d.jsx(ie, {
														id: 4,
														day: 3,
														subject: l[1].Subject4,
														canEdit: t,
													}),
											}),
											d.jsx("th", {
												id: "4Subject4",
												className: "truncate",
												style: i,
												children:
													l &&
													d.jsx(ie, {
														id: 4,
														day: 4,
														subject: l[2].Subject4,
														canEdit: t,
													}),
											}),
											d.jsx("th", {
												id: "5Subject4",
												className: "truncate",
												style: i,
												children:
													l &&
													d.jsx(ie, {
														id: 4,
														day: 5,
														subject: l[3].Subject4,
														canEdit: t,
													}),
											}),
											d.jsx("th", {
												id: "6Subject4",
												className: "truncate",
												style: i,
												children:
													l &&
													d.jsx(ie, {
														id: 4,
														day: 6,
														subject: l[4].Subject4,
														canEdit: t,
													}),
											}),
											d.jsx("th", {
												id: "7Subject4",
												className: "truncate",
												style: i,
												children:
													l &&
													d.jsx(ie, {
														id: 4,
														day: 7,
														subject: l[5].Subject4,
														canEdit: t,
													}),
											}),
										],
									}),
									d.jsxs("tr", {
										id: "Subject5",
										children: [
											d.jsx("th", {
												id: "2Subject5",
												className: "truncate",
												style: i,
												children:
													l &&
													d.jsx(ie, {
														id: 5,
														day: 2,
														subject: l[0].Subject5,
														canEdit: t,
													}),
											}),
											d.jsx("th", {
												id: "3Subject5",
												className: "truncate",
												style: i,
												children:
													l &&
													d.jsx(ie, {
														id: 5,
														day: 3,
														subject: l[1].Subject5,
														canEdit: t,
													}),
											}),
											d.jsx("th", {
												id: "4Subject5",
												className: "truncate",
												style: i,
												children:
													l &&
													d.jsx(ie, {
														id: 5,
														day: 4,
														subject: l[2].Subject5,
														canEdit: t,
													}),
											}),
											d.jsx("th", {
												id: "5Subject5",
												className: "truncate",
												style: i,
												children:
													l &&
													d.jsx(ie, {
														id: 5,
														day: 5,
														subject: l[3].Subject5,
														canEdit: t,
													}),
											}),
											d.jsx("th", {
												id: "6Subject5",
												className: "truncate",
												style: i,
												children:
													l &&
													d.jsx(ie, {
														id: 5,
														day: 6,
														subject: l[4].Subject5,
														canEdit: t,
													}),
											}),
											d.jsx("th", {
												id: "7Subject5",
												className: "truncate",
												style: i,
												children:
													l &&
													d.jsx(ie, {
														id: 5,
														day: 7,
														subject: l[5].Subject5,
														canEdit: t,
													}),
											}),
										],
									}),
								],
							}),
						}),
					}),
				],
			})
		);
	},
	ie = ({ id: e, day: t, subject: n, canEdit: r }) => {
		const [a, i] = S.useState(""),
			[o, l] = S.useState(!1),
			[s, u] = S.useState(""),
			c = (f) => {
				window.chrome.webview.postMessage({
					type: "updateschedule",
					id: e.toString(),
					day: t.toString(),
					content: f,
				});
			};
		return (
			S.useEffect(() => {
				i(n);
			}, []),
			d.jsx(d.Fragment, {
				children:
					a === ""
						? d.jsx("div", {
								className: `${
									o
										? "fixed left-0 top-0 z-20 flex h-screen w-full flex-col items-center justify-center p-5"
										: "block"
								}`,
								onClick: () => {
									r && (o || l(!o));
								},
								children: d.jsxs("div", {
									className: "flex flex-col gap-2",
									children: [
										d.jsx("input", {
											value: s,
											onChange: (f) => {
												u(f.target.value);
											},
											onKeyDown: (f) => {
												f.key === "Enter" && (c(s), i(s));
											},
											type: "text",
											className: `${
												o && "rounded-lg border border-indigo-500 p-2"
											}`,
											readOnly: !r,
										}),
										o &&
											d.jsx("button", {
												className:
													"rounded-lg bg-indigo-500 p-2 font-bold text-white",
												onClick: () => {
													c(s), i(s);
												},
												children: "Lưu",
											}),
									],
								}),
						  })
						: d.jsx("p", {
								onClick: () => {
									r && i("");
								},
								children: a,
						  }),
			})
		);
	},
	Ww = () => {
		const e = S.useRef(null),
			[t, n] = S.useState(),
			[r, a] = S.useState(0),
			i = S.useRef(null),
			o = S.useRef(null),
			l = S.useRef(null),
			s = S.useRef(null),
			u = S.useRef(null),
			c = S.useRef(null);
		return (
			S.useEffect(() => {
				var f;
				window.chrome.webview.postMessage({
					type: "getscore",
					username: localStorage.getItem("username"),
				}),
					window.chrome.webview.addEventListener("message", (p) => {
						p.data && n(JSON.parse(p.data));
					}),
					a(((f = e.current) == null ? void 0 : f.clientWidth) || 0);
			}, []),
			d.jsxs("div", {
				className: "w-full",
				children: [
					d.jsxs("div", {
						className: "text-3xl font-bold text-indigo-500",
						children: [d.jsx(se, { icon: Dw }), " Bảng điểm"],
					}),
					d.jsx("div", {
						className: "content mt-2 w-full overflow-auto text-indigo-500",
						children: d.jsxs("table", {
							ref: e,
							className: "table w-full border-t border-indigo-500",
							children: [
								d.jsx("thead", {
									children: d.jsxs("tr", {
										className: "bg-indigo-500 font-bold text-white",
										children: [
											d.jsx("th", {
												ref: i,
												style: { width: `${r / 20}px` },
												children: "Số thứ tự",
											}),
											d.jsx("th", {
												ref: o,
												style: { width: `${(r / 5) * 2}px` },
												children: "Tên môn học",
											}),
											d.jsx("th", {
												ref: l,
												style: { width: `${r / 20}px` },
												children: "Được dự thi",
											}),
											d.jsx("th", {
												ref: s,
												style: { width: `${r / 20}px` },
												children: "Điểm",
											}),
											d.jsx("th", {
												ref: u,
												style: { width: `${r / 20}px` },
												children: "Xếp loại",
											}),
											d.jsx("th", {
												ref: c,
												style: { width: `${(r / 5) * 2}px` },
												children: "Ghi chú",
											}),
										],
									}),
								}),
								d.jsx("tbody", {
									children:
										t == null
											? void 0
											: t.map((f, p) => {
													var w, x, y, C, h, m;
													return d.jsxs(
														"tr",
														{
															children: [
																d.jsx("td", {
																	style: {
																		width: `${
																			(w = i.current) == null
																				? void 0
																				: w.clientWidth
																		}px`,
																	},
																	children: p + 1,
																}),
																d.jsx("td", {
																	style: {
																		width: `${
																			(x = o.current) == null
																				? void 0
																				: x.clientWidth
																		}px`,
																	},
																	children: f.SUBJECT,
																}),
																d.jsx("td", {
																	style: {
																		width: `${
																			(y = l.current) == null
																				? void 0
																				: y.clientWidth
																		}px`,
																	},
																	children: f.PASS ? "Đỗ" : "Trượt",
																}),
																d.jsx("td", {
																	style: {
																		width: `${
																			(C = s.current) == null
																				? void 0
																				: C.clientWidth
																		}px`,
																	},
																	children: f.SCORE,
																}),
																d.jsx("td", {
																	style: {
																		width: `${
																			(h = u.current) == null
																				? void 0
																				: h.clientWidth
																		}px`,
																	},
																	children: f.TYPE,
																}),
																d.jsx("td", {
																	style: {
																		width: `${
																			(m = c.current) == null
																				? void 0
																				: m.clientWidth
																		}px`,
																	},
																	children: f.NOTE,
																}),
															],
														},
														p,
													);
											  }),
								}),
							],
						}),
					}),
				],
			})
		);
	};
var u1 = {};
(function (e) {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = "fas",
		n = "circle-xmark",
		r = 512,
		a = 512,
		i = [61532, "times-circle", "xmark-circle"],
		o = "f057",
		l =
			"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z";
	(e.definition = { prefix: t, iconName: n, icon: [r, a, i, o, l] }),
		(e.faCircleXmark = e.definition),
		(e.prefix = t),
		(e.iconName = n),
		(e.width = r),
		(e.height = a),
		(e.ligatures = i),
		(e.unicode = o),
		(e.svgPathData = l),
		(e.aliases = i);
})(u1);
const Yw = () => {
		const [e, t] = S.useState(""),
			[n, r] = S.useState(""),
			a = tl(),
			i = new URLSearchParams(a.search),
			[o, l] = S.useState(),
			s = ar(),
			[u, c] = S.useState(!1),
			f = S.useRef(null),
			p = S.useRef(null),
			w = S.useRef(null),
			x = S.useRef(null),
			y = S.useRef(null),
			C = S.useRef(null),
			h = S.useRef(null),
			[m, v] = S.useState(0),
			[E, P] = S.useState(!1),
			[R, g] = S.useState(""),
			j = (_, O) => {
				_.preventDefault(), g(O), P(!0);
			};
		return (
			S.useEffect(() => {
				var _, O;
				t(i.get("student") || ""),
					r(i.get("name") || ""),
					v(((_ = f.current) == null ? void 0 : _.clientWidth) || 0),
					window.chrome.webview.postMessage({
						type: "getscore",
						username: i.get("student") || "",
					}),
					window.chrome.webview.addEventListener("message", (V) => {
						V.data && l(JSON.parse(V.data));
					}),
					v(((O = f.current) == null ? void 0 : O.clientWidth) || 0);
			}, []),
			d.jsxs("div", {
				className: "flex w-full flex-col gap-2 text-indigo-500",
				children: [
					d.jsxs("header", {
						className: "flex gap-2",
						children: [
							" ",
							d.jsx("button", {
								className:
									"cursor-pointer rounded-lg bg-indigo-500 p-2 text-center font-bold text-white hover:bg-indigo-600",
								onClick: () => s(-1),
								children: "Quay lại",
							}),
							d.jsx("button", {
								className:
									"cursor-pointer rounded-lg bg-indigo-500 p-2 text-center font-bold text-white hover:bg-indigo-600",
								onClick: () => c(!0),
								children: "Thêm điểm",
							}),
						],
					}),
					d.jsxs("b", {
						className: "text-xl",
						children: [d.jsx(se, { icon: $w }), " ", n],
					}),
					d.jsxs("table", {
						ref: f,
						className: "table w-full border-t border-indigo-500",
						children: [
							d.jsx("thead", {
								children: d.jsxs("tr", {
									className: "bg-indigo-500 font-bold text-white",
									children: [
										d.jsx("th", {
											ref: p,
											style: { width: `${m / 20}px` },
											children: "Số thứ tự",
										}),
										d.jsx("th", {
											ref: w,
											style: { width: `${(m / 5) * 2}px` },
											children: "Tên môn học",
										}),
										d.jsx("th", {
											ref: x,
											style: { width: `${m / 20}px` },
											children: "Được dự thi",
										}),
										d.jsx("th", {
											ref: y,
											style: { width: `${m / 20}px` },
											children: "Điểm",
										}),
										d.jsx("th", {
											ref: C,
											style: { width: `${m / 20}px` },
											children: "Xếp loại",
										}),
										d.jsx("th", {
											ref: h,
											style: { width: `${(m / 5) * 2}px` },
											children: "Ghi chú",
										}),
									],
								}),
							}),
							d.jsx("tbody", {
								children:
									o == null
										? void 0
										: o.map((_, O) => {
												var V, te, ne, oe, Ne, We;
												return d.jsxs(
													"tr",
													{
														onContextMenu: (_e) => j(_e, _.SUBJECT),
														children: [
															d.jsx("td", {
																style: {
																	width: `${
																		(V = p.current) == null
																			? void 0
																			: V.clientWidth
																	}px`,
																},
																children: O + 1,
															}),
															d.jsx("td", {
																style: {
																	width: `${
																		(te = w.current) == null
																			? void 0
																			: te.clientWidth
																	}px`,
																},
																children: _.SUBJECT,
															}),
															d.jsx("td", {
																style: {
																	width: `${
																		(ne = x.current) == null
																			? void 0
																			: ne.clientWidth
																	}px`,
																},
																children: _.PASS ? "Đỗ" : "Trượt",
															}),
															d.jsx("td", {
																style: {
																	width: `${
																		(oe = y.current) == null
																			? void 0
																			: oe.clientWidth
																	}px`,
																},
																children: _.SCORE,
															}),
															d.jsx("td", {
																style: {
																	width: `${
																		(Ne = C.current) == null
																			? void 0
																			: Ne.clientWidth
																	}px`,
																},
																children: _.TYPE,
															}),
															d.jsx("td", {
																style: {
																	width: `${
																		(We = h.current) == null
																			? void 0
																			: We.clientWidth
																	}px`,
																},
																children: _.NOTE,
															}),
														],
													},
													O,
												);
										  }),
							}),
						],
					}),
					E &&
						d.jsx(Qw, {
							subject: R,
							closeModal: () => {
								P(!E);
							},
							username: e,
							name: n,
						}),
					u && d.jsx(Kw, { username: e, closeModal: () => c(!1) }),
				],
			})
		);
	},
	Qw = ({ subject: e, closeModal: t, username: n, name: r }) => {
		const a = (s) => {
				const u = document.querySelector("#modal-content");
				(u == null ? void 0 : u.contains(s.target)) || t();
			},
			i = () => {
				const s = { type: "deletescore", subject: e, username: n };
				window.chrome.webview.postMessage(s), window.location.reload();
			},
			[o, l] = S.useState(!0);
		return (
			S.useEffect(() => {
				setTimeout(() => {
					l(!1);
				}, 1e3);
			}),
			d.jsx("div", {
				className:
					"fixed left-0 top-0 z-20 flex h-screen w-full items-center justify-center bg-black bg-opacity-20",
				onClick: a,
				children: d.jsxs("div", {
					id: "modal-content",
					className:
						"flex flex-col items-center justify-center rounded-lg bg-white shadow-2xl shadow-black",
					children: [
						d.jsxs("b", {
							className: "mx-2 w-full rounded-t-lg text-center",
							children: ["Xóa điểm môn ", e, " của học sinh ", r],
						}),
						d.jsx("hr", {}),
						d.jsx(se, {
							icon: Ow,
							size: "6x",
							className: `my-2 ${
								o ? "animate-spin" : ""
							} text-red-500 hover:animate-bounce`,
						}),
						d.jsx("p", {
							className: "self-start px-2",
							children: "Thao tác này sẽ không thể khôi phục, xác nhận xóa?",
						}),
						d.jsxs("div", {
							className: "my-2 flex w-1/2 items-center justify-center gap-4",
							children: [
								d.jsxs("button", {
									className:
										"basis-1/2 rounded-lg bg-red-500 p-2 font-bold text-white",
									onClick: i,
									children: [d.jsx(se, { icon: Rw }), " Xóa"],
								}),
								d.jsxs("button", {
									className:
										"basis-1/2 whitespace-nowrap rounded-lg bg-indigo-500 p-2 font-bold text-white",
									onClick: t,
									children: [d.jsx(se, { icon: zw }), " Hủy bỏ"],
								}),
							],
						}),
					],
				}),
			})
		);
	},
	Kw = ({ username: e, closeModal: t }) => {
		const [n, r] = S.useState(),
			[a, i] = S.useState(""),
			[o, l] = S.useState(""),
			s = S.useRef(null),
			u = S.useRef(null),
			c = () => {
				var p, w;
				if (!a)
					K.warning("Chưa nhập tên môn học!"),
						(p = s.current) == null || p.focus();
				else if (!n)
					K.warning("Điểm số không hợp lệ!"),
						(w = u.current) == null || w.focus();
				else {
					let x = !1,
						y = "";
					const C = {
						type: "addscore",
						username: e,
						subject: a,
						score: n,
						note: o,
						level: "",
						pass: !1,
					};
					n > 4 && n < 7
						? ((y = "Khá"), (x = !0))
						: n >= 7
						? ((y = "Đạt"), (x = !0))
						: (y = "Cấm thi"),
						(C.level = y),
						(C.pass = x),
						window.chrome.webview.postMessage(C),
						window.location.reload();
				}
			},
			f = (p) => {
				r(p), p < 0 ? r(0) : p > 10 ? r(10) : r(Number(p));
			};
		return d.jsx("div", {
			className:
				"fixed z-50 flex h-full w-full flex-col items-center justify-center",
			children: d.jsxs("div", {
				className:
					"flex w-1/3 flex-col gap-2 rounded-lg bg-white p-4 text-indigo-500 shadow-2xl",
				children: [
					d.jsxs("div", {
						className: "flex items-center justify-between",
						children: [
							d.jsx("h1", {
								className: "text-xl font-bold",
								children: "Thêm điểm",
							}),
							d.jsx(se, {
								icon: u1.faCircleXmark,
								size: "lg",
								className: "cursor-pointer hover:scale-110",
								onClick: t,
							}),
						],
					}),
					d.jsx("label", {
						className: "font-bold",
						htmlFor: "subject",
						children: "Môn học:",
					}),
					d.jsx("input", {
						ref: s,
						value: a,
						onChange: (p) => i(p.target.value),
						className: "bg-transparent px-1",
						type: "text",
						id: "subject",
						placeholder: "Môn học",
						autoComplete: "off",
					}),
					d.jsxs("label", {
						className: "flex w-full",
						htmlFor: "score",
						children: [
							d.jsx("b", { children: "Điểm" }),
							d.jsx("input", {
								ref: u,
								value: n,
								onChange: (p) => {
									f(Number(p.target.value));
								},
								className: " w-8 max-w-fit text-center",
								type: "number",
								id: "score",
								placeholder: "0",
								autoComplete: "off",
							}),
						],
					}),
					d.jsxs("label", {
						htmlFor: "note",
						className: "flex flex-col",
						children: [
							d.jsx("b", { children: "Ghi chú:" }),
							d.jsx("textarea", {
								onChange: (p) => l(p.target.value),
								value: o,
								name: "note",
								id: "note",
								className: "resize-none border p-2",
								rows: 6,
							}),
						],
					}),
					d.jsx("div", {
						className:
							"cursor-pointer rounded-lg bg-indigo-500 p-2 text-center font-bold text-white hover:bg-indigo-600",
						onClick: c,
						children: "Lưu",
					}),
				],
			}),
		});
	},
	Xw = "/avatar.png",
	Gw = () => {
		const [e, t] = S.useState(!1),
			[n, r] = S.useState("");
		S.useEffect(() => {
			localStorage.getItem("loaded") ||
				(localStorage.setItem("loaded", "true"), window.location.reload());
			const i = JSON.parse(localStorage.getItem("data") || "{}");
			if (Object.keys(i).length > 0) {
				const o = JSON.parse(i);
				i && r(o.Name);
			}
		}, []);
		const a = ar();
		return d.jsx("div", {
			className: "flex h-full w-full flex-col",
			children: d.jsxs("div", {
				className: "flex w-full",
				children: [
					d.jsxs("div", {
						className:
							"sticky z-10 flex h-screen w-1/6 flex-col items-start bg-indigo-500 px-4 text-white",
						children: [
							d.jsx("img", {
								src: Xw,
								className:
									"my-4 cursor-pointer self-center rounded-full hover:scale-105 hover:drop-shadow-2xl",
							}),
							d.jsxs("div", {
								className:
									"mb-4 flex w-full max-w-full flex-col items-center justify-center self-center truncate whitespace-nowrap rounded-lg bg-white p-1 text-indigo-500 hover:drop-shadow-2xl",
								children: [
									d.jsx(se, { icon: t1 }),
									" ",
									d.jsx("b", { children: n }),
								],
							}),
							d.jsxs("div", {
								className:
									"cursor-pointer  hover:scale-110 hover:drop-shadow-2xl",
								onClick: () => a("/home/student"),
								children: [
									d.jsx(se, { icon: n1 }),
									" ",
									d.jsx("b", { children: "Trang chủ" }),
								],
							}),
							d.jsxs("div", {
								className:
									"cursor-pointer whitespace-nowrap hover:scale-110 hover:drop-shadow-2xl",
								onClick: () => a("/home/score"),
								children: [
									d.jsx(se, { icon: Uw }),
									" ",
									d.jsx("b", { children: "Bảng điểm" }),
								],
							}),
							d.jsxs("div", {
								className:
									" cursor-pointer whitespace-nowrap hover:scale-110 hover:drop-shadow-2xl",
								onClick: () => a("/home/schedule"),
								children: [
									d.jsx(se, { icon: o1 }),
									" ",
									d.jsx("b", { children: "Thời khóa biểu" }),
								],
							}),
							d.jsxs("div", {
								className:
									" cursor-pointer whitespace-nowrap hover:scale-110 hover:drop-shadow-2xl",
								onClick: () => a("/home/account"),
								children: [
									d.jsx(se, { icon: e1 }),
									" ",
									d.jsx("b", { children: "Tài khoản" }),
								],
							}),
							d.jsxs("div", {
								className:
									" cursor-pointer whitespace-nowrap hover:scale-110 hover:drop-shadow-2xl",
								onClick: () => a("/home/report"),
								children: [
									d.jsx(se, { icon: r1 }),
									" ",
									d.jsx("b", { children: "Báo lỗi" }),
								],
							}),
						],
					}),
					d.jsxs("div", {
						className: "flex w-full flex-col",
						children: [
							d.jsxs("div", {
								className:
									"sticky flex w-full items-center justify-end bg-white px-3 py-1 shadow-lg",
								children: [
									d.jsx("div", {
										className: "cursor-pointer",
										onClick: () => t(!e),
										children: d.jsx(se, {
											className:
												"mr-4 rounded-full p-2 text-indigo-500 hover:bg-indigo-600 hover:text-white",
											size: "xl",
											icon: e ? a1 : i1,
										}),
									}),
									d.jsx("div", {
										className:
											"cursor-pointer rounded-lg px-2 py-2 font-bold text-indigo-500 hover:bg-indigo-600 hover:text-white",
										onClick: () => {
											a("/"), localStorage.clear();
										},
										children: "Đăng xuất",
									}),
								],
							}),
							d.jsx("div", {
								className: "flex w-full bg-white p-2",
								children: d.jsx(mh, {}),
							}),
						],
					}),
				],
			}),
		});
	},
	c1 = "/poster.png",
	Jw = () => {
		const [e, t] = S.useState(window.innerHeight),
			[n, r] = S.useState(0),
			[a, i] = S.useState(""),
			[o, l] = S.useState(""),
			s = ar(),
			u = (f) => {
				if ((localStorage.clear(), f.preventDefault(), a === ""))
					K.warning("Vui lòng nhập tài khoản!");
				else if (o === "") K.warning("Vui lòng nhập mật khẩu!");
				else {
					const p = { type: "login", username: a, password: o };
					window.chrome.webview.postMessage(p),
						window.chrome.webview.addEventListener("message", (w) => {
							w.data &&
								(window.chrome.webview.removeEventListener("message", () => {}),
								w.data === "Đăng nhập thành công"
									? (c(a), K.success(w.data, { toastId: "success1" }))
									: w.data === "Đăng nhập thất bại" &&
									  (localStorage.clear(),
									  K.error(w.data, { toastId: "error1" })));
						});
				}
			},
			c = (f) => {
				const p = { type: "getinfo", username: f };
				return (
					window.chrome.webview.postMessage(p),
					window.chrome.webview.addEventListener("message", (w) => {
						if (
							(window.chrome.webview.removeEventListener("message", () => {}),
							localStorage.getItem("data") ||
								(localStorage.setItem("username", f),
								localStorage.setItem("data", JSON.stringify(w.data))),
							w.data)
						) {
							window.chrome.webview.removeEventListener("message", () => {});
							const x = JSON.parse(localStorage.getItem("data") || "{}");
							if (Object.keys(x).length > 0) {
								const y = JSON.parse(x);
								if (x) {
									const C = y.Type;
									setTimeout(
										C
											? () => {
													s("/home/student");
											  }
											: () => {
													s("/teacher/home");
											  },
										1e3,
									);
								} else return;
							}
						}
					}),
					() => {
						window.chrome.webview.removeEventListener("message", () => {});
					}
				);
			};
		return (
			S.useEffect(() => {
				r(e - 200),
					window.addEventListener("resize", () => {
						t(window.innerHeight), r(e - 200);
					}),
					window.localStorage.removeItem("loaded");
			}),
			d.jsx("div", {
				className: `flex ${e} min-h-screen w-full items-center justify-center`,
				children: d.jsxs("div", {
					className:
						"flex w-11/12 items-center justify-center gap-2 rounded-lg bg-white p-4 shadow-xl xl:w-1/2",
					children: [
						d.jsx("div", {
							children: d.jsx("img", {
								className: "rounded-lg",
								style: { height: `${n}px` },
								src: c1,
							}),
						}),
						d.jsxs("div", {
							className: "flex flex-col",
							children: [
								d.jsx("h1", {
									className: "mb-5 text-2xl font-semibold text-indigo-500",
									children: "Chào mừng đến với THPT OvFTeam",
								}),
								d.jsx("label", {
									className: "text-lg font-semibold text-indigo-500",
									htmlFor: "username",
									children: "Tài khoản",
								}),
								d.jsx("input", {
									value: a,
									onChange: (f) => i(f.target.value),
									className: "rounded-lg border border-indigo-500 p-2",
									type: "text",
									name: "username",
									id: "username",
									placeholder: "Tài khoản",
									autoComplete: "off",
								}),
								d.jsx("label", {
									className: "text-lg font-semibold text-indigo-500",
									htmlFor: "password",
									children: "Mật khẩu:",
								}),
								d.jsx("input", {
									value: o,
									onChange: (f) => l(f.target.value),
									onKeyDown: (f) => f.key === "Enter" && u(f),
									className: "rounded-lg border border-indigo-500 p-2",
									type: "password",
									name: "password",
									id: "password",
									placeholder: "Mật khẩu",
								}),
								d.jsx("button", {
									className:
										"mt-2 rounded-lg bg-indigo-500 p-2 font-bold text-white hover:bg-indigo-600",
									type: "submit",
									onClick: u,
									children: "Đăng nhập",
								}),
								d.jsxs("p", {
									children: [
										"Chưa có tài khoản? hãy",
										" ",
										d.jsx("b", {
											className: "cursor-pointer text-indigo-500",
											onClick: () => {
												s("/signup");
											},
											children: "Đăng kí ngay",
										}),
									],
								}),
								d.jsx("span", {
									className: "m-auto text-gray-600",
									children: "© Copyright 2024 OvFTeam",
								}),
							],
						}),
					],
				}),
			})
		);
	},
	Zw = () => {
		const [e, t] = S.useState(window.innerHeight),
			[n, r] = S.useState(0),
			a = S.useRef(null),
			i = S.useRef(null),
			o = S.useRef(null),
			[l, s] = S.useState(""),
			[u, c] = S.useState(""),
			[f, p] = S.useState(""),
			[w, x] = S.useState(!1),
			[y, C] = S.useState(!1),
			h = ar(),
			m = (E) =>
				/^[a-zA-ZàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ\\s]*$/.test(
					E,
				),
			v = (E) => {
				var P, R, g;
				if ((localStorage.clear(), E.preventDefault(), l === ""))
					K.warning("Vui lòng nhập tên!"), (P = a.current) == null || P.focus();
				else if (u === "")
					K.warning("Vui lòng nhập tài khoản!"),
						(R = i.current) == null || R.focus();
				else if (f === "")
					K.warning("Vui lòng nhập mật khẩu!"),
						(g = o.current) == null || g.focus();
				else {
					if (m(l)) {
						K.warning("Tên người dùng không hợp lệ!");
						return;
					}
					const j = { type: "signup", name: l, username: u, password: f };
					window.chrome.webview.postMessage(j),
						window.chrome.webview.addEventListener("message", (_) => {
							_.data &&
								(window.chrome.webview.removeEventListener("message", () => {}),
								_.data === "Đăng kí thành công"
									? (K.success(_.data, { toastId: "success1" }),
									  setTimeout(() => {
											h("/");
									  }, 2e3))
									: _.data === "Tài khoản đã tồn tại" &&
									  (localStorage.clear(),
									  K.error(_.data, { toastId: "error1" }),
									  i.current && (i.current.value = "")));
						});
				}
			};
		return (
			S.useEffect(() => {
				r(e - 200),
					window.addEventListener("resize", () => {
						t(window.innerHeight), r(e - 200);
					}),
					window.localStorage.clear(),
					setTimeout(() => {
						x(!0),
							setTimeout(() => {
								C(!0),
									setTimeout(() => {
										C(!1);
									}, 500),
									x(!1);
							}, 1e3);
					}, 100);
			}, []),
			d.jsx("div", {
				className: `flex ${e} min-h-screen w-full items-center justify-center`,
				children: d.jsxs("div", {
					className: `flex ${y ? "animate-ping" : ""} w-11/12 ${
						w ? "" : "flex-row-reverse"
					}  items-center justify-center gap-2 rounded-lg bg-white p-4 shadow-xl xl:w-1/2`,
					children: [
						d.jsx("div", {
							children: d.jsx("img", {
								className: `${
									w
										? "translate-x-full transition-transform duration-1000 ease-in-out "
										: ""
								}`,
								style: { height: `${n}px` },
								src: c1,
							}),
						}),
						d.jsxs("div", {
							className: `flex ${
								w
									? "-translate-x-full transition-transform duration-1000 ease-in-out"
									: ""
							} flex-col `,
							children: [
								d.jsx("h1", {
									className: "mb-5 text-2xl font-semibold text-indigo-500",
									children: w
										? d.jsx(d.Fragment, {
												children: " Chào mừng đến với THPT OvFTeam",
										  })
										: d.jsx(d.Fragment, {
												children: "Hãy đăng kí tài khoản để sử dụng nhé :>",
										  }),
								}),
								!w &&
									d.jsxs(d.Fragment, {
										children: [
											" ",
											d.jsx("label", {
												className: "text-lg font-semibold text-indigo-500",
												htmlFor: "name",
												children: "Họ và Tên",
											}),
											d.jsx("input", {
												ref: a,
												value: l,
												onChange: (E) => s(E.target.value),
												className: "rounded-lg border border-indigo-500 p-2",
												type: "text",
												name: "name",
												id: "name",
												placeholder: "VD: Nguyễn Văn A",
												autoComplete: "off",
											}),
										],
									}),
								d.jsx("label", {
									className: "text-lg font-semibold text-indigo-500",
									htmlFor: "username",
									children: "Tài khoản",
								}),
								d.jsx("input", {
									ref: i,
									value: u,
									onChange: (E) => c(E.target.value),
									className: "rounded-lg border border-indigo-500 p-2",
									type: "text",
									name: "username",
									id: "username",
									placeholder: "Tài khoản",
									autoComplete: "off",
								}),
								d.jsx("label", {
									className: "text-lg font-semibold text-indigo-500",
									htmlFor: "password",
									children: "Mật khẩu:",
								}),
								d.jsx("input", {
									ref: o,
									value: f,
									onChange: (E) => p(E.target.value),
									onKeyDown: (E) => E.key === "Enter" && v(E),
									className: "rounded-lg border border-indigo-500 p-2",
									type: "password",
									name: "password",
									id: "password",
									placeholder: "Mật khẩu",
								}),
								d.jsx("button", {
									className:
										"mt-2 rounded-lg bg-indigo-500 p-2 font-bold text-white hover:bg-indigo-600",
									type: "submit",
									onClick: v,
									children: w
										? d.jsx(d.Fragment, { children: "Đăng nhập" })
										: d.jsx(d.Fragment, { children: "Đăng kí tài khoản" }),
								}),
								!w &&
									d.jsxs("p", {
										children: [
											"Đã có tài khoản?",
											" ",
											d.jsx("b", {
												className: "cursor-pointer font-bold text-indigo-500",
												onClick: () => {
													h("/");
												},
												children: "Đăng nhập tại đây",
											}),
										],
									}),
								d.jsx("span", {
									className: "m-auto text-gray-600",
									children: "© Copyright 2024 OvFTeam",
								}),
							],
						}),
					],
				}),
			})
		);
	},
	qw = "/teacher.png",
	ex = () => {
		const [e, t] = S.useState(!1),
			[n, r] = S.useState("");
		S.useEffect(() => {
			localStorage.getItem("loaded") ||
				(localStorage.setItem("loaded", "true"), window.location.reload());
			const i = JSON.parse(localStorage.getItem("data") || "{}");
			if (Object.keys(i).length > 0) {
				const o = JSON.parse(i);
				i && r(o.Name);
			}
		}, []);
		const a = ar();
		return d.jsx("div", {
			className: "flex h-full w-full flex-col",
			children: d.jsxs("div", {
				className: "flex w-full",
				children: [
					d.jsxs("div", {
						className:
							"sticky z-10 flex h-screen w-1/6 flex-col items-start bg-indigo-500 px-4 text-white",
						children: [
							d.jsx("img", {
								src: qw,
								className:
									"my-4 cursor-pointer self-center rounded-full hover:scale-105 hover:drop-shadow-2xl",
							}),
							d.jsxs("div", {
								className:
									"mb-4 flex w-full max-w-full flex-col items-center justify-center self-center truncate whitespace-nowrap rounded-lg bg-white p-1 text-indigo-500 hover:drop-shadow-2xl",
								children: [
									d.jsx(se, { icon: t1 }),
									" ",
									d.jsx("b", { children: n }),
								],
							}),
							d.jsxs("div", {
								className:
									"cursor-pointer  hover:scale-110 hover:drop-shadow-2xl",
								onClick: () => a("/teacher/home"),
								children: [
									d.jsx(se, { icon: n1 }),
									" ",
									d.jsx("b", { children: "Trang chủ" }),
								],
							}),
							d.jsxs("div", {
								className:
									"cursor-pointer whitespace-nowrap hover:scale-110 hover:drop-shadow-2xl",
								onClick: () => a("/teacher/list-student"),
								children: [
									d.jsx(se, { icon: Mw }),
									" ",
									d.jsx("b", { children: "Danh sách học sinh" }),
								],
							}),
							d.jsxs("div", {
								className:
									" cursor-pointer whitespace-nowrap hover:scale-110 hover:drop-shadow-2xl",
								onClick: () => a("/teacher/schedule"),
								children: [
									d.jsx(se, { icon: o1 }),
									" ",
									d.jsx("b", { children: "Thời khóa biểu" }),
								],
							}),
							d.jsxs("div", {
								className:
									" cursor-pointer whitespace-nowrap hover:scale-110 hover:drop-shadow-2xl",
								onClick: () => a("/teacher/account"),
								children: [
									d.jsx(se, { icon: e1 }),
									" ",
									d.jsx("b", { children: "Tài khoản" }),
								],
							}),
						],
					}),
					d.jsxs("div", {
						className: "flex w-full max-w-full flex-col",
						children: [
							d.jsxs("div", {
								className:
									"sticky flex w-full items-center justify-end bg-white px-3 py-1 shadow-lg",
								children: [
									d.jsx("div", {
										className: "cursor-pointer",
										onClick: () => t(!e),
										children: d.jsx(se, {
											className:
												"mr-4 rounded-full p-2 text-indigo-500 hover:bg-indigo-600 hover:text-white",
											size: "xl",
											icon: e ? a1 : i1,
										}),
									}),
									d.jsx("div", {
										className:
											"cursor-pointer rounded-lg px-2 py-2 font-bold text-indigo-500 hover:bg-indigo-600 hover:text-white",
										onClick: () => {
											a("/"), localStorage.clear();
										},
										children: "Đăng xuất",
									}),
								],
							}),
							d.jsx("div", {
								className: "flex w-full bg-white object-cover p-2",
								children: d.jsx(mh, {}),
							}),
						],
					}),
				],
			}),
		});
	},
	tx = Hs(
		d.jsxs(d.Fragment, {
			children: [
				d.jsx(Je, { path: "/signup", element: d.jsx(Zw, {}) }),
				d.jsx(Je, { path: "/", element: d.jsx(Jw, {}) }),
				d.jsxs(Je, {
					path: "/home",
					element: d.jsx(Gw, {}),
					children: [
						d.jsx(Je, { path: "student", element: d.jsx(Id, {}) }),
						d.jsx(Je, { path: "score", element: d.jsx(Ww, {}) }),
						d.jsx(Je, { path: "schedule", element: d.jsx(Ad, {}) }),
						d.jsx(Je, { path: "account", element: d.jsx(zd, {}) }),
						d.jsx(Je, { path: "report", element: d.jsx(Bw, {}) }),
					],
				}),
				d.jsxs(Je, {
					path: "/teacher",
					element: d.jsx(ex, {}),
					children: [
						d.jsx(Je, { path: "home", element: d.jsx(Id, {}) }),
						d.jsx(Je, { path: "list-student", element: d.jsx(Vw, {}) }),
						d.jsx(Je, { path: "schedule", element: d.jsx(Ad, {}) }),
						d.jsx(Je, { path: "account", element: d.jsx(zd, {}) }),
						d.jsx(Je, { path: "set-score", element: d.jsx(Yw, {}) }),
					],
				}),
			],
		}),
	),
	nx = dy(tx);
Wl.createRoot(document.getElementById("root")).render(
	d.jsxs(ae.StrictMode, {
		children: [
			d.jsx(My, {
				autoClose: 2e3,
				newestOnTop: !0,
				closeOnClick: !0,
				pauseOnFocusLoss: !1,
				draggable: !0,
				pauseOnHover: !0,
			}),
			d.jsx(Sy, { router: nx }),
		],
	}),
);
