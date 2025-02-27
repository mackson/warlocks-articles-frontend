"use client";

import { useState } from "react";
import { commentsMock } from "@/mocks/comments";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { HeartIcon, MessageCircle } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import {CommentType} from "@/types/comment";

export const CommentSection = () => {
  const [comments, setComments] = useState(commentsMock);
  const [newComment, setNewComment] = useState("");

  const handleLike = (commentId: string) => {
    setComments((prev) =>
      prev.map((comment) =>
        comment.id === commentId
          ? { ...comment, likes: comment.likes + 1 }
          : comment
      )
    );
  };

  const handleCommentSubmit = () => {
    if (newComment.trim() === "") return;
    const newCommentObj = {
      id: `${comments.length + 1}`,
      author: {
        name: "New User",
        avatar: "https://randomuser.me/api/portraits/men/5.jpg",
      },
      date: "Just now",
      content: newComment,
      likes: 0,
      replies: [],
    };

    setComments([newCommentObj, ...comments]);
    setNewComment("");
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      {/* Campo de Novo Comentário */}
      <div className="flex flex-col gap-2 mb-6">
        <Textarea
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="resize-none border border-gray-300 rounded-md p-2"
        />
        <Button onClick={handleCommentSubmit} className="self-end">
          Post Comment
        </Button>
      </div>

      {/* Lista de Comentários */}
      <div className="flex flex-col gap-6">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} onLike={handleLike} isFirstReply />
        ))}
      </div>
    </div>
  );
};

const Comment = ({
  comment,
  onLike,
  isFirstReply = false,
}: {
  comment: CommentType;
  onLike: (id: string) => void;
  isFirstReply?: boolean;
}) => {
  const [expanded, setExpanded] = useState(false);
  const [showReplies, setShowReplies] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [replies, setReplies] = useState(comment.replies || []);

  const handleReplySubmit = () => {
    if (replyText.trim() === "") return;
    const newReply = {
      id: `${comment.id}-${replies.length + 1}`,
      author: {
        name: "New User",
        avatar: "https://randomuser.me/api/portraits/men/6.jpg",
      },
      date: "Just now",
      content: replyText,
      likes: 0,
      replies: [], // Garantimos que um reply não pode ter mais replies
    };

    setReplies([newReply, ...replies]);
    setReplyText("");
  };

  return (
    <div className={`flex flex-col gap-2 ${isFirstReply ? "ml-10" : ""} border-b border-gray-200 pb-4`}>
      {/* Avatar e Nome */}
      <div className="flex items-center gap-3">
        <Avatar className="h-8 w-8">
          <AvatarImage src={comment.author.avatar} />
          <AvatarFallback>{comment.author.name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">{comment.author.name}</p>
          <p className="text-xs text-gray-500">{comment.date}</p>
        </div>
      </div>

      {/* Conteúdo do Comentário */}
      <p className="text-sm text-gray-700">
        {expanded ? comment.content : `${comment.content.slice(0, 200)}... `}
        {comment.content.length > 200 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-blue-500 text-sm"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
      </p>

      {/* Botões de Ação */}
      <div className="flex items-center gap-4 text-gray-500 text-sm">
        <button onClick={() => onLike(comment.id)} className="flex items-center gap-1">
          <HeartIcon className="w-4 h-4" /> {comment.likes}
        </button>
        {/* Só exibe o botão Reply se for um comentário principal */}
        {isFirstReply && (
          <button onClick={() => setShowReplies(!showReplies)} className="flex items-center gap-1">
            <MessageCircle className="w-4 h-4" /> {showReplies ? "Hide Replies" : "Reply"}
          </button>
        )}
      </div>

      {/* Seção de Replies */}
      {showReplies && (
        <div className="mt-3 flex flex-col gap-3 ml-10">
          <div className="flex flex-col gap-2">
            <Textarea
              placeholder="Write a reply..."
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              className="resize-none border border-gray-300 rounded-md p-2"
            />
            <Button onClick={handleReplySubmit} className="self-end">
              Reply
            </Button>
          </div>

          {/* Lista de Replies */}
          {replies?.length > 0 &&
            replies.map((reply: CommentType) => (
              <Comment key={reply.id} comment={reply} onLike={onLike} isFirstReply={false} />
            ))}
        </div>
      )}
    </div>
  );
};
