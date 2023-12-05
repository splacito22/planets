const butInstall = document.getElementById("buttonInstall");

let deferredPrompt;

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  // Prevent the default behavior to stop showing the browser's install prompt
  event.preventDefault();

  // Stash the event so it can be triggered later
  deferredPrompt = event;

  // Enable the install button to show
  butInstall.style.display = "block";
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  if (deferredPrompt) {
    // Show the browser's install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const userChoice = await deferredPrompt.userChoice;

    // Reset the deferredPrompt variable after user interaction
    deferredPrompt = null;

    // Hide the install button
    butInstall.style.display = "none";

    console.log("User choice:", userChoice);

    // Check if the user accepted the prompt
    if (userChoice.outcome === "accepted") {
      console.log("User accepted the install prompt");
    } else {
      console.log("User dismissed the install prompt");
    }
  }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  console.log("App installed:", event);
});
