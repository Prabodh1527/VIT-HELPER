/* =====================================================
   VIT Helper - Alerts & Emergency Logic
   ===================================================== */

/* Emergency buttons */
const emergencyButtons = document.querySelectorAll(".emergency-card");

if (emergencyButtons.length > 0) {

    emergencyButtons.forEach(button => {

        button.addEventListener("click", function () {

            const emergencyType = this.innerText.trim();

            emergencyCount++;

            /* Log activity */
            activityLog.unshift(
                "Emergency reported: " + emergencyType
            );

            alert(
                "Emergency alert raised!\n\n" +
                "Type: " + emergencyType + "\n" +
                "Campus authorities and nearby volunteers have been notified."
            );

        });
    });
}
