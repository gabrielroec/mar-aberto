import PfpPescador1 from "../../../../misc/placeholder/JOAO PESCADOR .jpg";
import PfpPescador2 from "../../../../misc/placeholder/JOSE PESCADOR.jpg";
import PfpPescador3 from "../../../../misc/placeholder/CLAUDIO PESCADOR.jpg";
import PfpPescador4 from "../../../../misc/placeholder/ALTEMIR PESCADOR.jpg";
import PfpPescador5 from "../../../../misc/placeholder/ANTONIO PESCADOR.jpg";


export interface IHistoriaCard{
    id: number;
    name: string;
    description: string;
    pfp: string;
}

export const content: IHistoriaCard[] = [
    {   
        id:1,
        name:"João",
        description: "Barco Maré Brava",
        pfp: PfpPescador1
    },
    {   
        id:2,
        name:"José",
        description: "Barco Tainha Dourada",
        pfp: PfpPescador2
    },
    {   
        id:3,
        name:"Cláudio",
        description: "Barco Siri na Laje",
        pfp: PfpPescador3
    },
    {   
        id:4,
        name:"Altemir",
        description: "Barco Pérola Caiçara",
        pfp: PfpPescador4
    }, 
    {   
        id:5,
        name:"Antônio",
        description: "Barco Marisco da Costa",
        pfp: PfpPescador5
    }
]