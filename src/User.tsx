import React from 'react';
import {ProfileImageCollector} from './ImageCollector'

interface Props {
    name: string;
    birthdeath: string;
    isAdmin?: boolean;
}

class NameCompiler{
    static getOnlyGivenName(name:string): string{
        let len = name.length;
        for(let i = 0; i<len; i++){
            if(name.charAt(i) === " "){
                return name.substring(i+1);
            }
        }
        return "Unknown";
    }
}

export class User extends React.Component<Props>{
    render() {
        const { name, birthdeath, isAdmin = false } = this.props;
        let mode = "User-mode"
        if (isAdmin) {
            mode = "Admin-mode"
        }
        
        let givenName = NameCompiler.getOnlyGivenName(name);
        let imgName = ProfileImageCollector[givenName];
        if(imgName === undefined){
            imgName = ProfileImageCollector.Unknown
        }
        return (
            <div className="Profile-box">
                <br></br>
                <img src={imgName} width="400" alt="mooPicture"></img>
                <h2>Profile</h2>
                <div>
                    <b>Name:  </b>
                    {name}
                </div>
                <div>
                    <b>birth-death:  </b>
                    {birthdeath}
                </div>
                <div>
                    <b>mode:  </b>
                    {mode}
                </div>
            </div>
        )
    }
}