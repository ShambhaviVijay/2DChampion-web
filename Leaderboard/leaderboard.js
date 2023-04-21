// JavaScript code for sorting the leaderboard table
const leaderboardTable = document.querySelector("table");
const rows = Array.from(leaderboardTable.querySelectorAll("tbody tr"));

rows.sort((a, b) => {
  const scoreA = parseInt(a.querySelector("td:nth-child(3)").textContent);
  const scoreB = parseInt(b.querySelector("td:nth-child(3)").textContent);

  if (scoreA < scoreB) {
    return 1;
  } else if (scoreA > scoreB) {
    return -1;
  } else {
    return 0;
  }
});

rows.forEach((row, index) => {
  row.querySelector("td:nth-child(1)").textContent = index + 1;
  leaderboardTable.querySelector("tbody").appendChild(row);
});
