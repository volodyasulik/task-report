import React, { Suspense, lazy } from 'react';
import { Link, Routes, BrowserRouter, Route, Navigate } from 'react-router-dom';
import dataJson from './data.json';

const DummyTable = lazy(() => import('./DummyTable'));
const DummyList = lazy(() => import('./DummyList'));
const DummyChart = lazy(() => import('./DummyChart'));

function App() {
    return (
        <div>
            <BrowserRouter>
                <React.Suspense fallback={<div>Loading...</div>}>
                    {dataJson.map(({ id, title, path }) => <LinkComponent key={id} title={title} path={path} />)}
                    <Routes>
                        <Route path={'dummyTable'} element={<Suspense fallback={<div>Loading...</div>}><DummyTable /></Suspense>} />
                        <Route path={'dummyChart'} element={<Suspense fallback={<div>Loading...</div>}><DummyChart /></Suspense>} />
                        <Route path={'dummyList'} element={<Suspense fallback={<div>Loading...</div>}><DummyList /></Suspense>} />
                        <Route path={'*'} element={<Navigate to={dataJson[0].path} />} />
                    </Routes>
                </React.Suspense>
            </BrowserRouter>
        </div>
    );
}

function LinkComponent(props) {
    return <Link to={props.path}>{props.title}</Link>;
}

export default App;
