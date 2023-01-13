---
title: 'The Hydra Protocol Family — Scaling and Network Optimization for the Cardano Blockchain'
date: '2022-12-13'
lastmod: '2022-12-13'
tags: ['cardano', 'hydra', 'scaling', 'layer2']
draft: false
summary: 'How the Hydra heads protocol will allow for linear scalability of the Cardano blockchain.
'
images: []
authors: ['default']
layout: PostLayout
canonicalUrl: https://tailwind-nextjs-starter-blog.vercel.app/blog/the-hydra-protocol-family-scaling-and-network-optimization-for-the-cardano-blockchain
---

_How the Hydra heads protocol will allow for linear scalability of the Cardano blockchain._

![](https://miro.medium.com/max/875/0*fQ6G4n1FH0Hxazfj)

Blockchain technology has been revolutionising the way people interact with digital assets, allowing for secure and transparent transactions.

However, scalability and security remain a challenge for many of today’s blockchains. The Cardano project is working to address these issues by developing the Hydra protocol family, an ensemble of layer two solutions designed to enhance network security and scalability capabilities.

Let’s take a closer look at how Hydra works and why it is so important for blockchain technology. Enter the Basho phase of Cardano, which focuses on scaling and network optimisation through the Hydra protocol family and others.

## The Scaling problem

As Cardano gains adoption in multiple domains, the number of high volume small value transactions will explode. Unfortunately, this creates a lot of bloat on the mainchain and is also not that useful for transactions that need fast settlement speeds.

Think of RealFI, banks and microtransactions. It is not reasonable for these to take multiple seconds to minutes to settle.

If we are looking for Cardano to become the underlying foundation that the world and the future of Web3 will run on, then we need ways to differentiate between transactions and which ones should be settled on the mainchain and which should not.

One must remember that every single transaction made on a blockchain will be stored forever. So there is no need to store my five transactions per day at Starbucks to fuel my caffeine addiction; all this does is create useless data on-chain while making me wait for three minutes for the transaction to settle.

It makes sense to push these sorts of daily or recurring small-value transactions into specifically designed layer two solutions.

## The Multi-Headed Hydra — What is it?

Hydra is a set of layer two solutions designed to improve network security and scalability capabilities. It was first conceived by the Ouroboros research team, but since then it has evolved independently with its own unique features. Hydra protocols enable users to transact securely without compromising speed or scalability.

Hydra Head is the first protocol of the Hydra family and, in essence, works as an off-chain mini ledger between a small group of participants.

It allows for the creation of an off-chain natural extension of Cardano, with variable tx fees, script execution and protocol parameters. These heads will be used by a small group of participants who need to process many transactions quickly. This is similar to how the Lightning network on bitcoin works(just better).

Hydra introduces the concept of Isomorphic state channels. Simply put, each Head is highly compatible with Cardano, meaning it reuses the same ledger representation to yield uniform of-chain ledger siblings called heads.

The Isomorphic property of the heads allows for the keeping of security guarantees while remaining loosely coupled to the main chain, maximises throughput, minimises latency, incurring low to no cost, and greatly reduces storage requirements.

![](https://miro.medium.com/max/875/0*uWENVThhro17CjtX)

[https://hydra.family/head-protocol/use-cases/poker-game/](https://hydra.family/head-protocol/use-cases/poker-game/)

## How it works

Let’s run through the protocol steps from opening to closing a head using an easy-to-understand example and possible use case for Hydra; poker.

Like any other game, a poker game has a clear beginning and end and follows a set of agreed-upon rules. However, in the case of poker, the focus is on the monetary component, with players placing bids and exchanging money at each step of the game. Additionally, the game involves a fixed set of players who have conflicting goals (i.e. winning the game) but are still willing to work together based on the rules of the game.

In a poker game, each player can represent a Hydra Head member, running their own Hydra node. Each player starts a Head by committing funds to that Head, which are equivalent to their poker chips.

Once the Head is established, players can start playing the game using on-head Plutus contracts. These contracts allow players to transfer funds to one another within the Head instantly.

This is a simple example of how participants can use the Hydra Heads Protocol to play a game, with the rules of the game being enforced by a script acting as the dealer.

Eventually, the poker game will end, and the distribution of funds will be clear. At this point, players can choose to start a new game or close the Head and write the final result onto the Layer 1 of the Cardano blockchain.

The entire game, including all the transactions and interactions between players, is unknown to the Layer 1. The only information that is recorded on the Layer 1 is the final distribution of funds.

![](https://miro.medium.com/max/875/1*eHelZahk-pQwFToSUrR7KA.jpeg)

[https://hydra.family/head-protocol/core-concepts](https://hydra.family/head-protocol/core-concepts)

## Technical Breakdown

Now that we understand the general concept of a head let’s break it down further.

1.  **Initialisation —** The Head is opened by one member who posts an initial transaction and sets up the smart contract to control the Head.
2.  **Commit** — Group members then commit a particular set of transactions they would like to use within the hydra head.
3.  **Collect** — After an elapsed period or a specific member posting a transaction. The Head collects all the EUTxOs that have been committed, and they will be available for spending of-chain, i.e. locking them on the main chain.
4.  **Head runs —** The hydra head runs according to the contracts and parameters set up within the Head. Along the way, members create snapshots of the of-chain EUTxO set and compress the transaction history. Thanks to these snapshots, the **contest** phase is very short and independent of the length of the of-chain history.
5.  **Close —** Any head member can decide to close the Head by sending trans to the main chain. This can be due to the Head being complete in its use case or due to other reasons, such as security concerns. This allows any member who believes there are adversarial actors within the Head to leave and close it at any time. Within the closing transaction, the member informs the main chain what they think the current EUTxO set in the Head is.
6.  **Contest** — Time when honest members can contest the EUTxO set proposed by the closing member in the case that the member is an unfair participant within the Head. Due to the snapshots created while the Head is running, this process is significantly sped up.
7.  **Fanout** — After the contest is over, the of-chain EUTxO set will be available for spending on the mainchain and overwrites the locked set from the opening of the Head.

## Benefits and problems

- Greatly reduces the strain and data load on the main chain while also providing near-instant, cheap or even free transactions to its head members.
- Hydra heads have a significant advantage over zk rollups(another L2 solution). Due to hydra heads being isomorphic, transactions can be agreed upon instantly due to the parallel nature of the EUTxO model. In contrast, rollups have to have confirmation transactions verified on the main chain every so often and therefore, transaction confirmations have some delay.
- Hydra head reduces the overhead development costs that sidechains introduce by diverging from mainnet semantics, i.e. anybody programming on Cardano can also program for a head which is not the case for sidechains. It also lowers the attack vector as there is no need for an asset bridge.
- Consensus-wise, all head participants must agree for a transaction to be valid, i.e. multi-signature authorisation, meaning there can be no bad actor takeover of a head. However, this does pose the problem of participants always being needed to stay online and connected at all times. Although a solution being looked into for this is one of the uses of smaller mobile devices, which tend to be always on and connected nowadays.

## Looking to the future

The Hydra Heads Protocol has sparked a lot of interest but has also caused some confusion. This confusion may be due to the idea statement of the protocol rather than the actual implementation. The idea of ‘1,000,000’ TPS has been circling about ever since the revealing of the protocol; even I’m guilty of doing so.

Because Hydra is linearly scalable, i.e. you can create as many heads as you need depending on user demands, technically, and TPS figure is possible.

However, TPS is really not that useful of a metric. Think of a motorway and a made-up metric of VPS(Vehicles per second). Now imagine we have two different motorways, one has a VPS of 100 with mainly SUVs and Sedans, and the other with a VPS of 20 but only made up of busses.

The first motorway looks metrically better sitting at 100; however, one must realise that a motorway is not really for how many cars you can get along it but rather how many people. If each vehicle only carries two people, but a bus carries fifteen, then the second motorway, even though a lower metric, has more utility.

This is the same with TPS. So really, we don’t actually care how many transactions are occurring. What we do care about is the value that each transaction can provide. Think of it this way, each transaction has a certain width, and therefore, the utilisation of a blockchain is TPS\*VPT(Value per transaction).

The issue here is quantifying VPT or the “width metric”. However, here are three other values to consider when looking at the vitality of a blockchain.

1.  **Throughput**: the volume of data processed by a system in a given amount of time.
2.  **Time finality**: the time it takes for the result of some action to become immutable and true for everyone in the system.
3.  **Concurrency**: the amount of work that can be done by different actors without blocking each other.

Hydra Heads excel in achieving near-instant finality within a Head. This allows for use cases such as API services, micropayments, gaming, and RelFI/Defi/Dex’s, all to be built using heads on Cardano.

The use cases that Hydra opens up for Cardano are gigantic and, in reality, require their own dedicated article. From Project Catalyst to Micropayments to RealFi Bank to Bank transactions, hydra heads open up a world of possibilities to drive adoption for Cardano.

There is still much work to do on the protocol, and version 1.0 is yet to be reached. If you are interested in the development, take a look at the current [_roadmap that is now available on Github_](https://github.com/orgs/input-output-hk/projects/21)_!_

All in all, it is clear that implementing these protocols can bring significant improvements when it comes to enhancing both scalability and security on Cardano. By combining cutting-edge cryptography with innovative algorithms and efficient communication strategies, Hydra promises to provide users with fast transactions while keeping bloat and unnecessary transactions of the main chain. With smart contracts already in place, Basho is all about scaling up. Hydra unlocks the capability for Cardano’s ecosystem to support decentralised application development more effectively than ever before!
