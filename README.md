# Barakah Oasis - Charity Website

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://barakah-oasis-v2.vercel.app/)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/kgakXlLishF)

**Live Website**: [https://barakah-oasis-v2.vercel.app/](https://barakah-oasis-v2.vercel.app/)

## About Barakah Oasis

Barakah Oasis Foundation is a Nigerian-based Muslim charity organization dedicated to bringing relief, hope, and honor to Muslims in need. We believe that severe hardship can rob people of their dignity, and our mission is to restore hope and respect to Muslims enduring it by channeling donations from Muslims worldwide to the most vulnerable communities.

### Our Mission & Vision

**Mission**: To empower the Muslim community with dignity and hope through faith-driven charitable programs.

**Vision**: A world where no Muslim is left behind, where compassion builds resilience, and faith inspires action.

### Our Core Values

- **Dignity**: Preserving honor in every act of giving
- **Compassion**: Serving with empathy and understanding
- **Faith**: Rooted in the mercy and generosity that Islam teaches
- **Empowerment**: Enabling independence and long-term growth

### Our Story

Barakah Oasis Foundation began with a simple act of giving during Ramadan, and from that moment, we knew this work had to continue. Year after year, we've been blessed to serve those in need—elders, students, widows, and orphans—with the intention of building an ummah rooted in compassion and faith.

### Our Programs

The organization focuses on several key charitable initiatives:

- **Feed a Fasting Soul**: Providing iftar meals and food support during Ramadan to fasting Muslims, students, orphans, and families in need
- **Build a Mosque**: Supporting the construction of mosques and Islamic centers to strengthen community worship spaces
- **Empower Muslim Techies**: Providing laptops and technology resources to aspiring Muslim tech professionals
- **Debt Relief & Medical Support**: Settling medical bills and clearing debts for families facing financial hardship
- **Widow & Orphan Care**: Supporting widows and orphans with essential needs and financial assistance
- **Education Support**: Providing resources and assistance to Muslim students
- **Emergency Relief**: Responding to urgent community needs across multiple Nigerian cities

This website serves as the digital presence for Barakah Oasis, enabling donors to contribute, volunteers to sign up, and the community to stay informed about our programs and impact.

## Website Features

- **Responsive Design**: Mobile-first design with smooth animations and modern UI, optimized for all devices
- **Sticky Header Navigation**: Easy access to all sections with smooth scroll behavior
- **Mobile Menu**: Hamburger menu with full-screen navigation for mobile devices
- **Hero Section**: Impactful landing section with gradient background and mosque imagery
- **Impact Statistics**: Real-time display of beneficiaries served, meals distributed, and lives impacted
- **About Section**: Detailed information about mission, vision, values, and organizational story
- **Programs Showcase**: Interactive cards displaying active programs with fundraising progress bars
- **Past Events Gallery**: Dedicated page showcasing historical charitable initiatives (2021-2026)
- **Donation System**: 
  - Bank transfer details with one-click copy functionality
  - Pre-set and custom donation amounts
  - Future: Online payment integration (Stripe/Paystack)
- **Volunteer Registration**: 
  - Comprehensive form for community members wanting to help
  - Server-side form submission with validation
  - Success confirmation messaging
- **Testimonials Section**: Community feedback and impact stories
- **Contact Section**: Email and phone contact information
- **Theme Support**: Dark/light mode compatibility using next-themes
- **Accessibility**: ARIA labels and semantic HTML throughout
- **SEO Optimized**: Proper metadata and Open Graph tags

## Tech Stack

### Frontend Framework
- **Next.js 16.0.10**: React framework with App Router for server-side rendering and static generation
- **React 19**: Latest React with server components support
- **TypeScript**: Full type safety across the entire codebase

### Styling & UI
- **Tailwind CSS v4**: Utility-first CSS framework with custom configuration
- **shadcn/ui**: High-quality, accessible UI component library built on Radix UI
- **Radix UI**: Unstyled, accessible component primitives
- **class-variance-authority**: For component variant management
- **Lucide React**: Beautiful, consistent icon library

### Form Handling & Validation
- **React Hook Form**: Performant form management
- **Zod**: TypeScript-first schema validation
- **@hookform/resolvers**: Integration between React Hook Form and Zod

### Additional Libraries
- **next-themes**: Dark/light mode theme management
- **clsx**: Utility for constructing className strings
- **tailwind-merge**: Merge Tailwind CSS classes without conflicts
- **@vercel/analytics**: Privacy-friendly website analytics

### Development Tools
- **ESLint**: Code linting and quality checks
- **PostCSS**: CSS transformation with Autoprefixer
- **pnpm**: Fast, disk space efficient package manager

### Deployment & Hosting
- **Vercel**: Automatic deployments with preview URLs and edge network
- **Git**: Version control with GitHub integration

## Project Structure

```
barakah-oasis-v2/
├── app/                          # Next.js App Router directory
│   ├── actions/
│   │   └── volunteer.ts          # Server actions for volunteer form submission
│   ├── past-events/
│   │   └── page.tsx              # Past events showcase page with historical initiatives
│   ├── globals.css               # Global styles and theme tokens
│   ├── layout.tsx                # Root layout with metadata, fonts, and providers
│   └── page.tsx                  # Homepage with all main sections:
│                                 #   - Hero section with CTA
│                                 #   - Impact statistics
│                                 #   - About (mission, vision, values, story)
│                                 #   - Programs showcase
│                                 #   - Testimonials
│                                 #   - Donation form
│                                 #   - Volunteer registration
│                                 #   - Contact information
│
├── components/                   # React components
│   ├── ui/                       # shadcn/ui components
│   │   ├── button.tsx            # Button component with variants
│   │   ├── card.tsx              # Card container component
│   │   ├── input.tsx             # Input field component
│   │   ├── label.tsx             # Form label component
│   │   ├── progress.tsx          # Progress bar for fundraising goals
│   │   └── textarea.tsx          # Textarea component for long-form input
│   ├── donation-form.tsx         # Donation form with bank details & copy functionality
│   ├── impact-stats.tsx          # Statistics display (beneficiaries, meals, lives impacted)
│   ├── program-card.tsx          # Program/cause card with progress tracking
│   ├── testimonial-card.tsx      # Testimonial display component
│   ├── theme-provider.tsx        # Theme provider for dark/light mode
│   └── volunteer-form.tsx        # Volunteer registration form with validation
│
├── lib/
│   └── utils.ts                  # Utility functions (cn for className merging)
│
├── public/                       # Static assets
│   ├── mosque-silhouette-nigeria-charity-community-helpin.jpg
│   ├── community-care-nigeria-health-support.jpg
│   ├── ramadan-food-relief-ilorin-families.jpg
│   ├── ramadan-iftar-multi-city-nigeria.jpg
│   ├── ramadan-students-orphanage-support-ilorin.jpg
│   └── [other event and program images]
│
├── styles/
│   └── globals.css               # Additional global styles (if needed)
│
├── components.json               # shadcn/ui configuration
├── next.config.mjs               # Next.js configuration
├── next-env.d.ts                 # Next.js TypeScript declarations
├── package.json                  # Project dependencies and scripts
├── pnpm-lock.yaml                # pnpm lockfile
├── postcss.config.mjs            # PostCSS configuration
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # Project documentation
```

### Key Components Breakdown

#### Page Components
- **app/page.tsx**: Main landing page with all sections (622 lines)
  - Header with sticky navigation
  - Hero section with gradient background
  - Impact statistics section
  - About section with mission, vision, values, and story
  - Programs section with multiple charitable initiatives
  - Testimonials section
  - Donation and volunteer sections
  - Contact information footer

- **app/past-events/page.tsx**: Dedicated page showcasing historical events (163 lines)
  - Grid layout of past charitable initiatives from 2021-2026
  - Event cards with details about date, location, beneficiaries, and impact
  - Images documenting each event

#### Functional Components
- **donation-form.tsx**: Handles donation flow (153 lines)
  - Pre-set donation amount buttons (₦5,000 - ₦150,000)
  - Custom amount input field
  - Bank transfer details display
  - Copy-to-clipboard functionality for account number
  
- **volunteer-form.tsx**: Volunteer registration (159 lines)
  - Form fields: name, email, phone, location, interests, availability
  - Form validation and submission
  - Success confirmation state
  
- **program-card.tsx**: Displays program information with progress tracking
  - Program title, description, and icon
  - Progress bar showing fundraising status
  - Goal and raised amount display

- **impact-stats.tsx**: Shows key metrics of organizational impact
  - Number of beneficiaries served
  - Meals distributed
  - Lives impacted

- **testimonial-card.tsx**: Displays testimonials from beneficiaries and community

#### Server Actions
- **app/actions/volunteer.ts**: Server-side form processing
  - Handles volunteer form data submission
  - Can be extended for database integration

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/Qasim-Rokeeb/Barakah-Oasis-v2.git
cd Barakah-Oasis-v2
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Building for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Configuration

### Bank Account Details

Update the bank account information in `components/donation-form.tsx`:

\`\`\`tsx
const bankDetails = {
  bankName: "First Bank of Nigeria",
  accountName: "Barakah Oasis Foundation",
  accountNumber: "1234567890"
}
\`\`\`

### Program Goals

Update fundraising targets and current amounts in `app/page.tsx` within the programs array.

## Deployment

This project is deployed on **Vercel** with automatic deployments enabled. Any changes pushed to the main branch will trigger a new deployment automatically.

**Live Website**: [https://barakah-oasis-v2.vercel.app/](https://barakah-oasis-v2.vercel.app/)

### Deployment Features
- Automatic builds on git push
- Preview deployments for pull requests
- Edge network for fast global delivery
- Built-in analytics and monitoring
- Custom domain support
- Environment variables management
- Zero-config SSL certificates

## Future Enhancements

### Payment Integration
- Integration with **Stripe** or **Paystack** for online donations
- Support for recurring donations
- Automated donation receipts via email
- Multiple currency support

### Backend & Database
- **Database integration** (Supabase/Neon/PostgreSQL) for:
  - Volunteer data storage and management
  - Donation tracking and analytics
  - User accounts and donor profiles
- **CMS integration** for easier content management
- API endpoints for mobile app development

### Admin Features
- Admin dashboard for:
  - Managing programs and donation goals
  - Viewing volunteer applications
  - Tracking donation analytics
  - Content management (events, testimonials, programs)
- Role-based access control

### Communication
- **Email notifications** for:
  - Donation confirmations
  - Volunteer registration confirmations
  - Monthly impact reports to donors
- WhatsApp integration for quick updates
- SMS notifications for urgent campaigns

### Content & UX
- **Blog section** for:
  - Charity updates and impact stories
  - Educational Islamic content
  - Behind-the-scenes of programs
- **Event calendar** for upcoming initiatives
- Interactive **impact map** showing reach across Nigeria
- Video testimonials and stories

### Internationalization
- **Multi-language support**:
  - English (primary)
  - Arabic
  - Hausa
  - Yoruba
- RTL (Right-to-Left) support for Arabic

### Performance & Analytics
- Advanced analytics dashboard
- A/B testing for donation pages
- Performance monitoring and optimization
- SEO improvements for better discoverability

### Social Features
- Social media feed integration
- Share buttons for programs and events
- Donation leaderboards (with permission)
- Community forum or discussion board

## Contributing

This project is built and maintained using [v0.app](https://v0.app). To make changes:

1. Continue building on [v0.app/chat/kgakXlLishF](https://v0.app/chat/kgakXlLishF)
2. Changes will automatically sync to this repository
3. Vercel will deploy the updates

## License

This project is maintained by Barakah Oasis Foundation.

## Contact

For questions, support, or to get involved with Barakah Oasis Foundation:

- **Website**: [https://barakah-oasis-v2.vercel.app/](https://barakah-oasis-v2.vercel.app/)
- **Email**: Available on the website contact section
- **Phone**: Available on the website contact section
- **Volunteer**: Fill out the volunteer form on our website

---

*Built with ❤️ for the Muslim community by Barakah Oasis Foundation*
