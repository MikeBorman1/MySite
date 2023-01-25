---
title: 'An Intorduction to Cardano'
date: '2022-11-11'
lastmod: '2022-11-11'
tags: ['cardano', 'blockhain']
draft: false
summary: 'An introduction to everything you need to know about Cardano
'
images: []
authors: ['default']
layout: PostLayout
canonicalUrl: https://tailwind-nextjs-starter-blog.vercel.app/blog/an-introduction-to-cardano
---

![](https://miro.medium.com/max/875/0*E2CP9O-_Fy3hQ9zy)

Photo by [Traxer](https://unsplash.com/@traxer?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com/?utm_source=medium&utm_medium=referral)

In Late 2013, a Consultant by the name of Charles Hoskinson joined, alongside Vitalik Buterin, as one of the founders of the Ethereum project. This project was a game changer in the early crypto space. It proposed to create a blockchain with a Turing Complete programming language to allow for “smart contracts” to be deployed in a trustless fashion.

Charles later left his role as Chief Executive of the Ethereum project over a dispute with Vitalik over the commercial aspects of the project. However, he went on to form IOHK (Input Output Hong Kong) later that year with fellow Ethereum founder Jeremy Wood, which began building Cardano in 2015 to improve upon the functionality that Ethereum was initially missing and, in 2017, launched with an ICO.

## The Cardano Vision

Here is how cardano.org describes its vision:

> “Cardano is a blockchain platform for changemakers, innovators, and visionaries, with the tools and technologies required to create possibility for the many, as well as the few, and bring about positive global change.
>
> A proof-of-stake blockchain platform: the first to be founded on peer-reviewed research and developed through evidence-based methods. It combines pioneering technologies to provide unparalleled security and sustainability to decentralized applications, systems, and societies.”

Cardano aims to bring around a fair, trustless, and decentralized world where individuals can financially interact without the need for intermediaries, where financial control over one’s assets relies upon them and not the bureaucracy of cobwebbed institutions and banks.

Now, all this talk while inspiring and encouraging, you might be asking, well how, how can a piece of software run by a few thousand computers around the world bring on a revolution in not only finance but how we interact with pretty much bout everything in the world?

![](https://miro.medium.com/max/875/0*sls-36pXi4bwYqx1.jpg)

## It begins with Consensus

The fundamental aspect of all blockchains is consensus. How do multiple people worldwide all agree on the same ledger, over and over again multiple times a day, and choose an individual to add transactions to this ledger in an accurate and good faith manner?

Until 2017 the primary operating method for consensus among blockchains, bitcoin is the most prominent and first adopter of the system, is a system called proof of work. The simple idea is that computers simultaneously attempt to solve a given mathematical problem that is computationally intense (but not complex as the vast majority of articles on the web state). Once solved, this computer, aka “miner,” wins the right to create the next block of transactions and is awarded tokens for doing so.

While this process is Very safe and secure, it has a few significant downsides, the main one being the environmental cost, specifically energy, and the complex materials used in the mining process. Furthermore, this problem only scales with the adoption of the network, as higher demand increases the token price and attracts more miners.

**Cardano** solves this issue with its ground-breaking PoS consensus protocol **Ouroboros,** the first blockchain protocol to be developed through peer-reviewed research.

## Ouroboros and PoS

Unlike PoW(proof of work), PoS(proof of stake) allocates block minting and rewards based on the size of your stake in the network, i.e., the number of ADA(Cardano’s native token) that you hold.

The benefits of PoS Include the following:

- **Lower environmental impact** — as energy is not being used to mine blocks.
- **Lower cost to run the network** — To begin validating transactions on the network, only a small amount of ADA is required, unlike with PoW, entry costs to mine blocks are high due to the need for computational hardware.
- **Reduces centralization** — The barrier to entry for validating transactions is lower, which increases participation. As PoW networks scale, it becomes ever more costly to successfully mine blocks; hence centralization occurs due to the limited number of people with the resources needed. Penalties can also be issued for selfish practices within the network.

So how does this all work:

Cardano is primarily made up of nodes, which are the top-level component in the network. These nodes deliver information, exchange requirements, and produce blocks.

Each node has a corresponding stake pool, which is an allocation of ADA tokens to the node, i.e., the wealth of the node. These tokens can be from only the node operator or others who **delegate** their ADA to the [stake pool](https://adapools.org/).

Most participants in the Cardano network do not have the time or skills required to set up and maintain a node that processes transactions. Therefore users can delegate their stake in the network to a stake pool in exchange for a part of the block-creating rewards, with each pool taking a certain percentage of the rewards to maintain the node.

The [Ouroboros](https://cardano.org/ouroboros/) consensus protocol divides time up into Epochs. Within each Epoch are 432,000 slots, each lasting for one second, and each Epoch is supposed to have about 21600 blocks, meaning one in 20 slots produces a block. The protocol does get quite a bit more complicated with how and why specific slots create blocks and others don’t, but that will be for another post.

Essentially nodes are elected at random to become slot leaders based on the size of their stake pool. The slot leader will then mint a block of transactions and receive the transaction fees as the reward.

To reduce centralization and one or a few pools becoming too much of a dominant force in minting blocks due to their size, the protocol has a saturation system, where pools over a specific size begin to receive diminishing rewards and incentivizes delegators to move to other unsaturated nodes.

![](https://miro.medium.com/max/875/0*z9VsBtH-G1ZoznG2.jpg)

## The Three Horsemen of Blockchain

When it comes to blockchain, there are no other metrics as important as these:

**Scalability —** The ability to seamlessly grow to meet the demands of the user base. It is essential that as a network grows, the speed and volume at which transactions can be processed at least linearly increase with demand.

Cardano is arguably one of the most scalable blockchains to currently exist. PoS allows for much greater scalability, and throughput than PoW, as node processing power is 100% dedicated to running and maintaining the network rather than solving math problems.

Cardano also uses techniques such as data compression and is building solutions such as [Hydra](https://iohk.io/en/research/library/papers/hydra-fast-isomorphic-state-channels/), Cardano’s layer two scaling solution, which has the potential for 1 million TPS; yes, you heard me correctly there, which is far greater than even the current transaction behemoth VISA which does roughly 2000 TPS.

**Interoperability —** Without interoperability, solutions are pointless!

Interoperability is essential for base protocols that are looking to revolutionize the world. Take WiFi, for example; currently, every device can connect to any WiFi network given knowledge of the password. How annoying would it be if iPhones could only use apple routers or Kindle only download books from amazon WiFi areas?

This is why it’s essential that Cardano be able to integrate with other blockchains and even the old world’s financial institutions. As a result, Cardano is being developed in such a way as to allow cross-chain transfers, multiple token types, and commonly used smart contract languages with solutions like its [KMZ Sidechains](https://why.cardano.org/en/introduction/sidechains/) protocol.

**Sustainability —** Environmentally but more importantly for the longevity of the project.

Cardano is becoming more and more a community-driven project allowing it to grow in a decentralized manner where IOHK continuously releases its influence over the project. Furthermore, unlike the vast majority of Blockchains, Cardano’s Trademarks are owned by the Cardano Foundation, a non-profit organization based in Switzerland.

The foundation’s mission statement:

> We exist **to ensure the positive advancement of the Cardano protocol, while also contributing to the positive advancement of blockchain as a world-changing technology**. In everything we do, we enable, empower, facilitate and accelerate progress in the blockchain space.

Lastly, the Treasury system which is owned by the community and allows for the allocation of funds for the development of Cardano and its ecosystems well into the future and is refilled with a proportion of stake pool rewards and transaction fees.

Cardano’s vision and that of its growing community is one of excitement for the unlimited potential to revolutionize the way we interact with the world. Still, more importantly, it’s one of hope. Hope for a decentralized future where everyone has a voice immune to censorship by those in power. Hope for a financial system where the rules are fair and the same for everyone. Hope for our planet, where not Bullets and Bombs settle disputes, but discourse and discussions are far more favorable, even inevitable.

Hey, thanks for taking the time to read this, and I hope you found something useful.

If you want to learn more about the inner workings of Cardano, be sure to give me a follow as I will be coming out with Deep dives into every nook and cranny this blockchain has to offer.

Finally, if you would like to support this project more directly I’ll also pass on the tip hat:

- ADA wallet address — addr1q8xj9ep9e2prk43h56wqmx8ftwrgx8qanv2802q44yjdf8w2ynau7pc7qrszzu4myutvh89m6w70rxvfu6278tcce8qqwqfgt9
- Adahandle — $mikeborman

If you have any suggestions or wish to contact me, please feel free to reach out on:

mikeborman.ada@gmail.com
