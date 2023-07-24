import { Metadata } from "next"
import Vission from "../../../components/Vission"

export const metadata: Metadata = {
    title: 'Notre Vission | Institut Eugène Delacroix',
    description: "Excellence épanouissante pour tous. À l'Institut Eugène Delacroix, nous inspirons chaque élève à exceller et s'épanouir pleinement, devenant ainsi des citoyens responsables et bienveillants."
}
function page() {


    return (
        <>
            <Vission />
        </>
    )
}


export default page