# Barakah Oasis - Charity Website

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/qasim-rokeebs-projects/v0-charity-website-build)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/kgakXlLishF)

## About Barakah Oasis

Barakah Oasis is a Nigerian-based Muslim charity organization dedicated to supporting the Muslim community through various charitable programs. Our mission is to provide aid and support to those in need through initiatives such as:

- **Feed a Fasting Soul**: Providing iftar meals during Ramadan to those fasting
- **Build a Mosque**: Supporting the construction of mosques and Islamic centers
- **Empower Muslim Techies**: Providing laptops and technology resources to aspiring Muslim tech professionals

This website serves as the digital presence for Barakah Oasis, enabling donors to contribute, volunteers to sign up, and the community to stay informed about our programs and impact.

## Features

- **Responsive Design**: Mobile-first design with smooth animations and modern UI
- **Donation System**: Bank transfer details with easy copy functionality (online payment system coming soon)
- **Program Tracking**: Real-time progress bars showing fundraising goals and amounts raised
- **Volunteer Registration**: Easy sign-up form for community members who want to help
- **Past Events Gallery**: Showcase of previous charity initiatives and their impact
- **About Section**: Organization mission, vision, and story
- **Mobile Navigation**: Hamburger menu for seamless mobile browsing

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel

## Project Structure

```
barakah-oasis/
├── app/
│   ├── actions/
│   │   └── volunteer.ts          # Server actions for volunteer form
│   ├── past-events/
│   │   └── page.tsx              # Past events showcase page
│   ├── globals.css               # Global styles and theme tokens
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Homepage with all sections
├── components/
│   ├── ui/                       # shadcn/ui components
│   ├── donation-form.tsx         # Donation form with bank details
│   ├── impact-stats.tsx          # Statistics display component
│   ├── program-card.tsx          # Program/cause card with progress
│   ├── testimonial-card.tsx      # Testimonial display component
│   └── volunteer-form.tsx        # Volunteer registration form
├── public/
│   └── *.jpg                     # Images for hero, programs, and events
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Qasim-Rokeeb/Barakah-Oasis-v2.git
cd Barakah-Oasis-v2
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Building for Production

```bash
npm run build
npm start
```

## Configuration

### Bank Account Details

Update the bank account information in `components/donation-form.tsx`:

```tsx
const bankDetails = {
  bankName: "First Bank of Nigeria",
  accountName: "Barakah Oasis Foundation",
  accountNumber: "1234567890"
}
```

### Program Goals

Update fundraising targets and current amounts in `app/page.tsx` within the programs array.

## Deployment

This project is automatically deployed to Vercel. Any changes pushed to the main branch will trigger a new deployment.

**Live Site**: [View Deployment](https://vercel.com/qasim-rokeebs-projects/v0-charity-website-build)

## Future Enhancements

- Integration with Stripe or Paystack for online donations
- Database integration (Supabase/Neon) for volunteer data storage
- Admin dashboard for managing programs and donations
- Email notifications for donors and volunteers
- Multi-language support (English and Arabic)
- Blog section for charity updates and stories

## Contributing

This project is built and maintained using [v0.app](https://v0.app). To make changes:

1. Continue building on [v0.app/chat/kgakXlLishF](https://v0.app/chat/kgakXlLishF)
2. Changes will automatically sync to this repository
3. Vercel will deploy the updates

## License

This project is maintained by Barakah Oasis Foundation.

## Contact

For questions or support, please visit the contact section on our website or reach out through our volunteer form.

---

*Built with ❤️ for the Muslim community by Barakah Oasis*
