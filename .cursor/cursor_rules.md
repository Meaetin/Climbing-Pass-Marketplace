# Cursor Rules for Best Practices

## General Principles
- Write concise, technical code with accurate examples
- Use functional and declarative programming patterns; avoid classes
- Prefer iteration and modularization over code duplication
- Use descriptive variable names with auxiliary verbs (e.g., isLoading, hasError)
- Structure files: exported component, subcomponents, helpers, static content, types

## Code Style and Structure
- Use early returns whenever possible to make code more readable
- Always include proper error handling and validation
- Avoid unnecessary else statements; use if-return pattern instead
- Use guard clauses to handle preconditions and invalid states early
- Implement proper error logging and user-friendly error messages
- Keep functions small and focused on a single responsibility
- Follow consistent naming conventions specific to the language
- Always use proper indentation and formatting

## TypeScript Best Practices
- Use TypeScript for all code; prefer interfaces over types for object shapes
- Avoid enums; use literal types or maps instead
- Use functional components with TypeScript interfaces for props
- Never use 'any' type - use proper typing
- Use type inference when possible
- Enable strict mode and noImplicitAny

## React/Next.js Best Practices
- Use functional components exclusively
- Minimize 'use client', 'useEffect', and 'useState'; favor React Server Components (RSC)
- Wrap client components in Suspense with fallback
- Use dynamic loading for non-critical components
- Extract data fetching to separate components
- Create small, focused components
- Use proper prop naming (onClick, isLoading, etc.)
- Destructure props with types

## Performance Optimization
- Implement code splitting and lazy loading for non-critical components
- Optimize images: use WebP format, include size data, implement lazy loading
- Minimize bundle size by avoiding unnecessary dependencies
- Use memoization for expensive computations (useMemo, useCallback)
- Implement virtualization for long lists
- Use proper key props for list items

## Testing
- Write tests for all features
- Test behavior, not implementation
- Use appropriate testing libraries (Jest, React Testing Library, etc.)
- Mock external dependencies
- Follow consistent test naming conventions
- Implement both unit and integration tests

## Error Handling
- Prioritize error handling and edge cases
- Handle errors at the beginning of functions
- Use early returns for error conditions to avoid deeply nested if statements
- Place the happy path last in the function for improved readability
- Model expected errors as return values in functions
- Use error boundaries for unexpected errors

## Project Organization
- Maintain a clean and organized file structure
- Group related files and components
- Use descriptive file and directory names
- Keep components small and focused on a single responsibility
- Create more smaller files instead of fewer larger files

## Accessibility
- Implement proper semantic HTML
- Use appropriate ARIA attributes
- Ensure keyboard navigation support
- Provide alternative text for images
- Maintain sufficient color contrast

## Version Control
- Commit early and often
- Write clear and descriptive commit messages
- Create small, focused pull requests
- Review code changes carefully
- Use feature branches for new development

## Documentation
- Document complex logic and algorithms
- Use JSDoc comments for functions and components
- Keep documentation up-to-date
- Include examples in documentation
- Document known limitations and edge cases 