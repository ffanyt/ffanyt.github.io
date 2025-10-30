---
title:          "Better know nothing than half-know anything: A Precise and Efficient Dataset for Scientific Reasoning in Language Models"
date:           2025-11-1 00:01:00 +0800
selected:       true
# pub:            "Annual Conference on Neural Information Processing Systems (NeurIPS) 2025"
# pub_pre:        "Submitted to "
pub_post:       'Under review.(To be released in few days)'
# pub_last:       ' <span class="badge badge-pill badge-publication badge-success">Poster</span>'
pub_date:       "2025"
semantic_scholar_id: xxx  # use this to retrieve citation count
abstract: >-
  Large Language Models (LLMs) have achieved remarkable progress in reasoning tasks, i.e., coding and mathematics. However, their ability to perform scientific reasoning remains significantly limited, probably hampered by the scarcity of high-quality scientific reasoning datasets. Existing approaches either rely on LLM-generated synthetic data (suffering from noise and hallucinations) or human-compiled documents (facing scarcity and non-standardization). In this paper, we empirically verify that integrating precise knowledge from original scientific documents with formalized questions and consistent answers can mitigate the need for large-scale data. Based on this insight, we design PreciSci, a pipeline for constructing multi-disciplinary scientific reasoning datasets. This pipeline involves extracting knowledge from reliable sources, refining questions for completeness and precision, applying multi-stage filtering to eliminate redundancy and noise, and refining answers to ensure reliable supervision. Leveraging PreciSci, we build Open-Sci, a precise and knowledge-dense scientific reasoning dataset. Experimental evaluations show that despite Open-Sci being less than one-sixth the size of state-of-the-art scientific reasoning datasets, it enables LLMs to achieve approximately 4.49% better performance across diverse discipline-specific benchmarks.
cover:          /assets/images/covers/opensci.png
authors:
  - Yutao Fan*
  - Yizhou Wang*
  - Zhiheng Xi*
  - Lintao Wang*
  - Jianyu Wu
  - Aoran Wang
  - Guanyu Li
  - Jiaqi Liu
  - Pengze Li
  - Heng Zhou
  - Jiayang Li
  - Wangmeng Zuo
  - LEI BAI
  - Shixiang Tang
  - Philip Torr
  - Zhenfei Yin
# links:
#   Code: https://github.com/woooodyy/BMMR
#   Unsplash: https://bmmr.pages.dev
---
