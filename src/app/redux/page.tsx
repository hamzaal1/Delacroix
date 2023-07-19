'use client';


import type { RootState } from '@/redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '@/redux/Slices/contentSlice';
import { useEffect } from 'react';

export default function Home() {
    // const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state: RootState) => state.content);
    useEffect(() => {
        dispatch(fetchData() as any);
    }, [dispatch]);
    console.log(data);
    

    let content;

    if (loading) {
        content = <div>Loading...</div>;
    }

    if (error) {
        content = <div>Error: {error}</div>;
    }

    if (data) {
        content = <div>Loaded SuccessFullly</div>;
        
    }

    return (
        <div>
           {content}
        </div>
    );
}