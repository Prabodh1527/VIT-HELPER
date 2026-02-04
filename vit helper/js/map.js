/* =====================================================
   VIT Helper - Campus Map Interaction
   ===================================================== */

   const campusMap = document.getElementById("campusMap");
   const marker = document.getElementById("mapMarker");
   const locationText = document.getElementById("selectedLocation");
   
   /* Simulated location names (zones) */
   const mapZones = [
       "Library Area",
       "Hostel Block A",
       "Hostel Block B",
       "Hostel Block C",
       "Academic Block",
       "Food Court",
       "Main Gate"
   ];
   
   if (campusMap) {
   
       campusMap.addEventListener("click", function (event) {
   
           const rect = campusMap.getBoundingClientRect();
           const x = event.clientX - rect.left;
           const y = event.clientY - rect.top;
   
           /* Position marker */
           marker.style.left = x + "px";
           marker.style.top = y + "px";
           marker.style.display = "block";
   
           /* Randomly simulate a location */
           const randomLocation =
               mapZones[Math.floor(Math.random() * mapZones.length)];
   
           locationText.innerText = randomLocation;
   
           /* Store selected location in browser memory */
           localStorage.setItem("selectedLocation", randomLocation);
       });
   }
   