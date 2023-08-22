"use client"

import styled from "styled-components"

export default function CardItem() {
    const Card = styled.div`
        width: 25.6rem;
        height: 37.8rem
        
        display: flex;
        flex-direction: column;
    `

    const CardContent = styled.div`
        width: 25.6rem;
        height: 7.8rem;
        background-color: var(--primary-white);
        
    `

    return (
        <Card>
            <CardContent>

            </CardContent>
        </Card>
    )
}