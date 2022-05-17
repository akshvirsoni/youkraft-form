import React from 'react'
import { Card } from 'react-bootstrap';
import { useGlobalContext } from '../context';


const Data = () => {
    const { state } = useGlobalContext();
    if (state.length > 0) {
        return (
            state.map((item, index) => {
                return <Card key={index}>
                    <Card.Header>
                        {item.name}
                    </Card.Header>
                    <Card.Title>{item.email}</Card.Title>
                    <Card.Text>
                        {item.age}
                    </Card.Text>
                    <Card.Text>
                        {item.phoneNumber}
                    </Card.Text>
                </Card>
            })
        )
    }
    else
        return;
}

export default Data