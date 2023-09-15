import {
	S as p,
	i as k,
	s as f,
	e as g,
	w as h,
	c as _,
	b as v,
	x as w,
	f as c,
	h as u,
	j as z,
	k as B,
	z as C,
	y as x,
	u as y,
	A as j
} from './index-8bb8d4e8.js';
function S(i) {
	let t, n, a, l, r;
	return {
		c() {
			(t = g('button')), (n = h(i[1])), this.h();
		},
		l(e) {
			t = _(e, 'BUTTON', { type: !0, class: !0, style: !0 });
			var o = v(t);
			(n = w(o, i[1])), o.forEach(c), this.h();
		},
		h() {
			u(t, 'type', 'button'),
				u(t, 'class', (a = ['storybook-button', `storybook-button--${i[0]}`, i[3]].join(' '))),
				u(t, 'style', i[2]);
		},
		m(e, o) {
			z(e, t, o), B(t, n), l || ((r = C(t, 'click', i[6])), (l = !0));
		},
		p(e, [o]) {
			o & 2 && x(n, e[1]),
				o & 9 &&
					a !== (a = ['storybook-button', `storybook-button--${e[0]}`, e[3]].join(' ')) &&
					u(t, 'class', a),
				o & 4 && u(t, 'style', e[2]);
		},
		i: y,
		o: y,
		d(e) {
			e && c(t), (l = !1), r();
		}
	};
}
function T(i, t, n) {
	let a,
		l,
		{ primary: r = !1 } = t,
		{ backgroundColor: e = void 0 } = t,
		{ size: o = 'medium' } = t,
		{ label: d } = t;
	function m(s) {
		j.call(this, i, s);
	}
	return (
		(i.$$set = (s) => {
			'primary' in s && n(4, (r = s.primary)),
				'backgroundColor' in s && n(5, (e = s.backgroundColor)),
				'size' in s && n(0, (o = s.size)),
				'label' in s && n(1, (d = s.label));
		}),
		(i.$$.update = () => {
			i.$$.dirty & 16 &&
				n(3, (a = r ? 'storybook-button--primary' : 'storybook-button--secondary')),
				i.$$.dirty & 32 && n(2, (l = e ? `background-color: ${e}` : ''));
		}),
		[o, d, l, a, r, e, m]
	);
}
class b extends p {
	constructor(t) {
		super(), k(this, t, T, S, f, { primary: 4, backgroundColor: 5, size: 0, label: 1 });
	}
}
const q = b;
b.__docgen = {
	version: 3,
	name: 'Button.svelte',
	data: [
		{
			keywords: [],
			visibility: 'public',
			description: 'Is this the principal call to action on the page?',
			name: 'primary',
			kind: 'let',
			static: !1,
			readonly: !1,
			type: { kind: 'type', text: 'boolean', type: 'boolean' },
			defaultValue: !1
		},
		{
			keywords: [{ name: 'type', description: '{string} What background color to use' }],
			visibility: 'public',
			description: '',
			name: 'backgroundColor',
			kind: 'let',
			static: !1,
			readonly: !1,
			type: { kind: 'type', text: 'string', type: 'string' }
		},
		{
			keywords: [
				{
					name: 'type',
					description: "{'small' | 'medium' | 'large'} How large should the button be?"
				}
			],
			visibility: 'public',
			description: '',
			name: 'size',
			kind: 'let',
			static: !1,
			readonly: !1,
			type: {
				kind: 'union',
				text: "'small' | 'medium' | 'large'",
				type: [
					{ kind: 'const', text: "'small'", type: 'string', value: 'small' },
					{ kind: 'const', text: "'medium'", type: 'string', value: 'medium' },
					{ kind: 'const', text: "'large'", type: 'string', value: 'large' }
				]
			},
			defaultValue: 'medium'
		},
		{
			keywords: [{ name: 'type', description: '{string} Button contents' }],
			visibility: 'public',
			description: '',
			name: 'label',
			kind: 'let',
			static: !1,
			readonly: !1,
			type: { kind: 'type', text: 'string', type: 'string' }
		}
	],
	computed: [],
	methods: [],
	components: [],
	description: null,
	keywords: [],
	events: [
		{
			keywords: [],
			visibility: 'public',
			description: '',
			name: 'click',
			parent: 'button',
			modificators: [],
			locations: null
		}
	],
	slots: [],
	refs: []
};
export { q as B };
//# sourceMappingURL=Button-5a13ea78.js.map
