---
title: 'Mithril: A Lightweight Protocol for Improved Scalability in Cardano'
date: '2022-12-30'
lastmod: '2022-12-30'
tags: ['cardano', 'blockhain','layer-2','scaling','mithril']
draft: false
summary: 'How the Mithril Protocol Uses Stakeholder Signatures to Solve Chain Synchronization, State Bootstrapping, and Trust Issues

'
images: []
authors: ['default']
layout: PostLayout
canonicalUrl: https://tailwind-nextjs-starter-blog.vercel.app/blog/mithril-a-lightweight-protocol-for-imporved-scalability-on-cardano
---

_How the Mithril Protocol Uses Stakeholder Signatures to Solve Chain Synchronization, State Bootstrapping, and Trust Issues_

![](https://miro.medium.com/max/875/1*sdWqxxvva6k0EvuQzlYAQA.jpeg)

Mithril is a research and engineering effort carried out by IOHK, the company behind the development of Cardano, a proof-of-stake blockchain. The goal of Mithril is to provide a stake-based threshold signature scheme that can be used as a protocol to address issues related to chain synchronisation, state bootstrapping, and trust in blockchain applications.

The name “Mithril” is inspired by the fictional metal from Middle-Earth, which is known for its strength and lightweight properties. Similarly, the Mithril protocol aims to offer a strong and lightweight solution for achieving scalability in blockchain systems.

In simple terms, Mithril allows participants who wish to verify the states or transactions on the blockchain without having to know the entire blockchain.

This is essential for usability. Most people use cellphones, laptops and browsers to interact with crypto, and if they cannot validate state and transactions, they have to rely on a third party for verification. Essentially, it centralises something that should be decentralised.

## ELI5 Section — skip for a more in-depth overview

Say you want to hold your Ada in Daedalus. The first thing you need to do because Daedalus is a ‘full node’ is to download the whole Cardano blockchain, going all the way back to the start.

This is already a very long download, taking about 6 hours and only getting bigger every day with additional transactions being added to the ledger.

For decentralisation, we want as many people to know the ledger and not rely on someone else to tell them what it is, which is where the problem arises. As the download gets bigger, fewer people will bother to do it, which would begin to centralise the blockchain.

Mithril aims to make it really quick to download the ‘whole’ blockchain. In essence, you are not really downloading the whole thing but using a verified snapshot or “save” of the blockchains state to get up to date.

These “saves” are done by multiple SPO’s using the mithril protocol taking a snapshot and then signing the snapshot to prove it is true.

## **Background**

In a proof-of-stake blockchain like Cardano, the consensus algorithm selects nodes to become block producers based on the stake they hold. For certain actions or messages, it is necessary for a specific number of stakeholders to provide their cryptographic signatures. The consensus protocol is responsible for three main tasks:

1. Perform a leader check and decide if a block should be produced.

2. Handle chain selection.

3. Verify produced blocks.

To make blockchain technology more scalable, it’s essential to simplify the complex processes that depend on the number of users. As the number of participants grows, it becomes harder to efficiently combine their signatures, which can slow down the system. In a typical scenario, every stakeholder would need to sign an individual message to represent a signature that speaks for the majority of stakeholders. While this is technically possible, it is inefficient in terms of scalability and speed.

Given the time and resources required for validating a particular message and synchronising the chain, it is important to provide a solution that allows for fast and efficient multi-signature aggregation without compromising security.

Mithril Protocol Design

Mithril is a protocol designed to:

1. Leverage stake to increase efficiency.

2. Ensure transparent setup without requiring increased trust settings.

3. Leverage trade-offs between size and efficiency, thanks to its modular component design.

Mithril operates in a public setting where signers don’t need to interact with each other to produce a valid signature. Instead, the aggregator combines all the signatures into one, and this process is logarithmic with respect to the number of signatures, resulting in sublinear performance for Mithril aggregation. For example, when applied to full-node clients like Daedalus, Mithril can improve full-node data synchronisation by increasing speed and decreasing resource consumption.

Mithril uses a stake-based threshold setting to represent a significant fraction of the total stake. This is different from the standard setting, in which a specific number of participants are required to validate a particular message. In the stake-based threshold setting, the protocol requires a fraction of the total stake to validate a given message and generate a correct signature.

Mithril also provides consensus certification in a trustless setting, meaning it does not require any additional trust assumptions beyond those already present in the proof of stake. For example, it can work within a wallet-as-a-service model, where the mobile client uses a certificate obtained from a Mithril node to achieve advanced security. This is potentially more efficient than using a traditional proof-of-stake blockchain verification (SPO) method, which requires additional trust assumptions.

## How it works

There are three elements to Mithril

- Mithril Aggregator
- Mithril Signer
- Mithril Client

**The aggregator**

The aggregator is responsible for holding the snapshot of the blockchain, which is sent to it by an observer. Producing the certificate for the regarding snapshot, and then aggregating and signatures to the certificate until the quorum is reached.

**The Signer**

This is an SPO who takes part in the mithril protocol and is responsible for building the snapshot and generating a verification key that it sends to the aggregator.

**The Client**

This is where the users of the protocol interact with the snapshots. The client downloads the snapshots and certificates from the aggregator, which can be used for blockchain synchronisation.

## **Snapshot certificates and consensus**

The certificates are vital to creating trustless and verifiable snapshots of the blockchain. There needs to be a certain number of signatures attached to a certificate to prove its validity. i.e. we need *n of m*, where n is the number of signatures and m is the number of members participating, to verify a certificate.

Mithril takes it a step further with stake-based multi-signatures, meaning it’s not just the number of signatures but also their stake. This adds another layer of security and confidence to the snapshots. This is parameterised by the value k, which is the size of the quorum needed for a certificate to be accepted.

Mithril enables a multi-party signature by allowing multiple parties to sign a message by holding a series of individual lotteries*(M)*. If a message is signed by a certain number of winners*(K)* from those lotteries, it is considered valid. Each user tries to sign the message and then passes their signature through a function that acts like a lottery.

This function lets users see if their signature is a winning lottery entry and outputs it without waiting. Once there are enough signatures from different lotteries, they can be combined into a single Mithril signature.

![](https://miro.medium.com/max/875/1*vzlLKKWS1Et5PfJ4q7YxRQ.jpeg)

[Phases of Mithril operation](https://iohk.io/en/blog/posts/2021/10/29/mithril-a-stronger-and-lighter-blockchain-for-better-efficiency/)

**Parameter Setup**

To use the Mithril protocol, users need to establish certain parameters. First, they must determine the group setting where cryptography will take place.

They also need to choose the number of elections they will hold, represented by the index range M, and set the quorum size K, which is the number of election winners that must sign a signature for it to be accepted.

It is also essential to provide a reference string for the proof system. This is possible in a transparent manner and does not require any high-trust assumptions.

**Initialisation**

During the initialisation phase, users should update the state distribution, which lets each stakeholder know their stake. They must also register their keys, which can be done on or off the chain.

Finally, users must distribute stake and compress their test keys using the Merkle tree. This allows Mithril signatures to be verified with a single hash representing the tree, which helps keep the state size needed to verify a signature small.

**Operation**

Users can create, combine, and confirm Mithril signatures when working with the chain. Creating signatures involves users attempting to verify if their generated signature is a winner in one of the parallel lotteries. If it is, the users will broadcast their signatures. If enough signatures support a specific message across different lotteries, they can be combined into a single Mithril signature. It can then be broadcasted and verified by anyone using just the reference string for the proof system and the short Merkle tree hash of stake distribution.

A single user can create a signature with Mithril as follows:

![](https://miro.medium.com/max/875/1*M-69Cvetpmtaco0lVWL67Q.jpeg)

[Mithril signature creation](https://iohk.io/en/blog/posts/2021/10/29/mithril-a-stronger-and-lighter-blockchain-for-better-efficiency/)

To start, a user will check their stake amount and use a score function to determine their score threshold T. They will then attempt to generate a candidate signature S.

For each index, they will evaluate whether the candidate signature they have created, paired with the message they have signed, produces a score value that is less than their threshold T when checked against the index number of the lottery.

If it does, the candidate signature they have generated is a winner on that particular index number. If not, they will try again.

After trying all possible indexes, users may have one or more indexes for which their signature S is valid. For each of those indexes, they can produce an individual signature that includes their candidate signature, the index number for which it is valid, and a proof that verifies their score is consistent with the registered stake.

## Benefits of Mithril

The Mithril protocol offers several benefits for the development of blockchain solutions:

1. Increased scalability: Mithril’s sublinear performance allows for efficient aggregation of signatures, which helps to improve scalability in a blockchain setting.

2. Mithril can also enable state bootstrapping, which refers to starting a new blockchain from scratch. This is achieved through the use of a bootstrapping node, which initialises the blockchain and sets the initial validator set.

The bootstrapping node is responsible for generating the first block and distributing it to the rest of the network. The use of Mithril’s stake-based threshold signature scheme ensures that the initial validator set is representative of the overall stake distribution, providing a fair and secure way to bootstrap the network.

Another potential use case for Mithril is in addressing trust issues in blockchain applications. Trust can be a significant concern in decentralised systems, as there is no central authority to verify the authenticity of information.

Mithril’s trustless consensus certification can help to alleviate these concerns by allowing nodes to reach consensus without the need for additional trust assumptions. This can be particularly useful in applications where trust is of particular importance, such as in supply chain management or financial transactions.

Mithril is a promising new project being developed by IOHK that aims to address several important challenges in the realm of blockchain technology.

Its stake-based threshold signature scheme has the potential to improve the scalability and efficiency of multi-signature aggregation, enable state bootstrapping, and address trust issues in decentralised applications.

As the project evolves and matures, it will be interesting to see how it is adopted and applied in the wider blockchain ecosystem.

Nevertheless, Mithril represents a significant step forward in developing secure and scalable blockchain solutions.
