"use client"

import { EventData, EventPage } from '@/components/Pages/Event';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function EventRegistrationMainPage() {
    
    const {id} = useParams()
    
    return (
        <>
        Register here for {id}
        </>
    );
}
