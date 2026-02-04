/* =====================================================
   VIT Helper - Volunteer & Collaboration Logic
   ===================================================== */

/* ---------- VOLUNTEER FOR ISSUE ---------- */
function volunteerForIssue(issueId) {

    const issue = issues.find(i => i.id === issueId);
    if (!issue) return;

    const volunteerName = "Student Volunteer";

    /* Prevent duplicate volunteering */
    if (issue.volunteers.includes(volunteerName)) {
        alert("You have already volunteered for this issue.");
        return;
    }

    issue.volunteers.push(volunteerName);

    /* Auto-update status */
    if (issue.status === "Open") {
        issue.status = "In Progress";
    }

    /* Log activity */
    activityLog.unshift(
        "Volunteer joined issue: " + issue.title
    );

    alert("Thank you for volunteering!");

    /* Refresh views */
    if (typeof renderIssues === "function") {
        renderIssues("issuesContainer");
        renderIssues("volunteerIssues");
    }
}

/* ---------- RENDER VOLUNTEER ISSUES ---------- */
function renderVolunteerIssues() {

    const container = document.getElementById("volunteerIssues");
    if (!container) return;

    container.innerHTML = "";

    issues.forEach(issue => {

        if (issue.status === "Resolved") return;

        const card = document.createElement("div");
        card.className = "issue-card";

        card.innerHTML = `
            <h3>${issue.title}</h3>
            <p class="issue-meta">
                ${issue.category} | ${issue.location}
            </p>
            <p>Status: ${issue.status}</p>
            <p>Volunteers: ${issue.volunteers.length}</p>

            <button class="btn primary"
                onclick="volunteerForIssue(${issue.id})">
                Volunteer
            </button>
        `;

        container.appendChild(card);
    });
}

/* ---------- INIT ---------- */
document.addEventListener("DOMContentLoaded", function () {
    renderVolunteerIssues();
});
