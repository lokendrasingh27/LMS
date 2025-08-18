import React, { useEffect } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import {TextStyle} from "@tiptap/extension-text-style"; // fix import (no curly braces)
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";

const RichTextEditor = ({ input, setInput }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      TextStyle,
      BulletList,
      OrderedList,
    ],
    content: input.description || "<p>Start writing your description...</p>", // load existing value
    onUpdate: ({ editor }) => {
      const html = editor.getHTML(); // get live HTML value
      setInput({ ...input, description: html });
    },
  });

  // ✅ Update editor if input.description changes from outside (DB fetch, reset, etc.)
  useEffect(() => {
    if (editor && input.description !== editor.getHTML()) {
      editor.commands.setContent(input.description || "<p></p>");
    }
  }, [input.description, editor]);

  if (!editor) return null;

  return (
    <div className="border h-[20vh] rounded-lg">
      {/* Toolbar */}
      <div className="flex items-center h-fit gap-2 border-b p-2 bg-gray-50">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-2 py-1 rounded ${editor.isActive("bold") ? "bg-gray-300" : ""}`}
        >
          <b>B</b>
        </button>

        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-2 py-1 rounded ${editor.isActive("italic") ? "bg-gray-300" : ""}`}
        >
          <i>I</i>
        </button>

        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`px-2 py-1 rounded ${editor.isActive("underline") ? "bg-gray-300" : ""}`}
        >
          <u>U</u>
        </button>

        <button
          onClick={() => {
            const url = prompt("Enter URL");
            if (url) editor.chain().focus().setLink({ href: url }).run();
          }}
          className={`px-2 py-1 rounded ${editor.isActive("link") ? "bg-gray-300" : ""}`}
        >
          🔗
        </button>
      </div>

      {/* Editor */}
      <EditorContent
        editor={editor}
        className="p-4 h-[80px]  break-words [&_.ProseMirror]:focus:outline-none overflow-y-auto [&_.ProseMirror]:min-h-[15px] [&_.ProseMirror]:px-4"
      />
    </div>
  );
};

export default RichTextEditor;
