# Agent

Mastra-based AI agent for the travel assistant.

## Tests

Run unit tests:

```sh
pnpm test
```

An HTML report is written to `test-report/index.html` after every run. To open it:

```sh
cd test-report
npx http-server .
# Opens http://localhost:8080
```

## Evals

### Run evals

```sh
# Against a real LLM (requires OPENAI_API_KEY)
pnpm eval:run

# Against AIMock — deterministic, no API key needed
pnpm eval:aimock
```

### View results — interactive UI

```sh
pnpm eval:serve
# Opens http://localhost:3006
```

### View results — static HTML report

Export the last run to `eval-report/`:

```sh
pnpm eval:export
```

Then serve it locally:

```sh
cd eval-report
npx http-server .
# Opens http://localhost:8080
```

The `eval-report/` folder is self-contained — you can share it or attach it as a CI artifact.
