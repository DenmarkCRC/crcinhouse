<template>
    <div>
        <div class="holder">
            <address>
                Email:
                <a href="mailto:webmaster@example.com">Jon Doe</a>.
                <br />Address :
                <br />123 Example Street
                <br />Denmark, WA 6333
                <br />Mobile
                <a href="tel:0414738751">0414 738 751</a>
                <br />LandLine
                <a href="tel:98482842">98482842</a>
            </address>
        </div>
        <ContactNotes />
    </div>
</template>

<script setup>
import ContactNotes from './ContactNotes.vue'
</script>

<style l>
.dark {
    color: rgba(55, 65, 81, 1);
}
body {
    background: white !important;
}
</style>