# PageAgent Plugin Instructions

- 插件保持薄适配，不承载 DOM Action 或 Skill 执行编排。
- 实现 `name/getTools/setup/dispose` 生命周期和 `createBusinessAutomationPlugin(...)` 工厂。
- 仅注册 `search_skills`、`get_skill`、`execute_skill`、`stop_skill`。
- `get_skill` 默认只返回摘要、输入 Schema、风险、确认要求、步骤数和版本。
- 敏感或不可逆操作必须人工确认；模型不得绕过权限、确认或断言。
- Skill 失败只进入 Repair Mode，不得默认转为自主页面操作。
- Activity 与停止信号必须向 Skill Runner 转发，且所有监听器可销毁。

