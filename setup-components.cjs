// Save this as setup-components.js in your project root
const fs = require('fs');
const path = require('path');

const componentTemplate = (name) => `import React from 'react';

const ${name} = () => {
  return (
    <div className="w-full">
      {/* ${name} content goes here */}
    </div>
  );
};

export default ${name};
`;

const pageTemplate = (name) => `import React from 'react';
import Container from '../components/layout/Container';

const ${name} = () => {
  return (
    <Container>
      <div className="w-full py-20">
        {/* ${name} page content goes here */}
      </div>
    </Container>
  );
};

export default ${name};
`;

// Common components
const commonComponents = ['Button', 'Card', 'Input', 'Loader', 'Badge', 'Container'];
commonComponents.forEach(name => {
  fs.writeFileSync(
    path.join(__dirname, `src/components/common/${name}.jsx`),
    componentTemplate(name)
  );
});

// Layout components
const layoutComponents = ['Navbar', 'Footer', 'Container', 'Sidebar'];
layoutComponents.forEach(name => {
  fs.writeFileSync(
    path.join(__dirname, `src/components/layout/${name}.jsx`),
    componentTemplate(name)
  );
});

// Section components
const sectionComponents = ['Hero', 'Services', 'Portfolio', 'Testimonials', 'Contact', 'Features', 'Stats', 'CTA'];
sectionComponents.forEach(name => {
  fs.writeFileSync(
    path.join(__dirname, `src/components/sections/${name}.jsx`),
    componentTemplate(name)
  );
});

// Pages
const pages = ['Home', 'About', 'Services', 'Portfolio', 'Contact'];
pages.forEach(name => {
  fs.writeFileSync(
    path.join(__dirname, `src/pages/${name}.jsx`),
    pageTemplate(name)
  );
});

console.log('All components have been created successfully!');