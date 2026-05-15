import { css } from "@emotion/react";

export const wrap = css`
    display: flex;
    flex-direction: column;
    height: 100%;
`

export const layout = css`
    display: flex;
    box-sizing: border-box;
    border-top: 1px solid #dbdbdb;
    flex-grow: 1;
    background-color: #f4f4f0;
`

export const main = css`
    flex-grow: 1;
    box-sizing: border-box;
    padding:20px;
    height: 100%;
`

export const titleInput = css`
    box-sizing: border-box;
    margin-bottom: 20px;
    border-bottom: 1px solid #dbdbdb;
    padding-bottom: 10px;
`

export const sidebar = css`
    box-sizing: border-box;
    border-left: 1px solid #dbdbdb;
    padding: 20px;
    width: 250px;
    height: 100%;
    background-color: #ffffff;
`
export const editor = css`
    .w-md-editor-text-pre > code,
    .w-md-editor-text-input {
    font-size: 16px !important;
    line-height: 24px !important;
    }
`

export const thumbnail = (dataUrl) => css`
    margin-bottom: 20px;

    & > label{
        font-size: 14px;
        color: #888888;
    }

    & > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin: 10px 0;
        box-sizing: border-box;
        border-radius: 10px;
        border: 1px dashed #dbdbdb;
        padding: 10px;
        height: 150px;
        ${
            !!dataUrl && `background-image: url(${dataUrl});`
        }
        background-color: #f4f4f0;
        background-position: center;
        background-repeat: no-repeat;
        background-size:contain;
        background-clip: content-box;

        cursor: pointer;

        & > svg {
            color: #888888;
            font-size: 30px;
        }

        & > p {
            margin: 0;
            color: #888888;
            font-size: 14px;
        }
    }

    & > button {
        width: 100%;
    }
`

export const categories = css`

    & > label{
        display: block;
        margin-bottom: 10px;
        font-size: 14px;
        color: #888888;
    }
`
export const submitButtonGroup = css`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 30px;

    & > button {
        padding: 10px;
        width: 100%;

        &:nth-last-of-type(1) {
            background-color: #1d9e75cc;
            color: #ffffff;
            font-weight: 500;

            &:hover {
                background-color: #1d9e75ee;
            }
        }
    }
`