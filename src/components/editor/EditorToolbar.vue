<script setup lang="ts">
import type { Editor } from '@tiptap/vue-3'

const props = defineProps<{ editor: Editor | undefined }>()

const btn = `
  rounded p-1.5 text-muted-foreground transition-colors
  hover:bg-muted hover:text-foreground
  disabled:opacity-30 disabled:cursor-not-allowed
`
const active = `bg-muted text-foreground`

function is(name: string, attrs?: object) {
  return props.editor?.isActive(name, attrs) ?? false
}
</script>

<template>
  <div
    v-if="editor"
    class="flex flex-wrap items-center gap-0.5 border-b border-border bg-background px-4 py-2"
  >
    <!-- Undo / Redo -->
    <button
      :class="btn"
      title="Undo"
      :disabled="!editor.can().undo()"
      @click="editor.chain().focus().undo().run()"
    >
      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7h10a5 5 0 0 1 0 10H3"/><polyline points="7 3 3 7 7 11"/></svg>
    </button>
    <button
      :class="btn"
      title="Redo"
      :disabled="!editor.can().redo()"
      @click="editor.chain().focus().redo().run()"
    >
      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 7H11a5 5 0 0 0 0 10h10"/><polyline points="17 3 21 7 17 11"/></svg>
    </button>

    <div class="mx-1 h-5 w-px bg-border" />

    <!-- Headings -->
    <button
      :class="[btn, is('heading', { level: 1 }) ? active : '']"
      title="Heading 1"
      @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
    >
      <span class="text-xs font-bold">H1</span>
    </button>
    <button
      :class="[btn, is('heading', { level: 2 }) ? active : '']"
      title="Heading 2"
      @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
    >
      <span class="text-xs font-bold">H2</span>
    </button>
    <button
      :class="[btn, is('heading', { level: 3 }) ? active : '']"
      title="Heading 3"
      @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
    >
      <span class="text-xs font-bold">H3</span>
    </button>

    <div class="mx-1 h-5 w-px bg-border" />

    <!-- Inline formatting -->
    <button
      :class="[btn, is('bold') ? active : '']"
      title="Bold"
      @click="editor.chain().focus().toggleBold().run()"
    >
      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 4h8a4 4 0 0 1 0 8H6z"/><path d="M6 12h9a4 4 0 0 1 0 8H6z"/></svg>
    </button>
    <button
      :class="[btn, is('italic') ? active : '']"
      title="Italic"
      @click="editor.chain().focus().toggleItalic().run()"
    >
      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="4" x2="10" y2="4"/><line x1="14" y1="20" x2="5" y2="20"/><line x1="15" y1="4" x2="9" y2="20"/></svg>
    </button>
    <button
      :class="[btn, is('strike') ? active : '']"
      title="Strikethrough"
      @click="editor.chain().focus().toggleStrike().run()"
    >
      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><path d="M16 6C16 6 14.5 4 12 4C9.5 4 7 5.5 7 8C7 10.5 9 11.5 12 12"/><path d="M8 18C8 18 9.5 20 12 20C14.5 20 17 18.5 17 16C17 13.5 15 12.5 12 12"/></svg>
    </button>
    <button
      :class="[btn, is('code') ? active : '']"
      title="Inline code"
      @click="editor.chain().focus().toggleCode().run()"
    >
      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
    </button>

    <div class="mx-1 h-5 w-px bg-border" />

    <!-- Lists -->
    <button
      :class="[btn, is('bulletList') ? active : '']"
      title="Bullet list"
      @click="editor.chain().focus().toggleBulletList().run()"
    >
      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="9" y1="6" x2="20" y2="6"/><line x1="9" y1="12" x2="20" y2="12"/><line x1="9" y1="18" x2="20" y2="18"/><circle cx="4" cy="6" r="1" fill="currentColor"/><circle cx="4" cy="12" r="1" fill="currentColor"/><circle cx="4" cy="18" r="1" fill="currentColor"/></svg>
    </button>
    <button
      :class="[btn, is('orderedList') ? active : '']"
      title="Ordered list"
      @click="editor.chain().focus().toggleOrderedList().run()"
    >
      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="10" y1="6" x2="21" y2="6"/><line x1="10" y1="12" x2="21" y2="12"/><line x1="10" y1="18" x2="21" y2="18"/><path d="M4 6h1v4"/><path d="M4 10h2"/><path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"/></svg>
    </button>
    <button
      :class="[btn, is('blockquote') ? active : '']"
      title="Blockquote"
      @click="editor.chain().focus().toggleBlockquote().run()"
    >
      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
    </button>
    <button
      :class="[btn, is('codeBlock') ? active : '']"
      title="Code block"
      @click="editor.chain().focus().toggleCodeBlock().run()"
    >
      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="m8 10-3 3 3 3"/><path d="m16 10 3 3-3 3"/><path d="m12 7-2 10"/></svg>
    </button>

    <div class="mx-1 h-5 w-px bg-border" />

    <!-- Horizontal rule -->
    <button
      :class="btn"
      title="Divider"
      @click="editor.chain().focus().setHorizontalRule().run()"
    >
      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/></svg>
    </button>
  </div>
</template>