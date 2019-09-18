import React from 'react'

interface P{
    name:string
}

class Animal extends React.Component<P>{
    render(){
        const {name} = this.props
        return (
            <li>
                <span>{name}</span>
            </li>
        )
    }
}

export class Animals extends React.Component{
    render(){
        const animalList = ['dog', 'cat', 'spider', 'snake'];

        return (
            <div className="Animal-list-box">
                <h3>Animal List!</h3>
                
                <ol>
                    {animalList.map((animal, index) => (
                        <Animal key={index} name={animal} />
                    ))}
                </ol>
            </div>
        )
    }
}