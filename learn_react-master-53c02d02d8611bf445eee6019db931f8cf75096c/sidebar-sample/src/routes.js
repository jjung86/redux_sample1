export const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => <div>home</div>,
        main: () => <h2>Home</h2>
    },
    {
        path: '/greeting',
        sidebar: () => <div>greeting</div>,
        main: () => <h2>Greeting</h2>
    },
    {
        path: '/hello',
        sidebar: () => <div>hello</div>,
        main: () => <h2>Hello</h2>
    },
];