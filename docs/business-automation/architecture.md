# Business Automation Architecture

## Goal

Build an enterprise `BusinessAutomationPlugin` on PageAgent while keeping deterministic execution outside the Agent Loop.

## Dependency Direction

```text
PageAgent
  -> BusinessAutomationPlugin
  -> Skill Runner
  -> Browser Runtime
  -> Assertion Runner

Recorder Compiler -> Skill Registry -> Skill Runner
```

Dependencies must remain one-way. Skill Core and Browser Runtime must not depend on PageAgent or UI.

## Responsibilities

- PageAgent: intent, Skill discovery, parameter completion, confirmation, failure analysis, result presentation.
- Plugin: expose the four high-level tools and adapt PageAgent lifecycle, Activity, and cancellation.
- Skill Runner: validate and execute a recorded Skill in fixed order with assertions and checkpoints.
- Browser Runtime: locate elements, perform actions, route Frames, and read DOM state.
- Assertion Runner: independently establish whether each action and the whole Skill succeeded.
- Recorder Compiler: normalize recordings and emit a versioned, parameterized Skill DSL.

## MVP

The first vertical slice is recording → Skill compilation → search → `execute_skill` → Runner → Hover → Frame routing → postcondition → structured result.

Prefer new modules under `packages/business-automation/`. Reuse `packages/extension` for cross-origin Frame injection and native input adapters. Modify PageAgent core only when an extension point cannot provide the required capability.

