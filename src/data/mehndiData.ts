export interface MehndiService {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  description: string;
  features: string[];
  startingPrice: string;
  estimatedTime: string;
  image: string;
  fallbackImage: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'bridal' | 'arabic' | 'festive' | 'groom_engagement' | 'feet';
  categoryLabel: string;
  image: string;
  fallbackImage: string;
  description: string;
  stainDepth: string;
  artType: 'portrait' | 'names' | 'rajwada' | 'hathphool' | 'mandala';
  customText?: string;
  storageKey: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  comment: string;
  rating: number;
  date: string;
}

export const BUSINESS_INFO = {
  name: "Shreeji mehndi arts",
  salonName: "Shreeji Luxury Bridal Mehndi Studio & Salon",
  isNewlyOpened: true,
  openingBannerText: "✨ GRAND OPENING: Visit Indore's Newest Luxury Bridal Mehndi Studio at LIG Atal Dwar! Inaugural Offers Available ✨",
  tagline: "Weaving Timeless Stories in Deep Henna Hues",
  subtitle: "Indore's Premier Bridal & Festive Henna Studio with 100% Organic Henna, Dark Stain Guarantee & Doorstep Service",
  address: "LIG Atal Dwar, Indore, Madhya Pradesh",
  landmark: "Near LIG Square & AB Road Corridor, Indore",
  phone: "+91 9244796126",
  phoneRaw: "919244796126",
  whatsappUrl: "https://wa.me/919244796126",
  email: "shreejimehndiarts.indore@gmail.com",
  operatingHours: "Monday to Sunday: 9:00 AM – 9:30 PM",
  experienceYears: "5+",
  bridesCount: "1,500+",
  googleMapsUrl: "https://maps.google.com/?q=LIG+Atal+Dwar+Indore",
};

export const SALON_FEATURES = [
  {
    title: "Air-Conditioned Bridal Lounge",
    desc: "A calm, plush private suite crafted especially for long bridal sessions with comfortable recliners and ambient traditional music."
  },
  {
    title: "Pre-Bridal Design & Skin Consultations",
    desc: "Walk in to discuss custom love-story sketches, take a skin sensitivity patch test, and inspect our fresh essential oil cones in person."
  },
  {
    title: "Both Studio Visits & Doorstep Service",
    desc: "Enjoy the salon's relaxing ambiance at LIG Atal Dwar, or request our mobile artist team to arrive at your home or wedding banquet in Indore."
  },
  {
    title: "Hygienic & Chemical-Free Guarantee",
    desc: "Strictly sterilized accessories, disposable arm rests, and freshly ground Sojat organic henna prepared without any black dye or PPD."
  }
];

export const INAUGURAL_OFFERS = [
  {
    badge: "Limited Opening Offer",
    title: "Flat 15% OFF on Bridal Packages",
    desc: "Celebrate our studio opening with 15% off any Royal Bridal Mehndi package booked this month.",
    code: "SHREEJI-NEW15"
  },
  {
    badge: "Free Wedding Bonus",
    title: "Complimentary Groom or Mom's Mehndi",
    desc: "Receive free groom palm design or elegant hands for the bride's mother with full bridal booking.",
    code: "BRIDE-PLUS"
  },
  {
    badge: "Free Gift with Every Booking",
    title: "Herbal Dark Stain After-Care Kit",
    desc: "Free nilgiri-clove organic balm, lemon-sugar sealant, and protective sleeping wraps worth ₹500.",
    code: "STAIN-PRO"
  }
];

