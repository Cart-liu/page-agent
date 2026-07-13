# Business Automation Security

- Enforce allowed origins, Frame origins, Tool and Skill permissions, tenant/user isolation, data scope, input Schema, and backend authorization.
- Require explicit human confirmation for `sensitive` and `irreversible` actions.
- Never allow the model to bypass permissions, confirmation, assertions, or published Skill versioning.
- Validate Frame protocol version, message Schema, origin, Frame identity, request/response correlation, timeout, and cancellation.
- Do not use unrestricted `targetOrigin: '*'` in production.
- Do not permit arbitrary JavaScript execution, `eval`, or arbitrary URL requests from Skill inputs.
- Redact credentials, tokens, and sensitive business fields from audit logs.
- Audit goals, Skills, parameters, actions, assertions, confirmations, repairs, stops, results, and errors; never store full model reasoning.

