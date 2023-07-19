"use client";
import React,{useState,useEffect} from "react";
import GoogleMapReact from 'google-map-react';
import Link from "next/link";
import { usePathname } from "next/navigation";

const AnyReactComponent = ({ text }) => <Link target="_blank" href="https://www.google.com/maps/dir/Institut+Eugene+Delacroix,+Rue+Ahmed+Tadili,+Tangier+90060/Institut+Eugene+Delacroix,+Rue+Ahmed+Tadili,+Tangier+90060/@35.7671362,-5.8042613,18z/data=!4m13!4m12!1m5!1m1!1s0xd0b81922719edc7:0x2a1840089eee4ec0!2m2!1d-5.8031686!2d35.767052!1m5!1m1!1s0xd0b81922719edc7:0x2a1840089eee4ec0!2m2!1d-5.8031686!2d35.767052?entry=ttu">{text}</Link>;

export default function Map() {
    const [show, setShow] = useState(true); // Fixed useState declaration
    const pathname = usePathname();

    useEffect(() => {
        if (pathname.includes('admin')) {
            setShow(false)
        }
    }, [pathname])
    const defaultProps = {
        center: {
            lat: 35.76759083161439,
            lng: -5.803210215536255
        },
        zoom: 16
    };
    return (
        // Important! Always set the container height explicitly
        show &&
        <div style={{ height: '55vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyDVVwLoRK5IdeX44ivClnRqw0GQHRNIqRQ" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={35.76759083161439}
                    lng={-5.803210215536255}
                    text={<i className="fa-solid fa-location-dot text-4xl text-red-600" />}
                />
            </GoogleMapReact>
        </div>
    );
}