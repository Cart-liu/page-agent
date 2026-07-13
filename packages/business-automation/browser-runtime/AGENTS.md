# Browser Runtime Instructions

- 本模块不得依赖 PageAgent Agent Loop 或 UI。
- 每次元素动作携带完整 `framePath + locator`，禁止依赖全局当前 Frame。
- 定位默认必须唯一；0 个或多个匹配均失败；敏感步骤禁止模糊定位。
- Hover 前滚动居中并验证可见、无遮挡和中心点；DOM/Native 模式执行后都必须断言。
- Frame 模型和消息协议必须版本化；支持同源、受控 `postMessage`、Extension Transport 和多层路由。
- 消息校验协议、Schema、Origin、Frame 身份和请求响应关系，并支持超时和取消。
- 生产环境禁止不受限 `targetOrigin: '*'`。
- Locator、FramePath、Assertion、MessageValidator 和 Runtime Action 必须有测试。

