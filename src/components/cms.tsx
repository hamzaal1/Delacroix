"use client"
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

interface Props {
    id: string;
}

interface Content {
    _id: string;
    title: string;
}

function CMS({ id }: Props) {
    const { data } = useSelector((state: RootState) => state.content);
    let content = data.find((obj: Content) => obj._id === id) || { _id: "null", title: "null" };

    return (
        <>
            {content && content.title !== "null" ? content.title : "Content not found"}
        </>
    );
}

export default CMS;
