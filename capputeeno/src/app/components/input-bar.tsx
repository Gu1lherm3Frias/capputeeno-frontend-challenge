"use client"

import styled from "styled-components"
import SearchIcon from "./icons/search-icon"
import { InputHTMLAttributes } from "react"

const SearchBar = styled.div`
    width: 25.6rem;

    svg {
        position: absolute;
        right: 2.0rem;
        top: 50%;
        transform: translateY(-50%);
    }

    @media(min-width: ${props => props.theme.desktopBreakpoint}) {
        width: 35.2rem;
    }
`   
const PrimaryInput = styled.input`
    width: 100%
    border-radius: 8px;
    border: none;
    padding: 1.0rem 1.6rem;

    background-color: var(--bg-secondary);

    font-size: 1.2rem;
    line-height: 2.0rem;
    color: var(--text-dark);

    @media(min-width: ${props => props.theme.desktopBreakpoint}) {
        font-size: 1.4rem;
        line-height: 2.2rem;
    }
`

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    value: string,
    // handleChange: (value: string) => void
}

export default function InputBar(props: InputProps) {
    
    return(
        <SearchBar>
            <PrimaryInput
                // onChange={(event) => props.handleChange(event.target.value)}
                // {...props}
            />
            <SearchIcon/>
        </SearchBar>
    )
}