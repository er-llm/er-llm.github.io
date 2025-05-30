// data.js
const WORKSHOP_DATA = {
    speakers: [
        {
            name: "Prof. Jane Doe",
            affiliation: "Stanford University",
            image: "assets/images/speakers/jane-doe.jpg",
            talk_title: "Efficient Reasoning in Large Language Models",
            bio: "Prof. Doe is a leading researcher in...",
            website: "https://example.com"
        },
        // Add more speakers
    ],

    organizers: [
        {
            name: "Dr. John Smith",
            affiliation: "MIT",
            image: "assets/images/organizers/john-smith.jpg",
            role: "General Chair",
            website: "https://example.com"
        },
        // Add more organizers
    ],

    schedule: [
        {
            time: "09:00 - 09:15",
            title: "Opening Remarks",
            speakers: ["John Smith"],
            type: "opening"
        },
        {
            time: "09:15 - 10:00",
            title: "Keynote: Efficient Reasoning in LLMs",
            speakers: ["Jane Doe"],
            type: "keynote"
        },
        // Add more schedule items
    ]
};