# Business Automation Development Phases

1. Define domain models, Skill DSL, validation, interpolation, and the Skill Runner skeleton.
2. Implement Browser Runtime actions, unique locator resolution, DOM Hover, and assertions.
3. Implement Frame Tree, same-origin routing, PostMessage and Extension transports, timeout, and cancellation.
4. Implement recording normalization, locator/FramePath generation, parameter detection, assertions, and Skill compilation.
5. Integrate `search_skills`, `get_skill`, `execute_skill`, `stop_skill`, Activity, and status with PageAgent.
6. Add retry, checkpoints, recovery, audit, permissions, and sensitive-operation confirmation.
7. Add failure capture, Repair Mode, proposal validation, new Skill versions, and human review.

Each phase must report completed work, added/modified files, core design, test results, remaining work, and the next phase. Run lint, typecheck, unit, integration, and E2E checks proportional to the changed scope. If a check cannot run, record the reason, risk, and unverified area.
