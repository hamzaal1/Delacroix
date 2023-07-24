import Mission from "@/components/Mission";
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Notre Mission | Institut Eugène Delacroix',
    description: "À l'Institut Eugène Delacroix, nous offrons une éducation holistique et bienveillante, formant des citoyens engagés et compétents."
}

function page() {
    return (
        <>
            <Mission />
        </>
    )
}


export default page