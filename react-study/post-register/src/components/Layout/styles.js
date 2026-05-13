import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const container = (size) => css`
    transition: all 0.5s ease-in-out;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    width: ${size === "full" ? "1000px" : "700px"};
    height: 700px;
    background-color: #ffffff;
    overflow: hidden;
`;

