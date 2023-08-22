"use client"

import styled from "styled-components"
import CartIcon from "./icons/cart-icon"
import InputBar from "./input-bar"
import { useFilter} from "@/hooks/useFilter"
import { Saira_Stencil_One } from "next/font/google"

const sairaStencilOne = Saira_Stencil_One({
    weight: ['400'],
    subsets: ['latin']
})

const HeaderTag = styled.header`
    background-color: var(--primary-white);
    width: 100vw;
    min-height: 10vh;
    max-height: 20.2vh;
    padding: 1.9rem 16rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Logo = styled.h1`
    color: var(--logo-color);
    font-size: 4rem;
    text-decoration: none;
`

const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2.4rem;
`


export default function Header() {

    return (
        <HeaderTag>
            <Logo className={sairaStencilOne.className}>Capputeeno</Logo>
            <Nav>
                <InputBar
                    value="nothing"
                    placeholder="Procurando por algo específico?"
                />
                <CartIcon/>
            </Nav>
        </HeaderTag>
    );
}