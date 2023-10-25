import React from 'react'
import { Link, Routes, BrowserRouter, Route, Navigate } from 'react-router-dom'
import dataJson from './data.json'
import DummyChart from './DummyChart';
import DummyList from './DummyList';
import DummyTable from './DummyTable';

function App() {
    return (
        <div>

            <BrowserRouter>

                <React.Suspense >
                    {dataJson.map(({ id, title, path }) => <LinkComponent key={id} title={title} path={path} />)}
                    <Routes>
                        <Route path={'dummyTable'} element={<DummyTable />} />
                        <Route path={'dummyChart'} element={<DummyChart />} />
                        <Route path={'dummyList'} element={<DummyList />} />
                        <Route path={'*'} element={<Navigate to={dataJson[0].path} />} />
                    </Routes>
                </React.Suspense>
            </BrowserRouter>
        </div>
    );
}

function LinkComponent(props) {
    return <Link to={props.path}>{props.title}</Link>
}

export default App;
