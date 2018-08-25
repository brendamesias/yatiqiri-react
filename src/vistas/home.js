import React from 'react'
import Header from '../componentes/header.js'
import { Button } from 'reactstrap';

function Home(){
    return(
        <div>
            <Button color="danger">Danger!</Button>
            <Header/>
        </div>    
    )
}

export default Home