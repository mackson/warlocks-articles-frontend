export const commentsMock = [
  {
    id: "1",
    author: {
      name: "Colin O'Driscoll",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    date: "3 days ago",
    content:
      "But Linus hasn’t rejected Rust in the kernel. The extent of its use is the subject of a heated debate. At first sight, the objections to C++ might also hold for Rust - such as complexity, the overheads of abstraction. Rust however has stripped out...",
    likes: 74,
    replies: [
      {
        id: "1-1",
        author: {
          name: "Chris",
          avatar: "https://randomuser.me/api/portraits/men/2.jpg",
        },
        date: "1 day ago",
        content:
          "That's like exactly what the author wrote. (Wondering if you actually read it, or just immediately commented on the title.)",
        likes: 19,
      },
    ],
  },
  {
    id: "2",
    author: {
      name: "Cody Dai",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    date: "3 days ago",
    content:
      "I started working as a software engineer in Silicon Valley in 2022, primarily focusing on embedded systems. Every day, I write OOP code, and from my personal experience, good positions in this field still require strong C++ skills.",
    likes: 79,
    replies: [],
  },
  {
    id: "3",
    author: {
      name: "Dr Dumisani Dlamini",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    date: "3 days ago",
    content:
      "Linus Torvalds, the creator of Linux, has been outspoken about his dislike for C++ in kernel development. While C and C++ are closely related, with C++ offering object-oriented features like constructors, destructors, and exception handling...",
    likes: 38,
    replies: [],
  },
];
