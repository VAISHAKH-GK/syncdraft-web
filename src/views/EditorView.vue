<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import EditorCore from '@/components/editor/EditorCore.vue'
import EditorToolbar from '@/components/editor/EditorToolbar.vue'
import type { Editor } from '@tiptap/vue-3'

const editorRef = ref<InstanceType<typeof EditorCore> | null>(null)
const editor = ref<Editor | undefined>(undefined)
const docTitle = ref('Untitled document')
const saveStatus = ref<'saved' | 'saving' | 'unsaved'>('saved')

watch(editorRef, (val) => {
  if (val?.editor) {
    editor.value = val.editor as unknown as Editor
    editor.value?.on('update', () => {
      saveStatus.value = 'saving'
      setTimeout(() => saveStatus.value = 'saved', 1000)
    })
  }
})
</script>

<template>
  <div class="flex h-screen flex-col bg-background text-foreground overflow-hidden">

    <!-- Header -->
    <header class="flex h-14 shrink-0 items-center justify-between border-b border-border px-4 bg-background">
      <div class="flex items-center gap-3 min-w-0">
        <RouterLink
          to="/"
          class="flex shrink-0 items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          Docs
        </RouterLink>
        <span class="text-muted-foreground text-sm">/</span>
        <input
          v-model="docTitle"
          type="text"
          class="min-w-0 bg-transparent text-sm font-medium outline-none hover:text-foreground focus:text-foreground truncate"
        />
      </div>

      <div class="flex shrink-0 items-center gap-3">
        <!-- Save status -->
        <span class="flex items-center gap-1.5 text-xs text-muted-foreground">
          <span
            class="h-1.5 w-1.5 rounded-full"
            :class="{
              'bg-green-500': saveStatus === 'saved',
              'bg-yellow-500 animate-pulse': saveStatus === 'saving',
              'bg-red-500': saveStatus === 'unsaved',
            }"
          />
          {{ saveStatus === 'saved' ? 'Saved' : saveStatus === 'saving' ? 'Saving…' : 'Unsaved' }}
        </span>

        <!-- Mock collaborator avatars -->
        <div class="flex -space-x-2">
          <div class="h-7 w-7 rounded-full bg-blue-500 ring-2 ring-background flex items-center justify-center text-xs font-semibold text-white">A</div>
          <div class="h-7 w-7 rounded-full bg-emerald-500 ring-2 ring-background flex items-center justify-center text-xs font-semibold text-white">K</div>
        </div>

        <button class="rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90">
          Share
        </button>
      </div>
    </header>

    <!-- Toolbar -->
    <EditorToolbar :editor="editor" />

    <!-- Editor scroll area -->
    <main class="flex-1 overflow-y-auto">
      <!-- Page-like container -->
      <div class="mx-auto w-full max-w-3xl px-16 py-12">
        <!-- Document title in editor -->
        <input
          v-model="docTitle"
          type="text"
          placeholder="Untitled"
          class="mb-8 w-full bg-transparent text-4xl font-bold text-foreground outline-none placeholder:text-muted-foreground/40"
        />
        <!-- Tiptap -->
        <EditorCore ref="editorRef" />
      </div>
    </main>

  </div>
</template>