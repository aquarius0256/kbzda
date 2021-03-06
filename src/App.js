import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';

import Profile from './Components/Profile/Profile';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DialoguesContainer from "./Components/Dialogues/DialoguesContainer";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={props.state.sitebar}/>

                {/*<MyPosts />*/}
                <div className='app-wrapper-content'>
                    <Routes>
                        {/*<Route path="/dialogues/*" element={<Dialogues messagesData={props.state.profilePage.messagesData} dialoguesData={props.state.profilePage.dialoguesData} />}/>*/}
                        {/*<Route path="/profile" element={<Profile postData={props.state.dialoguesPage.postData}/>}/>*/}

                        <Route path="/dialogues/*" element={<DialoguesContainer store={props.store} />}/>
                        <Route path="/profile" element={<Profile store={props.store} />}/>
                    </Routes>
                </div>

            </div>

        </BrowserRouter>);
}


export default App;
