import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Header, MainContainer, CreateContainer } from "./components";

function App(props) {
    return (
        <div className="w-screen h-auto flex flex-col bg-slate-100">
            <Header />

            <main className="mt-24 p-8 w-full">
                <Routes>
                    <Route path="/*" element={<MainContainer />} />
                    <Route path="/createItem" element={<CreateContainer />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;