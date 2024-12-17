// Select the share button and the share links container
const shareButton = document.getElementById("share-button");
const shareLinks = document.getElementById("share-links");

// Add event listener for the share button click
shareButton.addEventListener("click", () => {
  // Toggle the 'hidden' class on the share links
  shareLinks.classList.toggle("hidden");

  // Update the 'aria-expanded' attribute for accessibility
  const isExpanded = shareButton.getAttribute("aria-expanded") === "true";
  shareButton.setAttribute("aria-expanded", !isExpanded);

  // Optional: Adjust button style for active state
  shareButton.classList.toggle("active");
});
