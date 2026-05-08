import { css } from '@emotion/react'

export const card = css`
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 20px;
    width: 340px;
    box-shadow: 0 0 5px #00000044;
`

export const inputBox = css`
    margin-bottom: 10px;
    
    & > input { 
        box-sizing: border-box;
        border: 1px solid #dbdbdb;
        border-radius: 4px;
        outline: none;
        background: transparent;
        padding: 10px;
        width: 100%;
        height: 40px;
        cursor: pointer;

        &:hover {
            box-shadow:  0 0 3px #00000033;
        }

        &:active {
            box-shadow:  0 0 3px #00000033 inset;
        }

        &:focus {
            box-shadow:  0 0 3px #2fb2da inset;
        }
    }
`

export const bttonBox = css`
    & > button {
        box-sizing: border-box;
        border: none;
        border-radius: 4px;
        width: 100%;
        height: 30px;
        background-color: #2fb8dadd;
        color: white;
        cursor: pointer;
    }

    &:hover {
        border-radius: 4px;
        background-color: #56a5eedd;
    }

    &:active {
        border-radius: 4px;
        background-color: #0f3b8ddd;
    }

    &:disabled {
        background-color: #c5c5c5;
        cursor: default;
    }
`
