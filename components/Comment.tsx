interface Comment {
  username: string;
  avatar: string;
  text: string;
}

const comments: Comment[] = [
  {
    username: "Orlandin",
    avatar: "https://i.pravatar.cc/80?img=10",
    text: "Nossa, eu sou fã número 1 do João! Adoro 💅",
  },
  {
    username: "XxDarkKnightxX",
    avatar: "https://i.pravatar.cc/80?img=5",
    text: "Nossa, adorei o blog! Muito anos 2000 vibes 😎",
  },
  {
    username: "PikachuFan99",
    avatar: "https://i.pravatar.cc/80?img=3",
    text: "Que nostalgia, me senti no Orkut de novo 😂",
  },
  {
    username: "NeoMatrix2004",
    avatar: "https://i.pravatar.cc/80?img=7",
    text: "Coloca mais gifs e música, isso é vida!",
  },
];

export default function CommentSection() {
  return (
    <div className="w-full mx-auto mt-12 p-6 bg-black/80 border-4 border-green-500 shadow-[8px_8px_0px_black] rounded-lg">
      <h3 className="text-3xl font-bold text-green-400 mb-6">💬 Comentários</h3>
      <div className="flex flex-col gap-6">
        {comments.map((c, index) => (
          <div
            key={index}
            className="flex gap-5 bg-black/90 border-2 border-green-400 p-5 rounded-lg shadow-[3px_3px_0px_black]"
          >
            <img
              src={c.avatar}
              alt={c.username}
              className="w-20 h-20 rounded-full border-2 border-green-300"
            />
            <div>
              <p className="font-bold text-green-300 text-2xl">{c.username}</p>
              <p className="text-green-200 text-xl mt-1">{c.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
