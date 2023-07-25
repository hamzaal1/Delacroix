import Elementaire from '../../../components/elementaire';
import { Metadata } from "next";
export const metadata: Metadata = {
    title: 'Elementaire | Institut Eugène Delacroix',
    description: "Élémentaire à l'Institut Eugène Delacroix constitue une étape cruciale dans le parcours éducatif de nos élèves âgés de 6 à 11 ans. Notre programme d'École Élémentaire a pour mission de fournir une éducation complète et équilibrée, en cultivant les talents individuels, en favorisant la curiosité intellectuelle et en développant les compétences essentielles pour la vie."
}
function page() {
    
    return (
        <Elementaire />
    )
}


export default page