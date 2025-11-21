# Google Analytics 4 Setup Guide

## Getting Your GA4 Measurement ID

1. **Create a Google Analytics Account** (if you don't have one)
   - Go to https://analytics.google.com/
   - Sign in with your Google account
   - Click "Start measuring"

2. **Set Up a GA4 Property**
   - Account name: "On The Fly Energy"
   - Property name: "ontheflyenergy.com"
   - Select your timezone and currency
   - Click "Next"

3. **Get Your Measurement ID**
   - After creating the property, go to Admin (gear icon)
   - Under Property, click "Data Streams"
   - Click "Add stream" → "Web"
   - Enter your website URL: `https://ontheflyenergy.com`
   - Stream name: "Main Website"
   - Click "Create stream"
   - **Copy the Measurement ID** (format: G-XXXXXXXXXX)

## Configure Your Site

Replace `G-XXXXXXXXXX` with your actual Measurement ID in these files:

### 1. `/index.html` (lines 14 and 19)
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-MEASUREMENT-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-MEASUREMENT-ID');
</script>
```

### 2. `/src/utils/analytics.ts` (line 14)
```typescript
export const trackPageView = (url: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', 'YOUR-MEASUREMENT-ID', {
      page_path: url,
    });
  }
};
```

## What's Being Tracked

### Automatic Tracking:
- **Page Views**: Every time someone visits a page (/, /investors, /join, /about)
- **User Demographics**: Location, device, browser
- **Session Duration**: How long people spend on the site
- **Traffic Sources**: Where visitors come from (direct, referral, search, etc.)

### Custom Event Tracking:
- **Form Submissions**:
  - `talent_application` - When someone submits the Join Us form
  - `investor_inquiry` - When someone submits the Investors contact form

## Viewing Your Analytics

1. Go to https://analytics.google.com/
2. Select your property "ontheflyenergy.com"
3. Key reports to check:
   - **Realtime**: See live visitors right now
   - **Reports > Engagement > Pages and screens**: See which pages get the most views
   - **Reports > Engagement > Events**: See form submissions and other events
   - **Reports > User attributes > Overview**: See demographics and devices
   - **Reports > Acquisition > Traffic acquisition**: See where visitors come from

## Testing

After deployment:
1. Visit your site in a private/incognito window
2. Navigate through pages
3. Submit a test form
4. Check GA4 Realtime report to see if events are showing up

## Privacy Considerations

- GA4 is GDPR compliant by default
- No personally identifiable information (PII) is collected
- IP addresses are anonymized
- Consider adding a privacy policy page if you don't have one

## Need Help?

- GA4 Documentation: https://support.google.com/analytics/answer/10089681
- Check browser console for errors (F12 → Console tab)
- Verify gtag is loading: Type `window.gtag` in console - should return a function
