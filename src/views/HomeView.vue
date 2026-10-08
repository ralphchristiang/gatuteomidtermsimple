<script setup>
import { ccsLogo, programs, departments, partners } from '../assets/data'
</script>

<template>
  <!-- Section 1: college logo and welcome message. -->
  <section id="hero" class="hero">
    <div class="page-width">
      <img class="hero-logo" :src="ccsLogo" alt="College of Computer Studies logo" width="140" height="140" />
      <p class="university-name">Central Philippine University</p>
      <h1>College of Computer Studies</h1>
      <p class="hero-text">
        Welcome to the College of Computer Studies. Explore our programs, meet our faculty and
        staff, and learn about the organizations connected with our college.
      </p>
    </div>
  </section>

  <!-- Section 2: the four programs required by the assignment. -->
  <section id="programs" class="section">
    <div class="page-width">
      <h2>Programs Offered</h2>
      <p class="section-introduction">Choose a program that matches your interests and goals.</p>

      <div class="program-grid">
        <article v-for="program in programs" :key="program.code" class="card program-card">
          <img :src="program.logo" :alt="`${program.code} ${program.logoName} logo`" width="100" height="100" loading="lazy" />
          <h3>{{ program.code }}</h3>
          <p class="program-name">{{ program.name }}</p>
          <p>{{ program.description }}</p>
        </article>
      </div>
    </div>
  </section>

  <!-- Section 3: personnel are grouped by their published program assignments. -->
  <section id="faculty" class="section alternate-section">
    <div class="page-width">
      <h2>Faculty and Staff</h2>
      <p class="section-introduction">Meet the people featured in the official CCS directory.</p>
      <p class="directory-note">
        This directory uses published information. The current CCS Office organizational chart
        is still needed to confirm the complete roster, names, departments, and highest degrees.
      </p>

      <div v-for="department in departments" :key="department.name" class="department">
        <h3 class="department-title">{{ department.name }}</h3>

        <div class="faculty-grid">
          <article v-for="person in department.members" :key="person.name" class="card faculty-card">
            <img class="person-photo" :src="person.photo" :alt="`Photo of ${person.name}`" width="240" height="220" loading="lazy" />
            <div class="person-information">
              <h4>{{ person.name }}</h4>
              <p class="person-role">{{ person.role }}</p>
              <p><strong>Published education:</strong> {{ person.education }}</p>
              <p v-if="person.note" class="education-note">{{ person.note }}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 4: logos listed on the official college linkages page. -->
  <section id="partnerships" class="section">
    <div class="page-width">
      <h2>Partnerships and Memberships</h2>
      <p class="section-introduction">Organizations featured in the official CCS linkages directory.</p>

      <div class="partner-grid">
        <article v-for="partner in partners" :key="partner.name" class="card partner-card">
          <img :src="partner.logo" :alt="`${partner.name} logo`" width="180" height="90" loading="lazy" />
          <h3>{{ partner.name }}</h3>
        </article>
      </div>
      <p class="source-note">
        Source: <a href="https://ccs.cpu.edu.ph/linkages/" target="_blank" rel="noopener noreferrer">CCS Linkages</a>.
        Please confirm current agreements and memberships with the college.
      </p>
    </div>
  </section>
</template>
