import { useRecoilValue } from "recoil";
import { ListaParticipantesState } from "../atom";

export const useListaDeParticipantes = () => {
  return useRecoilValue(ListaParticipantesState);
};
