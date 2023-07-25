import College from '../../../components/college';
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'College | Institut Eugène Delacroix',
    description: "Au Collège de l'Institut Eugène Delacroix, nous avons à cœur d'offrir à nos élèves âgés de 11 à 15 ans une éducation de qualité qui les prépare à affronter les défis de l'adolescence tout en les préparant pour leur avenir académique et personnel. Notre mission au Collège est de créer un environnement d'apprentissage stimulant, inclusif et bienveillant, qui favorise le développement intellectuel, social et émotionnel de chaque étudiant."
}

function page() {
    return (
        <College />
    )
}
export default page