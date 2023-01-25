---
title: 'How Cardano plans to Scale using Layer 1 Solutions'
date: '2022-11-23'
lastmod: '2022-11-23'
tags: ['cardano', 'blockhain','layer 1','scaling']
draft: false
summary: 'How Cardano is planning for the future by performance optimisation and scaling using Input Endorsers, Pipelining and more
'
images: []
authors: ['default']
layout: PostLayout
canonicalUrl: https://tailwind-nextjs-starter-blog.vercel.app/blog/how-cardano-plans-to-scale-using-layer-1-solutions
---

_How Cardano is planning for the future by performance optimisation and scaling using Input Endorsers, Pipelining and more._

![](https://miro.medium.com/max/875/0*Zx0Nps2_BQUhSf4L.jpeg)

Scaling is **Important**!

In simple terms, scaling is the ability of your product or service to meet the demands of its users without effect on performance, security and integrity of said product or service.

In Cardano and other blockchains alike, scaling is one of the most significant issues discussed for how blockchains will be able to meet the required capacity that will be needed if they are to play a prominent role in the future.

For example, Visa can process **24,000 transactions per second**, whereas bitcoin can only process **seven** and Ethereum **20**. Cryptocurrencies must catch up with VISA’s capability to achieve mass adoption, but being wary not to compromise on the core fundamentals of security and decentralisation.

There are two distinct scaling solutions for blockchains, **Layer 1’s and Layer 2’s**. L1 solutions focus on optimising the current blockchain and L2’s use of-chain processing to increase TPS. This article will focus on how Cardano plans to implement different types of L1 solutions.

## Input Endorsers

One way to scale a blockchain is to decrease the time between blocks, increasing the TPS. Currently, Cardano has a block production rate of **one block every 20 seconds**(look [here](https://medium.com/@mikeborman/ouroboros-a-deep-dive-for-non-phds-7016182e9782) for an in-depth explanation).

So let’s say we increase the chain density from 5% to 10%, meaning one block every 10 seconds. Well, that seems easy, right?

Not so fast; the delay between block production is there for a reason. It takes time for a **node to propagate messages of a new block to other nodes**. This time is needed to sync the nodes before the next block is created. Otherwise, the number of **chain forks would increase** without this synchronisation time. This is the idea of block propagation.

The increase in forks is due to some block producers starting to produce their block before they received the previous block. More forks are a security risk since it allows an attacker with less than 50% of the stake to create a longer chain.

The Idea behind Input Endorsers is to **split the blockchain into two**, one for **consensus** and the other for **transactions**.

Input endorsers keep track of all submitted transactions and bundle these transactions into pre-constructed blocks.

The blocks performing consensus will reference the pre-constructed blocks, which are constantly streamed without waiting for consensus to be achieved. This will improve the consistency of block propagation times and allow higher transaction rates.

![](https://miro.medium.com/max/875/1*PmKTJQlJAPUjypFbBznDqg.png)

As described by John Woods, the former Director of Cardano Architecture at IOG:

> 2023 will see the dawn of [Ouroboros Leios](https://www.youtube.com/watch?v=xKv94MwSNBw) (input endorsers), which will be a game-changer. It is expected that input endorsers are going to scale Cardano for the next half decade.

## Pipelining

Unfortunately, block propagation is a very linear set of steps; therefore, with an ever-expanding collection of nodes, the slower it is to get a block to reach the entire network.

Pipelining, which was introduced in the Vasil hard fork, speeds up block propagation, i.e. the time it takes for nodes to distribute new blocks across the ledger.

This is done by **pre-notifying.** Sending the block body to other nodes before the block is fully validated.

Diffusion propagation, in essence, attempts to parallelise some of the block diffusion processes(look [here](https://iohk.io/en/blog/posts/2022/02/01/introducing-pipelining-cardanos-consensus-layer-scaling-solution/) for more info).

![](https://miro.medium.com/max/875/0*RN5VaEwSJ6WC1Qxr)

## Tiered Pricing

Currently, Cardano transactions are all processed fairly. Every transaction is processed the same way, and there is no way to prioritise or “skip the queue”.

This could allow vulnerability to a **DOS attack** where useless transactions flood the network making it more challenging to process critical ones.

The **tiered pricing system** is a way to pay a higher transaction fee to ensure processing time. This is going to be critical in the future for time-sensitive applications.

Each block of transactions is split into three tiers:

- fair (50%)
- balanced (30%)
- immediate (20%)

![](https://miro.medium.com/max/500/0*sks-Zt9O9PhrImXw)

The fair portion operates normally, whereas the balanced and intermediate transaction sets have a higher transaction fee variable. This fee changes with the demands of the network, therefore, in theory giving certainty that a transaction will be processed if the higher transaction fee is paid.

The tiers can default back to the normal fee state at lower volume times. Check this [article](https://iohk.io/en/blog/posts/2021/11/26/network-traffic-and-tiered-pricing/) out for more info.

This covers the leading three L1 scaling solutions that are being implemented on Cardano. However, there are many more improvements, such as:

- Block size increase
- Memory /CPU parameters for Plutus
- Plutus script enhancements
- Node enhancements
- On-disk storage

In the following article, we will look at how L2s will take Cardano to the next level, even giving Cardano the possibility of 1,000,000 TPS.

If you want to learn more about the inner workings of Cardano, be sure to give me a follow as I will be coming out with Deep dives into every nook and cranny this blockchain has to offer.

Finally, if you would like to support this project more directly I’ll also pass on the tip hat:

- ADA wallet address — addr1q8xj9ep9e2prk43h56wqmx8ftwrgx8qanv2802q44yjdf8w2ynau7pc7qrszzu4myutvh89m6w70rxvfu6278tcce8qqwqfgt9
- Adahandle — $mikeborman

If you have any suggestions or wish to contact me, please feel free to reach out, **criticism appreciated above praise**:

mikeborman.ada@gmail.com

[https://twitter.com/blocksplained](https://twitter.com/blocksplained)
