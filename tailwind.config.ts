
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
		screens: {
      xs: '475px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1400px',
    },
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
				// Refined Africa Peace Initiative Color Palette with HSL values
				api: {
					// Primary Colors
					darkgreen: 'hsl(145 60% 10%)',      // Rich dark green for primary dark elements
					forestgreen: 'hsl(145 30% 25%)',    // Adjusted forest green for headers and backgrounds
					green: 'hsl(145 60% 25%)',          // Primary green - kept the same
					brightgreen: 'hsl(145 40% 35%)',    // Slightly adjusted for better contrast
					
					// Neutrals & Background Colors
					cream: 'hsl(45 40% 95%)',          // Lighter cream for backgrounds
					ivory: 'hsl(45 60% 98%)',          // Brighter ivory for content areas
					charcoal: 'hsl(145 15% 22%)',       // Adjusted charcoal for better readability
					gray: 'hsl(90 10% 35%)',           // Soft grayish green for subtle elements
					
					// Accent Colors
					terracotta: 'hsl(15 70% 65%)',     // Vibrant terracotta accent - kept the same
					gold: 'hsl(42 55% 55%)',           // Slightly richer gold accent
					sand: 'hsl(25 40% 75%)',           // Warmer sand tone
					sage: 'hsl(90 25% 70%)',           // Softer sage green
					
					// Supporting Colors
					silver: 'hsl(195 10% 75%)',         // Light silver gray for UI elements
					midnight: 'hsl(180 20% 15%)',       // Dark blue-green for deep shadows
					earthbrown: 'hsl(25 30% 35%)',     // New earthy brown for additional contrast
					clay: 'hsl(25 40% 65%)'            // New clay color for warm accent
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
