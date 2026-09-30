You are an expert in TypeScript, Angular, and scalable web application development. You write functional, maintainable, performant, and accessible code following Angular and TypeScript best practices.

## Project Overview

- Angular 22 app with SSR and hydration (`@angular/ssr`, Express server in `src/server.ts`)
- UI components: PrimeNG 22 (keep `primeng` >= 22.1.0; 22.0.x breaks signal forms `[formField]`)
- Styling: Tailwind CSS v4 with `tailwindcss-primeui`; PrimeNG styles live in the `primeng` CSS layer (order: `theme, base, primeng`)
- Layout:
  - `src/app/core/configs/` — application config (`app.config.ts`)
  - `src/app/core/providers/` — provider factories (e.g. `providePrimeNG()` in `prime-ng-provider.ts`)
  - `src/app/themes/presets/` — PrimeNG theme presets (`noirPreset`)
- Register new app-wide providers through a factory in `core/providers/`, then add it to `app.config.ts`
- Theme changes go through the preset's design tokens, not ad-hoc CSS overrides of PrimeNG classes

## Agent Tooling

- MCP servers:
  - `angular-cli` (`.mcp.json`) — use `list_projects`, `get_best_practices`, `search_documentation`, and `run_target` instead of shelling out to `ng` where possible
  - `primeng` (from the `primeng@primeui` Claude Code plugin) — use for PrimeNG component APIs, examples, and theming tokens instead of guessing
- Skills:
  - `angular-developer` — Angular code generation and best practices
  - `primeng:*` (plugin) — start with `primeng:primeng-router` for PrimeNG work
- Project skills are locked in `skills-lock.json` and stored in `.agents/skills/`. After cloning, run `npx skills experimental_install` to recreate the `.claude/skills/` links

## Code Style

- Do NOT add comments to code. This covers TypeScript, HTML templates, and CSS, including JSDoc, inline comments, and `TODO`s
- Do NOT add comments to files you edit either; leave existing comments as they are unless asked to change them

## TypeScript Best Practices

- Use strict type checking
- Prefer type inference when the type is obvious
- Avoid the `any` type; use `unknown` when type is uncertain

## Angular Best Practices

- Always use standalone components over NgModules
- Must NOT set `standalone: true` inside Angular decorators. It's the default in Angular v20+.
- Do NOT set `changeDetection: ChangeDetectionStrategy.OnPush` explicitly. `OnPush` is the default in Angular v22+.
- Use signals for state management
- Implement lazy loading for feature routes
- Do NOT use the `@HostBinding` and `@HostListener` decorators. Put host bindings inside the `host` object of the `@Component` or `@Directive` decorator instead
- Use `NgOptimizedImage` for all static images.
  - `NgOptimizedImage` does not work for inline base64 images.

## Accessibility Requirements

- It MUST pass all AXE checks.
- It MUST follow all WCAG AA minimums, including focus management and color contrast.
- Do NOT add `aria-label` attributes, `[attr.aria-label]` bindings, or PrimeNG `ariaLabel` inputs. Give controls an accessible name through visible text instead.

### Components

- Keep components small and focused on a single responsibility
- Use `input()` and `output()` functions instead of decorators
- Use `model()` for two-way bound properties with `[(prop)]` syntax instead of pairing `input()` with `output()`
- Use `computed()` for derived state
- Use `linkedSignal()` for state derived from multiple reactive sources that must stay synchronized
- Prefer inline templates for small components
- Prefer Signal Forms (`@angular/forms/signals`) for new forms. They are stable in Angular v22+ and provide signal-based state, type-safe field access, and schema-based validation
- When not using Signal Forms, prefer Reactive forms instead of Template-driven ones
- Do NOT use `ngClass`, use `class` bindings instead
- Do NOT use `ngStyle`, use `style` bindings instead
- Do NOT import `CommonModule`, import only the directives and pipes the template uses, such as `AsyncPipe` or `DatePipe`
- When using external templates/styles, use paths relative to the component TS file.

## State Management

- Use signals for local component state
- Use `computed()` for derived state
- Keep state transformations pure and predictable
- Do NOT use `mutate` on signals, use `update` or `set` instead

## Templates

- Keep templates simple and avoid complex logic
- Use native control flow (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`
- Use the async pipe to handle observables
- Do not assume globals like (`new Date()`) are available.

## Services

- Design services around a single responsibility
- Use the `providedIn: 'root'` option for singleton services
- Prefer the `@Service` decorator over `@Injectable({providedIn: 'root'})` for new singleton services (Angular v22+)
- Use the `inject()` function instead of constructor injection
