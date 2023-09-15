var T = Object.defineProperty;
var q = (e, t, n) =>
	t in e ? T(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n);
var v = (e, t, n) => (q(e, typeof t != 'symbol' ? t + '' : t, n), n);
function E() {}
function oe(e, t) {
	for (const n in t) e[n] = t[n];
	return e;
}
function L(e) {
	return e();
}
function j() {
	return Object.create(null);
}
function y(e) {
	e.forEach(L);
}
function M(e) {
	return typeof e == 'function';
}
function se(e, t) {
	return e != e ? t == t : e !== t || (e && typeof e == 'object') || typeof e == 'function';
}
function z(e) {
	return Object.keys(e).length === 0;
}
let b = !1;
function F() {
	b = !0;
}
function H() {
	b = !1;
}
function R(e, t, n, i) {
	for (; e < t; ) {
		const c = e + ((t - e) >> 1);
		n(c) <= i ? (e = c + 1) : (t = c);
	}
	return e;
}
function V(e) {
	if (e.hydrate_init) return;
	e.hydrate_init = !0;
	let t = e.childNodes;
	if (e.nodeName === 'HEAD') {
		const r = [];
		for (let a = 0; a < t.length; a++) {
			const f = t[a];
			f.claim_order !== void 0 && r.push(f);
		}
		t = r;
	}
	const n = new Int32Array(t.length + 1),
		i = new Int32Array(t.length);
	n[0] = -1;
	let c = 0;
	for (let r = 0; r < t.length; r++) {
		const a = t[r].claim_order,
			f = (c > 0 && t[n[c]].claim_order <= a ? c + 1 : R(1, c, (g) => t[n[g]].claim_order, a)) - 1;
		i[r] = n[f] + 1;
		const s = f + 1;
		(n[s] = r), (c = Math.max(s, c));
	}
	const u = [],
		l = [];
	let o = t.length - 1;
	for (let r = n[c] + 1; r != 0; r = i[r - 1]) {
		for (u.push(t[r - 1]); o >= r; o--) l.push(t[o]);
		o--;
	}
	for (; o >= 0; o--) l.push(t[o]);
	u.reverse(), l.sort((r, a) => r.claim_order - a.claim_order);
	for (let r = 0, a = 0; r < l.length; r++) {
		for (; a < u.length && l[r].claim_order >= u[a].claim_order; ) a++;
		const f = a < u.length ? u[a] : null;
		e.insertBefore(l[r], f);
	}
}
function W(e, t) {
	if (b) {
		for (
			V(e),
				(e.actual_end_child === void 0 ||
					(e.actual_end_child !== null && e.actual_end_child.parentNode !== e)) &&
					(e.actual_end_child = e.firstChild);
			e.actual_end_child !== null && e.actual_end_child.claim_order === void 0;

		)
			e.actual_end_child = e.actual_end_child.nextSibling;
		t !== e.actual_end_child
			? (t.claim_order !== void 0 || t.parentNode !== e) && e.insertBefore(t, e.actual_end_child)
			: (e.actual_end_child = t.nextSibling);
	} else (t.parentNode !== e || t.nextSibling !== null) && e.appendChild(t);
}
function fe(e, t, n) {
	b && !n ? W(e, t) : (t.parentNode !== e || t.nextSibling != n) && e.insertBefore(t, n || null);
}
function G(e) {
	e.parentNode && e.parentNode.removeChild(e);
}
function J(e) {
	return document.createElement(e);
}
function k(e) {
	return document.createTextNode(e);
}
function de() {
	return k(' ');
}
function _e() {
	return k('');
}
function he(e, t, n, i) {
	return e.addEventListener(t, n, i), () => e.removeEventListener(t, n, i);
}
function me(e, t, n) {
	n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function pe(e) {
	return e.dataset.svelteH;
}
function K(e) {
	return Array.from(e.childNodes);
}
function Q(e) {
	e.claim_info === void 0 && (e.claim_info = { last_index: 0, total_claimed: 0 });
}
function D(e, t, n, i, c = !1) {
	Q(e);
	const u = (() => {
		for (let l = e.claim_info.last_index; l < e.length; l++) {
			const o = e[l];
			if (t(o)) {
				const r = n(o);
				return r === void 0 ? e.splice(l, 1) : (e[l] = r), c || (e.claim_info.last_index = l), o;
			}
		}
		for (let l = e.claim_info.last_index - 1; l >= 0; l--) {
			const o = e[l];
			if (t(o)) {
				const r = n(o);
				return (
					r === void 0 ? e.splice(l, 1) : (e[l] = r),
					c ? r === void 0 && e.claim_info.last_index-- : (e.claim_info.last_index = l),
					o
				);
			}
		}
		return i();
	})();
	return (u.claim_order = e.claim_info.total_claimed), (e.claim_info.total_claimed += 1), u;
}
function U(e, t, n, i) {
	return D(
		e,
		(c) => c.nodeName === t,
		(c) => {
			const u = [];
			for (let l = 0; l < c.attributes.length; l++) {
				const o = c.attributes[l];
				n[o.name] || u.push(o.name);
			}
			u.forEach((l) => c.removeAttribute(l));
		},
		() => i(t)
	);
}
function $e(e, t, n) {
	return U(e, t, n, J);
}
function X(e, t) {
	return D(
		e,
		(n) => n.nodeType === 3,
		(n) => {
			const i = '' + t;
			if (n.data.startsWith(i)) {
				if (n.data.length !== i.length) return n.splitText(i.length);
			} else n.data = i;
		},
		() => k(t),
		!0
	);
}
function ye(e) {
	return X(e, ' ');
}
function ge(e, t) {
	(t = '' + t), e.data !== t && (e.data = t);
}
function Y(e, t, { bubbles: n = !1, cancelable: i = !1 } = {}) {
	return new CustomEvent(e, { detail: t, bubbles: n, cancelable: i });
}
function xe(e, t) {
	return new e(t);
}
let $;
function p(e) {
	$ = e;
}
function I() {
	if (!$) throw new Error('Function called outside component initialization');
	return $;
}
function be(e) {
	I().$$.on_mount.push(e);
}
function ve() {
	const e = I();
	return (t, n, { cancelable: i = !1 } = {}) => {
		const c = e.$$.callbacks[t];
		if (c) {
			const u = Y(t, n, { cancelable: i });
			return (
				c.slice().forEach((l) => {
					l.call(e, u);
				}),
				!u.defaultPrevented
			);
		}
		return !0;
	};
}
function we(e, t) {
	const n = e.$$.callbacks[t.type];
	n && n.slice().forEach((i) => i.call(this, t));
}
const h = [],
	B = [];
let m = [];
const O = [],
	Z = Promise.resolve();
let N = !1;
function ee() {
	N || ((N = !0), Z.then(P));
}
function S(e) {
	m.push(e);
}
const w = new Set();
let _ = 0;
function P() {
	if (_ !== 0) return;
	const e = $;
	do {
		try {
			for (; _ < h.length; ) {
				const t = h[_];
				_++, p(t), te(t.$$);
			}
		} catch (t) {
			throw ((h.length = 0), (_ = 0), t);
		}
		for (p(null), h.length = 0, _ = 0; B.length; ) B.pop()();
		for (let t = 0; t < m.length; t += 1) {
			const n = m[t];
			w.has(n) || (w.add(n), n());
		}
		m.length = 0;
	} while (h.length);
	for (; O.length; ) O.pop()();
	(N = !1), w.clear(), p(e);
}
function te(e) {
	if (e.fragment !== null) {
		e.update(), y(e.before_update);
		const t = e.dirty;
		(e.dirty = [-1]), e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(S);
	}
}
function ne(e) {
	const t = [],
		n = [];
	m.forEach((i) => (e.indexOf(i) === -1 ? t.push(i) : n.push(i))), n.forEach((i) => i()), (m = t);
}
const x = new Set();
let d;
function Ee() {
	d = { r: 0, c: [], p: d };
}
function Ne() {
	d.r || y(d.c), (d = d.p);
}
function ie(e, t) {
	e && e.i && (x.delete(e), e.i(t));
}
function Se(e, t, n, i) {
	if (e && e.o) {
		if (x.has(e)) return;
		x.add(e),
			d.c.push(() => {
				x.delete(e), i && (n && e.d(1), i());
			}),
			e.o(t);
	} else i && i();
}
function ke(e) {
	e && e.c();
}
function Ae(e, t) {
	e && e.l(t);
}
function re(e, t, n) {
	const { fragment: i, after_update: c } = e.$$;
	i && i.m(t, n),
		S(() => {
			const u = e.$$.on_mount.map(L).filter(M);
			e.$$.on_destroy ? e.$$.on_destroy.push(...u) : y(u), (e.$$.on_mount = []);
		}),
		c.forEach(S);
}
function ce(e, t) {
	const n = e.$$;
	n.fragment !== null &&
		(ne(n.after_update),
		y(n.on_destroy),
		n.fragment && n.fragment.d(t),
		(n.on_destroy = n.fragment = null),
		(n.ctx = []));
}
function le(e, t) {
	e.$$.dirty[0] === -1 && (h.push(e), ee(), e.$$.dirty.fill(0)),
		(e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
}
function Ce(e, t, n, i, c, u, l, o = [-1]) {
	const r = $;
	p(e);
	const a = (e.$$ = {
		fragment: null,
		ctx: [],
		props: u,
		update: E,
		not_equal: c,
		bound: j(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(t.context || (r ? r.$$.context : [])),
		callbacks: j(),
		dirty: o,
		skip_bound: !1,
		root: t.target || r.$$.root
	});
	l && l(a.root);
	let f = !1;
	if (
		((a.ctx = n
			? n(e, t.props || {}, (s, g, ...A) => {
					const C = A.length ? A[0] : g;
					return (
						a.ctx &&
							c(a.ctx[s], (a.ctx[s] = C)) &&
							(!a.skip_bound && a.bound[s] && a.bound[s](C), f && le(e, s)),
						g
					);
			  })
			: []),
		a.update(),
		(f = !0),
		y(a.before_update),
		(a.fragment = i ? i(a.ctx) : !1),
		t.target)
	) {
		if (t.hydrate) {
			F();
			const s = K(t.target);
			a.fragment && a.fragment.l(s), s.forEach(G);
		} else a.fragment && a.fragment.c();
		t.intro && ie(e.$$.fragment), re(e, t.target, t.anchor), H(), P();
	}
	p(r);
}
class je {
	constructor() {
		v(this, '$$');
		v(this, '$$set');
	}
	$destroy() {
		ce(this, 1), (this.$destroy = E);
	}
	$on(t, n) {
		if (!M(n)) return E;
		const i = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
		return (
			i.push(n),
			() => {
				const c = i.indexOf(n);
				c !== -1 && i.splice(c, 1);
			}
		);
	}
	$set(t) {
		this.$$set && !z(t) && ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
	}
}
const ae = '4';
typeof window < 'u' && (window.__svelte || (window.__svelte = { v: new Set() })).v.add(ae);
export {
	we as A,
	_e as B,
	be as C,
	B as D,
	xe as E,
	oe as F,
	je as S,
	de as a,
	K as b,
	$e as c,
	ye as d,
	J as e,
	G as f,
	pe as g,
	me as h,
	Ce as i,
	fe as j,
	W as k,
	Ne as l,
	ie as m,
	ve as n,
	Ee as o,
	ke as p,
	Ae as q,
	re as r,
	se as s,
	Se as t,
	E as u,
	ce as v,
	k as w,
	X as x,
	ge as y,
	he as z
};
//# sourceMappingURL=index-8bb8d4e8.js.map
