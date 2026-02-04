/* =====================================================
   VIT Helper - Render Engine
   Renders issues, dashboards, lists dynamically
   ===================================================== */

/* ---------- RENDER ISSUES (GENERIC) ---------- */
function renderIssues(containerId, filterCategory = null) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = "";

    issues.forEach(issue => {

        if (filterCategory && issue.category !== filterCategory) return;

        const card = document.createElement("div");
        card.classList.add("issue-card");

        // Priority styling
        if (issue.priority === "Important") {
            card.classList.add("priority-important");
        } else if (issue.priority === "Emergency") {
            card.classList.add("priority-emergency");
        }

        card.innerHTML = `
            <h3>${issue.title}</h3>
            <p class="issue-meta">
                ${issue.category} | ${issue.location}
            </p>
            <p>${issue.description}</p>
            <span class="status-badge ${issue.status.toLowerCase().replace(" ", "-")}">
                ${issue.status}
            </span>
            <br><br>
            <a href="issue-details.html" class="btn secondary">View Details</a>
        `;

        container.appendChild(card);
    });
}

/* ---------- DASHBOARD STATS ---------- */
function renderDashboardStats() {

    const totalIssues = document.getElementById("totalIssues");
    const openIssues = document.getElementById("openIssues");
    const emergencyIssues = document.getElementById("emergencyCount");

    if (totalIssues) totalIssues.innerText = issues.length;

    if (openIssues) {
        const openCount = issues.filter(i => i.status !== "Resolved").length;
        openIssues.innerText = openCount;
    }

    if (emergencyIssues) {
        const emergencyCount = issues.filter(i => i.priority === "Emergency").length;
        emergencyIssues.innerText = emergencyCount;
    }
}

/* ---------- ACTIVITY LOG ---------- */
function renderActivityLog() {
    const activityContainer = document.getElementById("activityList");
    if (!activityContainer) return;

    activityContainer.innerHTML = "";

    activityLog.forEach(entry => {
        const li = document.createElement("li");
        li.innerText = entry;
        activityContainer.appendChild(li);
    });
}

/* ---------- ADMIN DASHBOARD ---------- */
function renderAdminStats() {

    const total = document.getElementById("adminTotalIssues");
    const open = document.getElementById("adminOpenIssues");
    const resolved = document.getElementById("adminResolvedIssues");
    const emergency = document.getElementById("adminEmergencyCount");

    if (total) total.innerText = issues.length;

    if (open) {
        open.innerText = issues.filter(i => i.status !== "Resolved").length;
    }

    if (resolved) {
        resolved.innerText = issues.filter(i => i.status === "Resolved").length;
    }

    if (emergency) {
        emergency.innerText = issues.filter(i => i.priority === "Emergency").length;
    }
}

/* ---------- AUTO INIT ---------- */
document.addEventListener("DOMContentLoaded", function () {

    renderIssues("issuesContainer");
    renderIssues("hostelIssuesContainer", "Hostel & Residential");
    renderIssues("infraIssuesContainer", "Infrastructure");

    renderDashboardStats();
    renderAdminStats();
    renderActivityLog();
});
