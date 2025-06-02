const WORKSHOP_DATA = {
    organizers: [
        {
            name: "Sravan Bodapati",
            affiliation: "Amazon AGI",
            email: "sravanb@amazon.com",
            image: "assets/images/organizers/sravan.jpeg",
            bio: "Sravan is a Principal Scientist at Amazon AGI, focusing on \
            cutting-edge Efficient Inference techniques for large language models. \
            Previously, as Senior Manager of Applied Science at AWS AI, he played an \
            instrumental role in developing robust AWS services, including Lex, \
            Comprehend, and Transcribe. His current work focuses on enhancing long \
            context modeling, optimizing speculative decoding, improving runtime \
            reasoning, and designing efficient LLM architectures for real-world \
            applications, many of which have been successfully deployed in Amazon Nova \
            offerings on Bedrock and Alexa+, impacting millions of users. He has \
            actively contributed to the academic community as chair and organizing \
            committee member for WeCNLP 2020 \& 2021, and served as Area Chair for NLP \
            and ASR tracks in Amazon's internal machine learning conference, helping \
            guide research directions within the organization.",
            website: "https://www.linkedin.com/in/justsravan/",
            google_scholar: "https://scholar.google.com/citations?hl=en&user=UjxTzEsAAAAJ&"
        },
        {
            name: "Beidi Chen",
            affiliation: "Carnegie Mellon University & Amazon AGI",
            email: "beidic@andrew.cmu.edu",
            image: "assets/images/organizers/beidi.jpeg",
            bio: "Beidi is is an Assistant Professor at Carnegie Mellon University and \
            a Research Scientist at FAIR. Before that, she was a postdoctoral scholar \
            at Stanford University. She received her Ph.D.from Rice University. Her \
            research focuses on efficient deep learning; specifically, she designs and \
            optimizes randomized algorithms on current hardware to accelerate large \
            machine learning systems. Her work has won best paper runner-up at ICML \
            2022 and she was selected as a Rising Star in EECS by MIT and UIUC. She \
            was a workshop chair for MLSys 2023 and 2024, and she co-organized many \
            workshops at ICML and NeurIPS.",
            website: "https://www.infini-ai-lab.cmu.edu/",
            google_scholar: "https://scholar.google.com/citations?user=jCNJhFcAAAAJ"
        },
        {
            name: "Tri Dao",
            affiliation: "Princeton University & Together AI",
            email: "tri@tridao.me",
            image: "assets/images/organizers/tri.jpeg",
            bio: "Tri is an Assistant Professor at Princeton University and chief scientist of Together AI. He completed his Ph.D. in Computer Science at Stanford. He works at the intersection of machine learning and systems, and his research interests include sequence models with long-range memory and structured matrices for compact deep learning models. His work includes FlashAttention and Mamba.",
            website: "https://tridao.me/",
            google_scholar: "https://scholar.google.com/citations?user=NQRw0bQAAAAJ&hl=en"
        },
        {
            name: "Aram Galstyan",
            affiliation: "University of Southern California & Amazon AGI",
            email: "argalsty@amazon.com",
            image: "assets/images/organizers/aram.jpg",
            bio: "Aram is an Amazon Scholar with the AGI org and a Research Professor \
            at the USC Viterbi School of Engineering's Computer Science Department. \
            Previously, he was the Director of the Artificial Intelligence Division at \
            USC Information Sciences Institute. His current work focuses on various \
            aspects of large language models, such as robustness, trustworthiness and \
            efficiency. He has published extensively in top venues in machine learning \
            and AI research. His university research has been supported by numerous \
            agencies, including DARPA, IARPA, NSF. He has co-organized various \
            workshops including TrustNLP at NAACL in 2023-2025, The First Workshop on \
            Personalized Generative AI at CIKM 2023, IJCAI 2020 workshop on Machine \
            Learning for Binary Analysis, and NSF-FAST 2017 workshop on ML for \
            Discovery Science.",
            website: "https://www.isi.edu/people-galstyan/",
            google_scholar: "https://scholar.google.com/citations?user=rJTwW0MAAAAJ&hl=en"
        },
        {
            name: "Bhavana Ganesh",
            affiliation: "Amazon AGI",
            email: "ganesh@amazon.com",
            image: "assets/images/organizers/bhavana.jpeg",
            bio: "Bhavana is an Applied Scientist in the Amazon AGI organization, \
            specializing in efficient inference methodologies for large language \
            models. She received her Master of Science degree in Electrical \
            Engineering, with emphasis on Machine Learning, from the University of \
            Southern California in 2018. During her three-year tenure at Amazon AGI, \
            she has been instrumental in advancing research on computational \
            efficiency in reasoning models. Her current research focuses on developing \
            sophisticated approaches for efficient inference in large-scale \
            AI systems, particularly addressing the challenges of resource \
            optimization in reasoning frameworks. Her work contributes to the \
            broader scientific discourse on making advanced AI systems more computationally tractable while maintaining their reasoning capabilities.",
            website: "https://www.linkedin.com/in/bhavanaganesh/",
            google_scholar: "https://scholar.google.com/citations?user=o1vjr2oAAAAJ&hl=en"
        },
        {
            name: "Suyu Ge",
            affiliation: "Meta",
            email: "suyuge2@illinois.edu",
            image: "assets/images/organizers/suyu.jpg",
            bio: "Suyu  is a research scientist at Meta GenAI. Before that, she \
            received her Ph.D. from UIUC and bachelor degree from Tsinghua University. \
            Her research focuses on efficient LLM training and inference, specifically \
            through sparse attention architecture and kernels. Her work has won best \
            paper runner-up at ICLR 2024.",
            website: "https://gesy17.github.io/",
            google_scholar: "https://scholar.google.com/citations?user=WuCV72gAAAAJ&hl=en"
        },
        {
            name: "Xinyin Ma",
            affiliation: "National University of Singapore",
            email: "maxinyin@u.nus.edu",
            image: "assets/images/organizers/xinyin.png",
            bio: "Xinyin is a PhD student at xML-Lab, National University of Singapore, advised by Prof. Xinchao Wang. She previously earned her Master’s and Bachelor’s degrees in Computer Science from Zhejiang University under the supervision of Prof. Weiming Lu. Her research focuses on efficient deep learning, including efficient inference of large language models and reasoning models, and the acceleration of diffusion models. She has proposed several widely recognized compression algorithms to accelerate generative models, such as LLM-Pruner and DeepCache, and has received over 3.5k stars on GitHub. She was awarded the Google PhD Fellowship in 2024 and was selected as a KAUST AI Rising Star in 2025. She has co-organized the 2nd workshop on Efficient Large Vision Models in CVPR 2025.",
            website: "https://horseee.github.io",
            google_scholar: "https://scholar.google.com/citations?user=jFUKS0oAAAAJ"
        },
        {
            name: "Aditya Krishna Menon",
            affiliation: "Google",
            email: "adityakmenon@google.com",
            image: "assets/images/organizers/aditya.png",
            bio: "Aditya is a research scientist at Google. Previously, he held positions at National ICT Australia, CSIRO Data61,and the Australian National University. He received his PhD from the department of Computer Science and Engineering from the University of California, San Diego in 2013. His research has studied the design and analysis of techniques for supervised learning problems under a range of adverse conditions (e.g., label noise, label imbalance), and their application to recommender systems and information retrieval. He received the Best Technical Contribution award at the ACM FAT* 2018 conference, and Honorable Mention for Outstanding Paper at the ICLR 2025 conference. Recently, his research has focussed on improved training and inference efficiency of LLM-s, with a focus on techniques such as model cascading and knowledge distillation. He served as co-chair of the workshop for \href{https://www.acml-conf.org/2022/committee.html}{2022 Asian Conference on Machine Learning (ACML)} and was co-organizer for the 2019 ACML \href{https://wsl-workshop.github.io/acml19.html}{Weakly Supervised Workshop}.",
            website: "https://akmenon.github.io/",
            google_scholar: "https://scholar.google.com.au/citations?user=li4mEfcAAAAJ&hl=en"
        },
        {
            name: "Jinwoo Shin",
            affiliation: "Korea Advanced Institute of Science & Technology (KAIST)",
            email: "jinwoos@kaist.ac.kr",
            image: "assets/images/organizers/jinwoo.webp",
            bio: "Jinwoo is an ICT endowed chair professor in Kim Jaechul Graduate School of AI at KAIST. He obtained the Ph.D. degree from Massachusetts Institute of Technology in 2010 with George M. Sprowls Award (for best MIT CS PhD theses). He was a postdoctoral researcher at Algorithms \& Randomness Center, Georgia Institute of Technology in 2010-2012 and Business Analytics and Mathematical Sciences Department, IBM T. J. Watson Research in 2012-2013. Dr. Shin's early works are mostly on applied probability and theoretical computer science. After he joined KAIST in Fall 2013, he started to work on the algorithmic foundations of machine learning. He received the Rising Star Award in 2015 from the Association for Computing Machinery (ACM) Special Interest Group for the computer systems performance evaluation community (SIGMETRICS). He is currently a senior area chair at NeurIPS, ICML and ICLR. He is also closely working with \href{https://www.rlwrld.ai/}{RealWorld}, a robotics foundation model startup as the chief scientist.",
            website: "https://alinlab.kaist.ac.kr/shin.html",
            google_scholar: "https://scholar.google.com/citations?user=m3eDp7kAAAAJ&hl=en"
        },
        {
            name: "Siyan Zhao",
            affiliation: "University of California, Los Angeles",
            email: "siyanz@g.ucla.edu",
            image: "assets/images/organizers/siyan.jpg",
            bio: "Aram is an Amazon Scholar with the AGI org and a Research Professor \
            at the USC Viterbi School of Engineering's Computer Science Department. \
            Previously, he was the Director of the Artificial Intelligence Division at \
            USC Information Sciences Institute. His current work focuses on various \
            aspects of large language models, such as robustness, trustworthiness and \
            efficiency. He has published extensively in top venues in machine learning \
            and AI research. His university research has been supported by numerous \
            agencies, including DARPA, IARPA, NSF. He has co-organized various \
            workshops including TrustNLP at NAACL in 2023-2025, The First Workshop on \
            Personalized Generative AI at CIKM 2023, IJCAI 2020 workshop on Machine \
            Learning for Binary Analysis, and NSF-FAST 2017 workshop on ML for \
            Discovery Science.",
            website: "https://siyan-zhao.github.io",
            google_scholar: "https://scholar.google.com/citations?user=Q7c4FaYAAAAJ"
        },
        // Add more organizers as needed
    ],

    invitedSpeakers: [
        {
            name: "Danqi Chen",
            affiliation: "Associate Professor of Computer Science at Princeton",
            image: "assets/images/speakers/danqi.webp"

        },
        {
            name: "Azalia Mirhoseini",
            affiliation: "Assistant Professor of Computer Science at Stanford",
            image: "assets/images/speakers/azalia.webp"

        },
        {
            name: "Jianfeng Gao",
            affiliation: "Distinguished Scientist and Vice President at Microsoft",
            image: "assets/images/speakers/jianfeng.jpg"

        },
        {
            name: "Yuandong Tiang",
            affiliation: "Director of Research Science at Meta GenAI",
            image: "assets/images/speakers/yuandong.webp"

        },
        // Add more speakers as needed

    ],

    programCommittee:  [
        { name: "Gongfan Fang", affiliation: "NUS", },
         { name: "Zigeng Chen", affiliation: "NUS", }, 
         { name: "Xiangchen Song", affiliation: "CMU", }, 
         { name: "Saket Dingliwal", affiliation: "Amazon", }, 
         { name: "Woomin Song", affiliation: "KAIST", }, 
         { name: "Sai Muralidhar Jayanthi", affiliation: "Amazon", }, 
         { name: "Hrayr Harutyunyan", affiliation: "Google", }, 
         { name: "Zitong Yang", affiliation: "Stanford / Apple", }, 
         { name: "Niklas Muennighoff", affiliation: "Stanford", }, 
         { name: "Qinging Zheng", affiliation: "Meta", }, 
         { name: "Wittawat Jitkrittum", affiliation: "Google", }, 
         { name: "Hyunwoo Kim", affiliation: "NVIDIA", }, 
         { name: "Jaehyung Kim", affiliation: "Yonsei University", }, 
         { name: "Jihoon Tack", affiliation: "KAIST / Microsoft", }, 
         { name: "Haneul Yoo", affiliation: "KAIST", }, 
         { name: "Yufeng Du", affiliation: "UIUC", }, 
         { name: "Shivam Agarwal", affiliation: "UIUC", }, 
         { name: "Runpeng Yu", affiliation: "NUS", }, 
         { name: "Songhua Liu", affiliation: "NUS", }, 
         { name: "Daewon Choi", affiliation: "KAIST", }, 
         { name: "Luca Viano", affiliation: "EPFL", }, 
         { name: "Yongtao Wu", affiliation: "EPFL", }, 
         { name: "Devaansh Gupta", affiliation: "UCLA", }, 
         { name: "Jianing Li", affiliation: "Inception AI Labs", }, 
         { name: "Hriitk Bansal", affiliation: "UCLA", }, 
         { name: "Daniel Israel", affiliation: "UCLA", }, 
         { name: "Neal Lawton", affiliation: "Capital One", }, 
         { name: "Fei Wang", affiliation: "Google", }, 
         { name: "Jiawei Zhao", affiliation: "CalTech", }, 
         { name: "Mostafa Elhoushi", affiliation: "Meta", }, 
         { name: "Harry Dong", affiliation: "CMU", }, 
         { name: "Zhenyu Zhang", affiliation: "UT Austin", }, 
         { name: "Ema (Zichang) Liu", affiliation: "Meta, Rice", }, 
         { name: "Simran Arora", affiliation: "Stanford", }, 
         { name: "Minjia Zhang", affiliation: "UIUC", }, 
         { name: "Benjamin Spector", affiliation: "Stanford", }, 
         { name: "Lucas (Liyuan) Liu", affiliation: "Microsoft, UIUC", }, 
         { name: "Sabri Eyuboglu", affiliation: "Stanford", }, 
    ]
};