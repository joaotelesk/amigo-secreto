import { useRef, useState } from "react";
import { useAdiconarParticipante } from "../state/hook/useAdicionarparticipante";
import { useMensagemdeErro } from "../state/hook/useMensagemDeErro";
import "./Formulario.css";
const Formulario = () => {
  const [nome, setNome] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const mensagemDeErro = useMensagemdeErro();
  const adicionarNaLista = useAdiconarParticipante();
  const adicionarParticipante = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    adicionarNaLista(nome);
    setNome("");
    inputRef.current?.focus();
  };
  return (
    <form onSubmit={adicionarParticipante}>
      <div className="grupo-input-btn">
        <input
          ref={inputRef}
          value={nome}
          onChange={(event) => setNome(event.target.value)}
          type="text"
          placeholder="Insira os nomes dos participantes"
        />
        <button disabled={!nome}>Adicionar</button>
      </div>
      {mensagemDeErro && (
        <p role="alert" className="alerta erro">
          {mensagemDeErro}
        </p>
      )}
    </form>
  );
};
export default Formulario;
