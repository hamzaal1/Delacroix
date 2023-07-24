import { Metadata } from "next"
import Apropos from "../../../components/aPropos"

export const metadata: Metadata = {
    title: 'A Propos | Institut Eugène Delacroix',
}
function page() {
    return (
        <Apropos />
    )
}


export default page