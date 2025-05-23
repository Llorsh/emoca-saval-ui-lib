# EMOCA Saval UI Library

[![npm version](https://img.shields.io/npm/v/emoca-saval-ui-lib.svg)](https://www.npmjs.com/package/emoca-saval-ui-lib)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A modern React component library built with TypeScript and Tailwind CSS, designed to provide a consistent and beautiful UI experience for EMOCA Saval applications.

## Installation

```bash
pnpm add emoca-saval-ui-lib
```

Or using npm:

```bash
npm install emoca-saval-ui-lib
```

Or using yarn:

```bash
yarn add emoca-saval-ui-lib
```

## Usage

### Importing Components

You can import components in multiple ways:

#### Method 1: Import directly from the root

```jsx
import { Button, Checkbox } from 'emoca-saval-ui-lib';

function App() {
  return (
    <div>
      <Button>Click me</Button>
      <Checkbox label="Check me" />
    </div>
  );
}
```

#### Method 2: Import from specific paths

```jsx
import { Button } from 'emoca-saval-ui-lib/components';
import { XIcon } from 'emoca-saval-ui-lib/icons';

function App() {
  return (
    <div>
      <Button>Click me <XIcon /></Button>
    </div>
  );
}
```

#### Method 3: Import using namespaces

```jsx
import { Components, Icons } from 'emoca-saval-ui-lib';

function App() {
  return (
    <div>
      <Components.Button>Click me</Components.Button>
      <Icons.XIcon />
    </div>
  );
}
```

### Importing Styles

To use the library's styles, import the CSS file in your main entry file:

```jsx
import 'emoca-saval-ui-lib/style.css';
```

## Available Components

- **Button**: Standard button component with various styles
- **Checkbox**: Customizable checkbox input
- **Font**: Typography component for consistent text styling
- **Header**: Page header component
- **Label**: Text label component
- **LabelTab**: Tab with label functionality
- **SearchInput**: Input field with search functionality
- **ToggleSwitch**: Toggle switch component

## Available Icons

- **XIcon**: X/close icon
- **CheckIcon**: Checkmark icon
- **LabelIcon**: Label icon
- **SearchIcon**: Search icon

## Development

### Building the library

```bash
pnpm build
```

### Running Storybook

```bash
pnpm storybook
```

### Deploying Storybook to GitHub Pages

```bash
pnpm deploy-storybook
```

## License

MIT © EMOCA Saval
