import React from 'react';
import MooPic from './assets/images/moo.png'

interface Props {
    name: string;
    birthdeath: string;
    isAdmin?: boolean;
}

export class User extends React.Component<Props>{
    render() {
        const { name, birthdeath, isAdmin = false } = this.props;
        let mode = "User-mode"
        if (isAdmin) {
            mode = "Admin-mode"
        }
        return (
            <div>
                <br></br>
                <img src={MooPic} width="60%" alt="mooPicture"></img>
                <h2>프로필</h2>
                <div>
                    <b>이름:  </b>
                    {name}
                </div>
                <div>
                    <b>출생-사망:  </b>
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