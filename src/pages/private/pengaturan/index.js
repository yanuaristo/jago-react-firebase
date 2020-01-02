import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Pengguna from './pengguna';
import Toko from './toko';

function Pengaturan(){
    return (
        <Switch>
            <Route path='/pengaturan/user' component={Pengguna} />
            <Route path='/pengaturan/toko' component={Toko} />
            <Redirect to='/pengaturan/user' />
        </Switch>
    );
}

export default Pengaturan;