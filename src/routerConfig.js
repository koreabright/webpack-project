const Layout = resolve => require(['./views/Layout.vue'], resolve);
const Test = resolve => require(['./views/Test.vue'], resolve);

var routes = [
	{ name: '云鸟物联现金贷管理', path: '/', component: Layout,
		children: [
            {
                name: 'test', path: 'test', component: Test
            }
        ]
	}
];

export default routes;