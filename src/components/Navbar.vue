<script setup>
import { ccsLogo } from '../assets/data'
</script>

<template>
  <header class="site-header">
    <div class="navbar page-width">
      <RouterLink class="brand" to="/#hero">
        <img :src="ccsLogo" alt="CCS logo" width="48" height="48" />
        <span>CPU College of Computer Studies</span>
      </RouterLink>

      <nav aria-label="Main navigation">
        <RouterLink to="/#hero">Home</RouterLink>
        <RouterLink to="/#programs">Programs Offered</RouterLink>
        <RouterLink to="/#faculty">Faculty and Staff</RouterLink>
        <RouterLink to="/#partnerships">Partnerships and Memberships</RouterLink>
      </nav>
    </div>
  </header>
</template>
