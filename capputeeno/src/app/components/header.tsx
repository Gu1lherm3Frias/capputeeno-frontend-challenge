import styled from "styled-components"
import { Saira_Stencil_One } from "next/font/google";

const sairaStencil = Saira_Stencil_One({
    weight: ['400'],
    subsets: ['latin']
})

export default function Header() {
    
    const Header = styled.header`
        
    `

    const Logo = styled.a`
        color: var(--logo-color);
        font-weigth: 400;
        font-size: 1.5rem
    `

    return (
        <header>
            <Logo >Capputeeno</Logo>
        </header>
    );
}