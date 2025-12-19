function updateDateTime() {
  const now = new Date();

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  };

  const formattedDateTime = now.toLocaleString('en-US', options);

  document.getElementById("datetime").textContent = formattedDateTime;
}

// Run immediately
updateDateTime();

// Update every second
setInterval(updateDateTime, 1000);

