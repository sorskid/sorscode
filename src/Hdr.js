import React from 'react';
import './Hdr.css';

export class Hdr extends React.Component
{
    render(){
        return(
            <div>
                <div className="body">
                    <p>--=YOKOPAGE=--</p>
                </div>
                <div className="navbar">
                    <ol>
                        <li>Home</li>
                        <li>Away</li>
                    </ol>
                </div>
            </div>
        );
    }
}

