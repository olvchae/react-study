import { css } from "@emotion/react";

export const label = css`
    position: relative;
    display: block;
    width: 100%;
    font-size: 13px;
    font-weight: 500;
    color: #444444;

    & > input {
        margin: 5px 0 10px;
        box-sizing: border-box;
        outline: none;
        border: 1px solid #dbdbdb;
        border-radius: 6px;
        padding: 10px 50px 10px 15px;
        width: 100%;
        font-size: 18px;
        color: #222222;

        &:focus {
            border-color: #231f66;
            box-shadow: 0 0 5px 5px #2989d822;
        }
    }
`;

export const hidden = css`
    position: absolute;
    transform: translateY(-40%);
    top: 50%;
    right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 16px;
    cursor: pointer;
`;