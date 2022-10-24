import React from "react";
import { realizaSorteio } from "./realizarSorteio";

describe("dado um sorteio de amigo secreto", () => {
  test("cada participante não sortei o próprio nome", async () => {
    const participantes = ["Ana", "João", "Natalia", "Vinicius"];
    const sorteio = realizaSorteio(participantes);
    participantes.forEach((participante) => {
      const amigoSecreto = sorteio.get(participante);
      expect(amigoSecreto).not.toEqual(participante);
    });
  });
});
