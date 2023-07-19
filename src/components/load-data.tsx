"use client"
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { fetchData } from '@/redux/Slices/contentSlice';

export default function LoadData() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchData() as any);
    }, [dispatch]);
    return (
        <>
        </>
    );
}

