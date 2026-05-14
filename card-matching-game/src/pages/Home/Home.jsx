import { useState } from "react";
import * as s from "./styles";
import { GiCardRandom } from "react-icons/gi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const [ inputValue, setInputValue ] =  useState("");

    const handleInputOnChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleStartOnclick = () => {
        if (!inputValue.trim()) {
            setInputValue("");
            Swal.fire({
                title: "게임 시작 실패",
                text: "게임을 시작하려면 이름을 입력하세요.",
                icon: "warning"
            });
            return;
        }

        navigate(`/game/${inputValue}`);
    }

    return <>
        <div css={s.layout}>
            <header>
                <h1><GiCardRandom />CARD MATCHING GAME<GiCardRandom /></h1>
            </header>
            <main>
                <div css={s.usernameInput}>
                    <input value={inputValue} onChange={handleInputOnChange} type="text" placeholder="플레이어 이름"/>
                </div>
                <div css={s.startButton}>
                    <button onClick={handleStartOnclick}>시작하기</button>
                </div>
            </main>
        </div>
    </>
}

export default Home;