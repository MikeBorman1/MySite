---
title: 'Encoins Looks to Bring Native Privacy Tokens on Cardano'
date: '2023-1-9'
lastmod: '2023-1-9'
tags: ['cardano', 'blockhain','privacy','tokens']
draft: false
summary: 'Privacy tokens on Cardano

'
images: []
authors: ['default']
layout: PostLayout
canonicalUrl: https://tailwind-nextjs-starter-blog.vercel.app/blog/encoins-looks-to-bring-native-privacy-tokens-to-cardano
---

![](https://miro.medium.com/max/875/1*B64ojqWv0nQ54ltdqx0Yzw.jpeg)

Blockchain technology has the potential to revolutionize the way we conduct business, maintain records, and even govern ourselves. One of the key features of blockchain technology is that it allows for the creation of secure, decentralized networks that can enable a wide range of applications. However, as with any new technology, privacy concerns exist.

Privacy is a fundamental right for individuals and is essential for the functioning of a free society. It allows us to have control over our personal information and how it is used. In the context of blockchains, privacy is paramount because blockchains are often used to store and transfer sensitive information, such as financial transactions or personal identification documents. If this information is not adequately protected, it could be accessed by unauthorized parties such as scammers, hackers and even governments and used for nefarious purposes.

The privacy of a blockchain depends on several factors, including the specific design of the blockchain and the protocols and technologies used to secure it. For example, some blockchains, such as public blockchains like Bitcoin, are designed to be completely transparent and open, meaning that all transactions are visible to everyone on the network. Other blockchains, such as private or permissioned ones(Monero/ZeCash), may have more limited access, increasing privacy.

Blockchains can enhance privacy by using pseudonymous addresses, allowing users to transact without revealing their true identity. However, even with the use of pseudonymous addresses, it is still possible for third parties to track and analyze transactions and identify the parties involved. While a randomly generated address cannot be linked to a specific user, as the address gets used, i.e. transactions begin coming in and out, the human behind this address gets easier to trace. In addition, converting fiat into crypto requires using an onramp which is usually regulated and requires KYC checks. This means any government or affiliated organizations have a straightforward time tracking and linking wallet addresses.

Another potential issue with blockchains is the need for more privacy-enhancing technologies. While there are some technologies and protocols that can be used to improve privacy on blockchains, such as zero-knowledge proofs and mixers, they still need to be widely adopted and may not be available on all blockchains.

In come Encoins, one of the first Native privacy protocols on Cardano, which uses NFTs as a way to store an ADA value. Users can mint Encoins by sending a sum of ADA to the smart contract, which will issue NFTs related to the Ada sent. Later the users can burn the ENCOINS to redeem the ADA held in the smart contract.

> New to trading? Try [crypto trading bots](https://medium.com/coinmonks/crypto-trading-bot-c2ffce8acb2a) or [copy trading](https://medium.com/coinmonks/top-10-crypto-copy-trading-platforms-for-beginners-d0c37c7d698c) on [best crypto exchanges](https://medium.com/coinmonks/crypto-exchange-dd2f9d6f3769)

# Basics of Encoins

Let’s go through a quick example of how a user would mint, use, and redeem ENCOINS and how that would affect the privacy of their transactions.

1.  A user sends some ADA to the ENCOINS smart contract. They also specify the number of encoins they wish to mint and the value of each one. i.e. Send 1000 ADA and make three encoins of values 900, 100, 0. Note that the sum of the values locked up in the enocins equals the ADA value sent to the contract.
2.  The user then receives these encoins back to their address along with the minting key for each one. Only the user knows the value of their encoins. The minimum number of encoins per transaction to be minted is two. Otherwise, with only one encoin, anybody looking at the transaction could deduce the value within the received encoin.
3.  Now the user can do anything they want with the encoins, send them to other addresses, sell the NFTs to other users, etc.
4.  If the user then needs to retrieve the ADA stored within the encoins, they can send the enocoin and the corresponding minting key to the smart contract and then they will receive the ADA value back.

In simple terms, what this allows users to do is mask the amount of ADA that they are sending to other addresses bu using low-value ENCOINS as decoys. Say you want to send 1000 ADA to another address, but you don’t want anybody to know. You can mint five ENCOINS, one with the value of 1000 and four 0-value ENCOINS. By sending the 1000 ADA encoin to the target address, you create uncertainty for any adversary watching the blockchain. They now do not know at which address the 1000 ADA is. For all they know, you sent one of the 0 valued coins. Also note that an adversary does not know how you split up the ADA value between the ENCOINS.

# The Encoins Ledger

ENCOINS Core provides privacy when it comes to the amounts of transactions. However, all ENCOINS transfers are visible on the blockchain. It’s public information to see which address owns which encrypted coin. The information about the parties involved in the transaction can be kept private if there is a way to create a private transaction sub-ledger on the Cardano blockchain. ENCOINS Ledger makes this possible!

ENCOINS Ledger can be used as a Plutus validator script that locks the encrypted coins of all participants. The rules for spending the coins locked by this script are simple: encrypted coins can be moved or re-minted while on the ledger, but the value can only be withdrawn from ENCOINS Ledger by burning the encrypted coins.

Let’s consider a typical transaction on ENCOINS Ledger. Let’s say Alice has two coins in the ledger, which means she knows the minting keys for those coins. She wants to send one of them to Bob. To do this, she simply sends Bob the minting key for the coin over a secure communication channel. In this way, the coin is now in their shared possession.

To complete the transaction, Bob sends the proof of knowledge of the coin to a relayer and asks them to re-mint it. After the new coin is minted, the value that Alice sent is now solely in Bob’s possession. From an external observer’s perspective, this looks like someone simply re-minted a coin. However, it’s only when a coin is withdrawn from ENCOINS Ledger that its ownership (the address of the user withdrawing it) is revealed. Otherwise, information about intermediate owners is kept secret. In other words, an ENCOINS Ledger user only needs to “claim ownership” of the coin they want to redeem and do so only just before they redeem it.

# Benefits and Use Cases

**Safe Storage**

The ability to self-custody your valuable assets is one of the key appeals of cryptocurrency. This puts the responsibility for asset safety on the user. Cold wallets provide a good defense against many types of hacking attacks, but their protection against physical attacks is limited. This is an important consideration for people who own significant amounts of cryptocurrency, as it can be difficult to keep the identity behind the blockchain address completely private.

Multi-signature wallets are considered the most secure form of self-custodial cryptocurrency storage. They require multiple signing keys to move the assets, which are often stored in different locations, making it extremely difficult for a potential attacker to obtain enough of them.

ENCOINS can create an additional layer of security as they keep the value of one’s ADA possessions private, making the owner a less appealing target for attack. If nobody knows how much ADA you have, then you can easily avoid being the target of an attack. In a way, you can be hiding in plain sight.

This way of keeping your ADA value private can also unlock Cardano to other industries. For example, private companies looking to hold assets on the blockchain may not wish to have their ‘balance sheet’ open and available for the public.

**Private Transactions**

In many cases, keeping the value of a transaction between two parties can be incredibly important. ENCOINS allows users to transact with private amounts with only the coin’s value being known to the interaction parties. The ENCOIN holder can send cryptographic proof to the buyer of the ADA value, allowing the transaction to take place. For example, this could be used in the sale of a piece of NFT art. The ENCOINS ledger, on top of this, could also be used to muddy the relationship between the buiy and seller to any thrid party looking at the transactions.

ENCOINS provide a fascinating use case for NFTs and their role in privacy on Cardano. The project still has a long way to go, but it could prove critical for providing a privacy layer native to Cardano, which currently there is a significant lack of.

If you want to learn more about ENCOINS go watch my interview with the founder Vladamir: [https://youtu.be/fZPa-55melY](https://youtu.be/fZPa-55melY)
