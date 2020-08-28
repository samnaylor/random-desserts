# Random Fruits name

[![Build Status](https://travis-ci.org/n1ckdm/random-desserts.svg?branch=master)](https://travis-ci.org/n1ckdm/random-desserts)

Generate the names of random desserts 🦄.

## Install

```bash
npm install random-desserts
```

## Usage

### React

```bash
import React from 'react';
import getRandomDessertsName from 'random-desserts'

function App() {
  return (
    <div>
      <p>{getRandomDessertsName()}</p>
    </div>
  );
}

export default App;
```

### Node.js

```javascript
const getRandomFruitsName = require('random-desserts');
console.log(getRandomDessertsName());
```

## Development

Test

```bash
npm run test
```
