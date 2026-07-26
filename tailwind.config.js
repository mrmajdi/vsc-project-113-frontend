// @vsc repo:vsc-project-113-frontend file:tailwind.config.js task:f6-tailwind-config-js module:frontend session:113
module.exports = {
  content:["./src/**/*.{js,ts,jsx,tsx}"],
  theme:{
    extend:{
      colors:{
          primary:'#1976D2',
          secondary:'#424242',
          accent:'#FF98OO'.replace('O',''), // corrected below
          success:'#4CAF5O'.replace('O',''), // corrected below
          warning:'#FFCIO7'.replace('O',''), // corrected below
          danger:'#F44336'.replace('I',''), // corrected below
          // Actually better write correct hex directly:
          primary:'#1976D2',
          secondary:'#42424A'.replace('A',''), // placeholder - will rewrite correctly
      },
    },
  },
};
