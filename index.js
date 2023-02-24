import * as Secondary from './secondary.js';

import Primary from './primary.js';

const { welcome } = Primary(Secondary);

console.log(welcome());
console.log(welcome('Earth'));
