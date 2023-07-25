import Maternelle from "@/components/maternelle"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Maternelle | Institut Eugène Delacroix',
    description: "La Maternelle à l'Institut Eugène Delacroix est un lieu chaleureux et stimulant conçu pour les tout-petits âgés de 3 à 5 ans. Notre programme de Maternelle a pour mission de créer un environnement d'apprentissage adapté aux besoins spécifiques des jeunes enfants, favorisant ainsi leur développement global et leur épanouissement."
}
function page() {
    return (
        <Maternelle />
    )
}


export default page