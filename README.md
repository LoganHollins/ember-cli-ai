# Ember-cli-ai

Easily add Microsoft's Application Insights to your app.

## Installation

```bash
# From within your ember-cli project
npm install ember-cli-ai
```

## Usage

First you'll need to configure your GTM App ID:

```javascript
// config/environment.js

ENV['ember-cli-ai'] = {
    instrumentationKey: 'YOUR_INSTRUMENTATION_KEY'
};
```
