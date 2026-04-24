<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import EditorCore from '@/components/editor/EditorCore.vue'
import EditorToolbar from '@/components/editor/EditorToolbar.vue'
import type { Editor } from '@tiptap/vue-3'

const editorRef = ref<InstanceType<typeof EditorCore> | null>(null)
const editor = ref<Editor | undefined>(undefined)

function onEditorReady() {
  editor.value = editorRef.value?.editor?.value
}
</script>

<template>
  <div class="flex h-screen flex-col bg-background text-foreground">

    <!-- Header -->
    <header class="flex h-12 items-center justify-between border-b border-border bg-background px-4">
      <!-- Left: back + doc title -->
      <div class="flex items-center gap-3">
        <RouterLink
          to="/"
          class="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
          Docs
        </RouterLink>
        <span class="text-muted-foreground">/</span>
        <input
          type="text"
          defaultValue="Untitled document"
          class="bg-transparent text-sm font-medium outline-none placeholder:text-muted-foreground hover:text-foreground focus:text-foreground"
        />
      </div>

      <!-- Right: status + share -->
      <div class="flex items-center gap-3">
        <span class="text-xs text-muted-foreground">Saved</span>
        <button
          class="rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Share
        </button>
      </div>
    </header>

    <!-- Toolbar -->
    <EditorToolbar :editor="editor" />

    <!-- Editor area -->
    <main class="flex-1 overflow-y-auto">
      <div class="mx-auto max-w-3xl px-8 py-10">
        <EditorCore
          ref="editorRef"
          @vue:mounted="onEditorReady"
        />
      </div>
    </main>

  </div>
</template>