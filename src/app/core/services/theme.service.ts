import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  public theme = signal<'light' | 'dark'>('light');
  private currentAccent: 'emerald' | 'blue' | 'purple' = 'emerald';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.initializeTheme();
  }

  private initializeTheme(): void {
    const savedTheme = localStorage.getItem('appTheme') as 'light' | 'dark';
    const prefersDark =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

    this.theme.set(initialTheme);
    this.renderer.setAttribute(this.document.body, 'data-theme', initialTheme);
    this.updateFavicon(initialTheme);

    const savedAccent = localStorage.getItem('appAccent') as 'emerald' | 'blue' | 'purple';
    this.currentAccent = savedAccent || 'emerald';
    this.renderer.setAttribute(this.document.body, 'data-accent', this.currentAccent);
  }

  public toggleTheme(): void {
    const newTheme = this.theme() === 'light' ? 'dark' : 'light';
    this.theme.set(newTheme);
    this.renderer.setAttribute(this.document.body, 'data-theme', newTheme);
    localStorage.setItem('appTheme', newTheme);
    this.updateFavicon(newTheme);
  }

  public setAccent(color: 'emerald' | 'blue' | 'purple'): void {
    this.currentAccent = color;
    this.renderer.setAttribute(this.document.body, 'data-accent', color);
    localStorage.setItem('appAccent', color);
  }

  private updateFavicon(theme: 'light' | 'dark'): void {
    const faviconLink: HTMLLinkElement | null = this.document.querySelector("link[rel*='icon']");
    if (faviconLink) {
      faviconLink.href = `images/${theme}-favicon.ico`;
    }
  }
}
