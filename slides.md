---
theme: apple-basic
title: 用户要的不是锤子🔨
info: |
  ## 双钻模型 · 设计思维 · CUSS 案例
  一次关于「从问题出发」的分享
class: text-center
highlighter: shiki
drawings:
  persist: false
transition: slide-left
mdc: true
fonts:
  sans: 'Inter, Noto Sans SC'
  mono: 'JetBrains Mono'
  weights: '200,300,400,500,600,700,800,900'
  italic: false
---

# 用户要的不是锤子 🔨
"If the only tool you have is a hammer, everything looks like a nail."

**从对标分析到设计思维**

2026-05-28
@杜屈佳

<!--
开场：原本我是选的分享主题是“动画与Canvas图形”的，
自我介绍，工业设计背景转前端。
在做设计的时候，我发现「设计是发散的，有很多的想法，而前端是收敛，将最可行的方案进行实现。」
但其实，无论是发散还是收敛，都有一个共同的起点，那就是——“问题本身”。
如果我们连真实的问题是什么都没搞清楚，无论设计的方案再完美、前端代码写得再优雅，也只是在用一把精致的锤子，去砸一颗根本不需要砸的钉子。
-->

---
layout: section
transition: fade
---

 👋 当你遇到一个**完全陌生的领域**，你的反应是什么？

<ul>

<li v-click>🔍 直接搜索解决方案？</li>
<li v-click>📋 找同类产品抄一遍？</li>
<li v-click>🤔 先问「为什么会有这个需求」？</li>

</ul>
<!--
举例子：陌生环境
互动环节：让大家说几个答案，然后总结规律。
-->

---
layout: section
transition: fade
---

 # Benchmarking 对标分析

<ul>

<li v-click>设计师做新产品时用 <strong>对标研究</strong> 看行业天花板</li>
<li v-click>开发者找 <strong>最佳实践</strong>（如 Vue 最佳实践）</li>

</ul>

<!--
本质上是同一件事
引出 Benchmarking 概念，强调它不是抄，是理解行业边界。
「Benchmarking 是发散阶段的地图，帮你看清楚山在哪里，再决定爬哪座。」
举个例子
-->

---
layout: image-right
image: "/image/path"
transition: slide-left
---

# CUSS 自助值机

背景介绍

<!-- 右侧图片 -->
<!-- 背景 20 世纪 90 年代初，全球航空业在放松管制、燃油价格波动和票价竞争的多重压力下，普遍面临单位旅客服务成本过高的问题，为提高航班周转效率、减少高峰时期的排队拥堵，不少航空公司开始尝试用信息技术替代部分人工流程，自助值机因此成为一个自然的实验场景 -->
---
layout: two-cols
transition: slide-left
---

# CUSS 对标矩阵

**横向研究**：找同类做得最好的


**纵向研究**：跨行业的反差

<ul>

<li v-click>✈️ <strong>高铁火车</strong></li>
<li v-click>🍔 <strong>肯德基</strong></li>
<li v-click>🚰 <strong>自动售货机</strong></li>

</ul>


<!--
纵向跨行业类比，引发思考：同样是自助终端，差在哪里？
国内数据比较难获取，知名公司 SITA、Amadeus，看看行业天花板
这个系统的大多数问题，不是技术问题，是人的问题。旅客不用它，不是因为它坏掉了，而是因为——他们不觉得它是为自己设计的。这就引出了一个更根本的问题：我们在为谁做这个东西？
-->

---
layout: fact
transition: fade
---
# 设计思维？

<span v-click> 以人为本 </span>

<!-- 以人为本，从用户的真实需求出发，而不是从功能清单出发。 -->


---
layout: two-cols
transition: slide-left
---

# 谷歌首页

<div class="cb-case-copy">
  功能最强大的搜索引擎，界面就一个框
</div>

<div v-click class="cb-case-media">
  <img
    src="/images/drill/Google.png"
    alt="Google 首页"
    class="cb-case-image-rounded"
  />
</div>

::right::

<div v-click>

# 苹果 Apple TV 遥控器

  <div class="cb-case-copy">
    不是加按钮，是<strong>减按钮</strong>
  </div>

</div>

<div v-click class="cb-case-media">
  <img
    src="/images/drill/Apple TV Remote.png"
    alt="Apple TV 遥控器"
    class="cb-case-image max-w-[360px] w-[360px]"
  />
</div>

<!--
两个经典案例：谷歌和苹果。简洁即是设计思维的体现。
-->

---
layout: bullets
transition: slide-left
---

# 回到锤子的比喻

<div v-click>

技术是锤子。

有了电钻也好，AI 也好，你手里的工具越来越强。

</div>

<div v-click>

但用户来找你，不是因为你有锤子

</div>

<div v-click>


是因为他墙上想挂一幅画。

但挂画的目的是什么🫤？
</div>

<!--
但用户来找你，不是因为你有锤子——
是因为他想要墙上的那个孔，无论是锤子也好，电转也好，用户的需求还是没变。
但是深挖下去，钻孔的目的是什么？ 是为了挂画。但挂画的目的是什么？ 是为了装饰，是为了让家变的更加温馨的情感需求。
-->

---
transition: slide-left
---

# 用设计思维重看 CUSS

<div v-click>

❌ **表象问题**：系统界面不好看

</div>

<div v-click>

✅ **真实问题**：旅客在值机场景下的**焦虑感没有被解决**

</div>

<div v-click>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">

**真正的解法方向**：

减少认知负担 · 提前预判错误 

</div>

</div>

<!--
收敛：用设计思维重新定义问题，找到方向
-->

---
layout: section
transition: fade
---

# 「变的是工具，不变的是人」


<ul>

<li v-click>10 年前的设计稿会改变</li>
<li v-click>10 年前的代码也会改变</li>
<li v-click>技术栈每隔几年就换一批</li>

</ul>

<div v-click>

<div class="mt-6 p-4 bg-gray-50 border rounded">

🚇 **地铁自助购票机的故事**

设备还在，但用的人越来越少——

不是机器坏了，是手机 APP 更好地解决了「出行」这件事本身。

</div>

</div>

<!--
地铁购票机类比：被取代的不是功能，是解决问题的更好方式出现了。
-->

---
layout: quote
transition: fade-out
---



# “真正的护城河不是用了什么工具，

# 而是对**用户**、对**业务**有多深的理解。”




<!--
谢谢大家，希望我的分享对大家有帮助和启发。
-->


---
layout: bullets
transition: fade
---

# 参考资料
* [The Ontology Layer of Design - by Jens Jorgenson](https://figureandground.substack.com/p/the-ontology-layer-of-design)
* [Home | Laws of UX](https://lawsofux.com/)
* [SITA | Official website | Easy and safe travel every step of the way](https://www.sita.aero/)
* [Amadeus | It’s how travel works.](https://amadeus.com/en)
* [双钻模型：先做对的事，再把事做对 | Easy-Vibe 教程](https://datawhalechina.github.io/easy-vibe/zh-cn/stage-1/appendix-double-diamond/)
* [#526. Airbnb创始人Brian Chesky：AI时代的创始人模式、想象力与公司重塑 - 跨国串门儿计划 | 小宇宙 - 听播客，上小宇宙](https://www.xiaoyuzhoufm.com/episode/69fcd16e1b7bd50295af967f)
