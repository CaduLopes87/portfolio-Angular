import { IDetalhesProjeto } from "./IDetalhesProjeto";

export interface IProjetos {
    profissionais: IProjeto[];
    pessoais: IProjeto[]
}

export interface IProjeto {
    nome: string;
    src: string;
    alt: string;
    github_Link: string;
    projeto_Link: string;
    detalhes: IDetalhesProjeto
}