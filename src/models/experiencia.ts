import { IDestaqueInfo } from "../pages/detalhes-experiencia/card-destaque/card-destaque";
import { IAvaliacao } from './avaliacao';

export interface IExperiencia{
    id: number;
    nome: string;
    telefone?: string;
    endereco?: string;
    nomeDonoExperiencia: string;
    quantidadeAvaliacoes: number;
    rating: number;
    regiao: string;
    cidade: string;
    destaques: IDestaqueInfo[];
    avaliacoes: IAvaliacao[];
    preco: number,
    capacidadeMaxima: number;
    tipoEmbarcacao:TipoEmbarcacao;
    description: string;
    longDescription?: string;
    image: string;
    profilePhoto?: string
}

export enum TipoEmbarcacao{
    MOTOR,
    SPORTS,
    SAILBOAT
}