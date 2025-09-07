# Abdussamad - Frontend Developer Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases my skills, projects, and experience as a frontend developer.

## 🚀 Features

- **Responsive Design** - Optimized for all devices and screen sizes
- **Dark/Light Mode** - Toggle between themes with smooth transitions
- **Smooth Animations** - Framer Motion for engaging user interactions
- **Modern UI Components** - Built with ShadCN UI and Tailwind CSS
- **SEO Optimized** - Proper meta tags and semantic HTML structure
- **Accessible** - ARIA labels and keyboard navigation support
- **Fast Performance** - Optimized with Vite and modern React patterns

## 🛠️ Tech Stack

- **Frontend Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI
- **Animations**: Framer Motion
- **Icons**: Lucide React + React Icons
- **Form Handling**: React Hook Form + Zod validation
- **Theme Management**: next-themes

## 📱 Sections

1. **Header** - Navigation with smooth scrolling and theme toggle
2. **Hero** - Introduction and call-to-action
3. **About** - Professional summary and experience
4. **Skills** - Technical expertise and proficiency levels
5. **Projects** - Showcase of completed work
6. **Contact** - Contact form and social links
7. **Footer** - Additional links and information

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Abdussamadajao/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/            # ShadCN UI components
│   ├── Header.tsx     # Navigation header
│   ├── Hero.tsx       # Hero section
│   ├── About.tsx      # About section
│   ├── Skills.tsx     # Skills section
│   ├── Projects.tsx   # Projects showcase
│   ├── Contact.tsx    # Contact form
│   ├── Footer.tsx     # Footer
│   └── ThemeProvider.tsx # Theme management
├── data/               # Data files
│   └── index.ts       # Projects, skills, and services data
├── types/              # TypeScript type definitions
│   └── index.ts       # Interface definitions
├── lib/                # Utility functions
└── App.tsx            # Main application component
```

## 🎨 Customization

### Updating Personal Information

- Edit `src/data/index.ts` to update your projects, skills, and services
- Modify `src/components/Hero.tsx` to change your name and bio
- Update `src/components/About.tsx` for your professional summary
- Edit `index.html` to update SEO meta tags

### Styling

- Customize colors in `src/index.css` using CSS custom properties
- Modify Tailwind classes in component files
- Update ShadCN UI theme in `components.json`

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.tsx`
3. Update navigation in `src/components/Header.tsx`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **GitHub**: [@Abdussamadajao](https://github.com/Abdussamadajao)
- **Portfolio**: [Live Demo](https://your-portfolio-url.com)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
