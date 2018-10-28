const fs = require('fs');
const ghpages = require('gh-pages');

fs.copyFile('CNAME', './public/CNAME', (err) => {
  if (err) throw err;
  console.log('CNAME file copied to public folder.');
});

ghpages.publish('public', (err) => {
  if (err) throw err;
  console.log('gh-pages publish completed successfully.');
});
