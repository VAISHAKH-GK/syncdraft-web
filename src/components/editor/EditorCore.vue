<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'

const editor = useEditor({
  extensions: [
    StarterKit,
    Placeholder.configure({
      placeholder: 'Start writing, or press / for commands…',
    }),
  ],
  content: '',
  editorProps: {
    attributes: {
      class: 'prose-editor focus:outline-none min-h-[80vh]',
    },
  },
})

defineExpose({ editor })
</script>

<template>
  <EditorContent :editor="editor" />
</template>