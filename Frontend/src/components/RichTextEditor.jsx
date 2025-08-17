import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import {TextStyle} from "@tiptap/extension-text-style";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";

const RichTextEditor=()=> {
  const editor = useEditor({
    extensions: [StarterKit, Underline, Link, TextStyle, BulletList, OrderedList],
    content: "<p>Start writing your description...</p>",
  });

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
        className="p-3 min-h-[150px] focus:outline-none"
      />
    </div>
  );
}

export default RichTextEditor