import VieScolaire from "@/components/vieScolaire";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Vie Scolaire | Institut Eugène Delacroix',
    description: "La vie scolaire à l'Institut Eugène Delacroix : une expérience enrichissante, inclusive et stimulante."
}

function page() {

    return (
        <>
            <VieScolaire />
        </>

    );
}

export default page;
