import { css } from "@emotion/react";

export const button = css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    box-sizing: border-box;
    border: 1px solid #cccccc;
    border-radius: 6px;
    padding: 5px 15px;
    font-size: 14px;
    font-weight: 400;
    background-color: transparent;
    transition: all 0.1s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: #f2f1e3;
    }

    &:active {
        background-color: #e0e8da;
        transform: scale(97%);
    }
`;