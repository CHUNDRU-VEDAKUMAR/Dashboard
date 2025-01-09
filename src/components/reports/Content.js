export const chartTitle = "Student Results by Department";

export const chartLabels = [
  "Math",
  "Science",
  "English",
  "History",
  "Physics",
  "Chemistry",
  "Biology",
];

export const chartDatasets = [
  {
    label: "CSE Department",
    data: [85, 90, 78, 88, 92, 84, 76],
    borderColor: "rgb(75, 192, 192)",
    backgroundColor: "rgba(75, 192, 192, 0.2)",
    tension: 0.4,
  },
  {
    label: "ECE Department",
    data: [80, 85, 74, 82, 89, 80, 70],
    borderColor: "rgb(255, 99, 132)",
    backgroundColor: "rgba(255, 99, 132, 0.2)",
    tension: 0.4,
  },
];
