import { useParams } from "react-router-dom";
import * as s from "./styles";
import { GiCardRandom } from "react-icons/gi";
import GameCard from "../../components/GameCard/GameCard";
import { useEffect, useState } from "react";

function Game() {
    const params = useParams();
    const [ cards, setCards ] = useState([]);

    const handleCardOpneOnClick = (id) => {
        if (cards.filter(card => card.isOpen && !card.isAnswer).length > 1) {
            return;
        }

        setCards(cards.map(card => {
            if (card.id === id) {
                return {
                    ...card,
                    isOpen: true,
                }
            }
            return card;
        }));
    }

    useEffect(() => {
        const openCards = cards.filter(card => card.isOpen && !card.isAnswer);

        if (openCards.length === 2) {
            if (openCards[0].content === openCards[1].content) {
                setCards(cards.map(card => {
                    if (card.id === openCards[0].id || card.id === openCards[1].id) {
                        return {
                            ...card,
                            isAnswer: true,
                        }
                    }
                    return card;
                }));
            } else {
                setTimeout(() => {
                    setCards(cards.map(card => {
                        if (!card.isAnswer) {
                            return {
                                ...card,
                                isOpen: false,
                            }
                        }
                        return card;
                    }));
                }, 500);
            }
        }
        console.log("!!")
    }, [cards]);

    useEffect(() => {
        let randomNums = [];

        while (randomNums.length < 12) {
            const newNum = Math.floor((Math.random() * 10) + 1);
            console.log(newNum)
            if (randomNums.includes(newNum)) {
                continue;
            }
            randomNums = [...randomNums, newNum, newNum];
        }

        for (let i = 0; i < randomNums.length; i++) {
            const j = Math.floor(Math.random() * (i + 1));
            [ randomNums[i], randomNums[j] ] = [ randomNums[j], randomNums[i] ];
            // let temp = randomNums[j];
            // randomNums[j] = randomNums[i];
            // randomNums[i] = temp;
        }

        setCards(randomNums.map((num, index) => ({
            id: index + 1,
            content: num,
            isOpen: false,
            isAnswer: false,
        })));

    }, []);

    return <>
        <div css={s.layout}>
            <header>
                <h1><GiCardRandom />CARD MATCING GAME<GiCardRandom /></h1>
                <h3>플레이어: {params.username}</h3>
            </header>
            <main>
                {
                    cards.map(card => <GameCard key={card.id} card={card} onClick={() => handleCardOpneOnClick(card.id)} />)
                }
            </main>
        </div>
    </>
}

export default Game;