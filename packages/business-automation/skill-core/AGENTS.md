# Skill Core Instructions

- 本模块不得依赖 PageAgent、UI 或浏览器 DOM。
- Skill 使用版本化结构化 DSL，包含输入 Schema、match、步骤、断言、权限、元数据、语义版本和发布状态。
- 输入仅允许 `{{name}}` 安全插值；禁止 `eval`、任意 JavaScript 和任意 URL 请求。
- 每步严格执行 Resolve → Validate Before → Execute → Validate After → Commit。
- 前后断言失败、页面异常或结果不确定时立即停止。
- 支持停止、取消、超时、重试和 Checkpoint；恢复前必须重新验证页面与关键状态。
- 已发布 Skill 不得原地修改；修复通过新版本和审批/测试发布。
- Runner、Validator、Interpolator、RetryPolicy 和恢复逻辑必须有单元测试。

