---
title: 'How Cardano plans to Scale using Layer 2 Solutions'
date: '2022-11-28'
lastmod: '2022-11-28'
tags: ['cardano', 'blockhain','layer 2','scaling']
draft: false
summary: 'How Cardano is leveraging off-chain scaling solutions to enable the next generation of dApps and projects to achieve a global effect.
'
images: []
authors: ['default']
layout: PostLayout
canonicalUrl: https://tailwind-nextjs-starter-blog.vercel.app/blog/how-cardano-plans-to-scale-using-layer-2-solutions
---

_How Cardano is leveraging off-chain scaling solutions to enable the next generation of dApps and projects to achieve a global effect._

![](https://miro.medium.com/max/875/0*35glnLexYL587CJ-)

## What are Layer 2’s

Unlike layer one solutions which work by implementing efficiencies into the blockchain itself(read my article [here](https://medium.com/@mikeborman/how-cardano-plans-to-scale-using-layer-1-solutions-c42b643e0e6c)). Layer 2’s provide additional solutions to the base chain by using off-chain computation.

A great analogy to use (taken from [this](https://iohk.io/en/blog/posts/2022/08/05/layer-1-layer-2-all-you-need-to-know/#:~:text=Layer%202%20scalability%20solutions%20in%20Cardano&text=EVM%20sidechains%20on%20Cardano%20include%20dcSpark%27s%20Milkomeda%20and%20IOG%27s%20EVM%20sidechain%20project.&text=Hydra%20is%20the%20layer%202,throughput%20and%20minimize%20transaction%20cost) blog) is one of a wedding cake with multiple tiers. The base layer is the blockchain itself. It provides the foundations and stability that allow the upper layers to sit on. L2s are the second layer of the cake; they inherit all of the structure from the base layer but can add extra flavours, fillings and designs without changing the elements in the first layer.

L2s are much like a section of a wedding cake. They are additional protocols built on the base blockchain that allows parties to transfer funds from the blockchain into the L2 securely. Settle transactions independently and, when required, transfer funds back to the base chain.

The base layer only has a certain width, no matter how efficient. To maintain integrity and security, protocols must be built to leverage this without placing undue pressure on the base layer.

![](https://miro.medium.com/max/875/0*K5aLLIyTg4QDJ7F8.jpg)

## The Power of Sidechains

Sidechains are a secure way to add features to the Cardano platform without adding additional complexity to the mainnet while providing additional alternative environments.

Side chains enhance programmability( the ability for programmers to build solutions with different parameters, languages and methods of control), Interoperability(how different chains can interact with each other safely and securely) and scalability.

Sidechains on Cardano are implemented using the KMZ Sidechains protocol. Allowing for the creation of a separate blockchain with different rules, features and environments to Cardano while also leveraging Cardano as its security and consensus layer.

Essentially, this allows developers to create their own blockchains without building them from the ground up. How time-consuming and inefficient would it be if every website or program had to develop its own version of TCP-IP or invent its own programming language?

The sidechains are linked to the Cardano network through a bridge that enables tokens and other digital assets to be ‘moved’ from one chain to another and used in its native smart contracts.

## EVM Sidechain

IOG has developed an EVM-compatible sidechain that looks to be launched on the magnet in 2023.

The sidechain will allow developers from Ethereum to build smart contracts in Ethereum’s native language solidity while leveraging Cardano to provide lower fees, security and an environmentally friendly platform.

The EVM sidechain will replace Ethereum’s proof-of-work consensus algorithm with Ouroboros Byzantine Fault Tolerance (OBFT) consensus protocol.

## Midnight

Recently unveiled at ScotFest 2022 is a privacy-based blockchain that allows users to exchange data while keeping desired transactions and blockchain data private. Based on zero-knowledge proof technology inspired by Zcash.

![](https://miro.medium.com/max/875/0*Tf_OPeXNRgWO-KFz)

## Hydra

Hydra is an L2 solution that works as an off-chain mini ledger between a small group of participants — similar to the central on-chain ledger but faster and more cost-efficient.

As Cardano gains adoption in multiple domains, the number of high volume small value transactions will explode. This creates a lot of bloat on the mainchain and is also not that useful for transactions that need fast settlement speeds. Think of RealFI, banks and microtransactions. It is not reasonable for these to take multiple seconds to minutes to settle.

Hydra Head(thus the name hydra, like the mythical creature) is a protocol that allows for the creation of an off-chain natural extension of Cardano, with variable tx fees, script execution and protocol parameters. These heads will be used by a small group of participants who need to process many transactions quickly. This is similar to how the Lightning network on bitcoin works(just better).

Hydra introduces the concept of Isomorphic state channels. Simply put, each head is highly compatible with Cardano in terms of transaction rules and script execution, keeping security guarantees and remaining coupled to the mainnet.

The heads reduce the storage capacity overheads on the main-chain and will create linear scaling capacity for Cardano. In the future, 1,000,000 tps or more will be achievable with Hydra in industries such as API services, micropayments, gaming, and RelFI/Defi/Dex’s.

![](https://miro.medium.com/max/875/0*ESCpn2bVr0U2tyfP)

Not this kind of Mithril

## Mithril

Leverages the Cardano network to provide snapshots of the blockchain states to resolve chain synchronisation, state bootstrapping and chain validation.

In simple terms, Mithril allows participants who wish to verify the states or transactions on the blockchain without having to know the entire blockchain.

This is essential for usability. Most people use cellphones, laptops and browsers to interact with crypto, and if they cannot validate state and transactions, they have to rely on a third party for verification. Essentially, centralises something that should be decentralised.

The benefits are greater security for light wallets and for full nodes faster validation of epochs, meaning much quicker bootstrap for full nodes.

It takes significant time to start a new node from scratch. With Mithril, starting a node from a predefined state is possible with the same security guarantees that the chain provides. i.e. You won’t have to download the entire blockchain to start a node.

In this article, I have only summarised the above concepts — each one equally deserving of its own article.

If you want to learn more about the inner workings of Cardano, be sure to give me a follow as I will be coming out with Deep dives into every nook and cranny this blockchain has to offer.

Finally, if you would like to support this project more directly I’ll also pass on the tip hat:

- ADA wallet address — addr1q8xj9ep9e2prk43h56wqmx8ftwrgx8qanv2802q44yjdf8w2ynau7pc7qrszzu4myutvh89m6w70rxvfu6278tcce8qqwqfgt9
- Adahandle — $mikeborman

If you have any suggestions or wish to contact me, please feel free to reach out, **criticism appreciated above praise**:

mikeborman.ada@gmail.com

[https://twitter.com/blocksplained](https://twitter.com/blocksplained)
