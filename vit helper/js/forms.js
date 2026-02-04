/* =====================================================
   VIT Helper - Forms & Validation Logic
   Handles issue reporting and feedback
   ===================================================== */

/* ---------- REPORT ISSUE FORM ---------- */
const issueForm = document.getElementById("issueForm");

if (issueForm) {

    issueForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const title = document.getElementById("issueTitle").value.trim();
        const description = document.getElementById("issueDescription").value.trim();
        const category = document.getElementById("issueCategory").value;
        const location = document.getElementById("issueLocation").value.trim();
        const anonymous = document.getElementById("anonymous").checked;

        const priorityInput = document.querySelector(
            'input[name="priority"]:checked'
        );
        const priority = priorityInput ? priorityInput.value : "Normal";

        /* --- Validation --- */
        if (title === "" || description === "" || category === "") {
            alert("Please fill all required fields.");
            return;
        }

        /* --- Create Issue Object --- */
        const newIssue = {
            id: issues.length + 1,
            title: title,
            description: description,
            category: category,
            priority: priority,
            location: location || "Not specified",
            status: "Open",
            volunteers: [],
            anonymous: anonymous,
            type: "issue"
        };

        /* --- Store Issue --- */
        issues.push(newIssue);

        /* --- Activity Log --- */
        activityLog.unshift(
            "New issue reported: " + title
        );

        alert("Issue reported successfully!");

        issueForm.reset();
    });
}

/* ---------- FEEDBACK FORM ---------- */
const feedbackForm = document.getElementById("feedbackForm");

if (feedbackForm) {

    feedbackForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const category = document.getElementById("feedbackCategory").value;
        const message = document.getElementById("feedbackMessage").value.trim();
        const anonymous = document.getElementById("feedbackAnonymous").checked;

        const ratingInput = document.querySelector(
            'input[name="rating"]:checked'
        );
        const rating = ratingInput ? ratingInput.value : 3;

        /* --- Validation --- */
        if (category === "" || message === "") {
            alert("Please complete all feedback fields.");
            return;
        }

        /* --- Simulated Save --- */
        activityLog.unshift(
            "New feedback submitted (" + category + ")"
        );

        alert("Thank you for your feedback!");

        feedbackForm.reset();
    });
}
