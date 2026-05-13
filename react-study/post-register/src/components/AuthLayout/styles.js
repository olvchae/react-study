import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    width: 100%;
    height: 100%;
`;

export const left = css`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    box-sizing: border-box;
    padding: 30px;
    width: 43%;
    height: 100%;
    background-color: #11112a;
`;

export const title = css`
    display: flex;
    align-items: center;
    gap: 8px;
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    border-radius: 40px;
    padding:  5px 10px;
    width: fit-content;
    font-size: 12px;
    font-weight: 500;
    color: #c5c5c5;
    background-color: #333333;
    cursor: default;
`;

export const description = css`
    margin: 20px 0 10px;
    display: flex;
    flex-direction: column;
    font-size: 24px;
    font-weight: 500;
    color: #ffffff;
    cursor: default;
`;

export const description2 = css`
    display: flex;
    flex-direction: column;
    color: #aaaaaa;
    font-size: 14px;
    cursor: default;
`;

export const right = css`
    flex-grow: 1;
    padding: 30px;
    
    & > header {
        
        & > h1 {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 16px;
            font-weight: 600;
            cursor: default;

            & > svg {
                color: #34c767;
            }
        }
    }
`;