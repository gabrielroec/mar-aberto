import BarcoFrente from "../../misc/icons/barquinho-frente.svg";
import Drink from "../../misc/icons/drink.svg";
import Snorkel from "../../misc/icons/snorkel.svg";
import Veleiro from "../../misc/icons/veleiro2.svg";

interface IOptions{
    label: string,
    link?: string,
    icon?: string;
}

export let Options: IOptions[] = [
    {label: "Ativo", icon: Snorkel, link: "/buscar-experiencias"},
    {label: "Festa ou evento", icon: Drink, link: "/buscar-experiencias"},
    {label: "Low-key", icon: Veleiro, link: "/buscar-experiencias"},
    {label: "Outras opções", icon: BarcoFrente, link: "/buscar-experiencias"}
]