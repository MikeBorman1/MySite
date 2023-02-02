---
title: 'Navigating the Cardano Development Landscape: What are the options? | Developer Diary #2'
date: '2023-1-31'
lastmod: '2023-1-31'
tags: ['cardano', 'blockhain','developer', 'sdk', 'library']
draft: false
summary: 'Your Cardano Development options broken down by language.
'
images: []
authors: ['default']
layout: PostLayout
canonicalUrl: https://tailwind-nextjs-starter-blog.vercel.app/blog/navigating-the-cardano-development-landscape-what-are-the-options-developer-diary-2
---

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe374e643-1492-49bb-a625-82c84cc11cf4_1520x760.jpeg)

If you’re new to the Cardano space and want to get started in development, it can be very confusing even if you come from a programming background; one of the biggest hurdles is working out your tech stack.

The last thing you want to do is go down the rabbit hole of learning a new language or library only to realise that it can’t do what you want it to do. This can lead to a lot of time-wasting and frustration.

This is made worse if you don’t have any programming experience. Understanding blockchain is hard enough for the seasoned developer, let alone for a newcomer to this space.

In the past several months, I've had [conversations with developers](https://www.youtube.com/playlist?list=PL67adn4YrG9lToXrvpxBpIuUU9YSiOQNQ) and conducted extensive research on the various libraries and programming languages available for building decentralised applications on Cardano. This post aims to give an overview of the space and provide a helpful guide for choosing the right technology stack for you.

If you have no programming experience and want to begin developing in Cardano, be sure to stick around until the end of this post, where I will give you a quick roadmap on how to get started.

## So I need to learn Haskell?

So let’s get some misconceptions out of the way. Like many, I used to think that to develop smart contracts on Cardano, one would need to learn Haskell to program using the Plutus language. And spending a few days bluntly trying to reprogram my imperative lizard-like developer brain to the methodologies of functional programming, I came to understand why people say “developing on Cardano is hard”. Functional programming, while powerful and most likely better in every way than the imperative style, is not for everybody.

While it used to be the case, about a year ago, that if you wanted to build smart contracts, you would have to learn Haskell, it is certainly not the case now. There are multiple libraries allowing you to develop contracts from Rust and Python to JS and TS.

