"use client"

import { EventData, EventPage } from '@/components/Pages/Event';
import {East_Sea_Dokdo} from 'next/font/google'
import { useParams } from 'next/navigation';
import { useState } from 'react';

const eastSeaDokdo = East_Sea_Dokdo({weight: "400", subsets: ['latin']})

export default function EventMainPage() {
    
    const {id} = useParams()

    const [data, setData] = useState<EventData>({
        "id": 1,
        "name": "Sample Event",
        "department": {
            id: 1,
            name: '',
        },
        "is_approved": true,
        "open": true,
        "max_participants": 100,
        "is_team_event": true,
        "max_team_size": 5,
        "min_team_size": 2,
        "header_image": "event_header_images/sample_image.jpg",
        "start_date": "2024-04-01T09:00:00Z",
        "end_date": "2024-04-02T18:00:00Z",
        "registration_start_date": "2024-03-01T00:00:00Z",
        "registration_end_date": "2024-03-31T23:59:59Z",
        "fee": 20,
        "location": "Sample Location",
        "description": "Sample Event Description",
        "rounds": [
          {
            "id": 1,
            "event": 1,
            "name": "Preliminary Round",
            "start_time": "2024-04-01T09:00:00Z",
            "end_time": "2024-04-01T12:00:00Z",
            "location": "Preliminary Location",
            "description": "Preliminary Round Description"
          },
          {
            "id": 2,
            "event": 1,
            "name": "Final Round",
            "start_time": "2024-04-02T14:00:00Z",
            "end_time": "2024-04-02T18:00:00Z",
            "location": "Final Location",
            "description": "Final Round Description"
          }
        ],
        "some_dudes": [
          {
            "id": 1,
            "name": "John Doe",
            "dude_type": "Speaker",
            "email": "john.doe@example.com"
          },
          {
            "id": 2,
            "name": "Jane Smith",
            "dude_type": "Judge",
            "email": "jane.smith@example.com"
          },
          {
            "id": 3,
            "name": "Alice Johnson",
            "dude_type": "Mentor",
            "email": "alice.johnson@example.com"
          },
          {
            "id": 4,
            "name": "Bob Brown",
            "dude_type": "Panelist",
            "email": "bob.brown@example.com"
          }
        ],
        "social_links": [
          {
            "id": 1,
            "name": "Instagram",
            "url": "https://www.instagram.com/sample_event"
          },
          {
            "id": 2,
            "name": "Twitter",
            "url": "https://twitter.com/sample_event"
          }
        ],
        "sponsors": [
          {
            "id": 1,
            "name": "Sponsor A",
            "title": "Platinum Sponsor",
            "logo": "sponsors/sponsor_a_logo.jpg",
            "url": "https://www.sponsor-a.com"
          },
          {
            "id": 2,
            "name": "Sponsor B",
            "title": "Gold Sponsor",
            "logo": "sponsors/sponsor_b_logo.jpg",
            "url": "https://www.sponsor-b.com"
          }
        ],
        "faqs": [
          {
            "id": 1,
            "question": "What are the registration fees?",
            "answer": "The registration fee for this event is $20."
          },
          {
            "id": 2,
            "question": "Is there any age restriction for participation?",
            "answer": "Participants must be at least 18 years old to participate."
          }
        ]
      })
    
    return (
        <>
        <EventPage
            {...data}
        />
        </>
    );
}
