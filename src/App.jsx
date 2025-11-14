import React from 'react';
import StateExample from './components/StateExample.jsx';
import EffectExample from './components/EffectExample.jsx';
import ContextExample, { ThemeProvider } from './components/ContextExample.jsx';

export default function App() {
  return (
    <ThemeProvider>
      <main style={{ fontFamily: 'system-ui, sans-serif', padding: '1.5rem' }}>
        <h1>React Core Concepts Sample</h1>
        <p>Small examples of state, effects, and context.</p>

        <section style={{ marginTop: '1.5rem' }}>
          <h2>1. State</h2>
          <StateExample />
        </section>

        <section style={{ marginTop: '1.5rem' }}>
          <h2>2. Effect</h2>
          <EffectExample />
        </section>

        <section style={{ marginTop: '1.5rem' }}>
          <h2>3. Context</h2>
          <ContextExample />
        </section>
      </main>
    </ThemeProvider>
  );
}
