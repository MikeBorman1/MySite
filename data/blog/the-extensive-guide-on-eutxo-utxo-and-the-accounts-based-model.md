---
title: 'The Extensive guide on EUTxO, UTxO and the accounts-based model'
date: '2022-11-22'
lastmod: '2022-11-22'
tags: ['cardano', 'eutxo', 'utxo', 'layer1']
draft: false
summary: 'How and why UTxO is better than the account-based model, and the difference that EUTxO brings to Cardano.
'
images: []
authors: ['default']
layout: PostLayout
canonicalUrl: https://tailwind-nextjs-starter-blog.vercel.app/blog/the-extensive guide-on-eutxo-utxo-and-the-accounts-based-model
---

_How and why UTxO is better than the account-based model, and the difference that EUTxO brings to Cardano._

![](https://miro.medium.com/max/875/0*6QPCy-057cLaqGZr)

## Let’s start with Ethereum.

The accounts-based model is the simplest model for how transactions and wallets work and interact with each other. The **entire financial system** works in this way, from banks to brokerage accounts.

The underlying principle is that there are typically address-defined accounts that contain a value, be it Ethereum, USD or the number of shares. Each address can receive and send whatever value it holds to another address.

Every time value is sent from one address to another; the **system state is updated.**

We won’t go too in-depth here as the concept is straightforward. Look [here](https://jcliff.medium.com/intro-to-blockchain-utxo-vs-account-based-89b9a01cd4f5) to read more.

![](https://miro.medium.com/max/875/0*ppi81iLFX0VyaK48.jpg)

## UTxO based model

Unannounced to most people, bitcoin was the first implementation of the UTxO model. However, this model is more complex and thus easier to explain blockchain to beginners using the accounts-based system.

The **basics** are:

**Transactions consume unspent outputs**, which produce more outputs that can then be used as inputs.

Wallets for these blockchains manage the UTxOs owned by the user. Every core node on the blockchain records the currently unspent outputs, aka the UTxO set.

When an output is used in a transaction, it becomes spent and cannot be used again.

![](https://miro.medium.com/max/875/0*_QeI1EWghK0jmBgY)

## Lets deep dive

Say we have two people, Alice and Bob

**Unspent transactions** are as follows:

- Alice — 100 ADA
- Bob — 50 ADA

Let’s take a simple transaction. Alice sends bob 10 ADA.

To do this, Alice cannot split her one unspent transaction up, as the unspent transaction **cannot be split** and must be used wholly or not at all.

The transaction looks like this:

![](https://miro.medium.com/max/875/1*UIezHI9Dn88ToqgNvMp3vA.png)

Notice how Alice “split up” the transaction by using her 90, sending 10 to Bob and then sending herself the rest back.

**Unspent transactions** are as follows:

- Alice — 90 ADA
- Bob — 50 ADA
- Bob — 10 ADA

Let’s look at a more complex transaction. Bob and Alice both want to send Charlie 55 ADA each.

The transaction looks like this:

![](https://miro.medium.com/max/875/1*FhJOutviNqvGgwlGB5dVwQ.png)

See that Bob must use both of his unspent transactions as only both of them together are large enough to cover the amount being sent.

## How does EUTxO differ?

EUTxO stands for Extended unspent transaction output and was developed for use in Cardano.

The difference between UTxO and EUTxO is what allows the **transaction to be spent**. A UTxO is valid to be spent if it is signed with the private key associated with its account.

In the UTxO model, to spend a transaction, there is only one condition: the appropriate private key signature is used to sign the transaction.

![](https://miro.medium.com/max/875/1*xZl5l4zZ7OprEz2aGMw8fg.png)

In EUTxO, there are more general addresses that are not based on the hashes of public keys but on arbitrary logic which define under which conditions a EUTxO can be spent, i.e. smart contracts.

Instead of a signature, the transaction will justify the unspent transaction can be spent by something called the redeemer, which is an arbitrary piece of data.

![](https://miro.medium.com/max/875/1*FVcFk6YXg9Avg_h3VpHE2w.png)

Each EUTxO in Cardano has two data values, the ADA amount and a datum, which is an arbitrary piece of data. Therefore, the consuming transaction must provide the redeemer, the dataum and the script itself.

## Why EUTxO over the Accounts-based model

In UTxO, like bitcoin, the script can only see the redeemer, i.e. the input, which makes the contracts more secure and testable; however, it limits the ability for smart contracts.

In this case, bitcoin technically does have contracts, but they are commonly referred to as “dumb contracts” due to their limitations.

Scripts in Ethereum can see the entire state of the blockchain, which makes them extremely powerful as they can do pretty much everything, but it also comes with problems.

EUTxO takes the middle ground. The script can see all of the inputs and outputs of a transaction, not just the specific redeemer for the UTxO.

With this, it can be mathematically proven that Plutus scripts are just as powerful as Ethereum contracts but without the security implications.

**So what are the security implications:**

Say you send a transaction to the blockchain on Cardano, but one of the inputs has already been used. Then, your transaction will fail without paying fees, as the transaction’s validity can be checked off chain.

However, on Ethereum, in the time between creating the transaction and sending it on chain, a lot of stuff could have happened, and your transaction could still be valid and go through, creating a lot of unpredictability. Plus, you have to pay transaction fees even for a failed transaction.

The complexity of Solidity(Ethereum’s smart contract language) contracts leads to all sorts of security implications.

**Because:**

a) Contracts tend to do more stuff, meaning it’s harder to test.

b) For 100% security certainty, the entire blockchain must be taken into account, which is **impossible due to its unpredictability**.

On the other hand, to analyse a Plutus script and make sure it’s secure as you only need to look at the specific transaction and not the entire blockchain. I.e **limiting the scope** of security analysis.

In this sense, Plutus scripts are pure, and given the same inputs, they will produce the same outputs, which allow for mathematical proof of security.

## Other Benefits of EUTxO

- Due to the ‘local’ nature of transaction validation, a high degree of parallelism is possible. A node could, in principle, validate transactions in parallel if those transactions do not try to consume the same input.
- A powerful feature of the EUTXO model is that the fees required for a valid transaction can be predicted precisely prior to posting it. This is a unique feature not found in account-based models. Account-based blockchains, like Ethereum, are indeterministic, which means that they cannot guarantee the transaction’s effect on-chain. This uncertainty presents risks of monetary loss, unexpectedly high fees, and additional opportunities for adversarial behaviour.

If you want to learn more about the inner workings of Cardano, be sure to give me a follow as I will be coming out with Deep dives into every nook and cranny this blockchain has to offer.

Finally, if you would like to support this project more directly I’ll also pass on the tip hat:

- ADA wallet address — addr1q8xj9ep9e2prk43h56wqmx8ftwrgx8qanv2802q44yjdf8w2ynau7pc7qrszzu4myutvh89m6w70rxvfu6278tcce8qqwqfgt9
- Adahandle — $mikeborman

If you have any suggestions or wish to contact me, please feel free to reach out, **criticism appreciated above praise**:

mikeborman.ada@gmail.com
