import { useRef, useState } from "react";
import { useAdiconarParticipante } from "../state/hook/useAdicionarparticipante";
import { useMensagemdeErro } from "../state/hook/useMensagemDeErro";

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
      <input
        ref={inputRef}
        value={nome}
        onChange={(event) => setNome(event.target.value)}
        type="text"
        placeholder="Insira os nomes dos participantes"
      ></input>
      <button disabled={!nome}>Adicionar</button>
      {mensagemDeErro && <p role="alert">{mensagemDeErro}</p>}
    </form>
  );
};
export default Formulario;
