import axios from "axios";
import { useState, ChangeEvent } from "react";

const useGame = () => {
    const [news, setNews] = useState("");
    const [employes, setEmployes] = useState("");
    const [bank, setBank] = useState("");
    const [individualAmount, setIndividualAmount] = useState<number[]>([]);
    const [indicesResult, setIndicesResult] = useState<number[]>([]);
    const handleInputNews = (event: ChangeEvent<HTMLInputElement>) => {
        setNews(event.target.value)
    };
    const handleInputEmployes = (event: ChangeEvent<HTMLInputElement>) => {
        setEmployes(event.target.value);
    }
    const handleInputBank = (event: ChangeEvent<HTMLInputElement>) => {
        setBank(event.target.value)
    };
    const handleButton = async () => {
        const result = await axios.post("/api/hello", {
            news: Number(news),
            employes: Number(employes),
            bank: Number(bank)
        });
        setIndividualAmount(result.data.somaIndividual);
        setIndicesResult(result.data.indices)
    }
    return {
        news,
        employes,
        bank,
        individualAmount,
        indicesResult,
        handleInputNews,
        handleInputEmployes,
        handleInputBank,
        handleButton
    }
}
export default useGame;