import { IExperiencia, TipoEmbarcacao } from "../../models/experiencia";
import AncoraIcon from "../../misc/icons/ancora-icon.svg"
import LetrasIcon from "../../misc/icons/letras-icon.svg"
import StarIcon from "../../misc/icons/star-icon.svg"
import PfpPescador1 from "../../misc/placeholder/JOAO PESCADOR .jpg";
import PfpPescador3 from "../../misc/placeholder/CLAUDIO PESCADOR.jpg";
import PfpPescador4 from "../../misc/placeholder/ALTEMIR PESCADOR.jpg";
import PfpPescador5 from "../../misc/placeholder/ANTONIO PESCADOR.jpg";

export interface IResultExperience{
    id: number
    location: string;
    rating?: number;
    description?: string;
    price: number;
    image?: string
}

export const results: IExperiencia[] = [
    {
        id:1,
        description: "Junte-se a nós para uma experiência emocionante de passeio em um barco pesquiero do Campeche, onde você terá a chance de criar memórias duradouras nas águas cristalinas e deslumbrantes paisagens deste paraíso. Sob a orientação do experiente e carismático do pescador local João, você embarcará em uma jornada que transcende a pesca convencional, mergulhando profundamente na arte e na paixão desta atividade milenar.",
        image: "https://drive.google.com/uc?export=view&id=194kvXmRTtIrY4Jk6PBk9Ub7D1DeVVdPX",
        cidade: "Florianópolis",
        regiao: "Santo Antonio",
        nome: "Barco maré brava",
        nomeDonoExperiencia: "João",
        preco: 58,
        quantidadeAvaliacoes: 9,
        rating: 4.73,
        capacidadeMaxima: 4,
        destaques:[
            {
                icon: AncoraIcon,
                title: "Experiência para crianças",
                description:"Traga suas crianças para essa experiência"
            },
            {
                icon: StarIcon,
                title: "Host experiente",
                description:"Billy tem 9 avaliações positivas"
            },
            {
            icon: LetrasIcon,
            title: "Linguagem: Português",
            description:"Billy é falante nativo da língua: Português"
            }
        ],
        avaliacoes: [
            {
                nomeAvaliador: "Ricardo",
                dataAvaliacao: "12/07/2023",
                comentario:"Minha experiência no Barco do João foi incrível! Tripulação hospitaleira, barco limpo e paisagens deslumbrantes. Comida deliciosa! Voltarei!",
                profilePhoto: "https://drive.google.com/uc?export=view&id=1QLO0HJ8TApr0GeElRA7axtubbw3BNZcn",
            },
            {
                nomeAvaliador: "Beatriz",
                dataAvaliacao: "18/08/2023",
                comentario: "Passeio agradável, mas faltou emoção. Tripulação educada, mas paradas curtas. Opção para relaxar.",
                profilePhoto: "https://drive.google.com/uc?export=view&id=1OyP-3x9UN4Mv9IBUb180Tib789-C0Th9",
            },
            {
                nomeAvaliador: "Luiza",
                dataAvaliacao: "18/08/2023",
                comentario: "Passeio relaxante no Barco do João! Equipe atenciosa, paisagens bonitas e ambiente agradável. Ótimo para relaxar.",
                profilePhoto: "https://drive.google.com/uc?export=view&id=1kdlW-Y8vZm9vpRhHoz8DvYWEcFWyh2Rp",
            },
            {
                nomeAvaliador: "Carlos",
                dataAvaliacao: "18/08/2023",
                comentario: "Recomendo o Barco do João para todos! Tripulação animada, comida deliciosa e vistas deslumbrantes. Experiência imperdível!",
                profilePhoto: "https://drive.google.com/uc?export=view&id=1fH6ZUgpwLXUO1JtVwG0S__h7cEl1sk4f",
            }
            ,{
                nomeAvaliador: "Pedro",
                dataAvaliacao: "18/08/2023",
                comentario: "Pura aventura! Tripulação animada, paradas perfeitas. Almoço delicioso. Recomendo para quem busca emoção!",
                profilePhoto: "https://drive.google.com/uc?export=view&id=1Y0E3cIuc6NcZrSjZiXjsoG-mX67WR04I",
            },
            {
                nomeAvaliador: "Marcos",
                dataAvaliacao: "18/08/2023",
                comentario: "Dia muito divertido no Barco do João! Equipe amigável e paisagens bonitas. Preço um pouco elevado, mas valeu a pena.",
                profilePhoto: "https://drive.google.com/uc?export=view&id=1qVymwV_eXtYgQIkunm_1IdKrOvu_MKZb",
            }
        ],
        tipoEmbarcacao: TipoEmbarcacao.MOTOR,
        profilePhoto: PfpPescador1,
        longDescription: "Lorem ipsum dolor sit amet, consectetur lore  lorem, sed diam nonumy lorem, sed diam"
    },
    {
        id:2,
        description: "Quando você pisa a bordo, é mais do que um simples passeio de catamarã; é uma verdadeira celebração da vida e do amor pelo oceano. Nosso objetivo é proporcionar a vocês um dia repleto de diversão, relaxamento e descoberta. Como jovens entusiastas do mar, entendemos a importância de se conectar com a natureza e apreciar a beleza que nos cerca",
        image: "https://drive.google.com/uc?export=view&id=194kvXmRTtIrY4Jk6PBk9Ub7D1DeVVdPX",
        cidade: "Florianópolis",
        regiao: "Campeche",
        nome: "Passeio de Catamarã",
        nomeDonoExperiencia: "Eduardo e Glaucia",
        preco: 122,
        quantidadeAvaliacoes: 39,
        rating: 4.73,
        capacidadeMaxima: 7,
        destaques:[     
            {
                icon: AncoraIcon,
                title: "Experiência para crianças",
                description:"Traga suas crianças para essa experiência"
            },
            {
                icon: StarIcon,
                title: "Host experiente",
                description:"Billy tem 9 avaliações positivas"
            },
            {
            icon: LetrasIcon,
            title: "Linguagem: Português",
            description:"Billy é falante nativo da língua: Português"
            }
        ],
        avaliacoes: [
            {
                nomeAvaliador: "Ricardo",
                dataAvaliacao: "12/07/2023",
                comentario:"Minha experiência no Barco do João foi incrível! Tripulação hospitaleira, barco limpo e paisagens deslumbrantes. Comida deliciosa! Voltarei!",
                profilePhoto: "https://drive.google.com/uc?export=view&id=1QLO0HJ8TApr0GeElRA7axtubbw3BNZcn",
            },
            {
                nomeAvaliador: "Beatriz",
                dataAvaliacao: "18/08/2023",
                comentario: "Passeio agradável, mas faltou emoção. Tripulação educada, mas paradas curtas. Opção para relaxar.",
                profilePhoto: "https://drive.google.com/uc?export=view&id=1OyP-3x9UN4Mv9IBUb180Tib789-C0Th9",
            },
            {
                nomeAvaliador: "Luiza",
                dataAvaliacao: "18/08/2023",
                comentario: "Passeio relaxante no Barco do João! Equipe atenciosa, paisagens bonitas e ambiente agradável. Ótimo para relaxar.",
                profilePhoto: "https://drive.google.com/uc?export=view&id=1kdlW-Y8vZm9vpRhHoz8DvYWEcFWyh2Rp",
            },
            {
                nomeAvaliador: "Carlos",
                dataAvaliacao: "18/08/2023",
                comentario: "Recomendo o Barco do João para todos! Tripulação animada, comida deliciosa e vistas deslumbrantes. Experiência imperdível!",
                profilePhoto: "https://drive.google.com/uc?export=view&id=1fH6ZUgpwLXUO1JtVwG0S__h7cEl1sk4f",
            }
            ,{
                nomeAvaliador: "Pedro",
                dataAvaliacao: "18/08/2023",
                comentario: "Pura aventura! Tripulação animada, paradas perfeitas. Almoço delicioso. Recomendo para quem busca emoção!",
                profilePhoto: "https://drive.google.com/uc?export=view&id=1Y0E3cIuc6NcZrSjZiXjsoG-mX67WR04I",
            },
            {
                nomeAvaliador: "Marcos",
                dataAvaliacao: "18/08/2023",
                comentario: "Dia muito divertido no Barco do João! Equipe amigável e paisagens bonitas. Preço um pouco elevado, mas valeu a pena.",
                profilePhoto: "https://drive.google.com/uc?export=view&id=1qVymwV_eXtYgQIkunm_1IdKrOvu_MKZb",
            }
        ],
        tipoEmbarcacao: TipoEmbarcacao.MOTOR,
        profilePhoto: "https://drive.google.com/uc?export=view&id=1h_sTtdn5AIlcpmD4zUgMNCjMxgMHUM0f"
    },
    {
        id:3,
        description: "Aula de caiaque com Felipe",
        image: "https://drive.google.com/uc?export=view&id=1NbCZsYoDu4fwOqc6atuexde149o2fd0_",
        cidade: "Florianópolis",
        regiao: "Canto da Lagoa",
        nome: "Barco siri na laje",
        nomeDonoExperiencia: "Cláudio",
        preco: 98,
        quantidadeAvaliacoes: 9,
        rating: 4.73,
        capacidadeMaxima: 4,
        destaques:[
            {
                icon: AncoraIcon,
                title: "Experiência para crianças",
                description:"Traga suas crianças para essa experiência"
            },
            {
                icon: StarIcon,
                title: "Host experiente",
                description:"Billy tem 9 avaliações positivas"
            },
            {
            icon: LetrasIcon,
            title: "Linguagem: Português",
            description:"Billy é falante nativo da língua: Português"
            }
        ],
        avaliacoes: [
            {
                nomeAvaliador: "Ricardo",
                dataAvaliacao: "12/07/2023",
                comentario:"Minha experiência no Barco do João foi incrível! Tripulação hospitaleira, barco limpo e paisagens deslumbrantes. Comida deliciosa! Voltarei!",
                profilePhoto: "https://drive.google.com/uc?export=view&id=1QLO0HJ8TApr0GeElRA7axtubbw3BNZcn",
            },
            {
                nomeAvaliador: "Beatriz",
                dataAvaliacao: "18/08/2023",
                comentario: "Passeio agradável, mas faltou emoção. Tripulação educada, mas paradas curtas. Opção para relaxar.",
                profilePhoto: "https://drive.google.com/uc?export=view&id=1OyP-3x9UN4Mv9IBUb180Tib789-C0Th9",
            },
            {
                nomeAvaliador: "Luiza",
                dataAvaliacao: "18/08/2023",
                comentario: "Passeio relaxante no Barco do João! Equipe atenciosa, paisagens bonitas e ambiente agradável. Ótimo para relaxar.",
                profilePhoto: "https://drive.google.com/uc?export=view&id=1kdlW-Y8vZm9vpRhHoz8DvYWEcFWyh2Rp",
            },
            {
                nomeAvaliador: "Carlos",
                dataAvaliacao: "18/08/2023",
                comentario: "Recomendo o Barco do João para todos! Tripulação animada, comida deliciosa e vistas deslumbrantes. Experiência imperdível!",
                profilePhoto: "https://drive.google.com/uc?export=view&id=1fH6ZUgpwLXUO1JtVwG0S__h7cEl1sk4f",
            }
            ,{
                nomeAvaliador: "Pedro",
                dataAvaliacao: "18/08/2023",
                comentario: "Pura aventura! Tripulação animada, paradas perfeitas. Almoço delicioso. Recomendo para quem busca emoção!",
                profilePhoto: "https://drive.google.com/uc?export=view&id=1Y0E3cIuc6NcZrSjZiXjsoG-mX67WR04I",
            },
            {
                nomeAvaliador: "Marcos",
                dataAvaliacao: "18/08/2023",
                comentario: "Dia muito divertido no Barco do João! Equipe amigável e paisagens bonitas. Preço um pouco elevado, mas valeu a pena.",
                profilePhoto: "https://drive.google.com/uc?export=view&id=1qVymwV_eXtYgQIkunm_1IdKrOvu_MKZb",
            }
        ],
        tipoEmbarcacao: TipoEmbarcacao.MOTOR,
        profilePhoto: "https://drive.google.com/uc?export=view&id=1oMdu_WG1FStcKkkef7zKkDoIZS6u77Uh"
    },
    {
        id:4,
        description: "Pura aventura! Tripulação animada, paradas perfeitas. Almoço delicioso. Recomendo para quem busca emoção!",
        image: "https://drive.google.com/uc?export=view&id=1Bj3MBM8wToZ-pIKN9VAIC7l6jTQ6t7PW",
        cidade: "Florianópolis",
        regiao: "Jurerê",
        nome: "Barco marisco da costa",
        nomeDonoExperiencia: "Altemir",
        preco: 59,
        quantidadeAvaliacoes: 9,
        rating: 4.73,
        capacidadeMaxima: 4,
        destaques:[
            {
                icon: AncoraIcon,
                title: "Experiência para crianças",
                description:"Traga suas crianças para essa experiência"
            },
            {
                icon: StarIcon,
                title: "Host experiente",
                description:"Billy tem 9 avaliações positivas"
            },
            {
            icon: LetrasIcon,
            title: "Linguagem: Português",
            description:"Billy é falante nativo da língua: Português"
            }
        ],
        avaliacoes: [
            {
                nomeAvaliador: "Ricardo",
                dataAvaliacao: "12/07/2023",
                comentario:"Minha experiência no Barco do João foi incrível! Tripulação hospitaleira, barco limpo e paisagens deslumbrantes. Comida deliciosa! Voltarei!",
                profilePhoto: "https://drive.google.com/uc?export=view&id=1QLO0HJ8TApr0GeElRA7axtubbw3BNZcn",
            },
            {
                nomeAvaliador: "Beatriz",
                dataAvaliacao: "18/08/2023",
                comentario: "Passeio agradável, mas faltou emoção. Tripulação educada, mas paradas curtas. Opção para relaxar.",
                profilePhoto: "https://drive.google.com/uc?export=view&id=1OyP-3x9UN4Mv9IBUb180Tib789-C0Th9",
            },
            {
                nomeAvaliador: "Luiza",
                dataAvaliacao: "18/08/2023",
                comentario: "Passeio relaxante no Barco do João! Equipe atenciosa, paisagens bonitas e ambiente agradável. Ótimo para relaxar.",
                profilePhoto: "https://drive.google.com/uc?export=view&id=1kdlW-Y8vZm9vpRhHoz8DvYWEcFWyh2Rp",
            },
            {
                nomeAvaliador: "Carlos",
                dataAvaliacao: "18/08/2023",
                comentario: "Recomendo o Barco do João para todos! Tripulação animada, comida deliciosa e vistas deslumbrantes. Experiência imperdível!",
                profilePhoto: "https://drive.google.com/uc?export=view&id=1fH6ZUgpwLXUO1JtVwG0S__h7cEl1sk4f",
            }
            ,{
                nomeAvaliador: "Pedro",
                dataAvaliacao: "18/08/2023",
                comentario: "Pura aventura! Tripulação animada, paradas perfeitas. Almoço delicioso. Recomendo para quem busca emoção!",
                profilePhoto: "https://drive.google.com/uc?export=view&id=1Y0E3cIuc6NcZrSjZiXjsoG-mX67WR04I",
            },
            {
                nomeAvaliador: "Marcos",
                dataAvaliacao: "18/08/2023",
                comentario: "Dia muito divertido no Barco do João! Equipe amigável e paisagens bonitas. Preço um pouco elevado, mas valeu a pena.",
                profilePhoto: "https://drive.google.com/uc?export=view&id=1qVymwV_eXtYgQIkunm_1IdKrOvu_MKZb",
            }
        ],
        tipoEmbarcacao: TipoEmbarcacao.MOTOR,
        profilePhoto: PfpPescador4
    },
    {
        id:5,
        description: "Junte-se a nós para uma experiência emocionante de passeio em um barco pesquiero do Campeche, onde você terá a chance de criar memórias duradouras nas águas cristalinas e deslumbrantes paisagens deste paraíso. Sob a orientação do experiente e carismático do pescador local João, você embarcará em uma jornada que transcende a pesca convencional, mergulhando profundamente na arte e na paixão desta atividade milenar. As águas do Campeche são repletas de vida marinha, com uma grande variedade de espécies de peixes, como robalo, dourado, pargo e muitos outros. Com sorte, você poderá pegar o peixe dos seus sonhos e ter uma experiência inesquecível. Além disso, durante o passeio, João compartilhará histórias fascinantes sobre a região, a cultura local e suas próprias aventuras de pesca.",
        image: "https://drive.google.com/uc?export=view&id=185mJANgpGRk28SIprglxJqx1y5vJA6hR",
        cidade: "Florianópolis",
        regiao: "Canasjurê",
        nome: "Passeio com Antônio",
        nomeDonoExperiencia: "Antônio",
        preco: 98,
        quantidadeAvaliacoes: 9,
        rating: 4.73,
        capacidadeMaxima: 4,
        destaques:[
            {
                icon: AncoraIcon,
                title: "Experiência para crianças",
                description:"Traga suas crianças para essa experiência"
            },
            {
                icon: StarIcon,
                title: "Host experiente",
                description:"Billy tem 9 avaliações positivas"
            },
            {
            icon: LetrasIcon,
            title: "Linguagem: Português",
            description:"Billy é falante nativo da língua: Português"
            }
        ],
        avaliacoes: [
            {
                nomeAvaliador: "Ricardo",
                dataAvaliacao: "12/07/2023",
                comentario:"Minha experiência no Barco do João foi incrível! Tripulação hospitaleira, barco limpo e paisagens deslumbrantes. Comida deliciosa! Voltarei!",
                profilePhoto: "https://drive.google.com/uc?export=view&id=1QLO0HJ8TApr0GeElRA7axtubbw3BNZcn",
            },
            {
                nomeAvaliador: "Beatriz",
                dataAvaliacao: "18/08/2023",
                comentario: "Passeio agradável, mas faltou emoção. Tripulação educada, mas paradas curtas. Opção para relaxar.",
                profilePhoto: "https://drive.google.com/uc?export=view&id=1OyP-3x9UN4Mv9IBUb180Tib789-C0Th9",
            },
            {
                nomeAvaliador: "Luiza",
                dataAvaliacao: "18/08/2023",
                comentario: "Passeio relaxante no Barco do João! Equipe atenciosa, paisagens bonitas e ambiente agradável. Ótimo para relaxar.",
                profilePhoto: "https://drive.google.com/uc?export=view&id=1kdlW-Y8vZm9vpRhHoz8DvYWEcFWyh2Rp",
            },
            {
                nomeAvaliador: "Carlos",
                dataAvaliacao: "18/08/2023",
                comentario: "Recomendo o Barco do João para todos! Tripulação animada, comida deliciosa e vistas deslumbrantes. Experiência imperdível!",
                profilePhoto: "https://drive.google.com/uc?export=view&id=1fH6ZUgpwLXUO1JtVwG0S__h7cEl1sk4f",
            }
            ,{
                nomeAvaliador: "Pedro",
                dataAvaliacao: "18/08/2023",
                comentario: "Pura aventura! Tripulação animada, paradas perfeitas. Almoço delicioso. Recomendo para quem busca emoção!",
                profilePhoto: "https://drive.google.com/uc?export=view&id=1Y0E3cIuc6NcZrSjZiXjsoG-mX67WR04I",
            },
            {
                nomeAvaliador: "Marcos",
                dataAvaliacao: "18/08/2023",
                comentario: "Dia muito divertido no Barco do João! Equipe amigável e paisagens bonitas. Preço um pouco elevado, mas valeu a pena.",
                profilePhoto: "https://drive.google.com/uc?export=view&id=1qVymwV_eXtYgQIkunm_1IdKrOvu_MKZb",
            }
        ],

        tipoEmbarcacao: TipoEmbarcacao.MOTOR,
        profilePhoto: "https://drive.google.com/uc?export=view&id=1oMdu_WG1FStcKkkef7zKkDoIZS6u77Uh"
    },
    {
        id:6,
        description: "Passeio de Kanoa Havaiana",
        image: "https://drive.google.com/uc?export=view&id=1XvZy0x9WZo5HhMWoPdTabfJFDqKVaNAr",
        cidade: "Florianópolis",
        regiao: "Barra da Lagoa",
        nome: "Barco pérola Caiçara",
        nomeDonoExperiencia: "João da Costa",
        preco: 98,
        quantidadeAvaliacoes: 9,
        rating: 4.73,
        capacidadeMaxima: 4,
        destaques:[
            {
                icon: AncoraIcon,
                title: "Experiência para crianças",
                description:"Traga suas crianças para essa experiência"
            },
            {
                icon: StarIcon,
                title: "Host experiente",
                description:"Billy tem 9 avaliações positivas"
            },
            {
            icon: LetrasIcon,
            title: "Linguagem: Português",
            description:"Billy é falante nativo da língua: Português"
            }
        ],
        avaliacoes: [
            {
                nomeAvaliador: "Ricardo",
                dataAvaliacao: "12/07/2023",
                comentario:"Minha experiência no Barco do João foi incrível! Tripulação hospitaleira, barco limpo e paisagens deslumbrantes. Comida deliciosa! Voltarei!",
                profilePhoto: "https://drive.google.com/uc?export=view&id=1QLO0HJ8TApr0GeElRA7axtubbw3BNZcn",
            },
            {
                nomeAvaliador: "Beatriz",
                dataAvaliacao: "18/08/2023",
                comentario: "Passeio agradável, mas faltou emoção. Tripulação educada, mas paradas curtas. Opção para relaxar.",
                profilePhoto: "https://drive.google.com/uc?export=view&id=1OyP-3x9UN4Mv9IBUb180Tib789-C0Th9",
            },
            {
                nomeAvaliador: "Luiza",
                dataAvaliacao: "18/08/2023",
                comentario: "Passeio relaxante no Barco do João! Equipe atenciosa, paisagens bonitas e ambiente agradável. Ótimo para relaxar.",
                profilePhoto: "https://drive.google.com/uc?export=view&id=1kdlW-Y8vZm9vpRhHoz8DvYWEcFWyh2Rp",
            },
            {
                nomeAvaliador: "Carlos",
                dataAvaliacao: "18/08/2023",
                comentario: "Recomendo o Barco do João para todos! Tripulação animada, comida deliciosa e vistas deslumbrantes. Experiência imperdível!",
                profilePhoto: "https://drive.google.com/uc?export=view&id=1fH6ZUgpwLXUO1JtVwG0S__h7cEl1sk4f",
            }
            ,{
                nomeAvaliador: "Pedro",
                dataAvaliacao: "18/08/2023",
                comentario: "Pura aventura! Tripulação animada, paradas perfeitas. Almoço delicioso. Recomendo para quem busca emoção!",
                profilePhoto: "https://drive.google.com/uc?export=view&id=1Y0E3cIuc6NcZrSjZiXjsoG-mX67WR04I",
            },
            {
                nomeAvaliador: "Marcos",
                dataAvaliacao: "18/08/2023",
                comentario: "Dia muito divertido no Barco do João! Equipe amigável e paisagens bonitas. Preço um pouco elevado, mas valeu a pena.",
                profilePhoto: "https://drive.google.com/uc?export=view&id=1qVymwV_eXtYgQIkunm_1IdKrOvu_MKZb",
            }
        ],

        tipoEmbarcacao: TipoEmbarcacao.MOTOR,
        profilePhoto: "https://drive.google.com/uc?export=view&id=1oMdu_WG1FStcKkkef7zKkDoIZS6u77Uh"
    }
]