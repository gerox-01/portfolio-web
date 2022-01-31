module.exports = {
  content: ["./*.html"],
  darkMode: 'class',
  theme: {
	  extend: {
      fontFamily: {
        'Montserrat': ['Montserrat', 'sans-serif'],
      }
		},
	},
	variants: {
    width: ['responsive', 'hover', 'focus', 'group-hover'],
		extend: {
	 },
  },
  plugins: [],
}