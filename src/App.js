import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { publicRoutes } from '~/Routes';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        return <Route key={index} path={route.path} element={<Page />} />;
                    })}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
