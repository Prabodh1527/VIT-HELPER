/* =====================================================
   VIT Helper - Canvas Emergency Indicator
   ===================================================== */

   const canvas = document.getElementById("emergencyCanvas");

   if (canvas) {
   
       const ctx = canvas.getContext("2d");
   
       function drawEmergencyIndicator(count) {
   
           ctx.clearRect(0, 0, canvas.width, canvas.height);
   
           /* Background */
           ctx.fillStyle = "#f5f5f5";
           ctx.fillRect(0, 0, canvas.width, canvas.height);
   
           /* Circle */
           ctx.beginPath();
           ctx.arc(100, 50, 30, 0, 2 * Math.PI);
           ctx.fillStyle = count > 0 ? "#e74c3c" : "#2ecc71";
           ctx.fill();
   
           /* Text */
           ctx.fillStyle = "#ffffff";
           ctx.font = "16px Arial";
           ctx.textAlign = "center";
           ctx.textBaseline = "middle";
           ctx.fillText(count, 100, 50);
       }
   
       /* Initial draw */
       drawEmergencyIndicator(emergencyCount);
   
       /* Update every second (simulation) */
       setInterval(function () {
           drawEmergencyIndicator(emergencyCount);
       }, 1000);
   }
   