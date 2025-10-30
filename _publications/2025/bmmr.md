---
title:          "BMMR: A Large-Scale Bilingual Multimodal Multi-Discipline Reasoning Dataset"
date:           2025-7-4 00:01:00 +0800
selected:       true
pub:            "Annual Conference on Neural Information Processing Systems (NeurIPS)"
# pub_pre:        "Submitted to "
# pub_post:       'Under review.'
pub_last:       ' <span class="badge badge-pill badge-publication badge-success">Poster</span>'
pub_date:       "2025"
semantic_scholar_id: 2f6481f3b5fad46a99711eebb3822d7b5c6d30bc
abstract: >-
  In this paper, we introduce BMMR, a large-scale bilingual, multimodal, multi-disciplinary reasoning dataset for the community to develop and evaluate large multimodal models (LMMs). BMMR comprises 110k college-level questions spanning 300 UNESCO-defined subjects, spanning diverse formats-multiple-choice, fill-in-the-blank, and open-ended QA-and sourced from both print and digital media such as books, exams, and quizzes. All data are curated and filtered via a human-in-the-loop and scalable framework, and each instance is paired with a high-quality reasoning path. The dataset is organized into two parts: BMMR-Eval that comprises 20,458 high-quality instances to comprehensively assess LMMs'knowledge and reasoning across multiple disciplines in both Chinese and English; and BMMR-Train that contains 88,991 instances to support further research and development, extending the current focus on mathematical reasoning to diverse disciplines and domains. In addition, we propose the process-based multi-discipline verifier (i.e., BMMR-Verifier) for accurate and fine-grained evaluation of reasoning paths. Extensive experiments on 24 models reveal that (i) even SOTA models (e.g., o3 and Gemini-2.5-Pro) leave substantial headroom on BMMR-Eval; (ii) reasoning models exhibit discipline bias and outperform LMMs only on specific subjects; (iii) open-source models still trail their proprietary counterparts; and (iv) fine-tuning on BMMR-Train narrows this gap. Additionally, we conduct reasoning-chain analyses using BMMR-Verifier and other in-depth studies, uncovering the challenges LMMs currently face in multidisciplinary reasoning.
cover:          /assets/images/covers/bmmr.png
authors:
  - Zhiheng Xi*
  - Guanyu Li*
  - Yutao Fan*
  - Honglin Guo*
  - Yufang Liu
  - Xiaoran Fan
  - Jiaqi Liu
  - Jingchao Ding
  - Wangmeng Zuo
  - Zhenfei Yin
  - Lei Bai
  - Tao Ji
  - Tao Gui
  - Qi Zhang
  - Philip Torr
  - Xuanjing Huang
links:
  Paper: https://arxiv.org/abs/2507.03483
  Homepage: https://bmmr.pages.dev
  Code: https://github.com/woooodyy/BMMR
  Dataset: https://huggingface.co/datasets/guanyu615/BMMR
---
