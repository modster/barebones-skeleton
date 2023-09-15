import {
	S as j,
	i as C,
	s as I,
	e as h,
	a as B,
	c as b,
	b as g,
	g as q,
	d as M,
	f as p,
	h as F,
	j as w,
	k as v,
	t as k,
	l as T,
	m as y,
	n as W,
	o as N,
	p as E,
	q as H,
	r as L,
	u as P,
	v as V,
	w as A,
	x as z,
	y as R
} from './index-8bb8d4e8.js';
import { B as x } from './Button-5a13ea78.js';
function G(f) {
	let t, s, l, r;
	return (
		(t = new x({ props: { size: 'small', label: 'Log in' } })),
		t.$on('click', f[1]),
		(l = new x({ props: { primary: !0, size: 'small', label: 'Sign up' } })),
		l.$on('click', f[3]),
		{
			c() {
				E(t.$$.fragment), (s = B()), E(l.$$.fragment);
			},
			l(n) {
				H(t.$$.fragment, n), (s = M(n)), H(l.$$.fragment, n);
			},
			m(n, c) {
				L(t, n, c), w(n, s, c), L(l, n, c), (r = !0);
			},
			p: P,
			i(n) {
				r || (y(t.$$.fragment, n), y(l.$$.fragment, n), (r = !0));
			},
			o(n) {
				k(t.$$.fragment, n), k(l.$$.fragment, n), (r = !1);
			},
			d(n) {
				n && p(s), V(t, n), V(l, n);
			}
		}
	);
}
function J(f) {
	let t,
		s,
		l,
		r = f[0].name + '',
		n,
		c,
		a,
		e,
		d;
	return (
		(e = new x({ props: { size: 'small', label: 'Log out' } })),
		e.$on('click', f[2]),
		{
			c() {
				(t = h('span')),
					(s = A('Welcome, ')),
					(l = h('b')),
					(n = A(r)),
					(c = A('!')),
					(a = B()),
					E(e.$$.fragment),
					this.h();
			},
			l(o) {
				t = b(o, 'SPAN', { class: !0 });
				var i = g(t);
				(s = z(i, 'Welcome, ')), (l = b(i, 'B', {}));
				var $ = g(l);
				(n = z($, r)),
					$.forEach(p),
					(c = z(i, '!')),
					i.forEach(p),
					(a = M(o)),
					H(e.$$.fragment, o),
					this.h();
			},
			h() {
				F(t, 'class', 'welcome');
			},
			m(o, i) {
				w(o, t, i), v(t, s), v(t, l), v(l, n), v(t, c), w(o, a, i), L(e, o, i), (d = !0);
			},
			p(o, i) {
				(!d || i & 1) && r !== (r = o[0].name + '') && R(n, r);
			},
			i(o) {
				d || (y(e.$$.fragment, o), (d = !0));
			},
			o(o) {
				k(e.$$.fragment, o), (d = !1);
			},
			d(o) {
				o && (p(t), p(a)), V(e, o);
			}
		}
	);
}
function K(f) {
	let t,
		s,
		l,
		r =
			'<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z" fill="#FFF"></path><path d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z" fill="#555AB9"></path><path d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z" fill="#91BAF8"></path></g></svg> <h1>Acme</h1>',
		n,
		c,
		a,
		e,
		d;
	const o = [J, G],
		i = [];
	function $(u, m) {
		return u[0] ? 0 : 1;
	}
	return (
		(a = $(f)),
		(e = i[a] = o[a](f)),
		{
			c() {
				(t = h('header')),
					(s = h('div')),
					(l = h('div')),
					(l.innerHTML = r),
					(n = B()),
					(c = h('div')),
					e.c(),
					this.h();
			},
			l(u) {
				t = b(u, 'HEADER', {});
				var m = g(t);
				s = b(m, 'DIV', { class: !0 });
				var _ = g(s);
				(l = b(_, 'DIV', { 'data-svelte-h': !0 })),
					q(l) !== 'svelte-d4xcvw' && (l.innerHTML = r),
					(n = M(_)),
					(c = b(_, 'DIV', {}));
				var D = g(c);
				e.l(D), D.forEach(p), _.forEach(p), m.forEach(p), this.h();
			},
			h() {
				F(s, 'class', 'storybook-header');
			},
			m(u, m) {
				w(u, t, m), v(t, s), v(s, l), v(s, n), v(s, c), i[a].m(c, null), (d = !0);
			},
			p(u, [m]) {
				let _ = a;
				(a = $(u)),
					a === _
						? i[a].p(u, m)
						: (N(),
						  k(i[_], 1, 1, () => {
								i[_] = null;
						  }),
						  T(),
						  (e = i[a]),
						  e ? e.p(u, m) : ((e = i[a] = o[a](u)), e.c()),
						  y(e, 1),
						  e.m(c, null));
			},
			i(u) {
				d || (y(e), (d = !0));
			},
			o(u) {
				k(e), (d = !1);
			},
			d(u) {
				u && p(t), i[a].d();
			}
		}
	);
}
function O(f, t, s) {
	let { user: l = null } = t;
	const r = W();
	function n(e) {
		r('login', e);
	}
	function c(e) {
		r('logout', e);
	}
	function a(e) {
		r('createAccount', e);
	}
	return (
		(f.$$set = (e) => {
			'user' in e && s(0, (l = e.user));
		}),
		[l, n, c, a]
	);
}
class S extends j {
	constructor(t) {
		super(), C(this, t, O, K, I, { user: 0 });
	}
}
const X = S;
S.__docgen = {
	version: 3,
	name: 'Header.svelte',
	data: [
		{
			visibility: 'public',
			description: null,
			keywords: [],
			name: 'user',
			kind: 'let',
			static: !1,
			readonly: !1,
			type: { kind: 'type', text: 'object', type: 'object' },
			defaultValue: null
		}
	],
	computed: [],
	methods: [],
	components: [],
	description: null,
	keywords: [],
	events: [
		{ visibility: 'public', description: null, keywords: [], name: 'login' },
		{ visibility: 'public', description: null, keywords: [], name: 'logout' },
		{ visibility: 'public', description: null, keywords: [], name: 'createAccount' }
	],
	slots: [],
	refs: []
};
export { X as H };
//# sourceMappingURL=Header-e841243b.js.map
