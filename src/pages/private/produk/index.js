import React from 'react';
import {Switch, Route} from 'react-router-dom';
import GridProduk from './grid';
import EditProduk from './edit';

function Produk(){
    return(
    <Switch> 
        <Route path='/produk/edit/produkid' component={EditProduk} />
        <Route component={GridProduk} />
    </Switch>
    );
}

export default Produk;