export const SERVICES_DATA: MehndiService[] = [
  {
    id: "bridal",
    title: "Royal Bridal Mehndi",
    subtitle: "Customized Love Story & Intricate Motifs",
    tag: "Studio Signature",
    description: "Our signature bridal package meticulously customized with bride & groom portraits, varmala scenes, baraat procession, personalized hashtags, and intricate jaali work extending from fingertips up to elbows and legs.",
    features: [
      "Custom Dulha-Dulhan portrait or caricature",
      "Love story elements, wedding date & initials",
      "Full hands up to elbows (front & back)",
      "Intricate bridal feet & calves design",
      "Complimentary organic after-care balm & clove seal",
      "Available at our New LIG Salon or Home Doorstep"
    ],
    startingPrice: "₹5,100",
    estimatedTime: "4 - 6 Hours",
    image: "https://images.unsplash.com/photo-1560932684-5e552e2894e6?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Mehndi_Front_Hands.jpg/800px-Mehndi_Front_Hands.jpg"
  },
  {
    id: "engagement",
    title: "Engagement & Groom Mehndi",
    subtitle: "Sophisticated, Modern & Minimalist",
    tag: "Chic & Elegant",
    description: "Tailored for engagement ceremonies, roka, and modern grooms. Featuring delicate half-arm mandalas, wrist-cuff lace designs for brides, and classy geometric or spiritual motifs on groom's palms and wrists.",
    features: [
      "Modern cuff & bracelet wrist designs",
      "Contemporary negative space mandala",
      "Subtle groom palm initials & wedding date motif",
      "Forearm / palm coverage with neat symmetry",
      "Quick-drying, natural essential-oil formula",
      "Perfect for pre-wedding photo shoots"
    ],
    startingPrice: "₹2,100",
    estimatedTime: "1.5 - 3 Hours",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Mehndi_hands_pattern.jpg/800px-Mehndi_hands_pattern.jpg"
  },
  {
    id: "arabic",
    title: "Traditional Arabic & Indo-Western",
    subtitle: "Flowing Bel, Floral Vines & Bold Shading",
    tag: "Trendy Fusion",
    description: "A breathtaking fusion of Middle Eastern bold architectural outlines with delicate Indian intricate shading. Highlighted with sprawling rose trails, leafy climbers, peacock crests, and stylish modern symmetry.",
    features: [
      "Bold floral trails & leafy vines (Bel)",
      "High-contrast 3D shading techniques",
      "Dubai & Gulf style negative space fills",
      "Front & back palm to mid-forearm options",
      "Swift application without compromising elegance",
      "Striking visual appeal in photographs"
    ],
    startingPrice: "₹1,500",
    estimatedTime: "1 - 2 Hours",
    image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Henna_design_on_hands.jpg/800px-Henna_design_on_hands.jpg"
  },
  {
    id: "festive",
    title: "Festival & Party Family Packages",
    subtitle: "Teej, Karwa Chauth, Diwali & Sangeet",
    tag: "Group Friendly",
    description: "Celebrate sacred Indian festivals and joyful sangeet evenings with loved ones. We cater to family gatherings, sangeet guest corners, and festival specials with speedy yet breathtaking traditional patterns.",
    features: [
      "Special Karwa Chauth & Hariyali Teej themes",
      "Raksha Bandhan & Bhai Dooj quick palms",
      "Sangeet guest mehndi corners (per hand packages)",
      "Special discounts for 5+ family members",
      "Fresh organic cones gentle for sensitive skin",
      "Dedicated team for large sangeet celebrations"
    ],
    startingPrice: "₹500 / hand",
    estimatedTime: "20 - 45 Mins / person",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Henna_Mehndi_Indian_Wedding.jpg/800px-Henna_Mehndi_Indian_Wedding.jpg"
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Dulha-Dulhan Varmala Portrait & Wedding Date",
    category: "bridal",
    categoryLabel: "Bridal Signature",
    image: "https://images.unsplash.com/photo-1560932684-5e552e2894e6?auto=format&fit=crop&w=900&q=80",
    fallbackImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Mehndi_Front_Hands.jpg/800px-Mehndi_Front_Hands.jpg",
    description: "Iconic hand-drawn Dulha-Dulhan Varmala portrait scene with couple initials 'K & S', wedding date '28 JUN 2026' cartouche, wedding rings, and flying love doves.",
    stainDepth: "Deep Mahogany Red",
    artType: "portrait",
    customText: "28 JUN 2026 · K & S",
    storageKey: "varmala_portrait"
  },
  {
    id: "gal-2",
    title: "Couple Names 'Lokes & Sangi' in Lotus Jaal",
    category: "bridal",
    categoryLabel: "Love Story",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80",
    fallbackImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Traditional_Indian_Wedding_Bridal_Mehndi.jpg/800px-Traditional_Indian_Wedding_Bridal_Mehndi.jpg",
    description: "Customized back-hand design with groom's name 'Lokes' and bride's name 'Sangi' framed inside sacred heart medallions, enveloped in royal lotus lattice work.",
    stainDepth: "Midnight Burgundy",
    artType: "names",
    customText: "Lokes & Sangi",
    storageKey: "couple_names"
  },
  {
    id: "gal-3",
    title: "Rajwada Royal Mor & Haathi with Jharokha",
    category: "bridal",
    categoryLabel: "Rajwada Bridal",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=80",
    fallbackImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Mehndi_hands_pattern.jpg/800px-Mehndi_hands_pattern.jpg",
    description: "Majestic standing peacock (Mor) on one palm and royal ceremonial elephant (Haathi with ambari) on the other, crowned with palace jharokha arches on forearms.",
    stainDepth: "Deep Reddish Brown",
    artType: "rajwada",
    customText: "Mor & Haathi",
    storageKey: "rajwada_elephant"
  },
  {
    id: "gal-4",
    title: "Royal Monogram 'S' & Kalash Full Elbow Jaal",
    category: "bridal",
    categoryLabel: "Bridal",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80",
    fallbackImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Indian_bride_wearing_mehndi_and_bangles.jpg/800px-Indian_bride_wearing_mehndi_and_bangles.jpg",
    description: "Regal bridal arm featuring bride's initial monogram 'S' in a golden crest, auspicious Kalash, and symmetric diamond jaali extending from palms to elbows.",
    stainDepth: "Rich Burgundy",
    artType: "rajwada",
    customText: "Monogram 'S'",
    storageKey: "monogram_kalash"
  },
  {
    id: "gal-5",
    title: "Modern Hathphool Jewel Lace & Pearl Chains",
    category: "groom_engagement",
    categoryLabel: "Engagement",
    image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&w=900&q=80",
    fallbackImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Henna_design_on_hands.jpg/800px-Henna_design_on_hands.jpg",
    description: "Breathtaking back-hand jewelry style with central lotus diamond medallion, delicate pearl chain cascades connecting to finger rings, and wrist cuff.",
    stainDepth: "Deep Maroon",
    artType: "hathphool",
    customText: "Hathphool Jewel",
    storageKey: "hathphool_lace"
  },
  {
    id: "gal-6",
    title: "Floral Bird Crest & Shaded Botanical Vine",
    category: "festive",
    categoryLabel: "Festive",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
    fallbackImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Mehndi_Front_Hands.jpg/800px-Mehndi_Front_Hands.jpg",
    description: "Delicate sparrow bird perched on a blossoming rose vine with graceful leafy trail, perfect for sangeet, engagement, and festive celebrations.",
    stainDepth: "Mahogany Brown",
    artType: "mandala",
    customText: "Floral Bird Crest",
    storageKey: "bird_crest"
  },
  {
    id: "gal-7",
    title: "Sacred Temple Lotus in Square Frame with Netting",
    category: "bridal",
    categoryLabel: "Bridal",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80",
    fallbackImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Henna_Mehndi_Indian_Wedding.jpg/800px-Henna_Mehndi_Indian_Wedding.jpg",
    description: "Temple architecture inspired lotus medallion inside a sacred geometric frame, flanked by razor-sharp net mesh and finger chandeliers.",
    stainDepth: "Darkening in 24h",
    artType: "mandala",
    customText: "Temple Lotus",
    storageKey: "temple_lotus"
  },
  {
    id: "gal-8",
    title: "Contemporary Lotus Medallion with Pearl Drops",
    category: "arabic",
    categoryLabel: "Indo-Western",
    image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=900&q=80",
    fallbackImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Henna_design_on_hands.jpg/800px-Henna_design_on_hands.jpg",
    description: "Sleek central circular lotus seal with hanging pearl droplet accents on back hand, paired with diagonal lattice net and thumb vine.",
    stainDepth: "Rich Brown",
    artType: "hathphool",
    customText: "Pearl Drops",
    storageKey: "pearl_droplet"
  },
  {
    id: "gal-9",
    title: "Royal Peacock Standing Motif with Lattice Forearm",
    category: "bridal",
    categoryLabel: "Bridal",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=900&q=80",
    fallbackImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Traditional_Indian_Wedding_Bridal_Mehndi.jpg/800px-Traditional_Indian_Wedding_Bridal_Mehndi.jpg",
    description: "Graceful peacock with fully fanned shaded plumage extending down the palm, complemented with traditional payal wrist border.",
    stainDepth: "Deep Red",
    artType: "rajwada",
    customText: "Royal Peacock",
    storageKey: "peacock_standing"
  },
  {
    id: "gal-10",
    title: "Bold 3D Shaded Arabic Negative Space Floral Palm",
    category: "arabic",
    categoryLabel: "Arabic",
    image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&w=900&q=80",
    fallbackImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Henna_design_on_hands.jpg/800px-Henna_design_on_hands.jpg",
    description: "Modern Dubai style negative space rose mandala with bold outlines, delicate internal shading, and contrasting negative leaf clusters.",
    stainDepth: "Rich Chestnut",
    artType: "mandala",
    customText: "Arabic 3D Shaded",
    storageKey: "arabic_shaded"
  },
  {
    id: "gal-11",
    title: "Traditional Rajasthani Cuff & Lotus Jaal Back-Hand",
    category: "festive",
    categoryLabel: "Festive",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=80",
    fallbackImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Mehndi_hands_pattern.jpg/800px-Mehndi_hands_pattern.jpg",
    description: "Classic Rajasthani wrist cuff paired with miniature lotus buds and netted gloves, ideal for Teej, Karwa Chauth, and family sangeet.",
    stainDepth: "Deep Crimson",
    artType: "names",
    customText: "Rajasthani Cuff",
    storageKey: "rajasthani_cuff"
  },
  {
    id: "gal-12",
    title: "Dark Mahogany Stain Auspicious Floral Palm",
    category: "bridal",
    categoryLabel: "Stain Result",
    image: "https://images.unsplash.com/photo-1560932684-5e552e2894e6?auto=format&fit=crop&w=900&q=80",
    fallbackImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Mehndi_Front_Hands.jpg/800px-Mehndi_Front_Hands.jpg",
    description: "Dense traditional paisley and floral medallion covering whole palm, demonstrating our 48-hour oxidized dark mahogany stain.",
    stainDepth: "Midnight Burgundy",
    artType: "mandala",
    customText: "Dark Stain Result",
    storageKey: "mahogany_stain"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Pooja Sharma",
    role: "December Bride",
    location: "Vijay Nagar, Indore",
    comment: "I visited their newly opened studio at LIG Atal Dwar for my bridal trial. The studio is so clean, royal, and comfortable! The dulha-dulhan portrait on my wedding turned out identical to our actual photo, and the stain was deep burgundy. 10/10 recommendation in Indore!",
    rating: 5,
    date: "December 2025"
  },
  {
    id: "t-2",
    name: "Ananya Malviya",
    role: "Engagement Ceremony",
    location: "LIG Colony, Indore",
    comment: "I live right near Atal Dwar and was thrilled to see this luxury mehndi studio open in our neighborhood. The relaxing AC lounge, pleasant smell of pure eucalyptus, and polite artists made our engagement session an absolute breeze!",
    rating: 5,
    date: "January 2026"
  },
  {
    id: "t-3",
    name: "Ritu Khandelwal",
    role: "Karwa Chauth Celebration",
    location: "Palasia, Indore",
    comment: "We booked Shreeji Mehndi Arts for a family gathering of 8 women. The speed and neatness were mindblowing. Everyone loved their intricate mandalas and Arabic vines. Truly genuine, polite and skilled artists!",
    rating: 5,
    date: "November 2025"
  },
  {
    id: "t-4",
    name: "Sakshi Verma",
    role: "Destination Wedding Bride",
    location: "Super Corridor, Indore",
    comment: "The dark stain guarantee is 100% real. Their after-care balm and clove fumigation tips gave me the deepest coffee-maroon stain I have ever seen. Thank you Shreeji team for your patience and artistry!",
    rating: 5,
    date: "February 2026"
  }
];

