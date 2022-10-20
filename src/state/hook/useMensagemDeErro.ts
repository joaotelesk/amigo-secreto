import { useRecoilValue } from "recoil";
import { erroState } from "../atom";

export const useMensagemdeErro = () => {
  const mensagem = useRecoilValue(erroState);
  return mensagem;
};
