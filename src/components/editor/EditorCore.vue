<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'

const editor = useEditor({
  extensions: [
    StarterKit,
    Placeholder.configure({
      placeholder: 'Start writing…',
    }),
  ],
  content: '',
  editorProps: {
    attributes: {
      class: 'prose prose-invert max-w-none focus:outline-none min-h-[70vh] px-2 py-4',
    },
  },
})

defineExpose({ editor })
</script>

<template>
  <div class="w-full">
    <EditorContent :editor="editor" />
  </div>
</template>