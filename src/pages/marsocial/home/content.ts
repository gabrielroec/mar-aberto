export interface IMarker{
    id: number,
    nomeAtividade: string,
    latitude: number,
    longitude: number
}

export const content: IMarker[] = [
    {
        id: 1,
        nomeAtividade: "Barco maré brava",
        latitude: -27.679500,
        longitude: -48.479710
    },
    {
        id: 2,
        nomeAtividade: "Barco tainha dourada",
        latitude: -27.714996,
        longitude: -48.503215
    },
    {
        id: 3,
        nomeAtividade: "Barco siri na laje",
        latitude: -27.505336,
        longitude: -48.522218
    },
    {
        id: 4,
        nomeAtividade: "Barco marisco da costa",
        latitude: -27.446996,
        longitude: -48.530758
    },
    {
        id: 5,
        nomeAtividade: "Pesca do João",
        latitude: -27.674799,
        longitude: -48.636970
    },
    {
        id: 6,
        nomeAtividade: "Barco pérola Caiçara",
        latitude: -27.674799,
        longitude: -48.636970
    }
]