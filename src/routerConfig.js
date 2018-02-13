const Layout = resolve => require(['./views/Layout.vue'], resolve);
const Test = resolve => require(['./views/Test.vue'], resolve);

var routes = [
	{ name: 'a', path: '', redirect: '/first/test' },
	{ name: 'b', path: '/first', component: Layout,
		children: [
            {
                name: 'test', path: 'test', component: Test
            }
        ]
	}
];

export default routes;