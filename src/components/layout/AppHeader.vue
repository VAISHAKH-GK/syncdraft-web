<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-2">
        <img src="/favicon.svg" alt="SyncDraft" class="h-8 w-8" />
        <span class="text-lg font-semibold tracking-tight">SyncDraft</span>
      </RouterLink>

      <!-- Nav -->
      <nav class="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
        <a href="#features" class="transition-colors hover:text-foreground">Features</a>
        <a href="#how-it-works" class="transition-colors hover:text-foreground">How it works</a>
      </nav>

      <!-- CTA -->
      <div class="flex items-center gap-3">
        <RouterLink
          to="/editor/"
          class="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Try it free
        </RouterLink>
      </div>
    </div>
  </header>
</template>