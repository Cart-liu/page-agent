# Business Automation Instructions

## Workflow

- 默认使用中文回复；源码标识符、代码注释、协议名和错误码使用英文。
- 编码前先完成仓库与接入点分析，输出拟增改文件、依赖图、MVP 和风险；不得一次性重写 PageAgent。
- 每阶段结束报告完成内容、文件、设计、测试、未完成内容和下一阶段。
- 成功结果必须有断言依据；无法确认正确时立即停止。

## Architecture Boundaries

- 调用链固定为 PageAgent → Skill Tool → Skill Runner → Browser Runtime → Assertion Runner。
- PageAgent 只负责意图、Skill 选择、参数、确认、失败分析和结果汇总。
- Skill Runner 确定性执行录制步骤；禁止模型重规划。
- Browser Runtime 负责 DOM、Hover、Frame 和状态读取，不依赖 Agent Loop 或 UI。
- Recorder Compiler 只负责事件到版本化 Skill DSL 的编译。
- 仅向模型暴露 `search_skills`、`get_skill`、`execute_skill`、`stop_skill`。
- 失败不得默认切回自主点击；Repair Mode 仅返回经程序验证的结构化建议。

## Engineering Rules

- TypeScript strict；避免 `any`，使用明确领域类型和判别联合。
- 所有异步操作支持 `AbortSignal` 和超时；监听器可销毁；错误码稳定且结构化。
- 所有修改配套测试，不得削弱类型、断言或安全校验以通过测试。
- 优先通过插件、`customTools` 和 Adapter 接入；仅在底层能力无法扩展时修改 PageAgent 上游模块。
- 完整架构、安全和阶段说明见 `docs/business-automation/`。

