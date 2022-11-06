/// <reference types="vite/client" />

declare module '*.vue' {
  import { Component } from 'vue';
  const mod: Component;
  export default mod;
}