However, smart contracts are a very small part of the codebase for any DApp. Especially for Cardano, a large proportion of the code is off chain. And hence a lot of tooling and setup is needed to begin writing code and testing your application, from node setup to installing all the required packages and dependencies. As many developers that I have had on my **[podcast](https://www.youtube.com/playlist?list=PL67adn4YrG9lToXrvpxBpIuUU9YSiOQNQ)** have said, these requirements and lack of tooling made it very difficult to develop on Cardano initially. But the good news now is alongside the new smart contract languages is an ever-growing library of tooling to support all the needs of your off-chain code.

Projects like [Demeter](https://demeter.run/) from the guys at TxPipe rapidly speed up the time from idea to execution by providing a development space where you can ‘just get coding’ without worrying about any setup. I will also mention the different main libraries in this post, however, be sure to look out for a more in-depth guide to the space in the future.

## For Python - PyCardano and Eopsin

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd5d329fe-ac60-4b84-a3e3-9728bfa665ad_900x658.png)

[2022 survey of most used programming languages](https://www.statista.com/statistics/793628/worldwide-developer-survey-most-used-languages/)

Python is one of the most widespread and fastest-growing languages out there, with nearly every newcomer to programming starting out with it due to its user-friendly and intuitive syntax. So when I heard you could now write smart contracts in python, I was filled with hope. From my frustrating experience with Haskell and coming from the python and R world myself, I was excited to see how it would simplify the process of writing smart contracts and make it more accessible to a broader range of developers, including myself.

I had Niels, the developer behind the smart contract language Eopsin, on my podcast to talk more about the project.

<iframe width="560" height="315" src="https://www.youtube.com/embed/EHpVwD_CNGc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### PyCardano

PyCardano is a standalone Cardano client written in Python. The library is able to create and sign transactions without depending on third-party Cardano serialization tools, such as cardano-cli and cardano-serialization-lib, making it a lightweight library that is easy and fast to set up in all kinds of environments.

### Eopsin

Eopsin is an implementation of smart contracts for Cardano, which are written in a very strict subset of valid Python. The general philosophy of this project is to write a compiler that ensure the following: If the program compiles then:

- It is a valid Python program

- The output running it with python is the same as running it on-chain.

Why eopsin?

- 100% valid Python. Leverage the existing tool stack for Python, syntax highlighting, linting, debugging, unit-testing, property-based testing, verification

- Intuitive. Just like Python.

- Flexible. Imperative, functional, the way you want it. - Efficient & Secure. Static type inference ensures strict typing and optimised code

With the Eopsin and PyCardano libraries, you have all you need to begin building your DApp, utilising Django or Flask as your off-chain and frontend components.

## For Rust, Gleam and Elm - Aiken

[Aiken](https://aiken-lang.org/getting-started) is a new **programming language and toolkit for developing smart contracts** on the Cardano blockchain. It is geared towards robustness and developer experience.

Aiken takes inspiration from many modern languages, such as Gleam, Rust, and Elm, which are known for friendly error messages and an overall excellent developer experience.

Along with the benefits of the language, Aiken has some excellent documentation and guides to get you started writing smart contracts.

I also spoke to Kasey, one of the developers behind the language.

<iframe width="560" height="315" src="https://www.youtube.com/embed/oL0eMDK-TP8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Aiken is also incredibly efficient compared to plutus scripts meaning lower transaction fees for your Users(this is similar for Eopsin too):

![Image](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd86da88b-803c-4b22-85f3-7f653f93b811_962x1166.jpeg 'Image')
[@berry_ales](https://twitter.com/berry_ales) re-writing of nebula from plutus to Aiken

#### TxPipe

One of the main things to understand when starting out developing on Cardano is that smart contracts actually play a very small role in the codebase for DApp, with your off-chain code taking a much larger proportion of the development time. For that reason, it is necessary to have great libraries and tooling for all of those needs.

The team at TxPipe have built a whole suite of tools, mainly for rust programmers such as [Scrolls](https://github.com/txpipe/scrolls), [Oura](https://github.com/txpipe/oura) and [Pallas](https://github.com/txpipe/pallas). Along with that [Demeter.run](https://demeter.run/) is rapidly becoming the go-to tool for quick DApp iteration and deployments due to its no setup, ready-to-code workspaces, all in browser environment..

I spoke to Santiago, the CEO of TxPipe to learn more:

<iframe width="560" height="315" src="https://www.youtube.com/embed/lESg1EnxAUQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## For Typescript - plu-ts

Come from a typescript background, well don’t fret, check out [plu-ts](https://www.harmoniclabs.tech/plu-ts-docs/introduction.html)

`plu-ts` is a library designed for building Cardano dApps in an efficient and developer friendly way.

It is composed of two main parts:

- `plu-ts/onchain`: an [eDSL](https://en.wikipedia.org/wiki/Domain-specific_language#External_and_Embedded_Domain_Specific_Languages) (embedded Doamin Specific Language) that leverages Typescript as the host language; designed to generate efficient Smart Contracts.
- `plu-ts/offchain`: a set of classes and functions that allow reuse of onchain types.

The library has everything you need to build smart contracts and write your off-chain code.

## For Javascript - Mesh

Probably the most common language among developers, Javascript is used for many applications, including front-end web development, server-side development, mobile app development, and even blockchain development. Its versatility and ease of use make it a popular choice among developers, and its popularity only continues to grow as new technologies emerge. As a result, there is a wide range of libraries being built for Javascript developers on Cardano.

### Mesh

Mesh is an open-source library providing numerous tools to easily build powerful dApps on the Cardano blockchain.

- Frontend components and useful React hooks, Mesh provides everything you need to bring your Web3 user interface to life.
- Intuitive APIs to create complex transactions, perform multi-sig minting, staking ADA to stake pools, and interacting with smart contracts.
- Mesh's transactions builder is compatible with many wallets; `cardano-cli` generated wallets, seed phrases or private key, or connect to client's CIP wallets.
- Choose between **[Blockfrost](https://blockfrost.io/)**, **[Tangocrypto](https://tangocrypto.com/)**, or **[Koios](https://www.koios.rest/)** to access blockchain data. Query **[ADA Handle](https://adahandle.com/)** to get wallet's address.

Not to mention Mesh arguably has some of the best guides and documentation among the third-party Cardano Libraries. It’s simple and easy to set up an entirely new application using the Mesh CLI.

## Helios Lang

[Helios](https://github.com/Hyperion-BT/Helios) is a Domain Specific Language that compiles to Plutus-Core (i.e. Cardano on-chain validator scripts). Helios is a non-Haskell alternative to Plutus.

Helios is purely functional, strongly typed, and has a simple curly braces syntax. It notably supports closures, functions with multiple return values, OOP-like methods, and enums as tagged unions.

The Helios library is written in Javascript, and lets you compile Helios scripts and create Cardano transactions. This library is all you need to build 100% client-side DApps for Cardano.

While not the best option for beginners due to the functional programming aspect. Helios is an excellent entry for developers who enjoy the purely functional space but don’t want to go down the rabbit hole of Plutus.

## Others

- [Lucid](https://github.com/spacebudz/lucid#readme) - Lucid is a library, which allows you to create Cardano transactions and off-chain code for your Plutus contracts in JavaScript, Deno and Node.js.
- [Plutarc](https://github.com/Plutonomicon/plutarch-plutus#plutarch)h - Plutarch is a typed eDSL in Haskell for writing efficient Plutus Core validators.

## The Rout for a non-programmer

Choosing the correct programming language and libraries to learn can be daunting, with many options available. It's essential to consider your goals and what you want to build before making a decision, as each language has its own strengths and weaknesses.

I mentioned before that Functional programming languages like Haskell and Helios are not great ways to learn programming. There are two main reasons for this:

1.  **Lack of tutorials and community** - Simply because they are less used, there are much fewer resources out there compared to a language like Javascript. It is essential when learning to have a wealth of resources that are at your level, or you could get stuck and spend a large portion of your time Googling errors to no avail.
2.  **Your project Scope -** If you just want to create smart contracts, that’s great. But I bet you’re here because you want to build some sort of DApp. As mentioned before, smart contracts are actually quite a small proportion of your codebase. You Usually need backend servers and a Website frontend. Meaning you will probably need to learn Javascript at some point. Yes, ok, there are purely functional frameworks for Websites, and you can even do it with Haskell. But this goes back to point one; they are poorly documented compared to imperative languages. Plus, building visually appealing websites is significantly faster with popular frameworks like Next.js, as they offer pre-designed components and a user-friendly approach to styling and layout.

However, while the above points are valid, part of me does wonder if it’s easier to learn functional programming if you have never experienced imperative languages. One of the biggest hurdles, I would say to learning languages like Haskell is changing completely the way your programming brain thinks. Therefore it could actually be easier to learn Haskell if you have no prior experience. If you feel up for it, give it a try; [here’s a good resource to get you started](https://github.com/input-output-hk/haskell-course).

#### The roadmap

1.  Do a quick tutorial on Python, Javascript or Rust. Whichever you find the easiest, stick with that one.
2.  Get a bit more proficient with that language, and do some coding challenges to get used to the language.
3.  Start playing a round with some off-chain code using the above libraries.
4.  Once you have gotten a hand with how Cardano works, start looking at writing smart contracts and use Demeter.run for your setup.

I would choose python, as it’s the most straightforward language to learn. Additionally, with the current libraries available, you basically don’t need to learn any other language to build and deploy your app fully. However, this is just my biased opinion, and I would strongly recommend trying out JavaScript and Rust.
