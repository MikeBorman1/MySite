---
title: 'A deep dive into Sidechains; Unlocking Cardano’s potential'
date: '2022-11-30'
lastmod: '2022-11-30'
tags: ['cardano', 'blockhain','sidechains','scaling','layer 2']
draft: false
summary: 'The importance of sidechains, how they work and what they will achieve in terms of scalability and functionality for the future of Web 3.0
'
images: []
authors: ['default']
layout: PostLayout
canonicalUrl: https://tailwind-nextjs-starter-blog.vercel.app/blog/a-deep-dive-into-sidechains-unlocking-cardanos-potential
---

_The importance of sidechains, how they work and what they will achieve in terms of scalability and functionality for the future of Web 3.0_

![](https://miro.medium.com/max/875/1*CDcs5fR1a1NK3MAeIC_4Xg.png)

Simply put, a sidechain allows value, in the form of currencies, tokens, native assets, information and more from **one blockchain to be transferred and utilized on another blockchain** through a mechanism called a **two-way peg**, also known as a bridge.

Side chains enhance **programmability**( the ability for programmers to build solutions with different parameters, languages and methods of control), **Interoperability** (how different chains can interact safely and securely) and **scalability**. In addition, they alleviate throughput and strain by offloading transactions off the main chain onto specialized sidechains.

Interoperability is one of the three pillars underlying the effectiveness of any decentralized blockchain ecosystem, especially Cardano.

Taken from IOHK themselves:

> No single blockchain will transform the entire digital infrastructure for the better.
>
> Over time there is a need for dedicated sidechains that enable a more diverse network of developers to join Cardano and the tools needed to support the development of applications for specific use cases.
>
> IOG plans to create a ‘family’ of sidechains that will bring greater scalability, Interoperability, and programmability to Cardano.

## Sidechains on Cardano

Sidechains can exist in two forms. The first case is where two independent, **standalone blockchains** develop a mechanism to communicate and transact value between their ecosystems through a bridge and both chains are treated as equals.

In this way, Cardano can be connected to other chains such as Ethereum, Polkadot and Solana. However, these connections are vulnerable through their bridge mechanisms as most chains have yet to be developed to be interoperable from the ground up. i.e. these bridges work as band-aide style patches and are very susceptible to hacks, as already seen multiple times in the crypto space with the Ronin bridge hack, for example.

The other form of a sidechain is the **parent-child relationship type**. In this case, a sidechain is a child of the parent chain (Cardano). The genesis block is seeded from the parent blockchain along with core features that allow developers to create their blockchains without building them from the ground up.

How time-consuming and inefficient would it be if every website or program had to develop its own version of TCP-IP or invent its own programming language?

**Why is this so Important?**

What do all blockchains want:

- Decentralization
- Security
- Infrastructure
- Liquidity
- An Ecosystem

Cardano has **all of these**, so it makes sense to leverage them when building a new blockchain.

Sidechains on Cardano are seen as a **Partnership,** Cardano provides the above-mentioned characteristics, and in return, the **sidechain provides niche features**, **scalability** and sometimes even **staking rewards**.

To repay the SPOs that are maintaining the sidechain ledger, the chain-specific token(if there is one) can be distributed to the delegators on the mainchain. For example, the Midnight blockchain aims to do this with its DUST token.

While this is certainly not necessary, one advantage of creating a sidechain is that the developers do not need to worry about creating their own currency, simply using the liquidity from the parent chain.

![](https://miro.medium.com/max/875/0*r2tYqZxjITzcZDS_.jpg)

## So how do these work?

Let’s take the transfer of tokens for simplicity. First, we need a method the safely and securely transfer tokens from the mainchain to the sidechain and back again. This is done using the **Lock-Mint-Burn-Unlock** method, which underpins the vast majority of the bridges in the blockchain space currently, with the main difference being how the validation for the burning and minting of tokens is handled.

The general concept is,

1.  A transaction on the mainchain will lock up an asset in a smart contract.
2.  Another smart contract picks up proof of this locked transaction on the sidechain and, if valid, mints the token on its chain.
3.  To transfer the asset back to the mainchain, another contract will burn, i.e. destroy the token.
4.  The mainchain will validate proof of burn and unlock the token held in the smart contract.

The way these **proofs** work is the key security concept behind these bridges and will vary with the type of blockchain. For PoW chains, PoPoW is used to show that a transaction is valid. This method is defined in a paper written by IOHK referred to as the [KMZ sidechains protocol](https://iohk.io/en/research/library/papers/non-interactive-proofs-of-proof-of-work/).

The protocol outlines Non-Interactive-Proofs-of-Proof-of-Work and how they can efficiently prove work to another chain without sending the entire chain over as proof.

Another [paper by IOHK](https://iohk.io/en/research/library/papers/proof-of-stake-sidechains/) defines how PoS sidechains can be implemented in the fashion described above. In addition, **merged staking** is introduced as a method to give the sidechain the same security as the mainchain without any stake needing to be moved across to the sidechain.

![](https://miro.medium.com/max/875/0*USUlg-Ub6a5P00ES)

## Sidechains already exist in Cardano natively.

A commonly unknown fact is that Cardano already **has a native sidechain**.

Cardano is split up into two blockchains, the **CSL**(Cardano Settlement Layer) and the **CL**(Computational layer), where the **CL** is, in fact, a sidechain of the **CSL**. ADA, Cardano’s native token, sits on the **CSL**, a simple blockchain with the main task of providing security and consensus, gaining security from its simplicity due to its highly auditable nature. In other words, there is a **limited attack surface** meaning the number of possible things that could go wrong is small.

So we don’t want to overcomplicate the CSL by adding more features such as Turing completeness or smart contracts.

That’s where we get the CL, the computational layer that is a different chain but still part of the Cardano ecosystem. ADA can move between both these chains to utilize their various features. When you keep your ADA on the Cl, you **lower security** but increase **feature richness**.

## The Firewall Property

The whole point of sidechains is to allow developers to create entirely new environments with new rules and features. Unfortunately, this will inevitably lead to security breaches on these chains, as most will be built for functionality, not security.

Here is where the firewall property for sidechains comes in. Say if there is a catastrophic failure on a sidechain, you don’t want that failure, i.e. a double spend, to be propagated back to the main chain and collapse both blockchains. So when the mainchain sends its native token, in this case, ADA, it **works like a loan**; you can never move more ADA back to the mainchain than has been loaned to the side chain.

Hence, keeping the integrity of the main chain even if a sidechain collapses.

While sidechains increase Interoperability by connecting many blockchains, the sidechain architecture builds in **non-obstructive compartmentalization** that allows the rest of the ecosystems to thrive in light of a security breach event.

## Benefits of the Sidechain Model

Benefits can be broken down into three main departments:

**Interoperability**

The most significant feature of sidechains on Cardano is the ability to interact with other chains for specific purposes, while the security and features of these chains cannot negatively affect Cardano due to the firewall property.

It allows anybody to create a chain with their own parameters and features while using Cardano as their settlement layer. So, for example, a bank like JP Morgan could create its own regulated and permission-driven banking blockchain, a sidechain of Cardano, allowing for the regulation of fund movements. Although it is good to note that these chains are not always secure and could be malicious, it is up to the user if they wish to transfer funds from the main chain to a side chain.

**Scalability**

As Cardano sees greater adoption and greater volumes and types of transactions the protocol will need to scale with this demand. Sidechains can be set up for each industry/use case utilizing Cardano. These transactions are created and validated off the chain, reducing the throughput and strain on the main Cardano network.

**Upgradability**

Over time the demand for different use cases increases for the blockchains, instead of new standalone blockchains being created every time for each unique use case. One could create a sidechain on Cardano, meaning you don’t have to worry about creating a new token or building the blockchain from scratch; the foundations are already built for you.

This way, Cardano can be “upgraded” with endless features that work as an opt-in style of system. Furthermore, users who wish to use the features can transfer their funds from the mainchain to the sidechain and utilize these features. In contrast, users who do not trust the features can keep the ADA on the mainchain without being affected.

Upgradability is very important; think of the BTC-Bitcoin cash block size wars. If bitcoin had sidechains, cash wouldn’t have to be a standalone chain, and BTC users could opt-in to use this blockchain. In a way, Side chains can be thought of as programming modules. They are an extra function set that can be called upon to provide special utilization.

This way, sidechains prevent hard forks. People can launch their own versions of Cardano with new features as a sidechain, and users can decide which chain they wish to use. Potentially that could be the sidechain, and eventually, assets would naturally migrate making it the main chain.

Furthermore, sidechains provide additional security as features can be tested on the mainet and not, for instance, like a hard fork where it is only available to be tested on the test net before going live, leading to more significant security vulnerabilities.

## EVM Sidechain

IOG has developed an EVM-compatible sidechain that looks to be launched on the magnet in 2023.

The sidechain will allow developers from Ethereum to build smart contracts in Ethereum’s native language solidity while leveraging Cardano to provide lower fees, security and an environmentally friendly platform.

The EVM sidechain will replace Ethereum’s proof-of-work consensus algorithm with Ouroboros Byzantine Fault Tolerance (OBFT) consensus protocol.

## Midnight

Recently unveiled at ScotFest 2022 is a privacy-based blockchain that allows users to exchange data while keeping desired transactions and blockchain data private. Based on zero-knowledge proof technology inspired by Zcash.

![](https://miro.medium.com/max/875/0*Sq3f-RPVvcG1gFMm.png)

## Wanchain

Wanchain is both a sustainable layer 1 PoS blockchain and a decentralized blockchain interoperability solution. Cardano aims to create a sidechain bridge to the Wanchain network which will allow access to multiple other heterogeneous blockchains. Read [this article](https://iohk.io/en/blog/posts/2022/07/08/bridges-and-sidechains-wanchain-making-cardano-interoperable/) to learn more.

Thanks for reading; while this article attempts to dive more in-depth into how sidechains will work on Cardano, a lot was left out. I recommend taking a look at the [sidechain papers](https://iohk.io/en/research/library/) written by IOHK to gain a more technical understanding.

Another thing to note is that sidechains and their integration with Cardano are an evolving feature set that is constantly being changed and refactored. Therefore, the main concepts in the article will most likely remain valid for the time being; however, slight details may be subject to change.

If you want to learn more about the inner workings of Cardano, be sure to give me a follow as I will be coming out with Deep dives into every nook and cranny this blockchain has to offer.

Finally, if you would like to support this project more directly I’ll also pass on the tip hat:

- ADA wallet address — addr1q8xj9ep9e2prk43h56wqmx8ftwrgx8qanv2802q44yjdf8w2ynau7pc7qrszzu4myutvh89m6w70rxvfu6278tcce8qqwqfgt9
- Adahandle — $mikeborman

If you have any suggestions or wish to contact me, please feel free to reach out, **criticism appreciated above praise**:

mikeborman.ada@gmail.com

[https://twitter.com/blocksplained](https://twitter.com/blocksplained)