export const STAIN_TIPS = [
  {
    step: "01",
    title: "Before Your Session",
    desc: "Cleanse hands and feet thoroughly with gentle soap to remove lotions, oils, or moisturizers. Keep warm as natural henna bonds best with warm body temperature."
  },
  {
    step: "02",
    title: "Optimal Drying Time",
    desc: "Allow paste to dry naturally for 45 minutes. We apply a light lemon-sugar glaze once dry to seal the intricate design firmly to your skin."
  },
  {
    step: "03",
    title: "Overnight Rest (6-8 Hours)",
    desc: "Keep the dry paste on for at least 6 to 8 hours (preferably overnight). Wrap with breathable medical tape or cotton if sleeping."
  },
  {
    step: "04",
    title: "Removal Without Water",
    desc: "Never wash henna off with water! Scrape off dry crust gently with a dull edge or butter knife, then massage with coconut oil or our herbal balm."
  },
  {
    step: "05",
    title: "The Clove Smoke (Laung Dhuni)",
    desc: "Hold hands above a warm pan with 4-5 cloves to let the aromatic clove fumes deepen the henna oxidation into a rich, dark mahogany tone."
  },
  {
    step: "06",
    title: "Avoid Water for 12 Hours",
    desc: "Protect hands from soapy water and dishwashing for the first 12-24 hours. The stain naturally peaks in darkness at the 48-hour mark."
  }
];

