<script setup lang="ts">
import { RouterLink } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <AppHeader />

    <main class="pt-16">

      <!-- Hero -->
      <section class="mx-auto max-w-6xl px-6 py-24 text-center">
        <div class="mb-4 inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground">
          Real-time collaboration
        </div>
        <h1 class="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
          Write together,<br />
          <span class="text-primary">without the conflict</span>
        </h1>
        <p class="mx-auto mb-10 max-w-xl text-lg text-muted-foreground">
          SyncDraft lets your team edit documents simultaneously with live cursors,
          instant sync, and zero version conflicts.
        </p>
        <div class="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <RouterLink
            to="/editor/"
            class="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Open Editor
          </RouterLink>
          <a
            href="#features"
            class="rounded-md border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-muted"
          >
            See features
        </a>
        </div>
      </section>

      <!-- Features -->
      <section id="features" class="border-t border-border bg-muted/40 py-24">
        <div class="mx-auto max-w-6xl px-6">
          <h2 class="mb-12 text-center text-3xl font-bold tracking-tight">
            Everything your team needs
          </h2>
          <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="feature in features"
              :key="feature.title"
              class="rounded-xl border border-border bg-background p-6"
            >
              <div class="mb-3 text-2xl">{{ feature.icon }}</div>
              <h3 class="mb-2 font-semibold">{{ feature.title }}</h3>
              <p class="text-sm text-muted-foreground">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- How it works -->
      <section id="how-it-works" class="py-24">
        <div class="mx-auto max-w-6xl px-6">
          <h2 class="mb-12 text-center text-3xl font-bold tracking-tight">
            How it works
          </h2>
          <div class="grid gap-8 md:grid-cols-3">
            <div v-for="(step, i) in steps" :key="step.title" class="text-center">
              <div class="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {{ i + 1 }}
              </div>
              <h3 class="mb-2 font-semibold">{{ step.title }}</h3>
              <p class="text-sm text-muted-foreground">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Banner -->
      <section class="border-t border-border bg-muted/40 py-24">
        <div class="mx-auto max-w-xl px-6 text-center">
          <h2 class="mb-4 text-3xl font-bold tracking-tight">Ready to write together?</h2>
          <p class="mb-8 text-muted-foreground">
            Jump straight into the editor — no account needed to prototype.
          </p>
          <RouterLink
            to="/editor/"
            class="rounded-md bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Open Editor
          </RouterLink>
        </div>
      </section>

    </main>

    <AppFooter />
  </div>
</template>

<script lang="ts">
const features = [
  {
    icon: '⚡',
    title: 'Real-time sync',
    description: 'Every keystroke syncs instantly across all connected editors with no delay.',
  },
  {
    icon: '👥',
    title: 'Live cursors',
    description: 'See exactly where your teammates are and what they\'re working on.',
  },
  {
    icon: '🔒',
    title: 'No version conflicts',
    description: 'CRDT-powered conflict resolution means edits never overwrite each other.',
  },
  {
    icon: '📝',
    title: 'Rich text editing',
    description: 'Headings, lists, code blocks, images, callouts — everything you need.',
  },
  {
    icon: '💬',
    title: 'Inline comments',
    description: 'Leave feedback directly on text without cluttering the document.',
  },
  {
    icon: '🕒',
    title: 'Version history',
    description: 'Every change is recorded. Restore any previous snapshot in one click.',
  },
]

const steps = [
  {
    title: 'Create a document',
    description: 'Open a new doc from your dashboard in seconds.',
  },
  {
    title: 'Invite your team',
    description: 'Share a link or invite by email with role-based permissions.',
  },
  {
    title: 'Write together',
    description: 'Edit simultaneously with live presence and instant sync.',
  },
]
</script>