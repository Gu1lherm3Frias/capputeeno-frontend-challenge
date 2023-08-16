"use client"
import styled from "styled-components"
import CartIcon from "./icons/cart-icon"
import SearchIcon from "./icons/search-icon"
import { Saira_Stencil_One } from "next/font/google"

const sairaStencilOne = Saira_Stencil_One({
    weight: ['400'],
    subsets: ['latin']
})

export default function Header() {
    
    const Header = styled.header`
        background-color: var(--bg-header);
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

    const SearchBar = styled.div`
        width: 35rem;
        height: 4rem;
        padding: 1rem 1.6rem;
        background-color: var(--bg-secondary);
        border-radius: 8px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    `
    const SearchBarText = styled.p`
        font-size: 1.4rem;
        color: var(--text-dark);
    `
    const Nav = styled.nav`
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 2.4rem;
    `

    return (
        <Header>
            <Logo className={sairaStencilOne.className}>Capputeeno</Logo>
            <Nav>
                <SearchBar>
                    <SearchBarText>Procurando por algo específico?</SearchBarText>
                    <SearchIcon/>
                </SearchBar>
                <CartIcon/>
            </Nav>
        </Header>
    );
}