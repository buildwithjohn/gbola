export interface Article {
  id: string
  title: string
  subtitle?: string
  author: string
  publication: string
  year: string
  excerpt: string
  scripture: string
  slug: string
  coverImage?: string
  pages?: string[]   // paths to full-page scans
  content: {
    sections: {
      heading?: string
      paragraphs: string[]
    }[]
    pullQuotes: string[]
  }
}

export const articles: Article[] = [
  {
    id: '1',
    title: 'Leading Through Prophecy, Dreams and Visions',
    author: 'Gbola Oladosu',
    publication: 'Faith Digest',
    year: '2022',
    excerpt:
      'God still leads us today through prophecies, visions and dreams like He did the early Church. However, we should put the Word of God first, and learn to follow the Inward Witness.',
    scripture: 'Acts 2:17',
    slug: 'leading-through-prophecy-dreams-and-visions',
    pages: [
      '/src/assets/article-prophecy-p1.jpg',
      '/src/assets/article-prophecy-p2.jpg',
    ],
    content: {
      pullQuotes: [
        'The simple answer to whether God still speaks through visions and dreams is "Yes." But we must be careful how we apply this. Every vision and dream must agree with scripture.',
        'The gifts of the Spirit in themselves are perfect. But they certainly are not always perfect in manifestation, because they are manifested through imperfect vessels.',
      ],
      sections: [
        {
          heading: undefined,
          paragraphs: [
            'Acts 2:17 (KJV) — "And it shall come to pass in the last days, saith God, I will pour out of my Spirit upon all flesh; and your sons and your daughters shall prophesy, and your young men shall see visions, and your old men shall dream dreams."',
            'This prophecy, first spoken by the prophet Joel (Joel 2:28), shows us that the outpouring of the Spirit in the last days will be accompanied by prophecy, visions, and dreams.',
          ],
        },
        {
          heading: 'Leading through Prophecy',
          paragraphs: [
            "God's leading through prophecy is still valid and useful for the Church today. God does lead us today just like He did the early Church. We have the same Holy Spirit they had and we can expect God's leading through prophecy (1 Cor. 13:8-12, Acts 2:17-18).",
            'Prophecy is a supernatural utterance in a known tongue; it may also come in form of interpretation of tongues (Acts 2:11b, 1 Cor. 12:10, 1 Cor. 14:5). It comes from the inward man where the Spirit of God abides. The primary purpose of prophecy (simple gift of prophecy) is speaking unto men to edification and exhortation and comfort (1 Cor. 14:3) and the Word of God plainly teaches that everyone should desire to prophesy (1 Cor. 14:1). We may not all be standing in the office of a prophet (one who has the revelation gifts in operation along with prophecy), but we all can and should desire to prophesy (Joel 2:28, 1 Cor. 12:29, 1 Cor.',
          ],
        },
        {
          heading: 'Leading through Visions and Dreams',
          paragraphs: [
            "Prophecy is an utterance gift, which operates under the unction of the Spirit. And God through this method could give us a word of knowledge, a word of wisdom, or revelation as He deems fit. Being an utterance gift, we can initiate the operation of prophecy by speaking. Sometimes it can start with a word or a sentence; in such instances, we step out in faith and trust God for a full grasp of what He wants to convey. Many times when the Spirit of God is moving, anyone who can prophesy, or who is used in the ministry gift of tongues and interpretation could speak, and it's important this is done under the unction of the Holy Spirit (1 Cor. 14:26, 31-33).",
            "We usually don't get as much debate on whether God still speaks to us through prophecy; the contention usually is whether God still speaks to us through visions and dreams. Since there is no indication in the Bible that God doesn't, the simple answer to whether God still speaks through visions and dreams is \"Yes.\" But we must be careful how we apply this. Every vision and dream must agree with scripture.",
            'A vision occurs when a person is awake; it could be a spiritual vision, a trance or an open vision. A dream occurs when a person is asleep; some dreams are because of what has been on a person\'s mind or stored in the subconscious. Some could be as a result of memories of past events, repressed desires, and unfulfilled hopes (Ecclesiastes 5:3).',
            'Some could be false messages from the enemy (Deuteronomy 13:1-5, Jude 1:8). While some can come from God (Genesis 41:1-7, Gen. 37:5-10, 1 Kings 3:5, Dan. 2:28, Matt. 1-2).',
            'Peter was awake for his vision of the unclean food (Acts 10:9-23). Paul was awake when the Lord Jesus appeared to him on the road to Damascus (Acts 9:8). John was awake for his vision recorded in Revelation (Revelation 1:9-11). However, Joseph was asleep when an angel spoke to him in a dream (Matthew 1:20-24). Pharoah\'s cupbearer and baker were asleep when they had dreams that Joseph interpreted (Genesis 40:5-19). Paul most regularly experienced visions and dreams, which guided his ministry and travels to Jerusalem and onward to Rome (Acts 16:6-10; 18:9-10; 22:17-21; 23:11).',
            "In visions and dreams, things may be symbolic and God can choose to speak to us through these media. However, visions and dreams must be consistent with scripture for it to be a safe guide. We shouldn't count it strange if God chooses to speak to us or lead us through visions and dreams.",
          ],
        },
        {
          heading: 'Conclusion',
          paragraphs: [
            "In conclusion, it's not out of place to desire God's leading through prophecies, visions and dreams; we should however realise that prophecy, visions and dreams are usually conveyed through men. The gifts of the Spirit in themselves are perfect. But they certainly are not always perfect in manifestation, because they are manifested through imperfect vessels. What we do in response to prophecy, vision and dreams should be in agreement with scriptures; they need to be judged by the Word of God and by the Inward Witness. Jesus said to Bro. Hagin when He appeared to him in a vision in 1959, \"If the prophecy confirms what you already have, accept it. If it does not, don't accept it.\"",
            "In all, God still leads us today through prophecies, visions and dreams like He did the early Church. However, we should put the Word of God first, and learn to follow the Inward Witness (Rom. 8:14, 1 Kings 19:12).",
          ],
        },
      ],
    },
  },
]
