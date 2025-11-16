# FlavorHub - Restaurant Social Discovery Platform

## Project Overview
FlavorHub is a modern, professional website for a restaurant business focused on social discovery. The platform connects food lovers with exceptional dining experiences while helping restaurants grow their customer base through community engagement and data-driven insights.

## Brand Identity
- **Name**: FlavorHub
- **Industry**: Restaurant Technology / Food Service
- **Target Audience**: Restaurant owners, managers, and general food consumers
- **Style**: Modern, professional, warm, and inviting

## Color Palette
- **Primary**: Orange to Red gradient (#f97316 to #dc2626) - Represents warmth, appetite, and energy
- **Neutral**: Grays and whites for clean, professional look
- **Accents**: Yellow for highlights, Green for success states

## Typography
- **Headings**: Playfair Display (serif) - Elegant and sophisticated
- **Body**: Inter (sans-serif) - Clean and highly readable
- **Scale**: Large, impactful headings (text-6xl to text-7xl) with generous spacing

## Key Features

### 1. Social Discovery
- Connect restaurants with food enthusiasts
- Share culinary stories and experiences
- Build loyal communities around dining experiences
- User-generated content and reviews

### 2. Download/Sign Up
- Mobile app availability (iOS & Android)
- Free trial with no credit card required
- Quick onboarding process
- Multiple sign-up entry points throughout site

### 3. Pricing
- **Starter Plan**: Free forever for new restaurants
- **Professional Plan**: $29/month (featured plan)
- **Enterprise Plan**: Custom pricing for chains
- Transparent pricing with no hidden fees
- 14-day free trial on paid plans

### 4. Team Profiles / Success Stories
- Real restaurant owners sharing their experiences
- Diverse representation of cuisine types
- Testimonials with photos and detailed quotes
- Social proof through success metrics

## Technical Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter & Playfair Display)
- **Images**: Unsplash (high-quality restaurant imagery)
- **Forms**: POST to https://deep-api-server-2moiw.kinsta.app/api/form-submissions
- **Payments**: Stripe (test mode)

## Page Sections

### Navigation
- Sticky header with transparent-to-solid transition on scroll
- Logo, navigation links, and CTA button
- Mobile-responsive hamburger menu

### Hero Section
- Full-screen impact with high-quality background image
- Large, bold headline with gradient accent
- Clear value proposition
- Dual CTAs (primary and secondary)
- Social proof metrics (10K+ restaurants, 500K+ users, 4.9★ rating)

### Services
- Four key features in 2x2 grid layout
- Image-topped cards with icons
- Focus on: Social Discovery, Growth Analytics, Location Marketing, Reputation Management
- Hover effects and smooth transitions

### Testimonials (Team Profiles)
- Six success stories from diverse restaurant owners
- Professional photos with detailed testimonials
- 3-column grid on desktop, responsive on mobile
- 5-star ratings and restaurant names
- Different layout from services for visual variety

### Pricing
- Three-tier pricing structure
- Professional plan highlighted as "Most Popular"
- Clear feature comparison
- Trust indicators (free trial, no credit card, cancel anytime)
- Direct Stripe payment link integration

### Contact Form
- Split layout with contact information and form
- Required fields: name, email, phone, message
- Hidden fields for founder_id and project_id
- Success/error state handling
- Multiple contact methods displayed

### Footer
- Comprehensive link structure (Product, Company, Resources, Legal)
- Social media links
- Contact information
- Newsletter signup area
- Copyright and legal links

## Design Principles

1. **Generous White Space**: Ample padding and margins throughout
2. **Clear Hierarchy**: Large headings, clear sections, logical flow
3. **Professional Imagery**: High-quality restaurant and food photography
4. **Consistent Branding**: Orange-red gradient used consistently for CTAs and accents
5. **Mobile-First**: Fully responsive design that works on all devices
6. **Performance**: Optimized images and smooth animations
7. **Accessibility**: Clear contrast, readable fonts, semantic HTML

## Call-to-Actions
- Primary: "Start Free Trial" / "Get Started" (orange-red gradient)
- Secondary: "Download App" / "Contact Sales" (outlined or subtle)
- Strategically placed throughout the page for conversion

## Form Integration
- **Endpoint**: https://deep-api-server-2moiw.kinsta.app/api/form-submissions
- **Method**: POST
- **Required Fields**: name, email, phone, message, founder_id, project_id
- **Validation**: Client-side validation for all fields
- **Feedback**: Success/error messages displayed to user

## Payment Integration
- **Stripe Link**: https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00
- **Price**: $29/month for Professional plan
- **Test Mode**: Using Stripe test environment

## Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px
- Large Desktop: > 1280px

## Performance Optimizations
- Lazy loading for images
- Optimized Unsplash image URLs (with width and quality parameters)
- Smooth scroll behavior
- Efficient CSS with Tailwind utilities
- Minimal JavaScript for interactivity

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2020+ JavaScript features
- CSS Grid and Flexbox layouts
- Smooth animations with CSS transitions

## Future Enhancements
- Blog section for SEO and content marketing
- Restaurant directory/search functionality
- Interactive demo or product tour
- Video testimonials
- Integration showcase (third-party services)
- Multi-language support
- Dark mode option

## Maintenance Notes
- Update testimonials quarterly with new success stories
- Refresh hero and service images seasonally
- Review and update pricing annually
- Keep contact information current
- Monitor form submissions and respond within 24 hours
- A/B test CTAs and headlines for optimization

## Brand Voice
- Professional yet approachable
- Enthusiastic about food and community
- Data-driven but human-centered
- Supportive and encouraging to restaurant owners
- Clear and jargon-free communication