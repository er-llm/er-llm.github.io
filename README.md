# er-llm.github.io
NeurIPS Workshop on Efficient Reasoning with LLMs

The unprecedented advances in the capabilities of Large Language Models (LLM-s) have been mostly driven by the scaling laws governing the dependence of model performance on its size, training data, and compute. Recent work has demonstrated that LLM-s can substantially improve their reasoning abilities on complex tasks by allocating inference time compute, allowing models to refine their Chain of Thought (CoT) reasoning trajectories and/or generating multiple reasoning paths that can be aggregated into a better response. While inference time scaling holds significant promise for pushing the frontier, it also poses a number of significant challenges that need to be addressed. Namely, generating large number of tokens during the thinking process introduces substantial computational overhead. The overarching objective of this workshop is to explore topics on the efficiency of test-time reasoning methods, including:

* Empirical scaling laws and their universality for inference-time reasoning
* Reasoning-aware accelerated decoding (e.g., speculative decoding, diffusion)
* Redundant CoTs and length-accuracy trade-off
* Efficient CoT compression techniques
* Latent vs. explicit reasoning, e.g. efficiency vs interpretability tradeoff
* Difficulty-adaptive reasoning and inference-time budget-control methods
* Generalist vs specialized reasoning approaches
* Reward Design for accurate and concise/efficient reasoning
* Efficient generation, search, and learning for multiple reasoning paths
* Multimodal efficient reasoning
* New benchmarks and unified metrics for performance-efficiency trade-off