export const FAQS = [
  {
    question: "Where is the new salon located in Indore?",
    answer: "Our new luxury studio & salon is located at LIG Atal Dwar, Indore. It is situated right in the heart of Indore with easy connectivity to AB Road, Vijay Nagar, and Palasia. Walk-ins and pre-booked bridal sessions are welcome!"
  },
  {
    question: "Do I have to come to the salon, or can you come to my home?",
    answer: "Both options are available! You can either visit our comfortable air-conditioned salon at LIG Atal Dwar for a relaxed private studio experience, or our team can travel directly to your home, banquet hall, or hotel across Indore and nearby areas."
  },
  {
    question: "Is your henna 100% chemical and PPD-free?",
    answer: "Yes, absolutely! We strictly formulate our own cones using triple-sifted organic Sojat (Rajasthan) henna powder, filtered water, organic sugar, and pure grade essential oils (Eucalyptus, Tea Tree, Cajeput & Clove). No chemical black dyes, zero PPD, and completely safe for sensitive skin."
  },
  {
    question: "What are your new salon opening special offers?",
    answer: "For our Grand Opening, we are offering Flat 15% OFF on Royal Bridal Packages, a Complimentary Groom/Mother Mehndi bonus, and a Free Herbal Aftercare Stain Balm kit with every appointment."
  }
];
