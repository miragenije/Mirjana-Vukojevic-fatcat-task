const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            zIndex: {
                'negative': '-1',
            }
        },
    },
    plugins: [require('tailwind-fontawesome')],
});
