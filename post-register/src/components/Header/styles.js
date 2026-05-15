import { css } from "@emotion/react";

export const layout = css`
     display: flex;
     justify-content: space-between;
     align-items: center;
     box-sizing: border-box;
     padding: 15px 20px 15px;
`

export const left = css`

    & > a {
        text-decoration: none;
        color: #000000;

        & > h1 {
            display: flex;
            align-items: center;
            gap: 7px;
            margin: 0;
            font-size: 18px;

            & > svg {
                color: #1D9E75;
            }
        }
    }
`

export const right = css`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const profile = css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    background-color: #1d9e752b;
    font-size: 10px;
    color: #1d9e759a;
    cursor: pointer;
`

export const profileMenu = (isShow) => css`
    transition: all 0.3s ease-in-out;
    list-style-type: none;
    position: absolute;
    top: 100%;
    right: 0;
    z-index: ${isShow ? 10 : -10};
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    padding: 0;
    background-color: #ffffff;
    overflow: hidden;
    opacity: ${isShow ? 1 : 0};

    & > li {
        font-size: 14px;
        box-sizing: border-box;
        padding: 10px 15px;
        width: 150px;

        &:not(nth-last-of-type(1)) {
            border-bottom: 1px solid #dbdbdb;
        }

        &:hover {
        background-color: #f2f1e3;
    }

        &:active {
            background-color: #e0e8da;
        }
    }
`