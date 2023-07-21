"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Map() {
    const [show, setShow] = useState(true); // Fixed useState declaration
    const pathname = usePathname();

    useEffect(() => {
        if (pathname.includes('admin')) {
            setShow(false)
        } else {
            setShow(true);
        }
    }, [pathname])
   
    return (
        // Important! Always set the container height explicitly
        show &&
        <iframe className="min-w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1618.6693972190753!2d-5.804454761600305!3d35.76705326948661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b81922719edc7%3A0x2a1840089eee4ec0!2sInstitut%20Eugene%20Delacroix!5e0!3m2!1sen!2sma!4v1689971726083!5m2!1sen!2sma" height="450" />
    );
}