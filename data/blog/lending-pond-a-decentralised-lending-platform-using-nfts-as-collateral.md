---
title: 'Lending Pond — A Decentralised loan platform using NFTs as collateral'
date: '2022-12-28'
lastmod: '2022-12-28'
tags: ['cardano', 'blockhain','nft','defi']
draft: false
summary: 'An Innovative way to unlock liquidity behind NFT’s

'
images: []
authors: ['default']
layout: PostLayout
canonicalUrl: https://tailwind-nextjs-starter-blog.vercel.app/blog/lending-pond-a-decentralised-lending-platform-using-nfts-as-collateral
---

_An Innovative way to unlock liquidity behind NFT’s_

![](https://miro.medium.com/max/875/1*gXmO4_L1pwpZrE0cr9PF4A.png)

Getting a loan is challenging, whether you are an 18-year-old from Kentucky or a 45-year-old from Iran. Unless you have a suitable credit score built up over the years, if not decades, of debt-free middle to upper-class living, a bank will not even consider it. This availability of capital enhances the wealth and opportunity divide we see in the modern world.

Blockchain, through decentralised lending platforms, has partially begun to close this gap. Out the window go credit or sanctions checks which disproportionally do more harm than good. And in come trustless peer-to-peer loans, based on nothing more than collateral offered in place of the loan.

A decentralised lending platform is an online marketplace that allows individuals to borrow and lend cryptocurrencies without needing a centralised financial institution. These platforms use smart contracts to automatically enforce the terms of the loan, such as the interest rate and repayment schedule.

Built on blockchain technology, they offer increased transparency and security. This allows lenders and borrowers to interact directly with each other without the need for a third-party intermediary.

They provide more flexibility and control for both borrowers and lenders. They can also help to expand financial inclusion by providing access to credit for individuals who may not have access to traditional forms of collateral.

## What is Lending Pond — an innovative take on crypto-collateralised loans.

Pond is a DeFi platform on Cardano that seeks to support the lending, borrowing, buying, and selling of tokens on the Cardano blockchain, whether those be non-fungible tokens (NFTs), publicly traded tokens, or fundable tokens like the Liquid Token or the Society Token.

Specifically, Lending Pond is a smart contracts protocol that allows people to take out loans using their NFTs as collateral for the loan. They are also currently creating a marketplace that allows people to list non-fungible tokens as well as tokens for sale.

NFTs are a very illiquid asset, especially for high-value NFTs it can take months to even a year to sell. Allowing NFTs to be used as collateral for loans can negate this liquidity problem and allow people to hold onto their NFTs through periods of illiquidity. i.e. They don’t need to sell their NFT if they only need a smaller amount of ADA for a short period.

![](https://miro.medium.com/max/875/1*F5Zo61VBUgMlHtLgx_2xdg.png)

## How the Protocol Works

The core of the Protocol is the ability to over-collateralise short-term loans (5 weeks max) with NFTs and pay an interest rate on the value loaned.

1.  A user connects their wallet to the Protocol and selects which of the valid NFTs they will place as collateral for the loan.
2.  The User then selects the required loan value, Ideally at an LTV of < 0.8. Meaning the loan is lower than 80% of the value of the NFT.
3.  The User selects the Length of the loan and the interest rate, note that this rate is over the loan duration and not an APY, and after lists the loan on the site.
4.  On the loaning side, lenders can view all available loans and commit to those that meet their risk tolerance and due diligence.
5.  During the loan, the NFT is held in a smart contract and is released back to the borrower once the required Ada plus the additional interest is sent back to the lender.
6.  If the required amount is not met, then NFT gets transferred to the lender. If the loan was taken on an acceptable LTV, the lender could make a decent profit from selling the NFT.

![](https://miro.medium.com/max/875/1*oW_3VHRyjQEi5qe8feVnGg.png)

An example of setting up a loan with my Ada handle

## How are lenders protected?

I asked Nalu, one of the founders of Pond.

> “So the smart contracts are in place to protect the lenders and how we protect their collateral is we, so when you, when, when you take a loan on Lending Pond, from a borrower perspective. Let’s say I have an NFT worth X amount of Ada. I want to take a loan that encourages a certain thing that we call an LTV between the values of 0 and 0.8 and that just ensures that there is still collateral in that loan.
>
> It incentivises the borrower to not default on that asset, just in terms of security. Those assets, once a loan is conducted and signed, sit in a smart contract. So those are safe until one of two options happens.
>
> One, the borrower repays the loan with interest to the lender, and then he gets to claim his collateral back, or the borrower doesn’t repay the loan. Then the lender gets to claim whatever collateral is nested in that smart contract.”

Pond also curates the nft collections that can be used as collateral on Pond. This means lenders can be certain of the asset’s validity and the stability of the project to an extent. This by no means negates the risk for the lender but does give a base layer of security.

**How do you choose which NFT collections are allowed to be used as collateral?**

> “So in terms of determining whether an NFT project can be used as collateral on Lending Pond, there’s a couple things that we look at.
>
> First, we look at the Sustainability of the project. Sometimes, for example, there are projects that have super unsustainable staking mechanisms that we don’t feel will be in place for a long period of time. We look at the founders behind the project, we look at the project’s vision and kind of do look at the financial side as well.
>
> They do need to have a certain amount of volume behind that project as well as a certain floor price. A certain floor applies for their collection because for example, let’s just say your floor price is 58 ADA, there isn’t enough liquidity in that project to actually take a loan.”

The max length loan on an NFT asset currently is 5 weeks, although Pond is looking at introducing loan extensions in the future.

Here’s what Nalu had to say about that:

> “So I think the main answer to that question is that five weeks in the CNFT space is almost like an eternity. Anything can happen in five weeks. In five weeks the ape society floor went from 1,400 to 10,000 Ada. So in five weeks almost anything can happen. I think that’s already a pretty long time.
>
> However, if we look at the, the traditional finance world of things, five weeks is nothing. So I think that Pond is looking towards having a way to extend the loan duration on loans.
>
> We are exploring options for loans to be held over longer periods of time, like if there were two months, three months loans, those would be collateralised in a different way than people are used to now. You would probably have to provide a lot of collateral and we would probably have to oversee and approve something of that loan duration. But it is something that we’re looking at.”

**So really the short loan term is to protect the lender against the volatility of the NFT assets?**

> “Exactly, and currently, Lending Pawn version one is just accepting NFT as collateral for a loan. However, in version two, we’ll be able to accept any Cardano asset as a loan.”

## The future of the Protocol

Currently, the vast majority of NFTs are only being used to represent art. However, many projects are working on other real-world use cases of NFTs, and in the future, many assets could be digitalised. For example, the deed to your house could be placed on-chain.

**How does Pond envision using these different use cases as NFTs to be used as collateral?**

> “The way that the Pond Smart contract is structured, it’s already accommodated to support any of those changes. So even if like tomorrow, everybody started to use NFTs as deeds representing house ownership, Pond would already be equipped for that.
>
> Suppose you wanted to put your house deed on Pond as collateral for a loan. I don’t think it would be Pond that would have to work in accommodating that. It would have to be the general users understanding this new use case for NFTs. But in terms of the contracts behind Pond, it’s something that we already support.”

Future versions of the Protocol will be coming out in the next few months, and with that, we will see the additional functionality of Renting, Shorting and possibly Options down the road.

Shorting an NFT would involve borrowing, setting up the required collateral, selling it, and returning an NFT from the same policy ID later. Hoping that the NFT price drops in value during the contract term, therefore turning the shorter a profit.

**When will Lending and Shorting be coming to the platform?**

> “Shorting and renting are already included in our smart contracts. It’s not included in the UI front end of version two, which we’re launching this month, per se, but it’s included in the smart contract, so we just have to create a front end in the UI for it.”

**What about Options?**

> “I’m fairly restricted as to how much I can say regarding the schematics of how it works. Shorting is common knowledge. Everyone knows how shorting works. Options, however, it’s something that Pond is developing that nobody else has started on yet. But I think I am allowed to say what the options are; it’s basically going to be a right to buy or sell an NFT at a future date.”

It is clear that decentralised lending using NFTs as collateral is gaining popularity as a way to secure loans without the need for a traditional financial institution.

This approach offers many potential benefits, including reduced costs, faster transaction times, and increased accessibility for those who may not have access to traditional lending options.

However, as with any new technology, there are also risks and challenges that need to be carefully considered. These may include regulatory uncertainty, the potential for fraud or misuse, and the need for robust security measures to protect against hacks and other malicious actors.

Pond is leading the way in this industry and bringing much-needed liquidity to the CNFT space.

My Interview with Pond’s founder: [https://www.youtube.com/watch?v=G1lJtRua9Rs](https://www.youtube.com/watch?v=G1lJtRua9Rs)
