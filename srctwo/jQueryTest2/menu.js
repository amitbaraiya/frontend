
menu = [
    {id: 1, name: "Mail", icon: "fa fa-envelope-open-o", pid: 0},
    {id: 2, name: "Inbox", icon: "fa fa-folder-open-o", pid: 0},
    {id: 3, name: "Favorites", icon: "fa fa-diamond", pid: 0},
    {id: 4, name: "Notes", icon: "fa fa-comment", pid: 0},
    {id: 5, name: "Settings", icon: "fa fa-cogs", pid: 0},
    {id: 6, name: "Devices", icon: "fa fa-desktop", pid: 0},
    {id: 7, name: "Deleted Items", icon: "fa fa-trash-o", pid: 0},
    {id: 8, name: "Offer", icon: "fa fa-bell-o", pid: 1},
    {id: 9, name: "Contact", icon: "fa fa-address-book-o", pid: 1},
    {id: 10, name: "Calendar", icon: "fa fa-calendar", pid: 1},
    {id: 11, name: "Deadlines", icon: "fa fa-clock-o", pid: 10},
    {id: 12, name: "Meetings", icon: "fa fa-users", pid: 10},
    {id: 13, name: "Workouts", icon: "fa fa-briefcase", pid: 10},
    {id: 14, name: "Events", icon: "fa fa-coffee", pid: 10},
    {id: 15, name: "Admin", icon: "fa fa-folder-open-o", pid: 2},
    {id: 16, name: "Corporate", icon: "fa fa-folder-open-o", pid: 2},
    {id: 17, name: "Finance", icon: "fa fa-folder-open-o", pid: 2},
    {id: 18, name: "Other", icon: "fa fa-folder-open-o", pid: 2},
    {id: 19, name: "Restaurant", icon: "fa fa-cutlery", pid: 3},
    {id: 20, name: "Places", icon: "fa fa-eye", pid: 3},
    {id: 21, name: "Games", icon: "fa fa-gamepad", pid: 3},
    {id: 22, name: "Cocktails", icon: "fa fa-glass", pid: 3},
    {id: 23, name: "Food", icon: "fa fa-apple", pid: 3},
]

data = [
  {
    id: ["Mail", "fa fa-envelope-open-o"],
    sub: [
      { id: ["Offer", "fa fa-bell-o"] },
      { id: ["Contact", "fa fa-address-book-o"] },
      {
        id: ["Calender", "fa fa-calendar"],
        sub: [
          { id: ["Deadlines", "fa fa-clock-o"] },
          { id: ["Meetings", "fa fa-users"] },
          { id: ["Workouts", "fa fa-briefcase"] },
          { id: ["Events", "fa fa-coffee"] },
        ],
      },
    ],
  },
  {
    id: ["Inbox", "fa fa-folder-open-o"],
    sub: [
      { id: ["Admin", "fa fa-folder-open-o"] },
      { id: ["Corporate", "fa fa-folder-open-o"] },
      { id: ["Finance", "fa fa-folder-open-o"] },
      { id: ["Other", "fa fa-folder-open-o"] },
    ],
  },
  {
    id: ["Favourites", "fa fa-diamond"],
    sub: [
      { id: ["Restaurant", "fa fa-cutlery"] },
      { id: ["Places", "fa fa-eye"] },
      { id: ["Games", "fa fa-gamepad"] },
      { id: ["Coctails", "fa fa-glass"] },
      { id: ["Food", "fa fa-apple"] },
    ],
  },
  { id: ["Notes", "fa fa-comment"] },
  { id: ["Settings", "fa fa-cogs"] },
  { id: ["Devices", "fa fa-desktop"] },
  { id: ["Delete Items", "fa fa-trash-o"] },
];
