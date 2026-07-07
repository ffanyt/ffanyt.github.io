---
title:          "Select-then-Solve: Paradigm Routing as Inference-Time Optimization for LLM Agents"
date:           2026-4-8 00:01:00 +0800
selected:       false
pub:            "preprint"
pub_last:       ' <span class="badge badge-pill badge-publication badge-success">Preprint</span>'
pub_date:       "2026"
cover:          /assets/images/covers/select-then-solve.webp
semantic_scholar_id: 6db71f6d4c28327e3451e9e199d4ac7f12cddeee
abstract: >-
  We investigate whether LLM agent improvements come from the model or the reasoning approach. Testing six inference-time paradigms (Direct, CoT, ReAct, Plan-Execute, Reflection, ReCode) across four frontier LLMs and ten benchmarks, we find that reasoning structure helps dramatically on some tasks but hurts on others—no single paradigm consistently excels, but oracle per-task selection outperforms fixed paradigm approaches. We propose an embedding-based router that selects the optimal paradigm for each task, achieving 53.1% accuracy compared to 50.3% for the best fixed approach, recovering up to 37% of the oracle gap. Paradigm selection should be task-specific rather than architecturally fixed.
authors:
  - Heng Zhou
  - Zelin Tan
  - Zhemeng Zhang
  - Yutao Fan
  - Yibing Lin
  - Li Kang
  - Xiufeng Song
  - Rui Li
  - Songtao Huang
  - Ao Yu
  - Yuchen Fan
  - Yanxu Chen
  - Kaixin Xu
  - Xiaohong Liu
  - Yiran Qin
  - Philip Torr
  - Chen Zhang
  - Zhenfei Yin
links:
  Paper: https://arxiv.org/abs/2604.06753
---
