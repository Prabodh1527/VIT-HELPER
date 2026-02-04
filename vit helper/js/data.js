/* =====================================================
   VIT Helper - Data Store (Frontend Simulation)
   ===================================================== */

/* ----------- ISSUE DATA ----------- */
let issues = [
    {
        id: 1,
        title: "Water leakage near Hostel Block C",
        description: "Continuous water leakage near staircase causing slippery floor.",
        category: "Hostel & Residential",
        priority: "Important",
        location: "Hostel Block C",
        status: "Open",
        volunteers: [],
        type: "issue"
    },
    {
        id: 2,
        title: "Broken street light near Library",
        description: "Street light not working during night hours.",
        category: "Infrastructure",
        priority: "Normal",
        location: "Library Road",
        status: "Open",
        volunteers: [],
        type: "issue"
    }
];

/* ----------- LOST & FOUND DATA ----------- */
let lostFoundItems = [
    {
        id: 101,
        title: "Lost ID Card",
        status: "Lost",
        location: "Food Court",
        description: "Student ID card with blue lanyard."
    }
];

/* ----------- EMERGENCY COUNT ----------- */
let emergencyCount = 0;

/* ----------- ACTIVITY LOG ----------- */
let activityLog = [
    "Issue reported: Water leakage near Hostel Block C",
    "Volunteer joined infrastructure issue"
];
