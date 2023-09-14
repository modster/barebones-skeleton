import { H as m } from './Header-e841243b.js';
import './index-8bb8d4e8.js';
import './Button-5a13ea78.js';
const g = {
		title: 'Example/Header',
		component: m,
		tags: ['autodocs'],
		parameters: { layout: 'fullscreen' }
	},
	e = { args: { user: { name: 'Jane Doe' } } },
	r = {};
var a, o, s;
e.parameters = {
	...e.parameters,
	docs: {
		...((a = e.parameters) == null ? void 0 : a.docs),
		source: {
			originalSource: `{
  args: {
    user: {
      name: 'Jane Doe'
    }
  }
}`,
			...((s = (o = e.parameters) == null ? void 0 : o.docs) == null ? void 0 : s.source)
		}
	}
};
var t, n, c;
r.parameters = {
	...r.parameters,
	docs: {
		...((t = r.parameters) == null ? void 0 : t.docs),
		source: {
			originalSource: '{}',
			...((c = (n = r.parameters) == null ? void 0 : n.docs) == null ? void 0 : c.source)
		}
	}
};
const i = ['LoggedIn', 'LoggedOut'];
export { e as LoggedIn, r as LoggedOut, i as __namedExportsOrder, g as default };
//# sourceMappingURL=Header.stories-337c3525.js.map
