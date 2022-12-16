const fs = require('fs');
const path = require('path');

const file = (fileName) => path.resolve(__dirname, '..', 'files', `${fileName}`);
const date = new Date();

const contacts = fs.readFile(file('contacts.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
  fs.appendFile(file('victim.txt'), `${date} ${'\n'}`, (err) => {
    if (err) throw err;
  });
});

const victim = fs.readFile(file('victim.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

module.exports = {
  contacts,
  victim,
};
