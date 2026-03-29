# Framer QA Checklist

Run before every client delivery. Check each item on both desktop and mobile unless noted.

---

## Mobile

- [ ] All sections stack correctly on 375px (iPhone SE)
- [ ] Text is readable without zooming (min 16px body)
- [ ] Tap targets are large enough (min 44px height for buttons and links)
- [ ] No horizontal scroll on any page
- [ ] Hero image and layout look good on mobile
- [ ] Navigation collapses into hamburger or mobile menu
- [ ] Mobile menu opens, closes, and all links work
- [ ] Forms are usable on mobile keyboard
- [ ] No overlapping elements on small screens
- [ ] Tested on both iOS Safari and Android Chrome (or emulated)

---

## Links

- [ ] All nav links go to the correct page or section
- [ ] All CTA buttons link to the correct destination
- [ ] No broken links (404s)
- [ ] External links open in a new tab
- [ ] Anchor links scroll to the correct section
- [ ] Logo links back to homepage
- [ ] Social links in footer are correct and active

---

## Forms

- [ ] Contact form submits successfully
- [ ] Required fields are validated before submission
- [ ] Success state shows after submission
- [ ] Form submission delivers to the correct email or integration
- [ ] No spam or test submissions left in inbox
- [ ] Form works on mobile
- [ ] If using an integration (e.g. Mailchimp, Notion), test the full flow end to end

---

## SEO

- [ ] Page title is set (not "Untitled" or default Framer title)
- [ ] Meta description is written (120–160 characters)
- [ ] OG image is set for social sharing
- [ ] Favicon is uploaded
- [ ] All pages have a unique title and description
- [ ] Images have descriptive alt text
- [ ] H1 exists on every page and is used only once
- [ ] URL slugs are clean and readable (no random strings)
- [ ] Sitemap is enabled in Framer settings
- [ ] noindex is OFF on published pages (unless intentional)

---

## Spacing & Visual

- [ ] Consistent vertical spacing between sections
- [ ] No elements touching the edge of the screen on mobile
- [ ] Typography scale is consistent (headings, body, labels)
- [ ] Colors match the approved brand palette
- [ ] No placeholder text or images left in the design
- [ ] Hover states work on interactive elements
- [ ] Images are not stretched or distorted
- [ ] Icons are consistent in size and style

---

## Performance

- [ ] Images are optimized (Framer auto-optimizes, but check large uploads)
- [ ] No unnecessary animations that cause jank on mobile
- [ ] Page loads in under 3 seconds on a normal connection

---

## Final Checks

- [ ] Custom domain is connected and resolves correctly
- [ ] HTTPS is active (no mixed content warnings)
- [ ] Password protection is removed before delivery
- [ ] Client has been added as a collaborator or the project has been transferred
- [ ] All placeholder client info has been replaced with real content
- [ ] Final review done in an incognito window (no editor state)
