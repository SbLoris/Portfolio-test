module.exports = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#33cc66', // Custom primary color
                primary1: '#3B0B30',
                primary2: '#bf2222',
                primary3: '#f6607e',
                primary4: '#3b0b4e',
                primary5: '#144498',

            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        // ...
    ],
};
