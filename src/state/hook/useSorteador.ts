import { useSetRecoilState } from "recoil";
import { resultadoDoAmigoSecreto } from "../atom";
import { realizaSorteio } from "../helpers/realizarSorteio";
import { useListaDeParticipantes } from "./useListaDeParticipantes";

export const useSorteador = () => {
  const participantes = useListaDeParticipantes();
  const setResultado = useSetRecoilState(resultadoDoAmigoSecreto);
  return () => {
    const resultado = realizaSorteio(participantes);
    setResultado(resultado);
  };
};
