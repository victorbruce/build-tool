# Linting

After setting up eslint in my project, I run the command `npm run lint` and got no errors or warnings.

## Extending ESLint to add my own custom rules

Below are some of my personal rules I set within my project aside the recommended eslint rules.

- `prefer-const` – encourages immutable variables
- `prefer-template` – cleaner string concatenation
- `no-vars`: It ensures you always use let or const, which have clearer, safer scoping rules and reduce bugs
- `prefer-destructuring`: It enforces the use of destructuring for object properties, but not for arrays.
