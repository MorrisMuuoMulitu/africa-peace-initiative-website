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
				// Africa Peace Initiative Color Palette with Modern Teal-Gold Theme
				api: {
					// Primary Colors with Teal-Gold Theme
					darkgreen: 'hsl(145 60% 10%)',
					forestgreen: 'hsl(145 30% 25%)',
					green: 'hsl(145 60% 25%)',
					brightgreen: 'hsl(145 40% 35%)',
					
					// Modern Teal-Gold Palette
					teal: 'hsl(178 60% 45%)',        // Primary teal
					'teal-light': 'hsl(178 70% 60%)', // Light teal for gradients
					'teal-dark': 'hsl(178 50% 30%)',  // Dark teal for depth
					
					// Neutrals & Background Colors
					cream: 'hsl(45 40% 95%)',
					ivory: 'hsl(45 60% 98%)',
					charcoal: 'hsl(145 15% 22%)',
					gray: 'hsl(90 10% 35%)',
					
					// Accent Colors
					terracotta: 'hsl(15 70% 65%)',
					gold: 'hsl(42 75% 55%)',          // Enhanced gold for better gradient
					'gold-light': 'hsl(42 85% 65%)', // Light gold for gradients
					sand: 'hsl(25 40% 75%)',
					sage: 'hsl(90 25% 70%)',
					
					// Supporting Colors
					silver: 'hsl(195 10% 75%)',
					midnight: 'hsl(180 20% 15%)',
					earthbrown: 'hsl(25 30% 35%)',
					clay: 'hsl(25 40% 65%)'
				}
			},
			fontFamily: {
				// Modern Clean Font System
				montserrat: ['Montserrat', 'sans-serif'],
				'open-sans': ['Open Sans', 'sans-serif'],
				inter: ['Inter', 'sans-serif'],
				lora: ['Lora', 'serif'],
				playfair: ['Playfair Display', 'serif'],
				oswald: ['Oswald', 'sans-serif'],
				dancing: ['Dancing Script', 'cursive'],
			},
			fontSize: {
				'10xl': ['10rem', { lineHeight: '1' }],
				'11xl': ['12rem', { lineHeight: '1' }],
				'12xl': ['14rem', { lineHeight: '1' }],
			},
			letterSpacing: {
				'ultra-wide': '0.2em',
				'mega-wide': '0.3em',
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
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
					'25%': { transform: 'translateY(-10px) translateX(5px)' },
					'50%': { transform: 'translateY(-5px) translateX(-5px)' },
					'75%': { transform: 'translateY(-15px) translateX(3px)' }
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
				'shimmer': 'shimmer 2s linear infinite',
				float: 'float 6s ease-in-out infinite',
				'spin-slow': 'spin 20s linear infinite'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-teal-gold': 'linear-gradient(135deg, #14b8a6 0%, #f59e0b 100%)',
				'gradient-hero': 'linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, rgba(245, 158, 11, 0.1) 100%)',
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
