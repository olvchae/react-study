import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 30px;
    width: 100%;
    height: 100%;

    & > header {
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;

        & > h1 {
            display: flex;
            align-items: center;
            gap: 5px;
            margin: 0 0 10px;
            font-size: 30px;
            color: transparent;
            -webkit-text-fill-color: transparent;
            background: linear-gradient(90deg,rgba(115, 10, 36, 1) 0%, rgba(131, 166, 109, 1) 100%);
            background-clip: text;
            -webkit-background-clip: text;
            cursor: default;

            & svg:nth-of-type(1) {
                color: #882431;
            }

            & svg:nth-last-of-type(1) {
                color: #6ca381;
            }
        }
        
        & > h3 {
            margin: 0;
            color: #c5c5c5;
            cursor: default;
        }
    }

    & > main {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        box-sizing: border-box;
        gap: 15px;
        margin-top: 20px;
        padding: 20px;
        width: 100%;
        height: 100%;
    }
`;