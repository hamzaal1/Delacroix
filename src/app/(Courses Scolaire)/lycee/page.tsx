import Lycee from "@/components/lycee";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Lycee | Institut Eugène Delacroix',
    description: "Au Lycée de l'Institut Eugène Delacroix, nous nous engageons à fournir une éducation supérieure qui prépare nos élèves âgés de 15 à 18 ans à réussir dans leurs études supérieures, à devenir des individus épanouis et à s'épanouir en tant que citoyens responsables. Notre mission au Lycée est de cultiver chez nos élèves des compétences académiques avancées, une pensée critique, une ouverture d'esprit et un sens des valeurs qui les guideront tout au long de leur vie."
}
function page() { 
    return (
        <Lycee />
    )
}


export default page