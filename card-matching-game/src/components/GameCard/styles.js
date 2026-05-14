import { css } from "@emotion/react";

export const layout = css`
    transition: all 0.3s ease-in-out;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 10px;
    width: 160px;
    height: 220px;
    background-color: #ffe2d7;
    box-shadow: 0 0 10px #ffffff88;
    cursor: pointer;

    &:hover {
        transform: scale(105%);
    }
`

export const container = css`
    border-radius: 8px;
    width: 100%;
    height: 100%;
    background-color: #755b51;
`