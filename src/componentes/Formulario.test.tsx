import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import { RecoilRoot } from "recoil";
import Formulario from "./Formulario";

describe("O comportamento do Formulario", () => {
  test("quando o input está vazio, novos participantes não podem ser adicionados", async () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    //encontrar no DOM o input
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    //encontrar no DOM o input
    const botao = screen.getByRole("button");
    //garantir que o input esteja no documento
    expect(input).toBeInTheDocument();
    //garantir que o botão esteja desabilitado
    expect(botao).toBeDisabled();
  });

  test("adicionar um participante caso exista um nome preenchido", async () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const botao = screen.getByRole("button");
    //inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: "ana Catarina",
      },
    });

    //clicar no botão de submeter
    fireEvent.click(botao);

    //garantir que o input esteja com foco ativo
    expect(input).toHaveFocus();

    //garantir que o input não tenha um valor
    expect(input).toHaveValue("");
  });

  test("nomes duplicados não podem ser adicionados na lista", async () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const botao = screen.getByRole("button");
    //inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: "ana Catarina",
      },
    });
    fireEvent.click(botao);
    fireEvent.change(input, {
      target: {
        value: "ana Catarina",
      },
    });
    fireEvent.click(botao);
    const mensagemDeErro = screen.getByRole("alert");
    expect(mensagemDeErro.textContent).toBe(
      "Nomes duplicados não são permitidos"
    );
  });

  test("a mensagem de erro deve sumir após os times", async () => {
    jest.useFakeTimers();
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const botao = screen.getByRole("button");
    //inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: "ana Catarina",
      },
    });
    fireEvent.click(botao);
    fireEvent.change(input, {
      target: {
        value: "ana Catarina",
      },
    });
    fireEvent.click(botao);
    let mensagemDeErro = screen.queryByRole("alert");
    expect(mensagemDeErro).toBeInTheDocument();

    act(() => {
      jest.runAllTimers();
    });

    mensagemDeErro = screen.queryByRole("alert");
    expect(mensagemDeErro).toBeNull();
  });
});
