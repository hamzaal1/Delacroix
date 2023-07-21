"use client"
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { fetchContent } from '@/redux/Slices/contentSlice';
import { fetchAnnonces } from '@/redux/Slices/annonceSlice';

export default function LoadData() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContent() as any);
        dispatch(fetchAnnonces() as any);
    }, [dispatch]);
    return (
        <>
        </>
    );
}

