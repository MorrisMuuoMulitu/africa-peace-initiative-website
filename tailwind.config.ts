
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Updated Africa Peace Initiative Custom Colors
				api: {
					cream: '#EAE6D7',        // Light cream/beige color
					darkgreen: '#0A2C17',    // Dark forest green
					green: '#1A6340',        // Primary green
					brightgreen: '#218757',  // Brighter green
					gray: '#515747',         // Grayish green
					sage: '#A4B494',         // Sage green
					charcoal: '#37423D',     // Dark charcoal
					sand: '#C2B280',         // Sand/gold color
					silver: '#AFBFC0',       // Silver gray
					forestgreen: '#344E41',  // Forest green
					terracotta: '#E07A5F',   // Terracotta/rust color (added)
					ivory: '#F8F4E3',        // Ivory color
					gold: '#D1A24A',         // Gold color
					midnight: '#1D3030'      // Midnight color
				}
			},
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
				lora: ['Lora', 'serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				pulse: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' }
				},
				slideInLeft: {
					'0%': { transform: 'translateX(-100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				slideInRight: {
					'0%': { transform: 'translateX(100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				slideInUp: {
					'0%': { transform: 'translateY(100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fadeIn 5s ease-in',
				'pulse-slow': 'pulse 5s ease-in-out infinite',
				'slide-left': 'slideInLeft 0.8s ease-out',
				'slide-right': 'slideInRight 0.8s ease-out',
				'slide-up': 'slideInUp 0.8s ease-out'
			},
			backgroundImage: {
				'sankofa-pattern': "url('/sankofa-pattern.svg')",
				'africa-map': "url('/public/lovable-uploads/fee3e489-56f6-4d73-a922-afb94b013df0.png')",
				'gradient-green': "linear-gradient(120deg, #1A6340 0%, #344E41 100%)",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
