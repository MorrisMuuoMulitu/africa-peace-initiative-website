
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
				// Refined Africa Peace Initiative Color Palette
				api: {
					// Primary Colors
					darkgreen: '#0A2C17',      // Rich dark green for primary dark elements
					forestgreen: '#294D35',    // Adjusted forest green for headers and backgrounds
					green: '#1A6340',          // Primary green - kept the same
					brightgreen: '#2E8B57',    // Slightly adjusted for better contrast
					
					// Neutrals & Background Colors
					cream: '#F8F5E6',          // Lighter cream for backgrounds
					ivory: '#FFFCF2',          // Brighter ivory for content areas
					charcoal: '#2F3B36',       // Adjusted charcoal for better readability
					gray: '#59635A',           // Soft grayish green for subtle elements
					
					// Accent Colors
					terracotta: '#E07A5F',     // Vibrant terracotta accent - kept the same
					gold: '#D4A64A',           // Slightly richer gold accent
					sand: '#DDBEA9',           // Warmer sand tone
					sage: '#B7C4A7',           // Softer sage green
					
					// Supporting Colors
					silver: '#C4C9CA',         // Light silver gray for UI elements
					midnight: '#1A2A2A',       // Dark blue-green for deep shadows
					earthbrown: '#6B4D3A',     // New earthy brown for additional contrast
					clay: '#CB997E'            // New clay color for warm accent
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
				},
				shimmer: {
					'0%': { backgroundPosition: '-500px 0' },
					'100%': { backgroundPosition: '500px 0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fadeIn 5s ease-in',
				'pulse-slow': 'pulse 5s ease-in-out infinite',
				'slide-left': 'slideInLeft 0.8s ease-out',
				'slide-right': 'slideInRight 0.8s ease-out',
				'slide-up': 'slideInUp 0.8s ease-out',
				'shimmer': 'shimmer 2s linear infinite'
			},
			backgroundImage: {
				'sankofa-pattern': "url('/sankofa-pattern.svg')",
				'africa-map': "url('/africa-outline.svg')",
				'gradient-green': "linear-gradient(120deg, #1A6340 0%, #294D35 100%)",
				'gradient-gold': "linear-gradient(120deg, #D4A64A 0%, #DDBEA9 100%)",
				'gradient-earth': "linear-gradient(120deg, #6B4D3A 0%, #CB997E 100%)"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
