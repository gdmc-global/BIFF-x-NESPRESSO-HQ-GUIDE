// BIFF x NESPRESSO HQ — production schedule, per team.
// Extracted directly from slide XML shape positions (not the linear text
// order) so each entry is attributed to its correct day column.
// time: "" means the entry has no clock time (e.g. "Anytime", "Drone").
const SCHEDULE = {
  hq: {
    label: "HQ",
    days: {
      day0: [
        { time: "11:00~", title: "Venue Pre-visit (All teams)", location: "All Venues" },
      ],
      day1: [
        { time: "After 15:00", title: "Clean Cut (Bard)", location: "Main Lobby Pop-up zone" },
        { time: "After 16:00", title: "Clean Cut (Bard)", location: "Guest Lounge" },
      ],
      day2: [
        { time: "10:15–10:30 (15min)", title: "Getting Ready (Win)", location: "Paradise Room" },
        { time: "11:30–12:00 (30min)", title: "Sketch (Win)", location: "Main Lobby Pop-up zone" },
        { time: "12:00–12:30 (30min)", title: "Sketch (Win)", location: "Guest Lounge" },
        { time: "12:30–13:00 (30min)", title: "Tiktok (Jenny Park) · VX Media", location: "Main Lobby Pop-up zone" },
        { time: "13:00–14:00 (60min)", title: "HMU", location: "Paradise Hotel in Room" },
        { time: "14:00–14:30 (30min)", title: "Sketch (Tiffany)", location: "Main Lobby Pop-up zone" },
        { time: "15:15–15:30 (15min)", title: "Sketch (Tiffany)", location: "Guest Lounge" },
        { time: "15:30–16:00 (30min)", title: "Clean Cut (Bard)", location: "Reception Party" },
        { time: "15:30–18:30 (180min)", title: "Celeb Photowall (Win)", location: "Reception Party" },
        { time: "16:15–16:30 (15min)", title: "Glambot (Tiffany)", location: "Reception Party" },
        { time: "18:00–21:00 (180min)", title: "BIFF Redcarpet", location: "BIFF Redcarpet" },
      ],
      day3: [
        { time: "Anytime (freely)", title: "Sketch (Public) · internal use", location: "Main Lobby Pop-up zone" },
        { time: "Anytime (freely)", title: "Sketch (Public) · internal use", location: "Guest Lounge" },
        { time: "", title: "Dinner with France Team", location: "Time & place TBU" },
      ],
      day4: [
        { time: "11:15–11:30 (15min)", title: "Interview (Win) · TH media, Vandy TBD", location: "Paradise Suite Room" },
        { time: "12:00–12:45 (45min)", title: "Interview (Kim go eun) · FR / TH media", location: "Paradise Suite Room" },
        { time: "12:45–13:45 (60min)", title: "Transfer", location: "", transfer: true },
        { time: "14:00–14:25 (25min)", title: "Kim go eun", location: "Main Lobby Pop-up zone" },
        { time: "14:25–14:35 (10min)", title: "Kim & Win", location: "Main Lobby Pop-up zone" },
        { time: "14:35–14:45 (10min)", title: "Transfer", location: "", transfer: true },
        { time: "14:45–15:00 (15min)", title: "Kim & Bard", location: "Guest Lounge" },
        { time: "", title: "Dinner with France Team", location: "Time & place TBU" },
      ],
      day5: [
        { time: "13:20–14:10 (50min)", title: "Morning Coffee Moment (Kim go eun)", location: "Paradise Suite Room" },
        { time: "14:10–15:00 (50min)", title: "Coffee Recipe (Kim go eun)", location: "Paradise Suite Room" },
      ],
      day6: [
        { time: "Time pending", title: "", location: "Bexco" },
      ],
    },
  },

  vandy: {
    label: "Vandy",
    days: {
      day0: [
        { time: "11:00~", title: "Venue Pre-visit (All teams)", location: "All Venues" },
      ],
      day1: [
        { time: "After 15:00", title: "Clean Cut (Bard)", location: "Main Lobby Pop-up zone" },
        { time: "After 16:00", title: "Clean Cut (Bard)", location: "Guest Lounge" },
        { time: "Drone", title: "15:00 – 19:00", location: "" },
      ],
      day2: [
        { time: "10:00~", title: "Redcarpet drop zone — slot drawing", location: "" },
        { time: "10:15–10:30 (15min)", title: "Getting Ready (Win)", location: "Paradise Room" },
        { time: "11:30–12:00 (30min)", title: "Sketch (Win)", location: "Main Lobby Pop-up zone" },
        { time: "12:00–12:30 (30min)", title: "Sketch (Win)", location: "Guest Lounge" },
        { time: "14:00–14:30 (30min)", title: "Sketch (Tiffany)", location: "Main Lobby Pop-up zone" },
        { time: "15:15–15:30 (15min)", title: "Sketch (Tiffany)", location: "Guest Lounge" },
        { time: "15:30–16:00 (30min)", title: "Clean Cut (Bard)", location: "Reception Party" },
        { time: "15:30–18:30 (180min)", title: "Celeb Photowall (Win)", location: "Reception Party" },
        { time: "16:15–16:30 (15min)", title: "Glambot (Tiffany)", location: "Reception Party" },
        { time: "16:00~", title: "Redcarpet drop zone — prepare for shooting", location: "" },
        { time: "18:00–21:00 (180min)", title: "BIFF Redcarpet", location: "BIFF Redcarpet" },
        { time: "Drone", title: "17:30 – 19:00", location: "" },
      ],
      day3: [
        { time: "Anytime (freely)", title: "Sketch (Public) · internal use", location: "Main Lobby Pop-up zone" },
        { time: "Anytime (freely)", title: "Sketch (Public) · internal use", location: "Guest Lounge" },
        { time: "Afternoon", title: "Vandy Setting", location: "Paradise" },
        { time: "Drone", title: "10:00 – 19:00", location: "" },
      ],
      day4: [
        { time: "11:15–11:30 (15min)", title: "Interview (Win) · TH media, Vandy TBD", location: "Paradise Suite Room" },
        { time: "12:00–12:45 (45min)", title: "Interview (Kim go eun) · FR / TH media", location: "Paradise Suite Room" },
        { time: "12:45–13:45 (60min)", title: "Transfer", location: "", transfer: true },
        { time: "14:00–14:25 (25min)", title: "Kim go eun", location: "Main Lobby Pop-up zone" },
        { time: "14:25–14:35 (10min)", title: "Kim & Win", location: "Main Lobby Pop-up zone" },
        { time: "14:35–14:45 (10min)", title: "Transfer", location: "", transfer: true },
        { time: "14:45–15:00 (15min)", title: "Kim & Bard", location: "Guest Lounge" },
        { time: "Evening (or 10/9 morning)", title: "Vandy Setting", location: "Paradise" },
      ],
      day5: [
        { time: "13:20–14:10 (50min)", title: "Morning Coffee Moment (Kim go eun)", location: "Paradise Suite Room" },
        { time: "14:10–15:00 (50min)", title: "Coffee Recipe (Kim go eun)", location: "Paradise Suite Room" },
      ],
      day6: [
        { time: "Time pending", title: "", location: "Bexco" },
        { time: "Drone", title: "10:00 – 19:00", location: "" },
      ],
    },
  },

  photo: {
    label: "Photo",
    days: {
      day0: [
        { time: "11:00~", title: "Venue Pre-visit (All teams)", location: "All Venues" },
      ],
      day1: [
        { time: "After 15:00", title: "Clean Cut (Bard)", location: "Main Lobby Pop-up zone" },
        { time: "After 16:00", title: "Clean Cut (Bard)", location: "Guest Lounge" },
      ],
      day2: [
        { time: "10:00~", title: "Redcarpet drop zone — slot drawing", location: "" },
        { time: "15:30–16:00 (30min)", title: "Clean Cut (Bard)", location: "Reception Party" },
        { time: "15:30–18:30 (180min)", title: "Celeb Photowall (Win)", location: "Reception Party" },
        { time: "16:15–16:30 (15min)", title: "Glambot (Tiffany)", location: "Reception Party" },
        { time: "16:00~", title: "Redcarpet drop zone — prepare for shooting", location: "" },
        { time: "18:00–21:00 (180min)", title: "BIFF Redcarpet", location: "BIFF Redcarpet" },
      ],
      day3: [
        { time: "Anytime (freely)", title: "Sketch (Public) · internal use", location: "Main Lobby Pop-up zone" },
        { time: "Anytime (freely)", title: "Sketch (Public) · internal use", location: "Guest Lounge" },
      ],
      day4: [
        { time: "14:00–14:25 (25min)", title: "Kim go eun", location: "Main Lobby Pop-up zone" },
        { time: "14:25–14:35 (10min)", title: "Kim & Win", location: "Main Lobby Pop-up zone" },
        { time: "14:35–14:45 (10min)", title: "Transfer", location: "", transfer: true },
        { time: "14:45–15:00 (15min)", title: "Kim & Bard", location: "Guest Lounge" },
      ],
      day5: [
        { time: "13:20–14:10 (50min)", title: "Morning Coffee Moment (Kim go eun)", location: "Paradise Suite Room" },
        { time: "14:10–15:00 (50min)", title: "Coffee Recipe (Kim go eun)", location: "Paradise Suite Room" },
      ],
      day6: [
        { time: "Time pending", title: "", location: "Bexco" },
      ],
    },
  },

  vx: {
    label: "VX",
    days: {
      day0: [
        { time: "11:00~", title: "Venue Pre-visit (All teams)", location: "All Venues" },
      ],
      day1: [
        { time: "", title: "No schedule", location: "" },
      ],
      day2: [
        { time: "11:30–12:00 (30min)", title: "Sketch (Win)", location: "Main Lobby Pop-up zone" },
        { time: "12:00–12:30 (30min)", title: "Sketch (Win)", location: "Guest Lounge" },
        { time: "12:30–13:00 (30min)", title: "Tiktok (Jenny Park)", location: "Main Lobby Pop-up zone" },
        { time: "15:30–18:30 (180min)", title: "Celeb Photowall (Win)", location: "Reception Party" },
        { time: "16:15–16:30 (15min)", title: "Glambot (Tiffany)", location: "Reception Party" },
        { time: "18:00–21:00 (180min)", title: "BIFF Redcarpet", location: "BIFF Redcarpet" },
      ],
      day3: [
        { time: "Anytime (freely)", title: "Sketch (Public) · internal use", location: "Main Lobby Pop-up zone" },
        { time: "Anytime (freely)", title: "Sketch (Public) · internal use", location: "Guest Lounge" },
      ],
      day4: [
        { time: "", title: "No schedule", location: "" },
      ],
      day5: [
        { time: "13:00–13:20 (20min)", title: "TikTok 'I can't choose' (Kim go eun)", location: "Paradise Suite Room" },
      ],
      day6: [
        { time: "", title: "N/A", location: "" },
      ],
    },
  },
};

const DAY_LABELS = {
  day0: { no: "Day 0", date: "10/4, Sun" },
  day1: { no: "Day 1", date: "10/5, Mon" },
  day2: { no: "Day 2", date: "10/6, Tue" },
  day3: { no: "Day 3", date: "10/7, Wed" },
  day4: { no: "Day 4", date: "10/8, Thu" },
  day5: { no: "Day 5", date: "10/9, Fri" },
  day6: { no: "Day 6", date: "10/10, Sat" },
};
