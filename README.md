# Domain

Company name + domain creator

## Install

From the root of the repository, run:

```bash
$ pnpm install
```

## Adding / Removing / Upgrading Packages

```bash
$ pnpm add <package> --filter <workspace>
$ pnpm uninstall <package> --filter <workspace>
$ pnpm update <package> --filter <workspace>
```

## Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm run build
```

## Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm run dev
```
