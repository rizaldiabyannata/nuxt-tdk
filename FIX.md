# Code Review and Fixes

This document outlines the changes made to the codebase after a thorough review. The goal was to improve code consistency, cleanliness, and maintainability.

## Summary of Changes

1.  **API Consistency:** All Vue components have been standardized to use the **Options API**. Components that were using the Composition API (`<script setup>`) have been refactored.
2.  **Code Cleanup:**
    - Removed commented-out code blocks and unused imports.
    - Removed unused component props.
    - Replaced hardcoded, repetitive HTML with `v-for` loops for better maintainability.
3.  **Language Standardization:** All UI text and code comments have been standardized to **English**.
4.  **HTML Semantics:** Improved HTML semantics where necessary (e.g., using `<button>` for form submission instead of `<a>`).
5.  **General Improvements:** Addressed placeholder values and other minor inconsistencies.

## File-by-File Breakdown

### `pages/about-us.vue`
- Converted from Options API (was already Options, so no change needed, but verified).
- Removed a large, commented-out section of the template.
- Removed the unused `import { h } from "vue"`.
- Implemented `v-for` to dynamically render `<bio-card>` components for the management team, making use of the existing `managementTeam` data and computed properties.
- Translated Indonesian text in "Our Vision" and "Our Mission" sections to English.

### `pages/index.vue`
- Added a `<script>` section using the Options API to manage data for the carousels.
- Replaced the hardcoded `<carousel-card>` elements with a `v-for` loop.
- Changed the `<a>` tag used for the contact form submission to a `<button type="submit">`.
- Replaced the `mt-[YOUR_NAVBAR_HEIGHT]` placeholder class with a static value (`mt-20`).
- Translated the "Visi Kami" text to "Our Vision".

### `components/article-card.vue`
- Refactored the component from Composition API (`<script setup>`) to Options API.
- Removed the unused `content` and `imageUrl` props.
- Changed Indonesian code comments to English.

### `components/bar-portofolio.vue`
- Refactored the component from Composition API (`<script setup>`) to Options API.
- Translated the chart's dataset label "Penjualan Bulanan" to "Monthly Sales".

### `components/bio-card.vue`
- Refactored the component from Composition API (`<script setup>`) to Options API.
- Fixed the template to use `name`, `title`, and `image` props instead of hardcoded values. This allows it to be used dynamically.

### `components/carousel-card.vue`
- Verified that the component is self-contained and requires no props, making it suitable for the `v-for` loop in `pages/index.vue`.
