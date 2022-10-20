import { useRecoilValue, useSetRecoilState } from "recoil";
import { erroState, ListaParticipantesState } from "../atom";

export const useAdiconarParticipante = () => {
  const setLista = useSetRecoilState(ListaParticipantesState);
  const lista = useRecoilValue(ListaParticipantesState);
  const setErro = useSetRecoilState(erroState);
  return (nomeDoParticipante: string) => {
    if (lista.includes(nomeDoParticipante)) {
      setErro("Nomes duplicados não são permitidos");
      setTimeout(() => {
        setErro("");
      }, 5000);
      return;
    }
    return setLista((listaAtual) => [...listaAtual, nomeDoParticipante]);
  };
};
