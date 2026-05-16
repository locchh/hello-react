// Root component
function App() {
    return React.createElement('h1', null, 'Hello, React!');
}

// Mount App into #root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
