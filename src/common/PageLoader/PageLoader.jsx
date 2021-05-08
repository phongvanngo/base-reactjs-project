import React from 'react'
import { useSelector } from 'react-redux';

export default function PageLoader() {
    const isLoading = useSelector(state => state.loading.isLoading);
    if (isLoading === false) return null;
    return (
        <div style={{
            position: 'fixed', top: '50%', left: '50%', fontSize: '5rem'
        }}>
            loading
        </div >
    )
}
