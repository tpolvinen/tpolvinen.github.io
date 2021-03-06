---
layout: post
categories: [blog, views]
share: true
comments: true
title: Back to the Otaniemi
excerpt: "An unexpected journey to Otaniemi and back again"
date: '2017-08-03T23:42:00+03:00'
modified: '2018-03-22T10:20:00+03:00'
tags: [interview, respondent, Luke, meta]
author: Author1
hidelogo: true
relatedposts:
 - url: /First-Field-Trip/
 - url: /A-Field-Day/
---
*Note slash disclaimer: this blog post has been written on the basis of author's memories and notes of a conversation with J. Nikander at Otaniemi, 3rd August 2017, written on same day. All errors, misunderstandings and whatnot are author's own. Please notify me on any errors in the comments or email me tatu-dot-polvinen(at)gmail-dot-com. Thanks!*

<div class="text-divider"></div>

As I browsed [Luke's Ajankohtaista](https://www.luke.fi/luke/ajankohtaista/) news on 16th July I noticed 
an article published 9th June titled "[Kyberturvallisuus on elintärkeä myös maataloudessa](https://www.luke.fi/uutiset/kyberturvallisuus-elintarkea-myos-maataloudessa/)" by [Mikko Laajalahti (luke.fi)](https://www.luke.fi/henkilosto/mikko-laajalahti/) and [Jussi Nikander (luke.fi)](https://www.luke.fi/henkilosto/jussi-nikander/). 

As I've written about IoT cybersecurity --or rather, the lack of it-- in a couple of assignments before I read the article and the report [Alkutuotannon kyberuhat](http://jukuri.luke.fi/bitstream/handle/10024/539088/luke-luobio_32_2017.pdf?sequence=1&isAllowed=y) linked to it, with interest. After going through the report and taking some initial notes I decided to cite it in my thesis and set it aside for further study. I meant to write this post on and about my process of reviewing my sources and notes so far, but things happened: I'm going to attend [Worldcon 75](http://www.worldcon.fi) in Helsinki next week because, well, it's basically next door to where I live. Also, WORLDCON --in Finland! In my lifetime! 

But why am I writing about that? After attending [Ropecon](https://2017.ropecon.fi) I thought I'd better do some planning ahead and go through the Worldcon programme, making notes on anything interesting I came across. Yeah, as usual, you guessed it, I marked about a third of everything in there BUT there's a presentation titled "How Will We Grow Food in the Future?" by the same [Jussi Nikander (worldcon.fi)](http://www.worldcon.fi/guide/#part/3950). That's why.

After a bit of apprehension / hesitation I sent him an email last night, telling about my thesis and how I thought it would be useful to have his interview. I almost spilled my coffee when he replied this morning and told that we could meet right up today. I swear, it usually takes weeks, several emails and phone calls all over the place to get people to respond, let alone agree to meet. Not naming names here, but sheesh. But after all, I totally understand that for a busy CEO I'm basically just leeching valuable time and not adding much value to their firm. So there's that --and no hard feelings. :-)

But this time, I got an opening and what the hell, straight to the deep end: take a bus to Otaniemi, go to talk with a Senior Scientist and a Doctor of Science. Me, a BIT student, writing about a field I haven't got the foggiest --or had, before this process-- about. And proposing a qualitative interview, no less.

Oh well. Here, hold my beer.

Considering the onset, our chat went very well. Heck, he came to the door wearing a *Ropecon XX* shirt and got me at ease right off the bat. While it was apparent that I could bring very little if nothing to the table that could be useful to him, he didn't mind giving me a quick sitrep. We talked a bit about how on *Gartner*'s *Hype Cycle for Emerging Technologies* things like *IoT* and *Big Data* are already descending to the *Trough of Disillusionment* when people are beginning to realize that with IoT, like with everything else, **everything is hard and nothing is easy**, especially how hard it really is to produce a viable, useful and robust product with IoT technologies. Jussi also described how him being a specialist on *digitalization* among many other things (just see [his page at research.luke.fi](https://research.luke.fi/crisyp/disp/_/fi/cr_redir_all/fet/fet/sea?direction=3&id=532319)) brings in a lot of requests for assistance to projects that have pretty much nothing to do with *digitalization* itself. His take on the definition of the word is that in increasing amount things, tools and devices become capable of producing and consuming data, making them more --at least theoretically-- useful as the data is analyzed and used to form knowledge. In turn, this knowledge can be automatically used to improve the user's efficiency and/or experience. All the while reducing the need for user's intervention / input and effort. And please don't come telling me just in how many ways this could all go to hell in a handbasket. I already have an idea and I'm still somewhat optimistic. Somehow.

About that user input, Jussi told how fragmented the different systems currently are and how difficult it can be to pull together any kind of general idea how a farm is doing. By the data, that is. Since every system is different in almost every way, end users need to painstakingly analyze each one's output and form a general view in their minds. Or in manually generated excel sheets, which makes me shudder. Jussi pointed out that farmers simply do not want a single system more. All of these different systems that a farm --or a greenhouse-- uses to operate should be integrated (or interfaced?) to a general purpose one, effectively making the individual systems invisible to the end user. However, this kind of integration is **really hard**. I believe that there's so many wildly different systems on the market that the task is borderline impossible in theory and totally impossible to pull off profitably. It really seems to me that all the major manufacturers are living in their own ecosystems, some intentionally blocking others, some by just the virtue of the way things are. At least, *Agricultural Industry Electronics Foundation (AEF)* was founded in 2008 to bring manufacturers together in attempt to create robust, real standards needed for integration. Go see [aef-online.org](http://www.aef-online.org/home.html). While integration of existing systems and machines is hard, integrating future ones may become easier with new standard *AEF extended data interface* to be finished in 2018. I will look in to this a bit more later, but for now, see *AEF*'s pages.

Jussi also noted that experience shows that general purpose farm management and measuring system should be privately produced instead of made by public institution. This is due to public institutions being very rigid and inflexible. This could way too easily lead to situations that when a key person is absent, support for the system could be compromised. Since the institutions and the personnel in them have no hard incentive to keep the users happy by providing guaranteed continuous service, especially if it would entail personal sacrifices from employees, service will likely fail at some point --leading to losses at farms. And those losses could well be substantial.

Jussi elaborated on the situation a bit: while the ISOBUS standard is a good thing to have and a lot better than nothing, it's not a real *de facto* standard. Considering that the tasklist XML parsers in different equipment manufacturers' machines work differently, user can not be 100 % sure that the machine will work the way user instructs it, if they mix machines from different brands. This is particularly bad if said machine is used to gather measurements from the field and there's no way for user to know whether the data has been parsed into something different, ending up in costly mistakes in fertilization or irrigation later on when used in farm management / planning system. In addition to not being a real standard, ISOBUS was developed for far less data-intensive operations than the current farming equipment require. In example, Jussi noted that it's no longer possible for tractor operator to see what goes under the wheels due to larger tractor frames, so a real time video feeds are needed and *ISOBUS CAN* doesn't have the bandwidth for that. Not to mention that the basic server-client architecture does not allow both ends to send and receive data in order to automatically actuate automation in both ends. Now it's just that a server sends commands to the client and that's that. So 1996. I hope that I can learn to write that idea in a bit more clear manner sometime. :-D 

Anyhow, consider that a tractor can have a *N-sensor* equipment on top of it with multispectral cameras, automatic steering system with GPS, different camera sensors on it's front side, automatic weeding machine in tow (like in [this commercial youtube video](https://youtu.be/dR9BDyTv-tc)) and probably a drone flying above the field as well, all producing no small amount of data every second. To facilitate the data transfer the current *can bus* would need to be augmented with additional ethernet cabling and no one likes to do that kind of fragile modifications on farm equipment.

In closing, Jussi said that if there would be a single thing that he would like to raise on the subject of AIoT that is the system integration, as a challenge for the whole agricultural field and as the key enabler of functional AIoT. In my mind, pretty much everything else appears to be already available, but I may prove myself wrong in short notice. 

But then again, I like to do that.

Finally, many big **THANKS** to Jussi for being awesome and giving me a free, private crash course on all things AIoT.

Now if you haven't done it already, go buy your Worldcon membership and come see "How Will We Grow Food in the Future?". Here's the link again -> [Jussi Nikander (worldcon.fi)](http://www.worldcon.fi/guide/#part/3950).

T
