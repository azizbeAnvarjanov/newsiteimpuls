"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const RichTextEditor = ({ content, onChange }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class: "h-[400px] p-2",
      },
    },
    content: content,
    onUpdate: ({ editor }) => {
      const plainTextContent = editor.getText(); // Get plain text without HTML
      onChange(plainTextContent); // Pass plain text back to parent component
    },
  });

  if (!editor) return null;

  return (
    <div className="border rounded">
      <EditorContent editor={editor} />
    </div>
  );
};

export default RichTextEditor;
