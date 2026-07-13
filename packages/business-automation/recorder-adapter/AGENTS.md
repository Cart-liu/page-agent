# Recorder Adapter Instructions

- 本模块只负责录制事件解析与 Skill 编译，不执行页面动作。
- 清理 mouse/pointer move 和无意义 focus/blur；合并 click 序列和连续 input。
- 保存完整 Frame Path、候选定位器、前后页面摘要及元素状态变化。
- 按稳定性优先级生成定位器，并生成参数、步骤名称及前后断言。
- 编译结果必须符合版本化 Skill Schema，且不得包含可执行 JavaScript。
- EventNormalizer、ParameterDetector、LocatorGenerator、AssertionGenerator 和 SkillCompiler 必须有单元测试。

