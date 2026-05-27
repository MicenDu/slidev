---
theme: ./theme
title: 用户要的不是锤子，而是让家变得更温馨
info: |
  面向前端组的分享：
  从 Benchmark 对标分析到设计思维双钻模型
  回到同一个问题：做页面之前，我们到底在解决什么问题？
class: text-center
drawings:
  persist: false
transition: slide-left
comark: true
duration: 35min
themeConfig:
  primary: '#b85c38'
---

---
layout: cover
background: linear-gradient(135deg, #f7efe4 0%, #ead9c4 45%, #d9b99b 100%)
class: text-left
---

# 用户要的不是锤子🔨
## 而是让家变得更温馨

<div class="mt-8 max-w-3xl text-lg leading-8 text-[#5e4630]">
  从 <strong>Benchmark 对标分析</strong> 到 <strong>设计思维双钻模型</strong><br>
  回到同一个问题：做页面之前，我们到底在解决什么问题？
</div>

<div class="mt-14 flex items-center gap-6 text-sm tracking-[0.18em] uppercase text-[#7f5a3d]">
  <span>Frontend Talk</span>
  <span class="opacity-40">|</span>
  <span>2026.05</span>
</div>

<div class="absolute right-14 top-16 h-54 w-54 rotate-6 rounded-[2rem] border border-white/60 bg-white/30 shadow-2xl backdrop-blur-sm">
  <div class="absolute left-7 top-7 text-6xl">🔨</div>
  <div class="absolute right-7 bottom-8 text-right text-sm leading-6 text-[#6f5138]">
    工具很重要<br>
    但结果更重要
  </div>
</div>

---
layout: intro
---

# 我是谁

工业设计出身。  
做设计的时候，我越来越容易碰到一个瞬间：

<div class="mt-8 text-2xl leading-10 text-[#3e2f23]">
  方案想清楚了，落地却总卡在“实现细节”和“协作断层”里。
</div>

<div class="mt-10 grid grid-cols-3 gap-5 text-left">
  <div class="rounded-2xl bg-[#f8f1e6] p-5">
    <div class="text-xs uppercase tracking-[0.2em] opacity-50">Before</div>
    <div class="mt-3 text-xl">先想形态</div>
  </div>
  <div class="rounded-2xl bg-[#f4e6d6] p-5">
    <div class="text-xs uppercase tracking-[0.2em] opacity-50">Then</div>
    <div class="mt-3 text-xl">发现需求实现难</div>
  </div>
  <div class="rounded-2xl bg-[#edd8c0] p-5">
    <div class="text-xs uppercase tracking-[0.2em] opacity-50">Now</div>
    <div class="mt-3 text-xl">开始自己撸代码</div>
  </div>
</div>

---
layout: statement
class: !bg-[#201915] !text-[#f6eadf]
---

# 技术是锤子

<div class="mt-6 text-3xl leading-12">
  框架、动画、组件库、Canvas、WebGL……
</div>

<div class="mt-10 text-4xl leading-14 text-[#f0bc8c]">
  但用户来找你，不是因为你有锤子。<br>
  而是因为他想把画挂上墙，让家变得更温馨。
</div>

---
layout: center
class: text-center
---

# 当你遇到一个完全陌生的领域或需求
## 第一反应是什么？

<div class="mt-12 grid grid-cols-3 gap-5 text-left">
  <div class="rounded-2xl border border-[#d7c1aa] bg-[#fffaf5] p-5">
    刷文档
  </div>
  <div class="rounded-2xl border border-[#d7c1aa] bg-[#fffaf5] p-5">
    问同事
  </div>
  <div class="rounded-2xl border border-[#d7c1aa] bg-[#fffaf5] p-5">
    直接开做
  </div>
</div>

<div class="mt-12 text-xl text-[#6f5138]">
  大多数人会先找方案。<br>
  但更稳的起点，往往是先定义问题。
</div>

---
layout: two-cols
layoutClass: gap-10
---

# 症状 vs 问题

::left::

### 常见做法

- 先列功能
- 先找参考
- 先做一个版本
- 先证明“我能做”

<div class="mt-8 rounded-2xl bg-[#faefe4] p-5 text-[#69472e]">
  更像是在治症状。
</div>

::right::

### 更稳的做法

- 先搞清楚谁在用
- 先搞清楚场景压力
- 先搞清楚任务目标
- 先确认问题是否真的值得做

<div class="mt-8 rounded-2xl bg-[#edf3ef] p-5 text-[#35563e]">
  这是在理解疾病。
</div>

---

# Benchmark 不是“抄竞品”

<div class="mt-8 rounded-3xl border border-[#d9c6b4] bg-[#fffaf6] p-8">
  <div class="text-3xl leading-12 text-[#3f2d20]">
    Benchmarking 是发散阶段的地图。<br>
    它帮你看清楚山在哪里，再决定爬哪座。
  </div>
</div>

<div class="mt-10 grid grid-cols-3 gap-5 text-left">
  <div class="rounded-2xl bg-[#f8f1e6] p-5">
    <div class="text-sm uppercase tracking-[0.2em] opacity-50">See</div>
    <div class="mt-3">行业把问题解决到什么程度</div>
  </div>
  <div class="rounded-2xl bg-[#f4e6d6] p-5">
    <div class="text-sm uppercase tracking-[0.2em] opacity-50">Compare</div>
    <div class="mt-3">不同路线的代价和边界</div>
  </div>
  <div class="rounded-2xl bg-[#edd8c0] p-5">
    <div class="text-sm uppercase tracking-[0.2em] opacity-50">Decide</div>
    <div class="mt-3">我们真正该收敛到哪一个问题</div>
  </div>
</div>

---
layout: two-cols
layoutClass: gap-10
---

# 这件事对前端也成立

::left::

### 设计师做的事

- 做新产品前看行业标杆
- 分析流程、交互、体验心智
- 找出可复用和不可复制的部分

::right::

### 开发者做的事

- 找最佳实践
- 看框架官方建议
- 看成熟系统如何处理复杂问题

<div class="mt-8 rounded-2xl bg-[#f9f3ea] p-5 text-[#5e4630]">
  本质上都是一件事：<br>
  在动手之前，先校准问题空间。
</div>

---
layout: section
---

# 第一颗钻：发散
## 你真的了解问题吗？

---

# CUSS 案例
## 用一个机场自助值机系统，看“找方案”和“找问题”的差别

<div class="mt-10 grid grid-cols-3 gap-5 text-left">
  <div class="rounded-2xl bg-[#f8f1e6] p-5">
    <div class="text-xs uppercase tracking-[0.2em] opacity-50">场景</div>
    <div class="mt-3">旅客自助值机</div>
  </div>
  <div class="rounded-2xl bg-[#f4e6d6] p-5">
    <div class="text-xs uppercase tracking-[0.2em] opacity-50">表象</div>
    <div class="mt-3">排队、犹豫、效率不稳定</div>
  </div>
  <div class="rounded-2xl bg-[#edd8c0] p-5">
    <div class="text-xs uppercase tracking-[0.2em] opacity-50">问题</div>
    <div class="mt-3">到底是功能不够，还是定义错了？</div>
  </div>
</div>

---
layout: two-cols
layoutClass: gap-10
---

# 横向研究

::left::

### 行业内看谁做得最好

| 系统 | 观察点 |
| --- | --- |
| 国内 CUSS | 流程统一度低，体验差异大 |
| SITA | 标准化强，多航司、多语言成熟 |
| Amadeus | 云端化、自助能力更完整 |

::right::

### 横向结论

- 不先看行业天花板，很容易把局部优化当进步
- 真正的差距，通常先体现在流程设计和容错能力
- 功能清单相似，不代表体验水平接近

---
layout: two-cols
layoutClass: gap-10
---

# 纵向研究

::left::

### 跨行业看相似场景

| 场景 | 结果 |
| --- | --- |
| 机场 CUSS | 仍有学习成本和焦虑感 |
| 铁路终端 | 被 App 大幅替代 |
| 地铁购票机 | 年轻用户明显绕开 |
| 肯德基点餐机 | 高峰分流效果显著 |
| 回转寿司平板 | 任务清晰，低门槛自助 |

::right::

### 纵向结论

- 旅客并不天然想“使用机器”
- 用户真正想完成的是出行任务
- 当移动端能更轻松地解决同一件事，机器就会被边缘化

---
layout: quote
---

# “差距不是功能少”
而是用户心智和使用场景的设计差距

---
layout: statement
class: !bg-[#1d1a17] !text-[#f4eadb]
---

# 我们做完对标分析之后

<div class="mt-8 text-4xl leading-14 text-[#efc291]">
  发现了一个令人不安的事实：<br>
  这个系统的大多数问题，不是技术问题，是人的问题。
</div>

<div class="mt-10 text-2xl leading-10 text-[#d6c2b0]">
  旅客不用它，不是因为它坏掉了。<br>
  而是因为他们不觉得它是为自己设计的。
</div>

---
layout: quote
---

# 这就引出了一个更根本的问题
我们到底在为谁做这个东西？

---
layout: center
class: !bg-[#130f0d] !text-[#f8ecdf]
---

<DoubleDiamondStorm />

---
layout: statement
class: !bg-[#130f0d] !text-[#f8ecdf]
---

# 我们不是在优化机器

<div class="mt-8 text-4xl leading-14 text-[#f2bc8d]">
  而是在降低旅客在值机场景下的焦虑。
</div>

---
layout: section
---

# 第二颗钻：收敛
## 设计思维告诉你怎么找真解

---
layout: two-cols
layoutClass: gap-10
---

# 什么是设计思维

::left::

### 一句话

以人为本。  
从用户的真实需求出发，  
而不是从功能清单出发。

::right::

### 接回“锤子”比喻

- 技术是锤子
- 组件、动画、AI 也是锤子
- 用户来找你，不是为了看锤子有多强
- 而是因为他墙上想挂一幅画

---
layout: two-cols
layoutClass: gap-10
---

# 两个熟悉的例子

::left::

### Google 首页

- 世界上最强的搜索引擎之一
- 首页却只有一个搜索框
- 强功能不等于高复杂度

::right::

### Apple TV 遥控器

- 不是不断加按钮
- 而是不断减少负担
- 真正优化的是决策成本

---

# 用设计思维重看 CUSS

<div class="mt-8 grid grid-cols-3 gap-5 text-left">
  <div class="rounded-2xl bg-[#f8f1e6] p-5">
    <div class="text-xs uppercase tracking-[0.2em] opacity-50">1</div>
    <div class="mt-3 text-xl">减少认知负担</div>
    <div class="mt-3 text-sm leading-6 opacity-70">
      不让旅客在高压场景里再做一次产品经理。
    </div>
  </div>
  <div class="rounded-2xl bg-[#f4e6d6] p-5">
    <div class="text-xs uppercase tracking-[0.2em] opacity-50">2</div>
    <div class="mt-3 text-xl">提前预判错误</div>
    <div class="mt-3 text-sm leading-6 opacity-70">
      把最常见的犹豫、误触和回退提前处理掉。
    </div>
  </div>
  <div class="rounded-2xl bg-[#edd8c0] p-5">
    <div class="text-xs uppercase tracking-[0.2em] opacity-50">3</div>
    <div class="mt-3 text-xl">和移动端打通</div>
    <div class="mt-3 text-sm leading-6 opacity-70">
      不把机器当终点，而把它当旅客任务链上的一个节点。
    </div>
  </div>
</div>

---
layout: statement
---

# 最好的自助系统

<div class="mt-8 text-4xl leading-14 text-[#6a4330]">
  是让用户感觉不像在用机器。
</div>

---
layout: fact
---

# 工具会变
技术栈每隔几年就会换一批

---
layout: two-cols
layoutClass: gap-10
---

# 设备没坏
## 只是“出行”被更好的方式解决了

::left::

### 地铁自助购票机

- 设备还在
- 流程也没坏
- 但越来越多人绕开它

::right::

### 手机 App

- 更熟悉
- 更连续
- 更贴近真实任务目标

<div class="mt-8 rounded-2xl bg-[#eef4ef] p-5 text-[#35563e]">
  用户不是放弃了功能。<br>
  用户只是选择了更顺手的路径。
</div>

---
layout: cover
background: linear-gradient(135deg, #201915 0%, #3b2b20 55%, #7f5230 100%)
class: text-left !text-[#f8ecdf]
---

# 用户要的不是锤子🔨
## 也不只是墙上的洞

<div class="mt-10 max-w-3xl text-2xl leading-10 text-[#f4d6b4]">
  他们要的是挂上画之后，<br>
  家真的变得更温馨。
</div>

<div class="mt-12 text-lg leading-8 text-[#d8c1ac]">
  不管你是设计师还是前端开发者，真正的护城河都不是你在用什么工具，<br>
  而是你对用户、对业务、对问题本身到底理解得有多深。
</div>

<div class="mt-14 text-xl tracking-wide text-[#efbb8b]">
  做页面之前，先确认你到底在解决什么问题。
</div>
