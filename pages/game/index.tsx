import useGame from "./useGame";
import useStyles from "./useStyles";

const Jogo = () => {
  const {buttonStyle, containerStyle, individualAmountStyle} = useStyles();
  const {
    news,
    employes,
    bank,
    individualAmount,
    indicesResult,
    handleInputNews,
    handleInputEmployes,
    handleInputBank,
    handleButton
} = useGame();
  return <>
    <div style={containerStyle}>
      <h1>
        FAPCEO
      </h1>
      <>
        <label htmlFor="newsInput">
          Valor do News:
        </label> <br />
        <input
          name="newsInput"
          id="newsInput"
          value={news}
          onChange={handleInputNews}

        />
        <br />  <br />
      </>
      <>
        <label htmlFor="employesInput">
          Valor do  employes:
        </label> <br />
        <input
          name="employesInput"
          id="employesInput"
          value={employes}
          onChange={handleInputEmployes}
        />
        <br />  <br />
      </>
      <>
        <label htmlFor="bankInput">
          Valor do Bank:
        </label> <br />
        <input
          name="bankInput"
          id="bankInput"
          value={bank}
          onChange={handleInputBank}
        />
        <br />  <br />
      </>
      <button onClick={handleButton} style={buttonStyle}>
        Aperte Aqui
      </button>
      <br />  <br />
      <label>Melhor jogo: {individualAmount.map(individual => {
        return <div key={individual} style={individualAmountStyle}>{individual}</div>
      })}</label>
      <br />  <br />
      <label>Jogos: {indicesResult.map(indice => {
        return <div key={indice} style={individualAmountStyle}>{indice}</div>
      })}</label>
    </div>
  </>
}
export default Jogo;