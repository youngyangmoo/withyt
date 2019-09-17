import React from 'react';

interface Props {
    name: string;
    job: string;
    isAdmin?: boolean;
}

export class User extends React.Component<Props>{
    render() {
        const { name, job, isAdmin = false } = this.props;
        let mode = "User-mode"
        if (isAdmin) {
            mode = "Admin-mode"
        }
        return (
            <div>
                <h2>프로필</h2>
                <div>
                    <b>이름:  </b>
                    {name}
                </div>
                <div>
                    <b>직업:  </b>
                    {job}
                </div>
                <div>
                    <b>mode:  </b>
                    {mode}
                </div>
            </div>
        )
    }
}