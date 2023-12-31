import { a as pm, c as nd, g as vm } from './_commonjsHelpers-de833af9.js';
import { d as mm } from './index-356e4a49.js';
import {
	S as ym,
	i as bm,
	s as hm,
	e as Cs,
	p as gm,
	a as Em,
	c as Ps,
	b as Rm,
	q as _m,
	d as wm,
	g as Cm,
	f as Ss,
	h as Pm,
	j as Sm,
	r as Tm,
	k as Ts,
	m as Om,
	t as Am,
	v as xm
} from './index-8bb8d4e8.js';
import { H as $m } from './Header-e841243b.js';
import './Button-5a13ea78.js';
function qm(e, t) {
	for (var r = 0; r < t.length; r++) {
		const n = t[r];
		if (typeof n != 'string' && !Array.isArray(n)) {
			for (const a in n)
				if (a !== 'default' && !(a in e)) {
					const o = Object.getOwnPropertyDescriptor(n, a);
					o && Object.defineProperty(e, a, o.get ? o : { enumerable: !0, get: () => n[a] });
				}
		}
	}
	return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }));
}
var Ee = {},
	jl = { exports: {} };
jl.exports;
(function (e) {
	const r =
			(o = 0) =>
			(i) =>
				`\x1B[${38 + o};5;${i}m`,
		n =
			(o = 0) =>
			(i, s, l) =>
				`\x1B[${38 + o};2;${i};${s};${l}m`;
	function a() {
		const o = new Map(),
			i = {
				modifier: {
					reset: [0, 0],
					bold: [1, 22],
					dim: [2, 22],
					italic: [3, 23],
					underline: [4, 24],
					overline: [53, 55],
					inverse: [7, 27],
					hidden: [8, 28],
					strikethrough: [9, 29]
				},
				color: {
					black: [30, 39],
					red: [31, 39],
					green: [32, 39],
					yellow: [33, 39],
					blue: [34, 39],
					magenta: [35, 39],
					cyan: [36, 39],
					white: [37, 39],
					blackBright: [90, 39],
					redBright: [91, 39],
					greenBright: [92, 39],
					yellowBright: [93, 39],
					blueBright: [94, 39],
					magentaBright: [95, 39],
					cyanBright: [96, 39],
					whiteBright: [97, 39]
				},
				bgColor: {
					bgBlack: [40, 49],
					bgRed: [41, 49],
					bgGreen: [42, 49],
					bgYellow: [43, 49],
					bgBlue: [44, 49],
					bgMagenta: [45, 49],
					bgCyan: [46, 49],
					bgWhite: [47, 49],
					bgBlackBright: [100, 49],
					bgRedBright: [101, 49],
					bgGreenBright: [102, 49],
					bgYellowBright: [103, 49],
					bgBlueBright: [104, 49],
					bgMagentaBright: [105, 49],
					bgCyanBright: [106, 49],
					bgWhiteBright: [107, 49]
				}
			};
		(i.color.gray = i.color.blackBright),
			(i.bgColor.bgGray = i.bgColor.bgBlackBright),
			(i.color.grey = i.color.blackBright),
			(i.bgColor.bgGrey = i.bgColor.bgBlackBright);
		for (const [s, l] of Object.entries(i)) {
			for (const [u, c] of Object.entries(l))
				(i[u] = { open: `\x1B[${c[0]}m`, close: `\x1B[${c[1]}m` }),
					(l[u] = i[u]),
					o.set(c[0], c[1]);
			Object.defineProperty(i, s, { value: l, enumerable: !1 });
		}
		return (
			Object.defineProperty(i, 'codes', { value: o, enumerable: !1 }),
			(i.color.close = '\x1B[39m'),
			(i.bgColor.close = '\x1B[49m'),
			(i.color.ansi256 = r()),
			(i.color.ansi16m = n()),
			(i.bgColor.ansi256 = r(10)),
			(i.bgColor.ansi16m = n(10)),
			Object.defineProperties(i, {
				rgbToAnsi256: {
					value: (s, l, u) =>
						s === l && l === u
							? s < 8
								? 16
								: s > 248
								? 231
								: Math.round(((s - 8) / 247) * 24) + 232
							: 16 +
							  36 * Math.round((s / 255) * 5) +
							  6 * Math.round((l / 255) * 5) +
							  Math.round((u / 255) * 5),
					enumerable: !1
				},
				hexToRgb: {
					value: (s) => {
						const l = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(s.toString(16));
						if (!l) return [0, 0, 0];
						let { colorString: u } = l.groups;
						u.length === 3 &&
							(u = u
								.split('')
								.map((d) => d + d)
								.join(''));
						const c = Number.parseInt(u, 16);
						return [(c >> 16) & 255, (c >> 8) & 255, c & 255];
					},
					enumerable: !1
				},
				hexToAnsi256: { value: (s) => i.rgbToAnsi256(...i.hexToRgb(s)), enumerable: !1 }
			}),
			i
		);
	}
	Object.defineProperty(e, 'exports', { enumerable: !0, get: a });
})(jl);
var ad = jl.exports,
	_e = {};
Object.defineProperty(_e, '__esModule', { value: !0 });
_e.printIteratorEntries = Mm;
_e.printIteratorValues = Bm;
_e.printListItems = Nm;
_e.printObjectProperties = km;
const Im = (e, t) => {
	const r = Object.keys(e).sort(t);
	return (
		Object.getOwnPropertySymbols &&
			Object.getOwnPropertySymbols(e).forEach((n) => {
				Object.getOwnPropertyDescriptor(e, n).enumerable && r.push(n);
			}),
		r
	);
};
function Mm(e, t, r, n, a, o, i = ': ') {
	let s = '',
		l = e.next();
	if (!l.done) {
		s += t.spacingOuter;
		const u = r + t.indent;
		for (; !l.done; ) {
			const c = o(l.value[0], t, u, n, a),
				d = o(l.value[1], t, u, n, a);
			(s += u + c + i + d),
				(l = e.next()),
				l.done ? t.min || (s += ',') : (s += ',' + t.spacingInner);
		}
		s += t.spacingOuter + r;
	}
	return s;
}
function Bm(e, t, r, n, a, o) {
	let i = '',
		s = e.next();
	if (!s.done) {
		i += t.spacingOuter;
		const l = r + t.indent;
		for (; !s.done; )
			(i += l + o(s.value, t, l, n, a)),
				(s = e.next()),
				s.done ? t.min || (i += ',') : (i += ',' + t.spacingInner);
		i += t.spacingOuter + r;
	}
	return i;
}
function Nm(e, t, r, n, a, o) {
	let i = '';
	if (e.length) {
		i += t.spacingOuter;
		const s = r + t.indent;
		for (let l = 0; l < e.length; l++)
			(i += s),
				l in e && (i += o(e[l], t, s, n, a)),
				l < e.length - 1 ? (i += ',' + t.spacingInner) : t.min || (i += ',');
		i += t.spacingOuter + r;
	}
	return i;
}
function km(e, t, r, n, a, o) {
	let i = '';
	const s = Im(e, t.compareKeys);
	if (s.length) {
		i += t.spacingOuter;
		const l = r + t.indent;
		for (let u = 0; u < s.length; u++) {
			const c = s[u],
				d = o(c, t, l, n, a),
				f = o(e[c], t, l, n, a);
			(i += l + d + ': ' + f), u < s.length - 1 ? (i += ',' + t.spacingInner) : t.min || (i += ',');
		}
		i += t.spacingOuter + r;
	}
	return i;
}
var Me = {};
Object.defineProperty(Me, '__esModule', { value: !0 });
Me.test = Me.serialize = Me.default = void 0;
var Os = _e,
	Gr = (function () {
		return typeof globalThis < 'u'
			? globalThis
			: typeof Gr < 'u'
			? Gr
			: typeof self < 'u'
			? self
			: typeof window < 'u'
			? window
			: Function('return this')();
	})(),
	ui = Gr['jest-symbol-do-not-touch'] || Gr.Symbol;
const Dm = typeof ui == 'function' && ui.for ? ui.for('jest.asymmetricMatcher') : 1267621,
	gr = ' ',
	od = (e, t, r, n, a, o) => {
		const i = e.toString();
		return i === 'ArrayContaining' || i === 'ArrayNotContaining'
			? ++n > t.maxDepth
				? '[' + i + ']'
				: i + gr + '[' + (0, Os.printListItems)(e.sample, t, r, n, a, o) + ']'
			: i === 'ObjectContaining' || i === 'ObjectNotContaining'
			? ++n > t.maxDepth
				? '[' + i + ']'
				: i + gr + '{' + (0, Os.printObjectProperties)(e.sample, t, r, n, a, o) + '}'
			: i === 'StringMatching' ||
			  i === 'StringNotMatching' ||
			  i === 'StringContaining' ||
			  i === 'StringNotContaining'
			? i + gr + o(e.sample, t, r, n, a)
			: e.toAsymmetricMatcher();
	};
Me.serialize = od;
const id = (e) => e && e.$$typeof === Dm;
Me.test = id;
const Lm = { serialize: od, test: id };
var jm = Lm;
Me.default = jm;
var Be = {},
	Fm = ({ onlyFirst: e = !1 } = {}) => {
		const t = [
			'[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
			'(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'
		].join('|');
		return new RegExp(t, e ? void 0 : 'g');
	};
Object.defineProperty(Be, '__esModule', { value: !0 });
Be.test = Be.serialize = Be.default = void 0;
var ld = sd(Fm),
	I = sd(ad);
function sd(e) {
	return e && e.__esModule ? e : { default: e };
}
const Um = (e) =>
		e.replace((0, ld.default)(), (t) => {
			switch (t) {
				case I.default.red.close:
				case I.default.green.close:
				case I.default.cyan.close:
				case I.default.gray.close:
				case I.default.white.close:
				case I.default.yellow.close:
				case I.default.bgRed.close:
				case I.default.bgGreen.close:
				case I.default.bgYellow.close:
				case I.default.inverse.close:
				case I.default.dim.close:
				case I.default.bold.close:
				case I.default.reset.open:
				case I.default.reset.close:
					return '</>';
				case I.default.red.open:
					return '<red>';
				case I.default.green.open:
					return '<green>';
				case I.default.cyan.open:
					return '<cyan>';
				case I.default.gray.open:
					return '<gray>';
				case I.default.white.open:
					return '<white>';
				case I.default.yellow.open:
					return '<yellow>';
				case I.default.bgRed.open:
					return '<bgRed>';
				case I.default.bgGreen.open:
					return '<bgGreen>';
				case I.default.bgYellow.open:
					return '<bgYellow>';
				case I.default.inverse.open:
					return '<inverse>';
				case I.default.dim.open:
					return '<dim>';
				case I.default.bold.open:
					return '<bold>';
				default:
					return '';
			}
		}),
	ud = (e) => typeof e == 'string' && !!e.match((0, ld.default)());
Be.test = ud;
const cd = (e, t, r, n, a, o) => o(Um(e), t, r, n, a);
Be.serialize = cd;
const Hm = { serialize: cd, test: ud };
var Vm = Hm;
Be.default = Vm;
var Ne = {};
Object.defineProperty(Ne, '__esModule', { value: !0 });
Ne.test = Ne.serialize = Ne.default = void 0;
var As = _e;
const Wm = ' ',
	dd = ['DOMStringMap', 'NamedNodeMap'],
	Gm = /^(HTML\w*Collection|NodeList)$/,
	zm = (e) => dd.indexOf(e) !== -1 || Gm.test(e),
	fd = (e) => e && e.constructor && !!e.constructor.name && zm(e.constructor.name);
Ne.test = fd;
const Km = (e) => e.constructor.name === 'NamedNodeMap',
	pd = (e, t, r, n, a, o) => {
		const i = e.constructor.name;
		return ++n > t.maxDepth
			? '[' + i + ']'
			: (t.min ? '' : i + Wm) +
					(dd.indexOf(i) !== -1
						? '{' +
						  (0, As.printObjectProperties)(
								Km(e) ? Array.from(e).reduce((s, l) => ((s[l.name] = l.value), s), {}) : { ...e },
								t,
								r,
								n,
								a,
								o
						  ) +
						  '}'
						: '[' + (0, As.printListItems)(Array.from(e), t, r, n, a, o) + ']');
	};
Ne.serialize = pd;
const Ym = { serialize: pd, test: fd };
var Xm = Ym;
Ne.default = Xm;
var ke = {},
	U = {},
	Fl = {};
Object.defineProperty(Fl, '__esModule', { value: !0 });
Fl.default = Qm;
function Qm(e) {
	return e.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
Object.defineProperty(U, '__esModule', { value: !0 });
U.printText =
	U.printProps =
	U.printElementAsLeaf =
	U.printElement =
	U.printComment =
	U.printChildren =
		void 0;
var vd = Jm(Fl);
function Jm(e) {
	return e && e.__esModule ? e : { default: e };
}
const Zm = (e, t, r, n, a, o, i) => {
	const s = n + r.indent,
		l = r.colors;
	return e
		.map((u) => {
			const c = t[u];
			let d = i(c, r, s, a, o);
			return (
				typeof c != 'string' &&
					(d.indexOf(`
`) !== -1 && (d = r.spacingOuter + s + d + r.spacingOuter + n),
					(d = '{' + d + '}')),
				r.spacingInner + n + l.prop.open + u + l.prop.close + '=' + l.value.open + d + l.value.close
			);
		})
		.join('');
};
U.printProps = Zm;
const ey = (e, t, r, n, a, o) =>
	e.map((i) => t.spacingOuter + r + (typeof i == 'string' ? md(i, t) : o(i, t, r, n, a))).join('');
U.printChildren = ey;
const md = (e, t) => {
	const r = t.colors.content;
	return r.open + (0, vd.default)(e) + r.close;
};
U.printText = md;
const ty = (e, t) => {
	const r = t.colors.comment;
	return r.open + '<!--' + (0, vd.default)(e) + '-->' + r.close;
};
U.printComment = ty;
const ry = (e, t, r, n, a) => {
	const o = n.colors.tag;
	return (
		o.open +
		'<' +
		e +
		(t && o.close + t + n.spacingOuter + a + o.open) +
		(r
			? '>' + o.close + r + n.spacingOuter + a + o.open + '</' + e
			: (t && !n.min ? '' : ' ') + '/') +
		'>' +
		o.close
	);
};
U.printElement = ry;
const ny = (e, t) => {
	const r = t.colors.tag;
	return r.open + '<' + e + r.close + ' …' + r.open + ' />' + r.close;
};
U.printElementAsLeaf = ny;
Object.defineProperty(ke, '__esModule', { value: !0 });
ke.test = ke.serialize = ke.default = void 0;
var it = U;
const ay = 1,
	yd = 3,
	bd = 8,
	hd = 11,
	oy = /^((HTML|SVG)\w*)?Element$/,
	iy = (e) => {
		try {
			return typeof e.hasAttribute == 'function' && e.hasAttribute('is');
		} catch {
			return !1;
		}
	},
	ly = (e) => {
		const t = e.constructor.name,
			{ nodeType: r, tagName: n } = e,
			a = (typeof n == 'string' && n.includes('-')) || iy(e);
		return (
			(r === ay && (oy.test(t) || a)) ||
			(r === yd && t === 'Text') ||
			(r === bd && t === 'Comment') ||
			(r === hd && t === 'DocumentFragment')
		);
	},
	gd = (e) => {
		var t;
		return (e == null || (t = e.constructor) === null || t === void 0 ? void 0 : t.name) && ly(e);
	};
ke.test = gd;
function sy(e) {
	return e.nodeType === yd;
}
function uy(e) {
	return e.nodeType === bd;
}
function ci(e) {
	return e.nodeType === hd;
}
const Ed = (e, t, r, n, a, o) => {
	if (sy(e)) return (0, it.printText)(e.data, t);
	if (uy(e)) return (0, it.printComment)(e.data, t);
	const i = ci(e) ? 'DocumentFragment' : e.tagName.toLowerCase();
	return ++n > t.maxDepth
		? (0, it.printElementAsLeaf)(i, t)
		: (0, it.printElement)(
				i,
				(0, it.printProps)(
					ci(e)
						? []
						: Array.from(e.attributes)
								.map((s) => s.name)
								.sort(),
					ci(e) ? {} : Array.from(e.attributes).reduce((s, l) => ((s[l.name] = l.value), s), {}),
					t,
					r + t.indent,
					n,
					a,
					o
				),
				(0, it.printChildren)(
					Array.prototype.slice.call(e.childNodes || e.children),
					t,
					r + t.indent,
					n,
					a,
					o
				),
				t,
				r
		  );
};
ke.serialize = Ed;
const cy = { serialize: Ed, test: gd };
var dy = cy;
ke.default = dy;
var De = {};
Object.defineProperty(De, '__esModule', { value: !0 });
De.test = De.serialize = De.default = void 0;
var zt = _e;
const fy = '@@__IMMUTABLE_ITERABLE__@@',
	py = '@@__IMMUTABLE_LIST__@@',
	vy = '@@__IMMUTABLE_KEYED__@@',
	my = '@@__IMMUTABLE_MAP__@@',
	xs = '@@__IMMUTABLE_ORDERED__@@',
	yy = '@@__IMMUTABLE_RECORD__@@',
	by = '@@__IMMUTABLE_SEQ__@@',
	hy = '@@__IMMUTABLE_SET__@@',
	gy = '@@__IMMUTABLE_STACK__@@',
	bt = (e) => 'Immutable.' + e,
	yn = (e) => '[' + e + ']',
	Kt = ' ',
	$s = '…',
	Ey = (e, t, r, n, a, o, i) =>
		++n > t.maxDepth
			? yn(bt(i))
			: bt(i) + Kt + '{' + (0, zt.printIteratorEntries)(e.entries(), t, r, n, a, o) + '}';
function Ry(e) {
	let t = 0;
	return {
		next() {
			if (t < e._keys.length) {
				const r = e._keys[t++];
				return { done: !1, value: [r, e.get(r)] };
			}
			return { done: !0, value: void 0 };
		}
	};
}
const _y = (e, t, r, n, a, o) => {
		const i = bt(e._name || 'Record');
		return ++n > t.maxDepth
			? yn(i)
			: i + Kt + '{' + (0, zt.printIteratorEntries)(Ry(e), t, r, n, a, o) + '}';
	},
	wy = (e, t, r, n, a, o) => {
		const i = bt('Seq');
		return ++n > t.maxDepth
			? yn(i)
			: e[vy]
			? i +
			  Kt +
			  '{' +
			  (e._iter || e._object ? (0, zt.printIteratorEntries)(e.entries(), t, r, n, a, o) : $s) +
			  '}'
			: i +
			  Kt +
			  '[' +
			  (e._iter || e._array || e._collection || e._iterable
					? (0, zt.printIteratorValues)(e.values(), t, r, n, a, o)
					: $s) +
			  ']';
	},
	di = (e, t, r, n, a, o, i) =>
		++n > t.maxDepth
			? yn(bt(i))
			: bt(i) + Kt + '[' + (0, zt.printIteratorValues)(e.values(), t, r, n, a, o) + ']',
	Rd = (e, t, r, n, a, o) =>
		e[my]
			? Ey(e, t, r, n, a, o, e[xs] ? 'OrderedMap' : 'Map')
			: e[py]
			? di(e, t, r, n, a, o, 'List')
			: e[hy]
			? di(e, t, r, n, a, o, e[xs] ? 'OrderedSet' : 'Set')
			: e[gy]
			? di(e, t, r, n, a, o, 'Stack')
			: e[by]
			? wy(e, t, r, n, a, o)
			: _y(e, t, r, n, a, o);
De.serialize = Rd;
const _d = (e) => e && (e[fy] === !0 || e[yy] === !0);
De.test = _d;
const Cy = { serialize: Rd, test: _d };
var Py = Cy;
De.default = Py;
var Le = {},
	wd = { exports: {} },
	q = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bn = 60103,
	hn = 60106,
	or = 60107,
	ir = 60108,
	lr = 60114,
	sr = 60109,
	ur = 60110,
	cr = 60112,
	dr = 60113,
	Ul = 60120,
	fr = 60115,
	pr = 60116,
	Cd = 60121,
	Pd = 60122,
	Sd = 60117,
	Td = 60129,
	Od = 60131;
if (typeof Symbol == 'function' && Symbol.for) {
	var L = Symbol.for;
	(bn = L('react.element')),
		(hn = L('react.portal')),
		(or = L('react.fragment')),
		(ir = L('react.strict_mode')),
		(lr = L('react.profiler')),
		(sr = L('react.provider')),
		(ur = L('react.context')),
		(cr = L('react.forward_ref')),
		(dr = L('react.suspense')),
		(Ul = L('react.suspense_list')),
		(fr = L('react.memo')),
		(pr = L('react.lazy')),
		(Cd = L('react.block')),
		(Pd = L('react.server.block')),
		(Sd = L('react.fundamental')),
		(Td = L('react.debug_trace_mode')),
		(Od = L('react.legacy_hidden'));
}
function le(e) {
	if (typeof e == 'object' && e !== null) {
		var t = e.$$typeof;
		switch (t) {
			case bn:
				switch (((e = e.type), e)) {
					case or:
					case lr:
					case ir:
					case dr:
					case Ul:
						return e;
					default:
						switch (((e = e && e.$$typeof), e)) {
							case ur:
							case cr:
							case pr:
							case fr:
							case sr:
								return e;
							default:
								return t;
						}
				}
			case hn:
				return t;
		}
	}
}
var Sy = sr,
	Ty = bn,
	Oy = cr,
	Ay = or,
	xy = pr,
	$y = fr,
	qy = hn,
	Iy = lr,
	My = ir,
	By = dr;
q.ContextConsumer = ur;
q.ContextProvider = Sy;
q.Element = Ty;
q.ForwardRef = Oy;
q.Fragment = Ay;
q.Lazy = xy;
q.Memo = $y;
q.Portal = qy;
q.Profiler = Iy;
q.StrictMode = My;
q.Suspense = By;
q.isAsyncMode = function () {
	return !1;
};
q.isConcurrentMode = function () {
	return !1;
};
q.isContextConsumer = function (e) {
	return le(e) === ur;
};
q.isContextProvider = function (e) {
	return le(e) === sr;
};
q.isElement = function (e) {
	return typeof e == 'object' && e !== null && e.$$typeof === bn;
};
q.isForwardRef = function (e) {
	return le(e) === cr;
};
q.isFragment = function (e) {
	return le(e) === or;
};
q.isLazy = function (e) {
	return le(e) === pr;
};
q.isMemo = function (e) {
	return le(e) === fr;
};
q.isPortal = function (e) {
	return le(e) === hn;
};
q.isProfiler = function (e) {
	return le(e) === lr;
};
q.isStrictMode = function (e) {
	return le(e) === ir;
};
q.isSuspense = function (e) {
	return le(e) === dr;
};
q.isValidElementType = function (e) {
	return (
		typeof e == 'string' ||
		typeof e == 'function' ||
		e === or ||
		e === lr ||
		e === Td ||
		e === ir ||
		e === dr ||
		e === Ul ||
		e === Od ||
		(typeof e == 'object' &&
			e !== null &&
			(e.$$typeof === pr ||
				e.$$typeof === fr ||
				e.$$typeof === sr ||
				e.$$typeof === ur ||
				e.$$typeof === cr ||
				e.$$typeof === Sd ||
				e.$$typeof === Cd ||
				e[0] === Pd))
	);
};
q.typeOf = le;
wd.exports = q;
var Ny = wd.exports;
Object.defineProperty(Le, '__esModule', { value: !0 });
Le.test = Le.serialize = Le.default = void 0;
var We = ky(Ny),
	Er = U;
function Ad(e) {
	if (typeof WeakMap != 'function') return null;
	var t = new WeakMap(),
		r = new WeakMap();
	return (Ad = function (n) {
		return n ? r : t;
	})(e);
}
function ky(e, t) {
	if (!t && e && e.__esModule) return e;
	if (e === null || (typeof e != 'object' && typeof e != 'function')) return { default: e };
	var r = Ad(t);
	if (r && r.has(e)) return r.get(e);
	var n = {},
		a = Object.defineProperty && Object.getOwnPropertyDescriptor;
	for (var o in e)
		if (o !== 'default' && Object.prototype.hasOwnProperty.call(e, o)) {
			var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
			i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
		}
	return (n.default = e), r && r.set(e, n), n;
}
const xd = (e, t = []) => (
		Array.isArray(e)
			? e.forEach((r) => {
					xd(r, t);
			  })
			: e != null && e !== !1 && t.push(e),
		t
	),
	qs = (e) => {
		const t = e.type;
		if (typeof t == 'string') return t;
		if (typeof t == 'function') return t.displayName || t.name || 'Unknown';
		if (We.isFragment(e)) return 'React.Fragment';
		if (We.isSuspense(e)) return 'React.Suspense';
		if (typeof t == 'object' && t !== null) {
			if (We.isContextProvider(e)) return 'Context.Provider';
			if (We.isContextConsumer(e)) return 'Context.Consumer';
			if (We.isForwardRef(e)) {
				if (t.displayName) return t.displayName;
				const r = t.render.displayName || t.render.name || '';
				return r !== '' ? 'ForwardRef(' + r + ')' : 'ForwardRef';
			}
			if (We.isMemo(e)) {
				const r = t.displayName || t.type.displayName || t.type.name || '';
				return r !== '' ? 'Memo(' + r + ')' : 'Memo';
			}
		}
		return 'UNDEFINED';
	},
	Dy = (e) => {
		const { props: t } = e;
		return Object.keys(t)
			.filter((r) => r !== 'children' && t[r] !== void 0)
			.sort();
	},
	$d = (e, t, r, n, a, o) =>
		++n > t.maxDepth
			? (0, Er.printElementAsLeaf)(qs(e), t)
			: (0, Er.printElement)(
					qs(e),
					(0, Er.printProps)(Dy(e), e.props, t, r + t.indent, n, a, o),
					(0, Er.printChildren)(xd(e.props.children), t, r + t.indent, n, a, o),
					t,
					r
			  );
Le.serialize = $d;
const qd = (e) => e != null && We.isElement(e);
Le.test = qd;
const Ly = { serialize: $d, test: qd };
var jy = Ly;
Le.default = jy;
var je = {};
Object.defineProperty(je, '__esModule', { value: !0 });
je.test = je.serialize = je.default = void 0;
var Rr = U,
	zr = (function () {
		return typeof globalThis < 'u'
			? globalThis
			: typeof zr < 'u'
			? zr
			: typeof self < 'u'
			? self
			: typeof window < 'u'
			? window
			: Function('return this')();
	})(),
	fi = zr['jest-symbol-do-not-touch'] || zr.Symbol;
const Fy = typeof fi == 'function' && fi.for ? fi.for('react.test.json') : 245830487,
	Uy = (e) => {
		const { props: t } = e;
		return t
			? Object.keys(t)
					.filter((r) => t[r] !== void 0)
					.sort()
			: [];
	},
	Id = (e, t, r, n, a, o) =>
		++n > t.maxDepth
			? (0, Rr.printElementAsLeaf)(e.type, t)
			: (0, Rr.printElement)(
					e.type,
					e.props ? (0, Rr.printProps)(Uy(e), e.props, t, r + t.indent, n, a, o) : '',
					e.children ? (0, Rr.printChildren)(e.children, t, r + t.indent, n, a, o) : '',
					t,
					r
			  );
je.serialize = Id;
const Md = (e) => e && e.$$typeof === Fy;
je.test = Md;
const Hy = { serialize: Id, test: Md };
var Vy = Hy;
je.default = Vy;
Object.defineProperty(Ee, '__esModule', { value: !0 });
var Bd = (Ee.default = Vd = Ee.DEFAULT_OPTIONS = void 0),
	Nd = (Ee.format = Kd),
	Hl = (Ee.plugins = void 0),
	Wy = He(ad),
	Bt = _e,
	Gy = He(Me),
	zy = He(Be),
	Ky = He(Ne),
	Yy = He(ke),
	Xy = He(De),
	Qy = He(Le),
	Jy = He(je);
function He(e) {
	return e && e.__esModule ? e : { default: e };
}
const kd = Object.prototype.toString,
	Zy = Date.prototype.toISOString,
	eb = Error.prototype.toString,
	Is = RegExp.prototype.toString,
	pi = (e) => (typeof e.constructor == 'function' && e.constructor.name) || 'Object',
	tb = (e) => typeof window < 'u' && e === window,
	rb = /^Symbol\((.*)\)(.*)$/,
	nb = /\n/gi;
class Dd extends Error {
	constructor(t, r) {
		super(t), (this.stack = r), (this.name = this.constructor.name);
	}
}
function ab(e) {
	return (
		e === '[object Array]' ||
		e === '[object ArrayBuffer]' ||
		e === '[object DataView]' ||
		e === '[object Float32Array]' ||
		e === '[object Float64Array]' ||
		e === '[object Int8Array]' ||
		e === '[object Int16Array]' ||
		e === '[object Int32Array]' ||
		e === '[object Uint8Array]' ||
		e === '[object Uint8ClampedArray]' ||
		e === '[object Uint16Array]' ||
		e === '[object Uint32Array]'
	);
}
function ob(e) {
	return Object.is(e, -0) ? '-0' : String(e);
}
function ib(e) {
	return `${e}n`;
}
function Ms(e, t) {
	return t ? '[Function ' + (e.name || 'anonymous') + ']' : '[Function]';
}
function Bs(e) {
	return String(e).replace(rb, 'Symbol($1)');
}
function Ns(e) {
	return '[' + eb.call(e) + ']';
}
function Ld(e, t, r, n) {
	if (e === !0 || e === !1) return '' + e;
	if (e === void 0) return 'undefined';
	if (e === null) return 'null';
	const a = typeof e;
	if (a === 'number') return ob(e);
	if (a === 'bigint') return ib(e);
	if (a === 'string') return n ? '"' + e.replace(/"|\\/g, '\\$&') + '"' : '"' + e + '"';
	if (a === 'function') return Ms(e, t);
	if (a === 'symbol') return Bs(e);
	const o = kd.call(e);
	return o === '[object WeakMap]'
		? 'WeakMap {}'
		: o === '[object WeakSet]'
		? 'WeakSet {}'
		: o === '[object Function]' || o === '[object GeneratorFunction]'
		? Ms(e, t)
		: o === '[object Symbol]'
		? Bs(e)
		: o === '[object Date]'
		? isNaN(+e)
			? 'Date { NaN }'
			: Zy.call(e)
		: o === '[object Error]'
		? Ns(e)
		: o === '[object RegExp]'
		? r
			? Is.call(e).replace(/[\\^$*+?.()|[\]{}]/g, '\\$&')
			: Is.call(e)
		: e instanceof Error
		? Ns(e)
		: null;
}
function jd(e, t, r, n, a, o) {
	if (a.indexOf(e) !== -1) return '[Circular]';
	(a = a.slice()), a.push(e);
	const i = ++n > t.maxDepth,
		s = t.min;
	if (t.callToJSON && !i && e.toJSON && typeof e.toJSON == 'function' && !o)
		return Te(e.toJSON(), t, r, n, a, !0);
	const l = kd.call(e);
	return l === '[object Arguments]'
		? i
			? '[Arguments]'
			: (s ? '' : 'Arguments ') + '[' + (0, Bt.printListItems)(e, t, r, n, a, Te) + ']'
		: ab(l)
		? i
			? '[' + e.constructor.name + ']'
			: (s || (!t.printBasicPrototype && e.constructor.name === 'Array')
					? ''
					: e.constructor.name + ' ') +
			  '[' +
			  (0, Bt.printListItems)(e, t, r, n, a, Te) +
			  ']'
		: l === '[object Map]'
		? i
			? '[Map]'
			: 'Map {' + (0, Bt.printIteratorEntries)(e.entries(), t, r, n, a, Te, ' => ') + '}'
		: l === '[object Set]'
		? i
			? '[Set]'
			: 'Set {' + (0, Bt.printIteratorValues)(e.values(), t, r, n, a, Te) + '}'
		: i || tb(e)
		? '[' + pi(e) + ']'
		: (s || (!t.printBasicPrototype && pi(e) === 'Object') ? '' : pi(e) + ' ') +
		  '{' +
		  (0, Bt.printObjectProperties)(e, t, r, n, a, Te) +
		  '}';
}
function lb(e) {
	return e.serialize != null;
}
function Fd(e, t, r, n, a, o) {
	let i;
	try {
		i = lb(e)
			? e.serialize(t, r, n, a, o, Te)
			: e.print(
					t,
					(s) => Te(s, r, n, a, o),
					(s) => {
						const l = n + r.indent;
						return (
							l +
							s.replace(
								nb,
								`
` + l
							)
						);
					},
					{ edgeSpacing: r.spacingOuter, min: r.min, spacing: r.spacingInner },
					r.colors
			  );
	} catch (s) {
		throw new Dd(s.message, s.stack);
	}
	if (typeof i != 'string')
		throw new Error(
			`pretty-format: Plugin must return type "string" but instead returned "${typeof i}".`
		);
	return i;
}
function Ud(e, t) {
	for (let r = 0; r < e.length; r++)
		try {
			if (e[r].test(t)) return e[r];
		} catch (n) {
			throw new Dd(n.message, n.stack);
		}
	return null;
}
function Te(e, t, r, n, a, o) {
	const i = Ud(t.plugins, e);
	if (i !== null) return Fd(i, e, t, r, n, a);
	const s = Ld(e, t.printFunctionName, t.escapeRegex, t.escapeString);
	return s !== null ? s : jd(e, t, r, n, a, o);
}
const Vl = { comment: 'gray', content: 'reset', prop: 'yellow', tag: 'cyan', value: 'green' },
	Hd = Object.keys(Vl),
	ne = {
		callToJSON: !0,
		compareKeys: void 0,
		escapeRegex: !1,
		escapeString: !0,
		highlight: !1,
		indent: 2,
		maxDepth: 1 / 0,
		min: !1,
		plugins: [],
		printBasicPrototype: !0,
		printFunctionName: !0,
		theme: Vl
	};
var Vd = (Ee.DEFAULT_OPTIONS = ne);
function sb(e) {
	if (
		(Object.keys(e).forEach((t) => {
			if (!ne.hasOwnProperty(t)) throw new Error(`pretty-format: Unknown option "${t}".`);
		}),
		e.min && e.indent !== void 0 && e.indent !== 0)
	)
		throw new Error('pretty-format: Options "min" and "indent" cannot be used together.');
	if (e.theme !== void 0) {
		if (e.theme === null) throw new Error('pretty-format: Option "theme" must not be null.');
		if (typeof e.theme != 'object')
			throw new Error(
				`pretty-format: Option "theme" must be of type "object" but instead received "${typeof e.theme}".`
			);
	}
}
const ub = (e) =>
		Hd.reduce((t, r) => {
			const n = e.theme && e.theme[r] !== void 0 ? e.theme[r] : Vl[r],
				a = n && Wy.default[n];
			if (a && typeof a.close == 'string' && typeof a.open == 'string') t[r] = a;
			else
				throw new Error(
					`pretty-format: Option "theme" has a key "${r}" whose value "${n}" is undefined in ansi-styles.`
				);
			return t;
		}, Object.create(null)),
	cb = () => Hd.reduce((e, t) => ((e[t] = { close: '', open: '' }), e), Object.create(null)),
	Wd = (e) => (e && e.printFunctionName !== void 0 ? e.printFunctionName : ne.printFunctionName),
	Gd = (e) => (e && e.escapeRegex !== void 0 ? e.escapeRegex : ne.escapeRegex),
	zd = (e) => (e && e.escapeString !== void 0 ? e.escapeString : ne.escapeString),
	ks = (e) => {
		var t;
		return {
			callToJSON: e && e.callToJSON !== void 0 ? e.callToJSON : ne.callToJSON,
			colors: e && e.highlight ? ub(e) : cb(),
			compareKeys: e && typeof e.compareKeys == 'function' ? e.compareKeys : ne.compareKeys,
			escapeRegex: Gd(e),
			escapeString: zd(e),
			indent: e && e.min ? '' : db(e && e.indent !== void 0 ? e.indent : ne.indent),
			maxDepth: e && e.maxDepth !== void 0 ? e.maxDepth : ne.maxDepth,
			min: e && e.min !== void 0 ? e.min : ne.min,
			plugins: e && e.plugins !== void 0 ? e.plugins : ne.plugins,
			printBasicPrototype:
				(t = e == null ? void 0 : e.printBasicPrototype) !== null && t !== void 0 ? t : !0,
			printFunctionName: Wd(e),
			spacingInner:
				e && e.min
					? ' '
					: `
`,
			spacingOuter:
				e && e.min
					? ''
					: `
`
		};
	};
function db(e) {
	return new Array(e + 1).join(' ');
}
function Kd(e, t) {
	if (t && (sb(t), t.plugins)) {
		const n = Ud(t.plugins, e);
		if (n !== null) return Fd(n, e, ks(t), '', 0, []);
	}
	const r = Ld(e, Wd(t), Gd(t), zd(t));
	return r !== null ? r : jd(e, ks(t), '', 0, []);
}
const fb = {
	AsymmetricMatcher: Gy.default,
	ConvertAnsi: zy.default,
	DOMCollection: Ky.default,
	DOMElement: Yy.default,
	Immutable: Xy.default,
	ReactElement: Qy.default,
	ReactTestComponent: Jy.default
};
Hl = Ee.plugins = fb;
var pb = Kd;
Bd = Ee.default = pb;
const vb = qm(
	{
		__proto__: null,
		get DEFAULT_OPTIONS() {
			return Vd;
		},
		get default() {
			return Bd;
		},
		format: Nd,
		get plugins() {
			return Hl;
		}
	},
	[Ee]
);
var mb = Object.prototype.toString;
function Ds(e) {
	return typeof e == 'function' || mb.call(e) === '[object Function]';
}
function yb(e) {
	var t = Number(e);
	return isNaN(t) ? 0 : t === 0 || !isFinite(t) ? t : (t > 0 ? 1 : -1) * Math.floor(Math.abs(t));
}
var bb = Math.pow(2, 53) - 1;
function hb(e) {
	var t = yb(e);
	return Math.min(Math.max(t, 0), bb);
}
function ae(e, t) {
	var r = Array,
		n = Object(e);
	if (e == null)
		throw new TypeError('Array.from requires an array-like object - not null or undefined');
	if (typeof t < 'u' && !Ds(t))
		throw new TypeError('Array.from: when provided, the second argument must be a function');
	for (var a = hb(n.length), o = Ds(r) ? Object(new r(a)) : new Array(a), i = 0, s; i < a; )
		(s = n[i]), t ? (o[i] = t(s, i)) : (o[i] = s), (i += 1);
	return (o.length = a), o;
}
function Yt(e) {
	'@babel/helpers - typeof';
	return (
		(Yt =
			typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
				? function (t) {
						return typeof t;
				  }
				: function (t) {
						return t &&
							typeof Symbol == 'function' &&
							t.constructor === Symbol &&
							t !== Symbol.prototype
							? 'symbol'
							: typeof t;
				  }),
		Yt(e)
	);
}
function gb(e, t) {
	if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
}
function Ls(e, t) {
	for (var r = 0; r < t.length; r++) {
		var n = t[r];
		(n.enumerable = n.enumerable || !1),
			(n.configurable = !0),
			'value' in n && (n.writable = !0),
			Object.defineProperty(e, Yd(n.key), n);
	}
}
function Eb(e, t, r) {
	return (
		t && Ls(e.prototype, t),
		r && Ls(e, r),
		Object.defineProperty(e, 'prototype', { writable: !1 }),
		e
	);
}
function Rb(e, t, r) {
	return (
		(t = Yd(t)),
		t in e
			? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
			: (e[t] = r),
		e
	);
}
function Yd(e) {
	var t = _b(e, 'string');
	return Yt(t) === 'symbol' ? t : String(t);
}
function _b(e, t) {
	if (Yt(e) !== 'object' || e === null) return e;
	var r = e[Symbol.toPrimitive];
	if (r !== void 0) {
		var n = r.call(e, t || 'default');
		if (Yt(n) !== 'object') return n;
		throw new TypeError('@@toPrimitive must return a primitive value.');
	}
	return (t === 'string' ? String : Number)(e);
}
var wb = (function () {
	function e() {
		var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
		gb(this, e), Rb(this, 'items', void 0), (this.items = t);
	}
	return (
		Eb(e, [
			{
				key: 'add',
				value: function (r) {
					return this.has(r) === !1 && this.items.push(r), this;
				}
			},
			{
				key: 'clear',
				value: function () {
					this.items = [];
				}
			},
			{
				key: 'delete',
				value: function (r) {
					var n = this.items.length;
					return (
						(this.items = this.items.filter(function (a) {
							return a !== r;
						})),
						n !== this.items.length
					);
				}
			},
			{
				key: 'forEach',
				value: function (r) {
					var n = this;
					this.items.forEach(function (a) {
						r(a, a, n);
					});
				}
			},
			{
				key: 'has',
				value: function (r) {
					return this.items.indexOf(r) !== -1;
				}
			},
			{
				key: 'size',
				get: function () {
					return this.items.length;
				}
			}
		]),
		e
	);
})();
const Cb = typeof Set > 'u' ? Set : wb;
function H(e) {
	var t;
	return (t = e.localName) !== null && t !== void 0 ? t : e.tagName.toLowerCase();
}
var Pb = {
		article: 'article',
		aside: 'complementary',
		button: 'button',
		datalist: 'listbox',
		dd: 'definition',
		details: 'group',
		dialog: 'dialog',
		dt: 'term',
		fieldset: 'group',
		figure: 'figure',
		form: 'form',
		footer: 'contentinfo',
		h1: 'heading',
		h2: 'heading',
		h3: 'heading',
		h4: 'heading',
		h5: 'heading',
		h6: 'heading',
		header: 'banner',
		hr: 'separator',
		html: 'document',
		legend: 'legend',
		li: 'listitem',
		math: 'math',
		main: 'main',
		menu: 'list',
		nav: 'navigation',
		ol: 'list',
		optgroup: 'group',
		option: 'option',
		output: 'status',
		progress: 'progressbar',
		section: 'region',
		summary: 'button',
		table: 'table',
		tbody: 'rowgroup',
		textarea: 'textbox',
		tfoot: 'rowgroup',
		td: 'cell',
		th: 'columnheader',
		thead: 'rowgroup',
		tr: 'row',
		ul: 'list'
	},
	Sb = {
		caption: new Set(['aria-label', 'aria-labelledby']),
		code: new Set(['aria-label', 'aria-labelledby']),
		deletion: new Set(['aria-label', 'aria-labelledby']),
		emphasis: new Set(['aria-label', 'aria-labelledby']),
		generic: new Set(['aria-label', 'aria-labelledby', 'aria-roledescription']),
		insertion: new Set(['aria-label', 'aria-labelledby']),
		paragraph: new Set(['aria-label', 'aria-labelledby']),
		presentation: new Set(['aria-label', 'aria-labelledby']),
		strong: new Set(['aria-label', 'aria-labelledby']),
		subscript: new Set(['aria-label', 'aria-labelledby']),
		superscript: new Set(['aria-label', 'aria-labelledby'])
	};
function Tb(e, t) {
	return [
		'aria-atomic',
		'aria-busy',
		'aria-controls',
		'aria-current',
		'aria-describedby',
		'aria-details',
		'aria-dropeffect',
		'aria-flowto',
		'aria-grabbed',
		'aria-hidden',
		'aria-keyshortcuts',
		'aria-label',
		'aria-labelledby',
		'aria-live',
		'aria-owns',
		'aria-relevant',
		'aria-roledescription'
	].some(function (r) {
		var n;
		return e.hasAttribute(r) && !((n = Sb[t]) !== null && n !== void 0 && n.has(r));
	});
}
function Xd(e, t) {
	return Tb(e, t);
}
function Ob(e) {
	var t = xb(e);
	if (t === null || t === 'presentation') {
		var r = Ab(e);
		if (t !== 'presentation' || Xd(e, r || '')) return r;
	}
	return t;
}
function Ab(e) {
	var t = Pb[H(e)];
	if (t !== void 0) return t;
	switch (H(e)) {
		case 'a':
		case 'area':
		case 'link':
			if (e.hasAttribute('href')) return 'link';
			break;
		case 'img':
			return e.getAttribute('alt') === '' && !Xd(e, 'img') ? 'presentation' : 'img';
		case 'input': {
			var r = e,
				n = r.type;
			switch (n) {
				case 'button':
				case 'image':
				case 'reset':
				case 'submit':
					return 'button';
				case 'checkbox':
				case 'radio':
					return n;
				case 'range':
					return 'slider';
				case 'email':
				case 'tel':
				case 'text':
				case 'url':
					return e.hasAttribute('list') ? 'combobox' : 'textbox';
				case 'search':
					return e.hasAttribute('list') ? 'combobox' : 'searchbox';
				case 'number':
					return 'spinbutton';
				default:
					return null;
			}
		}
		case 'select':
			return e.hasAttribute('multiple') || e.size > 1 ? 'listbox' : 'combobox';
	}
	return null;
}
function xb(e) {
	var t = e.getAttribute('role');
	if (t !== null) {
		var r = t.trim().split(' ')[0];
		if (r.length > 0) return r;
	}
	return null;
}
function B(e) {
	return e !== null && e.nodeType === e.ELEMENT_NODE;
}
function Qd(e) {
	return B(e) && H(e) === 'caption';
}
function Ir(e) {
	return B(e) && H(e) === 'input';
}
function $b(e) {
	return B(e) && H(e) === 'optgroup';
}
function qb(e) {
	return B(e) && H(e) === 'select';
}
function Ib(e) {
	return B(e) && H(e) === 'table';
}
function Mb(e) {
	return B(e) && H(e) === 'textarea';
}
function Bb(e) {
	var t = e.ownerDocument === null ? e : e.ownerDocument,
		r = t.defaultView;
	if (r === null) throw new TypeError('no window available');
	return r;
}
function Nb(e) {
	return B(e) && H(e) === 'fieldset';
}
function kb(e) {
	return B(e) && H(e) === 'legend';
}
function Db(e) {
	return B(e) && H(e) === 'slot';
}
function Lb(e) {
	return B(e) && e.ownerSVGElement !== void 0;
}
function jb(e) {
	return B(e) && H(e) === 'svg';
}
function Fb(e) {
	return Lb(e) && H(e) === 'title';
}
function Kr(e, t) {
	if (B(e) && e.hasAttribute(t)) {
		var r = e.getAttribute(t).split(' '),
			n = e.getRootNode ? e.getRootNode() : e.ownerDocument;
		return r
			.map(function (a) {
				return n.getElementById(a);
			})
			.filter(function (a) {
				return a !== null;
			});
	}
	return [];
}
function be(e, t) {
	return B(e) ? t.indexOf(Ob(e)) !== -1 : !1;
}
function Ub(e) {
	return e.trim().replace(/\s\s+/g, ' ');
}
function Hb(e, t) {
	if (!B(e)) return !1;
	if (e.hasAttribute('hidden') || e.getAttribute('aria-hidden') === 'true') return !0;
	var r = t(e);
	return r.getPropertyValue('display') === 'none' || r.getPropertyValue('visibility') === 'hidden';
}
function Vb(e) {
	return be(e, ['button', 'combobox', 'listbox', 'textbox']) || Jd(e, 'range');
}
function Jd(e, t) {
	if (!B(e)) return !1;
	switch (t) {
		case 'range':
			return be(e, ['meter', 'progressbar', 'scrollbar', 'slider', 'spinbutton']);
		default:
			throw new TypeError(
				"No knowledge about abstract role '".concat(t, "'. This is likely a bug :(")
			);
	}
}
function js(e, t) {
	var r = ae(e.querySelectorAll(t));
	return (
		Kr(e, 'aria-owns').forEach(function (n) {
			r.push.apply(r, ae(n.querySelectorAll(t)));
		}),
		r
	);
}
function Wb(e) {
	return qb(e) ? e.selectedOptions || js(e, '[selected]') : js(e, '[aria-selected="true"]');
}
function Gb(e) {
	return be(e, ['none', 'presentation']);
}
function zb(e) {
	return Qd(e);
}
function Kb(e) {
	return be(e, [
		'button',
		'cell',
		'checkbox',
		'columnheader',
		'gridcell',
		'heading',
		'label',
		'legend',
		'link',
		'menuitem',
		'menuitemcheckbox',
		'menuitemradio',
		'option',
		'radio',
		'row',
		'rowheader',
		'switch',
		'tab',
		'tooltip',
		'treeitem'
	]);
}
function Yb(e) {
	return !1;
}
function Xb(e) {
	return Ir(e) || Mb(e) ? e.value : e.textContent || '';
}
function Fs(e) {
	var t = e.getPropertyValue('content');
	return /^["'].*["']$/.test(t) ? t.slice(1, -1) : '';
}
function Zd(e) {
	var t = H(e);
	return (
		t === 'button' ||
		(t === 'input' && e.getAttribute('type') !== 'hidden') ||
		t === 'meter' ||
		t === 'output' ||
		t === 'progress' ||
		t === 'select' ||
		t === 'textarea'
	);
}
function ef(e) {
	if (Zd(e)) return e;
	var t = null;
	return (
		e.childNodes.forEach(function (r) {
			if (t === null && B(r)) {
				var n = ef(r);
				n !== null && (t = n);
			}
		}),
		t
	);
}
function Qb(e) {
	if (e.control !== void 0) return e.control;
	var t = e.getAttribute('for');
	return t !== null ? e.ownerDocument.getElementById(t) : ef(e);
}
function Jb(e) {
	var t = e.labels;
	if (t === null) return t;
	if (t !== void 0) return ae(t);
	if (!Zd(e)) return null;
	var r = e.ownerDocument;
	return ae(r.querySelectorAll('label')).filter(function (n) {
		return Qb(n) === e;
	});
}
function Zb(e) {
	var t = e.assignedNodes();
	return t.length === 0 ? ae(e.childNodes) : t;
}
function tf(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
		r = new Cb(),
		n = Bb(e),
		a = t.compute,
		o = a === void 0 ? 'name' : a,
		i = t.computedStyleSupportsPseudoElements,
		s = i === void 0 ? t.getComputedStyle !== void 0 : i,
		l = t.getComputedStyle,
		u = l === void 0 ? n.getComputedStyle.bind(n) : l,
		c = t.hidden,
		d = c === void 0 ? !1 : c;
	function f(p, R) {
		var _ = '';
		if (B(p) && s) {
			var w = u(p, '::before'),
				P = Fs(w);
			_ = ''.concat(P, ' ').concat(_);
		}
		var v = Db(p) ? Zb(p) : ae(p.childNodes).concat(Kr(p, 'aria-owns'));
		if (
			(v.forEach(function (M) {
				var G = C(M, { isEmbeddedInLabel: R.isEmbeddedInLabel, isReferenced: !1, recursion: !0 }),
					D = B(M) ? u(M).getPropertyValue('display') : 'inline',
					z = D !== 'inline' ? ' ' : '';
				_ += ''.concat(z).concat(G).concat(z);
			}),
			B(p) && s)
		) {
			var b = u(p, '::after'),
				E = Fs(b);
			_ = ''.concat(_, ' ').concat(E);
		}
		return _.trim();
	}
	function m(p, R) {
		var _ = p.getAttributeNode(R);
		return _ !== null && !r.has(_) && _.value.trim() !== '' ? (r.add(_), _.value) : null;
	}
	function y(p) {
		return B(p) ? m(p, 'title') : null;
	}
	function g(p) {
		if (!B(p)) return null;
		if (Nb(p)) {
			r.add(p);
			for (var R = ae(p.childNodes), _ = 0; _ < R.length; _ += 1) {
				var w = R[_];
				if (kb(w)) return C(w, { isEmbeddedInLabel: !1, isReferenced: !1, recursion: !1 });
			}
		} else if (Ib(p)) {
			r.add(p);
			for (var P = ae(p.childNodes), v = 0; v < P.length; v += 1) {
				var b = P[v];
				if (Qd(b)) return C(b, { isEmbeddedInLabel: !1, isReferenced: !1, recursion: !1 });
			}
		} else if (jb(p)) {
			r.add(p);
			for (var E = ae(p.childNodes), M = 0; M < E.length; M += 1) {
				var G = E[M];
				if (Fb(G)) return G.textContent;
			}
			return null;
		} else if (H(p) === 'img' || H(p) === 'area') {
			var D = m(p, 'alt');
			if (D !== null) return D;
		} else if ($b(p)) {
			var z = m(p, 'label');
			if (z !== null) return z;
		}
		if (Ir(p) && (p.type === 'button' || p.type === 'submit' || p.type === 'reset')) {
			var K = m(p, 'value');
			if (K !== null) return K;
			if (p.type === 'submit') return 'Submit';
			if (p.type === 'reset') return 'Reset';
		}
		var S = Jb(p);
		if (S !== null && S.length !== 0)
			return (
				r.add(p),
				ae(S)
					.map(function (Mt) {
						return C(Mt, { isEmbeddedInLabel: !0, isReferenced: !1, recursion: !0 });
					})
					.filter(function (Mt) {
						return Mt.length > 0;
					})
					.join(' ')
			);
		if (Ir(p) && p.type === 'image') {
			var $ = m(p, 'alt');
			if ($ !== null) return $;
			var j = m(p, 'title');
			return j !== null ? j : 'Submit Query';
		}
		if (be(p, ['button'])) {
			var ve = f(p, { isEmbeddedInLabel: !1, isReferenced: !1 });
			if (ve !== '') return ve;
		}
		return null;
	}
	function C(p, R) {
		if (r.has(p)) return '';
		if (!d && Hb(p, u) && !R.isReferenced) return r.add(p), '';
		var _ = B(p) ? p.getAttributeNode('aria-labelledby') : null,
			w = _ !== null && !r.has(_) ? Kr(p, 'aria-labelledby') : [];
		if (o === 'name' && !R.isReferenced && w.length > 0)
			return (
				r.add(_),
				w
					.map(function (D) {
						return C(D, {
							isEmbeddedInLabel: R.isEmbeddedInLabel,
							isReferenced: !0,
							recursion: !1
						});
					})
					.join(' ')
			);
		var P = R.recursion && Vb(p) && o === 'name';
		if (!P) {
			var v = ((B(p) && p.getAttribute('aria-label')) || '').trim();
			if (v !== '' && o === 'name') return r.add(p), v;
			if (!Gb(p)) {
				var b = g(p);
				if (b !== null) return r.add(p), b;
			}
		}
		if (be(p, ['menu'])) return r.add(p), '';
		if (P || R.isEmbeddedInLabel || R.isReferenced) {
			if (be(p, ['combobox', 'listbox'])) {
				r.add(p);
				var E = Wb(p);
				return E.length === 0
					? Ir(p)
						? p.value
						: ''
					: ae(E)
							.map(function (D) {
								return C(D, {
									isEmbeddedInLabel: R.isEmbeddedInLabel,
									isReferenced: !1,
									recursion: !0
								});
							})
							.join(' ');
			}
			if (Jd(p, 'range'))
				return (
					r.add(p),
					p.hasAttribute('aria-valuetext')
						? p.getAttribute('aria-valuetext')
						: p.hasAttribute('aria-valuenow')
						? p.getAttribute('aria-valuenow')
						: p.getAttribute('value') || ''
				);
			if (be(p, ['textbox'])) return r.add(p), Xb(p);
		}
		if (Kb(p) || (B(p) && R.isReferenced) || zb(p) || Yb()) {
			var M = f(p, { isEmbeddedInLabel: R.isEmbeddedInLabel, isReferenced: !1 });
			if (M !== '') return r.add(p), M;
		}
		if (p.nodeType === p.TEXT_NODE) return r.add(p), p.textContent || '';
		if (R.recursion)
			return r.add(p), f(p, { isEmbeddedInLabel: R.isEmbeddedInLabel, isReferenced: !1 });
		var G = y(p);
		return G !== null ? (r.add(p), G) : (r.add(p), '');
	}
	return Ub(C(e, { isEmbeddedInLabel: !1, isReferenced: o === 'description', recursion: !1 }));
}
function Xt(e) {
	'@babel/helpers - typeof';
	return (
		(Xt =
			typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
				? function (t) {
						return typeof t;
				  }
				: function (t) {
						return t &&
							typeof Symbol == 'function' &&
							t.constructor === Symbol &&
							t !== Symbol.prototype
							? 'symbol'
							: typeof t;
				  }),
		Xt(e)
	);
}
function Us(e, t) {
	var r = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		t &&
			(n = n.filter(function (a) {
				return Object.getOwnPropertyDescriptor(e, a).enumerable;
			})),
			r.push.apply(r, n);
	}
	return r;
}
function Hs(e) {
	for (var t = 1; t < arguments.length; t++) {
		var r = arguments[t] != null ? arguments[t] : {};
		t % 2
			? Us(Object(r), !0).forEach(function (n) {
					eh(e, n, r[n]);
			  })
			: Object.getOwnPropertyDescriptors
			? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
			: Us(Object(r)).forEach(function (n) {
					Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
			  });
	}
	return e;
}
function eh(e, t, r) {
	return (
		(t = th(t)),
		t in e
			? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
			: (e[t] = r),
		e
	);
}
function th(e) {
	var t = rh(e, 'string');
	return Xt(t) === 'symbol' ? t : String(t);
}
function rh(e, t) {
	if (Xt(e) !== 'object' || e === null) return e;
	var r = e[Symbol.toPrimitive];
	if (r !== void 0) {
		var n = r.call(e, t || 'default');
		if (Xt(n) !== 'object') return n;
		throw new TypeError('@@toPrimitive must return a primitive value.');
	}
	return (t === 'string' ? String : Number)(e);
}
function rf(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
		r = Kr(e, 'aria-describedby')
			.map(function (a) {
				return tf(a, Hs(Hs({}, t), {}, { compute: 'description' }));
			})
			.join(' ');
	if (r === '') {
		var n = e.getAttribute('title');
		r = n === null ? '' : n;
	}
	return r;
}
function nh(e) {
	return be(e, [
		'caption',
		'code',
		'deletion',
		'emphasis',
		'generic',
		'insertion',
		'paragraph',
		'presentation',
		'strong',
		'subscript',
		'superscript'
	]);
}
function Wl(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
	return nh(e) ? '' : tf(e, t);
}
var oe = {},
	gn = {},
	Je = {},
	En = {};
Object.defineProperty(En, '__esModule', { value: !0 });
En.default = void 0;
function ah() {
	var e = this,
		t = 0,
		r = {
			'@@iterator': function () {
				return r;
			},
			next: function () {
				if (t < e.length) {
					var a = e[t];
					return (t = t + 1), { done: !1, value: a };
				} else return { done: !0 };
			}
		};
	return r;
}
var oh = ah;
En.default = oh;
Object.defineProperty(Je, '__esModule', { value: !0 });
Je.default = sh;
var ih = lh(En);
function lh(e) {
	return e && e.__esModule ? e : { default: e };
}
function Qi(e) {
	'@babel/helpers - typeof';
	return (
		(Qi =
			typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
				? function (t) {
						return typeof t;
				  }
				: function (t) {
						return t &&
							typeof Symbol == 'function' &&
							t.constructor === Symbol &&
							t !== Symbol.prototype
							? 'symbol'
							: typeof t;
				  }),
		Qi(e)
	);
}
function sh(e, t) {
	return (
		typeof Symbol == 'function' &&
			Qi(Symbol.iterator) === 'symbol' &&
			Object.defineProperty(e, Symbol.iterator, { value: ih.default.bind(t) }),
		e
	);
}
Object.defineProperty(gn, '__esModule', { value: !0 });
gn.default = void 0;
var uh = ch(Je);
function ch(e) {
	return e && e.__esModule ? e : { default: e };
}
function vi(e, t) {
	return ph(e) || fh(e, t) || nf(e, t) || dh();
}
function dh() {
	throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fh(e, t) {
	var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
	if (r != null) {
		var n = [],
			a = !0,
			o = !1,
			i,
			s;
		try {
			for (
				r = r.call(e);
				!(a = (i = r.next()).done) && (n.push(i.value), !(t && n.length === t));
				a = !0
			);
		} catch (l) {
			(o = !0), (s = l);
		} finally {
			try {
				!a && r.return != null && r.return();
			} finally {
				if (o) throw s;
			}
		}
		return n;
	}
}
function ph(e) {
	if (Array.isArray(e)) return e;
}
function vh(e, t) {
	var r = (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
	if (!r) {
		if (Array.isArray(e) || (r = nf(e)) || (t && e && typeof e.length == 'number')) {
			r && (e = r);
			var n = 0,
				a = function () {};
			return {
				s: a,
				n: function () {
					return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
				},
				e: function (u) {
					throw u;
				},
				f: a
			};
		}
		throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
	}
	var o = !0,
		i = !1,
		s;
	return {
		s: function () {
			r = r.call(e);
		},
		n: function () {
			var u = r.next();
			return (o = u.done), u;
		},
		e: function (u) {
			(i = !0), (s = u);
		},
		f: function () {
			try {
				!o && r.return != null && r.return();
			} finally {
				if (i) throw s;
			}
		}
	};
}
function nf(e, t) {
	if (e) {
		if (typeof e == 'string') return Vs(e, t);
		var r = Object.prototype.toString.call(e).slice(8, -1);
		if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
			return Array.from(e);
		if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Vs(e, t);
	}
}
function Vs(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
	return n;
}
var lt = [
		['aria-activedescendant', { type: 'id' }],
		['aria-atomic', { type: 'boolean' }],
		['aria-autocomplete', { type: 'token', values: ['inline', 'list', 'both', 'none'] }],
		['aria-busy', { type: 'boolean' }],
		['aria-checked', { type: 'tristate' }],
		['aria-colcount', { type: 'integer' }],
		['aria-colindex', { type: 'integer' }],
		['aria-colspan', { type: 'integer' }],
		['aria-controls', { type: 'idlist' }],
		[
			'aria-current',
			{ type: 'token', values: ['page', 'step', 'location', 'date', 'time', !0, !1] }
		],
		['aria-describedby', { type: 'idlist' }],
		['aria-details', { type: 'id' }],
		['aria-disabled', { type: 'boolean' }],
		[
			'aria-dropeffect',
			{ type: 'tokenlist', values: ['copy', 'execute', 'link', 'move', 'none', 'popup'] }
		],
		['aria-errormessage', { type: 'id' }],
		['aria-expanded', { type: 'boolean', allowundefined: !0 }],
		['aria-flowto', { type: 'idlist' }],
		['aria-grabbed', { type: 'boolean', allowundefined: !0 }],
		[
			'aria-haspopup',
			{ type: 'token', values: [!1, !0, 'menu', 'listbox', 'tree', 'grid', 'dialog'] }
		],
		['aria-hidden', { type: 'boolean', allowundefined: !0 }],
		['aria-invalid', { type: 'token', values: ['grammar', !1, 'spelling', !0] }],
		['aria-keyshortcuts', { type: 'string' }],
		['aria-label', { type: 'string' }],
		['aria-labelledby', { type: 'idlist' }],
		['aria-level', { type: 'integer' }],
		['aria-live', { type: 'token', values: ['assertive', 'off', 'polite'] }],
		['aria-modal', { type: 'boolean' }],
		['aria-multiline', { type: 'boolean' }],
		['aria-multiselectable', { type: 'boolean' }],
		['aria-orientation', { type: 'token', values: ['vertical', 'undefined', 'horizontal'] }],
		['aria-owns', { type: 'idlist' }],
		['aria-placeholder', { type: 'string' }],
		['aria-posinset', { type: 'integer' }],
		['aria-pressed', { type: 'tristate' }],
		['aria-readonly', { type: 'boolean' }],
		['aria-relevant', { type: 'tokenlist', values: ['additions', 'all', 'removals', 'text'] }],
		['aria-required', { type: 'boolean' }],
		['aria-roledescription', { type: 'string' }],
		['aria-rowcount', { type: 'integer' }],
		['aria-rowindex', { type: 'integer' }],
		['aria-rowspan', { type: 'integer' }],
		['aria-selected', { type: 'boolean', allowundefined: !0 }],
		['aria-setsize', { type: 'integer' }],
		['aria-sort', { type: 'token', values: ['ascending', 'descending', 'none', 'other'] }],
		['aria-valuemax', { type: 'number' }],
		['aria-valuemin', { type: 'number' }],
		['aria-valuenow', { type: 'number' }],
		['aria-valuetext', { type: 'string' }]
	],
	Ji = {
		entries: function () {
			return lt;
		},
		forEach: function (t) {
			var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
				n = vh(lt),
				a;
			try {
				for (n.s(); !(a = n.n()).done; ) {
					var o = vi(a.value, 2),
						i = o[0],
						s = o[1];
					t.call(r, s, i, lt);
				}
			} catch (l) {
				n.e(l);
			} finally {
				n.f();
			}
		},
		get: function (t) {
			var r = lt.find(function (n) {
				return n[0] === t;
			});
			return r && r[1];
		},
		has: function (t) {
			return !!Ji.get(t);
		},
		keys: function () {
			return lt.map(function (t) {
				var r = vi(t, 1),
					n = r[0];
				return n;
			});
		},
		values: function () {
			return lt.map(function (t) {
				var r = vi(t, 2),
					n = r[1];
				return n;
			});
		}
	},
	mh = (0, uh.default)(Ji, Ji.entries());
gn.default = mh;
var Rn = {};
Object.defineProperty(Rn, '__esModule', { value: !0 });
Rn.default = void 0;
var yh = bh(Je);
function bh(e) {
	return e && e.__esModule ? e : { default: e };
}
function mi(e, t) {
	return Eh(e) || gh(e, t) || af(e, t) || hh();
}
function hh() {
	throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gh(e, t) {
	var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
	if (r != null) {
		var n = [],
			a = !0,
			o = !1,
			i,
			s;
		try {
			for (
				r = r.call(e);
				!(a = (i = r.next()).done) && (n.push(i.value), !(t && n.length === t));
				a = !0
			);
		} catch (l) {
			(o = !0), (s = l);
		} finally {
			try {
				!a && r.return != null && r.return();
			} finally {
				if (o) throw s;
			}
		}
		return n;
	}
}
function Eh(e) {
	if (Array.isArray(e)) return e;
}
function Rh(e, t) {
	var r = (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
	if (!r) {
		if (Array.isArray(e) || (r = af(e)) || (t && e && typeof e.length == 'number')) {
			r && (e = r);
			var n = 0,
				a = function () {};
			return {
				s: a,
				n: function () {
					return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
				},
				e: function (u) {
					throw u;
				},
				f: a
			};
		}
		throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
	}
	var o = !0,
		i = !1,
		s;
	return {
		s: function () {
			r = r.call(e);
		},
		n: function () {
			var u = r.next();
			return (o = u.done), u;
		},
		e: function (u) {
			(i = !0), (s = u);
		},
		f: function () {
			try {
				!o && r.return != null && r.return();
			} finally {
				if (i) throw s;
			}
		}
	};
}
function af(e, t) {
	if (e) {
		if (typeof e == 'string') return Ws(e, t);
		var r = Object.prototype.toString.call(e).slice(8, -1);
		if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
			return Array.from(e);
		if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ws(e, t);
	}
}
function Ws(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
	return n;
}
var st = [
		['a', { reserved: !1 }],
		['abbr', { reserved: !1 }],
		['acronym', { reserved: !1 }],
		['address', { reserved: !1 }],
		['applet', { reserved: !1 }],
		['area', { reserved: !1 }],
		['article', { reserved: !1 }],
		['aside', { reserved: !1 }],
		['audio', { reserved: !1 }],
		['b', { reserved: !1 }],
		['base', { reserved: !0 }],
		['bdi', { reserved: !1 }],
		['bdo', { reserved: !1 }],
		['big', { reserved: !1 }],
		['blink', { reserved: !1 }],
		['blockquote', { reserved: !1 }],
		['body', { reserved: !1 }],
		['br', { reserved: !1 }],
		['button', { reserved: !1 }],
		['canvas', { reserved: !1 }],
		['caption', { reserved: !1 }],
		['center', { reserved: !1 }],
		['cite', { reserved: !1 }],
		['code', { reserved: !1 }],
		['col', { reserved: !0 }],
		['colgroup', { reserved: !0 }],
		['content', { reserved: !1 }],
		['data', { reserved: !1 }],
		['datalist', { reserved: !1 }],
		['dd', { reserved: !1 }],
		['del', { reserved: !1 }],
		['details', { reserved: !1 }],
		['dfn', { reserved: !1 }],
		['dialog', { reserved: !1 }],
		['dir', { reserved: !1 }],
		['div', { reserved: !1 }],
		['dl', { reserved: !1 }],
		['dt', { reserved: !1 }],
		['em', { reserved: !1 }],
		['embed', { reserved: !1 }],
		['fieldset', { reserved: !1 }],
		['figcaption', { reserved: !1 }],
		['figure', { reserved: !1 }],
		['font', { reserved: !1 }],
		['footer', { reserved: !1 }],
		['form', { reserved: !1 }],
		['frame', { reserved: !1 }],
		['frameset', { reserved: !1 }],
		['h1', { reserved: !1 }],
		['h2', { reserved: !1 }],
		['h3', { reserved: !1 }],
		['h4', { reserved: !1 }],
		['h5', { reserved: !1 }],
		['h6', { reserved: !1 }],
		['head', { reserved: !0 }],
		['header', { reserved: !1 }],
		['hgroup', { reserved: !1 }],
		['hr', { reserved: !1 }],
		['html', { reserved: !0 }],
		['i', { reserved: !1 }],
		['iframe', { reserved: !1 }],
		['img', { reserved: !1 }],
		['input', { reserved: !1 }],
		['ins', { reserved: !1 }],
		['kbd', { reserved: !1 }],
		['keygen', { reserved: !1 }],
		['label', { reserved: !1 }],
		['legend', { reserved: !1 }],
		['li', { reserved: !1 }],
		['link', { reserved: !0 }],
		['main', { reserved: !1 }],
		['map', { reserved: !1 }],
		['mark', { reserved: !1 }],
		['marquee', { reserved: !1 }],
		['menu', { reserved: !1 }],
		['menuitem', { reserved: !1 }],
		['meta', { reserved: !0 }],
		['meter', { reserved: !1 }],
		['nav', { reserved: !1 }],
		['noembed', { reserved: !0 }],
		['noscript', { reserved: !0 }],
		['object', { reserved: !1 }],
		['ol', { reserved: !1 }],
		['optgroup', { reserved: !1 }],
		['option', { reserved: !1 }],
		['output', { reserved: !1 }],
		['p', { reserved: !1 }],
		['param', { reserved: !0 }],
		['picture', { reserved: !0 }],
		['pre', { reserved: !1 }],
		['progress', { reserved: !1 }],
		['q', { reserved: !1 }],
		['rp', { reserved: !1 }],
		['rt', { reserved: !1 }],
		['rtc', { reserved: !1 }],
		['ruby', { reserved: !1 }],
		['s', { reserved: !1 }],
		['samp', { reserved: !1 }],
		['script', { reserved: !0 }],
		['section', { reserved: !1 }],
		['select', { reserved: !1 }],
		['small', { reserved: !1 }],
		['source', { reserved: !0 }],
		['spacer', { reserved: !1 }],
		['span', { reserved: !1 }],
		['strike', { reserved: !1 }],
		['strong', { reserved: !1 }],
		['style', { reserved: !0 }],
		['sub', { reserved: !1 }],
		['summary', { reserved: !1 }],
		['sup', { reserved: !1 }],
		['table', { reserved: !1 }],
		['tbody', { reserved: !1 }],
		['td', { reserved: !1 }],
		['textarea', { reserved: !1 }],
		['tfoot', { reserved: !1 }],
		['th', { reserved: !1 }],
		['thead', { reserved: !1 }],
		['time', { reserved: !1 }],
		['title', { reserved: !0 }],
		['tr', { reserved: !1 }],
		['track', { reserved: !0 }],
		['tt', { reserved: !1 }],
		['u', { reserved: !1 }],
		['ul', { reserved: !1 }],
		['var', { reserved: !1 }],
		['video', { reserved: !1 }],
		['wbr', { reserved: !1 }],
		['xmp', { reserved: !1 }]
	],
	Zi = {
		entries: function () {
			return st;
		},
		forEach: function (t) {
			var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
				n = Rh(st),
				a;
			try {
				for (n.s(); !(a = n.n()).done; ) {
					var o = mi(a.value, 2),
						i = o[0],
						s = o[1];
					t.call(r, s, i, st);
				}
			} catch (l) {
				n.e(l);
			} finally {
				n.f();
			}
		},
		get: function (t) {
			var r = st.find(function (n) {
				return n[0] === t;
			});
			return r && r[1];
		},
		has: function (t) {
			return !!Zi.get(t);
		},
		keys: function () {
			return st.map(function (t) {
				var r = mi(t, 1),
					n = r[0];
				return n;
			});
		},
		values: function () {
			return st.map(function (t) {
				var r = mi(t, 2),
					n = r[1];
				return n;
			});
		}
	},
	_h = (0, yh.default)(Zi, Zi.entries());
Rn.default = _h;
var At = {},
	_n = {},
	wn = {};
Object.defineProperty(wn, '__esModule', { value: !0 });
wn.default = void 0;
var wh = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{ concept: { name: 'menuitem' }, module: 'HTML' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'widget']]
	},
	Ch = wh;
wn.default = Ch;
var Cn = {};
Object.defineProperty(Cn, '__esModule', { value: !0 });
Cn.default = void 0;
var Ph = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: { 'aria-activedescendant': null, 'aria-disabled': null },
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'widget']]
	},
	Sh = Ph;
Cn.default = Sh;
var Pn = {};
Object.defineProperty(Pn, '__esModule', { value: !0 });
Pn.default = void 0;
var Th = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: { 'aria-disabled': null },
		relatedConcepts: [{ concept: { name: 'input' }, module: 'XForms' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'widget']]
	},
	Oh = Th;
Pn.default = Oh;
var Sn = {};
Object.defineProperty(Sn, '__esModule', { value: !0 });
Sn.default = void 0;
var Ah = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']]
	},
	xh = Ah;
Sn.default = xh;
var Tn = {};
Object.defineProperty(Tn, '__esModule', { value: !0 });
Tn.default = void 0;
var $h = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: { 'aria-valuemax': null, 'aria-valuemin': null, 'aria-valuenow': null },
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure']]
	},
	qh = $h;
Tn.default = qh;
var On = {};
Object.defineProperty(On, '__esModule', { value: !0 });
On.default = void 0;
var Ih = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: [],
		prohibitedProps: [],
		props: {
			'aria-atomic': null,
			'aria-busy': null,
			'aria-controls': null,
			'aria-current': null,
			'aria-describedby': null,
			'aria-details': null,
			'aria-dropeffect': null,
			'aria-flowto': null,
			'aria-grabbed': null,
			'aria-hidden': null,
			'aria-keyshortcuts': null,
			'aria-label': null,
			'aria-labelledby': null,
			'aria-live': null,
			'aria-owns': null,
			'aria-relevant': null,
			'aria-roledescription': null
		},
		relatedConcepts: [
			{ concept: { name: 'rel' }, module: 'HTML' },
			{ concept: { name: 'role' }, module: 'XHTML' },
			{ concept: { name: 'type' }, module: 'Dublin Core' }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: []
	},
	Mh = Ih;
On.default = Mh;
var An = {};
Object.defineProperty(An, '__esModule', { value: !0 });
An.default = void 0;
var Bh = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: [],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [
			{ concept: { name: 'frontmatter' }, module: 'DTB' },
			{ concept: { name: 'level' }, module: 'DTB' },
			{ concept: { name: 'level' }, module: 'SMIL' }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure']]
	},
	Nh = Bh;
An.default = Nh;
var xn = {};
Object.defineProperty(xn, '__esModule', { value: !0 });
xn.default = void 0;
var kh = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure']]
	},
	Dh = kh;
xn.default = Dh;
var $n = {};
Object.defineProperty($n, '__esModule', { value: !0 });
$n.default = void 0;
var Lh = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: { 'aria-orientation': null },
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [
			['roletype', 'widget', 'composite'],
			['roletype', 'structure', 'section', 'group']
		]
	},
	jh = Lh;
$n.default = jh;
var qn = {};
Object.defineProperty(qn, '__esModule', { value: !0 });
qn.default = void 0;
var Fh = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: [],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype']]
	},
	Uh = Fh;
qn.default = Uh;
var In = {};
Object.defineProperty(In, '__esModule', { value: !0 });
In.default = void 0;
var Hh = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: [],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype']]
	},
	Vh = Hh;
In.default = Vh;
var Mn = {};
Object.defineProperty(Mn, '__esModule', { value: !0 });
Mn.default = void 0;
var Wh = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: { 'aria-modal': null },
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype']]
	},
	Gh = Wh;
Mn.default = Gh;
Object.defineProperty(_n, '__esModule', { value: !0 });
_n.default = void 0;
var zh = Z(wn),
	Kh = Z(Cn),
	Yh = Z(Pn),
	Xh = Z(Sn),
	Qh = Z(Tn),
	Jh = Z(On),
	Zh = Z(An),
	eg = Z(xn),
	tg = Z($n),
	rg = Z(qn),
	ng = Z(In),
	ag = Z(Mn);
function Z(e) {
	return e && e.__esModule ? e : { default: e };
}
var og = [
		['command', zh.default],
		['composite', Kh.default],
		['input', Yh.default],
		['landmark', Xh.default],
		['range', Qh.default],
		['roletype', Jh.default],
		['section', Zh.default],
		['sectionhead', eg.default],
		['select', tg.default],
		['structure', rg.default],
		['widget', ng.default],
		['window', ag.default]
	],
	ig = og;
_n.default = ig;
var Bn = {},
	Nn = {};
Object.defineProperty(Nn, '__esModule', { value: !0 });
Nn.default = void 0;
var lg = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: { 'aria-atomic': 'true', 'aria-live': 'assertive' },
		relatedConcepts: [{ concept: { name: 'alert' }, module: 'XForms' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']]
	},
	sg = lg;
Nn.default = sg;
var kn = {};
Object.defineProperty(kn, '__esModule', { value: !0 });
kn.default = void 0;
var ug = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{ concept: { name: 'alert' }, module: 'XForms' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [
			['roletype', 'structure', 'section', 'alert'],
			['roletype', 'window', 'dialog']
		]
	},
	cg = ug;
kn.default = cg;
var Dn = {};
Object.defineProperty(Dn, '__esModule', { value: !0 });
Dn.default = void 0;
var dg = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-activedescendant': null,
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null
		},
		relatedConcepts: [{ concept: { name: 'Device Independence Delivery Unit' } }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure']]
	},
	fg = dg;
Dn.default = fg;
var Ln = {};
Object.defineProperty(Ln, '__esModule', { value: !0 });
Ln.default = void 0;
var pg = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: { 'aria-posinset': null, 'aria-setsize': null },
		relatedConcepts: [{ concept: { name: 'article' }, module: 'HTML' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'document']]
	},
	vg = pg;
Ln.default = vg;
var jn = {};
Object.defineProperty(jn, '__esModule', { value: !0 });
jn.default = void 0;
var mg = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [
			{
				concept: { constraints: ['direct descendant of document'], name: 'header' },
				module: 'HTML'
			}
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']]
	},
	yg = mg;
jn.default = yg;
var Fn = {};
Object.defineProperty(Fn, '__esModule', { value: !0 });
Fn.default = void 0;
var bg = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']]
	},
	hg = bg;
Fn.default = hg;
var Un = {};
Object.defineProperty(Un, '__esModule', { value: !0 });
Un.default = void 0;
var gg = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-pressed': null
		},
		relatedConcepts: [
			{
				concept: {
					attributes: [
						{ constraints: ['set'], name: 'aria-pressed' },
						{ name: 'type', value: 'checkbox' }
					],
					name: 'input'
				},
				module: 'HTML'
			},
			{
				concept: { attributes: [{ name: 'aria-expanded', value: 'false' }], name: 'summary' },
				module: 'HTML'
			},
			{
				concept: {
					attributes: [{ name: 'aria-expanded', value: 'true' }],
					constraints: ['direct descendant of details element with the open attribute defined'],
					name: 'summary'
				},
				module: 'HTML'
			},
			{
				concept: { attributes: [{ name: 'type', value: 'button' }], name: 'input' },
				module: 'HTML'
			},
			{
				concept: { attributes: [{ name: 'type', value: 'image' }], name: 'input' },
				module: 'HTML'
			},
			{
				concept: { attributes: [{ name: 'type', value: 'reset' }], name: 'input' },
				module: 'HTML'
			},
			{
				concept: { attributes: [{ name: 'type', value: 'submit' }], name: 'input' },
				module: 'HTML'
			},
			{ concept: { name: 'button' }, module: 'HTML' },
			{ concept: { name: 'trigger' }, module: 'XForms' }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'widget', 'command']]
	},
	Eg = gg;
Un.default = Eg;
var Hn = {};
Object.defineProperty(Hn, '__esModule', { value: !0 });
Hn.default = void 0;
var Rg = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['prohibited'],
		prohibitedProps: ['aria-label', 'aria-labelledby'],
		props: {},
		relatedConcepts: [],
		requireContextRole: ['figure', 'grid', 'table'],
		requiredContextRole: ['figure', 'grid', 'table'],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']]
	},
	_g = Rg;
Hn.default = _g;
var Vn = {};
Object.defineProperty(Vn, '__esModule', { value: !0 });
Vn.default = void 0;
var wg = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: {
			'aria-colindex': null,
			'aria-colspan': null,
			'aria-rowindex': null,
			'aria-rowspan': null
		},
		relatedConcepts: [
			{ concept: { constraints: ['descendant of table'], name: 'td' }, module: 'HTML' }
		],
		requireContextRole: ['row'],
		requiredContextRole: ['row'],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']]
	},
	Cg = wg;
Vn.default = Cg;
var Wn = {};
Object.defineProperty(Wn, '__esModule', { value: !0 });
Wn.default = void 0;
var Pg = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: {
			'aria-checked': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-invalid': null,
			'aria-readonly': null,
			'aria-required': null
		},
		relatedConcepts: [
			{
				concept: { attributes: [{ name: 'type', value: 'checkbox' }], name: 'input' },
				module: 'HTML'
			},
			{ concept: { name: 'option' }, module: 'ARIA' }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: { 'aria-checked': null },
		superClass: [['roletype', 'widget', 'input']]
	},
	Sg = Pg;
Wn.default = Sg;
var Gn = {};
Object.defineProperty(Gn, '__esModule', { value: !0 });
Gn.default = void 0;
var Tg = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['prohibited'],
		prohibitedProps: ['aria-label', 'aria-labelledby'],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']]
	},
	Og = Tg;
Gn.default = Og;
var zn = {};
Object.defineProperty(zn, '__esModule', { value: !0 });
zn.default = void 0;
var Ag = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: { 'aria-sort': null },
		relatedConcepts: [
			{ attributes: [{ name: 'scope', value: 'col' }], concept: { name: 'th' }, module: 'HTML' }
		],
		requireContextRole: ['row'],
		requiredContextRole: ['row'],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [
			['roletype', 'structure', 'section', 'cell'],
			['roletype', 'structure', 'section', 'cell', 'gridcell'],
			['roletype', 'widget', 'gridcell'],
			['roletype', 'structure', 'sectionhead']
		]
	},
	xg = Ag;
zn.default = xg;
var Kn = {};
Object.defineProperty(Kn, '__esModule', { value: !0 });
Kn.default = void 0;
var $g = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-activedescendant': null,
			'aria-autocomplete': null,
			'aria-errormessage': null,
			'aria-invalid': null,
			'aria-readonly': null,
			'aria-required': null,
			'aria-expanded': 'false',
			'aria-haspopup': 'listbox'
		},
		relatedConcepts: [
			{
				concept: {
					attributes: [
						{ constraints: ['set'], name: 'list' },
						{ name: 'type', value: 'email' }
					],
					name: 'input'
				},
				module: 'HTML'
			},
			{
				concept: {
					attributes: [
						{ constraints: ['set'], name: 'list' },
						{ name: 'type', value: 'search' }
					],
					name: 'input'
				},
				module: 'HTML'
			},
			{
				concept: {
					attributes: [
						{ constraints: ['set'], name: 'list' },
						{ name: 'type', value: 'tel' }
					],
					name: 'input'
				},
				module: 'HTML'
			},
			{
				concept: {
					attributes: [
						{ constraints: ['set'], name: 'list' },
						{ name: 'type', value: 'text' }
					],
					name: 'input'
				},
				module: 'HTML'
			},
			{
				concept: {
					attributes: [
						{ constraints: ['set'], name: 'list' },
						{ name: 'type', value: 'url' }
					],
					name: 'input'
				},
				module: 'HTML'
			},
			{
				concept: {
					attributes: [
						{ constraints: ['set'], name: 'list' },
						{ name: 'type', value: 'url' }
					],
					name: 'input'
				},
				module: 'HTML'
			},
			{
				concept: {
					attributes: [
						{ constraints: ['undefined'], name: 'multiple' },
						{ constraints: ['undefined'], name: 'size' }
					],
					name: 'select'
				},
				module: 'HTML'
			},
			{
				concept: {
					attributes: [
						{ constraints: ['undefined'], name: 'multiple' },
						{ name: 'size', value: 1 }
					],
					name: 'select'
				},
				module: 'HTML'
			},
			{ concept: { name: 'select' }, module: 'XForms' }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: { 'aria-controls': null, 'aria-expanded': 'false' },
		superClass: [['roletype', 'widget', 'input']]
	},
	qg = $g;
Kn.default = qg;
var Yn = {};
Object.defineProperty(Yn, '__esModule', { value: !0 });
Yn.default = void 0;
var Ig = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{ concept: { name: 'aside' }, module: 'HTML' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']]
	},
	Mg = Ig;
Yn.default = Mg;
var Xn = {};
Object.defineProperty(Xn, '__esModule', { value: !0 });
Xn.default = void 0;
var Bg = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [
			{
				concept: { constraints: ['direct descendant of document'], name: 'footer' },
				module: 'HTML'
			}
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']]
	},
	Ng = Bg;
Xn.default = Ng;
var Qn = {};
Object.defineProperty(Qn, '__esModule', { value: !0 });
Qn.default = void 0;
var kg = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{ concept: { name: 'dd' }, module: 'HTML' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']]
	},
	Dg = kg;
Qn.default = Dg;
var Jn = {};
Object.defineProperty(Jn, '__esModule', { value: !0 });
Jn.default = void 0;
var Lg = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['prohibited'],
		prohibitedProps: ['aria-label', 'aria-labelledby'],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']]
	},
	jg = Lg;
Jn.default = jg;
var Zn = {};
Object.defineProperty(Zn, '__esModule', { value: !0 });
Zn.default = void 0;
var Fg = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{ concept: { name: 'dialog' }, module: 'HTML' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'window']]
	},
	Ug = Fg;
Zn.default = Ug;
var ea = {};
Object.defineProperty(ea, '__esModule', { value: !0 });
ea.default = void 0;
var Hg = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{ module: 'DAISY Guide' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'list']]
	},
	Vg = Hg;
ea.default = Vg;
var ta = {};
Object.defineProperty(ta, '__esModule', { value: !0 });
ta.default = void 0;
var Wg = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [
			{ concept: { name: 'Device Independence Delivery Unit' } },
			{ concept: { name: 'body' }, module: 'HTML' }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure']]
	},
	Gg = Wg;
ta.default = Gg;
var ra = {};
Object.defineProperty(ra, '__esModule', { value: !0 });
ra.default = void 0;
var zg = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['prohibited'],
		prohibitedProps: ['aria-label', 'aria-labelledby'],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']]
	},
	Kg = zg;
ra.default = Kg;
var na = {};
Object.defineProperty(na, '__esModule', { value: !0 });
na.default = void 0;
var Yg = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [['article']],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'list']]
	},
	Xg = Yg;
na.default = Xg;
var aa = {};
Object.defineProperty(aa, '__esModule', { value: !0 });
aa.default = void 0;
var Qg = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{ concept: { name: 'figure' }, module: 'HTML' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']]
	},
	Jg = Qg;
aa.default = Jg;
var oa = {};
Object.defineProperty(oa, '__esModule', { value: !0 });
oa.default = void 0;
var Zg = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [
			{
				concept: { attributes: [{ constraints: ['set'], name: 'aria-label' }], name: 'form' },
				module: 'HTML'
			},
			{
				concept: { attributes: [{ constraints: ['set'], name: 'aria-labelledby' }], name: 'form' },
				module: 'HTML'
			},
			{
				concept: { attributes: [{ constraints: ['set'], name: 'name' }], name: 'form' },
				module: 'HTML'
			}
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']]
	},
	eE = Zg;
oa.default = eE;
var ia = {};
Object.defineProperty(ia, '__esModule', { value: !0 });
ia.default = void 0;
var tE = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['prohibited'],
		prohibitedProps: ['aria-label', 'aria-labelledby'],
		props: {},
		relatedConcepts: [
			{ concept: { name: 'span' }, module: 'HTML' },
			{ concept: { name: 'div' }, module: 'HTML' }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure']]
	},
	rE = tE;
ia.default = rE;
var la = {};
Object.defineProperty(la, '__esModule', { value: !0 });
la.default = void 0;
var nE = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: { 'aria-multiselectable': null, 'aria-readonly': null },
		relatedConcepts: [
			{ concept: { attributes: [{ name: 'role', value: 'grid' }], name: 'table' }, module: 'HTML' }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [['row'], ['row', 'rowgroup']],
		requiredProps: {},
		superClass: [
			['roletype', 'widget', 'composite'],
			['roletype', 'structure', 'section', 'table']
		]
	},
	aE = nE;
la.default = aE;
var sa = {};
Object.defineProperty(sa, '__esModule', { value: !0 });
sa.default = void 0;
var oE = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null,
			'aria-readonly': null,
			'aria-required': null,
			'aria-selected': null
		},
		relatedConcepts: [
			{ concept: { attributes: [{ name: 'role', value: 'gridcell' }], name: 'td' }, module: 'HTML' }
		],
		requireContextRole: ['row'],
		requiredContextRole: ['row'],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [
			['roletype', 'structure', 'section', 'cell'],
			['roletype', 'widget']
		]
	},
	iE = oE;
sa.default = iE;
var ua = {};
Object.defineProperty(ua, '__esModule', { value: !0 });
ua.default = void 0;
var lE = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: { 'aria-activedescendant': null, 'aria-disabled': null },
		relatedConcepts: [
			{ concept: { name: 'details' }, module: 'HTML' },
			{ concept: { name: 'fieldset' }, module: 'HTML' },
			{ concept: { name: 'optgroup' }, module: 'HTML' }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']]
	},
	sE = lE;
ua.default = sE;
var ca = {};
Object.defineProperty(ca, '__esModule', { value: !0 });
ca.default = void 0;
var uE = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: { 'aria-level': '2' },
		relatedConcepts: [
			{ concept: { name: 'h1' }, module: 'HTML' },
			{ concept: { name: 'h2' }, module: 'HTML' },
			{ concept: { name: 'h3' }, module: 'HTML' },
			{ concept: { name: 'h4' }, module: 'HTML' },
			{ concept: { name: 'h5' }, module: 'HTML' },
			{ concept: { name: 'h6' }, module: 'HTML' }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: { 'aria-level': '2' },
		superClass: [['roletype', 'structure', 'sectionhead']]
	},
	cE = uE;
ca.default = cE;
var da = {};
Object.defineProperty(da, '__esModule', { value: !0 });
da.default = void 0;
var dE = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [
			{
				concept: { attributes: [{ constraints: ['set'], name: 'alt' }], name: 'img' },
				module: 'HTML'
			},
			{
				concept: { attributes: [{ constraints: ['undefined'], name: 'alt' }], name: 'img' },
				module: 'HTML'
			},
			{ concept: { name: 'imggroup' }, module: 'DTB' }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']]
	},
	fE = dE;
da.default = fE;
var fa = {};
Object.defineProperty(fa, '__esModule', { value: !0 });
fa.default = void 0;
var pE = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['prohibited'],
		prohibitedProps: ['aria-label', 'aria-labelledby'],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']]
	},
	vE = pE;
fa.default = vE;
var pa = {};
Object.defineProperty(pa, '__esModule', { value: !0 });
pa.default = void 0;
var mE = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: { 'aria-disabled': null, 'aria-expanded': null, 'aria-haspopup': null },
		relatedConcepts: [
			{ concept: { attributes: [{ name: 'href' }], name: 'a' }, module: 'HTML' },
			{ concept: { attributes: [{ name: 'href' }], name: 'area' }, module: 'HTML' },
			{ concept: { attributes: [{ name: 'href' }], name: 'link' }, module: 'HTML' }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'widget', 'command']]
	},
	yE = mE;
pa.default = yE;
var va = {};
Object.defineProperty(va, '__esModule', { value: !0 });
va.default = void 0;
var bE = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [
			{ concept: { name: 'menu' }, module: 'HTML' },
			{ concept: { name: 'ol' }, module: 'HTML' },
			{ concept: { name: 'ul' }, module: 'HTML' }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [['listitem']],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']]
	},
	hE = bE;
va.default = hE;
var ma = {};
Object.defineProperty(ma, '__esModule', { value: !0 });
ma.default = void 0;
var gE = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-invalid': null,
			'aria-multiselectable': null,
			'aria-readonly': null,
			'aria-required': null,
			'aria-orientation': 'vertical'
		},
		relatedConcepts: [
			{
				concept: {
					attributes: [{ constraints: ['>1'], name: 'size' }, { name: 'multiple' }],
					name: 'select'
				},
				module: 'HTML'
			},
			{
				concept: { attributes: [{ constraints: ['>1'], name: 'size' }], name: 'select' },
				module: 'HTML'
			},
			{ concept: { attributes: [{ name: 'multiple' }], name: 'select' }, module: 'HTML' },
			{ concept: { name: 'datalist' }, module: 'HTML' },
			{ concept: { name: 'list' }, module: 'ARIA' },
			{ concept: { name: 'select' }, module: 'XForms' }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [['option', 'group'], ['option']],
		requiredProps: {},
		superClass: [
			['roletype', 'widget', 'composite', 'select'],
			['roletype', 'structure', 'section', 'group', 'select']
		]
	},
	EE = gE;
ma.default = EE;
var ya = {};
Object.defineProperty(ya, '__esModule', { value: !0 });
ya.default = void 0;
var RE = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: { 'aria-level': null, 'aria-posinset': null, 'aria-setsize': null },
		relatedConcepts: [
			{
				concept: { constraints: ['direct descendant of ol, ul or menu'], name: 'li' },
				module: 'HTML'
			},
			{ concept: { name: 'item' }, module: 'XForms' }
		],
		requireContextRole: ['directory', 'list'],
		requiredContextRole: ['directory', 'list'],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']]
	},
	_E = RE;
ya.default = _E;
var ba = {};
Object.defineProperty(ba, '__esModule', { value: !0 });
ba.default = void 0;
var wE = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: { 'aria-live': 'polite' },
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']]
	},
	CE = wE;
ba.default = CE;
var ha = {};
Object.defineProperty(ha, '__esModule', { value: !0 });
ha.default = void 0;
var PE = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{ concept: { name: 'main' }, module: 'HTML' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']]
	},
	SE = PE;
ha.default = SE;
var ga = {};
Object.defineProperty(ga, '__esModule', { value: !0 });
ga.default = void 0;
var TE = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']]
	},
	OE = TE;
ga.default = OE;
var Ea = {};
Object.defineProperty(Ea, '__esModule', { value: !0 });
Ea.default = void 0;
var AE = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{ concept: { name: 'math' }, module: 'HTML' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']]
	},
	xE = AE;
Ea.default = xE;
var Ra = {};
Object.defineProperty(Ra, '__esModule', { value: !0 });
Ra.default = void 0;
var $E = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: { 'aria-orientation': 'vertical' },
		relatedConcepts: [
			{ concept: { name: 'MENU' }, module: 'JAPI' },
			{ concept: { name: 'list' }, module: 'ARIA' },
			{ concept: { name: 'select' }, module: 'XForms' },
			{ concept: { name: 'sidebar' }, module: 'DTB' }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [
			['menuitem', 'group'],
			['menuitemradio', 'group'],
			['menuitemcheckbox', 'group'],
			['menuitem'],
			['menuitemcheckbox'],
			['menuitemradio']
		],
		requiredProps: {},
		superClass: [
			['roletype', 'widget', 'composite', 'select'],
			['roletype', 'structure', 'section', 'group', 'select']
		]
	},
	qE = $E;
Ra.default = qE;
var _a = {};
Object.defineProperty(_a, '__esModule', { value: !0 });
_a.default = void 0;
var IE = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: { 'aria-orientation': 'horizontal' },
		relatedConcepts: [{ concept: { name: 'toolbar' }, module: 'ARIA' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [
			['menuitem', 'group'],
			['menuitemradio', 'group'],
			['menuitemcheckbox', 'group'],
			['menuitem'],
			['menuitemcheckbox'],
			['menuitemradio']
		],
		requiredProps: {},
		superClass: [
			['roletype', 'widget', 'composite', 'select', 'menu'],
			['roletype', 'structure', 'section', 'group', 'select', 'menu']
		]
	},
	ME = IE;
_a.default = ME;
var wa = {};
Object.defineProperty(wa, '__esModule', { value: !0 });
wa.default = void 0;
var BE = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-posinset': null,
			'aria-setsize': null
		},
		relatedConcepts: [
			{ concept: { name: 'MENU_ITEM' }, module: 'JAPI' },
			{ concept: { name: 'listitem' }, module: 'ARIA' },
			{ concept: { name: 'menuitem' }, module: 'HTML' },
			{ concept: { name: 'option' }, module: 'ARIA' }
		],
		requireContextRole: ['group', 'menu', 'menubar'],
		requiredContextRole: ['group', 'menu', 'menubar'],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'widget', 'command']]
	},
	NE = BE;
wa.default = NE;
var Ca = {};
Object.defineProperty(Ca, '__esModule', { value: !0 });
Ca.default = void 0;
var kE = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{ concept: { name: 'menuitem' }, module: 'ARIA' }],
		requireContextRole: ['group', 'menu', 'menubar'],
		requiredContextRole: ['group', 'menu', 'menubar'],
		requiredOwnedElements: [],
		requiredProps: { 'aria-checked': null },
		superClass: [
			['roletype', 'widget', 'input', 'checkbox'],
			['roletype', 'widget', 'command', 'menuitem']
		]
	},
	DE = kE;
Ca.default = DE;
var Pa = {};
Object.defineProperty(Pa, '__esModule', { value: !0 });
Pa.default = void 0;
var LE = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{ concept: { name: 'menuitem' }, module: 'ARIA' }],
		requireContextRole: ['group', 'menu', 'menubar'],
		requiredContextRole: ['group', 'menu', 'menubar'],
		requiredOwnedElements: [],
		requiredProps: { 'aria-checked': null },
		superClass: [
			['roletype', 'widget', 'input', 'checkbox', 'menuitemcheckbox'],
			['roletype', 'widget', 'command', 'menuitem', 'menuitemcheckbox'],
			['roletype', 'widget', 'input', 'radio']
		]
	},
	jE = LE;
Pa.default = jE;
var Sa = {};
Object.defineProperty(Sa, '__esModule', { value: !0 });
Sa.default = void 0;
var FE = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: { 'aria-valuetext': null, 'aria-valuemax': '100', 'aria-valuemin': '0' },
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: { 'aria-valuenow': null },
		superClass: [['roletype', 'structure', 'range']]
	},
	UE = FE;
Sa.default = UE;
var Ta = {};
Object.defineProperty(Ta, '__esModule', { value: !0 });
Ta.default = void 0;
var HE = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{ concept: { name: 'nav' }, module: 'HTML' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']]
	},
	VE = HE;
Ta.default = VE;
var Oa = {};
Object.defineProperty(Oa, '__esModule', { value: !0 });
Oa.default = void 0;
var WE = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: [],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: []
	},
	GE = WE;
Oa.default = GE;
var Aa = {};
Object.defineProperty(Aa, '__esModule', { value: !0 });
Aa.default = void 0;
var zE = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']]
	},
	KE = zE;
Aa.default = KE;
var xa = {};
Object.defineProperty(xa, '__esModule', { value: !0 });
xa.default = void 0;
var YE = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: {
			'aria-checked': null,
			'aria-posinset': null,
			'aria-setsize': null,
			'aria-selected': 'false'
		},
		relatedConcepts: [
			{ concept: { name: 'item' }, module: 'XForms' },
			{ concept: { name: 'listitem' }, module: 'ARIA' },
			{ concept: { name: 'option' }, module: 'HTML' }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: { 'aria-selected': 'false' },
		superClass: [['roletype', 'widget', 'input']]
	},
	XE = YE;
xa.default = XE;
var $a = {};
Object.defineProperty($a, '__esModule', { value: !0 });
$a.default = void 0;
var QE = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['prohibited'],
		prohibitedProps: ['aria-label', 'aria-labelledby'],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']]
	},
	JE = QE;
$a.default = JE;
var qa = {};
Object.defineProperty(qa, '__esModule', { value: !0 });
qa.default = void 0;
var ZE = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['prohibited'],
		prohibitedProps: ['aria-label', 'aria-labelledby'],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure']]
	},
	eR = ZE;
qa.default = eR;
var Ia = {};
Object.defineProperty(Ia, '__esModule', { value: !0 });
Ia.default = void 0;
var tR = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: { 'aria-valuetext': null },
		relatedConcepts: [
			{ concept: { name: 'progress' }, module: 'HTML' },
			{ concept: { name: 'status' }, module: 'ARIA' }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [
			['roletype', 'structure', 'range'],
			['roletype', 'widget']
		]
	},
	rR = tR;
Ia.default = rR;
var Ma = {};
Object.defineProperty(Ma, '__esModule', { value: !0 });
Ma.default = void 0;
var nR = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: { 'aria-checked': null, 'aria-posinset': null, 'aria-setsize': null },
		relatedConcepts: [
			{ concept: { attributes: [{ name: 'type', value: 'radio' }], name: 'input' }, module: 'HTML' }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: { 'aria-checked': null },
		superClass: [['roletype', 'widget', 'input']]
	},
	aR = nR;
Ma.default = aR;
var Ba = {};
Object.defineProperty(Ba, '__esModule', { value: !0 });
Ba.default = void 0;
var oR = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-errormessage': null,
			'aria-invalid': null,
			'aria-readonly': null,
			'aria-required': null
		},
		relatedConcepts: [{ concept: { name: 'list' }, module: 'ARIA' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [['radio']],
		requiredProps: {},
		superClass: [
			['roletype', 'widget', 'composite', 'select'],
			['roletype', 'structure', 'section', 'group', 'select']
		]
	},
	iR = oR;
Ba.default = iR;
var Na = {};
Object.defineProperty(Na, '__esModule', { value: !0 });
Na.default = void 0;
var lR = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [
			{
				concept: { attributes: [{ constraints: ['set'], name: 'aria-label' }], name: 'section' },
				module: 'HTML'
			},
			{
				concept: {
					attributes: [{ constraints: ['set'], name: 'aria-labelledby' }],
					name: 'section'
				},
				module: 'HTML'
			},
			{ concept: { name: 'Device Independence Glossart perceivable unit' } },
			{ concept: { name: 'frame' }, module: 'HTML' }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']]
	},
	sR = lR;
Na.default = sR;
var ka = {};
Object.defineProperty(ka, '__esModule', { value: !0 });
ka.default = void 0;
var uR = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: {
			'aria-colindex': null,
			'aria-expanded': null,
			'aria-level': null,
			'aria-posinset': null,
			'aria-rowindex': null,
			'aria-selected': null,
			'aria-setsize': null
		},
		relatedConcepts: [{ concept: { name: 'tr' }, module: 'HTML' }],
		requireContextRole: ['grid', 'rowgroup', 'table', 'treegrid'],
		requiredContextRole: ['grid', 'rowgroup', 'table', 'treegrid'],
		requiredOwnedElements: [['cell'], ['columnheader'], ['gridcell'], ['rowheader']],
		requiredProps: {},
		superClass: [
			['roletype', 'structure', 'section', 'group'],
			['roletype', 'widget']
		]
	},
	cR = uR;
ka.default = cR;
var Da = {};
Object.defineProperty(Da, '__esModule', { value: !0 });
Da.default = void 0;
var dR = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [
			{ concept: { name: 'tbody' }, module: 'HTML' },
			{ concept: { name: 'tfoot' }, module: 'HTML' },
			{ concept: { name: 'thead' }, module: 'HTML' }
		],
		requireContextRole: ['grid', 'table', 'treegrid'],
		requiredContextRole: ['grid', 'table', 'treegrid'],
		requiredOwnedElements: [['row']],
		requiredProps: {},
		superClass: [['roletype', 'structure']]
	},
	fR = dR;
Da.default = fR;
var La = {};
Object.defineProperty(La, '__esModule', { value: !0 });
La.default = void 0;
var pR = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: { 'aria-sort': null },
		relatedConcepts: [
			{ concept: { attributes: [{ name: 'scope', value: 'row' }], name: 'th' }, module: 'HTML' },
			{
				concept: { attributes: [{ name: 'scope', value: 'rowgroup' }], name: 'th' },
				module: 'HTML'
			}
		],
		requireContextRole: ['row', 'rowgroup'],
		requiredContextRole: ['row', 'rowgroup'],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [
			['roletype', 'structure', 'section', 'cell'],
			['roletype', 'structure', 'section', 'cell', 'gridcell'],
			['roletype', 'widget', 'gridcell'],
			['roletype', 'structure', 'sectionhead']
		]
	},
	vR = pR;
La.default = vR;
var ja = {};
Object.defineProperty(ja, '__esModule', { value: !0 });
ja.default = void 0;
var mR = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-valuetext': null,
			'aria-orientation': 'vertical',
			'aria-valuemax': '100',
			'aria-valuemin': '0'
		},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: { 'aria-controls': null, 'aria-valuenow': null },
		superClass: [
			['roletype', 'structure', 'range'],
			['roletype', 'widget']
		]
	},
	yR = mR;
ja.default = yR;
var Fa = {};
Object.defineProperty(Fa, '__esModule', { value: !0 });
Fa.default = void 0;
var bR = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']]
	},
	hR = bR;
Fa.default = hR;
var Ua = {};
Object.defineProperty(Ua, '__esModule', { value: !0 });
Ua.default = void 0;
var gR = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [
			{
				concept: {
					attributes: [
						{ constraints: ['undefined'], name: 'list' },
						{ name: 'type', value: 'search' }
					],
					name: 'input'
				},
				module: 'HTML'
			}
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'widget', 'input', 'textbox']]
	},
	ER = gR;
Ua.default = ER;
var Ha = {};
Object.defineProperty(Ha, '__esModule', { value: !0 });
Ha.default = void 0;
var RR = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-orientation': 'horizontal',
			'aria-valuemax': '100',
			'aria-valuemin': '0',
			'aria-valuenow': null,
			'aria-valuetext': null
		},
		relatedConcepts: [{ concept: { name: 'hr' }, module: 'HTML' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure']]
	},
	_R = RR;
Ha.default = _R;
var Va = {};
Object.defineProperty(Va, '__esModule', { value: !0 });
Va.default = void 0;
var wR = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-errormessage': null,
			'aria-haspopup': null,
			'aria-invalid': null,
			'aria-readonly': null,
			'aria-valuetext': null,
			'aria-orientation': 'horizontal',
			'aria-valuemax': '100',
			'aria-valuemin': '0'
		},
		relatedConcepts: [
			{ concept: { attributes: [{ name: 'type', value: 'range' }], name: 'input' }, module: 'HTML' }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: { 'aria-valuenow': null },
		superClass: [
			['roletype', 'widget', 'input'],
			['roletype', 'structure', 'range']
		]
	},
	CR = wR;
Va.default = CR;
var Wa = {};
Object.defineProperty(Wa, '__esModule', { value: !0 });
Wa.default = void 0;
var PR = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-errormessage': null,
			'aria-invalid': null,
			'aria-readonly': null,
			'aria-required': null,
			'aria-valuetext': null,
			'aria-valuenow': '0'
		},
		relatedConcepts: [
			{
				concept: { attributes: [{ name: 'type', value: 'number' }], name: 'input' },
				module: 'HTML'
			}
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [
			['roletype', 'widget', 'composite'],
			['roletype', 'widget', 'input'],
			['roletype', 'structure', 'range']
		]
	},
	SR = PR;
Wa.default = SR;
var Ga = {};
Object.defineProperty(Ga, '__esModule', { value: !0 });
Ga.default = void 0;
var TR = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: { 'aria-atomic': 'true', 'aria-live': 'polite' },
		relatedConcepts: [{ concept: { name: 'output' }, module: 'HTML' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']]
	},
	OR = TR;
Ga.default = OR;
var za = {};
Object.defineProperty(za, '__esModule', { value: !0 });
za.default = void 0;
var AR = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['prohibited'],
		prohibitedProps: ['aria-label', 'aria-labelledby'],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']]
	},
	xR = AR;
za.default = xR;
var Ka = {};
Object.defineProperty(Ka, '__esModule', { value: !0 });
Ka.default = void 0;
var $R = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['prohibited'],
		prohibitedProps: ['aria-label', 'aria-labelledby'],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']]
	},
	qR = $R;
Ka.default = qR;
var Ya = {};
Object.defineProperty(Ya, '__esModule', { value: !0 });
Ya.default = void 0;
var IR = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['prohibited'],
		prohibitedProps: ['aria-label', 'aria-labelledby'],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']]
	},
	MR = IR;
Ya.default = MR;
var Xa = {};
Object.defineProperty(Xa, '__esModule', { value: !0 });
Xa.default = void 0;
var BR = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{ concept: { name: 'button' }, module: 'ARIA' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: { 'aria-checked': null },
		superClass: [['roletype', 'widget', 'input', 'checkbox']]
	},
	NR = BR;
Xa.default = NR;
var Qa = {};
Object.defineProperty(Qa, '__esModule', { value: !0 });
Qa.default = void 0;
var kR = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-posinset': null,
			'aria-setsize': null,
			'aria-selected': 'false'
		},
		relatedConcepts: [],
		requireContextRole: ['tablist'],
		requiredContextRole: ['tablist'],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [
			['roletype', 'structure', 'sectionhead'],
			['roletype', 'widget']
		]
	},
	DR = kR;
Qa.default = DR;
var Ja = {};
Object.defineProperty(Ja, '__esModule', { value: !0 });
Ja.default = void 0;
var LR = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: { 'aria-colcount': null, 'aria-rowcount': null },
		relatedConcepts: [{ concept: { name: 'table' }, module: 'HTML' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [['row'], ['row', 'rowgroup']],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']]
	},
	jR = LR;
Ja.default = jR;
var Za = {};
Object.defineProperty(Za, '__esModule', { value: !0 });
Za.default = void 0;
var FR = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: { 'aria-level': null, 'aria-multiselectable': null, 'aria-orientation': 'horizontal' },
		relatedConcepts: [{ module: 'DAISY', concept: { name: 'guide' } }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [['tab']],
		requiredProps: {},
		superClass: [['roletype', 'widget', 'composite']]
	},
	UR = FR;
Za.default = UR;
var eo = {};
Object.defineProperty(eo, '__esModule', { value: !0 });
eo.default = void 0;
var HR = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']]
	},
	VR = HR;
eo.default = VR;
var to = {};
Object.defineProperty(to, '__esModule', { value: !0 });
to.default = void 0;
var WR = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [
			{ concept: { name: 'dfn' }, module: 'HTML' },
			{ concept: { name: 'dt' }, module: 'HTML' }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']]
	},
	GR = WR;
to.default = GR;
var ro = {};
Object.defineProperty(ro, '__esModule', { value: !0 });
ro.default = void 0;
var zR = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-activedescendant': null,
			'aria-autocomplete': null,
			'aria-errormessage': null,
			'aria-haspopup': null,
			'aria-invalid': null,
			'aria-multiline': null,
			'aria-placeholder': null,
			'aria-readonly': null,
			'aria-required': null
		},
		relatedConcepts: [
			{
				concept: {
					attributes: [
						{ constraints: ['undefined'], name: 'type' },
						{ constraints: ['undefined'], name: 'list' }
					],
					name: 'input'
				},
				module: 'HTML'
			},
			{
				concept: {
					attributes: [
						{ constraints: ['undefined'], name: 'list' },
						{ name: 'type', value: 'email' }
					],
					name: 'input'
				},
				module: 'HTML'
			},
			{
				concept: {
					attributes: [
						{ constraints: ['undefined'], name: 'list' },
						{ name: 'type', value: 'tel' }
					],
					name: 'input'
				},
				module: 'HTML'
			},
			{
				concept: {
					attributes: [
						{ constraints: ['undefined'], name: 'list' },
						{ name: 'type', value: 'text' }
					],
					name: 'input'
				},
				module: 'HTML'
			},
			{
				concept: {
					attributes: [
						{ constraints: ['undefined'], name: 'list' },
						{ name: 'type', value: 'url' }
					],
					name: 'input'
				},
				module: 'HTML'
			},
			{ concept: { name: 'input' }, module: 'XForms' },
			{ concept: { name: 'textarea' }, module: 'HTML' }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'widget', 'input']]
	},
	KR = zR;
ro.default = KR;
var no = {};
Object.defineProperty(no, '__esModule', { value: !0 });
no.default = void 0;
var YR = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']]
	},
	XR = YR;
no.default = XR;
var ao = {};
Object.defineProperty(ao, '__esModule', { value: !0 });
ao.default = void 0;
var QR = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'status']]
	},
	JR = QR;
ao.default = JR;
var oo = {};
Object.defineProperty(oo, '__esModule', { value: !0 });
oo.default = void 0;
var ZR = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: { 'aria-orientation': 'horizontal' },
		relatedConcepts: [{ concept: { name: 'menubar' }, module: 'ARIA' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'group']]
	},
	e_ = ZR;
oo.default = e_;
var io = {};
Object.defineProperty(io, '__esModule', { value: !0 });
io.default = void 0;
var t_ = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']]
	},
	r_ = t_;
io.default = r_;
var lo = {};
Object.defineProperty(lo, '__esModule', { value: !0 });
lo.default = void 0;
var n_ = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-errormessage': null,
			'aria-invalid': null,
			'aria-multiselectable': null,
			'aria-required': null,
			'aria-orientation': 'vertical'
		},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [['treeitem', 'group'], ['treeitem']],
		requiredProps: {},
		superClass: [
			['roletype', 'widget', 'composite', 'select'],
			['roletype', 'structure', 'section', 'group', 'select']
		]
	},
	a_ = n_;
lo.default = a_;
var so = {};
Object.defineProperty(so, '__esModule', { value: !0 });
so.default = void 0;
var o_ = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [['row'], ['row', 'rowgroup']],
		requiredProps: {},
		superClass: [
			['roletype', 'widget', 'composite', 'grid'],
			['roletype', 'structure', 'section', 'table', 'grid'],
			['roletype', 'widget', 'composite', 'select', 'tree'],
			['roletype', 'structure', 'section', 'group', 'select', 'tree']
		]
	},
	i_ = o_;
so.default = i_;
var uo = {};
Object.defineProperty(uo, '__esModule', { value: !0 });
uo.default = void 0;
var l_ = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: { 'aria-expanded': null, 'aria-haspopup': null },
		relatedConcepts: [],
		requireContextRole: ['group', 'tree'],
		requiredContextRole: ['group', 'tree'],
		requiredOwnedElements: [],
		requiredProps: { 'aria-selected': null },
		superClass: [
			['roletype', 'structure', 'section', 'listitem'],
			['roletype', 'widget', 'input', 'option']
		]
	},
	s_ = l_;
uo.default = s_;
Object.defineProperty(Bn, '__esModule', { value: !0 });
Bn.default = void 0;
var u_ = h(Nn),
	c_ = h(kn),
	d_ = h(Dn),
	f_ = h(Ln),
	p_ = h(jn),
	v_ = h(Fn),
	m_ = h(Un),
	y_ = h(Hn),
	b_ = h(Vn),
	h_ = h(Wn),
	g_ = h(Gn),
	E_ = h(zn),
	R_ = h(Kn),
	__ = h(Yn),
	w_ = h(Xn),
	C_ = h(Qn),
	P_ = h(Jn),
	S_ = h(Zn),
	T_ = h(ea),
	O_ = h(ta),
	A_ = h(ra),
	x_ = h(na),
	$_ = h(aa),
	q_ = h(oa),
	I_ = h(ia),
	M_ = h(la),
	B_ = h(sa),
	N_ = h(ua),
	k_ = h(ca),
	D_ = h(da),
	L_ = h(fa),
	j_ = h(pa),
	F_ = h(va),
	U_ = h(ma),
	H_ = h(ya),
	V_ = h(ba),
	W_ = h(ha),
	G_ = h(ga),
	z_ = h(Ea),
	K_ = h(Ra),
	Y_ = h(_a),
	X_ = h(wa),
	Q_ = h(Ca),
	J_ = h(Pa),
	Z_ = h(Sa),
	ew = h(Ta),
	tw = h(Oa),
	rw = h(Aa),
	nw = h(xa),
	aw = h($a),
	ow = h(qa),
	iw = h(Ia),
	lw = h(Ma),
	sw = h(Ba),
	uw = h(Na),
	cw = h(ka),
	dw = h(Da),
	fw = h(La),
	pw = h(ja),
	vw = h(Fa),
	mw = h(Ua),
	yw = h(Ha),
	bw = h(Va),
	hw = h(Wa),
	gw = h(Ga),
	Ew = h(za),
	Rw = h(Ka),
	_w = h(Ya),
	ww = h(Xa),
	Cw = h(Qa),
	Pw = h(Ja),
	Sw = h(Za),
	Tw = h(eo),
	Ow = h(to),
	Aw = h(ro),
	xw = h(no),
	$w = h(ao),
	qw = h(oo),
	Iw = h(io),
	Mw = h(lo),
	Bw = h(so),
	Nw = h(uo);
function h(e) {
	return e && e.__esModule ? e : { default: e };
}
var kw = [
		['alert', u_.default],
		['alertdialog', c_.default],
		['application', d_.default],
		['article', f_.default],
		['banner', p_.default],
		['blockquote', v_.default],
		['button', m_.default],
		['caption', y_.default],
		['cell', b_.default],
		['checkbox', h_.default],
		['code', g_.default],
		['columnheader', E_.default],
		['combobox', R_.default],
		['complementary', __.default],
		['contentinfo', w_.default],
		['definition', C_.default],
		['deletion', P_.default],
		['dialog', S_.default],
		['directory', T_.default],
		['document', O_.default],
		['emphasis', A_.default],
		['feed', x_.default],
		['figure', $_.default],
		['form', q_.default],
		['generic', I_.default],
		['grid', M_.default],
		['gridcell', B_.default],
		['group', N_.default],
		['heading', k_.default],
		['img', D_.default],
		['insertion', L_.default],
		['link', j_.default],
		['list', F_.default],
		['listbox', U_.default],
		['listitem', H_.default],
		['log', V_.default],
		['main', W_.default],
		['marquee', G_.default],
		['math', z_.default],
		['menu', K_.default],
		['menubar', Y_.default],
		['menuitem', X_.default],
		['menuitemcheckbox', Q_.default],
		['menuitemradio', J_.default],
		['meter', Z_.default],
		['navigation', ew.default],
		['none', tw.default],
		['note', rw.default],
		['option', nw.default],
		['paragraph', aw.default],
		['presentation', ow.default],
		['progressbar', iw.default],
		['radio', lw.default],
		['radiogroup', sw.default],
		['region', uw.default],
		['row', cw.default],
		['rowgroup', dw.default],
		['rowheader', fw.default],
		['scrollbar', pw.default],
		['search', vw.default],
		['searchbox', mw.default],
		['separator', yw.default],
		['slider', bw.default],
		['spinbutton', hw.default],
		['status', gw.default],
		['strong', Ew.default],
		['subscript', Rw.default],
		['superscript', _w.default],
		['switch', ww.default],
		['tab', Cw.default],
		['table', Pw.default],
		['tablist', Sw.default],
		['tabpanel', Tw.default],
		['term', Ow.default],
		['textbox', Aw.default],
		['time', xw.default],
		['timer', $w.default],
		['toolbar', qw.default],
		['tooltip', Iw.default],
		['tree', Mw.default],
		['treegrid', Bw.default],
		['treeitem', Nw.default]
	],
	Dw = kw;
Bn.default = Dw;
var co = {},
	fo = {};
Object.defineProperty(fo, '__esModule', { value: !0 });
fo.default = void 0;
var Lw = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null
		},
		relatedConcepts: [{ concept: { name: 'abstract [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']]
	},
	jw = Lw;
fo.default = jw;
var po = {};
Object.defineProperty(po, '__esModule', { value: !0 });
po.default = void 0;
var Fw = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null
		},
		relatedConcepts: [{ concept: { name: 'acknowledgments [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']]
	},
	Uw = Fw;
po.default = Uw;
var vo = {};
Object.defineProperty(vo, '__esModule', { value: !0 });
vo.default = void 0;
var Hw = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null
		},
		relatedConcepts: [{ concept: { name: 'afterword [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']]
	},
	Vw = Hw;
vo.default = Vw;
var mo = {};
Object.defineProperty(mo, '__esModule', { value: !0 });
mo.default = void 0;
var Ww = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null
		},
		relatedConcepts: [{ concept: { name: 'appendix [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']]
	},
	Gw = Ww;
mo.default = Gw;
var yo = {};
Object.defineProperty(yo, '__esModule', { value: !0 });
yo.default = void 0;
var zw = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author', 'content'],
		prohibitedProps: [],
		props: { 'aria-errormessage': null, 'aria-invalid': null },
		relatedConcepts: [{ concept: { name: 'referrer [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'widget', 'command', 'link']]
	},
	Kw = zw;
yo.default = Kw;
var bo = {};
Object.defineProperty(bo, '__esModule', { value: !0 });
bo.default = void 0;
var Yw = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null
		},
		relatedConcepts: [{ concept: { name: 'EPUB biblioentry [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: ['doc-bibliography'],
		requiredContextRole: ['doc-bibliography'],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'listitem']]
	},
	Xw = Yw;
bo.default = Xw;
var ho = {};
Object.defineProperty(ho, '__esModule', { value: !0 });
ho.default = void 0;
var Qw = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null
		},
		relatedConcepts: [{ concept: { name: 'bibliography [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [['doc-biblioentry']],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']]
	},
	Jw = Qw;
ho.default = Jw;
var go = {};
Object.defineProperty(go, '__esModule', { value: !0 });
go.default = void 0;
var Zw = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: { 'aria-errormessage': null, 'aria-invalid': null },
		relatedConcepts: [{ concept: { name: 'biblioref [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'widget', 'command', 'link']]
	},
	eC = Zw;
go.default = eC;
var Eo = {};
Object.defineProperty(Eo, '__esModule', { value: !0 });
Eo.default = void 0;
var tC = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null
		},
		relatedConcepts: [{ concept: { name: 'chapter [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']]
	},
	rC = tC;
Eo.default = rC;
var Ro = {};
Object.defineProperty(Ro, '__esModule', { value: !0 });
Ro.default = void 0;
var nC = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null
		},
		relatedConcepts: [{ concept: { name: 'colophon [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']]
	},
	aC = nC;
Ro.default = aC;
var _o = {};
Object.defineProperty(_o, '__esModule', { value: !0 });
_o.default = void 0;
var oC = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null
		},
		relatedConcepts: [{ concept: { name: 'conclusion [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']]
	},
	iC = oC;
_o.default = iC;
var wo = {};
Object.defineProperty(wo, '__esModule', { value: !0 });
wo.default = void 0;
var lC = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null
		},
		relatedConcepts: [{ concept: { name: 'cover [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'img']]
	},
	sC = lC;
wo.default = sC;
var Co = {};
Object.defineProperty(Co, '__esModule', { value: !0 });
Co.default = void 0;
var uC = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null
		},
		relatedConcepts: [{ concept: { name: 'credit [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']]
	},
	cC = uC;
Co.default = cC;
var Po = {};
Object.defineProperty(Po, '__esModule', { value: !0 });
Po.default = void 0;
var dC = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null
		},
		relatedConcepts: [{ concept: { name: 'credits [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']]
	},
	fC = dC;
Po.default = fC;
var So = {};
Object.defineProperty(So, '__esModule', { value: !0 });
So.default = void 0;
var pC = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null
		},
		relatedConcepts: [{ concept: { name: 'dedication [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']]
	},
	vC = pC;
So.default = vC;
var To = {};
Object.defineProperty(To, '__esModule', { value: !0 });
To.default = void 0;
var mC = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null
		},
		relatedConcepts: [{ concept: { name: 'rearnote [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: ['doc-endnotes'],
		requiredContextRole: ['doc-endnotes'],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'listitem']]
	},
	yC = mC;
To.default = yC;
var Oo = {};
Object.defineProperty(Oo, '__esModule', { value: !0 });
Oo.default = void 0;
var bC = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null
		},
		relatedConcepts: [{ concept: { name: 'rearnotes [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [['doc-endnote']],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']]
	},
	hC = bC;
Oo.default = hC;
var Ao = {};
Object.defineProperty(Ao, '__esModule', { value: !0 });
Ao.default = void 0;
var gC = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null
		},
		relatedConcepts: [{ concept: { name: 'epigraph [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']]
	},
	EC = gC;
Ao.default = EC;
var xo = {};
Object.defineProperty(xo, '__esModule', { value: !0 });
xo.default = void 0;
var RC = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null
		},
		relatedConcepts: [{ concept: { name: 'epilogue [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']]
	},
	_C = RC;
xo.default = _C;
var $o = {};
Object.defineProperty($o, '__esModule', { value: !0 });
$o.default = void 0;
var wC = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null
		},
		relatedConcepts: [{ concept: { name: 'errata [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']]
	},
	CC = wC;
$o.default = CC;
var qo = {};
Object.defineProperty(qo, '__esModule', { value: !0 });
qo.default = void 0;
var PC = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null
		},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']]
	},
	SC = PC;
qo.default = SC;
var Io = {};
Object.defineProperty(Io, '__esModule', { value: !0 });
Io.default = void 0;
var TC = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null
		},
		relatedConcepts: [{ concept: { name: 'footnote [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']]
	},
	OC = TC;
Io.default = OC;
var Mo = {};
Object.defineProperty(Mo, '__esModule', { value: !0 });
Mo.default = void 0;
var AC = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null
		},
		relatedConcepts: [{ concept: { name: 'foreword [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']]
	},
	xC = AC;
Mo.default = xC;
var Bo = {};
Object.defineProperty(Bo, '__esModule', { value: !0 });
Bo.default = void 0;
var $C = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null
		},
		relatedConcepts: [{ concept: { name: 'glossary [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [['definition'], ['term']],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']]
	},
	qC = $C;
Bo.default = qC;
var No = {};
Object.defineProperty(No, '__esModule', { value: !0 });
No.default = void 0;
var IC = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: { 'aria-errormessage': null, 'aria-invalid': null },
		relatedConcepts: [{ concept: { name: 'glossref [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'widget', 'command', 'link']]
	},
	MC = IC;
No.default = MC;
var ko = {};
Object.defineProperty(ko, '__esModule', { value: !0 });
ko.default = void 0;
var BC = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null
		},
		relatedConcepts: [{ concept: { name: 'index [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark', 'navigation']]
	},
	NC = BC;
ko.default = NC;
var Do = {};
Object.defineProperty(Do, '__esModule', { value: !0 });
Do.default = void 0;
var kC = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null
		},
		relatedConcepts: [{ concept: { name: 'introduction [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']]
	},
	DC = kC;
Do.default = DC;
var Lo = {};
Object.defineProperty(Lo, '__esModule', { value: !0 });
Lo.default = void 0;
var LC = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: { 'aria-errormessage': null, 'aria-invalid': null },
		relatedConcepts: [{ concept: { name: 'noteref [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'widget', 'command', 'link']]
	},
	jC = LC;
Lo.default = jC;
var jo = {};
Object.defineProperty(jo, '__esModule', { value: !0 });
jo.default = void 0;
var FC = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null
		},
		relatedConcepts: [{ concept: { name: 'notice [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'note']]
	},
	UC = FC;
jo.default = UC;
var Fo = {};
Object.defineProperty(Fo, '__esModule', { value: !0 });
Fo.default = void 0;
var HC = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null
		},
		relatedConcepts: [{ concept: { name: 'pagebreak [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'separator']]
	},
	VC = HC;
Fo.default = VC;
var Uo = {};
Object.defineProperty(Uo, '__esModule', { value: !0 });
Uo.default = void 0;
var WC = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null
		},
		relatedConcepts: [{ concept: { name: 'page-list [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark', 'navigation']]
	},
	GC = WC;
Uo.default = GC;
var Ho = {};
Object.defineProperty(Ho, '__esModule', { value: !0 });
Ho.default = void 0;
var zC = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null
		},
		relatedConcepts: [{ concept: { name: 'part [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']]
	},
	KC = zC;
Ho.default = KC;
var Vo = {};
Object.defineProperty(Vo, '__esModule', { value: !0 });
Vo.default = void 0;
var YC = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null
		},
		relatedConcepts: [{ concept: { name: 'preface [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']]
	},
	XC = YC;
Vo.default = XC;
var Wo = {};
Object.defineProperty(Wo, '__esModule', { value: !0 });
Wo.default = void 0;
var QC = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null
		},
		relatedConcepts: [{ concept: { name: 'prologue [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']]
	},
	JC = QC;
Wo.default = JC;
var Go = {};
Object.defineProperty(Go, '__esModule', { value: !0 });
Go.default = void 0;
var ZC = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{ concept: { name: 'pullquote [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['none']]
	},
	eP = ZC;
Go.default = eP;
var zo = {};
Object.defineProperty(zo, '__esModule', { value: !0 });
zo.default = void 0;
var tP = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null
		},
		relatedConcepts: [{ concept: { name: 'qna [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']]
	},
	rP = tP;
zo.default = rP;
var Ko = {};
Object.defineProperty(Ko, '__esModule', { value: !0 });
Ko.default = void 0;
var nP = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null
		},
		relatedConcepts: [{ concept: { name: 'subtitle [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'sectionhead']]
	},
	aP = nP;
Ko.default = aP;
var Yo = {};
Object.defineProperty(Yo, '__esModule', { value: !0 });
Yo.default = void 0;
var oP = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null
		},
		relatedConcepts: [{ concept: { name: 'help [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'note']]
	},
	iP = oP;
Yo.default = iP;
var Xo = {};
Object.defineProperty(Xo, '__esModule', { value: !0 });
Xo.default = void 0;
var lP = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null
		},
		relatedConcepts: [{ concept: { name: 'toc [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark', 'navigation']]
	},
	sP = lP;
Xo.default = sP;
Object.defineProperty(co, '__esModule', { value: !0 });
co.default = void 0;
var uP = O(fo),
	cP = O(po),
	dP = O(vo),
	fP = O(mo),
	pP = O(yo),
	vP = O(bo),
	mP = O(ho),
	yP = O(go),
	bP = O(Eo),
	hP = O(Ro),
	gP = O(_o),
	EP = O(wo),
	RP = O(Co),
	_P = O(Po),
	wP = O(So),
	CP = O(To),
	PP = O(Oo),
	SP = O(Ao),
	TP = O(xo),
	OP = O($o),
	AP = O(qo),
	xP = O(Io),
	$P = O(Mo),
	qP = O(Bo),
	IP = O(No),
	MP = O(ko),
	BP = O(Do),
	NP = O(Lo),
	kP = O(jo),
	DP = O(Fo),
	LP = O(Uo),
	jP = O(Ho),
	FP = O(Vo),
	UP = O(Wo),
	HP = O(Go),
	VP = O(zo),
	WP = O(Ko),
	GP = O(Yo),
	zP = O(Xo);
function O(e) {
	return e && e.__esModule ? e : { default: e };
}
var KP = [
		['doc-abstract', uP.default],
		['doc-acknowledgments', cP.default],
		['doc-afterword', dP.default],
		['doc-appendix', fP.default],
		['doc-backlink', pP.default],
		['doc-biblioentry', vP.default],
		['doc-bibliography', mP.default],
		['doc-biblioref', yP.default],
		['doc-chapter', bP.default],
		['doc-colophon', hP.default],
		['doc-conclusion', gP.default],
		['doc-cover', EP.default],
		['doc-credit', RP.default],
		['doc-credits', _P.default],
		['doc-dedication', wP.default],
		['doc-endnote', CP.default],
		['doc-endnotes', PP.default],
		['doc-epigraph', SP.default],
		['doc-epilogue', TP.default],
		['doc-errata', OP.default],
		['doc-example', AP.default],
		['doc-footnote', xP.default],
		['doc-foreword', $P.default],
		['doc-glossary', qP.default],
		['doc-glossref', IP.default],
		['doc-index', MP.default],
		['doc-introduction', BP.default],
		['doc-noteref', NP.default],
		['doc-notice', kP.default],
		['doc-pagebreak', DP.default],
		['doc-pagelist', LP.default],
		['doc-part', jP.default],
		['doc-preface', FP.default],
		['doc-prologue', UP.default],
		['doc-pullquote', HP.default],
		['doc-qna', VP.default],
		['doc-subtitle', WP.default],
		['doc-tip', GP.default],
		['doc-toc', zP.default]
	],
	YP = KP;
co.default = YP;
var Qo = {},
	Jo = {};
Object.defineProperty(Jo, '__esModule', { value: !0 });
Jo.default = void 0;
var XP = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null
		},
		relatedConcepts: [
			{ module: 'GRAPHICS', concept: { name: 'graphics-object' } },
			{ module: 'ARIA', concept: { name: 'img' } },
			{ module: 'ARIA', concept: { name: 'article' } }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'document']]
	},
	QP = XP;
Jo.default = QP;
var Zo = {};
Object.defineProperty(Zo, '__esModule', { value: !0 });
Zo.default = void 0;
var JP = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: {
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null
		},
		relatedConcepts: [
			{ module: 'GRAPHICS', concept: { name: 'graphics-document' } },
			{ module: 'ARIA', concept: { name: 'group' } },
			{ module: 'ARIA', concept: { name: 'img' } },
			{ module: 'GRAPHICS', concept: { name: 'graphics-symbol' } }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'group']]
	},
	ZP = JP;
Zo.default = ZP;
var ei = {};
Object.defineProperty(ei, '__esModule', { value: !0 });
ei.default = void 0;
var eS = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null
		},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'img']]
	},
	tS = eS;
ei.default = tS;
Object.defineProperty(Qo, '__esModule', { value: !0 });
Qo.default = void 0;
var rS = Gl(Jo),
	nS = Gl(Zo),
	aS = Gl(ei);
function Gl(e) {
	return e && e.__esModule ? e : { default: e };
}
var oS = [
		['graphics-document', rS.default],
		['graphics-object', nS.default],
		['graphics-symbol', aS.default]
	],
	iS = oS;
Qo.default = iS;
Object.defineProperty(At, '__esModule', { value: !0 });
At.default = void 0;
var lS = vr(_n),
	sS = vr(Bn),
	uS = vr(co),
	cS = vr(Qo),
	dS = vr(Je);
function vr(e) {
	return e && e.__esModule ? e : { default: e };
}
function fS(e, t, r) {
	return (
		t in e
			? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
			: (e[t] = r),
		e
	);
}
function el(e, t) {
	var r = (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
	if (!r) {
		if (Array.isArray(e) || (r = of(e)) || (t && e && typeof e.length == 'number')) {
			r && (e = r);
			var n = 0,
				a = function () {};
			return {
				s: a,
				n: function () {
					return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
				},
				e: function (u) {
					throw u;
				},
				f: a
			};
		}
		throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
	}
	var o = !0,
		i = !1,
		s;
	return {
		s: function () {
			r = r.call(e);
		},
		n: function () {
			var u = r.next();
			return (o = u.done), u;
		},
		e: function (u) {
			(i = !0), (s = u);
		},
		f: function () {
			try {
				!o && r.return != null && r.return();
			} finally {
				if (i) throw s;
			}
		}
	};
}
function Ut(e, t) {
	return mS(e) || vS(e, t) || of(e, t) || pS();
}
function pS() {
	throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function of(e, t) {
	if (e) {
		if (typeof e == 'string') return Gs(e, t);
		var r = Object.prototype.toString.call(e).slice(8, -1);
		if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
			return Array.from(e);
		if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Gs(e, t);
	}
}
function Gs(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
	return n;
}
function vS(e, t) {
	var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
	if (r != null) {
		var n = [],
			a = !0,
			o = !1,
			i,
			s;
		try {
			for (
				r = r.call(e);
				!(a = (i = r.next()).done) && (n.push(i.value), !(t && n.length === t));
				a = !0
			);
		} catch (l) {
			(o = !0), (s = l);
		} finally {
			try {
				!a && r.return != null && r.return();
			} finally {
				if (o) throw s;
			}
		}
		return n;
	}
}
function mS(e) {
	if (Array.isArray(e)) return e;
}
var Oe = [].concat(lS.default, sS.default, uS.default, cS.default);
Oe.forEach(function (e) {
	var t = Ut(e, 2),
		r = t[1],
		n = el(r.superClass),
		a;
	try {
		for (n.s(); !(a = n.n()).done; ) {
			var o = a.value,
				i = el(o),
				s;
			try {
				var l = function () {
					var c = s.value,
						d = Oe.find(function (C) {
							var p = Ut(C, 1),
								R = p[0];
							return R === c;
						});
					if (d)
						for (var f = d[1], m = 0, y = Object.keys(f.props); m < y.length; m++) {
							var g = y[m];
							Object.prototype.hasOwnProperty.call(r.props, g) ||
								Object.assign(r.props, fS({}, g, f.props[g]));
						}
				};
				for (i.s(); !(s = i.n()).done; ) l();
			} catch (u) {
				i.e(u);
			} finally {
				i.f();
			}
		}
	} catch (u) {
		n.e(u);
	} finally {
		n.f();
	}
});
var tl = {
		entries: function () {
			return Oe;
		},
		forEach: function (t) {
			var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
				n = el(Oe),
				a;
			try {
				for (n.s(); !(a = n.n()).done; ) {
					var o = Ut(a.value, 2),
						i = o[0],
						s = o[1];
					t.call(r, s, i, Oe);
				}
			} catch (l) {
				n.e(l);
			} finally {
				n.f();
			}
		},
		get: function (t) {
			var r = Oe.find(function (n) {
				return n[0] === t;
			});
			return r && r[1];
		},
		has: function (t) {
			return !!tl.get(t);
		},
		keys: function () {
			return Oe.map(function (t) {
				var r = Ut(t, 1),
					n = r[0];
				return n;
			});
		},
		values: function () {
			return Oe.map(function (t) {
				var r = Ut(t, 2),
					n = r[1];
				return n;
			});
		}
	},
	yS = (0, dS.default)(tl, tl.entries());
At.default = yS;
var ti = {},
	zs = Object.prototype.toString,
	lf = function (t) {
		var r = zs.call(t),
			n = r === '[object Arguments]';
		return (
			n ||
				(n =
					r !== '[object Array]' &&
					t !== null &&
					typeof t == 'object' &&
					typeof t.length == 'number' &&
					t.length >= 0 &&
					zs.call(t.callee) === '[object Function]'),
			n
		);
	},
	yi,
	Ks;
function bS() {
	if (Ks) return yi;
	Ks = 1;
	var e;
	if (!Object.keys) {
		var t = Object.prototype.hasOwnProperty,
			r = Object.prototype.toString,
			n = lf,
			a = Object.prototype.propertyIsEnumerable,
			o = !a.call({ toString: null }, 'toString'),
			i = a.call(function () {}, 'prototype'),
			s = [
				'toString',
				'toLocaleString',
				'valueOf',
				'hasOwnProperty',
				'isPrototypeOf',
				'propertyIsEnumerable',
				'constructor'
			],
			l = function (f) {
				var m = f.constructor;
				return m && m.prototype === f;
			},
			u = {
				$applicationCache: !0,
				$console: !0,
				$external: !0,
				$frame: !0,
				$frameElement: !0,
				$frames: !0,
				$innerHeight: !0,
				$innerWidth: !0,
				$onmozfullscreenchange: !0,
				$onmozfullscreenerror: !0,
				$outerHeight: !0,
				$outerWidth: !0,
				$pageXOffset: !0,
				$pageYOffset: !0,
				$parent: !0,
				$scrollLeft: !0,
				$scrollTop: !0,
				$scrollX: !0,
				$scrollY: !0,
				$self: !0,
				$webkitIndexedDB: !0,
				$webkitStorageInfo: !0,
				$window: !0
			},
			c = (function () {
				if (typeof window > 'u') return !1;
				for (var f in window)
					try {
						if (
							!u['$' + f] &&
							t.call(window, f) &&
							window[f] !== null &&
							typeof window[f] == 'object'
						)
							try {
								l(window[f]);
							} catch {
								return !0;
							}
					} catch {
						return !0;
					}
				return !1;
			})(),
			d = function (f) {
				if (typeof window > 'u' || !c) return l(f);
				try {
					return l(f);
				} catch {
					return !1;
				}
			};
		e = function (m) {
			var y = m !== null && typeof m == 'object',
				g = r.call(m) === '[object Function]',
				C = n(m),
				p = y && r.call(m) === '[object String]',
				R = [];
			if (!y && !g && !C) throw new TypeError('Object.keys called on a non-object');
			var _ = i && g;
			if (p && m.length > 0 && !t.call(m, 0)) for (var w = 0; w < m.length; ++w) R.push(String(w));
			if (C && m.length > 0) for (var P = 0; P < m.length; ++P) R.push(String(P));
			else for (var v in m) !(_ && v === 'prototype') && t.call(m, v) && R.push(String(v));
			if (o)
				for (var b = d(m), E = 0; E < s.length; ++E)
					!(b && s[E] === 'constructor') && t.call(m, s[E]) && R.push(s[E]);
			return R;
		};
	}
	return (yi = e), yi;
}
var hS = Array.prototype.slice,
	gS = lf,
	Ys = Object.keys,
	Mr = Ys
		? function (t) {
				return Ys(t);
		  }
		: bS(),
	Xs = Object.keys;
Mr.shim = function () {
	if (Object.keys) {
		var t = (function () {
			var r = Object.keys(arguments);
			return r && r.length === arguments.length;
		})(1, 2);
		t ||
			(Object.keys = function (n) {
				return gS(n) ? Xs(hS.call(n)) : Xs(n);
			});
	} else Object.keys = Mr;
	return Object.keys || Mr;
};
var zl = Mr,
	ri = function () {
		if (typeof Symbol != 'function' || typeof Object.getOwnPropertySymbols != 'function') return !1;
		if (typeof Symbol.iterator == 'symbol') return !0;
		var t = {},
			r = Symbol('test'),
			n = Object(r);
		if (
			typeof r == 'string' ||
			Object.prototype.toString.call(r) !== '[object Symbol]' ||
			Object.prototype.toString.call(n) !== '[object Symbol]'
		)
			return !1;
		var a = 42;
		t[r] = a;
		for (r in t) return !1;
		if (
			(typeof Object.keys == 'function' && Object.keys(t).length !== 0) ||
			(typeof Object.getOwnPropertyNames == 'function' &&
				Object.getOwnPropertyNames(t).length !== 0)
		)
			return !1;
		var o = Object.getOwnPropertySymbols(t);
		if (o.length !== 1 || o[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
			return !1;
		if (typeof Object.getOwnPropertyDescriptor == 'function') {
			var i = Object.getOwnPropertyDescriptor(t, r);
			if (i.value !== a || i.enumerable !== !0) return !1;
		}
		return !0;
	},
	Qs = typeof Symbol < 'u' && Symbol,
	ES = ri,
	Kl = function () {
		return typeof Qs != 'function' ||
			typeof Symbol != 'function' ||
			typeof Qs('foo') != 'symbol' ||
			typeof Symbol('bar') != 'symbol'
			? !1
			: ES();
	},
	Js = { foo: {} },
	RS = Object,
	_S = function () {
		return { __proto__: Js }.foo === Js.foo && !({ __proto__: null } instanceof RS);
	},
	wS = 'Function.prototype.bind called on incompatible ',
	bi = Array.prototype.slice,
	CS = Object.prototype.toString,
	PS = '[object Function]',
	SS = function (t) {
		var r = this;
		if (typeof r != 'function' || CS.call(r) !== PS) throw new TypeError(wS + r);
		for (
			var n = bi.call(arguments, 1),
				a,
				o = function () {
					if (this instanceof a) {
						var c = r.apply(this, n.concat(bi.call(arguments)));
						return Object(c) === c ? c : this;
					} else return r.apply(t, n.concat(bi.call(arguments)));
				},
				i = Math.max(0, r.length - n.length),
				s = [],
				l = 0;
			l < i;
			l++
		)
			s.push('$' + l);
		if (
			((a = Function(
				'binder',
				'return function (' + s.join(',') + '){ return binder.apply(this,arguments); }'
			)(o)),
			r.prototype)
		) {
			var u = function () {};
			(u.prototype = r.prototype), (a.prototype = new u()), (u.prototype = null);
		}
		return a;
	},
	TS = SS,
	Yl = Function.prototype.bind || TS,
	OS = Yl,
	sf = OS.call(Function.call, Object.prototype.hasOwnProperty),
	A,
	ht = SyntaxError,
	uf = Function,
	vt = TypeError,
	hi = function (e) {
		try {
			return uf('"use strict"; return (' + e + ').constructor;')();
		} catch {}
	},
	Ge = Object.getOwnPropertyDescriptor;
if (Ge)
	try {
		Ge({}, '');
	} catch {
		Ge = null;
	}
var gi = function () {
		throw new vt();
	},
	AS = Ge
		? (function () {
				try {
					return arguments.callee, gi;
				} catch {
					try {
						return Ge(arguments, 'callee').get;
					} catch {
						return gi;
					}
				}
		  })()
		: gi,
	ut = Kl(),
	xS = _S(),
	N =
		Object.getPrototypeOf ||
		(xS
			? function (e) {
					return e.__proto__;
			  }
			: null),
	dt = {},
	$S = typeof Uint8Array > 'u' || !N ? A : N(Uint8Array),
	ze = {
		'%AggregateError%': typeof AggregateError > 'u' ? A : AggregateError,
		'%Array%': Array,
		'%ArrayBuffer%': typeof ArrayBuffer > 'u' ? A : ArrayBuffer,
		'%ArrayIteratorPrototype%': ut && N ? N([][Symbol.iterator]()) : A,
		'%AsyncFromSyncIteratorPrototype%': A,
		'%AsyncFunction%': dt,
		'%AsyncGenerator%': dt,
		'%AsyncGeneratorFunction%': dt,
		'%AsyncIteratorPrototype%': dt,
		'%Atomics%': typeof Atomics > 'u' ? A : Atomics,
		'%BigInt%': typeof BigInt > 'u' ? A : BigInt,
		'%BigInt64Array%': typeof BigInt64Array > 'u' ? A : BigInt64Array,
		'%BigUint64Array%': typeof BigUint64Array > 'u' ? A : BigUint64Array,
		'%Boolean%': Boolean,
		'%DataView%': typeof DataView > 'u' ? A : DataView,
		'%Date%': Date,
		'%decodeURI%': decodeURI,
		'%decodeURIComponent%': decodeURIComponent,
		'%encodeURI%': encodeURI,
		'%encodeURIComponent%': encodeURIComponent,
		'%Error%': Error,
		'%eval%': eval,
		'%EvalError%': EvalError,
		'%Float32Array%': typeof Float32Array > 'u' ? A : Float32Array,
		'%Float64Array%': typeof Float64Array > 'u' ? A : Float64Array,
		'%FinalizationRegistry%': typeof FinalizationRegistry > 'u' ? A : FinalizationRegistry,
		'%Function%': uf,
		'%GeneratorFunction%': dt,
		'%Int8Array%': typeof Int8Array > 'u' ? A : Int8Array,
		'%Int16Array%': typeof Int16Array > 'u' ? A : Int16Array,
		'%Int32Array%': typeof Int32Array > 'u' ? A : Int32Array,
		'%isFinite%': isFinite,
		'%isNaN%': isNaN,
		'%IteratorPrototype%': ut && N ? N(N([][Symbol.iterator]())) : A,
		'%JSON%': typeof JSON == 'object' ? JSON : A,
		'%Map%': typeof Map > 'u' ? A : Map,
		'%MapIteratorPrototype%': typeof Map > 'u' || !ut || !N ? A : N(new Map()[Symbol.iterator]()),
		'%Math%': Math,
		'%Number%': Number,
		'%Object%': Object,
		'%parseFloat%': parseFloat,
		'%parseInt%': parseInt,
		'%Promise%': typeof Promise > 'u' ? A : Promise,
		'%Proxy%': typeof Proxy > 'u' ? A : Proxy,
		'%RangeError%': RangeError,
		'%ReferenceError%': ReferenceError,
		'%Reflect%': typeof Reflect > 'u' ? A : Reflect,
		'%RegExp%': RegExp,
		'%Set%': typeof Set > 'u' ? A : Set,
		'%SetIteratorPrototype%': typeof Set > 'u' || !ut || !N ? A : N(new Set()[Symbol.iterator]()),
		'%SharedArrayBuffer%': typeof SharedArrayBuffer > 'u' ? A : SharedArrayBuffer,
		'%String%': String,
		'%StringIteratorPrototype%': ut && N ? N(''[Symbol.iterator]()) : A,
		'%Symbol%': ut ? Symbol : A,
		'%SyntaxError%': ht,
		'%ThrowTypeError%': AS,
		'%TypedArray%': $S,
		'%TypeError%': vt,
		'%Uint8Array%': typeof Uint8Array > 'u' ? A : Uint8Array,
		'%Uint8ClampedArray%': typeof Uint8ClampedArray > 'u' ? A : Uint8ClampedArray,
		'%Uint16Array%': typeof Uint16Array > 'u' ? A : Uint16Array,
		'%Uint32Array%': typeof Uint32Array > 'u' ? A : Uint32Array,
		'%URIError%': URIError,
		'%WeakMap%': typeof WeakMap > 'u' ? A : WeakMap,
		'%WeakRef%': typeof WeakRef > 'u' ? A : WeakRef,
		'%WeakSet%': typeof WeakSet > 'u' ? A : WeakSet
	};
if (N)
	try {
		null.error;
	} catch (e) {
		var qS = N(N(e));
		ze['%Error.prototype%'] = qS;
	}
var IS = function e(t) {
		var r;
		if (t === '%AsyncFunction%') r = hi('async function () {}');
		else if (t === '%GeneratorFunction%') r = hi('function* () {}');
		else if (t === '%AsyncGeneratorFunction%') r = hi('async function* () {}');
		else if (t === '%AsyncGenerator%') {
			var n = e('%AsyncGeneratorFunction%');
			n && (r = n.prototype);
		} else if (t === '%AsyncIteratorPrototype%') {
			var a = e('%AsyncGenerator%');
			a && N && (r = N(a.prototype));
		}
		return (ze[t] = r), r;
	},
	Zs = {
		'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
		'%ArrayPrototype%': ['Array', 'prototype'],
		'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
		'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
		'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
		'%ArrayProto_values%': ['Array', 'prototype', 'values'],
		'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
		'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
		'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
		'%BooleanPrototype%': ['Boolean', 'prototype'],
		'%DataViewPrototype%': ['DataView', 'prototype'],
		'%DatePrototype%': ['Date', 'prototype'],
		'%ErrorPrototype%': ['Error', 'prototype'],
		'%EvalErrorPrototype%': ['EvalError', 'prototype'],
		'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
		'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
		'%FunctionPrototype%': ['Function', 'prototype'],
		'%Generator%': ['GeneratorFunction', 'prototype'],
		'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
		'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
		'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
		'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
		'%JSONParse%': ['JSON', 'parse'],
		'%JSONStringify%': ['JSON', 'stringify'],
		'%MapPrototype%': ['Map', 'prototype'],
		'%NumberPrototype%': ['Number', 'prototype'],
		'%ObjectPrototype%': ['Object', 'prototype'],
		'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
		'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
		'%PromisePrototype%': ['Promise', 'prototype'],
		'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
		'%Promise_all%': ['Promise', 'all'],
		'%Promise_reject%': ['Promise', 'reject'],
		'%Promise_resolve%': ['Promise', 'resolve'],
		'%RangeErrorPrototype%': ['RangeError', 'prototype'],
		'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
		'%RegExpPrototype%': ['RegExp', 'prototype'],
		'%SetPrototype%': ['Set', 'prototype'],
		'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
		'%StringPrototype%': ['String', 'prototype'],
		'%SymbolPrototype%': ['Symbol', 'prototype'],
		'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
		'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
		'%TypeErrorPrototype%': ['TypeError', 'prototype'],
		'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
		'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
		'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
		'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
		'%URIErrorPrototype%': ['URIError', 'prototype'],
		'%WeakMapPrototype%': ['WeakMap', 'prototype'],
		'%WeakSetPrototype%': ['WeakSet', 'prototype']
	},
	mr = Yl,
	Yr = sf,
	MS = mr.call(Function.call, Array.prototype.concat),
	BS = mr.call(Function.apply, Array.prototype.splice),
	eu = mr.call(Function.call, String.prototype.replace),
	Xr = mr.call(Function.call, String.prototype.slice),
	NS = mr.call(Function.call, RegExp.prototype.exec),
	kS =
		/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
	DS = /\\(\\)?/g,
	LS = function (t) {
		var r = Xr(t, 0, 1),
			n = Xr(t, -1);
		if (r === '%' && n !== '%') throw new ht('invalid intrinsic syntax, expected closing `%`');
		if (n === '%' && r !== '%') throw new ht('invalid intrinsic syntax, expected opening `%`');
		var a = [];
		return (
			eu(t, kS, function (o, i, s, l) {
				a[a.length] = s ? eu(l, DS, '$1') : i || o;
			}),
			a
		);
	},
	jS = function (t, r) {
		var n = t,
			a;
		if ((Yr(Zs, n) && ((a = Zs[n]), (n = '%' + a[0] + '%')), Yr(ze, n))) {
			var o = ze[n];
			if ((o === dt && (o = IS(n)), typeof o > 'u' && !r))
				throw new vt('intrinsic ' + t + ' exists, but is not available. Please file an issue!');
			return { alias: a, name: n, value: o };
		}
		throw new ht('intrinsic ' + t + ' does not exist!');
	},
	ue = function (t, r) {
		if (typeof t != 'string' || t.length === 0)
			throw new vt('intrinsic name must be a non-empty string');
		if (arguments.length > 1 && typeof r != 'boolean')
			throw new vt('"allowMissing" argument must be a boolean');
		if (NS(/^%?[^%]*%?$/, t) === null)
			throw new ht(
				'`%` may not be present anywhere but at the beginning and end of the intrinsic name'
			);
		var n = LS(t),
			a = n.length > 0 ? n[0] : '',
			o = jS('%' + a + '%', r),
			i = o.name,
			s = o.value,
			l = !1,
			u = o.alias;
		u && ((a = u[0]), BS(n, MS([0, 1], u)));
		for (var c = 1, d = !0; c < n.length; c += 1) {
			var f = n[c],
				m = Xr(f, 0, 1),
				y = Xr(f, -1);
			if ((m === '"' || m === "'" || m === '`' || y === '"' || y === "'" || y === '`') && m !== y)
				throw new ht('property names with quotes must have matching quotes');
			if (((f === 'constructor' || !d) && (l = !0), (a += '.' + f), (i = '%' + a + '%'), Yr(ze, i)))
				s = ze[i];
			else if (s != null) {
				if (!(f in s)) {
					if (!r)
						throw new vt('base intrinsic for ' + t + ' exists, but the property is not available.');
					return;
				}
				if (Ge && c + 1 >= n.length) {
					var g = Ge(s, f);
					(d = !!g), d && 'get' in g && !('originalValue' in g.get) ? (s = g.get) : (s = s[f]);
				} else (d = Yr(s, f)), (s = s[f]);
				d && !l && (ze[i] = s);
			}
		}
		return s;
	},
	FS = ue,
	rl = FS('%Object.defineProperty%', !0),
	nl = function () {
		if (rl)
			try {
				return rl({}, 'a', { value: 1 }), !0;
			} catch {
				return !1;
			}
		return !1;
	};
nl.hasArrayLengthDefineBug = function () {
	if (!nl()) return null;
	try {
		return rl([], 'length', { value: 1 }).length !== 1;
	} catch {
		return !0;
	}
};
var US = nl,
	HS = zl,
	VS = typeof Symbol == 'function' && typeof Symbol('foo') == 'symbol',
	WS = Object.prototype.toString,
	GS = Array.prototype.concat,
	cf = Object.defineProperty,
	zS = function (e) {
		return typeof e == 'function' && WS.call(e) === '[object Function]';
	},
	KS = US(),
	df = cf && KS,
	YS = function (e, t, r, n) {
		if (t in e) {
			if (n === !0) {
				if (e[t] === r) return;
			} else if (!zS(n) || !n()) return;
		}
		df ? cf(e, t, { configurable: !0, enumerable: !1, value: r, writable: !0 }) : (e[t] = r);
	},
	ff = function (e, t) {
		var r = arguments.length > 2 ? arguments[2] : {},
			n = HS(t);
		VS && (n = GS.call(n, Object.getOwnPropertySymbols(t)));
		for (var a = 0; a < n.length; a += 1) YS(e, n[a], t[n[a]], r[n[a]]);
	};
ff.supportsDescriptors = !!df;
var Ze = ff,
	pf = { exports: {} };
(function (e) {
	var t = Yl,
		r = ue,
		n = r('%Function.prototype.apply%'),
		a = r('%Function.prototype.call%'),
		o = r('%Reflect.apply%', !0) || t.call(a, n),
		i = r('%Object.getOwnPropertyDescriptor%', !0),
		s = r('%Object.defineProperty%', !0),
		l = r('%Math.max%');
	if (s)
		try {
			s({}, 'a', { value: 1 });
		} catch {
			s = null;
		}
	e.exports = function (d) {
		var f = o(t, a, arguments);
		if (i && s) {
			var m = i(f, 'length');
			m.configurable && s(f, 'length', { value: 1 + l(0, d.length - (arguments.length - 1)) });
		}
		return f;
	};
	var u = function () {
		return o(t, n, arguments);
	};
	s ? s(e.exports, 'apply', { value: u }) : (e.exports.apply = u);
})(pf);
var xt = pf.exports,
	vf = ue,
	mf = xt,
	XS = mf(vf('String.prototype.indexOf')),
	ee = function (t, r) {
		var n = vf(t, !!r);
		return typeof n == 'function' && XS(t, '.prototype.') > -1 ? mf(n) : n;
	},
	QS = zl,
	yf = ri(),
	bf = ee,
	tu = Object,
	JS = bf('Array.prototype.push'),
	ru = bf('Object.prototype.propertyIsEnumerable'),
	ZS = yf ? Object.getOwnPropertySymbols : null,
	hf = function (t, r) {
		if (t == null) throw new TypeError('target must be an object');
		var n = tu(t);
		if (arguments.length === 1) return n;
		for (var a = 1; a < arguments.length; ++a) {
			var o = tu(arguments[a]),
				i = QS(o),
				s = yf && (Object.getOwnPropertySymbols || ZS);
			if (s)
				for (var l = s(o), u = 0; u < l.length; ++u) {
					var c = l[u];
					ru(o, c) && JS(i, c);
				}
			for (var d = 0; d < i.length; ++d) {
				var f = i[d];
				if (ru(o, f)) {
					var m = o[f];
					n[f] = m;
				}
			}
		}
		return n;
	},
	Ei = hf,
	eT = function () {
		if (!Object.assign) return !1;
		for (var e = 'abcdefghijklmnopqrst', t = e.split(''), r = {}, n = 0; n < t.length; ++n)
			r[t[n]] = t[n];
		var a = Object.assign({}, r),
			o = '';
		for (var i in a) o += i;
		return e !== o;
	},
	tT = function () {
		if (!Object.assign || !Object.preventExtensions) return !1;
		var e = Object.preventExtensions({ 1: 2 });
		try {
			Object.assign(e, 'xy');
		} catch {
			return e[1] === 'y';
		}
		return !1;
	},
	gf = function () {
		return !Object.assign || eT() || tT() ? Ei : Object.assign;
	},
	rT = Ze,
	nT = gf,
	aT = function () {
		var t = nT();
		return (
			rT(
				Object,
				{ assign: t },
				{
					assign: function () {
						return Object.assign !== t;
					}
				}
			),
			t
		);
	},
	oT = Ze,
	iT = xt,
	lT = hf,
	Ef = gf,
	sT = aT,
	uT = iT.apply(Ef()),
	Rf = function (t, r) {
		return uT(Object, arguments);
	};
oT(Rf, { getPolyfill: Ef, implementation: lT, shim: sT });
var cT = Rf,
	_f = { exports: {} },
	Qt = function () {
		return typeof function () {}.name == 'string';
	},
	Ht = Object.getOwnPropertyDescriptor;
if (Ht)
	try {
		Ht([], 'length');
	} catch {
		Ht = null;
	}
Qt.functionsHaveConfigurableNames = function () {
	if (!Qt() || !Ht) return !1;
	var t = Ht(function () {}, 'name');
	return !!t && !!t.configurable;
};
var dT = Function.prototype.bind;
Qt.boundFunctionsHaveNames = function () {
	return Qt() && typeof dT == 'function' && function () {}.bind().name !== '';
};
var fT = Qt;
(function (e) {
	var t = fT.functionsHaveConfigurableNames(),
		r = Object,
		n = TypeError;
	(e.exports = function () {
		if (this != null && this !== r(this))
			throw new n('RegExp.prototype.flags getter called on non-object');
		var o = '';
		return (
			this.hasIndices && (o += 'd'),
			this.global && (o += 'g'),
			this.ignoreCase && (o += 'i'),
			this.multiline && (o += 'm'),
			this.dotAll && (o += 's'),
			this.unicode && (o += 'u'),
			this.unicodeSets && (o += 'v'),
			this.sticky && (o += 'y'),
			o
		);
	}),
		t && Object.defineProperty && Object.defineProperty(e.exports, 'name', { value: 'get flags' });
})(_f);
var wf = _f.exports,
	pT = wf,
	vT = Ze.supportsDescriptors,
	mT = Object.getOwnPropertyDescriptor,
	Cf = function () {
		if (vT && /a/gim.flags === 'gim') {
			var t = mT(RegExp.prototype, 'flags');
			if (
				t &&
				typeof t.get == 'function' &&
				typeof RegExp.prototype.dotAll == 'boolean' &&
				typeof RegExp.prototype.hasIndices == 'boolean'
			) {
				var r = '',
					n = {};
				if (
					(Object.defineProperty(n, 'hasIndices', {
						get: function () {
							r += 'd';
						}
					}),
					Object.defineProperty(n, 'sticky', {
						get: function () {
							r += 'y';
						}
					}),
					r === 'dy')
				)
					return t.get;
			}
		}
		return pT;
	},
	yT = Ze.supportsDescriptors,
	bT = Cf,
	hT = Object.getOwnPropertyDescriptor,
	gT = Object.defineProperty,
	ET = TypeError,
	nu = Object.getPrototypeOf,
	RT = /a/,
	_T = function () {
		if (!yT || !nu)
			throw new ET(
				'RegExp.prototype.flags requires a true ES5 environment that supports property descriptors'
			);
		var t = bT(),
			r = nu(RT),
			n = hT(r, 'flags');
		return (!n || n.get !== t) && gT(r, 'flags', { configurable: !0, enumerable: !1, get: t }), t;
	},
	wT = Ze,
	CT = xt,
	PT = wf,
	Pf = Cf,
	ST = _T,
	Sf = CT(Pf());
wT(Sf, { getPolyfill: Pf, implementation: PT, shim: ST });
var TT = Sf,
	Br = { exports: {} },
	OT = ri,
	et = function () {
		return OT() && !!Symbol.toStringTag;
	},
	AT = et(),
	xT = ee,
	al = xT('Object.prototype.toString'),
	ni = function (t) {
		return AT && t && typeof t == 'object' && Symbol.toStringTag in t
			? !1
			: al(t) === '[object Arguments]';
	},
	Tf = function (t) {
		return ni(t)
			? !0
			: t !== null &&
					typeof t == 'object' &&
					typeof t.length == 'number' &&
					t.length >= 0 &&
					al(t) !== '[object Array]' &&
					al(t.callee) === '[object Function]';
	},
	$T = (function () {
		return ni(arguments);
	})();
ni.isLegacyArguments = Tf;
var Of = $T ? ni : Tf;
const qT = {},
	IT = Object.freeze(
		Object.defineProperty({ __proto__: null, default: qT }, Symbol.toStringTag, { value: 'Module' })
	),
	MT = pm(IT);
var Xl = typeof Map == 'function' && Map.prototype,
	Ri =
		Object.getOwnPropertyDescriptor && Xl
			? Object.getOwnPropertyDescriptor(Map.prototype, 'size')
			: null,
	Qr = Xl && Ri && typeof Ri.get == 'function' ? Ri.get : null,
	au = Xl && Map.prototype.forEach,
	Ql = typeof Set == 'function' && Set.prototype,
	_i =
		Object.getOwnPropertyDescriptor && Ql
			? Object.getOwnPropertyDescriptor(Set.prototype, 'size')
			: null,
	Jr = Ql && _i && typeof _i.get == 'function' ? _i.get : null,
	ou = Ql && Set.prototype.forEach,
	BT = typeof WeakMap == 'function' && WeakMap.prototype,
	Vt = BT ? WeakMap.prototype.has : null,
	NT = typeof WeakSet == 'function' && WeakSet.prototype,
	Wt = NT ? WeakSet.prototype.has : null,
	kT = typeof WeakRef == 'function' && WeakRef.prototype,
	iu = kT ? WeakRef.prototype.deref : null,
	DT = Boolean.prototype.valueOf,
	LT = Object.prototype.toString,
	jT = Function.prototype.toString,
	FT = String.prototype.match,
	Jl = String.prototype.slice,
	Ie = String.prototype.replace,
	UT = String.prototype.toUpperCase,
	lu = String.prototype.toLowerCase,
	Af = RegExp.prototype.test,
	su = Array.prototype.concat,
	se = Array.prototype.join,
	HT = Array.prototype.slice,
	uu = Math.floor,
	ol = typeof BigInt == 'function' ? BigInt.prototype.valueOf : null,
	wi = Object.getOwnPropertySymbols,
	il =
		typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
			? Symbol.prototype.toString
			: null,
	gt = typeof Symbol == 'function' && typeof Symbol.iterator == 'object',
	V =
		typeof Symbol == 'function' &&
		Symbol.toStringTag &&
		(typeof Symbol.toStringTag === gt || 'symbol')
			? Symbol.toStringTag
			: null,
	xf = Object.prototype.propertyIsEnumerable,
	cu =
		(typeof Reflect == 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) ||
		([].__proto__ === Array.prototype
			? function (e) {
					return e.__proto__;
			  }
			: null);
function du(e, t) {
	if (e === 1 / 0 || e === -1 / 0 || e !== e || (e && e > -1e3 && e < 1e3) || Af.call(/e/, t))
		return t;
	var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
	if (typeof e == 'number') {
		var n = e < 0 ? -uu(-e) : uu(e);
		if (n !== e) {
			var a = String(n),
				o = Jl.call(t, a.length + 1);
			return Ie.call(a, r, '$&_') + '.' + Ie.call(Ie.call(o, /([0-9]{3})/g, '$&_'), /_$/, '');
		}
	}
	return Ie.call(t, r, '$&_');
}
var ll = MT,
	fu = ll.custom,
	pu = qf(fu) ? fu : null,
	VT = function e(t, r, n, a) {
		var o = r || {};
		if (Ae(o, 'quoteStyle') && o.quoteStyle !== 'single' && o.quoteStyle !== 'double')
			throw new TypeError('option "quoteStyle" must be "single" or "double"');
		if (
			Ae(o, 'maxStringLength') &&
			(typeof o.maxStringLength == 'number'
				? o.maxStringLength < 0 && o.maxStringLength !== 1 / 0
				: o.maxStringLength !== null)
		)
			throw new TypeError(
				'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'
			);
		var i = Ae(o, 'customInspect') ? o.customInspect : !0;
		if (typeof i != 'boolean' && i !== 'symbol')
			throw new TypeError(
				'option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`'
			);
		if (
			Ae(o, 'indent') &&
			o.indent !== null &&
			o.indent !== '	' &&
			!(parseInt(o.indent, 10) === o.indent && o.indent > 0)
		)
			throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
		if (Ae(o, 'numericSeparator') && typeof o.numericSeparator != 'boolean')
			throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
		var s = o.numericSeparator;
		if (typeof t > 'u') return 'undefined';
		if (t === null) return 'null';
		if (typeof t == 'boolean') return t ? 'true' : 'false';
		if (typeof t == 'string') return Mf(t, o);
		if (typeof t == 'number') {
			if (t === 0) return 1 / 0 / t > 0 ? '0' : '-0';
			var l = String(t);
			return s ? du(t, l) : l;
		}
		if (typeof t == 'bigint') {
			var u = String(t) + 'n';
			return s ? du(t, u) : u;
		}
		var c = typeof o.depth > 'u' ? 5 : o.depth;
		if ((typeof n > 'u' && (n = 0), n >= c && c > 0 && typeof t == 'object'))
			return sl(t) ? '[Array]' : '[Object]';
		var d = sO(o, n);
		if (typeof a > 'u') a = [];
		else if (If(a, t) >= 0) return '[Circular]';
		function f(K, S, $) {
			if ((S && ((a = HT.call(a)), a.push(S)), $)) {
				var j = { depth: o.depth };
				return Ae(o, 'quoteStyle') && (j.quoteStyle = o.quoteStyle), e(K, j, n + 1, a);
			}
			return e(K, o, n + 1, a);
		}
		if (typeof t == 'function' && !vu(t)) {
			var m = ZT(t),
				y = _r(t, f);
			return (
				'[Function' +
				(m ? ': ' + m : ' (anonymous)') +
				']' +
				(y.length > 0 ? ' { ' + se.call(y, ', ') + ' }' : '')
			);
		}
		if (qf(t)) {
			var g = gt ? Ie.call(String(t), /^(Symbol\(.*\))_[^)]*$/, '$1') : il.call(t);
			return typeof t == 'object' && !gt ? Nt(g) : g;
		}
		if (oO(t)) {
			for (
				var C = '<' + lu.call(String(t.nodeName)), p = t.attributes || [], R = 0;
				R < p.length;
				R++
			)
				C += ' ' + p[R].name + '=' + $f(WT(p[R].value), 'double', o);
			return (
				(C += '>'),
				t.childNodes && t.childNodes.length && (C += '...'),
				(C += '</' + lu.call(String(t.nodeName)) + '>'),
				C
			);
		}
		if (sl(t)) {
			if (t.length === 0) return '[]';
			var _ = _r(t, f);
			return d && !lO(_) ? '[' + ul(_, d) + ']' : '[ ' + se.call(_, ', ') + ' ]';
		}
		if (zT(t)) {
			var w = _r(t, f);
			return !('cause' in Error.prototype) && 'cause' in t && !xf.call(t, 'cause')
				? '{ [' + String(t) + '] ' + se.call(su.call('[cause]: ' + f(t.cause), w), ', ') + ' }'
				: w.length === 0
				? '[' + String(t) + ']'
				: '{ [' + String(t) + '] ' + se.call(w, ', ') + ' }';
		}
		if (typeof t == 'object' && i) {
			if (pu && typeof t[pu] == 'function' && ll) return ll(t, { depth: c - n });
			if (i !== 'symbol' && typeof t.inspect == 'function') return t.inspect();
		}
		if (eO(t)) {
			var P = [];
			return (
				au &&
					au.call(t, function (K, S) {
						P.push(f(S, t, !0) + ' => ' + f(K, t));
					}),
				mu('Map', Qr.call(t), P, d)
			);
		}
		if (nO(t)) {
			var v = [];
			return (
				ou &&
					ou.call(t, function (K) {
						v.push(f(K, t));
					}),
				mu('Set', Jr.call(t), v, d)
			);
		}
		if (tO(t)) return Ci('WeakMap');
		if (aO(t)) return Ci('WeakSet');
		if (rO(t)) return Ci('WeakRef');
		if (YT(t)) return Nt(f(Number(t)));
		if (QT(t)) return Nt(f(ol.call(t)));
		if (XT(t)) return Nt(DT.call(t));
		if (KT(t)) return Nt(f(String(t)));
		if (!GT(t) && !vu(t)) {
			var b = _r(t, f),
				E = cu ? cu(t) === Object.prototype : t instanceof Object || t.constructor === Object,
				M = t instanceof Object ? '' : 'null prototype',
				G = !E && V && Object(t) === t && V in t ? Jl.call(Ve(t), 8, -1) : M ? 'Object' : '',
				D =
					E || typeof t.constructor != 'function'
						? ''
						: t.constructor.name
						? t.constructor.name + ' '
						: '',
				z = D + (G || M ? '[' + se.call(su.call([], G || [], M || []), ': ') + '] ' : '');
			return b.length === 0
				? z + '{}'
				: d
				? z + '{' + ul(b, d) + '}'
				: z + '{ ' + se.call(b, ', ') + ' }';
		}
		return String(t);
	};
function $f(e, t, r) {
	var n = (r.quoteStyle || t) === 'double' ? '"' : "'";
	return n + e + n;
}
function WT(e) {
	return Ie.call(String(e), /"/g, '&quot;');
}
function sl(e) {
	return Ve(e) === '[object Array]' && (!V || !(typeof e == 'object' && V in e));
}
function GT(e) {
	return Ve(e) === '[object Date]' && (!V || !(typeof e == 'object' && V in e));
}
function vu(e) {
	return Ve(e) === '[object RegExp]' && (!V || !(typeof e == 'object' && V in e));
}
function zT(e) {
	return Ve(e) === '[object Error]' && (!V || !(typeof e == 'object' && V in e));
}
function KT(e) {
	return Ve(e) === '[object String]' && (!V || !(typeof e == 'object' && V in e));
}
function YT(e) {
	return Ve(e) === '[object Number]' && (!V || !(typeof e == 'object' && V in e));
}
function XT(e) {
	return Ve(e) === '[object Boolean]' && (!V || !(typeof e == 'object' && V in e));
}
function qf(e) {
	if (gt) return e && typeof e == 'object' && e instanceof Symbol;
	if (typeof e == 'symbol') return !0;
	if (!e || typeof e != 'object' || !il) return !1;
	try {
		return il.call(e), !0;
	} catch {}
	return !1;
}
function QT(e) {
	if (!e || typeof e != 'object' || !ol) return !1;
	try {
		return ol.call(e), !0;
	} catch {}
	return !1;
}
var JT =
	Object.prototype.hasOwnProperty ||
	function (e) {
		return e in this;
	};
function Ae(e, t) {
	return JT.call(e, t);
}
function Ve(e) {
	return LT.call(e);
}
function ZT(e) {
	if (e.name) return e.name;
	var t = FT.call(jT.call(e), /^function\s*([\w$]+)/);
	return t ? t[1] : null;
}
function If(e, t) {
	if (e.indexOf) return e.indexOf(t);
	for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r;
	return -1;
}
function eO(e) {
	if (!Qr || !e || typeof e != 'object') return !1;
	try {
		Qr.call(e);
		try {
			Jr.call(e);
		} catch {
			return !0;
		}
		return e instanceof Map;
	} catch {}
	return !1;
}
function tO(e) {
	if (!Vt || !e || typeof e != 'object') return !1;
	try {
		Vt.call(e, Vt);
		try {
			Wt.call(e, Wt);
		} catch {
			return !0;
		}
		return e instanceof WeakMap;
	} catch {}
	return !1;
}
function rO(e) {
	if (!iu || !e || typeof e != 'object') return !1;
	try {
		return iu.call(e), !0;
	} catch {}
	return !1;
}
function nO(e) {
	if (!Jr || !e || typeof e != 'object') return !1;
	try {
		Jr.call(e);
		try {
			Qr.call(e);
		} catch {
			return !0;
		}
		return e instanceof Set;
	} catch {}
	return !1;
}
function aO(e) {
	if (!Wt || !e || typeof e != 'object') return !1;
	try {
		Wt.call(e, Wt);
		try {
			Vt.call(e, Vt);
		} catch {
			return !0;
		}
		return e instanceof WeakSet;
	} catch {}
	return !1;
}
function oO(e) {
	return !e || typeof e != 'object'
		? !1
		: typeof HTMLElement < 'u' && e instanceof HTMLElement
		? !0
		: typeof e.nodeName == 'string' && typeof e.getAttribute == 'function';
}
function Mf(e, t) {
	if (e.length > t.maxStringLength) {
		var r = e.length - t.maxStringLength,
			n = '... ' + r + ' more character' + (r > 1 ? 's' : '');
		return Mf(Jl.call(e, 0, t.maxStringLength), t) + n;
	}
	var a = Ie.call(Ie.call(e, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, iO);
	return $f(a, 'single', t);
}
function iO(e) {
	var t = e.charCodeAt(0),
		r = { 8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r' }[t];
	return r ? '\\' + r : '\\x' + (t < 16 ? '0' : '') + UT.call(t.toString(16));
}
function Nt(e) {
	return 'Object(' + e + ')';
}
function Ci(e) {
	return e + ' { ? }';
}
function mu(e, t, r, n) {
	var a = n ? ul(r, n) : se.call(r, ', ');
	return e + ' (' + t + ') {' + a + '}';
}
function lO(e) {
	for (var t = 0; t < e.length; t++)
		if (
			If(
				e[t],
				`
`
			) >= 0
		)
			return !1;
	return !0;
}
function sO(e, t) {
	var r;
	if (e.indent === '	') r = '	';
	else if (typeof e.indent == 'number' && e.indent > 0) r = se.call(Array(e.indent + 1), ' ');
	else return null;
	return { base: r, prev: se.call(Array(t + 1), r) };
}
function ul(e, t) {
	if (e.length === 0) return '';
	var r =
		`
` +
		t.prev +
		t.base;
	return (
		r +
		se.call(e, ',' + r) +
		`
` +
		t.prev
	);
}
function _r(e, t) {
	var r = sl(e),
		n = [];
	if (r) {
		n.length = e.length;
		for (var a = 0; a < e.length; a++) n[a] = Ae(e, a) ? t(e[a], e) : '';
	}
	var o = typeof wi == 'function' ? wi(e) : [],
		i;
	if (gt) {
		i = {};
		for (var s = 0; s < o.length; s++) i['$' + o[s]] = o[s];
	}
	for (var l in e)
		Ae(e, l) &&
			((r && String(Number(l)) === l && l < e.length) ||
				(gt && i['$' + l] instanceof Symbol) ||
				(Af.call(/[^\w$]/, l)
					? n.push(t(l, e) + ': ' + t(e[l], e))
					: n.push(l + ': ' + t(e[l], e))));
	if (typeof wi == 'function')
		for (var u = 0; u < o.length; u++)
			xf.call(e, o[u]) && n.push('[' + t(o[u]) + ']: ' + t(e[o[u]], e));
	return n;
}
var Zl = ue,
	$t = ee,
	uO = VT,
	cO = Zl('%TypeError%'),
	wr = Zl('%WeakMap%', !0),
	Cr = Zl('%Map%', !0),
	dO = $t('WeakMap.prototype.get', !0),
	fO = $t('WeakMap.prototype.set', !0),
	pO = $t('WeakMap.prototype.has', !0),
	vO = $t('Map.prototype.get', !0),
	mO = $t('Map.prototype.set', !0),
	yO = $t('Map.prototype.has', !0),
	es = function (e, t) {
		for (var r = e, n; (n = r.next) !== null; r = n)
			if (n.key === t) return (r.next = n.next), (n.next = e.next), (e.next = n), n;
	},
	bO = function (e, t) {
		var r = es(e, t);
		return r && r.value;
	},
	hO = function (e, t, r) {
		var n = es(e, t);
		n ? (n.value = r) : (e.next = { key: t, next: e.next, value: r });
	},
	gO = function (e, t) {
		return !!es(e, t);
	},
	Bf = function () {
		var t,
			r,
			n,
			a = {
				assert: function (o) {
					if (!a.has(o)) throw new cO('Side channel does not contain ' + uO(o));
				},
				get: function (o) {
					if (wr && o && (typeof o == 'object' || typeof o == 'function')) {
						if (t) return dO(t, o);
					} else if (Cr) {
						if (r) return vO(r, o);
					} else if (n) return bO(n, o);
				},
				has: function (o) {
					if (wr && o && (typeof o == 'object' || typeof o == 'function')) {
						if (t) return pO(t, o);
					} else if (Cr) {
						if (r) return yO(r, o);
					} else if (n) return gO(n, o);
					return !1;
				},
				set: function (o, i) {
					wr && o && (typeof o == 'object' || typeof o == 'function')
						? (t || (t = new wr()), fO(t, o, i))
						: Cr
						? (r || (r = new Cr()), mO(r, o, i))
						: (n || (n = { key: {}, next: null }), hO(n, o, i));
				}
			};
		return a;
	},
	EO = ue,
	RO = sf,
	kt = Bf(),
	me = EO('%TypeError%'),
	ts = {
		assert: function (e, t) {
			if (!e || (typeof e != 'object' && typeof e != 'function'))
				throw new me('`O` is not an object');
			if (typeof t != 'string') throw new me('`slot` must be a string');
			if ((kt.assert(e), !ts.has(e, t))) throw new me('`' + t + '` is not present on `O`');
		},
		get: function (e, t) {
			if (!e || (typeof e != 'object' && typeof e != 'function'))
				throw new me('`O` is not an object');
			if (typeof t != 'string') throw new me('`slot` must be a string');
			var r = kt.get(e);
			return r && r['$' + t];
		},
		has: function (e, t) {
			if (!e || (typeof e != 'object' && typeof e != 'function'))
				throw new me('`O` is not an object');
			if (typeof t != 'string') throw new me('`slot` must be a string');
			var r = kt.get(e);
			return !!r && RO(r, '$' + t);
		},
		set: function (e, t, r) {
			if (!e || (typeof e != 'object' && typeof e != 'function'))
				throw new me('`O` is not an object');
			if (typeof t != 'string') throw new me('`slot` must be a string');
			var n = kt.get(e);
			n || ((n = {}), kt.set(e, n)), (n['$' + t] = r);
		}
	};
Object.freeze && Object.freeze(ts);
var _O = ts,
	Dt = _O,
	wO = SyntaxError,
	yu = typeof StopIteration == 'object' ? StopIteration : null,
	CO = function (t) {
		if (!yu) throw new wO('this environment lacks StopIteration');
		Dt.set(t, '[[Done]]', !1);
		var r = {
			next: function () {
				var a = Dt.get(this, '[[Iterator]]'),
					o = Dt.get(a, '[[Done]]');
				try {
					return { done: o, value: o ? void 0 : a.next() };
				} catch (i) {
					if ((Dt.set(a, '[[Done]]', !0), i !== yu)) throw i;
					return { done: !0, value: void 0 };
				}
			}
		};
		return Dt.set(r, '[[Iterator]]', t), r;
	},
	PO = {}.toString,
	Nf =
		Array.isArray ||
		function (e) {
			return PO.call(e) == '[object Array]';
		},
	SO = String.prototype.valueOf,
	TO = function (t) {
		try {
			return SO.call(t), !0;
		} catch {
			return !1;
		}
	},
	OO = Object.prototype.toString,
	AO = '[object String]',
	xO = et(),
	kf = function (t) {
		return typeof t == 'string' ? !0 : typeof t != 'object' ? !1 : xO ? TO(t) : OO.call(t) === AO;
	},
	rs = typeof Map == 'function' && Map.prototype ? Map : null,
	$O = typeof Set == 'function' && Set.prototype ? Set : null,
	Zr;
rs ||
	(Zr = function (t) {
		return !1;
	});
var Df = rs ? Map.prototype.has : null,
	bu = $O ? Set.prototype.has : null;
!Zr &&
	!Df &&
	(Zr = function (t) {
		return !1;
	});
var Lf =
		Zr ||
		function (t) {
			if (!t || typeof t != 'object') return !1;
			try {
				if ((Df.call(t), bu))
					try {
						bu.call(t);
					} catch {
						return !0;
					}
				return t instanceof rs;
			} catch {}
			return !1;
		},
	qO = typeof Map == 'function' && Map.prototype ? Map : null,
	ns = typeof Set == 'function' && Set.prototype ? Set : null,
	en;
ns ||
	(en = function (t) {
		return !1;
	});
var hu = qO ? Map.prototype.has : null,
	jf = ns ? Set.prototype.has : null;
!en &&
	!jf &&
	(en = function (t) {
		return !1;
	});
var Ff =
		en ||
		function (t) {
			if (!t || typeof t != 'object') return !1;
			try {
				if ((jf.call(t), hu))
					try {
						hu.call(t);
					} catch {
						return !0;
					}
				return t instanceof ns;
			} catch {}
			return !1;
		},
	gu = Of,
	Eu = CO;
if (Kl() || ri()) {
	var Pi = Symbol.iterator;
	Br.exports = function (t) {
		if (t != null && typeof t[Pi] < 'u') return t[Pi]();
		if (gu(t)) return Array.prototype[Pi].call(t);
	};
} else {
	var IO = Nf,
		MO = kf,
		Ru = ue,
		BO = Ru('%Map%', !0),
		NO = Ru('%Set%', !0),
		te = ee,
		_u = te('Array.prototype.push'),
		wu = te('String.prototype.charCodeAt'),
		kO = te('String.prototype.slice'),
		DO = function (t, r) {
			var n = t.length;
			if (r + 1 >= n) return r + 1;
			var a = wu(t, r);
			if (a < 55296 || a > 56319) return r + 1;
			var o = wu(t, r + 1);
			return o < 56320 || o > 57343 ? r + 1 : r + 2;
		},
		Si = function (t) {
			var r = 0;
			return {
				next: function () {
					var a = r >= t.length,
						o;
					return a || ((o = t[r]), (r += 1)), { done: a, value: o };
				}
			};
		},
		Cu = function (t, r) {
			if (IO(t) || gu(t)) return Si(t);
			if (MO(t)) {
				var n = 0;
				return {
					next: function () {
						var o = DO(t, n),
							i = kO(t, n, o);
						return (n = o), { done: o > t.length, value: i };
					}
				};
			}
			if (r && typeof t['_es6-shim iterator_'] < 'u') return t['_es6-shim iterator_']();
		};
	if (!BO && !NO)
		Br.exports = function (t) {
			if (t != null) return Cu(t, !0);
		};
	else {
		var LO = Lf,
			jO = Ff,
			Pu = te('Map.prototype.forEach', !0),
			Su = te('Set.prototype.forEach', !0);
		if (typeof process > 'u' || !process.versions || !process.versions.node)
			var Tu = te('Map.prototype.iterator', !0),
				Ou = te('Set.prototype.iterator', !0);
		var Au = te('Map.prototype.@@iterator', !0) || te('Map.prototype._es6-shim iterator_', !0),
			xu = te('Set.prototype.@@iterator', !0) || te('Set.prototype._es6-shim iterator_', !0),
			FO = function (t) {
				if (LO(t)) {
					if (Tu) return Eu(Tu(t));
					if (Au) return Au(t);
					if (Pu) {
						var r = [];
						return (
							Pu(t, function (a, o) {
								_u(r, [o, a]);
							}),
							Si(r)
						);
					}
				}
				if (jO(t)) {
					if (Ou) return Eu(Ou(t));
					if (xu) return xu(t);
					if (Su) {
						var n = [];
						return (
							Su(t, function (a) {
								_u(n, a);
							}),
							Si(n)
						);
					}
				}
			};
		Br.exports = function (t) {
			return FO(t) || Cu(t);
		};
	}
}
var UO = Br.exports,
	$u = function (e) {
		return e !== e;
	},
	Uf = function (t, r) {
		return t === 0 && r === 0 ? 1 / t === 1 / r : !!(t === r || ($u(t) && $u(r)));
	},
	HO = Uf,
	Hf = function () {
		return typeof Object.is == 'function' ? Object.is : HO;
	},
	VO = Hf,
	WO = Ze,
	GO = function () {
		var t = VO();
		return (
			WO(
				Object,
				{ is: t },
				{
					is: function () {
						return Object.is !== t;
					}
				}
			),
			t
		);
	},
	zO = Ze,
	KO = xt,
	YO = Uf,
	Vf = Hf,
	XO = GO,
	Wf = KO(Vf(), Object);
zO(Wf, { getPolyfill: Vf, implementation: YO, shim: XO });
var QO = Wf,
	Gf = Function.prototype.toString,
	ft = typeof Reflect == 'object' && Reflect !== null && Reflect.apply,
	cl,
	Nr;
if (typeof ft == 'function' && typeof Object.defineProperty == 'function')
	try {
		(cl = Object.defineProperty({}, 'length', {
			get: function () {
				throw Nr;
			}
		})),
			(Nr = {}),
			ft(
				function () {
					throw 42;
				},
				null,
				cl
			);
	} catch (e) {
		e !== Nr && (ft = null);
	}
else ft = null;
var JO = /^\s*class\b/,
	dl = function (t) {
		try {
			var r = Gf.call(t);
			return JO.test(r);
		} catch {
			return !1;
		}
	},
	Ti = function (t) {
		try {
			return dl(t) ? !1 : (Gf.call(t), !0);
		} catch {
			return !1;
		}
	},
	kr = Object.prototype.toString,
	ZO = '[object Object]',
	e0 = '[object Function]',
	t0 = '[object GeneratorFunction]',
	r0 = '[object HTMLAllCollection]',
	n0 = '[object HTML document.all class]',
	a0 = '[object HTMLCollection]',
	o0 = typeof Symbol == 'function' && !!Symbol.toStringTag,
	i0 = !(0 in [,]),
	fl = function () {
		return !1;
	};
if (typeof document == 'object') {
	var l0 = document.all;
	kr.call(l0) === kr.call(document.all) &&
		(fl = function (t) {
			if ((i0 || !t) && (typeof t > 'u' || typeof t == 'object'))
				try {
					var r = kr.call(t);
					return (r === r0 || r === n0 || r === a0 || r === ZO) && t('') == null;
				} catch {}
			return !1;
		});
}
var s0 = ft
		? function (t) {
				if (fl(t)) return !0;
				if (!t || (typeof t != 'function' && typeof t != 'object')) return !1;
				try {
					ft(t, null, cl);
				} catch (r) {
					if (r !== Nr) return !1;
				}
				return !dl(t) && Ti(t);
		  }
		: function (t) {
				if (fl(t)) return !0;
				if (!t || (typeof t != 'function' && typeof t != 'object')) return !1;
				if (o0) return Ti(t);
				if (dl(t)) return !1;
				var r = kr.call(t);
				return r !== e0 && r !== t0 && !/^\[object HTML/.test(r) ? !1 : Ti(t);
		  },
	u0 = s0,
	c0 = Object.prototype.toString,
	zf = Object.prototype.hasOwnProperty,
	d0 = function (t, r, n) {
		for (var a = 0, o = t.length; a < o; a++)
			zf.call(t, a) && (n == null ? r(t[a], a, t) : r.call(n, t[a], a, t));
	},
	f0 = function (t, r, n) {
		for (var a = 0, o = t.length; a < o; a++)
			n == null ? r(t.charAt(a), a, t) : r.call(n, t.charAt(a), a, t);
	},
	p0 = function (t, r, n) {
		for (var a in t) zf.call(t, a) && (n == null ? r(t[a], a, t) : r.call(n, t[a], a, t));
	},
	v0 = function (t, r, n) {
		if (!u0(r)) throw new TypeError('iterator must be a function');
		var a;
		arguments.length >= 3 && (a = n),
			c0.call(t) === '[object Array]'
				? d0(t, r, a)
				: typeof t == 'string'
				? f0(t, r, a)
				: p0(t, r, a);
	},
	m0 = v0,
	Oi = [
		'BigInt64Array',
		'BigUint64Array',
		'Float32Array',
		'Float64Array',
		'Int16Array',
		'Int32Array',
		'Int8Array',
		'Uint16Array',
		'Uint32Array',
		'Uint8Array',
		'Uint8ClampedArray'
	],
	y0 = typeof globalThis > 'u' ? nd : globalThis,
	b0 = function () {
		for (var t = [], r = 0; r < Oi.length; r++)
			typeof y0[Oi[r]] == 'function' && (t[t.length] = Oi[r]);
		return t;
	},
	h0 = ue,
	Dr = h0('%Object.getOwnPropertyDescriptor%', !0);
if (Dr)
	try {
		Dr([], 'length');
	} catch {
		Dr = null;
	}
var g0 = Dr,
	tn = m0,
	E0 = b0,
	qu = xt,
	as = ee,
	Lr = g0,
	R0 = as('Object.prototype.toString'),
	Kf = et(),
	Iu = typeof globalThis > 'u' ? nd : globalThis,
	pl = E0(),
	os = as('String.prototype.slice'),
	Ai = Object.getPrototypeOf,
	_0 =
		as('Array.prototype.indexOf', !0) ||
		function (t, r) {
			for (var n = 0; n < t.length; n += 1) if (t[n] === r) return n;
			return -1;
		},
	rn = { __proto__: null };
Kf && Lr && Ai
	? tn(pl, function (e) {
			var t = new Iu[e]();
			if (Symbol.toStringTag in t) {
				var r = Ai(t),
					n = Lr(r, Symbol.toStringTag);
				if (!n) {
					var a = Ai(r);
					n = Lr(a, Symbol.toStringTag);
				}
				rn['$' + e] = qu(n.get);
			}
	  })
	: tn(pl, function (e) {
			var t = new Iu[e]();
			rn['$' + e] = qu(t.slice);
	  });
var w0 = function (t) {
		var r = !1;
		return (
			tn(rn, function (n, a) {
				if (!r)
					try {
						'$' + n(t) === a && (r = os(a, 1));
					} catch {}
			}),
			r
		);
	},
	C0 = function (t) {
		var r = !1;
		return (
			tn(rn, function (n, a) {
				if (!r)
					try {
						n(t), (r = os(a, 1));
					} catch {}
			}),
			r
		);
	},
	Yf = function (t) {
		if (!t || typeof t != 'object') return !1;
		if (!Kf) {
			var r = os(R0(t), 8, -1);
			return _0(pl, r) > -1 ? r : r !== 'Object' ? !1 : C0(t);
		}
		return Lr ? w0(t) : null;
	},
	P0 = Yf,
	S0 = function (t) {
		return !!P0(t);
	},
	T0 = xt,
	O0 = ee,
	Xf = ue,
	A0 = S0,
	Mu = Xf('ArrayBuffer', !0),
	Bu = Xf('Float32Array', !0),
	jr = O0('ArrayBuffer.prototype.byteLength', !0),
	Nu = Mu && !jr && new Mu().slice,
	ku = Nu && T0(Nu),
	Qf =
		jr || ku
			? function (t) {
					if (!t || typeof t != 'object') return !1;
					try {
						return jr ? jr(t) : ku(t, 0), !0;
					} catch {
						return !1;
					}
			  }
			: Bu
			? function (t) {
					try {
						return new Bu(t).buffer === t && !A0(t);
					} catch (r) {
						return typeof t == 'object' && r.name === 'RangeError';
					}
			  }
			: function (t) {
					return !1;
			  },
	x0 = Date.prototype.getDay,
	$0 = function (t) {
		try {
			return x0.call(t), !0;
		} catch {
			return !1;
		}
	},
	q0 = Object.prototype.toString,
	I0 = '[object Date]',
	M0 = et(),
	B0 = function (t) {
		return typeof t != 'object' || t === null ? !1 : M0 ? $0(t) : q0.call(t) === I0;
	},
	vl = ee,
	Jf = et(),
	Zf,
	ep,
	ml,
	yl;
if (Jf) {
	(Zf = vl('Object.prototype.hasOwnProperty')), (ep = vl('RegExp.prototype.exec')), (ml = {});
	var xi = function () {
		throw ml;
	};
	(yl = { toString: xi, valueOf: xi }),
		typeof Symbol.toPrimitive == 'symbol' && (yl[Symbol.toPrimitive] = xi);
}
var N0 = vl('Object.prototype.toString'),
	k0 = Object.getOwnPropertyDescriptor,
	D0 = '[object RegExp]',
	L0 = Jf
		? function (t) {
				if (!t || typeof t != 'object') return !1;
				var r = k0(t, 'lastIndex'),
					n = r && Zf(r, 'value');
				if (!n) return !1;
				try {
					ep(t, yl);
				} catch (a) {
					return a === ml;
				}
		  }
		: function (t) {
				return !t || (typeof t != 'object' && typeof t != 'function') ? !1 : N0(t) === D0;
		  },
	j0 = ee,
	Du = j0('SharedArrayBuffer.prototype.byteLength', !0),
	F0 = Du
		? function (t) {
				if (!t || typeof t != 'object') return !1;
				try {
					return Du(t), !0;
				} catch {
					return !1;
				}
		  }
		: function (t) {
				return !1;
		  },
	U0 = Number.prototype.toString,
	H0 = function (t) {
		try {
			return U0.call(t), !0;
		} catch {
			return !1;
		}
	},
	V0 = Object.prototype.toString,
	W0 = '[object Number]',
	G0 = et(),
	z0 = function (t) {
		return typeof t == 'number' ? !0 : typeof t != 'object' ? !1 : G0 ? H0(t) : V0.call(t) === W0;
	},
	tp = ee,
	K0 = tp('Boolean.prototype.toString'),
	Y0 = tp('Object.prototype.toString'),
	X0 = function (t) {
		try {
			return K0(t), !0;
		} catch {
			return !1;
		}
	},
	Q0 = '[object Boolean]',
	J0 = et(),
	Z0 = function (t) {
		return typeof t == 'boolean'
			? !0
			: t === null || typeof t != 'object'
			? !1
			: J0 && Symbol.toStringTag in t
			? X0(t)
			: Y0(t) === Q0;
	},
	bl = { exports: {} },
	eA = Object.prototype.toString,
	tA = Kl();
if (tA) {
	var rA = Symbol.prototype.toString,
		nA = /^Symbol\(.*\)$/,
		aA = function (t) {
			return typeof t.valueOf() != 'symbol' ? !1 : nA.test(rA.call(t));
		};
	bl.exports = function (t) {
		if (typeof t == 'symbol') return !0;
		if (eA.call(t) !== '[object Symbol]') return !1;
		try {
			return aA(t);
		} catch {
			return !1;
		}
	};
} else
	bl.exports = function (t) {
		return !1;
	};
var oA = bl.exports,
	hl = { exports: {} },
	Lu = typeof BigInt < 'u' && BigInt,
	iA = function () {
		return (
			typeof Lu == 'function' &&
			typeof BigInt == 'function' &&
			typeof Lu(42) == 'bigint' &&
			typeof BigInt(42) == 'bigint'
		);
	},
	lA = iA();
if (lA) {
	var sA = BigInt.prototype.valueOf,
		uA = function (t) {
			try {
				return sA.call(t), !0;
			} catch {}
			return !1;
		};
	hl.exports = function (t) {
		return t === null ||
			typeof t > 'u' ||
			typeof t == 'boolean' ||
			typeof t == 'string' ||
			typeof t == 'number' ||
			typeof t == 'symbol' ||
			typeof t == 'function'
			? !1
			: typeof t == 'bigint'
			? !0
			: uA(t);
	};
} else
	hl.exports = function (t) {
		return !1;
	};
var cA = hl.exports,
	dA = kf,
	fA = z0,
	pA = Z0,
	vA = oA,
	mA = cA,
	yA = function (t) {
		if (t == null || (typeof t != 'object' && typeof t != 'function')) return null;
		if (dA(t)) return 'String';
		if (fA(t)) return 'Number';
		if (pA(t)) return 'Boolean';
		if (vA(t)) return 'Symbol';
		if (mA(t)) return 'BigInt';
	},
	nn = typeof WeakMap == 'function' && WeakMap.prototype ? WeakMap : null,
	ju = typeof WeakSet == 'function' && WeakSet.prototype ? WeakSet : null,
	an;
nn ||
	(an = function (t) {
		return !1;
	});
var gl = nn ? nn.prototype.has : null,
	$i = ju ? ju.prototype.has : null;
!an &&
	!gl &&
	(an = function (t) {
		return !1;
	});
var bA =
		an ||
		function (t) {
			if (!t || typeof t != 'object') return !1;
			try {
				if ((gl.call(t, gl), $i))
					try {
						$i.call(t, $i);
					} catch {
						return !0;
					}
				return t instanceof nn;
			} catch {}
			return !1;
		},
	El = { exports: {} },
	hA = ue,
	rp = ee,
	gA = hA('%WeakSet%', !0),
	qi = rp('WeakSet.prototype.has', !0);
if (qi) {
	var Ii = rp('WeakMap.prototype.has', !0);
	El.exports = function (t) {
		if (!t || typeof t != 'object') return !1;
		try {
			if ((qi(t, qi), Ii))
				try {
					Ii(t, Ii);
				} catch {
					return !0;
				}
			return t instanceof gA;
		} catch {}
		return !1;
	};
} else
	El.exports = function (t) {
		return !1;
	};
var EA = El.exports,
	RA = Lf,
	_A = Ff,
	wA = bA,
	CA = EA,
	PA = function (t) {
		if (t && typeof t == 'object') {
			if (RA(t)) return 'Map';
			if (_A(t)) return 'Set';
			if (wA(t)) return 'WeakMap';
			if (CA(t)) return 'WeakSet';
		}
		return !1;
	},
	SA = ee,
	Fu = SA('ArrayBuffer.prototype.byteLength', !0),
	TA = Qf,
	OA = function (t) {
		return TA(t) ? (Fu ? Fu(t) : t.byteLength) : NaN;
	},
	np = cT,
	ce = ee,
	Uu = TT,
	AA = ue,
	Et = UO,
	xA = Bf,
	Hu = QO,
	Vu = Of,
	Wu = Nf,
	Gu = Qf,
	zu = B0,
	Ku = L0,
	Yu = F0,
	Xu = zl,
	Qu = yA,
	Ju = PA,
	Zu = Yf,
	ec = OA,
	tc = ce('SharedArrayBuffer.prototype.byteLength', !0),
	rc = ce('Date.prototype.getTime'),
	Mi = Object.getPrototypeOf,
	nc = ce('Object.prototype.toString'),
	on = AA('%Set%', !0),
	Rl = ce('Map.prototype.has', !0),
	ln = ce('Map.prototype.get', !0),
	ac = ce('Map.prototype.size', !0),
	sn = ce('Set.prototype.add', !0),
	ap = ce('Set.prototype.delete', !0),
	un = ce('Set.prototype.has', !0),
	Fr = ce('Set.prototype.size', !0);
function oc(e, t, r, n) {
	for (var a = Et(e), o; (o = a.next()) && !o.done; )
		if (ie(t, o.value, r, n)) return ap(e, o.value), !0;
	return !1;
}
function op(e) {
	if (typeof e > 'u') return null;
	if (typeof e != 'object')
		return typeof e == 'symbol' ? !1 : typeof e == 'string' || typeof e == 'number' ? +e == +e : !0;
}
function $A(e, t, r, n, a, o) {
	var i = op(r);
	if (i != null) return i;
	var s = ln(t, i),
		l = np({}, a, { strict: !1 });
	return (typeof s > 'u' && !Rl(t, i)) || !ie(n, s, l, o) ? !1 : !Rl(e, i) && ie(n, s, l, o);
}
function qA(e, t, r) {
	var n = op(r);
	return n ?? (un(t, n) && !un(e, n));
}
function ic(e, t, r, n, a, o) {
	for (var i = Et(e), s, l; (s = i.next()) && !s.done; )
		if (((l = s.value), ie(r, l, a, o) && ie(n, ln(t, l), a, o))) return ap(e, l), !0;
	return !1;
}
function ie(e, t, r, n) {
	var a = r || {};
	if (a.strict ? Hu(e, t) : e === t) return !0;
	var o = Qu(e),
		i = Qu(t);
	if (o !== i) return !1;
	if (!e || !t || (typeof e != 'object' && typeof t != 'object'))
		return a.strict ? Hu(e, t) : e == t;
	var s = n.has(e),
		l = n.has(t),
		u;
	if (s && l) {
		if (n.get(e) === n.get(t)) return !0;
	} else u = {};
	return s || n.set(e, u), l || n.set(t, u), BA(e, t, a, n);
}
function lc(e) {
	return !e ||
		typeof e != 'object' ||
		typeof e.length != 'number' ||
		typeof e.copy != 'function' ||
		typeof e.slice != 'function' ||
		(e.length > 0 && typeof e[0] != 'number')
		? !1
		: !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}
function IA(e, t, r, n) {
	if (Fr(e) !== Fr(t)) return !1;
	for (var a = Et(e), o = Et(t), i, s, l; (i = a.next()) && !i.done; )
		if (i.value && typeof i.value == 'object') l || (l = new on()), sn(l, i.value);
		else if (!un(t, i.value)) {
			if (r.strict || !qA(e, t, i.value)) return !1;
			l || (l = new on()), sn(l, i.value);
		}
	if (l) {
		for (; (s = o.next()) && !s.done; )
			if (s.value && typeof s.value == 'object') {
				if (!oc(l, s.value, r.strict, n)) return !1;
			} else if (!r.strict && !un(e, s.value) && !oc(l, s.value, r.strict, n)) return !1;
		return Fr(l) === 0;
	}
	return !0;
}
function MA(e, t, r, n) {
	if (ac(e) !== ac(t)) return !1;
	for (var a = Et(e), o = Et(t), i, s, l, u, c, d; (i = a.next()) && !i.done; )
		if (((u = i.value[0]), (c = i.value[1]), u && typeof u == 'object'))
			l || (l = new on()), sn(l, u);
		else if (((d = ln(t, u)), (typeof d > 'u' && !Rl(t, u)) || !ie(c, d, r, n))) {
			if (r.strict || !$A(e, t, u, c, r, n)) return !1;
			l || (l = new on()), sn(l, u);
		}
	if (l) {
		for (; (s = o.next()) && !s.done; )
			if (((u = s.value[0]), (d = s.value[1]), u && typeof u == 'object')) {
				if (!ic(l, e, u, d, r, n)) return !1;
			} else if (
				!r.strict &&
				(!e.has(u) || !ie(ln(e, u), d, r, n)) &&
				!ic(l, e, u, d, np({}, r, { strict: !1 }), n)
			)
				return !1;
		return Fr(l) === 0;
	}
	return !0;
}
function BA(e, t, r, n) {
	var a, o;
	if (typeof e != typeof t || e == null || t == null || nc(e) !== nc(t) || Vu(e) !== Vu(t))
		return !1;
	var i = Wu(e),
		s = Wu(t);
	if (i !== s) return !1;
	var l = e instanceof Error,
		u = t instanceof Error;
	if (l !== u || ((l || u) && (e.name !== t.name || e.message !== t.message))) return !1;
	var c = Ku(e),
		d = Ku(t);
	if (c !== d || ((c || d) && (e.source !== t.source || Uu(e) !== Uu(t)))) return !1;
	var f = zu(e),
		m = zu(t);
	if (f !== m || ((f || m) && rc(e) !== rc(t)) || (r.strict && Mi && Mi(e) !== Mi(t))) return !1;
	var y = Zu(e),
		g = Zu(t);
	if (y !== g) return !1;
	if (y || g) {
		if (e.length !== t.length) return !1;
		for (a = 0; a < e.length; a++) if (e[a] !== t[a]) return !1;
		return !0;
	}
	var C = lc(e),
		p = lc(t);
	if (C !== p) return !1;
	if (C || p) {
		if (e.length !== t.length) return !1;
		for (a = 0; a < e.length; a++) if (e[a] !== t[a]) return !1;
		return !0;
	}
	var R = Gu(e),
		_ = Gu(t);
	if (R !== _) return !1;
	if (R || _)
		return ec(e) !== ec(t)
			? !1
			: typeof Uint8Array == 'function' && ie(new Uint8Array(e), new Uint8Array(t), r, n);
	var w = Yu(e),
		P = Yu(t);
	if (w !== P) return !1;
	if (w || P)
		return tc(e) !== tc(t)
			? !1
			: typeof Uint8Array == 'function' && ie(new Uint8Array(e), new Uint8Array(t), r, n);
	if (typeof e != typeof t) return !1;
	var v = Xu(e),
		b = Xu(t);
	if (v.length !== b.length) return !1;
	for (v.sort(), b.sort(), a = v.length - 1; a >= 0; a--) if (v[a] != b[a]) return !1;
	for (a = v.length - 1; a >= 0; a--) if (((o = v[a]), !ie(e[o], t[o], r, n))) return !1;
	var E = Ju(e),
		M = Ju(t);
	return E !== M
		? !1
		: E === 'Set' || M === 'Set'
		? IA(e, t, r, n)
		: E === 'Map'
		? MA(e, t, r, n)
		: !0;
}
var NA = function (t, r, n) {
	return ie(t, r, n, xA());
};
Object.defineProperty(ti, '__esModule', { value: !0 });
ti.default = void 0;
var kA = is(NA),
	DA = is(Je),
	ip = is(At);
function is(e) {
	return e && e.__esModule ? e : { default: e };
}
function Bi(e, t) {
	return FA(e) || jA(e, t) || lp(e, t) || LA();
}
function LA() {
	throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jA(e, t) {
	var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
	if (r != null) {
		var n = [],
			a = !0,
			o = !1,
			i,
			s;
		try {
			for (
				r = r.call(e);
				!(a = (i = r.next()).done) && (n.push(i.value), !(t && n.length === t));
				a = !0
			);
		} catch (l) {
			(o = !0), (s = l);
		} finally {
			try {
				!a && r.return != null && r.return();
			} finally {
				if (o) throw s;
			}
		}
		return n;
	}
}
function FA(e) {
	if (Array.isArray(e)) return e;
}
function UA(e, t) {
	var r = (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
	if (!r) {
		if (Array.isArray(e) || (r = lp(e)) || (t && e && typeof e.length == 'number')) {
			r && (e = r);
			var n = 0,
				a = function () {};
			return {
				s: a,
				n: function () {
					return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
				},
				e: function (u) {
					throw u;
				},
				f: a
			};
		}
		throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
	}
	var o = !0,
		i = !1,
		s;
	return {
		s: function () {
			r = r.call(e);
		},
		n: function () {
			var u = r.next();
			return (o = u.done), u;
		},
		e: function (u) {
			(i = !0), (s = u);
		},
		f: function () {
			try {
				!o && r.return != null && r.return();
			} finally {
				if (i) throw s;
			}
		}
	};
}
function lp(e, t) {
	if (e) {
		if (typeof e == 'string') return sc(e, t);
		var r = Object.prototype.toString.call(e).slice(8, -1);
		if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
			return Array.from(e);
		if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return sc(e, t);
	}
}
function sc(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
	return n;
}
var xe = [],
	uc = ip.default.keys();
for (var Ni = 0; Ni < uc.length; Ni++) {
	var ki = uc[Ni],
		Di = ip.default.get(ki);
	if (Di)
		for (var cc = [].concat(Di.baseConcepts, Di.relatedConcepts), Li = 0; Li < cc.length; Li++) {
			var dc = cc[Li];
			if (dc.module === 'HTML') {
				var ji = dc.concept;
				ji &&
					(function () {
						var e = JSON.stringify(ji),
							t = xe.find(function (o) {
								return JSON.stringify(o[0]) === e;
							}),
							r = void 0;
						t ? (r = t[1]) : (r = []);
						for (var n = !0, a = 0; a < r.length; a++)
							if (r[a] === ki) {
								n = !1;
								break;
							}
						n && r.push(ki), xe.push([ji, r]);
					})();
			}
		}
}
var _l = {
		entries: function () {
			return xe;
		},
		forEach: function (t) {
			var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
				n = UA(xe),
				a;
			try {
				for (n.s(); !(a = n.n()).done; ) {
					var o = Bi(a.value, 2),
						i = o[0],
						s = o[1];
					t.call(r, s, i, xe);
				}
			} catch (l) {
				n.e(l);
			} finally {
				n.f();
			}
		},
		get: function (t) {
			var r = xe.find(function (n) {
				return (0, kA.default)(t, n[0]);
			});
			return r && r[1];
		},
		has: function (t) {
			return !!_l.get(t);
		},
		keys: function () {
			return xe.map(function (t) {
				var r = Bi(t, 1),
					n = r[0];
				return n;
			});
		},
		values: function () {
			return xe.map(function (t) {
				var r = Bi(t, 2),
					n = r[1];
				return n;
			});
		}
	},
	HA = (0, DA.default)(_l, _l.entries());
ti.default = HA;
var ai = {};
Object.defineProperty(ai, '__esModule', { value: !0 });
ai.default = void 0;
var VA = up(Je),
	sp = up(At);
function up(e) {
	return e && e.__esModule ? e : { default: e };
}
function Fi(e, t) {
	return zA(e) || GA(e, t) || cp(e, t) || WA();
}
function WA() {
	throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function GA(e, t) {
	var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
	if (r != null) {
		var n = [],
			a = !0,
			o = !1,
			i,
			s;
		try {
			for (
				r = r.call(e);
				!(a = (i = r.next()).done) && (n.push(i.value), !(t && n.length === t));
				a = !0
			);
		} catch (l) {
			(o = !0), (s = l);
		} finally {
			try {
				!a && r.return != null && r.return();
			} finally {
				if (o) throw s;
			}
		}
		return n;
	}
}
function zA(e) {
	if (Array.isArray(e)) return e;
}
function KA(e, t) {
	var r = (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
	if (!r) {
		if (Array.isArray(e) || (r = cp(e)) || (t && e && typeof e.length == 'number')) {
			r && (e = r);
			var n = 0,
				a = function () {};
			return {
				s: a,
				n: function () {
					return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
				},
				e: function (u) {
					throw u;
				},
				f: a
			};
		}
		throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
	}
	var o = !0,
		i = !1,
		s;
	return {
		s: function () {
			r = r.call(e);
		},
		n: function () {
			var u = r.next();
			return (o = u.done), u;
		},
		e: function (u) {
			(i = !0), (s = u);
		},
		f: function () {
			try {
				!o && r.return != null && r.return();
			} finally {
				if (i) throw s;
			}
		}
	};
}
function cp(e, t) {
	if (e) {
		if (typeof e == 'string') return fc(e, t);
		var r = Object.prototype.toString.call(e).slice(8, -1);
		if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
			return Array.from(e);
		if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return fc(e, t);
	}
}
function fc(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
	return n;
}
var $e = [],
	dp = sp.default.keys(),
	YA = function (t) {
		var r = dp[t],
			n = sp.default.get(r);
		if (n)
			for (var a = [].concat(n.baseConcepts, n.relatedConcepts), o = 0; o < a.length; o++) {
				var i = a[o];
				if (i.module === 'HTML') {
					var s = i.concept;
					if (s) {
						var l = $e.find(function (c) {
								return c[0] === r;
							}),
							u = void 0;
						l ? (u = l[1]) : (u = []), u.push(s), $e.push([r, u]);
					}
				}
			}
	};
for (var Ui = 0; Ui < dp.length; Ui++) YA(Ui);
var wl = {
		entries: function () {
			return $e;
		},
		forEach: function (t) {
			var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
				n = KA($e),
				a;
			try {
				for (n.s(); !(a = n.n()).done; ) {
					var o = Fi(a.value, 2),
						i = o[0],
						s = o[1];
					t.call(r, s, i, $e);
				}
			} catch (l) {
				n.e(l);
			} finally {
				n.f();
			}
		},
		get: function (t) {
			var r = $e.find(function (n) {
				return n[0] === t;
			});
			return r && r[1];
		},
		has: function (t) {
			return !!wl.get(t);
		},
		keys: function () {
			return $e.map(function (t) {
				var r = Fi(t, 1),
					n = r[0];
				return n;
			});
		},
		values: function () {
			return $e.map(function (t) {
				var r = Fi(t, 2),
					n = r[1];
				return n;
			});
		}
	},
	XA = (0, VA.default)(wl, wl.entries());
ai.default = XA;
Object.defineProperty(oe, '__esModule', { value: !0 });
var re = (oe.roles = pp = oe.roleElements = fp = oe.elementRoles = oe.dom = oe.aria = void 0),
	QA = yr(gn),
	JA = yr(Rn),
	ZA = yr(At),
	ex = yr(ti),
	tx = yr(ai);
function yr(e) {
	return e && e.__esModule ? e : { default: e };
}
var rx = QA.default;
oe.aria = rx;
var nx = JA.default;
oe.dom = nx;
var ax = ZA.default;
re = oe.roles = ax;
var ox = ex.default,
	fp = (oe.elementRoles = ox),
	ix = tx.default,
	pp = (oe.roleElements = ix),
	ls = { exports: {} };
ls.exports;
(function (e) {
	var t = (function () {
		var r = String.fromCharCode,
			n = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
			a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$',
			o = {};
		function i(l, u) {
			if (!o[l]) {
				o[l] = {};
				for (var c = 0; c < l.length; c++) o[l][l.charAt(c)] = c;
			}
			return o[l][u];
		}
		var s = {
			compressToBase64: function (l) {
				if (l == null) return '';
				var u = s._compress(l, 6, function (c) {
					return n.charAt(c);
				});
				switch (u.length % 4) {
					default:
					case 0:
						return u;
					case 1:
						return u + '===';
					case 2:
						return u + '==';
					case 3:
						return u + '=';
				}
			},
			decompressFromBase64: function (l) {
				return l == null
					? ''
					: l == ''
					? null
					: s._decompress(l.length, 32, function (u) {
							return i(n, l.charAt(u));
					  });
			},
			compressToUTF16: function (l) {
				return l == null
					? ''
					: s._compress(l, 15, function (u) {
							return r(u + 32);
					  }) + ' ';
			},
			decompressFromUTF16: function (l) {
				return l == null
					? ''
					: l == ''
					? null
					: s._decompress(l.length, 16384, function (u) {
							return l.charCodeAt(u) - 32;
					  });
			},
			compressToUint8Array: function (l) {
				for (
					var u = s.compress(l), c = new Uint8Array(u.length * 2), d = 0, f = u.length;
					d < f;
					d++
				) {
					var m = u.charCodeAt(d);
					(c[d * 2] = m >>> 8), (c[d * 2 + 1] = m % 256);
				}
				return c;
			},
			decompressFromUint8Array: function (l) {
				if (l == null) return s.decompress(l);
				for (var u = new Array(l.length / 2), c = 0, d = u.length; c < d; c++)
					u[c] = l[c * 2] * 256 + l[c * 2 + 1];
				var f = [];
				return (
					u.forEach(function (m) {
						f.push(r(m));
					}),
					s.decompress(f.join(''))
				);
			},
			compressToEncodedURIComponent: function (l) {
				return l == null
					? ''
					: s._compress(l, 6, function (u) {
							return a.charAt(u);
					  });
			},
			decompressFromEncodedURIComponent: function (l) {
				return l == null
					? ''
					: l == ''
					? null
					: ((l = l.replace(/ /g, '+')),
					  s._decompress(l.length, 32, function (u) {
							return i(a, l.charAt(u));
					  }));
			},
			compress: function (l) {
				return s._compress(l, 16, function (u) {
					return r(u);
				});
			},
			_compress: function (l, u, c) {
				if (l == null) return '';
				var d,
					f,
					m = {},
					y = {},
					g = '',
					C = '',
					p = '',
					R = 2,
					_ = 3,
					w = 2,
					P = [],
					v = 0,
					b = 0,
					E;
				for (E = 0; E < l.length; E += 1)
					if (
						((g = l.charAt(E)),
						Object.prototype.hasOwnProperty.call(m, g) || ((m[g] = _++), (y[g] = !0)),
						(C = p + g),
						Object.prototype.hasOwnProperty.call(m, C))
					)
						p = C;
					else {
						if (Object.prototype.hasOwnProperty.call(y, p)) {
							if (p.charCodeAt(0) < 256) {
								for (d = 0; d < w; d++)
									(v = v << 1), b == u - 1 ? ((b = 0), P.push(c(v)), (v = 0)) : b++;
								for (f = p.charCodeAt(0), d = 0; d < 8; d++)
									(v = (v << 1) | (f & 1)),
										b == u - 1 ? ((b = 0), P.push(c(v)), (v = 0)) : b++,
										(f = f >> 1);
							} else {
								for (f = 1, d = 0; d < w; d++)
									(v = (v << 1) | f), b == u - 1 ? ((b = 0), P.push(c(v)), (v = 0)) : b++, (f = 0);
								for (f = p.charCodeAt(0), d = 0; d < 16; d++)
									(v = (v << 1) | (f & 1)),
										b == u - 1 ? ((b = 0), P.push(c(v)), (v = 0)) : b++,
										(f = f >> 1);
							}
							R--, R == 0 && ((R = Math.pow(2, w)), w++), delete y[p];
						} else
							for (f = m[p], d = 0; d < w; d++)
								(v = (v << 1) | (f & 1)),
									b == u - 1 ? ((b = 0), P.push(c(v)), (v = 0)) : b++,
									(f = f >> 1);
						R--, R == 0 && ((R = Math.pow(2, w)), w++), (m[C] = _++), (p = String(g));
					}
				if (p !== '') {
					if (Object.prototype.hasOwnProperty.call(y, p)) {
						if (p.charCodeAt(0) < 256) {
							for (d = 0; d < w; d++)
								(v = v << 1), b == u - 1 ? ((b = 0), P.push(c(v)), (v = 0)) : b++;
							for (f = p.charCodeAt(0), d = 0; d < 8; d++)
								(v = (v << 1) | (f & 1)),
									b == u - 1 ? ((b = 0), P.push(c(v)), (v = 0)) : b++,
									(f = f >> 1);
						} else {
							for (f = 1, d = 0; d < w; d++)
								(v = (v << 1) | f), b == u - 1 ? ((b = 0), P.push(c(v)), (v = 0)) : b++, (f = 0);
							for (f = p.charCodeAt(0), d = 0; d < 16; d++)
								(v = (v << 1) | (f & 1)),
									b == u - 1 ? ((b = 0), P.push(c(v)), (v = 0)) : b++,
									(f = f >> 1);
						}
						R--, R == 0 && ((R = Math.pow(2, w)), w++), delete y[p];
					} else
						for (f = m[p], d = 0; d < w; d++)
							(v = (v << 1) | (f & 1)),
								b == u - 1 ? ((b = 0), P.push(c(v)), (v = 0)) : b++,
								(f = f >> 1);
					R--, R == 0 && ((R = Math.pow(2, w)), w++);
				}
				for (f = 2, d = 0; d < w; d++)
					(v = (v << 1) | (f & 1)),
						b == u - 1 ? ((b = 0), P.push(c(v)), (v = 0)) : b++,
						(f = f >> 1);
				for (;;)
					if (((v = v << 1), b == u - 1)) {
						P.push(c(v));
						break;
					} else b++;
				return P.join('');
			},
			decompress: function (l) {
				return l == null
					? ''
					: l == ''
					? null
					: s._decompress(l.length, 32768, function (u) {
							return l.charCodeAt(u);
					  });
			},
			_decompress: function (l, u, c) {
				var d = [],
					f = 4,
					m = 4,
					y = 3,
					g = '',
					C = [],
					p,
					R,
					_,
					w,
					P,
					v,
					b,
					E = { val: c(0), position: u, index: 1 };
				for (p = 0; p < 3; p += 1) d[p] = p;
				for (_ = 0, P = Math.pow(2, 2), v = 1; v != P; )
					(w = E.val & E.position),
						(E.position >>= 1),
						E.position == 0 && ((E.position = u), (E.val = c(E.index++))),
						(_ |= (w > 0 ? 1 : 0) * v),
						(v <<= 1);
				switch (_) {
					case 0:
						for (_ = 0, P = Math.pow(2, 8), v = 1; v != P; )
							(w = E.val & E.position),
								(E.position >>= 1),
								E.position == 0 && ((E.position = u), (E.val = c(E.index++))),
								(_ |= (w > 0 ? 1 : 0) * v),
								(v <<= 1);
						b = r(_);
						break;
					case 1:
						for (_ = 0, P = Math.pow(2, 16), v = 1; v != P; )
							(w = E.val & E.position),
								(E.position >>= 1),
								E.position == 0 && ((E.position = u), (E.val = c(E.index++))),
								(_ |= (w > 0 ? 1 : 0) * v),
								(v <<= 1);
						b = r(_);
						break;
					case 2:
						return '';
				}
				for (d[3] = b, R = b, C.push(b); ; ) {
					if (E.index > l) return '';
					for (_ = 0, P = Math.pow(2, y), v = 1; v != P; )
						(w = E.val & E.position),
							(E.position >>= 1),
							E.position == 0 && ((E.position = u), (E.val = c(E.index++))),
							(_ |= (w > 0 ? 1 : 0) * v),
							(v <<= 1);
					switch ((b = _)) {
						case 0:
							for (_ = 0, P = Math.pow(2, 8), v = 1; v != P; )
								(w = E.val & E.position),
									(E.position >>= 1),
									E.position == 0 && ((E.position = u), (E.val = c(E.index++))),
									(_ |= (w > 0 ? 1 : 0) * v),
									(v <<= 1);
							(d[m++] = r(_)), (b = m - 1), f--;
							break;
						case 1:
							for (_ = 0, P = Math.pow(2, 16), v = 1; v != P; )
								(w = E.val & E.position),
									(E.position >>= 1),
									E.position == 0 && ((E.position = u), (E.val = c(E.index++))),
									(_ |= (w > 0 ? 1 : 0) * v),
									(v <<= 1);
							(d[m++] = r(_)), (b = m - 1), f--;
							break;
						case 2:
							return C.join('');
					}
					if ((f == 0 && ((f = Math.pow(2, y)), y++), d[b])) g = d[b];
					else if (b === m) g = R + R.charAt(0);
					else return null;
					C.push(g),
						(d[m++] = R + g.charAt(0)),
						f--,
						(R = g),
						f == 0 && ((f = Math.pow(2, y)), y++);
				}
			}
		};
		return s;
	})();
	e != null
		? (e.exports = t)
		: typeof angular < 'u' &&
		  angular != null &&
		  angular.module('LZString', []).factory('LZString', function () {
				return t;
		  });
})(ls);
var lx = ls.exports;
const sx = vm(lx);
function vp(e) {
	return e.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
const ux = (e, t, r, n, a, o, i) => {
		const s = n + r.indent,
			l = r.colors;
		return e
			.map((u) => {
				const c = t[u];
				let d = i(c, r, s, a, o);
				return (
					typeof c != 'string' &&
						(d.indexOf(`
`) !== -1 && (d = r.spacingOuter + s + d + r.spacingOuter + n),
						(d = '{' + d + '}')),
					r.spacingInner +
						n +
						l.prop.open +
						u +
						l.prop.close +
						'=' +
						l.value.open +
						d +
						l.value.close
				);
			})
			.join('');
	},
	cx = 3,
	dx = (e, t, r, n, a, o) =>
		e
			.map((i) => {
				const s = typeof i == 'string' ? mp(i, t) : o(i, t, r, n, a);
				return s === '' && typeof i == 'object' && i !== null && i.nodeType !== cx
					? ''
					: t.spacingOuter + r + s;
			})
			.join(''),
	mp = (e, t) => {
		const r = t.colors.content;
		return r.open + vp(e) + r.close;
	},
	fx = (e, t) => {
		const r = t.colors.comment;
		return r.open + '<!--' + vp(e) + '-->' + r.close;
	},
	px = (e, t, r, n, a) => {
		const o = n.colors.tag;
		return (
			o.open +
			'<' +
			e +
			(t && o.close + t + n.spacingOuter + a + o.open) +
			(r
				? '>' + o.close + r + n.spacingOuter + a + o.open + '</' + e
				: (t && !n.min ? '' : ' ') + '/') +
			'>' +
			o.close
		);
	},
	vx = (e, t) => {
		const r = t.colors.tag;
		return r.open + '<' + e + r.close + ' …' + r.open + ' />' + r.close;
	},
	mx = 1,
	yp = 3,
	bp = 8,
	hp = 11,
	yx = /^((HTML|SVG)\w*)?Element$/,
	bx = (e) => {
		const t = e.constructor.name,
			{ nodeType: r, tagName: n } = e,
			a =
				(typeof n == 'string' && n.includes('-')) ||
				(typeof e.hasAttribute == 'function' && e.hasAttribute('is'));
		return (
			(r === mx && (yx.test(t) || a)) ||
			(r === yp && t === 'Text') ||
			(r === bp && t === 'Comment') ||
			(r === hp && t === 'DocumentFragment')
		);
	};
function hx(e) {
	return e.nodeType === yp;
}
function gx(e) {
	return e.nodeType === bp;
}
function Hi(e) {
	return e.nodeType === hp;
}
function Ex(e) {
	return {
		test: (t) => {
			var r;
			return (t == null || (r = t.constructor) == null ? void 0 : r.name) && bx(t);
		},
		serialize: (t, r, n, a, o, i) => {
			if (hx(t)) return mp(t.data, r);
			if (gx(t)) return fx(t.data, r);
			const s = Hi(t) ? 'DocumentFragment' : t.tagName.toLowerCase();
			return ++a > r.maxDepth
				? vx(s, r)
				: px(
						s,
						ux(
							Hi(t)
								? []
								: Array.from(t.attributes)
										.map((l) => l.name)
										.sort(),
							Hi(t)
								? {}
								: Array.from(t.attributes).reduce((l, u) => ((l[u.name] = u.value), l), {}),
							r,
							n + r.indent,
							a,
							o,
							i
						),
						dx(
							Array.prototype.slice.call(t.childNodes || t.children).filter(e),
							r,
							n + r.indent,
							a,
							o,
							i
						),
						r,
						n
				  );
		}
	};
}
let gp = null,
	ss = null,
	us = null;
try {
	const e = module && module.require;
	(ss = e.call(module, 'fs').readFileSync),
		(us = e.call(module, '@babel/code-frame').codeFrameColumns),
		(gp = e.call(module, 'chalk'));
} catch {}
function Rx(e) {
	const t = e.indexOf('(') + 1,
		r = e.indexOf(')'),
		n = e.slice(t, r),
		a = n.split(':'),
		[o, i, s] = [a[0], parseInt(a[1], 10), parseInt(a[2], 10)];
	let l = '';
	try {
		l = ss(o, 'utf-8');
	} catch {
		return '';
	}
	const u = us(l, { start: { line: i, column: s } }, { highlightCode: !0, linesBelow: 0 });
	return (
		gp.dim(n) +
		`
` +
		u +
		`
`
	);
}
function _x() {
	if (!ss || !us) return '';
	const t = new Error().stack
		.split(
			`
`
		)
		.slice(1)
		.find((r) => !r.includes('node_modules/'));
	return Rx(t);
}
const Ep = 3;
function Vi() {
	return typeof jest < 'u' && jest !== null
		? setTimeout._isMockFunction === !0 || Object.prototype.hasOwnProperty.call(setTimeout, 'clock')
		: !1;
}
function cs() {
	if (typeof window > 'u') throw new Error('Could not find default container');
	return window.document;
}
function Rp(e) {
	if (e.defaultView) return e.defaultView;
	if (e.ownerDocument && e.ownerDocument.defaultView) return e.ownerDocument.defaultView;
	if (e.window) return e.window;
	throw e.ownerDocument && e.ownerDocument.defaultView === null
		? new Error('It looks like the window object is not available for the provided node.')
		: e.then instanceof Function
		? new Error(
				'It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?'
		  )
		: Array.isArray(e)
		? new Error(
				'It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?'
		  )
		: typeof e.debug == 'function' && typeof e.logTestingPlaygroundURL == 'function'
		? new Error(
				'It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?'
		  )
		: new Error('The given node is not an Element, the node type is: ' + typeof e + '.');
}
function we(e) {
	if (!e || typeof e.querySelector != 'function' || typeof e.querySelectorAll != 'function')
		throw new TypeError(
			'Expected container to be an Element, a Document or a DocumentFragment but got ' + t(e) + '.'
		);
	function t(r) {
		return typeof r == 'object' ? (r === null ? 'null' : r.constructor.name) : typeof r;
	}
}
const wx = () => {
		let e;
		try {
			var t, r;
			e = JSON.parse((t = process) == null || (r = t.env) == null ? void 0 : r.COLORS);
		} catch {}
		return typeof e == 'boolean'
			? e
			: typeof process < 'u' && process.versions !== void 0 && process.versions.node !== void 0;
	},
	{ DOMCollection: Cx } = Hl,
	Px = 1,
	Sx = 8;
function Tx(e) {
	return e.nodeType !== Sx && (e.nodeType !== Px || !e.matches(x().defaultIgnore));
}
function Jt(e, t, r) {
	if (
		(r === void 0 && (r = {}),
		e || (e = cs().body),
		typeof t != 'number' && (t = (typeof process < 'u' && {}.DEBUG_PRINT_LIMIT) || 7e3),
		t === 0)
	)
		return '';
	e.documentElement && (e = e.documentElement);
	let n = typeof e;
	if ((n === 'object' ? (n = e.constructor.name) : (e = {}), !('outerHTML' in e)))
		throw new TypeError('Expected an element or document but got ' + n);
	const { filterNode: a = Tx, ...o } = r,
		i = Nd(e, { plugins: [Ex(a), Cx], printFunctionName: !1, highlight: wx(), ...o });
	return t !== void 0 && e.outerHTML.length > t ? i.slice(0, t) + '...' : i;
}
const Cl = function () {
	const e = _x();
	console.log(
		e
			? Jt(...arguments) +
					`

` +
					e
			: Jt(...arguments)
	);
};
let Ke = {
	testIdAttribute: 'data-testid',
	asyncUtilTimeout: 1e3,
	asyncWrapper: (e) => e(),
	unstable_advanceTimersWrapper: (e) => e(),
	eventWrapper: (e) => e(),
	defaultHidden: !1,
	defaultIgnore: 'script, style',
	showOriginalStackTrace: !1,
	throwSuggestions: !1,
	getElementError(e, t) {
		const r = Jt(t),
			n = new Error(
				[
					e,
					'Ignored nodes: comments, ' +
						Ke.defaultIgnore +
						`
` +
						r
				].filter(Boolean).join(`

`)
			);
		return (n.name = 'TestingLibraryElementError'), n;
	},
	_disableExpensiveErrorDiagnostics: !1,
	computedStyleSupportsPseudoElements: !1
};
function Ox(e) {
	try {
		return (Ke._disableExpensiveErrorDiagnostics = !0), e();
	} finally {
		Ke._disableExpensiveErrorDiagnostics = !1;
	}
}
function Ax(e) {
	typeof e == 'function' && (e = e(Ke)), (Ke = { ...Ke, ...e });
}
function x() {
	return Ke;
}
const xx = ['button', 'meter', 'output', 'progress', 'select', 'textarea', 'input'];
function _p(e) {
	return xx.includes(e.nodeName.toLowerCase())
		? ''
		: e.nodeType === Ep
		? e.textContent
		: Array.from(e.childNodes)
				.map((t) => _p(t))
				.join('');
}
function Pl(e) {
	let t;
	return e.tagName.toLowerCase() === 'label' ? (t = _p(e)) : (t = e.value || e.textContent), t;
}
function wp(e) {
	if (e.labels !== void 0) {
		var t;
		return (t = e.labels) != null ? t : [];
	}
	if (!$x(e)) return [];
	const r = e.ownerDocument.querySelectorAll('label');
	return Array.from(r).filter((n) => n.control === e);
}
function $x(e) {
	return (
		/BUTTON|METER|OUTPUT|PROGRESS|SELECT|TEXTAREA/.test(e.tagName) ||
		(e.tagName === 'INPUT' && e.getAttribute('type') !== 'hidden')
	);
}
function Cp(e, t, r) {
	let { selector: n = '*' } = r === void 0 ? {} : r;
	const a = t.getAttribute('aria-labelledby'),
		o = a ? a.split(' ') : [];
	return o.length
		? o.map((i) => {
				const s = e.querySelector('[id="' + i + '"]');
				return s ? { content: Pl(s), formControl: null } : { content: '', formControl: null };
		  })
		: Array.from(wp(t)).map((i) => {
				const s = Pl(i),
					l = 'button, input, meter, output, progress, select, textarea',
					u = Array.from(i.querySelectorAll(l)).filter((c) => c.matches(n))[0];
				return { content: s, formControl: u };
		  });
}
function Pp(e) {
	if (e == null)
		throw new Error(
			'It looks like ' +
				e +
				' was passed instead of a matcher. Did you do something like getByText(' +
				e +
				')?'
		);
}
function qt(e, t, r, n) {
	if (typeof e != 'string') return !1;
	Pp(r);
	const a = n(e);
	return typeof r == 'string' || typeof r == 'number'
		? a.toLowerCase().includes(r.toString().toLowerCase())
		: typeof r == 'function'
		? r(a, t)
		: Sp(r, a);
}
function ge(e, t, r, n) {
	if (typeof e != 'string') return !1;
	Pp(r);
	const a = n(e);
	return r instanceof Function ? r(a, t) : r instanceof RegExp ? Sp(r, a) : a === String(r);
}
function ds(e) {
	let { trim: t = !0, collapseWhitespace: r = !0 } = e === void 0 ? {} : e;
	return (n) => {
		let a = n;
		return (a = t ? a.trim() : a), (a = r ? a.replace(/\s+/g, ' ') : a), a;
	};
}
function tt(e) {
	let { trim: t, collapseWhitespace: r, normalizer: n } = e;
	if (!n) return ds({ trim: t, collapseWhitespace: r });
	if (typeof t < 'u' || typeof r < 'u')
		throw new Error(
			'trim and collapseWhitespace are not supported with a normalizer. If you want to use the default trim and collapseWhitespace logic in your normalizer, use "getDefaultNormalizer({trim, collapseWhitespace})" and compose that into your normalizer'
		);
	return n;
}
function Sp(e, t) {
	const r = e.test(t);
	return (
		e.global &&
			e.lastIndex !== 0 &&
			(console.warn(
				'To match all elements we had to reset the lastIndex of the RegExp because the global flag is enabled. We encourage to remove the global flag from the RegExp.'
			),
			(e.lastIndex = 0)),
		r
	);
}
function br(e) {
	return e.matches('input[type=submit], input[type=button], input[type=reset]')
		? e.value
		: Array.from(e.childNodes)
				.filter((t) => t.nodeType === Ep && !!t.textContent)
				.map((t) => t.textContent)
				.join('');
}
const qx = Ix(fp);
function Tp(e) {
	return (
		e.hidden === !0 ||
		e.getAttribute('aria-hidden') === 'true' ||
		e.ownerDocument.defaultView.getComputedStyle(e).display === 'none'
	);
}
function oi(e, t) {
	t === void 0 && (t = {});
	const { isSubtreeInaccessible: r = Tp } = t;
	if (e.ownerDocument.defaultView.getComputedStyle(e).visibility === 'hidden') return !0;
	let a = e;
	for (; a; ) {
		if (r(a)) return !0;
		a = a.parentElement;
	}
	return !1;
}
function fs(e) {
	for (const { match: t, roles: r } of qx) if (t(e)) return [...r];
	return [];
}
function Ix(e) {
	function t(i) {
		let { name: s, attributes: l } = i;
		return (
			'' +
			s +
			l
				.map((u) => {
					let { name: c, value: d, constraints: f = [] } = u;
					return f.indexOf('undefined') !== -1
						? ':not([' + c + '])'
						: d
						? '[' + c + '="' + d + '"]'
						: '[' + c + ']';
				})
				.join('')
		);
	}
	function r(i) {
		let { attributes: s = [] } = i;
		return s.length;
	}
	function n(i, s) {
		let { specificity: l } = i,
			{ specificity: u } = s;
		return u - l;
	}
	function a(i) {
		let { attributes: s = [] } = i;
		const l = s.findIndex((c) => c.value && c.name === 'type' && c.value === 'text');
		l >= 0 && (s = [...s.slice(0, l), ...s.slice(l + 1)]);
		const u = t({ ...i, attributes: s });
		return (c) => (l >= 0 && c.type !== 'text' ? !1 : c.matches(u));
	}
	let o = [];
	for (const [i, s] of e.entries())
		o = [...o, { match: a(i), roles: Array.from(s), specificity: r(i) }];
	return o.sort(n);
}
function Op(e, t) {
	let { hidden: r = !1 } = t === void 0 ? {} : t;
	function n(a) {
		return [a, ...Array.from(a.children).reduce((o, i) => [...o, ...n(i)], [])];
	}
	return n(e)
		.filter((a) => (r === !1 ? oi(a) === !1 : !0))
		.reduce((a, o) => {
			let i = [];
			return (
				o.hasAttribute('role') ? (i = o.getAttribute('role').split(' ').slice(0, 1)) : (i = fs(o)),
				i.reduce(
					(s, l) => (Array.isArray(s[l]) ? { ...s, [l]: [...s[l], o] } : { ...s, [l]: [o] }),
					a
				)
			);
		}, {});
}
function Ap(e, t) {
	let { hidden: r, includeDescription: n } = t;
	const a = Op(e, { hidden: r });
	return Object.entries(a)
		.filter((o) => {
			let [i] = o;
			return i !== 'generic';
		})
		.map((o) => {
			let [i, s] = o;
			const l = '-'.repeat(50),
				u = s.map((c) => {
					const d =
							'Name "' +
							Wl(c, {
								computedStyleSupportsPseudoElements: x().computedStyleSupportsPseudoElements
							}) +
							`":
`,
						f = Jt(c.cloneNode(!1));
					if (n) {
						const m =
							'Description "' +
							rf(c, {
								computedStyleSupportsPseudoElements: x().computedStyleSupportsPseudoElements
							}) +
							`":
`;
						return '' + d + m + f;
					}
					return '' + d + f;
				}).join(`

`);
			return (
				i +
				`:

` +
				u +
				`

` +
				l
			);
		}).join(`
`);
}
const Mx = function (e, t) {
	let { hidden: r = !1 } = t === void 0 ? {} : t;
	return console.log(Ap(e, { hidden: r }));
};
function Bx(e) {
	return e.tagName === 'OPTION' ? e.selected : hr(e, 'aria-selected');
}
function Nx(e) {
	return e.getAttribute('aria-busy') === 'true';
}
function kx(e) {
	if (!('indeterminate' in e && e.indeterminate))
		return 'checked' in e ? e.checked : hr(e, 'aria-checked');
}
function Dx(e) {
	return hr(e, 'aria-pressed');
}
function Lx(e) {
	var t, r;
	return (t = (r = hr(e, 'aria-current')) != null ? r : e.getAttribute('aria-current')) != null
		? t
		: !1;
}
function jx(e) {
	return hr(e, 'aria-expanded');
}
function hr(e, t) {
	const r = e.getAttribute(t);
	if (r === 'true') return !0;
	if (r === 'false') return !1;
}
function Fx(e) {
	const t = { H1: 1, H2: 2, H3: 3, H4: 4, H5: 5, H6: 6 };
	return (e.getAttribute('aria-level') && Number(e.getAttribute('aria-level'))) || t[e.tagName];
}
function Ux(e) {
	const t = e.getAttribute('aria-valuenow');
	return t === null ? void 0 : +t;
}
function Hx(e) {
	const t = e.getAttribute('aria-valuemax');
	return t === null ? void 0 : +t;
}
function Vx(e) {
	const t = e.getAttribute('aria-valuemin');
	return t === null ? void 0 : +t;
}
function Wx(e) {
	const t = e.getAttribute('aria-valuetext');
	return t === null ? void 0 : t;
}
const pc = ds();
function Gx(e) {
	return e.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
}
function vc(e) {
	return new RegExp(Gx(e.toLowerCase()), 'i');
}
function Pe(e, t, r, n) {
	let { variant: a, name: o } = n,
		i = '';
	const s = {},
		l = [['Role', 'TestId'].includes(e) ? r : vc(r)];
	o && (s.name = vc(o)),
		e === 'Role' &&
			oi(t) &&
			((s.hidden = !0),
			(i = `Element is inaccessible. This means that the element and all its children are invisible to screen readers.
    If you are using the aria-hidden prop, make sure this is the right choice for your case.
    `)),
		Object.keys(s).length > 0 && l.push(s);
	const u = a + 'By' + e;
	return {
		queryName: e,
		queryMethod: u,
		queryArgs: l,
		variant: a,
		warning: i,
		toString() {
			i && console.warn(i);
			let [c, d] = l;
			return (
				(c = typeof c == 'string' ? "'" + c + "'" : c),
				(d = d
					? ', { ' +
					  Object.entries(d)
							.map((f) => {
								let [m, y] = f;
								return m + ': ' + y;
							})
							.join(', ') +
					  ' }'
					: ''),
				u + '(' + c + d + ')'
			);
		}
	};
}
function Se(e, t, r) {
	return r && (!t || t.toLowerCase() === e.toLowerCase());
}
function cn(e, t, r) {
	var n, a;
	if ((t === void 0 && (t = 'get'), e.matches(x().defaultIgnore))) return;
	const o = (n = e.getAttribute('role')) != null ? n : (a = fs(e)) == null ? void 0 : a[0];
	if (o !== 'generic' && Se('Role', r, o))
		return Pe('Role', e, o, {
			variant: t,
			name: Wl(e, { computedStyleSupportsPseudoElements: x().computedStyleSupportsPseudoElements })
		});
	const i = Cp(document, e)
		.map((f) => f.content)
		.join(' ');
	if (Se('LabelText', r, i)) return Pe('LabelText', e, i, { variant: t });
	const s = e.getAttribute('placeholder');
	if (Se('PlaceholderText', r, s)) return Pe('PlaceholderText', e, s, { variant: t });
	const l = pc(br(e));
	if (Se('Text', r, l)) return Pe('Text', e, l, { variant: t });
	if (Se('DisplayValue', r, e.value)) return Pe('DisplayValue', e, pc(e.value), { variant: t });
	const u = e.getAttribute('alt');
	if (Se('AltText', r, u)) return Pe('AltText', e, u, { variant: t });
	const c = e.getAttribute('title');
	if (Se('Title', r, c)) return Pe('Title', e, c, { variant: t });
	const d = e.getAttribute(x().testIdAttribute);
	if (Se('TestId', r, d)) return Pe('TestId', e, d, { variant: t });
}
function Pr(e, t) {
	e.stack = t.stack.replace(t.message, e.message);
}
function zx(e, t) {
	let {
		container: r = cs(),
		timeout: n = x().asyncUtilTimeout,
		showOriginalStackTrace: a = x().showOriginalStackTrace,
		stackTraceError: o,
		interval: i = 50,
		onTimeout: s = (u) => ((u.message = x().getElementError(u.message, r).message), u),
		mutationObserverOptions: l = { subtree: !0, childList: !0, attributes: !0, characterData: !0 }
	} = t;
	if (typeof e != 'function') throw new TypeError('Received `callback` arg must be a function');
	return new Promise(async (u, c) => {
		let d,
			f,
			m,
			y = !1,
			g = 'idle';
		const C = setTimeout(P, n),
			p = Vi();
		if (p) {
			const { unstable_advanceTimersWrapper: v } = x();
			for (w(); !y; ) {
				if (!Vi()) {
					const b = new Error(
						"Changed from using fake timers to real timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to real timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830"
					);
					a || Pr(b, o), c(b);
					return;
				}
				if (
					(await v(async () => {
						jest.advanceTimersByTime(i);
					}),
					w(),
					y)
				)
					break;
			}
		} else {
			try {
				we(r);
			} catch (b) {
				c(b);
				return;
			}
			f = setInterval(_, i);
			const { MutationObserver: v } = Rp(r);
			(m = new v(_)), m.observe(r, l), w();
		}
		function R(v, b) {
			(y = !0), clearTimeout(C), p || (clearInterval(f), m.disconnect()), v ? c(v) : u(b);
		}
		function _() {
			if (Vi()) {
				const v = new Error(
					"Changed from using real timers to fake timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to fake timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830"
				);
				return a || Pr(v, o), c(v);
			} else return w();
		}
		function w() {
			if (g !== 'pending')
				try {
					const v = Ox(e);
					typeof (v == null ? void 0 : v.then) == 'function'
						? ((g = 'pending'),
						  v.then(
								(b) => {
									(g = 'resolved'), R(null, b);
								},
								(b) => {
									(g = 'rejected'), (d = b);
								}
						  ))
						: R(null, v);
				} catch (v) {
					d = v;
				}
		}
		function P() {
			let v;
			d
				? ((v = d), !a && v.name === 'TestingLibraryElementError' && Pr(v, o))
				: ((v = new Error('Timed out in waitFor.')), a || Pr(v, o)),
				R(s(v), null);
		}
	});
}
function ps(e, t) {
	const r = new Error('STACK_TRACE_MESSAGE');
	return x().asyncWrapper(() => zx(e, { stackTraceError: r, ...t }));
}
function ii(e, t) {
	return x().getElementError(e, t);
}
function li(e, t) {
	return ii(
		e +
			'\n\n(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).',
		t
	);
}
function rt(e, t, r, n) {
	let { exact: a = !0, collapseWhitespace: o, trim: i, normalizer: s } = n === void 0 ? {} : n;
	const l = a ? ge : qt,
		u = tt({ collapseWhitespace: o, trim: i, normalizer: s });
	return Array.from(t.querySelectorAll('[' + e + ']')).filter((c) => l(c.getAttribute(e), c, r, u));
}
function xp(e, t, r, n) {
	const a = rt(e, t, r, n);
	if (a.length > 1) throw li('Found multiple elements by [' + e + '=' + r + ']', t);
	return a[0] || null;
}
function Rt(e, t) {
	return function (r) {
		for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
			a[o - 1] = arguments[o];
		const i = e(r, ...a);
		if (i.length > 1) {
			const s = i.map((l) => ii(null, l).message).join(`

`);
			throw li(
				t(r, ...a) +
					`

Here are the matching elements:

` +
					s,
				r
			);
		}
		return i[0] || null;
	};
}
function $p(e, t) {
	return x().getElementError(
		`A better query is available, try this:
` +
			e.toString() +
			`
`,
		t
	);
}
function vs(e, t) {
	return function (r) {
		for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
			a[o - 1] = arguments[o];
		const i = e(r, ...a);
		if (!i.length) throw x().getElementError(t(r, ...a), r);
		return i;
	};
}
function _t(e) {
	return (t, r, n, a) => ps(() => e(t, r, n), { container: t, ...a });
}
const Fe = (e, t, r) =>
		function (n) {
			for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), i = 1; i < a; i++)
				o[i - 1] = arguments[i];
			const s = e(n, ...o),
				[{ suggest: l = x().throwSuggestions } = {}] = o.slice(-1);
			if (s && l) {
				const u = cn(s, r);
				if (u && !t.endsWith(u.queryName)) throw $p(u.toString(), n);
			}
			return s;
		},
	Q = (e, t, r) =>
		function (n) {
			for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), i = 1; i < a; i++)
				o[i - 1] = arguments[i];
			const s = e(n, ...o),
				[{ suggest: l = x().throwSuggestions } = {}] = o.slice(-1);
			if (s.length && l) {
				const u = [
					...new Set(
						s.map((c) => {
							var d;
							return (d = cn(c, r)) == null ? void 0 : d.toString();
						})
					)
				];
				if (u.length === 1 && !t.endsWith(cn(s[0], r).queryName)) throw $p(u[0], n);
			}
			return s;
		};
function Ce(e, t, r) {
	const n = Fe(Rt(e, t), e.name, 'query'),
		a = vs(e, r),
		o = Rt(a, t),
		i = Fe(o, e.name, 'get'),
		s = Q(a, e.name.replace('query', 'get'), 'getAll'),
		l = _t(Q(a, e.name, 'findAll')),
		u = _t(Fe(o, e.name, 'find'));
	return [n, s, i, l, u];
}
var Kx = Object.freeze({
	__proto__: null,
	getElementError: ii,
	wrapAllByQueryWithSuggestion: Q,
	wrapSingleQueryWithSuggestion: Fe,
	getMultipleElementsFoundError: li,
	queryAllByAttribute: rt,
	queryByAttribute: xp,
	makeSingleQuery: Rt,
	makeGetAllQuery: vs,
	makeFindQuery: _t,
	buildQueries: Ce
});
function Yx(e) {
	return Array.from(e.querySelectorAll('label,input'))
		.map((t) => ({ node: t, textToMatch: Pl(t) }))
		.filter((t) => {
			let { textToMatch: r } = t;
			return r !== null;
		});
}
const Xx = function (e, t, r) {
		let { exact: n = !0, trim: a, collapseWhitespace: o, normalizer: i } = r === void 0 ? {} : r;
		const s = n ? ge : qt,
			l = tt({ collapseWhitespace: o, trim: a, normalizer: i });
		return Yx(e)
			.filter((c) => {
				let { node: d, textToMatch: f } = c;
				return s(f, d, t, l);
			})
			.map((c) => {
				let { node: d } = c;
				return d;
			});
	},
	Zt = function (e, t, r) {
		let {
			selector: n = '*',
			exact: a = !0,
			collapseWhitespace: o,
			trim: i,
			normalizer: s
		} = r === void 0 ? {} : r;
		we(e);
		const l = a ? ge : qt,
			u = tt({ collapseWhitespace: o, trim: i, normalizer: s }),
			c = Array.from(e.querySelectorAll('*'))
				.filter((d) => wp(d).length || d.hasAttribute('aria-labelledby'))
				.reduce((d, f) => {
					const m = Cp(e, f, { selector: n });
					m.filter((g) => !!g.formControl).forEach((g) => {
						l(g.content, g.formControl, t, u) && g.formControl && d.push(g.formControl);
					});
					const y = m.filter((g) => !!g.content).map((g) => g.content);
					return (
						l(y.join(' '), f, t, u) && d.push(f),
						y.length > 1 &&
							y.forEach((g, C) => {
								l(g, f, t, u) && d.push(f);
								const p = [...y];
								p.splice(C, 1), p.length > 1 && l(p.join(' '), f, t, u) && d.push(f);
							}),
						d
					);
				}, [])
				.concat(rt('aria-label', e, t, { exact: a, normalizer: u }));
		return Array.from(new Set(c)).filter((d) => d.matches(n));
	},
	Ye = function (e, t) {
		for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
			n[a - 2] = arguments[a];
		const o = Zt(e, t, ...n);
		if (!o.length) {
			const i = Xx(e, t, ...n);
			if (i.length) {
				const s = i.map((l) => Qx(e, l)).filter((l) => !!l);
				throw s.length
					? x().getElementError(
							s.map(
								(l) =>
									'Found a label with the text of: ' +
									t +
									', however the element associated with this label (<' +
									l +
									' />) is non-labellable [https://html.spec.whatwg.org/multipage/forms.html#category-label]. If you really need to label a <' +
									l +
									' />, you can use aria-label or aria-labelledby instead.'
							).join(`

`),
							e
					  )
					: x().getElementError(
							'Found a label with the text of: ' +
								t +
								`, however no form control was found associated to that label. Make sure you're using the "for" attribute or "aria-labelledby" attribute correctly.`,
							e
					  );
			} else throw x().getElementError('Unable to find a label with the text of: ' + t, e);
		}
		return o;
	};
function Qx(e, t) {
	const r = t.getAttribute('for');
	if (!r) return null;
	const n = e.querySelector('[id="' + r + '"]');
	return n ? n.tagName.toLowerCase() : null;
}
const qp = (e, t) => 'Found multiple elements with the text of: ' + t,
	Ip = Fe(Rt(Zt, qp), Zt.name, 'query'),
	Mp = Rt(Ye, qp),
	Bp = _t(Q(Ye, Ye.name, 'findAll')),
	Np = _t(Fe(Mp, Ye.name, 'find')),
	kp = Q(Ye, Ye.name, 'getAll'),
	Dp = Fe(Mp, Ye.name, 'get'),
	Lp = Q(Zt, Zt.name, 'queryAll'),
	Sl = function () {
		for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
		return we(t[0]), rt('placeholder', ...t);
	},
	Jx = (e, t) => 'Found multiple elements with the placeholder text of: ' + t,
	Zx = (e, t) => 'Unable to find an element with the placeholder text of: ' + t,
	jp = Q(Sl, Sl.name, 'queryAll'),
	[Fp, Up, Hp, Vp, Wp] = Ce(Sl, Jx, Zx),
	Tl = function (e, t, r) {
		let {
			selector: n = '*',
			exact: a = !0,
			collapseWhitespace: o,
			trim: i,
			ignore: s = x().defaultIgnore,
			normalizer: l
		} = r === void 0 ? {} : r;
		we(e);
		const u = a ? ge : qt,
			c = tt({ collapseWhitespace: o, trim: i, normalizer: l });
		let d = [];
		return (
			typeof e.matches == 'function' && e.matches(n) && (d = [e]),
			[...d, ...Array.from(e.querySelectorAll(n))]
				.filter((f) => !s || !f.matches(s))
				.filter((f) => u(br(f), f, t, c))
		);
	},
	e1 = (e, t) => 'Found multiple elements with the text: ' + t,
	t1 = function (e, t, r) {
		r === void 0 && (r = {});
		const { collapseWhitespace: n, trim: a, normalizer: o, selector: i } = r,
			l = tt({ collapseWhitespace: n, trim: a, normalizer: o })(t.toString()),
			u = l !== t.toString(),
			c = (i ?? '*') !== '*';
		return (
			'Unable to find an element with the text: ' +
			(u ? l + " (normalized from '" + t + "')" : t) +
			(c ? ", which matches selector '" + i + "'" : '') +
			'. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.'
		);
	},
	Gp = Q(Tl, Tl.name, 'queryAll'),
	[zp, Kp, Yp, Xp, Qp] = Ce(Tl, e1, t1),
	Ol = function (e, t, r) {
		let { exact: n = !0, collapseWhitespace: a, trim: o, normalizer: i } = r === void 0 ? {} : r;
		we(e);
		const s = n ? ge : qt,
			l = tt({ collapseWhitespace: a, trim: o, normalizer: i });
		return Array.from(e.querySelectorAll('input,textarea,select')).filter((u) =>
			u.tagName === 'SELECT'
				? Array.from(u.options)
						.filter((d) => d.selected)
						.some((d) => s(br(d), d, t, l))
				: s(u.value, u, t, l)
		);
	},
	r1 = (e, t) => 'Found multiple elements with the display value: ' + t + '.',
	n1 = (e, t) => 'Unable to find an element with the display value: ' + t + '.',
	Jp = Q(Ol, Ol.name, 'queryAll'),
	[Zp, ev, tv, rv, nv] = Ce(Ol, r1, n1),
	a1 = /^(img|input|area|.+-.+)$/i,
	Al = function (e, t, r) {
		return r === void 0 && (r = {}), we(e), rt('alt', e, t, r).filter((n) => a1.test(n.tagName));
	},
	o1 = (e, t) => 'Found multiple elements with the alt text: ' + t,
	i1 = (e, t) => 'Unable to find an element with the alt text: ' + t,
	av = Q(Al, Al.name, 'queryAll'),
	[ov, iv, lv, sv, uv] = Ce(Al, o1, i1),
	l1 = (e) => {
		var t;
		return (
			e.tagName.toLowerCase() === 'title' &&
			((t = e.parentElement) == null ? void 0 : t.tagName.toLowerCase()) === 'svg'
		);
	},
	xl = function (e, t, r) {
		let { exact: n = !0, collapseWhitespace: a, trim: o, normalizer: i } = r === void 0 ? {} : r;
		we(e);
		const s = n ? ge : qt,
			l = tt({ collapseWhitespace: a, trim: o, normalizer: i });
		return Array.from(e.querySelectorAll('[title], svg > title')).filter(
			(u) => s(u.getAttribute('title'), u, t, l) || (l1(u) && s(br(u), u, t, l))
		);
	},
	s1 = (e, t) => 'Found multiple elements with the title: ' + t + '.',
	u1 = (e, t) => 'Unable to find an element with the title: ' + t + '.',
	cv = Q(xl, xl.name, 'queryAll'),
	[dv, fv, pv, vv, mv] = Ce(xl, s1, u1),
	$l = function (e, t, r) {
		let {
			hidden: n = x().defaultHidden,
			name: a,
			description: o,
			queryFallbacks: i = !1,
			selected: s,
			busy: l,
			checked: u,
			pressed: c,
			current: d,
			level: f,
			expanded: m,
			value: { now: y, min: g, max: C, text: p } = {}
		} = r === void 0 ? {} : r;
		if ((we(e), s !== void 0)) {
			var R;
			if (((R = re.get(t)) == null ? void 0 : R.props['aria-selected']) === void 0)
				throw new Error('"aria-selected" is not supported on role "' + t + '".');
		}
		if (l !== void 0) {
			var _;
			if (((_ = re.get(t)) == null ? void 0 : _.props['aria-busy']) === void 0)
				throw new Error('"aria-busy" is not supported on role "' + t + '".');
		}
		if (u !== void 0) {
			var w;
			if (((w = re.get(t)) == null ? void 0 : w.props['aria-checked']) === void 0)
				throw new Error('"aria-checked" is not supported on role "' + t + '".');
		}
		if (c !== void 0) {
			var P;
			if (((P = re.get(t)) == null ? void 0 : P.props['aria-pressed']) === void 0)
				throw new Error('"aria-pressed" is not supported on role "' + t + '".');
		}
		if (d !== void 0) {
			var v;
			if (((v = re.get(t)) == null ? void 0 : v.props['aria-current']) === void 0)
				throw new Error('"aria-current" is not supported on role "' + t + '".');
		}
		if (f !== void 0 && t !== 'heading')
			throw new Error('Role "' + t + '" cannot have "level" property.');
		if (y !== void 0) {
			var b;
			if (((b = re.get(t)) == null ? void 0 : b.props['aria-valuenow']) === void 0)
				throw new Error('"aria-valuenow" is not supported on role "' + t + '".');
		}
		if (C !== void 0) {
			var E;
			if (((E = re.get(t)) == null ? void 0 : E.props['aria-valuemax']) === void 0)
				throw new Error('"aria-valuemax" is not supported on role "' + t + '".');
		}
		if (g !== void 0) {
			var M;
			if (((M = re.get(t)) == null ? void 0 : M.props['aria-valuemin']) === void 0)
				throw new Error('"aria-valuemin" is not supported on role "' + t + '".');
		}
		if (p !== void 0) {
			var G;
			if (((G = re.get(t)) == null ? void 0 : G.props['aria-valuetext']) === void 0)
				throw new Error('"aria-valuetext" is not supported on role "' + t + '".');
		}
		if (m !== void 0) {
			var D;
			if (((D = re.get(t)) == null ? void 0 : D.props['aria-expanded']) === void 0)
				throw new Error('"aria-expanded" is not supported on role "' + t + '".');
		}
		const z = new WeakMap();
		function K(S) {
			return z.has(S) || z.set(S, Tp(S)), z.get(S);
		}
		return Array.from(e.querySelectorAll(c1(t)))
			.filter((S) => {
				if (S.hasAttribute('role')) {
					const ve = S.getAttribute('role');
					if (i)
						return ve
							.split(' ')
							.filter(Boolean)
							.some((fm) => fm === t);
					const [Mt] = ve.split(' ');
					return Mt === t;
				}
				return fs(S).some((ve) => ve === t);
			})
			.filter((S) => {
				if (s !== void 0) return s === Bx(S);
				if (l !== void 0) return l === Nx(S);
				if (u !== void 0) return u === kx(S);
				if (c !== void 0) return c === Dx(S);
				if (d !== void 0) return d === Lx(S);
				if (m !== void 0) return m === jx(S);
				if (f !== void 0) return f === Fx(S);
				if (y !== void 0 || C !== void 0 || g !== void 0 || p !== void 0) {
					let j = !0;
					if (
						(y !== void 0 && j && (j = y === Ux(S)),
						C !== void 0 && j && (j = C === Hx(S)),
						g !== void 0 && j && (j = g === Vx(S)),
						p !== void 0)
					) {
						var $;
						j && (j = ge(($ = Wx(S)) != null ? $ : null, S, p, (ve) => ve));
					}
					return j;
				}
				return !0;
			})
			.filter((S) =>
				a === void 0
					? !0
					: ge(
							Wl(S, {
								computedStyleSupportsPseudoElements: x().computedStyleSupportsPseudoElements
							}),
							S,
							a,
							($) => $
					  )
			)
			.filter((S) =>
				o === void 0
					? !0
					: ge(
							rf(S, {
								computedStyleSupportsPseudoElements: x().computedStyleSupportsPseudoElements
							}),
							S,
							o,
							($) => $
					  )
			)
			.filter((S) => (n === !1 ? oi(S, { isSubtreeInaccessible: K }) === !1 : !0));
	};
function c1(e) {
	var t;
	const r = '*[role~="' + e + '"]',
		n = (t = pp.get(e)) != null ? t : new Set(),
		a = new Set(
			Array.from(n).map((o) => {
				let { name: i } = o;
				return i;
			})
		);
	return [r].concat(Array.from(a)).join(',');
}
const yv = (e) => {
		let t = '';
		return (
			e === void 0
				? (t = '')
				: typeof e == 'string'
				? (t = ' and name "' + e + '"')
				: (t = ' and name `' + e + '`'),
			t
		);
	},
	d1 = function (e, t, r) {
		let { name: n } = r === void 0 ? {} : r;
		return 'Found multiple elements with the role "' + t + '"' + yv(n);
	},
	f1 = function (e, t, r) {
		let { hidden: n = x().defaultHidden, name: a, description: o } = r === void 0 ? {} : r;
		if (x()._disableExpensiveErrorDiagnostics) return 'Unable to find role="' + t + '"' + yv(a);
		let i = '';
		Array.from(e.children).forEach((c) => {
			i += Ap(c, { hidden: n, includeDescription: o !== void 0 });
		});
		let s;
		i.length === 0
			? n === !1
				? (s =
						'There are no accessible roles. But there might be some inaccessible roles. If you wish to access them, then set the `hidden` option to `true`. Learn more about this here: https://testing-library.com/docs/dom-testing-library/api-queries#byrole')
				: (s = 'There are no available roles.')
			: (s = (
					`
Here are the ` +
					(n === !1 ? 'accessible' : 'available') +
					` roles:

  ` +
					i
						.replace(
							/\n/g,
							`
  `
						)
						.replace(
							/\n\s\s\n/g,
							`

`
						) +
					`
`
			  ).trim());
		let l = '';
		a === void 0
			? (l = '')
			: typeof a == 'string'
			? (l = ' and name "' + a + '"')
			: (l = ' and name `' + a + '`');
		let u = '';
		return (
			o === void 0
				? (u = '')
				: typeof o == 'string'
				? (u = ' and description "' + o + '"')
				: (u = ' and description `' + o + '`'),
			(
				`
Unable to find an ` +
				(n === !1 ? 'accessible ' : '') +
				'element with the role "' +
				t +
				'"' +
				l +
				u +
				`

` +
				s
			).trim()
		);
	},
	bv = Q($l, $l.name, 'queryAll'),
	[hv, gv, Ev, Rv, _v] = Ce($l, d1, f1),
	ms = () => x().testIdAttribute,
	ql = function () {
		for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
		return we(t[0]), rt(ms(), ...t);
	},
	p1 = (e, t) => 'Found multiple elements by: [' + ms() + '="' + t + '"]',
	v1 = (e, t) => 'Unable to find an element by: [' + ms() + '="' + t + '"]',
	wv = Q(ql, ql.name, 'queryAll'),
	[Cv, Pv, Sv, Tv, Ov] = Ce(ql, p1, v1);
var dn = Object.freeze({
	__proto__: null,
	queryAllByLabelText: Lp,
	queryByLabelText: Ip,
	getAllByLabelText: kp,
	getByLabelText: Dp,
	findAllByLabelText: Bp,
	findByLabelText: Np,
	queryByPlaceholderText: Fp,
	queryAllByPlaceholderText: jp,
	getByPlaceholderText: Hp,
	getAllByPlaceholderText: Up,
	findAllByPlaceholderText: Vp,
	findByPlaceholderText: Wp,
	queryByText: zp,
	queryAllByText: Gp,
	getByText: Yp,
	getAllByText: Kp,
	findAllByText: Xp,
	findByText: Qp,
	queryByDisplayValue: Zp,
	queryAllByDisplayValue: Jp,
	getByDisplayValue: tv,
	getAllByDisplayValue: ev,
	findAllByDisplayValue: rv,
	findByDisplayValue: nv,
	queryByAltText: ov,
	queryAllByAltText: av,
	getByAltText: lv,
	getAllByAltText: iv,
	findAllByAltText: sv,
	findByAltText: uv,
	queryByTitle: dv,
	queryAllByTitle: cv,
	getByTitle: pv,
	getAllByTitle: fv,
	findAllByTitle: vv,
	findByTitle: mv,
	queryByRole: hv,
	queryAllByRole: bv,
	getAllByRole: gv,
	getByRole: Ev,
	findAllByRole: Rv,
	findByRole: _v,
	queryByTestId: Cv,
	queryAllByTestId: wv,
	getByTestId: Sv,
	getAllByTestId: Pv,
	findAllByTestId: Tv,
	findByTestId: Ov
});
function Il(e, t, r) {
	return (
		t === void 0 && (t = dn),
		r === void 0 && (r = {}),
		Object.keys(t).reduce((n, a) => {
			const o = t[a];
			return (n[a] = o.bind(null, e)), n;
		}, r)
	);
}
const Av = (e) => !e || (Array.isArray(e) && !e.length);
function mc(e) {
	if (Av(e))
		throw new Error(
			'The element(s) given to waitForElementToBeRemoved are already removed. waitForElementToBeRemoved requires that the element(s) exist(s) before waiting for removal.'
		);
}
async function m1(e, t) {
	const r = new Error('Timed out in waitForElementToBeRemoved.');
	if (typeof e != 'function') {
		mc(e);
		const a = (Array.isArray(e) ? e : [e]).map((o) => {
			let i = o.parentElement;
			if (i === null) return () => null;
			for (; i.parentElement; ) i = i.parentElement;
			return () => (i.contains(o) ? o : null);
		});
		e = () => a.map((o) => o()).filter(Boolean);
	}
	return (
		mc(e()),
		ps(() => {
			let n;
			try {
				n = e();
			} catch (a) {
				if (a.name === 'TestingLibraryElementError') return;
				throw a;
			}
			if (!Av(n)) throw r;
		}, t)
	);
}
const yc = {
		copy: {
			EventType: 'ClipboardEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		cut: {
			EventType: 'ClipboardEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		paste: {
			EventType: 'ClipboardEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		compositionEnd: {
			EventType: 'CompositionEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		compositionStart: {
			EventType: 'CompositionEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		compositionUpdate: {
			EventType: 'CompositionEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		keyDown: {
			EventType: 'KeyboardEvent',
			defaultInit: { bubbles: !0, cancelable: !0, charCode: 0, composed: !0 }
		},
		keyPress: {
			EventType: 'KeyboardEvent',
			defaultInit: { bubbles: !0, cancelable: !0, charCode: 0, composed: !0 }
		},
		keyUp: {
			EventType: 'KeyboardEvent',
			defaultInit: { bubbles: !0, cancelable: !0, charCode: 0, composed: !0 }
		},
		focus: { EventType: 'FocusEvent', defaultInit: { bubbles: !1, cancelable: !1, composed: !0 } },
		blur: { EventType: 'FocusEvent', defaultInit: { bubbles: !1, cancelable: !1, composed: !0 } },
		focusIn: {
			EventType: 'FocusEvent',
			defaultInit: { bubbles: !0, cancelable: !1, composed: !0 }
		},
		focusOut: {
			EventType: 'FocusEvent',
			defaultInit: { bubbles: !0, cancelable: !1, composed: !0 }
		},
		change: { EventType: 'Event', defaultInit: { bubbles: !0, cancelable: !1 } },
		input: { EventType: 'InputEvent', defaultInit: { bubbles: !0, cancelable: !1, composed: !0 } },
		invalid: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !0 } },
		submit: { EventType: 'Event', defaultInit: { bubbles: !0, cancelable: !0 } },
		reset: { EventType: 'Event', defaultInit: { bubbles: !0, cancelable: !0 } },
		click: {
			EventType: 'MouseEvent',
			defaultInit: { bubbles: !0, cancelable: !0, button: 0, composed: !0 }
		},
		contextMenu: {
			EventType: 'MouseEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		dblClick: {
			EventType: 'MouseEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		drag: { EventType: 'DragEvent', defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
		dragEnd: { EventType: 'DragEvent', defaultInit: { bubbles: !0, cancelable: !1, composed: !0 } },
		dragEnter: {
			EventType: 'DragEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		dragExit: {
			EventType: 'DragEvent',
			defaultInit: { bubbles: !0, cancelable: !1, composed: !0 }
		},
		dragLeave: {
			EventType: 'DragEvent',
			defaultInit: { bubbles: !0, cancelable: !1, composed: !0 }
		},
		dragOver: {
			EventType: 'DragEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		dragStart: {
			EventType: 'DragEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		drop: { EventType: 'DragEvent', defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
		mouseDown: {
			EventType: 'MouseEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		mouseEnter: {
			EventType: 'MouseEvent',
			defaultInit: { bubbles: !1, cancelable: !1, composed: !0 }
		},
		mouseLeave: {
			EventType: 'MouseEvent',
			defaultInit: { bubbles: !1, cancelable: !1, composed: !0 }
		},
		mouseMove: {
			EventType: 'MouseEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		mouseOut: {
			EventType: 'MouseEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		mouseOver: {
			EventType: 'MouseEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		mouseUp: {
			EventType: 'MouseEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		select: { EventType: 'Event', defaultInit: { bubbles: !0, cancelable: !1 } },
		touchCancel: {
			EventType: 'TouchEvent',
			defaultInit: { bubbles: !0, cancelable: !1, composed: !0 }
		},
		touchEnd: {
			EventType: 'TouchEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		touchMove: {
			EventType: 'TouchEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		touchStart: {
			EventType: 'TouchEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		resize: { EventType: 'UIEvent', defaultInit: { bubbles: !1, cancelable: !1 } },
		scroll: { EventType: 'UIEvent', defaultInit: { bubbles: !1, cancelable: !1 } },
		wheel: { EventType: 'WheelEvent', defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
		abort: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
		canPlay: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
		canPlayThrough: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
		durationChange: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
		emptied: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
		encrypted: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
		ended: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
		loadedData: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
		loadedMetadata: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
		loadStart: { EventType: 'ProgressEvent', defaultInit: { bubbles: !1, cancelable: !1 } },
		pause: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
		play: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
		playing: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
		progress: { EventType: 'ProgressEvent', defaultInit: { bubbles: !1, cancelable: !1 } },
		rateChange: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
		seeked: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
		seeking: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
		stalled: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
		suspend: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
		timeUpdate: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
		volumeChange: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
		waiting: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
		load: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
		error: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
		animationStart: { EventType: 'AnimationEvent', defaultInit: { bubbles: !0, cancelable: !1 } },
		animationEnd: { EventType: 'AnimationEvent', defaultInit: { bubbles: !0, cancelable: !1 } },
		animationIteration: {
			EventType: 'AnimationEvent',
			defaultInit: { bubbles: !0, cancelable: !1 }
		},
		transitionCancel: {
			EventType: 'TransitionEvent',
			defaultInit: { bubbles: !0, cancelable: !1 }
		},
		transitionEnd: { EventType: 'TransitionEvent', defaultInit: { bubbles: !0, cancelable: !0 } },
		transitionRun: { EventType: 'TransitionEvent', defaultInit: { bubbles: !0, cancelable: !1 } },
		transitionStart: { EventType: 'TransitionEvent', defaultInit: { bubbles: !0, cancelable: !1 } },
		pointerOver: {
			EventType: 'PointerEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		pointerEnter: { EventType: 'PointerEvent', defaultInit: { bubbles: !1, cancelable: !1 } },
		pointerDown: {
			EventType: 'PointerEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		pointerMove: {
			EventType: 'PointerEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		pointerUp: {
			EventType: 'PointerEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		pointerCancel: {
			EventType: 'PointerEvent',
			defaultInit: { bubbles: !0, cancelable: !1, composed: !0 }
		},
		pointerOut: {
			EventType: 'PointerEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		pointerLeave: { EventType: 'PointerEvent', defaultInit: { bubbles: !1, cancelable: !1 } },
		gotPointerCapture: {
			EventType: 'PointerEvent',
			defaultInit: { bubbles: !0, cancelable: !1, composed: !0 }
		},
		lostPointerCapture: {
			EventType: 'PointerEvent',
			defaultInit: { bubbles: !0, cancelable: !1, composed: !0 }
		},
		popState: { EventType: 'PopStateEvent', defaultInit: { bubbles: !0, cancelable: !1 } },
		offline: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
		online: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } }
	},
	bc = { doubleClick: 'dblClick' };
function er(e, t) {
	return x().eventWrapper(() => {
		if (!t) throw new Error('Unable to fire an event - please provide an event object.');
		if (!e)
			throw new Error('Unable to fire a "' + t.type + '" event - please provide a DOM element.');
		return e.dispatchEvent(t);
	});
}
function Ur(e, t, r, n) {
	let { EventType: a = 'Event', defaultInit: o = {} } = n === void 0 ? {} : n;
	if (!t) throw new Error('Unable to fire a "' + e + '" event - please provide a DOM element.');
	const i = { ...o, ...r },
		{ target: { value: s, files: l, ...u } = {} } = i;
	s !== void 0 && y1(t, s),
		l !== void 0 &&
			Object.defineProperty(t, 'files', {
				configurable: !0,
				enumerable: !0,
				writable: !0,
				value: l
			}),
		Object.assign(t, u);
	const c = Rp(t),
		d = c[a] || c.Event;
	let f;
	if (typeof d == 'function') f = new d(e, i);
	else {
		f = c.document.createEvent(a);
		const { bubbles: y, cancelable: g, detail: C, ...p } = i;
		f.initEvent(e, y, g, C),
			Object.keys(p).forEach((R) => {
				f[R] = p[R];
			});
	}
	return (
		['dataTransfer', 'clipboardData'].forEach((y) => {
			const g = i[y];
			typeof g == 'object' &&
				(typeof c.DataTransfer == 'function'
					? Object.defineProperty(f, y, {
							value: Object.getOwnPropertyNames(g).reduce(
								(C, p) => (Object.defineProperty(C, p, { value: g[p] }), C),
								new c.DataTransfer()
							)
					  })
					: Object.defineProperty(f, y, { value: g }));
		}),
		f
	);
}
Object.keys(yc).forEach((e) => {
	const { EventType: t, defaultInit: r } = yc[e],
		n = e.toLowerCase();
	(Ur[e] = (a, o) => Ur(n, a, o, { EventType: t, defaultInit: r })),
		(er[e] = (a, o) => er(a, Ur[e](a, o)));
});
function y1(e, t) {
	const { set: r } = Object.getOwnPropertyDescriptor(e, 'value') || {},
		n = Object.getPrototypeOf(e),
		{ set: a } = Object.getOwnPropertyDescriptor(n, 'value') || {};
	if (a && r !== a) a.call(e, t);
	else if (r) r.call(e, t);
	else throw new Error('The given element does not have a value setter');
}
Object.keys(bc).forEach((e) => {
	const t = bc[e];
	er[e] = function () {
		return er[t](...arguments);
	};
});
function b1(e) {
	return e.replace(
		/[ \t]*[\n][ \t]*/g,
		`
`
	);
}
function h1(e) {
	return sx.compressToEncodedURIComponent(b1(e));
}
function g1(e) {
	return 'https://testing-playground.com/#markup=' + h1(e);
}
const E1 = (e, t, r) => (Array.isArray(e) ? e.forEach((n) => Cl(n, t, r)) : Cl(e, t, r)),
	R1 = function (e) {
		if ((e === void 0 && (e = cs().body), !e || !('innerHTML' in e))) {
			console.log("The element you're providing isn't a valid DOM element.");
			return;
		}
		if (!e.innerHTML) {
			console.log("The provided element doesn't have any children.");
			return;
		}
		const t = g1(e.innerHTML);
		return (
			console.log(
				`Open this URL in your browser

` + t
			),
			t
		);
	},
	hc = { debug: E1, logTestingPlaygroundURL: R1 },
	_1 =
		typeof document < 'u' && document.body
			? Il(document.body, dn, hc)
			: Object.keys(dn).reduce(
					(e, t) => (
						(e[t] = () => {
							throw new TypeError(
								'For queries bound to document.body a global document has to be available... Learn more: https://testing-library.com/s/screen-global-error'
							);
						}),
						e
					),
					hc
			  ),
	w1 = Object.freeze(
		Object.defineProperty(
			{
				__proto__: null,
				buildQueries: Ce,
				configure: Ax,
				createEvent: Ur,
				findAllByAltText: sv,
				findAllByDisplayValue: rv,
				findAllByLabelText: Bp,
				findAllByPlaceholderText: Vp,
				findAllByRole: Rv,
				findAllByTestId: Tv,
				findAllByText: Xp,
				findAllByTitle: vv,
				findByAltText: uv,
				findByDisplayValue: nv,
				findByLabelText: Np,
				findByPlaceholderText: Wp,
				findByRole: _v,
				findByTestId: Ov,
				findByText: Qp,
				findByTitle: mv,
				fireEvent: er,
				getAllByAltText: iv,
				getAllByDisplayValue: ev,
				getAllByLabelText: kp,
				getAllByPlaceholderText: Up,
				getAllByRole: gv,
				getAllByTestId: Pv,
				getAllByText: Kp,
				getAllByTitle: fv,
				getByAltText: lv,
				getByDisplayValue: tv,
				getByLabelText: Dp,
				getByPlaceholderText: Hp,
				getByRole: Ev,
				getByTestId: Sv,
				getByText: Yp,
				getByTitle: pv,
				getConfig: x,
				getDefaultNormalizer: ds,
				getElementError: ii,
				getMultipleElementsFoundError: li,
				getNodeText: br,
				getQueriesForElement: Il,
				getRoles: Op,
				getSuggestedQuery: cn,
				isInaccessible: oi,
				logDOM: Cl,
				logRoles: Mx,
				makeFindQuery: _t,
				makeGetAllQuery: vs,
				makeSingleQuery: Rt,
				prettyDOM: Jt,
				prettyFormat: vb,
				queries: dn,
				queryAllByAltText: av,
				queryAllByAttribute: rt,
				queryAllByDisplayValue: Jp,
				queryAllByLabelText: Lp,
				queryAllByPlaceholderText: jp,
				queryAllByRole: bv,
				queryAllByTestId: wv,
				queryAllByText: Gp,
				queryAllByTitle: cv,
				queryByAltText: ov,
				queryByAttribute: xp,
				queryByDisplayValue: Zp,
				queryByLabelText: Ip,
				queryByPlaceholderText: Fp,
				queryByRole: hv,
				queryByTestId: Cv,
				queryByText: zp,
				queryByTitle: dv,
				queryHelpers: Kx,
				screen: _1,
				waitFor: ps,
				waitForElementToBeRemoved: m1,
				within: Il,
				wrapAllByQueryWithSuggestion: Q,
				wrapSingleQueryWithSuggestion: Fe
			},
			Symbol.toStringTag,
			{ value: 'Module' }
		)
	);
function T(e, t, r) {
	return (e.namespaceURI && e.namespaceURI !== 'http://www.w3.org/1999/xhtml') ||
		((t = Array.isArray(t) ? t : [t]), !t.includes(e.tagName.toLowerCase()))
		? !1
		: r
		? Object.entries(r).every(([n, a]) => e[n] === a)
		: !0;
}
var Ml;
(function (e) {
	(e.button = 'button'),
		(e.color = 'color'),
		(e.file = 'file'),
		(e.image = 'image'),
		(e.reset = 'reset'),
		(e.submit = 'submit'),
		(e.checkbox = 'checkbox'),
		(e.radio = 'radio');
})(Ml || (Ml = {}));
function xv(e) {
	return T(e, 'button') || (T(e, 'input') && e.type in Ml);
}
var nt = {};
Object.defineProperty(nt, '__esModule', { value: !0 });
nt.TEXT_NODE = void 0;
nt.checkContainerType = A1;
nt.getDocument = T1;
var C1 = (nt.getWindowFromNode = O1);
nt.jestFakeTimersAreEnabled = S1;
const P1 = 3;
nt.TEXT_NODE = P1;
function S1() {
	return typeof jest < 'u' && jest !== null
		? setTimeout._isMockFunction === !0 || Object.prototype.hasOwnProperty.call(setTimeout, 'clock')
		: !1;
}
function T1() {
	if (typeof window > 'u') throw new Error('Could not find default container');
	return window.document;
}
function O1(e) {
	if (e.defaultView) return e.defaultView;
	if (e.ownerDocument && e.ownerDocument.defaultView) return e.ownerDocument.defaultView;
	if (e.window) return e.window;
	throw e.ownerDocument && e.ownerDocument.defaultView === null
		? new Error('It looks like the window object is not available for the provided node.')
		: e.then instanceof Function
		? new Error(
				'It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?'
		  )
		: Array.isArray(e)
		? new Error(
				'It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?'
		  )
		: typeof e.debug == 'function' && typeof e.logTestingPlaygroundURL == 'function'
		? new Error(
				'It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?'
		  )
		: new Error(`The given node is not an Element, the node type is: ${typeof e}.`);
}
function A1(e) {
	if (!e || typeof e.querySelector != 'function' || typeof e.querySelectorAll != 'function')
		throw new TypeError(
			`Expected container to be an Element, a Document or a DocumentFragment but got ${t(e)}.`
		);
	function t(r) {
		return typeof r == 'object' ? (r === null ? 'null' : r.constructor.name) : typeof r;
	}
}
function de(e) {
	return C1(e);
}
function $v(e, t) {
	return new Promise((r, n) => {
		const a = new t();
		(a.onerror = n),
			(a.onabort = n),
			(a.onload = () => {
				r(String(a.result));
			}),
			a.readAsText(e);
	});
}
function ys(e, t) {
	const r = {
		...t,
		length: t.length,
		item: (n) => r[n],
		[Symbol.iterator]: function* () {
			for (let a = 0; a < r.length; a++) yield r[a];
		}
	};
	return (
		(r.constructor = e.FileList),
		e.FileList && Object.setPrototypeOf(r, e.FileList.prototype),
		Object.freeze(r),
		r
	);
}
class qv {
	getAsFile() {
		return this.file;
	}
	getAsString(t) {
		typeof this.data == 'string' && t(this.data);
	}
	webkitGetAsEntry() {
		throw new Error('not implemented');
	}
	constructor(t, r) {
		(this.file = null),
			(this.data = void 0),
			typeof t == 'string'
				? ((this.kind = 'string'), (this.type = String(r)), (this.data = t))
				: ((this.kind = 'file'), (this.type = t.type), (this.file = t));
	}
}
class x1 extends Array {
	add(...t) {
		const r = new qv(t[0], t[1]);
		return this.push(r), r;
	}
	clear() {
		this.splice(0, this.length);
	}
	remove(t) {
		this.splice(t, 1);
	}
}
function Sr(e, t) {
	const [r, n] = e.split('/'),
		a = !n || n === '*';
	return (o) => (t ? o.type === (a ? r : e) : a ? o.type.startsWith(`${r}/`) : o.type === r);
}
function $1(e) {
	return new (class {
		getData(r) {
			var n;
			const a =
				(n = this.items.find(Sr(r, !0))) !== null && n !== void 0 ? n : this.items.find(Sr(r, !1));
			let o = '';
			return (
				a == null ||
					a.getAsString((i) => {
						o = i;
					}),
				o
			);
		}
		setData(r, n) {
			const a = this.items.findIndex(Sr(r, !0)),
				o = new qv(n, r);
			a >= 0 ? this.items.splice(a, 1, o) : this.items.push(o);
		}
		clearData(r) {
			if (r) {
				const n = this.items.findIndex(Sr(r, !0));
				n >= 0 && this.items.remove(n);
			} else this.items.clear();
		}
		get types() {
			const r = [];
			return (
				this.files.length && r.push('Files'),
				this.items.forEach((n) => r.push(n.type)),
				Object.freeze(r),
				r
			);
		}
		setDragImage() {}
		constructor() {
			(this.dropEffect = 'none'),
				(this.effectAllowed = 'uninitialized'),
				(this.items = new x1()),
				(this.files = ys(e, []));
		}
	})();
}
function bs(e, t = []) {
	const r = typeof e.DataTransfer > 'u' ? $1(e) : new e.DataTransfer();
	return Object.defineProperty(r, 'files', { get: () => ys(e, t) }), r;
}
function q1(e, t) {
	if (t.kind === 'file') return t.getAsFile();
	let r = '';
	return (
		t.getAsString((n) => {
			r = n;
		}),
		new e.Blob([r], { type: t.type })
	);
}
function Iv(e, ...t) {
	const r = Object.fromEntries(
		t.map((n) => [typeof n == 'string' ? 'text/plain' : n.type, Promise.resolve(n)])
	);
	return typeof e.ClipboardItem < 'u'
		? new e.ClipboardItem(r)
		: new (class {
				get types() {
					return Array.from(Object.keys(this.data));
				}
				async getType(a) {
					const o = await this.data[a];
					if (!o) throw new Error(`${a} is not one of the available MIME types on this item.`);
					return o instanceof e.Blob ? o : new e.Blob([o], { type: a });
				}
				constructor(a) {
					this.data = a;
				}
		  })(r);
}
const wt = Symbol('Manage ClipboardSub');
function gc(e, t) {
	return Object.assign(
		new (class extends e.EventTarget {
			async read() {
				return Array.from(this.items);
			}
			async readText() {
				let n = '';
				for (const a of this.items) {
					const o = a.types.includes('text/plain')
						? 'text/plain'
						: a.types.find((i) => i.startsWith('text/'));
					o && (n += await a.getType(o).then((i) => $v(i, e.FileReader)));
				}
				return n;
			}
			async write(n) {
				this.items = n;
			}
			async writeText(n) {
				this.items = [Iv(e, n)];
			}
			constructor(...n) {
				super(...n), (this.items = []);
			}
		})(),
		{ [wt]: t }
	);
}
function hs(e) {
	var t;
	return !!(!((t = e) === null || t === void 0) && t[wt]);
}
function I1(e) {
	if (hs(e.navigator.clipboard)) return e.navigator.clipboard[wt];
	const t = Object.getOwnPropertyDescriptor(e.navigator, 'clipboard');
	let r;
	const n = {
		resetClipboardStub: () => {
			r = gc(e, n);
		},
		detachClipboardStub: () => {
			t
				? Object.defineProperty(e.navigator, 'clipboard', t)
				: Object.defineProperty(e.navigator, 'clipboard', { value: void 0, configurable: !0 });
		}
	};
	return (
		(r = gc(e, n)),
		Object.defineProperty(e.navigator, 'clipboard', { get: () => r, configurable: !0 }),
		r[wt]
	);
}
function M1(e) {
	hs(e.navigator.clipboard) && e.navigator.clipboard[wt].resetClipboardStub();
}
function B1(e) {
	hs(e.navigator.clipboard) && e.navigator.clipboard[wt].detachClipboardStub();
}
async function N1(e) {
	const t = e.defaultView,
		r = t == null ? void 0 : t.navigator.clipboard,
		n = r && (await r.read());
	if (!n) throw new Error('The Clipboard API is unavailable.');
	const a = bs(t);
	for (const o of n)
		for (const i of o.types) a.setData(i, await o.getType(i).then((s) => $v(s, t.FileReader)));
	return a;
}
async function Mv(e, t) {
	const r = de(e),
		n = r.navigator.clipboard,
		a = [];
	for (let i = 0; i < t.items.length; i++) {
		const s = t.items[i],
			l = q1(r, s);
		a.push(Iv(r, l));
	}
	if (
		!(
			n &&
			(await n.write(a).then(
				() => !0,
				() => !1
			))
		)
	)
		throw new Error('The Clipboard API is unavailable.');
}
typeof globalThis.afterEach == 'function' && globalThis.afterEach(() => M1(globalThis.window));
typeof globalThis.afterAll == 'function' && globalThis.afterAll(() => B1(globalThis.window));
function Xe(e) {
	return (
		e.hasAttribute('contenteditable') &&
		(e.getAttribute('contenteditable') == 'true' || e.getAttribute('contenteditable') == '')
	);
}
function tr(e) {
	const t = k1(e);
	return t && (t.closest('[contenteditable=""]') || t.closest('[contenteditable="true"]'));
}
function k1(e) {
	return e.nodeType === 1 ? e : e.parentElement;
}
function Ct(e) {
	return (Bv(e) && !e.readOnly) || Xe(e);
}
var Bl;
(function (e) {
	(e.text = 'text'),
		(e.date = 'date'),
		(e['datetime-local'] = 'datetime-local'),
		(e.email = 'email'),
		(e.month = 'month'),
		(e.number = 'number'),
		(e.password = 'password'),
		(e.search = 'search'),
		(e.tel = 'tel'),
		(e.time = 'time'),
		(e.url = 'url'),
		(e.week = 'week');
})(Bl || (Bl = {}));
function Bv(e) {
	return T(e, 'textarea') || (T(e, 'input') && e.type in Bl);
}
var Nl;
(function (e) {
	(e.email = 'email'),
		(e.password = 'password'),
		(e.search = 'search'),
		(e.telephone = 'telephone'),
		(e.text = 'text'),
		(e.url = 'url');
})(Nl || (Nl = {}));
function D1(e) {
	var t;
	const r = (t = e.getAttribute('maxlength')) !== null && t !== void 0 ? t : '';
	return /^\d+$/.test(r) && Number(r) >= 0 ? Number(r) : void 0;
}
function L1(e) {
	return T(e, 'textarea') || (T(e, 'input') && e.type in Nl);
}
const Nv = [
	'input:not([type=hidden]):not([disabled])',
	'button:not([disabled])',
	'select:not([disabled])',
	'textarea:not([disabled])',
	'[contenteditable=""]',
	'[contenteditable="true"]',
	'a[href]',
	'[tabindex]:not([disabled])'
].join(', ');
function gs(e) {
	return e.matches(Nv);
}
var fn;
(function (e) {
	(e['{'] = '}'), (e['['] = ']');
})(fn || (fn = {}));
function kv(e, t) {
	let r = 0;
	const n = e[r] in fn ? e[r] : '';
	r += n.length;
	const o = new RegExp(`^\\${n}{2}`).test(e) ? '' : n;
	return { type: o, ...(o === '' ? j1(e, r, t) : F1(e, r, o, t)) };
}
function j1(e, t, r) {
	const n = e[t];
	return (
		Dv(n, e, t, r),
		(t += n.length),
		{ consumedLength: t, descriptor: n, releasePrevious: !1, releaseSelf: !0, repeat: 1 }
	);
}
function F1(e, t, r, n) {
	var a, o;
	const i = e[t] === '/' ? '/' : '';
	t += i.length;
	const s = r === '{' && e[t] === '\\';
	t += Number(s);
	const l = s
		? e[t]
		: (a = e.slice(t).match(r === '{' ? /^\w+|^[^}>/]/ : /^\w+/)) === null || a === void 0
		? void 0
		: a[0];
	Dv(l, e, t, n), (t += l.length);
	var u;
	const c =
		(u = (o = e.slice(t).match(/^>\d+/)) === null || o === void 0 ? void 0 : o[0]) !== null &&
		u !== void 0
			? u
			: '';
	t += c.length;
	const d = e[t] === '/' || (!c && e[t] === '>') ? e[t] : '';
	t += d.length;
	const f = fn[r],
		m = e[t] === f ? f : '';
	if (!m)
		throw new Error(
			Lv(
				[!c && 'repeat modifier', !d && 'release modifier', `"${f}"`].filter(Boolean).join(' or '),
				e[t],
				e,
				n
			)
		);
	return (
		(t += m.length),
		{
			consumedLength: t,
			descriptor: l,
			releasePrevious: !!i,
			repeat: c ? Math.max(Number(c.substr(1)), 1) : 1,
			releaseSelf: U1(d, c)
		}
	);
}
function Dv(e, t, r, n) {
	if (!e) throw new Error(Lv('key descriptor', t[r], t, n));
}
function U1(e, t) {
	if (e) return e === '/';
	if (t) return !1;
}
function Lv(e, t, r, n) {
	return `Expected ${e} but found "${t ?? ''}" in "${r}"
    See ${
			n === 'pointer'
				? 'https://testing-library.com/docs/user-event/pointer#pressing-a-button-or-touching-the-screen'
				: 'https://testing-library.com/docs/user-event/keyboard'
		}
    for more information about how userEvent parses your input.`;
}
function H1(e) {
	return new e.constructor(e.type, e);
}
var Y;
(function (e) {
	(e[(e.Trigger = 2)] = 'Trigger'), (e[(e.Call = 1)] = 'Call');
})(Y || (Y = {}));
function Lt(e, t) {
	e.levelRefs[t] = {};
}
function Tr(e, t) {
	return e.levelRefs[t];
}
var mt;
(function (e) {
	(e[(e.EachTrigger = 4)] = 'EachTrigger'),
		(e[(e.EachApiCall = 2)] = 'EachApiCall'),
		(e[(e.EachTarget = 1)] = 'EachTarget'),
		(e[(e.Never = 0)] = 'Never');
})(mt || (mt = {}));
function Re(e) {
	for (let r = e; r; r = r.parentElement)
		if (T(r, ['button', 'input', 'select', 'textarea', 'optgroup', 'option'])) {
			if (r.hasAttribute('disabled')) return !0;
		} else if (T(r, 'fieldset')) {
			var t;
			if (
				r.hasAttribute('disabled') &&
				!(!((t = r.querySelector(':scope > legend')) === null || t === void 0) && t.contains(e))
			)
				return !0;
		} else if (
			r.tagName.includes('-') &&
			r.constructor.formAssociated &&
			r.hasAttribute('disabled')
		)
			return !0;
	return !1;
}
function si(e) {
	const t = e.activeElement;
	return t != null && t.shadowRoot
		? si(t.shadowRoot)
		: Re(t)
		? e.ownerDocument
			? e.ownerDocument.body
			: e.body
		: t;
}
function Wi(e) {
	var t;
	return (t = si(e)) !== null && t !== void 0 ? t : e.body;
}
function V1(e, t) {
	let r = e;
	do {
		if (t(r)) return r;
		r = r.parentElement;
	} while (r && r !== e.ownerDocument.body);
}
function fe(e) {
	return jv(e) && Bv(e);
}
function W1(e) {
	return jv(e) && xv(e);
}
function jv(e) {
	return e.nodeType === 1;
}
function G1(e) {
	const t = e.ownerDocument.getSelection();
	if (t != null && t.focusNode && fe(e)) {
		const n = tr(t.focusNode);
		if (n) {
			if (!t.isCollapsed) {
				var r;
				const a =
					((r = n.firstChild) === null || r === void 0 ? void 0 : r.nodeType) === 3
						? n.firstChild
						: n;
				t.setBaseAndExtent(a, 0, a, 0);
			}
		} else t.setBaseAndExtent(e, 0, e, 0);
	}
}
function Pt(e, t) {
	return x().eventWrapper(e);
}
function Ue(e) {
	const t = V1(e, gs),
		r = si(e.ownerDocument);
	(t ?? e.ownerDocument.body) !== r &&
		(Pt(
			t
				? () => t.focus()
				: () => {
						var n;
						return (n = r) === null || n === void 0 ? void 0 : n.blur();
				  }
		),
		G1(t ?? e.ownerDocument.body));
}
function z1(e) {
	!gs(e) || !(si(e.ownerDocument) === e) || Pt(() => e.blur());
}
const at = {};
at.click = (e, t, r) => {
	const n = t.closest('button,input,label,select,textarea'),
		a = n && T(n, 'label') && n.control;
	if (a)
		return () => {
			gs(a) && Ue(a), r.dispatchEvent(a, H1(e));
		};
	if (T(t, 'input', { type: 'file' }))
		return () => {
			z1(t), t.dispatchEvent(new (de(t).Event)('fileDialog')), Ue(t);
		};
};
const St = Symbol('Displayed value in UI'),
	he = Symbol('Displayed selection in UI'),
	pn = Symbol('Initial value to compare on blur');
function K1(e) {
	return typeof e == 'object' && St in e;
}
function Y1(e) {
	return !!e && typeof e == 'object' && he in e;
}
function X1(e, t) {
	e[pn] === void 0 && (e[pn] = e.value),
		(e[St] = t),
		(e.value = Object.assign(new String(t), { [St]: !0 }));
}
function pe(e) {
	return e[St] === void 0 ? e.value : String(e[St]);
}
function Es(e) {
	e[St] = void 0;
}
function Fv(e) {
	e[pn] = void 0;
}
function Q1(e) {
	return e[pn];
}
function J1(e, t) {
	e[he] = t;
}
function It(e, { focusOffset: t, anchorOffset: r = t }, n = 'replace') {
	const a = pe(e).length,
		o = (d) => Math.max(0, Math.min(a, d)),
		i = n === 'replace' || e[he] === void 0 ? o(r) : e[he].anchorOffset,
		s = o(t),
		l = Math.min(i, s),
		u = Math.max(i, s);
	if (
		((e[he] = { anchorOffset: i, focusOffset: s }), e.selectionStart === l && e.selectionEnd === u)
	)
		return;
	const c = Object.assign(new Number(l), { [he]: !0 });
	try {
		e.setSelectionRange(c, u);
	} catch {}
}
function rr(e) {
	var t, r, n;
	const a =
		(n = e[he]) !== null && n !== void 0
			? n
			: {
					anchorOffset: (t = e.selectionStart) !== null && t !== void 0 ? t : 0,
					focusOffset: (r = e.selectionEnd) !== null && r !== void 0 ? r : 0
			  };
	return {
		...a,
		startOffset: Math.min(a.anchorOffset, a.focusOffset),
		endOffset: Math.max(a.anchorOffset, a.focusOffset)
	};
}
function Z1(e) {
	return !!e[he];
}
function Hr(e) {
	e[he] = void 0;
}
const vn = globalThis.parseInt;
function e$(e) {
	const t = e.replace(/\D/g, '');
	if (t.length < 2) return e;
	const r = vn(t[0], 10),
		n = vn(t[1], 10);
	if (r >= 3 || (r === 2 && n >= 4)) {
		let a;
		return r >= 3 ? (a = 1) : (a = 2), Ec(t, a);
	}
	return e.length === 2 ? e : Ec(t, 2);
}
function Ec(e, t) {
	const r = e.slice(0, t),
		n = Math.min(vn(r, 10), 23),
		a = e.slice(t),
		o = vn(a, 10),
		i = Math.min(o, 59);
	return `${n.toString().padStart(2, '0')}:${i.toString().padStart(2, '0')}`;
}
function Uv(e, t) {
	const r = e.cloneNode();
	return (r.value = t), r.value === t;
}
function Hv(e, t, r, n) {
	if (Vr(e) && t + r >= 0 && t + r <= e.nodeValue.length) return { node: e, offset: t + r };
	const a = Rc(e, t, r);
	if (a) {
		if (Vr(a))
			return {
				node: a,
				offset: r > 0 ? Math.min(1, a.nodeValue.length) : Math.max(a.nodeValue.length - 1, 0)
			};
		if (T(a, 'br')) {
			const o = Rc(a, void 0, r);
			return o
				? Vr(o)
					? { node: o, offset: r > 0 ? 0 : o.nodeValue.length }
					: r < 0 && T(o, 'br')
					? { node: a.parentNode, offset: Or(a) }
					: { node: o.parentNode, offset: Or(o) + (r > 0 ? 0 : 1) }
				: r < 0 && n === 'deleteContentBackward'
				? { node: a.parentNode, offset: Or(a) }
				: void 0;
		} else return { node: a.parentNode, offset: Or(a) + (r > 0 ? 1 : 0) };
	}
}
function Rc(e, t, r) {
	const n = Number(t) + (r < 0 ? -1 : 0);
	return (
		t !== void 0 && Rs(e) && n >= 0 && n < e.children.length && (e = e.children[n]),
		r$(e, r === 1 ? 'next' : 'previous', t$)
	);
}
function t$(e) {
	if (Vr(e)) return !0;
	if (Rs(e)) {
		if (T(e, ['input', 'textarea'])) return e.type !== 'hidden';
		if (T(e, 'br')) return !0;
	}
	return !1;
}
function Or(e) {
	let t = 0;
	for (; e.previousSibling; ) t++, (e = e.previousSibling);
	return t;
}
function Rs(e) {
	return e.nodeType === 1;
}
function Vr(e) {
	return e.nodeType === 3;
}
function r$(e, t, r) {
	for (;;) {
		var n;
		const a = e[`${t}Sibling`];
		if (a) {
			if (((e = n$(a, t === 'next' ? 'first' : 'last')), r(e))) return e;
		} else if (
			e.parentNode &&
			(!Rs(e.parentNode) ||
				(!Xe(e.parentNode) &&
					e.parentNode !== ((n = e.ownerDocument) === null || n === void 0 ? void 0 : n.body)))
		)
			e = e.parentNode;
		else break;
	}
}
function n$(e, t) {
	for (; e.hasChildNodes(); ) e = e[`${t}Child`];
	return e;
}
const nr = Symbol('Track programmatic changes for React workaround');
function a$(e) {
	return (
		Object.getOwnPropertyNames(e).some((t) => t.startsWith('__react')) && de(e).REACT_VERSION === 17
	);
}
function o$(e) {
	a$(e) && (e[nr] = { previousValue: String(e.value), tracked: [] });
}
function i$(e, t) {
	var r, n;
	(r = e[nr]) === null || r === void 0 || (n = r.tracked) === null || n === void 0 || n.push(t),
		e[nr] || (Es(e), It(e, { focusOffset: t.length }));
}
function l$(e, t) {
	var r;
	const n = e[nr];
	if (((e[nr] = void 0), !(!(n == null || (r = n.tracked) === null || r === void 0) && r.length)))
		return;
	const a = n.tracked.length === 2 && n.tracked[0] === n.previousValue && n.tracked[1] === e.value;
	a || Es(e), Z1(e) && It(e, { focusOffset: a ? t : e.value.length });
}
function Vv(e) {
	const t = s$(e);
	if (t && fe(t)) return { type: 'input', selection: rr(t) };
	const r = t == null ? void 0 : t.ownerDocument.getSelection();
	return {
		type:
			tr(e) && (r == null ? void 0 : r.anchorNode) && tr(r.anchorNode)
				? 'contenteditable'
				: 'default',
		selection: r
	};
}
function s$(e) {
	return e.nodeType === 1 ? e : e.parentElement;
}
function u$(e) {
	const t = Vv(e);
	if (t.type === 'input') return t.selection;
	if (t.type === 'contenteditable') {
		var r;
		return (r = t.selection) === null || r === void 0 ? void 0 : r.getRangeAt(0);
	}
}
function Qe({ focusNode: e, focusOffset: t, anchorNode: r = e, anchorOffset: n = t }) {
	var a, o;
	if (Vv(e).type === 'input') return It(e, { anchorOffset: n, focusOffset: t });
	(o = (a = r.ownerDocument) === null || a === void 0 ? void 0 : a.getSelection()) === null ||
		o === void 0 ||
		o.setBaseAndExtent(r, n, e, t);
}
function Wv(e) {
	return T(e, 'input') && ['date', 'time'].includes(e.type);
}
function Tt(e, t, r, n = 'insertText') {
	const a = u$(t);
	a &&
		((!Wv(t) && !e.dispatchUIEvent(t, 'beforeinput', { inputType: n, data: r })) ||
			('startContainer' in a ? c$(e, t, a, r, n) : d$(e, t, a, r, n)));
}
function c$(e, t, r, n, a) {
	let o = !1;
	if (!r.collapsed) (o = !0), r.deleteContents();
	else if (['deleteContentBackward', 'deleteContentForward'].includes(a)) {
		const i = Hv(r.startContainer, r.startOffset, a === 'deleteContentBackward' ? -1 : 1, a);
		if (i) {
			o = !0;
			const s = r.cloneRange();
			s.comparePoint(i.node, i.offset) < 0
				? s.setStart(i.node, i.offset)
				: s.setEnd(i.node, i.offset),
				s.deleteContents();
		}
	}
	if (n)
		if (r.endContainer.nodeType === 3) {
			const i = r.endOffset;
			r.endContainer.insertData(i, n),
				r.setStart(r.endContainer, i + n.length),
				r.setEnd(r.endContainer, i + n.length);
		} else {
			const i = t.ownerDocument.createTextNode(n);
			r.insertNode(i), r.setStart(i, n.length), r.setEnd(i, n.length);
		}
	(o || n) && e.dispatchUIEvent(t, 'input', { inputType: a });
}
function d$(e, t, r, n, a) {
	let o = n;
	if (L1(t)) {
		const u = D1(t);
		if (u !== void 0 && n.length > 0) {
			const c = u - t.value.length;
			if (c > 0) o = n.substring(0, c);
			else return;
		}
	}
	const { newValue: i, newOffset: s, oldValue: l } = f$(o, t, r, a);
	(i === l && s === r.startOffset && s === r.endOffset) ||
		(T(t, 'input', { type: 'number' }) && !p$(i)) ||
		(X1(t, i),
		Qe({ focusNode: t, anchorOffset: s, focusOffset: s }),
		Wv(t)
			? Uv(t, i) && (_c(e, t, s, {}), e.dispatchUIEvent(t, 'change'), Fv(t))
			: _c(e, t, s, { data: n, inputType: a }));
}
function f$(e, t, { startOffset: r, endOffset: n }, a) {
	const o = pe(t),
		i = Math.max(0, r === n && a === 'deleteContentBackward' ? r - 1 : r),
		s = o.substring(0, i),
		l = Math.min(o.length, r === n && a === 'deleteContentForward' ? r + 1 : n),
		u = o.substring(l, o.length);
	let c = `${s}${e}${u}`,
		d = i + e.length;
	if (T(t, 'input', { type: 'time' })) {
		const f = e$(c);
		f !== '' && Uv(t, f) && ((c = f), (d = f.length));
	}
	return { oldValue: o, newValue: c, newOffset: d };
}
function _c(e, t, r, n) {
	e.dispatchUIEvent(t, 'input', n), l$(t, r);
}
function p$(e) {
	var t, r;
	const n = e.split('e', 2);
	return !(
		/[^\d.\-e]/.test(e) ||
		Number((t = e.match(/-/g)) === null || t === void 0 ? void 0 : t.length) > 2 ||
		Number((r = e.match(/\./g)) === null || r === void 0 ? void 0 : r.length) > 1 ||
		(n[1] && !/^-?\d*$/.test(n[1]))
	);
}
at.cut = (e, t, r) => () => {
	Ct(t) && Tt(r, t, '', 'deleteByCut');
};
function v$(e) {
	return e ? (Xe(e) ? e.textContent : pe(e)) : null;
}
function m$(e) {
	const t = de(e);
	for (let r = e; r != null && r.ownerDocument; r = r.parentElement) {
		const { display: n, visibility: a } = t.getComputedStyle(r);
		if (n === 'none' || a === 'hidden') return !1;
	}
	return !0;
}
function y$(e, t) {
	const r = e.ownerDocument,
		n = r.querySelectorAll(Nv),
		a = Array.from(n).filter((l) => l === e || !(Number(l.getAttribute('tabindex')) < 0 || Re(l)));
	Number(e.getAttribute('tabindex')) >= 0 &&
		a.sort((l, u) => {
			const c = Number(l.getAttribute('tabindex')),
				d = Number(u.getAttribute('tabindex'));
			return c === d ? 0 : c === 0 ? 1 : d === 0 ? -1 : c - d;
		});
	const o = {};
	let i = [r.body];
	const s = T(e, 'input', { type: 'radio' }) ? e.name : void 0;
	a.forEach((l) => {
		const u = l;
		if (T(u, 'input', { type: 'radio' }) && u.name) {
			if (u === e) {
				i.push(u);
				return;
			} else if (u.name === s) return;
			if (u.checked) {
				(i = i.filter((c) => !T(c, 'input', { type: 'radio', name: u.name }))),
					i.push(u),
					(o[u.name] = u);
				return;
			}
			if (typeof o[u.name] < 'u') return;
		}
		i.push(u);
	});
	for (let l = i.findIndex((u) => u === e); ; )
		if (
			((l += t ? -1 : 1),
			l === i.length ? (l = 0) : l === -1 && (l = i.length - 1),
			i[l] === e || i[l] === r.body || m$(i[l]))
		)
			return i[l];
}
function wc(e, t) {
	if (fe(e)) {
		const r = rr(e);
		Qe({
			focusNode: e,
			focusOffset:
				r.startOffset === r.endOffset ? r.focusOffset + t : t < 0 ? r.startOffset : r.endOffset
		});
	} else {
		const r = e.ownerDocument.getSelection();
		if (!(r != null && r.focusNode)) return;
		if (r.isCollapsed) {
			const n = Hv(r.focusNode, r.focusOffset, t);
			n && Qe({ focusNode: n.node, focusOffset: n.offset });
		} else r[t < 0 ? 'collapseToStart' : 'collapseToEnd']();
	}
}
function Gv(e) {
	if (fe(e)) return Qe({ focusNode: e, anchorOffset: 0, focusOffset: pe(e).length });
	var t;
	const r = (t = tr(e)) !== null && t !== void 0 ? t : e.ownerDocument.body;
	Qe({ focusNode: r, anchorOffset: 0, focusOffset: r.childNodes.length });
}
function b$(e) {
	if (fe(e)) return rr(e).startOffset === 0 && rr(e).endOffset === pe(e).length;
	var t;
	const r = (t = tr(e)) !== null && t !== void 0 ? t : e.ownerDocument.body,
		n = e.ownerDocument.getSelection();
	return (
		(n == null ? void 0 : n.anchorNode) === r &&
		n.focusNode === r &&
		n.anchorOffset === 0 &&
		n.focusOffset === r.childNodes.length
	);
}
function jt(e, t, r) {
	var n;
	if (fe(e)) return Qe({ focusNode: e, anchorOffset: t, focusOffset: r });
	if (Xe(e) && ((n = e.firstChild) === null || n === void 0 ? void 0 : n.nodeType) === 3)
		return Qe({ focusNode: e.firstChild, anchorOffset: t, focusOffset: r });
	throw new Error('Not implemented. The result of this interaction is unreliable.');
}
function Ar(e, t, r) {
	const n = de(t),
		a = Array.from(
			t.ownerDocument.querySelectorAll(
				t.name
					? `input[type="radio"][name="${n.CSS.escape(t.name)}"]`
					: 'input[type="radio"][name=""], input[type="radio"]:not([name])'
			)
		);
	for (let o = a.findIndex((i) => i === t) + r; ; o += r) {
		if ((a[o] || (o = r > 0 ? 0 : a.length - 1), a[o] === t)) return;
		Re(a[o]) || (Ue(a[o]), e.dispatchUIEvent(a[o], 'click'));
	}
}
at.keydown = (e, t, r) => {
	var n, a;
	return (a = (n = Cc[e.key]) === null || n === void 0 ? void 0 : n.call(Cc, e, t, r)) !== null &&
		a !== void 0
		? a
		: h$(e, t, r);
};
const Cc = {
		ArrowDown: (e, t, r) => {
			if (T(t, 'input', { type: 'radio' })) return () => Ar(r, t, -1);
		},
		ArrowLeft: (e, t, r) =>
			T(t, 'input', { type: 'radio' }) ? () => Ar(r, t, -1) : () => wc(t, -1),
		ArrowRight: (e, t, r) =>
			T(t, 'input', { type: 'radio' }) ? () => Ar(r, t, 1) : () => wc(t, 1),
		ArrowUp: (e, t, r) => {
			if (T(t, 'input', { type: 'radio' })) return () => Ar(r, t, 1);
		},
		Backspace: (e, t, r) => {
			if (Ct(t))
				return () => {
					Tt(r, t, '', 'deleteContentBackward');
				};
		},
		Delete: (e, t, r) => {
			if (Ct(t))
				return () => {
					Tt(r, t, '', 'deleteContentForward');
				};
		},
		End: (e, t) => {
			if (T(t, ['input', 'textarea']) || Xe(t))
				return () => {
					var r, n;
					const a =
						(n = (r = v$(t)) === null || r === void 0 ? void 0 : r.length) !== null && n !== void 0
							? n
							: 0;
					jt(t, a, a);
				};
		},
		Home: (e, t) => {
			if (T(t, ['input', 'textarea']) || Xe(t))
				return () => {
					jt(t, 0, 0);
				};
		},
		PageDown: (e, t) => {
			if (T(t, ['input']))
				return () => {
					const r = pe(t).length;
					jt(t, r, r);
				};
		},
		PageUp: (e, t) => {
			if (T(t, ['input']))
				return () => {
					jt(t, 0, 0);
				};
		},
		Tab: (e, t, r) => () => {
			const n = y$(t, r.system.keyboard.modifiers.Shift);
			Ue(n), fe(n) && It(n, { anchorOffset: 0, focusOffset: n.value.length });
		}
	},
	h$ = (e, t, r) => {
		if (e.code === 'KeyA' && r.system.keyboard.modifiers.Control) return () => Gv(t);
	};
at.keypress = (e, t, r) => {
	if (e.key === 'Enter') {
		if (T(t, 'button') || (T(t, 'input') && g$.includes(t.type)) || (T(t, 'a') && t.href))
			return () => {
				r.dispatchUIEvent(t, 'click');
			};
		if (T(t, 'input')) {
			const n = t.form,
				a =
					n == null
						? void 0
						: n.querySelector('input[type="submit"], button:not([type]), button[type="submit"]');
			return a
				? () => r.dispatchUIEvent(a, 'click')
				: n && E$.includes(t.type) && n.querySelectorAll('input').length === 1
				? () => r.dispatchUIEvent(n, 'submit')
				: void 0;
		}
	}
	if (Ct(t)) {
		const n =
				e.key === 'Enter'
					? Xe(t) && !r.system.keyboard.modifiers.Shift
						? 'insertParagraph'
						: 'insertLineBreak'
					: 'insertText',
			a =
				e.key === 'Enter'
					? `
`
					: e.key;
		return () => Tt(r, t, a, n);
	}
};
const g$ = ['button', 'color', 'file', 'image', 'reset', 'submit'],
	E$ = ['email', 'month', 'password', 'search', 'tel', 'text', 'url', 'week'];
at.keyup = (e, t, r) => {
	var n;
	return (n = Pc[e.key]) === null || n === void 0 ? void 0 : n.call(Pc, e, t, r);
};
const Pc = {
	' ': (e, t, r) => {
		if (xv(t)) return () => r.dispatchUIEvent(t, 'click');
	}
};
at.paste = (e, t, r) => {
	if (Ct(t))
		return () => {
			var n;
			const a = (n = e.clipboardData) === null || n === void 0 ? void 0 : n.getData('text');
			a && Tt(r, t, a, 'insertFromPaste');
		};
};
var ar = {};
Object.defineProperty(ar, '__esModule', { value: !0 });
var zv = (ar.eventMap = ar.eventAliasMap = void 0);
const R$ = {
	copy: { EventType: 'ClipboardEvent', defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
	cut: { EventType: 'ClipboardEvent', defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
	paste: {
		EventType: 'ClipboardEvent',
		defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
	},
	compositionEnd: {
		EventType: 'CompositionEvent',
		defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
	},
	compositionStart: {
		EventType: 'CompositionEvent',
		defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
	},
	compositionUpdate: {
		EventType: 'CompositionEvent',
		defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
	},
	keyDown: {
		EventType: 'KeyboardEvent',
		defaultInit: { bubbles: !0, cancelable: !0, charCode: 0, composed: !0 }
	},
	keyPress: {
		EventType: 'KeyboardEvent',
		defaultInit: { bubbles: !0, cancelable: !0, charCode: 0, composed: !0 }
	},
	keyUp: {
		EventType: 'KeyboardEvent',
		defaultInit: { bubbles: !0, cancelable: !0, charCode: 0, composed: !0 }
	},
	focus: { EventType: 'FocusEvent', defaultInit: { bubbles: !1, cancelable: !1, composed: !0 } },
	blur: { EventType: 'FocusEvent', defaultInit: { bubbles: !1, cancelable: !1, composed: !0 } },
	focusIn: { EventType: 'FocusEvent', defaultInit: { bubbles: !0, cancelable: !1, composed: !0 } },
	focusOut: { EventType: 'FocusEvent', defaultInit: { bubbles: !0, cancelable: !1, composed: !0 } },
	change: { EventType: 'Event', defaultInit: { bubbles: !0, cancelable: !1 } },
	input: { EventType: 'InputEvent', defaultInit: { bubbles: !0, cancelable: !1, composed: !0 } },
	invalid: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !0 } },
	submit: { EventType: 'Event', defaultInit: { bubbles: !0, cancelable: !0 } },
	reset: { EventType: 'Event', defaultInit: { bubbles: !0, cancelable: !0 } },
	click: {
		EventType: 'MouseEvent',
		defaultInit: { bubbles: !0, cancelable: !0, button: 0, composed: !0 }
	},
	contextMenu: {
		EventType: 'MouseEvent',
		defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
	},
	dblClick: { EventType: 'MouseEvent', defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
	drag: { EventType: 'DragEvent', defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
	dragEnd: { EventType: 'DragEvent', defaultInit: { bubbles: !0, cancelable: !1, composed: !0 } },
	dragEnter: { EventType: 'DragEvent', defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
	dragExit: { EventType: 'DragEvent', defaultInit: { bubbles: !0, cancelable: !1, composed: !0 } },
	dragLeave: { EventType: 'DragEvent', defaultInit: { bubbles: !0, cancelable: !1, composed: !0 } },
	dragOver: { EventType: 'DragEvent', defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
	dragStart: { EventType: 'DragEvent', defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
	drop: { EventType: 'DragEvent', defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
	mouseDown: {
		EventType: 'MouseEvent',
		defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
	},
	mouseEnter: {
		EventType: 'MouseEvent',
		defaultInit: { bubbles: !1, cancelable: !1, composed: !0 }
	},
	mouseLeave: {
		EventType: 'MouseEvent',
		defaultInit: { bubbles: !1, cancelable: !1, composed: !0 }
	},
	mouseMove: {
		EventType: 'MouseEvent',
		defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
	},
	mouseOut: { EventType: 'MouseEvent', defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
	mouseOver: {
		EventType: 'MouseEvent',
		defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
	},
	mouseUp: { EventType: 'MouseEvent', defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
	select: { EventType: 'Event', defaultInit: { bubbles: !0, cancelable: !1 } },
	touchCancel: {
		EventType: 'TouchEvent',
		defaultInit: { bubbles: !0, cancelable: !1, composed: !0 }
	},
	touchEnd: { EventType: 'TouchEvent', defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
	touchMove: {
		EventType: 'TouchEvent',
		defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
	},
	touchStart: {
		EventType: 'TouchEvent',
		defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
	},
	resize: { EventType: 'UIEvent', defaultInit: { bubbles: !1, cancelable: !1 } },
	scroll: { EventType: 'UIEvent', defaultInit: { bubbles: !1, cancelable: !1 } },
	wheel: { EventType: 'WheelEvent', defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
	abort: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
	canPlay: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
	canPlayThrough: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
	durationChange: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
	emptied: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
	encrypted: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
	ended: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
	loadedData: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
	loadedMetadata: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
	loadStart: { EventType: 'ProgressEvent', defaultInit: { bubbles: !1, cancelable: !1 } },
	pause: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
	play: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
	playing: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
	progress: { EventType: 'ProgressEvent', defaultInit: { bubbles: !1, cancelable: !1 } },
	rateChange: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
	seeked: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
	seeking: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
	stalled: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
	suspend: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
	timeUpdate: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
	volumeChange: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
	waiting: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
	load: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
	error: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
	animationStart: { EventType: 'AnimationEvent', defaultInit: { bubbles: !0, cancelable: !1 } },
	animationEnd: { EventType: 'AnimationEvent', defaultInit: { bubbles: !0, cancelable: !1 } },
	animationIteration: { EventType: 'AnimationEvent', defaultInit: { bubbles: !0, cancelable: !1 } },
	transitionCancel: { EventType: 'TransitionEvent', defaultInit: { bubbles: !0, cancelable: !1 } },
	transitionEnd: { EventType: 'TransitionEvent', defaultInit: { bubbles: !0, cancelable: !0 } },
	transitionRun: { EventType: 'TransitionEvent', defaultInit: { bubbles: !0, cancelable: !1 } },
	transitionStart: { EventType: 'TransitionEvent', defaultInit: { bubbles: !0, cancelable: !1 } },
	pointerOver: {
		EventType: 'PointerEvent',
		defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
	},
	pointerEnter: { EventType: 'PointerEvent', defaultInit: { bubbles: !1, cancelable: !1 } },
	pointerDown: {
		EventType: 'PointerEvent',
		defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
	},
	pointerMove: {
		EventType: 'PointerEvent',
		defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
	},
	pointerUp: {
		EventType: 'PointerEvent',
		defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
	},
	pointerCancel: {
		EventType: 'PointerEvent',
		defaultInit: { bubbles: !0, cancelable: !1, composed: !0 }
	},
	pointerOut: {
		EventType: 'PointerEvent',
		defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
	},
	pointerLeave: { EventType: 'PointerEvent', defaultInit: { bubbles: !1, cancelable: !1 } },
	gotPointerCapture: {
		EventType: 'PointerEvent',
		defaultInit: { bubbles: !0, cancelable: !1, composed: !0 }
	},
	lostPointerCapture: {
		EventType: 'PointerEvent',
		defaultInit: { bubbles: !0, cancelable: !1, composed: !0 }
	},
	popState: { EventType: 'PopStateEvent', defaultInit: { bubbles: !0, cancelable: !1 } },
	offline: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
	online: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } }
};
zv = ar.eventMap = R$;
const _$ = { doubleClick: 'dblClick' };
ar.eventAliasMap = _$;
const _s = {
		...zv,
		click: {
			EventType: 'PointerEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		auxclick: {
			EventType: 'PointerEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		contextmenu: {
			EventType: 'PointerEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		beforeInput: {
			EventType: 'InputEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		}
	},
	Kv = Object.fromEntries(Object.keys(_s).map((e) => [e.toLowerCase(), e]));
function Yv(e) {
	const t = Kv[e];
	return t && _s[t].EventType;
}
const w$ = ['MouseEvent', 'PointerEvent'];
function C$(e) {
	return w$.includes(Yv(e));
}
function P$(e) {
	return Yv(e) === 'KeyboardEvent';
}
const S$ = {
	ClipboardEvent: [O$],
	InputEvent: [xr, A$],
	MouseEvent: [xr, Gi, Sc],
	PointerEvent: [xr, Gi, Sc, $$],
	KeyboardEvent: [xr, Gi, x$]
};
function Xv(e, t, r) {
	var n;
	const a = de(t),
		{ EventType: o, defaultInit: i } = _s[Kv[e]],
		s = new (T$(a)[o])(e, i);
	return (n = S$[o]) === null || n === void 0 || n.forEach((l) => l(s, r ?? {})), s;
}
function T$(e) {
	var t;
	const r = (t = e.Event) !== null && t !== void 0 ? t : class {};
	var n;
	const a = (n = e.AnimationEvent) !== null && n !== void 0 ? n : class extends r {};
	var o;
	const i = (o = e.ClipboardEvent) !== null && o !== void 0 ? o : class extends r {};
	var s;
	const l = (s = e.PopStateEvent) !== null && s !== void 0 ? s : class extends r {};
	var u;
	const c = (u = e.ProgressEvent) !== null && u !== void 0 ? u : class extends r {};
	var d;
	const f = (d = e.TransitionEvent) !== null && d !== void 0 ? d : class extends r {};
	var m;
	const y = (m = e.UIEvent) !== null && m !== void 0 ? m : class extends r {};
	var g;
	const C = (g = e.CompositionEvent) !== null && g !== void 0 ? g : class extends y {};
	var p;
	const R = (p = e.FocusEvent) !== null && p !== void 0 ? p : class extends y {};
	var _;
	const w = (_ = e.InputEvent) !== null && _ !== void 0 ? _ : class extends y {};
	var P;
	const v = (P = e.KeyboardEvent) !== null && P !== void 0 ? P : class extends y {};
	var b;
	const E = (b = e.MouseEvent) !== null && b !== void 0 ? b : class extends y {};
	var M;
	const G = (M = e.DragEvent) !== null && M !== void 0 ? M : class extends E {};
	var D;
	const z = (D = e.PointerEvent) !== null && D !== void 0 ? D : class extends E {};
	var K;
	const S = (K = e.TouchEvent) !== null && K !== void 0 ? K : class extends y {};
	return {
		Event: r,
		AnimationEvent: a,
		ClipboardEvent: i,
		PopStateEvent: l,
		ProgressEvent: c,
		TransitionEvent: f,
		UIEvent: y,
		CompositionEvent: C,
		FocusEvent: R,
		InputEvent: w,
		KeyboardEvent: v,
		MouseEvent: E,
		DragEvent: G,
		PointerEvent: z,
		TouchEvent: S
	};
}
function ot(e, t) {
	for (const [r, n] of Object.entries(t)) Object.defineProperty(e, r, { get: () => n ?? null });
}
function k(e) {
	return Number(e ?? 0);
}
function O$(e, { clipboardData: t }) {
	ot(e, { clipboardData: t });
}
function A$(e, { data: t, inputType: r, isComposing: n }) {
	ot(e, { data: t, isComposing: !!n, inputType: String(r) });
}
function xr(e, { view: t, detail: r }) {
	ot(e, { view: t, detail: k(r ?? 0) });
}
function Gi(
	e,
	{
		altKey: t,
		ctrlKey: r,
		metaKey: n,
		shiftKey: a,
		modifierAltGraph: o,
		modifierCapsLock: i,
		modifierFn: s,
		modifierFnLock: l,
		modifierNumLock: u,
		modifierScrollLock: c,
		modifierSymbol: d,
		modifierSymbolLock: f
	}
) {
	ot(e, {
		altKey: !!t,
		ctrlKey: !!r,
		metaKey: !!n,
		shiftKey: !!a,
		getModifierState(m) {
			return !!{
				Alt: t,
				AltGraph: o,
				CapsLock: i,
				Control: r,
				Fn: s,
				FnLock: l,
				Meta: n,
				NumLock: u,
				ScrollLock: c,
				Shift: a,
				Symbol: d,
				SymbolLock: f
			}[m];
		}
	});
}
function x$(e, { key: t, code: r, location: n, repeat: a, isComposing: o, charCode: i }) {
	ot(e, {
		key: String(t),
		code: String(r),
		location: k(n),
		repeat: !!a,
		isComposing: !!o,
		charCode: i
	});
}
function Sc(
	e,
	{
		x: t,
		y: r,
		screenX: n,
		screenY: a,
		clientX: o = t,
		clientY: i = r,
		button: s,
		buttons: l,
		relatedTarget: u
	}
) {
	ot(e, {
		screenX: k(n),
		screenY: k(a),
		clientX: k(o),
		x: k(o),
		clientY: k(i),
		y: k(i),
		button: k(s),
		buttons: k(l),
		relatedTarget: u
	});
}
function $$(
	e,
	{
		pointerId: t,
		width: r,
		height: n,
		pressure: a,
		tangentialPressure: o,
		tiltX: i,
		tiltY: s,
		twist: l,
		pointerType: u,
		isPrimary: c
	}
) {
	ot(e, {
		pointerId: k(t),
		width: k(r),
		height: k(n),
		pressure: k(a),
		tangentialPressure: k(o),
		tiltX: k(i),
		tiltY: k(s),
		twist: k(l),
		pointerType: String(u),
		isPrimary: !!c
	});
}
function q$(e, t, r, n = !1) {
	(C$(t) || P$(t)) && (r = { ...r, ...this.system.getUIEventModifiers() });
	const a = Xv(t, e, r);
	return Qv.call(this, e, a, n);
}
function Qv(e, t, r = !1) {
	var n;
	const a = t.type,
		o = r ? () => {} : (n = at[a]) === null || n === void 0 ? void 0 : n(t, e, this);
	if (o) {
		t.preventDefault();
		let i = !1;
		return (
			Object.defineProperty(t, 'defaultPrevented', { get: () => i }),
			Object.defineProperty(t, 'preventDefault', {
				value: () => {
					i = t.cancelable;
				}
			}),
			Pt(() => e.dispatchEvent(t)),
			i || o(),
			!i
		);
	}
	return Pt(() => e.dispatchEvent(t));
}
function I$(e, t, r) {
	const n = Xv(t, e, r);
	Pt(() => e.dispatchEvent(n));
}
const zi = Symbol('Interceptor for programmatical calls');
function pt(e, t, r) {
	const n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		a = Object.getOwnPropertyDescriptor(e, t),
		o = n != null && n.set ? 'set' : 'value';
	if (typeof (n == null ? void 0 : n[o]) != 'function' || n[o][zi])
		throw new Error(`Element ${e.tagName} does not implement "${String(t)}".`);
	function i(...s) {
		const { applyNative: l = !1, realArgs: u, then: c } = r.call(this, ...s),
			d = ((!l && a) || n)[o];
		o === 'set' ? d.call(this, u) : d.call(this, ...u), c == null || c();
	}
	(i[zi] = zi), Object.defineProperty(e, t, { ...(a ?? n), [o]: i });
}
function M$(e) {
	pt(e, 'value', function (r) {
		const n = K1(r);
		return (
			n && o$(this),
			{ applyNative: !!n, realArgs: B$(this, r), then: n ? void 0 : () => i$(this, String(r)) }
		);
	});
}
function B$(e, t) {
	return T(e, 'input', { type: 'number' }) && String(t) !== '' && !Number.isNaN(Number(t))
		? String(Number(t))
		: String(t);
}
function N$(e) {
	pt(e, 'setSelectionRange', function (r, ...n) {
		const a = Y1(r);
		return { applyNative: !!a, realArgs: [Number(r), ...n], then: () => (a ? void 0 : Hr(e)) };
	}),
		pt(e, 'selectionStart', function (r) {
			return { realArgs: r, then: () => Hr(e) };
		}),
		pt(e, 'selectionEnd', function (r) {
			return { realArgs: r, then: () => Hr(e) };
		}),
		pt(e, 'select', function () {
			return { realArgs: [], then: () => J1(e, { anchorOffset: 0, focusOffset: pe(e).length }) };
		});
}
function k$(e) {
	pt(e, 'setRangeText', function (...r) {
		return {
			realArgs: r,
			then: () => {
				Es(e), Hr(e);
			}
		};
	});
}
const yt = Symbol('Node prepared with document state workarounds');
function Jv(e) {
	e[yt] ||
		(e.addEventListener(
			'focus',
			(t) => {
				const r = t.target;
				Tc(r);
			},
			{ capture: !0, passive: !0 }
		),
		e.activeElement && Tc(e.activeElement),
		e.addEventListener(
			'blur',
			(t) => {
				const r = t.target,
					n = Q1(r);
				n !== void 0 && (r.value !== n && I$(r, 'change'), Fv(r));
			},
			{ capture: !0, passive: !0 }
		),
		(e[yt] = yt));
}
function Tc(e) {
	e[yt] || (T(e, ['input', 'textarea']) && (M$(e), N$(e), k$(e)), (e[yt] = yt));
}
function D$(e) {
	return L$(e) ? e : e.ownerDocument;
}
function L$(e) {
	return e.nodeType === 9;
}
function Ot(e) {
	const t = e.delay;
	if (typeof t == 'number')
		return Promise.all([
			new Promise((r) => globalThis.setTimeout(() => r(), t)),
			e.advanceTimers(t)
		]);
}
var Oc, Ac, xc, J;
(function (e) {
	(e[(e.STANDARD = 0)] = 'STANDARD'),
		(e[(e.LEFT = 1)] = 'LEFT'),
		(e[(e.RIGHT = 2)] = 'RIGHT'),
		(e[(e.NUMPAD = 3)] = 'NUMPAD');
})(J || (J = {}));
const j$ = ['Alt', 'AltGraph', 'Control', 'Fn', 'Meta', 'Shift', 'Symbol'];
function $c(e) {
	return j$.includes(e);
}
const F$ = ['CapsLock', 'FnLock', 'NumLock', 'ScrollLock', 'SymbolLock'];
function qc(e) {
	return F$.includes(e);
}
class U$ {
	isKeyPressed(t) {
		return !!this.pressed[String(t.code)];
	}
	getPressedKeys() {
		return Object.values(this.pressed).map((t) => t.keyDef);
	}
	async keydown(t, r) {
		const n = String(r.key),
			a = String(r.code),
			o = Wi(t.config.document);
		this.setKeydownTarget(o);
		var i;
		((i = (Oc = this.pressed)[(Ac = a)]) !== null && i !== void 0) ||
			(Oc[Ac] = { keyDef: r, unpreventedDefault: !1 }),
			$c(n) && (this.modifiers[n] = !0);
		const s = t.dispatchUIEvent(o, 'keydown', { key: n, code: a });
		qc(n) && !this.modifiers[n] && ((this.modifiers[n] = !0), (this.modifierLockStart[n] = !0)),
			(xc = this.pressed[a]).unpreventedDefault || (xc.unpreventedDefault = s),
			s &&
				this.hasKeyPress(n) &&
				t.dispatchUIEvent(Wi(t.config.document), 'keypress', {
					key: n,
					code: a,
					charCode: r.key === 'Enter' ? 13 : String(r.key).charCodeAt(0)
				});
	}
	async keyup(t, r) {
		const n = String(r.key),
			a = String(r.code),
			o = this.pressed[a].unpreventedDefault;
		delete this.pressed[a],
			$c(n) &&
				!Object.values(this.pressed).find((i) => i.keyDef.key === n) &&
				(this.modifiers[n] = !1),
			t.dispatchUIEvent(Wi(t.config.document), 'keyup', { key: n, code: a }, !o),
			qc(n) &&
				this.modifiers[n] &&
				(this.modifierLockStart[n] ? (this.modifierLockStart[n] = !1) : (this.modifiers[n] = !1));
	}
	setKeydownTarget(t) {
		t !== this.lastKeydownTarget && (this.carryChar = ''), (this.lastKeydownTarget = t);
	}
	hasKeyPress(t) {
		return (t.length === 1 || t === 'Enter') && !this.modifiers.Control && !this.modifiers.Alt;
	}
	constructor(t) {
		(this.modifiers = {
			Alt: !1,
			AltGraph: !1,
			CapsLock: !1,
			Control: !1,
			Fn: !1,
			FnLock: !1,
			Meta: !1,
			NumLock: !1,
			ScrollLock: !1,
			Shift: !1,
			Symbol: !1,
			SymbolLock: !1
		}),
			(this.pressed = {}),
			(this.carryChar = ''),
			(this.lastKeydownTarget = void 0),
			(this.modifierLockStart = {}),
			(this.system = t);
	}
}
const H$ = [
		...'0123456789'.split('').map((e) => ({ code: `Digit${e}`, key: e })),
		...')!@#$%^&*('.split('').map((e, t) => ({ code: `Digit${t}`, key: e, shiftKey: !0 })),
		...'abcdefghijklmnopqrstuvwxyz'
			.split('')
			.map((e) => ({ code: `Key${e.toUpperCase()}`, key: e })),
		...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
			.split('')
			.map((e) => ({ code: `Key${e}`, key: e, shiftKey: !0 })),
		{ code: 'Space', key: ' ' },
		{ code: 'AltLeft', key: 'Alt', location: J.LEFT },
		{ code: 'AltRight', key: 'Alt', location: J.RIGHT },
		{ code: 'ShiftLeft', key: 'Shift', location: J.LEFT },
		{ code: 'ShiftRight', key: 'Shift', location: J.RIGHT },
		{ code: 'ControlLeft', key: 'Control', location: J.LEFT },
		{ code: 'ControlRight', key: 'Control', location: J.RIGHT },
		{ code: 'MetaLeft', key: 'Meta', location: J.LEFT },
		{ code: 'MetaRight', key: 'Meta', location: J.RIGHT },
		{ code: 'OSLeft', key: 'OS', location: J.LEFT },
		{ code: 'OSRight', key: 'OS', location: J.RIGHT },
		{ code: 'Tab', key: 'Tab' },
		{ code: 'CapsLock', key: 'CapsLock' },
		{ code: 'Backspace', key: 'Backspace' },
		{ code: 'Enter', key: 'Enter' },
		{ code: 'Escape', key: 'Escape' },
		{ code: 'ArrowUp', key: 'ArrowUp' },
		{ code: 'ArrowDown', key: 'ArrowDown' },
		{ code: 'ArrowLeft', key: 'ArrowLeft' },
		{ code: 'ArrowRight', key: 'ArrowRight' },
		{ code: 'Home', key: 'Home' },
		{ code: 'End', key: 'End' },
		{ code: 'Delete', key: 'Delete' },
		{ code: 'PageUp', key: 'PageUp' },
		{ code: 'PageDown', key: 'PageDown' },
		{ code: 'Fn', key: 'Fn' },
		{ code: 'Symbol', key: 'Symbol' },
		{ code: 'AltRight', key: 'AltGraph' }
	],
	V$ = [
		{ name: 'MouseLeft', pointerType: 'mouse', button: 'primary' },
		{ name: 'MouseRight', pointerType: 'mouse', button: 'secondary' },
		{ name: 'MouseMiddle', pointerType: 'mouse', button: 'auxiliary' },
		{ name: 'TouchA', pointerType: 'touch' },
		{ name: 'TouchB', pointerType: 'touch' },
		{ name: 'TouchC', pointerType: 'touch' }
	];
class Zv {
	getButtons() {
		let t = 0;
		for (const r of Object.keys(this.pressed)) t |= 2 ** Number(r);
		return t;
	}
	down(t) {
		const r = kl(t.button);
		if (r in this.pressed) {
			this.pressed[r].push(t);
			return;
		}
		return (this.pressed[r] = [t]), r;
	}
	up(t) {
		const r = kl(t.button);
		if (
			r in this.pressed &&
			((this.pressed[r] = this.pressed[r].filter((n) => n.name !== t.name)),
			this.pressed[r].length === 0)
		)
			return delete this.pressed[r], r;
	}
	constructor() {
		this.pressed = {};
	}
}
const Ic = { primary: 0, secondary: 1, auxiliary: 2, back: 3, X1: 3, forward: 4, X2: 4 };
function kl(e = 0) {
	return e in Ic ? Ic[e] : Number(e);
}
const Mc = { 1: 2, 2: 1 };
function Bc(e) {
	return (e = kl(e)), e in Mc ? Mc[e] : e;
}
class W$ {
	get countPressed() {
		return this.pressedKeys.size;
	}
	isPressed(t) {
		return this.pressedKeys.has(t.name);
	}
	addPressed(t) {
		return this.pressedKeys.add(t.name);
	}
	removePressed(t) {
		return this.pressedKeys.delete(t.name);
	}
	constructor() {
		this.pressedKeys = new Set();
	}
}
function Gt(e, t) {
	const r = [];
	for (let o = e; o; o = o.parentElement) r.push(o);
	const n = [];
	for (let o = t; o; o = o.parentElement) n.push(o);
	let a = 0;
	for (; !(a >= r.length || a >= n.length || r[r.length - 1 - a] !== n[n.length - 1 - a]); a++);
	return [r.slice(0, r.length - a), n.slice(0, n.length - a), n.slice(n.length - a)];
}
function Dl({ target: e, node: t, offset: r }) {
	return fe(e)
		? { node: e, offset: r ?? pe(e).length }
		: t
		? { node: t, offset: r ?? (t.nodeType === 3 ? t.nodeValue.length : t.childNodes.length) }
		: em(e, r);
}
function em(e, t, r = !0) {
	let n = t === void 0 ? e.childNodes.length - 1 : 0;
	const a = t === void 0 ? -1 : 1;
	for (
		;
		t === void 0 ? n >= (r ? Math.max(e.childNodes.length - 1, 0) : 0) : n <= e.childNodes.length;

	) {
		if (t && n === e.childNodes.length) throw new Error('The given offset is out of bounds.');
		const o = e.childNodes.item(n),
			i = String(o.textContent);
		if (i.length)
			if (t !== void 0 && i.length < t) t -= i.length;
			else {
				if (o.nodeType === 1) return em(o, t, !1);
				if (o.nodeType === 3) return { node: o, offset: t ?? o.nodeValue.length };
			}
		n += a;
	}
	return { node: e, offset: e.childNodes.length };
}
function G$({ document: e, target: t, clickCount: r, node: n, offset: a }) {
	if (W1(t)) return;
	const o = fe(t),
		i = String(o ? pe(t) : t.textContent),
		[s, l] = n ? [a, a] : z$(i, a, r);
	if (o)
		return (
			It(t, { anchorOffset: s ?? i.length, focusOffset: l ?? i.length }),
			{ node: t, start: s ?? 0, end: l ?? i.length }
		);
	{
		const { node: u, offset: c } = Dl({ target: t, node: n, offset: s }),
			{ node: d, offset: f } = Dl({ target: t, node: n, offset: l }),
			m = t.ownerDocument.createRange();
		try {
			m.setStart(u, c), m.setEnd(d, f);
		} catch {
			throw new Error('The given offset is out of bounds.');
		}
		const y = e.getSelection();
		return y == null || y.removeAllRanges(), y == null || y.addRange(m.cloneRange()), m;
	}
}
function z$(e, t, r) {
	if (r % 3 === 1 || e.length === 0) return [t, t];
	const n = t ?? e.length;
	return r % 3 === 2
		? [
				n - e.substr(0, t).match(/(\w+|\s+|\W)?$/)[0].length,
				t === void 0 ? t : t + e.substr(t).match(/^(\w+|\s+|\W)?/)[0].length
		  ]
		: [
				n - e.substr(0, t).match(/[^\r\n]*$/)[0].length,
				t === void 0 ? t : t + e.substr(t).match(/^[^\r\n]*/)[0].length
		  ];
}
function K$(e, { document: t, target: r, node: n, offset: a }) {
	const o = Dl({ target: r, node: n, offset: a });
	if ('node' in e) {
		if (o.node === e.node) {
			const i = o.offset < e.start ? e.end : e.start,
				s = o.offset > e.end || o.offset < e.start ? o.offset : e.end;
			It(e.node, { anchorOffset: i, focusOffset: s });
		}
	} else {
		const i = e.cloneRange(),
			s = i.comparePoint(o.node, o.offset);
		s < 0 ? i.setStart(o.node, o.offset) : s > 0 && i.setEnd(o.node, o.offset);
		const l = t.getSelection();
		l == null || l.removeAllRanges(), l == null || l.addRange(i.cloneRange());
	}
}
function tm(e, t) {
	var r, n, a, o, i, s, l, u;
	return (
		e.target !== t.target ||
		((r = e.coords) === null || r === void 0 ? void 0 : r.x) !==
			((n = t.coords) === null || n === void 0 ? void 0 : n.y) ||
		((a = e.coords) === null || a === void 0 ? void 0 : a.y) !==
			((o = t.coords) === null || o === void 0 ? void 0 : o.y) ||
		((i = e.caret) === null || i === void 0 ? void 0 : i.node) !==
			((s = t.caret) === null || s === void 0 ? void 0 : s.node) ||
		((l = e.caret) === null || l === void 0 ? void 0 : l.offset) !==
			((u = t.caret) === null || u === void 0 ? void 0 : u.offset)
	);
}
class Y$ {
	move(t, r) {
		const n = this.position,
			a = this.getTarget(t);
		if (((this.position = r), !tm(n, r))) return;
		const o = this.getTarget(t),
			i = this.getEventInit('mousemove'),
			[s, l] = Gt(a, o);
		return {
			leave: () => {
				a !== o &&
					(t.dispatchUIEvent(a, 'mouseout', i),
					s.forEach((u) => t.dispatchUIEvent(u, 'mouseleave', i)));
			},
			enter: () => {
				a !== o &&
					(t.dispatchUIEvent(o, 'mouseover', i),
					l.forEach((u) => t.dispatchUIEvent(u, 'mouseenter', i)));
			},
			move: () => {
				t.dispatchUIEvent(o, 'mousemove', i), this.modifySelecting(t);
			}
		};
	}
	down(t, r, n) {
		const a = this.buttons.down(r);
		if (a === void 0) return;
		const o = this.getTarget(t);
		this.buttonDownTarget[a] = o;
		const i = Re(o),
			s = this.getEventInit('mousedown', r.button);
		(i || t.dispatchUIEvent(o, 'mousedown', s)) && (this.startSelecting(t, s.detail), Ue(o)),
			!i &&
				Bc(r.button) === 2 &&
				t.dispatchUIEvent(o, 'contextmenu', this.getEventInit('contextmenu', r.button, n));
	}
	up(t, r, n) {
		const a = this.buttons.up(r);
		if (a === void 0) return;
		const o = this.getTarget(t);
		if (!Re(o)) {
			t.dispatchUIEvent(o, 'mouseup', this.getEventInit('mouseup', r.button)), this.endSelecting();
			const i = Gt(this.buttonDownTarget[a], o)[2][0];
			if (i) {
				const s = this.getEventInit('click', r.button, n);
				s.detail &&
					(t.dispatchUIEvent(i, s.button === 0 ? 'click' : 'auxclick', s),
					s.button === 0 &&
						s.detail === 2 &&
						t.dispatchUIEvent(i, 'dblclick', {
							...this.getEventInit('dblclick', r.button),
							detail: s.detail
						}));
			}
		}
	}
	resetClickCount() {
		this.clickCount.reset();
	}
	getEventInit(t, r, n) {
		const a = { ...this.position.coords };
		return (
			n &&
				((a.pointerId = n.pointerId), (a.pointerType = n.pointerType), (a.isPrimary = n.isPrimary)),
			(a.button = Bc(r)),
			(a.buttons = this.buttons.getButtons()),
			t === 'mousedown'
				? (a.detail = this.clickCount.getOnDown(a.button))
				: t === 'mouseup'
				? (a.detail = this.clickCount.getOnUp(a.button))
				: (t === 'click' || t === 'auxclick') && (a.detail = this.clickCount.incOnClick(a.button)),
			a
		);
	}
	getTarget(t) {
		var r;
		return (r = this.position.target) !== null && r !== void 0 ? r : t.config.document.body;
	}
	startSelecting(t, r) {
		var n, a;
		this.selecting = G$({
			document: t.config.document,
			target: this.getTarget(t),
			node: (n = this.position.caret) === null || n === void 0 ? void 0 : n.node,
			offset: (a = this.position.caret) === null || a === void 0 ? void 0 : a.offset,
			clickCount: r
		});
	}
	modifySelecting(t) {
		var r, n;
		this.selecting &&
			K$(this.selecting, {
				document: t.config.document,
				target: this.getTarget(t),
				node: (r = this.position.caret) === null || r === void 0 ? void 0 : r.node,
				offset: (n = this.position.caret) === null || n === void 0 ? void 0 : n.offset
			});
	}
	endSelecting() {
		this.selecting = void 0;
	}
	constructor() {
		(this.position = {}),
			(this.buttons = new Zv()),
			(this.buttonDownTarget = {}),
			(this.clickCount = new (class {
				incOnClick(t) {
					const r = this.down[t] === void 0 ? void 0 : Number(this.down[t]) + 1;
					return (
						(this.count = this.count[t] === void 0 ? {} : { [t]: Number(this.count[t]) + 1 }), r
					);
				}
				getOnDown(t) {
					var r;
					this.down = { [t]: (r = this.count[t]) !== null && r !== void 0 ? r : 0 };
					var n;
					return (
						(this.count = { [t]: (n = this.count[t]) !== null && n !== void 0 ? n : 0 }),
						Number(this.count[t]) + 1
					);
				}
				getOnUp(t) {
					return this.down[t] === void 0 ? void 0 : Number(this.down[t]) + 1;
				}
				reset() {
					this.count = {};
				}
				constructor() {
					(this.down = {}), (this.count = {});
				}
			})());
	}
}
function mn(e, t) {
	var r;
	return ((r = rm(e, t)) === null || r === void 0 ? void 0 : r.pointerEvents) !== 'none';
}
function X$(e) {
	const t = de(e);
	for (let r = e, n = []; r != null && r.ownerDocument; r = r.parentElement) {
		n.push(r);
		const a = t.getComputedStyle(r).pointerEvents;
		if (a && !['inherit', 'unset'].includes(a)) return { pointerEvents: a, tree: n };
	}
}
const Nc = Symbol('Last check for pointer-events');
function rm(e, t) {
	const r = t[Nc];
	if (
		!(
			e.config.pointerEventsCheck !== mt.Never &&
			(!r ||
				(kc(e.config.pointerEventsCheck, mt.EachApiCall) && r[Y.Call] !== Tr(e, Y.Call)) ||
				(kc(e.config.pointerEventsCheck, mt.EachTrigger) && r[Y.Trigger] !== Tr(e, Y.Trigger)))
		)
	)
		return r == null ? void 0 : r.result;
	const a = X$(t);
	return (t[Nc] = { [Y.Call]: Tr(e, Y.Call), [Y.Trigger]: Tr(e, Y.Trigger), result: a }), a;
}
function Ft(e, t) {
	const r = rm(e, t);
	if ((r == null ? void 0 : r.pointerEvents) === 'none')
		throw new Error(
			[
				`Unable to perform pointer interaction as the element ${
					r.tree.length > 1 ? 'inherits' : 'has'
				} \`pointer-events: none\`:`,
				'',
				Q$(r.tree)
			].join(`
`)
		);
}
function Q$(e) {
	return e
		.reverse()
		.map((t, r) =>
			[
				''.padEnd(r),
				t.tagName,
				t.id && `#${t.id}`,
				t.hasAttribute('data-testid') && `(testId=${t.getAttribute('data-testid')})`,
				J$(t),
				e.length > 1 && r === 0 && '  <-- This element declared `pointer-events: none`',
				e.length > 1 && r === e.length - 1 && '  <-- Asserted pointer events here'
			]
				.filter(Boolean)
				.join('')
		).join(`
`);
}
function J$(e) {
	var t;
	let r;
	if (e.hasAttribute('aria-label')) r = e.getAttribute('aria-label');
	else if (e.hasAttribute('aria-labelledby')) {
		var n, a;
		r =
			(n = e.ownerDocument.getElementById(e.getAttribute('aria-labelledby'))) === null ||
			n === void 0 ||
			(a = n.textContent) === null ||
			a === void 0
				? void 0
				: a.trim();
	} else if (
		T(e, ['button', 'input', 'meter', 'output', 'progress', 'select', 'textarea']) &&
		!((t = e.labels) === null || t === void 0) &&
		t.length
	)
		r = Array.from(e.labels)
			.map((i) => {
				var s;
				return (s = i.textContent) === null || s === void 0 ? void 0 : s.trim();
			})
			.join('|');
	else if (T(e, 'button')) {
		var o;
		r = (o = e.textContent) === null || o === void 0 ? void 0 : o.trim();
	}
	return (
		(r = r == null ? void 0 : r.replace(/\n/g, '  ')),
		Number(r == null ? void 0 : r.length) > 30 &&
			(r = `${r == null ? void 0 : r.substring(0, 29)}…`),
		r ? `(label=${r})` : ''
	);
}
function kc(e, t) {
	return (e & t) > 0;
}
class Dc {
	init(t, r) {
		this.position = r;
		const n = this.getTarget(t),
			[, a] = Gt(null, n),
			o = this.getEventInit();
		return (
			Ft(t, n),
			t.dispatchUIEvent(n, 'pointerover', o),
			a.forEach((i) => t.dispatchUIEvent(i, 'pointerenter', o)),
			this
		);
	}
	move(t, r) {
		const n = this.position,
			a = this.getTarget(t);
		if (((this.position = r), !tm(n, r))) return;
		const o = this.getTarget(t),
			i = this.getEventInit(),
			[s, l] = Gt(a, o);
		return {
			leave: () => {
				mn(t, a) &&
					a !== o &&
					(t.dispatchUIEvent(a, 'pointerout', i),
					s.forEach((u) => t.dispatchUIEvent(u, 'pointerleave', i)));
			},
			enter: () => {
				Ft(t, o),
					a !== o &&
						(t.dispatchUIEvent(o, 'pointerover', i),
						l.forEach((u) => t.dispatchUIEvent(u, 'pointerenter', i)));
			},
			move: () => {
				t.dispatchUIEvent(o, 'pointermove', i);
			}
		};
	}
	down(t, r) {
		if (this.isDown) return;
		const n = this.getTarget(t);
		Ft(t, n),
			(this.isDown = !0),
			(this.isPrevented = !t.dispatchUIEvent(n, 'pointerdown', this.getEventInit()));
	}
	up(t, r) {
		if (!this.isDown) return;
		const n = this.getTarget(t);
		Ft(t, n), (this.isDown = !1), t.dispatchUIEvent(n, 'pointerup', this.getEventInit());
	}
	release(t) {
		const r = this.getTarget(t),
			[n] = Gt(r, null),
			a = this.getEventInit();
		mn(t, r) &&
			(t.dispatchUIEvent(r, 'pointerout', a),
			n.forEach((o) => t.dispatchUIEvent(o, 'pointerleave', a))),
			(this.isCancelled = !0);
	}
	getTarget(t) {
		var r;
		return (r = this.position.target) !== null && r !== void 0 ? r : t.config.document.body;
	}
	getEventInit() {
		return {
			...this.position.coords,
			pointerId: this.pointerId,
			pointerType: this.pointerType,
			isPrimary: this.isPrimary
		};
	}
	constructor({ pointerId: t, pointerType: r, isPrimary: n }) {
		(this.isMultitouch = !1),
			(this.isCancelled = !1),
			(this.isDown = !1),
			(this.isPrevented = !1),
			(this.position = {}),
			(this.pointerId = t),
			(this.pointerType = r),
			(this.isPrimary = n),
			(this.isMultitouch = !n);
	}
}
var Lc, jc;
class Z$ {
	isKeyPressed(t) {
		return this.devices.get(t.pointerType).isPressed(t);
	}
	async press(t, r, n) {
		const a = this.getPointerName(r),
			o = r.pointerType === 'touch' ? this.pointers.new(a, r).init(t, n) : this.pointers.get(a);
		(o.position = n),
			o.pointerType !== 'touch' && (this.mouse.position = n),
			this.devices.get(r.pointerType).addPressed(r),
			this.buttons.down(r),
			o.down(t, r),
			o.pointerType !== 'touch' && !o.isPrevented && this.mouse.down(t, r, o);
	}
	async move(t, r, n) {
		const a = this.pointers.get(r),
			o = a.move(t, n),
			i = a.pointerType === 'touch' || (a.isPrevented && a.isDown) ? void 0 : this.mouse.move(t, n);
		o == null || o.leave(),
			i == null || i.leave(),
			o == null || o.enter(),
			i == null || i.enter(),
			o == null || o.move(),
			i == null || i.move();
	}
	async release(t, r, n) {
		const a = this.devices.get(r.pointerType);
		a.removePressed(r), this.buttons.up(r);
		const o = this.pointers.get(this.getPointerName(r));
		if (
			((o.position = n),
			o.pointerType !== 'touch' && (this.mouse.position = n),
			a.countPressed === 0 && o.up(t, r),
			o.pointerType === 'touch' && o.release(t),
			!o.isPrevented)
		) {
			if (o.pointerType === 'touch' && !o.isMultitouch) {
				const i = this.mouse.move(t, o.position);
				i == null || i.leave(),
					i == null || i.enter(),
					i == null || i.move(),
					this.mouse.down(t, r, o);
			}
			if (!o.isMultitouch) {
				const i = this.mouse.move(t, o.position);
				i == null || i.leave(),
					i == null || i.enter(),
					i == null || i.move(),
					this.mouse.up(t, r, o);
			}
		}
	}
	getPointerName(t) {
		return t.pointerType === 'touch' ? t.name : t.pointerType;
	}
	getPreviousPosition(t) {
		return this.pointers.has(t) ? this.pointers.get(t).position : void 0;
	}
	resetClickCount() {
		this.mouse.resetClickCount();
	}
	getMouseTarget(t) {
		var r;
		return (r = this.mouse.position.target) !== null && r !== void 0 ? r : t.config.document.body;
	}
	setMousePosition(t) {
		(this.mouse.position = t), (this.pointers.get('mouse').position = t);
	}
	constructor(t) {
		(this.devices = new (class {
			get(r) {
				var n;
				return (
					((n = (Lc = this.registry)[(jc = r)]) !== null && n !== void 0) || (Lc[jc] = new W$()),
					this.registry[r]
				);
			}
			constructor() {
				this.registry = {};
			}
		})()),
			(this.pointers = new (class {
				new(r, n) {
					const a =
						n.pointerType !== 'touch' ||
						!Object.values(this.registry).some((o) => o.pointerType === 'touch' && !o.isCancelled);
					return (
						a ||
							Object.values(this.registry).forEach((o) => {
								o.pointerType === n.pointerType && !o.isCancelled && (o.isMultitouch = !0);
							}),
						(this.registry[r] = new Dc({
							pointerId: this.nextId++,
							pointerType: n.pointerType,
							isPrimary: a
						})),
						this.registry[r]
					);
				}
				get(r) {
					if (!this.has(r))
						throw new Error(`Trying to access pointer "${r}" which does not exist.`);
					return this.registry[r];
				}
				has(r) {
					return r in this.registry;
				}
				constructor() {
					(this.registry = {
						mouse: new Dc({ pointerId: 1, pointerType: 'mouse', isPrimary: !0 })
					}),
						(this.nextId = 2);
				}
			})()),
			(this.system = t),
			(this.buttons = new Zv()),
			(this.mouse = new Y$());
	}
}
class nm {
	getUIEventModifiers() {
		return {
			altKey: this.keyboard.modifiers.Alt,
			ctrlKey: this.keyboard.modifiers.Control,
			metaKey: this.keyboard.modifiers.Meta,
			shiftKey: this.keyboard.modifiers.Shift,
			modifierAltGraph: this.keyboard.modifiers.AltGraph,
			modifierCapsLock: this.keyboard.modifiers.CapsLock,
			modifierFn: this.keyboard.modifiers.Fn,
			modifierFnLock: this.keyboard.modifiers.FnLock,
			modifierNumLock: this.keyboard.modifiers.NumLock,
			modifierScrollLock: this.keyboard.modifiers.ScrollLock,
			modifierSymbol: this.keyboard.modifiers.Symbol,
			modifierSymbolLock: this.keyboard.modifiers.SymbolLock
		};
	}
	constructor() {
		(this.keyboard = new U$(this)), (this.pointer = new Z$(this));
	}
}
async function eq(e) {
	const t = [];
	return (
		this.config.skipHover || t.push({ target: e }),
		t.push({ keys: '[MouseLeft]', target: e }),
		this.pointer(t)
	);
}
async function tq(e) {
	return this.pointer([{ target: e }, '[MouseLeft][MouseLeft]']);
}
async function rq(e) {
	return this.pointer([{ target: e }, '[MouseLeft][MouseLeft][MouseLeft]']);
}
async function nq(e) {
	return this.pointer({ target: e });
}
async function aq(e) {
	return (
		Ft(this, this.system.pointer.getMouseTarget(this)),
		this.pointer({ target: e.ownerDocument.body })
	);
}
async function oq({ shift: e } = {}) {
	return this.keyboard(
		e === !0 ? '{Shift>}{Tab}{/Shift}' : e === !1 ? '[/ShiftLeft][/ShiftRight]{Tab}' : '{Tab}'
	);
}
function iq(e, t) {
	const r = [];
	do {
		const {
			type: a,
			descriptor: o,
			consumedLength: i,
			releasePrevious: s,
			releaseSelf: l = !0,
			repeat: u
		} = kv(t, 'keyboard');
		var n;
		const c =
			(n = e.find((d) => {
				if (a === '[') {
					var f;
					return (
						((f = d.code) === null || f === void 0 ? void 0 : f.toLowerCase()) === o.toLowerCase()
					);
				} else if (a === '{') {
					var m;
					return (
						((m = d.key) === null || m === void 0 ? void 0 : m.toLowerCase()) === o.toLowerCase()
					);
				}
				return d.key === o;
			})) !== null && n !== void 0
				? n
				: { key: 'Unknown', code: 'Unknown', [a === '[' ? 'code' : 'key']: o };
		r.push({ keyDef: c, releasePrevious: s, releaseSelf: l, repeat: u }), (t = t.slice(i));
	} while (t);
	return r;
}
async function lq(e) {
	const t = iq(this.config.keyboardMap, e);
	for (let r = 0; r < t.length; r++) await Ot(this.config), await sq(this, t[r]);
}
async function sq(e, { keyDef: t, releasePrevious: r, releaseSelf: n, repeat: a }) {
	const { system: o } = e;
	if ((o.keyboard.isKeyPressed(t) && (await o.keyboard.keyup(e, t)), !r)) {
		for (let i = 1; i <= a; i++) await o.keyboard.keydown(e, t), i < a && (await Ot(e.config));
		n && (await o.keyboard.keyup(e, t));
	}
}
async function uq(e) {
	for (const t of e.system.keyboard.getPressedKeys()) await e.system.keyboard.keyup(e, t);
}
function am(e) {
	const t = fe(e)
			? { 'text/plain': cq(e) }
			: { 'text/plain': String(e.ownerDocument.getSelection()) },
		r = bs(de(e));
	for (const n in t) t[n] && r.setData(n, t[n]);
	return r;
}
function cq(e) {
	const t = rr(e);
	return pe(e).substring(t.startOffset, t.endOffset);
}
async function dq() {
	const e = this.config.document;
	var t;
	const r = (t = e.activeElement) !== null && t !== void 0 ? t : e.body,
		n = am(r);
	if (n.items.length !== 0)
		return (
			this.dispatchUIEvent(r, 'copy', { clipboardData: n }) &&
				this.config.writeToClipboard &&
				(await Mv(e, n)),
			n
		);
}
async function fq() {
	const e = this.config.document;
	var t;
	const r = (t = e.activeElement) !== null && t !== void 0 ? t : e.body,
		n = am(r);
	if (n.items.length !== 0)
		return (
			this.dispatchUIEvent(r, 'cut', { clipboardData: n }) &&
				this.config.writeToClipboard &&
				(await Mv(r.ownerDocument, n)),
			n
		);
}
async function pq(e) {
	const t = this.config.document;
	var r;
	const n = (r = t.activeElement) !== null && r !== void 0 ? r : t.body;
	var a;
	const o =
		(a = typeof e == 'string' ? vq(t, e) : e) !== null && a !== void 0
			? a
			: await N1(t).catch(() => {
					throw new Error(
						'`userEvent.paste()` without `clipboardData` requires the `ClipboardAPI` to be available.'
					);
			  });
	this.dispatchUIEvent(n, 'paste', { clipboardData: o });
}
function vq(e, t) {
	const r = bs(de(e));
	return r.setData('text', t), r;
}
function Fc(e, t) {
	const r = [];
	do {
		const {
				descriptor: n,
				consumedLength: a,
				releasePrevious: o,
				releaseSelf: i = !0
			} = kv(t, 'pointer'),
			s = e.find((l) => l.name === n);
		s && r.push({ keyDef: s, releasePrevious: o, releaseSelf: i }), (t = t.slice(a));
	} while (t);
	return r;
}
async function mq(e) {
	const { pointerMap: t } = this.config,
		r = [];
	(Array.isArray(e) ? e : [e]).forEach((n) => {
		typeof n == 'string'
			? r.push(...Fc(t, n))
			: 'keys' in n
			? r.push(...Fc(t, n.keys).map((a) => ({ ...n, ...a })))
			: r.push(n);
	});
	for (let n = 0; n < r.length; n++) await Ot(this.config), await yq(this, r[n]);
	this.system.pointer.resetClickCount();
}
async function yq(e, t) {
	var r, n;
	const a =
			'pointerName' in t && t.pointerName
				? t.pointerName
				: 'keyDef' in t
				? e.system.pointer.getPointerName(t.keyDef)
				: 'mouse',
		o = e.system.pointer.getPreviousPosition(a);
	var i, s, l, u;
	const c = {
		target: (i = t.target) !== null && i !== void 0 ? i : bq(e, o),
		coords: (s = t.coords) !== null && s !== void 0 ? s : o == null ? void 0 : o.coords,
		caret: {
			node:
				(l = t.node) !== null && l !== void 0
					? l
					: Uc(t) || o == null || (r = o.caret) === null || r === void 0
					? void 0
					: r.node,
			offset:
				(u = t.offset) !== null && u !== void 0
					? u
					: Uc(t) || o == null || (n = o.caret) === null || n === void 0
					? void 0
					: n.offset
		}
	};
	'keyDef' in t
		? (e.system.pointer.isKeyPressed(t.keyDef) &&
				(Lt(e, Y.Trigger), await e.system.pointer.release(e, t.keyDef, c)),
		  t.releasePrevious ||
				(Lt(e, Y.Trigger),
				await e.system.pointer.press(e, t.keyDef, c),
				t.releaseSelf && (Lt(e, Y.Trigger), await e.system.pointer.release(e, t.keyDef, c))))
		: (Lt(e, Y.Trigger), await e.system.pointer.move(e, a, c));
}
function Uc(e) {
	var t, r;
	return !!((r = (t = e.target) !== null && t !== void 0 ? t : e.node) !== null && r !== void 0
		? r
		: e.offset !== void 0);
}
function bq(e, t) {
	if (!t) throw new Error('This pointer has no previous position. Provide a target property!');
	var r;
	return (r = t.target) !== null && r !== void 0 ? r : e.config.document.body;
}
async function hq(e) {
	if (!Ct(e) || Re(e)) throw new Error('clear()` is only supported on editable elements.');
	if ((Ue(e), e.ownerDocument.activeElement !== e))
		throw new Error('The element to be cleared could not be focused.');
	if ((Gv(e), !b$(e))) throw new Error('The element content to be cleared could not be selected.');
	Tt(this, e, '', 'deleteContentBackward');
}
async function gq(e, t) {
	return om.call(this, !0, e, t);
}
async function Eq(e, t) {
	return om.call(this, !1, e, t);
}
async function om(e, t, r) {
	if (!e && !t.multiple)
		throw x().getElementError(
			'Unable to deselect an option in a non-multiple select. Use selectOptions to change the selection instead.',
			t
		);
	const n = Array.isArray(r) ? r : [r],
		a = Array.from(t.querySelectorAll('option, [role="option"]')),
		o = n
			.map((s) => {
				if (typeof s != 'string' && a.includes(s)) return s;
				{
					const l = a.find((u) => u.value === s || u.innerHTML === s);
					if (l) return l;
					throw x().getElementError(`Value "${String(s)}" not found in options`, t);
				}
			})
			.filter((s) => !Re(s));
	if (Re(t) || !o.length) return;
	const i = (s) => {
		(s.selected = e),
			this.dispatchUIEvent(t, 'input', { bubbles: !0, cancelable: !1, composed: !0 }),
			this.dispatchUIEvent(t, 'change');
	};
	if (T(t, 'select'))
		if (t.multiple)
			for (const s of o) {
				const l = this.config.pointerEventsCheck === 0 ? !0 : mn(this, s);
				l &&
					(this.dispatchUIEvent(s, 'pointerover'),
					this.dispatchUIEvent(t, 'pointerenter'),
					this.dispatchUIEvent(s, 'mouseover'),
					this.dispatchUIEvent(t, 'mouseenter'),
					this.dispatchUIEvent(s, 'pointermove'),
					this.dispatchUIEvent(s, 'mousemove'),
					this.dispatchUIEvent(s, 'pointerdown'),
					this.dispatchUIEvent(s, 'mousedown')),
					Ue(t),
					l && (this.dispatchUIEvent(s, 'pointerup'), this.dispatchUIEvent(s, 'mouseup')),
					i(s),
					l && this.dispatchUIEvent(s, 'click'),
					await Ot(this.config);
			}
		else if (o.length === 1) {
			const s = this.config.pointerEventsCheck === 0 ? !0 : mn(this, t);
			s ? await this.click(t) : Ue(t),
				i(o[0]),
				s &&
					(this.dispatchUIEvent(t, 'pointerover'),
					this.dispatchUIEvent(t, 'pointerenter'),
					this.dispatchUIEvent(t, 'mouseover'),
					this.dispatchUIEvent(t, 'mouseenter'),
					this.dispatchUIEvent(t, 'pointerup'),
					this.dispatchUIEvent(t, 'mouseup'),
					this.dispatchUIEvent(t, 'click')),
				await Ot(this.config);
		} else throw x().getElementError('Cannot select multiple options on a non-multiple select', t);
	else if (t.getAttribute('role') === 'listbox')
		for (const s of o) await this.click(s), await this.unhover(s);
	else
		throw x().getElementError(
			'Cannot select options on elements that are neither select nor listbox elements',
			t
		);
}
async function Rq(
	e,
	t,
	{
		skipClick: r = this.config.skipClick,
		skipAutoClose: n = this.config.skipAutoClose,
		initialSelectionStart: a,
		initialSelectionEnd: o
	} = {}
) {
	e.disabled ||
		(r || (await this.click(e)),
		a !== void 0 && jt(e, a, o ?? a),
		await this.keyboard(t),
		n || (await uq(this)));
}
const Hc = Symbol('files and value properties are mocked');
function Ki(e, t, r) {
	r ? Object.defineProperty(e, t, r) : delete e[t];
}
function _q(e, t) {
	var r;
	(r = e[Hc]) === null || r === void 0 || r.restore();
	const n = Object.getOwnPropertyDescriptor(e, 'type'),
		a = Object.getOwnPropertyDescriptor(e, 'value'),
		o = Object.getOwnPropertyDescriptor(e, 'files');
	function i() {
		Ki(e, 'type', n), Ki(e, 'value', a), Ki(e, 'files', o);
	}
	(e[Hc] = { restore: i }),
		Object.defineProperties(e, {
			files: { configurable: !0, get: () => t },
			value: {
				configurable: !0,
				get: () => (t.length ? `C:\\fakepath\\${t[0].name}` : ''),
				set(s) {
					if (s === '') i();
					else {
						var l;
						a == null || (l = a.set) === null || l === void 0 || l.call(e, s);
					}
				}
			},
			type: {
				configurable: !0,
				get: () => 'file',
				set(s) {
					s !== 'file' && (i(), (e.type = s));
				}
			}
		});
}
async function wq(e, t) {
	const r = T(e, 'label') ? e.control : e;
	if (!r || !T(r, 'input', { type: 'file' }))
		throw new TypeError(
			`The ${r === e ? 'given' : 'associated'} ${
				r == null ? void 0 : r.tagName
			} element does not accept file uploads`
		);
	if (Re(e)) return;
	const n = (Array.isArray(t) ? t : [t])
			.filter((o) => !this.config.applyAccept || Cq(o, r.accept))
			.slice(0, r.multiple ? void 0 : 1),
		a = () => {
			var o;
			(n.length === ((o = r.files) === null || o === void 0 ? void 0 : o.length) &&
				n.every((i, s) => {
					var l;
					return i === ((l = r.files) === null || l === void 0 ? void 0 : l.item(s));
				})) ||
				(_q(r, ys(de(e), n)), this.dispatchUIEvent(r, 'input'), this.dispatchUIEvent(r, 'change'));
		};
	r.addEventListener('fileDialog', a), await this.click(e), r.removeEventListener('fileDialog', a);
}
function Cq(e, t) {
	if (!t) return !0;
	const r = ['audio/*', 'image/*', 'video/*'];
	return t
		.split(',')
		.some((n) =>
			n.startsWith('.')
				? e.name.endsWith(n)
				: r.includes(n)
				? e.type.startsWith(n.substr(0, n.length - 1))
				: e.type === n
		);
}
const Vc = Object.freeze(
	Object.defineProperty(
		{
			__proto__: null,
			clear: hq,
			click: eq,
			copy: dq,
			cut: fq,
			dblClick: tq,
			deselectOptions: Eq,
			hover: nq,
			keyboard: lq,
			paste: pq,
			pointer: mq,
			selectOptions: gq,
			tab: oq,
			tripleClick: rq,
			type: Rq,
			unhover: aq,
			upload: wq
		},
		Symbol.toStringTag,
		{ value: 'Module' }
	)
);
function Pq(e) {
	return x().asyncWrapper(e);
}
const im = {
		applyAccept: !0,
		autoModify: !0,
		delay: 0,
		document: globalThis.document,
		keyboardMap: H$,
		pointerMap: V$,
		pointerEventsCheck: mt.EachApiCall,
		skipAutoClose: !1,
		skipClick: !1,
		skipHover: !1,
		writeToClipboard: !1,
		advanceTimers: () => Promise.resolve()
	},
	Sq = { ...im, writeToClipboard: !0 };
function lm(e = {}, t = Sq, r) {
	const n = xq(e, r, t);
	return { ...t, ...e, document: n };
}
function Tq(e = {}) {
	const t = lm(e);
	Jv(t.document);
	var r;
	const n = (r = t.document.defaultView) !== null && r !== void 0 ? r : globalThis.window;
	return I1(n), ws(t).api;
}
function W({ keyboardState: e, pointerState: t, ...r } = {}, n) {
	const a = lm(r, im, n);
	Jv(a.document);
	var o;
	const i = (o = t ?? e) !== null && o !== void 0 ? o : new nm();
	return { api: ws(a, i).api, system: i };
}
function Oq(e) {
	return ws({ ...this.config, ...e }, this.system).api;
}
function Aq(e, t) {
	function r(...n) {
		return Lt(e, Y.Call), Pq(() => t.apply(e, n).then(async (a) => (await Ot(e.config), a)));
	}
	return Object.defineProperty(r, 'name', { get: () => t.name }), r;
}
function ws(e, t = new nm()) {
	const r = {};
	return (
		Object.assign(r, {
			config: e,
			dispatchEvent: Qv.bind(r),
			dispatchUIEvent: q$.bind(r),
			system: t,
			levelRefs: {},
			...Vc
		}),
		{
			instance: r,
			api: {
				...Object.fromEntries(Object.entries(Vc).map(([n, a]) => [n, Aq(r, a)])),
				setup: Oq.bind(r)
			}
		}
	);
}
function xq(e, t, r) {
	var n, a;
	return (a = (n = e.document) !== null && n !== void 0 ? n : t && D$(t)) !== null && a !== void 0
		? a
		: r.document;
}
function $q(e) {
	return W().api.clear(e);
}
function qq(e, t = {}) {
	return W(t, e).api.click(e);
}
function Iq(e = {}) {
	return W(e).api.copy();
}
function Mq(e = {}) {
	return W(e).api.cut();
}
function Bq(e, t = {}) {
	return W(t).api.dblClick(e);
}
function Nq(e, t, r = {}) {
	return W(r).api.deselectOptions(e, t);
}
function kq(e, t = {}) {
	return W(t).api.hover(e);
}
async function Dq(e, t = {}) {
	const { api: r, system: n } = W(t);
	return r.keyboard(e).then(() => n);
}
async function Lq(e, t = {}) {
	const { api: r, system: n } = W(t);
	return r.pointer(e).then(() => n);
}
function jq(e, t) {
	return W(t).api.paste(e);
}
function Fq(e, t, r = {}) {
	return W(r).api.selectOptions(e, t);
}
function Uq(e, t = {}) {
	return W(t).api.tripleClick(e);
}
function Hq(e, t, r = {}) {
	return W(r, e).api.type(e, t, r);
}
function Vq(e, t = {}) {
	const { api: r, system: n } = W(t);
	return n.pointer.setMousePosition({ target: e }), r.unhover(e);
}
function Wq(e, t, r = {}) {
	return W(r).api.upload(e, t);
}
function Gq(e = {}) {
	return W().api.tab(e);
}
const zq = Object.freeze(
		Object.defineProperty(
			{
				__proto__: null,
				clear: $q,
				click: qq,
				copy: Iq,
				cut: Mq,
				dblClick: Bq,
				deselectOptions: Nq,
				hover: kq,
				keyboard: Dq,
				paste: jq,
				pointer: Lq,
				selectOptions: Fq,
				tab: Gq,
				tripleClick: Uq,
				type: Hq,
				unhover: Vq,
				upload: Wq
			},
			Symbol.toStringTag,
			{ value: 'Module' }
		)
	),
	Wc = { ...zq, setup: Tq };
var F = (() => {
		let e;
		return (
			typeof window < 'u'
				? (e = window)
				: typeof globalThis < 'u'
				? (e = globalThis)
				: typeof global < 'u'
				? (e = global)
				: typeof self < 'u'
				? (e = self)
				: (e = {}),
			e
		);
	})(),
	{ LOGLEVEL: Kq } = F,
	qe = { trace: 1, debug: 2, info: 3, warn: 4, error: 5, silent: 10 },
	Yq = Kq,
	ct = qe[Yq] || qe.info,
	sm = {
		trace: (e, ...t) => {
			ct <= qe.trace && console.trace(e, ...t);
		},
		debug: (e, ...t) => {
			ct <= qe.debug && console.debug(e, ...t);
		},
		info: (e, ...t) => {
			ct <= qe.info && console.info(e, ...t);
		},
		warn: (e, ...t) => {
			ct <= qe.warn && console.warn(e, ...t);
		},
		error: (e, ...t) => {
			ct <= qe.error && console.error(e, ...t);
		},
		log: (e, ...t) => {
			ct < qe.silent && console.log(e, ...t);
		}
	},
	Ll = new Set(),
	X =
		(e) =>
		(t, ...r) => {
			if (!Ll.has(t)) return Ll.add(t), sm[e](t, ...r);
		};
X.clear = () => Ll.clear();
X.trace = X('trace');
X.debug = X('debug');
X.info = X('info');
X.warn = X('warn');
X.error = X('error');
X.log = X('log');
var Xq = () => Math.random().toString(16).slice(2),
	Qq = class {
		constructor({ transport: e, async: t = !1 } = {}) {
			(this.sender = Xq()),
				(this.events = {}),
				(this.data = {}),
				(this.transport = void 0),
				(this.isAsync = t),
				e && ((this.transport = e), this.transport.setHandler((r) => this.handleEvent(r)));
		}
		get hasTransport() {
			return !!this.transport;
		}
		addListener(e, t) {
			(this.events[e] = this.events[e] || []), this.events[e].push(t);
		}
		emit(e, ...t) {
			let r = { type: e, args: t, from: this.sender },
				n = {};
			t.length >= 1 && t[0] && t[0].options && (n = t[0].options);
			let a = () => {
				this.transport && this.transport.send(r, n), this.handleEvent(r);
			};
			this.isAsync ? setImmediate(a) : a();
		}
		last(e) {
			return this.data[e];
		}
		eventNames() {
			return Object.keys(this.events);
		}
		listenerCount(e) {
			let t = this.listeners(e);
			return t ? t.length : 0;
		}
		listeners(e) {
			return this.events[e] || void 0;
		}
		once(e, t) {
			let r = this.onceListener(e, t);
			this.addListener(e, r);
		}
		removeAllListeners(e) {
			e ? this.events[e] && delete this.events[e] : (this.events = {});
		}
		removeListener(e, t) {
			let r = this.listeners(e);
			r && (this.events[e] = r.filter((n) => n !== t));
		}
		on(e, t) {
			this.addListener(e, t);
		}
		off(e, t) {
			this.removeListener(e, t);
		}
		handleEvent(e) {
			let t = this.listeners(e.type);
			t &&
				t.length &&
				t.forEach((r) => {
					r.apply(e, e.args);
				}),
				(this.data[e.type] = e.args);
		}
		onceListener(e, t) {
			let r = (...n) => (this.removeListener(e, r), t(...n));
			return r;
		}
	},
	um = ((e) => (
		(e.CHANNEL_CREATED = 'channelCreated'),
		(e.CONFIG_ERROR = 'configError'),
		(e.STORY_INDEX_INVALIDATED = 'storyIndexInvalidated'),
		(e.STORY_SPECIFIED = 'storySpecified'),
		(e.SET_CONFIG = 'setConfig'),
		(e.SET_STORIES = 'setStories'),
		(e.SET_INDEX = 'setIndex'),
		(e.SET_CURRENT_STORY = 'setCurrentStory'),
		(e.CURRENT_STORY_WAS_SET = 'currentStoryWasSet'),
		(e.FORCE_RE_RENDER = 'forceReRender'),
		(e.FORCE_REMOUNT = 'forceRemount'),
		(e.PRELOAD_ENTRIES = 'preloadStories'),
		(e.STORY_PREPARED = 'storyPrepared'),
		(e.DOCS_PREPARED = 'docsPrepared'),
		(e.STORY_CHANGED = 'storyChanged'),
		(e.STORY_UNCHANGED = 'storyUnchanged'),
		(e.STORY_RENDERED = 'storyRendered'),
		(e.STORY_MISSING = 'storyMissing'),
		(e.STORY_ERRORED = 'storyErrored'),
		(e.STORY_THREW_EXCEPTION = 'storyThrewException'),
		(e.STORY_RENDER_PHASE_CHANGED = 'storyRenderPhaseChanged'),
		(e.PLAY_FUNCTION_THREW_EXCEPTION = 'playFunctionThrewException'),
		(e.UPDATE_STORY_ARGS = 'updateStoryArgs'),
		(e.STORY_ARGS_UPDATED = 'storyArgsUpdated'),
		(e.RESET_STORY_ARGS = 'resetStoryArgs'),
		(e.SET_GLOBALS = 'setGlobals'),
		(e.UPDATE_GLOBALS = 'updateGlobals'),
		(e.GLOBALS_UPDATED = 'globalsUpdated'),
		(e.REGISTER_SUBSCRIPTION = 'registerSubscription'),
		(e.PREVIEW_KEYDOWN = 'previewKeydown'),
		(e.PREVIEW_BUILDER_PROGRESS = 'preview_builder_progress'),
		(e.SELECT_STORY = 'selectStory'),
		(e.STORIES_COLLAPSE_ALL = 'storiesCollapseAll'),
		(e.STORIES_EXPAND_ALL = 'storiesExpandAll'),
		(e.DOCS_RENDERED = 'docsRendered'),
		(e.SHARED_STATE_CHANGED = 'sharedStateChanged'),
		(e.SHARED_STATE_SET = 'sharedStateSet'),
		(e.NAVIGATE_URL = 'navigateUrl'),
		(e.UPDATE_QUERY_PARAMS = 'updateQueryParams'),
		e
	))(um || {}),
	{
		CHANNEL_CREATED: LI,
		CONFIG_ERROR: jI,
		CURRENT_STORY_WAS_SET: FI,
		DOCS_PREPARED: UI,
		DOCS_RENDERED: HI,
		FORCE_RE_RENDER: VI,
		FORCE_REMOUNT: Gc,
		GLOBALS_UPDATED: WI,
		NAVIGATE_URL: GI,
		PLAY_FUNCTION_THREW_EXCEPTION: zI,
		PRELOAD_ENTRIES: KI,
		PREVIEW_BUILDER_PROGRESS: YI,
		PREVIEW_KEYDOWN: XI,
		REGISTER_SUBSCRIPTION: QI,
		RESET_STORY_ARGS: JI,
		SELECT_STORY: ZI,
		SET_CONFIG: eM,
		SET_CURRENT_STORY: Jq,
		SET_GLOBALS: tM,
		SET_INDEX: rM,
		SET_STORIES: nM,
		SHARED_STATE_CHANGED: aM,
		SHARED_STATE_SET: oM,
		STORIES_COLLAPSE_ALL: iM,
		STORIES_EXPAND_ALL: lM,
		STORY_ARGS_UPDATED: sM,
		STORY_CHANGED: uM,
		STORY_ERRORED: cM,
		STORY_INDEX_INVALIDATED: dM,
		STORY_MISSING: fM,
		STORY_PREPARED: pM,
		STORY_RENDER_PHASE_CHANGED: Zq,
		STORY_RENDERED: vM,
		STORY_SPECIFIED: mM,
		STORY_THREW_EXCEPTION: yM,
		STORY_UNCHANGED: bM,
		UPDATE_GLOBALS: hM,
		UPDATE_QUERY_PARAMS: gM,
		UPDATE_STORY_ARGS: EM
	} = um,
	eI = new Error('ignoredException');
function tI() {
	let e = { setHandler: () => {}, send: () => {} };
	return new Qq({ transport: e });
}
var rI = class {
		constructor() {
			(this.getChannel = () => {
				if (!this.channel) {
					let e = tI();
					return this.setChannel(e), e;
				}
				return this.channel;
			}),
				(this.getServerChannel = () => {
					if (!this.serverChannel) throw new Error('Accessing non-existent serverChannel');
					return this.serverChannel;
				}),
				(this.ready = () => this.promise),
				(this.hasChannel = () => !!this.channel),
				(this.hasServerChannel = () => !!this.serverChannel),
				(this.setChannel = (e) => {
					(this.channel = e), this.resolve();
				}),
				(this.setServerChannel = (e) => {
					this.serverChannel = e;
				}),
				(this.promise = new Promise((e) => {
					this.resolve = () => e(this.getChannel());
				}));
		}
	},
	Yi = '__STORYBOOK_ADDONS_PREVIEW';
function nI() {
	return F[Yi] || (F[Yi] = new rI()), F[Yi];
}
var aI = nI(),
	oI = ((e) => (
		(e.DONE = 'done'), (e.ERROR = 'error'), (e.ACTIVE = 'active'), (e.WAITING = 'waiting'), e
	))(oI || {}),
	ye = {
		CALL: 'storybook/instrumenter/call',
		SYNC: 'storybook/instrumenter/sync',
		START: 'storybook/instrumenter/start',
		BACK: 'storybook/instrumenter/back',
		GOTO: 'storybook/instrumenter/goto',
		NEXT: 'storybook/instrumenter/next',
		END: 'storybook/instrumenter/end'
	},
	zc = { start: !1, back: !1, goto: !1, next: !1, end: !1 },
	Kc = new Error(
		'This function ran after the play function completed. Did you forget to `await` it?'
	),
	Yc = (e) => Object.prototype.toString.call(e) === '[object Object]',
	iI = (e) => Object.prototype.toString.call(e) === '[object Module]',
	lI = (e) => {
		if (!Yc(e) && !iI(e)) return !1;
		if (e.constructor === void 0) return !0;
		let t = e.constructor.prototype;
		return !(!Yc(t) || Object.prototype.hasOwnProperty.call(t, 'isPrototypeOf') === !1);
	},
	sI = (e) => {
		try {
			return new e.constructor();
		} catch {
			return {};
		}
	},
	Xi = () => ({
		renderPhase: void 0,
		isDebugging: !1,
		isPlaying: !1,
		isLocked: !1,
		cursor: 0,
		calls: [],
		shadowCalls: [],
		callRefsByResult: new Map(),
		chainedCallIds: new Set(),
		ancestors: [],
		playUntil: void 0,
		resolvers: {},
		syncTimeout: void 0
	}),
	Xc = (e, t = !1) => {
		let r = (t ? e.shadowCalls : e.calls).filter((a) => a.retain);
		if (!r.length) return;
		let n = new Map(Array.from(e.callRefsByResult.entries()).filter(([, a]) => a.retain));
		return { cursor: r.length, calls: r, callRefsByResult: n };
	},
	uI = class {
		constructor() {
			(this.initialized = !1),
				(this.channel = aI.getChannel()),
				(this.state = F.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ || {});
			let e = ({ storyId: i, isPlaying: s = !0, isDebugging: l = !1 }) => {
				let u = this.getState(i);
				this.setState(i, {
					...Xi(),
					...Xc(u, l),
					shadowCalls: l ? u.shadowCalls : [],
					chainedCallIds: l ? u.chainedCallIds : new Set(),
					playUntil: l ? u.playUntil : void 0,
					isPlaying: s,
					isDebugging: l
				}),
					this.sync(i);
			};
			this.channel.on(Gc, e),
				this.channel.on(Zq, ({ storyId: i, newPhase: s }) => {
					let { isDebugging: l } = this.getState(i);
					this.setState(i, { renderPhase: s }),
						s === 'preparing' && l && e({ storyId: i }),
						s === 'playing' && e({ storyId: i, isDebugging: l }),
						s === 'played' && this.setState(i, { isLocked: !1, isPlaying: !1, isDebugging: !1 }),
						s === 'errored' && this.setState(i, { isLocked: !1, isPlaying: !1 });
				}),
				this.channel.on(Jq, () => {
					this.initialized ? this.cleanup() : (this.initialized = !0);
				});
			let t = ({ storyId: i, playUntil: s }) => {
					this.getState(i).isDebugging ||
						this.setState(i, ({ calls: u }) => ({
							calls: [],
							shadowCalls: u.map((c) => ({ ...c, status: 'waiting' })),
							isDebugging: !0
						}));
					let l = this.getLog(i);
					this.setState(i, ({ shadowCalls: u }) => {
						var d;
						if (s || !l.length) return { playUntil: s };
						let c = u.findIndex((f) => f.id === l[0].callId);
						return {
							playUntil:
								(d = u
									.slice(0, c)
									.filter((f) => f.interceptable && !f.ancestors.length)
									.slice(-1)[0]) == null
									? void 0
									: d.id
						};
					}),
						this.channel.emit(Gc, { storyId: i, isDebugging: !0 });
				},
				r = ({ storyId: i }) => {
					var u;
					let s = this.getLog(i).filter((c) => !c.ancestors.length),
						l = s.reduceRight((c, d, f) => (c >= 0 || d.status === 'waiting' ? c : f), -1);
					t({ storyId: i, playUntil: (u = s[l - 1]) == null ? void 0 : u.callId });
				},
				n = ({ storyId: i, callId: s }) => {
					var m;
					let { calls: l, shadowCalls: u, resolvers: c } = this.getState(i),
						d = l.find(({ id: y }) => y === s),
						f = u.find(({ id: y }) => y === s);
					if (!d && f && Object.values(c).length > 0) {
						let y =
							(m = this.getLog(i).find((g) => g.status === 'waiting')) == null ? void 0 : m.callId;
						f.id !== y && this.setState(i, { playUntil: f.id }),
							Object.values(c).forEach((g) => g());
					} else t({ storyId: i, playUntil: s });
				},
				a = ({ storyId: i }) => {
					var l;
					let { resolvers: s } = this.getState(i);
					if (Object.values(s).length > 0) Object.values(s).forEach((u) => u());
					else {
						let u =
							(l = this.getLog(i).find((c) => c.status === 'waiting')) == null ? void 0 : l.callId;
						u ? t({ storyId: i, playUntil: u }) : o({ storyId: i });
					}
				},
				o = ({ storyId: i }) => {
					this.setState(i, { playUntil: void 0, isDebugging: !1 }),
						Object.values(this.getState(i).resolvers).forEach((s) => s());
				};
			this.channel.on(ye.START, t),
				this.channel.on(ye.BACK, r),
				this.channel.on(ye.GOTO, n),
				this.channel.on(ye.NEXT, a),
				this.channel.on(ye.END, o);
		}
		getState(e) {
			return this.state[e] || Xi();
		}
		setState(e, t) {
			let r = this.getState(e),
				n = typeof t == 'function' ? t(r) : t;
			(this.state = { ...this.state, [e]: { ...r, ...n } }),
				(F.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ = this.state);
		}
		cleanup() {
			this.state = Object.entries(this.state).reduce((t, [r, n]) => {
				let a = Xc(n);
				return a && (t[r] = Object.assign(Xi(), a)), t;
			}, {});
			let e = { controlStates: zc, logItems: [] };
			this.channel.emit(ye.SYNC, e),
				(F.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ = this.state);
		}
		getLog(e) {
			let { calls: t, shadowCalls: r } = this.getState(e),
				n = [...r];
			t.forEach((o, i) => {
				n[i] = o;
			});
			let a = new Set();
			return n.reduceRight(
				(o, i) => (
					i.args.forEach((s) => {
						s != null && s.__callId__ && a.add(s.__callId__);
					}),
					i.path.forEach((s) => {
						s.__callId__ && a.add(s.__callId__);
					}),
					(i.interceptable || i.exception) &&
						!a.has(i.id) &&
						(o.unshift({ callId: i.id, status: i.status, ancestors: i.ancestors }), a.add(i.id)),
					o
				),
				[]
			);
		}
		instrument(e, t) {
			if (!lI(e)) return e;
			let { mutate: r = !1, path: n = [] } = t;
			return Object.keys(e).reduce(
				(a, o) => {
					let i = e[o];
					return typeof i != 'function'
						? ((a[o] = this.instrument(i, { ...t, path: n.concat(o) })), a)
						: typeof i.__originalFn__ == 'function'
						? ((a[o] = i), a)
						: ((a[o] = (...s) => this.track(o, i, s, t)),
						  (a[o].__originalFn__ = i),
						  Object.defineProperty(a[o], 'name', { value: o, writable: !1 }),
						  Object.keys(i).length > 0 &&
								Object.assign(a[o], this.instrument({ ...i }, { ...t, path: n.concat(o) })),
						  a);
				},
				r ? e : sI(e)
			);
		}
		track(e, t, r, n) {
			var y, g, C, p;
			let a =
					((y = r == null ? void 0 : r[0]) == null ? void 0 : y.__storyId__) ||
					((p =
						(C = (g = F.__STORYBOOK_PREVIEW__) == null ? void 0 : g.selectionStore) == null
							? void 0
							: C.selection) == null
						? void 0
						: p.storyId),
				{ cursor: o, ancestors: i } = this.getState(a);
			this.setState(a, { cursor: o + 1 });
			let s = `${i.slice(-1)[0] || a} [${o}] ${e}`,
				{ path: l = [], intercept: u = !1, retain: c = !1 } = n,
				d = typeof u == 'function' ? u(e, l) : u,
				f = {
					id: s,
					cursor: o,
					storyId: a,
					ancestors: i,
					path: l,
					method: e,
					args: r,
					interceptable: d,
					retain: c
				},
				m = (d && !i.length ? this.intercept : this.invoke).call(this, t, f, n);
			return this.instrument(m, { ...n, mutate: !0, path: [{ __callId__: f.id }] });
		}
		intercept(e, t, r) {
			let { chainedCallIds: n, isDebugging: a, playUntil: o } = this.getState(t.storyId),
				i = n.has(t.id);
			return !a || i || o
				? (o === t.id && this.setState(t.storyId, { playUntil: void 0 }), this.invoke(e, t, r))
				: new Promise((s) => {
						this.setState(t.storyId, ({ resolvers: l }) => ({
							isLocked: !1,
							resolvers: { ...l, [t.id]: s }
						}));
				  }).then(
						() => (
							this.setState(t.storyId, (s) => {
								let { [t.id]: l, ...u } = s.resolvers;
								return { isLocked: !0, resolvers: u };
							}),
							this.invoke(e, t, r)
						)
				  );
		}
		invoke(e, t, r) {
			let { callRefsByResult: n, renderPhase: a } = this.getState(t.storyId),
				o = (l) => {
					var u, c;
					if (n.has(l)) return n.get(l);
					if (l instanceof Array) return l.map(o);
					if (l instanceof Date) return { __date__: { value: l.toISOString() } };
					if (l instanceof Error) {
						let { name: d, message: f, stack: m } = l;
						return { __error__: { name: d, message: f, stack: m } };
					}
					if (l instanceof RegExp) {
						let { flags: d, source: f } = l;
						return { __regexp__: { flags: d, source: f } };
					}
					if (l instanceof F.window.HTMLElement) {
						let { prefix: d, localName: f, id: m, classList: y, innerText: g } = l,
							C = Array.from(y);
						return { __element__: { prefix: d, localName: f, id: m, classNames: C, innerText: g } };
					}
					return typeof l == 'function'
						? { __function__: { name: l.name } }
						: typeof l == 'symbol'
						? { __symbol__: { description: l.description } }
						: typeof l == 'object' &&
						  (u = l == null ? void 0 : l.constructor) != null &&
						  u.name &&
						  ((c = l == null ? void 0 : l.constructor) == null ? void 0 : c.name) !== 'Object'
						? { __class__: { name: l.constructor.name } }
						: Object.prototype.toString.call(l) === '[object Object]'
						? Object.fromEntries(Object.entries(l).map(([d, f]) => [d, o(f)]))
						: l;
				},
				i = { ...t, args: t.args.map(o) };
			t.path.forEach((l) => {
				l != null &&
					l.__callId__ &&
					this.setState(t.storyId, ({ chainedCallIds: u }) => ({
						chainedCallIds: new Set(Array.from(u).concat(l.__callId__))
					}));
			});
			let s = (l) => {
				if (l instanceof Error) {
					let { name: u, message: c, stack: d, callId: f = t.id } = l,
						m = { name: u, message: c, stack: d, callId: f };
					if (
						(this.update({ ...i, status: 'error', exception: m }),
						this.setState(t.storyId, (y) => ({
							callRefsByResult: new Map([
								...Array.from(y.callRefsByResult.entries()),
								[l, { __callId__: t.id, retain: t.retain }]
							])
						})),
						t.ancestors.length)
					)
						throw (
							(Object.prototype.hasOwnProperty.call(l, 'callId') ||
								Object.defineProperty(l, 'callId', { value: t.id }),
							l)
						);
					if (l !== Kc) throw (sm.warn(l), eI);
				}
				throw l;
			};
			try {
				if (a === 'played' && !t.retain) throw Kc;
				let l = (r.getArgs ? r.getArgs(t, this.getState(t.storyId)) : t.args).map((c) =>
						typeof c != 'function' || Object.keys(c).length
							? c
							: (...d) => {
									let { cursor: f, ancestors: m } = this.getState(t.storyId);
									this.setState(t.storyId, { cursor: 0, ancestors: [...m, t.id] });
									let y = () => this.setState(t.storyId, { cursor: f, ancestors: m }),
										g = !1;
									try {
										let C = c(...d);
										return C instanceof Promise ? ((g = !0), C.finally(y)) : C;
									} finally {
										g || y();
									}
							  }
					),
					u = e(...l);
				return (
					u &&
						['object', 'function', 'symbol'].includes(typeof u) &&
						this.setState(t.storyId, (c) => ({
							callRefsByResult: new Map([
								...Array.from(c.callRefsByResult.entries()),
								[u, { __callId__: t.id, retain: t.retain }]
							])
						})),
					this.update({ ...i, status: u instanceof Promise ? 'active' : 'done' }),
					u instanceof Promise ? u.then((c) => (this.update({ ...i, status: 'done' }), c), s) : u
				);
			} catch (l) {
				return s(l);
			}
		}
		update(e) {
			this.channel.emit(ye.CALL, e),
				this.setState(e.storyId, ({ calls: t }) => {
					let r = t.concat(e).reduce((n, a) => Object.assign(n, { [a.id]: a }), {});
					return {
						calls: Object.values(r).sort((n, a) =>
							n.id.localeCompare(a.id, void 0, { numeric: !0 })
						)
					};
				}),
				this.sync(e.storyId);
		}
		sync(e) {
			let t = () => {
				var u;
				let { isLocked: r, isPlaying: n } = this.getState(e),
					a = this.getLog(e),
					o =
						(u = a.filter(({ ancestors: c }) => !c.length).find((c) => c.status === 'waiting')) ==
						null
							? void 0
							: u.callId,
					i = a.some((c) => c.status === 'active');
				if (r || i || a.length === 0) {
					let c = { controlStates: zc, logItems: a };
					this.channel.emit(ye.SYNC, c);
					return;
				}
				let s = a.some((c) => ['done', 'error'].includes(c.status)),
					l = {
						controlStates: { start: s, back: s, goto: !0, next: n, end: n },
						logItems: a,
						pausedAt: o
					};
				this.channel.emit(ye.SYNC, l);
			};
			this.setState(
				e,
				({ syncTimeout: r }) => (clearTimeout(r), { syncTimeout: setTimeout(t, 0) })
			);
		}
	};
function cm(e, t = {}) {
	var r, n, a, o;
	try {
		let i = !1,
			s = !1;
		return (
			(n = (r = F.window.location) == null ? void 0 : r.search) != null &&
			n.includes('instrument=true')
				? (i = !0)
				: (o = (a = F.window.location) == null ? void 0 : a.search) != null &&
				  o.includes('instrument=false') &&
				  (s = !0),
			(F.window.parent === F.window && !i) || s
				? e
				: (F.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__ ||
						(F.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__ = new uI()),
				  F.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__.instrument(e, t))
		);
	} catch (i) {
		return X.warn(i), e;
	}
}
var cI = Wc.default || Wc,
	Wr = cm(
		{ ...w1 },
		{
			intercept: (e, t) => t[0] === 'fireEvent' || e.startsWith('findBy') || e.startsWith('waitFor')
		}
	);
Wr.screen = Object.entries(Wr.screen).reduce(
	(e, [t, r]) =>
		Object.defineProperty(e, t, {
			get() {
				return (
					X.warn(mm`
          You are using Testing Library's \`screen\` object. Use \`within(canvasElement)\` instead.
          More info: https://storybook.js.org/docs/react/essentials/interactions
        `),
					r
				);
			}
		}),
	{ ...Wr.screen }
);
var {
		buildQueries: RM,
		configure: _M,
		createEvent: wM,
		findAllByAltText: CM,
		findAllByDisplayValue: PM,
		findAllByLabelText: SM,
		findAllByPlaceholderText: TM,
		findAllByRole: OM,
		findAllByTestId: AM,
		findAllByText: xM,
		findAllByTitle: $M,
		findByAltText: qM,
		findByDisplayValue: IM,
		findByLabelText: MM,
		findByPlaceholderText: BM,
		findByRole: NM,
		findByTestId: kM,
		findByText: DM,
		findByTitle: LM,
		fireEvent: jM,
		getAllByAltText: FM,
		getAllByDisplayValue: UM,
		getAllByLabelText: HM,
		getAllByPlaceholderText: VM,
		getAllByRole: WM,
		getAllByTestId: GM,
		getAllByText: zM,
		getAllByTitle: KM,
		getByAltText: YM,
		getByDisplayValue: XM,
		getByLabelText: QM,
		getByPlaceholderText: JM,
		getByRole: ZM,
		getByTestId: eB,
		getByText: tB,
		getByTitle: rB,
		getConfig: nB,
		getDefaultNormalizer: aB,
		getElementError: oB,
		getNodeText: iB,
		getQueriesForElement: lB,
		getRoles: sB,
		getSuggestedQuery: uB,
		isInaccessible: cB,
		logDOM: dB,
		logRoles: fB,
		prettyDOM: pB,
		queries: vB,
		queryAllByAltText: mB,
		queryAllByAttribute: yB,
		queryAllByDisplayValue: bB,
		queryAllByLabelText: hB,
		queryAllByPlaceholderText: gB,
		queryAllByRole: EB,
		queryAllByTestId: RB,
		queryAllByText: _B,
		queryAllByTitle: wB,
		queryByAltText: CB,
		queryByAttribute: PB,
		queryByDisplayValue: SB,
		queryByLabelText: TB,
		queryByPlaceholderText: OB,
		queryByRole: AB,
		queryByTestId: xB,
		queryByText: $B,
		queryByTitle: qB,
		queryHelpers: IB,
		screen: MB,
		waitFor: BB,
		waitForElementToBeRemoved: NB,
		within: dI,
		prettyFormat: kB
	} = Wr,
	fI = cm({ userEvent: cI }, { intercept: !0 }).userEvent;
function pI(e) {
	let t,
		r,
		n,
		a,
		o = `<h2>Pages in Storybook</h2> <p>We recommend building UIs with a
      <a href="https://blog.hichroma.com/component-driven-development-ce1109d56c8e" target="_blank" rel="noopener noreferrer"><strong>component-driven</strong></a>
      process starting with atomic components and ending with pages.</p> <p>Render pages with mock data. This makes it easy to build and review page states without
      needing to navigate to them in your app. Here are some handy patterns for managing page data
      in Storybook:</p> <ul><li>Use a higher-level connected component. Storybook helps you compose such data from the
        &quot;args&quot; of child component stories</li> <li>Assemble data in the page component from your services. You can mock these services out
        using Storybook.</li></ul> <p>Get a guided tutorial on component-driven development at
      <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">Storybook tutorials</a>
      . Read more in the
      <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">docs</a>
      .</p> <div class="tip-wrapper"><span class="tip">Tip</span>
      Adjust the width of the canvas with the
      <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0
            01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0
            010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z" id="a" fill="#999"></path></g></svg>
      Viewports addon in the toolbar</div>`,
		i;
	return (
		(r = new $m({ props: { user: e[0] } })),
		r.$on('login', e[1]),
		r.$on('logout', e[2]),
		r.$on('createAccount', e[3]),
		{
			c() {
				(t = Cs('article')),
					gm(r.$$.fragment),
					(n = Em()),
					(a = Cs('section')),
					(a.innerHTML = o),
					this.h();
			},
			l(s) {
				t = Ps(s, 'ARTICLE', {});
				var l = Rm(t);
				_m(r.$$.fragment, l),
					(n = wm(l)),
					(a = Ps(l, 'SECTION', { class: !0, 'data-svelte-h': !0 })),
					Cm(a) !== 'svelte-1kg5ngc' && (a.innerHTML = o),
					l.forEach(Ss),
					this.h();
			},
			h() {
				Pm(a, 'class', 'storybook-page');
			},
			m(s, l) {
				Sm(s, t, l), Tm(r, t, null), Ts(t, n), Ts(t, a), (i = !0);
			},
			p(s, [l]) {
				const u = {};
				l & 1 && (u.user = s[0]), r.$set(u);
			},
			i(s) {
				i || (Om(r.$$.fragment, s), (i = !0));
			},
			o(s) {
				Am(r.$$.fragment, s), (i = !1);
			},
			d(s) {
				s && Ss(t), xm(r);
			}
		}
	);
}
function vI(e, t, r) {
	let n = null;
	return [
		n,
		() => r(0, (n = { name: 'Jane Doe' })),
		() => r(0, (n = null)),
		() => r(0, (n = { name: 'Jane Doe' }))
	];
}
class dm extends ym {
	constructor(t) {
		super(), bm(this, t, vI, pI, hm, {});
	}
}
const mI = dm;
dm.__docgen = {
	version: 3,
	name: 'Page.svelte',
	data: [],
	computed: [],
	methods: [],
	components: [],
	description: null,
	keywords: [],
	events: [],
	slots: [],
	refs: []
};
const DB = { title: 'Example/Page', component: mI, parameters: { layout: 'fullscreen' } },
	$r = {},
	qr = {
		play: async ({ canvasElement: e }) => {
			const r = await dI(e).getByRole('button', { name: /Log in/i });
			await fI.click(r);
		}
	};
var Qc, Jc, Zc;
$r.parameters = {
	...$r.parameters,
	docs: {
		...((Qc = $r.parameters) == null ? void 0 : Qc.docs),
		source: {
			originalSource: '{}',
			...((Zc = (Jc = $r.parameters) == null ? void 0 : Jc.docs) == null ? void 0 : Zc.source)
		}
	}
};
var ed, td, rd;
qr.parameters = {
	...qr.parameters,
	docs: {
		...((ed = qr.parameters) == null ? void 0 : ed.docs),
		source: {
			originalSource: `{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const loginButton = await canvas.getByRole('button', {
      name: /Log in/i
    });
    await userEvent.click(loginButton);
  }
}`,
			...((rd = (td = qr.parameters) == null ? void 0 : td.docs) == null ? void 0 : rd.source)
		}
	}
};
const LB = ['LoggedOut', 'LoggedIn'];
export { qr as LoggedIn, $r as LoggedOut, LB as __namedExportsOrder, DB as default };
//# sourceMappingURL=Page.stories-33582da8.js.map
