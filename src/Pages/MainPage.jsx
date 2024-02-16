import React, { useContext, useState } from "react";
import Logo from "../assets/pngtree-trivia-night-speech-bubble-png-image_6568577.png";
import CategorySelect from "../Components/CategorySelect";
import "../Styles/MainPage.css";
import { Link } from "react-router-dom";
import GlobalContext from "../Components/GlobalContext";

const MainPage = ({ setApi }) => {
  //States
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [ready, setReady] = useState(false);
  const global = useContext(GlobalContext);

  const baseUrl = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`;

  return (
    <div className="main">
      <img src={Logo} alt="logo" />
      <div className="inputs">
        <label htmlFor="amount">Amount of questions:</label>
        <input
          onChange={(e) => {
            setAmount(e.target.value);
            if (e.target.value === 0 || e.target.value === "") {
              setReady(false);
            } else {
              setReady(true);
            }
          }}
          type="number"
          id="amount"
          name="amount"
        />

        <label htmlFor="category">Category:</label>
        <CategorySelect setCategory={setCategory} />

        <label htmlFor="difficulty">Difficulty:</label>
        <select
          onChange={(e) => setDifficulty(e.target.value)}
          name="difficulty"
          id="difficulty"
        >
          <option selected value="">
            Any difficulty
          </option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <Link
        to="game"
        state={{ api: baseUrl }}
        onClick={(e) => {
          console.log(baseUrl);
          global.setApi(baseUrl);
        }}
        id={!ready ? "disable" : ""}
        className="start"
      >
        Start
      </Link>
      
    </div>
  );
};

export default MainPage;
